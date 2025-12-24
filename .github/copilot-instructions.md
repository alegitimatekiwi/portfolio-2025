# Copilot / AI Agent Instructions — my-portfolio

Summary
- This is a small single-page React app scaffolded with Vite and Tailwind CSS. It has no backend services; UI is served by Vite. Key entry is `src/main.jsx` which mounts `App` from `src/App.jsx`.

How to run (developer commands)
- Install: `npm install`
- Dev server (HMR): `npm run dev` (runs `vite`)
- Build: `npm run build` (produces static output via Vite)
- Preview built output: `npm run preview`
- Lint: `npm run lint` (uses ESLint)

Why this structure
- Vite + React for fast local dev and HMR. See [vite.config.js](vite.config.js).
- Tailwind for styling; global Tailwind layers are in `src/index.css` (`@tailwind base/components/utilities`). See [tailwind.config.js](tailwind.config.js).
- Static/public assets: put files served at root in `public/` (e.g. `/vite.svg`), app-specific assets in `src/assets/` and import them with relative paths (example: `import reactLogo from './assets/react.svg'` in `src/App.jsx`).

Project conventions and patterns (be explicit)
- Files use `.jsx` for components. Keep new components as `.jsx` unless a TypeScript migration is planned.
- Global styles: use `src/index.css` for Tailwind directives and minimal global rules. Keep component styles to utility classes; use small component CSS files (like `src/App.css`) only for non-Tailwind cases.
- Entry point: `src/main.jsx` -> `App.jsx`. Wrap render in `StrictMode`; preserve this for consistency.
- Asset imports: local images imported via relative paths; icons may use packages (e.g., `lucide-react`) or `public/` assets referenced with absolute paths starting with `/`.
- Animations: project includes `framer-motion` in deps — prefer it for complex animations.
- Linting: `npm run lint` runs ESLint across the repo. Avoid changing lint rules without running the linter.

Integration points / external deps
- Vite dev server and build: `vite` / `@vitejs/plugin-react` (see `vite.config.js`).
- Tailwind + PostCSS: `tailwindcss` and `postcss` with `postcss.config.js`.
- UI libs present: `framer-motion`, `lucide-react` — search `src/` to find usages before changing import patterns.

What AI agents should *not* do automatically
- Do not migrate files to TypeScript or introduce a build-system overhaul without explicit approval.
- Do not bump major versions in `package.json` without running the app and confirming behavior.

Where to look for examples
- App bootstrap: [src/main.jsx](src/main.jsx)
- Primary component: [src/App.jsx](src/App.jsx)
- Styling: [src/index.css](src/index.css) and [src/App.css](src/App.css)
- Build & scripts: [package.json](package.json)
- Vite config: [vite.config.js](vite.config.js)
- Tailwind config: [tailwind.config.js](tailwind.config.js)
- HTML entry: [index.html](index.html)

Workflow notes for edits and PRs
- Make minimal, focused commits and confirm visual changes by running `npm run dev` locally. HMR should reflect small UI changes immediately.
- If adding new dependencies, run `npm install` and `npm run dev` to smoke-test the app.
- When modifying global CSS or Tailwind config, re-run the dev server to pick up PostCSS changes.

If anything is unclear, ask for the specific task (e.g., "Add a footer component with Tailwind utilities and framer-motion fade-in") and request permission before changing tooling or adding TypeScript.

---
Last updated: automated update by AI agent during repository analysis.
