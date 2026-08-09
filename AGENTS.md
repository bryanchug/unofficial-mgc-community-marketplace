# AGENTS.md — Avoda

## What this is

**Avoda** — Astro static site for a community directory of businesses/professionals
affiliated with MGC Main, MGC Global, MGCNLCA, and MGCNLCA Alumni Community.

Brand lock: [BRAND.md](./BRAND.md). Product name is **Avoda** (no MGC in the
title); audience is still the MGC community; project stays unofficial.

## Hard constraints

- Follow `COMMUNITY_RULES.md` and `BRAND.md`
- Never add official MGC / MGCNLCA logos or design elements
- Do not build product/service catalog features
- Keep listings affiliation-gated; site remains publicly browsable
- Do not rename the product away from **Avoda** without Bryan’s go

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
