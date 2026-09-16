const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch({ args: ["--no-sandbox"] });
  const pg = await b.newPage({ viewport: { width: 375, height: 812 } });
  for (const r of ["/about", "/licenses", "/", "/global-presence", "/employers", "/services", "/candidates", "/contact", "/industries", "/job-categories", "/recruitment-process", "/projects", "/privacy"]) {
    await pg.goto("http://localhost:5173" + r, { waitUntil: "networkidle" });
    const bad = await pg.evaluate(() => {
      const out = [];
      const cw = document.documentElement.clientWidth;
      for (const el of document.querySelectorAll("body *")) {
        const b = el.getBoundingClientRect();
        if (b.right > cw + 1.5) { out.push(`${el.tagName}.${(el.className||"").toString().split(" ").slice(0,3).join(".")}`); }
      }
      return [...new Set(out)].slice(0, 6);
    });
    console.log(r, bad.length ? "→ " + JSON.stringify(bad) : "OK");
  }
  await b.close();
})();
