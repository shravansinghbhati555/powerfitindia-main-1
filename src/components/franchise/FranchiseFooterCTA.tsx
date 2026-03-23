import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const scrollToForm = () => {
  document.getElementById("franchise-form")?.scrollIntoView({ behavior: "smooth" });
};

const FranchiseFooterCTA = () => (
  <section className="py-0">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center py-10 md:py-14 px-6"
      style={{ backgroundColor: "#1A0000" }}
    >
      <p className="font-body text-sm md:text-base text-dark-foreground max-w-2xl mx-auto mb-6">
        The fitness industry is booming. Your city needs a PowerFit.{" "}
        <span className="text-primary font-semibold">Will you be the one to bring it there?</span>
      </p>
      <button
        onClick={scrollToForm}
        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold rounded-lg text-base hover:bg-primary/90 transition-all animate-pulse-glow"
      >
        Start My Application
        <ArrowRight className="w-5 h-5" />
      </button>
    </motion.div>
  </section>
);

export default FranchiseFooterCTA;
