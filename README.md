[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/nayr66/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/nayr66/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

# Wednesday 25 November 2026 — The World in One Day

Entry for make.fun's [news-image-20261125](https://make.fun/bounty/news-image-20261125) bounty ($100 in USDC).

One front page summing up Wednesday 25 November 2026: 33 stories from 7 regions, led by two tankers reported mined and burning in the Strait of Hormuz, Russian strikes on Odesa and Kyiv, and Washington telling its citizens to leave Iran. Number strip, region bar, an hour-by-hour timeline, 3 lead stories and 10 more with flat illustrations drawn in code, a world map of where it happened, 20 more stories, and a DATE CHECK box naming what was deliberately left out because it happened on another day.

## What is on the page

- Masthead: the date in huge serif type, with the three biggest stories underneath.
- Number strip: six figures that each stand for one story.
- Region bar: all 33 stories counted across 7 regions.
- Timeline: the day by hours, in UTC.
- Three lead stories and ten more, each with a flat illustration drawn in code, a status tag (CONFIRMED / OFFICIAL / REPORTED / CLAIM) and its sources.
- A world map with numbered pins, 20 more one-line stories, and a DATE CHECK box.

## How it is built

`entry.png` (1024x1024) is drawn with Python and Pillow using real TTF fonts; `main.ts` copies it to `/output/entry.png`. Both runs write identical bytes.

Built for [make.fun](https://make.fun/?ref=pce6ysea).

Stories are tagged CONFIRMED, OFFICIAL, REPORTED or CLAIM, and disputed claims are attributed to their source.
