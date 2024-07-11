import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        darkBlue: '#015CAC',
        lightYellow: '#FFE023',
        orange: '#F6A72E',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
      textDecoration: ['hover'],
    },
  },
  plugins: [],
};
export default config;
