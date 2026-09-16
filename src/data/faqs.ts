export interface Faq {
  q: string;
  a: string;
}

export const employerFaqs: Faq[] = [
  {
    q: "How do we raise a manpower requirement?",
    a: "Submit the employer requirement form on this site, or send your demand letter directly to our recruitment team. The form captures trade-wise quantities, salary structure, working hours and site conditions so the first response is already a sourcing plan — not a questionnaire.",
  },
  {
    q: "Who makes the final selection of workers?",
    a: "You do. Sanska screens, tests and shortlists; the employer conducts interviews and holds complete authority over which candidates are selected and offered.",
  },
  {
    q: "What is a typical recruitment timeline?",
    a: "Timelines depend on trade scarcity, batch size, medical slots and embassy processing for the destination. After receiving your requirement we commit to an initial sourcing plan with realistic dates for shortlists, trade tests and mobilisation waves.",
  },
  {
    q: "How are workers verified before interview?",
    a: "Identity documents, experience certificates, trade credentials and past-employer references are verified, and skilled trades complete practical trade tests. Every profile reaching your panel carries its verification record.",
  },
  {
    q: "Who is responsible for visas and emigration formalities?",
    a: "Work visas are issued under the employer's sponsorship. Sanska coordinates the candidate-side chain — medicals, police verification, documentation and emigration requirements — and tracks each file to visa approval.",
  },
];

export const candidateFaqs: Faq[] = [
  {
    q: "Does applying guarantee an overseas job?",
    a: "No. Overseas employment depends on verified employer requirements and your suitability for them. Be cautious of any recruiter who promises guaranteed placement.",
  },
  {
    q: "How do I know a message from Sanska is genuine?",
    a: "Verify official communication against the contact details published on this site before sharing documents or making payments. Legitimate recruiters will always accept verification questions.",
  },
  {
    q: "Which documents will be needed?",
    a: "At minimum a valid passport, ITI/trade or professional certificates relevant to your role, and an experience record. Destination-specific requirements (for example medical fitness or attestation) are explained in writing at selection stage.",
  },
  {
    q: "What should I watch out for with other agents?",
    a: "Avoid anyone charging large unrecorded 'processing fees', promising dates before a visa is approved, or asking for original passports as deposit. India's emigration rules protect registered recruitment channels — use them.",
  },
];

export const generalFaqs: Faq[] = [
  {
    q: "Is Sanska International a government-approved agency?",
    a: "All authorisation and registration documents the company holds will be published on the Licenses & Certifications page with verifiable numbers. We deliberately show no licence until its original is on file, so check that page rather than any claim elsewhere.",
  },
  {
    q: "Which markets do you recruit for?",
    a: "Currently documented corridors include the GCC (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain), Israel's construction sector arrangements, Mauritius and selected European destinations — subject to each country's rules for Indian nationals.",
  },
];

export default employerFaqs;
