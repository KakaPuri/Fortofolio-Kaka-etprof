"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 110) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -96, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "mx-auto max-w-6xl px-6 transition-all duration-500",
            scrolled ? "py-3" : "py-5"
          )}
        >
          <div
            className={cn(
              "glass rounded-[28px] border border-white/10 px-5 py-3 flex items-center justify-between gap-4 transition-all duration-500 shadow-[0_24px_90px_rgba(9,13,27,0.22)]",
              scrolled ? "bg-[rgba(13,17,27,0.9)] backdrop-blur-xl" : "bg-[rgba(13,17,27,0.7)]"
            )}
          >
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNav(link.href)}
                    className={cn(
                      "relative rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-white"
                        : "text-[var(--text-secondary)] hover:text-white"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-2xl bg-[rgba(91,140,255,0.14)] border border-[rgba(91,140,255,0.22)]" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            <motion.button
              className="md:hidden p-2 rounded-2xl glass"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 rounded-[28px] glass shadow-[0_24px_90px_rgba(9,13,27,0.3)] p-4"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm text-left font-medium transition-all duration-200",
                    activeSection === link.href.slice(1)
                      ? "text-white bg-[rgba(91,140,255,0.14)] border border-[rgba(91,140,255,0.22)]"
                      : "text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.03)]"
                  )}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
