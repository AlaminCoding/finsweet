/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      green: "#1AD993",
      aqua: "#ABFFE0",
      blue: "#503AE7",
      darkblue: "#3E2DB2",
      purple: "#832BC1",
      black: "#14142B",
      gray: "#AFB0B9",
      offwhite: "#F4F2FF",
      white: "#ffffff",
    },
    fontSize: {
      48: ["48px", "52.8px"],
      36: ["36px", "44px"],
      32: ["32px", "38px"],
      28: ["28px", "36px"],
      24: ["24px", "30px"],
      20: ["20px", "28px"],
      18: ["18px", "26px"],
      16: ["16px", "24px"],
      12: ["12px", "18px"],
    },
  },
  plugins: [],
};
