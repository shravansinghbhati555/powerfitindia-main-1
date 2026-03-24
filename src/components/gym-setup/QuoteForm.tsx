import { useState } from "react";
import { motion } from "framer-motion";

const setupTypes = ["Home Gym", "Office Gym", "Society Gym", "Other"];
const spaceOptions = ["Under 200 sq ft", "200–500 sq ft", "500–1000 sq ft", "1000–2500 sq ft", "2500 sq ft+"];
const budgetOptions = ["Under ₹50K", "₹50K–₹1.5L", "₹1.5L–₹5L", "₹5L–₹15L", "₹15L+"];

const QuoteForm = () => {
  const [setupType, setSetupType] = useState("Home Gym");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-24 px-4 border-t-4 border-primary" style={{ background: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white font-['Oswald'] mb-4">Get Your Free Gym Setup Quote</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Fill in the details below. Our gym setup expert will call you within 24 hours with a no-obligation custom plan and transparent pricing.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-12">
          {/* Form */}
          {submitted ? (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-primary/20" style={{ background: "#111" }}>
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-2">Enquiry Submitted!</h3>
              <p className="text-gray-400">Our gym setup expert will call you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Full Name" className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none transition-colors" />
                <input required type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none transition-colors" />
              </div>
              <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none transition-colors" />
              <p className="text-gray-500 text-xs -mt-3">We'll WhatsApp you the quote</p>

              {/* Setup type pills */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Setup Type</label>
                <div className="flex flex-wrap gap-2">
                  {setupTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSetupType(t)}
                      className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${setupType === t ? "bg-primary text-white" : "bg-[#1a1a1a] text-gray-400 border border-white/10 hover:border-primary/30"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <input required placeholder="City / Location" className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none transition-colors" />

              <div className="grid sm:grid-cols-2 gap-4">
                <select required className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-gray-400 focus:border-primary/50 focus:outline-none transition-colors">
                  <option value="">Approximate Space</option>
                  {spaceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <select required className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-gray-400 focus:border-primary/50 focus:outline-none transition-colors">
                  <option value="">Approximate Budget</option>
                  {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <textarea rows={3} placeholder="Any specific requirements? (optional)" className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none transition-colors resize-none" />

              <button type="submit" className="w-full py-4 bg-primary text-white font-bold text-lg rounded-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(232,0,14,0.3)]">
                Send My Enquiry & Get Free Quote →
              </button>
              <p className="text-gray-500 text-xs text-center">🔒 Your details are private. No spam. Expert calls you within 24 hours.</p>
            </form>
          )}

          {/* Right — What happens next */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white font-['Oswald']">What happens next?</h3>
            {[
              { icon: "📞", text: "Expert calls within 24 hours" },
              { icon: "📐", text: "Free site visit / virtual walkthrough" },
              { icon: "📄", text: "Detailed transparent quote in 48 hours" },
              { icon: "🏗️", text: "Setup begins within 7–14 days of approval" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 items-center">
                <span className="text-2xl">{s.icon}</span>
                <span className="text-gray-300">{s.text}</span>
              </motion.div>
            ))}

            <div className="pt-4 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-3">Prefer to WhatsApp directly?</p>
              <a
                href="https://wa.me/918619527263?text=Hi%20PowerFit!%20I%20want%20a%20free%20quote%20for%20gym%20setup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#20bd5a] transition-all"
              >
                💬 WhatsApp Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
