export interface Service {
	id: string;
	title: string;
	icon: string; // lucide icon key, mapped in components/Icon.tsx
	short: string;
	description: string;
	whoFor: string;
	handles: string[];
	outcome: string;
	sectors: string[];
}

/** Six core service lines — used on Home, Services and the footer. */
export const services: Service[] = [
	{
		id: "international-manpower-recruitment",
		title: "International Manpower Recruitment",
		icon: "globe",
		short: "End-to-end sourcing of Indian workers for overseas employers.",
		description:
			"Full-cycle recruitment for overseas employers: requirement analysis, candidate sourcing, verification, interview coordination and deployment planning — structured around your role list, volumes and joining dates.",
		whoFor:
			"Employers hiring small batches or long-term crews in GCC, Europe and other international markets.",
		handles: [
			"Requirement breakdown by trade, skill level and quantity",
			"Sourcing from our pan-India candidate network and job portals",
			"Document, experience and employer-reference verification",
			"Interview scheduling and employer selection support",
		],
		outcome:
			"A screened shortlist of job-ready candidates you control — from selection to deployment.",
		sectors: ["All sectors"],
	},
	{
		id: "bulk-recruitment",
		title: "Bulk & Project Recruitment",
		icon: "layers",
		short: "High-volume mobilisation staged against project milestones.",
		description:
			"Recruitment campaigns for 100–1,000+ worker requirements, planned in waves against project milestones so you receive workforce in the sequence your site actually needs it.",
		whoFor:
			"Main contractors, EPC companies and industrial projects ramping up labour-intensive phases.",
		handles: [
			"Volume sourcing plans with trade-wise candidate pipelines",
			"Wave-based mobilisation aligned to project schedule",
			"Dedicated recruitment desk for the project",
			"Pooled documentation and medical-processing capacity",
		],
		outcome:
			"Predictable workforce inflow without payroll overhang during ramp-up.",
		sectors: [
			"Construction & Infrastructure",
			"Oil & Gas",
			"Facility Management",
		],
	},
	{
		id: "skilled-semi-skilled",
		title: "Skilled & Semi-Skilled Manpower",
		icon: "hardhat",
		short:
			"Verified trades: welding, electrical, fitting, formwork, heavy equipment.",
		description:
			"Trades recruitment where proof matters. Candidates are screened against the exact trade scope you specify, with trade testing and practical evaluation before they reach your interview.",
		whoFor:
			"Site teams that need workers who can perform from day one with correct PPE discipline.",
		handles: [
			"Trade-scope definition with your technical team",
			"Practical trade tests and skill evaluation",
			"Experience certificate and ID verification",
			"Behavioural and safety screening",
		],
		outcome:
			"Lower early attrition and fewer rejections at your site induction stage.",
		sectors: [
			"Construction & Infrastructure",
			"Marine",
			"Oil & Gas",
			"Facility Management",
		],
	},
	{
		id: "professional-recruitment",
		title: "Professional & Technical Recruitment",
		icon: "briefcase",
		short: "Engineers, supervisors, nurses, chefs, department heads.",
		description:
			"White-collar and clinical recruitment for overseas organisations: engineers, planners, HSE officers, finance and admin staff, nursing professionals and hospitality department roles.",
		whoFor:
			"Organisations recruiting professionals whose credentials must be verifiable and role-specific.",
		handles: [
			"Qualification, licence and registration checks",
			"Structured competency interviews with your panel",
			"Reference and employment-history verification",
			"Compensation and contract documentation support",
		],
		outcome:
			"Professionals vetted for technical depth, communication and overseas-readiness.",
		sectors: [
			"Healthcare",
			"Hospitality",
			"Oil & Gas",
			"Construction & Infrastructure",
		],
	},
	{
		id: "visa-documentation",
		title: "Visa & Documentation Support",
		icon: "filecheck",
		short: "Embracing, medicals, attestations and embassy processing.",
		description:
			"Coordination of the full documentary chain for each worker: police verification, medical fitness (GAMCA where applicable), embassy attestation, emigration clearance and employer-specific visa formalities.",
		whoFor:
			"Employers who want zero ambiguity in candidate paperwork before mobilisation.",
		handles: [
			"Document collection checklists per destination",
			"Attestation and embassy liaison",
			"Medical appointment coordination",
			"Status tracking shared with the employer",
		],
		outcome:
			"Complete, compliant files — no deployment delays discovered at the airport.",
		sectors: ["All sectors"],
	},
	{
		id: "mobilisation-deployment",
		title: "Mobilization & Deployment",
		icon: "plane",
		short: "Travel, joining and arrival coordination.",
		description:
			"Logistics orchestration from signing-on to site joining: batch travel planning, airport handling briefings, arrival coordination with your on-site team and joining-status reporting until the last worker reports.",
		whoFor:
			"Project teams that measure mobilisation by people on site, not people on a list.",
		handles: [
			"Flight scheduling and batch grouping",
			"Pre-departure orientation for workers",
			"Arrival and handover coordination with employer",
			"Joining confirmation and incident reporting",
		],
		outcome:
			"Auditable mobilisation — every worker tracked from requirement to reporting date.",
		sectors: ["All sectors"],
	},
];

export default services;
