import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const FranchiseSection = () => (
  <section className="relative py-32 md:py-44 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Become a member" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-dark/75" />
    </div>

    <div className="relative z-10 section-container text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="font-display text-dark-foreground leading-[0.85]"
          style={{ fontSize: "clamp(3rem, 10vw, 12rem)" }}
        >
          Become a
          <br />
          <span className="gradient-text">Member</span>
        </h2>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-3 mt-10 bg-dark-foreground text-dark px-10 py-5 rounded-full label-text font-bold transition-all hover:bg-primary hover:text-primary-foreground group"
        >
          Get Started
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default FranchiseSection;
