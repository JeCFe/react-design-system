/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js,ts,tsx}",
    "./app/**/*.{jsx,js,ts,tsx}",
    "./pages/**/*.{jsx,js,ts,tsx}",
    "./node_modules/@jecfe/react-design-system/**/*.{jsx,js,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@codaworks/react-glow/tailwind")],
};
