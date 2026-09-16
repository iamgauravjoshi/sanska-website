import {
	Briefcase,
	Building2,
	Clock,
	Mail,
	Phone,
	GraduationCap,
} from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/forms/ContactForm";
import { ContactLink, Ph } from "../utils/placeholders";
import companyConfig from "../data/companyConfig";
import { CTAButton } from "../components/Buttons";
import { useSeo } from "../hooks/useSeo";

function GoogleLocationMap() {
	return (
		<>
			{/* Map policy — no fake embeds */}
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d79436.4974061912!2d75.67152033661402!3d26.879620277462642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db549425b1a6b%3A0x58fbb30d6dee5e68!2sSanska%20International%20Edificational%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1789522324860!5m2!1sen!2sin"
				width="600"
				height="400"
				style={{
					border: "1px solid #dfe7ea",
					borderRadius: 12,
					width: "100%",
					order: -1,
					// maxWidth: 600,
					maxHeight: 400,
				}}
				allowFullScreen={true}
				loading="lazy"
				referrerPolicy="strict-origin-when-cross-origin"
			/>
		</>
	);
}

export default function Contact() {
	useSeo({
		title: "Contact Sanska International | Overseas Recruitment Desk, India",
		description:
			"Talk to Sanska International about manpower requirements, candidate applications or partnerships. Registered office, recruitment desk contacts, WhatsApp and email — with a structured enquiry form.",
		path: "/contact",
		breadcrumbs: [
			{ name: "Home", path: "/" },
			{ name: "Contact", path: "/contact" },
		],
		schema: [
			{
				"@context": "https://schema.org",
				"@type": "ContactPage",
				mainEntity: {
					"@type": "Organization",
					name: companyConfig.legalName,
					url: companyConfig.siteOrigin,
				},
			},
		],
	});

	return (
		<>
			<PageHero
				slot="services_engineer"
				eyebrow="Contact"
				crumbs={[
					{ name: "Home", path: "/" },
					{ name: "Contact", path: "/contact" },
				]}
				title="Let's discuss your workforce requirement"
				lede="Route your enquiry to the right desk in one step — employer requirements, candidate applications and partnerships share one inbox, split on intake."
			/>

			<section className="section-y bg-white" aria-labelledby="contact-h">
				<div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_1.35fr]">
					{/* ── Info column ─────────────────────────────────────── */}
					<div>
						<SectionHeading
							as="h2"
							eyebrow="Reach us"
							title={<span id="contact-h">Office & Contact Details</span>}
						/>
						<div className="mt-8 space-y-4">
							{[
								companyConfig.offices.registered,
								// companyConfig.offices.recruitment,
							].map((o, i) => (
								<div
									key={o.label}
									className="reveal card-x p-5"
									style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
								>
									<p className="flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.13em] text-brand-600">
										<Building2 className="h-4 w-4" aria-hidden="true" />{" "}
										{o.label}
									</p>
									<p className="mt-3 text-[14px] leading-relaxed text-ink">
										<Ph value={o.line1} />
										<br />
										<Ph value={`${o.line2 + ", " + o.country}`} />
									</p>
								</div>
							))}

							<div className="reveal card-x divide-y divide-line">
								<p className="flex items-center justify-between gap-4 px-5 py-4 text-[14px]">
									<span className="flex items-center gap-2.5 font-semibold text-muted">
										<Phone
											className="h-4 w-4 text-brand-600"
											aria-hidden="true"
										/>{" "}
										Phone / WhatsApp
									</span>
									<ContactLink
										kind="phone"
										className="font-bold text-navy hover:text-brand-600"
									>
										<Ph value={companyConfig.contact.phone} />
									</ContactLink>
								</p>
								<p className="flex items-center justify-between gap-4 px-5 py-4 text-[14px]">
									<span className="flex items-center gap-2.5 font-semibold text-muted">
										<Mail
											className="h-4 w-4 text-brand-600"
											aria-hidden="true"
										/>{" "}
										Email
									</span>
									<ContactLink
										kind="email"
										className="font-bold text-navy hover:text-brand-600"
									>
										<Ph value={companyConfig.contact.email} />
									</ContactLink>
								</p>
								<p className="flex items-center justify-between gap-4 px-5 py-4 text-[14px]">
									<span className="flex items-center gap-2.5 font-semibold text-muted">
										<Clock
											className="h-4 w-4 text-brand-600"
											aria-hidden="true"
										/>{" "}
										Office hours
									</span>
									<span className="font-semibold text-navy">
										<Ph value={companyConfig.contact.hours} />
									</span>
								</p>
							</div>

							<div className="hidden lg:block">
								<GoogleLocationMap />
							</div>
						</div>
					</div>

					{/* ── Form column ─────────────────────────────────────── */}
					<div>
						<div
							className="reveal grid gap-3 sm:grid-cols-2"
							aria-label="Choose the right desk"
						>
							<a
								href="/employers"
								className="card-x group flex items-center gap-4 p-5 transition-all duration-300 border hover:border-brand-400 hover:-translate-y-0.5 hover:shadow-lift"
							>
								<span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand text-white">
									<Briefcase className="h-5 w-5" aria-hidden="true" />
								</span>
								<span>
									<strong className="block font-display text-[14.5px] font-bold text-navy">
										For Employers
									</strong>
									<span className="text-[12.5px] text-muted group-hover:text-brand-700">
										Request Manpower →
									</span>
								</span>
							</a>
							<a
								href="/candidates"
								className="card-x group flex items-center gap-4 p-5 transition-all duration-300 border hover:border-brand-400 hover:-translate-y-0.5 hover:shadow-lift"
							>
								<span className="flex h-11 w-11 items-center justify-center rounded-md bg-leaf text-white">
									<GraduationCap className="h-5 w-5" aria-hidden="true" />
								</span>
								<span>
									<strong className="block font-display text-[14.5px] font-bold text-navy">
										For Candidates
									</strong>
									<span className="text-[12.5px] text-muted group-hover:text-leaf-700">
										Apply Now →
									</span>
								</span>
							</a>
						</div>
						<div className="reveal mt-5">
							<h3 className="mb-4 font-display text-[17px] font-bold text-navy">
								General enquiry form
							</h3>
							<ContactForm />
							<div className="block lg:hidden mt-10">
								<GoogleLocationMap />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="border-t border-line bg-paper py-12">
				<div className="container-x flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">
					<p className="max-w-xl text-[14px] leading-relaxed text-muted">
						<strong className="font-semibold text-navy">
							Time-critical requirement?
						</strong>{" "}
						Call the desk with your trade list and joining dates — voice contact
						moves fastest at project level.
					</p>
					<div className="flex gap-3 flex-col sm:flex-row">
						<CTAButton
							href={`tel:${companyConfig.contact.phone.replace(/[^\d+]/g, "")}`}
							variant="primary"
							withArrow={false}
						>
							<Phone className="h-4 w-4" aria-hidden="true" /> Call office
						</CTAButton>
						<CTAButton to="/employers" variant="green">
							Submit requirement online
						</CTAButton>
					</div>
				</div>
			</section>
		</>
	);
}
