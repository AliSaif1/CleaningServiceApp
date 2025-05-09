// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3b82f6', // blue-500
          600: '#4f46e5', // indigo-600
        },
        accent: {
          50: '#eff6ff',  // blue-50
          100: '#f9fafb', // gray-50
          600: '#4b5563', // gray-600
          700: '#374151', // gray-700
          900: '#111827', // gray-900
        },
        
        gradient: {
          start: '#4f46e5', // indigo-600
          end: '#3b82f6',   // blue-500
        }
      },
      // Optional: If you want to use these gradients frequently
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #4f46e5, #3b82f6)',
      }
    },
  },
  plugins: [],
};