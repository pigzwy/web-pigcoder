/** 颜色 token 需与 pages/common.css 的 --pc-* 变量保持一致；改动后执行 pnpm run build:css */
module.exports = {
  content: ['pages/**/*.html', 'pages/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Pigcode 品牌主色（浅色场景）
        'custom-navy': '#18345F',
        'custom-gold': '#E8A825',
        'custom-green': '#4F9462',
        'custom-ink': '#0F172A',
        'custom-muted': '#667085',
        'custom-line': '#E7E5E0',
        'custom-paper': '#FFFFFF',
        'custom-wash': '#FAFAF8',
        // 暗色场景语义色（与 common.css 的 --pc-* 变量保持一致，供 dark:bg-* 引用）
        'custom-navy-deep': '#0A0F1A',
        'custom-surface-dark': '#101724'
      },
      borderRadius: {
        DEFAULT: '6px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        '3xl': '24px',
        full: '9999px'
      },
      fontFamily: {
        headline: ['Space Grotesk', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')]
};
