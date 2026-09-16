import React from "react";
import { stats } from "../data/stats";
import { isPlaceholder } from "../utils/placeholders";

/**
 * Credibility strip. Real numeric values count up; unverified figures render
 * as visibly-marked pending chips — never as invented numbers.
 */
function CountUp({ value }: { value: number }) {
	const [n, setN] = React.useState(0);
	const ref = React.useRef<HTMLSpanElement>(null);
	React.useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(
			([e]) => {
				if (!e.isIntersecting) return;
				io.disconnect();
				if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
					setN(value);
					return;
				}
				const t0 = performance.now();
				const dur = 1100;
				const tick = (t: number) => {
					const p = Math.min(1, (t - t0) / dur);
					setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
			},
			{ threshold: 0.6 },
		);
		io.observe(el);
		return () => io.disconnect();
	}, [value]);
	return <span ref={ref}>{n.toLocaleString("en-IN")}+</span>;
}

export default function StatsStrip() {
	return (
		<section
			id="trust"
			className="relative z-20 -mt-1 border-b border-line bg-white"
			aria-label="Company credibility at a glance"
		>
			<div className="container-x grid grid-cols-1 gap-px bg-line/60 py-8 sm:grid-cols-2 lg:grid-cols-4">
				{stats.map((s) => (
					<div key={s.key} className="bg-white px-6 py-4 lg:px-8">
						<p className="font-display text-[30px] font-extrabold leading-none text-navy lg:text-[36px]">
							{isPlaceholder(s.value) || s.value === null ? (
								<span
									className="ph !text-[15px] !font-bold"
									title="Awaiting verified figure — placeholder by policy"
								>
									{s.value ?? "[PENDING]"}
								</span>
							) : (
								<CountUp value={Number(s.value)} />
							)}
						</p>
						<p className="mt-2 text-[14px] font-bold text-ink">{s.label}</p>
						<p className="mt-0.5 text-[12px] leading-snug text-muted">
							{s.sub}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
