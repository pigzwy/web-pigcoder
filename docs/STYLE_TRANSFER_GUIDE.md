# Pigcoder 风格迁移完整包（完全自包含版）

> **一个文件搞定。** 把本文档整个发给 AI，AI 即获得 Pigcoder 首页风格的全部设计原则、配色 token、组件代码（完整）与版式范本（完整），可据此改造任意现有项目。
>
> **无需再单独附 `index.html` 或 `common.css`——它们已完整收录在附录 D / E。**
>
> 文档结构：
> - **第一部分**：使用方法 + 执行提示词（直接复制填空）
> - **第二部分**：风格速览 + 硬性规则（快速锚点）
> - **第三部分（附录 A–E）**：5 个参考文件的**完整原文**

---

# 第一部分：使用方法与提示词

## 如何使用

1. 把本文档整个发给你的 AI（Claude / Cursor / ChatGPT 等）。
2. 复制下方「执行提示词」，填好你的项目信息（技术栈 / CSS 方案 / 路径 / 目标页面）。
3. 发送。AI 会按「分阶段」流程改造，每阶段等你确认。

## 执行提示词（直接复制，填空后发送）

```
我刚发给你一份《Pigcoder 风格迁移完整包》文档，请先通读全文。

我要把一个现有项目的 UI 改造成与 Pigcoder 首页一致的风格
（克制、信息密度高、开发者 API 平台美学，刻意避开 SaaS 落地页套路）。

文档第三部分（附录）包含了完整的设计原则、配色 token、组件 CSS 与版式范本，
请把它们作为风格的「事实依据」，不要凭空想象。严格遵守文档「第二部分：硬性设计规则」。

## 我的现状
- 技术栈：[填，如 React + Tailwind / Vue / 纯 HTML…]
- CSS 方案：[填，如 Tailwind / 原生 CSS / CSS-in-JS / UnoCSS]
- 项目路径：[填]
- 想先改的页面：[填，如首页]

## 任务（分阶段，每阶段等我确认再做下一阶段，不要一次全改）

阶段 1 — 评估与映射（只读，不动代码）：
  (a) 现状风格诊断（列出我的项目里有哪些「AI 模板感 / SaaS 套路」要清理）；
  (b) 把附录 C 的配色 token + 附录 D 的 CSS 变量，映射到我的技术栈，
      产出可直接落地的配置（如 Tailwind 的 tailwind.config、或 CSS 变量文件）。

阶段 2 — 设计层：
  建立我项目的 design token + 搭基础组件（按钮 / 卡片 / 代码块 / 端点带），
  风格对齐附录 D 的组件类（.btn-primary / .endpoint-chip / .cap-* 等）。

阶段 3 — 页面层：
  按附录 E（index.html）的版式思路逐页改造，每改一处给我前后对比。

先做阶段 1，不要直接动代码。
```

---

# 第二部分：风格速览与硬性规则

## 风格速览

**一句话**：克制、信息密度高、开发者优先的「API 基础设施平台」美学——像 OpenRouter / Vercel Docs / Stripe API，而不是 SaaS 落地页。

**配色**（完整 token 见附录 C / D）：

| 角色 | 颜色 | 值 |
|------|------|----|
| 主色（navy） | 深蓝 | `#18345F` |
| 强调 / CTA（gold） | 金 | `#E8A825` |
| 状态 / 成功（green） | 绿 | `#4F9462` |
| 正文（ink） | 近黑 | `#0F172A` |
| 次要文字（muted） | 灰 | `#667085` |
| 分割线（line） | 浅灰 | `#E4E7EC` |
| 卡片底（paper） | 白 | `#FFFFFF` |
| 页面底（wash） | 极浅蓝灰 | `#F7F9FC` |
| 暗色主背景（navy-deep） | 深 | `#0D1B2A` |
| 暗色卡片面（surface-dark） | 深 | `#111C2D` |

**字体**：`Inter`（正文）+ `Space Grotesk`（标题），标题字距收紧 `-0.045em`，数字 `tabular-nums`。

**审美拨盘**：`DESIGN_VARIANCE: 5`、`MOTION_INTENSITY: 3`、`VISUAL_DENSITY: 4–7`（营销页 4–5，数据页 6–7）。

**版式**：非对称 Hero（左文案 + 右真实可复制终端）→ 端点带（三协议真实 Base URL）→ 能力区（1 主面板 + 支撑行，**非等分卡**）→ Provider 真实 logo + 渠道对比卡 → 编号 stepper → 底部 CTA。

## 硬性设计规则（违反即重做）

1. **配色**：深蓝主色、金做 CTA / 强调、绿做成功状态；浅底为主，不要满屏深色。三色**不同时高强度出现**，金只点睛。
2. **字体**：Inter 正文 + Space Grotesk 标题，标题字距收紧。
3. **反 AI 惯性（硬性）**：
   - ❌ 不做「居中大标题 + 三张等宽功能卡」
   - ❌ 不用紫色 / 蓝色 glow、无理由渐变
   - ❌ 不全场玻璃拟态（模糊最多一处，如顶栏）
   - ❌ 不放纯装饰光球、假产品 UI、假终端、`Live` 徽章、无信息动效
4. **动效克制**：仅 `hover` / `focus` / 复制反馈 / 轻量 `fade-up`；强循环动画、滚动视差、扫光都不要。`prefers-reduced-motion` 兜底。
5. **信息密度偏高**：面板里必须是**真实信息**（端点 / 数据 / 命令 / 日志），不要假装饰。所有 endpoint / model ID / ratio / API key placeholder / 日志用 **monospace**。
6. **质感**：圆角克制（6–16px）、轻阴影分层、细边框（`1px solid #E4E7EC`）。
7. **单一 accent 锁定**：唯一的装饰强调色 = **金色**；**绿色仅语义**（成功 / 可用 / 已复制）。底色近黑 `#0D1B2A` / 近白 `#F7F9FC`，不用纯黑白。
8. **彩色来自真实品牌 logo**（品牌色 + 深色安全变体），不给功能图标随机上色，不手绘假 logo。

---

# 第三部分：参考文件完整内容（附录 A–E）

> 以下是 Pigcoder 实际使用的 5 个文件**完整原文**。它们是风格的「事实依据」。

## 附录 A：设计语言（`docs/plans/pigcoder-design-language.md`）

