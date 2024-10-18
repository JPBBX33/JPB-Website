/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFE08B",
        secondary: {
          brun: "#6F6043",
          ligth: "#F7F7F0",
        },
      },
      backgroundImage:{
        galleryBaner: "url('/images/gallery.jpg')",
        servicesBaner: "url('/images/services.jpg')",
      }
    },
  },
  plugins: [],
};
