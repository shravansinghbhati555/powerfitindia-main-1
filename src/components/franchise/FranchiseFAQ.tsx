import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do I need prior gym or fitness experience?", a: "No. Our training program and operations manual are designed for first-time gym owners. We provide complete SOPs and hands-on training." },
  { q: "Is the territory exclusive?", a: "Yes. Once your franchise is approved for a territory, no other PowerFit franchise will open within that defined area." },
  { q: "How long does it take to open after signing?", a: "Typically 45–60 days from agreement to grand opening, depending on location readiness and build-out complexity." },
  { q: "What is the franchise fee?", a: "Disclosed during consultation call. Varies by model (Lite / Studio / Premium) and territory." },
  { q: "Do I pay royalties?", a: "Yes, a small monthly royalty fee. Full details are provided in the franchise agreement shared during your consultation." },
  { q: "Can I own multiple locations?", a: "Yes. Multi-unit franchising is actively encouraged and comes with additional benefits and priority territory access." },
  { q: "What if my gym doesn't perform well?", a: "Our franchise manager works closely with underperforming units. We're invested in your success — your failure is our failure." },
  { q: "Is international franchising available?", a: "Yes, enquiries from UAE, UK, Canada, and Southeast Asia are welcome. Contact us separately for international terms." },
];

const FranchiseFAQ = () => (
  <section className="section-dark py-20 md:py-28" style={{ borderTop: "4px solid hsl(355, 78%, 56%)" }}>
    <div className="section-container max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl text-dark-foreground text-center mb-12"
      >
        Questions Investors <span className="text-primary">Ask Us Most</span>
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <AccordionItem value={`faq-${i}`} className="border border-dark-foreground/10 rounded-xl px-5 overflow-hidden" style={{ backgroundColor: "#111111" }}>
              <AccordionTrigger className="font-body text-sm text-dark-foreground hover:text-primary py-4 [&[data-state=open]>svg]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-dark-muted pb-4 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FranchiseFAQ;
