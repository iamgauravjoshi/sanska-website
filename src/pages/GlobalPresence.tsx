import { useState } from "react";
import { Globe2, MapPin, Network } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import WorldMap from "../components/WorldMap";
import { CountryCard } from "../components/Cards";
import { CTAButton } from "../components/Buttons";
import { markets, regionOrder, otherMarketsNote } from "../data/countries";
import { useSeo } from "../hooks/useSeo";

export default function GlobalPresence() {
	const [region, setRegion] = useState<string>("All");
	const [selected, setSelected] = useState<string | null>(null);
	const shown =
		region === "All" ? markets : markets.filter((m) => m.region === region);

	useSeo({
		title: "Global Presence & Deployment Markets | Sanska International",
		description:
			"Recruitment corridors from India to the UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain, Israel, Mauritius and selected European markets — with destination-specific compliance context.",
		path: "/global-presence",
		breadcrumbs: [
			{ name: "Home", path: "/" },
			{ name: "Global Presence", path: "/global-presence" },
		],
	});

	return (
		<>
			<PageHero
				slot="global_dubai"
				eyebrow="Global Presence"
				crumbs={[
					{ name: "Home", path: "/" },
					{ name: "Global Presence", path: "/global-presence" },
				]}
				title="Indian workforce for international markets"
				lede="Markets served from our India operation: corridors we can staff, document and mobilise — clearly separated from the offices we do not claim to have."
			/>

			{/* ── Map-led section ───────────────────────────────────────── */}
			<section className="section-y bg-white" aria-labelledby="map-h">
				<div className="container-x">
					<div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
						<SectionHeading
							as="h2"
							eyebrow="Corridors"
							title={
								<span id="map-h">Indian Talent. Global opportunities.</span>
							}
							lede="Hover the map to trace a corridor, or select a market card to focus the route."
						/>
						<div
							className="reveal flex flex-wrap gap-1.5"
							role="group"
							aria-label="Filter regions"
						>
							{["All", ...regionOrder].map((r) => (
								<button
									key={r}
									type="button"
									onClick={() => setRegion(r)}
									aria-pressed={region === r}
									className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-bold transition-colors ${region === r ? "bg-navy text-white" : "border border-line bg-white text-muted hover:border-brand/50 hover:text-navy"}`}
								>
									{r}
								</button>
							))}
						</div>
					</div>

					<div className="reveal mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
						<div className="card-x overflow-hidden p-5 md:p-7">
							<WorldMap selected={selected} onSelect={setSelected} />
						</div>
						<div className="flex flex-col gap-4">
							<div className="card-x p-5">
								<p className="flex items-center gap-2 font-display text-[14px] font-bold text-navy">
									<MapPin
										className="h-4 w-4 text-leaf-600"
										aria-hidden="true"
									/>{" "}
									Sourcing base
								</p>
								<p className="mt-2 text-[13px] leading-relaxed text-muted">
									India — pan-India candidate sourcing coordinated from our
									registered operation. Trade testing and documentation run
									through partner centres by region.
								</p>
							</div>
							<div className="card-x p-5">
								<p className="flex items-center gap-2 font-display text-[14px] font-bold text-navy">
									<Network
										className="h-4 w-4 text-brand-600"
										aria-hidden="true"
									/>{" "}
									What the lines mean
								</p>
								<p className="mt-2 text-[13px] leading-relaxed text-muted">
									A line is a{" "}
									<strong className="text-ink">recruitment corridor</strong>: a
									destination where we have recruited, documented and mobilised
									against employer requirements. It is not an office, branch or
									partnership claim.
								</p>
							</div>
							<div className="card-x p-5">
								<p className="flex items-center gap-2 font-display text-[14px] font-bold text-navy">
									<Globe2 className="h-4 w-4 text-navy" aria-hidden="true" />{" "}
									Beyond the map
								</p>
								<p className="mt-2 text-[13px] leading-relaxed text-muted">
									{otherMarketsNote}
								</p>
							</div>
							<CTAButton to="/employers" variant="navy" className="w-full">
								Staff a deployment market
							</CTAButton>
						</div>
					</div>
				</div>
			</section>

			{/* ── Market cards ──────────────────────────────────────────── */}
			<section
				className="border-t border-line bg-paper py-16 md:py-20"
				aria-labelledby="markets-h"
			>
				<div className="container-x">
					<SectionHeading
						as="h2"
						eyebrow="Markets served"
						title={
							<span id="markets-h">Destination-by-destination capability</span>
						}
						lede="Typical sectors and workforce families per market, plus the compliance context that shapes recruitment into it."
					/>
					<div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
						{shown.map((m) => (
							<CountryCard key={m.key} market={m} active={selected === m.key} />
						))}
					</div>
					{shown.length === 0 && (
						<p className="mt-6 text-[14px] text-muted">
							No validated markets listed for this region yet.
						</p>
					)}
				</div>
			</section>

			{/* ── Corridor operating notes ──────────────────────────────── */}
			<section className="section-y bg-white" aria-labelledby="ops-h">
				<div className="container-x">
					<SectionHeading
						as="h2"
						eyebrow="Operating context"
						title={
							<span id="ops-h">What changes from corridor to corridor</span>
						}
						lede="Destination rules drive the recruitment calendar. We plan timelines around these variables — not around wish-dates."
					/>
					<div className="mt-10 grid gap-5 md:grid-cols-3">
						{[
							{
								t: "Medical & fitness regimes",
								d: "GAMCA/WAFID-style designated-centre medicals govern several GCC corridors; appointment supply is seasonal and shapes mobilisation batches.",
							},
							{
								t: "Embassy & attestation loads",
								d: "Document attestation capacity at destination missions varies through the year — timelines are built around posted appointment windows.",
							},
							{
								t: "Permit & quota frameworks",
								d: "Employer-side work permits, labour bans or sector arrangements (e.g. construction accords) determine when files can move. We track these per market.",
							},
						].map((c, i) => (
							<article
								key={c.t}
								className="reveal card-x p-6"
								style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
							>
								<p className="font-display text-[15.5px] font-bold text-navy">
									{c.t}
								</p>
								<p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
									{c.d}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* ── CTA band ──────────────────────────────────────────────── */}
			<section className="relative overflow-hidden bg-navy py-14 md:py-16">
				<div
					aria-hidden="true"
					className="absolute inset-0 opacity-[0.07]"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
						backgroundSize: "26px 26px",
					}}
				/>
				<div className="container-x relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
					<div>
						<h2 className="font-display text-[clamp(1.3rem,2.6vw,1.8rem)] font-extrabold text-white">
							Deploying into any of these markets?
						</h2>
						<p className="mt-2 max-w-xl text-[14px] leading-relaxed text-slate-300">
							Send the requirement and we will return a corridor-specific plan:
							sourcing pool, trade-test setup, documentation route and
							mobilisation waves.
						</p>
					</div>
					<div className="flex gap-3">
						<CTAButton to="/employers">Request Manpower</CTAButton>
						<CTAButton to="/contact" variant="ghost-light" withArrow={false}>
							Talk to the desk
						</CTAButton>
					</div>
				</div>
			</section>
		</>
	);
}
