import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MarqueeSection from "@/components/MarqueeSection";
import ProgramsSection from "@/components/ProgramsSection";
import TrainersSection from "@/components/TrainersSection";
import GallerySection from "@/components/GallerySection";
import FranchiseSection from "@/components/FranchiseSection";
import FeaturesGridSection from "@/components/FeaturesGridSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-dark">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <MarqueeSection />
    <ProgramsSection />
    <TrainersSection />
    <GallerySection />
    <FeaturesGridSection />
    <FranchiseSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
