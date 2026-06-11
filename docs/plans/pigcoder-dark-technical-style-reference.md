# Pigcoder 暗色技术感设计参考

本文档用于把一个偏 Web3 / Bitcoin DeFi 的视觉提示词，转译成 Pigcoder 可用的前台设计参考。

它不是新的品牌重做方案，也不替代以下文档：

- `docs/plans/pigcoder-design-language.md`
- `docs/plans/pigcoder-ui-system-reference.md`

本文档只提供一组可借鉴的暗色技术感、数据界面、精密边框和微光层次规则。使用时必须保持 Pigcoder 的核心定位：

> Pigcoder 是面向开发者的 AI Model Router / API Gateway / Developer Infrastructure 平台。

不要把 Pigcoder 做成 Web3、DeFi、交易所、钱包或链上资产产品。

## 0. Design Taste 校准

按照 `design-taste-frontend` 审查后，本文档只采用“暗色、精密、数据化”的方法，不采用 Web3 叙事。

推荐拨盘：

- `DESIGN_VARIANCE: 5`：允许暗色技术感和不对称数据面板，但不做 Awwwards 式实验视觉。
- `MOTION_INTENSITY: 3`：只允许状态点、hover、focus、复制反馈和少量进入动效。
- `VISUAL_DENSITY: 7`：偏 API platform 和模型目录，不偏宽松品牌大片。

额外硬规则：

- 不使用 Bitcoin orange 作为主视觉。
- 不使用纯装饰 orb、bokeh blob 或无信息价值的 glow。
- 不把 terminal、endpoint、provider 面板做成假装饰；面板里必须是真实接入信息。
- 不使用强循环动画、滚动提示、交易终端隐喻或金融资产隐喻。
- 如果使用暗色背景，正文对比度必须优先于氛围感。

## 1. 当前项目约束

当前官网是纯静态站点，不是 React / Next.js / Vue 工程。

技术栈：

- `HTML`
- `Tailwind CDN`
- `Vanilla JavaScript`
- `common.css` 公共样式
- `theme.js` Tailwind 主题配置
- `components.js` 公共 partial 注入
- `i18n.js` 中英文翻译
- `pricing-cards.js` 价格卡片数据渲染
- `pages/partials/*.html` 公共模板

因此，原 Web3 提示词中的以下实现建议不要直接照搬：

- 不使用 `lucide-react`
- 不使用 `cva`
- 不使用 shadcn/ui 组件模式
- 不新增 React 组件体系
- 不为了视觉效果引入构建工具

如果要落地，优先通过：

- Tailwind utility class
- `common.css` 中的少量语义类
- 现有 partial 模板
- 现有数据驱动渲染逻辑

## 2. 设计方向转译

原提示词的关键词是：

> Bitcoin DeFi、digital gold、blockchain grid、asset safety、mining energy。

Pigcoder 不能使用这些语义。需要转译成：

> Developer Infrastructure、model routing、API endpoint、provider network、runtime status、transparent ratio。

### 2.1 可以保留的视觉气质

- 深色技术背景
- 精密 1px 边框
- 轻量 grid / network texture
- 低透明卡片层次
- 数据面板式布局
- monospace 用于模型名、倍率、endpoint 和代码
- 少量金色微光作为重点
- 状态点和 live badge
- 卡片 hover 时轻微边框高亮

### 2.2 必须去掉的 Web3 语义

禁止在 Pigcoder 官网文案和视觉中强化：

- Bitcoin
- DeFi
- Crypto
- Blockchain
- Wallet
- Token
- Mining
- Ledger
- Asset
- Yield
- Trading
- On-chain
- Digital gold

这些词会改变用户对产品的第一判断，使 Pigcoder 看起来像金融或 Web3 产品。

## 3. Pigcoder 适配后的风格定义

推荐定义：

> Dark Technical API Platform with Model Routing Data Surfaces.

中文表达：

> 克制、精密、有数据密度的暗色开发者 API 平台。

关键词：

- API-native
- Developer-first
- Model Router
- Provider Network
- Endpoint Console
- Data Surface
- Transparent Ratios
- Runtime Status
- Documentation-first

避免关键词：

- Web3
- DeFi
- 金融资产
- 交易终端
- 元宇宙科技感
- 普通 SaaS 营销页

## 4. 色彩适配

原 Web3 提示词以 Bitcoin Orange 为核心。Pigcoder 不应直接采用比特币橙作为主品牌色。

