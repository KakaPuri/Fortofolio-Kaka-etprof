"use client";

import { motion } from "framer-motion";
import { Search, GitBranch, Layout, Zap, CheckCircle } from "lucide-react";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import SectionTitle from "@/components/ui/SectionTitle";
import { designProcess } from "@/data/portfolio";

const iconComponents = { Search, GitBranch, Layout, Zap, CheckCircle };

export function ProcessSection() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(91,140,255,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <SectionTitle
            english="Process"
            local={<><span className="text-gradient-blue">Proses Desain</span></>}
            description={
              "Pendekatan terstruktur yang mengubah kebutuhan pengguna menjadi antarmuka yang matang dan fungsional."
            }
            accent="cyan"
          />
        </RevealOnScroll>

        {/* Timeline — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px mx-16">
            <div className="relative h-full">
              <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.04)" }} />
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{
                  background: "linear-gradient(90deg, #5B8CFF, #A855F7, #2DD4BF)",
                }}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
            {designProcess.map((step, i) => {
              const IconComponent = iconComponents[step.icon as keyof typeof iconComponents];
              const colors = ["#5B8CFF", "#2DD4BF", "#A855F7", "#5B8CFF", "#2DD4BF"];
              const bgs = [
                "rgba(91,140,255,0.1)",
                "rgba(45,212,191,0.1)",
                "rgba(168,85,247,0.1)",
                "rgba(91,140,255,0.1)",
                "rgba(45,212,191,0.1)",
              ];
              const borders = [
                "rgba(91,140,255,0.25)",
                "rgba(45,212,191,0.25)",
                "rgba(168,85,247,0.25)",
                "rgba(91,140,255,0.25)",
                "rgba(45,212,191,0.25)",
              ];
              const color = colors[i];
              const bg = bgs[i];
              const border = borders[i];

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="flex flex-col items-center lg:items-center text-center group"
                >
                  {/* Step circle */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
                      style={{
                        background: bg,
                        border: `1px solid ${border}`,
                      }}
                    >
                      {IconComponent && <IconComponent size={22} style={{ color }} />}
                    </div>

                    {/* Glow on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: `0 0 20px ${color}40`,
                      }}
                    />

                    {/* Step number */}
                    <div
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{ background: color, color: "#050505" }}
                    >
                      {step.step}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-sm font-semibold text-[#f8f8f8] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#555555] leading-relaxed max-w-[160px]">
                    {step.description}
                  </p>

                  {/* Mobile arrow */}
                  {i < designProcess.length - 1 && (
                    <div className="lg:hidden mt-6 w-px h-8 bg-gradient-to-b from-[rgba(91,140,255,0.3)] to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <RevealOnScroll delay={0.3}>
          <div
            className="mt-20 rounded-2xl p-8 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(91,140,255,0.04), rgba(168,85,247,0.04), rgba(45,212,191,0.04))",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p className="text-sm text-[#a0a0a0] max-w-lg mx-auto leading-relaxed">
              Setiap proyek dimulai dari memahami manusia.{" "}
              <span className="text-[#f8f8f8]">Desain tanpa riset hanyalah dekorasi.</span>{" "}
              Saya menghadapi setiap tantangan dengan mendengarkan lebih dulu, lalu merancang solusi yang benar-benar berfungsi.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
