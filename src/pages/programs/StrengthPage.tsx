import { Helmet } from "react-helmet-async";
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
  const categoryPrograms = programs.filter((p) => p.categoryId === theme.id);

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
      url: `https://powerfitindia.com/programs/${p.slug}`,
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

