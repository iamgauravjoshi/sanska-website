import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "../data/faqs";

/** Accessible disclosure list. Content rendered even when collapsed (DOM) for search & SR. */
export default function FaqList({ items, title }: { items: Faq[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="reveal" aria-label={title ?? "Frequently asked questions"}>
      <ul className="divide-y divide-line rounded-lg border border-line bg-white">
        {items.map((f, i) => {
          const isOpen = open === i;
          return (
            <li key={f.q}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-ice/50 md:px-6"
                >
                  <span className={`font-display text-[15px] font-bold md:text-[16px] ${isOpen ? "text-brand-700" : "text-navy"}`}>{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-600" : ""}`} aria-hidden="true" />
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                hidden={!isOpen}
                className="px-5 pb-5 md:px-6"
              >
                <p className="max-w-2xl text-[14px] leading-relaxed text-muted">{f.a}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/** JSON-LD FAQPage schema for whatever is visibly rendered. */
export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
