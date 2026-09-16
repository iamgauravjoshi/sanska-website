import React, { useMemo, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Consent, Field, FormErrorSummary, Select, TextArea, TextInput } from "../FormKit";
import { validateForm, type FieldErrors, type FieldValues } from "../../utils/validation";
import { submitForm } from "../../utils/formSubmit";

export default function ContactForm() {
  const [values, setValues] = useState<FieldValues>({});
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<{ ref: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const schema = useMemo(
    () => ({
      name: { required: "Your name is required." },
      email: { required: "Email is required.", email: true },
      subject: { required: "Choose a subject." },
      message: { required: "Please write your message.", min: 20 },
      consent: { required: "Please confirm consent." },
    }),
    [],
  );

  const focusField = (name: string) => formRef.current?.querySelector<HTMLElement>(`[name="${name}"]`)?.focus();
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateForm(values, schema);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) {
      focusField(Object.keys(errs).find((k) => errs[k])!);
      return;
    }
    setSending(true);
    const res = await submitForm("contact", values);
    setSending(false);
    if (res.ok) setDone({ ref: res.ref });
    else setErrors({ _submit: `Submission failed (${res.error}).` });
  }

  if (done) {
    return (
      <div className="card-x p-8 text-center" role="status" aria-live="polite">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-mint text-leaf-700 ring-1 ring-leaf/30">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="font-display text-[19px] font-extrabold text-navy">Message captured — ref {done.ref}</h3>
        <p className="mx-auto mt-2 max-w-sm text-[13.5px] leading-relaxed text-muted">
          For time-sensitive requirements please also reach us via the contact channels on this page.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={submit} noValidate aria-label="General contact form" className="card-x p-5 md:p-7">
      <FormErrorSummary errors={errors} onFocusField={focusField} />
      {errors._submit && <p className="field-error mb-4" role="alert">{errors._submit}</p>}
      <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name}>
          <TextInput id="name" name="name" autoComplete="name" value={String(values.name ?? "")} onChange={set("name")} invalid={!!errors.name} />
        </Field>
        <Field id="company" label="Company">
          <TextInput id="company" name="company" autoComplete="organization" value={String(values.company ?? "")} onChange={set("company")} />
        </Field>
        <Field id="cemail" label="Email" required error={errors.email}>
          <TextInput id="cemail" name="email" type="email" autoComplete="email" value={String(values.email ?? "")} onChange={set("email")} invalid={!!errors.email} />
        </Field>
        <Field id="cphone" label="Phone / WhatsApp">
          <TextInput id="cphone" name="phone" type="tel" autoComplete="tel" value={String(values.phone ?? "")} onChange={set("phone")} />
        </Field>
        <Field id="ccountry" label="Country">
          <TextInput id="ccountry" name="country" value={String(values.country ?? "")} onChange={set("country")} />
        </Field>
        <Field id="subject" label="Subject" required error={errors.subject}>
          <Select id="subject" name="subject" value={String(values.subject ?? "")} onChange={set("subject")} invalid={!!errors.subject}>
            <option value="">Select…</option>
            <option>Manpower requirement (employer)</option>
            <option>Candidate enquiry</option>
            <option>Partnership / vendor registration</option>
            <option>Documentation question</option>
            <option>Other</option>
          </Select>
        </Field>
        <Field id="message" label="Message" required error={errors.message} className="sm:col-span-2">
          <TextArea id="message" name="message" value={String(values.message ?? "")} onChange={set("message")} invalid={!!errors.message} placeholder="Briefly describe what you need — trade, volume, destination — and we route it to the right desk." />
        </Field>
        <div className="sm:col-span-2">
          <Consent id="tconsent" checked={values.consent === true} onChange={(v) => setValues((s) => ({ ...s, consent: v }))} error={errors.consent}>
            I consent to Sanska International contacting me about this enquiry per the{" "}
            <a href="/privacy" className="font-semibold text-brand-600 underline underline-offset-2">Privacy Policy</a>.
          </Consent>
        </div>
      </div>
      <button type="submit" className="btn-navy mt-6 w-full sm:w-auto" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
