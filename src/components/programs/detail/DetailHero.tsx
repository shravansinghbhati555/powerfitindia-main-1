import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Program } from "@/data/programs";
import type { ProgramVisual } from "@/config/programVisuals";
import type { CategoryTheme } from "@/config/categoryThemes";

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
  const heroRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
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

  const words = program.name.split(" ");

  return (
    <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Video / Poster Background */}
      <div className="absolute inset-0">
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
              className={`absolute inset-0 w-full h-full object-cover hidden md:block transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </>
        ) : (
          <img src={visuals.heroBg} alt={`${program.name} at PowerFit India`} className="absolute inset-0 w-full h-full object-cover" />
        )}
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${theme.accentGlow}, transparent 40%)` }} />
      </div>

      {/* Particle overlay */}
      <div className={`absolute inset-0 pointer-events-none ${particleStyles[visuals.bgParticle] || ''}`} />

      {/* Content */}
      <div className="relative z-10 section-container py-24 md:py-32 max-w-[700px]">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-6 text-sm text-zinc-400">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/programs" className="hover:text-white transition-colors">Programs</Link></li>
            <li>/</li>
            <li><Link to={`/programs/${program.categoryId}`} className="hover:text-white transition-colors">{program.category}</Link></li>
            <li>/</li>
            <li className="text-white">{program.name}</li>
          </ol>
        </nav>

        {/* Badge */}
        <motion.div
          initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6 border"
          style={{ borderColor: theme.accent + '40', background: theme.accent + '15', color: theme.accent }}
        >
          {theme.icon} {program.category} · {program.intensity}
        </motion.div>

        {/* H1 */}
        <h1 className="font-display text-5xl md:text-7xl font-black text-white leading-[1.05] mb-4">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={anim.initial}
              animate={anim.animate}
              transition={{ ...anim.transition, delay: 0.3 + i * 0.08 } as any}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="text-lg italic mb-4" style={{ color: theme.accent }}
        >
          {program.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="text-zinc-300 leading-relaxed mb-6 max-w-xl"
        >
          {program.description.slice(0, 180)}…
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
          className="flex flex-wrap gap-2 mb-4"
        >
          {[
            { icon: "⏱", label: program.duration },
            { icon: "📅", label: `${program.sessionsPerWeek} per week` },
            { icon: "👥", label: program.groupSize },
            { icon: "💪", label: program.intensity },
          ].map((s, i) => (
            <span key={i} className="rounded-full px-3 py-1.5 bg-zinc-900/80 border border-zinc-700 text-sm text-zinc-200">
              {s.icon} {s.label}
            </span>
          ))}
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {program.available.map(a => (
            <span key={a} className="rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider border"
              style={{ borderColor: theme.accent + '40', color: theme.accent }}>
              {a === "In-Studio" ? "🏋️ In-Studio" : a === "Online" ? "💻 Online" : "🏠 Home Visit"}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-3"
        >
          <a href={`https://wa.me/918619527263?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold text-base transition-colors">
            💬 WhatsApp to Join
          </a>
          <a href={`https://wa.me/918619527263?text=${trialMsg}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-base transition-colors border-2"
            style={{ borderColor: theme.accent, color: theme.accent }}>
            🎯 Book Free Trial
          </a>
          <a href="tel:+918619527263"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-base transition-colors border border-zinc-600">
            📞 Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
