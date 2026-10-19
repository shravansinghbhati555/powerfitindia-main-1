import type { Program } from "@/data/programs";

export default function RealDataBadge({ program }: { program: Program }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mt-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-green-400">📊</span>
        <span className="text-zinc-400 text-xs font-bold tracking-widest uppercase">Real Member Data</span>
        <span className="ml-auto text-zinc-600 text-xs">10,000+ members tracked</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {program.realDataStats.map((stat) => (
          <div key={stat.metric} className="text-center">
            <div className="text-white font-black text-lg">{stat.value}</div>
            <div className="text-zinc-500 text-xs">{stat.metric}</div>
            <div className="text-zinc-600 text-xs">in {stat.timeframe}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-zinc-800 text-zinc-600 text-xs text-center">Source: {program.realDataStats[0]?.source}</div>
    </div>
  );
}

