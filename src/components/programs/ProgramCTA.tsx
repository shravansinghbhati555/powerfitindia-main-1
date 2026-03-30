import { motion } from "framer-motion";

export default function ProgramCTA() {
  return (
    <section className="section-dark py-20 md:py-28" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-white"
          >
            Can't Decide? <span className="text-primary">Let Our Experts Choose For You.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-zinc-300 leading-relaxed"
          >
            Tell us your goal in one message — our certified trainers will recommend the perfect program for your body, schedule, and budget.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 grid md:grid-cols-3 gap-3"
          >
            <a
              href="https://wa.me/918619527263?text=Hi!%20I%20need%20help%20choosing%20the%20right%20fitness%20program%20at%20PowerFit."
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-5 transition-colors"
            >
              💬 WhatsApp Our Trainer
            </a>
            <a
              href="/gym-setup#locations"
              className="rounded-2xl border border-white/20 hover:border-white/40 text-white font-bold py-4 px-5 transition-colors bg-white/0 hover:bg-white/5"
            >
              📍 Visit a Studio
            </a>
            <a
              href="/contact"
              className="rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-5 transition-colors"
            >
              🎯 Try Free Class
            </a>
          </motion.div>

          <div className="mt-10 text-sm text-zinc-500">
            Prefer exploring first? Learn about{" "}
            <a href="/franchise" className="text-white hover:text-primary underline underline-offset-4">
              PowerFit franchise
            </a>{" "}
            or see our{" "}
            <a href="/gym-setup" className="text-white hover:text-primary underline underline-offset-4">
              gym setup services
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
}

