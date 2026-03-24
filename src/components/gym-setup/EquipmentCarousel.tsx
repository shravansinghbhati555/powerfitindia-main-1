import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const equipment = [
  { icon: "🏋️", name: "Free Weights", desc: "Dumbbells, Barbells, Kettlebells, Weight Plates (rubber coated)" },
  { icon: "🔩", name: "Strength Machines", desc: "Smith Machine, Cable Crossover, Lat Pulldown, Leg Press, Hack Squat" },
  { icon: "🏃", name: "Cardio Equipment", desc: "Commercial Treadmills, Ellipticals, Assault Bikes, Rowing Machines" },
  { icon: "🤸", name: "Functional Zone", desc: "Pull-up Rigs, Battle Ropes, TRX Suspension, Plyo Boxes, Slam Balls" },
  { icon: "🪞", name: "Gym Infrastructure", desc: "Commercial Rubber Flooring, Gym Mirrors, Wall-mount Shelving, Storage Racks" },
  { icon: "💡", name: "Gym Ambiance", desc: "LED Strip Lighting, Motivational Wall Graphics, AC Unit Consulting, Sound System Setup" },
  { icon: "🧘", name: "Yoga & Group Class", desc: "Yoga Mats, Foam Rollers, Resistance Bands, Group Class AV Setup" },
  { icon: "🔧", name: "Maintenance & AMC", desc: "Annual service contracts, equipment servicing, parts replacement" },
];

const EquipmentCarousel = () => (
  <section className="py-24 px-4 overflow-hidden" style={{ background: "#0A0A0A" }}>
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white font-['Oswald'] mb-4">World-Class Equipment. Indian Prices.</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">We source from India's top commercial gym equipment manufacturers — the same equipment used in premium gyms globally, supplied at prices that make sense for Indian investors.</p>
      </motion.div>

      {/* Scrolling row */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {equipment.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex-shrink-0 w-64 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group snap-start"
              style={{ background: "#141414" }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{e.icon}</div>
              <h3 className="text-white font-bold mb-2">{e.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8 space-y-2">
        <p className="text-gray-400 text-sm">Need something specific? We source custom equipment on request.</p>
        <Link to="/shop" className="text-primary font-semibold hover:underline">View Full Equipment Catalogue →</Link>
      </motion.div>
    </div>
  </section>
);

export default EquipmentCarousel;
