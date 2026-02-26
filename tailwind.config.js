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
        cream: "#FFFDF1",       // background
        peach: "#FFCE99",       // soft accent
        orange: "#FF9644",      // primary
        coffee: "#562F00",      // dark text / contrast

        brand: {
          light: "#FFCE99",
          DEFAULT: "#FF9644",
          dark: "#562F00",
        },

        border: "#F2E6D8",
        muted: "#8A6A4F",
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 25px rgba(255, 150, 68, 0.25)",
        glow: "0 0 20px rgba(255, 150, 68, 0.45)",
      },

      borderRadius: {
        xl: "1rem",
      },

      animation: {
        gradient: 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },

      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },

      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, #FFCE99, #FF9644)',
      },
    },
  },
  plugins: [],
};