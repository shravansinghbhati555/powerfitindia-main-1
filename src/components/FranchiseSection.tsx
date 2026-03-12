import { motion } from "framer-motion";

const FranchiseSection = () => (
  <section className="relative py-20 md:py-32 overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary" />
    <div className="absolute inset-0 bg-dark/80" />

    <div className="relative z-10 section-container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="label-text text-primary-foreground/70 mb-3 tracking-[0.2em]">Franchise</p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-dark-foreground leading-none">
          Start Your Own
          <br />
          <span className="gradient-text">PowerFit Franchise</span>
        </h2>
        <p className="font-body text-dark-muted text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
          Turn your passion for fitness into a thriving business with the PowerFit India
          franchise program. We provide full support in setup, branding, marketing, and operations.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block mt-10 bg-primary text-primary-foreground px-10 py-4 rounded-full label-text font-bold shadow-lg shadow-primary/30 transition-shadow hover:shadow-xl"
        >
          Apply for Franchise
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default FranchiseSection;
