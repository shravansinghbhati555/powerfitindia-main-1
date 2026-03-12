import { motion } from "framer-motion";

const FranchiseSection = () => (
  <section className="py-20 md:py-32 relative overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(15,100%,55%), hsl(350,100%,60%), hsl(280,100%,65%))" }} />
    <div className="absolute inset-0 bg-background/85" />

    <div className="relative z-10 section-container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="label-text text-sm text-primary mb-4 tracking-widest">Franchise</p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-none">
          Start Your Own
          <br />
          <span className="gradient-text">PowerFit Franchise</span>
        </h2>
        <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
          Turn your passion for fitness into a thriving business. With PowerFit India's franchise
          program, you get support in setup, branding, marketing, and operations.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block mt-10 bg-primary text-primary-foreground px-10 py-4 rounded-full label-text text-sm font-bold shadow-lg"
        >
          Apply for Franchise
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default FranchiseSection;
