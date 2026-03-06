/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#145231",
        },
        forest: "#1B4D3E",
        nature: "#2D5A4F",
        sage: "#6B8E7F",
        earth: "#8B7355",
        sky: "#87CEEB",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      spacing: {
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        lg: "0 10px 30px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 40px rgba(0, 0, 0, 0.15)",
        glow: "0 0 30px rgba(34, 197, 94, 0.3)",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in",
        slideIn: "slideIn 0.6s ease-out",
        slideUp: "slideUp 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        blob: "blob 7s infinite",
        "bounce-soft": "bouncesoft 2s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "scale-in": "scaleIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(34, 197, 94, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(34, 197, 94, 0.4)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "1000px 0" },
          "100%": { backgroundPosition: "-1000px 0" },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        bouncesoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": {
            opacity: "0.6",
            filter: "drop-shadow(0 0 10px rgba(34, 197, 94, 0.4))",
          },
          "50%": {
            opacity: "1",
            filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.8))",
          },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
