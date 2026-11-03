/* Spelling Bee Buddy — all progress is saved on this device only. */
(() => {
'use strict';

const KEY = 'sbee-buddy-v1';
const SESSION_LEN = 10;
const THEME = [
  { cls: 'one',   bees: '🐝',     tag: 'Warm-up words',      c: 'one' },
  { cls: 'two',   bees: '🐝🐝',   tag: 'Getting buzzy',      c: 'two' },
  { cls: 'three', bees: '🐝🐝🐝', tag: 'Champion challenge', c: 'three' },
];
const CHEERS_OK = ['Bee-autiful!', 'Buzz-tastic!', 'You nailed it!', 'Spelling superstar!', 'Wow, perfect!', 'Honey-sweet!', 'Amazing!', 'Way to go!'];
const CHEERS_NO = ['Almost!', 'So close!', 'Good try!', 'Tricky one!', 'Nice effort!'];

/* ---------------- data helpers ---------------- */
const ALL = [];
LEVELS.forEach((L, li) => L.words.forEach(([w, say, mean]) => ALL.push({ w, say, mean, li })));
const byWord = Object.fromEntries(ALL.map(x => [x.w, x]));

function spellings(w) {               // "fertilizer (or fertiliser)" -> ["fertilizer","fertiliser"]
  const m = w.match(/^(.*?)\s*\(or (.*)\)\s*$/);
  return m ? [m[1], m[2]] : [w];
}
const mainSpelling = w => spellings(w)[0];
function norm(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '')
          .toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, ' ').trim();
}
const isRight = (typed, w) => spellings(w).some(s => norm(s) === norm(typed));

