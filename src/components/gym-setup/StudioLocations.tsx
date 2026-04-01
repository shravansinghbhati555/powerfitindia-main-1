import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const gyms = [
  {
    name: "PowerFit Malviya Nagar, Jaipur",
    city: "Jaipur",
    address: "Floor A-19, 2nd & 3rd Floor, Girdhar Marg, Ashok Vihar, Sector 12, Jaipur, Rajasthan 302017",
    phone: "09680742912",
    directions: "https://maps.app.goo.gl/sihDjQZKKUAxNttR8",
    whatsapp: "https://wa.me/919680742912?text=Hi!%20I%20want%20to%20join%20PowerFit%20Malviya%20Nagar%2C%20Jaipur.%20Please%20share%20membership%20details.",
  },
  {
    name: "PowerFit Mansarovar, Jaipur",
    city: "Jaipur",
    address: "103/68, 1st & 2nd Floor, Deep Mansion Sector 103, Madhyam Marg, near Amar Misthaan Bhandar, Mansarovar, Jaipur, Rajasthan 302020",
    phone: "07597683500",
    directions: "https://maps.app.goo.gl/TZuZjrPauZExq1iP8",
    whatsapp: "https://wa.me/917597683500?text=Hi!%20I%20want%20to%20join%20PowerFit%20Mansarovar%2C%20Jaipur.%20Please%20share%20membership%20details.",
  },
  {
    name: "PowerFit Piprali Road, Sikar",
    city: "Sikar",
    address: "1st Floor, Ganpati Plaza, Piprali Road, above Ganesham Electronics, Railway Station Colony, Sikar, Rajasthan 332001",
    phone: "08440862854",
    directions: "https://maps.app.goo.gl/vSY36XgVz26gFHVLA",
    whatsapp: "https://wa.me/918440862854?text=Hi!%20I%20want%20to%20join%20PowerFit%20Piprali%20Road%2C%20Sikar.%20Please%20share%20membership%20details.",
  },
  {
    name: "PowerFit Vasant Vihar, Sikar",
    city: "Sikar",
    address: "Collector House, Sanskar Apartment, near Vasant Vihar, Sikar, Rajasthan 332001",
    phone: "07792800722",
    directions: "https://maps.app.goo.gl/8H9WUr9sqbaTdwXC8",
    whatsapp: "https://wa.me/917792800722?text=Hi!%20I%20want%20to%20join%20PowerFit%20Vasant%20Vihar%2C%20Sikar.%20Please%20share%20membership%20details.",
  },
  {
    name: "PowerFit Rani Sati Road, Sikar",
    city: "Sikar",
    address: "Near Bioscope Mall, Shastri Nagar, Sikar, Rajasthan 332001",
    phone: "7597682600",
    directions: "https://maps.app.goo.gl/kZYTabu1KEnnCrQc8",
    whatsapp: "https://wa.me/917597682600?text=Hi!%20I%20want%20to%20join%20PowerFit%20Rani%20Sati%20Road%2C%20Sikar.%20Please%20share%20membership%20details.",
  },
  {
    name: "Rajasthan Kickboxing Academy",
    city: "Jaipur",
    specialty: true,
    address: "2nd Floor, PowerFit Gym, Deep Mansion, Sector 101, Mansarovar, Jaipur, Rajasthan 302020",
    phone: "7597682600",
    directions: "https://www.google.com/maps/place/Rajasthan+Kickboxing+%26+Martial+Arts+Academy/@26.8508864,75.7653676",
    whatsapp: "https://wa.me/917597682600?text=Hi!%20I%20want%20to%20know%20more%20about%20Rajasthan%20Kickboxing%20Academy%20at%20PowerFit%20Mansarovar.",
  },
];

const filters = ["All Locations", "Jaipur", "Sikar"];

const StudioLocations = () => {
  const [activeFilter, setActiveFilter] = useState("All Locations");

  const filtered = activeFilter === "All Locations" ? gyms : gyms.filter((g) => g.city === activeFilter);

  return (
    <section id="locations" className="py-24 px-4" style={{ background: "#0D0D0D" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-black text-white font-['Oswald'] mb-4">Visit a PowerFit Studio — Experience It Before You Build</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">See our own gyms in action — the same equipment, the same quality, the same PowerFit standard we'll bring to your space. Walk in for a free trial session.</p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === f ? "bg-primary text-white" : "bg-[#1a1a1a] text-gray-400 border border-white/10 hover:border-primary/30"}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Location grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((g) => (
              <motion.article
                key={g.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,0,14,0.1)] overflow-hidden group"
                style={{ background: "#141414" }}
              >
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">{g.city.toUpperCase()}</span>
                    {"specialty" in g && Boolean((g as { specialty?: boolean }).specialty) && (
                      <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">SPECIALTY STUDIO</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-['Oswald']">{g.name}</h3>
                  <div className="space-y-2 text-sm text-gray-400 mb-5">
                    <p className="flex gap-2"><span>📍</span>{g.address}</p>
                    <p className="flex gap-2"><span>📞</span><a href={`tel:${g.phone}`} className="hover:text-primary transition-colors">{g.phone}</a></p>
                    <p className="flex gap-2"><span>🕐</span>Mon–Sun, 5AM–11PM</p>
                  </div>
                  <div className="flex gap-3">
                    <a href={g.directions} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2.5 rounded-lg border border-white/10 text-white text-sm font-semibold hover:border-primary/30 transition-all">📍 Get Directions</a>
                    <a href={g.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20bd5a] transition-all">💬 WhatsApp to Join</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* WhatsApp CTA strip */}
        <div className="mt-12 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-l-4 border-[#25D366]" style={{ background: "#111" }}>
          <p className="text-gray-300">Not sure which gym is closest to you?</p>
          <a href="https://wa.me/918619527263?text=Hi!%20Can%20you%20help%20me%20find%20the%20nearest%20PowerFit%20gym%20to%20me%3F" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#20bd5a] transition-all whitespace-nowrap">
            💬 WhatsApp Our Team
          </a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6 text-primary text-sm italic animate-pulse"
        >
          🌍 More cities coming soon — Delhi · Mumbai · Bangalore · Ahmedabad · Lucknow
        </motion.p>
      </div>
    </section>
  );
};

export default StudioLocations;
