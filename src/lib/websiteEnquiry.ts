const API_URL = String(import.meta.env.VITE_FITPINE_API_URL || "").replace(/\/$/, "");
const SITE_KEY = String(import.meta.env.VITE_FITPINE_SITE_KEY || "").trim();

export const WHATSAPP_TRIAL_NUMBER = "919116838715";

export function whatsAppTrialUrl(name = "", mobile = "") {
  const lines = ["Hi PowerFit! I want a free trial class."];
  if (name.trim()) lines.push(`Name: ${name.trim()}`);
  if (mobile.trim()) lines.push(`Mobile: ${mobile.trim()}`);
  return `https://wa.me/${WHATSAPP_TRIAL_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export type WebsiteEnquiryInput = {
  name: string;
  mobile: string;
  email?: string;
  message?: string;
  topic?: string;
};

export type WebsiteEnquiryResult =
  | { ok: true; already: boolean }
  | { ok: false; message: string };

/** Posts a lead into FitPineOS for the gym that owns this site's key. */
export async function submitWebsiteEnquiry(input: WebsiteEnquiryInput): Promise<WebsiteEnquiryResult> {
  if (!API_URL || !SITE_KEY) {
    return {
      ok: false,
      message: "This form is not connected yet. Please call us or message us on WhatsApp.",
    };
  }

  try {
    const res = await fetch(`${API_URL}/api/public/website-enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        siteKey: SITE_KEY,
        name: input.name,
        mobile: input.mobile,
        email: input.email || "",
        message: input.message || "",
        topic: input.topic || "Website",
      }),
    });
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    if (res.ok) return { ok: true, already: false };
    if (res.status === 409) return { ok: true, already: true };
    return { ok: false, message: data.error || "Something went wrong. Please try again." };
  } catch {
    return { ok: false, message: "Could not reach the gym. Please try again or call us." };
  }
}
