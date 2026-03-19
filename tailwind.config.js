/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Jika file kamu ada di folder src, tambahkan ini:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        accent: "#EA580C",
      },
    },
  },
  plugins: [
    // Agar menu kategori di mobile bisa di-scroll tanpa bar jelek
    require('tailwind-scrollbar-hide'),
  ],
}