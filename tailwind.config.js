/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#031926",
        page: "#07324B",
        card: "#5299A3",
        "card-hover": "#77B3BB",
        "default-text": "#FBF8EE",
        "blue-accent": "#FF8D0A",
        "blue-accent-hover": "#FFECD6",
      },
    },
  },
  plugins: [],
};
