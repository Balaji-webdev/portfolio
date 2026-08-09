import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
  Mail,
  ExternalLink,
  Sparkles,
  X,
  Check,
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS_DATA } from "../../lib/constants";
import { soundFx } from "../../lib/sound";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", category: "Navigation" },
    { label: "About & Core Skills", href: "#about", category: "Navigation" },
    {
      label: "Selected Projects Showcase",
      href: "#projects",
      category: "Navigation",
    },
    {
      label: "Interactive Code Terminal",
      href: "#sandbox",
      category: "Navigation",
    },
    {
      label: "Career & Education Timeline",
      href: "#timeline",
      category: "Navigation",
    },
    {
      label: "Contact & Get In Touch",
      href: "#contact",
      category: "Navigation",
    },
  ];

  const handleCopyEmail = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredNav = navItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()),
  );

  const filteredProjects = PROJECTS_DATA.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.skills.some((s) => s.toLowerCase().includes(query.toLowerCase())),
  );

  const handleSelect = (href: string) => {
    soundFx.playClick();
    onClose();
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f17]/95 shadow-2xl shadow-violet-950/50 backdrop-blur-2xl z-10"
          >
            {/* Search Input Header */}
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <Search className="w-5 h-5 text-violet-400 shrink-0" />
              <input
                type="text"
                placeholder="Type a section name, project, or skill..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Action Pills */}
            <div className="flex items-center gap-2 border-b border-white/5 px-5 py-2.5 bg-white/[0.02] overflow-x-auto no-scrollbar">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/30 hover:bg-violet-500/20 transition-all shrink-0"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Mail className="w-3.5 h-3.5" />
                )}
                {copied ? "Copied Email!" : "Copy Email"}
              </button>
              <a
                href={PERSONAL_INFO.resumePdf}
                download
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all shrink-0"
              >
                <FileText className="w-3.5 h-3.5" /> Download CV
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all shrink-0"
              >
                <FaGithub className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all shrink-0"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-3 space-y-4 no-scrollbar">
              {/* Navigation Items */}
              {filteredNav.length > 0 && (
                <div>
                  <div className="px-3 py-1 text-[11px] font-semibold text-slate-500 tracking-wider uppercase">
                    Navigation
                  </div>
                  <div className="space-y-1 mt-1">
                    {filteredNav.map((nav) => (
                      <button
                        key={nav.href}
                        onClick={() => handleSelect(nav.href)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-left text-sm text-slate-200 hover:text-white transition-colors group"
                      >
                        <span className="flex items-center gap-2.5">
                          <Sparkles className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
                          {nav.label}
                        </span>
                        <span className="text-xs text-slate-500 group-hover:text-slate-300">
                          Jump →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {filteredProjects.length > 0 && (
                <div>
                  <div className="px-3 py-1 text-[11px] font-semibold text-slate-500 tracking-wider uppercase">
                    Projects & Apps
                  </div>
                  <div className="space-y-1 mt-1">
                    {filteredProjects.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleSelect(p.liveLink || p.githubLink)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-left text-sm text-slate-200 hover:text-white transition-colors group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-7 h-7 rounded-lg object-cover border border-white/10"
                          />
                          <div className="truncate">
                            <div className="font-medium text-slate-200 group-hover:text-violet-300 truncate">
                              {p.title}
                            </div>
                            <div className="text-xs text-slate-500 truncate">
                              {p.skills.join(" • ")}
                            </div>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredNav.length === 0 && filteredProjects.length === 0 && (
                <div className="py-12 text-center text-sm text-slate-500">
                  No matching results found for "{query}".
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-2.5 text-[11px] text-slate-500 bg-white/[0.01]">
              <span>
                Pro Tip: Press{" "}
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                  Esc
                </kbd>{" "}
                to exit
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                  Cmd
                </kbd>{" "}
                +{" "}
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                  K
                </kbd>
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
