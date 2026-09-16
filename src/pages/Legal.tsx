import React from "react";
import PageHero from "../components/PageHero";
import companyConfig from "../data/companyConfig";
import { useSeo } from "../hooks/useSeo";

function Prose({ children }: { children: React.ReactNode }) {
	return <div className="container-x max-w-[860px]">{children}</div>;
}

export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
	const isPrivacy = kind === "privacy";
	useSeo({
		title: isPrivacy
			? "Privacy Policy | Sanska International"
			: "Terms of Use | Sanska International",
		description: isPrivacy
			? "How Sanska International Edificational Services Pvt. Ltd. collects, stores and uses the information submitted through employer and candidate forms."
			: "Terms governing use of the Sanska International website, including the standing of published information.",
		path: isPrivacy ? "/privacy" : "/terms",
		breadcrumbs: [
			{ name: "Home", path: "/" },
			{
				name: isPrivacy ? "Privacy Policy" : "Terms of Use",
				path: isPrivacy ? "/privacy" : "/terms",
			},
		],
	});

	const updated = "2026";

	return (
		<>
			<PageHero
				compact
				eyebrow={isPrivacy ? "Legal" : "Legal"}
				crumbs={[
					{ name: "Home", path: "/" },
					{
						name: isPrivacy ? "Privacy" : "Terms",
						path: isPrivacy ? "/privacy" : "/terms",
					},
				]}
				title={isPrivacy ? "Privacy Policy" : "Terms of Use"}
				lede={
					isPrivacy
						? "Plain terms about what we collect from forms, why, and who sees it."
						: "The standing of everything published on this website."
				}
			/>
			<section className="section-y bg-white">
				<Prose>
					{isPrivacy ? (
						<div className="space-y-8 text-[14.5px] leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-navy [&_h3]:font-display [&_h3]:text-[15px] [&_h3]:font-bold [&_h3]:text-navy [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc">
							<p>
								Last updated: <span className="ph">{updated}</span>
							</p>
							<div>
								<h2>1 · What we collect</h2>
								<ul className="mt-3">
									<li>
										<strong className="text-ink">Employer form:</strong> company
										and contact identity, project details, workforce
										requirement, salary terms, optional demand-letter documents.
									</li>
									<li>
										<strong className="text-ink">Candidate form:</strong>{" "}
										identity and contact details, trade, experience, destination
										preferences, optional CV, passport copy and certificates.
									</li>
									<li>
										<strong className="text-ink">Contact form:</strong> name,
										company, country, contact details and message.
									</li>
								</ul>
							</div>
							<div>
								<h2>2 · Why we collect it</h2>
								<p className="mt-2">
									Solely to evaluate and respond to the enquiry or application
									you submitted, and — for candidates — to assess suitability
									for current and future verified employer requirements. We do
									not sell personal data.
								</p>
							</div>
							<div>
								<h2>3 · Who sees it</h2>
								<p className="mt-2">
									The {companyConfig.shortName} recruitment desk, and — if you
									proceed with a specific application — the prospective overseas
									employer evaluating that role. Sensitive documents (passport
									copies) are restricted to the documentation stage of an active
									application.
								</p>
							</div>
							<div>
								<h2>4 · How it is transmitted today</h2>
								<p className="mt-2">
									This website is currently a static build. Until a submission
									endpoint is configured (see the administrator note in the form
									area), submissions are validated in your browser and not
									transmitted to a server. When live intake is enabled,
									transmission occurs over HTTPS to the configured form
									provider.
								</p>
							</div>
							<div>
								<h2>5 · Retention</h2>
								<p className="mt-2">
									Candidate profiles are retained for matching for{" "}
									<span className="ph">[RETENTION PERIOD]</span> unless deletion
									is requested. Employer records are kept for the duration of
									engagement plus statutory requirements.
								</p>
							</div>
							<div>
								<h2>6 · Your rights</h2>
								<p className="mt-2">
									You may request a copy, correction or deletion of your
									submitted data by emailing{" "}
									<span className="ph">{companyConfig.contact.email}</span> with
									the reference number shown at submission. Under India's
									Digital Personal Data Protection framework you may also
									nominate and escalate as provided by law.
								</p>
							</div>
							<div>
								<h2>7 · Caution for candidates</h2>
								<p className="mt-2">
									Never pay an unverified "registration charge" quoted outside
									official channels. Verify any communication against the
									contact details published on this website.
								</p>
							</div>
						</div>
					) : (
						<div className="space-y-8 text-[14.5px] leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-navy [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc">
							<p>
								Last updated: <span className="ph">{updated}</span>
							</p>
							<div>
								<h2>1 · Nature of this website</h2>
								<p className="mt-2">
									This site presents the services of {companyConfig.legalName}.
									Information marked with a bracketed placeholder (e.g.{" "}
									<span className="ph">[MEA RD LICENCE NUMBER]</span>) is
									pending verification and must not be relied upon as a
									statement of fact.
								</p>
							</div>
							<div>
								<h2>2 · No vacancy guarantees</h2>
								<p className="mt-2">
									The job-category directory lists role families the company
									recruits for. It is not a vacancy list, and submission of a
									candidate application creates no entitlement to interview,
									selection, or employment.
								</p>
							</div>
							<div>
								<h2>3 · Employer responsibility</h2>
								<p className="mt-2">
									Final selection, contract issuance, work permits and
									in-country employment obligations rest with the overseas
									employer. Sanska's responsibility is limited to the agreed
									recruitment, verification, documentation-coordination and
									mobilisation services.
								</p>
							</div>
							<div>
								<h2>4 · Third-party media</h2>
								<p className="mt-2">
									Illustrative photography and video are licensed from
									third-party stock sources (Unsplash License / Pexels License)
									and do not necessarily depict named clients, real deployments
									or company personnel. Media credits are maintained in the site
									repository.
								</p>
							</div>
							<div>
								<h2>5 · Use of content</h2>
								<p className="mt-2">
									Text, layout and design are © {companyConfig.legalName}.
									Reproduction requires written permission, except short
									quotations with attribution.
								</p>
							</div>
							<div>
								<h2>6 · Governing law</h2>
								<p className="mt-2">
									These terms are governed by the laws of India; courts at{" "}
									<span className="ph">[JURISDICTION CITY]</span> have exclusive
									jurisdiction.
								</p>
							</div>
						</div>
					)}
				</Prose>
			</section>
		</>
	);
}
