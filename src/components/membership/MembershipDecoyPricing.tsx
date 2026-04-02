import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type BillingPeriod = "Monthly" | "Quarterly" | "Annual";

type TierFeature = { text: string; included: boolean };

type MembershipTier = {
  id: "premium" | "elite" | "basic";
  name: string;
  emoji: string;
  tagline: string;
  monthlyPrice: number;
  quarterlyPrice: number;
  annualPrice: number;
  accentColor: string;
  badge: string | null;
  highlighted: boolean;
  features: TierFeature[];
  cta: string;
  whatsappMsg: string;
  anchorNote: string;
  savingsVsPremium?: string;
};

const WA_PHONE = "918619527263";

function formatINR(n: number) {
  return Math.round(n).toLocaleString("en-IN");
}

function getTierPrice(tier: MembershipTier, period: BillingPeriod) {
  if (period === "Monthly") return tier.monthlyPrice;
  if (period === "Quarterly") return tier.quarterlyPrice;
  return tier.annualPrice;
}

function getBilledLabel(period: BillingPeriod) {
  if (period === "Monthly") return "";
  if (period === "Quarterly") return "every 3 months";
  return "annually";
}

function calcSavingsPercent(tier: MembershipTier, period: BillingPeriod) {
  if (period === "Monthly") return 0;
  const monthly = tier.monthlyPrice;
  const current = getTierPrice(tier, period);
  if (!monthly) return 0;
  return Math.max(0, Math.round((1 - current / monthly) * 100));
}

