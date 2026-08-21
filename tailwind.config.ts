import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        charcoal: "#111111",
        graphite: "#191919",
        electric: "#00A8FF",
        cyan: "#00E5FF",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(0, 168, 255, 0.24)",
        line: "inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 20%, rgba(0, 168, 255, 0.18), transparent 28%), radial-gradient(circle at 80% 15%, rgba(0, 229, 255, 0.14), transparent 24%)",
      },
    },
  },
  plugins: [],
};

export default config;
