import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aim: {
          blue: "#0033A0",     // Official-style Deep Blue
          gold: "#FFB81C",     // Official-style Gold/Yellow
          navy: "#001f60",     // Darker shade for footers/backgrounds
          light: "#F3F4F6",    // Light Gray/White
          accent: "#38BDF8",   // Sky blue for illustration highlights
        },
      },
      backgroundImage: {
        'gradient-aim': 'linear-gradient(135deg, #0033A0 0%, #001f60 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
