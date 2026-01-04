/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",
        surface: "var(--color-surface)",
      },
      fontFamily: {
        // This sets Poppins as the default sans font
        // sans: ['var(--font-poppins)', 'sans-serif'],
            sans: ["var(--font-sans-s-3)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
