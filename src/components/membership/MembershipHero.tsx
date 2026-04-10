import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PowerFitImage } from "@/components/ui/PowerFitImage";

/** Unsplash — free to use (Unsplash License). Dark gym floor, strong membership landing vibe. */
const HERO_BG =
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2400&q=85";

const WordSlamLine = ({
  text,
  delay = 0,
  color,
}: {
  text: string;
  delay?: number;
  color?: string;
}) => {
  const words = text.split(" ");

  return (
    <span className="inline-block">
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: -30, scale: 1.15 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: delay + i * 0.12,
            type: "spring",
            stiffness: 300,
            damping: 18,
          }}
          style={color ? { color } : undefined}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
};

const WHATSAPP = "918619527263";

export default function MembershipHero() {
  const reduce = useReducedMotion();

  const waMsg = useMemo(
    () =>
      encodeURIComponent(
        "Hi PowerFit! I want to join as a member. Please share membership details and pricing."
      ),
    [],
  );

  return (
    <section
      className="relative min-h-[calc(100vh-96px)] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Full-bleed stock background — fast, no local assets */}
      <div className="absolute inset-0">
        <PowerFitImage
          src={HERO_BG}
          alt=""
          priority
          sizes="100vw"
          width={2400}
          height={1600}
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 md:scale-100"
          style={{ opacity: 0.42 }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/50 to-black/70"
          aria-hidden="true"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(232,0,14,0.15) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 70%, #0A0A0A 100%)" }} />

      <div className="relative z-10 w-full max-w-[900px] px-4">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-red-400 text-xs sm:text-sm font-black tracking-widest uppercase text-center mb-4"
        >
          Every Day You Wait Is A Day You&apos;re Not Progressing
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <div className="block">
            <WordSlamLine text="Stop Wishing." delay={0.2} />
          </div>
          <div className="block">
            <WordSlamLine text="Start Training." delay={0.55} color="#E8000E" />
          </div>
        </motion.h1>

        <motion.p
          className="text-zinc-300 text-base md:text-xl text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Join 500+ PowerFit members in Jaipur and Sikar who made the decision that changed everything. Your membership
          starts the moment you say yes.
        </motion.p>

        {/* Social proof micro-strip */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {[
            { icon: "⭐", value: "4.9/5", label: "Member Rating" },
            { icon: "👥", value: "500+", label: "Active Members" },
            { icon: "📍", value: "5", label: "Studio Locations" },
            { icon: "🏆", value: "7+ yrs", label: "Est. 2017" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 text-center">
              <span className="text-2xl" aria-hidden="true">
                {stat.icon}
              </span>
              <div>
                <div className="text-white font-black text-lg leading-none">{stat.value}</div>
                <div className="text-zinc-500 text-[11px]">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, type: "spring" }}
        >
          <a
            href="#pricing"
            className="px-8 py-5 rounded-2xl text-lg md:text-xl font-black text-white bg-red-600 hover:bg-red-500 shadow-[0_0_40px_rgba(232,0,14,0.4)] hover:shadow-[0_0_60px_rgba(232,0,14,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3"
            style={{ animation: "urgencyPulse 2s infinite" }}
          >
            💪 View Membership Plans
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
              →
            </motion.span>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 rounded-2xl text-lg md:text-xl font-black text-white bg-[#25D366] hover:bg-[#20BA5C] hover:scale-105 transition-all flex items-center justify-center gap-3"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp to Join
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-zinc-600 text-xs tracking-widest uppercase">Scroll to explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

