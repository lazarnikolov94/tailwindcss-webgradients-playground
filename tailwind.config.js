module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    fontWeight: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    webGradient: ['hover'],
  },
  plugins: [
    require('tailwindcss-webgradients'),
  ],
}
