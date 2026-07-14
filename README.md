# voxFill

Static marketing site for voxFill — an embeddable widget that fills long web
forms from speech. React + Vite, no backend. Bilingual (English/Arabic) with
full RTL support.

Live at [voxfill.dev](https://voxfill.dev).

## Development

```sh
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # serve the production build
```

## Structure

- `src/App.jsx` — landing page (11 sections) + hash-based routing
- `src/Demo.jsx` — interactive form-fill demo animation
- `src/Legal.jsx` — Terms & Privacy page renderer
- `src/i18n.js` — all EN/AR copy, including legal content
- `src/styles.css` — single global stylesheet (Nocturne design tokens)

## Conventions

- Routing is hash-based, no router library: `#/terms` and `#/privacy` render
  legal pages; other hashes (`#demo`, `#features`, …) scroll to home sections.
- All user-facing text lives in `src/i18n.js` — never hardcode copy in
  components. Add both EN and AR strings for anything new.
- The language toggle sets `dir` and `lang` on `<html>`; RTL layout comes from
  CSS logical properties.

## Deployment

Pushes to `main` build and deploy to GitHub Pages via
`.github/workflows/deploy.yml`. The custom domain (`voxfill.dev`) is set by
`public/CNAME`, which Vite copies into `dist/`.
