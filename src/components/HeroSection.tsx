import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: 8000, suffix: "+", label: "Members" },
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Certified Trainers" },
  { value: 100, suffix: "%", label: "Advanced Equipment" },
];

const Counter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-display text-5xl md:text-7xl text-dark-foreground">
        {count}<span className="text-primary">{suffix}</span>
      </div>
      <div className="label-text text-dark-muted mt-2">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden section-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="PowerFit gym training" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
      </div>

      {/* Top bar info */}
      <div className="relative z-10 section-container pt-28 md:pt-32">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full border-2 border-dark-foreground/30 flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Play className="text-dark-foreground ml-1" size={20} />
            </motion.div>
            <div>
              <p className="font-body text-dark-foreground text-sm font-semibold">Train with the Best.</p>
              <p className="font-body text-dark-muted text-sm">Watch Online Training</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-dark-muted text-sm md:text-base max-w-sm text-left md:text-right leading-relaxed"
          >
            Our space combines professional equipment, expert coaches, and a motivating atmosphere to help you train smarter and grow stronger.
          </motion.p>
        </div>
      </div>

      {/* Main headline */}
      <div className="relative z-10 section-container flex-1 flex items-end pb-8">
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="font-display text-dark-foreground leading-[0.85] tracking-tight"
            style={{ fontSize: "clamp(4rem, 12vw + 1rem, 14rem)" }}
          >
            Power.
            <br />
            Strength.
            <br />
            <span className="gradient-text">Cardio.</span>
          </motion.h1>

          {/* Bottom bar with CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8 mb-6"
          >
            <div />
            <div className="flex items-center gap-6">
              <motion.a
                href="#programs"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-3 bg-dark-foreground text-dark px-8 py-4 rounded-full label-text font-bold transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Explore The Workout
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <a href="tel:+919999999999" className="hidden sm:block font-body text-dark-muted text-sm hover:text-dark-foreground transition-colors">
                Call Us: <span className="text-dark-foreground underline underline-offset-4">+91 99999 99999</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-10 border-t border-dark-foreground/10 bg-dark/60 backdrop-blur-sm"
      >
        <div className="section-container py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Counter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
