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
// ---------------------------------------------------------------- the world: no landing page, the site opens on the streets
// every live feed becomes part of the city: trending coins drive, new drops arrive in gold, perps sail the harbor,
// whales fly the helicopters, the biggest coins hold the billboards, the market's mood sets fireworks, riots and rain
let world = null, coins = [], drops = [], perpList = [], whales = [], pinned = null, feedTab = 'hot', seenDrops = null, chasedMint = null;
const heatOf = t => { const s = t.s5m || {}; return (s.numBuys || 0) + (s.numSells || 0); };
const shape = (t, hmax, isNew) => {
  const h = heatOf(t) / hmax, has5 = t.s5m && t.s5m.priceChange != null, ch = has5 ? t.s5m.priceChange : t.s1h && t.s1h.priceChange;
  return { ...t, iconUrl: t.icon ? img(t.icon, t.mint) : '', heat: h, stars: Math.max(1, Math.min(5, Math.ceil(h * 5))), up: (ch || 0) >= 0, chg: ch, tf: has5 ? '5 min' : '1 hour', isNew: !!isNew };
};
const n0 = v => v == null || !isFinite(v) ? '—' : Math.round(v).toLocaleString('en-US');
const hbar = n => `<span class="hbar" aria-label="heat ${n} of 5">${[0, 1, 2, 3, 4].map(k => `<i${k < n ? ' class="on"' : ''}></i>`).join('')}</span>`;
const ava = (c, big) => c.iconUrl ? `<img src="${esc(c.iconUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : `<i class="ava${big ? ' big' : ''}">${esc((c.symbol || '?').slice(0, 2))}</i>`;
const pava = p => `<i class="ava perp">${esc(p.name.replace(/^k/, '').slice(0, 3))}</i>`;
const wname = w => w.n ? w.n : short(w.a);
const money = v => (v < 0 ? '-' : '+') + usd(Math.abs(v));
const fundStr = p => p.apr == null || !isFinite(p.apr) ? '—' : (p.apr > 0 ? '+' : '') + p.apr.toFixed(1) + '% APR';
const empty = t => `<p class="h-empty">${t}</p>`;

async function loadCoins() {
  const [tr, rc] = await Promise.allSettled([api.trending('5m', 40), api.recent(30)]);
  const list = tr.status === 'fulfilled' ? (tr.value || []).filter(t => t && t.mint && t.symbol) : [];
  if (list.length) { const hmax = Math.max(1, ...list.map(heatOf)); coins = list.map(t => shape(t, hmax)); }
  if (rc.status === 'fulfilled') {
    const have = new Set(coins.map(c => c.mint)), fresh = (rc.value || []).filter(t => t && t.mint && t.symbol && !have.has(t.mint)).slice(0, 12);
    const hmax = Math.max(1, ...fresh.map(heatOf)), prev = seenDrops; seenDrops = new Set(fresh.map(t => t.mint));
    drops = fresh.map(t => shape(t, hmax, true));
    if (prev) { const nw = drops.find(d => !prev.has(d.mint)); if (nw) push({ type: 'drop', c: nw }); }
  }
  if (!coins.length && !drops.length) { if (feedTab === 'hot' || feedTab === 'new') $('#hList').innerHTML = empty('The streets are quiet: the market feed is not answering. Retrying every 30 seconds.'); $('#hCount').textContent = '—'; return; }
  if (world) {
    world.setCoins([...coins, ...drops]);
    const ch = world.chased(); if (ch && ch.mint !== chasedMint) push({ type: 'chase', c: ch }); chasedMint = ch ? ch.mint : null;
  }
  mood(); drawFeed();
}
// the mood of the trenches: how much of the last 5 minutes of trading went into coins that are up
function mood() {
  let up = 0, all = 0; for (const c of coins) { const w = heatOf(c) || 1; all += w; if (c.up) up += w; }
  if (!all) return;
  const m = up / all; if (world) world.setMood(m);
  const el = $('#hMood'); el.hidden = false; el.style.setProperty('--m', (m * 100).toFixed(1) + '%'); el.classList.toggle('red', m < .5);
  $('#hMoodV').textContent = Math.round(m * 100) + '% green';
  $('#hMoodL').textContent = m >= .62 ? 'Euphoria' : m >= .5 ? 'Calm streets' : m >= .38 ? 'Tension' : 'Riots';
}
on('perps', P => { perpList = (P.list || []).filter(p => p.oi > 0).sort((a, b) => b.oi - a.oi); if (world) world.setPerps(perpList); if (feedTab === 'perps') drawFeed(); });
async function loadWhales() {
  try {
    const r = await fetch('/api/whales?win=day&sort=pnl'); if (!r.ok) throw new Error(r.status);
    const d = await r.json(); whales = (d.rows || []).slice(0, 20).map(x => ({ a: x.a, n: x.n, v: x.v, pnl: x.p[0], roi: x.p[1], vlm: x.p[2] }));
    if (world) world.setWhales(whales.slice(0, 3)); if (feedTab === 'whales') drawFeed();
  } catch { if (feedTab === 'whales' && !whales.length) $('#hList').innerHTML = empty('The whale feed is not answering right now.'); }
}

// ---------------------------------------------------------------- the feed: Hot, New, Harbor, Whales
$('#hTabs').addEventListener('click', e => { const b = e.target.closest('button[data-t]'); if (!b) return; feedTab = b.dataset.t; $$('#hTabs button').forEach(x => x.classList.toggle('on', x === b)); drawFeed(true); });
const prevChg = new Map();
function drawFeed(anim) {
  const L = $('#hList'); if (anim || !drawFeed.done) { drawFeed.done = 1; L.classList.remove('anim'); void L.offsetWidth; L.classList.add('anim'); clearTimeout(drawFeed.t); drawFeed.t = setTimeout(() => L.classList.remove('anim'), 2200); }
  if (feedTab === 'perps') {
    $('#hCount').textContent = perpList.length || '—';
    L.innerHTML = perpList.slice(0, 40).map((p, i) => `<button type="button" data-p="${esc(p.name)}" style="--i:${i}">${pava(p)}<b>${esc(p.name)}</b><em class="${cls(p.chg)}">${pct(p.chg, 1)}</em><span class="sub ${p.apr > 0 ? 'up' : p.apr < 0 ? 'dn' : ''}">${fundStr(p)}</span><small>${usd(p.oi)} OI</small></button>`).join('') || empty('The harbor is loading the perps from Hyperliquid…');
    return;
  }
  if (feedTab === 'whales') {
    $('#hCount').textContent = whales.length || '—';
    L.innerHTML = whales.map((w, i) => `<button type="button" data-w="${esc(w.a)}" style="--i:${i}"><i class="ava whale">${i + 1}</i><b>${esc(wname(w))}</b><em class="${cls(w.pnl)}">${money(w.pnl)}</em><span class="sub">today · ${pct(w.roi * 100, 1)}</span><small>${usd(w.v)}</small></button>`).join('') || empty('Loading today’s top Hyperliquid traders…');
    return;
  }
  const src = feedTab === 'new' ? drops : coins;
  $('#hCount').textContent = src.length || '—';
  L.innerHTML = src.map((c, i) => `<button type="button" data-m="${esc(c.mint)}" style="--i:${i}">${ava(c)}<b>$${esc(c.symbol)}${c.isNew ? ' <u>NEW</u>' : ''}${c.mint === chasedMint ? ' <u class="cop">COPS</u>' : ''}</b><em class="${cls(c.chg)}">${pct(c.chg, 1)}</em>${hbar(c.stars)}<small>${usd(c.mcap)}</small></button>`).join('')
    || empty(feedTab === 'new' ? 'No new drops in the feed right now.' : 'Scanning the streets…');
  src.forEach(c => { const p = prevChg.get(c.mint); if (p != null && c.chg != null && Math.abs(c.chg - p) > .05) { const b = L.querySelector(`button[data-m="${CSS.escape(c.mint)}"]`); b && b.classList.add(c.chg > p ? 'fl-up' : 'fl-dn'); } prevChg.set(c.mint, c.chg); });
}
$('#hList').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return; html.classList.remove('feed-open');
  if (b.dataset.m) { const c = [...coins, ...drops].find(x => x.mint === b.dataset.m); if (c) { if (world) world.follow(c.mint); card({ kind: 'coin', coin: c }); } }
  else if (b.dataset.p) { const p = perpList.find(x => x.name === b.dataset.p); if (p) { if (world) world.followPerp(p.name); card({ kind: 'perp', perp: p }); } }
  else if (b.dataset.w) { const w = whales.find(x => x.a === b.dataset.w); if (w) card({ kind: 'whale', whale: w }); }
});

// ---------------------------------------------------------------- cards: a coin, a perp, a whale, or a coin in your own garage
const X = '<button class="hc-x" type="button" data-a="x" aria-label="Close">✕</button>';
const cell = (k, v, c = '') => `<div><span>${k}</span><b class="${c}">${v}</b></div>`;
function card(it) {
  pinned = it; const el = $('#hCard'); if (!it) { el.hidden = true; return; }
  togglePhone(false); $('#hMissions').hidden = true; nt.classList.remove('in');
  el.hidden = false; el.className = 'h-card k-' + it.kind;
  if (it.kind === 'coin') {
    const c = it.coin, s5 = c.s5m || {}, s1 = c.s1h || {};
    el.innerHTML = `${X}<div class="hc-h">${ava(c, 1)}<div><b>$${esc(c.symbol)}</b><span>${esc(c.name || '')}${c.isNew ? ' · <u>NEW DROP</u>' : ''}${c.mint === chasedMint ? ' · <u class="cop">WANTED BY THE COPS</u>' : ''}</span></div><em>${hbar(c.stars)}<small>heat</small></em></div>
      <div class="hc-g">${cell('Market cap', usd(c.mcap))}${cell('5m', pct(s5.priceChange), cls(s5.priceChange))}${cell('1h', pct(s1.priceChange), cls(s1.priceChange))}${cell('Liquidity', usd(c.liq))}${cell('Trades 5m', n0(heatOf(c)))}${cell('Holders', n0(c.holders))}</div>
      <div class="hc-a"><button class="btn-steal" data-a="steal" type="button">Steal it</button><button class="btn-ghost2" data-a="chart" type="button">Chart</button><button class="btn-ghost2 ca" data-a="ca" type="button">${short(c.mint)}</button></div>`;
  } else if (it.kind === 'perp') {
    const p = it.perp;
    el.innerHTML = `${X}<div class="hc-h">${pava(p)}<div><b>${esc(p.name)}</b><span>Perp on Hyperliquid · up to ${p.maxLev}x</span></div><em><b class="${cls(p.chg)}">${pct(p.chg, 1)}</b><small>24h</small></em></div>
      <div class="hc-g">${cell('Mark', '$' + px(p.mark))}${cell('Funding', fundStr(p), p.apr > 0 ? 'up' : p.apr < 0 ? 'dn' : '')}${cell('Open interest', usd(p.oi))}${cell('24h volume', usd(p.vol))}${cell('Max leverage', p.maxLev + 'x')}${cell('Who pays', p.fund > 0 ? 'longs pay' : p.fund < 0 ? 'shorts pay' : '—')}</div>
      <div class="hc-a"><button class="btn-steal" data-a="long" type="button">Long</button><button class="btn-short" data-a="short" type="button">Short</button><button class="btn-ghost2" data-a="board" type="button">Board</button></div>`;
  } else if (it.kind === 'whale') {
    const w = it.whale, rank = whales.findIndex(x => x.a === w.a) + 1;
    el.innerHTML = `${X}<div class="hc-h"><i class="ava whale big">${rank || 'W'}</i><div><b>${esc(wname(w))}</b><span>${rank ? `Whale #${rank} on Hyperliquid today` : 'Hyperliquid trader'}</span></div><em><b class="${cls(w.pnl)}">${money(w.pnl)}</b><small>today</small></em></div>
      <div class="hc-g">${cell('Account', usd(w.v))}${cell('P&L today', money(w.pnl), cls(w.pnl))}${cell('ROI today', pct(w.roi * 100, 1), cls(w.roi))}${cell('Volume today', usd(w.vlm))}${cell('Address', short(w.a))}${cell('Rank', rank ? '#' + rank : '—')}</div>
      <div class="hc-a"><button class="btn-steal" data-a="track" type="button">Track them</button><button class="btn-ghost2" data-a="copyw" type="button">Copy address</button><a class="btn-ghost2" href="https://app.hyperliquid.xyz/explorer/address/${esc(w.a)}" target="_blank" rel="noopener">Explorer ↗</a></div>`;
  } else if (it.kind === 'mine') {
    const r = it.row;
    el.innerHTML = `${X}<div class="hc-h">${ava({ iconUrl: r.iconUrl, symbol: r.sym }, 1)}<div><b>$${esc(r.sym)}</b><span>In your safehouse</span></div><em><b class="${cls(r.ch)}">${pct(r.ch, 1)}</b><small>24h</small></em></div>
      <div class="hc-g">${cell('Value', usd(r.usd))}${cell('Amount', n0(r.ui))}${cell('24h', pct(r.ch), cls(r.ch))}</div>
      <div class="hc-a"><button class="btn-steal" data-a="sell" type="button">Cash out</button><button class="btn-ghost2" data-a="hedge" type="button">Hedge</button><button class="btn-ghost2" data-a="chart" type="button">Chart</button></div>`;
  }
}
$('#hCard').addEventListener('click', e => {
  const b = e.target.closest('[data-a]'); if (!b || !pinned) return; const a = b.dataset.a, it = pinned;
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
  } else if (it.kind === 'whale' && a === 'track') {
    go('whales'); setTimeout(() => { const q = $('#whQ'); if (q) { q.value = it.whale.a; q.dispatchEvent(new Event('input', { bubbles: true })); } }, 400);
  }
});
function tip(it, x, y) {
  const el = $('#hTip'); if (!it || pinned) { el.hidden = true; return; }
  el.hidden = false;
  el.innerHTML = it.kind === 'coin' ? `<b>$${esc(it.coin.symbol)}</b><em class="${cls(it.coin.chg)}">${pct(it.coin.chg, 1)}</em><span>${usd(it.coin.mcap)}</span><small>click to follow</small>`
    : it.kind === 'perp' ? `<b>${esc(it.perp.name)}</b><em class="${cls(it.perp.chg)}">${pct(it.perp.chg, 1)}</em><span>${usd(it.perp.oi)} OI</span><small>perp · click</small>`
    : it.kind === 'whale' ? `<b>${esc(wname(it.whale))}</b><em class="${cls(it.whale.pnl)}">${money(it.whale.pnl)}</em><small>whale · click</small>`
    : it.kind === 'safehouse' ? `<b>Your safehouse</b><small>connect a wallet to park your bag here</small>`
    : `<b>$${esc(it.row.sym)}</b><span>${usd(it.row.usd)}</span><small>your bag</small>`;
  el.style.left = Math.min(innerWidth - 240, x + 16) + 'px'; el.style.top = (y + 14) + 'px';
}

// ---------------------------------------------------------------- missions: what's happening on the streets right now
function missions() {
  const out = [], live = coins.filter(c => c.chg != null).sort((a, b) => b.chg - a.chg);
  if (live[0] && live[0].chg > 0) out.push({ type: 'pump', c: live[0] });
  const dn = live[live.length - 1]; if (dn && dn.chg < 0) out.push({ type: 'dump', c: dn });
  const ch = world && world.chased && world.chased(); if (ch) out.push({ type: 'chase', c: ch });
  const busy = coins.slice().sort((a, b) => heatOf(b) - heatOf(a))[0]; if (busy) out.push({ type: 'busy', c: busy });
  if (drops[0]) out.push({ type: 'drop', c: drops[0] });
  const pm = perpList.slice(0, 30).filter(p => p.chg != null).sort((a, b) => Math.abs(b.chg) - Math.abs(a.chg))[0]; if (pm) out.push({ type: 'perp', p: pm });
  const pf = perpList.slice(0, 60).filter(p => isFinite(p.apr)).sort((a, b) => Math.abs(b.apr) - Math.abs(a.apr))[0]; if (pf) out.push({ type: 'fund', p: pf });
  if (whales[0]) out.push({ type: 'whale', w: whales[0] });
  return out;
}
function mtext(m) {
  const c = m.c, p = m.p, w = m.w;
  switch (m.type) {
    case 'pump': return { t: `$${c.symbol} is pumping`, s: `${pct(c.chg, 1)} in ${c.tf} · ${usd(c.mcap)} cap`, k: 'up', go: 'Steal it' };
    case 'dump': return { t: `$${c.symbol} is dumping`, s: `${pct(c.chg, 1)} in ${c.tf} · ${usd(c.mcap)} cap`, k: 'dn', go: 'Follow it' };
    case 'chase': return { t: `Cops are chasing $${c.symbol}`, s: `the biggest dump on the streets · ${pct(c.chg, 1)}`, k: 'cop', go: 'Watch the chase' };
    case 'busy': return { t: `$${c.symbol} is the busiest street`, s: `${n0(heatOf(c))} trades in 5 min`, k: 'hot', go: 'Follow it' };
    case 'drop': return { t: `New drop: $${c.symbol}`, s: `just launched · ${usd(c.mcap)} cap`, k: 'new', go: 'Catch it' };
    case 'perp': return { t: `${p.name} ${p.chg >= 0 ? 'ripped' : 'sank'} ${pct(p.chg, 1)} today`, s: `${usd(p.oi)} open interest in the harbor`, k: p.chg >= 0 ? 'up' : 'dn', go: p.chg >= 0 ? 'Long it' : 'Short it' };
    case 'fund': return { t: `${p.name} funding is ${fundStr(p)}`, s: p.fund > 0 ? 'longs are paying shorts' : 'shorts are paying longs', k: 'hot', go: 'Open the perp' };
    case 'whale': return { t: `Whale of the day: ${wname(w)}`, s: `${money(w.pnl)} on Hyperliquid today`, k: 'whale', go: 'Track them' };
  }
  return null;
}
function mava(m) { return m.c ? ava(m.c) : m.p ? pava(m.p) : `<i class="ava whale">1</i>`; }
function runMission(m) {
  if (m.c) { if (world) world.follow(m.c.mint); card({ kind: 'coin', coin: m.c }); }
  else if (m.p) { if (world) world.followPerp(m.p.name); card({ kind: 'perp', perp: m.p }); }
  else if (m.w) card({ kind: 'whale', whale: m.w });
}
// the notification slot: urgent items jump the queue, otherwise the missions take turns
const nt = $('#hNote'), urgent = []; let noteI = 0, shown = null;
function push(m) { urgent.push(m); if (urgent.length > 4) urgent.shift(); }
function note() {
  if (html.classList.contains('panel') || html.classList.contains('cine') || document.hidden || pinned || !$('#hMissions').hidden) return;
  const L = missions(), m = urgent.shift() || L[noteI++ % Math.max(1, L.length)]; if (!m) return; const t = mtext(m); if (!t) return;
  shown = m; nt.innerHTML = `${mava(m)}<span><b>${esc(t.t)}</b><em class="${t.k === 'up' ? 'up' : t.k === 'dn' || t.k === 'cop' ? 'dn' : ''}">${esc(t.s)}</em><small>${esc(t.go)} ›</small></span>`;
  nt.className = 'h-note k-' + t.k; nt.hidden = false; void nt.offsetWidth; nt.classList.add('in');
  clearTimeout(note.t); note.t = setTimeout(() => nt.classList.remove('in'), 5600);
}
nt.onclick = () => { if (shown) { runMission(shown); nt.classList.remove('in'); } };
// the Missions app: every live mission at once
function openMissions() {
  const L = missions(), el = $('#hMissions'); togglePhone(false); card(null);
  $('#hmList').innerHTML = L.map((m, i) => { const t = mtext(m); return t ? `<button type="button" data-i="${i}" class="k-${t.k}" style="--i:${i}">${mava(m)}<span><b>${esc(t.t)}</b><em>${esc(t.s)}</em></span><small>${esc(t.go)} ›</small></button>` : ''; }).join('') || empty('No live missions yet: the feeds are still loading.');
  el.hidden = false; el._L = L;
}
$('#hMissions').addEventListener('click', e => { const b = e.target.closest('button[data-i]'); if (b) { $('#hMissions').hidden = true; runMission($('#hMissions')._L[+b.dataset.i]); } else if (e.target.closest('[data-a=x]') || e.target.id === 'hMissions') $('#hMissions').hidden = true; });

// ---------------------------------------------------------------- the radar: the city from above, turned with the camera
const rc = $('#radar'), rg = rc.getContext('2d');
const DISTRICTS = [['DOWNTOWN', 0, 4], ['VICE BEACH', 0, 0, 'b'], ['HARBOR', 0, 0, 'h'], ['THE HILLS', 0, 0, 's']];
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
  if (w.garage && world && world.home) { const [hx, hz] = world.home(); rg.fillStyle = 'rgba(255,79,158,.9)'; rg.beginPath(); rg.arc(hx, hz, 6 + Math.sin(now / 300) * 1.5, 0, Math.PI * 2); rg.fill(); }
  for (const c of w.cars) {
    if (!c.pos) continue; const r = c.coin ? 3.6 : 1.9;
    rg.fillStyle = c.police ? (Math.sin(now / 90) > 0 ? '#ff4f6e' : '#5fa0ff') : c.coin ? (c.coin.isNew ? '#ffd23f' : c.coin.up ? '#2ee6a6' : '#ff4f9e') : 'rgba(255,255,255,.4)';
    rg.fillRect(c.pos[0] - r, c.pos[1] - r, r * 2, r * 2);
  }
  for (const b of w.boats || []) { if (!b.pos) continue; rg.fillStyle = '#7fd8ff'; rg.beginPath(); rg.moveTo(b.pos[0], b.pos[1] - 5); rg.lineTo(b.pos[0] + 3.4, b.pos[1] + 4); rg.lineTo(b.pos[0] - 3.4, b.pos[1] + 4); rg.closePath(); rg.fill(); }
  for (const hl of w.helis || []) { const p = hl.g.position; rg.strokeStyle = '#ffd23f'; rg.lineWidth = 2.4; rg.beginPath(); rg.arc(p.x, p.z, 4.5, 0, Math.PI * 2); rg.stroke(); }
  rg.restore();
  // district names stay upright and ride with the map
  rg.font = '800 15px Inter, sans-serif'; rg.textAlign = 'center'; rg.fillStyle = 'rgba(255,255,255,.62)';
  const ca = Math.cos(az), sa = Math.sin(az);
  for (const [name, x0, z0, k] of DISTRICTS) {
    const x = k === 'b' ? w.beach + 7 : k === 'h' ? w.beach + 46 : x0, z = k === 's' ? -w.half - 44 : z0;
    const dx = (x - t.x) * scale, dz = (z - t.z) * scale, rx = dx * ca - dz * sa, ry = dx * sa + dz * ca;
    if (rx * rx + ry * ry < (h - 30) * (h - 30)) rg.fillText(name, h + rx, h + ry);
  }
  rg.fillStyle = '#fff'; rg.beginPath(); rg.moveTo(h, h - 14); rg.lineTo(h + 9, h + 9); rg.lineTo(h, h + 3); rg.lineTo(h - 9, h + 9); rg.closePath(); rg.fill();
  rg.strokeStyle = 'rgba(255,255,255,.9)'; rg.lineWidth = 6; rg.beginPath(); rg.arc(h, h, h - 6, 0, Math.PI * 2); rg.stroke();
  const n = $('.h-n'), rr = rc.getBoundingClientRect().width / 2 - 12; n.style.transform = `translate(${Math.sin(az) * -rr}px, ${-Math.cos(az) * rr}px)`;
}

// ---------------------------------------------------------------- your garage: the bag, parked at the safehouse
let garageSig = '';
setInterval(() => {
  if (!world) return; const b = W.sol.address && window.__bux && window.__bux.bag ? window.__bux.bag() : null;
  const rows = b && b.rows ? b.rows.slice().sort((x, y) => y.usd - x.usd).slice(0, 10).map(r => ({ ...r, iconUrl: r.icon ? img(r.icon, r.mint) : '' })) : [];
  const sig = rows.map(r => r.mint + ':' + Math.round(r.usd)).join('|'); if (sig === garageSig) return; garageSig = sig; world.setGarage(rows);
}, 4000);

// ---------------------------------------------------------------- opening: bars and a fade while the sign lights, then the HUD
const cine = !reduced() && startPage() === 'map';
if (cine) html.classList.add('cine'); else html.classList.remove('cine');
function endCine() { html.classList.remove('cine'); html.classList.add('hud-in'); }
$('#world').addEventListener('pointerdown', () => { if (html.classList.contains('cine')) endCine(); });
function startWorld() {
  import('./world.js?v=3').then(m => {
    world = m.startWorld($('#world'), {
      reduced: reduced(), onHover: tip, onFrame: drawRadar,
      onPick: it => { $('#hTip').hidden = true; if (it && it.kind === 'safehouse') { openWallets(); return; } card(it && it.kind ? it : null); },
    });
    if (cine) setTimeout(endCine, 3300); else html.classList.add('hud-in');
    if (html.classList.contains('panel')) setTimeout(() => { if (html.classList.contains('panel')) world.pause(true); }, 900);   // one frame of the city behind the page
    if (api.perps.list.length) { perpList = api.perps.list.filter(p => p.oi > 0).sort((a, b) => b.oi - a.oi); world.setPerps(perpList); }
    loadCoins(); setInterval(loadCoins, 30000);
    loadWhales(); setInterval(loadWhales, 5 * 60e3);
  }).catch(e => { console.error(e); html.classList.add('noworld'); endCine(); loadCoins(); loadWhales(); });
}
setTimeout(() => { note(); setInterval(note, 8000); }, cine ? 5600 : 2800);

// ---------------------------------------------------------------- the phone: every page is an app that opens over the city
const phone = $('#phone');
function togglePhone(v) { phone.hidden = v == null ? !phone.hidden : !v; $('#hPhone').classList.toggle('on', !phone.hidden); if (!phone.hidden) { $('#hMissions').hidden = true; nt.classList.remove('in'); } }
$('#hPhone').onclick = () => togglePhone();
phone.addEventListener('click', e => { const a = e.target.closest('a[data-go], button[data-app]'); if (!a) return; togglePhone(false); if (a.dataset.app === 'missions') openMissions(); });
$('#world').addEventListener('pointerdown', () => { if (!phone.hidden) togglePhone(false); html.classList.remove('feed-open'); });
// on the streets: ↑ or P takes the phone out (like the game), M opens the missions, Esc puts things away
addEventListener('keydown', e => {
  if (html.classList.contains('panel') || e.metaKey || e.ctrlKey || e.altKey || !$('#modal').hidden || !$('#pal').hidden || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
  if (e.key === 'ArrowUp' || e.key === 'p' || e.key === 'P') { e.preventDefault(); togglePhone(); }
  else if (e.key === 'm' || e.key === 'M') { $('#hMissions').hidden ? openMissions() : ($('#hMissions').hidden = true); }
  else if (e.key === 'Escape') { if (!phone.hidden) togglePhone(false); else if (!$('#hMissions').hidden) $('#hMissions').hidden = true; else if (pinned) { card(null); if (world) world.unfollow(); } }
});
const clock = () => { $('#phClock').textContent = new Date().toTimeString().slice(0, 5); }; clock(); setInterval(clock, 15000);
$('#hCoins').onclick = () => html.classList.toggle('feed-open');
$('#hConnect').onclick = () => openWallets();
$('#hSearch').onclick = () => openPalette();
$('#homeBtn').onclick = () => go('map');
addEventListener('keydown', e => { if (e.key === 'Escape' && html.classList.contains('panel') && $('#modal').hidden && $('#pal').hidden) go('map'); });
// the money counter: your bag in dollars once a wallet is connected, counting up like the game
let cashShown = 0;
setInterval(() => {
  const b = window.__bux && window.__bux.bag ? window.__bux.bag() : null, v = b && W.sol.address ? b.tot || 0 : 0;
  if (Math.abs(v - cashShown) < .5) return; const from = cashShown, t0 = performance.now(); cashShown = v;
  const tick = now => { const k = Math.min(1, (now - t0) / 900), x = from + (v - from) * (1 - Math.pow(1 - k, 3)); $('#hCash').textContent = '$' + Math.round(x).toLocaleString('en-US'); if (k < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}, 2000);

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
function runPal(i) {
  const it = palItems[i]; if (!it) return; closePalette(); boot();
  if (it.coin) { const c = !html.classList.contains('panel') && [...coins, ...drops].find(x => x.mint === it.coin.mint); if (c) { if (world) world.follow(c.mint); card({ kind: 'coin', coin: c }); return; } go('trade'); window.__buxPick && window.__buxPick(it.coin.mint, 'ape'); }
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
// GTA VI comes out on 19 November 2026
(() => {
  const at = new Date('2026-11-19T00:00:00').getTime(), els = [$('#navGta b'), $('#hGta b')];
  const tick = () => { const s = Math.floor((at - Date.now()) / 1000); if (s <= 0) { els.forEach(e => e.textContent = 'OUT NOW'); $('#navGta').classList.add('out'); $('#hGta').classList.add('out'); return; }
    const d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60), x = s % 60;
    const t = `${d}d ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(x).padStart(2, '0')}`; els.forEach(e => e.textContent = t); };
  tick(); setInterval(tick, 1000);
})();

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
