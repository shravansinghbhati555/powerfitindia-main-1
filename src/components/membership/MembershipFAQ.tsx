import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const membershipFAQs = [
  {
    q: "Is there a joining fee or registration charge?",
    a: "Our team shares full transparent pricing on WhatsApp including any applicable joining fee. There are no hidden charges — what you&apos;re quoted is what you pay.",
  },
  {
    q: "Can I try before I commit to a membership?",
    a: "Yes. Every new member gets a free trial class before committing. Visit any studio, train with the team, and decide. No payment required for the trial.",
  },
  {
    q: "What happens if I miss sessions?",
    a: "Life happens. Your membership doesn&apos;t freeze automatically but speak to our team and we accommodate genuine circumstances. Sessions don&apos;t expire — your progress doesn&apos;t pause either.",
  },
  {
    q: "Can I switch between studios with one membership?",
    a: "Elite and Premium members can train at any of the 5 PowerFit studios across Jaipur and Sikar with a single membership. Basic members access 1 designated studio.",
  },
  {
    q: "Do you offer couples or family memberships?",
    a: "Yes — special group and family pricing is available. WhatsApp us with the number of people and we&apos;ll create a custom package that makes joining together worth it.",
  },
  {
    q: "What programs are included in my membership?",
    a: "Elite and Premium members access all 13+ programs — Yoga, HIIT, CrossFit, Calisthenics, Zumba, Strength Training, Women&apos;s Fitness, Kickboxing, and more. Basic includes 6 core programs.",
  },
  {
    q: "Is nutrition coaching really included?",
    a: "For Elite and Premium members, yes — certified nutritionist coaching is fully included. Your meal plan is built around Indian food and your specific goals, not generic advice.",
  },
  {
    q: "Do you offer student or senior discounts?",
    a: "Yes. We have special rates for students, senior citizens (50+), and armed forces personnel. Show valid ID and our team applies the appropriate discount.",
  },
];

export default function MembershipFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const waMsg = encodeURIComponent("Hi! I have a question about PowerFit memberships. Please help me choose the right plan.");

  return (
    <section className="py-16 md:py-24" style={{ background: "#0A0A0A" }}>
      <div className="max-w-[var(--content-max-width)] mx-auto px-4">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white">FAQ</h2>
            <p className="text-zinc-500 text-sm mt-1">{membershipFAQs.length} questions</p>
          </div>
          <a
            href={`https://wa.me/918619527263?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-red-500 transition-colors"
          >
            Ask on WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {membershipFAQs.map((item, i) => (
            <motion.div
              key={item.q}
              className="rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors bg-zinc-950/30"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 p-4 text-left"
              >
                <span className="text-white text-sm font-semibold leading-snug">{item.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-zinc-500 flex-shrink-0 text-lg"
                  aria-hidden="true"
                >
                  ↓
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800 pt-3">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

