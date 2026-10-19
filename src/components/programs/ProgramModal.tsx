import { useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Program } from "@/data/programs";
import { PowerFitImage } from "@/components/ui/PowerFitImage";

export default function ProgramModal({
  program,
  open,
  onClose,
}: {
  program: Program | null;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const waLink = useMemo(() => {
    if (!program) return "";
    const text = `Hi! I want to join ${program.name} program at PowerFit.`;
    return `https://wa.me/919116838715?text=${encodeURIComponent(text)}`;
  }, [program]);

  return (
    <AnimatePresence>
      {open && program && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${program.name} program details`}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[860px] max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 z-10 h-10 w-10 rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="relative h-[250px]">
              <PowerFitImage
                src={program.imagePath}
                alt={`${program.name} at PowerFit India gym`}
                sizes="860px"
                priority
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/40 to-black/20" />
              <div className="absolute bottom-5 left-6 right-6">
                <div className="text-xs label-text text-zinc-400 mb-2">{program.category}</div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-none">{program.name}</h2>
                <p className="mt-2 text-zinc-300 max-w-2xl">{program.tagline}</p>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-250px)]">
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { k: "Duration", v: program.duration, i: "⏱" },
                  { k: "Frequency", v: `${program.sessionsPerWeek}/week`, i: "📅" },
                  { k: "Intensity", v: program.intensity, i: "⚡" },
                  { k: "Group", v: program.groupSize, i: "👥" },
                ].map((p) => (
                  <div key={p.k} className="px-3 py-2 rounded-full bg-zinc-900 border border-white/10 text-sm text-white">
                    <span className="mr-1">{p.i}</span>
                    <span className="text-zinc-400">{p.k}:</span> {p.v}
                  </div>
                ))}
              </div>

              <p className="text-zinc-300 leading-relaxed">{program.description}</p>

              <div className="mt-8">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-2xl font-black text-white">Real Member Results</h3>
                  <span className="text-xs text-zinc-400 bg-zinc-900/60 border border-white/10 rounded-full px-3 py-1">
                    📊 Based on 10,000+ PowerFit members · InBody Scans
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {program.benefits.slice(0, 4).map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="rounded-2xl bg-zinc-900 border border-white/10 p-4"
                    >
                      <div className="text-lg">{b.icon}</div>
                      <div className="text-2xl font-black text-white mt-2">{b.value}</div>
                      <div className="text-sm text-zinc-300 font-semibold mt-1">{b.title}</div>
                      <div className="text-xs text-zinc-500 mt-1">{b.description}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 grid gap-2">
                  {program.realDataStats.map((s, i) => (
                    <div key={i} className="rounded-xl bg-black/30 border border-white/5 px-4 py-3 text-sm text-zinc-300">
                      <strong className="text-white">{s.metric}:</strong> {s.value} <span className="text-zinc-500">({s.timeframe})</span>{" "}
                      <span className="text-zinc-500">· {s.source}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-black text-white mb-3">What You'll Get</h3>
                  <ul className="space-y-2 text-zinc-300">
                    {program.programHighlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="mt-0.5 text-[#E8000E]">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-3">Best For</h3>
                  <div className="flex flex-wrap gap-2">
                    {program.bestFor.map((b) => (
                      <span key={b} className="rounded-full px-3 py-2 bg-zinc-900 border border-white/10 text-sm text-white">
                        {b}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-zinc-900 border border-white/10 p-4">
                    <div className="text-xs label-text text-zinc-500 mb-2">TRAINER</div>
                    <div className="text-white font-semibold">{program.trainerType}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {program.available.map((a) => (
                        <span key={a} className="rounded-full px-3 py-1 text-sm bg-black/40 border border-white/10 text-white">
                          {a}
                        </span>
                      ))}
                      <span className="rounded-full px-3 py-1 text-sm bg-emerald-600/15 border border-emerald-500/30 text-emerald-300">
                        Certified
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  💬 Enquire on WhatsApp
                </a>
                <Link
                  to="/membership"
                  onClick={onClose}
                  className="w-full text-center bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Try Free Class
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

