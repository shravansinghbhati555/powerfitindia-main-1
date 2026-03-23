import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Jangir",
    location: "Piprali Road",
    text: "Earlier I opened a gym on my own and burned a lot of money due to wrong decisions. Choosing PowerFit Franchise changed everything — planned systems, real support, profitable business. Planning to open my second centre soon.",
    since: "Franchise Owner since 2024",
  },
  {
    name: "Vikram Sharma",
    location: "Sikar",
    text: "The ROI projections they gave me were accurate. Within 11 months I had recovered my investment. The brand recognition in my city was instant — people already knew PowerFit.",
    since: "Franchise Owner",
  },
  {
    name: "Priya Meena",
    location: "Mansarovar",
    text: "I had zero experience in fitness business. PowerFit's training and operations manual made everything simple. The franchise manager was available every time I needed help.",
    since: "Franchise Owner",
  },
];

const FranchiseTestimonials = () => (
  <section className="section-dark py-20 md:py-28 overflow-hidden" style={{ borderTop: "4px solid hsl(355, 78%, 56%)" }}>
    <div className="section-container mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl text-dark-foreground text-center mb-4"
      >
        Hear From People Who <span className="text-primary">Took the Leap</span>
      </motion.h2>
    </div>

    {/* Infinite conveyor */}
    <div className="relative">
      <div className="flex animate-scroll-x gap-6 hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[350px] rounded-2xl p-6 border border-dark-foreground/10"
            style={{ backgroundColor: "#111111" }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, si) => (
                <motion.div
                  key={si}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: si * 0.1 }}
                >
                  <Star className="w-4 h-4 fill-primary text-primary" />
                </motion.div>
              ))}
            </div>
            <p className="font-body text-sm text-dark-muted leading-relaxed mb-4">"{t.text}"</p>
            <p className="font-display text-base text-dark-foreground">{t.name}</p>
            <p className="font-body text-xs text-dark-muted">{t.location} · {t.since}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FranchiseTestimonials;
