import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";

const MotionLink = motion(Link);

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

/* ---- Lazy Video with IntersectionObserver ---- */
const LazyHeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="w-full h-full">
      {/* Mobile: static poster image only */}
      <img
        src="https://assets.mixkit.co/videos/23635/23635-thumb-720-0.jpg"
        alt="Dark gym with fitness equipment"
        className="block md:hidden w-full h-full object-cover"
        loading="lazy"
      />
      {/* Desktop: lazy-loaded video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster="https://assets.mixkit.co/videos/23635/23635-thumb-720-0.jpg"
        className="hidden md:block w-full h-full object-cover"
      >
        {isVisible && (
          <source
            src="https://assets.mixkit.co/videos/23635/23635-720.mp4"
            type="video/mp4"
          />
        )}
      </video>
    </div>
  );
};

/* ---- YouTube Modal ---- */
const YouTubeModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[900px] w-[95vw] p-0 bg-dark border border-primary/40 rounded-xl overflow-hidden gap-0"
        style={{ backgroundColor: "hsl(var(--dark))" }}
      >
        <DialogTitle className="sr-only">Watch Our Story</DialogTitle>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          {open && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/g-vHB84qRXY?autoplay=1&rel=0&modestbranding=1"
              title="PowerFit India — Our Story"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
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
  const [videoModalOpen, setVideoModalOpen] = useState(false);

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
              className="font-display text-dark-foreground leading-[0.9]  mb-6"
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
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <MotionLink
                to="/#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full label-text font-bold transition-all hover:shadow-xl hover:shadow-primary/30 animate-pulse-glow"
              >
                Start Free Trial
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </MotionLink>
              <MotionLink
                to="/programs"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center justify-center gap-3 border border-dark-foreground/20 text-dark-foreground px-8 py-4 rounded-full label-text font-bold transition-all hover:border-primary hover:text-primary"
              >
                Explore Programs
              </MotionLink>
              <motion.button
                onClick={() => setVideoModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 text-dark-muted hover:text-primary label-text font-bold transition-colors cursor-pointer"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary/60 bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <Play size={14} className="text-primary ml-0.5" fill="hsl(355, 78%, 56%)" />
                </span>
                Watch Our Story
              </motion.button>
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
          <LazyHeroVideo />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
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

      {/* YouTube Modal */}
      <YouTubeModal open={videoModalOpen} onOpenChange={setVideoModalOpen} />
    </section>
  );
};

export default HeroSection;
