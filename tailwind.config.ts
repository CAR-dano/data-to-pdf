import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "[data-mode='dark']"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        shade: "#141414",
        orange: {
          "400": "#F4622F",
          "500": "#FF7D43",
          "600": "#E24717",
          "700": "#A34E28",
        },
        purple: {
          "100": "#F3E8FF",
          "300": "#DABAFF",
          "400": "#A25DF9",
          "500": "#C28CFF",
          "900": "#4C1C82",
        },
        neutral: {
          "100": "#EEEEEE",
          "500": "#A8A8A8",
          "700": "#6D6D6D",
        },
        yellow: {
          "900": "#5A4212",
        },
        pink: {
          "400": "#F469A8",
          "600": "#F24091",
        },
        blue: {
          "300": "#B0D7F4",
          "400": "#308FD4",
          "500": "#30B6ED",
        },
        green: {
          "400": "#6CC854",
          "500": "#8AD357",
          "600": "#54A541",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        rubik: ["var(--font-rubik)", "sans-serif"],
        pacifico: ["var(--font-pacifico)", "cursive"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
} satisfies Config;
