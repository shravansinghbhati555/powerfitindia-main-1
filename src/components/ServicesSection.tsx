import { motion } from "framer-motion";
import { Dumbbell, Zap, Music, Flower2, TrendingDown, TrendingUp } from "lucide-react";

const services = [
  { icon: Dumbbell, title: "Personal Training", desc: "Custom programs with dedicated coaches." },
  { icon: Zap, title: "HIIT & CrossFit", desc: "High-intensity sessions for max calorie burn." },
  { icon: Music, title: "Zumba Classes", desc: "Dance-based cardio that's pure fun." },
  { icon: Flower2, title: "Yoga Sessions", desc: "Flexibility, balance, and mental wellness." },
  { icon: TrendingDown, title: "Weight Loss Training", desc: "Proven programs for sustainable fat loss." },
  { icon: TrendingUp, title: "Muscle Gain Programs", desc: "Progressive overload and hypertrophy plans." },
];

const ServicesSection = () => (
  <section className="section-dark py-20 md:py-32">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="label-text text-primary mb-3">Services</p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-dark-foreground">
          Our <span className="gradient-text">Fitness Programs</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-glow bg-dark-card rounded-2xl p-8 cursor-pointer group border border-dark-foreground/5"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-2xl text-dark-foreground mb-2">{s.title}</h3>
            <p className="font-body text-dark-muted text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
