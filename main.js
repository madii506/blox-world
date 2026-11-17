// BLOX · boot: no landing page. The site opens on the streets (a voxel city where every live coin is a character and you drive); every terminal page is an app on the phone that opens over it
import { $, $$, on, esc, store, short, toast, CONFIG, copy, px, usd, icon, brand, reduced, img, cls, pct } from './core.js';
import * as api from './api.js';
import * as W from './wallet.js';
import * as T from './tools.js?v=2';

const html = document.documentElement;
const PAGES = ['map', 'overview', 'trade', 'pump', 'trending', 'perps', 'whales', 'hedge', 'bag', 'faq'];
const TITLES = { map: 'Streets', overview: 'Overview', trade: 'Trade', pump: 'Drops', trending: 'Hot', perps: 'Perps', whales: 'Most Wanted', hedge: 'Hedge', bag: 'Safehouse', faq: 'Intel' };
const hooks = {};                                   // page name -> { show, hide } registered by the page modules
export const pageHooks = hooks;
let page = null;

// ---------------------------------------------------------------- router
function go(p, { push = true } = {}) {
  if (p === 'market') { p = 'perps'; setTimeout(() => { const b = $('#perpView button[data-v=map]'); b && b.click(); }, 30); }
  if (!PAGES.includes(p)) p = 'map';
  if (page === p) { scrollTo(0, 0); return; }
  const prev = page; page = p;
  $$('.page[data-page]').forEach(s => { s.hidden = s.dataset.page !== p; });
  $$('#links a, #mSheet a, #tabbar a').forEach(a => a.classList.toggle('on', a.dataset.go === p)); $('#navTitle').textContent = TITLES[p];
  html.dataset.view = p;
  if (prev && (prev === 'map') !== (p === 'map') && !reduced()) { const f = $('#wipe'); f.classList.remove('go'); void f.offsetWidth; f.classList.add('go'); }
  html.classList.toggle('panel', p !== 'map'); if (world) world.pause(p !== 'map');
  if (p !== 'map') { $('#phone').hidden = true; $('#hPhone').classList.remove('on'); html.classList.remove('feed-open'); $('#hTip').hidden = true; }
  if (push) history.replaceState(null, '', location.pathname + location.search + '#' + p);
  scrollTo(0, 0);
  if (prev && hooks[prev] && hooks[prev].hide) hooks[prev].hide();
  if (hooks[p] && hooks[p].show) hooks[p].show();
  const sec = $(`.page[data-page="${p}"]`); if (sec && !reduced()) { sec.classList.remove('enter'); void sec.offsetWidth; sec.classList.add('enter'); }
}
window.__go = go;
document.addEventListener('click', e => {
  const a = e.target.closest('a[data-go]'); if (!a) return;
  e.preventDefault(); $('#mSheet').hidden = true; go(a.dataset.go);
});
addEventListener('hashchange', () => { const p = location.hash.slice(1); if (PAGES.includes(p) || p === 'market') go(p, { push: false }); });

let booted = false;
const startPage = () => { const h = location.hash.slice(1); return PAGES.includes(h) ? h : h === 'market' ? 'market' : new URLSearchParams(location.search).has('t') || T.getSet().intro === false ? 'trade' : 'map'; };
// ---------------------------------------------------------------- the world: a gate, a story you scroll through, then the city is yours
// every live feed becomes part of the city: pump.fun coins drive the streets (new pairs in gold, migrated in cyan, hot and
// trending green or pink by their move), perps sail the harbor, whales fly the helicopters, the biggest coins hold the
// billboards, the market's mood sets fireworks, riots and rain, and real pump.fun events and X's crypto trends pop up as bubbles.
let world = null, pinned = null, feedTab = 'new', chasedMint = null;
const F = { new: [], hot: [], trending: [], migrated: [], bonding: [] };          // pump.fun right now
let perpList = [], whales = [], xTrends = [], launches = [];                        // launches: the live websocket stream, newest first
const heatOf = t => { const s = t.s5m || {}; return (s.numBuys || 0) + (s.numSells || 0); };
const BAD = /hitler|nazi|swastika|\b1488\b|\bkkk\b|holocaust|n[i1!]gg|f[a@]gg[o0]t|\bpedo|\brape\b|\bisis\b/i;
const isPump = t => t && (t.launchpad === 'pump.fun' || /pump$/.test(t.mint || ''));
const solUsd = () => api.mids.SOL || (api.perps.by.SOL || {}).mark || null;
function shape(t, cat, hmax) {
  const h = hmax ? heatOf(t) / hmax : 0, s5 = t.s5m || {}, s1 = t.s1h || {}, has5 = s5.priceChange != null, ch = has5 ? s5.priceChange : s1.priceChange;
  return { ...t, cat, isNew: cat === 'new', iconUrl: t.iconUrl || img(t.icon, t.mint), heat: h, stars: Math.max(1, Math.min(5, Math.ceil(h * 5))), up: (ch || 0) >= 0, chg: ch ?? null, tf: has5 ? '5 min' : '1 hour' };
}
// Jupiter's gems feed carries pump.fun's three boards; the token sits in baseAsset
const fromGem = (p, cat) => { const b = p.baseAsset || {}; return { mint: b.id, name: b.name || '', symbol: b.symbol || '', icon: /^https:\/\//.test(b.icon || '') ? b.icon : '', mcap: +(b.mcap ?? b.fdv) || null, liq: b.liquidity ?? null, holders: b.holderCount ?? null,
  s5m: b.stats5m || {}, s1h: b.stats1h || {}, created: Date.parse((b.firstPool && b.firstPool.createdAt) || b.createdAt || '') || null, grad: Date.parse(b.graduatedAt || '') || null, prog: p.bondingCurve != null ? +p.bondingCurve : null, launchpad: 'pump.fun' }; };
async function jx(url, opt = {}, ms = 12000) { const c = new AbortController(), t = setTimeout(() => c.abort(), ms); try { const r = await fetch(url, { ...opt, signal: c.signal }); if (!r.ok) throw new Error('HTTP ' + r.status); return await r.json(); } finally { clearTimeout(t); } }
const n0 = v => v == null || !isFinite(v) ? '—' : Math.round(v).toLocaleString('en-US');
const hbar = n => `<span class="hbar" aria-label="heat ${n} of 5">${[0, 1, 2, 3, 4].map(k => `<i${k < n ? ' class="on"' : ''}></i>`).join('')}</span>`;
// a coin's logo; if it can't be loaded, a letter badge in the coin's own colour takes its place (and the logo is tried once more)
const hueOf = s => { let h = 0; s = String(s || ''); for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h % 360; };
const imgFix = new Map();                                                           // logo url → '' (no logo) or the url that loaded on a retry
const avaFb = (c, big) => `<i class="ava${big ? ' big' : ''}" style="--h:${hueOf(c.mint || c.symbol)}">${esc((c.symbol || '?').slice(0, 2))}</i>`;
const ava = (c, big) => { const u = c.iconUrl && imgFix.has(c.iconUrl) ? imgFix.get(c.iconUrl) : c.iconUrl; return u ? `<img src="${esc(u)}" alt="" loading="lazy" referrerpolicy="no-referrer" data-sym="${esc((c.symbol || '?').slice(0, 2))}" data-h="${hueOf(c.mint || c.symbol)}" data-o="${esc(c.iconUrl)}"${big ? ' data-big="1"' : ''}>` : avaFb(c, big); };
document.addEventListener('error', e => {
  const im = e.target; if (!(im instanceof HTMLImageElement) || !im.dataset.sym) return;
  const i = document.createElement('i'); i.className = 'ava' + (im.dataset.big ? ' big' : ''); i.style.setProperty('--h', im.dataset.h || 260); i.textContent = im.dataset.sym; im.replaceWith(i);
  const o = im.dataset.o || im.getAttribute('src'); if (imgFix.has(o)) return; imgFix.set(o, '');
  setTimeout(() => { const t = new Image(); t.referrerPolicy = 'no-referrer'; t.onload = () => { imgFix.set(o, t.src); if (i.isConnected) { im.src = t.src; i.replaceWith(im); } }; t.src = o + (o.includes('?') ? '&' : '?') + 'r=' + Date.now() % 1e5; }, 9000);
}, true);
const pava = p => `<i class="ava perp">${esc(p.name.replace(/^k/, '').slice(0, 3))}</i>`;
const wname = w => w.n ? w.n : short(w.a);
const money = v => (v < 0 ? '-' : '+') + usd(Math.abs(v));
const fundStr = p => p.apr == null || !isFinite(p.apr) ? '—' : (p.apr > 0 ? '+' : '') + p.apr.toFixed(1) + '% APR';
const empty = t => `<p class="h-empty">${t}</p>`;
const ago = t => { if (!t) return '—'; const s = Math.max(0, (Date.now() - t) / 1000); return s < 60 ? Math.floor(s) + 's' : s < 3600 ? Math.floor(s / 60) + 'm' : s < 86400 ? Math.floor(s / 3600) + 'h' : Math.floor(s / 86400) + 'd'; };
const allCoins = () => { const seen = new Set(), out = []; for (const k of ['new', 'migrated', 'hot', 'trending']) for (const c of F[k]) if (!seen.has(c.mint)) { seen.add(c.mint); out.push(c); } return out; };
const findCoin = m => allCoins().find(c => c.mint === m) || launches.find(c => c.mint === m) || null;
const live = { gems: 0, hot: 0, trend: 0, perps: 0, ws: 0, x: 0 };

