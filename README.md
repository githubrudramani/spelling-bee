# 🐝 Spelling Bee Buddy

A practice app for the **2026–2027 School Spelling Bee Study List** (One Bee, Two Bee and Three Bee — 450 words), made for a tablet.

**Open it:** https://githubrudramani.github.io/spelling-bee/

## What's inside
- **Spelling Bee mode** – Buzzy says a word out loud, you type it. Get it right to earn a star (3 stars = mastered).
- **Flashcards** – tap to flip, hear the word, or hear it spelled letter by letter.
- **Word List** – every word with its pronunciation, meaning and your stars.
- **Tricky Words** – words you miss are saved here until you spell them right.
- **Badges and daily streaks** to keep practice fun.
- Works **offline** after the first visit.

## Put it on an Android tablet
1. Open the link above in **Chrome**.
2. Tap **⋮ → Add to Home screen** (or **Install app**).
3. Open it from the new 🐝 icon.

Progress is saved on that device only.

## Files
| File | What it is |
| --- | --- |
| `index.html` | The page |
| `app.js` | How the app works |
| `words.js` | The 450 words, pronunciations and meanings |
| `style.css` | Colors and layout |
| `sw.js`, `manifest.json`, `icon-*.png` | Offline support and the home-screen icon |

To fix a word or meaning, edit `words.js`. After changing any file, bump `VERSION` in `sw.js` so tablets pick up the update.
