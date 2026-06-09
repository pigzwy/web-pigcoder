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

页面应让开发者一眼看到：

- 支持什么协议
- 支持哪些模型
- Base URL 是什么
- 怎么配置环境变量
- 不同渠道倍率是多少
- 上下文、thinking、WebSearch 等能力支持情况
- 哪些工具可以直接接入

页面不应该有太强“卖课 / 卖套餐 / 企业服务官网”的感觉。

## 4. 色调策略

Pigcoder 保留现有品牌色，但需要克制使用。

### 深蓝

用途：

- 品牌主色
- Header active 状态
- 主标题重点
- 深色代码块
- 结构性强调

感觉：

- 稳定
- 基础设施
- 技术可信

注意：

- 不要大面积铺满整页。
- 避免回到旧版“深蓝科技官网”的视觉。

### 金色

用途：

- 主 CTA
- 标题重点 underline
- 少量高价值提示
- 价格 / 倍率强调

感觉：

- 重点
- 价值
- 行动入口

注意：

- 金色不能太多。
- 避免页面变成“蓝金营销风”。

### 绿色

用途：

- 可用状态
- Live 状态
- 成功状态
- 支持能力标签
- 稳定性提示

感觉：

- 可用
- 正常运行
- 安全通过

注意：

- 绿色不作为大面积品牌铺色。
- 更适合作为状态色和辅助强调色。

### 中性色

主体背景优先使用：

- 白色
- 浅灰
- 浅蓝灰
- 低饱和边框

中性色负责承载信息密度，让模型、倍率、Endpoint、代码块更清晰。

## 5. 设计语言

### 页面组织原则

页面应该围绕“开发者决策路径”组织：

1. 我能不能接入？
2. 用哪个 Endpoint？
3. 支持什么协议？
4. 支持什么模型？
5. 倍率怎么算？
6. 上下文和工具能力如何？
7. 怎么配置工具？
8. 出问题怎么排查？

因此页面模块优先级应该是：

- Hero：一句话定位 + Endpoint / Provider 面板
- Models：模型和渠道能力
- Pricing：倍率和能力表
- Docs：接入步骤和代码块
- FAQ：接入 / 计费 / 工具兼容问题

而不是传统 SaaS 的：

- 大营销标题
- Why us
- 三栏卖点
- 套餐卡
- 客户见证
- 过度情绪化 CTA

### 信息表达原则

优先使用：

- Endpoint
- Provider
- Model
- Ratio
- Context
- Capability
- API Key
- Base URL
- CLI
- Request logs

减少使用：

- 最强战力
- 生产力引擎
- 颠覆体验
- 选择适合你的套餐
- 立即开启智能编程
- 企业级营销式空泛表达

## 6. 小巧思

### 6.1 Endpoint 面板

首页直接展示不同协议的 Base URL：

- OpenAI: `https://sub2.pigcoder.com/v1`
- Anthropic: `https://sub2.pigcoder.com`
- Gemini: `https://sub2.pigcoder.com/v1beta`

目的：

- 开发者不用点进文档，也能立即理解 Pigcoder 是 API Gateway。
- 强化“这是接入平台，不是营销页”的第一印象。

### 6.2 Provider 状态行

使用轻量状态行展示：

- Claude Code
- Codex CLI
- Gemini CLI
- OpenCode

可以附加：

- `OpenAI compatible`
- `200k context`
- `1M context`
- `v1beta ready`
- `Claude Code only`

目的：

- 比普通功能卡更贴近 Model Router。
- 让页面更像开发者基础设施。

### 6.3 倍率标签

价格页不应以“套餐”为主叙事。

推荐表达：

- 模型渠道
- 倍率
- 可用模型
- 能力标签
- 渠道额度

避免表达：

- 套餐
- 订阅套餐
- 选择适合你的 plan
- SaaS pricing tiers

### 6.4 能力标签

模型卡片和价格页可以使用能力标签：

- thinking
- WebSearch
- 200k context
- 1M context
- OpenAI compatible
- Claude Code only
- Image generation

目的：

- 提高信息密度。
- 让开发者快速判断该渠道是否适合当前工具。

### 6.5 代码块优先

首页和文档页都应该保留短代码示例。

示例方向：

```bash
export OPENAI_BASE_URL="https://sub2.pigcoder.com/v1"
export OPENAI_API_KEY="sk-pig-xxxx"
```

目的：

- 让网站更像 API 平台。
- 降低开发者理解成本。

### 6.6 少量品牌 underline

标题重点可以使用金色 underline，而不是大面积渐变文字。

目的：

