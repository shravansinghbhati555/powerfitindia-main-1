import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import type { ProgramVisual } from "@/config/programVisuals";
import type { CategoryTheme } from "@/config/categoryThemes";

interface Props { program: Program; visuals: ProgramVisual; theme: CategoryTheme }

export default function DetailComparePlans({ program, visuals, theme }: Props) {
  const plans = visuals.membershipPlans;
  const waMsg = (planName: string) =>
    encodeURIComponent(`Hi! I want to know the pricing for ${program.name} — ${planName} plan at PowerFit. Please share details.`);

  return (
    <section className="py-16 md:py-24" style={{ background: "#0A0A0A" }} aria-label="Membership plans">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="font-display text-3xl md:text-5xl text-white mb-10"
        >
          Choose Your {program.name} Plan
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, i) => (
            <motion.div key={plan.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 border transition-all ${
                plan.highlighted
                  ? 'md:scale-105 border-2'
                  : 'bg-zinc-900 border-zinc-800 hover:border-zinc-600'
              }`}
              style={plan.highlighted ? { borderColor: theme.accent, background: `linear-gradient(180deg, ${theme.accent}10, #111)` } : { background: "#111" }}
            >
              {plan.badge && (
                <div className="absolute -top-3 right-4 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: theme.accent }}>
                  {plan.badge}
                </div>
              )}

              <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
              <div className="text-zinc-400 text-sm mb-4">{plan.sessions}</div>

              <div className="border-t border-zinc-800 pt-4 space-y-2 mb-6">
                {plan.features.map((f, fi) => (
                  <motion.div key={fi} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.3 + fi * 0.05 }}
                    className="flex items-start gap-2 text-sm text-zinc-300">
                    <span style={{ color: theme.accent }}>✅</span>
                    <span>{f}</span>
                  </motion.div>
                ))}
              </div>

              <a href={`https://wa.me/918619527263?text=${waMsg(plan.name)}`} target="_blank" rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm transition-colors ${
                  plan.highlighted
                    ? 'bg-green-600 hover:bg-green-500 text-white'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600'
                }`}>
                💬 Ask About {plan.name} Pricing
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-zinc-500 text-sm mb-4">
            💡 Pricing is discussed personally by our team based on your city, goals, and joining date. WhatsApp us for current offers and batch availability.
          </p>
          <a href={`https://wa.me/918619527263?text=${encodeURIComponent(`Hi! I want to know the pricing for ${program.name} at PowerFit. Please share details.`)}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-lg transition-colors">
            💬 Get Pricing & Offers on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
