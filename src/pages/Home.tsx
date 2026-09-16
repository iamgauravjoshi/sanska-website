import { Link } from "react-router-dom";
import {
	Eye,
	FileCheck,
	Handshake,
	ShieldCheck,
	Timer,
	Users2,
	Wrench,
	ArrowRight,
	CheckCircle2,
} from "lucide-react";
import VideoHero from "../components/VideoHero";
import StatsStrip from "../components/StatsStrip";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import IndustryTile from "../components/IndustryTile";
import WorldMap from "../components/WorldMap";
import Img from "../components/Img";
import { CTAButton } from "../components/Buttons";
import { services } from "../data/services";
import { industries } from "../data/industries";
import { homeProcessSteps } from "../data/process";
import { roleGroups } from "../data/jobs";
import { markets, regionOrder } from "../data/countries";
import { credentials } from "../data/licenses";
import companyConfig from "../data/companyConfig";
import { Ph, isPlaceholder } from "../utils/placeholders";
import { useSeo } from "../hooks/useSeo";

const WHY = [
	{
		icon: ShieldCheck,
		t: "Compliant recruitment framework",
		d: "Processes structured around India's emigration and recruiting-agent rules — licence particulars published only once verified.",
	},
	{
		icon: FileCheck,
		t: "Verified candidate files",
		d: "Identity, experience, certificates and references cross-checked before a profile reaches the employer.",
	},
	{
		icon: Wrench,
		t: "Trade testing on real work",
		d: "Practical evaluations — weld tests, wiring drills, kitchen tasks — so skill is demonstrated, not claimed.",
	},
	{
		icon: Users2,
		t: "Experienced recruitment desk",
		d: "Dedicated team per requirement: sourcing, shortlisting and interview coordination under one accountable lead.",
	},
	{
		icon: Timer,
		t: "Fast, wave-based mobilization",
		d: "Batches grouped by documentation status and flight windows, sequenced to your programme.",
	},
	{
		icon: Eye,
		t: "Transparent recruitment process",
		d: "The 12-stage workflow is published in full — including who holds selection authority at each stage.",
	},
	{
		icon: Handshake,
		t: "Employer-side control, always",
		d: "You define scope, you run interviews, you select. We build and manage the pipeline to your standard.",
	},
];

