import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const programs = [
  {
    num: "01",
    title: "Functional Training",
    desc: "A specialized space for functional training, mobility work, stretching, and recovery. Includes tools for cross training, balance, and flexibility to help reduce injury risk and improve movement quality.",
    img: gallery1,
  },
  {
    num: "02",
    title: "Cardio Area",
    desc: "A modern cardio area equipped with treadmills, bikes, rowers, and ellipticals. Designed to improve cardiovascular endurance, support fat loss, and enhance overall stamina.",
    img: gallery2,
  },
  {
    num: "03",
    title: "Fitness & Pilates",
    desc: "A fully equipped strength and fitness area featuring free weights, resistance machines, and functional equipment. Perfect for building muscle, increasing strength, and improving full-body performance.",
    img: gallery3,
  },
];

const ProgramsSection = () => (
  <section id="programs" className="section-dark py-20 md:py-32">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-end mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="label-text text-primary mb-4 tracking-[0.2em]">Designed for Performance</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-dark-foreground leading-[0.9]">
            More Than a Gym —
            <br />
            <span className="gradient-text">A Space Built for Progress</span>
          </h2>
        </motion.div>
      </div>

      <div className="space-y-0">
        {programs.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group grid md:grid-cols-[auto_1fr_auto] gap-8 md:gap-12 items-center py-10 md:py-14 border-t border-dark-foreground/10 last:border-b"
          >
            {/* Number */}
            <div className="relative">
              <span className="font-display text-8xl md:text-9xl text-dark-foreground/5 leading-none">{p.num}</span>
              <span className="absolute top-2 left-0 font-display text-2xl text-primary">{p.num}</span>
            </div>

            {/* Content */}
            <div className="max-w-xl">
              <h3 className="font-display text-3xl md:text-5xl text-dark-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {p.title}
              </h3>
              <p className="font-body text-dark-muted text-sm md:text-base leading-relaxed">{p.desc}</p>
              <motion.a
                href="#contact"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 mt-6 label-text text-primary hover:text-accent transition-colors"
              >
                Explore More <ArrowRight size={14} />
              </motion.a>
            </div>

            {/* Image */}
            <div className="hidden lg:block w-48 h-48 rounded-2xl overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
