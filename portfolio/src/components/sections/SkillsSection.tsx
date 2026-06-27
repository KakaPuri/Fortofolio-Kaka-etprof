"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Figma, Wrench } from "lucide-react";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import SectionTitle from "@/components/ui/SectionTitle";

type OrbitSkill = {
  name: string;
  icon: ReactNode;
};

const orbitSkills: OrbitSkill[] = [
  { name: "Figma", icon: <Figma size={16} /> },
  { name: "Wireframe", icon: <span className="text-sm font-semibold">WF</span> },
  { name: "Prototype", icon: <span className="text-sm font-semibold">PR</span> },
  { name: "Design System", icon: <span className="text-sm font-semibold">DS</span> },
  { name: "Research", icon: <span className="text-sm font-semibold">RS</span> },
  { name: "UI Patterns", icon: <span className="text-sm font-semibold">UP</span> },
  { name: "Accessibility", icon: <span className="text-sm font-semibold">A11Y</span> },
  { name: "Journey Map", icon: <span className="text-sm font-semibold">JM</span> },
];

function OrbitSkillItem({
  skill,
  index,
  total,
  radius,
  delay,
}: {
  skill: OrbitSkill;
  index: number;
  total: number;
  radius: number;
  delay: number;
}) {
  const angle = -Math.PI / 2 + index * ((2 * Math.PI) / total);
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay }}
      animate={{ y: [0, -6, 0] }}
      whileHover={{ scale: 1.08, y: -4, boxShadow: "0 0 22px rgba(95,111,143,0.24)" }}
      className="absolute flex w-24 flex-col items-center gap-2 text-center sm:w-28"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[rgba(255,255,255,0.12)] backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-white/25 sm:h-16 sm:w-16">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(95,111,143,0.28)] text-white sm:h-12 sm:w-12">
          {skill.icon}
        </div>
      </div>
      <p className="max-w-[110px] text-[10px] font-semibold uppercase tracking-[0.24em] leading-4 text-[var(--text-secondary)] sm:text-[11px]">
        {skill.name.split(" ").map((word, index) => (
          <span key={index} className="block">
            {word}
          </span>
        ))}
      </p>
    </motion.div>
  );
}

export function SkillsSection() {
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setViewport("mobile");
      } else if (window.innerWidth < 1024) {
        setViewport("tablet");
      } else {
        setViewport("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const orbitContainerSize = useMemo(() => {
    if (viewport === "mobile") return 0;
    if (viewport === "tablet") return 520;
    return 620;
  }, [viewport]);

  const radius = useMemo(() => {
    if (viewport === "mobile") return 0;
    return orbitContainerSize * 0.42;
  }, [viewport, orbitContainerSize]);

  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
          <SectionTitle
            english="Skills"
            local={<span className="text-white">Keahlian & Alat</span>}
            description="Core tools and technologies arranged in a clean orbital layout"
            accent="blue"
          />
        </RevealOnScroll>

        <div className="mt-12 rounded-[32px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="mx-auto flex min-h-[460px] items-center justify-center sm:min-h-[560px] lg:min-h-[620px]">
            {viewport === "mobile" ? (
              <div className="grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
                {orbitSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    animate={{ y: [0, -4, 0] }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="flex flex-col items-center gap-2 rounded-[24px] border border-white/15 bg-[rgba(255,255,255,0.12)] p-3 text-center backdrop-blur-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[rgba(95,111,143,0.28)] text-white">
                      {skill.icon}
                    </div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div
                className="relative flex items-center justify-center overflow-visible"
                style={{
                  height: `${orbitContainerSize}px`,
                  width: `${orbitContainerSize}px`,
                }}
              >
                <div className="absolute inset-0 rounded-full border border-white/20 bg-[rgba(255,255,255,0.01)]" />
                <div className="absolute inset-[7.5%] rounded-full border border-white/20 bg-[rgba(255,255,255,0.01)]" />
                <div className="absolute inset-[17.5%] rounded-full border border-white/20 bg-[rgba(255,255,255,0.01)]" />

                {orbitSkills.map((skill, index) => (
                  <OrbitSkillItem
                    key={skill.name}
                    skill={skill}
                    index={index}
                    total={orbitSkills.length}
                    radius={radius}
                    delay={0.1 + index * 0.03}
                  />
                ))}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[rgba(95,111,143,0.28)] to-[rgba(125,142,168,0.16)] text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:h-36 sm:w-36"
                >
                  <Wrench size={24} className="mb-2 text-[var(--text-primary)]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--text-secondary)]">
                    Core
                  </p>
                  <p className="text-sm font-semibold text-white">Tools</p>
                </motion.div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
