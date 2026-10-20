const API_URL = String(import.meta.env.VITE_FITPINE_API_URL || "").replace(/\/$/, "");
const SITE_KEY = String(import.meta.env.VITE_FITPINE_SITE_KEY || "").trim();

export type FranchiseApplicationInput = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  whatsapp: boolean;
  city: string;
  budget: string;
  message?: string;
  source?: string;
};

export type FranchiseApplicationResult =
  | { ok: true; emailed: boolean; message: string }
  | { ok: false; message: string };

/** Saves a franchise application and asks the API to email the applicant. */
export async function submitFranchiseApplication(
  input: FranchiseApplicationInput,
): Promise<FranchiseApplicationResult> {
  if (!API_URL || !SITE_KEY) {
    return {
      ok: false,
      message: "This form is not connected yet. Please call us or message us on WhatsApp.",
    };
  }

  try {
    const res = await fetch(`${API_URL}/api/public/franchise-applications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        siteKey: SITE_KEY,
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        mobile: input.mobile,
        whatsapp: input.whatsapp,
        city: input.city,
        budget: input.budget,
        message: input.message || "",
        source: input.source || "",
      }),
    });
    const data = (await res.json().catch(() => ({}))) as { error?: string; emailed?: boolean; message?: string };
    if (res.ok) {
      return {
        ok: true,
        emailed: Boolean(data.emailed),
        message: data.message || "Application received. Our team will call you within 48 hours.",
      };
    }
    return { ok: false, message: data.error || "Something went wrong. Please try again." };
  } catch {
    return { ok: false, message: "Could not reach us. Please try again or call us." };
  }
}
