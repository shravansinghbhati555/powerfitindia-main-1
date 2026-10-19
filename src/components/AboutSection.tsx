import { motion } from "framer-motion";

const words = [
  { text: "ZIDD", meaning: "Relentless determination", from: { x: -100, opacity: 0 } },
  { text: "JAZBAA", meaning: "Burning passion within", from: { y: -100, opacity: 0 } },
  { text: "JUNOON", meaning: "Obsessive dedication", from: { x: 100, opacity: 0 } },
];

const AboutSection = () => (
  <section id="about" className="section-dark py-20 md:py-32 overflow-hidden relative">
    {/* Silhouette background */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            hsl(355, 78%, 56%) 40px,
            hsl(355, 78%, 56%) 41px
          )`,
        }}
      />
    </div>

    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="label-text text-primary mb-4 tracking-[0.3em]">Our DNA</p>
        <h2 className="font-display text-5xl md:text-7xl text-dark-foreground mb-6">
          More Than a <span className="gradient-text">Gym</span>
        </h2>
        <p className="font-body text-dark-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          We don't just build bodies. We build warriors. Every rep, every set, every drop of sweat
          is a step toward the strongest version of yourself.
        </p>
      </motion.div>

      {/* Three Hindi words */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-20">
        {words.map((word, i) => (
          <motion.div
            key={word.text}
            initial={word.from}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group text-center cursor-default"
          >
            <h3
              className="font-display text-dark-foreground leading-none red-glow-text transition-all duration-500 group-hover:text-primary"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              {word.text}
            </h3>
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: "auto" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.2 }}
              className="font-body text-dark-muted text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              {word.meaning}
            </motion.p>
            <div className="w-12 h-[2px] bg-primary mx-auto mt-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>

      {/* Brand pillars */}
      <div className="grid sm:grid-cols-4 gap-6">
        {[
          { num: "01", title: "Premium Equipment", desc: "Commercial-grade machines, free weights, and functional tools from world-leading brands." },
          { num: "02", title: "Expert Coaching", desc: "Certified trainers with real-world experience who build programs around YOUR goals." },
          { num: "03", title: "Community", desc: "A tribe of driven individuals who push each other to be stronger, together." },
          { num: "04", title: "Smart Member Analytics", desc: "Track member progress, monitor fitness performance, and make data-driven decisions for better results." },

        ].map((item, i) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="group p-8 md:p-10 rounded-2xl border border-dark-foreground/8 bg-dark-card hover:border-primary/30 transition-all duration-500"
          >
            <span className="font-display text-6xl text-primary/10 group-hover:text-primary/20 transition-colors leading-none block mb-4">
              {item.num}
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-dark-foreground mb-4 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="font-body text-dark-muted text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