### 4.1 推荐 Pigcoder 暗色 token

```css
:root {
  --pc-void: #070b12;
  --pc-surface: #0d1422;
  --pc-surface-raised: #111c2d;
  --pc-line-soft: rgba(148, 163, 184, 0.18);
  --pc-line-strong: rgba(232, 168, 37, 0.42);
  --pc-text: #f8fafc;
  --pc-muted: #94a3b8;
  --pc-navy: #18345f;
  --pc-gold: #e8a825;
  --pc-gold-soft: rgba(232, 168, 37, 0.14);
  --pc-green: #4f9462;
  --pc-green-soft: rgba(79, 148, 98, 0.16);
}
```

### 4.2 颜色职责

#### 深蓝黑

用于：

- 暗色页面背景
- Hero 深色区域
- 代码块
- 控制台面板
- 文档页深色 callout

注意：

- 深蓝黑应表达基础设施和稳定性。
- 不要让页面变成厚重的“蓝黑科技官网”。

#### 金色

用于：

- 主 CTA
- 标题中的短 highlight
- ratio / model capability 的重点
- hover 边框
- 少量光晕

注意：

- 金色只做重点，不做大面积铺色。
- 光晕透明度必须低，避免变成 Web3 或游戏风。

#### 绿色

用于：

- `Live`
- `Available`
- `Ready`
- `OpenAI compatible`
- 成功状态
- 支持能力标签

注意：

- 绿色是状态色，不是主视觉色。

### 4.3 不建议的颜色用法

避免：

- 大面积 Bitcoin Orange
- 大面积金橙渐变
- 高饱和橙色按钮铺满页面
- 多处强 glow 同时出现
- 黑金金融感

## 5. 背景与纹理

Pigcoder 可以借鉴 Web3 提示词中的“textured void”，但语义应转译为 API 路由网络。

### 5.1 推荐背景

```css
.pc-dark-grid {
  background-image:
    linear-gradient(to right, rgba(148, 163, 184, 0.10) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148, 163, 184, 0.10) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(circle at center, black 35%, transparent 100%);
}
```

用途：

- 首页 Hero
- Endpoint console 背景
- 模型路由关系图
- 文档页顶部背景

不要用于：

- 所有卡片背景
- 长正文区域
- 价格表主体

### 5.2 推荐微光

```css
.pc-gold-glow {
  box-shadow: 0 0 32px -16px rgba(232, 168, 37, 0.55);
}

.pc-green-glow {
  box-shadow: 0 0 24px -16px rgba(79, 148, 98, 0.5);
}
```

使用规则：

- 一个视区内最多 1 到 2 个明显 glow。
- 卡片 hover 可以有轻微 glow，但不能每张卡都常亮。
- glow 服务层级，不服务炫技。

## 6. 字体与文字系统

可以参考原提示词的字体结构。

推荐：

- 标题：`Space Grotesk`
- 正文：`Inter`
- 数据：`JetBrains Mono` 或系统 monospace

### 6.1 使用规则

标题：

- 用于 Hero、section title、卡片标题。
- 保持紧凑、清晰。
- 可以对 1 到 3 个词使用金色强调。

正文：

- 用于解释平台能力。
- 避免形容词堆叠。
- 每段优先说明一个具体能力。

数据字体：

- Endpoint
- Base URL
- Ratio
- Model ID
- Provider label
- Status code
- Request log

示例：

```html
<code class="font-mono text-sm">https://sub2.pigcoder.com/v1</code>
```

## 7. 组件适配

### 7.1 Button

按钮可以借鉴“发光 pill button”，但必须克制。

Primary：

```text
rounded-full
深蓝或金色 CTA
轻微 gold shadow
hover 轻微上浮或加亮
focus-visible 清晰 ring
```

推荐用途：

- 获取 API Key
- 打开控制台
- 查看文档

避免：

- 大面积橙色渐变
- 强 scale 动效
- 多个主按钮同时发光

### 7.2 Card

卡片应像 API data block，而不是 DeFi asset card。

推荐结构：

```text
Card Header
  Provider / Protocol / Channel
Card Body
  Endpoint / Ratio / Models / Capabilities
Card Footer
  Status / CTA / Docs link
```

样式：

- `border: 1px solid rgba(148, 163, 184, 0.18)`
- 深色模式使用 `#0d1422` 或半透明深蓝
- hover 时边框变为金色低透明
- 轻微上浮，不使用夸张 3D

