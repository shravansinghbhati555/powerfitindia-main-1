import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCategoryTheme } from "@/components/programs/category/CategoryThemeProvider";

export default function CategoryFAQ() {
  const theme = useCategoryTheme();

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: theme.faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="section-dark py-16 md:py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="section-container max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl text-white text-center"
        >
          {theme.label} — <span style={{ color: theme.accent }}>FAQ</span>
        </motion.h2>

        <div className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {theme.faqItems.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem value={`faq-${i}`} className="border border-dark-foreground/10 rounded-xl px-5 overflow-hidden" style={{ backgroundColor: "#111111" }}>
                  <AccordionTrigger className="font-body text-sm text-dark-foreground hover:no-underline py-4 [&[data-state=open]>svg]:text-primary">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm text-dark-muted pb-4 leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

