/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rung: { DEFAULT: "#1B4332", sang: "#2D6A4F", ngoc: "#40916C", nhat: "#95D5B2" },
        kim: { DEFAULT: "#C5A059", sang: "#E3C98B", dam: "#9C7C3C" },
        dat: "#D4A373",
        kem: { DEFAULT: "#FAF8F3", sau: "#F1ECE1" },
        than: { DEFAULT: "#23281F", nhat: "#5D6456" },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        la: "0 18px 44px -26px rgba(27, 67, 50, 0.45)",
        "la-cao": "0 30px 64px -30px rgba(27, 67, 50, 0.55)",
      },
      borderRadius: { xl2: "20px" },
      maxWidth: { noidung: "1180px" },
    },
  },
  plugins: [],
};
