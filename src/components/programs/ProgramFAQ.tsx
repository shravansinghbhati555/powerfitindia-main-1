import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const programFaqs = [
  {
    q: "Can a complete beginner join any program?",
    a: "Yes. All our programs have beginner-friendly batches. Our trainers assess your fitness level in the first session and place you in the right group.",
  },
  {
    q: "Are the real data statistics accurate?",
    a: "Yes. Stats are aggregated from 10,000+ member records including InBody body composition scans, trainer assessments, and post-program wellness surveys conducted at PowerFit studios since 2017.",
  },
  {
    q: "Can I switch programs mid-way?",
    a: "Yes. Talk to your trainer or the front desk. Switching is allowed and often encouraged based on your evolving goals.",
  },
  {
    q: "Do you offer trial classes?",
    a: "Yes. Most programs offer a free trial class. WhatsApp us or visit any studio to book yours.",
  },
  {
    q: "Are online programs as effective as in-studio?",
    a: "Our data shows online coaching achieves 91% comparable results to in-studio for most goals. Consistency and discipline are the key factors.",
  },
  {
    q: "Do you offer custom nutrition plans with programs?",
    a: "Yes. Nutrition coaching is included in Weight Loss, Muscle Gain, and premium programs. Available as an add-on for others.",
  },
  {
    q: "Are programs available for kids and seniors?",
    a: "Yes. Kickboxing/Martial Arts from age 8, Senior Fitness from age 50. Both have age-specific batches.",
  },
];

export default function ProgramFAQ() {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="section-container max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl text-white text-center"
        >
          Programs — <span className="text-primary">Frequently Asked Questions</span>
        </motion.h2>

        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {programFaqs.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem value={`faq-${i}`} className="border border-dark-foreground/10 rounded-xl px-5 overflow-hidden" style={{ backgroundColor: "#111111" }}>
                  <AccordionTrigger className="font-body text-sm text-dark-foreground hover:text-primary py-4 [&[data-state=open]>svg]:text-primary">
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

