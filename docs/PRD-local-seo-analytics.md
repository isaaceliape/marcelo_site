# PRD — Local SEO & Analytics Follow-up for marcelogoncalvesodonto.com.br

- **Status:** Draft
- **Date:** 2026-10-23
- **Owner:** Isaac Eliape (dev) + Dr. Marcelo Gonçalves (business owner)
- **Context:** Analytics investigation (Oct 2026) found **19 visitors / 27 pageviews
  all-time** (tracking only exists since 2026-09-17), **zero visits from Brazil**,
  100% direct traffic, no referrers. Code-level SEO basics (robots.txt, sitemap.xml,
  canonical, www-consolidation) are shipped. This PRD covers everything that needs
  human/owner action or a third-party account.

## 1. Goals

1. Appear in Google results for local-intent queries (`dentista santo amaro`,
   `dentista brooklin`, `aparelho ortodôntico zona sul sp`, …).
2. Make Instagram the measurable top-of-funnel traffic source it should be.
3. Have >31 days of trustworthy, human-readable traffic history.
4. Know within a week whether any real patient traffic arrives, and from where.

**Non-goals:** paid ads, blog/content marketing, multi-page site restructure,
online booking system. Revisit only after organic + Instagram baselines exist.

## 2. Requirements

### P1 — Google Search Console (owner + dev, ~30 min + 2–3 days propagation)

**Why:** The site is not registered anywhere. Without Search Console there is no
index-coverage signal, no sitemap submission, no query data.

