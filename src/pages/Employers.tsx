import { useSearchParams } from "react-router-dom";
import { Clock3, FileSignature, LineChart, Ruler, Send, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import EmployerRequirementForm from "../components/forms/EmployerRequirementForm";
import FaqList, { faqSchema } from "../components/Faq";
import { CTAButton } from "../components/Buttons";
import { employerFaqs } from "../data/faqs";
import { useSeo } from "../hooks/useSeo";
import companyConfig from "../data/companyConfig";
import { ContactLink, Ph } from "../utils/placeholders";

export default function Employers() {
  const [params] = useSearchParams();
  const preIndustry = params.get("industry");

  useSeo({
    title: "Request Manpower from India | Employers — Sanska International",
    description:
      "Submit your overseas manpower requirement: trades, volumes, salary structure and joining dates. Sanska International returns a sourcing, screening and deployment plan for Indian skilled and semi-skilled workers.",
    path: "/employers",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "For Employers", path: "/employers" },
    ],
    schema: [
      faqSchema(employerFaqs),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Overseas Manpower Requirement Intake",
        serviceType: "Recruitment of Indian workforce for overseas employers",
        provider: {
          "@type": "Organization",
          name: companyConfig.legalName,
          url: companyConfig.siteOrigin,
        },
        areaServed: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain", "Israel", "Mauritius", "Europe"],
      },
    ],
  });

  return (
    <>
      <PageHero
        slot="employers_port"
        eyebrow="For Employers · Request Manpower"
        crumbs={[{ name: "Home", path: "/" }, { name: "For Employers", path: "/employers" }]}
        title="Tell us the workforce you need"
        lede={
          <>
            Share your hiring requirement and our recruitment team will evaluate sourcing, screening and deployment options
            {preIndustry ? <> — pre-selecting <strong className="text-white">{preIndustry}</strong> in the form below</> : null}.
          </>
        }
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-semibold text-slate-300">
          <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-brand-400" aria-hidden="true" /> Sourcing plan in response</span>
          <span className="flex items-center gap-2"><Ruler className="h-4 w-4 text-brand-400" aria-hidden="true" /> Trade-level specification</span>
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-400" aria-hidden="true" /> Your panel selects</span>
        </div>
      </PageHero>

      {/* ── Form + rail ───────────────────────────────────────────── */}
      <section className="section-y bg-paper" aria-labelledby="form-h">
        <div className="container-x grid items-start gap-8 lg:grid-cols-[1.65fr_1fr]">
          <div>
            <SectionHeading as="h2" eyebrow="Requirement intake" title={<span id="form-h">Submit your manpower requirement</span>} />
            <p className="reveal mt-3 max-w-2xl text-[13.5px] leading-relaxed text-muted">
              Three short steps. Every field exists because it changes the sourcing plan — trade scarcity, batch sequencing, documentation load.
              Attach a demand letter if you already have one.
            </p>
            <div className="reveal mt-7">
              <EmployerRequirementForm />
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-[92px]" aria-label="Alternate contact channels and what happens next">
            <div className="card-x p-6">
              <h3 className="flex items-center gap-2 font-display text-[15.5px] font-bold text-navy">
                <Send className="h-4 w-4 text-brand-600" aria-hidden="true" /> Prefer to send directly?
              </h3>
              <ul className="mt-4 space-y-3 text-[13.5px]">
                <li className="flex items-center justify-between gap-3">
                  <span className="font-semibold text-muted">WhatsApp</span>
                  <ContactLink kind="whatsapp" className="font-bold text-brand-600 hover:text-brand-700"><Ph value={companyConfig.contact.whatsapp} /></ContactLink>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="font-semibold text-muted">Email</span>
                  <ContactLink kind="email" className="font-bold text-brand-600 hover:text-brand-700"><Ph value={companyConfig.contact.email} /></ContactLink>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="font-semibold text-muted">Phone</span>
                  <ContactLink kind="phone" className="font-bold text-brand-600 hover:text-brand-700"><Ph value={companyConfig.contact.phone} /></ContactLink>
                </li>
              </ul>
            </div>

            <div className="card-x p-6">
              <h3 className="flex items-center gap-2 font-display text-[15.5px] font-bold text-navy">
                <FileSignature className="h-4 w-4 text-leaf-600" aria-hidden="true" /> What happens after you submit
              </h3>
              <ol className="mt-4 space-y-3.5">
                {[
                  ["Acknowledgement", "Reference number issued; requirement reaches the recruitment desk."],
                  ["Sourcing plan", "Within agreed time — trade pools, realistic stage dates, risks flagged."],
                  ["Shortlist + trade tests", "Verified profiles with test records, prepared for your interview panel."],
                  ["You select", "Employer holds selection authority. Documents proceed for your picks only."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-3 text-[13px]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ice text-[11px] font-extrabold text-brand-700 ring-1 ring-brand/25">{i + 1}</span>
                    <span>
                      <strong className="font-bold text-navy">{t}.</strong> <span className="text-muted">{d}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="card-x p-6">
              <h3 className="flex items-center gap-2 font-display text-[15.5px] font-bold text-navy">
                <LineChart className="h-4 w-4 text-navy" aria-hidden="true" /> Why employers standardise on this form
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                The same structure across employers means comparable sourcing plans, faster internal approvals and an audit trail from requirement to joining date.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="section-y bg-white" aria-labelledby="efaqs-h">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading as="h2" eyebrow="Employer FAQ" title={<span id="efaqs-h">Before the first call</span>} />
            <p className="reveal mt-4 text-[14px] leading-relaxed text-muted">
              Direct answers on selection authority, timelines and documentation responsibility. Anything else — the recruitment desk prefers specifics.
            </p>
            <div className="reveal mt-6">
              <CTAButton to="/recruitment-process" variant="outline">See the full 12-stage process</CTAButton>
            </div>
          </div>
          <FaqList items={employerFaqs} />
        </div>
      </section>

      {/* ── Mid-page conversion ───────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-xl border border-navy/60 bg-navy mx-auto my-4 max-w-[1196px] px-6 py-12 text-center md:my-8 md:py-14" aria-label="Bulk hiring prompt">
        <div aria-hidden="true" className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(/images/industry-construction.webp)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative">
          <h2 className="font-display text-[clamp(1.4rem,3vw,2rem)] font-extrabold text-white">Hiring 100+ workers in a single programme?</h2>
          <p className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-slate-300">
            Bulk recruitment runs on wave planning, dedicated desks and pooled documentation capacity. Send the master requirement list — we will break it down with you.
          </p>
          <div className="mt-7 flex justify-center gap-3">
            <a href="#form-h" className="btn-primary !px-6">Start the requirement</a>
          </div>
        </div>
      </section>
    </>
  );
}
