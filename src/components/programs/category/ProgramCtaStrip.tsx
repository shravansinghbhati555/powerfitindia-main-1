import WhatsAppCTA from "@/components/programs/category/WhatsAppCTA";
import { useCategoryTheme } from "@/components/programs/category/CategoryThemeProvider";

export default function ProgramCtaStrip({ variant }: { variant: "whatsapp" | "trial" }) {
  const theme = useCategoryTheme();

  if (variant === "trial") {
    return (
      <div className="bg-red-950/30 border-y border-red-900/30 py-5 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold">🎯 Try any program FREE — no commitment</p>
          <p className="text-zinc-400 text-sm">Walk in to any PowerFit studio for your first class on us.</p>
        </div>
        <a
          href={`https://wa.me/918619527263?text=${encodeURIComponent("Hi! I want to book a free trial class at PowerFit.")}`}
          target="_blank"
          rel="noreferrer"
          className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 whitespace-nowrap min-h-[48px] inline-flex items-center justify-center"
        >
          Book Free Trial →
        </a>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 border-y border-zinc-800 py-5 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p className="text-white font-bold">Not sure which program suits you?</p>
        <p className="text-zinc-400 text-sm">Our trainers will guide you in 2 minutes on WhatsApp.</p>
      </div>
      <WhatsAppCTA text="Get Free Guidance" message={theme.whatsappText} size="default" />
    </div>
  );
}

