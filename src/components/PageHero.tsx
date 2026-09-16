import React from "react";
import Breadcrumb from "./Breadcrumb";
import media from "../data/media";
import type { Crumb } from "../hooks/useSeo";

interface Props {
	eyebrow?: string;
	title: React.ReactNode;
	lede?: React.ReactNode;
	slot?: string; // media key for photographic band
	children?: React.ReactNode;
	crumbs?: Crumb[];
	align?: "left" | "center";
	compact?: boolean;
}

/** Internal-page banner: navy editorial band, optional photograph. */
export default function PageHero({
	eyebrow,
	title,
	lede,
	slot,
	children,
	crumbs,
	align = "left",
	compact = false,
}: Props) {
	const img = slot ? media[slot] : undefined;
	return (
		<section
			className={`relative overflow-hidden bg-navy text-white ${compact ? "pt-[118px]" : "pt-[130px]"} ${compact ? "pb-12" : "pb-16 md:pb-20"}`}
		>
			{img ? (
				<div className="absolute inset-0" aria-hidden="true">
					<img
						src={img.src}
						alt=""
						width={img.width}
						height={img.height}
						className="h-full w-full object-cover opacity-45"
						loading="eager"
						decoding="async"
					/>
					<div
						className="absolute inset-0"
						style={{
							background:
								"linear-gradient(100deg, rgba(4,22,35,0.93) 0%, rgba(5,28,45,0.78) 40%, rgba(6,45,67,0.35) 100%), linear-gradient(0deg, rgba(5,25,40,0.9) 0%, rgba(5,25,40,0) 40%)",
						}}
					/>
				</div>
			) : (
				<div
					aria-hidden="true"
					className="absolute inset-0 opacity-[0.5]"
					style={{
						backgroundImage:
							"radial-gradient(58% 80% at 78% 20%, rgba(14,178,223,0.16) 0%, rgba(14,178,223,0) 60%), radial-gradient(40% 60% at 12% 90%, rgba(103,189,83,0.10) 0%, rgba(103,189,83,0) 60%)",
					}}
				/>
			)}
			{/* faint measurement grid — industrial, restrained */}
			<div
				aria-hidden="true"
				className="absolute inset-0 opacity-[0.05]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
					backgroundSize: "56px 56px",
				}}
			/>
			<div
				className={`container-x relative z-10 ${align === "center" ? "flex flex-col items-center text-center" : ""}`}
			>
				{crumbs && crumbs.length > 0 && (
					<div className="mb-6">
						<Breadcrumb items={crumbs} light />
					</div>
				)}
				{eyebrow && <p className="eyebrow eyebrow-light mb-4">{eyebrow}</p>}
				<h1
					className={`font-display text-[clamp(1.9rem,4.4vw,3.3rem)] font-extrabold leading-[1.08] text-white ${align === "center" ? "max-w-3xl" : "max-w-2xl"}`}
				>
					{title}
				</h1>
				{lede && (
					<p
						className={`mt-5 text-[16px] leading-relaxed text-slate-300 md:text-[17px] ${align === "center" ? "max-w-2xl" : "max-w-xl"}`}
					>
						{lede}
					</p>
				)}
				{children && (
					<div
						className={`mt-8 ${align === "center" ? "flex justify-center" : ""}`}
					>
						{children}
					</div>
				)}
			</div>
		</section>
	);
}
