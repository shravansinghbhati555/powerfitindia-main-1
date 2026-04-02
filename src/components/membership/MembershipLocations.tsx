import { motion } from "framer-motion";

const WA_PHONE = "918619527263";

const studios = [
  {
    name: "PowerFit Malviya Nagar",
    city: "Jaipur",
    address: "Floor A-19, 2nd & 3rd, Girdhar Marg, Ashok Vihar, Sector 12",
    phone: "09680742912",
    mapsUrl: "https://maps.app.goo.gl/sihDjQZKKUAxNttR8",
    whatsapp: "919680742912",
    highlight: "Flagship Studio",
    highlightColor: "#E8000E",
    imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400",
  },
  {
    name: "PowerFit Mansarovar",
    city: "Jaipur",
    address: "103/68, 1st & 2nd Floor, Deep Mansion, Madhyam Marg",
    phone: "07597683500",
    mapsUrl: "https://maps.app.goo.gl/TZuZjrPauZExq1iP8",
    whatsapp: "917597683500",
    highlight: "Home of Kickboxing Academy",
    highlightColor: "#7C3AED",
    imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400",
  },
  {
    name: "PowerFit Piprali Road",
    city: "Sikar",
    address: "1st Floor, Ganpati Plaza, Piprali Road",
    phone: "08440862854",
    mapsUrl: "https://maps.app.goo.gl/vSY36XgVz26gFHVLA",
    whatsapp: "918440862854",
    highlight: "Sikar Flagship",
    highlightColor: "#FF6B00",
    imageSrc: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400",
  },
  {
    name: "PowerFit Vasant Vihar",
    city: "Sikar",
    address: "Collector House, Sanskar Apartment, Vasant Vihar",
    phone: "07792800722",
    mapsUrl: "https://maps.app.goo.gl/8H9WUr9sqbaTdwXC8",
    whatsapp: "917792800722",
    highlight: "Fastest Growing",
    highlightColor: "#22C55E",
    imageSrc: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=400",
  },
  {
    name: "PowerFit Rani Sati Road",
    city: "Sikar",
    address: "Near Bioscope Mall, Shastri Nagar",
    phone: "7597682600",
    mapsUrl: "https://maps.app.goo.gl/kZYTabu1KEnnCrQc8",
    whatsapp: "917597682600",
    highlight: "Central Sikar",
    highlightColor: "#3B82F6",
    imageSrc: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=400",
  },
];

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function MembershipLocations() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#0A0A0A" }}>
      <div className="max-w-[var(--content-max-width)] mx-auto px-4">
        <motion.h2
          className="text-4xl font-black text-white mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Choose Your Nearest Studio
        </motion.h2>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {studios.map((studio, i) => (
            <motion.div
              key={studio.name}
              className="flex-shrink-0 w-[320px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/40 snap-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6, boxShadow: "0 18px 60px rgba(232,0,14,0.12)" }}
            >
              <div className="relative h-40">
                <img
                  src={studio.imageSrc}
                  alt={`${studio.name} gym membership`}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="px-2 py-0.5 rounded-full text-white text-xs font-bold bg-black/60 backdrop-blur-sm">
                    {studio.city}
                  </span>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ background: studio.highlightColor, color: "#000" }}
                  >
                    {studio.highlight}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-black text-lg mb-1">{studio.name}</h3>
                <p className="text-zinc-500 text-xs mb-4 leading-snug">{studio.address}</p>

                <div className="space-y-2">
                  <a
                    href={`https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(`Hi! I want to join ${studio.name} as a member. Please share membership details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-bold hover:bg-[#20BA5C] transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> Join This Studio
                  </a>

                  <div className="flex gap-2">
                    <a
                      href={`tel:${studio.phone}`}
                      className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl bg-zinc-800 text-zinc-200 font-bold text-sm hover:bg-zinc-700 transition-colors"
                    >
                      📞 Call
                    </a>
                    <a
                      href={studio.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl bg-zinc-800 text-zinc-200 font-bold text-sm hover:bg-zinc-700 transition-colors"
                    >
                      📍 Maps
                    </a>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-zinc-600">
                  Prefer help choosing?{" "}
                  <a
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Hi! Please help me choose the best PowerFit membership for my goal.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline"
                    style={{ color: "#E8000E" }}
                  >
                    WhatsApp us
                  </a>
                  .
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