// ---------------------------------------------------------------- the feeds
async function loadGems() {
  try {
    const f = { timeframe: '24h', launchpads: ['pump.fun'] };
    const d = await jx('https://datapi.jup.ag/v1/pools/gems', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ recent: f, aboutToGraduate: f, graduated: f }) });
    const pick = k => ((d[k] && d[k].pools) || []).filter(p => p && p.baseAsset && p.baseAsset.id).map(p => fromGem(p, k)).filter(t => (t.symbol || t.name) && !BAD.test(t.symbol + ' ' + t.name));
    const rec = pick('recent').sort((a, b) => (b.created || 0) - (a.created || 0)), grad = pick('graduated').sort((a, b) => (b.grad || 0) - (a.grad || 0)), bond = pick('aboutToGraduate').sort((a, b) => (b.prog || 0) - (a.prog || 0));
    // the websocket's launches lead the new pairs (they are seconds old); the gems list fills the rest
    const seen = new Set(); F.new = [...launches.slice(0, 10), ...rec].filter(t => !seen.has(t.mint) && seen.add(t.mint)).slice(0, 24).map(t => shape(t, 'new'));
    const hm = Math.max(1, ...grad.map(heatOf)); F.migrated = grad.slice(0, 20).map(t => shape(t, 'migrated', hm));
    F.bonding = bond.slice(0, 10).map(t => shape(t, 'bonding'));
    for (const b of F.bonding) if ((b.prog || 0) >= 92 && !shownBond.has(b.mint)) { shownBond.add(b.mint); queue({ kind: 'bond', c: b }); }
    live.gems = Date.now(); paint();
  } catch { }
}
const shownBond = new Set();
async function loadTrending() {
  const [h, t] = await Promise.allSettled([api.trending('5m', 100), api.trending('1h', 100)]);
  if (h.status === 'fulfilled') { const L = (h.value || []).filter(isPump).filter(t => !BAD.test(t.symbol + ' ' + t.name)), hm = Math.max(1, ...L.map(heatOf)); F.hot = L.slice(0, 30).map(t => shape(t, 'hot', hm)); live.hot = Date.now(); }
  if (t.status === 'fulfilled') { const L = (t.value || []).filter(isPump).filter(t => !BAD.test(t.symbol + ' ' + t.name)), hm = Math.max(1, ...L.map(heatOf)); F.trending = L.slice(0, 30).map(t => shape(t, 'trending', hm)); live.trend = Date.now(); if (world && world.setBanner && F.trending[0]) world.setBanner(F.trending[0]); }
  mood(); paint();
}
// the mood of the trenches: how much of the last 5 minutes of trading went into hot coins that are up
let moodV = null;
function mood() {
  let up = 0, all = 0; for (const c of F.hot) { const w = heatOf(c) || 1; all += w; if (c.up) up += w; }
  if (!all) return; moodV = up / all; if (world) world.setMood(moodV);
}
on('perps', P => { perpList = (P.list || []).filter(p => p.oi > 0).sort((a, b) => b.oi - a.oi); live.perps = Date.now(); if (world) world.setPerps(perpList); paint(); });
// pump.fun whales: known traders' public wallets. Balance and biggest bags from Jupiter, recent trades read from Solana by
// /api/pwhales, and every new buy or sell live from PumpPortal's stream the second it lands
const PW = [{ a: '2fg5QD1eD7rzNNCsvnhmXFm5hqNgwTTG8p7kQ6f3rx6f', n: 'Cupsey' }, { a: 'CyaE1VxvBrahnPWkqm5VsdCvyS2QmNht2UFrKJHga54o', n: 'Cented' }].map(w => ({ ...w, sol: null, bags: [], trades: [] }));
const PWset = new Set(PW.map(w => w.a)), symCache = new Map();
async function symOf(mint) {
  const c = findCoin(mint); if (c) return { symbol: c.symbol, iconUrl: c.iconUrl };
  if (symCache.has(mint)) return symCache.get(mint);
  let v = { symbol: short(mint), iconUrl: img('', mint) };
  try { const r = await api.tokens([mint]); const t = r && r[0]; if (t && t.symbol) { v = { symbol: String(t.symbol).slice(0, 14), iconUrl: img(t.icon, mint) }; symCache.set(mint, v); } } catch { }
  return v;                         // a miss (often a rate limit) is not remembered, so the next refresh tries again
}
async function symPrime(mints) {     // one Jupiter lookup for every unknown mint instead of one each
  const need = [...new Set(mints)].filter(m => m && !findCoin(m) && !symCache.has(m)); if (!need.length) return;
  try { for (const t of await api.tokens(need)) if (t && t.mint && t.symbol) symCache.set(t.mint, { symbol: String(t.symbol).slice(0, 14), iconUrl: img(t.icon, t.mint) }); } catch { }
}
async function loadWhales() {
  await Promise.allSettled(PW.map(async w => {
    const h = await api.holdings(w.a); if (!h) return; if (h.uiAmount != null) w.sol = +h.uiAmount;
    const toks = Object.entries(h.tokens || {}).map(([mint, accs]) => ({ mint, ui: (accs || []).reduce((s, x) => s + (+x.uiAmount || 0), 0) })).filter(x => x.ui > 0 && !/^So1111/.test(x.mint));
    if (!toks.length) { w.bags = []; return; }
    const px = await api.price(toks.slice(0, 50).map(x => x.mint)).catch(() => ({}));
    w.bags = toks.map(x => ({ ...x, usd: x.ui * (((px || {})[x.mint] || {}).usdPrice || 0) })).filter(x => x.usd > 1).sort((a, b) => b.usd - a.usd).slice(0, 4);
    await symPrime(w.bags.map(b => b.mint)); for (const b of w.bags) { const v = await symOf(b.mint); b.sym = v.symbol; b.iconUrl = v.iconUrl; }
  }));
  try {
    const d = await jx('/api/pwhales?a=' + PW.map(w => w.a).join(','), {}, 20000);
    for (const r of d.rows || []) { const w = PW.find(x => x.a === r.a); if (!w) continue; if (w.sol == null && r.sol != null) w.sol = r.sol; for (const t of r.trades || []) { const o = w.trades.find(x => x.sig === t.sig); if (o) { if (t.sym && (!o.sym || o.sym.includes('…'))) { o.sym = t.sym; o.iconUrl = img(t.icon, t.mint); } } else { if (t.sym) t.iconUrl = img(t.icon, t.mint); w.trades.push(t); } } w.trades.sort((a, b) => b.t - a.t); w.trades.length = Math.min(w.trades.length, 12); }
  } catch { }
  await symPrime(PW.flatMap(w => w.trades.filter(t => !t.sym || t.sym.includes('…')).map(t => t.mint)));
  await Promise.all(PW.flatMap(w => w.trades.filter(t => !t.sym || t.sym.includes('…')).map(async t => { const v = await symOf(t.mint); t.sym = v.symbol; t.iconUrl = v.iconUrl; })));
  paintWhales();
}
function paintWhales() { if (world && world.setWhales) world.setWhales(PW.map(w => ({ a: w.a, n: w.n, sol: w.sol, last: w.trades[0] || null }))); paintStory(); }
async function onWhaleTrade(d) {
  const w = PW.find(x => x.a === d.traderPublicKey); if (!w || w.trades.some(x => x.sig === d.signature)) return;
  const v = await symOf(d.mint), t = { sig: d.signature, t: Date.now(), mint: d.mint, side: d.txType, sol: +d.solAmount || 0, sym: v.symbol, iconUrl: v.iconUrl };
  w.trades.unshift(t); w.trades.length = Math.min(w.trades.length, 12);
  queue({ kind: 'whale', w, t, urgent: true }); paintWhales();
}
// X's crypto trends, read from the public trend lists of a dozen countries and filtered down to crypto
async function loadTrends() {
  try { const d = await jx('/api/trends'); xTrends = (d.items || []).slice(0, 12); live.x = Date.now(); paint(); } catch { }
}
// every new pump.fun coin and every migration, the second it happens (PumpPortal's public data stream)
function pumpStream() {
  let ws = null, tries = 0;
  const open = () => {
    try { ws = new WebSocket('wss://pumpportal.fun/api/data'); } catch { return; }
    ws.onopen = () => { tries = 0; live.ws = Date.now(); if (!streamSince) streamSince = Date.now(); ws.send(JSON.stringify({ method: 'subscribeNewToken' })); ws.send(JSON.stringify({ method: 'subscribeAccountTrade', keys: PW.map(w => w.a) })); ws.send(JSON.stringify({ method: 'subscribeMigration' })); };
    ws.onmessage = e => {
      let d; try { d = JSON.parse(e.data); } catch { return; } if (!d || !d.mint) return; live.ws = Date.now();
      if (d.traderPublicKey && PWset.has(d.traderPublicKey) && /^(buy|sell)$/.test(d.txType || '')) return onWhaleTrade(d);
      if (d.txType === 'create') onLaunch(d); else if (/migrat/i.test(d.txType || '') || d.pool === 'pump-amm') onMigrate(d);
    };
    ws.onclose = () => { ws = null; setTimeout(open, Math.min(30000, 2500 * 2 ** tries++)); };
    ws.onerror = () => { try { ws.close(); } catch { } };
  };
  open();
  document.addEventListener('visibilitychange', () => { if (!document.hidden && !ws) open(); });
}
function onLaunch(d) {
  if (!d.symbol || BAD.test(d.symbol + ' ' + (d.name || ''))) return;
  // its logo comes out of its metadata, read by our proxy (racing IPFS gateways) so it shows the moment the character arrives
  const meta = /^(https|ipfs|ar):\/\//.test(d.uri || '') ? '/api/img?j=' + encodeURIComponent(d.uri) + '&m=' + d.mint : img('', d.mint);
  const sol = solUsd(), t = { mint: d.mint, name: d.name || '', symbol: String(d.symbol).slice(0, 14), mcap: d.marketCapSol && sol ? d.marketCapSol * sol : null, created: Date.now(), s5m: {}, s1h: {}, uri: d.uri, iconUrl: meta };
  launches.unshift(t); if (launches.length > 30) launches.pop();
  latestLaunch = t; launchN++; launchTs.push(Date.now()); if (launchTs.length > 600) launchTs.splice(0, 300);
  if (world && world.launched) world.launched(t);
  const c = shape(t, 'new'); F.new = [c, ...F.new.filter(x => x.mint !== t.mint)].slice(0, 24);
  syncSoon(); paintStory();
}
let latestLaunch = null, launchN = 0, streamSince = 0, migSeen = 0;
const launchTs = [], departs = [];                                                    // launch times, and the migrations seen live (they take off)
const perMin = () => { if (!streamSince) return null; const sec = Math.min(60, (Date.now() - streamSince) / 1000); return sec < 15 ? null : Math.round(launchTs.filter(t => t > Date.now() - sec * 1000).length / sec * 60); };   // a real rate, once there are 15s to measure
async function onMigrate(d) {
  let c = findCoin(d.mint);
  if (!c) { try { const r = await api.tokens([d.mint]); if (r && r[0]) c = shape({ ...r[0], launchpad: 'pump.fun' }, 'migrated'); } catch { } }
  if (!c) return; c = { ...c, cat: 'migrated', isNew: false, grad: Date.now() };
  F.migrated = [c, ...F.migrated.filter(x => x.mint !== c.mint)].slice(0, 20); F.new = F.new.filter(x => x.mint !== c.mint);
  queue({ kind: 'migrated', c, urgent: true }); syncSoon();
  migSeen++; departs.unshift({ c, at: Date.now() }); if (departs.length > 8) departs.pop();
  if (world && world.takeoff) world.takeoff(c);
  paintStory();
}
let syncT = 0;
function syncSoon() { if (syncT) return; syncT = setTimeout(() => { syncT = 0; sync(); }, 2500); }
function sync() {
  if (!world) return;
  world.setCoins(allCoins());
  const ch = world.chased(); chasedMint = ch ? ch.mint : null;
}
function paint() { sync(); drawFeed(); paintStory(); paintGate(); }

