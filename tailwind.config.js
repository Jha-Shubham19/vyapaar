/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,jsx}",
    './components/**/*.{js,ts,tsx,jsx}',
  ],
  theme: {
    extend: {
      borderWidth: ['active'],
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}