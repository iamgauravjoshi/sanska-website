export interface NavChild {
	label: string;
	to: string;
	desc?: string;
	icon?: string; // lucide icon key, mapped in components/Icon.tsx
}
export interface NavItem {
	label: string;
	to: string;
	children?: NavChild[];
}

import industries from "./industries";
import { services } from "./services";

export const aboutUsNav: NavChild[] = [
	{ label: "About Sanska", to: "/about", desc: "Company, mission & values" },
	{
		label: "Global Presence",
		to: "/global-presence",
		desc: "Destination markets we serve",
	},
	{
		label: "Sectors & Job Categories",
		to: "/job-categories",
		desc: "Professions we recruit for",
	},
	{
		label: "Recruitment Process",
		to: "/recruitment-process",
		desc: "Requirement to deployment",
	},
	{ label: "Projects & Deployments", to: "/projects" },
	{
		label: "Licenses & Certifications",
		to: "/licenses",
		desc: "Registration and compliance",
	},
];

export const mainNav: NavItem[] = [
	{ label: "Home", to: "/" },
	{
		label: "About",
		to: "/about",
		children: aboutUsNav.map((s) => ({
			label: s.label,
			to: s.to,
			desc: s.desc,
		})),
	},
	{
		label: "Services",
		to: "/services",
		children: services.map((s) => ({
			icon: s.icon ?? "globe",
			label: s.title,
			to: `/services#${s.id}`,
			desc: s.short,
		})),
	},
	{
		label: "Industries",
		to: "/industries",
		children: industries.map((i) => ({
			label: i.name,
			to: `/industries#${i.slug}`,
		})),
	},
	// { label: "Employers", to: "/employers" },
	// { label: "Candidates", to: "/candidates" },
	{ label: "Contact", to: "/contact" },
];

export const footerNav = {
	company: [
		{ label: "About Us", to: "/about" },
		{ label: "Why Sanska", to: "/about#values" },
		{ label: "Global Presence", to: "/global-presence" },
		{ label: "Industries Served", to: "/industries" },
		{ label: "Licenses & Certifications", to: "/licenses" },
	],
	services: services.map((s) => ({ label: s.title, to: `/services#${s.id}` })),
	// industries: industries.map((i) => ({
	// 	label: i.name,
	// 	to: `/industries#${i.slug}`,
	// })),
	quick: [
		{ label: "For Employers", to: "/employers" },
		{ label: "For Candidates", to: "/candidates" },
		{ label: "Job Categories", to: "/job-categories" },
		{ label: "Contact Us", to: "/contact" },
	],
};
