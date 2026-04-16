# Pigcoder Web

`Pigcoder Web` 是 `Pigcoder` 的静态官网与接入文档站点，用来承载品牌展示、CLI/SDK 接入说明、价格信息与常见问题。

当前站点包含 3 个核心页面：

- `首页`：展示平台定位、核心能力、模型覆盖和开发者工具箱
- `文档页`：说明控制台注册、API Key、端点地址和常见 CLI 工具配置
- `价格页`：展示套餐、充值引导和 FAQ

## 项目定位

这个仓库不是业务后端，也不是前端框架工程，而是一个纯静态站点仓库。

适合场景：

- 作为品牌官网或产品落地页部署到静态站点环境
- 通过域名访问，为用户提供接入文档与价格说明
- 在不引入构建工具的前提下快速迭代页面内容

## 技术实现

项目当前采用以下实现方式：

- `HTML + Tailwind CDN`：页面主体使用静态 HTML 编写，通过 Tailwind CDN 提供原子类能力
- `Vanilla JavaScript`：负责主题切换、公共组件注入、FAQ 折叠、价格卡片渲染等交互
- `共享样式层`：抽取了统一主题、背景、动画、按钮和卡片样式，减少多页重复
- `Partial 模板机制`：公共头尾、CTA、充值按钮等片段通过运行时加载复用

## 目录结构

```text
.
├─ README.md
├─ docs/
│  └─ plans/                     # 本轮页面重构过程中沉淀的设计与实施文档
└─ pages/
   ├─ index.html                # 首页
   ├─ docs.html                 # 文档页
   ├─ pricing.html              # 价格页
   ├─ common.css                # 公共样式
   ├─ theme.js                  # Tailwind 主题配置
   ├─ components.js             # 公共 partial 加载与注入逻辑
   ├─ shared.js                 # 主题切换等共享逻辑
   ├─ pricing-cards.js          # 价格卡片数据驱动渲染
   ├─ logo.jpg                  # 站点 Logo
   └─ partials/
      ├─ header.html            # 公共头部模板
      ├─ footer.html            # 公共底部模板
      ├─ cta-actions.html       # 双按钮 CTA 模板
      └─ recharge-button.html   # 充值按钮模板
```

## 页面说明

### 首页 `pages/index.html`

用于展示 Pigcoder 的核心卖点，包括：

- Hero 主视觉
- 平台能力亮点
- 模型覆盖
- 开发者工具箱
- 转化 CTA

### 文档页 `pages/docs.html`

用于承载接入说明和常见配置，包括：

- 注册与 API Key 获取
- 端点地址与协议说明
- Claude Code / Codex CLI / Gemini CLI / OpenCode / Droid CLI / CC Switch 配置
- 故障排查

### 价格页 `pages/pricing.html`

用于承载套餐说明与转化内容，包括：

- 价格模式说明
- 订阅/套餐卡片
- 充值引导
- FAQ

## 本地预览

推荐通过静态服务器或域名环境访问，不建议直接双击 `html` 用 `file://` 打开。

原因：

- `pages/partials/*.html` 依赖运行时 `fetch` 加载
- 直接 `file://` 访问通常会触发跨源或本地文件读取限制

可选方式：

1. 使用任意静态服务器在 `pages/` 目录启动预览
2. 部署到测试域名或正式域名进行联调

## 部署说明

这是一个静态站点仓库，部署方式应满足以下条件：

- 能托管 `pages/` 下的静态资源
- 能通过 HTTP/HTTPS 返回 `partials` 模板文件
- 页面路径与资源路径保持相对引用可用

如果部署环境会重写路径，需重点确认以下文件能被正常访问：

- `pages/common.css`
- `pages/theme.js`
- `pages/components.js`
- `pages/shared.js`
- `pages/pricing-cards.js`
- `pages/partials/*.html`

## 最近完成的结构优化

当前仓库已经完成一轮结构收敛，主要包括：

- 抽取公共主题配置与公共样式
- 将 header / footer 模板化
- 为 partial 加入运行时加载与失败兜底
- 抽取可复用 CTA 与充值按钮模板
- 将价格卡片改为数据驱动渲染
- 为异步加载区域增加 skeleton 占位，减少页面跳动

## 维护建议

后续维护建议优先按以下方向继续：

1. 在真实域名环境中做浏览器 smoke test，确认 partial 与 skeleton 的加载体验
2. 将 FAQ、文档中的重复配置块继续做 partial 化或数据化
3. 为 `隐私政策`、`服务条款`、`企业版` 补正式落地页，而不是继续指向占位入口
4. 如果页面数量持续增长，再考虑升级到 Vite / Next.js 等前端工程化方案

## 注意事项

- 这是静态站点仓库，默认不包含后端逻辑
- 当前实现依赖外部 CDN 资源，如 Tailwind CDN 和字体资源
- 若部署到受限网络环境，需要提前评估 CDN 可达性
