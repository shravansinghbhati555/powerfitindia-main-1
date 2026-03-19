import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Calculator, Handshake } from "lucide-react";

const cards = [
  {
    icon: Handshake,
    title: "Franchise With Us",
    description:
      "Partner with the fastest growing gym chain in India. Scale your business with proven systems.",
    gradient: "from-primary/20 to-transparent",
    from: { x: -100, opacity: 0 },
  },
  {
    icon: Dumbbell,
    title: "Premium Gym Equipment",
    description:
      "High-quality commercial-grade equipment built for peak performance and durability.",
    gradient: "from-accent/20 to-transparent",
    from: { y: 100, opacity: 0 },
  },
  {
    icon: Calculator,
    title: "BMI Calculator",
    description:
      "Track your health metrics and fitness progress online. Know your numbers.",
    gradient: "from-primary/20 to-transparent",
    from: { x: 100, opacity: 0 },
  },
];

const statPills = [
  { label: "500+ Cities", delay: 0.3 },
  { label: "3 Continents", delay: 0.45 },
  { label: "By 2030", delay: 0.6 },
];

const VisionCardsSection = () => (
  <section className="section-dark py-24 md:py-32 overflow-hidden relative">
    {/* Red top accent border */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

    <div className="section-container">
      {/* Two-panel layout: Headline left, Cards right */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* LEFT PANEL — Headline (2/5 width) */}
        <div className="lg:col-span-2 flex flex-col justify-center lg:sticky lg:top-32">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-text text-primary mb-4 tracking-[0.3em]"
          >
            OUR VISION
          </motion.p>

          <h2 className="font-display text-dark-foreground leading-[0.95] mb-6">
            {["BUILD", "THE FUTURE", "OF FITNESS."].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`block ${
                  word === "THE FUTURE"
                    ? "gradient-text"
                    : "text-dark-foreground"
                }`}
                style={{ fontSize: "clamp(2.5rem, 5vw, 5.5rem)" }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="font-body text-dark-muted text-sm md:text-base leading-relaxed mb-8 max-w-md"
          >
            By 2030, we envision 500+ PowerFit locations across India and the
            globe — making world-class fitness accessible to every city, every
            society, every home. Three verticals. One unstoppable brand.
          </motion.p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-3">
            {statPills.map((pill) => (
              <motion.span
                key={pill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pill.delay, duration: 0.4 }}
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 label-text text-primary text-xs tracking-wider red-pulse"
              >
                {pill.label}
              </motion.span>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL — Cards (3/5 width) */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-1 gap-6">
          {cards.map((card, i) => (
            <motion.a
              key={card.title}
              href="#contact"
              initial={card.from}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.25, 1, 0.5, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-dark-foreground/10 bg-dark-card p-8 md:p-10 flex items-center gap-8 overflow-hidden cursor-pointer transition-all duration-500 hover:border-primary/50 red-pulse"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-50`}
                />
              </div>

              {/* Rotating barbell watermark */}
              <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 200 200"
                  fill="hsl(355, 78%, 56%)"
                  className="group-hover:animate-spin"
                  style={{ animationDuration: "8s" }}
                >
                  <rect x="30" y="70" width="22" height="60" rx="4" />
                  <rect x="148" y="70" width="22" height="60" rx="4" />
                  <rect x="52" y="85" width="96" height="30" rx="3" />
                </svg>
              </div>

              {/* Animated border lines */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700 ease-out" />
              <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-gradient-to-l from-primary to-accent group-hover:w-full transition-all duration-700 ease-out delay-200" />

              {/* Icon */}
              <motion.div
                className="relative z-10 flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"
                whileHover={{ rotate: 5 }}
              >
                <card.icon size={30} strokeWidth={1.5} />
              </motion.div>

              {/* Text */}
              <div className="relative z-10 flex-1 min-w-0">
                <h3 className="font-display text-dark-foreground text-2xl md:text-3xl mb-1.5 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="font-body text-dark-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="relative z-10 flex-shrink-0">
                <ArrowRight
                  size={20}
                  className="text-dark-muted group-hover:text-primary transform -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default VisionCardsSection;
