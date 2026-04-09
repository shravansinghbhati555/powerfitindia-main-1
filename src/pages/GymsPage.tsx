import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MembershipLocations from "@/components/membership/MembershipLocations";
import { SITE_ORIGIN } from "@/config/site";

export default function GymsPage() {
  return (
    <>
      <Helmet>
        <title>Our Gyms — Jaipur & Sikar Studios | PowerFit India</title>
        <meta
          name="description"
          content="PowerFit gym locations in Jaipur and Sikar. Directions, call, and WhatsApp for each studio. Book a free trial."
        />
        <link rel="canonical" href={`${SITE_ORIGIN}/gyms`} />
      </Helmet>
      <div className="min-h-screen bg-[#0A0A0A]">
        <Navbar />
        <main className="pt-24 md:pt-28 pb-16">
          <div className="section-container text-center mb-6 md:mb-10 px-4">
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
              Our <span className="text-primary">Gyms</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto font-body">
              Visit a studio near you — same coaching standards at every PowerFit location.
            </p>
          </div>
          <MembershipLocations />
        </main>
        <Footer />
      </div>
    </>
  );
}