// ---------------------------------------------------------------- bubbles over the city: pump.fun events and X's crypto trends, real and right now
const bq = [];
function queue(m) { if (m.urgent) bq.unshift(m); else bq.push(m); if (bq.length > 8) bq.length = 8; }
let bubbleI = 0;
function bubbleTick() {
  if (!world || document.hidden || html.classList.contains('panel') || html.classList.contains('gated')) return;
  let m = bq.shift();
  if (!m) {                                                     // nothing urgent: the newest launch, then X, then a mover, in turn
    const k = bubbleI++ % 3;
    if (k === 0 && latestLaunch && Date.now() - latestLaunch.created < 15000) m = { kind: 'new', c: findCoin(latestLaunch.mint) || shape(latestLaunch, 'new') };
    else if (k === 1 && xTrends.length) m = { kind: 'x', x: xTrends[(bubbleI >> 2) % xTrends.length] };
    else { const L = F.hot.filter(c => c.chg != null).sort((a, b) => b.chg - a.chg); const c = L[(bubbleI >> 1) % Math.max(1, Math.min(6, L.length))]; if (c && c.chg > 3) m = { kind: 'hot', c }; }
  }
  if (!m) return;
  const c = m.c;
  if (m.kind === 'new') world.bubble({ kind: 'new', kicker: 'just launched', title: '$' + c.symbol, sub: (c.mcap ? usd(c.mcap) + ' cap · ' : '') + 'new pair on pump.fun', iconUrl: c.iconUrl, mark: c.symbol.slice(0, 2), mint: c.mint });
  else if (m.kind === 'migrated') world.bubble({ kind: 'migrated', kicker: 'migrated', title: '$' + c.symbol, sub: 'graduated to PumpSwap' + (c.mcap ? ' · ' + usd(c.mcap) : ''), iconUrl: c.iconUrl, mark: c.symbol.slice(0, 2), mint: c.mint, life: 8 });
  else if (m.kind === 'bond') world.bubble({ kind: 'bond', kicker: Math.round(c.prog) + '% bonded', title: '$' + c.symbol, sub: 'about to migrate · ' + usd(c.mcap), iconUrl: c.iconUrl, mark: c.symbol.slice(0, 2), mint: c.mint });
  else if (m.kind === 'hot') world.bubble({ kind: 'hot', kicker: pct(c.chg, 1) + ' in ' + c.tf, title: '$' + c.symbol, sub: n0(heatOf(c)) + ' trades · ' + usd(c.mcap) + ' cap', iconUrl: c.iconUrl, mark: c.symbol.slice(0, 2), mint: c.mint });
  else if (m.kind === 'x') world.bubble({ kind: 'x', kicker: 'trending on X', title: m.x.name, sub: m.x.where, mark: '#', life: 7.5 });
  else if (m.kind === 'whale') world.bubble({ kind: m.t.side === 'buy' ? 'hot' : 'bond', kicker: `${m.w.n} ${m.t.side === 'buy' ? 'bought' : 'sold'}`, title: '$' + (m.t.sym || '…'), sub: `${m.t.sol.toFixed(2)} SOL · pump.fun whale`, iconUrl: m.t.iconUrl, mark: (m.t.sym || '?').slice(0, 2), mint: m.t.mint, life: 8.5 });
}
setInterval(bubbleTick, 3300);
const hottest = () => F.hot.slice().sort((a, b) => heatOf(b) - heatOf(a))[0] || null;
function arena() { if (world && world.setArena && !document.hidden) world.setArena({ perMin: perMin(), migrated: migSeen, mood: moodV, hot: hottest() }); }
setInterval(arena, 2000);

// ---------------------------------------------------------------- the feed (free roam): New pairs, Hot, Trending, Migrated
$('#hTabs').addEventListener('click', e => { const b = e.target.closest('button[data-t]'); if (!b) return; feedTab = b.dataset.t; $$('#hTabs button').forEach(x => x.classList.toggle('on', x === b)); drawFeed(true); });
const prevChg = new Map();
function drawFeed(anim) {
  const L = $('#hList'); if (anim || !drawFeed.done) { drawFeed.done = 1; L.classList.remove('anim'); void L.offsetWidth; L.classList.add('anim'); clearTimeout(drawFeed.t); drawFeed.t = setTimeout(() => L.classList.remove('anim'), 2200); }
  const src = F[feedTab] || [];
  $('#hCount').textContent = src.length || '—';
  L.innerHTML = src.map((c, i) => {
    const right = feedTab === 'new' ? `<em class="age">${ago(c.created)}</em>` : feedTab === 'migrated' ? `<em class="age">${ago(c.grad)}</em>` : `<em class="${cls(c.chg)}">${pct(c.chg, 1)}</em>`;
    const sub = feedTab === 'new' ? `<span class="sub">${c.prog != null ? Math.round(c.prog) + '% bonded' : 'new pair'}</span>` : feedTab === 'migrated' ? `<span class="sub">on PumpSwap</span>` : hbar(c.stars);
    return `<button type="button" data-m="${esc(c.mint)}" style="--i:${i}">${ava(c)}<b>$${esc(c.symbol)}${c.mint === chasedMint ? ' <u class="cop">COPS</u>' : ''}</b>${right}${sub}<small>${usd(c.mcap)}</small></button>`;
  }).join('') || empty(feedTab === 'new' ? 'Waiting for the next pump.fun launch…' : 'The pump.fun feed is loading…');
  src.forEach(c => { const p = prevChg.get(c.mint); if (p != null && c.chg != null && Math.abs(c.chg - p) > .05) { const b = L.querySelector(`button[data-m="${CSS.escape(c.mint)}"]`); b && b.classList.add(c.chg > p ? 'fl-up' : 'fl-dn'); } prevChg.set(c.mint, c.chg); });
}
setInterval(() => { if (feedTab === 'new' || feedTab === 'migrated') $$('#hList em.age').forEach((e, i) => { const c = (F[feedTab] || [])[i]; if (c) e.textContent = ago(feedTab === 'new' ? c.created : c.grad); }); }, 1000);
$('#hList').addEventListener('click', e => {
  const b = e.target.closest('button[data-m]'); if (!b) return; html.classList.remove('feed-open');
  const c = findCoin(b.dataset.m); if (c) { if (world) world.follow(c.mint); card({ kind: 'coin', coin: c }); }
});

