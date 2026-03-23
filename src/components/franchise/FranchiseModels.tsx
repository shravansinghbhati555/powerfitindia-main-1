import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const scrollToForm = () => {
  document.getElementById("franchise-form")?.scrollIntoView({ behavior: "smooth" });
};

const models = [
  {
    name: "PowerFit Lite",
    accent: "#9CA3AF",
    badge: null,
    ideal: "Tier 2/3 cities, first-time investors",
    space: "1,000–2,000 sq ft",
    investment: "₹8L – ₹15L",
    revenue: "₹1.5L – ₹3L",
    breakeven: "12–18 months",
    features: ["Core equipment package", "Basic branding", "Digital onboarding", "Trainer training"],
    cta: "Enquire for Lite",
    highlighted: false,
  },
  {
    name: "PowerFit Studio",
    accent: "#E8000E",
    badge: "MOST CHOSEN",
    ideal: "Tier 1/2 cities, serious investors",
    space: "2,500–4,000 sq ft",
    investment: "₹20L – ₹35L",
    revenue: "₹4L – ₹8L",
    breakeven: "10–14 months",
    features: ["Full equipment suite", "Premium interior design", "Group class setup", "Marketing launch package", "Dedicated franchise manager"],
    cta: "Enquire for Studio",
    highlighted: true,
  },
  {
    name: "PowerFit Premium",
    accent: "#F59E0B",
    badge: null,
    ideal: "Metro cities, experienced investors/HNIs",
    space: "5,000+ sq ft",
    investment: "₹50L – ₹1Cr+",
    revenue: "₹10L – ₹20L",
    breakeven: "10–12 months",
    features: ["Flagship gym design", "Full program suite incl. spa & recovery", "Priority territory rights", "Co-branding opportunities", "Dedicated ops team"],
    cta: "Enquire for Premium",
    highlighted: false,
  },
];

const FranchiseModels = () => (
  <section className="section-dark py-20 md:py-28" style={{ borderTop: "4px solid hsl(355, 78%, 56%)" }}>
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl text-dark-foreground text-center mb-4"
      >
        Three Models. Every Budget. <span className="text-primary">One Brand.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-body text-dark-muted text-center mb-16 max-w-xl mx-auto"
      >
        Choose the franchise model that matches your market and ambition.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {models.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`relative card-glow rounded-2xl p-6 border flex flex-col ${m.highlighted ? "border-primary/60 scale-[1.02] z-10" : "border-dark-foreground/10"}`}
            style={{
              backgroundColor: m.highlighted ? "#1A0A0A" : "#111111",
              boxShadow: m.highlighted ? "0 0 40px rgba(232,0,14,0.15)" : undefined,
            }}
          >
            {m.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full">
                <span className="label-text text-primary-foreground flex items-center gap-1">
                  <Star className="w-3 h-3" /> {m.badge}
                </span>
              </div>
            )}

            <h3 className="font-display text-2xl mt-2 mb-1" style={{ color: m.accent }}>{m.name}</h3>
            <p className="font-body text-xs text-dark-muted mb-5">Ideal for: {m.ideal}</p>

            <div className="space-y-3 mb-6">
              {[
                { label: "Space", value: m.space },
                { label: "Investment", value: m.investment },
                { label: "Monthly Revenue", value: m.revenue },
                { label: "Break-even", value: m.breakeven },
              ].map((row, ri) => (
                <div key={ri} className="flex justify-between items-center border-b border-dark-foreground/5 pb-2">
                  <span className="font-body text-xs text-dark-muted">{row.label}</span>
                  <span className="font-body text-sm text-dark-foreground font-semibold">{row.value}</span>
                </div>
              ))}
            </div>

            <ul className="space-y-2 mb-6 flex-1">
              {m.features.map((f, fi) => (
                <li key={fi} className="font-body text-xs text-dark-muted flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span> {f}
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToForm}
              className={`w-full py-3 rounded-lg font-body font-bold text-sm flex items-center justify-center gap-2 transition-all ${m.highlighted ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-dark-foreground/20 text-dark-foreground hover:border-primary hover:text-primary"}`}
            >
              {m.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="font-body text-xs text-dark-muted text-center mt-8 max-w-2xl mx-auto"
      >
        Investment ranges are indicative. Actual figures depend on city, location, and size. Our team will share a detailed projection in your consultation call.
      </motion.p>
    </div>
  </section>
);

export default FranchiseModels;
