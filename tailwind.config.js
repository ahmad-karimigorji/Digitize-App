/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazir"],
      },
      colors: {
        bgColor: '#f3f4f6',
        mainOrange: '#ea580c',
        textColor: '#334155',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
