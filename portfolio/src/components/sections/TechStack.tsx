import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  MapPin,
  Mail,
  GraduationCap,
  Award,
} from "lucide-react";

import { PERSONAL_INFO, SKILLS_DATA } from "../../lib/constants";
import { SpotlightCard } from "../ui/SpotlightCard";
import { Badge } from "../ui/Badge";
import { soundFx } from "../../lib/sound";
import photo from "../../assets/photo.jpg";

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-primary
        px-4
        py-[var(--spacing-section)]
        sm:px-6
        lg:px-8
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/[0.06]
          blur-[140px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1650px]
          flex-col
          items-center
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mb-14
            flex
            w-full
            max-w-3xl
            flex-col
            items-center
            text-center
          "
        >
          <Badge
            variant="cyan"
            icon={<Cpu className="h-3.5 w-3.5 shrink-0" />}
            className="tracking-[0.14em]"
          >
            Engineering Competencies
          </Badge>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-[1.12]
              tracking-[-0.02em]
              text-white
              sm:text-4xl
              lg:text-[2.75rem]
            "
          >
            About Me &{" "}
            <span className="text-gradient-accent">
              Tech Stack
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              font-normal
              leading-[1.7]
              tracking-[-0.003em]
              text-slate-400
              sm:text-base
            "
          >
            Delivering scalable, component-driven UIs with
            production-grade React.js, Angular, Flutter, and
            TypeScript.
          </p>
        </motion.div>

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1250px]
            grid-cols-1
            items-stretch
            justify-items-center
            gap-6
            lg:grid-cols-2
            lg:gap-8
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              flex
              w-full
              min-w-0
              justify-center
            "
          >
            <SpotlightCard
              className="
                !m-0
                !w-full
                !max-w-[620px]
                min-w-0
                overflow-hidden
                p-6
                sm:p-8
              "
            >
              <div className="flex min-w-0 flex-col gap-7">
                <div
                  className="
                    flex
                    min-w-0
                    flex-col
                    gap-3
                    border-b
                    border-white/10
                    pb-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div className="min-w-0">
                    <h3
                      className="
                        text-xl
                        font-semibold
                        leading-tight
                        tracking-[-0.01em]
                        text-white
                        sm:text-2xl
                      "
                    >
                      Frontend & Mobile Engineer
                    </h3>

                    <p
                      className="
                        mt-1.5
                        font-mono
                        text-[13px]
                        font-medium
                        leading-5
                        tracking-tight
                        text-violet-400
                      "
                    >
                      Based in {PERSONAL_INFO.location}
                    </p>
                  </div>

                  <Badge
                    variant="pulse"
                    className="
                      w-fit
                      shrink-0
                      self-start
                      tracking-[0.06em]
                      sm:self-auto
                    "
                  >
                    Immediate Joiner
                  </Badge>
                </div>

                <div
                  className="
                    min-w-0
                    space-y-[var(--spacing-bio-p)]
                    text-[15px]
                    font-normal
                    leading-loose
                    tracking-[-0.003em]
                    text-slate-300
                  "
                >
                  <p>
                    I'm{" "}
                    <strong className="font-semibold text-white">
                      {PERSONAL_INFO.name}
                    </strong>
                    , a developer focused on crafting high-speed,
                    intuitive digital interfaces across web
                    browsers and mobile platforms.
                  </p>

                  <p>
                    I hold a{" "}
                    <strong className="font-semibold text-white">
                      {PERSONAL_INFO.education.degree}
                    </strong>{" "}
                    from{" "}
                    <span className="text-violet-300">
                      {PERSONAL_INFO.education.institution}
                    </span>{" "}
                    ({PERSONAL_INFO.education.year}).
                  </p>

                  <p>
                    My experience spans building full-fledged
                    library management platforms with RBAC
                    control and optimistic Redux rollbacks,
                    e-commerce applications, and publishing
                    cross-platform Flutter applications directly
                    to the{" "}
                    <strong className="font-semibold text-cyan-400">
                      Google Play Console
                    </strong>
                    .
                  </p>
                </div>

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-x-6
                    gap-y-4
                    border-t
                    border-white/10
                    pt-5
                    text-[13px]
                    sm:grid-cols-2
                  "
                >
                  <div
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-2.5
                      font-medium
                      leading-5
                      tracking-[-0.005em]
                      text-slate-300
                    "
                  >
                    <GraduationCap
                      className="
                        mt-0.5
                        h-4
                        w-4
                        shrink-0
                        text-cyan-400
                      "
                    />

                    <span className="min-w-0">
                      B.Sc. ECS (University of Madras, 2025)
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-2.5
                      font-medium
                      leading-5
                      tracking-[-0.005em]
                      text-slate-300
                    "
                  >
                    <MapPin
                      className="
                        mt-0.5
                        h-4
                        w-4
                        shrink-0
                        text-violet-400
                      "
                    />

                    <span className="min-w-0">
                      Chennai, India (Relocation Open)
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-2.5
                      font-medium
                      leading-5
                      tracking-[-0.005em]
                      text-slate-300
                    "
                  >
                    <Mail
                      className="
                        mt-0.5
                        h-4
                        w-4
                        shrink-0
                        text-emerald-400
                      "
                    />

                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="
                        min-w-0
                        truncate
                        text-slate-200
                        transition-colors
                        hover:text-white
                        hover:underline
                      "
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>

                  <div
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-2.5
                      font-medium
                      leading-5
                      tracking-[-0.005em]
                      text-slate-300
                    "
                  >
                    <Award
                      className="
                        mt-0.5
                        h-4
                        w-4
                        shrink-0
                        text-amber-400
                      "
                    />

                    <span className="min-w-0">
                      Play Console Deployment Ready
                    </span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              flex
              w-full
              min-w-0
              justify-center
            "
          >
            <SpotlightCard
              className="
                !m-0
                !w-full
                !max-w-[560px]
                min-w-0
                overflow-hidden
                p-4
                sm:p-5
              "
            >
              <div
                className="
                  relative
                  aspect-[4/3]
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                "
              >
                <img
                  src={photo}
                  alt={PERSONAL_INFO.name}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/10
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    right-3
                    flex
                    min-w-0
                    items-center
                    justify-between
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-black/65
                    px-3
                    py-2.5
                    backdrop-blur-md
                  "
                >
                  <span
                    className="
                      shrink-0
                      text-sm
                      font-semibold
                      leading-none
                      tracking-[-0.01em]
                      text-white
                    "
                  >
                    Balaji S
                  </span>

                  <span
                    className="
                      min-w-0
                      truncate
                      text-right
                      font-mono
                      text-[11px]
                      font-semibold
                      leading-none
                      tracking-tight
                      text-violet-300
                    "
                  >
                    React • Angular • Flutter
                  </span>
                </div>
              </div>

              <div className="mt-5 min-w-0">
                <div
                  className="
                    mb-3
                    font-mono
                    text-[11px]
                    font-semibold
                    uppercase
                    leading-none
                    tracking-[0.14em]
                    text-slate-400
                  "
                >
                  Primary Expertise
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {[
                    "React.js",
                    "TypeScript",
                    "Angular",
                    "Flutter",
                    "Redux Toolkit",
                    "REST APIs",
                    "Vite",
                    "Tailwind",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="
                        shrink-0
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.05]
                        px-2.5
                        py-1.5
                        text-[11px]
                        font-medium
                        leading-none
                        tracking-[-0.005em]
                        text-slate-200
                        transition-all
                        duration-200
                        hover:border-violet-500/40
                        hover:bg-violet-500/10
                        hover:text-white
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        <div
          className="
            mt-14
            w-full
            max-w-[1250px]
            sm:mt-16
          "
        >
          <div
            className="
              mx-auto
              flex
              w-full
              items-center
              justify-center
              gap-1.5
              overflow-x-auto
              rounded-2xl
              border
              border-white/10
              bg-surface/80
              p-1.5
              backdrop-blur-xl
              no-scrollbar
            "
          >
            {SKILLS_DATA.map((cat, idx) => {
              const isActive = activeTab === idx;

              return (
                <button
                  key={cat.category}
                  type="button"
                  onClick={() => {
                    soundFx.playClick();
                    setActiveTab(idx);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`
                    relative
                    shrink-0
                    whitespace-nowrap
                    rounded-xl
                    px-4
                    py-2.5
                    text-[13px]
                    font-semibold
                    leading-none
                    tracking-[-0.005em]
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }
                  `}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSkillTab"
                      className="
                        absolute
                        inset-0
                        rounded-xl
                        bg-gradient-to-r
                        from-violet-600
                        to-indigo-600
                        shadow-lg
                        shadow-violet-600/25
                      "
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {cat.category}
                  </span>
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
              mx-auto
              mt-5
              grid
              w-full
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {SKILLS_DATA[activeTab].skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{
                  y: -3,
                  scale: 1.01,
                }}
                className="w-full min-w-0"
              >
                <SpotlightCard
                  className="
                    !w-full
                    !max-w-full
                    min-w-0
                    overflow-hidden
                    p-4
                    sm:p-5
                  "
                >
                  <div className="flex min-w-0 items-center justify-between gap-4">
                    <span
                      className="
                        min-w-0
                        truncate
                        text-sm
                        font-semibold
                        leading-none
                        tracking-[-0.005em]
                        text-white
                      "
                    >
                      {skill.name}
                    </span>

                    <span
                      className="
                        shrink-0
                        font-mono
                        text-xs
                        font-semibold
                        leading-none
                        tracking-tight
                        text-cyan-400
                      "
                    >
                      {skill.level}%
                    </span>
                  </div>

                  <div
                    className="
                      mt-3
                      h-2
                      w-full
                      overflow-hidden
                      rounded-full
                      bg-white/10
                    "
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${skill.level}%`,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-violet-500
                        via-indigo-500
                        to-cyan-400
                      "
                    />
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};