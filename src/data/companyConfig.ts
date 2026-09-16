/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SANSKA INTERNATIONAL — CENTRAL COMPANY CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for contact details, legal identifiers and integration
 * points. Every value shown as "[UPPER_SNAKE_CASE]" is a PLACEHOLDER: it is
 * unvalidated company information and MUST be replaced with data from company
 * documents before launch. The site renders these as visibly-marked chips so
 * nothing unverified can ship silently.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface OfficeAddress {
	label: string;
	line1: string;
	line2: string;
	city: string;
	country: string;
	mapUrl?: string;
}

export const companyConfig = {
	legalName: "Sanska International Edificational Services Pvt. Ltd.",
	shortName: "Sanska International",
	descriptor: "Overseas Manpower Recruitment & Workforce Deployment — India",
	establishedYear: "2016",
	companyRegistration: "JAIPUR/COMPANY/5652495/2022",
	/**
	 * MEA Recruiting Agent licence. Only render a real number once the licence
	 * document has been supplied and verified. Never imply a government
	 * authorisation that is not documented.
	 */
	meaLicense: {
		verified: true,
		number: "RA5652495",
		validity: "18 February 2027",
	},
	siteOrigin: "https://www.sanskainternational.com", // [SITE_URL] — replace with the live production domain
	ogImage: "/images/cta-welder.webp",

	contact: {
		phone: "+91 9587007585",
		phoneTollFree: "",
		whatsapp: "+91 9587007585",
		whatsappMessage:
			"Hello Sanska International — I would like to discuss a manpower requirement.",
		email: "info@sanskainternational.com",
		emailSupport: "hr@sanskainternational.com",
		hours: "Mon-Sat, 9:00-18:00 IST",
		linkedin:
			"https://in.linkedin.com/company/sanskainternationaledificational",
		facebook: "https://www.facebook.com/sanskagroup/",
		instagram: "https://www.instagram.com/sanskaedification/",
	},

	offices: {
		registered: {
			label: "Registered Office",
			line1: "Plot no 28-29, Second Floor, Kesar Nagar A, Mansarovar",
			line2: "Jaipur, Rajasthan, 302020",
			city: "Jaipur",
			country: "India",
		} as OfficeAddress,
		recruitment: {
			label: "Recruitment Office",
			line1: "Plot no 28-29, Second Floor, Kesar Nagar A, Mansarovar",
			line2: "Jaipur, Rajasthan, 302020",
			city: "Jaipur",
			country: "India",
		} as OfficeAddress,
	},

	/**
	 * Form handling. This is a static website: submissions are validated and
	 * packaged client-side, then handed to `submitForm()` (src/utils/formSubmit.ts).
	 * To go live, set `endpoint` to a Formspree / Web3Forms / own-API URL — the
	 * payload keys are already flat and email-friendly.
	 */
	forms: {
		provider: "none" as "none" | "endpoint",
		endpoint: "[FORMS_ENDPOINT — e.g. https://formspree.io/f/XXXXXXXX]",
	},

	/**
	 * Gate for the public deployment-record / case-study content on /projects.
	 * Set to true only once validated project content and client approvals exist.
	 */
	showPublicDeploymentRecord: false,
};

export type CompanyConfig = typeof companyConfig;
export default companyConfig;
