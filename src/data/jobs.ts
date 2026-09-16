export type Skill = "Unskilled" | "Semi-skilled" | "Skilled" | "Supervisor / Lead" | "Professional";

export interface RoleGroup {
  industry: string;
  slug: string;
  roles: Array<{ title: string; skill: Skill; type: "Blue collar" | "White collar" | "Clinical" | "Hospitality" }>;
}

/**
 * ROLE DIRECTORY — these are the trades and professions Sanska recruits for,
 * NOT a live vacancy board. Do not present any row as an open position unless
 * an employer-verified job order is published here deliberately.
 */
export const roleGroups: RoleGroup[] = [
  {
    industry: "Construction & Infrastructure",
    slug: "construction",
    roles: [
      { title: "Mason", skill: "Semi-skilled", type: "Blue collar" },
      { title: "Carpenter (Formwork)", skill: "Skilled", type: "Blue collar" },
      { title: "Steel Fixer / Bar Bender", skill: "Semi-skilled", type: "Blue collar" },
      { title: "Electrician (Civil)", skill: "Skilled", type: "Blue collar" },
      { title: "Plumber", skill: "Skilled", type: "Blue collar" },
      { title: "Welder (SMAW)", skill: "Skilled", type: "Blue collar" },
      { title: "Scaffolder", skill: "Skilled", type: "Blue collar" },
      { title: "Heavy Equipment Operator", skill: "Skilled", type: "Blue collar" },
      { title: "ACM / Drywall Installer", skill: "Skilled", type: "Blue collar" },
      { title: "Site Foreman", skill: "Supervisor / Lead", type: "Blue collar" },
      { title: "Civil Engineer (QA/QC)", skill: "Professional", type: "White collar" },
      { title: "Safety (HSE) Officer", skill: "Professional", type: "White collar" },
    ],
  },
  {
    industry: "Oil, Gas & Process",
    slug: "oil-gas",
    roles: [
      { title: "Pipe Fitter", skill: "Skilled", type: "Blue collar" },
      { title: "TIG / 6G Welder", skill: "Skilled", type: "Blue collar" },
      { title: "Rigger / Banksman", skill: "Skilled", type: "Blue collar" },
      { title: "Instrumentation Technician", skill: "Skilled", type: "Blue collar" },
      { title: "Scaffolding Supervisor", skill: "Supervisor / Lead", type: "Blue collar" },
      { title: "Rotating Equipment Technician", skill: "Skilled", type: "Blue collar" },
      { title: "Process Technician (Operator)", skill: "Professional", type: "White collar" },
      { title: "NDT Inspector", skill: "Professional", type: "White collar" },
    ],
  },
  {
    industry: "Marine & Shipyard",
    slug: "marine",
    roles: [
      { title: "Marine Fabricator", skill: "Skilled", type: "Blue collar" },
      { title: "Marine Fitter", skill: "Skilled", type: "Blue collar" },
      { title: "Hull Welder", skill: "Skilled", type: "Blue collar" },
      { title: "Marine Electrician", skill: "Skilled", type: "Blue collar" },
      { title: "Blaster / Painter", skill: "Semi-skilled", type: "Blue collar" },
      { title: "Dock Supervisor", skill: "Supervisor / Lead", type: "Blue collar" },
      { title: "Technical Vessel Support Crew", skill: "Semi-skilled", type: "Blue collar" },
    ],
  },
  {
    industry: "Healthcare",
    slug: "healthcare",
    roles: [
      { title: "Staff Nurse — ICU / CCU", skill: "Professional", type: "Clinical" },
      { title: "Staff Nurse — OT / PACU", skill: "Professional", type: "Clinical" },
      { title: "General Ward Nurse", skill: "Professional", type: "Clinical" },
      { title: "Medical Lab Technician", skill: "Skilled", type: "Clinical" },
      { title: "Radiology / MRI Technician", skill: "Skilled", type: "Clinical" },
      { title: "Pharmacy Technician", skill: "Skilled", type: "Clinical" },
      { title: "Physiotherapy Assistant", skill: "Skilled", type: "Clinical" },
      { title: "Patient Care Attendant", skill: "Semi-skilled", type: "Clinical" },
    ],
  },
  {
    industry: "Hospitality",
    slug: "hospitality",
    roles: [
      { title: "Chef de Partie / Commis (Indian)", skill: "Skilled", type: "Hospitality" },
      { title: "Continental / Arabic Cook", skill: "Skilled", type: "Hospitality" },
      { title: "F&B Service Associate", skill: "Semi-skilled", type: "Hospitality" },
      { title: "Bartender / Barista", skill: "Skilled", type: "Hospitality" },
      { title: "Housekeeping Attendant", skill: "Semi-skilled", type: "Hospitality" },
      { title: "Front Office Agent", skill: "Skilled", type: "Hospitality" },
      { title: "Kitchen Steward", skill: "Semi-skilled", type: "Hospitality" },
      { title: "Banquet & Pastry Teams", skill: "Skilled", type: "Hospitality" },
    ],
  },
  {
    industry: "Facility Management",
    slug: "facility-management",
    roles: [
      { title: "HVAC Technician", skill: "Skilled", type: "Blue collar" },
      { title: "MEP Technician", skill: "Skilled", type: "Blue collar" },
      { title: "Electrician (Maintenance)", skill: "Skilled", type: "Blue collar" },
      { title: "Plumber (Maintenance)", skill: "Skilled", type: "Blue collar" },
      { title: "Housekeeping Supervisor", skill: "Supervisor / Lead", type: "Blue collar" },
      { title: "Hygiene / Cleaning Operative", skill: "Semi-skilled", type: "Blue collar" },
      { title: "Pest Control Technician", skill: "Skilled", type: "Blue collar" },
      { title: "Facility Planner", skill: "Professional", type: "White collar" },
    ],
  },
  {
    industry: "Security",
    slug: "security",
    roles: [
      { title: "Static Security Guard", skill: "Semi-skilled", type: "Blue collar" },
      { title: "Access Control / Gate Officer", skill: "Skilled", type: "Blue collar" },
      { title: "Patrol Guard", skill: "Semi-skilled", type: "Blue collar" },
      { title: "Guard Supervisor", skill: "Supervisor / Lead", type: "Blue collar" },
      { title: "CCTV / Control Room Operator", skill: "Skilled", type: "White collar" },
    ],
  },
  {
    industry: "General & Support Trades",
    slug: "support",
    roles: [
      { title: "Driver (Heavy / Light)", skill: "Skilled", type: "Blue collar" },
      { title: "Mechanic (Diesel / Plant)", skill: "Skilled", type: "Blue collar" },
      { title: "Welder's Helper / General Helper", skill: "Unskilled", type: "Blue collar" },
      { title: "Store Keeper", skill: "Skilled", type: "White collar" },
      { title: "Admin & Accounts Staff", skill: "Professional", type: "White collar" },
    ],
  },
];

export const skillLevels: Skill[] = [
  "Unskilled",
  "Semi-skilled",
  "Skilled",
  "Supervisor / Lead",
  "Professional",
];

export default roleGroups;
