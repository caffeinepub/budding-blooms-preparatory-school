/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        // Custom palette
        sky: {
          light: "oklch(var(--sky-light))",
          medium: "oklch(var(--sky-medium))",
          accent: "oklch(var(--sky-accent))",
        },
        cream: "oklch(var(--cream))",
        yellowpale: "oklch(var(--yellow-pale))",
        yellowfooter: "oklch(var(--yellow-footer))",
        pinksoft: "oklch(var(--pink-soft))",
        pinkcoral: "oklch(var(--pink-coral))",
        mint: "oklch(var(--mint))",
        greenlight: "oklch(var(--green-light))",
        greenhilll: "oklch(var(--green-hill))",
        greendark: "oklch(var(--green-dark))",
        lavender: "oklch(var(--lavender))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
        "card-hover": "0 12px 32px rgba(0,0,0,0.12)",
        hero: "0 8px 40px rgba(0,0,0,0.10)",
      },
      animation: {
        "float-cloud": "floatCloud 8s ease-in-out infinite",
        "float-cloud-reverse": "floatCloudReverse 10s ease-in-out infinite",
        "float-emoji": "floatEmoji 4s ease-in-out infinite",
        "spin-slow": "spinSlow 12s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "bounce-in": "bounceIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        butterfly: "butterfly 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
