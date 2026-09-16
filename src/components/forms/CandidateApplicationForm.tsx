import React, { useMemo, useRef, useState } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { CTAButton } from "../Buttons";
import { Consent, Field, FileInput, FormErrorSummary, Select, TextArea, TextInput } from "../FormKit";
import { roleGroups } from "../../data/jobs";
import { validateForm, validateFile, type FieldErrors, type FieldValues } from "../../utils/validation";
import { submitForm } from "../../utils/formSubmit";

export default function CandidateApplicationForm() {
  const [values, setValues] = useState<FieldValues>({});
  const [errors, setErrors] = useState<FieldErrors>({});
  const [files, setFiles] = useState<Record<string, File | null>>({ cv: null, passport: null, certificates: null });
  const [fileErrors, setFileErrors] = useState<FieldErrors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<{ ref: string; simulated: boolean } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const schema = useMemo(
    () => ({
      fullName: { required: "Full name is required (as in passport).", min: 3 },
      mobile: { required: "Mobile number is required.", phone: true },
      email: { required: "Email is required.", email: true },
      city: { required: "Current city is required." },
      state: { required: "State is required." },
      trade: { required: "Select your trade / profession." },
      experience: { required: "Years of experience is required.", int: true, positive: true, pattern: /^\d{1,2}$/, patternMsg: "Enter years (e.g. 4)." },
      preferredCountry: { required: "Select a preferred destination." },
      consent: { required: "Please confirm consent to continue." },
    }),
    [],
  );

  const focusField = (name: string) => {
    const el = formRef.current?.querySelector<HTMLElement>(`[name="${name}"]`);
    el?.focus();
    el?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateForm(values, schema);
    const fErrs: FieldErrors = {};
    const cv = validateFile(files.cv, { accept: ["pdf", "doc", "docx"], maxMB: 5, required: true });
    if (cv) fErrs.cv = cv;
    const pp = validateFile(files.passport, { accept: ["pdf", "jpg", "jpeg", "png", "webp"], maxMB: 5 });
    if (pp) fErrs.passport = pp;
    const ct = validateFile(files.certificates, { accept: ["pdf", "jpg", "jpeg", "png", "webp"], maxMB: 5 });
    if (ct) fErrs.certificates = ct;
    const all = { ...errs, ...fErrs };
    setErrors(errs);
    setFileErrors(fErrs);
    if (Object.values(all).some(Boolean)) {
      focusField(Object.keys(all).find((k) => all[k]) ?? "fullName");
      return;
    }
    setSending(true);
    const res = await submitForm("candidate", { ...values, cv: files.cv, passport: files.passport, certificates: files.certificates });
    setSending(false);
    if (res.ok) setDone({ ref: res.ref, simulated: res.simulated });
    else setErrors({ _submit: `Submission failed (${res.error}). Please try again.` });
  }

  if (done) {
    return (
      <div className="card-x p-8 text-center md:p-12" role="status" aria-live="polite">
        <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-mint text-leaf-700 ring-1 ring-leaf/30">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="font-display text-[22px] font-extrabold text-navy">Application received — {done.ref}</h3>
        <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-muted">
          Your profile enters our talent pool for matching verified employer requirements. Keep your reference number for follow-up.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">
          <CTAButton to="/recruitment-process" variant="navy">See how selection works</CTAButton>
          <CTAButton to="/job-categories" variant="outline" withArrow={false}>Browse role categories</CTAButton>
        </div>
        {done.simulated && (
          <p className="mx-auto mt-7 max-w-md border-t border-line pt-4 text-[11.5px] leading-relaxed text-[#93a4ad]">
            Site admin note: online intake is not yet connected to a mailbox (FORMS_ENDPOINT unset in <code>src/data/companyConfig.ts</code>) — in this static build submissions are validated client-side only.
          </p>
        )}
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={submit} noValidate aria-label="Overseas jobs application form" className="card-x p-5 md:p-8">
      <FormErrorSummary errors={{ ...errors, ...fileErrors }} onFocusField={focusField} />
      {errors._submit && <p className="field-error mb-4" role="alert">{errors._submit}</p>}

      <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
        <Field id="fullName" label="Full name (as in passport)" required error={errors.fullName}>
          <TextInput id="fullName" name="fullName" autoComplete="name" value={String(values.fullName ?? "")} onChange={set("fullName")} invalid={!!errors.fullName} />
        </Field>
        <Field id="mobile" label="Mobile number" required error={errors.mobile} hint="With country code, e.g. +91.">
          <TextInput id="mobile" name="mobile" type="tel" autoComplete="tel" value={String(values.mobile ?? "")} onChange={set("mobile")} invalid={!!errors.mobile} />
        </Field>
        <Field id="whatsapp" label="WhatsApp number">
          <TextInput id="whatsapp" name="whatsapp" type="tel" value={String(values.whatsapp ?? "")} onChange={set("whatsapp")} />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <TextInput id="email" name="email" type="email" autoComplete="email" value={String(values.email ?? "")} onChange={set("email")} invalid={!!errors.email} />
        </Field>
        <Field id="city" label="Current city" required error={errors.city}>
          <TextInput id="city" name="city" value={String(values.city ?? "")} onChange={set("city")} invalid={!!errors.city} />
        </Field>
        <Field id="state" label="State" required error={errors.state}>
          <TextInput id="state" name="state" value={String(values.state ?? "")} onChange={set("state")} invalid={!!errors.state} />
        </Field>

        <Field id="trade" label="Trade / profession" required error={errors.trade}>
          <Select id="trade" name="trade" value={String(values.trade ?? "")} onChange={set("trade")} invalid={!!errors.trade}>
            <option value="">Select your role family…</option>
            {roleGroups.map((g) => (
              <optgroup key={g.slug} label={g.industry}>
                {g.roles.map((r) => (
                  <option key={r.title}>{r.title}</option>
                ))}
              </optgroup>
            ))}
            <option>Other</option>
          </Select>
        </Field>
        <Field id="experience" label="Years of experience" required error={errors.experience}>
          <TextInput id="experience" name="experience" inputMode="numeric" value={String(values.experience ?? "")} onChange={set("experience")} invalid={!!errors.experience} placeholder="e.g. 4" />
        </Field>
        <Field id="preferredCountry" label="Preferred country" required error={errors.preferredCountry}>
          <Select id="preferredCountry" name="preferredCountry" value={String(values.preferredCountry ?? "")} onChange={set("preferredCountry")} invalid={!!errors.preferredCountry}>
            <option value="">Select…</option>
            {["United Arab Emirates", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain", "Israel", "Mauritius", "European market (specify in message)", "Any suitable market"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </Select>
        </Field>
        <Field id="passportStatus" label="Passport status">
          <Select id="passportStatus" name="passportStatus" value={String(values.passportStatus ?? "")} onChange={set("passportStatus")}>
            <option value="">Select…</option>
            <option>Valid — more than 12 months</option>
            <option>Valid — less than 12 months</option>
            <option>Applied, not received</option>
            <option>No passport yet</option>
          </Select>
        </Field>
        <Field id="employmentStatus" label="Current employment status">
          <Select id="employmentStatus" name="employmentStatus" value={String(values.employmentStatus ?? "")} onChange={set("employmentStatus")}>
            <option value="">Select…</option>
            <option>Employed in India</option>
            <option>Self-employed</option>
            <option>Currently unemployed</option>
            <option>Employed overseas (on visit/home)</option>
          </Select>
        </Field>
        <Field id="expectedSalary" label="Expected salary (INR/month)" hint="Optional — helps us match employer bands.">
          <TextInput id="expectedSalary" name="expectedSalary" value={String(values.expectedSalary ?? "")} onChange={set("expectedSalary")} placeholder="e.g. 45,000" />
        </Field>

        <Field id="cv" label="CV / biodata" required error={fileErrors.cv}>
          <FileInput id="cv" name="cv" invalid={!!fileErrors.cv} onChange={(f) => setFiles((s) => ({ ...s, cv: f }))} />
        </Field>
        <Field id="passport" label="Passport copy (optional)" error={fileErrors.passport}>
          <FileInput id="passport" name="passport" invalid={!!fileErrors.passport} onChange={(f) => setFiles((s) => ({ ...s, passport: f }))} />
        </Field>
        <Field id="certificates" label="Certificates (optional)" error={fileErrors.certificates}>
          <FileInput id="certificates" name="certificates" invalid={!!fileErrors.certificates} onChange={(f) => setFiles((s) => ({ ...s, certificates: f }))} />
        </Field>

        <Field id="message" label="Message to the recruitment team" className="sm:col-span-2">
          <TextArea id="message" name="message" value={String(values.message ?? "")} onChange={set("message")} placeholder="Certifications, visa history, notice period, anything relevant." />
        </Field>

        <div className="sm:col-span-2">
          <p className="mb-4 flex items-start gap-3 rounded-md border border-[#e8cf8f] bg-[#fdf6e3] p-4 text-[12.5px] leading-relaxed text-[#6d4e05]">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#a57708]" aria-hidden="true" />
            <span>
              <strong className="font-bold">Candidate safety notice.</strong> Verify official communication from Sanska before sharing sensitive documents or making any payment. No legitimate recruitment step requires you to hand over original passports as deposit.
            </span>
          </p>
        </div>

        <div className="sm:col-span-2">
          <Consent id="cconsent" checked={values.consent === true} onChange={(v) => setValues((s) => ({ ...s, consent: v }))} error={errors.consent}>
            I confirm my details are accurate and consent to Sanska International storing and assessing my profile for overseas job matching, per the{" "}
            <a href="/privacy" className="font-semibold text-brand-600 underline underline-offset-2">Privacy Policy</a>.
          </Consent>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] text-muted">Submitting does not guarantee interview calls or employment.</p>
        <button type="submit" className="btn-green" disabled={sending}>
          {sending ? "Submitting…" : "Submit application"}
        </button>
      </div>
    </form>
  );
}
