import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
       'worksans':[ "Work Sans", 'sans-serif'],
       'latolight': ['Lato', 'sans-serif'],
       'roboto': ['Roboto', 'sans-serif'],
       'Alegreya': ['Alegreya Sans SC', 'sans-serif'],

    },
      screens: {
        'miniphone': '320px',
        'phone': '400px',
        'minitablet': '550px',
  
        'tablet': '640px',
  
        'desktop': '1280px',
      
        'sm': '786px',
        'miniscreen': '1100px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