// ---------------------------------------------------------------- cards: a coin, a perp, a whale, or a coin in your own garage
const X = '<button class="hc-x" type="button" data-a="x" aria-label="Close">✕</button>';
const cell = (k, v, c = '') => `<div><span>${k}</span><b class="${c}">${v}</b></div>`;
function card(it) {
  pinned = it; const el = $('#hCard'); if (!it) { el.hidden = true; return; }
  togglePhone(false); $('#hMissions').hidden = true;
  el.hidden = false; el.className = 'h-card k-' + it.kind;
  if (it.kind === 'coin') {
    const c = it.coin, s5 = c.s5m || {}, s1 = c.s1h || {}, tag = c.cat === 'new' ? 'NEW PAIR' : c.cat === 'migrated' ? 'MIGRATED' : c.cat === 'trending' ? 'TRENDING' : 'HOT';
    const g = c.cat === 'new' ? cell('Market cap', usd(c.mcap)) + cell('Launched', ago(c.created) + ' ago') + cell('Bonded', c.prog != null ? Math.round(c.prog) + '%' : '—') + cell('5m', pct(s5.priceChange), cls(s5.priceChange)) + cell('Trades 5m', n0(heatOf(c))) + cell('Holders', n0(c.holders))
      : cell('Market cap', usd(c.mcap)) + cell('5m', pct(s5.priceChange), cls(s5.priceChange)) + cell('1h', pct(s1.priceChange), cls(s1.priceChange)) + cell(c.cat === 'migrated' ? 'Migrated' : 'Liquidity', c.cat === 'migrated' ? ago(c.grad) + ' ago' : usd(c.liq)) + cell('Trades 5m', n0(heatOf(c))) + cell('Holders', n0(c.holders));
    el.innerHTML = `${X}<div class="hc-h">${ava(c, 1)}<div><b>$${esc(c.symbol)}</b><span>${esc(c.name || '')} · <u class="t-${c.cat}">${tag}</u>${c.mint === chasedMint ? ' · <u class="cop">WANTED</u>' : ''}</span></div><em>${hbar(c.stars)}<small>heat</small></em></div>
      <div class="hc-g">${g}</div>
      <div class="hc-a"><button class="btn-steal" data-a="steal" type="button">Ape in</button><button class="btn-ghost2" data-a="chart" type="button">Chart</button><button class="btn-ghost2 ca" data-a="ca" type="button">${short(c.mint)}</button></div>`;
  } else if (it.kind === 'perp') {
    const p = it.perp;
    el.innerHTML = `${X}<div class="hc-h">${pava(p)}<div><b>${esc(p.name)}</b><span>Perp on Hyperliquid · up to ${p.maxLev}x</span></div><em><b class="${cls(p.chg)}">${pct(p.chg, 1)}</b><small>24h</small></em></div>
      <div class="hc-g">${cell('Mark', px(p.mark))}${cell('Funding', fundStr(p), p.apr > 0 ? 'up' : p.apr < 0 ? 'dn' : '')}${cell('Open interest', usd(p.oi))}${cell('24h volume', usd(p.vol))}${cell('Max leverage', p.maxLev + 'x')}${cell('Who pays', p.fund > 0 ? 'longs pay' : p.fund < 0 ? 'shorts pay' : '—')}</div>
      <div class="hc-a"><button class="btn-steal" data-a="long" type="button">Long</button><button class="btn-short" data-a="short" type="button">Short</button><button class="btn-ghost2" data-a="board" type="button">Board</button></div>`;
  } else if (it.kind === 'whale') {
    const w = PW.find(x => x.a === it.whale.a) || it.whale;
    const tr = (w.trades || []).slice(0, 4).map(t => `<div class="hw-t"><b class="${t.side === 'buy' ? 'up' : 'dn'}">${t.side === 'buy' ? 'Bought' : 'Sold'}</b><span>$${esc(t.sym || short(t.mint))}</span><em>${t.sol.toFixed(2)} SOL</em><small>${ago(t.t)}</small></div>`).join('') || '<p class="h-empty">No trades seen yet. They land here live.</p>';
    el.innerHTML = `${X}<div class="hc-h"><i class="ava whale big">${esc(w.n.slice(0, 2))}</i><div><b>${esc(w.n)}</b><span>pump.fun whale · ${short(w.a)}</span></div><em><b>${w.sol != null ? n0(w.sol) : '—'}</b><small>SOL</small></em></div>
      <div class="hw-tr">${tr}</div>
      ${(w.bags || []).length ? `<div class="hc-g">${w.bags.slice(0, 3).map(b => cell('$' + esc(b.sym || short(b.mint)), usd(b.usd))).join('')}</div>` : ''}
      <div class="hc-a"><a class="btn-steal" href="https://pump.fun/profile/${esc(w.a)}" target="_blank" rel="noopener">pump.fun ↗</a><button class="btn-ghost2" data-a="watchw" type="button">Watch wallet</button><button class="btn-ghost2" data-a="copyw" type="button">Copy address</button></div>`;
  } else if (it.kind === 'mine') {
    const r = it.row;
    el.innerHTML = `${X}<div class="hc-h">${ava({ iconUrl: r.iconUrl, symbol: r.sym }, 1)}<div><b>$${esc(r.sym)}</b><span>In your safehouse</span></div><em><b class="${cls(r.ch)}">${pct(r.ch, 1)}</b><small>24h</small></em></div>
      <div class="hc-g">${cell('Value', usd(r.usd))}${cell('Amount', n0(r.ui))}${cell('24h', pct(r.ch), cls(r.ch))}</div>
      <div class="hc-a"><button class="btn-steal" data-a="sell" type="button">Cash out</button><button class="btn-ghost2" data-a="hedge" type="button">Hedge</button><button class="btn-ghost2" data-a="chart" type="button">Chart</button></div>`;
  }
}
function act(it, a) {
  if (a === 'x') { card(null); if (world) world.unfollow(); return; }
  if (a === 'ca') return copy(it.coin.mint);
  if (a === 'copyw') return copy(it.whale.a);
  boot();
  if (it.kind === 'coin' || it.kind === 'mine') {
    const m = it.kind === 'coin' ? it.coin.mint : it.row.mint; go('trade');
    setTimeout(() => { if (!window.__buxPick) return; if (a === 'steal') window.__buxPick(m, 'ape'); else if (a === 'sell') { window.__buxPick(m, 'ape'); setTimeout(() => { const s = document.querySelector('#apeSide button[data-s=sell]'); s && s.click(); }, 150); } else if (a === 'hedge') window.__buxPick(m, 'hedge'); else window.__buxPick(m); }, 150);
  } else if (it.kind === 'perp') {
    if (a === 'board') return go('perps');
    go('trade'); setTimeout(() => window.__buxPerp && window.__buxPerp(it.perp.name, a), 200);
  } else if (it.kind === 'whale' && a === 'watchw') {
    go('whales'); setTimeout(() => { const b = $('#whTab button[data-t=sol]'); b && b.click(); const q = $('#soQ'); if (q) { q.value = it.whale.a; const g = $('#soGo'); g && g.click(); } }, 450);
  }
}
$('#hCard').addEventListener('click', e => { const b = e.target.closest('[data-a]'); if (b && pinned) act(pinned, b.dataset.a); });
function tip(it, x, y) {
  const el = $('#hTip'); if (!it || pinned || !html.classList.contains('roam')) { el.hidden = true; return; }
  el.hidden = false;
  el.innerHTML = it.kind === 'coin' ? `<b>$${esc(it.coin.symbol)}</b><em class="${cls(it.coin.chg)}">${it.coin.cat === 'new' ? 'new' : pct(it.coin.chg, 1)}</em><span>${usd(it.coin.mcap)}</span><small>click to follow</small>`
    : it.kind === 'perp' ? `<b>${esc(it.perp.name)}</b><em class="${cls(it.perp.chg)}">${pct(it.perp.chg, 1)}</em><span>${usd(it.perp.oi)} OI</span><small>perp · click</small>`
    : it.kind === 'whale' ? `<b>${esc(it.whale.n || short(it.whale.a))}</b><em>${it.whale.sol != null ? n0(it.whale.sol) + ' SOL' : ''}</em><small>pump.fun whale · click</small>`
    : it.kind === 'safehouse' ? `<b>Your safehouse</b><small>connect a wallet to park your bag here</small>`
    : `<b>$${esc(it.row.sym)}</b><span>${usd(it.row.usd)}</span><small>your bag</small>`;
  el.style.left = Math.min(innerWidth - 240, x + 16) + 'px'; el.style.top = (y + 14) + 'px';
}

// ---------------------------------------------------------------- missions: what's happening on the streets right now (free roam)
function missions() {
  const out = [], hot = F.hot.filter(c => c.chg != null).sort((a, b) => b.chg - a.chg);
  if (hot[0] && hot[0].chg > 0) out.push({ type: 'pump', c: hot[0] });
  const dn = hot[hot.length - 1]; if (dn && dn.chg < 0) out.push({ type: 'dump', c: dn });
  const ch = world && world.chased && world.chased(); if (ch) out.push({ type: 'chase', c: ch });
  const busy = F.hot.slice().sort((a, b) => heatOf(b) - heatOf(a))[0]; if (busy) out.push({ type: 'busy', c: busy });
  if (F.new[0]) out.push({ type: 'drop', c: F.new[0] });
  if (F.bonding[0]) out.push({ type: 'bond', c: F.bonding[0] });
  if (F.migrated[0]) out.push({ type: 'mig', c: F.migrated[0] });
  const pm = perpList.slice(0, 30).filter(p => p.chg != null).sort((a, b) => Math.abs(b.chg) - Math.abs(a.chg))[0]; if (pm) out.push({ type: 'perp', p: pm });
  const pf = perpList.slice(0, 60).filter(p => isFinite(p.apr)).sort((a, b) => Math.abs(b.apr) - Math.abs(a.apr))[0]; if (pf) out.push({ type: 'fund', p: pf });
  const lw = PW.flatMap(w => w.trades.map(t => ({ w, t }))).sort((a, b) => b.t.t - a.t.t)[0]; if (lw) out.push({ type: 'whale', w: lw.w, t: lw.t });
  return out;
}
function mtext(m) {
  const c = m.c, p = m.p, w = m.w;
  switch (m.type) {
    case 'pump': return { t: `$${c.symbol} is pumping`, s: `${pct(c.chg, 1)} in ${c.tf} · ${usd(c.mcap)} cap`, k: 'up', go: 'Ape in' };
    case 'dump': return { t: `$${c.symbol} is dumping`, s: `${pct(c.chg, 1)} in ${c.tf} · ${usd(c.mcap)} cap`, k: 'dn', go: 'Follow it' };
    case 'chase': return { t: `Cops are chasing $${c.symbol}`, s: `the biggest dump on the streets · ${pct(c.chg, 1)}`, k: 'cop', go: 'Watch' };
    case 'busy': return { t: `$${c.symbol} is the busiest street`, s: `${n0(heatOf(c))} trades in 5 min`, k: 'hot', go: 'Follow it' };
    case 'drop': return { t: `New pair: $${c.symbol}`, s: `launched ${ago(c.created)} ago${c.mcap ? ' · ' + usd(c.mcap) + ' cap' : ''}`, k: 'new', go: 'Catch it' };
    case 'bond': return { t: `$${c.symbol} is ${Math.round(c.prog || 0)}% bonded`, s: `about to migrate · ${usd(c.mcap)} cap`, k: 'hot', go: 'Catch it' };
    case 'mig': return { t: `$${c.symbol} migrated`, s: `graduated to PumpSwap ${ago(c.grad)} ago`, k: 'new', go: 'Follow it' };
    case 'perp': return { t: `${p.name} ${p.chg >= 0 ? 'ripped' : 'sank'} ${pct(p.chg, 1)} today`, s: `${usd(p.oi)} open interest in the harbor`, k: p.chg >= 0 ? 'up' : 'dn', go: p.chg >= 0 ? 'Long it' : 'Short it' };
    case 'fund': return { t: `${p.name} funding is ${fundStr(p)}`, s: p.fund > 0 ? 'longs are paying shorts' : 'shorts are paying longs', k: 'hot', go: 'Open the perp' };
    case 'whale': return { t: `${w.n} ${m.t.side === 'buy' ? 'bought' : 'sold'} $${m.t.sym || '…'}`, s: `${m.t.sol.toFixed(2)} SOL · ${ago(m.t.t)} ago · pump.fun whale`, k: 'whale', go: 'Most wanted' };
  }
  return null;
}
function mava(m) { return m.c ? ava(m.c) : m.p ? pava(m.p) : `<i class="ava whale">${esc((m.w && m.w.n || 'W').slice(0, 2))}</i>`; }
function runMission(m) {
  if (m.c) { if (world) world.follow(m.c.mint); card({ kind: 'coin', coin: m.c }); }
  else if (m.p) { if (world) world.followPerp(m.p.name); card({ kind: 'perp', perp: m.p }); }
  else if (m.w) card({ kind: 'whale', whale: m.w });
}
function openMissions() {
  const L = missions(), el = $('#hMissions'); togglePhone(false); card(null);
  $('#hmList').innerHTML = L.map((m, i) => { const t = mtext(m); return t ? `<button type="button" data-i="${i}" class="k-${t.k}" style="--i:${i}">${mava(m)}<span><b>${esc(t.t)}</b><em>${esc(t.s)}</em></span><small>${esc(t.go)} ›</small></button>` : ''; }).join('') || empty('No live missions yet: the feeds are still loading.');
  el.hidden = false; el._L = L;
}
$('#hMissions').addEventListener('click', e => { const b = e.target.closest('button[data-i]'); if (b) { $('#hMissions').hidden = true; runMission($('#hMissions')._L[+b.dataset.i]); } else if (e.target.closest('[data-a=x]') || e.target.id === 'hMissions') $('#hMissions').hidden = true; });

