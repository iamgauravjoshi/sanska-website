import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import media from "../data/media";
import type { Industry } from "../data/industries";

/**
 * Image-driven industry tile (homepage grid). Description + roles are always
 * visible in DOM on mobile and expand on hover/focus on desktop — accessible
 * either way since the tile itself links to the full sector page.
 */
export default function IndustryTile({ industry, size = "md", index = 0 }: { industry: Industry; size?: "md" | "lg"; index?: number }) {
  const m = media[industry.media];
  if (!m) return null;
  const big = size === "lg";
  return (
    <article
      className={`reveal group relative overflow-hidden rounded-lg bg-navy ${big ? "min-h-[300px] md:col-span-2 md:row-span-2 md:min-h-[460px]" : "min-h-[240px]"}`}
      style={{ ["--reveal-delay" as string]: `${(index % 4) * 70}ms` }}
    >
      <img
        src={m.src}
        alt={m.alt}
        width={m.width}
        height={m.height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.035] group-focus-within:scale-[1.035]"
      />
      <div
        className="absolute inset-0"
        style={{
          background: big
            ? "linear-gradient(180deg, rgba(4,20,32,0.05) 30%, rgba(4,20,32,0.55) 68%, rgba(4,20,32,0.92) 100%)"
            : "linear-gradient(180deg, rgba(4,20,32,0.1) 38%, rgba(4,20,32,0.62) 72%, rgba(4,20,32,0.94) 100%)",
        }}
        aria-hidden="true"
      />
      <div className={`relative z-10 flex h-full flex-col justify-end ${big ? "p-6 md:p-8" : "p-5"}`}>
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-400">{industry.tagline}</p>
        <h3 className={`font-display font-bold leading-tight text-white ${big ? "text-[22px] md:text-[27px]" : "text-[18px]"}`}>{industry.name}</h3>
        <div
          className="grid transition-[grid-template-rows,opacity] duration-400 ease-out md:max-h-0 md:grid-rows-[0fr] md:opacity-0 md:group-hover:max-h-44 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-within:max-h-44 md:group-focus-within:grid-rows-[1fr] md:group-focus-within:opacity-100"
        >
          <div className="overflow-hidden">
            <p className={`mt-3 text-[13.5px] leading-relaxed text-slate-200 ${big ? "max-w-md" : ""}`}>{industry.overview}</p>
            <p className="mt-2.5 text-[12.5px] font-semibold text-slate-300">
              Typical roles: <span className="font-normal text-slate-200">{industry.categories.slice(0, 4).join(" · ")}</span>
            </p>
          </div>
        </div>
        <Link
          to={`/industries#${industry.slug}`}
          className={`mt-4 inline-flex items-center gap-1.5 self-start rounded-md px-3.5 py-2 text-[12.5px] font-bold text-white/95 ring-1 ring-white/25 backdrop-blur-sm transition-colors duration-250 hover:bg-white hover:text-navy ${big ? "md:mt-5" : ""}`}
          aria-label={`${industry.name} — see sector detail`}
        >
          Sector detail
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-250" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
