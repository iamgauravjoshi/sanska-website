import { Link } from "react-router-dom";
import companyConfig from "../data/companyConfig";

/**
 * Uses the supplied brand asset (public/sanska-logo.svg) byte-for-byte.
 * The logo artwork is never recoloured, redrawn or distorted; the wordmark is
 * separate text. On dark surfaces the mark sits on its own white chip because
 * the supplied file has a baked white background.
 */
export default function Logo({
	variant = "header",
	size = "md",
}: {
	variant?: "header" | "footer";
	size?: "sm" | "md" | "lg";
}) {
	const mark =
		size === "sm" ? "h-9 w-9" : size === "lg" ? "h-14 w-14" : "h-11 w-11";
	const text =
		size === "sm"
			? "text-[16px]"
			: size === "lg"
				? "text-[24px]"
				: "text-[18px]";
	return (
		<Link
			to="/"
			className="group flex items-center gap-2"
			aria-label={`${companyConfig.shortName} — home`}
		>
			<span
				className={`${mark} flex shrink-0 items-center justify-center overflow-hidden transition-transform duration-250 group-hover:scale-[1.03]`}
			>
				<img
					src="/sanska-logo.svg"
					alt="Sanska International logo"
					width={40}
					height={40}
					className="h-full w-full scale-[0.92] object-contain"
				/>
			</span>
			<span className="flex flex-col leading-none">
				<span
					className={`font-display font-extrabold tracking-wide ${variant === "footer" ? "text-white" : "text-navy"}  ${text}`}
				>
					SANSKA{" "}
					<span
						className={
							variant === "footer" ? "text-brand-400" : "text-brand-600"
						}
					>
						INTERNATIONAL
					</span>
				</span>
				<span
					className={`mt-1 text-[12px] font-semibold uppercase tracking-[0.10em] ${variant === "footer" ? "text-slate-400" : "text-muted"}`}
				>
					Edificational Services Pvt. Ltd.
				</span>
			</span>
		</Link>
	);
}
