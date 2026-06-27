"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, X, Calendar, Layers } from "lucide-react";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

const colorMap = {
  blue: {
    bg: "rgba(91,140,255,0.07)",
    border: "rgba(91,140,255,0.16)",
    glow: "rgba(91,140,255,0.16)",
    text: "#5B8CFF",
    gradient: "linear-gradient(135deg, rgba(91,140,255,0.1), rgba(45,212,191,0.05))",
  },
  purple: {
    bg: "rgba(168,85,247,0.07)",
    border: "rgba(168,85,247,0.16)",
    glow: "rgba(168,85,247,0.16)",
    text: "#A855F7",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(91,140,255,0.04))",
  },
};

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const color = colorMap[project.color];

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative animated-border card interactive-tilt overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))",
        border: `1px solid ${color.border}`,
        transition: "box-shadow 0.35s ease, transform 0.35s",
      }}
    >
      {/* Preview area */}
      <div
        className="relative overflow-hidden"
        style={{
          height: project.size === "large" ? "300px" : "220px",
          backgroundImage: project.image
            ? `url(${project.image}), ${color.gradient}`
            : color.gradient,
          backgroundSize: project.image ? "cover, auto" : "auto",
          backgroundPosition: project.image ? "center, center" : "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-4 rounded-xl overflow-hidden" style={{ background: "rgba(0,0,0,0.3)" }}>
          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md" style={{ background: color.bg, border: `1px solid ${color.border}` }} />
              <div className="h-2 w-24 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
            </div>
            <div className="h-2 w-3/4 rounded-full mb-2" style={{ background: "rgba(255,255,255,0.06)" }} />
            <div className="h-2 w-1/2 rounded-full mb-4" style={{ background: "rgba(255,255,255,0.04)" }} />
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-16 rounded-lg" style={{ background: "rgba(255,255,255,0.04)" }} />
              ))}
            </div>
          </div>
        </div>

        {/* Category badge + hover CTA */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold shadow-glow-blue" style={{ background: color.bg, border: `1px solid ${color.border}`, color: color.text }}>
          {project.category}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: "linear-gradient(180deg, rgba(2,6,23,0.6), rgba(2,6,23,0.45))", backdropFilter: "blur(10px)" }}>
          <div className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-[#f8f8f8] btn-magnetic" style={{ background: `linear-gradient(90deg, ${color.text}22, ${color.text}11)`, border: `1px solid ${color.border}` }}>
            View Project
            <ExternalLink size={14} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-[#f8f8f8] mb-1 transition-all">{project.title}</h3>
            <p className="text-xs md:text-sm" style={{ color: color.text }}>{project.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#a0a0a0] flex-shrink-0">
            <Calendar size={12} />
            <span>{project.period}</span>
          </div>
        </div>

        <p className="text-sm text-[#a0a0a0] leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="px-3 py-1 text-xs rounded-full" style={{ background: "rgba(255,255,255,0.03)", color: "#a0a0a0", border: "1px solid rgba(255,255,255,0.04)" }}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const color = colorMap[project.color];

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0"
        style={{ background: "rgba(5,5,5,0.85)", backdropFilter: "blur(20px)" }}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-xl rounded-2xl overflow-hidden"
        style={{
          background: "#0d0d0d",
          border: `1px solid ${color.border}`,
          boxShadow: `0 0 60px ${color.glow}`,
        }}
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Header image area */}
        <div
          className="h-48 relative overflow-hidden"
          style={{ background: color.gradient }}
        >
          <div className="absolute inset-4 rounded-xl" style={{ background: "rgba(0,0,0,0.3)" }}>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg" style={{ background: color.bg }} />
                <div className="h-2 w-24 rounded" style={{ background: "rgba(255,255,255,0.1)" }} />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4,5,6,7,8].map(n => (
                  <div key={n} className="h-8 rounded-md" style={{ background: "rgba(255,255,255,0.05)" }} />
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-lg glass flex items-center justify-center text-[#a0a0a0] hover:text-[#f8f8f8]"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-7">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold text-[#f8f8f8] mb-1">{project.title}</h2>
              <p className="text-sm" style={{ color: color.text }}>{project.subtitle}</p>
            </div>
            <span
              className="px-2.5 py-1 text-xs rounded-full font-medium flex-shrink-0"
              style={{ background: color.bg, border: `1px solid ${color.border}`, color: color.text }}
            >
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-5 text-xs text-[#555555]">
            <span className="flex items-center gap-1.5"><Calendar size={12} />{project.period}</span>
            <span className="flex items-center gap-1.5"><Layers size={12} />{project.role}</span>
          </div>

          <div className="mb-5">
            <p className="text-xs text-[#555555] uppercase tracking-wider mb-3">Yang saya kerjakan</p>
            <ul className="flex flex-col gap-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#a0a0a0]">
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: color.text }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs text-[#555555] uppercase tracking-wider mb-3">Alat yang digunakan</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-xs rounded-lg font-medium"
                  style={{ background: color.bg, border: `1px solid ${color.border}`, color: color.text }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Semua");

  const categories = ["Semua", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects =
    activeFilter === "Semua" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(91,140,255,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <SectionTitle
            english="Projects"
            local={<> <span className="text-gradient-purple">Projects</span></>}
            description={
              "Projects where research meets design — solving real problems with a purpose-driven interface."
            }
            accent="blue"
          />
        </RevealOnScroll>

        {/* Filter tabs */}
        <RevealOnScroll delay={0.05}>
          <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative px-4 py-2 rounded-xl text-xs font-medium transition-colors duration-200"
                  style={{
                    background: isActive ? "rgba(91,140,255,0.1)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${isActive ? "rgba(91,140,255,0.24)" : "rgba(255,255,255,0.07)"}`,
                    color: isActive ? "var(--accent-primary)" : "#a0a0a0",
                  }}
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Bento Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-sm text-[#555555] mt-10">
            Belum ada proyek pada kategori ini.
          </p>
        )}

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
