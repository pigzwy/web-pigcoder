# Pigcode 全站设计方向：「纸 · 墨 · 金」

> 本文档是 feat/design-revamp 分支的**权威设计方向**。与 `STYLE_TRANSFER_GUIDE.md` 冲突之处，以本文档为准（该指南描述的是改版前的旧风格，改版完成后需重新生成）。
>
> 定位不变：面向开发者的 Model Router / API Gateway，「数据产品」气质——像一份印刷精良的技术年鉴，而不是 SaaS 落地页。
>
> 参考基准：cch-plus.com/models-catalog 的克制度与数据密度（截图对比存档见分析记录），但**不抄它的无品牌感**——Pigcode 保留猪标 + 金色的品牌温度。

## 0. 一句话方向

**暖纸做底，近黑做墨，金色独占彩色，数据全部等宽。**

三个字记住：**纸**（暖米白的面）、**墨**（暖近黑的字）、**金**（唯一的强调色）。
其余一切颜色只允许来自两处：厂商真实 logo、语义状态（绿=成功/降价，红=错误/涨价）。

## 1. 色彩 Token（light）

现状问题：面是暖的（#FAFAF8 / #E7E5E0），字是冷的蓝黑 slate（#0F172A / #586273），冷暖打架；能力标签绿色泛滥，装饰性绿色违反了自家"绿仅语义"的规则。

| Token | 旧值 | **新值** | 说明 |
|---|---|---|---|
| `--pc-ink` | `#0f172a`（冷） | **`#201f1a`** | 正文近黑，转暖 |
| `--pc-muted` | `#586273`（冷） | **`#6e6b62`** | 次要文字，转暖 |
| `--pc-line` | `#e7e5e0` | 不变 | 已是暖灰 |
| `--pc-line-strong` | `#d8d5cf` | 不变 | |
| `--pc-paper` | `#ffffff` | 不变 | 卡片面 |
| `--pc-wash` | `#fafaf8` | 不变 | 页面底（浅区） |
| `--pc-wash-strong` | `#f1f0ec` | 不变，**但提升为内容区主底色** | 白卡靠底色浮出来，不靠边框 |
| `--pc-gold` | `#e8a825` | 不变 | 唯一强调色 |
| `--pc-navy` `#18345f` | 光模式强调色之一 | **降级：light 模式不再用于文字/按钮/下划线** | 只保留为暗面颜色（暗色模式地面、首页深色图示卡） |
| 绿 `#4f9462` | 能力标签、对勾、"支持 xx" | **只做语义**：成功、已复制、降价箭头 | 装饰性绿色全部清除 |

暗色模式维持现有身份：深蓝地面（`#0D1B2A` 系）+ 白墨 + 金，token 对应微调即可，不单独设计。

**主按钮**：light = 墨色药丸（`--pc-ink` 底 + 白字），dark = 白/10 描边或白底墨字。金色**不再做按钮底色**（首页"获取 API Key"改墨底），金只出现在：logo、focus ring、selection、Thinking 类特性 chip、悬停微光。金是点睛，不是涂料。

## 2. 字体系统

```js
// tailwind.config.js
fontFamily: {
  headline: ['Space Grotesk', 'Inter', 'PingFang SC', 'HarmonyOS Sans SC', 'MiSans', 'Microsoft YaHei UI', 'Noto Sans CJK SC', 'sans-serif'],
  body:     ['Inter', 'PingFang SC', 'HarmonyOS Sans SC', 'MiSans', 'Microsoft YaHei UI', 'Noto Sans CJK SC', 'sans-serif'],
  mono:     ['ui-monospace', 'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', 'monospace'],
}
```

- **Latin 大标题**：Space Grotesk 保留（品牌声音），但字重 **600 → 500**，尺寸放大一档（首屏 h1 上到 `text-6xl` 级），Latin 字距 -0.02em。
- **CJK 硬规则**（双语站的"细腻"主要死在这里）：
  1. 汉字**永远不用负字距**——`html[lang^=zh] .font-headline { letter-spacing: 0 }`；
  2. 标题**禁止在词中间折行**（现状"兼容"、"模型"被拦腰截断）：中文标题加 `word-break: keep-all; text-wrap: balance;`，关键词组用 `<span class="whitespace-nowrap">` 包住；
  3. 显式声明 CJK 字体栈（如上），杜绝掉进未知系统字体 + 伪粗体合成；
  4. 中文标题字重上限 600，正文 400。
- **等宽字体的领地**（全站铁律）：模型 ID、价格、倍率、上下文长度、统计大数字、日期、commit/版本号、代码——全部 `font-mono` + `tabular-nums`。数字是这个产品的主角，等宽是"数据产品"气质的一半。
- **字重纪律**：14px 以下的文字**只允许 400/500**；600+ 只给 ≥16px 的标题和数据数值。现状的"10px + 700 + 大写 + 字距"组合全部废除（页脚 OFFICIAL 标签、微标签等）。

## 3. 组件语言

