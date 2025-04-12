/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        prompt: ['Prompt'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
