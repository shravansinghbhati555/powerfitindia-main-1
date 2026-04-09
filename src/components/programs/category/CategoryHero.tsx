import { useMemo } from "react";
import { motion } from "framer-motion";
import type { CategoryTheme } from "@/config/categoryThemes";
import WhatsAppCTA from "@/components/programs/category/WhatsAppCTA";
import type { Program } from "@/data/programs";
import { Link } from "react-router-dom";

function textureStyle(bgTexture: string, accent: string) {
  switch (bgTexture) {
    case "iron-plates":
      return {
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 22px)",
      };
    case "pulse-waves":
      return {
        backgroundImage: `radial-gradient(circle at 30% 40%, ${accent}22, transparent 55%), radial-gradient(circle at 70% 60%, ${accent}1c, transparent 60%)`,
      };
    case "mandala-geometry":
      return {
        backgroundImage: `radial-gradient(circle at 50% 45%, ${accent}26, transparent 62%)`,
      };
    case "diagonal-slashes":
      return {
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 18px)",
      };
    default:
      return {};
  }
}

function WordAnim({
  text,
  style,
  accent,
}: {
  text: string;
  style: CategoryTheme["animationStyle"];
  accent: string;
}) {
  const words = useMemo(() => text.split(" "), [text]);
  const initial =
    style === "slam"
      ? { opacity: 0, y: -26 }
      : style === "pulse"
        ? { opacity: 0, scale: 0.96 }
        : style === "float"
          ? { opacity: 0, y: 18 }
          : { opacity: 0, x: -26 };

  return (
    <span className="inline-block">
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          initial={initial}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-3"
          style={{ textShadow: style === "slam" ? `0 0 30px ${accent}2a` : undefined }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

export default function CategoryHero({ theme, programs }: { theme: CategoryTheme; programs: Program[] }) {
  const stats = useMemo(() => {
    const totalPrograms = programs.length;
    const avgDuration = programs.length
      ? `${Math.round(
          programs
            .map((p) => parseInt(p.duration.replace(/[^0-9]/g, ""), 10))
            .filter((n) => Number.isFinite(n))
            .reduce((a, b) => a + b, 0) / Math.max(1, programs.length),
        )} min avg`
      : "—";

    const best = programs
      .flatMap((p) => p.realDataStats)
      .find((s) => Boolean(s?.value && s?.metric));
    const bestLine = best ? `${best.value} · ${best.metric}` : "Real results tracked";
    return [
      { k: "Programs", v: `${totalPrograms}`, s: "in this category" },
      { k: "Session", v: avgDuration, s: "typical duration" },
      { k: "Proof", v: bestLine, s: "from member data" },
    ];
  }, [programs]);

  return (
    <section className="relative overflow-hidden pt-24 pb-16" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: "#0A0A0A" }} />
        <div className="absolute inset-0 opacity-100" style={textureStyle(theme.bgTexture, theme.accent)} />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url(${theme.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(0) contrast(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />
      </div>

      <div className="relative section-container">
        <div className="text-sm text-zinc-400 mb-4">
          <Link to="/" className="hover:text-white underline underline-offset-4">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link to="/programs" className="hover:text-white underline underline-offset-4">
            Programs
          </Link>{" "}
          &gt; <span className="text-white">{theme.label}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold border"
          style={{ backgroundColor: `${theme.accent}18`, borderColor: `${theme.accent}70`, color: theme.accent }}
        >
          <span className="text-lg">{theme.icon}</span>
          {theme.label}
        </motion.div>

        <div className="mt-6 max-w-5xl">
          <div className="text-zinc-300 font-bold tracking-widest uppercase text-xs">{theme.heroTagline}</div>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-[0.95] mt-3">
            <WordAnim text={theme.heroHeadline} style={theme.animationStyle} accent={theme.accent} />
          </h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-5 text-zinc-200 leading-relaxed text-base md:text-lg">
            {theme.heroSub}
          </motion.p>

          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.k} className="rounded-2xl bg-black/35 border border-white/10 p-4">
                <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase">{s.k}</div>
                <div className="mt-2 text-white font-black text-lg">{s.v}</div>
                <div className="text-xs text-zinc-500 mt-1">{s.s}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <WhatsAppCTA text="💬 WhatsApp to Enquire" message={theme.whatsappText} size="large" />
            <a
              href="#see-programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-xl font-black text-lg bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800 transition-all active:scale-95 min-h-[48px]"
            >
              ↓ See Programs
            </a>
          </div>
        </div>
      </div>

      {theme.animationStyle === "pulse" && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${theme.accent}33, transparent 55%)`,
          }}
        />
      )}
    </section>
  );
}