```markdown
# Pigcoder 前台设计语言

## 1. 产品定位

Pigcoder 不是传统 SaaS 官网，也不是普通订阅软件落地页。

更准确的定位是：

> 面向开发者的 AI Model Router / API Gateway / 模型聚合平台。

Pigcoder 和 OpenRouter 类似，核心不是“销售一套企业软件”，而是为开发者提供统一模型入口：

- 多模型统一接入
- 多协议兼容
- 统一 API Key
- 透明倍率计费
- Claude / GPT / Gemini 等模型渠道聚合
- 面向 Claude Code、Codex CLI、Gemini CLI、OpenCode 等开发者工具的接入能力

因此，前台页面应该更接近：

- Developer Infrastructure Platform
- API Gateway Dashboard
- Model Routing Catalog
- Transparent Model Pricing Table
- Developer Docs / Integration Guide

而不是：

- CRM SaaS 官网
- 普通订阅软件 Landing Page
- 强营销式企业官网
- “三栏套餐 + Why us + 客户见证”的传统销售页

## 2. 设计灵感来源

本次改版可以参考 OpenRouter，但参考的是设计方法，不是复制具体视觉。

### 可以参考的部分

- 清爽、克制、信息密度高
- 模型 / Provider 卡片化展示
- API Endpoint 明确露出
- 价格透明，减少套餐包装感
- 文档优先，开发者可以快速找到接入方式
- 页面重点围绕模型、协议、倍率、能力标签
- 少用夸张光效，多用清晰边框、表格、卡片和代码块

### 不能照抄的部分

- 不直接复制 OpenRouter 的紫色品牌
- 不照搬 OpenRouter 的组件结构
- 不照搬 OpenRouter 的页面文案
- 不把 Pigcoder 做成 OpenRouter 镜像站
- 不丢掉 Pigcoder 原本的蓝 / 金 / 绿品牌识别

## 3. 整体风格

推荐风格关键词：

- Developer-first
- API Platform
- Model Router
- Data-dense
- Clean Infrastructure
- Transparent Pricing
- Documentation-first
- Low marketing, high clarity

中文概括：

> 清爽、克制、有数据感的开发者 API 平台。

### Design Taste 校准

按照 `design-taste-frontend` 审查后，Pigcoder 不应走普通 landing page 的默认审美。

推荐拨盘：

- `DESIGN_VARIANCE: 5`：保持结构化和可信度，避免模板化，但不做实验性视觉。
- `MOTION_INTENSITY: 3`：只保留 hover、focus 和复制反馈，不做持续漂浮、Live 脉冲或大规模滚动动效。
- `VISUAL_DENSITY`：营销 / 着陆页（首页、价格、文档前言）取 `4–5` 的克制留白，控制台 / 日志等数据页可到 `6–7`。当前首页已落地为克制档，非 cockpit 高密度。

硬规则：

- Hero 优先左文案 + 右 endpoint / provider 数据面板，不默认使用居中大标题。
- 不使用 AI 紫色渐变、三张等宽功能卡、泛玻璃拟态、装饰性光球作为默认视觉。
- 卡片必须承载真实信息单位，如 endpoint、provider、model、ratio、capability、docs step。
- 页面区块不要全部长得一样，能力、模型、价格和文档步骤应使用不同布局节奏。
- 所有数字、倍率、模型 ID、endpoint 和 API key placeholder 优先使用 monospace。

页面应让开发者一眼看到：支持什么协议、支持哪些模型、Base URL 是什么、怎么配置环境变量、不同渠道倍率是多少、上下文和工具能力如何、哪些工具可以直接接入。

页面不应该有太强“卖课 / 卖套餐 / 企业服务官网”的感觉。

## 4. 色调策略

Pigcoder 保留现有品牌色，但需要克制使用。

- **深蓝**：品牌主色、Header active 状态、主标题重点、深色代码块、结构性强调。感觉：稳定、基础设施、技术可信。注意：不要大面积铺满整页。
- **金色**：主 CTA、标题重点 underline、少量高价值提示、价格 / 倍率强调。感觉：重点、价值、行动入口。注意：金色不能太多；避免“蓝金营销风”。
- **绿色**（仅语义不作装饰）：可用状态 / 支持能力标签、成功状态（如复制成功）、请求正常 / 健康提示。感觉：可用、正常运行、安全通过。注意：不作为大面积品牌铺色。
- **中性色**：主体背景用白色、浅灰、浅蓝灰、低饱和边框，承载信息密度。

## 5. 设计语言

页面应围绕“开发者决策路径”组织：我能不能接入？→ 用哪个 Endpoint？→ 支持什么协议？→ 支持什么模型？→ 倍率怎么算？→ 上下文和工具能力如何？→ 怎么配置工具？→ 出问题怎么排查？

页面模块优先级：Hero（一句话定位 + Endpoint / Provider 面板）→ Models → Pricing（倍率）→ Docs → FAQ。而不是传统 SaaS 的：大营销标题、Why us、三栏卖点、套餐卡、客户见证、过度情绪化 CTA。

信息表达优先用：Endpoint、Provider、Model、Ratio、Context、Capability、API Key、Base URL、CLI、Request logs。减少：最强战力、生产力引擎、颠覆体验、选择适合你的套餐、立即开启智能编程、企业级营销式空泛表达。

## 6. 小巧思

- **Endpoint 面板**：首页直接展示不同协议的 Base URL，开发者不用点进文档也能立即理解这是 API Gateway。
- **Provider 状态行**：轻量状态行展示 Claude Code / Codex CLI / Gemini CLI / OpenCode，附 `OpenAI compatible` / `200k context` 等标签。
- **倍率标签**：价格页不以“套餐”为主叙事。用「模型渠道 / 倍率 / 可用模型 / 能力标签」，避免「套餐 / 订阅套餐」。
- **能力标签**：thinking、WebSearch、200k / 1M context、OpenAI compatible、Claude Code only、Image generation。
- **代码块优先**：首页和文档页保留短代码示例（环境变量配置），让网站更像 API 平台。
- **少量品牌 underline**：标题重点用金色 underline，而非大面积渐变文字。
- **状态语义**：不要在营销页用装饰性「Live」徽章或小绿点冒充系统状态。绿色只在有真实语义时用（复制成功、能力可用、请求正常）。

## 7. 页面方向

- **首页**：表达「一个统一入口，连接多个 AI 编程模型和 CLI 工具」。重点模块：Hero → Endpoint 面板 → Provider 卡片 → 能力矩阵 → 简短 CTA。避免：“为什么选择我们”、“生产力加速引擎”、大面积深蓝金色科技感、传统 SaaS 三栏卖点。
- **价格页**：更像「模型渠道倍率表」。展示渠道、Provider、倍率、可用模型、上下文能力、thinking / WebSearch、适用工具、充值入口。避免：“选择适合你的订阅套餐”、三栏 SaaS pricing card。
- **文档页**：Developer Docs / Integration Guide。最克制、最清晰。
- **Header / Footer**：Header 简洁低干扰；Footer 链接分组清晰，不做过强品牌展示。

## 8. 组件语言

- **Button**：Primary（获取 API Key / 控制台）、Secondary（查看接入文档）、Ghost（轻量导航）。不要像 SaaS 销售页的大促 CTA。
- **Card**：服务信息扫描。样式：浅边框、轻阴影、小圆角、信息分区明确、hover 只做轻微上浮或边框变化。
- **Code Block**：清晰、支持横向滚动、Copy 状态明确。
- **Table / Ratio card**：价格结构化，Ratio 用 tabular nums。

## 9. 可访问性与交互要求

必须保留：`skip-link`、`focus-visible`、操作控件用 `button`、icon-only button 有 `aria-label`、FAQ 用 `button` + `aria-expanded`、Modal 支持 Escape、移动端触控目标 ≥ 44px、动画遵循 `prefers-reduced-motion`。

## 10. 验收标准

第一眼能看出是 AI Model Router / API Gateway；不像普通 SaaS 套餐销售页；不像 OpenRouter 复制站；品牌色存在但克制；首页能直接看到 Endpoint、Provider、模型路由信息；价格页能直接看到渠道、倍率、模型、能力标签；文档页能快速完成接入；中英文切换不跑偏；暗色模式、移动端、FAQ、Modal、复制按钮正常。

## 11. 后续修改规则

后续实现应优先对照本文档。出现以下倾向需纠偏：文案变成 SaaS 营销话术、价格页变成套餐销售页、大面积深蓝 / 金色造成强营销感、只有视觉效果缺少模型 / 协议 / 倍率 / Endpoint 信息、模块漂亮但开发者无法快速判断怎么接入。

> Pigcoder 前台应该像一个清晰、可信、有信息密度的 AI 模型路由平台，而不是传统 SaaS 官网。
```

## 附录 B：UI 体系参考（`docs/plans/pigcoder-ui-system-reference.md`）

```markdown
# Pigcoder UI System Reference

这份文档用于指导其它 AI 或开发者按照 Pigcoder 官网首页的设计语言，继续设计体系内的其它页面、控制台、文档、后台或工具站页面。它是一份可复用的视觉与交互参考。使用时优先保持同一套产品气质：清晰、克制、有数据感、开发者优先。

## 1. 核心定位
服务于一个 AI Model Router / API Gateway / Developer Infrastructure 平台。设计时必须围绕：Model routing、Provider aggregation、API endpoint、API key、Protocol compatibility、Model ratio、Context capability、CLI integration、Request logs、Transparent billing。不要做成传统 SaaS 营销站，体验应更接近 OpenRouter 一类开发者 API 平台。

## 2. 一句话风格定义
> Pigcoder 是一个清爽、克制、有信息密度的 AI 模型路由平台界面系统。
关键词：Developer-first、Infrastructure、API-native、Data-dense、Clean surface、Transparent ratios、Documentation-first、Low marketing。

## 3. 设计原则

### 3.0 Design Taste 拨盘
- `DESIGN_VARIANCE: 5`：版式允许有变化，但不能牺牲稳定、可信和可扫描。
- `MOTION_INTENSITY: 3`：微交互为主，避免持续循环动效和强滚动特效。
- `VISUAL_DENSITY`：营销 / 着陆页取 `4–5`；控制台 / 日志 / 计费等数据页可到 `6–7`。当前首页已落地为克制档（约 4–5），不是 cockpit 式高密度。

这些拨盘意味着：首页可以有品牌感，但第一屏必须出现 endpoint、provider、protocol 或 model routing 信息；价格和模型页面应偏目录、表格、数据卡；文档和控制台页面应偏工作界面；卡片、按钮、标签和表格必须共享同一套圆角、边框、阴影和状态规则；动效只用于解释状态变化或提升反馈，不用于制造视觉噪音。

### 3.1 少营销，多信息
推荐展示：支持哪些协议 / 模型、Endpoint、环境变量配置、倍率、上下文和工具能力、哪些 CLI 可直接接入。
避免：空泛卖点、过度情绪化 slogan、“为什么选择我们”、传统三栏 SaaS 套餐包装。

### 3.2 清晰结构优先于视觉炫技
使用：明确分区、浅边框、轻阴影、数据卡片、代码块、表格、能力标签。
避免：大面积玻璃拟态、多层强光晕、大面积深蓝渐变、过度动画、大段营销文案。

### 3.3 Pigcoder 品牌保留但克制
仍使用深蓝、金色、绿色，但它们有明确职责。不要直接复制 OpenRouter 的紫色品牌，也不要做成蓝金强营销风。

## 4. 色彩系统

### 4.1 主色：深蓝
```css
--pc-navy: #18345f;
--pc-navy-deep: #0d1b2a;
```
用途：品牌文字、Header active、主标题重点、代码块背景、结构性按钮、深色模式基础背景。作为结构色，不要大面积营销背景。

### 4.2 强调色：金色
```css
--pc-gold: #e8a825;
```
用途：主 CTA、标题 underline、倍率强调、关键提示、少量 icon accent。少量使用，不要大面积背景，不要叠加强光晕。

### 4.3 状态色：绿色
```css
--pc-green: #4f9462;
```
用途（仅语义）：Success / 已完成（复制成功）、可用 / 支持的能力标签（thinking、WebSearch、xhigh、200k 上下文）、请求正常 / 健康。
使用方式：仅作状态语义色，必须满足对比度（浅色 `text-green-700`，`#4f9462` 白底仅 3.6:1 小字不达标；深色用 `green-400`）。不作为主品牌铺色；不用于装饰性「Live」徽章，也不用于每行 / nav 项前的装饰色点。全站**唯一装饰性强调色是金色**；绿色只承担语义。

### 4.4 中性色
```css
--pc-ink: #0f172a;
--pc-text: #344054;
--pc-muted: #586273;
--pc-line: #e4e7ec;
--pc-paper: #ffffff;
--pc-wash: #f7f9fc;
```
中性色是主要承载色，负责让信息密度可读。

## 5. 页面布局语言

### 5.1 页面结构
普通页：Header → Hero / Page Intro → Primary Data Panel → Main Content → Secondary Reference / Docs / FAQ → Footer。
控制台页：Sidebar / Header → Page title + status summary → Primary table or metric grid → Detail panel → Logs / History / Settings。

### 5.2 容器宽度
普通内容 `1200px`；宽内容 `1280px`；文档正文 `768–960px`；表格页可更宽但保持左右留白。

### 5.3 间距
大区块 `48–80px`；卡片内边距 `20–32px`；小组件间距 `8–16px`；表格行高保持可读。

## 6. 组件体系

### 6.1 Header
低干扰。白色或轻透明背景、细边框、active 状态清晰、高度约 `56px`。不要过重，不要大面积深色背景。

