import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryThemeProvider from "@/components/programs/category/CategoryThemeProvider";
import CategoryHero from "@/components/programs/category/CategoryHero";
import ProgramDetailSection from "@/components/programs/category/ProgramDetailSection";
import ProgramCtaStrip from "@/components/programs/category/ProgramCtaStrip";
import ProgramCompareTable from "@/components/programs/category/ProgramCompareTable";
import TestimonialSlider, { type Testimonial } from "@/components/programs/category/TestimonialSlider";
import FreeTrial from "@/components/programs/category/FreeTrial";
import CategoryFAQ from "@/components/programs/category/CategoryFAQ";
import ExploreOtherCategories from "@/components/programs/category/ExploreOtherCategories";
import FinalStickyCTA from "@/components/programs/category/FinalStickyCTA";
import StickyEnquireBar from "@/components/programs/category/StickyEnquireBar";
import { categoryThemes } from "@/config/categoryThemes";
import { programs } from "@/data/programs";
import { MostPopularBadge } from "@/components/ui/MostPopularBadge";

const theme = categoryThemes.strength;

const testimonials: Testimonial[] = [
  {
    quote:
      "I joined PowerFit Strength Training as a complete beginner. In 45 days I lifted my first 100kg deadlift. The trainer knew exactly how to push me without injury.",
    name: "Rohit S.",
    location: "Malviya Nagar",
    rating: 5,
    waMessage: "Hi! I want to join Strength Training at PowerFit. Please share batch timings and fee details.",
  },
  {
    quote: "CrossFit at PowerFit destroyed me in the best way possible. Lost 4kg and gained visible muscle in 60 days.",
    name: "Amit K.",
    location: "Mansarovar",
    rating: 5,
    waMessage: "Hi! I want to join CrossFit at PowerFit. Please share batch timings and fee details.",
  },
  {
    quote: "The Muscle Gain program is scientific. My trainer tracked every set, every macro. 5.8kg muscle in 4 months.",
    name: "Vikas M.",
    location: "Jaipur",
    rating: 5,
    waMessage: "Hi! I want to join the Muscle Gain program at PowerFit. Please share batch timings and fee details.",
  },
];

export default function StrengthPage() {
  const categoryPrograms = [...programs.filter((p) => p.categoryId === theme.id)].sort(
    (a, b) => Number(!!b.isMostPopular) - Number(!!a.isMostPopular),
  );

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `PowerFit ${theme.label} Programs`,
    numberOfItems: categoryPrograms.length,
    itemListElement: categoryPrograms.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      description: p.tagline,
      url: `https://powerfitindia.com/program/${p.slug}`,
    })),
  };

  return (
    <CategoryThemeProvider theme={theme}>
      <Helmet>
        <title>{theme.metaTitle}</title>
        <meta name="description" content={theme.metaDesc} />
        <link rel="canonical" href={`https://powerfitindia.com/programs/${theme.id}`} />
        <meta property="og:title" content={theme.metaTitle} />
        <meta property="og:description" content={theme.metaDesc} />
        <meta property="og:image" content={theme.heroImage} />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-dark">
        <Navbar />

        <main className="pb-24 lg:pb-0">
          <p className="sr-only">
            {`PowerFit India offers ${categoryPrograms.length} ${theme.label} programs at fitness studios in Jaipur and Sikar, Rajasthan. Programs include: ${categoryPrograms
              .map((p) => p.name)
              .join(", ")}. Free trial available. WhatsApp: +91 8619527263.`}
          </p>

          <CategoryHero theme={theme} programs={categoryPrograms} />

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl mx-[var(--gutter)] mb-12 max-w-[var(--content-max-width)] xl:mx-auto"
            style={{
              background: "linear-gradient(135deg, #0A0A0A 0%, rgba(234,179,8,0.2) 40%, rgba(232,0,14,0.15) 100%)",
              border: "2px solid rgba(234,179,8,0.4)",
              boxShadow: "0 0 60px rgba(234,179,8,0.15)",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(234,179,8,0.3), transparent)",
                  "linear-gradient(90deg, rgba(234,179,8,0.3), transparent)",
                  "linear-gradient(180deg, rgba(234,179,8,0.3), transparent)",
                  "linear-gradient(270deg, rgba(234,179,8,0.3), transparent)",
                  "linear-gradient(360deg, rgba(234,179,8,0.3), transparent)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ opacity: 0.3 }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-10">
              <div className="flex flex-col justify-center">
                <MostPopularBadge animated={false} size="md" className="self-start mb-4" />

                <motion.h2
                  className="text-4xl lg:text-5xl font-black text-white mb-3 leading-tight"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Calisthenics
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    India&apos;s #1 Program
                  </span>
                </motion.h2>

                <motion.p
                  className="text-zinc-300 text-base mb-6 leading-relaxed max-w-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Master your bodyweight. Build superhuman strength with zero equipment. PowerFit&apos;s most demanded program — combining ancient
                  bodyweight mastery with modern sports science.
                </motion.p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { value: "7.1kg", label: "Avg. fat lost in 90 days" },
                    { value: "78%", label: "Achieve muscle-up in 60 days" },
                    { value: "38%", label: "More functional strength" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-3 rounded-xl bg-black/40 border border-yellow-400/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div className="text-2xl font-black text-yellow-400">{stat.value}</div>
                      <div className="text-zinc-500 text-xs mt-0.5 leading-tight">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/program/calisthenics"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-black bg-gradient-to-r from-yellow-400 to-orange-400 hover:scale-105 transition-all shadow-[0_0_25px_rgba(234,179,8,0.4)]"
                  >
                    👑 View Full Program
                  </a>
                  <a
                    href={`https://wa.me/918619527263?text=${encodeURIComponent("Hi! I want to join the Calisthenics program at PowerFit. Please share details.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#25D366] hover:scale-105 transition-all"
                  >
                    💬 Join Now
                  </a>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <motion.img
                  src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=870&auto=format"
                  alt="Calisthenics training at PowerFit Jaipur — most popular program"
                  className="w-full h-72 object-cover rounded-2xl"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                {[
                  { skill: "💪 Pull-ups", pos: "top-3 left-3" },
                  { skill: "🤸 Handstand", pos: "top-3 right-3" },
                  { skill: "⚡ Muscle-up", pos: "bottom-3 left-3" },
                  { skill: "🔥 Human Flag", pos: "bottom-3 right-3" },
                ].map((badge, i) => (
                  <motion.div
                    key={badge.skill}
                    className={`absolute ${badge.pos} px-3 py-1.5 rounded-full text-xs font-black text-black bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg`}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {badge.skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <div id="see-programs" />
          {categoryPrograms.map((p, i) => (
            <div key={p.id}>
              <ProgramDetailSection program={p} index={i} />
              {i < categoryPrograms.length - 1 && <ProgramCtaStrip variant={i % 2 === 0 ? "whatsapp" : "trial"} />}
            </div>
          ))}

          <ProgramCompareTable programs={categoryPrograms} />
          <TestimonialSlider items={testimonials} />
          <FreeTrial programs={categoryPrograms} />
          <CategoryFAQ />
          <ExploreOtherCategories current={theme.id} />
          <FinalStickyCTA />
        </main>

        <Footer />
        <StickyEnquireBar whatsappText={theme.whatsappText} />
      </div>
    </CategoryThemeProvider>
  );
}

