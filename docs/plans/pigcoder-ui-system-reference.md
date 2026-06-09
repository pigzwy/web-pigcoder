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

用途：

- Live 状态
- Success 状态
- 可用能力
- 支持标签
- 请求正常状态

使用方式：

- 作为状态语义色。
- 不作为主品牌铺色。

### 4.4 中性色

建议值：

```css
--pc-ink: #0f172a;
--pc-text: #344054;
--pc-muted: #667085;
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

Hero 应该展示平台定位和关键接入信息。

推荐内容：

- 一句话定位
- 简短说明
- 获取 API Key
- 查看接入文档
- Endpoint 面板
- Provider / CLI 状态
- 简短 terminal 示例

推荐标题风格：

- 大号粗体
- 深蓝或深色文字
- 少量金色 underline
- 不使用大面积渐变字

Hero 不应该像传统 SaaS 一样只写抽象卖点。

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

### 6.4 Provider Row

Provider Row 用于展示模型渠道或工具适配状态。

推荐结构：

```text
● Claude Code    200k / 1M context
● Codex CLI      OpenAI compatible
● Gemini CLI     v1beta ready
```

设计要求：

- 左侧使用小色点
- 中间是名称
- 右侧是能力或协议标签
- 适合首页、控制台、模型列表页

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
claude-opus-4-6
claude-sonnet-4-6

Capabilities
200k context
1M context
thinking
WebSearch
Claude Code only
```

设计要求：

- Ratio 使用 tabular nums
- 模型使用 pill 标签
- 能力使用小标签
- CTA 可以是“充值”或“查看控制台”
- 不写成“选择套餐”

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
