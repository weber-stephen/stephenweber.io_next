module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jacarta: {
          base: "#5A5D79",
          50: "#F4F4F6",
          100: "#E7E8EC",
          200: "#C4C5CF",
          300: "#A1A2B3",
          400: "#7D7F96",
          500: "#5A5D79",
          600: "#363A5D",
          700: "#131740",
          800: "#101436",
          900: "#0D102D"
        }
      },
      borderRadius: {
        "2lg": "0.625rem"
      },
      transitionProperty: {
        height: "height",
        width: "width"
      },
      animation: {
        fly: "fly 6s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
        heartBeat: "heartBeat 1s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
        progress: "progress 5s linear"
      },
      keyframes: {
        fly: {
          "0%, 100%": { transform: "translateY(5%)" },
          "50%": { transform: "translateY(0)" }
        },
        heartBeat: {
          "0%, 40%, 80%, 100%": { transform: "scale(1.1)" },
          "20%, 60%": { transform: "scale(.8)" }
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
