import { motion } from "framer-motion";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  { img: trainer1, name: "Arjun Mehta", spec: "Strength & Conditioning", desc: "10+ years of powerlifting and athletic performance coaching." },
  { img: trainer2, name: "Priya Sharma", spec: "HIIT & Group Fitness", desc: "Certified group instructor specializing in high-intensity metabolic training." },
  { img: trainer3, name: "Vikram Singh", spec: "Bodybuilding & Nutrition", desc: "Competition-level bodybuilding coach with expertise in sports nutrition." },
];

const TrainersSection = () => (
  <section id="trainers" className="py-20 md:py-32 bg-secondary/30">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="label-text text-sm text-primary mb-4 tracking-widest">Coaches</p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl gradient-text">
          Meet The Coaches
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-glow bg-card rounded-2xl overflow-hidden group cursor-pointer"
            style={{ boxShadow: "0 0 0 1px hsla(220,15%,50%,0.1), 0 4px 8px -2px hsla(0,0%,0%,0.2)" }}
          >
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
            <div className="p-6 -mt-12 relative z-10">
              <p className="label-text text-xs text-primary mb-1">{t.spec}</p>
              <h3 className="font-display text-3xl text-foreground">{t.name}</h3>
              <p className="font-body text-muted-foreground text-sm mt-2">{t.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainersSection;
