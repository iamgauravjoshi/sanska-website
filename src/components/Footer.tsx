import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Shield } from "lucide-react";
import Logo from "./Logo";
import { footerNav } from "../data/nav";
import companyConfig from "../data/companyConfig";
import { isPlaceholder, Ph } from "../utils/placeholders";

function FootCol({
	title,
	links,
}: {
	title: string;
	links: Array<{ label: string; to: string }>;
}) {
	return (
		<nav aria-label={`Footer — ${title}`}>
			<h3 className="mb-4 font-display text-[13px] font-bold uppercase tracking-[0.14em] text-slate-400">
				{title}
			</h3>
			<ul className="space-y-2.5">
				{links.map((l) => (
					<li key={l.to + l.label}>
						<Link
							to={l.to}
							className="text-[14px] leading-snug text-slate-300 transition-colors duration-200 hover:text-brand-400"
						>
							{l.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

function FooterSocial() {
	return (
		<div className="mt-6 flex items-center gap-2">
			{/* LinkedIn */}
			{isPlaceholder(companyConfig.contact.linkedin) ? null : (
				<a
					href={companyConfig.contact.linkedin}
					target="_blank"
					rel="noreferrer"
					aria-label="Sanska on LinkedIn"
					className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-slate-300 hover:border-brand hover:text-brand-400 hover:-translate-y-1 transition-all duration-300 ease-in-out"
				>
					<svg
						viewBox="0 0 24 24"
						className="h-[18px] w-[18px]"
						fill="currentColor"
						aria-hidden="true"
					>
						<path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.09h4.56V23H.22V8.09zM8.34 8.09h4.37v2.04h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.02V23h-4.55v-6.61c0-1.57-.03-3.6-2.19-3.6-2.2 0-2.53 1.71-2.53 3.49V23H8.34V8.09z" />
					</svg>
				</a>
			)}

			{/* Facebook */}
			{isPlaceholder(companyConfig.contact.facebook) ? null : (
				<a
					href={companyConfig.contact.facebook}
					target="_blank"
					rel="noreferrer"
					aria-label="Sanska on Facebook"
					className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-slate-300 hover:border-brand hover:text-brand-400 hover:-translate-y-1 transition-all duration-300 ease-in-out"
				>
					<svg
						viewBox="0 0 24 24"
						className="h-[18px] w-[18px]"
						fill="currentColor"
						aria-hidden="true"
					>
						<path d="M13.5 21.9v-8.1h3l.5-3.7h-3.5V7.7c0-1.07.3-1.8 1.85-1.8h1.8V2.82c-.88-.12-1.95-.22-3.02-.22-2.84 0-4.78 1.73-4.78 4.9v2.6H6.2v3.7h3.1v8.1h4.2z" />
					</svg>
				</a>
			)}

			{/* Instagram */}
			{isPlaceholder(companyConfig.contact.instagram) ? null : (
				<a
					href={companyConfig.contact.instagram}
					target="_blank"
					rel="noreferrer"
					aria-label="Sanska on Instagram"
					className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-slate-300 hover:border-brand hover:text-brand-400 hover:-translate-y-1 transition-all duration-300 ease-in-out"
				>
					<svg
						viewBox="0 0 24 24"
						className="h-[18px] w-[18px]"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect width="18" height="18" x="3" y="3" rx="5" />
						<circle cx="12" cy="12" r="4" />
						<circle
							cx="17.3"
							cy="6.7"
							r=".8"
							fill="currentColor"
							stroke="none"
						/>
					</svg>
				</a>
			)}
		</div>
	);
}

export default function Footer() {
	const year = new Date().getFullYear();
	const email = companyConfig.contact.email;
	const emailSupport = companyConfig.contact.emailSupport;
	const phone = companyConfig.contact.phone;
	// const linkedin = companyConfig.contact.linkedin;
	// const facebook = companyConfig.contact.facebook;
	// const instagram = companyConfig.contact.instagram;

	return (
		<footer className="bg-navy text-slate-300">
			<div className="container-x grid grid-cols-2 gap-x-6 gap-y-12 py-10 md:py-20 sm:grid-cols-3 lg:grid-cols-6">
				<div className="col-span-2">
					<Logo variant="footer" />
					<p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-slate-400">
						India-based MEA approved Recruiting Agent (RA), connecting global
						employers with verified Indian talent across marine, construction,
						oil & gas, healthcare, hospitality, security and facility management
						since 2016.
					</p>

					<div className="flex gap-4 mt-4 w-fit rounded-xl border border-[rgba(103,189,83,0.4)] bg-[rgba(103,189,83,0.12)] p-3 text-[13px] text-white">
						<Shield />
						<div>
							MEA Approved Recruiting Agent (RA)
							<br />
							Reg. JAIPUR/COMPANY/5652495/2022
							<br />
							Verify at emigrate.gov.in
						</div>
					</div>
				</div>

				<FootCol title="Company" links={footerNav.company} />
				<div className="md:order-1">
					<FootCol title="Quick Links" links={footerNav.quick} />
				</div>
				<div className="col-span-2 md:col-span-1">
					<FootCol title="Services" links={footerNav.services} />
				</div>

				<nav
					aria-label={"Footer — Contact"}
					className="md:-ml-10 order-2 col-span-2 md:order-0 md:col-span-1"
				>
					<h3 className="mb-4 font-display text-[13px] font-bold uppercase tracking-[0.14em] text-slate-400">
						Contact
					</h3>

					<div className="mt-6 space-y-4 text-[13.5px]">
						<p className="flex items-start gap-2.5">
							<MapPin
								className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
								aria-hidden="true"
							/>
							<span className="text-slate-300">
								<Ph value={companyConfig.offices.registered.line1} />
								<span className="block">
									<Ph value={companyConfig.offices.registered.line2} />
								</span>
							</span>
						</p>

						<p className="block">
							<span className="flex items-center gap-2.5">
								<Mail
									className="h-4 w-4 shrink-0 text-brand-400"
									aria-hidden="true"
								/>
								{isPlaceholder(email) ? (
									<Ph value={email} />
								) : (
									<a href={`mailto:${email}`} className="hover:text-white">
										{email}
									</a>
								)}
							</span>
							{/* <br /> */}
							<span className="ml-[26px]">
								{isPlaceholder(emailSupport) ? (
									<Ph value={emailSupport} />
								) : (
									<a
										href={`mailto:${emailSupport}`}
										className="hover:text-white"
									>
										{emailSupport}
									</a>
								)}
							</span>
						</p>

						<p className="flex items-center gap-2.5">
							<Phone
								className="h-4 w-4 shrink-0 text-brand-400"
								aria-hidden="true"
							/>
							{isPlaceholder(phone) ? (
								<Ph value={phone} />
							) : (
								<a
									href={`tel:${phone.replace(/[^\d+]/g, "")}`}
									className="hover:text-white"
								>
									{phone}
								</a>
							)}
						</p>
					</div>
					{/* Social Media */}
					<FooterSocial />
				</nav>
			</div>

			<div className="border-t border-white/10">
				<div className="container-x flex flex-col items-start justify-between gap-4 py-6 text-[12.5px] text-slate-400 md:flex-row md:items-center">
					<p>
						© {year} {companyConfig.legalName} All rights reserved.
					</p>
					<p className="flex flex-wrap items-center gap-x-5 gap-y-2">
						<Link to="/privacy" className="hover:text-white">
							Privacy Policy
						</Link>
						<Link to="/terms" className="hover:text-white">
							Terms of Use
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
}
