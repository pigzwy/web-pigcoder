# Pigcoder UI System Reference

这份文档用于指导其它 AI 或开发者按照 Pigcoder 官网首页的设计语言，继续设计 Pigcoder 体系内的其它页面、控制台、文档、后台或工具站页面。

它不是单个页面的执行计划，而是一份可复用的视觉与交互参考。使用它时，应优先保持同一套产品气质：清晰、克制、有数据感、开发者优先。

## 1. 核心定位

Pigcoder 的界面体系服务于一个 AI Model Router / API Gateway / Developer Infrastructure 平台。

设计时必须围绕以下信息展开：

- Model routing
- Provider aggregation
- API endpoint
- API key
- Protocol compatibility
- Model ratio
- Context capability
- CLI integration
- Request logs
- Transparent billing

不要把页面设计成传统 SaaS 营销站。Pigcoder 的体验应该更接近 OpenRouter 一类的开发者 API 平台，而不是 CRM、项目管理、订阅软件或普通企业官网。

## 2. 一句话风格定义

> Pigcoder 是一个清爽、克制、有信息密度的 AI 模型路由平台界面系统。

关键词：

- Developer-first
- Infrastructure
- API-native
- Data-dense
- Clean surface
- Transparent ratios
- Documentation-first
- Low marketing

## 3. 设计原则

### 3.0 Design Taste 拨盘

Pigcoder 的 UI 体系按以下审美拨盘执行：

- `DESIGN_VARIANCE: 5`：版式允许有变化，但不能牺牲稳定、可信和可扫描。
- `MOTION_INTENSITY: 3`：微交互为主，避免持续循环动效和强滚动特效。
- `VISUAL_DENSITY`：按页面类型分档——营销 / 着陆页（首页、价格、文档前言）取 `4–5`，
  保持克制留白；控制台 / 日志 / 计费等数据页可到 `6–7`，以表格和指标为主。
  当前首页已落地为克制档（约 4–5），**不是** cockpit 式高密度。

这些拨盘意味着：

- 首页可以有品牌感，但第一屏必须出现 endpoint、provider、protocol 或 model routing 信息。
- 价格和模型页面应偏目录、表格、数据卡，而不是三栏套餐卡。
- 文档和控制台页面应偏工作界面，而不是展示型 landing page。
- 卡片、按钮、标签和表格必须共享同一套圆角、边框、阴影和状态规则。
- 动效只用于解释状态变化或提升反馈，不用于制造视觉噪音。

### 3.1 少营销，多信息

页面应优先展示开发者做决策需要的信息。

推荐展示：

- 支持哪些协议
- 支持哪些模型
- Endpoint 是什么
- 如何配置环境变量
- 倍率怎么算
- 上下文和工具能力如何
- 哪些 CLI 可以直接接入

避免展示：

- 空泛卖点
- 过度情绪化 slogan
- “为什么选择我们”式营销模块
- 传统三栏 SaaS 套餐包装
- 与模型路由无关的装饰内容

### 3.2 清晰结构优先于视觉炫技

界面应该让用户快速理解系统，而不是先被视觉效果吸引。

使用：

- 明确分区
- 浅边框
- 轻阴影
- 数据卡片
- 代码块
- 表格
- 能力标签

避免：

- 大面积玻璃拟态
- 多层强光晕
- 大面积深蓝渐变
- 过度动画
- 大段营销文案

### 3.3 Pigcoder 品牌保留但克制

Pigcoder 仍使用深蓝、金色、绿色，但它们有明确职责。

不要直接复制 OpenRouter 的紫色品牌。也不要把 Pigcoder 做成蓝金强营销风。

## 4. 色彩系统

### 4.1 主色：深蓝

建议值：

```css
--pc-navy: #18345f;
--pc-navy-deep: #0d1b2a;
```

用途：

- 品牌文字
- Header active 状态
- 主标题重点
- 代码块背景
- 结构性按钮
- 深色模式基础背景

使用方式：

- 作为结构色，而不是大面积营销背景。
- 在浅色界面中少量出现，建立可信和稳定感。

### 4.2 强调色：金色

建议值：

