import { motion } from "framer-motion";
import { Award, ClipboardList, Apple, Cpu, Heart, TrendingUp } from "lucide-react";

const features = [
  { icon: Award, title: "Certified Trainers", desc: "Industry-certified coaches who understand your body." },
  { icon: ClipboardList, title: "Customized Workout Plans", desc: "Personalized routines for your specific goals." },
  { icon: Apple, title: "Nutrition Guidance", desc: "Expert diet plans for optimal performance." },
  { icon: Cpu, title: "Advanced Equipment", desc: "State-of-the-art machines and free weights." },
  { icon: Heart, title: "Supportive Community", desc: "Train alongside people who push you forward." },
  { icon: TrendingUp, title: "Result-Oriented Programs", desc: "Track progress and see real changes." },
];

const WhyPowerfitSection = () => (
  <section className="section-light py-20 md:py-32">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="label-text text-primary mb-3">Why Us</p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground">
          Why Choose <span className="gradient-text">PowerFit</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-lift bg-background rounded-2xl p-8 text-center cursor-pointer group border border-border shadow-sm"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <f.icon className="text-primary" size={30} />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">{f.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyPowerfitSection;
