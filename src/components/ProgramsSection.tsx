import { motion } from "framer-motion";
import { Dumbbell, Users, Flame, Target } from "lucide-react";

const programs = [
  { icon: Dumbbell, title: "Personal Training", desc: "Custom workout plans and one-to-one coaching tailored to your goals." },
  { icon: Users, title: "Group Classes", desc: "Zumba, HIIT, CrossFit, and functional workouts to keep you motivated." },
  { icon: Flame, title: "Strength Training", desc: "Free weights, machines, and strength conditioning for serious lifters." },
  { icon: Target, title: "Fat Loss Programs", desc: "Structured programs designed for real, measurable transformation." },
];

const ProgramsSection = () => (
  <section id="programs" className="py-20 md:py-32">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="label-text text-sm text-primary mb-4 tracking-widest">Programs</p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl gradient-text">
          Train Like An Athlete
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ y: -4 }}
            className="card-glow bg-card rounded-2xl p-8 transition-all duration-400 cursor-pointer group"
            style={{ boxShadow: "0 0 0 1px hsla(220,15%,50%,0.1), 0 4px 8px -2px hsla(0,0%,0%,0.2)" }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <p.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-3">{p.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
