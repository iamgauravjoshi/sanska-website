import { ExternalLink, Scale, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { LicenseCard } from "../components/Cards";
import { credentials, licensesNotice } from "../data/licenses";
import companyConfig from "../data/companyConfig";
import { CTAButton } from "../components/Buttons";
import { useSeo } from "../hooks/useSeo";

const HOW_TO_VERIFY = [
	"Match the licence number on the certificate against the authority's own register (e.g. MEA e-Migrate / NLEGP portals for recruiting agents).",
	"Confirm the entity name on documents matches the legal name in the footer of this website, character for character.",
	"Check validity dates — an expired authorisation is not an authorisation.",
	"Ask for the original. A verifiable agency has no difficulty producing one.",
];

export default function Licenses() {
	useSeo({
		title:
			"Licenses & Certifications | Compliance Ledger — Sanska International",
		description:
			"Verification-first listing of Sanska International's authorisations and registrations — MEA framework, company registration and statutory records — published only from verified documents.",
		path: "/licenses",
		breadcrumbs: [
			{ name: "Home", path: "/" },
			{ name: "Licenses & Certifications", path: "/licenses" },
		],
	});

	return (
		<>
			<PageHero
				eyebrow="Licenses & Certifications"
				crumbs={[
					{ name: "Home", path: "/" },
					{ name: "Licenses", path: "/licenses" },
				]}
				title="Compliance you can verify"
				// title="Registration, Compliance & Corporate Credentials"
				lede={licensesNotice}
			/>

			<section className="section-y bg-white" aria-labelledby="ledger-h">
				<div className="container-x">
					<SectionHeading
						as="h2"
						eyebrow="The ledger"
						title={<span id="ledger-h">Credential register</span>}
						// lede="Each card tracks one document: what it is, who issues it, its number, dates and the file itself. Status flips from “Pending” to “Verified” only when the original is on file."
					/>
					<div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
						{credentials.map((c) => (
							<LicenseCard key={c.id} cred={c} />
						))}
					</div>

					<div className="reveal mt-8 flex flex-col items-start justify-between gap-5 rounded-lg border border-line bg-ice p-6 md:flex-row md:items-center">
						<p className="flex items-start gap-3 text-[13.5px] leading-relaxed text-ink">
							<ShieldCheck
								className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
								aria-hidden="true"
							/>
							Industry memberships, quality certifications and additional
							statutory registrations appear here in the same format as they are
							supplied — none are listed ahead of evidence.
						</p>
						<CTAButton to="/contact" variant="outline" className="shrink-0">
							Request the current document set
						</CTAButton>
					</div>
				</div>
			</section>

			<section
				className="border-y border-line bg-paper py-16"
				aria-labelledby="verify-h"
			>
				<div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_1.15fr]">
					<SectionHeading
						as="h2"
						eyebrow="Due diligence"
						title={
							<span id="verify-h">
								How to verify any recruiter's licences — including ours
							</span>
						}
					/>
					<ol className="reveal space-y-3">
						{HOW_TO_VERIFY.map((s, i) => (
							<li
								key={i}
								className="card-x flex gap-4 p-5 text-[14px] leading-relaxed text-ink"
							>
								<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-display text-[13px] font-bold text-white">
									{i + 1}
								</span>
								{s}
							</li>
						))}
					</ol>
				</div>
			</section>

			<section className="section-y bg-white">
				<div className="container-x">
					<div className="reveal relative overflow-hidden rounded-xl bg-navy p-8 md:p-10">
						<Scale
							className="absolute -right-6 -top-6 h-40 w-40 text-white/[0.05]"
							aria-hidden="true"
						/>
						<div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
							<div>
								<p className="eyebrow eyebrow-light mb-3">Legal identity</p>
								<h2 className="font-display text-[clamp(1.4rem,2.8vw,1.9rem)] font-extrabold leading-tight text-white">
									{companyConfig.legalName}
								</h2>
								<ul className="mt-6 grid gap-2.5 text-[13.5px] text-slate-300 sm:grid-cols-2">
									<li className="rounded-md border border-white/12 bg-white/[0.04] px-4 py-3">
										<span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
											Company registration
										</span>
										<span className="ph mt-1 !border-white/25 !bg-white/10 !text-brand-400">
											{companyConfig.companyRegistration}
										</span>
									</li>
									<li className="rounded-md border border-white/12 bg-white/[0.04] px-4 py-3">
										<span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
											MEA Recruiting Agent licence
										</span>
										<span className="ph mt-1 !border-white/25 !bg-white/10 !text-brand-400">
											{companyConfig.meaLicense.number}
										</span>
									</li>
								</ul>
							</div>
							<div className="rounded-lg border border-white/12 bg-white/[0.04] p-5 text-[13px] leading-relaxed text-slate-300">
								<p className="flex items-center gap-2 font-display text-[14px] font-bold text-white">
									<ExternalLink
										className="h-4 w-4 text-brand-400"
										aria-hidden="true"
									/>{" "}
									Public registers exist
								</p>
								<p className="mt-2.5">
									India maintains public records for incorporated companies
									(MCA) and overseas recruiting agents (MEA). Cross-checking
									them costs a prospective employer minutes — and immediately
									separates a documentable agency from an untraceable one.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
