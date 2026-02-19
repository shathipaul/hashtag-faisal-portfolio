/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#f8f8f8",
        black: "#000000",
        white: "#ffffff",
        purple: "#A975FF",
        green: "#8CD9A3",
        orange: "#FF9E69",
        blue: "#80A1F5",
        muted: "#475569",
        line: "#e2e8f2",
        mutedPurple: "rgba(169, 117, 255, 0.08)",
        mutedGreen: "rgba(140, 217, 163, 0.12)",
        mutedOrange: "rgba(255, 158, 105, 0.08)",
        mutedBlue: "rgba(128, 161, 245, 0.08)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { height: "0" },
          "100%": { height: "100%" },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 0 0 rgba(169,117,255,0.4)" },
          "70%": { boxShadow: "0 0 0 20px rgba(169,117,255,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(169,117,255,255,0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease forwards",
        drawLine: "drawLine 2.5s ease-in-out forwards",
        pulseGlow: "pulseGlow 2s infinite",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}

