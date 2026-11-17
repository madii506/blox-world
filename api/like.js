// BLOX · likes. One per visitor a day (hashed IP, never stored raw), one shared count.
// Works once a Postgres database (Neon via Vercel Storage) is connected to the project; until then it answers db:false
// and the page keeps the like in the visitor's own browser.
const crypto = require('crypto');

const DB_URL = () => process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.STORAGE_URL
  || (Object.entries(process.env).find(([k, v]) => /(DATABASE_URL|POSTGRES_URL)$/.test(k) && /^postgres/.test(v || '')) || [])[1];

let sql = null, ready = null;
function db() {
  const url = DB_URL(); if (!url) return null;
  if (!sql) { const { neon } = require('@neondatabase/serverless'); sql = neon(url); }
  if (!ready) ready = (async () => {
    await sql`create table if not exists blox_likes (id int primary key, n bigint not null default 0)`;
    await sql`create table if not exists blox_like_hits (h text primary key, at timestamptz not null default now())`;
    await sql`insert into blox_likes (id, n) values (1, 0) on conflict (id) do nothing`;
  })().catch(e => { ready = null; throw e; });
  return ready.then(() => sql);
}

function send(res, code, body, cache) {
  res.statusCode = code;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.setHeader('cache-control', cache || 'no-store');
  res.end(JSON.stringify(body));
}

module.exports = async (req, res) => {
  try {
    const q = await db();
    if (!q) return send(res, 200, { count: null, db: false }, 'public, s-maxage=30');
    if (req.method === 'POST') {
      const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '').split(',')[0].trim();
      const day = new Date().toISOString().slice(0, 10);
      const h = crypto.createHash('sha256').update('blox:' + day + ':' + ip + ':' + (process.env.BLOX_SALT || 'vice')).digest('hex').slice(0, 32);
      const hit = await q`insert into blox_like_hits (h) values (${h}) on conflict (h) do nothing returning h`;
      const rows = hit.length ? await q`update blox_likes set n = n + 1 where id = 1 returning n` : await q`select n from blox_likes where id = 1`;
      if (Math.random() < .02) await q`delete from blox_like_hits where at < now() - interval '3 days'`;
      return send(res, 200, { count: Number(rows[0].n), counted: !!hit.length, db: true });
    }
    const rows = await q`select n from blox_likes where id = 1`;
    return send(res, 200, { count: Number(rows[0] ? rows[0].n : 0), db: true }, 'public, s-maxage=10, stale-while-revalidate=60');
  } catch (e) {
    return send(res, 200, { count: null, db: false, error: 'unavailable' });
  }
};
