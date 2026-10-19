import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowUp, Check, ChevronDown, ListOrdered, Square } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_ORIGIN } from "@/config/site";
import {
  AGREEMENT_SUBTITLE,
  AGREEMENT_TAGLINE,
  AGREEMENT_TITLE,
  commitment,
  importantNotice,
  parts,
  type Section,
} from "@/data/termsContent";

const LAST_UPDATED = "September 2026";

/* ---------------------------------------------------------------- section */

const SectionBody = ({ section }: { section: Section }) => {
  if (section.kind === "checklist" || section.kind === "statements") {
    return (
      <div className="space-y-4">
        {section.intro && (
          <p className="font-body text-sm md:text-base text-dark-muted leading-relaxed">
            {section.intro}
          </p>
        )}
        <ul className="space-y-2.5">
          {section.items?.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg border border-dark-foreground/5 bg-dark-foreground/[0.02] p-3 md:p-3.5"
            >
              <Check size={16} className="mt-0.5 shrink-0 text-primary" />
              <span className="font-body text-sm md:text-[15px] text-dark-foreground/75 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (section.kind === "emergency") {
    return (
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3 empty:hidden">
          {section.items?.map((field) => (
            <div
              key={field}
              className="rounded-lg border border-dark-foreground/10 bg-dark-foreground/[0.02] p-4"
            >
              <p className="label-text text-dark-muted">{field}</p>
              <div className="mt-3 h-px w-full bg-dark-foreground/15" />
            </div>
          ))}
        </div>
        {section.note && (
          <p className="font-body text-sm text-dark-muted leading-relaxed">{section.note}</p>
        )}
      </div>
    );
  }

  if (section.kind === "consent") {
    return (
      <div className="space-y-4">
        {section.intro && (
          <p className="font-body text-sm md:text-base text-dark-muted leading-relaxed">
            {section.intro}
          </p>
        )}
        {/* The opt-in boxes only belong on the signed form, so render them if present. */}
        {section.items && section.items.length > 0 && (
          <>
            <p className="label-text text-dark-foreground/80">Marketing Consent</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {section.items.map((option) => (
                <div
                  key={option}
                  className="flex items-center gap-3 rounded-lg border border-dark-foreground/10 bg-dark-foreground/[0.02] p-4"
                >
                  <Square size={16} className="shrink-0 text-dark-muted" />
                  <span className="font-body text-sm text-dark-foreground/75">{option}</span>
                </div>
              ))}
            </div>
          </>
        )}
        {section.note && (
          <p className="font-body text-sm text-dark-muted">{section.note}</p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {section.intro && (
        <p className="font-body text-sm md:text-base text-dark-muted leading-relaxed">
          {section.intro}
        </p>
      )}
      {section.clauses?.map((clause, i) => (
        <div key={clause.n ?? i} className="space-y-2.5">
          <p className="font-body text-sm md:text-[15px] leading-relaxed text-dark-foreground/75">
            {clause.n && (
              <span className="mr-2 font-semibold text-primary tabular-nums">{clause.n}</span>
            )}
            {clause.text}
          </p>

          {clause.bullets && (
            <ul className="ml-1 space-y-1.5 border-l border-dark-foreground/10 pl-4 md:ml-4 md:pl-5">
              {clause.bullets.map((b) => (
                <li
                  key={b}
                  className="font-body text-sm leading-relaxed text-dark-muted before:mr-2 before:text-primary before:content-['—']"
                >
                  {b}
                </li>
              ))}
            </ul>
          )}

          {clause.after && (
            <p className="font-body text-sm md:text-[15px] leading-relaxed text-dark-foreground/75">
              {clause.after}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

/* ------------------------------------------------------------------- page */

const MemberConsentPolicyPage = () => {
  const [activeId, setActiveId] = useState<string>("");
  const [tocOpen, setTocOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const visibleRef = useRef<Set<string>>(new Set());

  const tocItems = useMemo(
    () =>
      parts.map((part) => ({
        id: part.id,
        label: part.label,
        title: part.title,
      })),
    []
  );

  /* The footer sits at the bottom of the previous page — land at the top of this one. */
  useLayoutEffect(() => {
    // The footer link that leads here sits at the bottom of a much taller page,
    // so re-assert the top across the next few frames while this one lays out.
    const top = () => window.scrollTo(0, 0);
    top();
    const raf1 = requestAnimationFrame(() => {
      top();
      requestAnimationFrame(top);
    });
    const timer = window.setTimeout(top, 150);
    return () => {
      cancelAnimationFrame(raf1);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const order = parts.map((p) => p.id);
    const headings = order
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visibleRef.current.add(e.target.id);
          else visibleRef.current.delete(e.target.id);
        });
        // Highest part currently crossing the reading band; none while the hero is on screen.
        setActiveId(order.find((id) => visibleRef.current.has(id)) ?? "");
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jumpTo = (id: string) => {
    setTocOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen section-dark">
      <Helmet>
        <title>Member Consent Policy | PowerFit India</title>
        <meta
          name="description"
          content="PowerFit India Member Consent Policy — the Master Membership Agreement covering membership terms, fees, refunds, freezes, health declaration, assumption of risk and facility rules."
        />
        <link rel="canonical" href={`${SITE_ORIGIN}/member-consent-policy`} />
        <meta property="og:title" content="Member Consent Policy | PowerFit India" />
        <meta
          property="og:description"
          content="Read the PowerFit Member Consent Policy: membership terms, payments, refunds, health declaration, assumption of risk and gym rules."
        />
      </Helmet>

      <Navbar />

      {/* ------------------------------------------------------------ hero */}
      <header className="relative overflow-hidden border-b border-dark-foreground/10 pt-28 pb-12 md:pt-36 md:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[42rem] max-w-[130vw] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="section-container relative"
        >
          <p className="label-text text-primary">Legal • PowerFit India</p>
          <h1 className="font-display mt-4 text-4xl leading-none sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-primary red-glow-text">MEMBER</span>{" "}
            <span className="text-dark-foreground">CONSENT POLICY</span>
          </h1>
          <p className="font-body mt-5 max-w-3xl text-sm leading-relaxed text-dark-foreground/70 md:text-base">
            {AGREEMENT_TITLE}
          </p>
          <p className="font-body mt-2 max-w-3xl text-sm leading-relaxed text-dark-muted md:text-base">
            {AGREEMENT_SUBTITLE}
          </p>
          <p className="font-body mt-3 text-xs text-primary/80 md:text-sm">{AGREEMENT_TAGLINE}</p>
          <p className="font-body mt-6 text-xs text-dark-muted">Last updated: {LAST_UPDATED}</p>
        </motion.div>
      </header>

      {/* -------------------------------------------------- important notice */}
      <section className="section-container pt-10 md:pt-14">
        <div className="rounded-xl border border-primary/30 bg-primary/[0.06] p-5 md:p-7">
          <div className="flex items-center gap-3">
            <AlertTriangle size={20} className="shrink-0 text-primary" />
            <h2 className="font-display text-2xl text-dark-foreground md:text-3xl">
              Important Notice
            </h2>
          </div>
          <div className="mt-4 space-y-3.5">
            {importantNotice.map((para) => (
              <p
                key={para.slice(0, 40)}
                className="font-body text-sm leading-relaxed text-dark-foreground/75 md:text-[15px]"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- mobile jump-to */}
      <div className="section-container mt-8 lg:hidden">
        <button
          type="button"
          onClick={() => setTocOpen((o) => !o)}
          aria-expanded={tocOpen}
          className="flex w-full items-center justify-between rounded-lg border border-dark-foreground/10 bg-dark-foreground/[0.03] px-4 py-3.5 text-left transition-colors hover:border-primary/40"
        >
          <span className="flex items-center gap-2.5">
            <ListOrdered size={16} className="text-primary" />
            <span className="label-text text-dark-foreground">Jump to section</span>
          </span>
          <ChevronDown
            size={18}
            className={`text-dark-muted transition-transform duration-300 ${tocOpen ? "rotate-180" : ""}`}
          />
        </button>

        {tocOpen && (
          <nav className="mt-2 max-h-80 overflow-y-auto rounded-lg border border-dark-foreground/10 bg-dark-card p-2">
            {tocItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => jumpTo(item.id)}
                className="block w-full rounded-md px-3 py-2.5 text-left transition-colors hover:bg-dark-foreground/5"
              >
                <span className="label-text text-primary/70">{item.label}</span>
                <span className="font-body ml-2 text-sm text-dark-muted">{item.title}</span>
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* -------------------------------------------------------- main body */}
      <div className="section-container grid gap-10 py-10 md:py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
        {/* desktop sticky TOC */}
        <aside className="hidden lg:block">
          <nav className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pr-2">
            <p className="label-text mb-4 text-dark-muted">Contents</p>
            <ul className="space-y-1">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => jumpTo(item.id)}
                    className={`block w-full border-l-2 py-1.5 pl-3 text-left font-body text-[13px] leading-snug transition-colors ${
                      activeId === item.id
                        ? "border-primary text-dark-foreground"
                        : "border-dark-foreground/10 text-dark-muted hover:border-primary/50 hover:text-dark-foreground/80"
                    }`}
                  >
                    <span className="block text-[10px] uppercase tracking-[0.1em] text-primary/70">
                      {item.label}
                    </span>
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* clauses */}
        <div className="min-w-0 space-y-14 md:space-y-16">
          {parts.map((part) => (
            <section key={part.id} id={part.id} className="scroll-mt-28">
              <div className="mb-7 border-b border-dark-foreground/10 pb-5">
                <p className="label-text text-primary">{part.label}</p>
                <h2 className="font-display mt-2 text-3xl leading-none text-dark-foreground md:text-4xl">
                  {part.title}
                </h2>
              </div>

              <div className="space-y-10">
                {part.sections.map((section) => (
                  <article key={section.id} id={section.id} className="scroll-mt-28">
                    {/* Parts with a single unnamed section (S, U) already carry the title above. */}
                    {section.title !== part.title && (
                      <h3 className="font-display mb-4 text-xl text-dark-foreground md:text-2xl">
                        {section.num && (
                          <span className="mr-2 text-primary">{section.num}.</span>
                        )}
                        {section.title}
                      </h3>
                    )}
                    <SectionBody section={section} />
                  </article>
                ))}
              </div>
            </section>
          ))}

          {/* ------------------------------------------------- commitment */}
          <section className="rounded-xl border border-primary/25 bg-gradient-to-b from-primary/[0.08] to-transparent p-6 md:p-10">
            <h2 className="font-display text-3xl text-dark-foreground md:text-4xl">
              {commitment.heading}
            </h2>
            <p className="font-body mt-4 text-sm text-dark-muted md:text-[15px]">
              {commitment.intro}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {commitment.pillars.map((p) => (
                <span
                  key={p}
                  className="label-text rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-dark-foreground"
                >
                  {p}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-3.5">
              {commitment.body.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="font-body text-sm leading-relaxed text-dark-foreground/75 md:text-[15px]"
                >
                  {para}
                </p>
              ))}
            </div>

            <p className="font-display mt-8 text-2xl text-primary md:text-3xl">
              {commitment.slogan}
            </p>
            <p className="font-body mt-2 text-xs text-dark-muted md:text-sm">
              {commitment.hashtags}
            </p>
          </section>

          <p className="font-body text-xs leading-relaxed text-dark-muted">
            Questions about this Agreement? Write to us at{" "}
            <a
              href="mailto:hello@powerfitindia.com"
              className="text-primary transition-colors hover:text-dark-foreground"
            >
              hello@powerfitindia.com
            </a>{" "}
            or speak to your PowerFit branch manager.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------ back to top */}
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-dark-card/90 text-primary backdrop-blur transition-colors hover:bg-primary hover:text-white md:bottom-8 md:right-8"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default MemberConsentPolicyPage;
