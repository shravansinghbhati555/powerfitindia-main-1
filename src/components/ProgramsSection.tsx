import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const programs = [
  {
    title: "Strength Training",
    desc: "Build raw power with free weights, machines, and progressive overload programs designed by certified coaches.",
    icon: "💪",
    img: gallery1,
  },
  {
    title: "Cardio & HIIT",
    desc: "Heart-pounding interval training, treadmills, cycling, and bootcamp sessions that torch calories and build endurance.",
    icon: "🔥",
    img: gallery2,
  },
  {
    title: "Yoga & Flexibility",
    desc: "Restore balance with guided yoga flows, deep stretching, and mindfulness sessions in a calm studio environment.",
    icon: "🧘",
    img: gallery3,
  },
  {
    title: "CrossFit",
    desc: "Push every limit with high-intensity functional movements, Olympic lifts, and competitive WODs.",
    icon: "⚡",
    img: gallery1,
  },
  {
    title: "Functional Training",
    desc: "Real-world movement patterns, core stability, and athletic performance training for everyday strength.",
    icon: "🏋️",
    img: gallery2,
  },
  {
    title: "Personal Training",
    desc: "One-on-one coaching tailored to your goals. Nutrition plans, progress tracking, and accountability included.",
    icon: "🎯",
    img: gallery3,
  },
];

const ProgramsSection = () => (
  <section id="programs" className="section-dark py-20 md:py-32 overflow-hidden">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-end mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="label-text text-primary mb-4 tracking-[0.3em]">20+ Programs</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-dark-foreground leading-[0.9]">
            Train Your Way.
            <br />
            <span className="gradient-text">Your Rules.</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-dark-muted text-base md:text-lg leading-relaxed"
        >
          From heavy iron to mindful flow — choose from over 20 specialized programs 
          designed for every fitness level and ambition.
        </motion.p>
      </div>

      {/* Orbit-inspired circular layout on desktop, grid on mobile */}
      <div className="relative">
        {/* Center hub - desktop only */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-40 h-40 rounded-full border border-primary/20 flex items-center justify-center"
          >
            <div className="w-32 h-32 rounded-full border border-primary/10 flex items-center justify-center bg-dark-card/50 backdrop-blur-sm" style={{ animation: "none" }}>
              <div className="text-center" style={{ animation: "none", transform: "none" }}>
                <span className="font-display text-2xl text-primary block">YOUR</span>
                <span className="font-display text-2xl text-dark-foreground block">FITNESS</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -6 }}
              className="group relative bg-dark-card rounded-2xl overflow-hidden border border-dark-foreground/8 hover:border-primary/30 transition-all duration-500"
            >
              {/* Image header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
                {/* Animated icon */}
                <motion.div
                  className="absolute top-4 right-4 text-3xl"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {p.icon}
                </motion.div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl text-dark-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="font-body text-dark-muted text-sm leading-relaxed mb-6">{p.desc}</p>
                <motion.a
                  href={`/program/${p.title.toLowerCase().replace(/\s+/g, '-')}`}
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 label-text text-primary hover:text-accent transition-colors"
                >
                  Explore <ArrowRight size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProgramsSection;
