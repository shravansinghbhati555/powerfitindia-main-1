import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, FileText, Handshake, Lock, ArrowRight } from "lucide-react";
import { submitFranchiseApplication } from "@/lib/franchiseApplication";

const majorCities = ["Jaipur", "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Ahmedabad", "Surat", "Lucknow", "Chandigarh", "Kolkata", "Chennai", "Indore", "Bhopal", "Jodhpur", "Sikar", "Other"];
const budgetOptions = ["₹60L-80L", "₹80L-1Cr", "₹1Cr–1.5Cr", "₹1.5Cr+"];
const sourceOptions = ["Social Media", "Google Search", "Friend / Referral", "Event / Expo", "News Article", "Other"];

const FranchiseForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const [citySearch, setCitySearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cityOpen, setCityOpen] = useState(false);

  const filteredCities = majorCities.filter((city) =>
    city.toLowerCase().includes(citySearch.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedCity) {
      setCityOpen(true);
      return;
    }

    const data = new FormData(e.currentTarget);
    setSubmitting(true);
    setError("");
    const result = await submitFranchiseApplication({
      firstName: String(data.get("firstName") || ""),
      lastName: String(data.get("lastName") || ""),
      email: String(data.get("email") || ""),
      mobile: String(data.get("mobile") || ""),
      whatsapp: data.get("whatsapp") === "yes",
      city: selectedCity,
      budget: String(data.get("budget") || ""),
      message: String(data.get("message") || ""),
      source: String(data.get("source") || ""),
    });
    setSubmitting(false);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setConfirmation(result.message);
    setSubmitted(true);
  };

  return (
    <section id="franchise-form" className="section-dark py-20 md:py-28" style={{ borderTop: "4px solid hsl(355, 78%, 56%)" }}>
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-dark-foreground text-center mb-2"
        >
          Apply for a <span className="text-primary">PowerFit Franchise</span>
        </motion.h2>
        <p className="font-body text-dark-muted text-center mb-12">Takes 2 minutes. Our team responds within 48 hours.</p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-3xl text-dark-foreground mb-4">Application Received!</h3>
            <p className="font-body text-dark-muted max-w-md mx-auto">
              {confirmation || "We'll review your application and call you within 48 hours. Welcome to the PowerFit family."}
            </p>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "firstName", label: "First Name", type: "text" },
                  { name: "lastName", label: "Last Name", type: "text" },
                  { name: "email", label: "Email Address", type: "email" },
                  { name: "mobile", label: "Mobile Number", type: "tel" },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <label className="label-text text-dark-muted block mb-1.5">{f.label}</label>
                    <input
                      name={f.name}
                      type={f.type}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-dark-foreground/10 bg-[#111111] text-dark-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors"
                    />
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp checkbox */}
              <label className="flex items-center gap-2 font-body text-xs text-dark-muted cursor-pointer">
                <input type="checkbox" name="whatsapp" value="yes" className="accent-primary" defaultChecked />
                Also reachable on WhatsApp
              </label>

              {/* City */}

              {/* Searchable City Dropdown */}
              <div className="relative">
                <label className="label-text text-dark-muted block mb-1.5">
                  City You Want to Open In
                </label>

                <input
                  type="text"
                  name="city"
                  value={citySearch}
                  required
                  autoComplete="off"
                  placeholder="Search or select city..."
                  onFocus={() => setCityOpen(true)}
                  onChange={(e) => {
                    setCitySearch(e.target.value);
                    setSelectedCity("");
                    setCityOpen(true);
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-dark-foreground/10 bg-[#111111] text-dark-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors"
                />

                {cityOpen && (
                  <div className="absolute z-50 mt-1 w-full max-h-56 overflow-y-auto rounded-lg border border-dark-foreground/10 bg-[#111111] shadow-xl">
                    {filteredCities.length > 0 ? (
                      filteredCities.map((city) => (
                        <button
                          key={city}
                          type="button"
                          onClick={() => {
                            setCitySearch(city);
                            setSelectedCity(city);
                            setCityOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-sm font-body transition-colors hover:bg-primary/10 hover:text-primary ${selectedCity === city
                            ? "bg-primary/10 text-primary"
                            : "text-dark-foreground"
                            }`}
                        >
                          {city}
                        </button>
                      ))
                    ) : (
                      <p className="px-4 py-3 text-sm text-dark-muted">
                        No city found.
                      </p>
                    )}
                  </div>
                )}

                {selectedCity === "" && citySearch !== "" && (
                  <p className="mt-1 text-xs text-dark-muted">
                    Please select a city from the list.
                  </p>
                )}
              </div>


              {/* Model */}
              {/* <div>
                <label className="label-text text-dark-muted block mb-1.5">Preferred Franchise Model</label>
                <select className="w-full px-4 py-3 rounded-lg border border-dark-foreground/10 bg-[#111111] text-dark-foreground font-body text-sm focus:border-primary focus:outline-none">
                  {["Not Sure", "Lite", "Studio", "Premium"].map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div> */}

              {/* Budget */}
              <div>
                <label className="label-text text-dark-muted block mb-1.5">Available Investment Budget</label>
                <select name="budget" className="w-full px-4 py-3 rounded-lg border border-dark-foreground/10 bg-[#111111] text-dark-foreground font-body text-sm focus:border-primary focus:outline-none">
                  {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              {/* Location */}
              {/* <div>
                <label className="label-text text-dark-muted block mb-1.5">Any addiional thought before you want to connect?</label>
                <div className="flex gap-4">
                  {["Yes", "No"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 font-body text-sm text-dark-muted cursor-pointer">
                      <input type="radio" name="hasLocation" value={opt} className="accent-primary" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div> */}

              {/* Why */}
              <div>
                <label className="label-text text-dark-muted block mb-1.5">Any addiional thought before you want to connect?</label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-dark-foreground/10 bg-[#111111] text-dark-foreground font-body text-sm focus:border-primary focus:outline-none resize-none"
                />
              </div>

              {/* Source */}
              <div>
                <label className="label-text text-dark-muted block mb-1.5">How did you hear about us?</label>
                <select name="source" className="w-full px-4 py-3 rounded-lg border border-dark-foreground/10 bg-[#111111] text-dark-foreground font-body text-sm focus:border-primary focus:outline-none">
                  <option value="">Select</option>
                  {sourceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Submit */}
              {error ? <p className="font-body text-sm text-red-400">{error}</p> : null}
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: submitting ? 1 : 1.01 }}
                className="w-full py-4 bg-primary text-primary-foreground font-body font-bold rounded-lg text-base flex items-center justify-center gap-2 animate-pulse-glow hover:bg-primary/90 transition-all disabled:opacity-70"
              >
                {submitting ? "Sending…" : "Submit My Application"}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <p className="font-body text-[10px] text-dark-muted text-center flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" /> Your information is 100% confidential and never shared with third parties.
              </p>
            </form>

            {/* What happens next */}
            <div className="space-y-8 pt-4">
              <h3 className="font-display text-xl text-dark-foreground">What Happens Next</h3>
              {[
                { icon: Phone, title: "We call you within 48 hours", desc: "A franchise expert connects to discuss your goals." },
                { icon: FileText, title: "Detailed proposal & financials", desc: "Custom projection for your city and model." },
                { icon: Handshake, title: "We meet & make it official", desc: "In-person or virtual meeting to finalize partnership." },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-dark-foreground font-semibold">{step.title}</p>
                    <p className="font-body text-xs text-dark-muted">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FranchiseForm;
