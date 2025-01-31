/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f7f9f3",
          100: "#e8ede0",
          200: "#d1dbc3",
          300: "#b3c29e",
          400: "#94a77c",
          500: "#768a5f",
          600: "#5d6e4b",
          700: "#4a573c",
          800: "#3d4731",
          900: "#333c2a",
        },
        earth: {
          50: "#fbf7f3",
          100: "#f3e8d9",
          200: "#e5ccb0",
          300: "#d5aa82",
          400: "#c4865a",
          500: "#b36a3d",
          600: "#9a5232",
          700: "#7d402a",
          800: "#663526",
          900: "#552d23",
        },
        leaf: {
          50: "#f3f9e8",
          100: "#e3f1c9",
          200: "#cce59c",
          300: "#afd566",
          400: "#94c33d",
          500: "#75a522",
          600: "#5c8419",
          700: "#486615",
          800: "#3b5314",
          900: "#324613",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