- 保留 Pigcoder 识别。
- 降低营销感。
- 避免视觉过度浮夸。

### 6.7 Live 状态

使用小绿点 + `Live` 表示路由平台可用状态。

目的：

- 传达“系统在线、可接入”。
- 比大块绿色背景更克制。

## 7. 页面方向

### 7.1 首页

首页应该表达：

> 一个统一入口，连接多个 AI 编程模型和 CLI 工具。

重点模块：

- Hero：Model Router / API Gateway 定位
- Endpoint 面板：OpenAI / Anthropic / Gemini URL
- Provider 卡片：Claude、GPT、Gemini、智谱等
- 能力矩阵：协议兼容、上下文、倍率、日志、CLI 接入
- 简短 CTA：获取 API Key / 查看接入文档

避免：

- “为什么选择我们”太营销
- “生产力加速引擎”太泛
- 大面积深蓝金色科技感
- 传统 SaaS 三栏卖点

### 7.2 价格页

价格页应该更像：

> 模型渠道倍率表。

重点展示：

- 渠道名称
- Provider 类型
- 倍率
- 可用模型
- 上下文能力
- thinking / WebSearch
- 适用工具
- 充值入口

避免：

- “选择适合你的订阅套餐”
- “包月套餐”作为主叙事
- 三栏 SaaS pricing card 既视感
- 用营销语言包装倍率

### 7.3 文档页

文档页方向：

> Developer Docs / Integration Guide。

重点：

- 平台注册
- API Key
- Endpoint
- Claude Code
- Codex CLI
- Gemini CLI
- OpenCode
- CC Switch
- 快速对照表
- 故障排查

文档页应该是最克制、最清晰的页面。

### 7.4 Header / Footer

Header：

- 简洁、低干扰
- 保留首页 / 文档 / 价格 / 控制台
- 当前页面状态清晰
- 语言和主题切换可访问

Footer：

- 链接分组清晰
- 不做过强品牌展示
- 避免社交图标表现得像核心入口

## 8. 组件语言

### Button

按钮应克制：

- Primary：获取 API Key / 控制台
- Secondary：查看接入文档
- Ghost：轻量导航或辅助入口

不要让按钮太像传统 SaaS 销售页的大促 CTA。

### Card

卡片应服务信息扫描：

- Provider Card
- Endpoint Card
- Channel Ratio Card
- Capability Card
- Doc Panel

卡片样式：

- 浅边框
- 轻阴影
- 小圆角
- 信息分区明确
- hover 只做轻微上浮或边框变化

### Code Block

代码块要清晰：

- 支持横向滚动
- Copy 按钮状态明确
- 代码字体稳定
- 重要 endpoint 可快速复制

### Table / Ratio Card

价格信息优先结构化：

- Ratio 使用 tabular nums
- 模型和能力标签可快速扫读
- 不把价格隐藏在长段营销文案中

## 9. 可访问性与交互要求

必须保留：

- `skip-link`
- `focus-visible`
- 所有操作控件用 `button`
- icon-only button 必须有 `aria-label`
- FAQ 使用 `button` + `aria-expanded`
- Modal 支持 Escape 关闭
- 移动端触控目标不小于 44px
- 动画遵循 `prefers-reduced-motion`

移动端注意：

- Header 不应遮挡内容
- Endpoint 长 URL 必须可换行或横向滚动
- 价格卡不要挤压模型标签
- 文档代码块必须可横向滚动

## 10. 验收标准

改版完成后应满足：

- 第一眼能看出 Pigcoder 是 AI Model Router / API Gateway
- 不像普通 SaaS 套餐销售页
- 不像 OpenRouter 复制站
- Pigcoder 蓝 / 金 / 绿品牌色仍然存在，但使用克制
- 首页能直接看到 Endpoint、Provider、模型路由信息
- 价格页能直接看到渠道、倍率、模型、能力标签
- 文档页能快速完成 API Key 和 CLI 接入
- 中英文切换后设计方向不跑偏
- 暗色模式、移动端、FAQ、Modal、复制按钮正常

## 11. 后续修改规则

后续页面实现应优先对照本文档。

如果出现以下倾向，需要主动纠偏：

- 文案变成普通 SaaS 营销话术
- 价格页变成传统套餐销售页
- 大面积使用深蓝 / 金色造成强营销感
- 页面只有视觉效果，缺少模型、协议、倍率、Endpoint 信息
- 模块看起来漂亮但开发者无法快速判断怎么接入

最终目标：

> Pigcoder 前台应该像一个清晰、可信、有信息密度的 AI 模型路由平台，而不是传统 SaaS 官网。