```css
--pc-gold: #e8a825;
```

用途：

- 主 CTA
- 标题 underline
- 倍率强调
- 关键提示
- 少量 icon accent

使用方式：

- 少量使用。
- 不要让金色成为大面积背景。
- 不要同时叠加强光晕，否则会变成传统“蓝金科技风”。

### 4.3 状态色：绿色

建议值：

```css
--pc-green: #4f9462;
```

用途（仅语义，不作装饰 accent）：

- Success / 已完成（如复制成功反馈）
- 可用 / 支持的能力标签（thinking、WebSearch、xhigh、200k 上下文等）
- 请求正常 / 健康状态

使用方式：

- 仅作状态语义色，且必须满足对比度：浅色文字用 `text-green-700`（`#4f9462` 实测白底仅 3.6:1，小字不达标），深色用 `green-400`。
- 不作为主品牌铺色；不用于装饰性「Live」徽章，也不用于每行 / 每个 nav 项前的装饰色点（见反模式清单）。
- 全站**唯一的「装饰性强调色」是金色**；绿色只承担语义。

### 4.4 中性色

建议值：

```css
--pc-ink: #0f172a;
--pc-text: #344054;
--pc-muted: #586273;
--pc-line: #e4e7ec;
--pc-paper: #ffffff;
--pc-wash: #f7f9fc;
```

用途：

- 页面背景
- 卡片背景
- 边框
- 正文
- 辅助说明

中性色是 Pigcoder 体系的主要承载色。它负责让信息密度可读。

## 5. 页面布局语言

### 5.1 页面结构

推荐页面结构：

```text
Header
Hero / Page Intro
Primary Data Panel
Main Content
Secondary Reference / Docs / FAQ
Footer
```

如果是控制台页面，可以使用：

```text
Sidebar / Header
Page title + status summary
Primary table or metric grid
Detail panel
Logs / History / Settings
```

### 5.2 容器宽度

推荐：

- 普通内容：`max-width: 1200px`
- 宽内容：`max-width: 1280px`
- 文档正文：`max-width: 768px` 到 `960px`
- 表格页：允许更宽，但必须保持左右留白

### 5.3 间距

推荐：

- 页面大区块：`48px` 到 `80px`
- 卡片内边距：`20px` 到 `32px`
- 小组件间距：`8px` 到 `16px`
- 表格行高：保持可读，不要过紧

页面应有足够留白，但不应像普通 SaaS landing 那样过度稀疏。

## 6. 组件体系

### 6.1 Header

Header 应保持低干扰。

包含：

- Logo
- 首页
- 文档
- 价格
- 语言切换
- 主题切换
- 控制台入口

风格：

- 白色或轻透明背景
- 细边框
- 当前页面 active 状态清晰
- 高度约 `56px`

不要让 Header 过重，也不要使用大面积深色背景。

### 6.2 Hero

Hero 应该展示平台定位和关键接入信息，但保持克制（最多 4 个文本元素）。

推荐内容：

- kicker 徽章（可选，1 个）
- 大号标题（≤2 行，可含少量金色 underline 重点）
- 简短说明（≤20 词 / ≤4 行）
- 一组 CTA（主：获取 API Key；次：查看接入文档）
- 右侧单一视觉：一个「真实可执行命令」的终端示例（`.hero-terminal-card`）

推荐标题风格：

- 大号粗体
- 深蓝或深色文字
- 少量金色 underline
- 不使用大面积渐变字

注意（旧版做法已废弃）：

- 不要再把 Endpoint 面板 + Provider 状态行 + 终端 + Live 徽章全部堆进 Hero。
  Endpoint 列表移到 Hero 下方独立「端点带」，Provider / 渠道移到「覆盖区」。
- 终端只展示真实命令（如 `export ANTHROPIC_BASE_URL=…` 然后 `claude`），
  不要用 `<div>` 伪造「Live 网关面板 / 假 dashboard」。
- 装饰仅保留极克制的单个金色微光；不要网格十字线、多层光晕。

### 6.3 Endpoint Card

Endpoint 卡片是 Pigcoder 体系的重要组件。

推荐结构：

