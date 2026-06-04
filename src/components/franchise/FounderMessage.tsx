import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { PowerFitImage } from "@/components/ui/PowerFitImage";

const MotionPowerFitImage = motion(PowerFitImage);

const fullText = `When I started PowerFit in 2017, I had a simple belief — that world-class fitness should be accessible to every Indian, not just the elite. What I didn't expect was how many people would share that belief and want to build it with me.

Every franchise partner we welcome isn't just a business owner — they become part of a movement. If you're reading this, I want to talk to you personally about your city, your vision, and how together we can make fitness accessible to millions more.`;

const FounderMessage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section className="section-dark py-20 md:py-28">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative overflow-hidden rounded-2xl border-2 border-primary/20"
          >
            <MotionPowerFitImage
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              src="https://powerfitindia.com/cdn/shop/files/WhatsApp_Image_2026-02-07_at_10.42.21_PM.jpg?v=1770614966&width=700"
              alt="Founder of PowerFit India"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-dark/80 backdrop-blur px-4 py-2 rounded-lg">
              <p className="font-display text-sm text-dark-foreground">Founder, PowerFit India</p>
            </div>
          </motion.div>

          {/* Message */}
          <div ref={ref}>
            <h2 className="font-display text-3xl md:text-4xl text-dark-foreground mb-6">
              A Message From the <span className="text-primary">Founder</span>
            </h2>
            <div className="font-body text-sm text-dark-muted leading-relaxed whitespace-pre-line min-h-[200px]">
              {displayed}
              {displayed.length < fullText.length && (
                <span className="inline-block w-0.5 h-4 bg-primary animate-pulse ml-0.5 align-middle" />
              )}
            </div>
            <p className="font-display text-base text-dark-foreground mt-6">— Founder, PowerFit India</p>

            <a
              href="https://wa.me/919116838715"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg border border-green-500/40 text-green-400 font-body text-sm hover:bg-green-500/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Connect directly on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
