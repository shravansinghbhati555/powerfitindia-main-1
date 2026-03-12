import { motion } from "framer-motion";
import { Dumbbell, Zap, Music, Flower2, TrendingDown, TrendingUp } from "lucide-react";

const services = [
  { icon: Dumbbell, title: "Personal Training" },
  { icon: Zap, title: "HIIT & CrossFit" },
  { icon: Music, title: "Zumba Classes" },
  { icon: Flower2, title: "Yoga & Flexibility" },
  { icon: TrendingDown, title: "Weight Loss Programs" },
  { icon: TrendingUp, title: "Muscle Gain Programs" },
];

const ServicesSection = () => (
  <section className="py-20 md:py-32">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="label-text text-sm text-primary mb-4 tracking-widest">Services</p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl gradient-text">
          Choose Your Training Style
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
            whileHover={{ y: -4 }}
            className="card-glow bg-card rounded-2xl p-8 flex items-center gap-5 transition-all duration-300 cursor-pointer group"
            style={{ boxShadow: "0 0 0 1px hsla(220,15%,50%,0.1), 0 4px 8px -2px hsla(0,0%,0%,0.2)" }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
