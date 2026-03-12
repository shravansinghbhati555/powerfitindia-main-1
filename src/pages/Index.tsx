import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyPowerfitSection from "@/components/WhyPowerfitSection";
import ServicesSection from "@/components/ServicesSection";
import TrainersSection from "@/components/TrainersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import FranchiseSection from "@/components/FranchiseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProgramsSection />
    <WhyPowerfitSection />
    <ServicesSection />
    <TrainersSection />
    <TestimonialsSection />
    <GallerySection />
    <FranchiseSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