/* ---------------- saved state ---------------- */
function load() {
  try { return Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch (e) { return fresh(); }
}
function fresh() { return { name: '', stars: {}, tricky: [], streak: 0, lastDay: '', bestStreak: 0, perfect: 0, correctTotal: 0 }; }
let S = load();
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

const stars = w => S.stars[w] || 0;
const mastered = w => stars(w) >= 3;
function levelStats(li) {
  const ws = LEVELS[li].words.map(x => x[0]);
  const st = ws.reduce((a, w) => a + stars(w), 0);
  return { total: ws.length, mastered: ws.filter(mastered).length, stars: st, maxStars: ws.length * 3 };
}
const totalStars = () => ALL.reduce((a, x) => a + stars(x.w), 0);
const totalMastered = () => ALL.filter(x => mastered(x.w)).length;

function today(offset = 0) {
  const d = new Date(); d.setDate(d.getDate() + offset);
  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
}
function currentStreak() { return (S.lastDay === today() || S.lastDay === today(-1)) ? S.streak : 0; }
function bumpStreak() {
  if (S.lastDay === today()) return;
  S.streak = S.lastDay === today(-1) ? S.streak + 1 : 1;
  S.lastDay = today();
  S.bestStreak = Math.max(S.bestStreak, S.streak);
}

/* ---------------- badges ---------------- */
const BADGES = [
  { id: 'first',   ico: '🌱', name: 'First Buzz',      need: 'Spell your first word',      ok: () => S.correctTotal >= 1 },
  { id: 'stars25', ico: '⭐', name: 'Star Collector',  need: 'Earn 25 stars',              ok: () => totalStars() >= 25 },
  { id: 'stars100',ico: '🍯', name: 'Honey Hunter',    need: 'Earn 100 stars',             ok: () => totalStars() >= 100 },
  { id: 'perfect', ico: '💯', name: 'Perfect 10',      need: 'Get 10 out of 10 in a game', ok: () => S.perfect >= 1 },
  { id: 'streak3', ico: '🔥', name: 'On Fire',         need: 'Practice 3 days in a row',   ok: () => S.bestStreak >= 3 },
  { id: 'streak7', ico: '🚀', name: 'Unstoppable',     need: 'Practice 7 days in a row',   ok: () => S.bestStreak >= 7 },
  { id: 'm25',     ico: '🎯', name: 'Sharp Shooter',   need: 'Master 25 words',            ok: () => totalMastered() >= 25 },
  { id: 'lvl1',    ico: '🥉', name: 'One Bee Champ',   need: 'Master every One Bee word',  ok: () => levelStats(0).mastered === levelStats(0).total },
  { id: 'lvl2',    ico: '🥈', name: 'Two Bee Champ',   need: 'Master every Two Bee word',  ok: () => levelStats(1).mastered === levelStats(1).total },
  { id: 'lvl3',    ico: '🥇', name: 'Three Bee Champ', need: 'Master every Three Bee word',ok: () => levelStats(2).mastered === levelStats(2).total },
  { id: 'm100',    ico: '🧙', name: 'Word Wizard',     need: 'Master 100 words',           ok: () => totalMastered() >= 100 },
  { id: 'all',     ico: '👑', name: 'Spelling Royalty',need: 'Master all 450 words',       ok: () => totalMastered() === ALL.length },
];
function earnedBadges() { return BADGES.filter(b => b.ok()).map(b => b.id); }

/* ---------------- speech ---------------- */
let voice = null;
function pickVoice() {
  const vs = speechSynthesis.getVoices ? speechSynthesis.getVoices() : [];
  voice = vs.find(v => /en[-_]US/i.test(v.lang) && /google/i.test(v.name))
       || vs.find(v => /en[-_]US/i.test(v.lang))
       || vs.find(v => /^en/i.test(v.lang)) || null;
}
if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function speak(text, rate = 0.85, el) {
  if (!('speechSynthesis' in window)) { toast('This device can’t speak words aloud'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  if (voice) u.voice = voice;
  u.lang = voice ? voice.lang : 'en-US';
  u.rate = rate;
  if (el) { el.classList.add('talking'); u.onend = u.onerror = () => el.classList.remove('talking'); }
  speechSynthesis.speak(u);
}

/* ---------------- ui helpers ---------------- */
const $app = document.getElementById('app');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const starStr = n => '★'.repeat(n) + '☆'.repeat(3 - n);
const starHtml = n => `<span style="color:#F5B700">${'★'.repeat(n)}</span><span style="color:#CFC7B2">${'☆'.repeat(3 - n)}</span>`;
function themeVars(li) {
  const c = THEME[li].c;
  return `--c:var(--${c});--soft:var(--${c}-soft);--ink2:var(--${c}-ink)`;
}
let toastT;
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2600);
}
function confetti(n = 70) {
  const box = document.getElementById('confetti');
  const cols = ['#FFC93C', '#FF7A45', '#7B5CE6', '#2EB872', '#4FC3F7', '#FF8FA3'];
  for (let i = 0; i < n; i++) {
    const p = document.createElement('i');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.background = cols[i % cols.length];
    p.style.animationDuration = 1.6 + Math.random() * 1.6 + 's';
    p.style.animationDelay = Math.random() * 0.4 + 's';
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    box.appendChild(p);
    setTimeout(() => p.remove(), 3800);
  }
}
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function topbar(title, sub, backTo) {
  return `<div class="topbar"><button class="back" data-go="${backTo}" aria-label="Back">‹</button>
    <div><h1>${title}</h1>${sub ? `<div class="sub">${sub}</div>` : ''}</div><div class="spacer"></div>
    <span class="pill">⭐ ${totalStars()}</span></div>`;
}

const BEE_SVG = `<svg viewBox="0 0 200 200" aria-hidden="true">
  <ellipse cx="78" cy="58" rx="34" ry="24" fill="#DDF3FF" stroke="#2B2B3A" stroke-width="5" transform="rotate(-25 78 58)"/>
  <ellipse cx="122" cy="58" rx="34" ry="24" fill="#DDF3FF" stroke="#2B2B3A" stroke-width="5" transform="rotate(25 122 58)"/>
  <ellipse cx="100" cy="118" rx="62" ry="52" fill="#FFC93C" stroke="#2B2B3A" stroke-width="6"/>
  <path d="M62 84 Q100 74 138 84 L146 100 Q100 90 54 100 Z" fill="#2B2B3A"/>
  <path d="M42 126 Q100 114 158 126 L156 142 Q100 132 44 142 Z" fill="#2B2B3A"/>
  <circle cx="82" cy="108" r="7" fill="#2B2B3A"/><circle cx="84" cy="105" r="2.4" fill="#fff"/>
  <circle cx="118" cy="108" r="7" fill="#2B2B3A"/><circle cx="120" cy="105" r="2.4" fill="#fff"/>
  <path d="M88 154 Q100 164 112 154" fill="none" stroke="#2B2B3A" stroke-width="5" stroke-linecap="round"/>
  <circle cx="70" cy="150" r="7" fill="#FF8FA3" opacity=".8"/><circle cx="130" cy="150" r="7" fill="#FF8FA3" opacity=".8"/>
  <path d="M88 70 Q80 40 66 32" fill="none" stroke="#2B2B3A" stroke-width="5" stroke-linecap="round"/><circle cx="64" cy="30" r="7" fill="#2B2B3A"/>
  <path d="M112 70 Q120 40 134 32" fill="none" stroke="#2B2B3A" stroke-width="5" stroke-linecap="round"/><circle cx="136" cy="30" r="7" fill="#2B2B3A"/>
</svg>`;

/* ---------------- screens ---------------- */
let view = { name: 'home' };
function go(name, extra = {}) {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  view = Object.assign({ name }, extra);
  render();
  window.scrollTo(0, 0);
}

function render() {
  if (!S.name && view.name !== 'welcome') view = { name: 'welcome' };
  const fn = SCREENS[view.name] || SCREENS.home;
  $app.innerHTML = fn();
  if (AFTER[view.name]) AFTER[view.name]();
}

const SCREENS = {};
const AFTER = {};

SCREENS.welcome = () => `<div class="welcome">${BEE_SVG}
  <h1>Hi! I'm Buzzy.</h1>
  <p>I'll help you practice for the Spelling Bee. What's your name?</p>
  <input id="nameIn" maxlength="20" placeholder="Your name" autocomplete="off">
  <button class="big-btn" style="--c:var(--good)" data-act="setname">Let's go! 🐝</button></div>`;
AFTER.welcome = () => {
  const i = document.getElementById('nameIn'); i.value = S.name || '';
  i.addEventListener('keydown', e => { if (e.key === 'Enter') ACTS.setname(); });
};

SCREENS.home = () => {
  const lv = LEVELS.map((L, li) => {
    const s = levelStats(li), t = THEME[li];
    const pct = Math.round(s.stars / s.maxStars * 100);
    return `<button class="lvl ${t.cls}" data-go="level" data-li="${li}">
      <div class="bees">${t.bees}</div><div class="name">${L.name}</div><div class="tag">${t.tag}</div>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <div class="count"><span>${s.mastered} / ${s.total} mastered</span><span>${pct}%</span></div></button>`;
  }).join('');
  const nb = earnedBadges().length;
  return `<div class="hero">${BEE_SVG}<div><h1>Hi, <span>${esc(S.name)}</span>!</h1><p>Pick a level and let's get buzzing.</p></div></div>
  <div class="stats">
    <div class="stat"><div class="big">⭐ ${totalStars()}</div><div class="lbl">stars earned</div></div>
    <div class="stat"><div class="big">🏅 ${totalMastered()}</div><div class="lbl">words mastered</div></div>
    <div class="stat"><div class="big">🔥 ${currentStreak()}</div><div class="lbl">day streak</div></div>
  </div>
  <div class="levels">${lv}</div>
  <div class="row2">
    <button class="wide" data-go="tricky"><span class="ico">🧩</span><span><b>Tricky Words</b><small>${S.tricky.length} word${S.tricky.length === 1 ? '' : 's'} to practice again</small></span></button>
    <button class="wide" data-go="badges"><span class="ico">🏆</span><span><b>My Badges</b><small>${nb} of ${BADGES.length} earned</small></span></button>
  </div>
  <div style="text-align:center;margin-top:22px"><button class="chip" style="--c:#ccc;--soft:#fff;--ink2:#888" data-act="rename">Not ${esc(S.name)}? Change name</button></div>`;
};

SCREENS.level = () => {
  const li = view.li, L = LEVELS[li], s = levelStats(li);
  const pct = Math.round(s.stars / s.maxStars * 100);
  return `<div style="${themeVars(li)}">${topbar(L.name, THEME[li].tag + ' · ' + s.total + ' words', 'home')}
  <div class="lvlhead"><div class="txt">🏅 ${s.mastered} mastered</div><div class="bar"><i style="width:${pct}%"></i></div><div class="txt">⭐ ${s.stars} / ${s.maxStars}</div></div>
  <div class="modes">
    <button class="mode" data-act="startBee" data-li="${li}"><div class="ico">🎤</div><b>Spelling Bee</b><small>Listen, then type the word</small></button>
    <button class="mode" data-go="flash" data-li="${li}" data-i="0"><div class="ico">🃏</div><b>Flashcards</b><small>Tap a card to see the meaning</small></button>
    <button class="mode" data-go="list" data-li="${li}" data-f="all"><div class="ico">📋</div><b>Word List</b><small>See all words and your stars</small></button>
  </div></div>`;
};

/* ----- spelling bee game ----- */
function pickWords(pool) {
  const tricky = pool.filter(w => S.tricky.includes(w));
  const learning = pool.filter(w => !S.tricky.includes(w) && !mastered(w));
  const done = pool.filter(w => mastered(w) && !S.tricky.includes(w));
  let out = shuffle(tricky).slice(0, 4);
  out = out.concat(shuffle(learning).slice(0, SESSION_LEN - out.length));
  if (out.length < SESSION_LEN) out = out.concat(shuffle(done).slice(0, SESSION_LEN - out.length));
  return shuffle(out);
}
function startGame(li, pool, backTo) {
  const words = pickWords(pool);
  if (!words.length) { toast('No words to practice here yet!'); return; }
  go('bee', { li, words, i: 0, results: [], answered: false, usedMeaning: false, backTo, pool });
}

SCREENS.bee = () => {
  const v = view, x = byWord[v.words[v.i]], li = v.li ?? x.li;
  const dots = v.words.map((_, k) => `<i class="${k < v.results.length ? (v.results[k].ok ? 'ok' : 'no') : (k === v.i ? 'now' : '')}"></i>`).join('');
  const title = v.li == null ? 'Tricky Words' : LEVELS[v.li].name;
  return `<div style="${themeVars(li)}">${topbar(title, 'Word ' + (v.i + 1) + ' of ' + v.words.length, v.backTo)}
  <div class="play" id="play">
    <div class="progress-dots">${dots}</div>
    <button class="speaker" id="spk" data-act="sayWord" aria-label="Hear the word">🔊</button>
    <div class="prompt">Tap the speaker to hear your word</div>
    <div class="helpers">
      <button class="chip" data-act="sayWord">🔁 Again</button>
      <button class="chip" data-act="saySlow">🐢 Slowly</button>
      <button class="chip" data-act="showMeaning">📖 Meaning</button>
      <button class="chip" data-act="saySentence">🗣️ Say meaning</button>
    </div>
    <div class="reveal" id="meaning">${esc(x.mean)}</div>
    <div class="answer">
      <input id="ans" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" placeholder="Type it here" enterkeyhint="done">
      <button class="go" data-act="check">Check ✓</button>
    </div>
    <div class="feedback" id="fb"></div>
  </div></div>`;
};
AFTER.bee = () => {
  const inp = document.getElementById('ans');
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { view.answered ? ACTS.next() : ACTS.check(); } });
  setTimeout(() => { speak(mainSpelling(view.words[view.i]), 0.85, document.getElementById('spk')); inp.focus(); }, 350);
};

