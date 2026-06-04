
# Rebrand to The Next Chapter + Theme Toggle

## 1. Asset uploads (Lovable Assets)

Upload via `lovable-assets` CLI and reference by CDN URL:
- `TNC_Black_Logo.png` → TNC wordmark (light bg) + generate/use a white variant for dark mode
- `BTL_Logo_from_Adib_Baroudi.webp` → Between the Lines wordmark
- `Logo_from_Adib_Baroudi.png` → No2ta A Al Satr (Arabic logo, full)
- `Logo_no_background_from_Adib_Baroudi.png` → No2ta compact mark

## 2. Routing (static HTML in `public/`)

New structure:

```text
public/
  index.html         → NEW: The Next Chapter landing (TNC bio + media company + podcast cards)
  btl.html           → MOVED: current Rania/Between the Lines lander (existing landing.html content)
  no2ta.html         → NEW: No2ta A Al Satr podcast page (Arabic-first, RTL)
  dashboard-home.html, apply.html → unchanged (rebrand chrome only)
```

- Current `index.html` (copy of `landing.html`) becomes `btl.html`.
- `landing.html` kept for backward-compat or removed; add a redirect `<meta http-equiv="refresh">` from `landing.html` → `/btl`.
- Update `public/sitemap.xml` to list `/`, `/btl`, `/no2ta`, `/apply`.

## 3. New TNC landing (`/`)

Sections:
1. **Hero** — TNC logo, headline "The Next Chapter", tagline "Rania Barghout — Podcasts. Production. Media training. Public speaking."
2. **About** — provided copy: "Award-winning Arab presenter Rania Barghout has launched a new media company, The Next Chapter, offering podcasts, production, media training, and public speaking development services…"
3. **Services** — 4 cards: Podcasts · Production · Media Training · Public Speaking
4. **Podcasts** — 2 cards:
   - **No2ta A Al Satr** (Arabic, featured — "first release") → links to `/no2ta`
   - **Between the Lines** (English) → links to `/btl`
5. **About Rania** — short bio with portrait
6. **Contact / CTA**
7. Footer with social links

## 4. New No2ta page (`/no2ta`)

Arabic-first layout (`dir="rtl"`, `lang="ar"`), reuses the same component patterns as the BTL lander: hero with No2ta logo, episode spotlight, episodes ticker (can share the same Supabase `rania_*` tables or get its own — see Open Question below), about, subscribe links.

## 5. BTL page (`/btl`)

= current `landing.html` content. Rebrand header to show "Between the Lines — a The Next Chapter podcast" with small TNC logo as parent brand link back to `/`.

## 6. Light/Dark theme toggle

- Add CSS variables for both themes in `public/style.css`:
  - `:root` = dark (default)
  - `:root[data-theme="light"]` = light overrides (bg, text, surface, border, muted)
- Replace hardcoded colors in landing/BTL/No2ta CSS with tokens (`var(--bg)`, `var(--fg)`, etc.). Scope: public site only (dashboard untouched, per user).
- Toggle UI: add a sun/moon button inside the existing mobile hamburger menu and the desktop nav. Persist in `localStorage` (`tnc-theme`), apply pre-paint via inline script in `<head>` to avoid FOUC.
- Logos: swap to white-variant TNC/BTL marks when `data-theme="dark"` via `<picture>` or two `<img>` tags toggled with CSS.

## 7. SEO / metadata

Per-page `<title>`, `<meta name="description">`, `og:*`, and canonical:
- `/` → "The Next Chapter — Rania Barghout"
- `/btl` → "Between the Lines — The Next Chapter"
- `/no2ta` → "نقطة ع السطر — The Next Chapter"

Update `public/robots.txt` sitemap line (already correct) and `public/sitemap.xml` URLs.

## 8. Files touched

- New: `public/index.html` (replaces current), `public/no2ta.html`, theme JS snippet
- Renamed: `public/index.html` (old) → `public/btl.html`
- Edited: `public/landing.html` (redirect), `public/style.css` (tokens + light theme + toggle styles), `public/sitemap.xml`
- New asset pointers: `src/assets/tnc_logo.png.asset.json`, `btl_logo.png.asset.json`, `no2ta_logo.png.asset.json`, `no2ta_mark.png.asset.json`

## Open questions (will assume defaults if not answered)

1. **No2ta data**: reuse existing `rania_latest_episode` / `rania_episodes` tables for both podcasts, or create separate tables (`no2ta_*` and rename existing to `btl_*`)? *Default: reuse for now, add a `podcast` column later if needed* — keeps this change scoped to frontend.
2. **TNC white logo for dark mode**: I'll generate a white version of the TNC wordmark via imagegen (or invert with CSS `filter: invert(1)` as a fallback). OK?
3. **Custom domain**: keep `thenextchapter.vip` pointing at `/` (new TNC lander). No DNS changes needed.

