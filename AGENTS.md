# AGENTS.md — Unofficial MGC Community Marketplace

## What this is

Astro static site for a community directory of businesses/professionals
affiliated with MGC Main, MGC Global, MGCNLCA, and MGCNLCA Alumni Community.

## Hard constraints

- Follow `COMMUNITY_RULES.md`
- Never add official MGC / MGCNLCA logos or design elements
- Do not build product/service catalog features
- Keep listings affiliation-gated; site remains publicly browsable

## Useful commands

```bash
npm install
npm run dev
npm run build
```

## Content

- Categories: `src/content/categories/`
- Businesses: `src/content/businesses/` (reference category by slug)

## Analytics

`PUBLIC_PLAUSIBLE_DOMAIN` enables Plausible in `src/components/Analytics.astro`.
