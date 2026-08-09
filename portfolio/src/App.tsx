import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLenis } from "./hooks/useLenis";
import { useCommandPalette } from "./hooks/useCommandPalette";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { SoundToggle } from "./components/ui/SoundToggle";
import { CommandPalette } from "./components/ui/CommandPalette";
import { CustomCursor } from "./components/ui/CustomCursor";

// Lazy-load below-the-fold heavy sections for optimal performance (<120KB initial JS gzipped budget)
const TechStack = lazy(() =>
  import("./components/sections/TechStack").then((m) => ({ default: m.TechStack }))
);
const WorkShowcase = lazy(() =>
  import("./components/sections/WorkShowcase").then((m) => ({ default: m.WorkShowcase }))
);
// const CodeSandbox = lazy(() =>
//   import("./components/sections/CodeSandbox").then((m) => ({ default: m.CodeSandbox }))
// );
const Timeline = lazy(() =>
  import("./components/sections/Timeline").then((m) => ({ default: m.Timeline }))
);
const Contact = lazy(() =>
  import("./components/sections/Contact").then((m) => ({ default: m.Contact }))
);
const Footer = lazy(() =>
  import("./components/sections/Footer").then((m) => ({ default: m.Footer }))
);

function SectionFallback() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto space-y-6">
      <div className="h-8 w-48 bg-white/5 rounded-full animate-pulse mx-auto border border-white/10" />
      <div className="h-12 w-96 max-w-full bg-white/5 rounded-2xl animate-pulse mx-auto border border-white/10" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-64 rounded-3xl bg-surface/50 border border-white/10 animate-pulse backdrop-blur-xl"
          />
        ))}
      </div>
    </div>
  );
}

function PortfolioMain() {
  useLenis(); // Initialize Lenis smooth scroll
  const { isOpen, open, close } = useCommandPalette();

  return (
    <div className="min-h-screen bg-primary text-slate-100 selection:bg-violet-600/40 selection:text-white relative">
      {/* Custom Awwwards Spring Cursor */}
      <CustomCursor />

      {/* Header Navigation */}
      <Header onOpenCommandPalette={open} />

      {/* Hero Section (Loaded immediately for fast FCP & LCP) */}
      <main>
        <Hero />

        {/* Below-the-fold Sections Lazy Loaded */}
        <Suspense fallback={<SectionFallback />}>
          <TechStack />
          <WorkShowcase />
          {/* <CodeSandbox /> */}
          <Timeline />
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>

      {/* Audio Sound Toggle */}
      <SoundToggle />

      {/* Global Command Palette (Cmd + K) */}
      <CommandPalette isOpen={isOpen} onClose={close} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PortfolioMain />} />
      </Routes>
    </Router>
  );
}
