import { Handshake, ShieldCheck, UserCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ProcessTimeline from "../components/ProcessTimeline";
import { EmployerCTABand } from "../components/AudienceSplits";
import { processSteps } from "../data/process";
import { CTAButton } from "../components/Buttons";
import { useSeo } from "../hooks/useSeo";

const GUARANTEES = [
  {
    icon: UserCheck,
    t: "Candidate verification is systematic",
    d: "Identity, experience certificates, trade credentials and references follow a fixed checklist. Files with unresolved items are not shortlisted.",
  },
  {
    icon: ShieldCheck,
    t: "Employers keep selection authority",
    d: "Sanska builds and screens the pipeline. Interview outcomes, offers and replacements are decided by the employer at every stage.",
  },
  {
    icon: Handshake,
    t: "Candidates get real process information",
    d: "Stages, expected actions and document requirements are published. No stage promises an outcome — only an evaluation.",
  },
];

export default function RecruitmentProcess() {
  useSeo({
    title: "Recruitment & Deployment Process | Sanska International",
    description:
      "The 12-stage overseas recruitment journey — from employer requirement to arrival and deployment — with trade testing, verification, medicals, documentation, visa and mobilisation steps explained.",
    path: "/recruitment-process",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Recruitment Process", path: "/recruitment-process" },
    ],
  });

  return (
    <>
      <PageHero
        slot="process_planning"
        eyebrow="Recruitment Process"
        crumbs={[{ name: "Home", path: "/" }, { name: "Recruitment Process", path: "/recruitment-process" }]}
        title="Structured recruitment from sourcing through deployment"
        lede="Twelve public stages, one shared pipeline. Employers see progress per batch; candidates see exactly what happens next."
      >
        <div className="flex gap-3">
          <CTAButton to="/employers">Start with a requirement</CTAButton>
          <CTAButton to="/candidates" variant="ghost-light" withArrow={false}>Apply as a candidate</CTAButton>
        </div>
      </PageHero>

      <section className="section-y bg-white" aria-labelledby="timeline-h">
        <div className="container-x max-w-[980px]">
          <SectionHeading
            align="center"
            eyebrow="The Journey"
            title={<span id="timeline-h">Twelve stages, end to end</span>}
            lede="Stages marked employer-side are where you act; candidate-side stages are managed by our coordination desk with status visibility to both parties."
          />
          <div className="mt-14">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-16" aria-labelledby="proc-principles">
        <div className="container-x">
          <SectionHeading as="h2" eyebrow="Process integrity" title={<span id="proc-principles">What the process guarantees — and what it does not</span>} />
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {GUARANTEES.map(({ icon: Ico, t, d }, i) => (
              <article key={t} className="reveal card-x p-6" style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-ice text-brand-600 ring-1 ring-brand/20">
                  <Ico className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
                </span>
                <h3 className="font-display text-[15.5px] font-bold text-navy">{t}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{d}</p>
              </article>
            ))}
          </div>
          <p className="reveal mx-auto mt-9 max-w-2xl rounded-lg border border-line bg-white px-5 py-4 text-center text-[13px] leading-relaxed text-muted">
            <strong className="font-semibold text-navy">What it does not guarantee:</strong> specific dates before destination-authority processing is underway,
            or selection outcomes before trade tests and interviews. Anyone promising either is describing a different — and riskier — business.
          </p>
        </div>
      </section>

      <EmployerCTABand />
    </>
  );
}
