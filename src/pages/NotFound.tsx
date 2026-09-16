import { Compass } from "lucide-react";
import { CTAButton } from "../components/Buttons";
import { useSeo } from "../hooks/useSeo";

export default function NotFound() {
	useSeo({
		title: "Page not found | Sanska International",
		description:
			"The requested page could not be found on the Sanska International website.",
		path: "/404",
	});
	return (
		<section
			className="flex min-h-[72vh] items-center bg-navy pt-[74px]"
			aria-labelledby="nf-h"
		>
			<div className="container-x section-y text-center">
				<p
					className="font-display text-[96px] font-extrabold leading-none text-brand-400/25 md:text-[140px]"
					aria-hidden="true"
				>
					404
				</p>
				<span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/8 text-brand-400 ring-1 ring-white/15">
					<Compass className="h-7 w-7" aria-hidden="true" />
				</span>
				<h1
					id="nf-h"
					className="font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-extrabold text-white"
				>
					{/* This route isn't on the deployment map */}
					Page Not Found
				</h1>
				<p className="mx-auto mt-4 max-w-md text-[14.5px] leading-relaxed text-slate-300">
					The page you tried to reach doesn't exist or has moved. Start from the
					homepage, or go straight to the desk that handles your enquiry.
				</p>
				<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<CTAButton to="/" variant="ghost-light" className="!px-6">
						Back to homepage
					</CTAButton>
					<div className="flex gap-3 mt-8 sm:mt-0">
						<CTAButton
							to="/employers"
							variant="primary"
							className="!px-6 bg-brand-500"
							withArrow={false}
						>
							Request Manpower
						</CTAButton>
						<CTAButton
							to="/candidates"
							variant="green"
							className="!px-6"
							withArrow={false}
						>
							Apply for Jobs
						</CTAButton>
					</div>
				</div>
			</div>
		</section>
	);
}
