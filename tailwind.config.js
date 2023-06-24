/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    fontFamily:{
      //kaushan
      "ubuntu":['Ubuntu', 'sans-serif'],
      /*
      "inter":['Inter', 'sans-serif'],
      
      "mont":['Montserrat', 'sans-serif'],
      
      "sans":['Open Sans', 'sans-serif'],
      
      "roboto":['Roboto', 'sans-serif'],
      */
    },

    boxShadow:{
      'custom-light': "5px 5px 10px #0C0F19",
      'custom-dark': "3px 3px 6px #6885E5"
    },

    extend:{
      colors:{
        blue: {
          DEFAULT: "#288EFD"
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        }
      }
    }
  },
  varients:{
    extend:{
      boxShadow:["dark"]
    }
  },
  plugins: [],
}



/**
 colors: {
        dark: "#121435", //#32424a //#0e0220 //#142d4c
        light: "#e1f6f4", //#d7fbf6 //#e1f6f4
        primary: "#B63E96", //240,86,199
        primaryDark: "#58E6D9", //80,230,217
        linkedIn: "#0961B8",
        whatsapp: "#2DC848",
        discord: "#525DE9",
        twitter: "#1C99E6",
      },
 */