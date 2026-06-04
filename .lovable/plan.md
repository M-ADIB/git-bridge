## What I found

The live deployment is serving the actual files at:

- `https://thenextchapter.vip/btl/index.html` works
- `https://thenextchapter.vip/no2ta/index.html` works
- `https://thenextchapter.vip/btl` returns 404
- `https://thenextchapter.vip/no2ta` returns 404

So the content exists, but the host is not automatically mapping clean directory URLs like `/btl` to `/btl/index.html`.

## Plan

1. **Add clean-route entry files**
   - Restore/create `public/btl.html` as a real page copy, not a redirect stub.
   - Restore/create `public/no2ta.html` as a real page copy, not a redirect stub.
   - This matches what the live host already proves works: `/btl.html` is served successfully.

2. **Update homepage and internal links**
   - Change homepage podcast links from `/btl?lang=en` and `/btl?lang=ar` to `/btl.html?lang=en` and `/btl.html?lang=ar`.
   - Change internal podcast navigation that points at `/btl` or `/no2ta` to the corresponding `.html` URL where needed.

3. **Keep the directory pages too**
   - Leave `public/btl/index.html` and `public/no2ta/index.html` intact so `/btl/index.html` and `/no2ta/index.html` keep working.
   - Build output will include both route styles.

4. **Adjust build config safely**
   - Update the build commands so they no longer depend on deleted files in a way that can fail.
   - Ensure production deploy includes both `btl.html` / `no2ta.html` and the existing folder pages.

5. **Verify**
   - Check the local file tree and build configuration references.
   - After publishing, verify:
     - `https://thenextchapter.vip/btl.html?lang=en`
     - `https://thenextchapter.vip/btl.html?lang=ar`
     - `https://thenextchapter.vip/no2ta.html`

## Important note

Because the live platform is not resolving `/btl` to `/btl/index.html`, the reliable fix is to use `.html` URLs for the published static site. The content is already deployed; the failure is the clean URL mapping.