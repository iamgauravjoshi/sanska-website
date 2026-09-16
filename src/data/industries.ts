export interface Industry {
	slug: string;
	name: string;
	icon: string;
	media: string; // key into src/data/media.ts
	tagline: string;
	overview: string;
	categories: string[];
	considerations: string[];
}

/** Sector capabilities. Roles listed are typical recruitment scopes — not live vacancies. */
export const industries: Industry[] = [
	{
		slug: "marine",
		name: "Marine & Shipyard",
		icon: "anchor",
		media: "industry_marine",
		tagline: "Fabrication, repair and terminal operations",
		overview:
			"Recruitment for shipyards, dry docks, vessel operations and port terminals — trades where certification, confined-space discipline and welding qualification are non-negotiable.",
		categories: [
			"Marine fitters / fabricators",
			"Coded & structural welders",
			"Marine electricians",
			"Blasters & painters",
			"Riggers & crane operators",
			"Dock support crews",
		],
		considerations: [
			"Welder qualification tests aligned to the employer's code system",
			"Sea-service and port-experience verification where required",
			"Confined-space and working-at-height medical fitness",
		],
	},
	{
		slug: "construction",
		name: "Construction & Infrastructure",
		icon: "crane",
		media: "industry_construction",
		tagline: "Civil, MEP and high-rise crews at volume",
		overview:
			"The deepest bench we operate. From formwork crews to MEP installers for towers, roads, bridges and utility projects — mobilised in waves against your programme.",
		categories: [
			"Masons, bar benders & steel fixers",
			"Carpenters & formwork crews",
			"Electricians & plumbing fitters",
			"ACM & drywall installers",
			"Heavy equipment operators",
			"Site supervisors & foremen",
		],
		considerations: [
			"Trade testing before employer interview reduces rejection rates",
			"Mix of skilled leads with semi-skilled general workers per crew",
			"Ramp-up scheduling to match handover milestones",
		],
	},
	{
		slug: "oil-gas",
		name: "Oil, Gas & Process Industries",
		icon: "flame",
		media: "industry_oilgas",
		tagline: "Certified trades for upstream, midstream and plants",
		overview:
			"Disciplined hiring for refineries, petrochemical plants, LNG facilities and pipeline projects — where documentation, certifications and HSE records are part of the recruitment file itself.",
		categories: [
			"Pipe fitters & riggers",
			"TIG / 6G welders",
			"Instrumentation technicians",
			"Scaffolders & insulators",
			"HSE officers",
			"Maintenance technicians",
		],
		considerations: [
			"Valid third-party NDT / welding certificates, verified with issuing bodies",
			"Offshore or live-plant experience where the role demands it",
			"Strict medical standards and drug screening support",
		],
	},
	{
		slug: "healthcare",
		name: "Healthcare & Clinical Support",
		icon: "heartpulse",
		media: "industry_healthcare",
		tagline: "Nurses, technicians and hospital support staff",
		overview:
			"Clinical and support recruitment for hospitals, clinics, care homes and home-care groups — with licence verification and credentialing coordinated with your HR and compliance teams.",
		categories: [
			"Staff nurses (ICU, OR, wards)",
			"Medical laboratory technicians",
			"Radiology & imaging technicians",
			"Pharmacy technicians",
			"Patient-care & housekeeping attendants",
			"Physiotherapy assistants",
		],
		considerations: [
			"Nursing council registration verified against official registries",
			"Prometric / DataFlow support where the destination requires it",
			"Language and shift-compatibility screening before interview",
		],
	},
	{
		slug: "hospitality",
		name: "Hospitality & Tourism",
		icon: "utensils",
		media: "industry_hospitality",
		tagline: "Hotels, resorts, catering and banqueting teams",
		overview:
			"Front and back-of-house staffing for hotel groups, resorts, cruise catering partners and large-format food service — groomed, service-trained and interview-ready.",
		categories: [
			"Commis & demi chefs (Indian, Arabic, Continental)",
			"F&B service & bartenders",
			"Housekeeping & laundry crews",
			"Front office & guest relations",
			"Kitchen stewards",
			"Trainers & supervisors",
		],
		considerations: [
			"Practical kitchen and service assessments before employer interview",
			"Grooming and guest-facing communication standards screened early",
			"Seasonal and project-based rosters handled in waves",
		],
	},
	{
		slug: "security",
		name: "Security Services",
		icon: "shieldcheck",
		media: "industry_security",
		tagline: "Static guards, supervisors and control-room staff",
		overview:
			"Guarding personnel for sites, facilities and events — recruited against licensing, training-record and fitness criteria set by the employer and destination regulator.",
		categories: [
			"Static & mobile security guards",
			"Supervisors & shift-in-charge",
			"Control-room operators",
			"Access-control & gate staff",
			"Patrol teams for remote sites",
		],
		considerations: [
			"Certification requirements (e.g. destination security training) mapped before offer",
			"Physical fitness and height criteria applied transparently",
			"Background and police verification at the screening stage",
		],
	},
	{
		slug: "facility-management",
		name: "Facility Management",
		icon: "building2",
		media: "industry_facility",
		tagline: "Hard and soft services for managed portfolios",
		overview:
			"Multi-trade FM workforces — HVAC, MEP, electrical, plumbing, pest control and cleaning — recruited as contract teams aligned to your SLA structure.",
		categories: [
			"HVAC technicians",
			"MEP & electrical technicians",
			"Plumbers & civil maintenance",
			"Housekeeping & hygiene crews",
			"Pest control technicians",
			"Facility supervisors & planners",
		],
		considerations: [
			"Shift patterns and on-call rotation compatibility checked at screening",
			"Trade certificates verified against ITI / NCVET boards where claimed",
			"Contract mobilisation timed to transition dates, not just start dates",
		],
	},
];

export default industries;
