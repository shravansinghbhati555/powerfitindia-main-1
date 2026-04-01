import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import type { Program } from "@/data/programs";
import type { ProgramVisual } from "@/config/programVisuals";
import type { CategoryTheme } from "@/config/categoryThemes";

interface Props { program: Program; visuals: ProgramVisual; theme: CategoryTheme }

export default function DetailFAQ({ program, visuals, theme }: Props) {
  const faqs = visuals.programFAQ;
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://powerfitindia.com" },
      { "@type": "ListItem", position: 2, name: "Programs", item: "https://powerfitindia.com/programs" },
      { "@type": "ListItem", position: 3, name: program.category, item: `https://powerfitindia.com/programs/${program.categoryId}` },
      { "@type": "ListItem", position: 4, name: program.name, item: `https://powerfitindia.com/program/${program.slug}` },
    ],
  };

  return (
    <section className="py-10 px-[var(--gutter)]" style={{ background: "#0D0D0D" }} aria-label="FAQ">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="max-w-[var(--content-max-width)] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-white">FAQ</h2>
          <span className="text-zinc-600 text-sm">{faqs.length} questions</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors bg-zinc-950/30"
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
                  style={{ color: open === i ? theme.accent : undefined }}
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

        <div className="mt-6 text-xs text-zinc-600">
          Still unsure?{" "}
          <a
            className="font-bold underline"
            style={{ color: theme.accent }}
            href={`https://wa.me/918619527263?text=${encodeURIComponent(`Hi! I have a question about ${program.name}. Please help me choose the right plan.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
