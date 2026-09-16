/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0EB2DF",
          50: "#E9F9FE",
          100: "#CFF1FC",
          400: "#3DC8EC",
          500: "#0EB2DF",
          600: "#0876A0",
          700: "#065B7D",
          800: "#084A66",
        },
        leaf: {
          DEFAULT: "#67BD53",
          50: "#F1F9EF",
          400: "#7FCC6C",
          500: "#67BD53",
          600: "#4C9E3A",
          700: "#3C7D2E",
        },
        navy: {
          DEFAULT: "#062D43",
          700: "#0A3A56",
          800: "#08324B",
          900: "#052539",
        },
        ink: "#12252F",
        muted: "#5E6D75",
        ice: "#F2FAFD",
        mint: "#F5FBF3",
        paper: "#F7F9FA",
        line: "#DFE7EA",
      },
      fontFamily: {
        display: ['"Manrope"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.16em" }],
      },
      maxWidth: {
        container: "1240px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(6,45,67,0.04), 0 8px 24px -12px rgba(6,45,67,0.12)",
        lift: "0 2px 4px rgba(6,45,67,0.05), 0 18px 40px -16px rgba(6,45,67,0.22)",
        header: "0 1px 0 rgba(6,45,67,0.08), 0 8px 24px -18px rgba(6,45,67,0.25)",
      },
      transitionDuration: {
        250: "250ms",
        450: "450ms",
      },
    },
  },
  plugins: [],
};