function sentenceFor(x) {
  const w = mainSpelling(x.w);
  // A simple spoken frame that gives the meaning without spelling anything out.
  return `${w}. It means: ${x.mean.split(';')[0]}. ${w}.`;
}
function diffHtml(typed, right) {
  const a = norm(typed), b = norm(right);
  let out = '';
  for (let k = 0; k < Math.max(a.length, b.length); k++) {
    const ch = right[k] ?? '';
    out += (a[k] === b[k]) ? esc(ch) : `<span class="x">${esc(ch || '_')}</span>`;
  }
  return out;
}

SCREENS.result = () => {
  const v = view, ok = v.results.filter(r => r.ok).length, n = v.results.length;
  const li = v.li ?? 0;
  const missed = v.results.filter(r => !r.ok).map(r => `<li>${esc(mainSpelling(r.w))}</li>`).join('');
  const trophy = ok === n ? '🏆' : ok >= n * 0.7 ? '🥳' : ok >= n * 0.4 ? '💪' : '🌱';
  const msg = ok === n ? 'PERFECT SCORE!' : ok >= n * 0.7 ? 'Great job!' : ok >= n * 0.4 ? 'Nice work!' : 'Keep practicing!';
  return `<div style="${themeVars(li)}">${topbar('Round done!', '', v.backTo)}
  <div class="play result"><div class="trophy">${trophy}</div><h2>${msg}</h2>
    <div class="score">You spelled <b>${ok}</b> out of <b>${n}</b> correctly and earned <b>${v.earned}</b> ⭐</div>
    ${missed ? `<p style="margin-top:18px;font-size:19px">These went to your Tricky Words:</p><ul>${missed}</ul>` : ''}
    <div class="btns"><button class="big-btn" data-act="again">Play again 🔁</button><button class="big-btn alt" data-go="${v.backTo}" data-li="${v.li ?? ''}">Done</button></div>
  </div></div>`;
};
AFTER.result = () => {
  const ok = view.results.filter(r => r.ok).length;
  if (ok === view.results.length) confetti(140); else if (ok >= view.results.length * 0.7) confetti(60);
  speak(ok === view.results.length ? 'Perfect score! You are a spelling champion!' : 'Great practice, ' + S.name + '!', 0.95);
};

