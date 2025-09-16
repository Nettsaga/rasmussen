# Repository Guidelines

## Project Structure & Module Organization
- App code lives in `src/` with `components/` (UI + layout), `pages/`, `hooks/`, `lib/`, and `assets/`. Use the path alias `@/` for imports (maps to `src`).
- Static files go in `public/`. Entry points are `index.html`, `src/main.tsx`, and `src/App.tsx`.
- Key configs: `vite.config.ts` (dev server, aliases), `tsconfig*.json` (paths), `tailwind.config.ts` (design tokens), and `eslint.config.js` (lint rules).

## Build, Test, and Development Commands
- `npm install` (or `bun install`) - install dependencies.
- `npm run dev` - start Vite on `http://localhost:8080` with hot reload.
- `npm run build` - production build to `dist/`.
- `npm run build:dev` - development build for faster iteration.
- `npm run preview` - serve the built app locally.
- `npm run lint` - run ESLint across the repo.

## Coding Style & Naming Conventions
- TypeScript + React function components. Components in PascalCase (e.g., `Layout.tsx`), hooks named `useX` in `src/hooks/`.
- Prefer default exports for page and component files; group small utilities in `lib/` with named exports.
- Use 2-space indentation, descriptive prop names, and `@/` imports for local modules.
- Co-locate reusable UI in `src/components/ui/`; route views in `src/pages/`.

## Design System (Dark + Grey, Single Accent)
- Palette lives in `src/index.css` under `:root`. Surfaces are dark greys; the only accent/brand color is `#0f236a` (`hsl(227 75% 24%)`). Do not hardcode colors in components.
- Tokens (CSS variables consumed by Tailwind): `background`, `foreground`, `brand`, `accent`, `muted`, `subtle`, `border`, `input`, `ring`, plus `primary/secondary/*-foreground`.
- Usage examples:
  - Surfaces: `bg-background`, `bg-subtle`, `border-border`, `shadow` vars via utilities.
  - Text: `text-foreground` for body, `text-muted-foreground` for secondary copy.
  - CTAs/links: `bg-primary text-primary-foreground hover:bg-primary/90` or `text-primary`. Outline states use `ring-2 ring-ring ring-offset-2`.
  - Brand-only styling: `text-brand`, `bg-accent text-accent-foreground` for subtle emphasis. No additional accent colors.
- Components: Prefer `@/components/ui` primitives (e.g., `Button`, `Card`). Follow shadcn-style variants (`default|secondary|outline|ghost|link`) so tokens apply consistently.
- Accessibility: Maintain >= 4.5:1 contrast on text; add overlays for imagery (e.g., `bg-foreground/30` on hero backgrounds).
- Typography: Primary font is “Faustina”. Loaded via Google Fonts in `index.html` with a self-hosted fallback in `public/fonts` and `@font-face` in `src/index.css`. Tailwind `font-sans` maps to Faustina. Use weights 400–700.

## Testing Guidelines
- A test runner is not configured yet. If adding tests, use Vitest + React Testing Library.
- Name tests `*.test.ts`/`*.test.tsx` next to the source file. Add `"test": "vitest"` to `scripts` and run with `npm run test`.

## Commit & Pull Request Guidelines
- Commit messages: short, imperative (e.g., "Add route"), one topic per commit. The repo sometimes uses tags like `[skip lovable]` when appropriate.
- Pull requests must include: clear description, linked issues, and screenshots/GIFs for UI changes. Ensure `build` and `lint` pass.

## Security & Configuration Tips
- Do not commit secrets. Use `.env.local` for local keys; Vite exposes `import.meta.env`.
- Dev-only plugin `lovable-tagger` is enabled in development; keep it off in production builds.