### 7.3 Endpoint Console

这是最值得从 Web3 提示词中强化的组件。

推荐内容：

```text
Pigcoder Gateway
Live

OpenAI      https://sub2.pigcoder.com/v1
Anthropic   https://sub2.pigcoder.com
Gemini      https://sub2.pigcoder.com/v1beta
```

设计重点：

- 使用 monospace。
- 协议 label 左对齐。
- URL 可复制。
- `Live` 使用绿色状态点。
- 背景可以使用 dark surface + subtle grid。

### 7.4 Provider / Model Card

推荐字段：

- Provider
- Protocol
- Tool
- Context
- Ratio
- Capabilities
- Status

推荐标签：

- `OpenAI compatible`
- `Anthropic API`
- `Gemini v1beta`
- `200k context`
- `1M context`
- `thinking`
- `WebSearch`
- `Claude Code only`

不要写成：

- TVL
- APY
- Liquidity
- Yield
- Vault

### 7.5 Channel Ratio Card

价格页可以借鉴精密数据卡，但不要借鉴 DeFi 价格卡。

推荐表达：

```text
Claude Max
Ratio 1:1.5
Models claude-opus-4-8
Capabilities 1M context / thinking / Claude Code only
```

视觉：

- Ratio 使用 mono 和 tabular nums。
- 能力标签低饱和。
- CTA 指向控制台。
- 不做“popular tier”式 SaaS 层级。

### 7.6 Code Block

代码块可以更接近 terminal。

要求：

- 深色背景
- 高对比文本
- 横向滚动
- Copy 按钮
- 复制状态反馈
- endpoint 和 key placeholder 清晰

## 8. 可借鉴的小巧思

以下小巧思适合 Pigcoder，但需要降噪处理。

### 8.1 Grid 代表路由网络

原本的 blockchain grid 可以转译为 model routing network。

使用场景：

- Hero 背景
- Provider matrix
- Request lifecycle

注意：

- 透明度低。
- 不影响正文可读性。

### 8.2 状态点代表服务可用

保留 pulsing dot，但语义是：

- gateway online
- provider available
- route ready
- docs updated

不要暗示链上节点或交易状态。

### 8.3 Corner Accent 代表选中节点

卡片角落可以加入细小金色边角，表达 selected route / active provider。

适合：

- 当前推荐 endpoint
- 当前高亮 provider
- 文档步骤卡片

不要所有卡片都加，避免视觉噪音。

### 8.4 Timeline 代表接入流程

原提示词里的 blockchain timeline 可以转译为 integration timeline。

步骤示例：

```text
1. Create API Key
2. Pick Protocol
3. Replace Base URL
4. Run CLI
5. Inspect Logs
```

### 8.5 水印图标代表能力类型

卡片背景可以使用极低透明度图标或文字水印。

适合：

- Protocol
- Context
- Ratio
- Logs
- CLI

注意：

- 不要影响文字可读性。
- 移动端可以隐藏。

## 9. 不建议参考的部分

以下内容不适合 Pigcoder：

### 9.1 Bitcoin Orange 主视觉

原因：

- 会强烈指向 Bitcoin / Crypto。
- 和 Pigcoder 深蓝 / 金色 / 绿色品牌体系冲突。

处理：

- 使用 Pigcoder gold 替代。
- 保持低透明微光。

### 9.2 Dark Mode Only

原因：

- 当前站点已有 light / dark 主题。
- Pigcoder 仍需要清晰的文档阅读体验。

处理：

- 可以强化暗色模式。
- 不要强制全站只有暗色，除非未来明确品牌重做。

### 9.3 DeFi Pricing Hierarchy

原因：

- Pigcoder 价格页不是投资收益页，也不是套餐页。
- 核心是模型渠道倍率表。

处理：

- 使用 Channel Ratio Catalog。
- 展示倍率、模型、能力和工具适配。

### 9.4 过强动效

原因：

- AI API 平台应该表达稳定和可信。
- 过强 orbit / bounce / scale 会变成 Web3 营销页。

处理：

- 保留 status pulse。
- 保留轻 hover。
- 对 `prefers-reduced-motion` 关闭动画。

## 10. 页面优化参考

### 10.1 首页

可以参考优化：

- Hero 背景加入更细的 routing grid。
- Endpoint console 增强暗色技术感。
- Provider 状态行增加轻微 live / ready 指示。
- Hero 指标卡改成更像 gateway metrics。
- CTA 使用更精密的 pill button 和轻金色 glow。

