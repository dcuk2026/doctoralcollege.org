/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        surface: '#f8fafc',
        'surface-2': '#f1f5f9',
        border: '#e2e8f0',
        accent: '#2563eb',
        'accent-hover': '#1d4ed8',
        muted: '#64748b',
        'muted-light': '#475569',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