### 6.2 Hero
展示平台定位和关键接入信息，但克制（最多 4 个文本元素）：kicker 徽章（可选 1 个）、大号标题（≤2 行可含少量金色 underline）、简短说明（≤20 词 / ≤4 行）、一组 CTA、右侧单一视觉：一个「真实可执行命令」的终端示例（`.hero-terminal-card`）。
旧版已废弃：不要把 Endpoint 面板 + Provider 状态行 + 终端 + Live 徽章全堆进 Hero。Endpoint 列表移到 Hero 下方独立「端点带」。终端只展示真实命令，不要伪造「Live 网关面板 / 假 dashboard」。装饰仅保留极克制的单个金色微光；不要网格十字线、多层光晕。

### 6.3 Endpoint Card
```text
Endpoints
OpenAI     https://sub2.pigcoder.com/v1
Anthropic  https://sub2.pigcoder.com
Gemini     https://sub2.pigcoder.com/v1beta
```
monospace 显示 URL、协议 label 小号 uppercase、长 URL 可换行或横向滚动、可选 copy。

### 6.4 Provider 覆盖与渠道卡
优先用**真实品牌 logo + 渠道对比卡**，不要用带装饰色点的状态行。内联**真实品牌 SVG**（Simple Icons 官方路径），按**真实品牌色**着色：Anthropic 锚红 `#D97757`（深浅通用）、Gemini Google 蓝 `#4285F4`（深色用 `#6BA2FF`）；OpenAI 单色随主题在墨黑 / 近白间自适应。**每个品牌色都需深色安全变体**。不要手绘假 logo。无官方图标的（如智谱）用文字标。
渠道能力（`.channel-grid` / `.channel-compare`）：每卡 = 渠道名 + 协议 pill + 「上下文 / 能力」「适用工具」规格行。移动端单列、不横滚。

### 6.5 Channel Ratio Card
价格页和模型渠道页用 Channel Ratio Card，而不是 SaaS Pricing Card。Ratio 用 tabular nums 并作为每卡**唯一金色焦点**；Provider 徽章用中性底色；模型用 pill 标签不加色点；能力标签用绿色语义色；CTA 用「充值 / 立即前往控制台」，不写「选择套餐」。

### 6.6 Capability Card
推荐标题：协议兼容、模型渠道、上下文能力、倍率透明、CLI 优先、请求日志。避免：极速响应、高可用性、数据安全、成本优化、生产力加速。

### 6.7 Code Block
```bash
export OPENAI_API_KEY="sk-pig-xxxx"
export OPENAI_BASE_URL="https://sub2.pigcoder.com/v1"
```
深色背景、monospace、横向滚动、复制按钮、复制状态反馈。

### 6.8 Table
字段：Provider、Channel、Protocol、Base URL、Models、Ratio、Context、Capabilities、Tools。表头清晰、数字列 tabular nums、长模型名可换行、移动端可横向滚动。

### 6.9 实际组件类库（与 `common.css` 对应，可直接复用）

| 模式 | 类名 | 说明 |
| --- | --- | --- |
| Hero 真实终端 | `.hero-terminal-card` `.hero-terminal-lg` | 暗色终端，只放真实可执行命令 |
| 端点带 | `.endpoint-band` `.endpoint-chip` | 三协议真实 Base URL，整块为 `<button>` 可点击复制 |
| 能力区 | `.cap-grid` `.cap-primary` `.cap-row` | 1 主面板 + N 支撑行 |
| Provider logo | `.provider-logos` `.provider-logo-svg` `.logo-anthropic/.logo-openai/.logo-gemini` `.provider-mono` | 内联品牌 SVG + 品牌色点缀 |
| 渠道对比卡 | `.channel-grid` `.channel-compare` `.channel-pill` `.channel-specs` | 渠道名 + 协议 pill + 规格行 |
| 价格卡 | `.channel-card` `.channel-ratio`（金色 ratio 焦点） | 数据驱动 |
| 接入步骤 | `.flow-stepper` `.flow-step-item` | 编号 + 顶边线 stepper |
| CTA 面板 | `.api-cta-panel` | 单一 CTA 意图 |
| 按钮 | `.btn-primary` `.btn-primary-gold` `.btn-secondary` | 已移除扫光 |
| 进入动效 | `.fade-up`（IntersectionObserver 触发） | 进入视口淡入 |

### 6.10 单一 accent 锁定与配色铁律
- 唯一装饰性强调色 = 金色 `#E8A825`。
- 绿色仅语义，浅色 `text-green-700`，深色 `green-400`。
- 底色近黑 / 近白，禁纯黑白：深 `#0D1B2A`、浅 `#F7F9FC` + 白卡。
- 彩色来自真实品牌 logo，不给功能图标随机上色。
- 中性辅助色 `--pc-muted: #586273`（已为 AA 调过）。

### 6.11 本轮重设计已移除的反模式（避免复活）
- ❌ `<div>` 拼的假终端 / 假 dashboard / `Live` 状态徽章
- ❌ 装饰性光晕 `.orb-*`、Hero 网格十字线
- ❌ 6 张等宽等重功能卡
- ❌ 每个 section 都加 eyebrow（全页上限 ≤ ⌈section 数 / 3⌉）
- ❌ 手绘 SVG 假 logo
- ❌ `.btn-shine` 对角扫光
- ❌ 装饰性状态色点
- ❌ 深蓝 + 金 + 绿三色同时抢 accent
- ❌ 路由表移动端强制横向滚动
- ❌ 重复 CTA 意图

### 6.12 字体 / 资源 / 复制交互约定
- 自托管字体，不引 Google Fonts：Inter、Space Grotesk latin + latin-ext woff2；Material Symbols 子集化。
- 首屏 `<link rel="preload" as="font" crossorigin>` 预载。
- 资源版本号 `?v=YYYYMMDD-xxx` 做缓存击穿，改 CSS/JS 后必须 bump。
- 复制交互：`data-copy`（多行用 `&#10;`）+ `[data-copy-icon]` 在 `content_copy` ↔ `check` 间切换；`aria-label` 在 copy ↔ copied 间切换。
- 滚动相关一律用 `IntersectionObserver`，禁用 `window.addEventListener('scroll')`。

## 7. Typography
正文 `Inter`，标题 `"Space Grotesk", Inter`。H1 大号紧凑；正文 `line-height` 充足；代码 monospace。标题用 `text-wrap: balance` 避免孤行。

## 8. 文案语气
推荐：直接、技术明确、信息优先、少形容词、少口号。避免：开启智能编程新时代、最强 AI 战力、生产力加速引擎、企业级全方位赋能、选择适合你的订阅套餐。

## 9. 暗色模式
服务可读性。背景深蓝黑、卡片深色 surface、边框低透明白色、金色少量强调、绿色状态。避免：大面积霓虹光晕、多层 blur、强渐变、低对比正文。

## 10. 移动端规则
Header 不遮挡内容；Endpoint 长 URL 可换行或横向滚动；卡片单列；表格可横向滚动；按钮高度 ≥ 44px；模型标签可换行；文档代码块可滚动。

## 11. 可访问性规则
skip link；交互元素用 `button` / `a`；icon-only button 有 `aria-label`；FAQ 用 `button` + `aria-expanded`；Modal 支持 Escape；Focus 清晰；动画遵循 `prefers-reduced-motion`；图片有 `alt`；装饰图标 `aria-hidden`。

## 12. 页面类型参考
模型列表页、API Key 页、Usage / Logs、Billing（不做传统订阅套餐页）、Docs。

## 13. 给其它 AI 的简短提示词
```text
请按照 Pigcoder 的统一 UI 设计语言设计页面。
Pigcoder 是一个 AI Model Router / API Gateway / Developer Infrastructure 平台。页面要像 OpenRouter 一类开发者 API 平台：清爽、克制、有信息密度、文档优先、价格透明。
保留品牌色但克制：深蓝用于品牌、结构和代码块；金色用于少量 CTA、标题 underline、倍率重点；绿色用于成功 / 可用状态；主体用白色、浅灰、浅蓝灰、低饱和边框。
内容优先展示 Endpoint、Provider、Model、Ratio、Context、Capability、API Key、Base URL、CLI、Request logs。
组件用浅边框、轻阴影、小圆角、清晰标签、代码块、表格和数据卡片。
Design taste guardrails：
- 不要 AI 紫色渐变、三张等宽功能卡、泛玻璃拟态或装饰性光球。
- 不要把页面做成 Web3 / DeFi / 钱包 / 交易所 / SaaS 套餐页。
- 不要卡片套卡片；区块用留白、分隔线、背景带或表格组织。
- 不要所有区块用同一种卡片布局。
- 所有 endpoint、model ID、ratio、API key placeholder、request log 用 monospace。
- 装饰性强调色只用金色；绿色仅语义。底色近黑 #0D1B2A / 近白 #F7F9FC，不要纯黑白。
- 彩色来自真实品牌 logo，不给功能图标随机上色，不手绘假 logo。
- 不要假终端 / 假 dashboard / Live 徽章 / 装饰光晕 / 网格线 / 装饰色点 / 按钮扫光。
- eyebrow 全页上限 ⌈section 数 / 3⌉；同一意图 CTA 全站只用一个标签。
- 滚动交互用 IntersectionObserver，不要 window scroll 监听。
```

