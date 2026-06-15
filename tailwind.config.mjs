/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#030712',
        surface: '#0c1526',
        'surface-2': '#111827',
        border: '#1e2d4a',
        accent: '#3b82f6',
        'accent-hover': '#2563eb',
        muted: '#64748b',
        'muted-light': '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