/* ----- flashcards ----- */
SCREENS.flash = () => {
  const li = view.li, ws = LEVELS[li].words, i = view.i, [w, say, mean] = ws[i];
  return `<div style="${themeVars(li)}">${topbar(LEVELS[li].name + ' Flashcards', 'Card ' + (i + 1) + ' of ' + ws.length, 'level')}
  <div class="flip" id="flip" data-act="flip">
    <div class="flip-inner">
      <div class="face front"><span class="num">#${i + 1}</span><span class="stars-mini">${starHtml(stars(w))}</span>
        <div class="w">${esc(w)}</div><div class="say">🔊 ${esc(say)}</div><div class="hint">Tap the card to flip</div></div>
      <div class="face rear"><span class="num">#${i + 1}</span>
        <div class="w" style="font-size:40px">${esc(w)}</div><div class="m">${esc(mean)}</div><div class="hint">Tap to flip back</div></div>
    </div>
  </div>
  <div class="flash-ctrl">
    <button class="round" data-act="prev" aria-label="Previous">‹</button>
    <button class="round" data-act="shuffleCard" aria-label="Random card">🔀</button>
    <button class="round say-btn" data-act="sayCard" aria-label="Hear it">🔊</button>
    <button class="round" data-act="spellCard" aria-label="Hear it spelled">🔤</button>
    <button class="round" data-act="next" aria-label="Next">›</button>
  </div>
  <p style="text-align:center;color:var(--muted);margin-top:14px;font-size:16px">🔊 hear the word · 🔤 hear it spelled letter by letter · swipe or use the arrows</p>
  </div>`;
};
AFTER.flash = () => {
  const el = document.getElementById('flip');
  let sx = null;
  el.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  el.addEventListener('touchend', e => {
    if (sx == null) return;
    const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 60) { e.preventDefault(); dx < 0 ? ACTS.next() : ACTS.prev(); }
  });
};

