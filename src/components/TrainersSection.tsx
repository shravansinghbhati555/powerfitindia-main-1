import { motion } from "framer-motion";
import { PowerFitImage } from "@/components/ui/PowerFitImage";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  { img: trainer1, name: "Arjun Mehta", role: "Strength & Conditioning", exp: "10+ Years" },
  { img: trainer2, name: "Priya Sharma", role: "HIIT & Group Fitness", exp: "8+ Years" },
  { img: trainer3, name: "Vikram Singh", role: "Bodybuilding & Nutrition", exp: "12+ Years" },
];

const TrainersSection = () => (
  <section id="trainers" className="section-dark py-20 md:py-32 border-t border-dark-foreground/10">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-end mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="label-text text-primary mb-4 tracking-[0.3em]">Elite Coaching</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-dark-foreground leading-[0.9]">
            World-Class
            <br />
            <span className="gradient-text">Trainers</span>
          </h2>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4]"
          >
            <PowerFitImage
              src={t.img}
              alt={t.name}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={i < 2}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
            {/* Red overlay on hover */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-dark-foreground group-hover:text-primary transition-colors">
                    {t.name}
                  </h3>
                  <p className="font-body text-dark-muted text-sm mt-1">/ {t.role}</p>
                </div>
                <span className="label-text text-primary text-[10px] bg-primary/10 px-3 py-1 rounded-full border border-primary/20 red-pulse">
                  {t.exp}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainersSection;
