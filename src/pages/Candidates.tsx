import { AlertTriangle, BadgeCheck, FileText, ShieldQuestion, Users2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CandidateApplicationForm from "../components/forms/CandidateApplicationForm";
import FaqList, { faqSchema } from "../components/Faq";
import { CTAButton } from "../components/Buttons";
import { candidateFaqs } from "../data/faqs";
import { useSeo } from "../hooks/useSeo";

export default function Candidates() {
  useSeo({
    title: "Apply for Overseas Jobs | Candidates — Sanska International",
    description:
      "Skilled and semi-skilled workers in India: submit your trade, experience and CV for consideration against verified overseas employer requirements. Transparent process, documented stages, safety guidance included.",
    path: "/candidates",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "For Candidates", path: "/candidates" },
    ],
    schema: [faqSchema(candidateFaqs)],
  });

  return (
    <>
      <PageHero
        slot="candidates_flight"
        eyebrow="For Candidates · Apply"
        crumbs={[{ name: "Home", path: "/" }, { name: "For Candidates", path: "/candidates" }]}
        title="Take your skills beyond borders"
        lede="Sanska connects suitable candidates with verified overseas employment requirements. Selection is competitive and employer-controlled — the process below shows exactly how profiles move."
      >
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-slate-300">
          <span className="flex items-center gap-2"><FileText className="h-4 w-4 text-brand-400" aria-hidden="true" /> One profile, many matching requirements</span>
          <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-brand-400" aria-hidden="true" /> Trade tests before interviews</span>
          <span className="flex items-center gap-2"><ShieldQuestion className="h-4 w-4 text-brand-400" aria-hidden="true" /> Verify every request you receive</span>
        </div>
      </PageHero>

      <section className="border-b border-line bg-ice/50 py-10" aria-label="Honest expectations">
        <div className="container-x grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-brand-400">
            <Users2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-[14.5px] leading-relaxed text-ink">
            <strong className="font-bold">No guarantees, and we won't pretend otherwise.</strong> Applying joins you to a talent pool assessed against live and
            upcoming employer requirements. Suitable candidates are contacted for screening and trade testing.
          </p>
          <CTAButton to="/recruitment-process" variant="outline" className="shrink-0">How selection works</CTAButton>
        </div>
      </section>

      {/* ── Form + side ───────────────────────────────────────────── */}
      <section className="section-y bg-white" aria-labelledby="cform-h">
        <div className="container-x grid items-start gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <SectionHeading as="h2" eyebrow="Application form" title={<span id="cform-h">Submit your profile</span>} />
            <p className="reveal mt-3 max-w-2xl text-[13.5px] leading-relaxed text-muted">
              Fill this honestly — verification checks documents and references at screening. A clear CV and correct contact numbers are what move a profile forward.
            </p>
            <div className="reveal mt-7">
              <CandidateApplicationForm />
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-[92px]" aria-label="Candidate guidance">
            <div className="rounded-lg border border-[#e8cf8f] bg-[#fdf6e3] p-5">
              <p className="flex items-center gap-2 font-display text-[14px] font-bold text-[#6d4e05]">
                <AlertTriangle className="h-4 w-4" aria-hidden="true" /> Before you share anything sensitive
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#6d4e05]/90">
                Candidates should verify official communication before sharing sensitive documents or making any payment. Confirm any request through
                the contact channels published on this website.
              </p>
            </div>
            <div className="card-x p-5">
              <h3 className="font-display text-[14.5px] font-bold text-navy">Fees policy</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                Where costs apply, they follow the destination country's rules and are communicated in writing at the point they arise. Sanska's documented
                fee policy: <span className="ph" title="Awaiting verified company policy text">[RECRUITMENT FEE POLICY]</span> — published here once supplied.
              </p>
            </div>
            <div className="card-x p-5">
              <h3 className="font-display text-[14.5px] font-bold text-navy">What strengthens your profile</h3>
              <ul className="mt-3 space-y-2 text-[13px] text-muted">
                {[
                  "Valid passport with 6+ months validity",
                  "ITI / trade certificates or professional registrations",
                  "Experience letters on employer letterhead",
                  "Trade-specific certificates (welding codes, medical licences)",
                  "Clear photos of completed work where relevant",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" aria-hidden="true" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y bg-paper" aria-labelledby="cfaqs-h">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading as="h2" eyebrow="Candidate FAQ" title={<span id="cfaqs-h">Straight answers</span>} />
          <FaqList items={candidateFaqs} />
        </div>
      </section>

      <section className="bg-navy py-14 text-center" aria-label="Closing note to candidates">
        <div className="container-x">
          <p className="reveal mx-auto max-w-2xl font-display text-[clamp(1.3rem,2.6vw,1.7rem)] font-extrabold leading-snug text-white">
            Legitimate overseas recruitment is documented, trade-tested and employer-selected. That is the process you enter by applying here.
          </p>
          <div className="reveal mt-7 flex justify-center gap-3">
            <CTAButton to="/job-categories" variant="ghost-light" withArrow={false}>See roles we recruit for</CTAButton>
            <CTAButton to="/contact">Contact the desk</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
