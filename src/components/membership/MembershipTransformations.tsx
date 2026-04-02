import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import { useParallax } from "@/hooks/useParallax";

export default function MembershipTransformations() {
  const reduce = useReducedMotion();
  const { ref, y } = useParallax<HTMLDivElement>([-25, 25]);

  const transformationStats = useMemo(
    () => [
      {
        value: "8.3",
        unit: "kg",
        label: "Average fat lost",
        timeframe: "in 90 days",
        icon: "📉",
        color: "#22C55E",
        source: "Weight Loss Program members",
      },
      {
        value: "500",
        unit: "+",
        label: "Active members",
        timeframe: "across Jaipur & Sikar",
        icon: "👥",
        color: "#E8000E",
        source: "PowerFit studios",
      },
      {
        value: "94",
        unit: "%",
        label: "Report better sleep",
        timeframe: "within 30 days",
        icon: "😴",
        color: "#7C3AED",
        source: "Yoga & Meditation members",
      },
      {
        value: "4.9",
        unit: "/5",
        label: "Member satisfaction",
        timeframe: "across all programs",
        icon: "⭐",
        color: "#F59E0B",
        source: "Google Reviews & surveys",
      },
      {
        value: "89",
        unit: "%",
        label: "Hit a new personal record",
        timeframe: "within 45 days",
        icon: "🏆",
        color: "#FF6B00",
        source: "Strength program members",
      },
      {
        value: "7",
        unit: "+",
        label: "Years of proven results",
        timeframe: "since 2017",
        icon: "📅",
        color: "#E8000E",
        source: "PowerFit India",
      },
    ],
    [],
  );

  return (
    <section className="py-16 md:py-24" style={{ background: "#0A0A0A", position: "relative", overflow: "hidden" }}>
      {/* Background image with parallax */}
      <motion.div
        ref={ref}
        className="absolute inset-0"
        style={{ y: reduce ? 0 : y, opacity: 0.25 }}
        aria-hidden="true"
      >
        <img src="/images/membership-stats-bg.jpg" alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.8) 45%, rgba(10,10,10,1) 100%)" }} />

      <div className="relative z-10 max-w-[var(--content-max-width)] mx-auto px-4">
        <motion.h2
          className="text-4xl lg:text-5xl font-black text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Happens When You Join
        </motion.h2>

        <div className="relative">
          <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden="true">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
            <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformationStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center p-6 rounded-3xl border border-white/10 bg-zinc-950/40"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="flex items-end gap-1 mb-2">
                  <CountUp
                    value={stat.value}
                    className="text-6xl lg:text-7xl font-black leading-none tabular-nums"
                    style={{ color: stat.color }}
                  />
                  <span className="text-4xl font-black text-zinc-400 mb-1">{stat.unit}</span>
                </div>
                <div className="text-white font-bold text-base mb-1">{stat.label}</div>
                <div className="text-zinc-500 text-sm">{stat.timeframe}</div>
                <div className="text-zinc-700 text-xs mt-2">{stat.source}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EKG accent */}
        <div className="mt-12 flex justify-center">
          <svg width="100%" height="64" viewBox="0 0 1200 64" aria-hidden="true" className="opacity-70">
            <path
              d="M0,32 L80,32 L120,12 L160,52 L200,32 L260,32 L300,22 L340,46 L380,32 L450,32 L500,10 L540,54 L580,32 L640,32 L690,18 L730,44 L780,32 L880,32 L920,16 L980,48 L1040,32 L1120,32 L1200,24"
              fill="none"
              stroke="#E8000E"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