**Steps:**
1. Owner: log in to [Search Console](https://search.google.com/search-console)
   with the Google account that owns the domain/brand, add property
   `https://www.marcelogoncalvesodonto.com.br/` (URL-prefix property).
2. Owner: copy the HTML-tag verification token, send to dev.
3. Dev: add token via Next.js metadata (`verification.google` in `app/layout.tsx`),
   deploy, owner clicks *Verify*.
4. Owner: submit `https://www.marcelogoncalvesodonto.com.br/sitemap.xml`
   under *Sitemaps*; use *URL Inspection → Request indexing* on `/`.

**Acceptance criteria:**
- [ ] Property verified in Search Console.
- [ ] Sitemap submitted with status *Success*, 1 URL discovered.
- [ ] Homepage shows *URL is on Google* in URL Inspection (within ~1 week).

### P1 — Google Business Profile (owner, ~1 h + verification wait)

**Why:** For a neighborhood dental clinic, the map pack is the #1 discovery
surface — above any website ranking. No GBP exists/linked today.

**Steps:**
1. Owner: create/claim the profile at
   [google.com/business](https://www.google.com/business) for
   `R. Benedito Fernandes, 545, Sala 406 — Santo Amaro, São Paulo`.
2. Categories: primary **Dentist**; secondaries: Orthodontist, Dental clinic,
   Cosmetic dentist (match offered specialties).
3. Add: site URL (`https://www.marcelogoncalvesodonto.com.br/`),
   phone/WhatsApp `+55 11 96991-8002`, hours (Mon–Fri 09–18, Sat 09–13),
   photos of clinic + team, services list (the 7 specialties on the site).
4. Add JSON-LD `hasMap` link to the site schema (dev, 10 min) once the
   public maps URL exists.
5. Ask every satisfied patient for a Google review (ongoing — reviews are the
   dominant map-pack ranking factor).

**Acceptance criteria:**
- [ ] Profile live and visible on Maps for the address.
- [ ] Website + WhatsApp buttons present and correct.
- [ ] ≥ 5 genuine reviews within 60 days.

### P1 — Instagram bio link + UTM (owner, ~10 min)

**Why:** The site links *out* to Instagram, but analytics shows **zero referral
visits** — either the bio has no website link or no one taps it. Instagram is
the most likely patient source and it is currently unmeasured.

**Steps:**
1. Owner: confirm `https://www.marcelogoncalvesodonto.com.br/` is the bio link
   on [@marcelogoncalvesodontologia](https://www.instagram.com/marcelogoncalvesodontologia/).
2. Use a tagged URL so clicks are attributable in any analytics tool:
   `https://www.marcelogoncalvesodonto.com.br/?utm_source=instagram&utm_medium=social&utm_campaign=bio`
3. Optional: same treatment for the WhatsApp floating button is already
   covered (direct link, no tag needed).

**Acceptance criteria:**
- [ ] Bio link live with UTM parameters.
- [ ] First `utm_source=instagram` visit visible in analytics within 30 days
      (or: confirmed zero clicks → then the problem is content/CTA, not tech).

### P2 — Long-retention analytics: Plausible (dev, ~1 h)

**Why:** Vercel Web Analytics on the hobby plan exposes only the **last 31 days**
via API/dashboard and gives no UTM/referrer detail. Early history
(pre-2026-09-22) is already unrecoverable — stop the bleeding now.

**Decision:** **Plausible** (privacy-friendly, no cookie banner needed under
LGPD for aggregate stats, lightweight script) over GA4 (free, full-featured,
but needs LGPD consent-banner work and is overkill for a single page).

**Steps:**
1. Dev: create Plausible account (or self-host later); add
   `marcelogoncalvesodonto.com.br` site; add the 1-line script to
   `app/layout.tsx` (defer, `data-domain` set).
2. Keep Vercel Analytics running in parallel (zero cost, useful cross-check).
3. Verify: visit `?utm_source=test`, confirm realtime event in Plausible.

**Acceptance criteria:**
- [ ] Plausible dashboard shows production traffic + UTM sources.
- [ ] 90 days of history retained (Plausible default: unlimited on paid plans).

### P2 (tech debt) — Self-host fonts via `next/font/local` (dev, ~1 h)

**Why:** On 2026-10-23 the production deploy **failed** because Vercel's
Turbopack patch cannot resolve `next/font/google` internals on Next 16.2.11
(`Can't resolve '@vercel/turbopack-next/internal/font/google/font'`). Current
workaround: `next build --webpack`. Self-hosting Cormorant Garamond (500/600)
+ Inter (300/400/500/600, latin) removes the build-time Google dependency
entirely, re-enables Turbopack builds, and improves LGPD posture (no
fonts.googleapis.com call from visitors' browsers).

**Acceptance criteria:**
- [ ] woff2 files in repo, `next/font/local` with same `--font-display` /
      `--font-body` variables, no visual change.
- [ ] `next build` (Turbopack) succeeds locally **and** on Vercel; then revert
      the `--webpack` workaround.

## 3. Success metrics (review 30 days after P1 completion)

| Metric | Baseline (Oct 2026) | Target |
|---|---|---|
| Indexed URLs in Search Console | 0 (unregistered) | 1 |
| Avg. weekly visitors (any source) | ~3 | ≥ 10 |
| Visits from Brazil | 0 | > 50% of total |
| Instagram-attributed visits | 0 | ≥ 5 |
| GBP live with correct site link | no | yes |
| Analytics retention | 31 days | ≥ 1 year (Plausible) |

## 4. Open questions

1. Who owns the Google account for the domain/brand (needed for Search
   Console + GBP)?
2. Is there an uptime monitor or VPN-based browsing behind the current
   US-heavy "direct" traffic? (Determines whether baseline numbers are real.)
3. Plausible billing: owner pays (~$9/mo starter) or dev absorbs?
4. WhatsApp `wa.me` vs `api.whatsapp.com` link — keep current, both work.

## Appendix — shipped (2026-10-23, commit `29441a2` + webpack fix)

- `app/robots.ts` → `/robots.txt` (allow all + sitemap pointer)
- `app/sitemap.ts` → `/sitemap.xml` (homepage, monthly)
- canonical `/` + `metadataBase`/OG/schema consolidated on `www` host
  (apex 308-redirects to `www`, which is the host serving 200)
- `next build --webpack` workaround for the Vercel × Turbopack font bug
