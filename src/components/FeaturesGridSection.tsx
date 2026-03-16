import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Calculator, Handshake } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "Franchise With Us",
    description: "Partner with the fastest growing gym chain in India.",
    gradient: "from-primary to-accent",
    delay: 0,
  },
  {
    icon: Dumbbell,
    title: "Premium Gym Equipment",
    description: "High-quality equipments built for peak performance.",
    gradient: "from-accent to-primary",
    delay: 0.15,
  },
  {
    icon: Calculator,
    title: "BMI Calculator",
    description: "Track your health and fitness online.",
    gradient: "from-primary to-accent",
    delay: 0.3,
  },
];

const FeaturesGridSection = () => (
  <section className="section-dark py-24 md:py-32 overflow-hidden">
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, i) => (
          <motion.a
            key={feature.title}
            href="#contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: feature.delay, ease: [0.25, 1, 0.5, 1] }}
            className="group relative rounded-2xl border border-dark-foreground/10 bg-dark-card p-8 md:p-10 flex flex-col justify-between min-h-[280px] overflow-hidden cursor-pointer transition-all duration-500 hover:border-primary/40"
          >
            {/* Glow background on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${feature.gradient} opacity-[0.06] blur-3xl rounded-full scale-150`} />
            </div>

            {/* Animated corner line */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700 ease-out" />
            <div className="absolute top-0 left-0 h-0 w-[2px] bg-gradient-to-b from-primary to-accent group-hover:h-full transition-all duration-700 ease-out delay-100" />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"
                whileHover={{ rotate: 5 }}
              >
                <feature.icon size={28} strokeWidth={1.5} />
              </motion.div>

              {/* Number tag */}
              <span className="absolute top-0 right-0 font-display text-7xl md:text-8xl text-dark-foreground/[0.03] group-hover:text-dark-foreground/[0.06] transition-colors duration-500 select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="font-display text-dark-foreground text-3xl md:text-4xl mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-dark-muted text-sm md:text-base leading-relaxed max-w-[280px]">
                {feature.description}
              </p>
            </div>

            {/* Arrow */}
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

export default FeaturesGridSection;
