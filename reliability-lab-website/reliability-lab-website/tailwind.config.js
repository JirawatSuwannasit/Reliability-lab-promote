/** @type {import('tailwindcss').Config} */
// Pre-configured Tailwind setup matching the Reliability Lab design tokens.
// All design tokens map directly to the values in docs/design-tokens.json

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        // Background
        navy: {
          DEFAULT: "#0A1628",
          dark: "#0A1628",
          light: "#1A2332",
        },
        charcoal: "#1A2332",

        // Accents
        panasonic: {
          DEFAULT: "#00AEEF",
          blue: "#00AEEF",
          hover: "#0090C5",
        },
        amber: {
          DEFAULT: "#FFA726",
          industrial: "#FFA726",
          hover: "#E69517",
        },

        // Text
        "text-primary": "#FFFFFF",
        "text-secondary": "#8B95A7",
        "text-muted": "#5A6478",
      },

      fontFamily: {
        hero: ["Inter", "Barlow Condensed", "system-ui", "sans-serif"],
        body: ["Inter", "Helvetica Neue", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Space Mono", "monospace"],
      },

      fontSize: {
        // Hero & headings
        "hero": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h1": ["3rem", { lineHeight: "1.15", fontWeight: "700" }],
        "h2": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        "h3": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],

        // Spec numerals (mono, large)
        "spec": ["3rem", { lineHeight: "1", fontWeight: "700" }],
        "spec-sm": ["2rem", { lineHeight: "1", fontWeight: "700" }],

        // Body
        "body": ["1rem", { lineHeight: "1.6" }],
        "small": ["0.875rem", { lineHeight: "1.5" }],

        // Label (uppercase, tracking)
        "label": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.1em", fontWeight: "600" }],
      },

      borderRadius: {
        card: "8px",
      },

      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 30px rgba(0, 174, 239, 0.15)",
        glow: "0 0 20px rgba(0, 174, 239, 0.3)",
      },

      backgroundImage: {
        // Technical grid overlay - use as bg utility
        "grid-pattern": `linear-gradient(rgba(0,174,239,0.08) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0,174,239,0.08) 1px, transparent 1px)`,
      },

      backgroundSize: {
        "grid-40": "40px 40px",
      },

      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scan": "scan 3s linear infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
