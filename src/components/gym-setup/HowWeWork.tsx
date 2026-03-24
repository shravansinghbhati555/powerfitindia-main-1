import { motion } from "framer-motion";

const steps = [
  { num: 1, icon: "📞", title: "Free Consultation", desc: "Tell us your space, budget, and goals. Our gym design expert calls you within 24 hours — no obligation, no sales pressure." },
  { num: 2, icon: "📐", title: "Site Visit & Layout Design", desc: "We visit your location (or do a virtual walkthrough). Our team creates a custom CAD layout showing equipment placement, flooring, mirrors, and lighting — optimized for your exact space." },
  { num: 3, icon: "💰", title: "Transparent Quotation", desc: "You receive a detailed itemized quote — equipment, installation, flooring, delivery. No hidden charges. You approve exactly what you pay for." },
  { num: 4, icon: "🔧", title: "Professional Installation", desc: "Our trained installation team handles everything. Most home gym setups completed in 1–2 days. Society gyms in 5–7 days. Zero damage to your walls or floors." },
  { num: 5, icon: "✅", title: "Handover + Training", desc: "We hand over a fully functional gym. Our trainer walks you or your staff through every equipment piece. Support line active from Day 1." },
];

const HowWeWork = () => (
  <section className="py-24 px-4" style={{ background: "#0D0D0D" }}>
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white font-['Oswald'] mb-4">From Empty Room to Dream Gym — In 5 Simple Steps</h2>
      </motion.div>

      <div className="relative">
        {/* Vertical red track */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute left-8 md:left-12 top-0 bottom-0 w-[2px] bg-primary/30 origin-top hidden md:block"
        />

        <div className="space-y-12">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="flex gap-6 md:gap-8 items-start"
            >
              {/* Number node */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-primary/40 flex items-center justify-center bg-[#111]">
                  <span className="text-2xl md:text-4xl font-black text-primary font-['Oswald']">{s.num}</span>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
              </div>

              <div className="pt-2 md:pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white font-['Oswald']">{s.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-lg">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12 text-primary font-semibold"
      >
        📞 Average time from enquiry to installation: 7–14 days
      </motion.p>
    </div>
  </section>
);

export default HowWeWork;
