import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import { useCategoryTheme } from "@/components/programs/category/CategoryThemeProvider";

export default function FreeTrial({ programs }: { programs: Program[] }) {
  const theme = useCategoryTheme();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [program, setProgram] = useState("");

  const options = useMemo(() => programs.map((p) => p.name), [programs]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi PowerFit! I want a free trial class.\nName: ${name}\nMobile: ${mobile}\nProgram: ${program || theme.label}`;
    window.open(`https://wa.me/919116838715?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="section-dark py-16 md:py-24" style={{ borderTop: `4px solid ${theme.accent}` }}>
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl text-white text-center"
        >
          Start With a <span style={{ color: theme.accent }}>Free Class</span> — Zero Risk, Maximum Gain
        </motion.h2>
        <p className="mt-4 text-zinc-300 text-center max-w-4xl mx-auto leading-relaxed">
          Try any {theme.label} program completely free. Walk into any PowerFit studio in Jaipur or Sikar — our trainer will assess your fitness level and
          show you exactly which program fits your goal.
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 items-start">
          <form onSubmit={handleSubmit} className="space-y-3 rounded-3xl bg-zinc-950 border border-white/10 p-6">
            <input
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none"
              style={{ outlineColor: theme.accent }}
            />
            <input
              placeholder="Mobile Number"
              type="tel"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none"
            />
            <select
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none"
            >
              <option value="">Select Program</option>
              {options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full text-white font-black py-4 rounded-xl text-lg transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[52px]"
              style={{ backgroundColor: theme.accent }}
            >
              💬 Send Free Trial Request on WhatsApp →
            </button>
          </form>

          <div className="rounded-3xl bg-black/30 border border-white/10 p-6 text-zinc-300">
            <div className="grid gap-2 text-sm">
              <div>✅ No payment required for trial</div>
              <div>✅ No prior fitness experience needed</div>
              <div>✅ Trainer assessment included free</div>
              <div>✅ Available at all 5 PowerFit studios</div>
            </div>
            <div className="mt-5 text-sm text-zinc-400">
              <div className="font-bold text-white">📍 Jaipur</div>
              <div>Malviya Nagar · Mansarovar</div>
              <div className="mt-3 font-bold text-white">📍 Sikar</div>
              <div>Piprali Road · Vasant Vihar · Rani Sati Road</div>
            </div>
            <div className="mt-6 text-sm text-zinc-500">Or just walk in — no booking needed.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

