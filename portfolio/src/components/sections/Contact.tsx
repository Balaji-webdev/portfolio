import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Send, Check, Clock, Globe, Sparkles, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../ui/SocialIcons";
import { PERSONAL_INFO } from "../../lib/constants";
import { SpotlightCard } from "../ui/SpotlightCard";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { soundFx } from "../../lib/sound";

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST Format (Chennai India)
      setLocalTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    soundFx.playClick();
    setStatus("loading");

    const PUBLIC_KEY = "m-9uSt5xS3KSaFRXs";
    const SERVICE_ID = "service_pw2kunf";
    const TEMPLATE_ID = "template_16k41aj";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        soundFx.playSuccess();
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      }
    );
  };

  return (
    <section id="contact" className="relative py-[var(--spacing-section)] px-4 sm:px-8 bg-primary overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-violet-600/15 to-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="pulse" icon={<MessageSquare className="w-3.5 h-3.5" />}>
            GET IN TOUCH
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Let's Build Something <span className="text-gradient-accent">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Got a project idea, job opportunity, or technical inquiry? Send a message below and I'll respond within 24 hours.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
                  <Send className="w-5 h-5 text-violet-400" /> Send a Message
                </h3>
                <Badge variant="cyan" className="text-[11px]">Direct Inbox</Badge>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl animate-bounce">
                      ✓
                    </div>
                    <h4 className="text-2xl font-bold text-white font-heading">Thank You!</h4>
                    <p className="text-sm text-slate-300 max-w-sm mx-auto">
                      Your message has been sent successfully. I will get back to you shortly!
                    </p>
                    <Button onClick={() => setStatus("idle")} variant="secondary" size="sm">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="from_name" className="text-xs font-mono text-slate-300 font-medium uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        id="from_name"
                        required
                        disabled={status === "loading"}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="from_email" className="text-xs font-mono text-slate-300 font-medium uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        id="from_email"
                        required
                        disabled={status === "loading"}
                        placeholder="xx@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-mono text-slate-300 font-medium uppercase tracking-wider">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={5}
                        disabled={status === "loading"}
                        placeholder="Tell me about your project, role, or inquiry..."
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      variant="primary"
                      size="lg"
                      className="w-full"
                      icon={<Send className="w-4 h-4" />}
                    >
                      {status === "loading" ? "Sending Message..." : "Send Message"}
                    </Button>

                    {status === "error" && (
                      <p className="text-xs text-red-400 font-mono text-center">
                        Failed to send message. Please try again or email directly.
                      </p>
                    )}
                  </form>
                )}
              </AnimatePresence>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: Direct Contact Details & Local Clock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Clock & Location Card */}
            <SpotlightCard className="p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-slate-300 text-xs font-mono">
                  <Globe className="w-4 h-4 text-cyan-400" /> Chennai, India (IST)
                </div>
                <Badge variant="pulse" className="text-[10px]">Online</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase">Developer Local Time</div>
                  <div className="text-2xl font-extrabold font-heading text-white tracking-widest font-mono">
                    {localTime || "12:00 PM IST"}
                  </div>
                </div>
                <Clock className="w-8 h-8 text-violet-400 opacity-60" />
              </div>
            </SpotlightCard>

            {/* Direct Contact Links List */}
            <SpotlightCard className="p-6 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
                Direct Channels
              </h4>

              <div className="space-y-3">
                {/* Email Action */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface-elevated border border-white/10 hover:border-violet-500/40 transition-all">
                  <a
                    href={PERSONAL_INFO.socials.email}
                    className="flex items-center gap-3 text-slate-200 hover:text-white text-xs font-medium truncate"
                  >
                    <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : "Copy"}
                  </button>
                </div>

                {/* Phone */}
                <a
                  href={PERSONAL_INFO.socials.phone}
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-elevated border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white text-xs font-medium transition-all"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-elevated border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white text-xs font-medium transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300 shrink-0" />
                  <span>GitHub Repository Profile</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-elevated border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white text-xs font-medium transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>LinkedIn Professional Profile</span>
                </a>

                {/* Instagram */}
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-elevated border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white text-xs font-medium transition-all"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Instagram Profile</span>
                </a>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
