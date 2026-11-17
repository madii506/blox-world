// BLOX · what crypto X is talking about right now. X's public trend lists for a handful of countries (read politely from
// getdaytrends' public pages, the same lists X shows), filtered down to crypto topics. Nothing is invented: when no crypto
// topic is trending, the list is empty.
const PLACES = [
  { id: 'ww', name: 'worldwide', path: '' }, { id: 'us', name: 'the US', path: 'united-states' }, { id: 'gb', name: 'the UK', path: 'united-kingdom' },
  { id: 'ca', name: 'Canada', path: 'canada' }, { id: 'au', name: 'Australia', path: 'australia' }, { id: 'ng', name: 'Nigeria', path: 'nigeria' },
  { id: 'tr', name: 'Turkey', path: 'turkey' }, { id: 'in', name: 'India', path: 'india' }, { id: 'ph', name: 'the Philippines', path: 'philippines' },
  { id: 'za', name: 'South Africa', path: 'south-africa' }, { id: 'id', name: 'Indonesia', path: 'indonesia' }, { id: 'kr', name: 'South Korea', path: 'korea' },
];
const CRYPTO = /\b(bitcoin|btc|ethereum|eth|solana|crypto|cryptocurrenc(y|ies)|memecoins?|meme ?coins?|pump\.?fun|altcoins?|altseason|blockchain|binance|coinbase|kraken|bybit|okx|bitget|kucoin|xrp|ripple|dogecoin|doge|shiba ?inu|shib|pepe|bonk|dogwifhat|airdrops?|nfts?|defi|web3|hyperliquid|polymarket|kalshi|stablecoins?|usdt|usdc|tether|saylor|microstrategy|satoshi|halving|metamask|raydium|cardano|chainlink|uniswap|aave|toncoin|litecoin|ltc|aptos|arbitrum|bull ?run|bear ?market|vitalik|ethereum etf|bitcoin etf|spot etf|coinmarketcap|coingecko|phantom wallet|ledger wallet|cz binance|onchain|on-chain|degen|wagmi|hodl|rugpull|rug pull|token launch|mainnet|testnet|staking)\b/i;
const CASHTAG = /^\$[A-Za-z][A-Za-z0-9]{1,9}$/;
const BLOCK = /\b(rip|r\.i\.p|rest in peace|in memoriam|passed away|obituary|death|died|dies|killed|killing|murder|shooting|massacre|terror|attack|bomb|explosion|crash|earthquake|tsunami|flood|hurricane|wildfire|stabbing|rape|suicide|porn|nsfw|onlyfans|hitler|nazi)\b/i;
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const unent = s => s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => e[0] === '#' ? String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : +e.slice(1)) : (ENT[e.toLowerCase()] ?? m));
const keyOf = n => String(n || '').normalize('NFKC').toLowerCase().replace(/^#/, '').replace(/[\s_.\-'’"“”!?,:;()]+/g, '');

async function page(p) {
  const r = await fetch('https://getdaytrends.com/' + (p.path ? p.path + '/' : ''), { headers: { 'user-agent': 'Mozilla/5.0 (compatible; blox/1.0; +trends)', accept: 'text/html' }, signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new Error(p.id + ' ' + r.status);
  const html = await r.text(), out = [];
  const re = /<table class="table table-hover text-left clickable ranking trends[^"]*"[^>]*>([\s\S]*?)<\/table>/g; let t;
  while ((t = re.exec(html))) { const rx = /<th[^>]*class="pos"[^>]*>\s*(\d+)\s*<\/th>\s*<td class="main">\s*<a[^>]*>([^<]+)<\/a>/g; let m; while ((m = rx.exec(t[1]))) out.push({ rank: +m[1], name: unent(m[2]).trim() }); }
  return out.slice(0, 50);
}
let cache = null;
async function read() {
  if (cache && Date.now() - cache.at < 4 * 60e3) return cache;
  const got = await Promise.allSettled(PLACES.map(page)), by = new Map();
  got.forEach((g, i) => {
    if (g.status !== 'fulfilled') return; const p = PLACES[i];
    for (const t of g.value) {
      const plain = t.name.replace(/#/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2');
      if (BLOCK.test(plain) || !(CRYPTO.test(plain) || CASHTAG.test(t.name))) continue;
      const k = keyOf(t.name), o = by.get(k) || { name: t.name, places: [], best: 99, bestAt: p };
      o.places.push(p.id); if (t.rank < o.best) { o.best = t.rank; o.bestAt = p; } by.set(k, o);
    }
  });
  const items = [...by.values()].sort((a, b) => b.places.length - a.places.length || a.best - b.best).slice(0, 15)
    .map(o => ({ name: o.name, rank: o.best, places: o.places, where: `#${o.best} ${o.bestAt.id === 'ww' ? 'worldwide' : 'in ' + o.bestAt.name}${o.places.length > 1 ? ' · ' + o.places.length + ' places' : ''}` }));
  cache = { at: Date.now(), read: got.filter(g => g.status === 'fulfilled').length, items };
  return cache;
}
module.exports = async (req, res) => {
  try {
    const d = await read();
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.setHeader('cache-control', 'public, s-maxage=300, stale-while-revalidate=900');
    res.end(JSON.stringify({ at: d.at, places: d.read, items: d.items }));
  } catch (e) {
    res.statusCode = 200; res.setHeader('content-type', 'application/json'); res.setHeader('cache-control', 'no-store');
    res.end(JSON.stringify({ at: Date.now(), places: 0, items: [] }));
  }
};
