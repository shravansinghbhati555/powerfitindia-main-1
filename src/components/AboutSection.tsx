import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="about" ref={ref} className="relative py-[20vh] overflow-hidden">
      {/* Parallax BG */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={aboutBg} alt="PowerFit gym interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </motion.div>

      <div className="relative z-10 section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <p className="label-text text-sm text-primary mb-4 tracking-widest">Our Story</p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl gradient-text leading-none">
              Fitness Is Not A Hobby. It's A Lifestyle.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
              PowerFit India is built on the belief that fitness is about discipline, consistency,
              and community. We combine expert training, modern equipment, and motivating
              environments to help members push beyond their limits.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mt-4">
              From our first gym to multiple locations across India, our mission remains the same —
              build stronger humans, one rep at a time.
            </p>
            <motion.a
              href="#programs"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block mt-8 border border-border text-foreground px-6 py-3 rounded-full label-text text-sm font-bold hover:bg-secondary transition-colors"
            >
              Explore Programs
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
