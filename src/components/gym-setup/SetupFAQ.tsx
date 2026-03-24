import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is the minimum space required for a home gym setup?", a: "As little as 150–200 sq ft can be transformed into a functional home gym. Our team will help you make the most of every square foot." },
  { q: "Do you supply equipment or just consult?", a: "Both. We provide end-to-end service — consultation, equipment supply, delivery, professional installation, and post-setup maintenance." },
  { q: "Can I get a gym setup in cities outside Rajasthan?", a: "Yes. We are actively expanding our setup services nationally. Contact us to check availability in your city." },
  { q: "What brands of equipment do you supply?", a: "We supply from India's top commercial gym equipment manufacturers, the same quality used in premium gyms. Full brand list shared during consultation." },
  { q: "Is there an ongoing maintenance contract?", a: "Yes. We offer AMC (Annual Maintenance Contract) for all setup types — highly recommended for society and office gyms." },
  { q: "Can I visit a PowerFit gym to see the equipment quality before ordering?", a: "Absolutely. Visit any of our studios (listed above) for a free walkthrough. Our team will show you everything in action." },
  { q: "Do you offer financing or EMI for gym setups?", a: "Yes. EMI and installment options are available for qualifying setups. Ask our team during consultation." },
];

const SetupFAQ = () => (
  <section className="py-24 px-4" style={{ background: "#0A0A0A" }}>
    <div className="max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-white font-['Oswald'] text-center mb-12"
      >
        Frequently Asked Questions — Gym Setup
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <AccordionItem value={`faq-${i}`} className="border border-white/5 rounded-xl overflow-hidden px-6" style={{ background: "#111" }}>
              <AccordionTrigger className="text-white hover:text-primary hover:no-underline text-left py-5 [&>svg]:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default SetupFAQ;
