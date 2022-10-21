/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'nav-dark':'#1F295A',
        'nav-light':'#035671',
        'body-dark':'#374B91',
        'content-dark':'rgb(47, 64, 126, 0.5)',
        'content-light':'rgb(173,219,234,0.5)',
        'block-content-dark':'rgb(36, 46, 95, 0.5)',
        'block-content-light':'rgb(173,219,234,0.5)',
        'wether-dark':'rgb(38, 51, 104)',
        'wether-light':'#ADDBEA',/**block-layer-light table-complaint*/
        'block-env-dark':'rgb(32, 42, 90, 0.6)',
        'block-env-light':'rgb(53,150,181,0.5)',
        'icon-env-dark':'#7A7AFE',
        'icon-env-light':'#3596B5',
        'block-layer-dark':'#202a5a',
        'block-layer-light-op5':'rgb(173,219,234,0.5)',
        'dark-op08':'rgb(0, 0, 0,0.08)',
        'scroll-dark':'#3244ae',
        'scroll-light':'#035671',
        'scroll-b-dark':'#2D3C77',
        'scroll-b-light':'rgb(173,219,234,0.53)',
        'covid-dark':'rgb(32, 42, 90, 0.4)',
        'covid-item-dark':'rgb(32, 42, 90)',
        'covid-item-light':'rgb(255,255,255,0.3)',
        'block-widget-dark':'rgb(31, 41, 88,0.91)',
        'block-widget-light':'rgb(173,219,234,0.5)',
        'table-comp-dark':'rgb(36, 46, 95)',
        'black-op8':'rgb(0, 0, 0,0.08)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
