import { motion, useReducedMotion } from "framer-motion";

export default function MembershipFinalCTA() {
  const reduce = useReducedMotion();
  const waMsg = encodeURIComponent("Hi PowerFit! I want to join as a member today. Please share membership options.");

  return (
    <section className="relative overflow-hidden py-20 px-[var(--gutter)]" style={{ minHeight: 380, background: "#0A0A0A" }}>
      {/* Background video */}
      <video
        autoPlay={!reduce}
        muted
        loop
        playsInline
        poster="/images/membership-final-cta-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/membership-final-cta.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(232,0,14,0.3) 100%)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          className="text-red-400 text-sm font-black tracking-widest uppercase mb-4"
          animate={reduce ? undefined : { opacity: [0.6, 1, 0.6] }}
          transition={reduce ? undefined : { duration: 2, repeat: Infinity }}
        >
          ⏰ Every Week You Wait = 7 More Days of Not Changing
        </motion.p>

        <motion.h2
          className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Best Time to Join
          <span className="block text-red-500">Was Yesterday.</span>
          <span className="block text-zinc-400 text-3xl mt-2 font-bold">The Second Best Time Is Right Now.</span>
        </motion.h2>

        <motion.p
          className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          500+ members made this decision. They&apos;re transforming right now — at the same studios you&apos;re reading about.
          Join them today.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring" }}
        >
          <a
            href={`https://wa.me/919116838715?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-lg text-white bg-[#25D366] hover:bg-[#20BA5C] hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(37,211,102,0.3)]"
          >
            💬 Join PowerFit Today
          </a>
          <a
            href="tel:+919116838715"
            className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg text-white bg-zinc-800 hover:bg-zinc-700 hover:scale-105 transition-all"
          >
            📞 Call: +91 86195 27263
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8 text-zinc-600 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span>✅ Free trial class — no payment needed</span>
          <span>·</span>
          <span>✅ Respond within 30 minutes</span>
          <span>·</span>
          <span>✅ No pressure — honest guidance</span>
        </motion.div>
      </div>
    </section>
  );
}

