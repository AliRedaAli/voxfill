# voxFill

Static marketing site for voxFill. React + Vite, no backend. Bilingual
(English/Arabic) with full RTL support in Arabic.

Original design reference: ~/Downloads/Voxfill logo design/Voxfill Landing.dc.html

## Commands

- `npm run dev` — dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build

## Structure

- `src/App.jsx` — landing page (11 sections) + hash-based routing
- `src/Demo.jsx` — interactive form-fill demo animation
- `src/Legal.jsx` — Terms & Privacy page renderer
- `src/i18n.js` — all EN/AR copy, including legal content
- `src/styles.css` — single global stylesheet (Nocturne design tokens)

## Conventions

- Routing is hash-based, no router library: `#/terms` and `#/privacy` render
  Legal pages; other hashes (`#demo`, `#features`, …) scroll to home sections.
- All user-facing text lives in `src/i18n.js` — never hardcode copy in
  components. Add both EN and AR strings for anything new.
- Language toggle sets `dir="rtl"` and `lang` on `<html>`; RTL layout comes
  from CSS logical properties, not per-component overrides.