## 14. 快速检查清单
- [ ] 第一眼能看出是 AI Model Router / API Gateway。
- [ ] 没有变成传统 SaaS 营销页。
- [ ] 直接展示开发者关心的信息。
- [ ] Endpoint、模型、协议、倍率或能力标签至少出现一种。
- [ ] 深蓝 / 金色 / 绿色存在但克制。
- [ ] 价格是“渠道倍率”不是“套餐销售”。
- [ ] 文案直接、技术明确、少口号。
- [ ] 移动端可读。
- [ ] 暗色模式不过度霓虹。
- [ ] 交互元素可访问。
- [ ] 没有 AI 紫色渐变 / 三等宽功能卡 / 泛玻璃拟态 / 装饰光球。
- [ ] 卡片无无意义套嵌。
- [ ] 数字、倍率、模型 ID、endpoint、日志用 monospace。
- [ ] 装饰强调色只有金色；绿色仅语义且对比度达标。
- [ ] 底色近黑 / 近白，无纯黑白。
- [ ] 彩色来自真实品牌 logo，无手绘假 logo、无彩虹功能图标。
- [ ] 无假终端 / Live 徽章 / 装饰光晕 / 网格线 / 装饰色点 / 按钮扫光。
- [ ] eyebrow 总数 ≤ ⌈section 数 / 3⌉；无重复 CTA 意图。
- [ ] 字体自托管；滚动交互用 IntersectionObserver。
```

## 附录 C：配色 token（`pages/theme.js`）

> Tailwind 配置（`tailwind.config`）。非 Tailwind 项目可将其颜色值迁移到自己的主题系统 / CSS 变量。

```javascript
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
```

## 附录 D：组件样式（`pages/common.css`）—— 完整原文

> 这是**完整的**全局样式表原文，包含 CSS 变量（`--pc-*`）、字体定义、所有组件类、骨架屏、响应式、滚动条、reduced-motion 兜底。改造时可直接复用其中的组件类，或整体迁移到你的样式系统。

```css
/* ===== 自托管字体（替代 Google Fonts CDN，零外部请求）===== */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url(fonts/inter-latin.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url(fonts/inter-latin-ext.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url(fonts/space-grotesk-latin.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url(fonts/space-grotesk-latin-ext.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(fonts/material-symbols-outlined.woff2) format('woff2');
}

:root {
  color-scheme: light;
  --pc-navy: #18345f;
  --pc-navy-deep: #0d1b2a;
  --pc-gold: #e8a825;
  --pc-green: #4f9462;
  --pc-ink: #0f172a;
  --pc-text: #344054;
  --pc-muted: #586273;
  --pc-line: #e4e7ec;
  --pc-line-strong: #d0d5dd;
  --pc-paper: #ffffff;
  --pc-wash: #f7f9fc;
  --pc-wash-strong: #eef3f8;
  --pc-focus: rgba(232, 168, 37, 0.32);
  --pc-shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.05);
  --pc-shadow-md: 0 8px 24px rgba(15, 23, 42, 0.08);
}

.dark {
  color-scheme: dark;
  --pc-ink: #f8fafc;
  --pc-text: #cbd5e1;
  --pc-muted: #94a3b8;
  --pc-line: rgba(255, 255, 255, 0.1);
  --pc-line-strong: rgba(255, 255, 255, 0.16);
  --pc-paper: #111c2d;
  --pc-wash: #0d1b2a;
  --pc-wash-strong: #13233a;
  --pc-focus: rgba(232, 168, 37, 0.42);
  --pc-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.25);
  --pc-shadow-md: 0 12px 30px rgba(0, 0, 0, 0.3);
}

* {
  -webkit-tap-highlight-color: transparent;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--pc-wash);
  overflow-x: hidden;
}

a,
button {
  touch-action: manipulation;
}

.skip-link {
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 1000;
  transform: translateY(-150%);
  border-radius: 0.625rem;
  background: var(--pc-navy);
  color: #ffffff;
  padding: 0.75rem 1rem;
  font-weight: 700;
  box-shadow: var(--pc-shadow-md);
  transition: transform 0.18s ease;
}

.skip-link:focus-visible {
  transform: translateY(0);
}

.text-balance {
  text-wrap: balance;
}

.text-pretty {
  text-wrap: pretty;
}

:focus-visible {
  outline: 2px solid var(--pc-gold);
  outline-offset: 3px;
  box-shadow: 0 0 0 4px var(--pc-focus);
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  vertical-align: middle;
}

.section-shell,
.section-shell-wide,
.section-shell-narrow,
.hero-shell,
.hero-shell-wide {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 10;
}

.section-shell {
  max-width: 1200px;
}

.section-shell-wide {
  max-width: 1280px;
}

.section-shell-narrow {
  max-width: 768px;
}

.hero-shell {
  max-width: 896px;
  text-align: center;
}

.hero-shell-wide {
  max-width: 1024px;
  text-align: center;
}

.section-block {
  padding: 4rem 0;
}

.section-block-tight {
  padding: 3rem 0;
}

.surface-gradient-main,
.surface-gradient-alt,
.surface-gradient-hero {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 10%, rgba(232, 168, 37, 0.08), transparent 28rem),
    linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
}

.surface-gradient-alt {
  background: linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%);
}

.surface-gradient-hero {
  background:
    radial-gradient(circle at 12% 12%, rgba(232, 168, 37, 0.16), transparent 26rem),
    linear-gradient(180deg, #ffffff 0%, #f8fafc 56%, #eef3f8 100%);
}

.dark .surface-gradient-main,
.dark .surface-gradient-alt {
  background:
    radial-gradient(circle at 20% 0%, rgba(232, 168, 37, 0.08), transparent 26rem),
    linear-gradient(180deg, var(--pc-navy-deep) 0%, #101f33 100%);
}

.dark .surface-gradient-hero {
  background:
    radial-gradient(circle at 16% 10%, rgba(232, 168, 37, 0.12), transparent 24rem),
    linear-gradient(180deg, var(--pc-paper) 0%, var(--pc-navy-deep) 100%);
}

.hero-glass-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(24, 52, 95, 0.08));
  pointer-events: none;
}

.dark .hero-glass-overlay {
  background: linear-gradient(135deg, rgba(13, 27, 42, 0.12), rgba(13, 27, 42, 0.24));
}

.orb-gold-hero,
.orb-green-hero,
.orb-purple-hero,
.orb-purple-center-soft,
.orb-gold-right,
.orb-green-left,
.orb-navy-right,
.orb-gold-left-soft,
.orb-gold-top-left-soft,
.orb-green-right-soft {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
  opacity: 0.35;
  filter: blur(80px);
}

.orb-gold-hero {
  top: -10rem;
  right: -7rem;
  width: 26rem;
  height: 26rem;
  background: rgba(232, 168, 37, 0.2);
}

.orb-green-hero {
  bottom: -10rem;
  left: -8rem;
  width: 24rem;
  height: 24rem;
  background: rgba(79, 148, 98, 0.16);
}

.orb-purple-hero,
.orb-purple-center-soft {
  display: none;
}

.orb-gold-right,
.orb-gold-left-soft,
.orb-gold-top-left-soft {
  width: 22rem;
  height: 22rem;
  background: rgba(232, 168, 37, 0.14);
}

.orb-green-left,
.orb-green-right-soft {
  width: 20rem;
  height: 20rem;
  background: rgba(79, 148, 98, 0.12);
}

.orb-navy-right {
  width: 22rem;
  height: 22rem;
  background: rgba(24, 52, 95, 0.1);
}

.orb-gold-right {
  top: 15%;
  right: 12%;
}

.orb-green-left {
  bottom: 5%;
  left: 8%;
}

.orb-navy-right {
  bottom: 0;
  right: 12%;
}

.orb-gold-left-soft,
.orb-gold-top-left-soft {
  top: 8%;
  left: 12%;
}

.orb-green-right-soft {
  right: 10%;
  bottom: 8%;
}


.hero-modern {
  background: #ffffff;
}

.dark .hero-modern {
  background: var(--pc-navy-deep);
}

.hero-grid-lines {
  position: absolute;
  inset: 0;
  opacity: 0.34;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(24, 52, 95, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(24, 52, 95, 0.06) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.78), transparent 82%);
}

.dark .hero-grid-lines {
  opacity: 0.22;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
}

.brand-emphasis {
  color: var(--pc-navy);
  text-decoration: underline;
  text-decoration-color: rgba(232, 168, 37, 0.7);
  text-decoration-thickness: 0.12em;
  text-underline-offset: 0.12em;
}

.dark .brand-emphasis {
  color: var(--pc-gold);
}

.hero-proof-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.hero-proof-card {
  display: flex;
  min-width: 0;
  min-height: 6rem;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--pc-line);
  border-radius: 0.875rem;
  background: rgba(255, 255, 255, 0.82);
  padding: 1rem;
  box-shadow: var(--pc-shadow-sm);
}

.dark .hero-proof-card {
  background: rgba(17, 28, 45, 0.72);
  border-color: rgba(255, 255, 255, 0.1);
}

.hero-metric-value {
  color: var(--pc-navy);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}

.dark .hero-metric-value {
  color: #ffffff;
}

.hero-metric-label {
  margin-top: 0.35rem;
  color: var(--pc-muted);
  font-size: 0.8rem;
  line-height: 1.35;
}

.dark .hero-metric-label {
  color: #94a3b8;
}

.hero-console-panel,
.pricing-hero-panel {
  position: relative;
  border: 1px solid var(--pc-line);
  border-radius: 1.25rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.82));
  box-shadow: 0 24px 70px rgba(24, 52, 95, 0.14);
}

.hero-console-panel {
  padding: 1rem;
}

.dark .hero-console-panel,
.dark .pricing-hero-panel {
  background: linear-gradient(180deg, rgba(17, 28, 45, 0.94), rgba(13, 27, 42, 0.82));
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.26);
}

.hero-console-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid var(--pc-line);
  padding: 0.25rem 0.25rem 1rem;
}

.dark .hero-console-topbar {
  border-color: rgba(255, 255, 255, 0.1);
}

.hero-app-icon {
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  place-items: center;
  border-radius: 0.75rem;
  background: var(--pc-navy);
  color: #ffffff;
  font-weight: 800;
  box-shadow: 0 10px 24px rgba(24, 52, 95, 0.2);
}

.hero-live-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
  border: 1px solid rgba(79, 148, 98, 0.18);
  border-radius: 9999px;
  background: rgba(79, 148, 98, 0.1);
  color: var(--pc-green);
  padding: 0.35rem 0.65rem;
  font-size: 0.75rem;
  font-weight: 800;
}

.hero-status-dot {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 9999px;
  background: var(--pc-green);
  box-shadow: 0 0 0 4px rgba(79, 148, 98, 0.14);
}