```text
Endpoints
OpenAI     https://sub2.pigcoder.com/v1
Anthropic  https://sub2.pigcoder.com
Gemini     https://sub2.pigcoder.com/v1beta
```

设计要求：

- 使用 monospace 显示 URL
- 协议 label 使用小号 uppercase
- 长 URL 必须可换行或横向滚动
- 可选 copy 按钮

### 6.4 Provider 覆盖与渠道卡（替代旧「带色点状态行」）

展示「支持哪些 Provider / 工具」时，优先用**真实品牌 logo + 渠道对比卡**，不要用带装饰色点的状态行。

厂商识别（`.provider-logos` / `.provider-logo-svg`）：

- 内联**真实品牌 SVG**（Simple Icons 官方路径），按**真实品牌色**着色，作为页面的彩色点缀来源：
  Anthropic 锈红 `#D97757`（深浅通用）、Gemini Google 蓝 `#4285F4`（深色用更亮的 `#6BA2FF`）；
  OpenAI 本为单色品牌，随主题在墨黑 / 近白间自适应。**每个品牌色都需深色模式安全变体**。
- 不要手绘五角星等假 logo。OpenAI 已被 Simple Icons 移除，取其移除前的 `simple-icons@9` 官方单路径自托管。
- 无对应官方图标的（如智谱）用文字标（中性色），不强凑。

渠道能力（`.channel-grid` / `.channel-compare`）：

```text
Claude            [Anthropic]
上下文 / 能力       200k / 1M · thinking · WebSearch
适用工具            Claude Code
```

- 每卡 = 渠道名 + 协议 pill + 「上下文 / 能力」「适用工具」规格行。
- 移动端单列、**不横滚**（旧版横滚路由表已废弃）。

仅当控制台 / 日志页确需状态行时，色点才可表达**真实语义状态**（在线 / 异常），不得作每行装饰。

### 6.5 Channel Ratio Card

价格页和模型渠道页应使用 Channel Ratio Card，而不是传统 SaaS Pricing Card。

推荐结构：

```text
Claude
Claude Max

Ratio
1:1.5

Channel quota
0.67$/元

Models
claude-opus-4-8
claude-sonnet-4-6

Capabilities
200k context
1M context
thinking
WebSearch
Claude Code only
```

设计要求（与已实现的 `.channel-card` / `.channel-ratio` 一致）：

- Ratio 使用 tabular nums，并作为每卡**唯一金色焦点**（`.channel-ratio strong` 金色）。
- Provider 徽章使用**中性底色**，不按厂商做绿 / 蓝色编码。
- 模型用 pill 标签，**不加装饰色点**。
- 能力标签用绿色语义色（浅色 `text-green-700` 保证对比度）。
- CTA 用「充值 / 立即前往控制台」，不写成「选择套餐」。

### 6.6 Capability Card

用于展示协议、上下文、倍率、日志、CLI 等能力。

推荐标题：

- 协议兼容
- 模型渠道
- 上下文能力
- 倍率透明
- CLI 优先
- 请求日志

避免标题：

- 极速响应
- 高可用性
- 数据安全
- 成本优化
- 生产力加速

不是这些能力不能存在，而是它们太像普通 SaaS 营销卖点。应尽量转译成开发者可判断的具体能力。

### 6.7 Code Block

代码块必须清晰可读。

推荐：

```bash
export OPENAI_API_KEY="sk-pig-xxxx"
export OPENAI_BASE_URL="https://sub2.pigcoder.com/v1"
```

设计要求：

- 深色背景
- monospace 字体
- 横向滚动
- 复制按钮
- 复制状态反馈

### 6.8 Table

表格适合展示模型、协议、倍率、工具兼容关系。

表格字段示例：

- Provider
- Channel
- Protocol
- Base URL
- Models
- Ratio
- Context
- Capabilities
- Tools

设计要求：

- 表头清晰
- 数字列使用 tabular nums
- 长模型名允许换行
- 移动端允许横向滚动

### 6.9 实际组件类库（与 `common.css` 对应，可直接复用）

下表是首页重设计后已落地、可在其它页面直接复用的类。新页面应优先复用这些类，而不是另造一套。

