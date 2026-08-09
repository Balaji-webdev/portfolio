import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles, Code2, Zap, Award, Layers } from "lucide-react";
import { PERSONAL_INFO } from "../../lib/constants";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import photo from "@/assets/0Z3A8786.JPG";

const Hero3D = React.lazy(() => import("../ui/Hero3D"));

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [quickPitchOpen, setQuickPitchOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = width < 768 ? 25 : 55;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connectors between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Particle dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p1.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw radial glow near cursor
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 350);
      gradient.addColorStop(0, "rgba(124, 58, 237, 0.08)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-[calc(var(--spacing-section)*1.25)] pb-[var(--spacing-section)] overflow-visible">
      <React.Suspense fallback={null}>
        <Hero3D />
      </React.Suspense>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-70" />

      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10  max-w-7xl mx-auto px-9 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div
          className="lg:col-span-7 space-y-8 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex flex-wrap  items-center gap-10">
            <Badge variant="pulse" className="py-3.5 px-4 text-xs font-semibold">
              ⚡ {PERSONAL_INFO.availability}
            </Badge>
            <Badge variant="violet" icon={<Code2 className="w-3.5 h-3.5" />}>
              React • Angular • Flutter
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-sm font-bold tracking-widest text-cyan-400 uppercase font-mono">
              {PERSONAL_INFO.title}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-[1.08] text-white">
              Hello, I'm <br />
              <span className="text-gradient-accent">{PERSONAL_INFO.name}</span>
            </h1>
          </motion.div>

          {/* Tagline / Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-lg text-slate-300 font-normal max-w-2xl leading-relaxed"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-4 h-4 text-cyan-300" />}
            >
              Explore Projects
            </Button>

            <Button
              href={PERSONAL_INFO.resumePdf}
              download
              variant="secondary"
              size="lg"
              icon={<Download className="w-4 h-4" />}
            >
              Download CV
            </Button>

            <Button
              onClick={() => setQuickPitchOpen(true)}
              variant="outline"
              size="lg"
              icon={<Zap className="w-4 h-4 text-violet-400" />}
            >
              Quick Pitch
            </Button>
          </motion.div>

          {/* Quick Metrics Pills */}
          <motion.div
            variants={itemVariants}
            className="pt-6 grid grid-cols-3 gap-1 border-t border-white/10 max-w-lg"
          >
          <div className="min-w-[120px]">
  <div className="text-2xl font-bold">
    7+
  </div>

  <div className="mt-1 text-sm text-slate-400">
    Projects Deployed
  </div>
</div>
            <div className="min-w-[120px]">
              <div className="text-2xl font-bold font-heading text-cyan-400">Play Console</div>
              <div className="text-xs text-slate-400 font-medium">Published Android App</div>
            </div>
            <div className="min-w-[120px]">
              <div className="text-2xl font-bold font-heading text-violet-400">Redux + REST</div>
              <div className="text-xs text-slate-400 font-medium">State & RBAC Control</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image & Floating UI Mockup */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <div
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y * 0.035}deg) rotateY(${x * 0.035}deg) scale3d(1.02, 1.02, 1.02)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            }}
            className="relative group w-full max-w-sm sm:max-w-md transition-transform duration-500 ease-out"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-85 transition duration-700" />

            {/* Profile Card Container */}
            <div className="relative rounded-3xl border border-white/15 bg-surface/90 backdrop-blur-2xl p-4 sm:p-5 overflow-hidden shadow-2xl shadow-violet-950/50">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={photo}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700"
                />

                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Profile Card Bottom Info overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white font-heading">{PERSONAL_INFO.name}</div>
                      <div className="text-xs text-slate-300">B.Sc. Electronics & Communication Science</div>
                    </div>
                    <Badge variant="violet" className="text-[10px] uppercase tracking-wider">
                      2025 Grad
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Floating Tech Skill Badges */}
              <div className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-full bg-violet-600/90 text-white text-xs font-semibold backdrop-blur-md shadow-xl border border-violet-400/40 flex items-center gap-1.5 animate-bounce">
                <Layers className="w-3.5 h-3.5 text-cyan-300" /> React v19
              </div>

              <div className="absolute top-1/2 -left-4 -translate-y-1/2 px-3.5 py-1.5 rounded-full bg-surface-elevated/95 text-slate-200 text-xs font-normal backdrop-blur-md shadow-2xl border border-white/20 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-400" /> Flutter & Dart
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Pitch Modal */}
      {quickPitchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setQuickPitchOpen(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 w-full max-w-lg rounded-2xl border border-white/15 bg-surface-elevated p-6 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                <Zap className="w-5 h-5 text-violet-400" /> Quick Pitch summary
              </h3>
              <button
                onClick={() => setQuickPitchOpen(false)}
                className="text-slate-400 hover:text-white text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="text-sm text-slate-300 space-y-3 leading-relaxed">
              <p>
                Hi! I'm <strong className="text-white">Balaji S</strong>, a Frontend & Mobile Developer based in Chennai, India.
              </p>
              <p>
                I specialize in building production-ready applications with <span className="text-violet-300">React.js, Angular, Flutter, and TypeScript</span>. My architecture emphasizes clean component modularity, Redux state management with optimistic rollbacks, and role-based access control (RBAC).
              </p>
              <p>
                Whether building responsive browser platforms or deploying Android apps directly to the Google Play Console, I deliver fast, pixel-perfect user experiences.
              </p>
            </div>
            <div className="pt-2 flex justify-end gap-3">
              <Button href="#contact" onClick={() => setQuickPitchOpen(false)} variant="primary" size="sm">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Bottom Scroll Indicator Arrow */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full border border-white/10 bg-surface/50 text-slate-400 hover:text-white hover:border-violet-500/40 transition-all duration-300 animate-pulse"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
};
