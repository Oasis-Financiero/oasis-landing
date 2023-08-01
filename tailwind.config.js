// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  content: [
    './src/**/*.js',
  ],
  theme: {},
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    require("@tailwindcss/custom-forms"), 
  require('tailwindcss-animated')
],
};
