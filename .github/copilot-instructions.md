## Purpose

This file gives targeted guidance to AI coding agents working on this Next.js + TypeScript codebase so they can be productive immediately.

## Quick facts

- Framework: Next.js (app router) — routes are under `app/`.
- Language: TypeScript (see `tsconfig.json`, `paths` maps `@/*` -> `./*`).
- Package manager: pnpm is encouraged (repo contains `pnpm-lock.yaml`).
- Styling: Tailwind CSS; global styles in `app/globals.css` and `styles/globals.css`.
- UI primitives: `components/ui/` contains many small, reusable components (Radix + CVA patterns).

## Important files to read first

- `app/layout.tsx` — root layout, fonts and analytics wired here.
- `components/theme-provider.tsx` — theme provider wrapper using `next-themes`.
- `components/ui/button.tsx` — canonical example of component patterns (CVA, `cn()`, `asChild`, Radix `Slot`).
- `lib/utils.ts` — utility `cn()` using `clsx` + `twMerge` (used everywhere for class merging).
- `next.config.mjs` — build-time behavior (note: `typescript.ignoreBuildErrors: true`).

## How to run / build / lint

Use the scripts in `package.json`. Recommended commands (PowerShell):

```powershell
pnpm install
pnpm dev   # runs `next dev`
pnpm build # runs `next build`
pnpm start # runs `next start`
pnpm lint  # runs `eslint .`
```

Note: `next.config.mjs` sets `ignoreBuildErrors: true` and `images.unoptimized: true` — expect builds to pass locally even if TypeScript emits errors; linting is separate.

## Project conventions and patterns (do not break these)

- UI components live in `components/ui/`. They:
  - Prefer function components that export both the component and any variant helpers (see `Button` + `buttonVariants`).
  - Use `class-variance-authority` (CVA) for variant management.
  - Use `cn()` from `lib/utils.ts` to merge classes (twMerge + clsx).
  - Support `asChild` with Radix `Slot` for flexible rendering.

- Route files live under `app/` following Next.js app router conventions. Each folder with `page.tsx` becomes a route.

- The codebase uses `next-themes` for theming; wrap clients in `ThemeProvider` when adding global UI wrappers.

- Prefer the `@/` import alias (configured via `tsconfig.json`) when referencing project files.

## Integration points & external deps

- Vercel Analytics is included in `app/layout.tsx` via `@vercel/analytics/next`.
- Many Radix UI primitives are used (`@radix-ui/*`) — components often wrap Radix primitives.
- Notifications use `sonner` (see `components/ui/toast.tsx` / `toaster.tsx`).

## Common edits agents may need to make

- When adding a new UI primitive: create `components/ui/<name>.tsx`, follow the CVA + `cn()` pattern, export variants where useful.
- When adding global styles: prefer `app/globals.css` and update `app/layout.tsx` when necessary.

## Edge-cases & gotchas

- There is no test runner configured (no `test` script). Don’t assume unit tests exist.
- TypeScript errors are ignored at build-time via `next.config.mjs`. If adding strict type fixes, run the TypeScript compiler locally to confirm behavior.
- Multiple `use-mobile` files exist (`hooks/use-mobile.ts` and `components/ui/use-mobile.ts`) — check both to avoid duplication/conflicts.

## Examples to inspect when changing UI

- `components/ui/button.tsx` — how to structure CVA and `asChild`.
- `lib/utils.ts` — `cn()` class merging.
- `components/theme-provider.tsx` — theme wiring.

## When in doubt

- Run `pnpm dev` and open the app to visually verify UI changes.
- Use the `@/` alias for imports, and prefer existing patterns in `components/ui/` when implementing new primitives.

If anything here is unclear or you want more detail on build, test, or runtime workflows, say which area and I’ll expand or merge this into any existing guidance you want preserved.
