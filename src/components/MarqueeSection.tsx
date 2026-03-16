const marqueeText = "Where Commitment Meets Results • ";

const MarqueeSection = () => (
  <section className="section-dark py-6 md:py-8 overflow-hidden border-y border-dark-foreground/10">
    <div className="flex gap-0">
      <div className="scrolling-strip whitespace-nowrap flex-shrink-0">
        <span className="font-display text-4xl md:text-6xl lg:text-7xl text-dark-foreground/10 tracking-wider">
          {marqueeText.repeat(10)}
        </span>
      </div>
    </div>
  </section>
);

export default MarqueeSection;
