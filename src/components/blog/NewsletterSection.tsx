import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

export default function NewsletterSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-red-950/60 p-6 md:p-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h3 className="text-2xl font-bold md:text-4xl">Join the PowerFit Inner Circle</h3>
          <p className="mt-3 max-w-xl text-zinc-300">Weekly evidence-backed fitness insights, transformation tactics, and nutrition hacks for high performers.</p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Enter your email" className="h-11 flex-1 rounded-full border border-white/20 bg-black/30 px-4 text-sm text-white outline-none ring-red-500/50 focus:ring" />
            <button type="button" className="h-11 rounded-full bg-red-500 px-6 text-sm font-semibold text-white transition hover:bg-red-400">Subscribe</button>
          </form>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4"><div className="text-3xl font-black"><CountUp value="48000" /></div><p className="text-xs text-zinc-400">Readers monthly</p></div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4"><div className="text-3xl font-black"><CountUp value="92%" /></div><p className="text-xs text-zinc-400">Engagement rate</p></div>
        </motion.div>
      </div>
    </section>
  );
}
