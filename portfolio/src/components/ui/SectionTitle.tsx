"use client";

import React from "react";

export default function SectionTitle({
  english,
  local,
  description,
  accent = "blue",
}: {
  english: string;
  local?: React.ReactNode;
  description?: React.ReactNode;
  accent?: "blue" | "purple" | "cyan";
}) {
  const accentGradient =
    accent === "purple"
      ? "linear-gradient(90deg, var(--highlight), var(--accent-primary), var(--accent-secondary))"
      : accent === "cyan"
      ? "linear-gradient(90deg, var(--accent-secondary), var(--accent-primary), var(--highlight))"
      : "linear-gradient(90deg, var(--accent-primary), var(--highlight), var(--accent-secondary))";

  return (
    <div className="relative text-center mb-14">
      <div className="overflow-hidden">
        <h2
          className="font-display font-extrabold tracking-tight leading-tight text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] text-transparent bg-clip-text"
          style={{ backgroundImage: accentGradient }}
        >
          {english}
        </h2>
      </div>

      {local && (
        <div className="mt-4 inline-flex items-center gap-3">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            {local}
          </div>
        </div>
      )}

      {description && (
        <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
