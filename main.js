// BLOX · boot: no landing page. The site opens on the streets (a voxel city where every live coin is a car); every terminal page is an app on the phone that opens over it
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
// ---------------------------------------------------------------- the world: no landing page, the site opens on the streets
let world = null, coins = [], pinned = null;
const heatOf = t => { const s = t.s5m || {}; return (s.numBuys || 0) + (s.numSells || 0); };
async function loadCoins() {
  try {
    const list = (await api.trending('5m', 40)).filter(t => t && t.mint && t.symbol);
    if (!list.length) throw new Error('empty');
    const hmax = Math.max(1, ...list.map(heatOf));
    coins = list.map(t => { const h = heatOf(t) / hmax, ch = (t.s5m && t.s5m.priceChange) ?? (t.s1h && t.s1h.priceChange);
      return { ...t, iconUrl: t.icon ? img(t.icon, t.mint) : '', heat: h, stars: Math.max(1, Math.min(5, Math.ceil(h * 5))), up: (ch || 0) >= 0, chg: ch }; });
    if (world) world.setCoins(coins);
    drawFeed(); wanted();
  } catch (e) {
    if (!coins.length) { $('#hList').innerHTML = '<p class="h-empty">The streets are quiet: the market feed is not answering. Retrying every 30 seconds.</p>'; $('#hCount').textContent = '—'; }
  }
}
function wanted() {
  const tot = coins.reduce((s, c) => s + heatOf(c), 0), lvl = tot ? Math.max(1, Math.min(5, Math.round(Math.log10(tot) - 1.4))) : 0;
  $$('#hWanted i').forEach((s, i) => s.classList.toggle('on', i < lvl));
}
function drawFeed() {
  $('#hCount').textContent = coins.length;
  const L = $('#hList'); if (!drawFeed.done) { drawFeed.done = 1; L.classList.add('anim'); setTimeout(() => L.classList.remove('anim'), 2200); }
  L.innerHTML = coins.map((c, i) => `<button type="button" data-m="${esc(c.mint)}" style="--i:${i}">${c.iconUrl ? `<img src="${esc(c.iconUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : '<i></i>'}<b>$${esc(c.symbol)}</b><em class="${cls(c.chg)}">${pct(c.chg, 1)}</em><span class="st">${'★'.repeat(c.stars)}</span><small>${usd(c.mcap)}</small></button>`).join('');
}
$('#hList').addEventListener('click', e => { const b = e.target.closest('button[data-m]'); if (!b) return; const c = coins.find(x => x.mint === b.dataset.m); if (c) { if (world) world.follow(c.mint); card(c); html.classList.remove('feed-open'); } });
function card(c) {
  pinned = c; const el = $('#hCard'); if (!c) { el.hidden = true; return; }
  const s5 = c.s5m || {}, s1 = c.s1h || {};
  el.hidden = false;
  el.innerHTML = `<button class="hc-x" type="button" data-a="x" aria-label="Close">✕</button>
    <div class="hc-h">${c.iconUrl ? `<img src="${esc(c.iconUrl)}" alt="" referrerpolicy="no-referrer">` : ''}<div><b>$${esc(c.symbol)}</b><span>${esc(c.name || '')}</span></div><em>${'★'.repeat(c.stars)}<i>${'★'.repeat(5 - c.stars)}</i></em></div>
    <div class="hc-g"><div><span>Market cap</span><b>${usd(c.mcap)}</b></div><div><span>5m</span><b class="${cls(s5.priceChange)}">${pct(s5.priceChange)}</b></div><div><span>1h</span><b class="${cls(s1.priceChange)}">${pct(s1.priceChange)}</b></div>
    <div><span>Liquidity</span><b>${usd(c.liq)}</b></div><div><span>Trades 5m</span><b>${heatOf(c) || '—'}</b></div><div><span>Holders</span><b>${c.holders ? c.holders.toLocaleString() : '—'}</b></div></div>
    <div class="hc-a"><button class="btn-steal" data-a="steal" type="button">Steal it</button><button class="btn-ghost2" data-a="chart" type="button">Chart</button><button class="btn-ghost2" data-a="ca" type="button">${short(c.mint)}</button></div>`;
}
$('#hCard').addEventListener('click', e => {
  const b = e.target.closest('button[data-a]'); if (!b || !pinned) return; const a = b.dataset.a;
  if (a === 'x') { card(null); if (world) world.unfollow(); return; }
  if (a === 'ca') return copy(pinned.mint);
  const m = pinned.mint; boot(); go('trade'); setTimeout(() => window.__buxPick && window.__buxPick(m, a === 'steal' ? 'ape' : null), 120);
});
function tip(c, x, y) {
  const el = $('#hTip'); if (!c || pinned) { el.hidden = true; return; }
  el.hidden = false; el.innerHTML = `<b>$${esc(c.symbol)}</b><em class="${cls(c.chg)}">${pct(c.chg, 1)}</em><span>${usd(c.mcap)}</span><small>click to follow</small>`;
  el.style.left = Math.min(innerWidth - 220, x + 16) + 'px'; el.style.top = (y + 14) + 'px';
}
// the radar: the city from above, turned with the camera, a blip for every car
const rc = $('#radar'), rg = rc.getContext('2d');
function drawRadar(w) {
  if (html.classList.contains('panel')) return;
  const S = rc.width, h = S / 2, scale = S / 240, t = w.controls.target, az = Math.atan2(w.cam.position.x - t.x, w.cam.position.z - t.z);
  rg.setTransform(1, 0, 0, 1, 0, 0); rg.clearRect(0, 0, S, S);
  rg.save(); rg.beginPath(); rg.arc(h, h, h - 6, 0, Math.PI * 2); rg.clip();
  rg.fillStyle = 'rgba(20,12,56,.92)'; rg.fillRect(0, 0, S, S);
  rg.translate(h, h); rg.rotate(az); rg.scale(scale, scale); rg.translate(-t.x, -t.z);
  rg.fillStyle = 'rgba(66,84,255,.55)'; rg.fillRect(w.beach + 14, -500, 900, 1000);
  rg.fillStyle = 'rgba(250,210,160,.45)'; rg.fillRect(w.beach, -500, 14, 1000);
  rg.fillStyle = 'rgba(58,138,90,.45)'; rg.fillRect(-140, -w.half - 70, 280, 52);
  rg.strokeStyle = 'rgba(200,180,255,.42)'; rg.lineWidth = 3.6;
  for (let k = 0; k <= 9; k++) { const v = -w.half + k * w.pitch - 2; rg.beginPath(); rg.moveTo(v, -w.half); rg.lineTo(v, w.half); rg.stroke(); rg.beginPath(); rg.moveTo(-w.half, v); rg.lineTo(Math.min(w.half, w.beach), v); rg.stroke(); }
  const now = performance.now();
  for (const c of w.cars) {
    if (!c.pos) continue; const r = c.coin ? 3.6 : 1.9;
    rg.fillStyle = c.police ? (Math.sin(now / 90) > 0 ? '#ff4f6e' : '#5fa0ff') : c.coin ? (c.coin.up ? '#2ee6a6' : '#ff4f9e') : 'rgba(255,255,255,.4)';
    rg.fillRect(c.pos[0] - r, c.pos[1] - r, r * 2, r * 2);
  }
  rg.restore();
  rg.fillStyle = '#fff'; rg.beginPath(); rg.moveTo(h, h - 14); rg.lineTo(h + 9, h + 9); rg.lineTo(h, h + 3); rg.lineTo(h - 9, h + 9); rg.closePath(); rg.fill();
  rg.strokeStyle = 'rgba(255,255,255,.9)'; rg.lineWidth = 6; rg.beginPath(); rg.arc(h, h, h - 6, 0, Math.PI * 2); rg.stroke();
  const n = $('.h-n'), rr = rc.getBoundingClientRect().width / 2 - 12; n.style.transform = `translate(${Math.sin(az) * -rr}px, ${-Math.cos(az) * rr}px)`;
}
function startWorld() {
  import('./world.js?v=1').then(m => {
    world = m.startWorld($('#world'), { reduced: reduced(), onHover: tip, onPick: c => { card(c); $('#hTip').hidden = true; phone.hidden = true; $('#hPhone').classList.remove('on'); }, onFrame: drawRadar });
    html.classList.add('hud-in');
    if (html.classList.contains('panel')) setTimeout(() => { if (html.classList.contains('panel')) world.pause(true); }, 900);   // one frame of the city behind the page
    loadCoins(); setInterval(loadCoins, 30000);
  }).catch(e => { console.error(e); html.classList.add('noworld'); loadCoins(); });
}
// the phone: every page is an app that opens over the city
const phone = $('#phone');
const togglePhone = v => { phone.hidden = v == null ? !phone.hidden : !v; $('#hPhone').classList.toggle('on', !phone.hidden); };
$('#hPhone').onclick = () => togglePhone();
phone.addEventListener('click', e => { if (e.target.closest('a[data-go]')) togglePhone(false); });
$('#world').addEventListener('pointerdown', () => { if (!phone.hidden) togglePhone(false); html.classList.remove('feed-open'); });
// on the streets: ↑ or P takes the phone out (like the game), Esc puts it away and lets go of the coin you follow
addEventListener('keydown', e => {
  if (html.classList.contains('panel') || e.metaKey || e.ctrlKey || e.altKey || !$('#modal').hidden || !$('#pal').hidden || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
  if (e.key === 'ArrowUp' || e.key === 'p' || e.key === 'P') { e.preventDefault(); togglePhone(); }
  else if (e.key === 'Escape') { if (!phone.hidden) togglePhone(false); else if (pinned) { card(null); if (world) world.unfollow(); } }
});
const clock = () => { $('#phClock').textContent = new Date().toTimeString().slice(0, 5); }; clock(); setInterval(clock, 15000);
$('#hCoins').onclick = () => html.classList.toggle('feed-open');
$('#hConnect').onclick = () => openWallets();
$('#hSearch').onclick = () => openPalette();
$('#homeBtn').onclick = () => go('map');
addEventListener('keydown', e => { if (e.key === 'Escape' && html.classList.contains('panel') && $('#modal').hidden && $('#pal').hidden) go('map'); });
// the money counter: your bag in dollars, once a wallet is connected and the terminal has priced it
setInterval(() => { const b = window.__bux && window.__bux.bag ? window.__bux.bag() : null; const v = b && W.sol.address ? b.tot : 0; $('#hCash').textContent = '$' + Math.round(v || 0).toLocaleString('en-US'); }, 3000);

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
  for (const b of [$('#connectBtn'), $('#hConnect')]) { b.classList.toggle('on', n > 0); b.querySelector('span').textContent = label; }
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
function runPal(i) { const it = palItems[i]; if (!it) return; closePalette(); boot(); if (it.coin) { go('trade'); window.__buxPick && window.__buxPick(it.coin.mint, 'ape'); } else it.act[3](); }
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
// GTA VI comes out on 19 November 2026
(() => {
  const at = new Date('2026-11-19T00:00:00').getTime(), els = [$('#navGta b'), $('#hGta b')];
  const tick = () => { const s = Math.floor((at - Date.now()) / 1000); if (s <= 0) { els.forEach(e => e.textContent = 'OUT NOW'); $('#navGta').classList.add('out'); $('#hGta').classList.add('out'); return; }
    const d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60), x = s % 60;
    const t = `${d}d ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(x).padStart(2, '0')}`; els.forEach(e => e.textContent = t); };
  tick(); setInterval(tick, 1000);
})();

// ---------------------------------------------------------------- mission passed: a filled trade gets the big banner
window.__bloxMission = (verb, sym) => {
  if (reduced()) return;
  const o = document.createElement('div'); o.className = 'mission';
  o.innerHTML = `<b>Mission passed</b><span>$${esc(String(sym || '').slice(0, 14))} ${esc(verb)}</span><em>Respect +</em>`;
  document.body.appendChild(o); setTimeout(() => o.remove(), 3200);
};
