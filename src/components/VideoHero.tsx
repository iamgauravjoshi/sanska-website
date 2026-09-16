import { useEffect, useRef, useState } from "react";
import { CTAButton } from "./Buttons";
import { FileCheck2, PlaneTakeoff, Stamp, Users2 } from "lucide-react";

const MICRO = [
	{ icon: Users2, label: "Recruitment" },
	{ icon: FileCheck2, label: "Documentation" },
	{ icon: Stamp, label: "Visa coordination" },
	{ icon: PlaneTakeoff, label: "Mobilization" },
];

/**
 * Homepage cinematic hero.
 * Background: self-hosted Pexels-licensed aerial construction video with a
 * WebP/JPG poster fallback. Honours prefers-reduced-motion (static poster).
 */
export default function VideoHero() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [failed, setFailed] = useState(false);
	const POSTER = "/video/hero-poster.webp"; // video: /video/hero.mp4 (Pexels license)

	useEffect(() => {
		const v = videoRef.current;
		if (!v || failed) return;
		const reduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (reduced) return; // keep poster, do not autoplay
		const p = v.play();
		if (p) p.catch(() => setFailed(true));
	}, [failed]);

	return (
		<section
			className="relative flex min-h-[640px] items-end overflow-hidden bg-navy md:min-h-[700px] lg:h-[min(940px,96vh)]"
			aria-label="Introduction"
		>
			{/* media layer */}
			<div className="absolute inset-0" aria-hidden="true">
				{failed ? (
					<img src={POSTER} alt="" className="h-full w-full object-cover" />
				) : (
					<video
						ref={videoRef}
						className="h-full w-full object-cover"
						poster={POSTER}
						autoPlay
						muted
						loop
						playsInline
						preload="none"
						tabIndex={-1}
						aria-hidden="true"
					>
						<source src="/video/hero.mp4" type="video/mp4" />
					</video>
				)}
				{/* cinematic navy overlay */}
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(100deg, rgba(4,22,35,0.90) 0%, rgba(4,26,41,0.72) 42%, rgba(5,30,48,0.30) 78%, rgba(5,30,48,0.18) 100%), linear-gradient(0deg, rgba(4,20,32,0.85) 0%, rgba(4,20,32,0) 34%)",
					}}
				/>
				<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F7F9FA]/8 to-transparent" />
			</div>

			<div className="container-x relative z-10 pb-16 pt-[130px] md:pb-24">
				<div className="max-w-2xl md:max-w-4xl">
					<p className="eyebrow eyebrow-light mb-5">
						Overseas manpower recruitment from India
					</p>
					<h1 className="text-shadow-hero font-display text-[clamp(2.05rem,4.7vw,3.45rem)] font-extrabold leading-[1.07] text-white">
						Connecting global employers with reliable{" "}
						<span className="text-brand-400">Indian talent</span>
					</h1>
					<p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-slate-200/95 md:text-[17.5px]">
						From skilled trades to professional expertise, we connect the people
						who are ready to work with the businesses ready to grow.
					</p>
					<div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
						<CTAButton
							to="/employers"
							className="!px-7 !py-4 !text-[15px] tracking-wide"
						>
							Request Manpower
						</CTAButton>
						<CTAButton
							to="/candidates"
							variant="ghost-light"
							withArrow={false}
							className="!px-7 !py-4 !text-[15px] tracking-wide"
						>
							Apply For Job
						</CTAButton>
					</div>
					<ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12.5px] font-semibold uppercase tracking-[0.13em] text-slate-300/90">
						{MICRO.map(({ icon: Ico, label }) => (
							<li key={label} className="flex items-center gap-2">
								<Ico
									className="h-4 w-4 text-brand-400"
									aria-hidden="true"
									strokeWidth={2}
								/>
								{label}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
