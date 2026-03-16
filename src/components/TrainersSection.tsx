import { motion } from "framer-motion";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  { img: trainer1, name: "Arjun Mehta", role: "Strength & Conditioning Coach", exp: "10+ Years" },
  { img: trainer2, name: "Priya Sharma", role: "HIIT & Group Fitness Lead", exp: "8+ Years" },
  { img: trainer3, name: "Vikram Singh", role: "Bodybuilding & Nutrition Expert", exp: "12+ Years" },
];

const TrainersSection = () => (
  <section id="trainers" className="section-dark py-20 md:py-32">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-end mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="label-text text-primary mb-4 tracking-[0.2em]">Coaches Who Drive Results</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-dark-foreground leading-[0.9]">
            Our Expert Coaches
            <br />
            <span className="gradient-text">Dedicated to You</span>
          </h2>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4]"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-dark-foreground">{t.name}</h3>
                  <p className="font-body text-dark-muted text-sm mt-1">/ {t.role}</p>
                </div>
                <span className="label-text text-primary text-[10px] bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
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
