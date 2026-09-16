export interface Market {
	key: string; // must match MAP_MARKERS key where plotted
	country: string;
	region:
		| "GCC & Middle East"
		| "Europe"
		| "Africa & Indian Ocean"
		| "Other International Markets";
	type: "market-served";
	flag: string; // emoji for compact labelling
	industries: string;
	workforce: string;
	note?: string;
}

/**
 * Markets Sanska can service from India. These are RECRUITMENT CORRIDORS, not
 * office locations — the site must never imply a physical presence that has not
 * been documented. Validated markets kept here; extend from company records.
 */
export const markets: Market[] = [
	{
		key: "UAE",
		country: "United Arab Emirates",
		region: "GCC & Middle East",
		type: "market-served",
		flag: "🇦🇪",
		industries: "Construction · Facilities · Hospitality · Logistics",
		workforce: "Civil & MEP trades, FM crews, hotel staff, drivers",
	},
	{
		key: "Saudi Arabia",
		country: "Saudi Arabia",
		region: "GCC & Middle East",
		type: "market-served",
		flag: "🇸🇦",
		industries: "Mega-projects · Oil & Gas · Industrial cities",
		workforce: "Heavy civil crews, welders, riggers, plant technicians",
	},
	{
		key: "Qatar",
		country: "Qatar",
		region: "GCC & Middle East",
		type: "market-served",
		flag: "🇶🇦",
		industries: "Infrastructure · Energy · Hospitality",
		workforce: "Skilled trades, F&B and facility staff",
	},
	{
		key: "Oman",
		country: "Oman",
		region: "GCC & Middle East",
		type: "market-served",
		flag: "🇴🇲",
		industries: "Ports · Refineries · Construction",
		workforce: "Marine & industrial trades, drivers, support staff",
	},
	{
		key: "Kuwait",
		country: "Kuwait",
		region: "GCC & Middle East",
		type: "market-served",
		flag: "🇰🇼",
		industries: "Infrastructure & utilities programmes",
		workforce: "Civil trades, electricians, plant operators",
	},
	{
		key: "Bahrain",
		country: "Bahrain",
		region: "GCC & Middle East",
		type: "market-served",
		flag: "🇧🇭",
		industries: "Aluminium & manufacturing · Services",
		workforce: "Industrial trades, maintenance crews",
	},
	{
		key: "Israel",
		country: "Israel",
		region: "GCC & Middle East",
		type: "market-served",
		flag: "🇮🇱",
		industries: "Construction sector",
		workforce: "Carpenters, iron bar benders, finishing trades",
		note: "Recruitment under destination-specific sector arrangements only.",
	},
	{
		key: "Europe",
		country: "Selected European markets",
		region: "Europe",
		type: "market-served",
		flag: "🇪🇺",
		industries: "Industrial · Seasonal hospitality · Care",
		workforce: "Technicians, chefs, care & support staff",
		note: "Subject to each country's work-permit scheme for Indian nationals.",
	},
	{
		key: "Mauritius",
		country: "Mauritius",
		region: "Africa & Indian Ocean",
		type: "market-served",
		flag: "🇲🇺",
		industries: "Hospitality · Manufacturing · Construction",
		workforce: "Hotel teams, factory operators, civil crews",
	},
];

export const regionOrder = [
	"GCC & Middle East",
	"Europe",
	"Africa & Indian Ocean",
	"Other International Markets",
] as const;

export const otherMarketsNote =
	"Additional destinations are handled case by case, subject to the employer's sponsorship route and the destination's immigration rules for Indian nationals.";

export default markets;
