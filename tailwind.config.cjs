/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'ui-monospace']
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"]
    }
  }
}