不要优化成：

- Crypto hero
- 大橙色渐变标题
- 交易终端
- 金融资产面板

### 10.2 价格页

可以参考优化：

- Channel cards 增强数据层级。
- Ratio 使用更明显的 mono 数字。
- 能力标签更像 capability chips。
- Hover 时突出当前卡片边框，而不是加重阴影。
- 增加“透明倍率目录”的技术说明。

不要优化成：

- 三档套餐
- Popular plan
- DeFi APY card
- 投资收益对比

### 10.3 文档页

可以参考优化：

- 代码块更像 terminal。
- 步骤卡片加入轻微 timeline。
- Endpoint 对照表更紧凑。
- Copy 按钮状态更明确。
- 故障排查区域使用 status / error / fix 的结构。

不要优化成：

- 视觉大于内容
- 动效过多
- 文档正文低对比

### 10.4 控制台或后台页面

如果后续做控制台，可以重点参考：

- dark data surface
- table + detail panel
- request logs
- provider status
- usage metrics
- API key management

推荐布局：

```text
Top Bar
Sidebar
Status Summary
Provider / Model Table
Request Logs
Detail Drawer
```

## 11. 给其他 AI 使用的提示词

可以把以下提示词发给其它 AI，用于生成 Pigcoder 体系页面。

```text
请按照 Pigcoder 的 Developer Infrastructure 设计语言设计页面。

产品定位：
Pigcoder 是一个 AI Model Router / API Gateway / 模型聚合平台，不是 SaaS 套餐官网，也不是 Web3 / DeFi 产品。

视觉方向：
使用克制的暗色技术感、精密 1px 边框、低透明数据卡片、subtle routing grid、monospace 数据字体、少量 Pigcoder gold 微光和绿色 live 状态。页面应该像开发者 API 平台和模型路由控制台，而不是金融、交易、钱包或区块链产品。

必须突出：
- API Endpoint
- Provider
- Model
- Protocol
- Ratio
- Context capability
- CLI integration
- API Key
- Request logs
- Transparent billing

颜色：
- 深蓝黑作为暗色背景
- Pigcoder gold 只做 CTA、hover、重点数据
- green 只做 live / available / success 状态
- muted gray 承载说明文字和边框

组件：
- Endpoint console
- Provider row
- Channel ratio card
- Capability chips
- Terminal code block
- Model table
- Integration timeline

禁止：
- Bitcoin / DeFi / Crypto / Blockchain / Wallet / Token / Mining / Trading 文案和视觉隐喻
- 大面积橙色渐变
- 强营销 SaaS pricing
- 过度 glow 和旋转动画
- 牺牲可读性的低对比暗色

技术约束：
当前项目是静态 HTML + Tailwind CDN + Vanilla JS。不要引入 React、Vue、shadcn/ui、cva 或新的构建工具。优先复用 common.css、theme.js、components.js、i18n.js 和现有 partial 结构。
```

## 12. 实施检查清单

设计或实现前检查：

- [ ] 页面第一眼仍然像 AI Model Router / API Gateway。
- [ ] 没有 Web3、DeFi、钱包、交易所气质。
- [ ] 颜色仍符合 Pigcoder 深蓝 / 金色 / 绿色体系。
- [ ] 金色用于重点，不大面积铺满。
- [ ] 文案优先说明 endpoint、protocol、model、ratio、context。
- [ ] 卡片服务信息扫描，而不是只服务视觉效果。
- [ ] 表格和代码块在移动端可读。
- [ ] 所有交互控件有 focus-visible 状态。
- [ ] 动画遵循 `prefers-reduced-motion`。
- [ ] 中英文切换后信息层级不变。

## 13. 总结

这个 Web3 提示词最有价值的不是 Bitcoin 或 DeFi 语义，而是它提供了一套“暗色、精密、发光、数据化”的视觉方法。

Pigcoder 可以借鉴：

- 深色技术背景
- routing grid
- 低透明数据卡片
- 金色微光
- monospace 数据
- live status
- integration timeline
- terminal code block

Pigcoder 必须避免：

- Bitcoin orange 主视觉
- Crypto / DeFi 文案
- 金融资产面板
- 过度动效
- 传统 SaaS 套餐页

最终目标是：

> 让 Pigcoder 更像一个高级、可信、信息清晰的 AI 模型路由基础设施，而不是 Web3 项目或普通 SaaS 官网。
