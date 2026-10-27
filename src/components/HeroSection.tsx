
import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import FreeTrialModal from "@/components/FreeTrialModal";

const MotionLink = motion(Link);

/* ---- Stamped text animation ---- */
const StampedText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
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
const Counter = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
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

          const timer = window.setInterval(() => {
            current += increment;

            if (current >= value) {
              setCount(value);
              window.clearInterval(timer);
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
      <div className="font-display text-5xl leading-none text-primary md:text-7xl lg:text-[80px]">
        {count}
        <span className="text-primary">{suffix}</span>
      </div>

      <div className="label-text mt-2 text-[10px] text-dark-muted">
        {label}
      </div>
    </div>
  );
};

/* ---- EKG Heartbeat SVG ---- */
const EKGLine = () => {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 80"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
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


/* ---- Responsive Full-screen Hero Background Video ---- */
const LazyHeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      if (document.visibilityState === "visible") {
        video.play().catch(() => {
          // Browser may restrict autoplay.
        });
      }
    };

    playVideo();

    document.addEventListener("visibilitychange", playVideo);

    return () => {
      document.removeEventListener("visibilitychange", playVideo);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      webkit-playsinline="true"
      preload="auto"
      aria-hidden="true"
      className="
        absolute inset-0
        h-full w-full
        object-cover
        object-[60%_center]
        sm:object-center
      "
    >
      <source src="/videos/Video%20Project.mp4" type="video/mp4" />
    </video>
  );
};


/* ---- YouTube Modal ---- */
const YouTubeModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-[95vw] max-w-[900px] gap-0 overflow-hidden rounded-xl border border-primary/40 bg-dark p-0"
        style={{ backgroundColor: "hsl(var(--dark))" }}
      >
        <DialogTitle className="sr-only">
          Watch Our Story
        </DialogTitle>

        <div
          className="relative w-full"
          style={{ paddingBottom: "56.25%" }}
        >
          {open && (
            <iframe
              className="absolute inset-0 h-full w-full"
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

/* ---- Stats ---- */
const stats = [
  { value: 25000, suffix: "+", label: "Members Transformed" },
  { value: 5, suffix: "+", label: "Locations" },
  { value: 9, suffix: "+", label: "Years" },
  { value: 20, suffix: "+", label: "Fitness Programs" },
];

const marqueeText =
  "25000+ Members · 5+ Locations · 9+ Years · Expanding Globally · Open a Franchise · Forever Fit Forever Strong · ";

/* ---- Hero Section ---- */
const HeroSection = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [trialOpen, setTrialOpen] = useState(false);

  return (
    <section
      id="hero"
    className="section-dark relative isolate flex min-h-[100vh] flex-col overflow-hidden">
      {/* Background video: Hero section only */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <LazyHeroVideo />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Gradient for readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex flex-1 items-center pt-20 md:pt-24">
        <div className="section-container relative w-full py-12 lg:py-16">
          {/* Wireframe dumbbell watermark */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
            <div
              className="dumbbell-rotate"
              style={{ perspective: "800px" }}
            >
              <svg
                width="300"
                height="300"
                viewBox="0 0 200 200"
                fill="none"
                stroke="hsl(355, 78%, 56%)"
                strokeWidth="1.5"
              >
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
            className="relative z-10 max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mb-6 inline-block"
            >
              <span className="label-text rounded-full border border-primary/20 bg-primary/10 px-4 py-2 tracking-[0.3em] text-primary">
                #ZiddJazbaaJunoon
              </span>
            </motion.div>

            <h1
              className="font-display mb-6 leading-[0.9] text-dark-foreground"
              style={{
                fontSize: "clamp(2.5rem, 3vw + 1rem, 5rem)",
              }}
            >
              <StampedText text="Thriving to be India's" />
              <br />
              <StampedText
                text="Number 1 fitness ecosystem"
                delay={0.6}
              />
              <br />
              <span className="gradient-text">
                <StampedText text="Empire" delay={1.2} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="font-body mb-8 max-w-lg text-base leading-relaxed text-dark-muted md:text-lg"
            >
              From premium gyms to gym equipment, gym AI automation and
              end to end gym setup solutions. Join 25k+ members accross
              all our location.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.5 }}
              className="flex flex-col flex-wrap gap-4 sm:flex-row"
            >
              <motion.button
                type="button"
                onClick={() => setTrialOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group animate-pulse-glow flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/30 label-text"
              >
                Start Free Trial
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.button>

              <MotionLink
                to="/programs"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center justify-center gap-3 rounded-full border border-dark-foreground/20 px-8 py-4 font-bold text-dark-foreground transition-all hover:border-primary hover:text-primary label-text"
              >
                Explore Programs
              </MotionLink>

              <motion.button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex cursor-pointer items-center justify-center gap-3 font-bold text-dark-muted transition-colors hover:text-primary label-text"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/60 bg-primary/10 transition-all group-hover:bg-primary/20">
                  <Play
                    size={14}
                    className="ml-0.5 text-primary"
                    fill="hsl(355, 78%, 56%)"
                  />
                </span>
                Watch Our Story
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats strip with EKG */}
      <div className="relative z-10 border-t border-dark-foreground/10 bg-dark/70 backdrop-blur-sm">
        <div className="relative">
          <EKGLine />

          <div className="section-container relative z-10 grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
            {stats.map((stat) => (
              <Counter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ticker tape marquee */}
      <div className="relative z-10 overflow-hidden border-t border-dark-foreground/5 bg-dark/60 py-3">
        <div className="flex">
          <div className="marquee-track flex-shrink-0 whitespace-nowrap">
            <span className="font-body text-sm tracking-wider text-dark-muted">
              {marqueeText.repeat(8)}
            </span>
          </div>
        </div>
      </div>

      {/* YouTube modal */}
      <YouTubeModal
        open={videoModalOpen}
        onOpenChange={setVideoModalOpen}
      />

      {/* Free trial modal */}
      <AnimatePresence>
        <FreeTrialModal
          open={trialOpen}
          onOpenChange={setTrialOpen}
        />
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
