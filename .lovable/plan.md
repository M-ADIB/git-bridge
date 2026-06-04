# Fix "Not Found" on /btl (and /no2ta)

## Root cause
The published site runs on TanStack Router. The homepage works because `src/routes/index.tsx` exists and iframes `public/landing.html`. There is **no route file for `/btl`**, so when the podcast cards link to `/btl?lang=en` / `/btl?lang=ar`, the router renders its 404 before the static `public/btl/index.html` is ever served.

The same gap exists for `/no2ta`.

## Fix
Mirror the pattern already used by `src/routes/index.tsx` (iframe the static HTML) for the missing routes.

1. **Create `src/routes/btl.tsx`**
   - `createFileRoute("/btl")`
   - `head()` with BTL-specific title / description / og tags.
   - Component renders a full-viewport `<iframe>` pointing at `/btl/index.html`, forwarding `?lang=...` so the existing language handling in `public/app.js` keeps working. Use `Route.useSearch()` (or read `window.location.search`) to append the query string to the iframe `src`.

2. **Create `src/routes/no2ta.tsx`**
   - Same pattern, iframe `/no2ta/index.html` (which already redirects to `/btl`, so this just ensures `/no2ta` doesn't 404 either).

3. No changes to `public/index.html` link targets — they stay `/btl?lang=en` and `/btl?lang=ar`.

## Verification
- After build, visit `/btl`, `/btl?lang=en`, `/btl?lang=ar`, and `/no2ta` on the preview — each should load the static page instead of the TanStack 404.
- Confirm the language switch in the BTL page still reflects the URL param.
