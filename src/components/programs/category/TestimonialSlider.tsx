import { motion } from "framer-motion";
import { useCategoryTheme } from "@/components/programs/category/CategoryThemeProvider";

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  rating: number;
  waMessage: string;
};

function Stars({ n }: { n: number }) {
  return <div className="text-yellow-400 text-sm">{Array.from({ length: n }).map((_, i) => <span key={i}>★</span>)}</div>;
}

export default function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const theme = useCategoryTheme();
  const doubled = [...items, ...items, ...items];

  return (
    <section className="section-dark py-16 md:py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-5xl text-white text-center">
          What Members <span style={{ color: theme.accent }}>Say</span>
        </h2>

        <div className="mt-10 overflow-hidden">
          <motion.div className="flex gap-4 conveyor-track" style={{ width: "max-content" }}>
            {doubled.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="w-[320px] md:w-[380px] rounded-2xl bg-zinc-950 border border-white/10 p-6 shrink-0"
              >
                <p className="text-zinc-200 leading-relaxed">“{t.quote}”</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-zinc-500 text-sm">{t.location}</div>
                  </div>
                  <Stars n={t.rating} />
                </div>
                <a
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 hover:opacity-90"
                  style={{ color: theme.accent }}
                  href={`https://wa.me/919116838715?text=${encodeURIComponent(t.waMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 Join This Program →
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