/* ----- word list ----- */
SCREENS.list = () => {
  const li = view.li, f = view.f || 'all', q = view.q || '';
  let ws = LEVELS[li].words;
  if (f === 'learning') ws = ws.filter(x => !mastered(x[0]));
  if (f === 'mastered') ws = ws.filter(x => mastered(x[0]));
  if (q) ws = ws.filter(x => norm(x[0]).includes(norm(q)) || norm(x[2]).includes(norm(q)));
  const items = ws.map(([w, say, mean]) => `<button class="witem" data-act="sayThis" data-w="${esc(w)}">
      <div class="wi"><b>${esc(w)}</b><span class="p">🔊 ${esc(say)}</span><small>${esc(mean)}</small></div>
      <div class="st">${starHtml(stars(w))}</div></button>`).join('');
  const fb = (k, label) => `<button class="chip ${f === k ? 'on' : ''}" data-act="filter" data-f="${k}">${label}</button>`;
  return `<div style="${themeVars(li)}">${topbar(LEVELS[li].name + ' Words', 'Tap a word to hear it', 'level')}
  <input class="search" id="q" placeholder="🔍 Search words" value="${esc(q)}" autocomplete="off">
  <div class="filters">${fb('all', 'All')}${fb('learning', 'Still learning')}${fb('mastered', 'Mastered ★★★')}</div>
  <div class="wlist">${items || '<div class="empty"><div class="ico">🔍</div>No words here yet</div>'}</div></div>`;
};
AFTER.list = () => {
  const q = document.getElementById('q');
  q.addEventListener('input', () => {
    view.q = q.value; const pos = q.selectionStart; render();
    const n = document.getElementById('q'); n.focus(); n.setSelectionRange(pos, pos);
  });
};

