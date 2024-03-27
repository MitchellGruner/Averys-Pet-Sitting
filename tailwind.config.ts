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
        '3xl': '1600px',
        '4xl': '2400px',
      },
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'gray': '#1E1E1E',
        'teal': '#609498',
        'dark-teal': '#377a7f',
        'darkened-teal': '#476F72',
        'light-brown': '#987d60',
        'brown': '#986460',
        'dark-brown': '#724A47',
        'red': '#D9001D',
      },
    },
  },
  plugins: [],
};
export default config;
