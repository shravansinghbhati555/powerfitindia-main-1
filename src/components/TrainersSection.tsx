import { motion } from "framer-motion";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  { img: trainer1, name: "Arjun Mehta", spec: "Strength & Conditioning", exp: "10+ Years", desc: "Powerlifting coach specializing in athletic performance." },
  { img: trainer2, name: "Priya Sharma", spec: "HIIT & Group Fitness", exp: "8+ Years", desc: "Certified group instructor with expertise in metabolic training." },
  { img: trainer3, name: "Vikram Singh", spec: "Bodybuilding & Nutrition", exp: "12+ Years", desc: "Competition-level bodybuilding coach and sports nutritionist." },
];

const TrainersSection = () => (
  <section id="trainers" className="section-light py-20 md:py-32">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="label-text text-primary mb-3">Our Team</p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground">
          Meet Our <span className="gradient-text">Expert Trainers</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-lift bg-background rounded-2xl overflow-hidden group cursor-pointer border border-border shadow-sm"
          >
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full label-text text-[10px]">
                  {t.exp}
                </span>
              </div>
            </div>
            <div className="p-6">
              <p className="label-text text-primary text-[10px] mb-1">{t.spec}</p>
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
