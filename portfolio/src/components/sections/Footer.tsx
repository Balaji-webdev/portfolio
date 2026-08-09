import React from "react";
import logo from "../../assets/balaji-b-logo.svg";
import { PERSONAL_INFO } from "../../lib/constants";
import { Magnetic } from "../ui/Magnetic";
import { soundFx } from "../../lib/sound";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    soundFx.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-8 border-t border-white/[0.08] bg-[#050609]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Magnetic strength={0.3}>
            <div className="p-0.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 shadow-md">
              <img src={logo} alt={PERSONAL_INFO.name} className="w-8 h-8 rounded-full bg-black object-cover" />
            </div>
          </Magnetic>
          <span className="text-sm font-bold tracking-wider text-slate-200 font-heading">
            Designed &amp; Built by <span className="text-white font-extrabold">{PERSONAL_INFO.name}</span>
          </span>
        </div>

        {/* Footer Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400">
          <button onClick={() => handleNavClick("home")} className="hover:text-white transition-colors cursor-pointer">
            Home
          </button>
          <button onClick={() => handleNavClick("about")} className="hover:text-white transition-colors cursor-pointer">
            About
          </button>
          <button onClick={() => handleNavClick("projects")} className="hover:text-white transition-colors cursor-pointer">
            Projects
          </button>
          {/* <button onClick={() => handleNavClick("sandbox")} className="hover:text-white transition-colors cursor-pointer">
            Sandbox
          </button> */}
          <button onClick={() => handleNavClick("timeline")} className="hover:text-white transition-colors cursor-pointer">
            Timeline
          </button>
          <button onClick={() => handleNavClick("contact")} className="hover:text-white transition-colors cursor-pointer">
            Contact
          </button>
        </nav>

        {/* Copyright & Back To Top */}
        <div className="flex items-center gap-4">
          <div className="text-xs text-slate-500 font-mono">
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <Magnetic strength={0.4}>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-white/10 bg-surface/80 text-slate-400 hover:text-white hover:border-violet-500/40 transition-all cursor-pointer shadow-md"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
};
