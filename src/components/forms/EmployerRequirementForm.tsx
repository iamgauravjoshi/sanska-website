import React, { useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Plus } from "lucide-react";
import { CTAButton } from "../Buttons";
import {
	Consent,
	Field,
	FileInput,
	FormErrorSummary,
	Select,
	TextArea,
	TextInput,
} from "../FormKit";
import { industries } from "../../data/industries";
import {
	validateForm,
	validateFile,
	type FieldErrors,
	type FieldValues,
} from "../../utils/validation";
import { submitForm } from "../../utils/formSubmit";

interface Position {
	title: string;
	count: string;
	salary: string;
	currency: string;
	experience: string;
	qualification: string;
	jobDescription: string;
}

const emptyPosition = (): Position => ({
	title: "",
	count: "",
	salary: "",
	currency: "AED",
	experience: "",
	qualification: "",
	jobDescription: "",
});

const CURRENCIES = [
	"AED",
	"SAR",
	"QAR",
	"OMR",
	"KWD",
	"BHD",
	"EUR",
	"GBP",
	"USD",
	"ILS",
	"MUR",
	"INR",
];

const STEPS = [
	"Company & project",
	"Positions & quantities",
	"Terms, documents & consent",
];

export default function EmployerRequirementForm() {
	const [step, setStep] = useState(0);
	const [values, setValues] = useState<FieldValues>({});
	const [positions, setPositions] = useState<Position[]>([emptyPosition()]);
	const [errors, setErrors] = useState<FieldErrors>({});
	const [sending, setSending] = useState(false);
	const [done, setDone] = useState<{ ref: string; simulated: boolean } | null>(
		null,
	);
	const formRef = useRef<HTMLFormElement>(null);
	const filesRef = useRef<Record<string, File | null>>({
		demandLetter: null,
		jobDescription: null,
		other: null,
	});

	const set =
		(k: string) =>
		(
			e: React.ChangeEvent<
				HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
			>,
		) =>
			setValues((v) => ({ ...v, [k]: e.target.value }));

	const step1Schema = useMemo<
		Record<string, Parameters<typeof validateForm>[1][string]>
	>(
		() => ({
			companyName: { required: "Company name is required." },
			contactPerson: { required: "Contact person is required." },
			email: { required: "Official email is required.", email: true },
			phone: { required: "Phone / WhatsApp is required.", phone: true },
			country: { required: "Select the hiring country." },
			projectName: { required: "Project name is required." },
			projectLocation: { required: "Project location is required." },
			industry: { required: "Select the industry." },
		}),
		[],
	);

	const focusField = (name: string) => {
		const el = formRef.current?.querySelector<HTMLElement>(`[name="${name}"]`);
		el?.focus();
		el?.scrollIntoView({ block: "center", behavior: "smooth" });
	};

	async function submit(e: React.FormEvent) {
		e.preventDefault();
		const s1 = validateForm(values, step1Schema);
		const termsErrs: FieldErrors = {
			workingHours: values.workingHours
				? undefined
				: "Working hours are required.",
			contractPeriod: values.contractPeriod
				? undefined
				: "Contract period is required.",
			joiningDate: values.joiningDate
				? undefined
				: "Expected joining date is required.",
			consent:
				values.consent === true
					? undefined
					: "Please confirm consent to continue.",
		};
		const posErrs: FieldErrors = {};
		if (!positions.some((p) => p.title.trim() && Number(p.count) > 0)) {
			posErrs["_positions"] =
				"Add at least one position with a trade name and worker count.";
		}
		const fileErr =
			validateFile(filesRef.current.demandLetter, {
				accept: ["pdf", "doc", "docx", "jpg", "png", "webp"],
				maxMB: 5,
			}) ?? undefined;
		if (fileErr) posErrs["demandLetter"] = fileErr;

		const all = { ...s1, ...termsErrs, ...posErrs };
		setErrors(all);
		if (Object.values(all).some(Boolean)) {
			const firstKey = Object.keys(all).find((k) => all[k])!;
			focusField(firstKey);
			return;
		}
		setSending(true);
		const res = await submitForm("employer", {
			...values,
			positions: JSON.stringify(positions.filter((p) => p.title)),
			demandLetter: filesRef.current.demandLetter,
			jobDescriptionDoc: filesRef.current.jobDescription,
			otherDocs: filesRef.current.other,
			totalWorkers: String(
				positions.reduce((a, p) => a + (parseInt(p.count || "0", 10) || 0), 0),
			),
		});
		setSending(false);
		if (res.ok) setDone({ ref: res.ref, simulated: res.simulated });
		else
			setErrors({
				_submit: `Submission failed (${res.error}). Please try again or contact us directly.`,
			});
	}

	if (done) {
		return (
			<div
				className="card-x p-8 text-center md:p-12"
				role="status"
				aria-live="polite"
			>
				<span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-mint text-leaf-700 ring-1 ring-leaf/30">
					<CheckCircle2 className="h-7 w-7" aria-hidden="true" />
				</span>
				<h3 className="font-display text-[22px] font-extrabold text-navy">
					Requirement recorded — {done.ref}
				</h3>
				<p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-muted">
					Our recruitment team will review the requirement and respond with a
					sourcing and mobilisation plan for your review. For urgent
					requirements, reach us directly via the contact channels below.
				</p>
				<div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">
					<CTAButton to="/contact" variant="navy" withArrow={false}>
						WhatsApp / Email us
					</CTAButton>
					<CTAButton to="/recruitment-process" variant="outline">
						What happens next
					</CTAButton>
				</div>
				{done.simulated && (
					<p className="mx-auto mt-7 max-w-md border-t border-line pt-4 text-[11.5px] leading-relaxed text-[#93a4ad]">
						Site admin note: online intake is not yet connected to a mailbox
						(FORMS_ENDPOINT unset in <code>src/data/companyConfig.ts</code>) —
						in this static build submissions are validated client-side only and
						shown as a confirmation.
					</p>
				)}
			</div>
		);
	}

	return (
		<form
			ref={formRef}
			onSubmit={submit}
			noValidate
			className="card-x overflow-hidden"
			aria-label="Manpower requirement form"
		>
			{/* Stepper */}
			<div className="border-b border-line bg-paper px-5 py-4 md:px-8">
				<ol
					className="flex items-center gap-2 md:gap-4"
					aria-label="Form progress"
				>
					{STEPS.map((s, i) => (
						<li
							key={s}
							className="flex min-w-0 flex-1 items-center gap-2 md:gap-3"
						>
							<button
								type="button"
								onClick={() => i < step && setStep(i)}
								aria-current={i === step ? "step" : undefined}
								className={`flex min-w-0 items-center gap-2 rounded-md px-2 py-1 text-left transition-colors ${i <= step ? "cursor-pointer" : "cursor-default"}`}
							>
								<span
									className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-extrabold ${
										i < step
											? "bg-leaf text-navy"
											: i === step
												? "bg-brand text-navy"
												: "bg-white text-[#93a4ad] ring-1 ring-line"
									}`}
								>
									{i < step ? "✓" : i + 1}
								</span>
								<span
									className={`hidden truncate text-[12.5px] font-bold sm:block ${i === step ? "text-navy" : "text-muted"}`}
								>
									{s}
								</span>
							</button>
							{i < STEPS.length - 1 && (
								<span
									className="hidden h-px flex-1 bg-line lg:block"
									aria-hidden="true"
								/>
							)}
						</li>
					))}
				</ol>
			</div>

			<div className="p-5 md:p-8">
				<FormErrorSummary errors={errors} onFocusField={focusField} />
				{errors._submit && (
					<p className="field-error mb-4" role="alert">
						{errors._submit}
					</p>
				)}

				{step === 0 && (
					<div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
						<Field
							id="companyName"
							label="Company name"
							required
							error={errors.companyName}
						>
							<TextInput
								id="companyName"
								name="companyName"
								value={String(values.companyName ?? "")}
								onChange={set("companyName")}
								placeholder="e.g. Al-Bina General Contracting"
								invalid={!!errors.companyName}
							/>
						</Field>
						<Field
							id="contactPerson"
							label="Contact person"
							required
							error={errors.contactPerson}
						>
							<TextInput
								id="contactPerson"
								name="contactPerson"
								value={String(values.contactPerson ?? "")}
								onChange={set("contactPerson")}
								placeholder="Full name & designation"
								invalid={!!errors.contactPerson}
							/>
						</Field>
						<Field
							id="email"
							label="Official email"
							required
							error={errors.email}
						>
							<TextInput
								id="email"
								name="email"
								type="email"
								value={String(values.email ?? "")}
								onChange={set("email")}
								placeholder="hr@company.com"
								invalid={!!errors.email}
							/>
						</Field>
						<Field
							id="phone"
							label="Phone / WhatsApp"
							required
							error={errors.phone}
							hint="Include country code."
						>
							<TextInput
								id="phone"
								name="phone"
								type="tel"
								value={String(values.phone ?? "")}
								onChange={set("phone")}
								placeholder="+971 50 000 0000"
								invalid={!!errors.phone}
							/>
						</Field>
						<Field
							id="country"
							label="Hiring country"
							required
							error={errors.country}
						>
							<Select
								id="country"
								name="country"
								value={String(values.country ?? "")}
								onChange={set("country")}
								invalid={!!errors.country}
							>
								<option value="">Select country…</option>
								{[
									"United Arab Emirates",
									"Saudi Arabia",
									"Qatar",
									"Oman",
									"Kuwait",
									"Bahrain",
									"Israel",
									"Mauritius",
									"Germany",
									"United Kingdom",
									"Other",
								].map((c) => (
									<option key={c}>{c}</option>
								))}
							</Select>
						</Field>
						<Field
							id="industry"
							label="Industry"
							required
							error={errors.industry}
						>
							<Select
								id="industry"
								name="industry"
								value={String(values.industry ?? "")}
								onChange={set("industry")}
								invalid={!!errors.industry}
							>
								<option value="">Select industry…</option>
								{industries.map((i) => (
									<option key={i.slug}>{i.name}</option>
								))}
								<option>Other</option>
							</Select>
						</Field>
						<Field
							id="projectName"
							label="Project name"
							required
							error={errors.projectName}
						>
							<TextInput
								id="projectName"
								name="projectName"
								value={String(values.projectName ?? "")}
								onChange={set("projectName")}
								placeholder="e.g. Marina District — Block C"
								invalid={!!errors.projectName}
							/>
						</Field>
						<Field
							id="projectLocation"
							label="Project location"
							required
							error={errors.projectLocation}
						>
							<TextInput
								id="projectLocation"
								name="projectLocation"
								value={String(values.projectLocation ?? "")}
								onChange={set("projectLocation")}
								placeholder="City, region"
								invalid={!!errors.projectLocation}
							/>
						</Field>
					</div>
				)}

				{step === 1 && (
					<div>
						<div className="mb-4 flex flex-wrap items-center justify-between gap-3">
							<p className="text-[13.5px] text-muted">
								List each trade separately — example: Electrician — 25, Welder —
								15, Pipe Fitter — 20.
							</p>
							<button
								type="button"
								onClick={() => setPositions((p) => [...p, emptyPosition()])}
								className="btn-outline btn-sm"
							>
								<Plus className="h-3.5 w-3.5" aria-hidden="true" /> Add another
								position
							</button>
						</div>
						{errors._positions && (
							<p className="field-error mb-3" role="alert">
								{errors._positions}
							</p>
						)}
						<div className="space-y-4">
							{positions.map((p, i) => (
								<fieldset
									key={i}
									className="rounded-lg border border-line bg-paper/50 p-4 md:p-5"
								>
									<legend className="flex items-center gap-3 px-1 font-display text-[13px] font-bold text-navy">
										Position {i + 1}
										{positions.length > 1 && (
											<button
												type="button"
												className="text-[11px] font-semibold text-[#b03a29] hover:underline"
												onClick={() =>
													setPositions((ps) => ps.filter((_, j) => j !== i))
												}
												aria-label={`Remove position ${i + 1}`}
											>
												Remove
											</button>
										)}
									</legend>
									<div className="grid gap-x-4 gap-y-3.5 sm:grid-cols-6">
										<Field
											id={`p${i}title`}
											label="Position / trade"
											required
											error={i === 0 ? errors["_positions"] : undefined}
											className="sm:col-span-3"
										>
											<TextInput
												id={`p${i}title`}
												name={`p${i}title`}
												value={p.title}
												onChange={(e) =>
													setPositions((ps) =>
														ps.map((x, j) =>
															j === i ? { ...x, title: e.target.value } : x,
														),
													)
												}
												placeholder="e.g. TIG Welder"
											/>
										</Field>
										<Field
											id={`p${i}count`}
											label="Workers"
											required
											className="sm:col-span-1"
										>
											<TextInput
												inputMode="numeric"
												id={`p${i}count`}
												name={`p${i}count`}
												value={p.count}
												onChange={(e) =>
													setPositions((ps) =>
														ps.map((x, j) =>
															j === i
																? {
																		...x,
																		count: e.target.value.replace(/[^\d]/g, ""),
																	}
																: x,
														),
													)
												}
												placeholder="25"
											/>
										</Field>
										<Field
											id={`p${i}salary`}
											label="Salary"
											className="sm:col-span-1"
										>
											<TextInput
												id={`p${i}salary`}
												name={`p${i}salary`}
												value={p.salary}
												onChange={(e) =>
													setPositions((ps) =>
														ps.map((x, j) =>
															j === i ? { ...x, salary: e.target.value } : x,
														),
													)
												}
												placeholder="2,500"
											/>
										</Field>
										<Field
											id={`p${i}currency`}
											label="Currency"
											className="sm:col-span-1"
										>
											<Select
												id={`p${i}currency`}
												name={`p${i}currency`}
												value={p.currency}
												onChange={(e) =>
													setPositions((ps) =>
														ps.map((x, j) =>
															j === i ? { ...x, currency: e.target.value } : x,
														),
													)
												}
											>
												{CURRENCIES.map((c) => (
													<option key={c}>{c}</option>
												))}
											</Select>
										</Field>
										<Field
											id={`p${i}experience`}
											label="Experience required"
											className="sm:col-span-2"
										>
											<TextInput
												id={`p${i}experience`}
												name={`p${i}experience`}
												value={p.experience}
												onChange={(e) =>
													setPositions((ps) =>
														ps.map((x, j) =>
															j === i
																? { ...x, experience: e.target.value }
																: x,
														),
													)
												}
												placeholder="e.g. 3+ yrs, similar scale project"
											/>
										</Field>
										<Field
											id={`p${i}qualification`}
											label="Qualification / certificate"
											className="sm:col-span-2"
										>
											<TextInput
												id={`p${i}qualification`}
												name={`p${i}qualification`}
												value={p.qualification}
												onChange={(e) =>
													setPositions((ps) =>
														ps.map((x, j) =>
															j === i
																? { ...x, qualification: e.target.value }
																: x,
														),
													)
												}
												placeholder="e.g. ITI Electrician; NCC 6G valid"
											/>
										</Field>
										<Field
											id={`p${i}jobDescription`}
											label="Job description / scope"
											className="sm:col-span-2"
										>
											<TextInput
												id={`p${i}jobDescription`}
												name={`p${i}jobDescription`}
												value={p.jobDescription}
												onChange={(e) =>
													setPositions((ps) =>
														ps.map((x, j) =>
															j === i
																? { ...x, jobDescription: e.target.value }
																: x,
														),
													)
												}
												placeholder="Key duties, standards, PPE regime"
											/>
										</Field>
									</div>
									{i === positions.length - 1 && positions.length < 12 && (
										<button
											type="button"
											onClick={() =>
												setPositions((ps) => [...ps, emptyPosition()])
											}
											className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand-600 hover:text-brand-700"
										>
											<Plus className="h-3.5 w-3.5" aria-hidden="true" /> Add
											another position
										</button>
									)}
								</fieldset>
							))}
						</div>
					</div>
				)}

				{step === 2 && (
					<div className="grid gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
						<Field
							id="workingHours"
							label="Working hours"
							required
							error={errors.workingHours}
							hint="e.g. 8 hrs + overtime"
						>
							<TextInput
								id="workingHours"
								name="workingHours"
								value={String(values.workingHours ?? "")}
								onChange={set("workingHours")}
								placeholder="8 hrs/day, 6 days"
								invalid={!!errors.workingHours}
							/>
						</Field>
						<Field
							id="contractPeriod"
							label="Contract period"
							required
							error={errors.contractPeriod}
						>
							<TextInput
								id="contractPeriod"
								name="contractPeriod"
								value={String(values.contractPeriod ?? "")}
								onChange={set("contractPeriod")}
								placeholder="24 months, renewable"
								invalid={!!errors.contractPeriod}
							/>
						</Field>
						<Field
							id="joiningDate"
							label="Expected joining date"
							required
							error={errors.joiningDate}
						>
							<TextInput
								id="joiningDate"
								name="joiningDate"
								type="date"
								value={String(values.joiningDate ?? "")}
								onChange={set("joiningDate")}
								invalid={!!errors.joiningDate}
							/>
						</Field>
						<Field id="accommodation" label="Accommodation provided?">
							<Select
								id="accommodation"
								name="accommodation"
								value={String(values.accommodation ?? "")}
								onChange={set("accommodation")}
							>
								<option value="">Select…</option>
								<option>Yes — company provided</option>
								<option>Yes — allowance</option>
								<option>No</option>
							</Select>
						</Field>
						<Field id="transport" label="Transport provided?">
							<Select
								id="transport"
								name="transport"
								value={String(values.transport ?? "")}
								onChange={set("transport")}
							>
								<option value="">Select…</option>
								<option>Yes</option>
								<option>No</option>
							</Select>
						</Field>
						<Field id="food" label="Food / allowance">
							<Select
								id="food"
								name="food"
								value={String(values.food ?? "")}
								onChange={set("food")}
							>
								<option value="">Select…</option>
								<option>Yes — in kind</option>
								<option>Yes — allowance</option>
								<option>No</option>
							</Select>
						</Field>
						<Field
							id="notes"
							label="Additional notes"
							className="sm:col-span-2"
						>
							<TextArea
								id="notes"
								name="notes"
								value={String(values.notes ?? "")}
								onChange={set("notes")}
								placeholder="Site conditions, interview mode, rotation preference, anything the sourcing plan should respect."
							/>
						</Field>
						<Field
							id="demandLetter"
							label="Demand letter"
							error={errors.demandLetter}
							className="sm:col-span-2"
						>
							<FileInput
								id="demandLetter"
								name="demandLetter"
								invalid={!!errors.demandLetter}
								onChange={(f) => (filesRef.current.demandLetter = f)}
							/>
						</Field>
						<Field
							id="jobDescriptionDoc"
							label="Job description / spec"
							className="sm:col-span-2"
						>
							<FileInput
								id="jobDescriptionDoc"
								name="jobDescriptionDoc"
								invalid={false}
								onChange={(f) => (filesRef.current.jobDescription = f)}
							/>
						</Field>
						<Field
							id="otherDocs"
							label="Other documents"
							className="sm:col-span-2"
						>
							<FileInput
								id="otherDocs"
								name="otherDocs"
								invalid={false}
								onChange={(f) => (filesRef.current.other = f)}
							/>
						</Field>
						<div className="sm:col-span-2 lg:col-span-3">
							<Consent
								id="consent"
								checked={values.consent === true}
								onChange={(v) => setValues((s) => ({ ...s, consent: v }))}
								error={errors.consent}
							>
								I confirm I am authorised to submit this requirement on behalf
								of the company and consent to being contacted about it.{" "}
								<a
									href="/privacy"
									className="font-semibold text-brand-600 underline underline-offset-2"
								>
									Privacy notice
								</a>
								.
							</Consent>
						</div>
					</div>
				)}
			</div>

			<div className="flex flex-col-reverse items-stretch justify-between gap-3 border-t border-line bg-paper px-5 py-4 sm:flex-row sm:items-center md:px-8">
				<div className="text-[12px] text-muted">
					<span className="hidden sm:inline">Step {step + 1} of 3 · </span>
					Typical total:{" "}
					<strong className="text-navy">
						{positions.reduce(
							(a, p) => a + (parseInt(p.count || "0", 10) || 0),
							0,
						)}
					</strong>{" "}
					workers requested
				</div>
				<div className="flex gap-2.5">
					{step > 0 && (
						<button
							type="button"
							className="btn-outline btn-sm"
							onClick={() => setStep((s) => s - 1)}
						>
							<ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Back
						</button>
					)}
					{step < 2 ? (
						<button
							type="button"
							className="btn-navy btn-sm"
							onClick={() => {
								if (step === 0) {
									const errs = validateForm(values, step1Schema);
									setErrors(errs);
									if (Object.values(errs).some(Boolean)) {
										focusField(Object.keys(errs).find((k) => errs[k])!);
										return;
									}
								}
								setStep((s) => s + 1);
							}}
						>
							Continue <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
						</button>
					) : (
						<button
							type="submit"
							className="btn-primary btn-sm"
							disabled={sending}
						>
							{sending ? (
								"Submitting…"
							) : (
								<>
									Submit requirement{" "}
									<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
								</>
							)}
						</button>
					)}
				</div>
			</div>
		</form>
	);
}
