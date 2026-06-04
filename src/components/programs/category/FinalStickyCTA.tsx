import WhatsAppCTA from "@/components/programs/category/WhatsAppCTA";
import { useCategoryTheme } from "@/components/programs/category/CategoryThemeProvider";

export default function FinalStickyCTA() {
  const theme = useCategoryTheme();

  return (
    <section className="bg-zinc-950 border-t-4 py-16 px-6 text-center" style={{ borderColor: theme.accent }}>
      <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-3">
        Ready to Start Your <span style={{ color: theme.accent }}>{theme.label}</span> Journey?
      </h2>
      <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
        Your first class is free. Our trainer will personally guide you to the right program. WhatsApp us now — we respond within minutes.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <WhatsAppCTA text="WhatsApp Us — Get Started Today" message={theme.whatsappText} size="large" />
        <a
          href="tel:+919116838715"
          className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 min-h-[48px]"
        >
          📞 Call: +91 86195 27263
        </a>
      </div>
      <p className="text-zinc-600 text-sm mt-6">
        Studios in Jaipur (Malviya Nagar, Mansarovar) · Sikar (Piprali Road, Vasant Vihar, Rani Sati Road) · Online across India
      </p>
    </section>
  );
}

