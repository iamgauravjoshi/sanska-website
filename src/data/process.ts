export interface ProcessStep {
  no: string;
  title: string;
  icon: string;
  desc: string;
  audience: "employer" | "candidate" | "both";
}

/** The full 12-stage journey used on /recruitment-process. */
export const processSteps: ProcessStep[] = [
  {
    no: "01",
    title: "Employer Requirement",
    icon: "clipboard",
    desc: "You submit trade-wise requirements: quantities, salary structure, working hours, accommodation and site conditions. We structure them into an executable recruitment brief.",
    audience: "employer",
  },
  {
    no: "02",
    title: "Workforce Planning",
    icon: "layers",
    desc: "Our team maps sourcing pools, realistic timelines and mobilisation waves per trade — and flags any skill that is scarce before you commit to programme dates.",
    audience: "employer",
  },
  {
    no: "03",
    title: "Candidate Sourcing",
    icon: "search",
    desc: "Active sourcing across our verified candidate network, ITI / trade-school linkages, referral channels and job boards — matched to the exact trade scope you defined.",
    audience: "both",
  },
  {
    no: "04",
    title: "Screening & Verification",
    icon: "filecheck",
    desc: "Documents, experience certificates, identities and employment references are checked. Every candidate file is compiled before it reaches your desk.",
    audience: "candidate",
  },
  {
    no: "05",
    title: "Trade / Skill Testing",
    icon: "hardhat",
    desc: "Practical evaluation for blue-collar trades — weld tests, mock wiring, rigging drills, kitchen tasks — so claimed skill becomes demonstrated skill.",
    audience: "candidate",
  },
  {
    no: "06",
    title: "Employer Interview & Selection",
    icon: "users",
    desc: "Video or in-person interviews are coordinated with your panel. Selection authority always rests with the employer — we shortlist, you decide.",
    audience: "employer",
  },
  {
    no: "07",
    title: "Medical Examination",
    icon: "heartpulse",
    desc: "Destination-compliant medicals (e.g. GAMCA/WAFID appointments where required) are scheduled and tracked for every selected worker.",
    audience: "candidate",
  },
  {
    no: "08",
    title: "Documentation",
    icon: "folder",
    desc: "Police verification, passport checks, attestations, emigration requirements and employer paperwork assembled into complete, compliant files.",
    audience: "candidate",
  },
  {
    no: "09",
    title: "Visa Processing",
    icon: "stamp",
    desc: "Work-visa applications are submitted under the employer's sponsorship; embassy and authority stages are followed up until approvals are in hand.",
    audience: "both",
  },
  {
    no: "10",
    title: "Pre-Departure Coordination",
    icon: "info",
    desc: "Workers receive orientation on contract terms, destination rules, safety culture and reporting procedures. Employers receive final rosters.",
    audience: "candidate",
  },
  {
    no: "11",
    title: "Travel & Mobilization",
    icon: "plane",
    desc: "Batches are grouped by flight, airport handovers are coordinated, and joining packs are issued. Departure status is reported batch by batch.",
    audience: "both",
  },
  {
    no: "12",
    title: "Arrival & Deployment",
    icon: "target",
    desc: "Handover to your site team is confirmed, and joining status is tracked until every selected worker is on site and productive.",
    audience: "employer",
  },
];

/** Condensed 9-stage strip used on the homepage. */
export const homeProcessSteps = [
  { no: "01", title: "Requirement", desc: "Trade-wise volumes, terms and dates received from the employer." },
  { no: "02", title: "Sourcing", desc: "Candidate pools mapped to the exact scope and timeline." },
  { no: "03", title: "Screening", desc: "Documents, references and trade history verified." },
  { no: "04", title: "Trade Test", desc: "Practical skill evaluation for blue-collar roles." },
  { no: "05", title: "Interview", desc: "Employer panel interviews — selection stays with you." },
  { no: "06", title: "Medical", desc: "Destination-compliant medicals tracked per worker." },
  { no: "07", title: "Documentation", desc: "Emigration, attestations and contracts completed." },
  { no: "08", title: "Visa", desc: "Sponsored work-visa processing and embassy follow-up." },
  { no: "09", title: "Mobilization", desc: "Flights, handover and joining confirmation to site." },
];

export default processSteps;