.hero-endpoint-card {
  margin-top: 1rem;
  border: 1px solid var(--pc-line);
  border-radius: 1rem;
  background: var(--pc-wash);
  padding: 1rem;
}

.dark .hero-endpoint-card {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
}

.hero-endpoint-card code {
  margin-top: 0.5rem;
  display: block;
  overflow-wrap: anywhere;
  color: var(--pc-navy);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.95rem;
  font-weight: 700;
}

.dark .hero-endpoint-card code {
  color: #f8fafc;
}


.hero-endpoint-list {
  margin-top: 0.65rem;
  display: grid;
  gap: 0.45rem;
}

.hero-endpoint-list code {
  display: block;
  overflow-wrap: anywhere;
  color: var(--pc-navy);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.82rem;
  font-weight: 700;
}

.hero-endpoint-list code span {
  display: inline-flex;
  min-width: 5.4rem;
  color: var(--pc-muted);
  font-family: Inter, sans-serif;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.dark .hero-endpoint-list code {
  color: #f8fafc;
}

.dark .hero-endpoint-list code span {
  color: #94a3b8;
}

.hero-provider-stack {
  margin-top: 1rem;
  display: grid;
  gap: 0.55rem;
}

.hero-provider-row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid var(--pc-line);
  border-radius: 0.875rem;
  background: #ffffff;
  padding: 0.75rem 0.85rem;
  color: var(--pc-ink);
  font-size: 0.9rem;
  font-weight: 700;
}

.dark .hero-provider-row {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: #f8fafc;
}

.hero-provider-row strong {
  color: var(--pc-muted);
  font-size: 0.75rem;
  font-weight: 700;
}

.dark .hero-provider-row strong {
  color: #94a3b8;
}

.hero-provider-dot {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 9999px;
}

.hero-terminal-card {
  margin-top: 1rem;
  overflow: hidden;
  border-radius: 1rem;
  background: var(--pc-navy-deep);
  color: #f8fafc;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.pricing-hero-panel {
  display: grid;
  gap: 0.75rem;
  padding: 1rem;
}

.pricing-hero-row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 1rem;
  border: 1px solid var(--pc-line);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.82);
  padding: 1rem;
}

.dark .pricing-hero-row {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
}

.pricing-hero-row strong {
  display: block;
  color: var(--pc-ink);
  font-weight: 800;
}

.dark .pricing-hero-row strong {
  color: #ffffff;
}

.pricing-hero-row p {
  margin-top: 0.2rem;
  color: var(--pc-muted);
  font-size: 0.9rem;
  line-height: 1.45;
}

.dark .pricing-hero-row p {
  color: #94a3b8;
}

.hero-gradient {
  background-size: 160% 160%;
  animation: gradientShift 12s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.cursor-blink {
  animation: blink 1.2s step-end infinite;
}

.fade-up {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.fade-up.visible {
  opacity: 1;
  transform: none;
}

.feature-card,
.model-card,
.surface-card,
.doc-surface-panel,
.doc-metric-card,
.pricing-card {
  position: relative;
  overflow: hidden;
  background: var(--pc-paper);
  border: 1px solid var(--pc-line);
  box-shadow: var(--pc-shadow-sm);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.feature-card:hover,
.model-card:hover,
.doc-metric-card:hover,
.pricing-card:hover {
  transform: translateY(-2px);
  border-color: var(--pc-line-strong);
  box-shadow: var(--pc-shadow-md);
}

.feature-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 1rem;
  right: 1rem;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(232, 168, 37, 0.7), transparent);
  opacity: 0;
  transition: opacity 0.22s ease;
}

.feature-card:hover::after {
  opacity: 1;
}

.model-card {
  background: rgba(255, 255, 255, 0.88) !important;
  border-color: var(--pc-line) !important;
}

.dark .model-card {
  background: rgba(17, 28, 45, 0.92) !important;
  border-color: var(--pc-line) !important;
}

.btn-shine,
.btn-primary,
.btn-secondary,
.btn-ghost {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: 10px;
  font-weight: 700;
  transition: transform 0.18s ease, background-color 0.18s ease, border-color 0.18s ease, color 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
}

.btn-primary {
  background: var(--pc-navy);
  color: #ffffff;
  box-shadow: 0 10px 24px rgba(24, 52, 95, 0.16);
}

.btn-primary:hover {
  filter: brightness(1.06);
  box-shadow: 0 14px 30px rgba(24, 52, 95, 0.22);
}

.btn-primary-gold {
  background: var(--pc-gold);
  color: var(--pc-navy-deep);
  box-shadow: 0 10px 24px rgba(232, 168, 37, 0.22);
}


.btn-secondary {
  background: rgba(255, 255, 255, 0.9);
  color: var(--pc-navy);
  border: 1px solid var(--pc-line);
}

.dark .btn-secondary {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

.btn-secondary:hover,
.btn-ghost:hover {
  background: rgba(232, 168, 37, 0.08);
  border-color: rgba(232, 168, 37, 0.32);
}

.btn-ghost {
  color: var(--pc-muted);
}

.btn-shine::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.16) 50%, transparent 100%);
  transform: rotate(30deg) translateX(-100%);
  transition: transform 0.5s ease;
}

.btn-shine:hover::after {
  transform: rotate(30deg) translateX(100%);
}

.kicker,
.doc-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--pc-navy);
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(255, 255, 255, 0.32);
}

.dark .kicker,
.dark .doc-kicker {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.12);
}

.section-heading-mark {
  width: 3rem;
  height: 3px;
  border-radius: 9999px;
  background: var(--pc-gold);
}


.section-eyebrow {
  display: inline-flex;
  align-items: center;
  color: var(--pc-muted);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.flow-card,
.router-matrix,
.api-cta-panel {
  position: relative;
  border: 1px solid var(--pc-line);
  background: var(--pc-paper);
  box-shadow: var(--pc-shadow-sm);
}

.dark .flow-card,
.dark .router-matrix,
.dark .api-cta-panel {
  border-color: rgba(255, 255, 255, 0.1);
  background: var(--pc-paper);
}

.flow-card {
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
}

.flow-card:hover {
  transform: translateY(-2px);
  border-color: var(--pc-line-strong);
  box-shadow: var(--pc-shadow-md);
}

.flow-step {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.75rem;
  background: rgba(232, 168, 37, 0.12);
  color: var(--pc-navy);
  font-size: 0.8rem;
  font-weight: 900;
  font-variant-numeric: tabular-nums;
}

.dark .flow-step {
  color: var(--pc-gold);
  background: rgba(232, 168, 37, 0.1);
}

.router-matrix {
  display: grid;
}

.router-matrix-head,
.router-matrix-row {
  display: grid;
  grid-template-columns: 0.8fr 0.9fr 1.45fr 1.1fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.1rem;
}

.router-matrix-head {
  background: var(--pc-wash);
  color: var(--pc-muted);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.dark .router-matrix-head {
  background: rgba(255, 255, 255, 0.04);
}

.router-matrix-row {
  border-top: 1px solid var(--pc-line);
  color: var(--pc-muted);
  font-size: 0.9rem;
  line-height: 1.45;
}

.dark .router-matrix-row {
  border-color: rgba(255, 255, 255, 0.08);
}

.router-matrix-row strong {
  color: var(--pc-ink);
  font-weight: 800;
}

.dark .router-matrix-row strong {
  color: #f8fafc;
}

.api-cta-panel {
  background:
    radial-gradient(circle at 95% 10%, rgba(232, 168, 37, 0.12), transparent 18rem),
    var(--pc-paper);
}

.dark .api-cta-panel {
  background:
    radial-gradient(circle at 95% 10%, rgba(232, 168, 37, 0.08), transparent 18rem),
    var(--pc-paper);
}

@media (max-width: 767px) {
  .router-matrix {
    overflow-x: auto;
  }

  .router-matrix-head,
  .router-matrix-row {
    min-width: 760px;
  }
}

.hero-code-card {
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(8, 16, 30, 0.72);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.18);
}

.bento-card {
  background: var(--pc-paper);
  border: 1px solid var(--pc-line);
  box-shadow: var(--pc-shadow-sm);
}

.bento-card-dark {
  background: linear-gradient(135deg, var(--pc-navy), var(--pc-navy-deep));
  color: #ffffff;
  box-shadow: 0 14px 32px rgba(24, 52, 95, 0.18);
}

@keyframes skeletonShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.partial-loading {
  position: relative;
  overflow: hidden;
}

.partial-loading::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.24), transparent);
  animation: skeletonShimmer 1.4s ease-in-out infinite;
  pointer-events: none;
}

.dark .partial-loading::after {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
}

#site-header.partial-loading {
  min-height: 56px;
  border-bottom: 1px solid var(--pc-line);
  background: rgba(255, 255, 255, 0.88);
}

.dark #site-header.partial-loading {
  background: rgba(13, 27, 42, 0.92);
}

#site-footer.partial-loading {
  min-height: 260px;
  border-top: 1px solid var(--pc-line);
  background: var(--pc-wash);
}



.channel-ratio strong {
  font-variant-numeric: tabular-nums;
}

.channel-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid var(--pc-line);
  border-radius: 0.75rem;
  background: var(--pc-wash);
  padding: 0.75rem 0.85rem;
}

.dark .channel-meta {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
}

