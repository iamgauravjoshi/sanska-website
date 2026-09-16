import { Compass, Eye, Landmark, ShieldCheck, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Img from "../components/Img";
import { EmployerCTABand } from "../components/AudienceSplits";
import { Ph } from "../utils/placeholders";
import companyConfig from "../data/companyConfig";
import { trustPoints } from "../data/stats";
import Icon from "../components/Icon";
import { CTAButton } from "../components/Buttons";
import { useSeo } from "../hooks/useSeo";

const VALUES = [
	{
		t: "Say what we can do — and when",
		d: "Timelines and trade availability are stated with constraints visible, before commitments are made.",
	},
	{
		t: "Verify before we present",
		d: "No profile reaches an employer without completed checks. The file is the product.",
	},
	{
		t: "Employer owns selection",
		d: "Screening and testing narrow the field; interviews and final choice stay with the hiring organisation.",
	},
	{
		t: "Document everything",
		d: "Requirement intake, shortlist decisions, mobilisation status — an audit trail the employer can hold us to.",
	},
];

export default function About() {
	useSeo({
		title:
			"About Us | Sanska International — Overseas Recruitment Company in India",
		description:
			"Sanska International Edificational Services Pvt. Ltd. is an India-based overseas manpower recruitment company serving international employers across construction, oil & gas, marine, healthcare, hospitality, security and facility management.",
		path: "/about",
		breadcrumbs: [{ name: "About", path: "/about" }],
	});

	return (
		<>
			<PageHero
				eyebrow="About the company"
				crumbs={[
					{ name: "Home", path: "/" },
					{ name: "About", path: "/about" },
				]}
				title={
					<>
						Connecting Indian capability with
						<br className="hidden sm:block" /> global opportunity
					</>
				}
				lede="Who we are, how we operate, and the standards an employer can hold us to — without inflated claims."
			>
				<CTAButton to="/employers" className="mt-2">
					Request Manpower
				</CTAButton>
			</PageHero>

			{/* ── Company overview — editorial two-column ─────────────── */}
			<section className="section-y bg-white" aria-labelledby="overview-h">
				<div className="container-x grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
					<div>
						<SectionHeading
							as="h2"
							eyebrow="Company Overview"
							title={
								<span id="overview-h">
									A workforce company organised around employer programmes
								</span>
							}
						/>
						<div className="reveal mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
							<p>
								<strong className="font-semibold text-ink">
									{companyConfig.legalName}
								</strong>{" "}
								is an overseas manpower recruitment and workforce deployment
								company based in India. We serve international employers —
								contractors, industrial operators, hospitality groups,
								healthcare organisations, marine and facility-management
								companies — that need reliable crews at predictable cost and on
								defined dates.
							</p>
							<p>
								Our operating model is deliberately narrow: recruit what
								employers request, verify everything we present, and coordinate
								the documentary and logistical chain that moves a worker from an
								Indian recruitment centre to an overseas site gate.
							</p>
						</div>
						<dl className="reveal mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
							{[
								["Legal entity", companyConfig.legalName],
								["Registered in", "India"],
								["Year established", companyConfig.establishedYear],
								["CIN / Registration", companyConfig.companyRegistration],
							].map(([k, v]) => (
								<div key={k} className="bg-white px-5 py-4">
									<dt className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
										{k}
									</dt>
									<dd className="mt-1 min-w-0 text-[14px] font-semibold text-navy">
										<Ph value={v} />
									</dd>
								</div>
							))}
						</dl>
					</div>
					<div className="reveal relative">
						<Img
							slot="about_workforce"
							className="aspect-[4/3.4] rounded-lg"
							sizes="(min-width:1024px) 46vw, 92vw"
						/>
						<Img
							slot="global_dubai"
							className="absolute -bottom-10 -left-4 hidden aspect-square w-[42%] rounded-lg border-4 border-white shadow-lift md:block"
							sizes="20vw"
						/>
					</div>
				</div>
			</section>

			{/* ── Story / history strip ─────────────────────────────────── */}
			<section
				className="border-y border-line bg-paper py-14"
				aria-labelledby="story-h"
			>
				<div className="container-x">
					<div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
						<SectionHeading
							as="h2"
							eyebrow="Company Story"
							title={<span id="story-h">How Sanska was built</span>}
						/>
						<div className="reveal card-x p-6 md:p-8">
							<p className="text-[15px] leading-relaxed text-muted">
								The narrative content of this section — founding story,
								milestones, leadership and growth record — is intentionally held
								from publication until the company supplies verified material.
								Placeholder structure below shows exactly what will be
								published:
							</p>
							<ul className="mt-6 space-y-4">
								{[
									[
										"Founded",
										`${companyConfig.establishedYear} by ${companyConfig.meaLicense.verified ? "Pratibha Chauhan" : "[Pratibha Chauhan]"}`,
									],
									["First deployment corridor", "United Arab Emirates in 2016"],
									["Sectors added over time", "10+"],
									[
										"Current footprint",
										"500+ workers deployed across 8+ countries",
									],
								].map(([k, v]) => (
									<li
										key={k}
										className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line/70 pb-3 text-[14px] last:border-0 last:pb-0"
									>
										<span className="font-display font-bold text-navy">
											{k}
										</span>
										<span className="text-muted">
											<Ph value={String(v)} />
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* ── Mission / Vision / Values ─────────────────────────────── */}
			<section
				className="section-y bg-white"
				aria-labelledby="mvv-h"
				id="values"
			>
				<div className="container-x">
					<SectionHeading
						as="h2"
						eyebrow="Operating principles"
						title={<span id="mvv-h">Mission, vision and values</span>}
					/>
					<div className="mt-10 grid gap-5 md:grid-cols-3">
						<article className="reveal card-x relative overflow-hidden p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift">
							<span
								aria-hidden="true"
								className="absolute inset-x-0 top-0 h-1 bg-brand"
							/>
							<Eye
								className="h-7 w-7 text-brand-600"
								aria-hidden="true"
								strokeWidth={1.6}
							/>
							<h3 className="mt-5 font-display text-[18px] font-bold text-navy">
								Vision
							</h3>
							<p className="mt-3 text-[14px] leading-relaxed text-muted">
								To be recognised by employers for the quality of our deployment
								discipline — crews that arrive as planned, verified, and ready
								to work.
							</p>
						</article>
						<article
							className="reveal card-x relative overflow-hidden p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift"
							style={{ ["--reveal-delay" as string]: "80ms" }}
						>
							<span
								aria-hidden="true"
								className="absolute inset-x-0 top-0 h-1 bg-navy"
							/>
							<Compass
								className="h-7 w-7 text-navy"
								aria-hidden="true"
								strokeWidth={1.6}
							/>
							<h3 className="mt-5 font-display text-[18px] font-bold text-navy">
								Mission
							</h3>
							<p className="mt-3 text-[14px] leading-relaxed text-muted">
								Give international employers a dependable, compliant route to
								Indian workforce capacity — and give suitable Indian candidates
								a transparent, documented path to legitimate overseas
								employment.
							</p>
						</article>
						<article
							className="reveal card-x relative overflow-hidden p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift"
							style={{ ["--reveal-delay" as string]: "160ms" }}
						>
							<span
								aria-hidden="true"
								className="absolute inset-x-0 top-0 h-1 bg-leaf"
							/>
							<Sparkles
								className="h-7 w-7 text-leaf-600"
								aria-hidden="true"
								strokeWidth={1.6}
							/>
							<h3 className="mt-5 font-display text-[18px] font-bold text-navy">
								Standard we hold ourselves to
							</h3>
							<p className="mt-3 text-[14px] leading-relaxed text-muted">
								Every number, certificate and claim is sourced from company's
								official records. That is the same audit posture we bring to
								recruitment files.
							</p>
						</article>
					</div>
					<div className="mt-10 grid gap-4 rounded-lg border border-line bg-ice/50 p-6 sm:grid-cols-2 lg:grid-cols-4">
						{VALUES.map((v, i) => (
							<div
								key={v.t}
								className="reveal"
								style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
							>
								<p className="font-display text-[14.5px] font-bold text-navy">
									{v.t}
								</p>
								<p className="mt-1.5 text-[13px] leading-relaxed text-muted">
									{v.d}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Leadership (placeholder discipline) ───────────────────── */}
			<section
				className="border-y border-line bg-paper py-16"
				aria-labelledby="lead-h"
			>
				<div className="container-x grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
					<div>
						<SectionHeading
							as="h2"
							eyebrow="Leadership & Governance"
							title={<span id="lead-h">The people behind the operation</span>}
						/>
						<div className="reveal card-x mt-8 p-6 md:p-7">
							<div className="flex items-start gap-4">
								<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-dashed border-[#c4d3da] bg-white text-[#93a4ad]">
									<Landmark className="h-6 w-6" aria-hidden="true" />
								</span>
								<div>
									<h3 className="font-display text-[16px] font-bold text-navy">
										{companyConfig.meaLicense.verified
											? "Pratibha Chauhan"
											: "Pratibha Chauhan"}
									</h3>
									<p className="text-[12.5px] font-semibold text-brand-600">
										Director — {companyConfig.shortName}
									</p>
									<p className="mt-3 text-[13.5px] leading-relaxed text-muted">
										Executive biographies, photographs and signing authorities
										will be published here from official records once supplied.
										No leadership content is generated speculatively.
									</p>
								</div>
							</div>
						</div>
					</div>
					<ul className="grid gap-3">
						{trustPoints.map(({ icon, title, text }) => (
							<li
								key={title}
								className="reveal card-x flex items-start gap-4 p-5"
							>
								<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-mint text-leaf-700">
									<Icon name={icon} className="h-5 w-5" />
								</span>
								<div>
									<p className="font-display text-[14.5px] font-bold text-navy">
										{title}
									</p>
									<p className="mt-1 text-[13px] leading-relaxed text-muted">
										{text}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* ── MEA / authorisation block ─────────────────────────────── */}
			<section className="section-y bg-white" aria-labelledby="mea-h">
				<div className="container-x">
					<div className="reveal relative overflow-hidden rounded-xl bg-navy p-8 md:p-12">
						<div
							aria-hidden="true"
							className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/10 blur-2xl"
						/>
						<div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
							<div>
								<p className="eyebrow eyebrow-light mb-3">
									Government / MEA authorisation
								</p>
								<h2
									id="mea-h"
									className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold text-white"
								>
									Authorisation particulars, published only when on file
								</h2>
								<p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-slate-300">
									Recruiting-agent authorisation under India's Ministry of
									External Affairs (Emigration Act framework) is material to any
									overseas employer's due diligence. {companyConfig.shortName}{" "}
									will publish the licence number, validity and copy on the
									compliance ledger the day the original is supplied and
									verified — nothing sooner.
								</p>
							</div>
							<ul className="space-y-2.5 text-[13.5px]">
								{[
									["Recruiting Agent licence", companyConfig.meaLicense.number],
									["Validity", companyConfig.meaLicense.validity],
									[
										"Company registration (CIN)",
										companyConfig.companyRegistration,
									],
								].map(([k, v]) => (
									<li
										key={k}
										className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 rounded-md border border-white/12 bg-white/[0.05] px-4 py-3 text-slate-200"
									>
										<span className="font-semibold text-white">{k}</span>
										<Ph
											value={v}
											className="!border-white/25 !bg-white/10 !text-brand-400"
											note="Awaiting verified document"
										/>
									</li>
								))}
								<li className="pt-1">
									<a
										href="/licenses"
										className="link-arrow !text-brand-400 text-[13px]"
									>
										<ShieldCheck className="h-4 w-4" aria-hidden="true" /> Full
										compliance ledger
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<EmployerCTABand />
		</>
	);
}
