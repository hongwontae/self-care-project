/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows : {
        layout : "auto 1fr"
      },
      fontFamily : {
        "custome-Poppins" : ['Poppins', 'sans-serif'],
        "custom-Ubuntu" : ['Ubuntu', 'sans-serif'],
        "custom-Doto" : ['Doto', 'sans-serif'],
        "custom-Oswald" : ['Oswald', 'sans-serif'],
        "custom-Markazi" : ['Markazi', 'sans-serif'],
        'custon-Bangers' : ['Bangers', 'sans-serif']
      },
      backgroundColor : {
        'custom-mordern' : '#847770',
        'custom-blue' : '#6e99ad'
      },
      textColor : {
        'custom-letter-color' : '#111c3a',
        'custom-wot-label-color' : '#c1a38f',
      },
      screens : {
        'max-plus-page-1' : {'max' : '600px'},
        'max-plus-page-2' : {'max' : '1000px'},
        'max-homepage-box-1' : {'max' : '1130px'},
        'max-homepage-box-2' : {'max' : '760px'},
        'max-layout-1' : {'max' : '250px'},
        'max-dayselect-1' : {'max' : '600px'},
        'max-dayselect-2' : {'max': '320px'},
      }
    },

  },
  plugins: [],
}

