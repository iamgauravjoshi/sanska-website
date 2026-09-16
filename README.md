# Sanska International — Corporate Website

Production-quality, multi-page static website for **Sanska International Edificational Services Pvt. Ltd.**
(overseas manpower recruitment from India).

Stack: **React 18 + Vite 5 + TypeScript + Tailwind CSS 3 + React Router 6 + lucide-react**.
No backend, no CMS, no auth — by design. Forms are validated client-side and routed through a
single isolated submission handler.

---

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, builds, writes dist/ (incl. 404.html SPA fallback)
npm run preview    # serve the production build locally
```

Deploy `dist/` to any static host. On hosts without SPA rewrites, `404.html` and `_redirects`
are included for Cloudflare Pages / Netlify. For Nginx use `try_files $uri /index.html;`.

---

## BEFORE LAUNCH — the placeholder checklist (content integrity policy)

This build **never invents company facts**. Anything unverifiable is stored as a bracketed token
and renders as a visibly-marked amber chip:

- `[MEA RD LICENCE NUMBER]`, `[LICENCE VALIDITY PERIOD]`
- `[ESTABLISHED YEAR]`, `[COMPANY REGISTRATION / CIN]`
- `[DEPLOYMENT_COUNT]`, `[INTERNATIONAL_CLIENTS]`, `[COUNTRIES_SERVED]`, `[YEARS_EXPERIENCE]`
- `[PHONE]`, `[WHATSAPP]`, `[EMAIL]`, `[OFFICE HOURS]`, `[LINKEDIN COMPANY PAGE URL]`
- `[REGISTERED OFFICE ADDRESS LINE 1/2]`, `[RECRUITMENT OFFICE …]`
- `[DIRECTOR NAME]`, `[FOUNDERS]`, `[PROJECT NAME]`, `[CLIENT LOGO]`, `[RECRUITMENT FEE POLICY]`

Find all of them with:

```bash
grep -rn "\[[A-Z][A-Z0-9 /\-–_().]*\]" src/ --include="*.ts*" | grep -v node_modules
```

**Fill the real values in `src/data/companyConfig.ts` and `src/data/licenses.ts` first — most
sites-wide chips are driven from those two files.**

### Forms → live intake (5 minutes)

`companyConfig.forms`: set `provider: "endpoint"` and `endpoint` to a Formspree/Web3Forms URL (or own
API accepting flat JSON). Until then, submissions are validated and acknowledged client-side and are
explicitly labelled as such in the UI — nothing is faked as "sent".
Payload keys are documented in `src/utils/formSubmit.ts`. Files are validated (type/size) but not
uploaded while static — swap to multipart at the same handler if you need true uploads.

### Publishing licenses & deployment records

1. Drop verified certificate PDFs in `public/documents/` (see folder README).
2. In `src/data/licenses.ts` set `verified: true`, `document: "/documents/<file>.pdf"`, real numbers.
3. Only once records exist, set `showPublicDeploymentRecord: true` in companyConfig (unlocks stats
   counters and /projects register; add rows to `src/data/stats.ts` + a projects array here).
4. Stats: replace `"[…]"` values in `src/data/stats.ts` with numbers — they become animated counters
   automatically. **Do not ship invented figures.**

---

## Structure

```
src/
  components/      # reusable system: Header, Footer, VideoHero, PageHero, WorldMap, forms, …
  layouts/         # SiteLayout (scroll + reveal orchestration)
  pages/           # 14 routes, each with own SEO metadata
  data/            # ALL content: companyConfig, services, industries, countries, jobs,
                   #      process, licenses, stats, faqs, media manifest (media.ts),
                   #      worldMap.ts (generated), nav.ts
  hooks/           # useSeo (title/meta/canonical/JSON-LD), useReveal (scroll animations)
  utils/           # placeholders (isPlaceholder/Ph), formSubmit (isolated handler), validation
  styles/fonts.css # self-hosted Manrope + Inter (generated)
scripts/           # fetch-media.sh, fetch-fonts.py, gen-worldmap.mjs (asset pipeline)
public/            # images/, video/, fonts/, documents/, robots.txt, sitemap.xml
MEDIA-CREDITS.md   # source URL, author & licence for every stock asset
```

### Swapping imagery

All photos are referenced by *slot* (`src/data/media.ts`). Replace the file in `public/images`
(same name = zero code change), or rerun `scripts/fetch-media.sh` after editing its manifest.
Sizes below the fold are lazy-loaded; dimensions are reserved to prevent layout shift.

### Video hero

`public/video/hero.mp4` (16 s, 720p, ~1.7 MB, silent, faststart) + WebP/JPG poster. The hero
respects `prefers-reduced-motion` (static poster, no autoplay) and falls back to the poster if the
video fails to load. To replace: encode `ffmpeg -i in.mp4 -vf "scale=1280:-2,fps=24" -crf 30
-preset veryfast -movflags +faststart -an public/video/hero.mp4` and regenerate a poster frame.

### SEO

Per-route `<title>`/description/canonical/OG/Twitter and JSON-LD (Organization, BreadcrumbList,
Service, FAQPage only where FAQs are visibly rendered) via `useSeo`. `robots.txt` + `sitemap.xml`
ship in `public/`. Set the real production domain in `companyConfig.siteOrigin` + those two files.

---

## Design system

Brand tokens in `tailwind.config.js`: `brand #0EB2DF`, `leaf #67BD53`, `navy #062D43`, `ink`, `muted`,
`ice`, `mint`, `paper`, `line`. Blue/green are reserved for CTAs, icons, accents and map connections;
surfaces stay navy/white/neutral. Type: Manrope (display) + Inter (UI). Motion: 200–600 ms, opacity/
transform only, reduced-motion honoured globally.

Accessibility: semantic landmarks, skip link, focus-visible rings, labelled fields with error
summaries and focus management, aria-expanded nav/drawer/FAQ states, all animation opt-out,
touch targets ≥ 44 px, no information only-on-hover (tiles are also full pages).

## Asset regeneration

```bash
bash scripts/fetch-media.sh      # downloads + WebP-converts stock media (needs curl, ImageMagick, python+ffmpeg via imageio-ffmpeg)
python3 scripts/fetch-fonts.py   # re-pulls + self-hosts fonts CSS
node scripts/gen-worldmap.mjs    # regenerates src/data/worldMap.ts (needs: npm i --no-save d3-geo topojson-client world-atlas)
```
