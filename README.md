# Unofficial MGC Community Marketplace

Community-run directory of **people and businesses** affiliated with:

- MGC Main
- MGC Global
- MGCNLCA
- MGCNLCA Alumni Community

**Not an official MGC or MGCNLCA project.** See [COMMUNITY_RULES.md](./COMMUNITY_RULES.md).

## Community rules (summary)

1. Listings are limited to people **actively affiliated** with MGC / MGCNLCA (and the orgs above).
2. **Anyone** may access / browse the site.
3. **Never** use official MGC or MGCNLCA logos or design elements.

## Features

- Category index of business / professional categories
- Per-category pages with businesses sorted **A–Z**
- Per-business pages with optional **outlink**
- **Plausible Analytics** via `PUBLIC_PLAUSIBLE_DOMAIN`

## Out of scope

- Cataloging specific products or services

## Stack

- [Astro](https://astro.build/) (static)
- Markdown content collections under `src/content/`

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Adding content

### Category

Create `src/content/categories/<slug>.md`:

```md
---
title: Food & Beverage
description: Cafés, catering, baked goods, and other food businesses.
order: 1
---
```

### Business

Create `src/content/businesses/<slug>.md`:

```md
---
name: Example Business
category: food-and-beverage   # must match a category slug
summary: One-line description
affiliation:
  - MGCNLCA Alumni Community
website: https://example.com   # optional outlink
contact: hello@example.com     # optional
location: Metro Manila         # optional
owner: Jane D.                 # optional
---

Longer notes for the business page (optional).
```

`affiliation` must be one or more of:

- `MGC Main`
- `MGC Global`
- `MGCNLCA`
- `MGCNLCA Alumni Community`

## Analytics

Set `PUBLIC_PLAUSIBLE_DOMAIN` to your Plausible site domain (see `.env.example`).
When unset, no analytics script is injected.

## Branding note

Use original visuals only. Do not copy official MGC / MGCNLCA marks, seals, or
design systems into this repo or the live site.
