import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xs': '280px',
        'xs': '400px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'gray': '#1E1E1E',
        'teal': '#7EAAAD',
      },
    },
  },
  plugins: [],
};
export default config;
