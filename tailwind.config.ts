import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["rotate-y-180"], // Add this for the flip animation
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
         'worksans':[ "Work Sans", 'sans-serif'],
         'latolight': ['Lato', 'sans-serif'],
         'roboto': ['Roboto', 'sans-serif'],
         'Alegreya': ['Alegreya Sans SC', 'sans-serif'],

      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

      },
      spacing: {
        
          '4.1': '1.031rem',
        
        
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
