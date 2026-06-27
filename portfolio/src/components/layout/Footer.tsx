"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t py-12" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, rgba(91,140,255,0.12), rgba(168,85,247,0.12))",
                border: "1px solid rgba(91,140,255,0.2)",
              }}
            >
              <span className="text-gradient-blue text-xs">K</span>
            </div>
            <span className="text-sm font-medium text-[#a0a0a0]">Kaka Puri</span>
          </motion.div>

          {/* Copyright */}
          <p className="text-xs text-[#555555]">
            © {year} Kaka Puri
          </p>

          {/* Links */}
          <div className="flex items-center gap-4">
            {[
              { label: "Email", href: `mailto:${personalInfo.email}` },
              { label: "GitHub", href: personalInfo.github },
              { label: "LinkedIn", href: personalInfo.linkedin },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#555555] hover:text-[#a0a0a0] transition-colors duration-200"
                whileHover={{ y: -1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
