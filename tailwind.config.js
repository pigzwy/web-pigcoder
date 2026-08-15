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
        'custom-ink': '#201F1A',
        'custom-muted': '#6E6B62',
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
        /* CJK 栈显式声明：中文不再掉进未知系统字体（伪粗体/随机字形是"不细腻"的元凶之一） */
        headline: ['Space Grotesk', 'Inter', 'PingFang SC', 'HarmonyOS Sans SC', 'MiSans', 'Microsoft YaHei UI', 'Microsoft YaHei', 'Noto Sans CJK SC', 'sans-serif'],
        body: ['Inter', 'PingFang SC', 'HarmonyOS Sans SC', 'MiSans', 'Microsoft YaHei UI', 'Microsoft YaHei', 'Noto Sans CJK SC', 'sans-serif'],
        label: ['Inter', 'PingFang SC', 'HarmonyOS Sans SC', 'MiSans', 'Microsoft YaHei UI', 'Microsoft YaHei', 'Noto Sans CJK SC', 'sans-serif'],
        mono: ['ui-monospace', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace']
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')]
};
