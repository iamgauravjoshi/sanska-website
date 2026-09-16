import { Info } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import RoleDirectory from "../components/RoleDirectory";
import { SplitAudienceCTA } from "../components/AudienceSplits";
import { useSeo } from "../hooks/useSeo";

export default function JobCategories() {
	useSeo({
		title:
			"Sectors & Job Categories | Roles We Recruit For — Sanska International",
		description:
			"Filterable directory of trades and professions Sanska International recruits for overseas employers: construction, oil & gas, marine, healthcare, hospitality, facility management and security roles.",
		path: "/job-categories",
		breadcrumbs: [
			{ name: "Home", path: "/" },
			{ name: "Job Categories", path: "/job-categories" },
		],
	});

	return (
		<>
			<PageHero
				eyebrow="Sectors & Job Categories"
				crumbs={[
					{ name: "Home", path: "/" },
					{ name: "Job Categories", path: "/job-categories" },
				]}
				title="The trades and professions we recruit for"
				lede="A capability directory, not a vacancy board. Filter by industry, skill level or search a trade to see how specific our screening gets."
			>
				<div className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3 text-left text-[13px] leading-relaxed text-slate-200 w-fit">
					<Info
						className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
						aria-hidden="true"
					/>
					<p>
						<strong className="font-bold text-white">
							“Roles we recruit for” ≠ “current vacancies”.
						</strong>{" "}
						An employer-verified opening would be labelled explicitly with a job
						order. None are listed today.
					</p>
				</div>
			</PageHero>

			<section className="section-y bg-white" aria-labelledby="dir-h">
				<div className="container-x">
					<SectionHeading
						as="h2"
						eyebrow="Directory"
						title={<span id="dir-h">Search the capability list</span>}
						className="mb-8"
					/>
					<RoleDirectory />
				</div>
			</section>

			<section
				className="border-t border-line bg-paper py-16"
				aria-labelledby="levels-h"
			>
				<div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
					<SectionHeading
						as="h2"
						eyebrow="Skill framework"
						title={<span id="levels-h">How we classify skill</span>}
						lede="Employer briefs map to these bands; screening depth changes with each one."
					/>
					<div className="grid gap-3 sm:grid-cols-2">
						{[
							[
								"Unskilled / General",
								"Physical readiness, site discipline, trainability. Screening is attendance + conduct led.",
							],
							[
								"Semi-skilled",
								"Partial trade competence (helpers, masons, housekeeping). Practical check on core tasks.",
							],
							[
								"Skilled",
								"Full trade independence (welders, fitters, technicians). Trade test + certificate verification.",
							],
							[
								"Supervisor / Professional",
								"Lead trades, nurses, engineers, chefs. Credential + licence verification, structured panel interviews.",
							],
						].map(([t, d]) => (
							<div key={t} className="reveal card-x p-5">
								<p className="font-display text-[14px] font-bold text-navy">
									{t}
								</p>
								<p className="mt-1.5 text-[13px] leading-relaxed text-muted">
									{d}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<SplitAudienceCTA />
		</>
	);
}