| 模式 | 类名 | 说明 |
| --- | --- | --- |
| Hero 真实终端 | `.hero-terminal-card` `.hero-terminal-lg` | 暗色终端，只放真实可执行命令；深浅色下都是暗色「设备」，非整页主题翻转 |
| 端点带 | `.endpoint-band` `.endpoint-chip` | 三协议真实 Base URL，整块为 `<button>` 可点击复制 |
| 能力区 | `.cap-grid` `.cap-primary` `.cap-row` | 1 个主面板 + N 条支撑行，替代等分功能卡 |
| Provider logo | `.provider-logos` `.provider-logo-svg` + `.logo-anthropic/.logo-openai/.logo-gemini` `.provider-mono` | 内联品牌 SVG + 品牌色点缀 |
| 渠道对比卡 | `.channel-grid` `.channel-compare` `.channel-pill` `.channel-specs` | 渠道名 + 协议 pill + 规格行；移动端单列、不横滚 |
| 价格卡 | `.channel-card` `.channel-ratio`（金色 ratio 焦点） | 由 `pricing-cards.js` 数据驱动 |
| 接入步骤 | `.flow-stepper` `.flow-step-item` | 编号 + 顶边线 stepper，非等分卡 |
| CTA 面板 | `.api-cta-panel` | 单一 CTA 意图 |
| 按钮 | `.btn-primary` `.btn-primary-gold` `.btn-secondary` | 已移除 `.btn-shine` 扫光效果 |
| 进入动效 | `.fade-up`（IntersectionObserver 触发） | 进入视口淡入，遵循 `prefers-reduced-motion` |

### 6.10 单一 accent 锁定与配色铁律

- **唯一的装饰性强调色 = 金色 `#E8A825`**（主 CTA、ratio 焦点、少量关键 icon）。
- **绿色仅语义**（成功 / 可用 / 已复制），浅色文字用 `text-green-700` 保对比度，深色用 `green-400`。
- **底色近黑 / 近白，禁纯黑白**：深 `#0D1B2A`、浅 `#F7F9FC` + 白卡；不要 `#000` / `#fff`（损层次、刺眼）。
- **页面的「彩色」来自真实品牌 logo**（品牌色 + 深色安全变体），不是给功能图标随机上色；功能图标用金色或中性，避免彩虹图标。
- 中性正文 / 辅助色：`--pc-muted: #586273`（已为 AA 调过，勿退回旧的 `#667085`）。

### 6.11 本轮重设计已移除的反模式（务必避免复活）

- ❌ `<div>` 拼的假终端 / 假 dashboard / `Live` 状态徽章
- ❌ 装饰性光晕 `.orb-*`、Hero 网格十字线 `.hero-grid-lines`
- ❌ 6 张等宽等重功能卡（改 1 主 + N 次）
- ❌ 每个 section 都加 eyebrow（全页上限 ≤ ⌈section 数 / 3⌉，Hero kicker 计 1）
- ❌ 手绘 SVG 假 logo（用真实品牌 SVG）
- ❌ `.btn-shine` 对角扫光
- ❌ 装饰性状态色点（模型 chip 圆点、provider 行 / nav 项前的色点）
- ❌ 深蓝 + 金 + 绿三色同时抢 accent（金色唯一装饰，绿色仅语义）
- ❌ 路由表在移动端强制横向滚动（改渠道卡单列）
- ❌ 重复 CTA 意图（同一「进控制台」意图全站用同一标签）

### 6.12 字体 / 资源 / 复制交互实现约定

- **自托管字体，不引 Google Fonts `<link>`**：Inter、Space Grotesk 取 latin + latin-ext woff2；
  Material Symbols 图标字体先**实例化**到 `wght 400 / FILL 0`，再按站内实际用到的图标**子集化**
  （1.1MB → 约 4KB），`@font-face` 写在 `common.css` 顶部。
