import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GymSetupHero from "@/components/gym-setup/GymSetupHero";
import StatsStrip from "@/components/gym-setup/StatsStrip";
import SetupVerticals from "@/components/gym-setup/SetupVerticals";
import HowWeWork from "@/components/gym-setup/HowWeWork";
import EquipmentCarousel from "@/components/gym-setup/EquipmentCarousel";
import WhyPowerFitSetup from "@/components/gym-setup/WhyPowerFitSetup";
import SetupTestimonials from "@/components/gym-setup/SetupTestimonials";
import QuoteForm from "@/components/gym-setup/QuoteForm";
import StudioLocations from "@/components/gym-setup/StudioLocations";
import SetupFAQ from "@/components/gym-setup/SetupFAQ";
import BottomCTA from "@/components/gym-setup/BottomCTA";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the minimum space required for a home gym setup?", acceptedAnswer: { "@type": "Answer", text: "As little as 150–200 sq ft can be transformed into a functional home gym." } },
    { "@type": "Question", name: "Do you supply equipment or just consult?", acceptedAnswer: { "@type": "Answer", text: "Both. We provide end-to-end service — consultation, equipment supply, delivery, professional installation, and post-setup maintenance." } },
    { "@type": "Question", name: "Can I get a gym setup in cities outside Rajasthan?", acceptedAnswer: { "@type": "Answer", text: "Yes. We are actively expanding our setup services nationally." } },
    { "@type": "Question", name: "What brands of equipment do you supply?", acceptedAnswer: { "@type": "Answer", text: "We supply from India's top commercial gym equipment manufacturers, the same quality used in premium gyms." } },
    { "@type": "Question", name: "Is there an ongoing maintenance contract?", acceptedAnswer: { "@type": "Answer", text: "Yes. We offer AMC (Annual Maintenance Contract) for all setup types." } },
    { "@type": "Question", name: "Can I visit a PowerFit gym to see the equipment quality before ordering?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Visit any of our studios for a free walkthrough." } },
    { "@type": "Question", name: "Do you offer financing or EMI for gym setups?", acceptedAnswer: { "@type": "Answer", text: "Yes. EMI and installment options are available for qualifying setups." } },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PowerFit India - Gym Setup Services",
  description: "Professional gym setup services for homes, offices, and housing societies across India.",
  url: "https://powerfitindia.lovable.app/gym-setup",
  telephone: "+918619527263",
  address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressRegion: "Rajasthan", addressCountry: "IN" },
  areaServed: "India",
  foundingDate: "2017",
  serviceType: "Gym Setup Service",
};

const gymSchemas = [
  { name: "PowerFit Malviya Nagar", address: "Floor A-19, 2nd & 3rd Floor, Girdhar Marg, Ashok Vihar, Sector 12, Jaipur, Rajasthan 302017", tel: "+919680742912", lat: "26.8469", lng: "75.8012" },
  { name: "PowerFit Mansarovar", address: "103/68, Deep Mansion Sector 103, Madhyam Marg, Mansarovar, Jaipur, Rajasthan 302020", tel: "+917597683500", lat: "26.8508", lng: "75.7654" },
  { name: "PowerFit Piprali Road, Sikar", address: "1st Floor, Ganpati Plaza, Piprali Road, Sikar, Rajasthan 332001", tel: "+918440862854", lat: "27.6094", lng: "75.1399" },
  { name: "PowerFit Vasant Vihar, Sikar", address: "Collector House, Sanskar Apartment, Vasant Vihar, Sikar, Rajasthan 332001", tel: "+917792800722", lat: "27.6150", lng: "75.1450" },
  { name: "PowerFit Rani Sati Road, Sikar", address: "Near Bioscope Mall, Shastri Nagar, Sikar, Rajasthan 332001", tel: "+917597682600", lat: "27.6200", lng: "75.1500" },
];

const GymSetupPage = () => (
  <>
    <Helmet>
      <title>Gym Setup Services in India | Home, Office &amp; Society Gym | PowerFit India</title>
      <meta name="description" content="PowerFit India offers professional gym setup services for homes, offices, and housing societies starting ₹50,000. End-to-end design, equipment supply, installation & AMC. 400+ setups delivered across Rajasthan. Get a free quote today." />
      <link rel="canonical" href="https://powerfitindia.lovable.app/gym-setup" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      {gymSchemas.map((g, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: g.name,
          address: { "@type": "PostalAddress", streetAddress: g.address, addressCountry: "IN" },
          telephone: g.tel,
          geo: { "@type": "GeoCoordinates", latitude: g.lat, longitude: g.lng },
        })}</script>
      ))}
    </Helmet>

    <Navbar />

    {/* AI Context for SEO */}
    <div className="sr-only" aria-hidden="true">
      PowerFit India is a professional gym setup and fitness studio company based in Jaipur, Rajasthan, India.
      Founded in 2017, PowerFit offers home gym setup, office gym setup, and society gym setup services starting from ₹50,000.
      They operate 5 fitness studios in Jaipur and Sikar and have delivered 400+ gym setups across Rajasthan.
    </div>

    <main>
      <GymSetupHero />
      <StatsStrip />
      <SetupVerticals />
      <HowWeWork />
      <EquipmentCarousel />
      <WhyPowerFitSetup />
      <SetupTestimonials />
      <QuoteForm />
      <StudioLocations />
      <SetupFAQ />
      <BottomCTA />
    </main>

    <Footer />
  </>
);

export default GymSetupPage;