.channel-meta span,
.channel-label {
  color: var(--pc-muted);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.channel-meta strong {
  color: var(--pc-ink);
  font-size: 0.88rem;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
}

.dark .channel-meta strong {
  color: #f8fafc;
}

.pricing-card-skeleton {
  min-height: 320px;
  border-radius: 12px;
  border: 1px solid var(--pc-line);
  background: var(--pc-paper);
}

@keyframes subtlePulse {
  0%, 100% { opacity: 0.64; }
  50% { opacity: 1; }
}

.stat-pulse {
  animation: subtlePulse 3s ease-in-out infinite;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.dark ::-webkit-scrollbar-thumb {
  background: #334155;
}

@media (min-width: 640px) {
  .section-shell,
  .section-shell-wide,
  .section-shell-narrow,
  .hero-shell,
  .hero-shell-wide {
    padding: 0 1.25rem;
  }
}

@media (min-width: 1024px) {
  .section-shell,
  .section-shell-wide,
  .section-shell-narrow,
  .hero-shell,
  .hero-shell-wide {
    padding: 0 2rem;
  }
}


@media (max-width: 639px) {
  .hero-title-accent-mobile span.text-transparent {
    display: block;
  }
}

@media (max-width: 639px) {
  .section-block {
    padding: 3rem 0;
  }

  .orb-gold-hero,
  .orb-green-hero,
  .orb-gold-right,
  .orb-green-left,
  .orb-navy-right,
  .orb-gold-left-soft,
  .orb-gold-top-left-soft,
  .orb-green-right-soft {
    opacity: 0.22;
    filter: blur(64px);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }

  .fade-up {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 767px) {
  #mobile-nav-toggle {
    position: relative;
    z-index: 60;
  }

  .hero-proof-grid {
    grid-template-columns: 1fr;
  }

  .hero-provider-row {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .hero-provider-row strong {
    grid-column: 2;
  }
}

/* 顶栏背景写在 common.css 而非 Tailwind 颜色 token：避免 theme.js 缓存旧版时
   dark:bg-custom-navy-deep 解析失败导致深色模式顶栏回退成白色 */
.header-surface {
  background-color: rgba(255, 255, 255, 0.95);
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
}

.dark .header-surface {
  background-color: rgba(13, 27, 42, 0.95);
}

/* 移动端导航面板背景同理写死，不依赖 Tailwind surface token */
.panel-surface {
  background-color: #ffffff;
}

.dark .panel-surface {
  background-color: #111c2d;
}

#site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  isolation: isolate;
}

#site-header > header {
  position: relative;
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.06), 0 10px 28px rgba(15, 23, 42, 0.04);
}

.dark #site-header > header {
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.08), 0 12px 30px rgba(0, 0, 0, 0.22);
}

#mobile-nav-panel {
  position: absolute;
  left: 1rem;
  right: 1rem;
  top: calc(100% + 0.5rem);
}

@media (min-width: 768px) {
  #mobile-nav-panel {
    position: static;
  }
}

@media (max-width: 639px) {
  .hero-console-panel,
  .pricing-hero-panel {
    border-radius: 1rem;
    box-shadow: 0 14px 36px rgba(24, 52, 95, 0.1);
  }

  .hero-proof-card {
    min-height: 4.5rem;
  }

  .channel-card {
    padding: 1rem;
  }

  .channel-ratio {
    min-width: 5.25rem;
  }
}


.channel-card {
  gap: 0;
}

.channel-card-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: 1rem;
}

.channel-ratio {
  min-width: 5.75rem;
  border: 1px solid rgba(232, 168, 37, 0.26);
  border-radius: 0.875rem;
  background: rgba(232, 168, 37, 0.08);
  padding: 0.65rem 0.75rem;
  text-align: right;
}

.dark .channel-ratio {
  border-color: rgba(232, 168, 37, 0.22);
  background: rgba(232, 168, 37, 0.08);
}

