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
    <section
      className="py-12 px-[var(--gutter)]"
      style={{ background: `radial-gradient(ellipse at 50% 100%, ${theme.accent}15 0%, #0A0A0A 70%)` }}
      aria-label="Membership plans"
    >
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-white mb-2"
          >
            Choose Your Plan
          </motion.h2>
          <p className="text-zinc-500 text-sm">Pricing discussed personally — WhatsApp for current offers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring" }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-5 flex flex-col ${plan.highlighted ? "md:scale-105" : ""}`}
              style={{
                background: plan.highlighted
                  ? `linear-gradient(135deg, ${theme.accent}30, ${theme.accent}15)`
                  : "linear-gradient(135deg, #1a1a1a, #111)",
                border: `${plan.highlighted ? "2px" : "1px"} solid ${plan.highlighted ? theme.accent : theme.accent + "30"}`,
                boxShadow: plan.highlighted ? `0 0 40px ${theme.accent}30` : "none",
              }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-black text-white" style={{ background: theme.accent }}>
                  {plan.badge}
                </div>
              )}

              <h3 className="text-xl font-black text-white mb-1">{plan.name}</h3>
              <div className="text-sm mb-3" style={{ color: theme.accent }}>
                {plan.sessions}
              </div>

              <ul className="space-y-1.5 flex-1 mb-5">
                {plan.features.map((feat, fi) => (
                  <motion.li
                    key={fi}
                    className="flex items-start gap-2 text-xs text-zinc-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + fi * 0.06 }}
                  >
                    <span className="text-base flex-shrink-0" style={{ color: theme.accent }}>
                      ✓
                    </span>
                    {feat}
                  </motion.li>
                ))}
              </ul>

              <a
                href={`https://wa.me/918619527263?text=${waMsg(plan.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-black text-white transition-all hover:scale-105"
                style={{ background: plan.highlighted ? theme.accent : "#25D366" }}
              >
                💬 {plan.highlighted ? "Get Best Offer" : "Ask Pricing"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
