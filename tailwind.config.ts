/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Primary color schemes
        primary: {
          DEFAULT: "var(--primary-600)",
          foreground: "var(--primary-foreground)",
          "100": "var(--primary-100)",
          "200": "var(--primary-200)",
          "300": "var(--primary-300)",
          "400": "var(--primary-400)",
          "500": "var(--primary-500)",
          "600": "var(--primary-600)",
          "700": "var(--primary-700)",
          "800": "var(--primary-800)",
          "900": "var(--primary-900)",
          "1000": "var(--primary-1000)",
        },

        // Accent color schemes
        accent: {
          DEFAULT: "var(--accent-600)",
          foreground: "var(--accent-foreground)",
          "100": "var(--accent-100)",
          "200": "var(--accent-200)",
          "300": "var(--accent-300)",
          "400": "var(--accent-400)",
          "500": "var(--accent-500)",
          "600": "var(--accent-600)",
          "700": "var(--accent-700)",
          "800": "var(--accent-800)",
          "900": "var(--accent-900)",
          "1000": "var(--accent-1000)",
        },

        // Muted color schemes
        muted: {
          DEFAULT: "var(--muted-fill)",
          foreground: "var(--text-muted)",
        },

        // Other colors
        text: "var(--text)",
        "sub-text": "var(--sub-text)",
        "sub-text-light": "var(--sub-text-light)",
        border: "var(--border)",
        base: "var(--base)",
        success: "var(--success)",
        error: "var(--error)",
        warning: "var(--warning)",
        linear: "var(--linear)",
        "linear-white": "var(--linear-white)",
        "linear-gradient-100":
          "var(--Linear-1, linear-gradient(126deg, #008854 -19.96%, #007888 200.97%))",

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
