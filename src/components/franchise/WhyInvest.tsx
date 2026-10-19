import { motion } from "framer-motion";
import { Trophy, BarChart3, Wrench, Megaphone, GraduationCap, Globe } from "lucide-react";

const cards = [
  { icon: Trophy, title: "Proven Brand Since 2017", body: "Not a startup experiment. A battle-tested model with real members, real revenue, and real franchise owners." },
  { icon: BarChart3, title: "Asset-Light, High-Return Model", body: "Low overhead gym model. Revenue starts from Month 1. Break-even typically within 12–18 months." },
  { icon: Wrench, title: "End-to-End Setup Support", body: "We handle location scouting guidance, interior design, equipment procurement, staff hiring & training. You just execute." },
  { icon: Megaphone, title: "Marketing & Brand Power", body: "National digital campaigns, social media playbooks, local launch strategy — all provided. You don't market alone." },
  { icon: GraduationCap, title: "Training & Operations Manual", body: "Complete SOPs for every function. Trainer certification programs. Software & tech stack included." },
  { icon: Globe, title: "First-Mover Advantage", body: "500+ cities targeted for expansion. Grab your city now before another investor does." },
];

const WhyInvest = () => (
  <section className="section-dark py-20 md:py-28">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl text-dark-foreground text-center mb-4"
      >
        Why Smart Investors Choose <span className="text-primary">PowerFit</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-body text-dark-muted text-center mb-16 max-w-xl mx-auto"
      >
        Six reasons this franchise stands apart from the rest.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group card-glow rounded-2xl p-6 border border-dark-foreground/10 hover:border-primary/50 transition-all"
            style={{ backgroundColor: "#111111" }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <c.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl text-dark-foreground mb-2">{c.title}</h3>
            <p className="font-body text-sm text-dark-muted leading-relaxed">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyInvest;
