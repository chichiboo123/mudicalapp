# 치수쌤의 뮤.디.컬

뮤지컬 × 디지털 × 콜래버레이션 — 선생님의 뮤지컬 수업을 위한 디지털 도구 플랫폼. (Musical · Digital · Collaboration)

## Run & Operate

- `pnpm --filter @workspace/mudical run dev` — run the web app (port assigned via $PORT)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, shadcn/ui, wouter (routing)
- i18n: i18next + react-i18next (Korean default, English toggle)
- Fonts: PretendardGOV Variable (body), DotGothic16 (title), Google Material Icons

## Where things live

- `artifacts/mudical/src/` — main app
- `artifacts/mudical/src/i18n.ts` — i18n initialization with KO/EN inline resources
- `artifacts/mudical/src/data/tools.ts` — all 14 tool definitions (name, desc, link, icon)
- `artifacts/mudical/src/pages/Home.tsx` — single page with all 7 categories
- `artifacts/mudical/src/components/` — Header, Footer, ToolCard, CategoryTabs
- `attached_assets/` — 14 app icon images (1–14)

## Architecture decisions

- Frontend-only: no backend API needed; all tools link to external GitHub Pages apps
- i18n via inline resources in `src/i18n.ts` (no separate JSON files)
- App icons imported via `@assets/` alias pointing to `../../attached_assets/`
- Little Prince aesthetic: pastel mint/green background with CSS star decorations

## Product

Platform listing 14 musical theater education tools across 7 categories:
기반(Foundation), 이야기/대본(Story/Script), 음악(Music), 움직임(Movement), 무대미술(Stage Design), 공연(Performance), 감상수업(Appreciation).

## User preferences

- Korean default language, English toggle in header
- PretendardGOV as body font, DotGothic16 pixel font for site title
- Google Material Icons for UI icons
- Footer: "Created by. 교육뮤지컬 꿈꾸는 치수쌤" → https://litt.ly/chichiboo
- No emojis in the UI

## Gotchas

- `@import url(...)` in index.css MUST come before `@import "tailwindcss"` — PostCSS fails silently otherwise
- i18n file is at `src/i18n.ts` — import as `'./i18n'` in App.tsx (not `'../i18n'`)
- App icons use `@assets/N_timestamp.png` format; the alias is set in vite.config.ts