export default function MembershipDecoyPricing() {
  const membershipTiers: MembershipTier[] = useMemo(
    () => [
      {
        id: "premium",
        name: "Premium",
        emoji: "👑",
        tagline: "For those who want everything",
        monthlyPrice: 3499,
        quarterlyPrice: 2999,
        annualPrice: 2449,
        accentColor: "#9333EA",
        badge: null,
        highlighted: false,
        features: [
          { text: "Access all 5 studios", included: true },
          { text: "All 13+ programs", included: true },
          { text: "Personal trainer (3 sessions/week)", included: true },
          { text: "Unlimited group classes", included: true },
          { text: "Monthly InBody scan", included: true },
          { text: "Full nutrition coaching", included: true },
          { text: "Steam & recovery lounge", included: true },
          { text: "2 guest passes/month", included: true },
          { text: "Priority batch booking", included: true },
          { text: "Towel service", included: true },
        ],
        cta: "Ask About Premium",
        whatsappMsg: "Hi! I want the Premium membership at PowerFit. Please share details and pricing.",
        anchorNote: "All-inclusive — for the committed",
      },
      {
        id: "elite",
        name: "Elite",
        emoji: "⭐",
        tagline: "Everything you need. Nothing you don’t.",
        monthlyPrice: 2499,
        quarterlyPrice: 2099,
        annualPrice: 1749,
        accentColor: "#E8000E",
        badge: "🏆 MOST POPULAR",
        highlighted: true,
        features: [
          { text: "Access all 5 studios", included: true },
          { text: "All 13+ programs", included: true },
          { text: "Personal trainer (2 sessions/week)", included: true },
          { text: "Unlimited group classes", included: true },
          { text: "Monthly InBody scan", included: true },
          { text: "Full nutrition coaching", included: true },
          { text: "Steam & recovery lounge", included: true },
          { text: "2 guest passes/month", included: false },
          { text: "Priority batch booking", included: true },
          { text: "Towel service", included: false },
        ],
        cta: "💬 Join Elite — Best Value",
        whatsappMsg: "Hi PowerFit! I want the Elite membership. Please share current pricing and joining details.",
        savingsVsPremium: "₹12,000/year",
        anchorNote: "83% of members choose this",
      },
      {
        id: "basic",
        name: "Basic",
        emoji: "🏋️",
        tagline: "Start your journey",
        monthlyPrice: 1499,
        quarterlyPrice: 1299,
        annualPrice: 999,
        accentColor: "#6B7280",
        badge: null,
        highlighted: false,
        features: [
          { text: "Access 1 studio (nearest)", included: true },
          { text: "Core programs (6 of 13)", included: true },
          { text: "Personal trainer", included: false },
          { text: "Unlimited group classes", included: true },
          { text: "Monthly InBody scan", included: false },
          { text: "Nutrition coaching", included: false },
          { text: "Steam & recovery lounge", included: false },
          { text: "2 guest passes/month", included: false },
          { text: "Priority batch booking", included: false },
          { text: "Towel service", included: false },
        ],
        cta: "Start Basic",
        whatsappMsg: "Hi! I want to start with the Basic membership at PowerFit. Please share details.",
        anchorNote: "Best for complete beginners",
      },
    ],
    [],
  );

  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("Monthly");
  const [timeLeftSec, setTimeLeftSec] = useState(22 * 60 + 0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setTimeLeftSec((s) => (s <= 0 ? 0 : s - 1));
    }, 1000);
    return () => window.clearInterval(t);
  }, []);

  const timerLabel = useMemo(() => {
    const m = Math.floor(timeLeftSec / 60);
    const s = timeLeftSec % 60;
    const mm = String(m).padStart(2, "0");
    const ss = String(s).padStart(2, "0");
    return `${mm}:${ss}`;
  }, [timeLeftSec]);

  const TierCard = ({ tier, index }: { tier: MembershipTier; index: number }) => {
    const current = getTierPrice(tier, billingPeriod);
    const savingsPercent = calcSavingsPercent(tier, billingPeriod);
    const isElite = tier.id === "elite";

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className="relative"
      >
        {tier.highlighted && (
          <motion.div
            aria-hidden="true"
            className="absolute -inset-[2px] rounded-3xl -z-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(232,0,14,0.95), rgba(255,107,0,0.65), rgba(232,0,14,0.95))",
              backgroundSize: "200% 200%",
              filter: "blur(0px)",
              animation: "goldShimmer 2.8s linear infinite",
            }}
          />
        )}

        <div
          className={`rounded-3xl p-6 md:p-7 border relative ${
            tier.highlighted
              ? "border-yellow-400/60 bg-zinc-900/60 shadow-[0_0_60px_rgba(232,0,14,0.18)]"
              : "border-white/10 bg-zinc-950/40"
          } ${tier.highlighted ? "transform lg:scale-[1.04]" : ""}`}
          style={tier.highlighted ? { boxShadow: `0 0 40px rgba(232,0,14,0.15)` } : undefined}
        >
          {tier.highlighted && tier.badge && (
            <motion.div
              className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-5 py-2 rounded-full text-white font-black text-sm shadow-[0_0_30px_rgba(232,0,14,0.35)]"
              style={{
                background: "linear-gradient(135deg, rgba(232,0,14,0.95), rgba(255,107,0,0.9))",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <span aria-hidden="true">⭐</span>
              <span>{tier.badge.replace("🏆 ", "")}</span>
            </motion.div>
          )}

          {tier.savingsVsPremium && (
            <motion.div
              className="absolute -top-3 -right-3 z-10 w-20 h-20 rounded-full bg-yellow-400 text-black font-black text-xs shadow-lg flex items-center justify-center text-center"
              style={{ animation: "savingsPop 0.55s ease-out both" }}
            >
              <div className="leading-tight">
                <div className="text-base">💰</div>
                <div>Save</div>
                <div className="text-[11px]">{tier.savingsVsPremium}</div>
              </div>
            </motion.div>
          )}

          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    background: tier.highlighted
                      ? "linear-gradient(135deg, rgba(232,0,14,0.28), rgba(232,0,14,0.1))"
                      : "rgba(255,255,255,0.04)",
                    border: `1px solid ${tier.highlighted ? "rgba(234,179,8,0.25)" : "rgba(255,255,255,0.08)"}`,
                  }}
                >
                  {tier.emoji}
                </div>
                <div>
                  <div className="text-white font-black text-2xl leading-tight">{tier.name}</div>
                  <div className="text-zinc-400 text-xs font-bold">{tier.tagline}</div>
                </div>
              </div>
            </div>
          </div>

          {/* PRICE */}
          <motion.div
            className="mt-6 text-center"
            initial={{ scale: 4, opacity: 0, filter: "blur(12px)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.15 }}
          >
            <div className="flex items-start justify-center gap-1">
              <span className="text-zinc-400 text-lg font-bold mt-2">₹</span>
              <span
                className={`font-black leading-none ${
                  tier.highlighted ? "text-7xl text-white" : "text-5xl text-zinc-300"
                }`}
                style={{ color: tier.highlighted ? undefined : tier.accentColor }}
              >
                {formatINR(current)}
              </span>
              <span className="text-zinc-500 text-sm mt-auto mb-1">/mo</span>
            </div>

            {billingPeriod !== "Monthly" && (
              <div className="text-zinc-500 text-xs mt-1">Billed {getBilledLabel(billingPeriod)}</div>
            )}

            {billingPeriod !== "Monthly" && (
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-zinc-600 text-xs line-through">
                  ₹{formatINR(tier.monthlyPrice)}/mo
                </span>
                <span className="text-green-400 text-xs font-bold">Save {savingsPercent}%</span>
              </div>
            )}
          </motion.div>

          {/* Elite urgency timer */}
          {isElite && (
            <motion.div
              className="mt-5 rounded-2xl border border-red-400/25 bg-red-600/10 py-3 px-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-red-400 text-xs font-black tracking-widest uppercase">
                Next batch slot closing in
              </div>
              <div
                className="text-white font-black text-3xl tabular-nums"
                style={{ animation: "urgencyPulse 1.6s ease-in-out infinite" }}
              >
                {timerLabel}
              </div>
              <div className="text-zinc-400 text-xs mt-1">Limited spaces for Jaipur + Sikar</div>
            </motion.div>
          )}

          <div className="text-center mt-3">
            <p className="text-zinc-500 text-xs">{tier.anchorNote}</p>
          </div>

          {/* FEATURES */}
          <ul className="mt-5 space-y-2 mb-6">
            {tier.features.map((feat, fi) => (
              <motion.li
                key={feat.text}
                className="flex items-center gap-2.5 text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + fi * 0.05 }}
              >
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black ${
                    feat.included ? "bg-red-600 text-white" : "bg-zinc-900 text-zinc-700 border border-zinc-800"
                  }`}
                  aria-hidden="true"
                >
                  {feat.included ? "✓" : "×"}
                </span>
                <span className={feat.included ? "text-zinc-200" : "text-zinc-600 line-through"}>{feat.text}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(tier.whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-black text-base transition-all hover:scale-[1.02] ${
              tier.highlighted
                ? "bg-red-600 hover:bg-red-500 text-white shadow-[0_0_30px_rgba(232,0,14,0.4)]"
                : "bg-[#25D366] text-white"
            }`}
          >
            <motion.span animate={tier.highlighted ? { x: [0, 3, 0] } : undefined} transition={{ duration: 1, repeat: Infinity }}>
              💬
            </motion.span>
            {tier.cta}
          </a>
        </div>
      </motion.div>
    );
  };

  const mobileOrder = ["elite", "premium", "basic"] as const;
  const desktopOrder = ["premium", "elite", "basic"] as const;

  const tiersById = useMemo(() => {
    const m = new Map(membershipTiers.map((t) => [t.id, t] as const));
    return m;
  }, [membershipTiers]);

  return (
    <section id="pricing" className="py-16 md:py-24" style={{ background: "#0A0A0A" }}>
      <div className="max-w-[var(--content-max-width)] mx-auto px-4">
        <div className="text-center mb-8">
          <motion.p
            className="text-red-400 text-xs font-black tracking-widest uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            SIMPLE. TRANSPARENT. NO HIDDEN FEES.
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Choose Your Membership
          </motion.h2>
          <motion.p
            className="text-zinc-400 text-base max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Pricing discussed personally by our team. WhatsApp for current offers and batch availability.
          </motion.p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          {(["Monthly", "Quarterly", "Annual"] as const).map((period) => (
            <button
              key={period}
              type="button"
              onClick={() => setBillingPeriod(period)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                billingPeriod === period
                  ? "bg-red-600 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {period}
              {period === "Annual" && <span className="ml-1.5 text-xs text-yellow-400 font-black">-30%</span>}
            </button>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-6 items-stretch">
          {desktopOrder.map((id, i) => {
            const tier = tiersById.get(id);
            if (!tier) return null;
            return <TierCard key={tier.id} tier={tier} index={i} />;
          })}
        </div>

        {/* Mobile (Elite first) */}
        <div className="lg:hidden flex flex-col gap-6">
          {mobileOrder.map((id, i) => {
            const tier = tiersById.get(id);
            if (!tier) return null;
            return <TierCard key={tier.id} tier={tier} index={i} />;
          })}
        </div>

        {/* Decoy explanation */}
        <motion.div
          className="mt-8 p-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400 text-sm leading-relaxed">
            💡 <strong className="text-white">83% of new members choose Elite</strong> because it includes personal training + nutrition coaching —
            the two factors that <strong className="text-white">3x your results</strong> vs training alone. Basic is great to start, but most members upgrade.
          </p>
        </motion.div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-zinc-500">
          <span>🔒 No long-term lock-in</span>
          <span>·</span>
          <span>✅ Cancel anytime</span>
          <span>·</span>
          <span>📞 Pricing confirmed on call</span>
          <span>·</span>
          <span>🎯 First class FREE — no commitment</span>
        </div>
      </div>
    </section>
  );
}

