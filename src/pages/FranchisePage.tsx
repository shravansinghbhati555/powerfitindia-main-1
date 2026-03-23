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

const FranchisePage = () => {
  useEffect(() => {
    document.title = "PowerFit Franchise | Open a Gym Franchise in India | PowerFit India";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Invest in a PowerFit gym franchise. Proven model since 2017, ₹8L–1Cr+ models, full setup support, exclusive territories. Apply now and own India's fastest-growing fitness brand.");
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Navbar />
      <FranchiseHero />
      <BrandJourney />
      <WhyInvest />
      <FranchiseModels />
      <ROISection />
      <HowItWorks />
      <TerritoryMap />
      <FounderMessage />
      <FranchiseTestimonials />
      <WhatsIncluded />
      <FranchiseFAQ />
      <FranchiseForm />
      <FranchiseFooterCTA />
      <Footer />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Do I need prior gym or fitness experience?", acceptedAnswer: { "@type": "Answer", text: "No. Our training program and operations manual are designed for first-time gym owners." } },
              { "@type": "Question", name: "Is the territory exclusive?", acceptedAnswer: { "@type": "Answer", text: "Yes. Once your franchise is approved for a territory, no other PowerFit franchise will open within that defined area." } },
              { "@type": "Question", name: "How long does it take to open after signing?", acceptedAnswer: { "@type": "Answer", text: "Typically 45–60 days from agreement to grand opening." } },
              { "@type": "Question", name: "Can I own multiple locations?", acceptedAnswer: { "@type": "Answer", text: "Yes. Multi-unit franchising is actively encouraged and comes with additional benefits." } },
              { "@type": "Question", name: "Is international franchising available?", acceptedAnswer: { "@type": "Answer", text: "Yes, enquiries from UAE, UK, Canada, and Southeast Asia are welcome." } },
            ],
          }),
        }}
      />
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "PowerFit India",
            description: "India's fastest-growing gym franchise brand since 2017.",
            url: "https://powerfitindia.lovable.app/franchise",
            telephone: "+918619527263",
            address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressRegion: "Rajasthan", addressCountry: "IN" },
          }),
        }}
      />
    </div>
  );
};

export default FranchisePage;
