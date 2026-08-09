import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, CheckCircle2, X, Eye, Layers, Filter } from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";
import { PROJECTS_DATA, Project } from "../../lib/constants";
import { SpotlightCard } from "../ui/SpotlightCard";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { soundFx } from "../../lib/sound";

export const WorkShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "Web App", "Mobile App", "E-Commerce", "Tool"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const handleOpenModal = (project: Project) => {
    soundFx.playClick();
    setActiveModalProject(project);
  };

  const handleCloseModal = () => {
    soundFx.playClick();
    setActiveModalProject(null);
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-8 bg-primary overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <Badge variant="violet" icon={<Sparkles className="w-3.5 h-3.5 text-cyan-300" />}>
              SELECTED WORK &amp; CASE STUDIES
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Featured <span className="text-gradient-accent">Projects</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Production-ready front-end web platforms and mobile applications built with clean architecture, state management, and real-world deployments.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto p-1.5 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-xl no-scrollbar">
            <Filter className="w-3.5 h-3.5 text-slate-400 ml-2" />
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-colors cursor-pointer whitespace-nowrap select-none ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryFilter"
                      className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl shadow-md shadow-violet-600/30 -z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid Project Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const isLargeCard = project.featured && index === 0;
            const spanClass = isLargeCard
              ? "lg:col-span-8 md:col-span-2"
              : project.featured
              ? "lg:col-span-4"
              : "lg:col-span-4";

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={spanClass}
              >
                <SpotlightCard className="h-full flex flex-col justify-between group p-6 space-y-6 border-white/10 hover:border-violet-500/40">
                  <div className="space-y-4">
                    {/* Thumbnail Image Container */}
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Top Overlay Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <Badge variant="cyan" className="backdrop-blur-md bg-black/60">
                          {project.category}
                        </Badge>
                        {project.metrics && (
                          <Badge variant="pulse" className="backdrop-blur-md bg-black/60 text-[10px]">
                            {project.metrics}
                          </Badge>
                        )}
                      </div>

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs">
                        <Button
                          onClick={() => handleOpenModal(project)}
                          variant="secondary"
                          size="sm"
                          icon={<Eye className="w-4 h-4" />}
                        >
                          View Breakdown
                        </Button>
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-md bg-white/[0.05] text-violet-300 border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features Bullet List */}
                    <div className="space-y-1.5 text-xs text-slate-400">
                      {project.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="text-xs font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1 cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5" /> Details &amp; Architecture
                    </button>

                    <div className="flex items-center gap-2">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundFx.playClick()}
                          className="p-2 rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600 hover:text-white transition-all shadow-sm"
                          aria-label={`Live demo for ${project.title}`}
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFx.playClick()}
                        className="p-2 rounded-xl bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all"
                        aria-label={`GitHub repo for ${project.title}`}
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
             className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#0d0f17]/95 p-6 sm:p-8 shadow-2xl shadow-violet-950/60 backdrop-blur-2xl z-10 space-y-6 my-8"
            >
              {/* Close Button */}
             <button
  onClick={handleCloseModal}
  className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all"
  aria-label="Close modal"
>
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner Image */}
              <div className="relative aspect-[16/8] rounded-2xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <Badge variant="violet">{activeModalProject.category}</Badge>
                  {activeModalProject.metrics && (
                    <Badge variant="pulse">{activeModalProject.metrics}</Badge>
                  )}
                </div>
              </div>

              {/* Title & Category */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Architectural Highlight */}
              {activeModalProject.architecturalHighlight && (
                <div className="p-4 rounded-xl bg-violet-950/40 border border-violet-500/30 text-xs sm:text-sm text-violet-200 font-mono space-y-1">
                  <div className="font-bold uppercase tracking-wider text-[11px] text-violet-400">
                    System Architecture Highlight
                  </div>
                  <div>{activeModalProject.architecturalHighlight}</div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Technologies Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-white/[0.06] text-cyan-300 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Full Feature Checklist */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Key Engineering Features
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {activeModalProject.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                {activeModalProject.liveLink && (
                  <Button
                    href={activeModalProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    Open Live App
                  </Button>
                )}
                <Button
                  href={activeModalProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="md"
                  icon={<GithubIcon className="w-4 h-4" />}
                >
                  View Source Code
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