- 首屏 `<link rel="preload" as="font" crossorigin>` 预载两个 latin woff2。
- `logo.jpg` 用 256×256 优化版（兼作 favicon / og:image），不要直出 2048 原图。
- **资源版本号** `?v=YYYYMMDD-xxx` 做缓存击穿；改动 CSS / JS 后必须同步 bump（含 `components.js` 的 `ASSET_VERSION`）。
- **复制交互**：元素带 `data-copy`（多行用 `&#10;` 表换行）+ 内部 `[data-copy-icon]` 在 `content_copy` ↔ `check` 间切换；
  同时把 `aria-label` 在 `common.copy` ↔ `common.copied` 间切换给屏幕阅读器反馈。
- **滚动相关**一律用 `IntersectionObserver`（滚动监听、scroll-spy、回到顶部哨兵），**禁用 `window.addEventListener('scroll')`**。

## 7. Typography

推荐字体：

```css
font-family: Inter, sans-serif;
```

标题可使用：

```css
font-family: "Space Grotesk", Inter, sans-serif;
```

使用规则：

- H1：大号、紧凑、强层级
- H2：用于页面大区块
- H3：用于卡片和小节
- 正文：保持 `line-height` 充足
- 辅助文本：灰色，但必须保持可读
- 代码：使用 monospace

标题应使用 `text-wrap: balance` 或类似策略，避免孤行。

## 8. 文案语气

### 推荐语气

- 直接
- 技术明确
- 信息优先
- 少形容词
- 少口号

推荐表达：

- “统一模型路由，兼容 AI 编程工具。”
- “按渠道查看倍率、模型和上下文能力。”
- “替换 Base URL 即可接入 OpenAI 兼容工具。”
- “支持 Claude Code、Codex CLI、Gemini CLI。”

### 避免语气

避免：

- “开启智能编程新时代”
- “最强 AI 战力”
- “生产力加速引擎”
- “企业级全方位赋能”
- “选择适合你的订阅套餐”

这些表达会让页面变成普通 SaaS 或营销官网。

## 9. 暗色模式

暗色模式应服务可读性，不应回到旧版强科技风。

建议：

- 背景使用深蓝黑
- 卡片使用深色 surface
- 边框使用低透明白色
- 金色仍作为少量强调
- 绿色作为状态色

避免：

- 大面积霓虹光晕
- 多层 blur
- 强渐变背景
- 低对比正文

## 10. 移动端规则

移动端必须优先保证信息可读。

要求：

- Header 控件不遮挡内容
- Endpoint 长 URL 可换行或横向滚动
- 卡片单列排列
- 表格允许横向滚动
- 按钮高度不小于 `44px`
- 模型标签可以换行
- 文档代码块可滚动

不要为了桌面视觉牺牲移动端接入效率。

## 11. 可访问性规则

必须满足：

- 页面有 skip link
- 交互元素使用 `button` 或 `a`
- icon-only button 有 `aria-label`
- FAQ 使用 `button` + `aria-expanded`
- Modal 支持 Escape 关闭
- Focus 状态清晰可见
- 动画遵循 `prefers-reduced-motion`
- 图片有 `alt`
- 装饰图标使用 `aria-hidden="true"`

## 12. 页面类型参考

### 12.1 模型列表页

页面目标：

让开发者快速比较 Provider、模型、上下文和能力。

推荐模块：

- Provider filter
- Model table
- Capability tags
- Protocol support
- Context length
- Tool compatibility

### 12.2 API Key 页面

页面目标：

管理密钥、分组、权限和使用状态。

推荐模块：

- Key list
- Group badge
- Last used time
- Usage summary
- Create key modal
- Copy key interaction

### 12.3 Usage / Logs 页面

页面目标：

查看请求、消耗、错误和模型路由。

推荐模块：

- Request table
- Status badge
- Model / channel column
- Token / cost column
- Latency column
- Error detail drawer

### 12.4 Billing 页面

页面目标：

展示余额、充值、倍率和消耗。

推荐模块：

- Balance card
- Channel ratio table
- Recharge CTA
- Usage history
- Redeem code

不要把 Billing 页面设计成传统订阅套餐页。

### 12.5 Docs 页面

页面目标：

让开发者完成接入。

推荐模块：

- Endpoint quick reference
- API Key setup
- CLI setup
- Code examples
- Troubleshooting
- Copy buttons

