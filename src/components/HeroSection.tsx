import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: 8000, suffix: "+", label: "Members" },
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Certified Trainers" },
  { value: 100, suffix: "%", label: "Modern Equipment" },
];

const scrollText = "NO EXCUSES • TRAIN HARD • STAY FIT • POWERFIT • ";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
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
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-6xl font-bold gradient-text">
        {count}{suffix}
      </div>
      <div className="label-text text-xs md:text-sm text-muted-foreground mt-2">{stats.find(s => s.value === value)?.label}</div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="PowerFit gym" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <p className="label-text text-sm md:text-base text-primary mb-4 tracking-widest">
            POWERFIT INDIA
          </p>
          <h1
            className="font-display font-bold gradient-text leading-none"
            style={{ fontSize: "clamp(3.5rem, 10vw + 1rem, 11rem)" }}
          >
            Train Hard.
            <br />
            Stay Strong.
          </h1>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            PowerFit India is where strength, discipline, and community come
            together to transform your fitness journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full label-text text-sm font-bold shadow-lg"
          >
            Join Now
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="border border-border text-foreground px-8 py-4 rounded-full label-text text-sm font-bold hover:bg-secondary transition-colors"
          >
            Book Free Trial
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 md:mt-24"
        >
          {stats.map((stat) => (
            <Counter key={stat.label} value={stat.value} suffix={stat.suffix} />
          ))}
        </motion.div>
      </div>

      {/* Scrolling Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/10 border-t border-b border-border py-3 overflow-hidden">
        <div className="scrolling-strip whitespace-nowrap">
          <span className="font-display text-xl md:text-2xl text-primary/80 tracking-wider">
            {scrollText.repeat(8)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
