import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { programs } from "@/data/programs";
import { programVisuals } from "@/config/programVisuals";
import { categoryThemes, type CategoryThemeId } from "@/config/categoryThemes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import DetailHero from "@/components/programs/detail/DetailHero";
import DetailQuickInfo from "@/components/programs/detail/DetailQuickInfo";
import DetailBenefitsDeep from "@/components/programs/detail/DetailBenefitsDeep";
import DetailRealData from "@/components/programs/detail/DetailRealData";
import DetailJourney from "@/components/programs/detail/DetailJourney";
import DetailTrainer from "@/components/programs/detail/DetailTrainer";
import DetailSchedule from "@/components/programs/detail/DetailSchedule";
import DetailGallery from "@/components/programs/detail/DetailGallery";
import DetailComparePlans from "@/components/programs/detail/DetailComparePlans";
import DetailSocialProof from "@/components/programs/detail/DetailSocialProof";
import DetailFAQ from "@/components/programs/detail/DetailFAQ";
import DetailRelatedPrograms from "@/components/programs/detail/DetailRelatedPrograms";
import DetailStickyBar from "@/components/programs/detail/DetailStickyBar";
import DetailWhatsAppFloat from "@/components/programs/detail/DetailWhatsAppFloat";
import DetailFinalCTA from "@/components/programs/detail/DetailFinalCTA";

export default function ProgramDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find(p => p.slug === slug);

  if (!program) return <NotFound />;

  const visuals = programVisuals[program.slug];
  const themeId = program.categoryId as CategoryThemeId;
  const theme = categoryThemes[themeId] || categoryThemes.strength;

  if (!visuals) return <NotFound />;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.name,
    description: program.description,
    url: `https://powerfitindia.com/programs/${program.slug}`,
    image: visuals.heroBg,
    provider: {
      "@type": "Organization",
      name: "PowerFit India",
      url: "https://powerfitindia.com",
      telephone: "+918619527263",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Girdhar Marg, Ashok Vihar, Sector 12",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302017",
        addressCountry: "IN",
      },
    },
    courseMode: program.available.includes("Online") ? ["onsite", "online"] : ["onsite"],
    educationalLevel: program.intensity,
    teaches: program.programHighlights,
  };

  const aiSeoText = visuals.aiSeoContext ||
    `${program.name} is a ${program.intensity} fitness program offered by PowerFit India at studios in Jaipur and Sikar, Rajasthan. ${program.description.slice(0, 200)}`;

  return (
    <article itemScope itemType="https://schema.org/Course">
      <Helmet>
        <title>{program.name} Program | PowerFit India — {program.category}</title>
        <meta name="description" content={`${program.tagline} ${program.description.slice(0, 120)}… Join PowerFit's ${program.name} program in Jaipur & Sikar.`} />
        <link rel="canonical" href={`https://powerfitindia.com/programs/${program.slug}`} />
        <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
      </Helmet>

      <Navbar />
      <DetailStickyBar program={program} theme={theme} />

      <main>
        <DetailHero program={program} visuals={visuals} theme={theme} />
        <DetailQuickInfo program={program} />
        <DetailBenefitsDeep program={program} theme={theme} />
        <DetailRealData program={program} theme={theme} />
        <DetailJourney program={program} visuals={visuals} theme={theme} />
        <DetailTrainer program={program} visuals={visuals} theme={theme} />
        <DetailSchedule program={program} theme={theme} />
        <DetailGallery program={program} visuals={visuals} />
        <DetailComparePlans program={program} visuals={visuals} theme={theme} />
        <DetailSocialProof program={program} visuals={visuals} theme={theme} />
        <DetailFAQ program={program} visuals={visuals} theme={theme} />
        <DetailRelatedPrograms program={program} theme={theme} />
        <DetailFinalCTA program={program} theme={theme} />
      </main>

      {/* AI-SEO context */}
      <div className="ai-context sr-only" aria-hidden="false">{aiSeoText}</div>

      <DetailWhatsAppFloat program={program} />
      <Footer />
    </article>
  );
}
