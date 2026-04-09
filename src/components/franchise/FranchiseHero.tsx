import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const StampedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const chars = useMemo(() => text.split(""), [text]);
  return (
    <span className="inline-block">
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: delay + i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
          style={{ willChange: "transform, opacity" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const scrollToForm = () => {
  document.getElementById("franchise-form")?.scrollIntoView({ behavior: "smooth" });
};

const FranchiseHero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
    {/* Dark gym background */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        alt="Premium dark gym interior with modern fitness equipment"
        className="w-full h-full object-cover opacity-25"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]" />
    </div>

    {/* Sonar rings */}
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-primary/10"
        style={{ width: `${200 + i * 200}px`, height: `${200 + i * 200}px`, left: "50%", top: "50%", x: "-50%", y: "-50%" }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.05, 0.15] }}
        transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
      />
    ))}

    <div className="relative z-10 section-container text-center max-w-5xl mx-auto pt-32 pb-20">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8"
        style={{ backgroundColor: "rgba(232,0,14,0.1)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
        <span className="label-text text-primary tracking-widest">FRANCHISE OPPORTUNITY · INDIA & GLOBAL</span>
      </motion.div>

      {/* H1 */}
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-dark-foreground leading-[0.95] mb-6">
        <StampedText text="Own India's Most" delay={0.3} />
        <br />
        <span className="text-primary">
          <StampedText text="Powerful Gym Franchise" delay={0.8} />
        </span>
      </h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="font-body text-dark-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        A battle-tested business model. A passionate brand. Everything you need to build a profitable fitness empire — we've already done the hard part.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
      >
        <button
          onClick={scrollToForm}
          className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold rounded-lg text-base hover:bg-primary/90 transition-all animate-pulse-glow"
        >
          Apply for Franchise
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <a
          href="https://wa.me/918619527263?text=Hi!%20Please%20send%20me%20the%20PowerFit%20franchise%20brochure%20and%20investment%20overview."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 border-2 border-dark-foreground/30 text-dark-foreground font-body font-bold rounded-lg text-base hover:border-primary hover:text-primary transition-all"
        >
          <Download className="w-5 h-5" />
          Get Brochure on WhatsApp
        </a>
      </motion.div>

      {/* Trust stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.6 }}
        className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap"
      >
        {[
          { label: "Est. 2017" },
          { label: "15+ Studios" },
          { label: "First franchise profitable in Year 1" },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && <span className="w-1 h-1 rounded-full bg-primary hidden sm:block" />}
            <span className="font-body text-sm text-dark-muted">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FranchiseHero;
