/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // bgcolor: '#201f31',
      // primary: '#c968a7',
      // secondary: '#f0d4ff',
    }
  },
  plugins: [
    daisyui,
  ],
  daisyui:{
    themes: ["sunset"],
  }
}