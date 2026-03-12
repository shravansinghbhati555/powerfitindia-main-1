import { motion } from "framer-motion";
import { Dumbbell, Flame, Users, Zap } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const highlights = [
  { icon: Dumbbell, label: "Strength Training" },
  { icon: Flame, label: "Fat Loss Programs" },
  { icon: Users, label: "Group Classes" },
  { icon: Zap, label: "Bootcamps" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-light py-20 md:py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img src={aboutBg} alt="PowerFit gym interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-dark/30 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="label-text text-primary mb-3">About Us</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-none">
              More Than A Gym.
              <br />
              <span className="gradient-text">A Fitness Community.</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg mt-6 leading-relaxed max-w-lg">
              PowerFit India believes fitness is more than workouts — it's about building discipline,
              improving health, and becoming the strongest version of yourself.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <h.icon className="text-primary" size={20} />
                  </div>
                  <span className="font-body text-sm font-semibold text-foreground">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
