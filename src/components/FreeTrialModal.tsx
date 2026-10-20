import { useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { submitWebsiteEnquiry, whatsAppTrialUrl } from "@/lib/websiteEnquiry";

type Notice = { tone: "ok" | "error"; text: string; name: string; mobile: string; already?: boolean };

const firstName = (name: string) => name.trim().split(/\s+/)[0] || "there";

export default function FreeTrialModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);

  const reset = () => {
    setName("");
    setMobile("");
    setEmail("");
    setNotice(null);
    setSubmitting(false);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) reset();
    onOpenChange(next);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) return;
    setSubmitting(true);
    const result = await submitWebsiteEnquiry({
      name,
      mobile,
      email,
      topic: "Free trial",
      message: "Free trial request from the website.",
    });
    setSubmitting(false);
    if (!result.ok) {
      setNotice({ tone: "error", text: result.message, name, mobile });
      return;
    }
    setNotice({
      tone: "ok",
      name,
      mobile,
      already: result.already,
      text: "",
    });
  };

  const whatsAppHref = whatsAppTrialUrl(notice?.name || name, notice?.mobile || mobile);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="max-w-md w-[92vw] border border-primary/40 bg-dark p-0 text-dark-foreground gap-0"
      >
        <div className="p-6 md:p-8">
          {notice?.tone === "ok" ? null : (
            <>
              <DialogTitle className="font-display text-3xl text-dark-foreground">
                Start Your <span className="text-primary">Free Trial</span>
              </DialogTitle>
              <p className="mt-2 font-body text-sm text-dark-muted">
                Tell us how to reach you. After that you can continue the chat on WhatsApp.
              </p>
            </>
          )}

          {notice?.tone === "ok" ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-6 text-center"
            >
              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="absolute inset-0 rounded-full bg-primary/20"
                />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 16, delay: 0.05 }}
                  className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40"
                >
                  <Check className="h-7 w-7" strokeWidth={3} />
                </motion.span>
              </div>
              <p className="label-text text-primary tracking-[0.28em]">
                {notice.already ? "Already with us" : "You're in"}
              </p>
              <DialogTitle className="mt-2 font-display text-4xl leading-none text-dark-foreground">
                {notice.already ? "We've got you" : `Nice work, ${firstName(notice.name)}`}
              </DialogTitle>
              <p className="mx-auto mt-3 max-w-xs font-body text-sm leading-relaxed text-dark-muted">
                {notice.already
                  ? "Your free-trial enquiry is already with the team. Continue on WhatsApp if you want to pick a slot now."
                  : "Your free trial request is in. A coach will call you shortly — or lock a time on WhatsApp right now."}
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-[11px] font-body text-dark-foreground/80">
                {["No payment", "Coach call", "Any studio"].map((item) => (
                  <div key={item} className="rounded-xl border border-dark-foreground/10 bg-white/5 px-2 py-2">
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-bold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Continue on WhatsApp
              </a>
              <button
                type="button"
                onClick={() => handleOpenChange(false)}
                className="mt-3 w-full font-body text-sm text-dark-muted underline underline-offset-4"
              >
                I'll wait for the call
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <input
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-dark-foreground/10 bg-[#111111] px-4 py-3 font-body text-sm text-dark-foreground placeholder:text-dark-muted focus:border-primary focus:outline-none"
              />
              <input
                required
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full rounded-xl border border-dark-foreground/10 bg-[#111111] px-4 py-3 font-body text-sm text-dark-foreground placeholder:text-dark-muted focus:border-primary focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-dark-foreground/10 bg-[#111111] px-4 py-3 font-body text-sm text-dark-foreground placeholder:text-dark-muted focus:border-primary focus:outline-none"
              />
              {notice?.tone === "error" ? (
                <p className="font-body text-sm text-red-400">{notice.text}</p>
              ) : null}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-primary py-3.5 text-sm font-bold text-primary-foreground disabled:opacity-70"
              >
                {submitting ? "Sending…" : "Request free trial"}
              </button>
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-body text-sm text-dark-muted underline underline-offset-4"
              >
                Or message us on WhatsApp
              </a>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
