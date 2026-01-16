module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",  // Add Flowbite support
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),  // Enable Flowbite
  ],
};