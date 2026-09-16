import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CTAButton } from "./Buttons";

/** Two-audience split (employers weighted slightly stronger, per strategy). */
export function SplitAudienceCTA() {
	return (
		<section
			className="grid grid-cols-1 lg:grid-cols-2"
			aria-label="Employer and candidate actions"
		>
			{/* Employer CTA */}
			<div className="relative isolate overflow-hidden px-5 py-10 text-white sm:px-8 sm:py-12 xl:px-14 xl:py-16">
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
					<h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-tight text-white">
						Need Reliable Manpower?
					</h3>

					<p className="mt-4 max-w-lg text-[13px] md:text-base leading-relaxed text-slate-300">
						Structured recruitment from sourcing through deployment — around
						your role, volume, timeline and destination.
					</p>

					<div className="mt-8 flex flex-row gap-3 sm:flex-row">
						<CTAButton
							to="/employers"
							className="max-[768px]:px-4 max-[768px]:py-2"
						>
							Request Manpower
						</CTAButton>

						<CTAButton
							to="/contact"
							variant="ghost-light"
							withArrow={false}
							className="max-[768px]:px-4 max-[768px]:py-2"
						>
							Get in touch
						</CTAButton>
					</div>
				</div>
			</div>

			{/* Candidate CTA */}
			<div className="relative isolate overflow-hidden px-5 py-10 text-white sm:px-8 sm:py-12 xl:px-14 xl:py-16">
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
					<h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-tight text-white">
						Looking for an Opportunity Abroad?
					</h3>

					<p className="mt-4 max-w-lg text-[13px] md:text-base leading-relaxed text-white/80">
						Legitimate international opportunities matched to your skills and
						experience.
					</p>

					<div className="mt-8">
						<CTAButton
							to="/candidates"
							className="!bg-white max-[768px]:px-4 max-[768px]:py-2 !text-[#08745b] hover:!bg-slate-100"
						>
							Apply Now
						</CTAButton>
					</div>
				</div>
			</div>
		</section>
	);
}

/** Strong employer conversion band with industrial photography behind. */
export function EmployerCTABand() {
	return (
		<section
			className="relative overflow-hidden bg-navy py-20 md:py-28"
			aria-label="Submit a manpower requirement"
			id="employer-cta"
		>
			<div aria-hidden="true" className="absolute inset-0">
				<img
					src="/images/cta-welder.webp"
					alt=""
					loading="lazy"
					decoding="async"
					width={1920}
					height={900}
					className="h-full w-full object-cover opacity-40"
				/>
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(95deg, rgba(4,21,34,0.94) 0%, rgba(5,29,47,0.78) 55%, rgba(6,45,67,0.42) 100%)",
					}}
				/>
			</div>
			<div className="container-x relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
				<div className="reveal">
					<p className="eyebrow eyebrow-light mb-4">
						For hiring managers & project directors
					</p>
					<h2 className="max-w-xl font-display text-[clamp(1.7rem,3.6vw,2.7rem)] font-extrabold leading-[1.1] text-white">
						Planning your next workforce requirement?
					</h2>
					<p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-slate-300">
						Tell us what your project needs — trades, volumes, salary structure
						and joining dates. Our recruitment team will develop a sourcing and
						deployment plan tailored to your requirement.
					</p>
					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<Link to="/employers" className="btn-primary !px-6 !py-3.5">
							Submit Manpower Requirement{" "}
							<ArrowRight className="h-4 w-4" aria-hidden="true" />
						</Link>
						<Link to="/contact" className="btn-ghost-light !px-6 !py-3.5">
							Contact our team
						</Link>
					</div>
				</div>
				<ul
					className="reveal grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
					style={{ ["--reveal-delay" as string]: "120ms" }}
				>
					{[
						{
							t: "Structured intake",
							d: "Requirement forms mirror how projects actually specify crews.",
						},
						{
							t: "Trade-verified shortlists",
							d: "Practical testing before your panel ever sees a CV.",
						},
						{
							t: "Compliance-first files",
							d: "Emigration, medical and attestation tracked per worker.",
						},
					].map((x) => (
						<li
							key={x.t}
							className="rounded-lg border border-white/12 bg-white/[0.05] p-4 backdrop-blur-[2px]"
						>
							<p className="font-display text-[14px] font-bold text-brand-400">
								{x.t}
							</p>
							<p className="mt-1 text-[13px] leading-relaxed text-slate-300">
								{x.d}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
