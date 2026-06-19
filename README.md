[README.md](https://github.com/user-attachments/files/29140461/README.md)
# CSS Recital 

A concert-themed showcase of advanced CSS — built to prove a point: **CSS alone can carry state, motion, and interaction**, with HTML reduced to plain structure and JavaScript reserved for the two or three things it's genuinely needed for.

**[Live demo →](#)** *(enable GitHub Pages on this repo, or just open `index.html`)*

![No build step](https://img.shields.io/badge/build_step-none-f4a93c) ![Dependencies](https://img.shields.io/badge/dependencies-zero-f4a93c) ![CSS](https://img.shields.io/badge/CSS-~95%25-f4a93c)

---

## What this is

Six "movements," each isolating one advanced CSS technique inside a concert/instrument metaphor:

| Movement | Component | Technique |
|---|---|---|
| I. Allegro | Turntable | Hover/focus-driven state, conic & radial gradients, `transform-origin` |
| II. Adagio | Cassette tape | **`:has()`** powering a page-wide pause toggle, with zero JavaScript |
| III. Capriccio | Cello strings | Damped multi-step `@keyframes` oscillation, triggered per-element |
| IV. Presto | Stage lights | `clip-path`, `mix-blend-mode`, animated **`@property`** custom properties |
| V. Largo | Sheet music | Infinite CSS marquee, **container queries** (`@container`) |
| VI. Coda | Programme notes | The one deliberate JavaScript flourish |

## Why it's ~95% CSS - [www.css-recital.netlify.app](https://css-recital.netlify.app/)

The HTML is a single, mostly-empty skeleton — wrapper `<div>`s and `<span>`s with no inline styling, no utility classes, no component library. Every visual decision (shape, color, motion, and even *interactivity*) lives in `/css`. JavaScript is limited to two things CSS still can't do on its own:

1. **Reveal-on-scroll** via `IntersectionObserver`, with a `prefers-reduced-motion` and no-JS fallback that shows content immediately.
2. **A "Transpose" button** that nudges a shared `--hue` custom property, recolouring the title and stage lights in one line of JS.

The page-wide pause toggle, the turntable's tonearm, every string pluck, and every spinning reel are **pure CSS** — no JavaScript event listeners involved.

## Project structure

```
css-recital/
├── index.html
├── css/
│   ├── style.css        # entry point — imports the partials below
│   ├── variables.css     # palette, type scale, @property tokens
│   ├── base.css           # reset, accessibility baseline
│   ├── layout.css         # grid/flex structure, container queries
│   ├── components.css     # every visual component
│   ├── animations.css     # all @keyframes + the :has() pause rule
│   └── responsive.css     # breakpoints
└── js/
    └── script.js          # ~50 lines, on purpose
```

## Techniques on display

- `@property` — registers `--hue` and `--curtain-open` as real, animatable, type-checked custom properties (Houdini)
- `:has()` — a single checkbox pauses every animation on the page via `body:has(#master-toggle:checked) .animated`
- `clip-path` + `conic-gradient` — the stage-light cones
- `@container` — the programme list re-flows by its own width, not the viewport
- `repeating-linear-gradient` / `repeating-conic-gradient` — the vinyl grooves, cassette reels, and music staff lines
- `background-clip: text` + animated gradients — the title
- `prefers-reduced-motion` — every animation collapses gracefully when requested
- `:focus-visible` throughout, plus a skip link — keyboard and screen-reader friendly

## Running it locally

No build step, no package manager, no dependencies.

```bash
git clone https://github.com/Tortokiller/css-recital.git
cd css-recital
# open index.html in a browser, or:
npx serve .
```

## Browser support

Built against current Chrome, Edge, and Safari. `@property` and `:has()` are supported in all evergreen browsers as of 2024; `@container` likewise. Older browsers will lose the hue animation and the pause toggle but the page remains fully readable and functional.

## License

MIT — fork it, restyle it, use it as a CSS reference.

---

Built by [Tortokiller](https://github.com/Tortokiller) · [GetWeb.tech](https://getweb.tech)
