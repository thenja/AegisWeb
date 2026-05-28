import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fbfa",
          100: "#d7f4f1",
          200: "#b3e8e2",
          300: "#7dd8ce",
          400: "#45c1b1",
          500: "#2ab09f",
          600: "#208f86",
          700: "#1f6f79",
          800: "#1f4f6b",
          900: "#1f3f60"
        },
        accent: {
          blue: "#1e73be",
          deep: "#10344f",
          ink: "#121417"
        }
      },
      maxWidth: {
        layout: "74rem"
      },
      boxShadow: {
        panel: "0 8px 24px rgba(16, 52, 79, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
