/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./node_modules/react-toastify/dist/ReactToastify.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'mde-editor'
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui"),  require('@tailwindcss/typography'),],
}

