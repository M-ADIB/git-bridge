export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let res = await env.ASSETS.fetch(request);
    if (res.status === 404) {
      const p = url.pathname.replace(/\/+$/, "");
      if (p && !/\.[a-zA-Z0-9]+$/.test(p)) {
        const alt = new URL(url);
        alt.pathname = p + ".html";
        res = await env.ASSETS.fetch(new Request(alt, request));
      }
    }
    return res;
  },
};
