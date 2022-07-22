/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      sans: ['Nunito','Noto Sans TC'],
      serif: ['georgia','標楷體']
    },
    screens: {
      sm:'480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors:{
        primary: {
          '100': 'blue',
          '200': '#987988'
        },
        secondary: '#999'
      }
    },
  },
  plugins: [],
}
