import React from "react";
import { Link } from "react-router-dom";
import companyConfig from "../data/companyConfig";

/**
 * Content-integrity guard.
 * Anything we cannot verify from company documentation is stored in the data
 * layer as a bracketed token, e.g. "[MEA RD LICENCE NUMBER]". `isPlaceholder`
 * detects those tokens at render time; `Ph` displays them as a visibly-marked
 * chip so unverified information can never look like an approved fact.
 */
const PH_RE = /\[[A-Z0-9][A-Z0-9 /\-–_().]*\]/;

export function isPlaceholder(value: unknown): boolean {
	if (value === null || value === undefined || value === "") return true;
	if (typeof value !== "string") return false;
	return PH_RE.test(value);
}

export function hasAnyPlaceholder(...values: unknown[]): boolean {
	return values.some(isPlaceholder);
}

/** Renders a value — or a clearly-marked "awaiting verification" chip. */
export function Ph({
	value,
	className = "",
	note = "Awaiting verification — replace via company configuration before launch.",
}: {
	value?: string | null;
	className?: string;
	note?: string;
}) {
	if (!isPlaceholder(value)) return <>{value}</>;
	return (
		<span className={`ph ${className}`} title={note}>
			{value || "[UNSET]"}
		</span>
	);
}

/** A clickable phone/WhatsApp/email that degrades to a contact-page link while the value is a placeholder. */
export function ContactLink({
	kind,
	className = "",
	children,
}: {
	kind: "phone" | "whatsapp" | "email";
	className?: string;
	children: React.ReactNode;
}) {
	const c = companyConfig.contact;
	const value =
		kind === "phone" ? c.phone : kind === "whatsapp" ? c.whatsapp : c.email;
	if (!isPlaceholder(value)) {
		const href =
			kind === "phone"
				? `tel:${String(value).replace(/[^\d+]/g, "")}`
				: kind === "whatsapp"
					? `https://wa.me/${String(value).replace(/[^\d]/g, "")}?text=${encodeURIComponent(c.whatsappMessage)}`
					: `mailto:${value}`;
		return (
			<a
				className={className}
				href={href}
				target={kind === "email" ? undefined : "_blank"}
				rel="noreferrer"
			>
				{children}
			</a>
		);
	}
	return (
		<Link
			className={className}
			to="/contact"
			aria-label={`${children} — not yet published, see contact page`}
		>
			{children}
		</Link>
	);
}

/**
 * Helper for data-driven copy: returns the string unchanged, but callers can
 * render `<Ph value={x}/>` wherever the field may still be a token.
 */
export function ph(value: string | null | undefined, fallback = ""): string {
	if (value === null || value === undefined) return fallback;
	return isPlaceholder(value) ? value : value;
}
