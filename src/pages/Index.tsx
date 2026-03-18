import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DumbbellScrollJourney from "@/components/DumbbellScrollJourney";
import VisionCardsSection from "@/components/VisionCardsSection";
import ProgramsSection from "@/components/ProgramsSection";
import FranchiseSection from "@/components/FranchiseSection";
import GymSetupSection from "@/components/GymSetupSection";
import TrainersSection from "@/components/TrainersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-dark">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <DumbbellScrollJourney />
    <VisionCardsSection />
    <ProgramsSection />
    <FranchiseSection />
    <GymSetupSection />
    <TrainersSection />
    <TestimonialsSection />
    <GallerySection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
