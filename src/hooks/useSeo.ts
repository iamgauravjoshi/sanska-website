import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import companyConfig from "../data/companyConfig";

export interface Crumb {
	name: string;
	path: string;
}

export interface SeoInput {
	title: string;
	description: string;
	/** e.g. "/services" — used for canonical + og:url */
	path: string;
	breadcrumbs?: Crumb[];
	/** Additional JSON-LD blocks to inject (Service, FAQPage, etc.) */
	schema?: object[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
	let el = document.head.querySelector<HTMLMetaElement>(
		`meta[${attr}="${key}"]`,
	);
	if (!el) {
		el = document.createElement("meta");
		el.setAttribute(attr, key);
		document.head.appendChild(el);
	}
	el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
	let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
	if (!el) {
		el = document.createElement("link");
		el.setAttribute("rel", rel);
		document.head.appendChild(el);
	}
	el.setAttribute("href", href);
}

/** Per-route metadata + JSON-LD (Organization / WebSite / BreadcrumbList + page schema). */
export function useSeo({
	title,
	description,
	path,
	breadcrumbs = [],
	schema = [],
}: SeoInput) {
	useEffect(() => {
		const origin = companyConfig.siteOrigin.replace(/\/$/, "");
		const url = `${origin}${path}`;
		document.title = title;
		upsertMeta("name", "description", description);
		upsertMeta("property", "og:title", title);
		upsertMeta("property", "og:description", description);
		upsertMeta("property", "og:url", url);
		upsertMeta("property", "og:image", `${origin}${companyConfig.ogImage}`);
		upsertMeta("property", "og:type", "website");
		upsertMeta("property", "og:site_name", "Sanska International");
		upsertMeta("name", "twitter:card", "summary_large_image");
		upsertMeta("name", "twitter:title", title);
		upsertMeta("name", "twitter:description", description);
		upsertLink("canonical", url);

		const id = "route-jsonld";
		document.getElementById(id)?.remove();
		const graph: object[] = [
			{
				"@context": "https://schema.org",
				"@type": "Organization",
				name: companyConfig.legalName,
				alternateName: companyConfig.shortName,
				url: origin,
				logo: `${origin}/sanska-logo.svg`,
				description:
					"India-based overseas manpower recruitment and workforce deployment company connecting international employers with skilled, semi-skilled and professional Indian talent.",
				areaServed: "Worldwide",
				knowsAbout: [
					"overseas manpower recruitment India",
					"international manpower recruitment agency India",
					"Indian workforce recruitment",
					"bulk manpower recruitment",
					"Indian manpower for GCC",
				],
				...(companyConfig.contact.email &&
				!companyConfig.contact.email.includes("[")
					? { email: companyConfig.contact.email }
					: {}),
			},
		];
		if (breadcrumbs.length > 0) {
			graph.push({
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: breadcrumbs.map((c, i) => ({
					"@type": "ListItem",
					position: i + 1,
					name: c.name,
					item: `${origin}${c.path}`,
				})),
			});
		}
		for (const s of schema) graph.push(s);

		const script = document.createElement("script");
		script.type = "application/ld+json";
		script.id = id;
		script.textContent = JSON.stringify(graph);
		document.head.appendChild(script);
	}, [
		title,
		description,
		path,
		JSON.stringify(breadcrumbs),
		JSON.stringify(schema),
	]);
}

/** Scroll restoration + hash focus for in-page anchors. */
export function useScrollTopAndHash() {
	const { pathname, hash } = useLocation();
	useEffect(() => {
		if (hash) {
			const el = document.getElementById(hash.slice(1));
			if (el) {
				el.scrollIntoView({ behavior: "smooth", block: "start" });
				return;
			}
		}
		window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
	}, [pathname, hash]);
}