// ---------------------------------------------------------------- the radar: the city from above, turned with the camera
const rc = $('#radar'), rg = rc.getContext('2d');
const DISTRICTS = [['DOWNTOWN', 0, 4], ['VICE BEACH', 0, 0, 'b'], ['HARBOR', 0, 0, 'h'], ['THE PIER', 0, 34, 'p']];
let lastMode = '';
function drawDrive(w) {
  if (!html.classList.contains('roam')) return;
  if (w.mode !== lastMode) { lastMode = w.mode; html.classList.toggle('driving', w.mode === 'drive'); $('#hView').innerHTML = w.mode === 'map' ? 'Drive <kbd>V</kbd>' : 'Map <kbd>V</kbd>'; }
  if (w.me) $('#hSpd').textContent = Math.round(Math.abs(w.me.v) * 3.6);
}
$('#hView').onclick = () => { if (world && world.toggleMap) world.toggleMap(); };
function drawRadar(w) {
  if (!html.classList.contains('roam')) return;
  const S = rc.width, h = S / 2, scale = S / 240, t = w.controls.target, az = Math.atan2(w.cam.position.x - t.x, w.cam.position.z - t.z);
  rg.setTransform(1, 0, 0, 1, 0, 0); rg.clearRect(0, 0, S, S);
  rg.save(); rg.beginPath(); rg.arc(h, h, h - 6, 0, Math.PI * 2); rg.clip();
  rg.fillStyle = 'rgba(20,12,56,.92)'; rg.fillRect(0, 0, S, S);
  rg.translate(h, h); rg.rotate(az); rg.scale(scale, scale); rg.translate(-t.x, -t.z);
  rg.fillStyle = 'rgba(66,84,255,.55)'; rg.fillRect(w.beach + 14, -900, 1400, 1800);
  rg.fillStyle = 'rgba(250,210,160,.45)'; rg.fillRect(w.beach, -900, 14, 1800);
  rg.fillStyle = 'rgba(160,110,80,.75)'; rg.fillRect(w.beach + 10, 29.5, 64, 9);
  rg.strokeStyle = 'rgba(200,180,255,.42)'; rg.lineWidth = 3.6;
  for (let k = 0; k <= 9; k++) { const v = -w.half + k * w.pitch - 2; rg.beginPath(); rg.moveTo(v, -w.half); rg.lineTo(v, w.half); rg.stroke(); rg.beginPath(); rg.moveTo(-w.half, v); rg.lineTo(Math.min(w.half, w.beach), v); rg.stroke(); }
  const now = performance.now();
  if (w.garage && world && world.home) { const [hx, hz] = world.home(); rg.fillStyle = 'rgba(255,79,158,.9)'; rg.beginPath(); rg.arc(hx, hz, 6 + Math.sin(now / 300) * 1.5, 0, Math.PI * 2); rg.fill(); }
  for (const c of w.cars) { if (!c.pos) continue; const r = c.police ? 2.6 : 1.6; rg.fillStyle = c.police ? (Math.sin(now / 90) > 0 ? '#ff4f6e' : '#5fa0ff') : 'rgba(255,255,255,.35)'; rg.fillRect(c.pos[0] - r, c.pos[1] - r, r * 2, r * 2); }
  for (const c of w.coins || []) { if (!c.pos || !c.coin || c.mine) continue; rg.fillStyle = c.coin.cat === 'new' ? '#ffd23f' : c.coin.cat === 'migrated' ? '#5fc8ff' : c.coin.up ? '#2ee6a6' : '#ff4f9e'; rg.beginPath(); rg.arc(c.pos[0], c.pos[1], 3.6, 0, Math.PI * 2); rg.fill(); }
  for (const b of w.boats || []) { if (!b.pos) continue; rg.fillStyle = '#7fd8ff'; rg.beginPath(); rg.moveTo(b.pos[0], b.pos[1] - 5); rg.lineTo(b.pos[0] + 3.4, b.pos[1] + 4); rg.lineTo(b.pos[0] - 3.4, b.pos[1] + 4); rg.closePath(); rg.fill(); }
  for (const hl of w.helis || []) { const p = hl.g.position; rg.strokeStyle = '#ffd23f'; rg.lineWidth = 2.4; rg.beginPath(); rg.arc(p.x, p.z, 4.5, 0, Math.PI * 2); rg.stroke(); }
  rg.restore();
  rg.font = '800 15px Inter, sans-serif'; rg.textAlign = 'center'; rg.fillStyle = 'rgba(255,255,255,.62)';
  const ca = Math.cos(az), sa = Math.sin(az);
  for (const [name, x0, z0, k] of DISTRICTS) {
    const x = k === 'b' ? w.beach + 7 : k === 'h' ? w.beach + 46 : k === 'p' ? w.beach + 60 : x0, z = z0;
    const dx = (x - t.x) * scale, dz = (z - t.z) * scale, rx = dx * ca - dz * sa, ry = dx * sa + dz * ca;
    if (rx * rx + ry * ry < (h - 30) * (h - 30)) rg.fillText(name, h + rx, h + ry);
  }
  rg.fillStyle = '#fff'; rg.beginPath(); rg.moveTo(h, h - 14); rg.lineTo(h + 9, h + 9); rg.lineTo(h, h + 3); rg.lineTo(h - 9, h + 9); rg.closePath(); rg.fill();
  rg.strokeStyle = 'rgba(255,255,255,.9)'; rg.lineWidth = 6; rg.beginPath(); rg.arc(h, h, h - 6, 0, Math.PI * 2); rg.stroke();
  const n = $('.h-n'), rr = rc.getBoundingClientRect().width / 2 - 12; n.style.transform = `translate(${Math.sin(az) * -rr}px, ${-Math.cos(az) * rr}px)`;
}

// ---------------------------------------------------------------- your garage: the bag, parked at the safehouse
let garageSig = '', myRows = [];
setInterval(() => {
  const b = W.sol.address && window.__bux && window.__bux.bag ? window.__bux.bag() : null;
  const rows = b && b.rows ? b.rows.slice().sort((x, y) => y.usd - x.usd).slice(0, 10).map(r => ({ ...r, iconUrl: r.icon ? img(r.icon, r.mint) : '' })) : [];
  const sig = rows.map(r => r.mint + ':' + Math.round(r.usd)).join('|'); if (sig === garageSig) return; garageSig = sig; myRows = rows; if (world) world.setGarage(rows); paintStory();
}, 4000);

// ---------------------------------------------------------------- the gate: the city builds itself while the feeds come in; Enter starts the story
const gated = startPage() === 'map';
let entered = !gated;
html.classList.toggle('gated', gated);
const SEQ = ['streets', 'hot', 'drops', 'graduates', 'pulse', 'whales', 'safehouse', 'harbor', 'trending', 'x', 'roam'];   // the drive, stop by stop (world.drive.js has the same order)
function paintGate() { }

function enterWorld() {
  if (entered) return; entered = true;
  html.classList.remove('gated'); html.classList.add('story');
  scrollTo(0, 0); if (world) { world.setStory(SEQ); world.story(0); world.enter(); }
  watchStory();
}
$('#enterGo').onclick = enterWorld;
addEventListener('keydown', e => { if (!entered && (e.key === 'Enter' || e.key === ' ') && $('#modal').hidden && $('#pal').hidden) { e.preventDefault(); enterWorld(); } });

