import React from "react";
import { AlertCircle } from "lucide-react";

/** Shared, accessible form primitives used by all three site forms. */

export function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
  className = "",
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-w-0 ${className}`}>
      <label htmlFor={id} className="field-label">
        {label} {required && <span className="text-[#b03a29]" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1 text-[12px] text-muted">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="field-error" role="alert">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  const { invalid, ...rest } = props;
  return <input {...rest} className="field-input" aria-invalid={invalid || undefined} aria-describedby={invalid ? `${rest.id}-error` : rest["aria-describedby"]} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }) {
  const { invalid, ...rest } = props;
  return <textarea {...rest} className="field-input min-h-[110px] resize-y" aria-invalid={invalid || undefined} aria-describedby={invalid ? `${rest.id}-error` : rest["aria-describedby"]} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }) {
  const { invalid, ...rest } = props;
  return <select {...rest} className="field-input" aria-invalid={invalid || undefined} aria-describedby={invalid ? `${rest.id}-error` : rest["aria-describedby"]} />;
}

export function FileInput({
  id,
  accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp",
  invalid,
  onChange,
  name,
}: {
  id: string;
  accept?: string;
  invalid?: boolean;
  onChange: (file: File | null) => void;
  name: string;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-center justify-between gap-3 rounded-md border border-dashed border-[#c4d3da] bg-paper px-4 py-3 text-[13px] transition-colors hover:border-brand/60 hover:bg-ice ${invalid ? "border-[#c2402f]" : ""}`}
    >
      <span className="truncate text-muted">
        <span className="font-bold text-navy">Attach file</span> — PDF, DOC, JPG or PNG · max 5 MB
      </span>
      <span className="shrink-0 rounded-md bg-white px-3 py-1.5 text-[12px] font-bold text-brand-700 ring-1 ring-line">Browse</span>
      <input
        id={id}
        name={name}
        type="file"
        accept={accept}
        className="sr-only"
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
    </label>
  );
}

export function Consent({
  id,
  checked,
  onChange,
  error,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 rounded-md border border-line bg-white p-4 text-[13px] leading-relaxed text-muted">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 shrink-0 accent-[#0876A0]"
          style={{ height: 18, width: 18 }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        <span>{children}</span>
      </label>
      {error && (
        <p id={`${id}-error`} className="field-error" role="alert">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
}

export function FormErrorSummary({ errors, onFocusField }: { errors: Record<string, string | undefined>; onFocusField: (name: string) => void }) {
  const list = Object.entries(errors).filter(([, v]) => v) as Array<[string, string]>;
  if (list.length === 0) return null;
  return (
    <div role="alert" aria-live="assertive" className="mb-5 rounded-md border border-[#e4c0b8] bg-[#fdf1ef] p-4">
      <p className="font-display text-[13.5px] font-bold text-[#96352a]">Please correct {list.length} field{list.length > 1 ? "s" : ""} below:</p>
      <ul className="mt-2 space-y-1 text-[13px] text-[#b03a29]">
        {list.map(([k, v]) => (
          <li key={k}>
            <button type="button" className="underline-offset-2 hover:underline" onClick={() => onFocusField(k)}>
              {v}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
