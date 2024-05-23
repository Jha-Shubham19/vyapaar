/** @type {import('tailwindcss').Config} */

// import cursor from "./src/media/cursor/retro-cursor.svg"

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

      cursor: {
        'retro': `url('./src/media/cursor/retro-cursor.svg'), pointer`,
        'handretro' : `url('./src/media/cursor/new-hand-cursor.svg'), pointer`
      }
    },
  },
  plugins: [],
}