// ---------------------------------------------------------------- the story: scrolling flies the camera shot to shot; each stop pops a live panel
const chapters = $$('#story .ch');
function storyP() { const h = innerHeight; return Math.max(0, Math.min(SEQ.length - 1, scrollY / h)); }
let storyRaf = 0;
function onScroll() {
  if (!html.classList.contains('story')) return;
  if (storyRaf) return; storyRaf = requestAnimationFrame(() => {
    storyRaf = 0; const p = storyP(); if (world) world.story(p);
    const k = Math.round(p); $$('#sDots button').forEach((b, i) => b.classList.toggle('on', i === k));
    $('#sBar').style.setProperty('--p', (p / (SEQ.length - 1) * 100).toFixed(1) + '%');
  });
}
addEventListener('scroll', onScroll, { passive: true });
let io = null;
function watchStory() {
  if (io) return;
  io = new IntersectionObserver(es => { for (const e of es) if (e.isIntersecting) { e.target.classList.add('vis'); countUp(e.target); } }, { threshold: .35 });
  chapters.forEach(c => io.observe(c));
  paintStory(); onScroll();
}
$('#sDots').innerHTML = SEQ.map((s, i) => `<button type="button" data-i="${i}" aria-label="Chapter ${i + 1}"><i></i></button>`).join('');
$('#sDots').addEventListener('click', e => { const b = e.target.closest('button[data-i]'); if (b) scrollTo({ top: +b.dataset.i * innerHeight, behavior: reduced() ? 'auto' : 'smooth' }); });
// numbers count up the first time a panel shows
function countUp(el) {
  if (reduced()) return;
  $$('[data-n]', el).forEach(n => { const to = +n.dataset.n; if (!isFinite(to) || n._done) return; n._done = 1; const t0 = performance.now(); const tick = t => { const k = Math.min(1, (t - t0) / 1100), v = Math.round(to * (1 - Math.pow(1 - k, 3))); n.textContent = v.toLocaleString('en-US'); if (k < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); });
}
const row = (c, right, sub) => `<button type="button" class="s-row" data-m="${esc(c.mint)}">${ava(c)}<b>$${esc(c.symbol)}</b><em>${right}</em><small>${sub}</small></button>`;
function paintStory() {
  if (!html.classList.contains('story') && entered) return;
  const set = (id, h) => { const e = $('#' + id); if (e && e.innerHTML !== h) e.innerHTML = h; };
  const cnt = (id, v) => { const e = $('#' + id); if (!e) return; e.dataset.n = v; if (e._done || reduced()) e.textContent = n0(v); };
  cnt('sNew', F.new.length); cnt('sHot', F.hot.length); cnt('sTrend', F.trending.length); cnt('sMig', F.migrated.length);
  const hot = F.hot.slice().sort((a, b) => heatOf(b) - heatOf(a))[0];
  set('sHotLine', hot ? `<b>$${esc(hot.symbol)}</b> is standing right next to your car: ${n0(heatOf(hot))} trades in the last 5 minutes, ${pct(hot.chg, 1)} in ${hot.tf}. Ape in buys it through Jupiter, signed in your own wallet.` : 'The coin with the most trades in the last 5 minutes walks up to your car.');
  set('sHotCard', hot ? `<div class="sh-h">${ava(hot, 1)}<div><b>$${esc(hot.symbol)}</b><span>${esc(hot.name)}</span></div><em class="${cls(hot.chg)}">${pct(hot.chg, 1)}</em></div>
    <div class="sh-g"><div><span>Cap</span><b>${usd(hot.mcap)}</b></div><div><span>Trades 5m</span><b>${n0(heatOf(hot))}</b></div><div><span>Holders</span><b>${n0(hot.holders)}</b></div></div>
    <button class="btn-steal s-go" type="button" data-steal="${esc(hot.mint)}">Ape in</button>` : empty('Finding the hottest coin…'));
  set('sDrops', (launches.length ? launches : F.new).slice(0, 6).map(c => row(c, `<span class="age" data-t="${c.created || ''}">${ago(c.created)}</span>`, c.mcap ? usd(c.mcap) : 'new pair')).join('') || empty('Waiting for the next launch…'));
  set('sMigs', F.migrated.slice(0, 4).map(c => row(c, ago(c.grad) + ' ago', usd(c.mcap))).join('') || empty('Loading migrations…'));
  set('sBond', F.bonding.slice(0, 3).map(c => `<div class="s-bond"><b>$${esc(c.symbol)}</b><i style="--p:${Math.min(100, c.prog || 0).toFixed(0)}%"></i><em>${Math.round(c.prog || 0)}%</em></div>`).join(''));
  set('sPerps', perpList.slice(0, 5).map(p => `<div class="s-perp">${pava(p)}<b>${esc(p.name)}</b><em class="${cls(p.chg)}">${pct(p.chg, 1)}</em><small>${fundStr(p)}</small><button type="button" data-perp="${esc(p.name)}" data-side="long">Long</button><button type="button" class="sh" data-perp="${esc(p.name)}" data-side="short">Short</button></div>`).join('') || empty('Loading the harbor…'));
  set('sX', xTrends.slice(0, 7).map((x, i) => `<a class="s-x" href="https://x.com/search?q=${encodeURIComponent(x.name)}" target="_blank" rel="noopener"><i>${i + 1}</i><b>${esc(x.name)}</b><small>${esc(x.where)}</small></a>`).join('') || empty('No crypto topic is trending on X in the countries we read right now.'));
  set('sWhales', PW.map(w => { const l = w.trades[0]; return `<button type="button" class="s-row" data-w="${esc(w.a)}"><i class="ava whale">${esc(w.n.slice(0, 2))}</i><b>${esc(w.n)}</b><em>${w.sol != null ? n0(w.sol) + ' SOL' : '—'}</em><small>${l ? `${l.side === 'buy' ? 'bought' : 'sold'} $${esc(l.sym || '…')} · ${l.sol.toFixed(1)} SOL · ${ago(l.t)} ago` : 'watching for their next trade'}</small></button>`; }).join(''));
  set('sBag', W.sol.address ? (myRows.slice(0, 3).map(r => row({ ...r, symbol: r.sym }, usd(r.usd), pct(r.ch, 1) + ' 24h')).join('') || empty('Your wallet is connected. Coins you hold park here.')) : `<button class="btn-steal s-go" type="button" data-connect="1">Connect wallet</button>`);
  cnt('sLaunchN', launchN); set('sPerMin', perMin() == null ? '—' : String(perMin())); set('sPerMinT', perMin() == null ? '—' : String(perMin())); set('sLaunchN2', n0(launchN));
  const dep = [...departs.map(d => ({ c: d.c, t: d.at, live: Date.now() - d.at < 40e3 })), ...F.migrated.filter(c => !departs.some(d => d.c.mint === c.mint)).map(c => ({ c, t: c.grad, live: false }))].slice(0, 5);
  set('sDep', dep.map(d => row(d.c, d.live ? '<span class="tk">Taking off</span>' : 'Departed ' + ago(d.t) + ' ago', d.c.mcap ? usd(d.c.mcap) + ' cap' : 'graduated')).join('') || empty('Waiting for the next graduation…'));
  set('sTrendTop', F.trending.slice(0, 5).map((c, i) => row(c, `<b class="${cls(c.chg)}">${pct(c.chg, 0)}</b>`, (i === 0 ? 'On the banner · ' : '#' + (i + 1) + ' · ') + usd(c.mcap))).join('') || empty('Loading what’s trending…'));
  set('sPM', perMin() == null ? '—' : String(perMin())); set('sMS', String(migSeen)); set('sMD', moodV == null ? '—' : Math.round(moodV * 100) + '%');
  const hh = hottest(); set('sArenaHot', hh ? row(hh, `<b class="${cls(hh.chg)}">${pct(hh.chg, 1)}</b>`, 'On the big screen · ' + n0(heatOf(hh)) + ' trades 5m') : '');
  if (moodV != null) { const m = moodV; $('#sMood').style.setProperty('--m', (m * 100).toFixed(0) + '%'); set('sMoodV', Math.round(m * 100) + '%'); set('sMoodL', m >= .62 ? 'Euphoria' : m >= .5 ? 'Calm streets' : m >= .38 ? 'Tension' : 'Riots'); }
}
setInterval(() => { if (html.classList.contains('story')) $$('#sDrops .age').forEach(e => { const t = +e.dataset.t; if (t) e.textContent = ago(t); }); }, 1000);
$('#story').addEventListener('click', e => {
  const s = e.target.closest('[data-steal]'); if (s) return act({ kind: 'coin', coin: findCoin(s.dataset.steal) || { mint: s.dataset.steal } }, 'steal');
  const pb = e.target.closest('[data-perp]'); if (pb) return act({ kind: 'perp', perp: perpList.find(p => p.name === pb.dataset.perp) }, pb.dataset.side);
  if (e.target.closest('[data-connect]')) return openWallets();
  const r = e.target.closest('.s-row[data-m]'); if (r) { const c = findCoin(r.dataset.m); if (c) { roam(); setTimeout(() => { if (world) world.follow(c.mint); card({ kind: 'coin', coin: c }); }, 400); } return; }
  const w = e.target.closest('.s-row[data-w]'); if (w) { const x = PW.find(q => q.a === w.dataset.w); if (x) { roam(); setTimeout(() => card({ kind: 'whale', whale: x }), 400); } return; }
  if (e.target.closest('[data-roam]')) return roam();
  const g = e.target.closest('[data-go]'); if (g) { e.preventDefault(); boot(); go(g.dataset.go); }
});
function roam() {
  if (!entered) enterWorld();
  html.classList.remove('story'); html.classList.add('roam', 'hud-in'); scrollTo(0, 0);
  if (world) world.roam();
}
function tour() { if (!entered) return enterWorld(); card(null); html.classList.remove('roam', 'hud-in'); html.classList.add('story'); scrollTo(0, 0); if (world) { world.setStory(SEQ); world.story(0); } watchStory(); onScroll(); }
$('#sSkip').onclick = roam;
// the panels lean toward the pointer, a little
addEventListener('pointermove', e => {
  if (!html.classList.contains('story') || reduced() || e.pointerType !== 'mouse') return;
  const sp = e.target.closest && e.target.closest('#story .sp'); $$('#story .sp').forEach(p => { if (p !== sp) { p.style.removeProperty('--rx'); p.style.removeProperty('--ry'); } });
  if (!sp) return; const r = sp.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
  sp.style.setProperty('--rx', (-y * 6).toFixed(2) + 'deg'); sp.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg');
}, { passive: true });

// ---------------------------------------------------------------- start: the world module, then every feed
function startWorld() {
  import('./world.js?v=16').then(m => {
    world = m.startWorld($('#world'), {
      reduced: reduced(), gate: !entered, onHover: tip, onFrame: w => { drawRadar(w); drawDrive(w); }, onWheel: () => roam(),
      onPick: it => { $('#hTip').hidden = true; if (it && it.kind === 'safehouse') { openWallets(); return; } if (!html.classList.contains('roam')) { if (it && it.kind) { roam(); setTimeout(() => card(it), 400); } return; } card(it && it.kind ? it : null); },
    });
    if (entered && !html.classList.contains('story')) html.classList.add('roam', 'hud-in');
    if (html.classList.contains('panel')) setTimeout(() => { if (html.classList.contains('panel')) world.pause(true); }, 900);
    if (api.perps.list.length) { perpList = api.perps.list.filter(p => p.oi > 0).sort((a, b) => b.oi - a.oi); world.setPerps(perpList); }
    if (myRows.length) world.setGarage(myRows);
    paint(); paintWhales();
  }).catch(e => { console.error(e); html.classList.add('noworld'); });
  loadGems(); setInterval(loadGems, 8000);
  loadTrending(); setInterval(loadTrending, 30000);
  loadWhales(); setInterval(loadWhales, 60e3);
  loadTrends(); setInterval(loadTrends, 5 * 60e3);
  pumpStream();
}

// ---------------------------------------------------------------- the phone: every page is an app that opens over the city
const phone = $('#phone');
function togglePhone(v) { phone.hidden = v == null ? !phone.hidden : !v; $('#hPhone').classList.toggle('on', !phone.hidden); if (!phone.hidden) $('#hMissions').hidden = true; }
$('#hPhone').onclick = () => togglePhone();
phone.addEventListener('click', e => { const a = e.target.closest('a[data-go], button[data-app]'); if (!a) return; togglePhone(false); if (a.dataset.app === 'missions') openMissions(); else if (a.dataset.app === 'tour') { e.preventDefault(); tour(); } });
$('#world').addEventListener('pointerdown', () => { if (!phone.hidden) togglePhone(false); html.classList.remove('feed-open'); });
// on the streets: P takes the phone out, M opens the missions, Esc puts things away (WASD, the arrows, Shift, Space and V drive the car)
addEventListener('keydown', e => {
  if (!html.classList.contains('roam') || html.classList.contains('panel') || e.metaKey || e.ctrlKey || e.altKey || !$('#modal').hidden || !$('#pal').hidden || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
  if (e.key === 'p' || e.key === 'P') { e.preventDefault(); togglePhone(); }
  else if (e.key === 'm' || e.key === 'M') { $('#hMissions').hidden ? openMissions() : ($('#hMissions').hidden = true); }
  else if (e.key === 'Escape') { if (!phone.hidden) togglePhone(false); else if (!$('#hMissions').hidden) $('#hMissions').hidden = true; else if (pinned) { card(null); if (world) world.unfollow(); } }
});
const clock = () => { $('#phClock').textContent = new Date().toTimeString().slice(0, 5); }; clock(); setInterval(clock, 15000);
$('#hCoins').onclick = () => html.classList.toggle('feed-open');
$('#hMis').onclick = () => { if ($('#hMissions').hidden) openMissions(); else $('#hMissions').hidden = true; };
setInterval(() => { const n = missions().length; $('#hMisN').textContent = n; $('#hMis').classList.toggle('live', n > 0); }, 3000);
$('#hConnect').onclick = () => openWallets();
$('#sConnect').onclick = () => openWallets();
$('#gConnect').onclick = () => openWallets();
$('#hSearch').onclick = () => openPalette();
$('#homeBtn').onclick = () => go('map');
addEventListener('keydown', e => { if (e.key === 'Escape' && html.classList.contains('panel') && $('#modal').hidden && $('#pal').hidden) go('map'); });

// ---------------------------------------------------------------- nav: phone sheet, X, CA
const mb = $('#menuBtn'), ms = $('#mSheet');
mb.addEventListener('click', () => { ms.hidden = !ms.hidden; mb.setAttribute('aria-expanded', String(!ms.hidden)); });
$('#tabMore').onclick = () => { ms.hidden = !ms.hidden; };
addEventListener('scroll', () => $('#nav').classList.toggle('solid', scrollY > 8), { passive: true });
if (CONFIG.x) { const x = $('#navX'); x.hidden = false; x.href = /^https?:/.test(CONFIG.x) ? CONFIG.x : 'https://x.com/' + CONFIG.x.replace(/^@/, ''); }
if (CONFIG.ca) {
  $('#caBox').hidden = false; $('#caTxt').textContent = CONFIG.ca; $('#caCopy').onclick = () => copy(CONFIG.ca);
  const nc = $('#navCa'); if (nc) { nc.hidden = false; $('#navCaL').textContent = CONFIG.ca; $('#navCaS').textContent = short(CONFIG.ca); nc.onclick = () => copy(CONFIG.ca); }
  const cc = $('#caChip'); if (cc) { cc.hidden = false; $('#caChipTxt').textContent = short(CONFIG.ca); cc.onclick = () => copy(CONFIG.ca); }
  const hc = $('#hCa'); hc.hidden = false; $('#hCaTxt').textContent = short(CONFIG.ca); hc.onclick = () => copy(CONFIG.ca);
  $('#caBuy').href = 'https://pump.fun/coin/' + CONFIG.ca; $('#caChart').href = 'https://dexscreener.com/solana/' + CONFIG.ca;
}

// ---------------------------------------------------------------- wallet modal (both sides in one place)
export function openWallets() {
  const m = $('#modal'), b = $('#mBody'); $('#mTitle').textContent = 'Connect';
  const draw = () => {
    const sw = W.sol.list, ew = W.evm.list.length ? W.evm.list : (W.legacyEvm() ? [{ info: { uuid: 'legacy', name: 'Browser wallet', icon: '' } }] : []);
    const ag = W.agent();
    b.innerHTML = `
      <div class="m-sec"><span>Solana · for trading memes</span>
        ${W.sol.address ? `<button class="wbtn on" data-a="sol-off" type="button"><b>${esc(W.sol.w.name)}</b><em>${short(W.sol.address)} · disconnect</em></button>`
          : sw.length ? sw.map(w => `<button class="wbtn" data-sol="${esc(w.name)}" type="button">${w.icon ? `<img src="${esc(w.icon)}" alt="">` : ''}<b>${esc(w.name)}</b><em>connect</em></button>`).join('')
          : ['phantom.com|Phantom|https://phantom.com/download', 'solflare.com|Solflare|https://solflare.com/download', 'backpack.app|Backpack|https://backpack.app/download'].map(s => { const [d, n, u] = s.split('|'); return `<a class="wbtn" href="${u}" target="_blank" rel="noopener"><img src="${brand(d)}" alt=""><b>${n}</b><em>install ↗</em></a>`; }).join('')}
      </div>
      <div class="m-sec"><span>EVM · for perps and hedges on Hyperliquid</span>
        ${W.evm.address ? `<button class="wbtn on" data-a="evm-off" type="button"><b>${esc(W.evm.name)}</b><em>${short(W.evm.address)} · disconnect</em></button>
            ${ag ? `<button class="wbtn on" data-a="agent-off" type="button"><b>Session key</b><em>${short(ag.address)} · forget</em></button>` : `<button class="wbtn" data-a="agent" type="button"><b>Approve session key</b><em>one signature</em></button>`}`
          : ew.length ? ew.map(d => `<button class="wbtn" data-evm="${esc(d.info.uuid)}" type="button">${d.info.icon ? `<img src="${esc(d.info.icon)}" alt="">` : ''}<b>${esc(d.info.name)}</b><em>connect</em></button>`).join('')
          : ['metamask.io|MetaMask|https://metamask.io/download', 'rabby.io|Rabby|https://rabby.io', 'phantom.com|Phantom|https://phantom.com/download'].map(s => { const [d, n, u] = s.split('|'); return `<a class="wbtn" href="${u}" target="_blank" rel="noopener"><img src="${brand(d)}" alt=""><b>${n}</b><em>install ↗</em></a>`; }).join('')}
        <a class="wbtn" href="https://app.hyperliquid.xyz/trade" target="_blank" rel="noopener"><img src="${brand('hyperliquid.xyz')}" alt=""><b>Deposit USDC on Hyperliquid</b><em>↗</em></a>
      </div>`;
  };
  draw(); m.hidden = false;
  b.onclick = async e => {
    const t = e.target.closest('button'); if (!t) return;
    try {
      if (t.dataset.sol) { t.querySelector('em').textContent = 'check your wallet'; await W.connectSol(t.dataset.sol); toast('Solana wallet connected', 'ok', 3000); }
      else if (t.dataset.evm) { t.querySelector('em').textContent = 'check your wallet'; await W.connectEvm(t.dataset.evm); toast('EVM wallet connected', 'ok', 3000); }
      else if (t.dataset.a === 'sol-off') await W.disconnectSol();
      else if (t.dataset.a === 'evm-off') W.disconnectEvm();
      else if (t.dataset.a === 'agent') { t.querySelector('em').textContent = 'sign in your wallet'; await W.approveAgent(); toast('Session key approved. Perp orders now sign without popups.', 'ok'); }
      else if (t.dataset.a === 'agent-off') W.forgetAgent();
    } catch (err) { toast(esc(err.message || String(err)), 'err'); }
    draw();
  };
}
$('#mClose').onclick = () => { $('#modal').hidden = true; };
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') e.currentTarget.hidden = true; });
addEventListener('keydown', e => { if (e.key === 'Escape') $('#modal').hidden = true; });
$('#connectBtn').onclick = () => openWallets();
window.__wallets = openWallets;
const navW = () => {
  const n = (W.sol.address ? 1 : 0) + (W.evm.address ? 1 : 0);
  const label = n === 0 ? 'Connect' : n === 2 ? 'Both connected' : W.sol.address ? short(W.sol.address) : short(W.evm.address);
  for (const b of [$('#connectBtn'), $('#hConnect'), $('#gConnect')]) { b.classList.toggle('on', n > 0); b.querySelector('span').textContent = b.id === 'gConnect' && n === 0 ? 'Connect wallet' : label; }
  $('#sConnect').textContent = n === 0 ? 'Connect' : label;
};
on('sol', navW); on('evm', navW);
setTimeout(async () => {                            // quiet reconnect of wallets this browser used before
  const s = store.get('bux:sol'); if (s) { const w = W.sol.list.find(x => x.name === s); if (w && w.accounts && w.accounts.length) W.connectSol(s).catch(() => {}); }
  const e = store.get('bux:evm'); if (e) { const d = W.evm.list.find(x => x.info.uuid === e); const p = d ? d.provider : W.legacyEvm(); if (p) p.request({ method: 'eth_accounts' }).then(a => { if (a && a[0]) W.connectEvm(d ? e : 'legacy').catch(() => {}); }).catch(() => {}); }
}, 900);

// ---------------------------------------------------------------- nav tools + the palette
const tools = {
  palette: () => openPalette(), alerts: () => T.openAlerts(), settings: () => T.openSettings(), vault: () => go('map'),
};
$('#navK').onclick = tools.palette;
$('#navSol').onclick = () => { go('trade'); setTimeout(() => window.__buxHedgePerp && window.__buxHedgePerp('SOL'), 200); };
$('#mSheet').addEventListener('click', e => { const b = e.target.closest('button[data-act]'); if (!b) return; ms.hidden = true; tools[b.dataset.act](); });
on('perps', P => { const s = P.by.SOL; if (!s) return; const b = $('#navSol'); b.querySelector('b').textContent = px(api.mids.SOL || s.mark); b.classList.toggle('dn', s.chg < 0); });
on('mids', m => { if (m.SOL) $('#navSol b').textContent = px(m.SOL); });
const goTrade = tab => { go('trade'); if (tab) setTimeout(() => { const b = $(`#sideTabs button[data-t=${tab}]`); b && b.click(); }, 60); };
const ACTIONS = [
  ['The streets', '⌖', 'every live coin driving through the city', () => go('map')],
  ['Overview', '▦', 'the dashboard: countdown, mood, movers, whales', () => go('overview')],
  ['Buy or sell', 'A', 'the coin on screen, through Jupiter', () => goTrade('ape')],
  ['Limit order', '⌖', 'buy the dip or sell the pump at your price', () => { goTrade('ape'); setTimeout(() => { const b = $('#apeType button[data-t=limit]'); b && b.click(); }, 120); }],
  ['Hedge', 'H', 'short its perp or SOL', () => goTrade('hedge')],
  ['Long or short a perp', 'P', 'anything on Hyperliquid', () => goTrade('perps')],
  ['Hedge the whole bag', '⇣', 'short SOL against everything you hold', () => { go('trade'); setTimeout(() => $('#hedgeAll').click(), 300); }],
  ['Pump.fun, live', '⚡', 'new pairs, final stretch, migrated', () => go('pump')],
  ['Trending memes', '↗', 'what the trenches are aping', () => go('trending')],
  ['Perps board', '≡', 'funding, open interest, volume', () => go('perps')],
  ['Market map', '▦', 'every meme perp, sized and coloured', () => go('market')],
  ['Whales', '◉', 'top Hyperliquid traders and their positions', () => go('whales')],
  ['Watch a wallet', '◎', 'any Solana wallet, priced live', () => { go('whales'); setTimeout(() => { const b = $('#whTab button[data-t=sol]'); b && b.click(); }, 60); }],
  ['Bag', '◧', 'your net worth, bag and positions', () => go('bag')],
  ['Hedge math', '∑', 'size a hedge before you click', () => go('hedge')],
  ['Watchlist', '★', 'coins you starred', () => { go('trade'); setTimeout(() => { const b = $('#listTab button[data-l=watch]'); b && b.click(); }, 120); }],
  ['Connect wallets', '⇄', 'Solana and Hyperliquid', () => openWallets()],
  ['Price alerts', 'L', 'ring when a coin or perp crosses a price', tools.alerts],
  ['Close all positions', '⨯', 'every Hyperliquid position, at market', () => { go('trade'); setTimeout(() => $('#closeAll').click(), 400); }],
  ['Cancel all orders', '⊘', 'every open order and trigger', () => { go('trade'); setTimeout(() => $('#cancelAll').click(), 400); }],
  ['Share this coin', '⇗', 'copy a link that opens it here', () => T.share()],
  ['Copy the mint', 'CA', 'contract address of the coin on screen', () => $('#tokCopy').click()],
  ['Full screen', 'F', 'nothing but the desk', () => T.full()],
  ['Settings', ',', 'slippage, leverage, start screen', tools.settings],
  ['Keyboard shortcuts', '?', 'every key the terminal knows', () => T.openKeys()],
  ...(CONFIG.ca ? [['Copy the $BLOX CA', '$', short(CONFIG.ca), () => copy(CONFIG.ca)], ['Buy $BLOX on pump.fun', '↗', 'opens pump.fun', () => window.open('https://pump.fun/coin/' + CONFIG.ca, '_blank', 'noopener')]] : []),
  ['FAQ', '?', 'questions players ask', () => go('faq')],
];
let palSel = 0, palItems = [], palSeq = 0;
function openPalette() { const p = $('#pal'), q = $('#palQ'); p.hidden = false; q.value = ''; drawPal([]); setTimeout(() => q.focus(), 20); }
function closePalette() { $('#pal').hidden = true; }
function drawPal(coins) {
  const v = $('#palQ').value.trim().toLowerCase();
  const acts = ACTIONS.filter(a => !v || (a[0] + ' ' + a[2]).toLowerCase().includes(v));
  palItems = [...coins.map(t => ({ coin: t })), ...acts.map(a => ({ act: a }))]; palSel = 0;
  $('#palList').innerHTML = (coins.length ? '<p class="ph">Coins</p>' + coins.map((t, i) => `<button type="button" data-i="${i}">${icon(t.icon, t.symbol, t.mint)}<b>${esc(t.symbol)} <span class="muted" style="font-weight:400">${esc(t.name)}</span></b><em>${usd(t.mcap)}</em></button>`).join('') : '')
    + (acts.length ? '<p class="ph">Actions</p>' + acts.map((a, i) => `<button type="button" data-i="${coins.length + i}"><span class="k">${a[1]}</span><b>${esc(a[0])}</b><em>${esc(a[2])}</em></button>`).join('') : '')
    || '<p class="ph">Nothing matches. Paste a mint to look it up.</p>';
  hlPal();
}
function hlPal() { $$('#palList button').forEach(b => b.classList.toggle('hl', +b.dataset.i === palSel)); }
function runPal(i) {
  const it = palItems[i]; if (!it) return; closePalette(); boot();
  if (it.coin) { const c = !html.classList.contains('panel') && findCoin(it.coin.mint); if (c) { if (!html.classList.contains('roam')) roam(); if (world) world.follow(c.mint); card({ kind: 'coin', coin: c }); return; } go('trade'); window.__buxPick && window.__buxPick(it.coin.mint, 'ape'); }
  else it.act[3]();
}
$('#palQ').addEventListener('input', () => {
  drawPal([]); const v = $('#palQ').value.trim(); if (v.length < 2) return;
  const my = ++palSeq; setTimeout(async () => { if (my !== palSeq) return; try { const r = (await api.search(v)).slice(0, 6); if (my === palSeq) drawPal(r); } catch {} }, 250);
});
$('#palQ').addEventListener('keydown', e => {
  if (e.key === 'ArrowDown') { e.preventDefault(); palSel = Math.min(palItems.length - 1, palSel + 1); hlPal(); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); palSel = Math.max(0, palSel - 1); hlPal(); }
  else if (e.key === 'Enter') { e.preventDefault(); runPal(palSel); }
  else if (e.key === 'Escape') closePalette();
});
$('#palList').addEventListener('click', e => { const b = e.target.closest('button[data-i]'); if (b) runPal(+b.dataset.i); });
$('#pal').addEventListener('click', e => { if (e.target.id === 'pal') closePalette(); });
addEventListener('keydown', e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); $('#pal').hidden ? openPalette() : closePalette(); } });

