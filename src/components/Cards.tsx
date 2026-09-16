import React from "react";
import {
	CheckCircle2,
	Clock,
	Download,
	Eye,
	FileText,
	ShieldAlert,
} from "lucide-react";
import type { Credential } from "../data/licenses";
import { Ph, isPlaceholder } from "../utils/placeholders";
import type { Market } from "../data/countries";
import { CTAButton } from "./Buttons";

/* ── License / credential card ─────────────────────────────────────────── */
export function LicenseCard({ cred }: { cred: Credential }) {
	return (
		<article className="reveal card-x flex h-full flex-col p-6">
			<div className="mb-4 flex items-start justify-between gap-3">
				<span className="rounded-md bg-ice px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-brand-700 ring-1 ring-brand/20">
					{cred.category}
				</span>
				{cred.verified ? (
					<span className="flex items-center gap-1 text-[12px] font-bold text-leaf-700">
						<CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Verified
					</span>
				) : (
					<span className="flex items-center gap-1.5 rounded-full bg-[#fdf6e3] px-2.5 py-1 text-[11px] font-bold text-[#8a6106] ring-1 ring-[#e8cf8f]">
						<Clock className="h-3.5 w-3.5" aria-hidden="true" /> Pending
						document
					</span>
				)}
			</div>
			<h3 className="font-display text-[16.5px] font-bold leading-snug text-navy">
				{cred.name}
			</h3>
			<dl className="mt-4 space-y-2.5 border-t border-line pt-4 text-[13px]">
				<div className="flex justify-between gap-4">
					<dt className="shrink-0 font-semibold text-muted">Authority</dt>
					<dd className="text-right text-ink">{cred.authority}</dd>
				</div>
				<div className="flex justify-between gap-4">
					<dt className="shrink-0 font-semibold text-muted">
						Registration No.
					</dt>
					<dd className="text-right font-mono text-[12.5px] text-ink">
						<Ph value={cred.number} />
					</dd>
				</div>
				<div className="flex justify-between gap-4">
					<dt className="shrink-0 font-semibold text-muted">Issued</dt>
					<dd className="text-right text-ink">
						<Ph value={cred.issued} />
					</dd>
				</div>
				<div className="flex justify-between gap-4">
					<dt className="shrink-0 font-semibold text-muted">Validity</dt>
					<dd className="text-right text-ink">
						<Ph value={cred.validity} />
					</dd>
				</div>
			</dl>
			<div className="mt-auto flex gap-2.5 pt-5">
				{cred.verified && cred.document ? (
					<>
						<CTAButton
							href={cred.document}
							variant="outline"
							className="!py-2 !text-[12.5px] flex-1"
							withArrow={false}
						>
							<Eye className="h-3.5 w-3.5" aria-hidden="true" /> View
							certificate
						</CTAButton>
						<CTAButton
							href={cred.document}
							variant="navy"
							className="!py-2 !text-[12.5px] flex-1"
							withArrow={false}
						>
							<Download className="h-3.5 w-3.5" aria-hidden="true" /> PDF
						</CTAButton>
					</>
				) : (
					<p className="flex items-start gap-2 rounded-md border border-dashed border-line bg-paper px-3.5 py-2.5 text-[12px] leading-snug text-muted">
						<FileText
							className="mt-0.5 h-3.5 w-3.5 shrink-0"
							aria-hidden="true"
						/>
						Certificate preview unlocks when the original is supplied and
						verified. We publish no document we cannot stand behind.
					</p>
				)}
			</div>
		</article>
	);
}

/* ── Market (country) card for global presence ─────────────────────────── */
export function CountryCard({
	market,
	active,
}: {
	market: Market;
	active: boolean;
}) {
	return (
		<article
			// onMouseEnter={() => onHover?.(market.key)}
			// onMouseLeave={() => onHover?.(null)}
			// hover:border-brand/40
			className={`reveal card-x flex h-full flex-col p-5 transition-all duration-250 ${active ? "!border-brand/60 ring-2 ring-brand/25" : "hover:border-brand/60"}`}
		>
			<header className="flex items-center gap-3">
				<span aria-hidden="true" className="text-[26px] leading-none">
					{market.flag}
				</span>
				<div>
					<h3 className="font-display text-[15.5px] font-bold leading-tight text-navy">
						{market.country}
					</h3>
					<p className="text-[11px] font-bold uppercase tracking-[0.12em] text-leaf-700">
						Market served
					</p>
				</div>
			</header>
			<dl className="mt-4 space-y-3 text-[13px]">
				<div>
					<dt className="font-bold text-muted">Key sectors</dt>
					<dd className="mt-0.5 text-ink">{market.industries}</dd>
				</div>
				<div>
					<dt className="font-bold text-muted">Workforce categories</dt>
					<dd className="mt-0.5 text-ink">{market.workforce}</dd>
				</div>
			</dl>
			{market.note && (
				<p className="mt-4 flex items-start gap-2 rounded-md bg-ice px-3 py-2 text-[12px] leading-snug text-brand-800">
					<ShieldAlert
						className="mt-0.5 h-3.5 w-3.5 shrink-0"
						aria-hidden="true"
					/>
					{market.note}
				</p>
			)}
			<div className="mt-auto pt-5">
				<a
					href="/employers"
					className="link-arrow text-[13px]"
					data-discover="true"
				>
					Hire for this market <React.Fragment />
				</a>
			</div>
		</article>
	);
}

/** Small helper used by pages that map over markets */
export function isMarketPlaceholder(v: unknown) {
	return isPlaceholder(v);
}
