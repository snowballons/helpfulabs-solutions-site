/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B5563', // primary deep teal
          light: '#2B7A86',
          accent: '#FF8A3D', // warm orange
          success: '#2D9A6A', // growth green
        },
        gray: {
          50: '#F7FAFC',
          900: '#1F2937',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '6xl': '1200px',
      }
    },
  },
  plugins: [],
}
