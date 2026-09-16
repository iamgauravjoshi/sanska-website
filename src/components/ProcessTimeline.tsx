import Icon from "./Icon";
import type { ProcessStep } from "../data/process";

/**
 * Full 12-step journey (Recruitment Process page): vertical rail with numbered
 * nodes; on desktop alternates around a central animated line.
 */
export default function ProcessTimeline({ steps, light = false }: { steps: ProcessStep[]; light?: boolean }) {
  return (
    <ol className={`relative ${light ? "text-slate-300" : "text-muted"}`}>
      {/* central line */}
      <div
        aria-hidden="true"
        className={`absolute left-[22px] top-2 bottom-2 w-px md:left-1/2 ${light ? "bg-white/15" : "bg-line"}`}
        style={{ backgroundImage: light ? undefined : "linear-gradient(180deg, #0EB2DF 0%, #67BD53 100%)", background: undefined }}
      />
      {steps.map((s, i) => (
        <li
          key={s.no}
          className="reveal relative flex gap-5 pb-10 pl-0 last:pb-0 md:grid md:grid-cols-2 md:gap-12 md:pl-0"
          style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 60}ms` }}
        >
          {/* node */}
          <span
            aria-hidden="true"
            className={`absolute left-[22px] top-0 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-[12px] font-extrabold ring-4 md:left-1/2 ${
              light ? "bg-brand text-navy ring-navy" : "bg-navy text-white ring-white"
            }`}
          >
            {s.no}
          </span>
          <div className={`ml-14 md:ml-0 ${i % 2 === 0 ? "md:col-start-1 md:pr-6 md:text-right" : "md:col-start-2 md:pl-6"}`}>
            <div
              className={`card-x inline-block w-full p-5 text-left transition-shadow duration-300 hover:shadow-lift ${
                i % 2 === 0 ? "md:text-right" : ""
              } ${light ? "!border-white/12 !bg-white/[0.045] hover:!bg-white/[0.07]" : ""}`}
            >
              <p className={`mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] ${i % 2 === 0 ? "md:justify-end" : ""} ${light ? "text-brand-400" : "text-brand-600"}`}>
                <span className={i % 2 === 0 ? "md:order-2" : ""}>Stage {s.no}</span>
                <Icon name={s.icon} className={`h-4 w-4 ${light ? "text-leaf-400" : "text-leaf-600"}`} />
              </p>
              <h3 className={`font-display text-[17px] font-bold ${light ? "text-white" : "text-navy"}`}>{s.title}</h3>
              <p className={`mt-2 text-[13.5px] leading-relaxed ${light ? "text-slate-300" : "text-muted"}`}>{s.desc}</p>
              <p className={`mt-3 text-[11px] font-semibold uppercase tracking-wider ${light ? "text-slate-500" : "text-[#93a4ad]"}`}>
                {s.audience === "employer" ? "Primarily employer-side" : s.audience === "candidate" ? "Primarily candidate-side" : "Joint coordination"}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
