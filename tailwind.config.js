/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F8F3EB',
        section: '#F4F4F4',
        card: '#FFFFFF',
        primary: {
          DEFAULT: '#1F1F1F',
        },
        secondary: {
          DEFAULT: '#6D6D6D',
        },
        button: {
          DEFAULT: '#C0392B',
          hover: '#A93226',
        },
        borderc: '#E6DED5',
        accent: '#C9B08A',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(31, 31, 31, 0.12)',
        card: '0 4px 24px -4px rgba(31, 31, 31, 0.08)',
        lift: '0 20px 50px -15px rgba(31, 31, 31, 0.18)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        blink: 'blink 1s step-start infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