/* ----- tricky words ----- */
SCREENS.tricky = () => {
  const ws = S.tricky.map(w => byWord[w]).filter(Boolean);
  const items = ws.map(x => `<button class="witem" style="${themeVars(x.li)}" data-act="sayThis" data-w="${esc(x.w)}">
      <div class="wi"><b>${esc(x.w)}</b><span class="p">🔊 ${esc(x.say)}</span><small>${esc(x.mean)}</small></div>
      <div class="st">${starHtml(stars(x.w))}</div></button>`).join('');
  return `<div style="--c:var(--bad);--soft:var(--bad-soft);--ink2:#9b1c22">${topbar('Tricky Words', 'Words you missed. Spell one right to clear it!', 'home')}
  ${ws.length ? `<div style="text-align:center;margin-bottom:18px"><button class="big-btn" data-act="startTricky">🎤 Practice tricky words</button></div><div class="wlist">${items}</div>`
    : `<div class="empty"><div class="ico">🎉</div>No tricky words right now.<br>Words you miss in Spelling Bee will show up here.</div>`}</div>`;
};

/* ----- badges ----- */
SCREENS.badges = () => {
  const got = earnedBadges();
  const items = BADGES.map(b => `<div class="badge ${got.includes(b.id) ? '' : 'locked'}"><div class="ico">${b.ico}</div><b>${b.name}</b><small>${b.need}</small></div>`).join('');
  return `${topbar('My Badges', got.length + ' of ' + BADGES.length + ' earned · best streak ' + S.bestStreak + ' day' + (S.bestStreak === 1 ? '' : 's'), 'home')}<div class="badges">${items}</div>`;
};

