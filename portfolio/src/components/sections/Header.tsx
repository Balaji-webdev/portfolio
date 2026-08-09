import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Menu, X, Sparkles } from "lucide-react";
import logo from "../../assets/balaji-b-logo.svg";
import { Magnetic } from "../ui/Magnetic";
import { soundFx } from "../../lib/sound";

interface HeaderProps {
  onOpenCommandPalette: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCommandPalette }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "#home", id: "home", label: "Home" },
    { href: "#about", id: "about", label: "About" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#sandbox", id: "sandbox", label: "Sandbox" },
    { href: "#timeline", id: "timeline", label: "Timeline" },
    { href: "#contact", id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    });

    const sections = ["home", "about", "projects", "sandbox", "timeline", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    soundFx.playClick();
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-4 sm:px-8 ${
        scrolled ? "bg-primary/80 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between min-h-[48px]">
        {/* Brand Logo */}
        <a href="#home" onClick={() => handleNavClick("home")} className="flex items-center gap-3 group">
          <Magnetic strength={0.3}>
            <div className="relative p-0.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 shadow-md">
              <img
                src={logo}
                alt="Balaji S Logo"
                className="w-9 h-9 rounded-full bg-black object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          </Magnetic>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-widest text-white font-heading">
              BALAJI<span className="text-violet-400">.</span>S
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider">
              PORTFOLIO 
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-2.5 p-2.5 rounded-full border border-white/[0.08] bg-surface/70 backdrop-blur-xl shadow-xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative px-6 py-2.5 text-xs font-semibold rounded-full transition-colors duration-300 select-none ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-violet-600/30 border border-violet-500/40 rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Cmd+K Button) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenCommandPalette();
            }}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white hover:border-violet-500/30 transition-all cursor-pointer shadow-sm"
            aria-label="Open Command Palette"
          >
            <Command className="w-3.5 h-3.5 text-violet-400" />
            <span className="font-mono text-[11px] text-slate-400">Cmd K</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-xl border border-white/10 bg-surface/80 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-3 rounded-2xl border border-white/10 bg-surface-elevated/95 backdrop-blur-2xl p-4 shadow-2xl space-y-2"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <Sparkles className="w-4 h-4 text-cyan-400" />}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-600/30"
            >
              <Command className="w-4 h-4" /> Open Command Palette (Cmd + K)
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
