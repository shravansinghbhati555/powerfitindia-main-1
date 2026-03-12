import { motion } from "framer-motion";
import { Award, ClipboardList, Apple, Cpu, Heart, TrendingUp } from "lucide-react";

const features = [
  { icon: Award, title: "Certified Trainers" },
  { icon: ClipboardList, title: "Customized Training Programs" },
  { icon: Apple, title: "Nutrition Guidance" },
  { icon: Cpu, title: "Advanced Gym Equipment" },
  { icon: Heart, title: "Community Environment" },
  { icon: TrendingUp, title: "Result-Driven Fitness Plans" },
];

const WhyPowerfitSection = () => (
  <section className="py-20 md:py-32 bg-secondary/30">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="label-text text-sm text-primary mb-4 tracking-widest">Why Us</p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl gradient-text">
          Why PowerFit Hits Different
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="card-glow bg-card rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer group"
            style={{ boxShadow: "0 0 0 1px hsla(220,15%,50%,0.1), 0 4px 8px -2px hsla(0,0%,0%,0.2)" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <f.icon className="text-primary" size={32} />
            </div>
            <h3 className="font-display text-xl text-foreground">{f.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyPowerfitSection;
