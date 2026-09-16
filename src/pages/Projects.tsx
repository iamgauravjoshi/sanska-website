import { Boxes, Camera, Landmark, MapPin } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { EmployerCTABand } from "../components/AudienceSplits";
import { CTAButton } from "../components/Buttons";
import companyConfig from "../data/companyConfig";
import { useSeo } from "../hooks/useSeo";
import { Ph } from "../utils/placeholders";

const TEMPLATE_FIELDS = [
	"[PROJECT NAME]",
	"[CLIENT / CONTRACTOR]",
	"[COUNTRY]",
	"[WORKFORCE DEPLOYED]",
	"[TRADES]",
	"[DURATION]",
];

export default function Projects() {
	useSeo({
		title: "Clients, Projects & Deployment Record | Sanska International",
		description:
			"How Sanska International evidences its deployment record: project categories, geographic coverage and case studies — published strictly from verified, client-approved content.",
		path: "/projects",
		breadcrumbs: [
			{ name: "Home", path: "/" },
			{ name: "Projects", path: "/projects" },
		],
	});

	const live = companyConfig.showPublicDeploymentRecord;

	return (
		<>
			<PageHero
				slot="projects_portnight"
				eyebrow="Projects & Deployment Record"
				crumbs={[
					{ name: "Home", path: "/" },
					{ name: "Projects", path: "/projects" },
				]}
				title="Workforce deployed — evidenced, not asserted"
				lede="Employers evaluate recruiters by records. This page is the register for those records: project categories, coverage and case studies — each one verifiable."
			/>

			<section className="section-y bg-white">
				<div className="container-x">
					<div className="reveal mx-auto max-w-3xl rounded-lg border border-[#e8cf8f] bg-[#fdf6e3] p-6 text-center md:p-8">
						<span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fbeec4] text-[#8a6106]">
							<Camera className="h-6 w-6" aria-hidden="true" />
						</span>
						<h2 className="font-display text-[19px] font-bold text-[#6d4e05]">
							{live
								? "Deployment register"
								: "The register opens with verified content"}
						</h2>
						<p className="mx-auto mt-3 max-w-xl text-[13.5px] leading-relaxed text-[#6d4e05]/90">
							{live
								? "Project records below are compiled from client-approved documentation."
								: "Case studies, client names and deployment figures are published here only after (a) the company supplies verified records and (b) clients approve disclosure. Until then this page shows the structure — so you can see exactly what evidence will follow, and auditors can see what is still missing."}
						</p>
					</div>

					{/* ── Structure preview: case study template ─────────────── */}
					<div className="mt-14">
						<SectionHeading
							as="h2"
							eyebrow="Case study format"
							title="Each deployment record will state:"
						/>
						<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{TEMPLATE_FIELDS.map((f, i) => (
								<div
									key={f}
									className="reveal card-x flex items-center gap-4 border-dashed p-5"
									style={{ ["--reveal-delay" as string]: `${i * 50}ms` }}
								>
									<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-paper text-muted ring-1 ring-line">
										<Ph
											value={f.slice(0, 2) + (i % 2 ? "TYPE]" : "REF]")}
											className="!text-[9px]"
											note="placeholder field"
										/>
									</span>
									<p className="font-mono text-[13px] text-ink">{f}</p>
								</div>
							))}
							<div className="reveal card-x flex flex-col justify-center border-dashed p-5">
								<p className="text-[12.5px] leading-relaxed text-muted">
									Plus supporting evidence: mobilisation dates, wave sizes and
									employer sign-off — under NDA where required.
								</p>
								<CTAButton
									to="/contact"
									variant="outline"
									className="mt-3 !py-2 !text-[12.5px] self-start"
									withArrow={false}
								>
									Request references under NDA
								</CTAButton>
							</div>
						</div>
					</div>

					{/* ── Static capability facts that need no invention ──── */}
					<div className="mt-14 grid gap-5 md:grid-cols-3">
						{[
							{
								icon: Boxes,
								t: "Project categories staffed",
								d: "High-rise & civil contracting · oil, gas & process plants · shipyard & dry-dock works · hospitals & care facilities · hotel & F&B groups · security & FM contracts.",
							},
							{
								icon: MapPin,
								t: "Geographic coverage",
								d: "Recruitment corridors across the GCC, Israel construction arrangements, Mauritius and selected European destinations — mapped in detail on the Global Presence page.",
							},
							{
								icon: Landmark,
								t: "Client industries",
								d: "General contracting, EPC & energy operators, marine services, healthcare providers, hotel groups and facility-management companies.",
							},
						].map(({ icon: Ico, t, d }, i) => (
							<article
								key={t}
								className="reveal card-x p-6"
								style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
							>
								<span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-ice text-brand-600 ring-1 ring-brand/20">
									<Ico
										className="h-5 w-5"
										aria-hidden="true"
										strokeWidth={1.8}
									/>
								</span>
								<h3 className="font-display text-[15.5px] font-bold text-navy">
									{t}
								</h3>
								<p className="mt-2 text-[13.5px] leading-relaxed text-muted">
									{d}
								</p>
							</article>
						))}
					</div>

					{/* ── Client logo strip (empty by policy) ──────────────── */}
					<div className="reveal mt-14 rounded-lg border border-line bg-paper p-6 text-center md:p-10">
						<p className="font-display text-[14px] font-bold uppercase tracking-[0.14em] text-muted">
							Client logo wall
						</p>
						<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
							{Array.from({ length: 5 }).map((_, i) => (
								<span
									key={i}
									className="flex h-14 w-32 items-center justify-center rounded-md border border-dashed border-[#c4d3da] bg-white text-[11px] font-bold text-[#a4b3ba]"
								>
									[CLIENT LOGO]
								</span>
							))}
						</div>
						<p className="mt-6 text-[12.5px] text-muted">
							No logos are shown without written client authorisation. A wall of
							names we cannot prove is not trust — it is theatre.
						</p>
					</div>
				</div>
			</section>

			<EmployerCTABand />
		</>
	);
}
