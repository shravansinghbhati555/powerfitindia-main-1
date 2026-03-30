import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Program } from "@/data/programs";
import type { CategoryTheme } from "@/config/categoryThemes";

const studios = [
  { name: "PowerFit Malviya Nagar", city: "Jaipur", phone: "09680742912", wa: "919680742912" },
  { name: "PowerFit Mansarovar", city: "Jaipur", phone: "07597683500", wa: "917597683500" },
  { name: "PowerFit Piprali Rd", city: "Sikar", phone: "08440862854", wa: "918440862854" },
  { name: "PowerFit Vasant Vihar", city: "Sikar", phone: "07792800722", wa: "917792800722" },
  { name: "PowerFit Rani Sati Rd", city: "Sikar", phone: "07597682600", wa: "917597682600" },
];

interface Props { program: Program; theme: CategoryTheme }

export default function DetailSchedule({ program, theme }: Props) {
  const tabs = [...studios.map(s => s.name), ...(program.available.includes("Online") ? ["Online"] : [])];
  const [active, setActive] = useState(tabs[0]);
  const studio = studios.find(s => s.name === active);

  const waMsg = (studioName: string) =>
    encodeURIComponent(`Hi! Confirm ${program.name} batch times at ${studioName}.`);

  return (
    <section className="py-16 md:py-24" style={{ background: "#0A0A0A" }} aria-label="Schedule and locations">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="font-display text-3xl md:text-5xl text-white mb-8"
        >
          Batch Timings & Studio Locations
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(t => (
            <button key={t} onClick={() => setActive(t)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${active === t ? 'text-white' : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-700'}`}
              style={active === t ? { background: theme.accent } : {}}>
              {t.replace("PowerFit ", "")}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            {studio ? (
              <>
                <div className="mb-4">
                  <div className="text-white font-bold text-lg">📍 {studio.name}, {studio.city}</div>
                  <a href={`tel:${studio.phone}`} className="text-zinc-400 hover:text-white text-sm transition-colors">📞 {studio.phone}</a>
                </div>
                <div className="border-t border-zinc-800 pt-4 space-y-4">
                  <div>
                    <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2">Weekday Batches</div>
                    <div className="text-zinc-300 space-y-1">
                      <div>🌅 Morning: 6:00 AM – 7:00 AM</div>
                      <div>🌆 Evening: 6:00 PM – 7:00 PM</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2">Weekend Batch</div>
                    <div className="text-zinc-300">☀️ Saturday: 7:00 AM – 8:00 AM</div>
                  </div>
                </div>
                <a href={`https://wa.me/${studio.wa}?text=${waMsg(studio.name)}`} target="_blank" rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold transition-colors">
                  💬 Confirm Batch on WhatsApp
                </a>
              </>
            ) : (
              <div>
                <div className="text-white font-bold text-lg mb-2">💻 Online Sessions</div>
                <p className="text-zinc-400 mb-4">Live 1-on-1 sessions. You choose the time. Flexible scheduling across time zones.</p>
                <a href={`https://wa.me/918619527263?text=${encodeURIComponent(`Hi! I want to book an online ${program.name} session at PowerFit.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold transition-colors">
                  💬 Book Online Slot
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <p className="text-zinc-500 text-sm mt-4">
          ⚡ Timings subject to change — <a href={`https://wa.me/918619527263?text=${encodeURIComponent(`Hi! What are the latest batch timings for ${program.name} at PowerFit?`)}`}
            target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">WhatsApp to confirm</a> the latest schedule.
        </p>
      </div>
    </section>
  );
}
