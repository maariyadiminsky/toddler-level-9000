const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
      },
      keyframes: {
        wiggle: {
            "0%, 100%": {
                transform:  "rotate(-3deg)"
            },
            "50%": {
                transform:  "rotate(3deg)"
            },
        }
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
        wiggle: "wiggle 2.5s ease-in-out infinite"
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
}
