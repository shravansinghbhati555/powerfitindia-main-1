import { categoryThemes, type CategoryThemeId } from "@/config/categoryThemes";

const blurb: Record<CategoryThemeId, string> = {
  strength: "Strength Training, CrossFit & Muscle Gain — engineered for PRs.",
  cardio: "HIIT, Functional Fitness & Weight Loss — burn fat, boost endurance.",
  "mind-body": "Yoga, Zumba & Meditation — sleep better, stress less, move freely.",
  specialty: "Women's, Senior, Kids Fitness & Kickboxing — tailored programs.",
};

export default function ExploreOtherCategories({ current }: { current: CategoryThemeId }) {
  const ids = (Object.keys(categoryThemes) as CategoryThemeId[]).filter((id) => id !== current);

  return (
    <section className="section-dark py-16 md:py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-5xl text-white text-center">Explore Other Programs at PowerFit</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {ids.map((id) => {
            const t = categoryThemes[id];
            return (
              <a
                key={id}
                href={`/programs/${id}`}
                className="rounded-3xl bg-zinc-950 border border-white/10 p-6 transition-all hover:-translate-y-1"
                style={{ boxShadow: `0 0 0 rgba(0,0,0,0)` }}
              >
                <div className="text-4xl">{t.icon}</div>
                <div className="mt-3 text-white font-black text-2xl">{t.label}</div>
                <p className="mt-2 text-zinc-400 leading-relaxed">{blurb[id]}</p>
                <div className="mt-5 font-bold underline underline-offset-4" style={{ color: t.accent }}>
                  Explore →
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

