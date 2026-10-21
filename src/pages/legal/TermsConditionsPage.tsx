import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_ORIGIN } from "@/config/site";

const LAST_UPDATED = "May 5, 2026";

export default function TermsConditionsPage() {
  return (
    <>
      <Helmet>
        <title>Terms &amp; Conditions | PowerFit India</title>
        <meta
          name="description"
          content="PowerFit India Terms & Conditions. Website usage rules, enquiries, memberships, programs, gym setup services, Shopify checkout, and limitations of liability."
        />
        <link rel="canonical" href={`${SITE_ORIGIN}/terms-conditions`} />
        <meta property="og:title" content="Terms & Conditions | PowerFit India" />
        <meta
          property="og:description"
          content="Terms for using the PowerFit India website and related services (membership, gym setup, franchise, and shopping checkout)."
        />
      </Helmet>

      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <Navbar />

        <main className="pt-24 pb-20">
          <div className="max-w-[var(--content-max-width)] mx-auto px-[var(--gutter)]">
            <header className="mb-10">
              <p className="label-text text-zinc-400 tracking-[0.3em]">LEGAL</p>
              <h1 className="font-display text-4xl md:text-6xl text-white mt-3">Terms &amp; Conditions</h1>
              <p className="font-body text-zinc-400 mt-4 max-w-3xl leading-relaxed">
                These Terms &amp; Conditions (“Terms”) govern your use of the PowerFit India website and any enquiries
                or interactions you initiate through it. By accessing or using the site, you agree to these Terms.
              </p>
              <p className="font-body text-xs text-zinc-500 mt-4">Last updated: {LAST_UPDATED}</p>
            </header>

            <section className="space-y-10">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">1) About PowerFit</h2>
                <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                  “PowerFit India” refers to our fitness ecosystem including premium gyms/studios, programs, gym setup
                  services, franchise opportunities, and our online product catalog. Availability of services may vary
                  by city and location.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">2) Website use</h2>
                <div className="mt-4 text-sm text-zinc-300 leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>You agree to use the site only for lawful purposes and in a way that does not harm others.</li>
                    <li>You must not attempt to interfere with the site’s security, performance, or availability.</li>
                    <li>We may update, suspend, or discontinue parts of the site at any time.</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">3) Enquiries, calls, and WhatsApp</h2>
                <div className="mt-4 space-y-3 text-sm text-zinc-300 leading-relaxed">
                  <p>
                    When you submit an enquiry (membership, gym setup, or franchise) or contact us via WhatsApp/call,
                    you authorize us to respond using the contact details you provide. Message and carrier rates may
                    apply depending on your plan and provider.
                  </p>
                  <p>
                    We aim to keep information accurate, but we do not guarantee that every page is complete, current,
                    or error-free at all times.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">4) Memberships & programs</h2>
                <div className="mt-4 text-sm text-zinc-300 leading-relaxed space-y-3">
                  <p>
                    Membership plans, program schedules, trainer availability, and included benefits may differ by
                    studio and can change over time. Final terms (pricing, duration, freeze/transfer rules, and refund
                    eligibility) are confirmed at the time of purchase or sign-up and may be governed by studio-level
                    agreements.
                  </p>
                  <p>
                    Fitness results vary by individual. Any transformations, statistics, or timelines shown on the site
                    are indicative and not guarantees.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">5) Gym setup services</h2>
                <div className="mt-4 text-sm text-zinc-300 leading-relaxed space-y-3">
                  <p>
                    Quotes, timelines, and deliverables for gym setups depend on your requirements, space, city,
                    inventory availability, and site conditions. Any drawings, layouts, and recommendations are provided
                    as professional suggestions and may require adjustments during execution.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">6) Online shopping & checkout</h2>
                <div className="mt-4 text-sm text-zinc-300 leading-relaxed space-y-3">
                  <p>
                    Product browsing may happen on this site, while checkout can be processed on Shopify. Orders,
                    payments, shipping, returns, and refunds are governed by the applicable Shopify checkout policies
                    and any store-specific terms presented at checkout.
                  </p>
                  <p>
                    Product photos are representative; actual colors/finishes may vary due to lighting, manufacturing,
                    or screen settings.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">7) Intellectual property</h2>
                <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                  The site content—including branding, designs, text, and media—is owned by or licensed to PowerFit and
                  is protected by applicable laws. You may not copy, reproduce, distribute, or create derivative works
                  without written permission, except as allowed by law.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">8) Disclaimers & limitation of liability</h2>
                <div className="mt-4 text-sm text-zinc-300 leading-relaxed space-y-3">
                  <p>
                    The site is provided on an “as is” and “as available” basis. To the maximum extent permitted by law,
                    we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.
                  </p>
                  <p>
                    To the maximum extent permitted by law, PowerFit will not be liable for indirect, incidental,
                    special, consequential, or punitive damages, or any loss of profits or data, arising from your use
                    of the site.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">9) Changes to these Terms</h2>
                <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                  We may update these Terms from time to time. Changes will be posted on this page with an updated “Last
                  updated” date. Your continued use of the site after changes means you accept the updated Terms.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl">10) Contact</h2>
                <div className="mt-4 space-y-2 text-sm text-zinc-300 leading-relaxed">
                  <p>
                    Email:{" "}
                    <a className="underline underline-offset-4 hover:text-white" href="mailto:contact@powerfitindia.com">
                      contact@powerfitindia.com
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

