import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Program } from "@/data/programs";
import type { ProgramVisual } from "@/config/programVisuals";
import type { CategoryTheme } from "@/config/categoryThemes";
import CountUp from "@/components/ui/CountUp";

const particleStyles: Record<string, string> = {
  sparks: "detail-particles-sparks",
  explosion: "detail-particles-explosion",
  flames: "detail-particles-flames",
  waves: "detail-particles-waves",
  orbs: "detail-particles-orbs",
  confetti: "detail-particles-confetti",
  petals: "detail-particles-petals",
  stars: "detail-particles-stars",
  shockwave: "detail-particles-shockwave",
  "digital-grid": "detail-particles-digital-grid",
};

function h1Animation(style: string) {
  switch (style) {
    case "slam": return { initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { type: "spring", stiffness: 300, damping: 15 } };
    case "float": return { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6, ease: "easeOut" } };
    case "pulse": return { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 0.5 } };
    case "strike": return { initial: { x: -30, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { duration: 0.4 } };
    default: return { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } };
  }
}

interface Props {
  program: Program;
  visuals: ProgramVisual;
  theme: CategoryTheme;
}

export default function DetailHero({ program, visuals, theme }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const reduce = useReducedMotion();
  const anim = h1Animation(visuals.accentAnimation);

  const waMsg = encodeURIComponent(`Hi PowerFit! I want to join ${program.name}. Please share details.`);
  const trialMsg = encodeURIComponent(`Hi! I'd like to book a free trial for ${program.name} at PowerFit.`);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { vid.play().catch(() => {}); }
      else { vid.pause(); }
    }, { threshold: 0.25 });
    io.observe(vid);
    return () => io.disconnect();
  }, []);

  const words = useMemo(() => program.name.split(" "), [program.name]);
  const particles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      key: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${4 + Math.random() * 10}px`,
      delay: `${Math.random() * 2.5}s`,
      dur: `${3 + Math.random() * 5}s`,
      opacity: 0.35 + Math.random() * 0.45,
    }));
  }, []);

  return (
    <section className="relative h-full flex items-stretch overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Video / Poster Background */}
      <div className="absolute inset-0 opacity-[0.3]">
        {visuals.heroVideo ? (
          <>
            <img src={visuals.heroVideoPoster || visuals.heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <video
              ref={videoRef}
              src={visuals.heroVideo}
              poster={visuals.heroVideoPoster || visuals.heroBg}
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={() => setVideoLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover hidden md:block transition-opacity duration-700 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
            />
          </>
        ) : (
          <img
            src={visuals.heroBg}
            alt={`${program.name} at PowerFit India`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        )}
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 30%, transparent 60%, rgba(0,0,0,0.4) 100%)",
          }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${theme.accent}40 0%, transparent 50%)` }} />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {!reduce &&
          particles.map((p) => (
            <div
              key={p.key}
              className="absolute rounded-full detail-particle"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                background: theme.accent,
                opacity: p.opacity,
                animationDelay: p.delay,
                animationDuration: p.dur,
                filter: "blur(0.2px)",
              }}
            />
          ))}
      </div>

      {/* Decorative streak */}
      {!reduce && (
        <div
          aria-hidden="true"
          className="absolute top-1/4 -left-24 w-[2px] h-[240px] opacity-60"
          style={{
            background: `linear-gradient(to bottom, transparent, ${theme.accent}80, transparent)`,
            transform: "rotate(35deg)",
            animation: "marquee-scroll 8s linear infinite",
          }}
        />
      )}

      {/* Hidden pattern overlay (optional) */}
      <div className={`absolute inset-0 pointer-events-none opacity-40 ${particleStyles[visuals.bgParticle] || ""}`} />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-12 h-full">
          <motion.div
            className="col-span-12 lg:col-span-7 flex flex-col justify-center px-[var(--gutter)] py-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-500 mb-5 flex-wrap">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-zinc-700">/</span>
              <Link to="/programs" className="hover:text-white transition-colors">
                Programs
              </Link>
              <span className="text-zinc-700">/</span>
              <Link to={`/programs/${program.categoryId}`} className="hover:text-white transition-colors" style={{ color: theme.accent }}>
                {program.category}
              </Link>
              <span className="text-zinc-700">/</span>
              <span className="text-white">{program.name}</span>
            </nav>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2 self-start mb-5 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase border"
              style={{ background: `${theme.accent}20`, border: `1px solid ${theme.accent}50`, color: theme.accent }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: theme.accent }} />
              {program.category} · {program.intensity}
            </motion.div>

            {/* H1 */}
            <h1 className="text-5xl lg:text-7xl font-black leading-none  mb-4">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -40, scale: 1.2 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 + i * 0.1 }}
                  className={`block ${i === 1 ? "text-[var(--accent)]" : "text-white"}`}
                  style={{ "--accent": theme.accent } as React.CSSProperties}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 1 }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="text-lg text-zinc-300 italic mb-6 max-w-lg"
            >
              {program.tagline}
            </motion.p>

            {/* Quick stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="flex flex-wrap gap-2 mb-8">
              {[
                { icon: "⏱", val: program.duration },
                { icon: "📅", val: `${program.sessionsPerWeek}/wk` },
                { icon: "👥", val: program.groupSize.split("(")[0]?.trim() ?? program.groupSize },
                ...program.available.map((a) => ({
                  icon: a === "In-Studio" ? "🏋️" : a === "Online" ? "💻" : "🏠",
                  val: a,
                })),
              ].map((s, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 + i * 0.07 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/10"
                >
                  {s.icon} {s.val}
                </motion.span>
              ))}
            </motion.div>

           
            {/* CTA row */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/918619527263?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-white text-sm bg-[#25D366] hover:bg-[#20BA5C] shadow-lg hover:shadow-green-500/30 hover:scale-105 active:scale-95 transition-all duration-200 min-h-[48px]"
              >
                💬 Join {program.name}
              </a>
              <a
                href={`https://wa.me/918619527263?text=${trialMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm border-2 hover:scale-105 transition-all min-h-[48px]"
                style={{ borderColor: theme.accent, background: `${theme.accent}20` }}
              >
                🎯 Free Trial
              </a>
              <a
                href="tel:+918619527263"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-white text-sm bg-zinc-800 hover:bg-zinc-700 transition-all min-h-[48px]"
              >
                📞 Call
              </a>
            </motion.div>
          </motion.div>

          {/* Right side stat ring (desktop) */}
          <div className="col-span-5 hidden lg:flex flex-col justify-center items-center gap-4 pr-[var(--gutter)]">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-full border-2 opacity-20 animate-spin" style={{ borderColor: theme.accent, animationDuration: "20s" }} />
              <div
                className="absolute inset-8 rounded-full border border-dashed opacity-30"
                style={{
                  borderColor: theme.accent,
                  animation: reduce ? undefined : "spin 12s linear infinite",
                  animationDirection: "reverse",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="text-6xl mb-2">{theme.icon}</div>
                <div className="text-5xl font-black" style={{ color: theme.accent }}>
                  <CountUp value={program.realDataStats[0]?.value ?? "—"} />
                </div>
                <div className="text-white text-sm font-bold mt-1">{program.realDataStats[0]?.metric ?? program.benefits[0]?.title}</div>
                <div className="text-zinc-500 text-xs">in {program.realDataStats[0]?.timeframe ?? "—"}</div>
              </div>
            </div>

            {program.benefits.slice(1, 4).map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border w-full max-w-xs"
                style={{ background: `${theme.accent}${i === 0 ? "20" : "10"}`, borderColor: `${theme.accent}30` }}
              >
                <span className="text-xl">{b.icon}</span>
                <div>
                  <div className="font-black text-lg" style={{ color: theme.accent }}>
                    <CountUp value={b.value} />
                  </div>
                  <div className="text-zinc-400 text-xs">{b.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        {!reduce && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-500"
          >
            <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