## 13. 给其它 AI 的简短提示词

可以把下面这段直接给其它 AI：

```text
请按照 Pigcoder 的统一 UI 设计语言设计页面。

Pigcoder 是一个 AI Model Router / API Gateway / Developer Infrastructure 平台，不是传统 SaaS 官网。页面要像 OpenRouter 一类开发者 API 平台：清爽、克制、有信息密度、文档优先、价格透明。

视觉上保留 Pigcoder 品牌色，但使用克制：
- 深蓝用于品牌、结构和代码块。
- 金色用于少量 CTA、标题 underline、倍率重点。
- 绿色用于 Live、成功、可用状态。
- 主体使用白色、浅灰、浅蓝灰、低饱和边框。

页面内容优先展示 Endpoint、Provider、Model、Ratio、Context、Capability、API Key、Base URL、CLI、Request logs。避免传统 SaaS 营销话术，不要做“选择套餐 / Why us / 生产力加速”式页面。

组件风格使用浅边框、轻阴影、小圆角、清晰标签、代码块、表格和数据卡片。价格相关页面应设计成模型渠道倍率表，而不是 SaaS pricing card。文档和控制台页面应强调开发者接入效率。

Design taste guardrails：
- 不要使用 AI 紫色渐变、三张等宽功能卡、泛玻璃拟态或装饰性光球。
- 不要把页面做成 Web3、DeFi、钱包、交易所或普通 SaaS 套餐页。
- 不要把卡片套进卡片；页面区块用留白、分隔线、背景带或表格组织。
- 不要让所有区块使用同一种卡片布局；模型、价格、文档步骤和日志应有不同的信息形态。
- 所有 endpoint、model ID、ratio、API key placeholder、request log 使用 monospace。
- 装饰性强调色只用金色；绿色仅作语义（成功 / 可用 / 已复制）。底色用近黑 #0D1B2A 与近白 #F7F9FC，不要纯黑白。
- 页面的彩色来自真实品牌 logo（按品牌色 + 深色安全变体），不要给功能图标随机上色，也不要手绘假 logo。
- 不要假终端 / 假 dashboard / Live 徽章 / 装饰光晕 / 网格十字线 / 装饰状态色点 / 按钮扫光。
- eyebrow（小号 uppercase 标签）全页上限 ⌈section 数 / 3⌉；同一意图的 CTA 全站只用一个标签。
- 滚动交互用 IntersectionObserver，不要 `window` scroll 监听。
```

## 14. 快速检查清单

设计完成后检查：

- [ ] 第一眼能看出这是 AI Model Router / API Gateway。
- [ ] 页面没有变成传统 SaaS 营销页。
- [ ] 页面直接展示开发者关心的信息。
- [ ] Endpoint、模型、协议、倍率或能力标签至少出现一种。
- [ ] Pigcoder 深蓝 / 金色 / 绿色存在但克制。
- [ ] 价格表达是“渠道倍率”，不是“套餐销售”。
- [ ] 文案直接、技术明确、少口号。
- [ ] 移动端可读。
- [ ] 暗色模式不过度霓虹。
- [ ] 交互元素可访问。
- [ ] 没有 AI 紫色渐变、三张等宽功能卡、泛玻璃拟态或装饰性光球。
- [ ] 卡片没有无意义套嵌，区块层级清晰。
- [ ] 数字、倍率、模型 ID、endpoint 和日志使用 monospace。
- [ ] 装饰性强调色只有金色；绿色仅语义且对比度达标（浅色 `text-green-700`）。
- [ ] 底色为近黑 / 近白（#0D1B2A / #F7F9FC），无纯黑白。
- [ ] 彩色来自真实品牌 logo（品牌色 + 深色变体），无手绘假 logo、无彩虹功能图标。
- [ ] 无假终端 / Live 徽章 / 装饰光晕 / 网格线 / 装饰色点 / 按钮扫光。
- [ ] eyebrow 总数 ≤ ⌈section 数 / 3⌉；无重复 CTA 意图。
- [ ] 字体自托管（无 Google Fonts 外链）；滚动交互用 IntersectionObserver。
