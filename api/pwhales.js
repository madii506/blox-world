// BLOX · pump.fun whales: the recent trades and SOL balance of a few known traders' public wallets, read straight from
// Solana (public RPC). A trade is a transaction where the wallet's SOL went one way and a token went the other.
// Live trades after this come from PumpPortal's stream in the browser; this fills the history so nothing starts empty.
const RPCS = ['https://solana-rpc.publicnode.com', 'https://api.mainnet-beta.solana.com'];
const B58 = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/, WSOL = 'So11111111111111111111111111111111111111112';
const STABLE = new Set(['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB']);

async function rpc(method, params) {
  for (const u of RPCS) {
    try {
      const r = await fetch(u, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }), signal: AbortSignal.timeout(7000) });
      if (!r.ok) continue; const j = await r.json(); if (j && j.result !== undefined) return j.result;
    } catch { }
  }
  return null;
}
async function wallet(a) {
  const [bal, sigs] = await Promise.all([rpc('getBalance', [a, { commitment: 'confirmed' }]), rpc('getSignaturesForAddress', [a, { limit: 14, commitment: 'confirmed' }])]);
  const ok = (sigs || []).filter(s => !s.err).slice(0, 10);
  const txs = await Promise.all(ok.map(s => rpc('getTransaction', [s.signature, { encoding: 'jsonParsed', maxSupportedTransactionVersion: 0, commitment: 'confirmed' }])));
  const trades = [];
  txs.forEach((tx, i) => {
    if (!tx || !tx.meta || tx.meta.err) return;
    const keys = (tx.transaction.message.accountKeys || []).map(k => k.pubkey || k), wi = keys.indexOf(a); if (wi < 0) return;
    const pre = new Map(), post = new Map();
    for (const b of tx.meta.preTokenBalances || []) if (b.owner === a) pre.set(b.mint, (pre.get(b.mint) || 0) + (+b.uiTokenAmount.uiAmount || 0));
    for (const b of tx.meta.postTokenBalances || []) if (b.owner === a) post.set(b.mint, (post.get(b.mint) || 0) + (+b.uiTokenAmount.uiAmount || 0));
    const dSol = (tx.meta.postBalances[wi] - tx.meta.preBalances[wi]) / 1e9 + ((post.get(WSOL) || 0) - (pre.get(WSOL) || 0));
    let best = null;
    for (const m of new Set([...pre.keys(), ...post.keys()])) { if (m === WSOL || STABLE.has(m)) continue; const d = (post.get(m) || 0) - (pre.get(m) || 0); if (d && (!best || Math.abs(d) > Math.abs(best.d))) best = { m, d }; }
    if (!best || Math.abs(dSol) < .01) return;                                  // not a swap against SOL
    const side = best.d > 0 ? 'buy' : 'sell'; if ((side === 'buy') !== (dSol < 0)) return;
    trades.push({ sig: ok[i].signature, t: (ok[i].blockTime || tx.blockTime || 0) * 1000, mint: best.m, side, sol: Math.abs(dSol), amt: Math.abs(best.d) });
  });
  return { a, sol: bal && bal.value != null ? bal.value / 1e9 : null, trades };
}
module.exports = async (req, res) => {
  const list = String(req.query.a || '').split(',').map(s => s.trim()).filter(s => B58.test(s)).slice(0, 5);
  res.setHeader('content-type', 'application/json; charset=utf-8');
  if (!list.length) { res.statusCode = 400; return res.end('{"rows":[]}'); }
  try {
    const rows = await Promise.all(list.map(wallet));
    res.setHeader('cache-control', 'public, s-maxage=40, stale-while-revalidate=120');
    res.end(JSON.stringify({ at: Date.now(), rows }));
  } catch {
    res.setHeader('cache-control', 'no-store'); res.end(JSON.stringify({ at: Date.now(), rows: [] }));
  }
};
