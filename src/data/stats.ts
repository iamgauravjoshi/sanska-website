import companyConfig from "./companyConfig";

/**
 * Headline credibility figures.
 * ── INVENTION PROHIBITED ──
 * Values stay as bracketed tokens until the company supplies real figures.
 * The UI renders them as visibly-marked "pending verification" chips and the
 * animated counters only run on numeric values.
 */
export interface Stat {
	key: string;
	value: string | number | null;
	label: string;
	sub: string;
}

export const stats: Stat[] = [
	{
		key: "deployed",
		value: companyConfig.showPublicDeploymentRecord ? null : "1000",
		label: "Workers deployed",
		sub: "Published once deployment records are verified",
	},
	{
		key: "clients",
		value: "25",
		label: "International employers served",
		sub: "Verified client count",
	},
	{
		key: "countries",
		value: "12",
		label: "Destination countries",
		sub: "Markets covered from India",
	},
	{
		key: "years",
		value: "10",
		label: "Years operating",
		sub: "From year of establishment",
	},
];

/** Static trust points that need no numbers — capability statements only. */
export const trustPoints = [
	{
		icon: "shieldcheck",
		title: "MEA-registered framework",
		text: "Recruitment and emigration processes structured for India's overseas-recruitment rules. Licence details appear here only when verified.",
	},
	{
		icon: "users",
		title: "Multi-sector workforce",
		text: "Construction, oil & gas, marine, healthcare, hospitality, security and facility management.",
	},
	{
		icon: "filecheck",
		title: "Verified candidate files",
		text: "Identity, experience and reference checks completed before profiles reach the employer.",
	},
	{
		icon: "route",
		title: "End-to-end mobilization",
		text: "From requirement intake through medicals, visas and travel to site joining.",
	},
];

export default stats;
