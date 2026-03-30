import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsHero from "@/components/programs/ProgramsHero";
import RopeScrollIndicator from "@/components/programs/RopeScrollIndicator";
import ProgramCategory from "@/components/programs/ProgramCategory";
import ProgramModal from "@/components/programs/ProgramModal";
import ProgramStats from "@/components/programs/ProgramStats";
import ProgramFAQ, { programFaqs } from "@/components/programs/ProgramFAQ";
import ProgramCTA from "@/components/programs/ProgramCTA";
import { programCategories, programs, type Program } from "@/data/programs";

const studios = [
  { name: "PowerFit Malviya Nagar", address: "Floor A-19, 2nd & 3rd Floor, Girdhar Marg, Ashok Vihar, Sector 12, Jaipur, Rajasthan 302017", tel: "+919680742912", lat: "26.8469", lng: "75.8012" },
  { name: "PowerFit Mansarovar", address: "103/68, Deep Mansion Sector 103, Madhyam Marg, Mansarovar, Jaipur, Rajasthan 302020", tel: "+917597683500", lat: "26.8508", lng: "75.7654" },
  { name: "PowerFit Piprali Road, Sikar", address: "1st Floor, Ganpati Plaza, Piprali Road, Sikar, Rajasthan 332001", tel: "+918440862854", lat: "27.6094", lng: "75.1399" },
  { name: "PowerFit Vasant Vihar, Sikar", address: "Collector House, Sanskar Apartment, Vasant Vihar, Sikar, Rajasthan 332001", tel: "+917792800722", lat: "27.6150", lng: "75.1450" },
  { name: "PowerFit Rani Sati Road, Sikar", address: "Near Bioscope Mall, Shastri Nagar, Sikar, Rajasthan 332001", tel: "+917597682600", lat: "27.6200", lng: "75.1500" },
];

export default function Programs() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Program | null>(null);

  const filteredPrograms = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return programs;
    return programs.filter((p) => {
      const hay = `${p.name} ${p.tagline} ${p.description} ${p.category} ${p.bestFor.join(" ")} ${p.programHighlights.join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  const itemListSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "PowerFit India Fitness Programs",
      description: "Complete list of fitness programs at PowerFit India gyms",
      numberOfItems: programs.length,
      itemListElement: programs.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Course",
          name: p.name,
          description: p.tagline,
          url: `https://powerfitindia.com/programs/${p.slug}`,
        },
      })),
    }),
    [],
  );

  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: programFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }),
    [],
  );

  const healthClubSchemas = useMemo(
    () =>
      studios.map((g) => ({
        "@context": "https://schema.org",
        "@type": "HealthClub",
        name: g.name,
        address: { "@type": "PostalAddress", streetAddress: g.address, addressCountry: "IN" },
        telephone: g.tel,
        geo: { "@type": "GeoCoordinates", latitude: g.lat, longitude: g.lng },
      })),
    [],
  );

  return (
    <>
      <Helmet>
        <title>Fitness Programs in Jaipur &amp; Sikar | Yoga, HIIT, CrossFit, Zumba &amp; More | PowerFit India</title>
        <meta
          name="description"
          content="Explore 20+ fitness programs at PowerFit India — Yoga, HIIT, CrossFit, Zumba, Strength Training, Weight Loss & more. Real results from 10,000+ members. Join a studio in Jaipur or Sikar, or train online."
        />
        <link rel="canonical" href="https://powerfitindia.com/programs" />

        <link rel="preload" as="https://images.unsplash.com/photo-1723406251847-168ea7a02077?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <link rel="preload" as="image" href="/images/programs/crossfit.jpg" />
        <link rel="preload" as="image" href="/images/programs/hiit.jpg" />

        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        {healthClubSchemas.map((s, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(s)}
          </script>
        ))}
      </Helmet>

      <div className="min-h-screen bg-dark">
        <Navbar />

        <main>
          <ProgramsHero query={query} onQueryChange={setQuery} />

          <section className="section-dark py-3 border-y border-white/5" style={{ backgroundColor: "#111111" }}>
            <div className="overflow-hidden">
              <div className="marquee-track whitespace-nowrap flex-shrink-0">
                <div className="flex w-1/2 items-center gap-3 text-white/90 text-xs tracking-widest px-6 py-2">
                  <span className="text-white">💪 Avg. 8.3kg Lost in 90 Days (Weight Loss Program)</span>
                  <span>🏋️ Avg. 12% Strength Gain in 60 Days</span>
                  <span>🧘 94% Report Better Sleep (Yoga Members)</span>
                  <span>❤️ Avg. Resting HR drops 11 BPM in 3 Months</span>
                  <span>🔥 HIIT Members Burn 2.3x More Calories vs Standard Cardio</span>
                  <span>📊 Based on 10,000+ PowerFit Members</span>
                </div>
              </div>
            </div>
          </section>

          <section className="section-dark pt-10 pb-2">
            <div className="section-container">
              <p className="text-xs text-zinc-400 leading-relaxed">
                PowerFit India offers 12+ specialized fitness programs across 6 categories — Strength Training, CrossFit, HIIT, Functional Fitness, Yoga,
                Zumba, Weight Loss, Muscle Gain, Women's Fitness, Kickboxing, Senior Fitness, and Online Coaching. Programs are available at PowerFit
                studios in Jaipur (Malviya Nagar, Mansarovar) and Sikar (Piprali Road, Vasant Vihar, Rani Sati Road), as well as online across India.
                Results are based on real data from 10,000+ members tracked via InBody body composition scans and certified trainer assessments since 2017.
              </p>
            </div>
          </section>

          <div id="programs-grid" />

          {programCategories.map((c, idx) => (
            <div key={c.id}>
              <ProgramCategory
                category={c}
                index={idx}
                programs={filteredPrograms.filter((p) => p.categoryId === c.id)}
                onOpen={(p) => setActive(p)}
              />
            </div>
          ))}
          <ProgramStats />
          <ProgramFAQ />
          <ProgramCTA />
        </main>

        <Footer />

        <ProgramModal program={active} open={!!active} onClose={() => setActive(null)} />
      </div>
    </>
  );
}

