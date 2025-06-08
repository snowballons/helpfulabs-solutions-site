const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF6B35',
        'brand-teal': '#00A896',
        'dark-gray': '#1F2937',
        'medium-gray': '#6B7280',
        'light-gray': '#F9FAFB',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [],
};

export default config;