export default function Home() {
	useSeo({
		title: "Sanska International | Overseas Manpower Recruitment from India",
		description:
			"Sanska International Edificational Services Pvt. Ltd. sources, screens and deploys skilled, semi-skilled and professional Indian manpower for overseas employers across the GCC, Europe and international markets.",
		path: "/",
		breadcrumbs: [{ name: "Home", path: "/" }],
		schema: [
			{
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: companyConfig.legalName,
				url: companyConfig.siteOrigin,
			},
		],
	});

	return (
		<>
			<VideoHero />
			<StatsStrip />

			{/* ── Who we are ─────────────────────────────────────────────── */}
			<section className="section-y bg-white" aria-labelledby="about-h">
				<div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
					<div className="reveal relative order-2 lg:order-1">
						<Img
							slot="about_workforce"
							className="aspect-[4/5] rounded-lg md:aspect-[5/5.2]"
							imgClassName="group-hover:scale-[1.02]"
							eager
						/>
						<figure
							className="card-x absolute -bottom-7 -right-3 hidden max-w-[230px] p-4 sm:block lg:-right-8 bg-leaf-50"
							aria-hidden="false"
						>
							<p className="font-display text-[26px] font-extrabold leading-none text-leaf-700">
								10+
							</p>
							<p className="mt-1 text-[12px] font-semibold leading-snug text-leaf-700">
								industry verticals with dedicated trade-screening standards
							</p>
						</figure>
					</div>
					<div className="order-1 lg:order-2">
						<SectionHeading
							as="h2"
							eyebrow="About Sanska International"
							id="about-h"
							title={
								<>
									Your workforce partner for{" "}
									<span className="gradient">international recruitment</span>
									{/* India's trusted gateway for global workforce mobilization */}
								</>
							}
							lede="Sanska International Edificational Services Pvt. Ltd. is an India-based overseas manpower recruitment and workforce deployment company. We connect international employers with skilled, semi-skilled and professional Indian talent — managing sourcing, verification, documentation and mobilisation as one accountable pipeline."
						/>
						<ul className="mt-8 grid gap-4 sm:grid-cols-2">
							{[
								[
									"International workforce sourcing",
									"Active search across trade networks, ITI linkages and referral channels matched to your exact scope.",
								],
								[
									"Screening & trade testing",
									"Documents, references and practical skill checks completed before shortlisting.",
								],
								[
									"Documentation & visa coordination",
									"Medicals, attestations and emigration requirements tracked worker-by-worker.",
								],
								[
									"Mobilization & deployment",
									"Flight batches, arrival handovers and joining confirmation to your site.",
								],
							].map(([t, d], i) => (
								<li
									key={t}
									className="reveal flex gap-3"
									style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
								>
									<CheckCircle2
										className="mt-0.5 h-5 w-5 shrink-0 text-leaf"
										aria-hidden="true"
									/>
									<div>
										<p className="font-display text-[14.5px] font-bold text-navy">
											{t}
										</p>
										<p className="mt-1 text-[13px] leading-relaxed text-muted">
											{d}
										</p>
									</div>
								</li>
							))}
						</ul>
						<div className="reveal mt-9 flex flex-wrap items-center gap-4">
							<CTAButton to="/about" variant="navy">
								About Sanska
							</CTAButton>
							<p className="text-[12.5px] text-muted">
								Established{" "}
								<Ph
									value={companyConfig.establishedYear}
									note="Awaiting company records"
								/>{" "}
								· Registered in India
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ── Services ──────────────────────────────────────────────── */}
			<section className="section-y bg-paper" aria-labelledby="services-h">
				<div className="container-x">
					<SectionHeading
						eyebrow="Our Services"
						id="services-h"
						title={
							<>
								End-to-end{" "}
								<span className="gradient">manpower recruitment solutions</span>
							</>
						}
						lede="Six service lines covering the full journey — from a signed requirement to workers reporting on your site."
						cta={{ label: "All services in detail", to: "/services" }}
					/>
					<div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
						{services.map((s, i) => (
							<ServiceCard key={s.id} service={s} index={i} />
						))}
					</div>
				</div>
			</section>

			{/* ── Industries ────────────────────────────────────────────── */}
			<section className="section-y bg-white" aria-labelledby="ind-h">
				<div className="container-x">
					<SectionHeading
						eyebrow="Industries"
						id="ind-h"
						title={
							<>
								Workforce solutions{" "}
								<span className="gradient">across key industries</span>
							</>
						}
						lede="Each sector runs on its own screening standards, certification checks and mobilisation patterns. Hover a tile — or open the sector page — for typical roles."
						cta={{ label: "Industries overview", to: "/industries" }}
					/>
					<div className="mt-10 grid auto-rows-[230px] gap-4 md:grid-cols-4 md:auto-rows-[210px]">
						{industries.map((ind, i) => (
							<IndustryTile
								key={ind.slug}
								industry={ind}
								size={i === 0 ? "lg" : "md"}
								index={i}
							/>
						))}
					</div>
				</div>
			</section>

			{/* ── Why Sanska ─────────────────────────────────────────────── */}
			<section
				className="relative overflow-hidden bg-navy py-20 md:py-28"
				aria-labelledby="why-h"
			>
				<div
					aria-hidden="true"
					className="absolute inset-0 opacity-[0.06]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
						backgroundSize: "64px 64px",
					}}
				/>
				<div className="container-x relative">
					<SectionHeading
						light
						eyebrow="Why Sanska"
						id="why-h"
						title={
							<>
								Built for reliable international workforce deployment.
								{/* Built for reliable{" "}
								<span>international workforce deployment</span> */}
							</>
						}
						lede="Seven operating principles that overseas employers can audit at every stage of the engagement."
					/>
					<ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
						{WHY.map(({ icon: Ico, t, d }, i) => (
							<li
								key={t}
								className="reveal"
								style={{ ["--reveal-delay" as string]: `${(i % 4) * 70}ms` }}
							>
								<span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/8 text-brand-400 ring-1 ring-white/10">
									<Ico
										className="h-5 w-5"
										aria-hidden="true"
										strokeWidth={1.8}
									/>
								</span>
								<h3 className="font-display text-[16px] font-bold text-white">
									{t}
								</h3>
								<p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">
									{d}
								</p>
							</li>
						))}
						<li className="reveal sm:col-span-2 lg:col-span-1">
							<a
								href="/licenses"
								className="flex h-full flex-col justify-between rounded-lg border border-dashed border-white/20 bg-white/[0.03] p-5 transition-colors hover:border-brand/60"
							>
								<p className="text-[13px] leading-relaxed text-slate-300">
									<strong className="block font-display text-[15px] text-white">
										Verify, don't trust.
									</strong>
									Licences & registrations with their numbers and documents
									appear on our compliance page — once originals are on file.
								</p>
								<span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand-400">
									Open compliance ledger{" "}
									<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
								</span>
							</a>
						</li>
					</ul>
				</div>
			</section>

			{/* ── Recruitment process ────────────────────────────────────── */}
			<section className="section-y bg-ice/60" aria-labelledby="proc-h">
				<div className="container-x">
					<SectionHeading
						eyebrow="Recruitment Process"
						id="proc-h"
						title={
							<>
								From requirement to{" "}
								<span className="gradient">deployment in 9 steps</span>
							</>
						}
						lede="Nine public-facing stages. Final selection of candidates always rests with the employer — we shortlist, you decide."
						cta={{ label: "Full 12-stage process", to: "/recruitment-process" }}
					/>
					<ol className="scrollbar-slim mt-10 grid auto-cols-[minmax(240px,1fr)] grid-flow-col gap-4 overflow-x-auto pb-3 md:auto-cols-auto md:grid-flow-row md:grid-cols-3 lg:grid-cols-5 md:overflow-visible min-[1680px]:grid-cols-9">
						{homeProcessSteps.map((s, i) => (
							<li
								key={s.no}
								className="reveal card-x relative flex h-full flex-col p-4 transition-transform duration-300 hover:-translate-y-0.5"
								style={{
									["--reveal-delay" as string]: `${Math.min(i, 6) * 55}ms`,
								}}
							>
								<span className="mb-2.5 flex items-center gap-2">
									<span className="font-display text-[22px] font-extrabold text-brand-600/90">
										{s.no}
									</span>
									<span
										className="h-px flex-1 bg-gradient-to-r from-brand/45 to-transparent"
										aria-hidden="true"
									/>
								</span>
								<h3 className="font-display text-[14.5px] font-bold text-navy">
									{s.title}
								</h3>
								<p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
									{s.desc}
								</p>
							</li>
						))}
					</ol>
					<p className="reveal mt-4 text-[12px] text-muted lg:hidden">
						Scroll sideways to see all nine stages →
					</p>
				</div>
			</section>

			{/* ── Global presence ────────────────────────────────────────── */}
			<section className="section-y bg-white" aria-labelledby="global-h">
				<div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
					<div>
						<SectionHeading
							eyebrow="Global Presence"
							id="global-h"
							title={
								<>
									Connecting Indian talent with{" "}
									<span className="gradient">global opportunities</span>
									{/* Indian talent. Global opportunities. */}
								</>
							}
							lede="Documented recruitment corridors from India to the GCC, selected European markets and the Indian Ocean region. These are markets we serve from India — not branch offices."
						/>
						<div className="reveal mt-6 space-y-3">
							{regionOrder.slice(0, 3).map((r) => (
								<div
									key={r}
									className="flex items-center justify-between gap-4 rounded-md border border-line px-4 py-3 transition-colors hover:border-brand/50"
								>
									<p className="font-display text-[14px] font-bold text-navy">
										{r}
									</p>
									<p className="text-right text-[12.5px] text-muted">
										{markets.filter((m) => m.region === r).length} market
										{markets.filter((m) => m.region === r).length === 1
											? ""
											: "s"}
									</p>
								</div>
							))}
						</div>
						<div className="reveal mt-7">
							<CTAButton to="/global-presence" variant="outline">
								Explore global presence
							</CTAButton>
						</div>
					</div>
					<div className="reveal card-x p-5 md:p-6">
						<WorldMap />
					</div>
				</div>
			</section>

			{/* ── Role / job category preview ────────────────────────────── */}
			<section className="section-y bg-paper" aria-labelledby="roles-h">
				<div className="container-x">
					<SectionHeading
						eyebrow="Talent Directory"
						id="roles-h"
						title={
							<>
								Talent across <br />{" "}
								<span className="gradient">trades and professions</span>
							</>
						}
						// lede="The role families below are recruitment capabilities — they are not live vacancy listings. Filter the full directory by sector and skill level."
						cta={{ label: "Open role directory", to: "/job-categories" }}
					/>
					<div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
						{roleGroups.slice(0, 8).map((g, i) => (
							<Link
								to="/job-categories"
								key={g.slug}
								className="reveal card-x group flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
								style={{ ["--reveal-delay" as string]: `${(i % 4) * 60}ms` }}
							>
								<h3 className="font-display text-[15px] font-bold text-navy">
									{g.industry}
								</h3>
								<ul className="mt-3 flex-1 space-y-1 text-[13px] text-muted">
									{g.roles.slice(0, 5).map((r) => (
										<li key={r.title} className="flex items-center gap-2">
											<span
												className="h-1 w-1 rounded-full bg-leaf"
												aria-hidden="true"
											/>{" "}
											{r.title}
										</li>
									))}
									{g.roles.length > 5 && (
										<li className="text-[12px] font-semibold text-brand-600">
											+{g.roles.length - 5} more roles
										</li>
									)}
								</ul>
								<span className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold text-brand-600">
									View directory{" "}
									<ArrowRight
										className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
										aria-hidden="true"
									/>
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* ── Licenses / compliance preview ──────────────────────────── */}
			<section className="section-y bg-white" aria-labelledby="compliance-h">
				<div className="container-x">
					<div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
						<SectionHeading
							eyebrow="Licenses & Compliance"
							id="compliance-h"
							title={
								<>
									Compliance <span className="gradient">you can verify</span>
								</>
							}
							// lede="Authorisations and registrations will be published here with their numbers, issuing authority and documents — only once verified originals are on file. Nothing is claimed in advance."
						/>
						<CTAButton to="/licenses" variant="outline">
							Open compliance ledger
						</CTAButton>
					</div>
					<ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
						{credentials.slice(0, 4).map((c, i) => (
							<li
								key={c.id}
								className="reveal card-x p-5"
								style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
							>
								<div className="flex items-center justify-between gap-3">
									<p className="font-display text-[14px] font-bold leading-snug text-navy">
										{c.name.split("—")[0]}
									</p>
									<span
										className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${c.verified ? "bg-mint text-leaf-700" : "bg-[#fdf6e3] text-[#8a6106] ring-1 ring-[#e8cf8f]"}`}
									>
										{c.verified ? "Verified" : "Pending"}
									</span>
								</div>
								<p className="mt-2 text-[12px] leading-snug text-muted">
									{c.authority}
								</p>
								<p className="mt-3 font-mono text-[12px] text-ink">
									{isPlaceholder(c.number) ? <Ph value={c.number} /> : c.number}
								</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* ── Final CTA ──────────────────────────────────────────────── */}
			<section
				className="grid grid-cols-1 lg:grid-cols-2"
				aria-label="Employer and candidate actions"
			>
				{/* Employer CTA */}
				<div className="relative isolate overflow-hidden px-6 py-16 text-white sm:px-10 md:py-20 lg:px-14 lg:py-[72px]">
					{/* Background image */}
					<img
						src="/images/need-manpower-bg.webp"
						alt="need-reliable-manpower"
						aria-hidden="true"
						loading="lazy"
						className="absolute inset-0 -z-20 h-full w-full object-cover"
					/>

					{/* Dark overlay */}
					<div
						aria-hidden="true"
						className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(11,38,56,.88)_0%,rgba(11,38,56,.72)_60%,rgba(11,38,56,.48)_100%)]"
					/>

					<div className="relative mx-auto max-w-xl lg:mr-0 lg:ml-auto">
						<h3 className="font-display text-[clamp(1.8rem,3vw,2rem)] font-extrabold leading-tight text-white">
							Need Reliable Manpower?
						</h3>

						<p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-slate-300">
							Structured recruitment from sourcing through deployment — around
							your role, volume, timeline and destination.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<CTAButton to="/employers" className="!px-7 !py-3.5">
								Request Manpower
							</CTAButton>

							<CTAButton
								to="/contact"
								variant="ghost-light"
								withArrow={false}
								className="!px-7 !py-3.5"
							>
								Get in touch
							</CTAButton>
						</div>
					</div>
				</div>

				{/* Candidate CTA */}
				<div className="relative isolate overflow-hidden px-6 py-16 text-white sm:px-10 md:py-20 lg:px-14 lg:py-[72px]">
					{/* Background image */}
					<img
						src="/images/need-global-opportunity-bg.webp"
						alt="need-global-opportunity"
						aria-hidden="true"
						loading="lazy"
						className="absolute inset-0 -z-20 h-full w-full object-cover"
					/>

					{/* Green overlay */}
					<div
						aria-hidden="true"
						className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(11,38,56,.84)_0%,rgba(16,70,38,.62)_100%)]"
					/>

					<div className="relative mx-auto max-w-xl lg:ml-0 lg:mr-auto">
						<h3 className="font-display text-[clamp(1.8rem,3vw,2rem)] font-extrabold leading-tight text-white">
							Looking for an Opportunity Abroad?
						</h3>

						<p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-white/80">
							Legitimate international opportunities matched to your skills and
							experience.
						</p>

						<div className="mt-8">
							<CTAButton
								to="/candidates"
								className="!bg-white !px-7 !py-3.5 !text-[#08745b] hover:!bg-slate-100"
							>
								Apply Now
							</CTAButton>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
