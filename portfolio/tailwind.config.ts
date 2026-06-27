import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0d0d0d",
        "surface-2": "#111111",
        "surface-3": "#171717",
        border: "rgba(255,255,255,0.06)",
        "border-hover": "rgba(255,255,255,0.12)",
        accent: {
          primary: "#64779a",
          secondary: "#8aa0c7",
        },
        text: {
          primary: "#F8F8F8",
          secondary: "#A0A0A0",
          muted: "#555555",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, hsla(215,45%,50%,0.04) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(220,40%,45%,0.03) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(225,35%,40%,0.02) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(218,42%,48%,0.02) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(220,38%,42%,0.03) 0px, transparent 50%)",
      },
      animation: {
        "aurora": "aurora 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient": "gradient 8s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(75,92,127,0.2), 0 0 60px rgba(75,92,127,0.08)",
        "glow-subtle": "0 0 15px rgba(75,92,127,0.1), 0 0 40px rgba(75,92,127,0.05)",
        "glass": "0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card": "0 1px 0 0 rgba(255,255,255,0.04), 0 -1px 0 0 rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
