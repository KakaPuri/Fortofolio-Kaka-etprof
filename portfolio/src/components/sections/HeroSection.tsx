"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function AuroraBackground() {
  const [particles, setParticles] = useState<{
    left: number;
    top: number;
    background: string;
    opacity: number;
  }[]>([]);

  useEffect(() => {
    const cols = ["rgba(95,111,143,0.18)", "rgba(125,142,168,0.14)"];
    const items = Array.from({ length: 18 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      background: cols[Math.floor(Math.random() * cols.length)],
      opacity: 0.12,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% -5%, rgba(95,111,143,0.05) 0%, transparent 55%), radial-gradient(ellipse 70% 70% at 85% 15%, rgba(125,142,168,0.04) 0%, transparent 45%), radial-gradient(ellipse 55% 55% at 22% 80%, rgba(111,127,149,0.03) 0%, transparent 45%)",
        }}
      />

      <motion.div
        className="absolute w-[640px] h-[640px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, rgba(95,111,143,0.45), transparent)",
          top: "-12%",
          left: "-8%",
          filter: "blur(92px)",
        }}
        animate={{
          x: [0, 48, 0],
          y: [0, 18, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[540px] h-[540px] rounded-full opacity-[0.02]"
        style={{
          background: "radial-gradient(circle, rgba(125,142,168,0.34), transparent)",
          top: "18%",
          right: "-8%",
          filter: "blur(92px)",
        }}
        animate={{
          x: [0, -36, 0],
          y: [0, 36, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div
        className="absolute inset-0 opacity-[0.016]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "78px 78px",
        }}
      />

      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: p.background,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.12, 0.38, 0.12],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

const stagger = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 1.8 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: [0.22, 0.6, 0.3, 0.98] },
    },
  },
};

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-20">
      <AuroraBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <div className="space-y-6 max-w-2xl text-center">
            <motion.div variants={stagger.item}>
              <h1 className="text-[52px] sm:text-[64px] md:text-[76px] lg:text-[88px] font-extrabold tracking-tight text-white leading-[0.95]">
                Kaka Puri
              </h1>
            </motion.div>

            <motion.div variants={stagger.item}>
              <p className="text-lg sm:text-xl text-[var(--text-secondary)]">
                Desainer UI / UX
              </p>
            </motion.div>

            <motion.div variants={stagger.item} className="flex flex-col gap-4 items-center pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[var(--accent-primary)] via-[var(--highlight)] to-[var(--accent-secondary)] px-8 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(91,140,255,0.18)] transition-all duration-300 hover:scale-[1.02]"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator removed as requested */}
    </section>
  );
}
