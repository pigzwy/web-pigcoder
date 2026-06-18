tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Pigcoder 品牌主色（浅色场景）
        "custom-navy": "#18345F",
        "custom-gold": "#E8A825",
        "custom-green": "#4F9462",
        "custom-ink": "#0F172A",
        "custom-muted": "#667085",
        "custom-line": "#E4E7EC",
        "custom-paper": "#FFFFFF",
        "custom-wash": "#F7F9FC",
        // 暗色场景语义色（与 common.css 的 --pc-* 变量保持一致，供 dark:bg-* 引用）
        "custom-navy-deep": "#0D1B2A",
        "custom-surface-dark": "#111C2D"
      },
      borderRadius: {
        DEFAULT: "6px",
        lg: "10px",
        xl: "12px",
        "2xl": "16px",
        full: "9999px"
      },
      fontFamily: {
        headline: ["Space Grotesk", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"]
      }
    }
  }
};
