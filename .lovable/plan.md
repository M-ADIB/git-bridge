## Why /btl is still 404 on live

The TanStack route files `src/routes/btl.tsx` and `src/routes/no2ta.tsx` exist in the codebase, but `https://thenextchapter.vip/btl?lang=en` still returns 404. That's because **frontend changes only go live when you click Update in the Publish dialog** — backend changes deploy automatically, but UI/routes do not. The static `/btl/index.html` file works (I confirmed in the browser), so once we publish, the route will resolve.

While we're at it, I want to replace the iframe wrapper with a cleaner redirect so the URL bar shows the real page and there are no nested-scroll quirks.

## Changes

1. **`src/routes/btl.tsx`** — replace the iframe component with a `beforeLoad` redirect to `/btl/index.html`, preserving the `?lang=...` query. Keep the `head()` SEO meta.
2. **`src/routes/no2ta.tsx`** — same treatment, redirecting to `/no2ta/index.html` (which itself forwards to BTL in Arabic).
3. **Publish** — after the edits, click Update in the Publish dialog so `/btl` and `/no2ta` start resolving on `thenextchapter.vip`.

## Technical detail

Use a client-side `window.location.replace` inside the route component (TanStack's `redirect()` only handles internal routes, not static HTML files in `public/`). The route renders a tiny placeholder and immediately swaps the URL to `/btl/index.html?lang=...`, so deep links from the homepage cards (`/btl?lang=en`, `/btl?lang=ar`) land on the existing static page with the correct language.

After approval and republish, I'll verify `/btl?lang=en`, `/btl?lang=ar`, and `/no2ta` all load on the live domain.