import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

/* ---- Stamped text animation ---- */
const StampedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const chars = useMemo(() => text.split(""), [text]);
  return (
    <span className="inline-block">
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: delay + i * 0.04,
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ willChange: "transform, opacity" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

/* ---- Counter ---- */
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
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-7xl lg:text-[80px] text-primary leading-none">
        {count}<span className="text-primary">{suffix}</span>
      </div>
      <div className="label-text text-dark-muted mt-2 text-[10px]">{label}</div>
    </div>
  );
};

/* ---- EKG Heartbeat SVG ---- */
const EKGLine = () => {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 80"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        d="M0,40 L200,40 L230,40 L240,10 L250,70 L260,20 L270,60 L280,35 L300,40 L500,40 L530,40 L540,10 L550,70 L560,20 L570,60 L580,35 L600,40 L800,40 L830,40 L840,10 L850,70 L860,20 L870,60 L880,35 L900,40 L1200,40"
        fill="none"
        stroke="hsl(355, 78%, 56%)"
        strokeWidth="2"
        className={visible ? "ekg-line" : ""}
        style={{ opacity: visible ? 0.6 : 0 }}
      />
    </svg>
  );
};

const stats = [
  { value: 500, suffix: "+", label: "Members" },
  { value: 15, suffix: "+", label: "Locations" },
  { value: 7, suffix: "+", label: "Years" },
  { value: 20, suffix: "+", label: "Programs" },
];

const marqueeText = "500+ Members · 15+ Locations · 7+ Years · Expanding Globally · Open a Franchise · Forever Fit Forever Strong · ";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col section-dark overflow-hidden">
      {/* Main hero content */}
      <div className="relative z-10 flex-1 grid lg:grid-cols-2 items-center pt-20 md:pt-24">
        {/* Left - Text */}
        <div className="section-container py-12 lg:py-0 relative">
          {/* Wireframe dumbbell watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
            <div className="dumbbell-rotate" style={{ perspective: "800px" }}>
              <svg width="300" height="300" viewBox="0 0 200 200" fill="none" stroke="hsl(355, 78%, 56%)" strokeWidth="1.5">
                <rect x="30" y="70" width="20" height="60" rx="4" />
                <rect x="150" y="70" width="20" height="60" rx="4" />
                <rect x="50" y="85" width="100" height="30" rx="3" />
                <rect x="15" y="80" width="15" height="40" rx="3" />
                <rect x="170" y="80" width="15" height="40" rx="3" />
              </svg>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-block mb-6"
            >
              <span className="label-text text-primary tracking-[0.3em] bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                India's #1 Fitness Brand
              </span>
            </motion.div>

            <h1
              className="font-display text-dark-foreground leading-[0.9] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, 5rem)" }}
            >
              <StampedText text="India's Fastest" />
              <br />
              <StampedText text="Growing Fitness" delay={0.6} />
              <br />
              <span className="gradient-text">
                <StampedText text="Empire" delay={1.2} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="font-body text-dark-muted text-base md:text-lg max-w-lg leading-relaxed mb-8"
            >
              From premium gyms to home setups, we build fitness ecosystems that transform lives. 
              Join 500+ members across 15+ locations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full label-text font-bold transition-all hover:shadow-xl hover:shadow-primary/30 animate-pulse-glow"
              >
                Start Free Trial
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#programs"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-3 border border-dark-foreground/20 text-dark-foreground px-8 py-4 rounded-full label-text font-bold transition-all hover:border-primary hover:text-primary"
              >
                <Play size={14} className="text-primary" />
                Watch Video
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right - Video */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="relative h-[50vh] lg:h-screen overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster=""
          >
            <source src="https://cdn.shopify.com/videos/c/o/v/9f21690ab3414272bf7d8c88732b3bdb.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
          {/* Red edge glow */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent" />
        </motion.div>
      </div>

      {/* Stats strip with EKG */}
      <div className="relative z-10 border-t border-dark-foreground/10 bg-dark/80 backdrop-blur-sm">
        <div className="relative">
          <EKGLine />
          <div className="section-container py-10 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat) => (
              <Counter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </div>

      {/* Ticker tape marquee */}
      <div className="relative z-10 border-t border-dark-foreground/5 bg-dark/60 py-3 overflow-hidden">
        <div className="flex">
          <div className="marquee-track whitespace-nowrap flex-shrink-0">
            <span className="font-body text-sm text-dark-muted tracking-wider">
              {marqueeText.repeat(8)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
