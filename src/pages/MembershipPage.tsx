import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MembershipUrgencyBanner from "@/components/membership/MembershipUrgencyBanner";
import MembershipStickyBar from "@/components/membership/MembershipStickyBar";
import MembershipFloatingCTA from "@/components/membership/MembershipFloatingCTA";
import MembershipHero from "@/components/membership/MembershipHero";
import MembershipWhoIsThisFor from "@/components/membership/MembershipWhoIsThisFor";
import MembershipDecoyPricing from "@/components/membership/MembershipDecoyPricing";
import MembershipTransformations from "@/components/membership/MembershipTransformations";
import MembershipIncluded from "@/components/membership/MembershipIncluded";
import MembershipDayInLife from "@/components/membership/MembershipDayInLife";
import MembershipLocations from "@/components/membership/MembershipLocations";
import MembershipFAQ from "@/components/membership/MembershipFAQ";
import MembershipFinalCTA from "@/components/membership/MembershipFinalCTA";

export default function MembershipPage() {
  return (
    <>
      <Helmet>
        <title>Gym Membership in Jaipur & Sikar | PowerFit India — Join Today</title>
        <meta
          name="description"
          content="PowerFit membership in Jaipur & Sikar. 13+ programs, certified trainers, monthly InBody scans, and nutrition coaching. Limited slots. Free trial class available."
        />
        <link rel="canonical" href="https://powerfitindia.com/membership" />
        <meta property="og:title" content="PowerFit Gym Membership — Jaipur & Sikar" />
        <meta
          property="og:description"
          content="500+ active members. 5 studios. 13+ programs. Elite & Premium plans with personal training and nutrition coaching. Free trial available."
        />
        <meta
          name="keywords"
          content="gym membership Jaipur, gym membership Sikar, PowerFit membership, fitness studio Jaipur, fitness studio Sikar, gym near me Jaipur, gym near me Sikar, ladies gym Jaipur, CrossFit membership, HIIT membership, nutrition coaching"
        />
      </Helmet>

      <MembershipUrgencyBanner />
      <Navbar />
      <MembershipStickyBar />

      <main className="bg-[#0A0A0A] pt-[96px] pb-24 lg:pb-0">
        <MembershipHero />
        <MembershipWhoIsThisFor />
        <MembershipDecoyPricing />
        <MembershipTransformations />
        <MembershipIncluded />
        <MembershipDayInLife />
        <MembershipLocations />
        <MembershipFAQ />
        <MembershipFinalCTA />

        <div className="h-8" />
      </main>

      <MembershipFloatingCTA />
      <Footer />
    </>
  );
}

