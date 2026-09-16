/* eslint-disable */
// Render audit: load every route in headless chromium, capture console errors + screenshots.
const { chromium } = require("playwright");
const routes = [
  "/", "/about", "/services", "/industries", "/global-presence", "/employers",
  "/candidates", "/recruitment-process", "/job-categories", "/projects",
  "/licenses", "/contact", "/privacy", "/terms", "/nope-404",
];
const VIEWPORTS = { desktop: { width: 1440, height: 900 }, mobile: { width: 375, height: 812 } };

(async () => {
  const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });
  let fail = 0;
  for (const vp of ["desktop", "mobile"]) {
    const page = await browser.newPage({ viewport: VIEWPORTS[vp] });
    for (const r of routes) {
      const errors = [];
      page.removeAllListeners("console");
      page.removeAllListeners("pageerror");
      page.on("console", (m) => { if (m.type() === "error") errors.push(m.text().slice(0, 300)); });
      page.on("pageerror", (e) => errors.push("PAGEERROR " + String(e).slice(0, 300)));
      try {
        await page.goto("http://localhost:5173" + r, { waitUntil: "networkidle", timeout: 25000 });
      } catch (e) {
        console.log(`[${vp}] ${r} → NAV FAIL ${e.message}`); fail++; continue;
      }
      const h1 = await page.locator("h1").first().textContent().catch(() => null);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      const shots = ["/", "/employers", "/about", "/industries"];
      if (shots.includes(r) && vp === "desktop") await page.screenshot({ path: `/tmp/shot-${r === "/" ? "home" : r.slice(1)}-top.png` });
      if (shots.includes(r) && vp === "mobile") await page.screenshot({ path: `/tmp/shot-${r.slice(1) || "home"}-m.png` });
      const status = errors.length ? "CONSOLE ERRORS: " + errors.join(" | ") : "clean";
      if (errors.length) fail++;
      if (overflow > 1) { console.log(`[${vp}] ${r} → H-OVERFLOW ${overflow}px`); fail++; }
      console.log(`[${vp}] ${r} → h1="${(h1 || "").trim().slice(0, 60)}" ${status}`);
    }
    await page.close();
  }
  await browser.close();
  console.log(fail === 0 ? "ALL-OK" : `ISSUES=${fail}`);
  process.exit(fail === 0 ? 0 : 1);
})();
