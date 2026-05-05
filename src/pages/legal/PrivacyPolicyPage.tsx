import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_ORIGIN } from "@/config/site";

const LAST_UPDATED = "May 5, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | PowerFit India</title>
        <meta
          name="description"
          content="PowerFit India Privacy Policy. Learn what information we collect, how we use it, cookies, analytics, Shopify checkout, and how to contact us."
        />
        <link rel="canonical" href={`${SITE_ORIGIN}/privacy-policy`} />
        <meta property="og:title" content="Privacy Policy | PowerFit India" />
        <meta
          property="og:description"
          content="How PowerFit India collects and uses information across gym membership, franchise, gym setup, and shop experiences."
        />
      </Helmet>

      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <Navbar />

        <main className="pt-24 pb-20">
          <div className="max-w-[var(--content-max-width)] mx-auto px-[var(--gutter)]">
            <header className="mb-10">
              <p className="label-text text-zinc-400 tracking-[0.3em]">LEGAL</p>
              <h1 className="font-display text-4xl md:text-6xl text-white mt-3">Privacy Policy</h1>
              <p className="font-body text-zinc-400 mt-4 max-w-3xl leading-relaxed">
                This Privacy Policy explains how PowerFit India (“PowerFit”, “we”, “our”, “us”) collects, uses, shares,
                and protects your information when you use our website, enquire about gym membership, franchise, or gym
                setup services, or shop products that may checkout via Shopify.
              </p>
              <p className="font-body text-xs text-zinc-500 mt-4">Last updated: {LAST_UPDATED}</p>
            </header>

            <section className="space-y-10">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">What we collect</h2>
                <div className="mt-4 space-y-4 text-sm text-zinc-300 leading-relaxed">
                  <p>
                    We collect information you provide directly, information collected automatically when you use the
                    site, and information from third parties involved in checkout or analytics.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong className="text-white">Contact & enquiry details</strong> (e.g., name, phone number,
                      email, city, preferred branch, fitness goals) when you submit forms or contact us via WhatsApp,
                      email, or call.
                    </li>
                    <li>
                      <strong className="text-white">Transaction-related data</strong> for purchases routed to Shopify
                      checkout (e.g., products viewed, cart contents). Payment details are processed by Shopify and/or
                      payment providers—not stored by us on this website.
                    </li>
                    <li>
                      <strong className="text-white">Usage data</strong> such as pages visited, approximate location
                      (city/region), device type, browser, referral source, and performance metrics.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">How we use your information</h2>
                <div className="mt-4 text-sm text-zinc-300 leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Respond to enquiries and provide information about memberships, programs, gym setups, or franchise opportunities.</li>
                    <li>Schedule visits, trials, consultations, quotes, and follow-ups.</li>
                    <li>Operate and improve the website (performance, UX, troubleshooting, and security).</li>
                    <li>Send service-related messages (e.g., updates about your enquiry, appointment confirmations).</li>
                    <li>Measure marketing effectiveness and improve content relevance.</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">Cookies & analytics</h2>
                <div className="mt-4 space-y-3 text-sm text-zinc-300 leading-relaxed">
                  <p>
                    We may use cookies and similar technologies to keep the site working, remember preferences, and
                    understand usage. You can control cookies through your browser settings. Disabling cookies may
                    affect site functionality.
                  </p>
                  <p>
                    We may use analytics tools to understand how visitors use the site. These tools may collect
                    information like device identifiers, IP address (often processed in a truncated or aggregated form),
                    and page interactions.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">Sharing of information</h2>
                <div className="mt-4 space-y-3 text-sm text-zinc-300 leading-relaxed">
                  <p>We do not sell your personal information. We may share information in the following cases:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong className="text-white">Service providers</strong> who help us run the website, manage
                      communications, or provide analytics.
                    </li>
                    <li>
                      <strong className="text-white">Shopify</strong> when you proceed to checkout for products; Shopify
                      processes orders and payments under its own policies.
                    </li>
                    <li>
                      <strong className="text-white">Legal & safety</strong> when required by law, to respond to lawful
                      requests, or to protect our rights and users.
                    </li>
                    <li>
                      <strong className="text-white">Business transfers</strong> if we are involved in a merger,
                      acquisition, or asset sale (information may be transferred as part of that transaction).
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">Data retention & security</h2>
                <div className="mt-4 space-y-3 text-sm text-zinc-300 leading-relaxed">
                  <p>
                    We keep information only as long as needed for the purposes described above, unless a longer
                    retention period is required by law.
                  </p>
                  <p>
                    We use reasonable administrative, technical, and physical safeguards designed to protect your
                    information. No method of transmission or storage is 100% secure.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">Your choices</h2>
                <div className="mt-4 text-sm text-zinc-300 leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>You can request access, correction, or deletion of your information where applicable.</li>
                    <li>You can opt out of non-essential marketing messages by contacting us.</li>
                    <li>You can control cookies through your browser settings.</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">Contact us</h2>
                <div className="mt-4 space-y-2 text-sm text-zinc-300 leading-relaxed">
                  <p>If you have questions about this Privacy Policy, contact us:</p>
                  <p className="text-white font-semibold">PowerFit India</p>
                  <p>
                    Email:{" "}
                    <a className="underline underline-offset-4 hover:text-white" href="mailto:hello@powerfitindia.com">
                      hello@powerfitindia.com
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a className="underline underline-offset-4 hover:text-white" href={SITE_ORIGIN} target="_blank" rel="noopener noreferrer">
                      {SITE_ORIGIN}
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

