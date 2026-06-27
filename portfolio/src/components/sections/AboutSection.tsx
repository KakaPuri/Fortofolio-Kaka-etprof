"use client";

import { motion } from "framer-motion";
import { type LucideIcon, Palette, Users, Layout, Zap, MapPin, Download } from "lucide-react";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo, aboutHighlights } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Users,
  Layout,
  Zap,
};

const colorMap = {
  blue: { bg: "rgba(91,140,255,0.08)", border: "rgba(91,140,255,0.2)", text: "#5B8CFF" },
  cyan: { bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.2)", text: "#2DD4BF" },
  purple: { bg: "rgba(168,85,247,0.08)", border: "rgba(168,85,247,0.2)", text: "#A855F7" },
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <SectionTitle
            english="About"
            local={
              <>
                <span className="text-gradient-blue">Tentang Saya</span>
              </>
            }
            description={
              <>
                A UI/UX designer who values clarity, function, and user experience.
                Focused on professional, easy-to-understand solutions that drive business value.
              </>
            }
            accent="purple"
          />
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-8">
          <RevealOnScroll direction="left">
            <div
              className="card p-8 h-full"
              style={{ background: "rgba(9, 14, 28, 0.92)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start text-center sm:text-left">
                <div className="relative overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] shadow-lg w-full max-w-[320px] mx-auto lg:mx-0">
                  <img
                    src="/images/profile.jpg"
                    alt="Profile Kaka Puri"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="space-y-6 lg:max-w-[640px] mx-auto lg:mx-0">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white mb-0">Hai, saya Kaka</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">{personalInfo.shortBio}</p>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      Cepat beradaptasi dengan teknologi baru dan terbiasa bekerja secara mandiri maupun dalam tim.
                      Saat ini terus mengembangkan kemampuan melalui proyek akademik dan pembelajaran mandiri.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-5 text-center">
                      <p className="text-3xl font-semibold text-white">3+</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.32em] text-slate-400">Years of experience</p>
                    </div>
                    <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-5 text-center">
                      <p className="text-3xl font-semibold text-white">15+</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.32em] text-slate-400">Projects completed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Bahasa</p>
                <div className="flex gap-2 flex-wrap">
                  {personalInfo.languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="px-3 py-1 rounded-lg text-xs text-slate-200"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
                    >
                      {lang.name}
                      <span className="text-slate-300 ml-1">· {lang.level}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 text-slate-300">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={14} className="text-[var(--accent-primary)]" />
                  {personalInfo.location}, Indonesia
                </div>
                <a
                  href="/CV_Kaka_Puri.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[rgba(15,23,42,0.12)] bg-[rgba(255,255,255,0.72)] px-6 py-3 text-sm font-medium text-slate-900 transition-all duration-300 hover:text-slate-900 hover:border-[rgba(15,23,42,0.18)] w-fit"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {aboutHighlights.map((item, i) => {
                const Icon = iconMap[item.icon];
                const color = colorMap[item.color as keyof typeof colorMap];
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="card p-5 cursor-default"
                    style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: color.bg, border: `1px solid ${color.border}` }}
                    >
                      {Icon && <Icon size={16} style={{ color: color.text }} />}
                    </div>
                    <h4 className="text-sm font-semibold text-[#f8f8f8] mb-1.5">{item.label}</h4>
                    <p className="text-xs text-[#555555] leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
