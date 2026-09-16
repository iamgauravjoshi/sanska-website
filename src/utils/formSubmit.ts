import companyConfig from "../data/companyConfig";
import { isPlaceholder } from "./placeholders";

/**
 * Single, isolated submission handler for all forms.
 *
 * This site is static. No fake backend exists:
 *  - If `companyConfig.forms.provider === "endpoint"`, the payload is POSTed as
 *    JSON to `forms.endpoint` (works out-of-the-box with Formspree, Web3Forms
 *    or any API accepting flat JSON fields).
 *  - Otherwise the payload is validated, returned to the UI and logged — and
 *    the UI shows a clear acknowledgement. Nothing is silently lost: the
 *    acknowledgement tells the visitor to also reach us by email/WhatsApp.
 *
 * Payload keys are deliberately flat & human-readable so an email endpoint can
 * render them without a backend transformation.
 */
export interface SubmitResult {
  ok: boolean;
  ref: string;
  simulated: boolean;
  error?: string;
}

function makeRef(prefix: string) {
  const d = new Date();
  const stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `${prefix}-${stamp}-${rand}`;
}

export async function submitForm(
  kind: "employer" | "candidate" | "contact",
  payload: Record<string, string | File | boolean | null | undefined>,
): Promise<SubmitResult> {
  const ref = makeRef(kind === "employer" ? "REQ" : kind === "candidate" ? "APP" : "MSG");
  const flat: Record<string, string> = { _ref: ref, _type: kind, _at: new Date().toISOString() };
  for (const [k, v] of Object.entries(payload)) {
    if (v === null || v === undefined) continue;
    flat[k] = v instanceof File ? `${v.name} (${Math.round(v.size / 1024)} KB) — file not uploaded in static mode` : String(v);
  }

  const endpoint = companyConfig.forms.endpoint;
  if (companyConfig.forms.provider === "endpoint" && !isPlaceholder(endpoint)) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(flat),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return { ok: true, ref, simulated: false };
    } catch (e) {
      return { ok: false, ref, simulated: false, error: e instanceof Error ? e.message : "Network error" };
    }
  }

  // Static mode — visible in console for the site owner during integration testing.
  console.info(`[sanska] ${kind} submission captured (no endpoint configured)`, flat);
  await new Promise((r) => setTimeout(r, 650)); // simulate latency so UX matches real integration
  return { ok: true, ref, simulated: true };
}
