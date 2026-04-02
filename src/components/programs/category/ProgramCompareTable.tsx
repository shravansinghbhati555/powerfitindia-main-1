import { useMemo } from "react";
import type { Program } from "@/data/programs";
import { useCategoryTheme } from "@/components/programs/category/CategoryThemeProvider";
import WhatsAppCTA from "@/components/programs/category/WhatsAppCTA";
import { MostPopularBadge } from "@/components/ui/MostPopularBadge";

function topStat(p: Program) {
  const first = p.realDataStats?.[0];
  if (!first) return "—";
  return `${first.metric}: ${first.value}`;
}

export default function ProgramCompareTable({ programs }: { programs: Program[] }) {
  const theme = useCategoryTheme();

  const columns = useMemo(() => {
    if (programs.length === 0) return [];
    const sorted = [...programs].sort((a, b) => Number(!!b.isMostPopular) - Number(!!a.isMostPopular));
    return sorted.slice(0, Math.min(4, programs.length));
  }, [programs]);

  if (programs.length === 0) return null;
  const features = [
    { label: "Duration", get: (p: Program) => p.duration },
    { label: "Intensity", get: (p: Program) => p.intensity },
    { label: "Sessions/Week", get: (p: Program) => p.sessionsPerWeek },
    { label: "Best For", get: (p: Program) => p.bestFor.slice(0, 2).join(", ") },
    { label: "Available", get: (p: Program) => p.available.join(" · ") },
    { label: "Key Result", get: (p: Program) => topStat(p) },
  ];

  return (
    <section className="section-dark py-16 md:py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-5xl text-white text-center">
          Compare <span style={{ color: theme.accent }}>{theme.label}</span> Programs at a Glance
        </h2>

        <div className="mt-10 overflow-x-auto">
          <table className="min-w-[1080px] w-full border-separate border-spacing-0 rounded-2xl overflow-hidden">
            <thead>
              <tr>
                <th className="text-left bg-zinc-950 text-zinc-400 text-xs uppercase tracking-widest px-5 py-4 border border-white/10 rounded-tl-2xl">
                  Feature
                </th>
                {columns.map((p, i) => (
                  <th
                    key={p.id}
                    className={`text-left font-black px-5 py-4 border border-white/10 ${i === columns.length - 1 ? "rounded-tr-2xl" : ""} ${
                      p.isMostPopular ? "text-yellow-100" : "text-white"
                    }`}
                    style={
                      p.isMostPopular
                        ? { background: "linear-gradient(135deg, rgba(234,179,8,0.2), rgba(232,0,14,0.1))" }
                        : { background: theme.accent }
                    }
                  >
                    <div className="text-center">
                      {p.isMostPopular && (
                        <MostPopularBadge size="sm" animated={false} className="mx-auto mb-1 justify-center !text-[10px]" />
                      )}
                      <a href={`/program/${p.slug}`} className="hover:underline underline-offset-4 block">
                        <span className={p.isMostPopular ? "text-yellow-300" : undefined}>{p.name}</span>
                      </a>
                      {p.isMostPopular && <div className="text-zinc-500 text-xs font-semibold mt-0.5">#1 Program</div>}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, rowIdx) => (
                <tr key={f.label} className={rowIdx % 2 === 0 ? "bg-zinc-950" : "bg-zinc-900"}>
                  <td className="px-5 py-4 text-zinc-300 border border-white/10 font-semibold">{f.label}</td>
                  {columns.map((p) => (
                    <td key={`${f.label}-${p.id}`} className="px-5 py-4 text-zinc-200 border border-white/10">
                      {f.get(p)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-zinc-950">
                <td className="px-5 py-4 text-zinc-300 border border-white/10 font-semibold rounded-bl-2xl">💬 WhatsApp</td>
                {columns.map((p, i) => (
                  <td
                    key={`wa-${p.id}`}
                    className={`px-5 py-4 border border-white/10 ${i === columns.length - 1 ? "rounded-br-2xl" : ""}`}
                  >
                    <WhatsAppCTA
                      text="Enquire"
                      message={`Hi! I want to know more about the ${p.name} program at PowerFit. Please share batch timings and fee details.`}
                      size="default"
                      className="w-full"
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

       
      </div>
    </section>
  );
}