/* ---------------- actions ---------------- */
const ACTS = {
  setname() {
    const v = document.getElementById('nameIn').value.trim();
    if (!v) { toast('Type your name first!'); return; }
    S.name = v; save(); go('home');
    setTimeout(() => speak('Hi ' + v + '! Let’s get buzzing!', 0.95), 300);
  },
  rename() { go('welcome'); },
  startBee(el) { const li = +el.dataset.li; startGame(li, LEVELS[li].words.map(x => x[0]), 'level'); },
  startTricky() { startGame(null, S.tricky.slice(), 'tricky'); },
  again() { startGame(view.li, view.pool, view.backTo); },
  sayWord() { speak(mainSpelling(view.words[view.i]), 0.85, document.getElementById('spk')); focusAns(); },
  saySlow() { speak(mainSpelling(view.words[view.i]), 0.45, document.getElementById('spk')); focusAns(); },
  saySentence() { speak(sentenceFor(byWord[view.words[view.i]]), 0.85, document.getElementById('spk')); focusAns(); },
  showMeaning() { document.getElementById('meaning').classList.add('show'); view.usedMeaning = true; focusAns(); },
  check() {
    if (view.answered) return;
    const inp = document.getElementById('ans'), typed = inp.value;
    if (!typed.trim()) { toast('Type the word first 😊'); inp.focus(); return; }
    const w = view.words[view.i], x = byWord[w], ok = isRight(typed, w);
    view.answered = true;
    const fb = document.getElementById('fb');
    const before = stars(w);
    if (ok) {
      S.stars[w] = Math.min(3, before + 1);
      S.tricky = S.tricky.filter(t => t !== w);
      S.correctTotal++;
      bumpStreak();
      view.earned = (view.earned || 0) + (S.stars[w] - before);
      fb.className = 'feedback ok show';
      fb.innerHTML = `<div class="head">${CHEERS_OK[Math.floor(Math.random() * CHEERS_OK.length)]} 🎉</div>
        <div class="correct">${esc(x.w)}</div><div class="stars3">${starHtml(S.stars[w])}</div>
        ${S.stars[w] === 3 && before < 3 ? '<div class="meaning"><b>Word mastered!</b> 🏅</div>' : ''}
        <div class="meaning">${esc(x.mean)}</div>
        <div class="next"><button class="big-btn" style="--c:var(--good)" data-act="next">Next word ›</button></div>`;
      confetti(40);
      speak(CHEERS_OK[Math.floor(Math.random() * CHEERS_OK.length)], 1);
    } else {
      if (!S.tricky.includes(w)) S.tricky.push(w);
      fb.className = 'feedback no show';
      fb.innerHTML = `<div class="head">${CHEERS_NO[Math.floor(Math.random() * CHEERS_NO.length)]} 🤔</div>
        <div class="yours">You typed: <s>${esc(typed)}</s></div>
        <div class="correct diff">${diffHtml(typed, mainSpelling(x.w))}</div>
        <div class="meaning">${esc(x.say)} · ${esc(x.mean)}</div>
        <div class="next"><button class="big-btn" style="--c:var(--bad)" data-act="next">Next word ›</button></div>`;
      document.getElementById('play').classList.add('shake');
      speak(mainSpelling(x.w) + '. ' + mainSpelling(x.w).split('').filter(c => c !== ' ').join(', '), 0.8);
    }
    view.results.push({ w, ok });
    inp.disabled = true;
    save();
    const newly = earnedBadges().filter(id => !(view.badgesAtStart || []).includes(id));
    if (newly.length) { const b = BADGES.find(b => b.id === newly[newly.length - 1]); toast('New badge: ' + b.ico + ' ' + b.name); view.badgesAtStart = earnedBadges(); }
    setTimeout(() => fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  },
  next() {
    if (view.name === 'flash') { view.i = (view.i + 1) % LEVELS[view.li].words.length; render(); return; }
    if (view.i + 1 >= view.words.length) {
      if (view.results.every(r => r.ok) && view.results.length === SESSION_LEN) { S.perfect++; save(); }
      go('result', { li: view.li, results: view.results, earned: view.earned || 0, backTo: view.backTo, pool: view.pool });
      return;
    }
    view.i++; view.answered = false; view.usedMeaning = false; render();
  },
  prev() { const n = LEVELS[view.li].words.length; view.i = (view.i - 1 + n) % n; render(); },
  shuffleCard() { view.i = Math.floor(Math.random() * LEVELS[view.li].words.length); render(); },
  flip() { document.getElementById('flip').classList.toggle('turned'); },
  sayCard() { speak(mainSpelling(LEVELS[view.li].words[view.i][0]), 0.85); },
  spellCard() { const w = mainSpelling(LEVELS[view.li].words[view.i][0]); speak(w + '. ' + w.split('').filter(c => c !== ' ').join(', ') + '. ' + w, 0.7); },
  sayThis(el) { speak(mainSpelling(el.dataset.w), 0.85); },
  filter(el) { view.f = el.dataset.f; render(); },
};
function focusAns() { const i = document.getElementById('ans'); if (i && !i.disabled) i.focus(); }

document.addEventListener('click', e => {
  const a = e.target.closest('[data-act]');
  if (a && !(a.id === 'flip' && e.target.closest('button') && e.target.closest('button') !== a)) {
    e.preventDefault();
    ACTS[a.dataset.act] && ACTS[a.dataset.act](a);
    return;
  }
  const g = e.target.closest('[data-go]');
  if (g) {
    const extra = {};
    if (g.dataset.li !== undefined && g.dataset.li !== '') extra.li = +g.dataset.li;
    else if (view.li != null) extra.li = view.li;
    if (g.dataset.i !== undefined) extra.i = +g.dataset.i;
    if (g.dataset.f) extra.f = g.dataset.f;
    if (g.dataset.go === 'bee') return;
    if (g.dataset.go === 'tricky' && view.name === 'result') { go('tricky'); return; }
    go(g.dataset.go, extra);
  }
});

view.badgesAtStart = earnedBadges();
const _go = go;
go = function (name, extra) { _go(name, extra); if (name === 'bee') view.badgesAtStart = earnedBadges(); };
render();
})();
