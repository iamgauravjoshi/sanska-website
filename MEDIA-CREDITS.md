# MEDIA LICENSING & CREDITS

All stock media are downloaded into `public/` by `scripts/fetch-media.sh`, sized and converted to
WebP for the web. Files are local — no hotlinking — and can be replaced one-by-one with
company-owned photography (keep filenames or update `src/data/media.ts`).

## Images — Unsplash License (free for commercial use, attribution appreciated, not required)

| File                              | Title / description                           | Author                       | Source                                                       |
| --------------------------------- | --------------------------------------------- | ---------------------------- | ------------------------------------------------------------ |
| images/industry-marine.webp       | Blue and red cargo ship on sea                | Ian Taylor                   | https://unsplash.com/photos/jOqJbvo1P9g                      |
| images/industry-construction.webp | Construction tower cranes at dusk             | Unsplash contributor         | https://images.unsplash.com/photo-1541888946425-d81bb19240f5 |
| images/industry-oilgas.webp       | Refinery tower structures at night            | Maksym Kaharlytskyi          | https://unsplash.com/photos/u13zBF4r56A                      |
| images/industry-healthcare.webp   | Hospital corridor, scrubs & incubator         | Hush Naidoo Jade Photography | https://unsplash.com/photos/ZCO_5Y29s8k                      |
| images/industry-hospitality.webp  | Hotel resort poolside                         | Unsplash contributor         | https://images.unsplash.com/photo-1566073771259-6a8506099945 |
| images/industry-security.webp     | Security officer at site gate booth           | Alhasan Husni                | https://unsplash.com/photos/sAuFAr8BBZo                      |
| images/industry-facility.webp     | Facility services crew cleaning corridor      | Unsplash contributor         | https://images.unsplash.com/photo-1581578731548-c64695cc6952 |
| images/about-workforce.webp       | Steel-frame high-rise construction            | Unsplash contributor         | https://images.unsplash.com/photo-1504307651254-35680f356dfd |
| images/cta-welder.webp            | Welder with sparks, industrial workshop       | Unsplash contributor         | https://images.unsplash.com/photo-1518709268805-4e9042af9f23 |
| images/global-dubai.webp          | GCC city skyline                              | Unsplash contributor         | https://images.unsplash.com/photo-1512453979798-5ea266f8880c |
| images/global-mauritius.webp      | Aerial island coastline                       | Xavier Coiffic               | https://unsplash.com/photos/ByAHlRiTQjo                      |
| images/employers-port.webp        | Container terminal loading at dusk            | Timelab                      | https://unsplash.com/photos/yx20mpDyr2I                      |
| images/candidates-flight.webp     | Airliner at terminal, dusk                    | Unsplash contributor         | https://images.unsplash.com/photo-1436491865332-7a61a109cc05 |
| images/services-engineer.webp     | Field engineer with tablet on industrial site | Unsplash contributor         | https://images.unsplash.com/photo-1581094794329-c8112a89af12 |
| images/process-planning.webp      | Planning documents                            | Austin Distel                | https://unsplash.com/photos/_JsmR4dQzU                       |
| images/blueprints.webp            | Architectural blueprints                      | Patrick Tomasso              | https://unsplash.com/photos/kYeeXNzp7Zc                      |
| images/heavy-equipment.webp       | Excavator at earthworks site                  | Jamar Penny                  | https://unsplash.com/photos/ZgmGq_eFmUs                      |
| images/healthcare-staff.webp      | Nurse with stethoscope                        | JESHOOTS.COM                 | https://unsplash.com/photos/l0j0DHVWcIE                      |
| images/projects-portnight.webp    | Cargo vessels at night port                   | Razvan Mirel                 | https://unsplash.com/photos/lkf7R1hMF7Y                      |
| images/hospitality-kitchen.webp   | Kitchen team preparing dough                  | Louis Hansel                 | https://unsplash.com/photos/AUcmx7fGjtU                      |
| images/india-taj.webp             | Taj Mahal, Agra (India identity)              | Unsplash contributor         | https://images.unsplash.com/photo-1524492412937-b28074a5d7da |
| images/airport-departures.webp    | International terminal aircraft movement      | Unsplash contributor         | https://images.unsplash.com/photo-1436491865332-7a61a109cc05 |
| images/security-patrol.webp       | Security officer on perimeter patrol          | Krzysztof Hepner             | https://unsplash.com/photos/_D6rTxw4HAI                      |

> Entries listed as "Unsplash contributor" were validated by ID rather than via a search-page
> fetch, so the author name was not captured. When the client replaces or keeps these frames,
> complete attribution from the linked Unsplash page.

## Video — Pexels License (free for commercial use, attribution appreciated)

| File                          | Description                                                                            | Source                                                                                    |
| ----------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| video/hero.mp4                | Aerial view of a construction site with crane (16 s web re-encode, 1280×720, no audio) | https://www.pexels.com/video/an-aerial-view-of-a-construction-site-with-a-crane-16227945/ |
| video/hero-poster.webp / .jpg | Poster frame extracted from the same clip                                              | —                                                                                         |

## Fonts — SIL Open Font License (self-hosted)

- Manrope (600–800) and Inter (400–700), latin subsets, downloaded from Google Fonts by
  `scripts/fetch-fonts.py` → `public/fonts/*.woff2`.

## Brand asset

- `public/sanska-logo.svg` — supplied by the company; used byte-for-byte (never redrawn, recoloured,
  or distorted). Header/footer show the supplied artwork on a white chip; a separate HTML text
  wordmark sits beside it (that text is not part of the logo file).

## Map geometry

- Land path in `src/data/worldMap.ts` derives from **Natural Earth 110m** data (public domain),
  projected with d3-geo `geoNaturalEarth1` (ISC). Generated offline by `scripts/gen-worldmap.mjs`.
