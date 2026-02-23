/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary gradient blues
        navy: {
          900: "#02075D",
          800: "#003B8E",
        },
        blue: {
          700: "#0072B8",
          600: "#0093C7",
        },
        cyan: {
          500: "#00B5D8",
          300: "#4DD0E1",
          200: "#80DEEA",
          100: "#B2EBF2",
          50:  "#E0F7FA",
        },

        // UI support
        dark: "#0F172A",
        muted: "#64748B",
        border: "#E2E8F0",

        // Accent
        golden: "#c8901d",
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 25px rgba(0, 181, 216, 0.15)",
        glow: "0 0 20px rgba(139, 92, 246, 0.5)",
      },

      borderRadius: {
        xl: "1rem",
      },

      animation: {
        gradient: 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },

      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
