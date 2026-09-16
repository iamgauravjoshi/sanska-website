import React from "react";
import { CTAButton } from "./Buttons";

interface Props {
	id?: string;
	eyebrow?: string;
	title: React.ReactNode;
	lede?: React.ReactNode;
	align?: "left" | "center";
	light?: boolean;
	as?: "h1" | "h2";
	cta?: { label: string; to: string };
	className?: string;
}

export default function SectionHeading({
	id,
	eyebrow,
	title,
	lede,
	align = "left",
	light = false,
	as = "h2",
	cta,
	className = "",
}: Props) {
	const Heading = as;
	return (
		<div
			className={`section-heading reveal flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "md:flex-row md:justify-between"} ${className}`}
		>
			<div className={align === "center" ? "max-w-3xl" : "max-w-2xl"}>
				{eyebrow && (
					<p className={`eyebrow mb-3 ${light ? "eyebrow-light" : ""}`}>
						{eyebrow}
					</p>
				)}
				<Heading
					id={id}
					className={`heading text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.12] ${light ? "!text-white" : ""}`}
				>
					{title}
				</Heading>
				{lede && (
					<p
						className={`mt-4 text-[16.5px] leading-relaxed ${light ? "text-slate-300" : "text-muted"}`}
					>
						{lede}
					</p>
				)}
			</div>
			{cta && (
				<div className="shrink-0">
					{light ? (
						<CTAButton to={cta.to} variant="primary">
							{cta.label}
						</CTAButton>
					) : (
						<CTAButton to={cta.to} variant="outline">
							{cta.label}
						</CTAButton>
					)}
				</div>
			)}
		</div>
	);
}