.channel-ratio-label {
  display: block;
  color: var(--pc-muted);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.channel-ratio strong {
  display: block;
  margin-top: 0.12rem;
  color: var(--pc-gold);
  font-size: 1.55rem;
  font-weight: 850;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}

.channel-ratio span:last-child {
  display: block;
  margin-top: 0.1rem;
  color: var(--pc-muted);
  font-size: 0.72rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.channel-card .btn-primary {
  background: var(--pc-navy);
}

.dark .channel-card .btn-primary {
  background: var(--pc-gold);
  color: var(--pc-navy-deep);
}

/* ===== 首页重设计：克制信任型组件 ===== */

/* Hero 单一真实终端（放大版） */
.hero-terminal-lg {
  margin-top: 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.hero-terminal-lg p {
  overflow-wrap: anywhere;
}

/* 端点带：三协议真实 Base URL */
.endpoint-band {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.endpoint-chip {
  position: relative;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font: inherit;
  color: inherit;
  border: 1px solid var(--pc-line);
  border-radius: 0.875rem;
  background: var(--pc-paper);
  padding: 0.9rem 2.6rem 0.9rem 1rem;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.dark .endpoint-chip {
  border-color: rgba(255, 255, 255, 0.1);
}

.endpoint-chip:hover {
  border-color: rgba(232, 168, 37, 0.4);
}

.endpoint-copy {
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  font-size: 18px;
  color: var(--pc-muted);
  transition: color 0.2s ease;
}

.endpoint-chip:hover .endpoint-copy {
  color: var(--pc-navy);
}

.dark .endpoint-chip:hover .endpoint-copy {
  color: var(--pc-gold);
}

.endpoint-chip.is-copied {
  border-color: rgba(79, 148, 98, 0.5);
}

.endpoint-chip.is-copied .endpoint-copy {
  color: var(--pc-green);
}

.terminal-copy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.2s ease;
}

.terminal-copy:hover {
  color: #ffffff;
}

.terminal-copy.is-copied {
  color: #6ee7a8;
}

.endpoint-proto {
  display: block;
  color: var(--pc-muted);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.endpoint-chip code {
  display: block;
  margin-top: 0.4rem;
  overflow-wrap: anywhere;
  color: var(--pc-navy);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.82rem;
  font-weight: 700;
}

.dark .endpoint-chip code {
  color: #f8fafc;
}

/* 能力：一个主面板 + 三条支撑行（非等分卡） */
.cap-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1.25rem;
  align-items: stretch;
}

.cap-primary {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--pc-line);
  border-radius: 1.25rem;
  background:
    radial-gradient(circle at 88% 0%, rgba(232, 168, 37, 0.1), transparent 16rem),
    var(--pc-paper);
  padding: 2rem;
  box-shadow: var(--pc-shadow-sm);
}

.dark .cap-primary {
  border-color: rgba(255, 255, 255, 0.1);
}

.cap-rows {
  display: grid;
  gap: 0.85rem;
  align-content: start;
}

.cap-row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 1rem;
  border: 1px solid var(--pc-line);
  border-radius: 1rem;
  background: var(--pc-paper);
  padding: 1.05rem 1.2rem;
  box-shadow: var(--pc-shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.dark .cap-row {
  border-color: rgba(255, 255, 255, 0.1);
}

.cap-row:hover {
  transform: translateY(-2px);
  border-color: var(--pc-line-strong);
  box-shadow: var(--pc-shadow-md);
}

.cap-row .material-symbols-outlined {
  color: var(--pc-navy);
}

.dark .cap-row .material-symbols-outlined {
  color: var(--pc-gold);
}

/* Provider 真实 logo 带（内联 SVG，currentColor 自适应） */
.provider-logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem 2.75rem;
  color: var(--pc-ink);
}

.dark .provider-logos {
  color: #e8edf4;
}

.provider-logo-svg {
  height: 1.6rem;
  width: auto;
  transition: opacity 0.2s ease;
}

/* 品牌色点缀（含深色安全变体）；OpenAI 本为单色品牌，随主题自适应 */
.logo-anthropic {
  fill: #d97757;
}

.logo-openai {
  fill: var(--pc-ink);
}

.dark .logo-openai {
  fill: #e8edf4;
}

.logo-gemini {
  fill: #4285f4;
}

.dark .logo-gemini {
  fill: #6ba2ff;
}

.provider-logo-svg:hover {
  opacity: 0.82;
}

.provider-mono {
  display: inline-flex;
  align-items: center;
  color: var(--pc-ink);
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}

.dark .provider-mono {
  color: #f8fafc;
}

/* 渠道对比卡（替代横滚表格，移动端友好） */
.channel-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.channel-compare {
  border: 1px solid var(--pc-line);
  border-radius: 1.1rem;
  background: var(--pc-paper);
  padding: 1.4rem;
  box-shadow: var(--pc-shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.dark .channel-compare {
  border-color: rgba(255, 255, 255, 0.1);
}

.channel-compare:hover {
  transform: translateY(-2px);
  border-color: var(--pc-line-strong);
  box-shadow: var(--pc-shadow-md);
}

.channel-pill {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--pc-line);
  border-radius: 9999px;
  background: var(--pc-wash);
  padding: 0.25rem 0.7rem;
  color: var(--pc-muted);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.dark .channel-pill {
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}

.channel-specs {
  display: grid;
  gap: 0.85rem;
}

.channel-specs > div {
  border-top: 1px solid var(--pc-line);
  padding-top: 0.75rem;
}

.dark .channel-specs > div {
  border-color: rgba(255, 255, 255, 0.08);
}

.channel-specs dt {
  color: var(--pc-muted);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.channel-specs dd {
  margin-top: 0.25rem;
  color: var(--pc-ink);
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.45;
}

.dark .channel-specs dd {
  color: #f1f5f9;
}

/* 接入流程：编号 stepper（非等分卡） */
.flow-stepper {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
  counter-reset: none;
}

.flow-step-item {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding-top: 1.25rem;
  border-top: 2px solid var(--pc-line);
}

.dark .flow-step-item {
  border-color: rgba(255, 255, 255, 0.12);
}

.flow-step-item:first-child {
  border-top-color: var(--pc-gold);
}

@media (max-width: 899px) {
  .cap-grid {
    grid-template-columns: 1fr;
  }

  .channel-grid {
    grid-template-columns: 1fr;
  }

  .flow-stepper {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 639px) {
  .endpoint-band {
    grid-template-columns: 1fr;
  }

  .flow-stepper {
    grid-template-columns: 1fr;
  }
}
```

## 附录 E：版式范本（`pages/index.html`）—— 完整原文

> 这是首页**完整的** HTML 原文（含多语言 `data-i18n` 标记、og/twitter meta、provider 品牌 SVG path、partial 注入占位、复制/入场交互脚本）。它是「非对称 Hero + 真实终端 + 端点带 + 能力区 + provider 矩阵 + stepper + CTA」版式的实物范本。

```html
<!DOCTYPE html>
<html class="light" lang="zh-CN">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title data-i18n="index.title">Pigcoder - 稳定高速的 AI 编程中转站</title>
    <meta name="description" content="Pigcoder 是面向 Claude Code、Codex CLI、Gemini CLI 的统一 AI 模型路由与 API 网关：替换 Base URL 即可在 Claude、GPT、Gemini 间路由，渠道倍率透明。" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Pigcoder - 稳定高速的 AI 编程中转站" />
    <meta property="og:description" content="统一模型路由，兼容 AI 编程工具。一个 Key，三种协议，替换 Base URL 即可接入 Claude、GPT、Gemini。" />
    <!-- 部署到正式域名后，请把下面两处改为绝对地址（如 https://your-domain/logo.jpg） -->
    <meta property="og:image" content="logo.jpg" />
    <meta property="og:url" content="index.html" />
    <meta property="og:site_name" content="Pigcoder" />
    <meta property="og:locale" content="zh_CN" />
    <meta property="og:locale:alternate" content="en_US" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Pigcoder - 稳定高速的 AI 编程中转站" />
    <meta name="twitter:description" content="统一模型路由，兼容 AI 编程工具。一个 Key，三种协议，替换 Base URL 即可接入。" />
    <meta name="twitter:image" content="logo.jpg" />
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="logo.jpg" rel="icon" type="image/jpeg" />
    <script src="theme.js?v=20260623-dark-tokens"></script>
    <link rel="preload" href="fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="fonts/space-grotesk-latin.woff2" as="font" type="font/woff2" crossorigin />
    <link href="common.css?v=20260623-dark-tokens" rel="stylesheet" />
</head>

<body
    class="bg-custom-wash dark:bg-custom-navy-deep font-body text-custom-ink dark:text-white selection:bg-custom-gold selection:text-white transition-colors duration-300">
    <a href="#main-content" class="skip-link" data-i18n="common.skip">跳到主要内容</a>
    <div id="site-header"></div>

    <main id="main-content">
        <!-- Hero：非对称分栏，左文案 + 右单一真实终端 -->
        <section class="hero-modern relative overflow-hidden border-b border-custom-line/70 dark:border-white/10">
            <div class="surface-gradient-hero"></div>
            <div class="orb-gold-hero"></div>
            <div class="section-shell-wide py-16 md:py-24">
                <div class="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
                    <div class="text-left">
                        <span class="kicker mb-5">
                            <span class="material-symbols-outlined text-sm text-custom-gold" data-icon="bolt" aria-hidden="true">bolt</span>
                            <span data-i18n="index.hero.badge">AI Model Router / API Gateway</span>
                        </span>
                        <h1 data-i18n-html="index.hero.title"
                            class="text-[2.3rem] sm:text-4xl md:text-5xl xl:text-6xl font-bold font-headline tracking-[-0.045em] text-custom-ink dark:text-white mb-6 leading-[1.05] text-balance">
                            统一模型路由 <span class="brand-emphasis">兼容 AI 编程工具</span>
                        </h1>
                        <p data-i18n="index.hero.description"
                            class="text-custom-muted dark:text-slate-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed text-pretty">
                            面向编程 CLI 的统一 API 入口，替换 Base URL 即可在 Claude、GPT、Gemini 间路由。
                        </p>
                        <div data-partial="partials/cta-actions.html"
                            data-wrapper-class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                            data-primary-href="https://sub2.pigcoder.com/login"
                            data-primary-class="btn-primary btn-primary-gold w-full sm:w-auto px-8 py-3.5 text-base"
                            data-primary-label="获取 API Key"
                            data-primary-i18n="common.cta.start"
                            data-secondary-href="docs.html"
                            data-secondary-class="btn-secondary w-full sm:w-auto px-8 py-3.5 text-base"
                            data-secondary-label="查看接入文档"
                            data-secondary-i18n="common.cta.docs">
                            <!-- partial 加载失败时的最小降级：仅保留主操作（正常情况下由 partial 覆盖） -->
                            <a href="https://sub2.pigcoder.com/login" class="btn-primary btn-primary-gold w-full sm:w-auto px-8 py-3.5 text-base">获取 API Key</a>
                        </div>
                    </div>

                    <!-- 单一真实终端：实际可执行的接入命令 -->
                    <div class="hero-terminal-card hero-terminal-lg" aria-label="Pigcoder 接入命令示例">
                        <div class="flex items-center justify-between border-b border-white/10 px-4 py-3">
                            <div class="flex gap-1.5" aria-hidden="true">
                                <span class="h-2.5 w-2.5 rounded-full bg-red-400"></span>
                                <span class="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
                                <span class="h-2.5 w-2.5 rounded-full bg-green-400"></span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="font-mono text-xs text-white/45">bash</span>
                                <button type="button" class="terminal-copy" data-copy="export ANTHROPIC_BASE_URL=https://sub2.pigcoder.com&#10;export ANTHROPIC_API_KEY=sk-pig-xxxx&#10;claude" data-i18n-attr="aria-label:common.copy" aria-label="复制">
                                    <span class="material-symbols-outlined text-[18px]" data-copy-icon aria-hidden="true">content_copy</span>
                                </button>
                            </div>
                        </div>
                        <div class="space-y-2.5 p-5 font-mono text-sm leading-6">
                            <p><span class="text-custom-gold">$</span> export ANTHROPIC_BASE_URL=<span class="text-green-300">https://sub2.pigcoder.com</span></p>
                            <p><span class="text-custom-gold">$</span> export ANTHROPIC_API_KEY=<span class="text-green-300">sk-pig-••••</span></p>
                            <p><span class="text-custom-gold">$</span> claude</p>
                            <p class="text-white/55">→ routed to Anthropic · 200k ctx · thinking</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 端点带：三协议真实 Base URL -->
        <section class="section-block-tight relative overflow-hidden border-b border-custom-line/60 dark:border-white/10">
            <div class="section-shell">
                <div class="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <h2 data-i18n="index.endpoints.title" class="text-lg font-semibold text-custom-ink dark:text-white">端点地址</h2>
                    <p data-i18n="index.endpoints.note" class="text-sm text-custom-muted dark:text-slate-400">一个 Key，三种协议，替换 Base URL 即可接入。</p>
                </div>
                <div class="endpoint-band">
                    <button type="button" class="endpoint-chip" data-copy="https://sub2.pigcoder.com/v1" data-i18n-attr="aria-label:common.copy" aria-label="复制">
                        <span class="endpoint-proto">OpenAI</span>
                        <code>https://sub2.pigcoder.com/v1</code>
                        <span class="endpoint-copy material-symbols-outlined" data-copy-icon aria-hidden="true">content_copy</span>
                    </button>
                    <button type="button" class="endpoint-chip" data-copy="https://sub2.pigcoder.com" data-i18n-attr="aria-label:common.copy" aria-label="复制">
                        <span class="endpoint-proto">Anthropic</span>
                        <code>https://sub2.pigcoder.com</code>
                        <span class="endpoint-copy material-symbols-outlined" data-copy-icon aria-hidden="true">content_copy</span>
                    </button>
                    <button type="button" class="endpoint-chip" data-copy="https://sub2.pigcoder.com/v1beta" data-i18n-attr="aria-label:common.copy" aria-label="复制">
                        <span class="endpoint-proto">Gemini</span>
                        <code>https://sub2.pigcoder.com/v1beta</code>
                        <span class="endpoint-copy material-symbols-outlined" data-copy-icon aria-hidden="true">content_copy</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- 能力区：一个主面板 + 三条支撑行 -->
        <section class="section-block relative overflow-hidden">
            <div class="surface-gradient-main"></div>
            <div class="section-shell">
                <div class="mb-10 max-w-2xl">
                    <h2 data-i18n="index.choose.title"
                        class="text-2xl md:text-3xl lg:text-4xl font-bold font-headline text-custom-ink dark:text-white">路由与接入能力</h2>
                </div>
                <div class="cap-grid">
                    <div class="cap-primary">
                        <span class="material-symbols-outlined text-3xl text-custom-gold mb-4" data-icon="hub" aria-hidden="true">hub</span>
                        <h3 data-i18n="index.features.protocol.title" class="text-2xl font-semibold mb-3 text-custom-ink dark:text-white">协议兼容</h3>
                        <p data-i18n="index.features.protocol.description" class="text-custom-muted dark:text-slate-400 leading-7 max-w-md">兼容 OpenAI / Anthropic / Gemini 常用协议，只需替换 Base URL 即可接入。</p>
                    </div>
                    <div class="cap-rows">
                        <div class="cap-row">
                            <span class="material-symbols-outlined text-2xl" data-icon="cloud_done" aria-hidden="true">cloud_done</span>
                            <div>
                                <h3 data-i18n="index.features.channel.title" class="text-base font-semibold mb-1 text-custom-ink dark:text-white">模型渠道</h3>
                                <p data-i18n="index.features.channel.description" class="text-sm text-custom-muted dark:text-slate-400 leading-6">按 Claude、Codex、Gemini 等模型渠道组织能力，便于按工具选择。</p>
                            </div>
                        </div>
                        <div class="cap-row">
                            <span class="material-symbols-outlined text-2xl" data-icon="memory" aria-hidden="true">memory</span>
                            <div>
                                <h3 data-i18n="index.features.context.title" class="text-base font-semibold mb-1 text-custom-ink dark:text-white">上下文能力</h3>
                                <p data-i18n="index.features.context.description" class="text-sm text-custom-muted dark:text-slate-400 leading-6">展示 200k、1M、thinking、WebSearch 等上下文和模型特性。</p>
                            </div>
                        </div>
                        <div class="cap-row">
                            <span class="material-symbols-outlined text-2xl" data-icon="account_balance_wallet" aria-hidden="true">account_balance_wallet</span>
                            <div>
                                <h3 data-i18n="index.features.ratio.title" class="text-base font-semibold mb-1 text-custom-ink dark:text-white">倍率透明</h3>
                                <p data-i18n="index.features.ratio.description" class="text-sm text-custom-muted dark:text-slate-400 leading-6">每个渠道直接展示倍率和能力标签，避免包装成传统套餐。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 覆盖区：真实 provider logo + 渠道对比卡 -->
        <section id="models" class="section-block relative overflow-hidden">
            <div class="surface-gradient-alt"></div>
            <div class="section-shell">
                <div class="mb-8 max-w-2xl">
                    <span class="section-eyebrow" data-i18n="index.matrix.eyebrow">Routing Matrix</span>
                    <h2 data-i18n="index.models.title" class="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold font-headline text-custom-ink dark:text-white">Provider 与模型覆盖</h2>
                    <p data-i18n="index.matrix.description" class="mt-3 text-custom-muted dark:text-slate-400 leading-7">Pigcoder 强调模型渠道、协议、上下文和能力标签，方便开发者判断该走哪条路由。</p>
                </div>
                <!-- 真实品牌 logo（内联 Simple Icons 官方路径，currentColor 自适应深浅色） -->
                <div class="provider-logos mb-9" aria-label="支持的模型厂商">
                    <svg class="provider-logo-svg logo-anthropic" viewBox="0 0 24 24" role="img" aria-label="Anthropic" xmlns="http://www.w3.org/2000/svg"><title>Anthropic</title><path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/></svg>
                    <svg class="provider-logo-svg logo-openai" viewBox="0 0 24 24" role="img" aria-label="OpenAI" xmlns="http://www.w3.org/2000/svg"><title>OpenAI</title><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>
                    <svg class="provider-logo-svg logo-gemini" viewBox="0 0 24 24" role="img" aria-label="Google Gemini" xmlns="http://www.w3.org/2000/svg"><title>Google Gemini</title><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>
                    <span class="provider-mono" data-i18n="index.models.zhipu">智谱</span>
                </div>
                <div class="channel-grid">
                    <article class="channel-compare">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-xl font-bold text-custom-ink dark:text-white">Claude</h3>
                            <span class="channel-pill">Anthropic</span>
                        </div>
                        <dl class="channel-specs">
                            <div>
                                <dt data-i18n="index.matrix.columns.context">上下文 / 能力</dt>
                                <dd>200k / 1M · thinking · WebSearch</dd>
                            </div>
                            <div>
                                <dt data-i18n="index.matrix.columns.tools">适用工具</dt>
                                <dd>Claude Code</dd>
                            </div>
                        </dl>
                    </article>
                    <article class="channel-compare">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-xl font-bold text-custom-ink dark:text-white">Codex</h3>
                            <span class="channel-pill">OpenAI</span>
                        </div>
                        <dl class="channel-specs">
                            <div>
                                <dt data-i18n="index.matrix.columns.context">上下文 / 能力</dt>
                                <dd>gpt-5.x · xhigh · OpenAI compatible</dd>
                            </div>
                            <div>
                                <dt data-i18n="index.matrix.columns.tools">适用工具</dt>
                                <dd>Codex CLI / OpenCode</dd>
                            </div>
                        </dl>
                    </article>
                    <article class="channel-compare">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-xl font-bold text-custom-ink dark:text-white">Gemini</h3>
                            <span class="channel-pill">Gemini v1beta</span>
                        </div>
                        <dl class="channel-specs">
                            <div>
                                <dt data-i18n="index.matrix.columns.context">上下文 / 能力</dt>
                                <dd>thinking · WebSearch · image generation</dd>
                            </div>
                            <div>
                                <dt data-i18n="index.matrix.columns.tools">适用工具</dt>
                                <dd>Gemini CLI</dd>
                            </div>
                        </dl>
                    </article>
                </div>
            </div>
        </section>

        <!-- 接入流程：01-04 编号 stepper -->
        <section class="section-block relative overflow-hidden">
            <div class="surface-gradient-main"></div>
            <div class="section-shell">
                <div class="mb-10 max-w-2xl">
                    <h2 data-i18n="index.integration.title" class="text-2xl md:text-3xl lg:text-4xl font-bold font-headline text-custom-ink dark:text-white">从 API Key 到模型路由</h2>
                    <p data-i18n="index.integration.description" class="mt-3 text-custom-muted dark:text-slate-400 leading-7">Pigcoder 的页面信息围绕开发者接入路径组织：创建密钥、选择协议、替换 Endpoint、观察请求日志。</p>
                </div>
                <ol class="flow-stepper">
                    <li class="flow-step-item">
                        <span class="flow-step">01</span>
                        <div>
                            <h3 data-i18n="index.integration.keys.title" class="text-lg font-semibold text-custom-ink dark:text-white">创建 API Key</h3>
                            <p data-i18n="index.integration.keys.description" class="mt-2 text-sm leading-6 text-custom-muted dark:text-slate-400">在控制台创建令牌，并按工具选择 OpenAI、Anthropic 或 Gemini 分组。</p>
                        </div>
                    </li>
                    <li class="flow-step-item">
                        <span class="flow-step">02</span>
                        <div>
                            <h3 data-i18n="index.integration.protocol.title" class="text-lg font-semibold text-custom-ink dark:text-white">选择协议</h3>
                            <p data-i18n="index.integration.protocol.description" class="mt-2 text-sm leading-6 text-custom-muted dark:text-slate-400">根据 Claude Code、Codex CLI、Gemini CLI 等工具选择对应协议入口。</p>
                        </div>
                    </li>
                    <li class="flow-step-item">
                        <span class="flow-step">03</span>
                        <div>
                            <h3 data-i18n="index.integration.endpoint.title" class="text-lg font-semibold text-custom-ink dark:text-white">替换 Endpoint</h3>
                            <p data-i18n="index.integration.endpoint.description" class="mt-2 text-sm leading-6 text-custom-muted dark:text-slate-400">只改 Base URL 和 API Key，尽量保持原工具配置方式不变。</p>
                        </div>
                    </li>
                    <li class="flow-step-item">
                        <span class="flow-step">04</span>
                        <div>
                            <h3 data-i18n="index.integration.logs.title" class="text-lg font-semibold text-custom-ink dark:text-white">查看日志</h3>
                            <p data-i18n="index.integration.logs.description" class="mt-2 text-sm leading-6 text-custom-muted dark:text-slate-400">通过请求日志追踪模型、渠道、用量、状态和异常原因。</p>
                        </div>
                    </li>
                </ol>
            </div>
        </section>

        <!-- 底部 CTA：单一意图 -->
        <section class="section-block-tight relative overflow-hidden">
            <div class="surface-gradient-main"></div>
            <div class="section-shell">
                <div class="api-cta-panel rounded-2xl p-6 md:p-8">
                    <div class="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <h2 data-i18n="index.bottom.title" class="text-2xl md:text-3xl lg:text-4xl font-bold font-headline text-custom-ink dark:text-white">准备接入 Pigcoder API？</h2>
                            <p data-i18n="index.bottom.description" class="mt-3 text-custom-muted dark:text-slate-400 leading-7">先创建 API Key，再按工具复制对应 Endpoint。文档页提供 Claude Code、Codex CLI、Gemini CLI 和 OpenCode 的接入示例。</p>
                        </div>
                        <div data-partial="partials/cta-actions.html"
                            data-wrapper-class="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3"
                            data-primary-href="https://sub2.pigcoder.com/login"
                            data-primary-class="btn-primary btn-primary-gold w-full px-8 py-3.5 text-base"
                            data-primary-label="获取 API Key"
                            data-primary-i18n="common.cta.start"
                            data-secondary-href="docs.html"
                            data-secondary-class="btn-secondary w-full px-8 py-3.5 text-base"
                            data-secondary-label="查看接入文档"
                            data-secondary-i18n="common.cta.docs">
                            <!-- partial 加载失败时的最小降级：仅保留主操作（正常情况下由 partial 覆盖） -->
                            <a href="https://sub2.pigcoder.com/login" class="btn-primary btn-primary-gold w-full px-8 py-3.5 text-base">获取 API Key</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <div id="site-footer"></div>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var targets = document.querySelectorAll('.cap-primary, .cap-row, .channel-compare, .flow-step-item, .api-cta-panel, .endpoint-chip');
            targets.forEach(function (el) {
                el.classList.add('fade-up');
            });
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
            targets.forEach(function (el) {
                observer.observe(el);
            });

            // 一键复制：端点地址与终端命令
            document.querySelectorAll('[data-copy]').forEach(function (el) {
                el.addEventListener('click', function () {
                    var text = el.getAttribute('data-copy');
                    var icon = el.querySelector('[data-copy-icon]');
                    var i18n = window.PigcoderI18n;
                    var done = function () {
                        if (icon) { icon.textContent = 'check'; }
                        el.classList.add('is-copied');
                        if (i18n) { el.setAttribute('aria-label', i18n.t('common.copied')); }
                        setTimeout(function () {
                            if (icon) { icon.textContent = 'content_copy'; }
                            el.classList.remove('is-copied');
                            if (i18n) { el.setAttribute('aria-label', i18n.t('common.copy')); }
                        }, 1400);
                    };
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        navigator.clipboard.writeText(text).then(done).catch(function () {});
                    } else {
                        var ta = document.createElement('textarea');
                        ta.value = text;
                        document.body.appendChild(ta);
                        ta.select();
                        try { document.execCommand('copy'); done(); } catch (e) {}
                        document.body.removeChild(ta);
                    }
                });
            });
        });
    </script>
    <script src="i18n.js?v=20260623-dark-tokens"></script>
    <script src="components.js?v=20260623-dark-tokens"></script>
    <script src="shared.js?v=20260623-dark-tokens"></script>
</body>

</html>
```

---

## 附：改造时的三个关键提醒

1. **不要只给 AI 抽象描述**——本文档附录已提供具体 hex 值、CSS 变量、组件类、HTML 结构，让 AI 直接照着落地。
2. **不要让 AI 一次全改**——按「执行提示词」里的三阶段（评估映射 → 设计层 → 页面层），每阶段确认。
3. **不要照抄 OpenRouter 的紫色**——只学它的信息架构和克制方法；Pigcoder 的彩色来自深蓝主色 + 金色点睛 + 真实品牌 logo。
