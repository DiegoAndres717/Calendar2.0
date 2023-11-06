/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(1.2rem, 1.8vw, 2rem)",
      },
      boxShadow: {
        'custom': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      }, 
      screens: {
        'md_media': '1150px'
      },
      colors: {
        'calendar_color_blue': {
          100: '#ccf1f0',
          300: '#00b7b5',
          500: '#004a72',
        },
        'calendar-btn-custom-gray': 'rgb(224, 224, 224)',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(100deg, #0080c4 0%, #625dd0 100%)',
      },
      opacity: {
        '1': '1',
      }
    },
  },
  plugins: [],
}

