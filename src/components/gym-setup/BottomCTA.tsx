const BottomCTA = () => {
  const scrollToQuote = () => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-10 px-4" style={{ background: "linear-gradient(135deg, #1A0000, #0D0000)" }}>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <p className="text-xl text-white font-bold font-['Oswald']">Your dream gym is one conversation away.</p>
        <div className="flex gap-4">
          <button onClick={scrollToQuote} className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">Get Free Quote</button>
          <a
            href="https://wa.me/918619527263?text=Hi%20PowerFit!%20I%20want%20a%20free%20quote%20for%20gym%20setup"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#20bd5a] transition-all"
          >
            💬 WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