// ---------------------------------------------------------------- boot: data first, modules once the terminal is opened
api.loadPerps().catch(() => {}); setInterval(() => api.loadPerps().catch(() => {}), 30000);
api.liveMids();
T.init();
function boot() {
  if (booted) return; booted = true;
  import('./terminal.js?v=1').then(m => m.init()).catch(e => console.error(e));
  import('./pages.js?v=1').then(m => m.init(hooks, go)).then(() => { if (page && hooks[page] && hooks[page].show) hooks[page].show(); }).catch(e => console.error(e));
  import('./pump.js?v=1').then(m => m.init(hooks)).then(() => { if (page === 'pump' && hooks.pump) hooks.pump.show(); }).catch(e => console.error(e));
  import('./whales.js?v=1').then(m => m.init(hooks, go)).then(() => { if (page === 'whales' && hooks.whales) hooks.whales.show(); }).catch(e => console.error(e));
  import('./overview.js?v=1').then(m => m.init(hooks, go)).then(() => { if (page === 'overview' && hooks.overview) hooks.overview.show(); }).catch(e => console.error(e));
}
// no landing page: the city loads first, the terminal modules right behind it (a shared coin link opens straight on trade)
startWorld();
if (startPage() !== 'map') boot(); else setTimeout(boot, 1200);
go(startPage(), { push: false });

