import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Calculator, Handshake } from "lucide-react";

const cards = [
  {
    icon: Handshake,
    title: "Franchise With Us",
    description: "Partner with the fastest growing gym chain in India. Scale your business with proven systems.",
    gradient: "from-primary/20 to-transparent",
    from: { x: -100, opacity: 0 },
  },
  {
    icon: Dumbbell,
    title: "Premium Gym Equipment",
    description: "High-quality commercial-grade equipment built for peak performance and durability.",
    gradient: "from-accent/20 to-transparent",
    from: { y: 100, opacity: 0 },
  },
  {
    icon: Calculator,
    title: "BMI Calculator",
    description: "Track your health metrics and fitness progress online. Know your numbers.",
    gradient: "from-primary/20 to-transparent",
    from: { x: 100, opacity: 0 },
  },
];

const VisionCardsSection = () => (
  <section className="section-dark py-24 md:py-32 overflow-hidden">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="label-text text-primary mb-4 tracking-[0.3em]">Our Vision</p>
        <h2 className="font-display text-5xl md:text-7xl text-dark-foreground">
          Build The <span className="gradient-text">Future</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card, i) => (
          <motion.a
            key={card.title}
            href="#contact"
            initial={card.from}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl border border-dark-foreground/10 bg-dark-card p-8 md:p-10 flex flex-col justify-between min-h-[300px] overflow-hidden cursor-pointer transition-all duration-500 hover:border-primary/50 red-pulse"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-50`} />
            </div>

            {/* Rotating barbell watermark */}
            <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
              <svg width="120" height="120" viewBox="0 0 200 200" fill="hsl(355, 78%, 56%)" className="group-hover:animate-spin" style={{ animationDuration: "8s" }}>
                <rect x="30" y="70" width="22" height="60" rx="4" />
                <rect x="148" y="70" width="22" height="60" rx="4" />
                <rect x="52" y="85" width="96" height="30" rx="3" />
              </svg>
            </div>

            {/* Animated border lines */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700 ease-out" />
            <div className="absolute top-0 left-0 h-0 w-[2px] bg-gradient-to-b from-primary to-accent group-hover:h-full transition-all duration-700 ease-out delay-100" />
            <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-gradient-to-l from-primary to-accent group-hover:w-full transition-all duration-700 ease-out delay-200" />
            <div className="absolute bottom-0 right-0 h-0 w-[2px] bg-gradient-to-t from-primary to-accent group-hover:h-full transition-all duration-700 ease-out delay-300" />

            <div className="relative z-10">
              <motion.div
                className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"
                whileHover={{ rotate: 5 }}
              >
                <card.icon size={30} strokeWidth={1.5} />
              </motion.div>

              <h3 className="font-display text-dark-foreground text-3xl md:text-4xl mb-3 group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h3>

              <p className="font-body text-dark-muted text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </div>

            <div className="relative z-10 mt-8 flex items-center gap-2 label-text text-dark-muted group-hover:text-primary transition-colors duration-300">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
              </span>
              <ArrowRight
                size={18}
                className="transform -translate-x-16 group-hover:translate-x-0 transition-transform duration-500 ease-out"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default VisionCardsSection;