**Chip / 标签**（全站统一一种解剖）：
- 无边框、`rgba(32,31,26,0.05)` 浅灰底、`0.8rem/500` 深灰字、圆角 full、内边距 `0.3rem 0.75rem`、图标 `0.9rem` / stroke 1.5；
- **每张卡片最多一枚彩色 chip**：金色 Thinking/特性位（金 10% 底、金深字、无边框）；
- 类型徽章、能力标签、模型 ID chip 共用同一套中性样式，靠图标区分，不靠颜色区分。

**卡片**：白面、`rounded-2xl`（16px）统一、1px `--pc-line` 细边、阴影仅 `0 1px 2px rgba(32,31,26,0.04)`；悬停 `translateY(-1px)` + 边线加深，**不做大阴影抬升**。同一网格内卡片**等高**：标题单行截断、简介固定 clamp 行数、页脚钉底、溢出收进 "+N"。

**按钮**：primary 墨色药丸；secondary 白面细边；ghost 纯文字。圆角统一 full（药丸）或 12px，两档，不再混用。

**图标**：线性图标 stroke 1.5；Material Symbols 统一 `font-variation-settings: 'wght' 300`；图标永远比同行文字大 1–2px，不许比文字重。

**装饰预算**：每屏**最多一个**装饰装置。全站清除：点阵背景（deco-dots）、金色下划线（brand-emphasis 下划线形态）、多 orb 叠加。允许保留：≤4% 透明度的单个暖色 orb。每页的"那一个装置"：
- 首页 hero → 深色路由图示卡（已有，是好资产）；
- models 页 hero → 厂商 logo 星轨（用现有 `pages/model-icons/` 资产做，squircle 白底小方块 + 虚线轨道 + 缓慢漂浮，`prefers-reduced-motion` 静止）；
- pricing / docs → 不需要装置，白纸即可。

## 4. 数据可信层（从 CCH 学的最值钱的一课）

- 日期本地化：`2026-07-10` → 中文态"2026年7月10日"、英文态"Jul 10, 2026"；
- models / pricing 网格底部加一行**数据新鲜度条**：`数据更新于 X · 下载 models.json · JSON Schema`（等宽、muted 色）；
- 数字必须真实一致：hero 写死的 4,430 与实际渲染的 66 矛盾，要么灌全量数据，要么文案改"精选旗舰模型"并同步 meta description；
- 远期：价格历史 → 涨降价箭头（红↑绿↓，语义色的正当用法）。

## 5. 分页面改造清单

**Phase 0 — Token 层**（common.css `:root` + tailwind.config.js）：
ink/muted 转暖、字体栈补 CJK、mono 栈、CJK 标题规则类、chip/按钮/卡片基类重写。build:css 重新产出。

**Phase 1 — models.html**（试点页，改动最密）：
- chip 全面中性化，只留金 Thinking；删"官方"标签；
- 卡片等高（h3 单行 truncate + title、intro clamp 2、p-5→p-6、rounded-xl→2xl）；
- 页脚一行化 + 日期本地化 + 价格/Ctx 等宽；
- hero：标题放大、去下划线去点阵、统计改"小标签在上 + 大等宽数字在下"、右侧加 logo 星轨；
- 筛选栏包进白面板（rounded-2xl + 细边 + sticky），行样式改软药丸，藏原生 checkbox；
- 目录区底色换 `--pc-wash-strong`；
- 数据新鲜度条；修 4,430/66 矛盾。

**Phase 2 — index.html**：
- hero 中文标题修折行（keep-all + balance + nowrap 词组）、去双金下划线、去点阵；
- "获取 API Key"金底 → 墨底；绿对勾 → 中性图标或墨色；
- 保留深色路由图示卡为唯一装置；模型 ID chip 沿用新中性 chip。

**Phase 3 — pricing.html**：
- "支持 thinking / 支持 WebSearch"绿字 → 中性 chip；
- 价格数字全部等宽加大；卡片圆角/阴影对齐新规；FAQ 手风琴沿用。

**Phase 4 — docs.html**：
- 绿色提示条 → 暖灰底 + 金色左线的提示条（金的正当出场）；
- 代码块/复制按钮对齐新 chip 语言；其余基本继承 token 层。

**Phase 5 — 收尾**：
- 暗色模式全页回归检查（token 对应关系）；
- 重新生成 STYLE_TRANSFER_GUIDE.md；
- 视觉回归截图（light/dark × zh/en × 4 页）。

## 6. 判断标准（改完一页问自己）

1. 这一屏里除了厂商 logo 和语义状态，还有没有第三种彩色？有 → 不合格。
2. 有没有 14px 以下的粗体？有 → 不合格。
3. 中文标题有没有词被折断、有没有负字距？有 → 不合格。
4. 同一行卡片底边和价格行是不是严格对齐？不是 → 不合格。
5. 这一屏的装饰装置超过一个了吗？超过 → 删到剩一个。
6. 所有数字、ID、日期是等宽字体吗？不是 → 改。
