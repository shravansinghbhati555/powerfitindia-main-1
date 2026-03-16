import { motion } from "framer-motion";
import { Dumbbell, Cpu, Heart } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const features = [
  { icon: Dumbbell, title: "Professional Training", desc: "Train with certified coaches who create structured programs based on your goals, fitness level, and progress." },
  { icon: Cpu, title: "Modern Equipment", desc: "Our gym is equipped with state-of-the-art machines and functional training areas that support strength and mobility." },
  { icon: Heart, title: "Motivating Environment", desc: "Train in an energetic, clean, and supportive atmosphere that keeps you inspired and motivated every day." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-dark py-20 md:py-32 overflow-hidden">
      <div className="section-container">
        {/* Top label + heading */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-end mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="label-text text-primary mb-4 tracking-[0.2em]">More Than a Gym</p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-dark-foreground leading-[0.9]">
              Our Space Builds
              <br />
              <span className="gradient-text">Champions.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-body text-dark-muted text-base md:text-lg leading-relaxed max-w-lg"
          >
            Our space combines professional equipment, expert coaches, and a motivating
            atmosphere to help you train smarter, move better, and grow stronger—every day.
          </motion.p>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden aspect-[21/9] mb-16 md:mb-24"
        >
          <img src={aboutBg} alt="PowerFit gym interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
        </motion.div>

        {/* 3 Feature cards */}
        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group p-8 md:p-10 rounded-2xl border border-dark-foreground/8 bg-dark-card hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <f.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-dark-foreground mb-4">{f.title}</h3>
              <p className="font-body text-dark-muted text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
