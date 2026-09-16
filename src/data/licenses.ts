export interface Credential {
	id: string;
	category: string;
	name: string;
	authority: string;
	number: string;
	issued: string;
	validity: string;
	document: string | null; // public URL once the real file is supplied
	verified: boolean; // publish/download only when true
}

/**
 * COMPLIANCE LEDGER.
 * Nothing here is a claim. Entries describe WHICH documents a legitimate
 * overseas recruitment agency would hold — each one stays visibly "pending"
 * until the actual certificate is supplied, verified and uploaded.
 * Add entries ONLY from company documents.
 */
export const credentials: Credential[] = [
	{
		id: "mea-rd",
		category: "Government Authorisation",
		name: "Recruiting Agent (RA) Licence — Ministry of External Affairs",
		authority: "Government of India · Ministry of External Affairs",
		number: "[MEA RD LICENCE NUMBER]",
		issued: "[ISSUE DATE]",
		validity: "[VALIDITY PERIOD]",
		document: null,
		verified: false,
	},
	{
		id: "company-reg",
		category: "Company Registration",
		name: "Certificate of Incorporation",
		authority: "Registrar of Companies (Ministry of Corporate Affairs)",
		number: "[CIN]",
		issued: "[INCORPORATION DATE]",
		validity: "Perpetual",
		document: null,
		verified: false,
	},
	{
		id: "gst",
		category: "Statutory Registration",
		name: "GST Registration",
		authority: "Goods & Services Tax Council",
		number: "[GSTIN]",
		issued: "[REGISTRATION DATE]",
		validity: "[VALIDITY PERIOD]",
		document: null,
		verified: false,
	},
	{
		id: "emigration-est",
		category: "Statutory Registration",
		name: "Establishment Registration under Emigration Act (Protector of Emigrants)",
		authority:
			"Govt. of India · Ministry of External Affairs · Protector of Emigrants",
		number: "[E-CARD / ESTABLISHMENT REG. NO.]",
		issued: "[ISSUE DATE]",
		validity: "[VALIDITY PERIOD]",
		document: null,
		verified: false,
	},
	{
		id: "msme",
		category: "Business Registration",
		name: "Udyam / MSME Registration",
		authority: "Ministry of Micro, Small & Medium Enterprises",
		number: "[UDYAM REGISTRATION NUMBER]",
		issued: "[ISSUE DATE]",
		validity: "—",
		document: null,
		verified: false,
	},
];

export const licensesNotice =
	"Every regulatory claim we make can be verified. This page presents our corporate registration and compliance framework in full.";

export default credentials;
