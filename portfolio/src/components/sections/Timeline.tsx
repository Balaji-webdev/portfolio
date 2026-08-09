import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Award } from "lucide-react";
import { TIMELINE_DATA } from "../../lib/constants";
import { SpotlightCard } from "../ui/SpotlightCard";
import { Badge } from "../ui/Badge";

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="relative py-[var(--spacing-section)] px-4 sm:px-8 bg-primary overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="cyan" icon={<Briefcase className="w-3.5 h-3.5" />}>
            CAREER &amp; ACADEMICS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Experience &amp; <span className="text-gradient-accent">Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional trajectory, key deployments, and educational background.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-gradient-to-b from-violet-500 via-indigo-500 to-cyan-500 border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {TIMELINE_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Icon Node */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1 p-2 rounded-full border border-violet-500/50 bg-surface text-violet-400 group-hover:bg-violet-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg shadow-violet-950/50">
                {index === 0 ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
              </div>

              {/* Content Card */}
              <SpotlightCard className="p-[var(--spacing-card)] space-y-6 border-white/10 hover:border-violet-500/40">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">{item.title}</h3>
                    <p className="text-sm font-medium text-violet-400 mt-0.5">{item.company}</p>
                  </div>
                  <Badge variant="outline" icon={<Calendar className="w-3 h-3 text-cyan-400" />}>
                    {item.period}
                  </Badge>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                    Key Deliverables
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills/Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.05] text-slate-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
