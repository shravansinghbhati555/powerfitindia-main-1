import { motion } from "framer-motion";
import { Dumbbell, Users, Flame, Target } from "lucide-react";

const programs = [
  { icon: Dumbbell, title: "Personal Training", desc: "One-to-one coaching programs designed around your unique goals and fitness level." },
  { icon: Users, title: "Group Classes", desc: "HIIT, Zumba, CrossFit sessions that keep you motivated and accountable." },
  { icon: Flame, title: "Strength Training", desc: "Advanced equipment and free weights for serious strength building." },
  { icon: Target, title: "Fat Loss Programs", desc: "Structured transformation plans with guaranteed results." },
];

const ProgramsSection = () => (
  <section id="programs" className="section-dark py-20 md:py-32">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="label-text text-primary mb-3">Programs</p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-dark-foreground">
          Train <span className="gradient-text">Your Way</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="card-glow bg-dark-card rounded-2xl p-8 cursor-pointer group border border-dark-foreground/5"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors">
              <p.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-2xl text-dark-foreground mb-3">{p.title}</h3>
            <p className="font-body text-dark-muted text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
