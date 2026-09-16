import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Img from "../components/Img";
import Icon from "../components/Icon";
import { CTAButton } from "../components/Buttons";
import { industries } from "../data/industries";
import { roleGroups } from "../data/jobs";
import { useSeo } from "../hooks/useSeo";
import media from "../data/media";

export default function Industries() {
	useSeo({
		title:
			"Industries We Staff | Construction, Oil & Gas, Marine, Healthcare — Sanska International",
		description:
			"Industry-specific overseas recruitment from India: construction & infrastructure, oil & gas, marine & shipyard, healthcare, hospitality, security and facility management workforces.",
		path: "/industries",
		breadcrumbs: [
			{ name: "Home", path: "/" },
			{ name: "Industries", path: "/industries" },
		],
		schema: [
			{
				"@context": "https://schema.org",
				"@type": "ItemList",
				name: "Industries served by Sanska International",
				itemListElement: industries.map((ind, i) => ({
					"@type": "ListItem",
					position: i + 1,
					name: `${ind.name} workforce recruitment`,
				})),
			},
		],
	});

	return (
		<>
			<PageHero
				slot="industry_construction"
				eyebrow="Industries"
				crumbs={[
					{ name: "Home", path: "/" },
					{ name: "Industries", path: "/industries" },
				]}
				title="Industry-specific recruitment expertise"
				lede="Different industries need different people — and different screening. Our recruiters understand the trades, certifications and working conditions behind each sector we serve."
			/>

			{/* quick nav */}
			<nav
				aria-label="Jump to industry"
				className="sticky top-[70px] z-30 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
			>
				<div className="container-x scrollbar-slim flex gap-1 overflow-x-auto py-3">
					{industries.map((i) => (
						<a
							key={i.slug}
							href={`#${i.slug}`}
							className="whitespace-nowrap rounded-full border border-line px-3.5 py-1.5 text-[12.5px] font-semibold text-muted transition-colors hover:border-brand/60 hover:bg-ice hover:text-brand-700"
						>
							{i.name}
						</a>
					))}
				</div>
			</nav>

			{industries.map((ind, i) => {
				const flipped = i % 2 === 1;
				const roles = roleGroups.find((g) => g.slug === ind.slug)?.roles ?? [];
				return (
					<section
						key={ind.slug}
						id={ind.slug}
						className={`scroll-mt-32 border-b border-line py-16 md:py-20 ${i % 2 ? "bg-paper" : "bg-white"}`}
						aria-labelledby={`ind-${ind.slug}`}
					>
						<div className="container-x">
							<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
								<div className={flipped ? "lg:order-2" : ""}>
									<div className="reveal group relative overflow-hidden rounded-lg">
										<Img
											slot={ind.media}
											className="aspect-[16/10]"
											imgClassName="group-hover:scale-[1.03] duration-[600ms]"
											sizes="(min-width:1024px) 46vw, 92vw"
										/>
										<span className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-navy/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
											<Icon
												name={ind.icon}
												className="h-3.5 w-3.5 text-brand-400"
											/>{" "}
											Sector 0{i + 1}
										</span>
									</div>
								</div>
								<div className={flipped ? "lg:order-1" : ""}>
									<p className="eyebrow mb-3">{ind.tagline}</p>
									<h2
										id={`ind-${ind.slug}`}
										className="font-display text-[clamp(1.5rem,3vw,2.05rem)] font-extrabold leading-tight text-navy"
									>
										{ind.name}
									</h2>
									<p className="mt-4 text-[15px] leading-relaxed text-muted">
										{ind.overview}
									</p>

									<div className="mt-7 grid gap-6 sm:grid-cols-2">
										<div>
											<h3 className="text-[11px] font-bold uppercase tracking-[0.13em] text-muted">
												Typical manpower categories
											</h3>
											<ul className="mt-2.5 space-y-1.5">
												{ind.categories.map((c) => (
													<li
														key={c}
														className="flex items-start gap-2 text-[13.5px] text-ink"
													>
														<span
															className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
															aria-hidden="true"
														/>{" "}
														{c}
													</li>
												))}
											</ul>
										</div>
										<div>
											<h3 className="text-[11px] font-bold uppercase tracking-[0.13em] text-muted">
												Recruitment considerations
											</h3>
											<ul className="mt-2.5 space-y-1.5">
												{ind.considerations.map((c) => (
													<li
														key={c}
														className="flex items-start gap-2 text-[13.5px] text-ink"
													>
														<span
															className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"
															aria-hidden="true"
														/>{" "}
														{c}
													</li>
												))}
											</ul>
										</div>
									</div>

									<div className="mt-7 flex flex-wrap items-center gap-4">
										<CTAButton
											to={`/employers?industry=${encodeURIComponent(ind.name)}`}
											variant="navy"
										>
											Request workers for this sector
										</CTAButton>
										{roles.length > 0 && (
											<Link
												to="/job-categories"
												className="link-arrow text-[13.5px]"
											>
												See {roles.length} mapped roles{" "}
												<ArrowRight
													className="h-3.5 w-3.5"
													aria-hidden="true"
												/>
											</Link>
										)}
									</div>
								</div>
							</div>
						</div>
					</section>
				);
			})}

			<section
				className="relative overflow-hidden bg-navy py-16 md:py-20"
				aria-labelledby="ind-cta-h"
			>
				<div aria-hidden="true" className="absolute inset-0">
					<img
						src={media["cta_welder"].src}
						alt=""
						className="h-full w-full object-cover opacity-25"
						loading="lazy"
						decoding="async"
					/>
					<div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(4,21,34,0.92),rgba(6,45,67,0.55))]" />
				</div>
				<div className="container-x relative text-center">
					<h2
						id="ind-cta-h"
						className="reveal mx-auto max-w-2xl font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-extrabold text-white"
					>
						One crew brief covers all sectors. Send it once.
					</h2>
					<p className="reveal mx-auto mt-4 max-w-xl text-[15px] text-slate-300">
						List trades across projects in a single requirement and we will run
						parallel sourcing desks with shared documentation capacity.
					</p>
					<div className="reveal mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<CTAButton to="/employers" className="!px-7 !py-3.5">
							Request Manpower
						</CTAButton>
						<CTAButton
							to="/global-presence"
							variant="ghost-light"
							withArrow={false}
							className="!px-7 !py-3.5"
						>
							Where we deploy
						</CTAButton>
					</div>
				</div>
			</section>
		</>
	);
}
