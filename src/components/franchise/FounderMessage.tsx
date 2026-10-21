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
            className="relative overflow-hidden rounded-2xl"
          >
            <MotionPowerFitImage
              src="/founder-powerfit.jpeg"
              alt="Abhishek Tiwari - Founder of PowerFit India"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-square w-full max-w-[400px] rounded-full border-2 border-primary/20 object-cover object-[center_20%]"
            />

            {/* <div className="absolute bottom-4 left-4 bg-dark/80 backdrop-blur px-4 py-2 rounded-lg">
                  <p className="font-display text-sm text-dark-foreground">
                       Founder, PowerFit India
                  </p>
            </div> */}
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
            <div className="mt-6">
              <p className="font-display text-xl md:text-2xl text-dark-foreground tracking-wide">
                Abhishek Tiwari
              </p>
              <p className="font-body text-sm italic text-primary font-medium mt-1">
                Founder, PowerFit India
              </p>
            </div>

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
