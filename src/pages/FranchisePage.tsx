import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FranchiseHero from "@/components/franchise/FranchiseHero";
import BrandJourney from "@/components/franchise/BrandJourney";
import WhyInvest from "@/components/franchise/WhyInvest";
import FranchiseModels from "@/components/franchise/FranchiseModels";
import ROISection from "@/components/franchise/ROISection";
import HowItWorks from "@/components/franchise/HowItWorks";
import TerritoryMap from "@/components/franchise/TerritoryMap";
import FounderMessage from "@/components/franchise/FounderMessage";
import FranchiseTestimonials from "@/components/franchise/FranchiseTestimonials";
import WhatsIncluded from "@/components/franchise/WhatsIncluded";
import FranchiseFAQ from "@/components/franchise/FranchiseFAQ";
import FranchiseForm from "@/components/franchise/FranchiseForm";
import FranchiseFooterCTA from "@/components/franchise/FranchiseFooterCTA";
import { SITE_ORIGIN } from "@/config/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need prior gym or fitness experience?", acceptedAnswer: { "@type": "Answer", text: "No. Our training program and operations manual are designed for first-time gym owners." } },
    { "@type": "Question", name: "Is the territory exclusive?", acceptedAnswer: { "@type": "Answer", text: "Yes. Once your franchise is approved for a territory, no other PowerFit franchise will open within that defined area." } },
    { "@type": "Question", name: "How long does it take to open after signing?", acceptedAnswer: { "@type": "Answer", text: "Typically 45 to 60 days from agreement to grand opening." } },
    { "@type": "Question", name: "Can I own multiple locations?", acceptedAnswer: { "@type": "Answer", text: "Yes. Multi-unit franchising is actively encouraged and comes with additional benefits." } },
    { "@type": "Question", name: "Is international franchising available?", acceptedAnswer: { "@type": "Answer", text: "Yes, enquiries from UAE, UK, Canada, and Southeast Asia are welcome." } },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PowerFit India",
  description: "India's fastest-growing gym franchise brand since 2017.",
  url: `${SITE_ORIGIN}/franchise`,
  telephone: "+918619527263",
  address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressRegion: "Rajasthan", addressCountry: "IN" },
};

const FranchisePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Helmet>
        <title>PowerFit Franchise | Open a Gym Franchise in India</title>
        <meta name="description" content="Invest in a PowerFit gym franchise. Proven model since 2017, INR 8L to 1Cr+ formats, setup + training support, and exclusive territories." />
        <link rel="canonical" href={`${SITE_ORIGIN}/franchise`} />
        <meta property="og:title" content="PowerFit Franchise | Open a Gym Franchise in India" />
        <meta property="og:description" content="Own a performance-focused gym franchise with PowerFit India. Multi-model investment options and complete launch support." />
        <meta property="og:url" content={`${SITE_ORIGIN}/franchise`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <Navbar />
      <FranchiseHero />
      <BrandJourney />
      <FounderMessage />
      <WhyInvest />
      <FranchiseModels />
      <ROISection />
      <HowItWorks />
      <TerritoryMap />
      <FranchiseTestimonials />
      <WhatsIncluded />
      <FranchiseFAQ />
      <FranchiseForm />
      <FranchiseFooterCTA />
      <Footer />
    </div>
  );
};

export default FranchisePage;
