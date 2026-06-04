## What's broken

The live site (`thenextchapter.vip`) is a static site, not a TanStack app. The `build` script in `package.json` is destroying the real podcast pages:

```
cp public/btl.html public/btl/index.html
cp public/no2ta.html public/no2ta/index.html
```

- `public/btl/index.html` and `public/no2ta/index.html` are the real podcast pages (full HTML, ~650 lines for BTL).
- `public/btl.html` and `public/no2ta.html` are tiny stubs whose only job is `location.replace('/btl')` / `/no2ta`.
- The build copies the stubs over the real pages. On the live host, visiting `/btl` serves the stub, which redirects to `/btl`, which serves the stub again — and the host ultimately returns "Not Found".

The earlier `src/routes/btl.tsx` and `src/routes/no2ta.tsx` work I did is irrelevant — there is no Vite/TanStack build wired up in this project (no `vite.config.ts`, no `src/router.tsx`, no `routeTree.gen.ts`). Those files are never built or served.

## Fix

1. **`package.json`** — rewrite `dev` and `build` so they:
   - Do NOT copy `public/btl.html` over `public/btl/index.html` (or the equivalent for no2ta).
   - Still produce a working `dist/` for the host: just `cp -R public/. dist/`.
   - For the slash-less URLs (`/btl`, `/no2ta`), also copy the real page to `dist/btl.html` and `dist/no2ta.html` so the host can serve them whether or not it auto-redirects to a trailing slash.

   New scripts:
   ```
   "dev":   "cd public && python3 -m http.server 8080"
   "build": "rm -rf dist && mkdir -p dist && cp -R public/. dist/ && cp public/btl/index.html dist/btl.html && cp public/no2ta/index.html dist/no2ta.html"
   ```

2. **Delete the redirect stubs** so they can never be copied over the real pages again:
   - `public/btl.html` (stub)
   - `public/no2ta.html` (stub)

3. **Delete the dead TanStack route files** to avoid future confusion:
   - `src/routes/btl.tsx`
   - `src/routes/no2ta.tsx`
   - `src/routes/index.tsx`, `src/routes/apply.tsx`, `src/routes/dashboard-home.tsx` (unused — no router exists)
   - Optionally the whole `src/` tree, since none of it is built.

4. **Publish**. Click Update in the Publish dialog so the corrected `dist/` ships to `thenextchapter.vip`.

5. **Verify on live** after publish:
   - `https://thenextchapter.vip/btl/?lang=en` — loads BTL page
   - `https://thenextchapter.vip/btl?lang=ar` — loads BTL page (Arabic)
   - `https://thenextchapter.vip/no2ta/` — loads No2ta page
   - Homepage cards (`/btl?lang=en`, `/btl?lang=ar`) work end-to-end

## Why this is the right fix

The real pages already exist and already handle the `?lang=` switching. The only thing breaking them is the build clobbering them. Removing the clobber + keeping a slash-less HTML copy is the smallest change that makes every existing link work.

## Notes / risks

- If the static host *requires* a redirect file for slash-less URLs, the `cp public/btl/index.html dist/btl.html` step covers that — `/btl` will serve a full copy of the page instead of a redirect. Slightly duplicated bytes, but bulletproof.
- I'm not changing any visual content of the podcast pages.
