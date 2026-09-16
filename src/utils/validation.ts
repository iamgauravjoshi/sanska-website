export type Rule = {
  required?: boolean | string;
  email?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  patternMsg?: string;
  int?: boolean;
  positive?: boolean;
  phone?: boolean;
  custom?: (value: unknown, all: Record<string, unknown>) => string | null;
};

export type FieldValues = Record<string, string | File | boolean | null | undefined>;
export type FieldErrors = Record<string, string | undefined>;

export function validateField(value: unknown, rules: Rule, all: FieldValues): string | null {
  const str = typeof value === "string" ? value.trim() : value;
  if (rules.required && (str === "" || str === null || str === undefined)) {
    return typeof rules.required === "string" ? rules.required : "This field is required.";
  }
  if (str === "" || str === null || str === undefined) return null;
  if (typeof str !== "string") return null;
  if (rules.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(str)) return "Enter a valid email address.";
  if (rules.phone && !/^\+?[\d\s\-().]{7,17}$/.test(str)) return "Enter a valid phone number (with country code).";
  if (rules.int && !/^\d+$/.test(str)) return "Enter a whole number.";
  if (rules.int && rules.positive && Number(str) <= 0) return "Must be greater than zero.";
  if (rules.min && str.length < rules.min) return `At least ${rules.min} characters.`;
  if (rules.max && str.length > rules.max) return `At most ${rules.max} characters.`;
  if (rules.pattern && !rules.pattern.test(str)) return rules.patternMsg ?? "Invalid format.";
  if (rules.custom) return rules.custom(str, all);
  return null;
}

export function validateForm(values: FieldValues, schema: Record<string, Rule>): FieldErrors {
  const errors: FieldErrors = {};
  for (const [key, rules] of Object.entries(schema)) {
    const err = validateField(values[key], rules, values);
    if (err) errors[key] = err;
  }
  return errors;
}

/** File input guard: type + size. */
export function validateFile(file: File | null | undefined, opts: { accept: string[]; maxMB: number; required?: boolean }): string | null {
  if (!file) return opts.required ? "Please attach a file." : null;
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!opts.accept.includes(ext)) return `Only ${opts.accept.join(", ").toUpperCase()} files are accepted.`;
  if (file.size > opts.maxMB * 1024 * 1024) return `File must be under ${opts.maxMB} MB.`;
  return null;
}
