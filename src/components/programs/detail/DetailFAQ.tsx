import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Program } from "@/data/programs";
import type { ProgramVisual } from "@/config/programVisuals";
import type { CategoryTheme } from "@/config/categoryThemes";

interface Props { program: Program; visuals: ProgramVisual; theme: CategoryTheme }

export default function DetailFAQ({ program, visuals, theme }: Props) {
  const faqs = visuals.programFAQ;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://powerfitindia.com" },
      { "@type": "ListItem", position: 2, name: "Programs", item: "https://powerfitindia.com/programs" },
      { "@type": "ListItem", position: 3, name: program.category, item: `https://powerfitindia.com/programs/${program.categoryId}` },
      { "@type": "ListItem", position: 4, name: program.name, item: `https://powerfitindia.com/programs/${program.slug}` },
    ],
  };

  return (
    <section className="py-16 md:py-24" style={{ background: "#0A0A0A" }} aria-label="FAQ">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="section-container max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="font-display text-3xl md:text-5xl text-white mb-10"
        >
          Questions About {program.name}
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-zinc-900 rounded-xl border border-zinc-800 px-4">
              <AccordionTrigger className="text-white text-left text-base font-semibold py-4 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
