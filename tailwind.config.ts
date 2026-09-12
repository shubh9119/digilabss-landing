import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        apple: {
          blue: "#0071e3",
          "blue-hover": "#0077ED",
          black: "#1d1d1f",
          gray: {
            1: "#f5f5f7",
            2: "#e8e8ed",
            3: "#d2d2d7",
            4: "#a1a1a6",
            5: "#86868b",
            6: "#6e6e73",
          },
        },
      },
      animation: {
        "marquee": "marquee-scroll 35s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        "card": "0 2px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.06)",
        "card-active": "0 30px 80px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
