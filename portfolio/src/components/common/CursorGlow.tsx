"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9998] mix-blend-screen"
        animate={{ x: x - 150, y: y - 150 }}
        transition={{ type: "spring", stiffness: 500, damping: 50, mass: 0.1 }}
        style={{
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(95,111,143,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9997]"
        animate={{ x: x - 4, y: y - 4 }}
        transition={{ type: "spring", stiffness: 800, damping: 40 }}
        style={{
          width: 8,
          height: 8,
          background: "rgba(95,111,143,0.55)",
          borderRadius: "50%",
          boxShadow: "0 0 8px rgba(95,111,143,0.24)",
        }}
      />
    </>
  );
}
