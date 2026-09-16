import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Img from "../components/Img";
import Icon from "../components/Icon";
import { CTAButton } from "../components/Buttons";
import { services } from "../data/services";
import { homeProcessSteps } from "../data/process";
import { useSeo } from "../hooks/useSeo";
import { employerFaqs } from "../data/faqs";
import FaqList, { faqSchema } from "../components/Faq";

const SERVICE_IMAGES = [
	"services_engineer",
	"blueprints",
	"heavy_equipment",
	"healthcare_staff",
	"process_planning",
	"candidates_flight",
];

export default function Services() {
	useSeo({
		title: "Overseas Recruitment Services | Sanska International — India",
		description:
			"International manpower recruitment, bulk & project hiring, skilled and semi-skilled trades, professional recruitment, visa & documentation support and mobilization — from India, for overseas employers.",
		path: "/services",
		breadcrumbs: [
			{ name: "Home", path: "/" },
			{ name: "Services", path: "/services" },
		],
		schema: [
			{
				"@context": "https://schema.org",
				"@type": "ItemList",
				name: "Sanska International — Recruitment Services",
				itemListElement: services.map((s, i) => ({
					"@type": "ListItem",
					position: i + 1,
					item: {
						"@type": "Service",
						name: s.title,
						description: s.short,
						provider: {
							"@type": "Organization",
							name: "Sanska International Edificational Services Pvt. Ltd.",
						},
						areaServed: "Worldwide",
						serviceType: "Overseas manpower recruitment",
					},
				})),
			},
			faqSchema(employerFaqs.slice(0, 4)),
		],
	});

	return (
		<>
			<PageHero
				slot="employers_port"
				eyebrow="Our Services"
				crumbs={[
					{ name: "Home", path: "/" },
					{ name: "Services", path: "/services" },
				]}
				title="Complete overseas recruitment & deployment support"
				lede="Six service lines that together cover the whole journey — requirement intake, sourcing, verification, trade testing, documentation, visas and mobilisation — under one accountable team."
			>
				<CTAButton to="/employers">Submit a requirement</CTAButton>
			</PageHero>

			{services.map((s, i) => {
				const flipped = i % 2 === 1;
				const img = SERVICE_IMAGES[i % SERVICE_IMAGES.length];
				return (
					<section
						key={s.id}
						id={s.id}
						className={`scroll-mt-24 border-b border-line py-16 md:py-20 ${i % 2 ? "bg-paper" : "bg-white"}`}
						aria-labelledby={`svc-${s.id}`}
					>
						<div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
							<div className={flipped ? "lg:order-2" : ""}>
								<div className="group relative overflow-hidden rounded-lg">
									<Img
										slot={img}
										className="aspect-[4/3] rounded-lg"
										imgClassName="group-hover:scale-[1.03] duration-[600ms]"
										sizes="(min-width:1024px) 46vw, 92vw"
									/>
									<span className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-navy/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
										<Icon
											name={s.icon}
											className="h-3.5 w-3.5 text-brand-400"
										/>{" "}
										Service 0{i + 1}
									</span>
								</div>
							</div>
							<div className={flipped ? "lg:order-1" : ""}>
								<p className="eyebrow mb-3 flex items-center gap-2">
									<span className="flex h-7 w-7 items-center justify-center rounded-md bg-ice text-brand-600 ring-1 ring-brand/20">
										<Icon name={s.icon} className="h-4 w-4" />
									</span>
									Service 0{i + 1}
								</p>
								<h2
									id={`svc-${s.id}`}
									className="font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-tight text-navy"
								>
									{s.title}
								</h2>
								<p className="mt-4 text-[15px] leading-relaxed text-muted">
									{s.description}
								</p>
								<div className="mt-6 grid gap-5 sm:grid-cols-2">
									<div>
										<p className="text-[11px] font-bold uppercase tracking-[0.13em] text-muted">
											Who it is for
										</p>
										<p className="mt-1.5 text-[13.5px] leading-relaxed text-ink">
											{s.whoFor}
										</p>
									</div>
									<div>
										<p className="text-[11px] font-bold uppercase tracking-[0.13em] text-muted">
											Employer outcome
										</p>
										<p className="mt-1.5 text-[13.5px] leading-relaxed text-ink">
											{s.outcome}
										</p>
									</div>
								</div>
								<ul className="mt-6 space-y-2">
									{s.handles.map((h) => (
										<li
											key={h}
											className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink"
										>
											<span
												className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"
												aria-hidden="true"
											/>
											{h}
										</li>
									))}
								</ul>
								<p className="mt-6 text-[12.5px] font-semibold text-muted">
									Related sectors:{" "}
									<span className="font-medium text-navy">
										{s.sectors.join(" · ")}
									</span>
								</p>
								<div className="mt-7">
									{/* <CTAButton to="/employers" variant="outline">
										Request this service for my project
									</CTAButton> */}
									<CTAButton to="/employers" variant="navy">
										Request this service for my project
									</CTAButton>
								</div>
							</div>
						</div>
					</section>
				);
			})}

			{/* ── End-to-end workflow graphic ───────────────────────────── */}
			<section
				className="relative overflow-hidden bg-navy py-16 md:py-20"
				aria-labelledby="flow-h"
			>
				<div className="container-x">
					<SectionHeading
						light
						eyebrow="How it flows"
						title={
							<span id="flow-h" className="text-white">
								One pipeline, from signed requirement to site joining
							</span>
						}
						lede="Every service line plugs into the same nine visible stages — so the employer always knows which stage each batch of workers is at."
					/>
					<div className="relative mt-12">
						<div
							aria-hidden="true"
							className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-brand via-brand/40 to-leaf lg:block"
						/>
						<ol className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-9 lg:gap-x-2">
							{homeProcessSteps.map((s, i) => (
								<li
									key={s.no}
									className="reveal relative"
									style={{ ["--reveal-delay" as string]: `${i * 55}ms` }}
								>
									<span className="relative z-10 mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-[13px] font-extrabold text-brand-400 ring-2 ring-brand/50">
										{s.no}
									</span>
									<p className="font-display text-[13.5px] font-bold text-white">
										{s.title}
									</p>
									<p className="mt-1 hidden text-[11.5px] leading-relaxed text-slate-400 lg:block">
										{s.desc}
									</p>
								</li>
							))}
						</ol>
					</div>
					<div className="reveal mt-12 flex flex-col items-start justify-between gap-5 rounded-lg border border-white/12 bg-white/[0.04] p-6 sm:flex-row sm:items-center">
						<p className="max-w-xl text-[14px] leading-relaxed text-slate-300">
							Prefer to discuss a requirement with the recruitment desk before
							filling a form? Send the demand letter and we will return a
							sourcing plan with stage-level dates.
						</p>
						<div className="flex gap-3">
							<CTAButton to="/employers" className="shrink-0">
								Submit Requirement
							</CTAButton>
							<CTAButton
								to="/contact"
								variant="ghost-light"
								withArrow={false}
								className="shrink-0"
							>
								Talk to us
							</CTAButton>
						</div>
					</div>
				</div>
			</section>

			<section className="section-y bg-white">
				<div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
					<SectionHeading
						eyebrow="Employer FAQ"
						title="Questions hiring managers ask before the first call"
					/>
					<FaqList items={employerFaqs.slice(0, 4)} />
				</div>
			</section>
		</>
	);
}
