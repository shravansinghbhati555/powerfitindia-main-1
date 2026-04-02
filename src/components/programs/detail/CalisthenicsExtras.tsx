import { motion } from "framer-motion";
import { MostPopularBadge } from "@/components/ui/MostPopularBadge";

export function CalisthenicsSkillTree({ accentColor }: { accentColor: string }) {
  const skillLevels = [
    {
      level: "BEGINNER",
      color: "#22C55E",
      skills: [
        { name: "Push-up", icon: "💪", days: "Day 1" },
        { name: "Dead Hang", icon: "🤲", days: "Day 1" },
        { name: "Bodyweight Squat", icon: "🦵", days: "Day 1" },
        { name: "Plank Hold", icon: "🧱", days: "Day 7" },
      ],
    },
    {
      level: "INTERMEDIATE",
      color: "#3B82F6",
      skills: [
        { name: "Pull-up", icon: "⬆️", days: "Day 14" },
        { name: "Dip", icon: "↙️", days: "Day 14" },
        { name: "L-sit Hold", icon: "📐", days: "Day 30" },
        { name: "Pike Push-up", icon: "🔺", days: "Day 21" },
      ],
    },
    {
      level: "ADVANCED",
      color: "#F59E0B",
      skills: [
        { name: "Muscle-up", icon: "🔥", days: "Day 60" },
        { name: "Handstand", icon: "🙃", days: "Day 60" },
        { name: "Front Lever", icon: "↔️", days: "Day 75" },
        { name: "Planche Lean", icon: "🏅", days: "Day 90" },
      ],
    },
    {
      level: "ELITE",
      color: "#E8000E",
      skills: [
        { name: "Full Planche", icon: "👑", days: "6 months" },
        { name: "Human Flag", icon: "🚩", days: "6 months" },
        { name: "Back Lever", icon: "🎯", days: "4 months" },
        { name: "One-Arm Pull-up", icon: "⚡", days: "8 months" },
      ],
    },
  ];

  return (
    <section
      className="py-14 px-[var(--gutter)] overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0D0D0D 0%, #111 50%, #0D0D0D 100%)",
        backgroundImage: `radial-gradient(circle at 50% 50%, ${accentColor}08 0%, transparent 70%)`,
      }}
    >
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <div className="text-center mb-10">
          <MostPopularBadge size="md" className="mb-3 mx-auto justify-center" />
          <motion.h2 className="text-3xl font-black text-white mt-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Your Skill Progression Path
          </motion.h2>
          <p className="text-zinc-500 text-sm mt-2">From zero to elite — every skill unlocked in order with your coach</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {skillLevels.map((level, li) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: li * 0.15, type: "spring" }}
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: `${level.color}30`,
                background: `linear-gradient(180deg, ${level.color}10 0%, #111 100%)`,
              }}
            >
              <div
                className="px-4 py-3 text-center border-b"
                style={{ borderColor: `${level.color}20`, background: `${level.color}15` }}
              >
                <div className="text-xs font-black tracking-widest" style={{ color: level.color }}>
                  {level.level}
                </div>
              </div>

              <div className="p-3 space-y-2">
                {level.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2 p-2 rounded-xl bg-zinc-900/60"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: li * 0.15 + si * 0.07 }}
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-xl shrink-0">{skill.icon}</span>
                    <div>
                      <div className="text-white text-xs font-bold leading-tight">{skill.name}</div>
                      <div className="text-zinc-600 text-xs">{skill.days}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {li < skillLevels.length - 1 && (
                <div className="hidden lg:flex justify-end pr-2 pb-2">
                  <motion.span className="text-zinc-600 text-lg" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    →
                  </motion.span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-zinc-500 text-sm mb-4">Which skill are you working towards? Let our coach build your personal path.</p>
          <a
            href={`https://wa.me/918619527263?text=${encodeURIComponent(
              "Hi! I want to start Calisthenics at PowerFit and work towards [my goal skill]. Please guide me.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-black text-sm bg-gradient-to-r from-yellow-400 to-orange-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]"
          >
            💬 WhatsApp to Start Your Skill Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function CalisthenicsVsGym({ accentColor }: { accentColor: string }) {
  const comparisons = [
    { metric: "Equipment Cost", calisthenics: "₹0", gym: "₹5,000–₹20,000/yr", winner: "calisthenics" as const },
    { metric: "Can Train Anywhere", calisthenics: "✅ Yes", gym: "❌ Gym only", winner: "calisthenics" as const },
    { metric: "Functional Strength", calisthenics: "⭐⭐⭐⭐⭐", gym: "⭐⭐⭐", winner: "calisthenics" as const },
    { metric: "Body Control & Skills", calisthenics: "⭐⭐⭐⭐⭐", gym: "⭐⭐", winner: "calisthenics" as const },
    { metric: "Joint Health", calisthenics: "⭐⭐⭐⭐⭐", gym: "⭐⭐⭐", winner: "calisthenics" as const },
    { metric: "Fat Loss Speed", calisthenics: "⭐⭐⭐⭐", gym: "⭐⭐⭐⭐", winner: "tie" as const },
    { metric: "Raw Muscle Mass", calisthenics: "⭐⭐⭐⭐", gym: "⭐⭐⭐⭐⭐", winner: "gym" as const },
    { metric: "Injury Risk", calisthenics: "Very Low", gym: "Moderate", winner: "calisthenics" as const },
  ];

  return (
    <section className="py-12 px-[var(--gutter)]" style={{ background: "#111" }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <p className="text-xs font-black tracking-widest uppercase mb-1" style={{ color: accentColor }}>
              THE TRUTH
            </p>
            <h2 className="text-2xl font-black text-white">Calisthenics vs. Traditional Gym</h2>
          </div>
          <MostPopularBadge size="sm" animated={false} />
        </div>

        <div className="rounded-2xl overflow-hidden border border-zinc-800">
          <div className="grid grid-cols-3 bg-zinc-900 border-b border-zinc-800">
            <div className="p-3 text-zinc-500 text-xs font-bold uppercase text-center">Metric</div>
            <div className="p-3 text-center border-x border-zinc-800">
              <div className="text-yellow-400 font-black text-sm">🤸 Calisthenics</div>
              <MostPopularBadge size="sm" animated={false} className="mt-1 mx-auto justify-center scale-90" />
            </div>
            <div className="p-3 text-center">
              <div className="text-zinc-400 font-bold text-sm">🏋️ Traditional Gym</div>
            </div>
          </div>

          {comparisons.map((row, i) => (
            <motion.div
              key={row.metric}
              className="grid grid-cols-3 border-b border-zinc-800/50 last:border-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="p-3 text-zinc-400 text-xs font-semibold flex items-center">{row.metric}</div>
              <div
                className={`p-3 text-center border-x border-zinc-800/50 flex items-center justify-center ${
                  row.winner === "calisthenics" ? "bg-yellow-400/5" : ""
                }`}
              >
                <span className={`text-sm font-bold ${row.winner === "calisthenics" ? "text-yellow-400" : "text-zinc-300"}`}>
                  {row.calisthenics}
                  {row.winner === "calisthenics" ? <span className="ml-1 text-xs">✓</span> : null}
                </span>
              </div>
              <div className="p-3 text-center flex items-center justify-center">
                <span className={`text-sm ${row.winner === "gym" ? "text-white font-bold" : "text-zinc-500"}`}>{row.gym}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-zinc-600 text-xs text-center mt-4">
          Both have merits. Our coaches often recommend combining Calisthenics with Strength Training for optimal results.
        </p>
      </div>
    </section>
  );
}