// ---------------------------------------------------------------- the bag page borrows the terminal's desk (bag, positions, orders, net)
const desk = () => $('.desk');
hooks.bag = {
  show() { const d = desk(); if (d && d.parentElement.id !== 'bagSlot') $('#bagSlot').appendChild(d); nwDraw(); clearInterval(hooks.bag.t); hooks.bag.t = setInterval(nwDraw, 3000); },
  hide() { const d = desk(); if (d && d.parentElement.id === 'bagSlot') $('#term').appendChild(d); clearInterval(hooks.bag.t); },
};
function nwDraw() {
  const b = window.__bux && window.__bux.bag ? window.__bux.bag() : null, sol = b && W.sol.address ? b.tot : null, hl = b && b.hl ? b.hl.equity : null;
  const shortV = b && b.hl ? b.hl.pos.filter(p => p.szi < 0).reduce((s, p) => s + Math.abs(p.val || 0), 0) : 0;
  $('#nwSol').textContent = sol != null ? usd(sol) : '—'; $('#nwHL').textContent = hl != null ? usd(hl) : '—';
  $('#nwTot').textContent = sol != null || hl != null ? usd((sol || 0) + (hl || 0)) : '—';
  $('#nwHedge').textContent = sol ? Math.min(999, shortV / sol * 100).toFixed(0) + '%' : '—';
  const rows = b && b.rows ? b.rows.slice().sort((x, y) => y.usd - x.usd) : [], tot = rows.reduce((s, r) => s + r.usd, 0), COL = ['#ff2a8f', '#3fd8ff', '#8a3dff', '#ffd23f', '#2ee6a6', '#ff7a4a', '#6b6396'];
  const segs = rows.slice(0, 6).concat(rows.length > 6 ? [{ sym: 'Other', usd: rows.slice(6).reduce((s, r) => s + r.usd, 0) }] : []).filter(x => x.usd > 0);
  $('#bagAlloc').hidden = !(W.sol.address && segs.length);
  if (segs.length) { $('#baBar').innerHTML = segs.map((x, i) => `<i style="flex:${x.usd};background:${COL[i % COL.length]}" title="${esc(x.sym)} ${usd(x.usd)}"></i>`).join(''); $('#baLeg').innerHTML = segs.map((x, i) => `<span><i style="background:${COL[i % COL.length]}"></i>${esc(x.sym)} ${(x.usd / tot * 100).toFixed(1)}%</span>`).join(''); }
  const n = (W.sol.address ? 1 : 0) + (W.evm.address ? 1 : 0), bc = $('#bagConnect');
  bc.classList.toggle('on', n > 0); bc.querySelector('span').textContent = n === 2 ? 'Both wallets connected' : n ? 'Connect the other wallet' : 'Connect wallets';
}
$('#bagConnect').onclick = () => openWallets();
on('sol', () => { if (page === 'bag') nwDraw(); }); on('evm', () => { if (page === 'bag') nwDraw(); });
// ---------------------------------------------------------------- respect: every trade you finish here is a job, jobs climb the ranks
const RANKS = [[0, 'Rookie'], [1, 'Street hustler'], [5, 'Shot caller'], [15, 'Lieutenant'], [40, 'Kingpin'], [100, 'Legend of Vice']];
function respect(bump) {
  let n = +store.get('blox:jobs', 0) || 0; if (bump) { n++; store.set('blox:jobs', n); }
  const i = RANKS.findLastIndex(r => n >= r[0]), cur = RANKS[i], nx = RANKS[i + 1];
  $('#hRankN').textContent = cur[1]; $('#hRankJ').textContent = n === 1 ? '1 job' : n + ' jobs';
  $('#hRank').style.setProperty('--r', nx ? ((n - cur[0]) / (nx[0] - cur[0]) * 100).toFixed(0) + '%' : '100%');
  $('#hRank').title = nx ? `${nx[0] - n} more ${nx[0] - n === 1 ? 'job' : 'jobs'} to ${nx[1]}` : 'Top rank';
  return bump && i > RANKS.findLastIndex(r => n - 1 >= r[0]) ? cur[1] : null;
}
respect();
// ---------------------------------------------------------------- mission passed: a filled trade gets the big banner
window.__bloxMission = (verb, sym) => {
  const up = respect(true);
  if (up) setTimeout(() => toast('Promoted: ' + up, 'ok', 5000), 3300);
  if (reduced()) return;
  const o = document.createElement('div'); o.className = 'mission';
  o.innerHTML = `<b>Mission passed</b><span>$${esc(String(sym || '').slice(0, 14))} ${esc(verb)}</span><em>Respect +</em>`;
  document.body.appendChild(o); setTimeout(() => o.remove(), 3200);
};
