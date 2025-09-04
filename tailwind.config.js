/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B9FF66",
        grey: "#F3F3F3",
        dark: "#191A23"
      }
    },
  },
  plugins: [],
}

