import { motion } from "framer-motion";
import { Home, Building2, Users } from "lucide-react";

const setups = [
  {
    icon: Home,
    title: "Home Gym",
    desc: "Complete home gym setup with premium equipment, space planning, and installation support.",
    img: "🏠",
  },
  {
    icon: Building2,
    title: "Office Gym",
    desc: "Corporate fitness solutions for employee wellness. Boost productivity with on-site training.",
    img: "🏢",
  },
  {
    icon: Users,
    title: "Society Gym",
    desc: "Residential community gym setups. Shared fitness spaces designed for apartment complexes.",
    img: "🏘️",
  },
];

const GymSetupSection = () => (
  <section className="section-dark py-20 md:py-32 border-t border-dark-foreground/10 overflow-hidden">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="label-text text-primary mb-4 tracking-[0.3em]">End-to-End Setup</p>
          <h2 className="font-display text-5xl md:text-7xl text-dark-foreground leading-[0.9]">
            We Build Your
            <br />
            <span className="gradient-text">Dream Gym</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-body text-dark-muted text-base md:text-lg leading-relaxed"
        >
          From concept to completion — equipment sourcing, interior design, 
          installation, and post-setup support. We handle everything.
        </motion.p>
      </div>

      {/* Equipment build animation - wireframe → filled */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-dark-card rounded-3xl border border-dark-foreground/10 p-8 md:p-12 mb-12 relative overflow-hidden"
      >
        <div className="grid grid-cols-5 gap-4 md:gap-6 items-end">
          {["Treadmill", "Rack", "Dumbbells", "Bench", "Mirrors"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="w-full aspect-square bg-dark rounded-xl border border-dark-foreground/10 flex items-center justify-center mb-3 group hover:border-primary/30 transition-colors">
                <div className="text-2xl md:text-4xl opacity-60 group-hover:opacity-100 transition-opacity">
                  {["🏃", "🏋️", "💪", "🪑", "🪞"][i]}
                </div>
              </div>
              <span className="label-text text-dark-muted text-[9px] md:text-[10px]">{item}</span>
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      </motion.div>

      {/* 3 Setup cards - weight plate flip */}
      <div className="grid sm:grid-cols-3 gap-6">
        {setups.map((setup, i) => (
          <motion.div
            key={setup.title}
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.2,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ perspective: "800px", transformStyle: "preserve-3d" }}
            className="group bg-dark-card rounded-2xl p-8 border border-dark-foreground/10 hover:border-primary/30 transition-all duration-500 cursor-pointer card-glow"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <setup.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-3xl text-dark-foreground mb-3 group-hover:text-primary transition-colors">
              {setup.title}
            </h3>
            <p className="font-body text-dark-muted text-sm leading-relaxed">{setup.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GymSetupSection;
