# Pigcode Web

`Pigcode Web` 是 `Pigcode` 的静态官网与接入文档站点，用来承载 AI 模型路由 / API Gateway 定位、CLI/SDK 接入说明、模型目录、渠道倍率与常见问题。

当前站点包含 5 个主导航页面，外加页脚法律页：

- `首页`：展示平台定位、路由能力、模型覆盖和开发者接入路径
- `文档页`：说明控制台注册、API Key、端点地址和常见 CLI 工具配置
- `指南页`：Studio 五种创作说明与实战教程
- `价格页`：展示模型渠道倍率、充值引导和 FAQ
- `模型目录页`：聚合各厂商模型的元数据，支持按类型/厂商/能力/上下文检索
- `隐私政策` / `服务条款`：页脚入口，中英双语

## 项目定位

这个仓库不是业务后端，也不是前端框架工程，而是一个纯静态站点仓库。

适合场景：

- 作为开发者 API 平台官网部署到静态站点环境
- 通过域名访问，为用户提供接入文档、模型目录与渠道价格说明
- 改动 HTML/JS 中的 Tailwind 类名后，本地重新编译 CSS 即可上线

## 日常更新手册

### 1. 更新模型目录数据（最常用）

```bash
node scripts/sync-models.js        # 从开放数据集拉取最新 5000+ 模型并转换写入 pages/models-data.json
```

跑完后按第 4 步升级资源版本号再提交，否则用户浏览器会命中旧数据缓存。

### 2. 改文案 / 页面结构

- 中文文案大多在各 HTML 内联 + `pages/i18n.js`（`data-i18n` 的键以 i18n.js 为准，**两边都要改**）
- 英文文案只在 `pages/i18n.js`
- 价格页分组/倍率：`pages/pricing-cards.js` 顶部 `catalogs`（静态快照）与 `PLATFORM_DEFAULTS`（平台模型/能力行）；线上会自动尝试 `/api/pricing`、`/api/groups` 实时数据，拉到则覆盖静态值

### 3. 改样式

```bash
pnpm build:css                     # 改了 HTML 里的 Tailwind 类名或 tailwind.config.js 后必须重建
```

`pages/common.css` 是手写样式（token、组件、星轨、动效），直接改即生效，无需编译。设计规则见 `docs/DESIGN_DIRECTION.md`（纸·墨·金六条自检）。

### 4. 升级资源版本号（发布前必做）

所有 CSS/JS/JSON 通过 `?v=版本号` 破缓存。发布前全局替换为新值：

```bash
grep -rl "20260820-reviewfix" pages/ | xargs sed -i 's/20260820-reviewfix/新版本号/g'
```

（当前版本号以 `grep -o '?v=[^"]*' pages/index.html | head -1` 查询为准）

### 5. 本地预览

```bash
cd pages && python3 -m http.server 18091   # 服务器公网预览端口，nftables 已放行
```

预览 serve 的是工作区文件，改完刷新即见（改 Tailwind 记得先 build:css）。

## 技术实现

项目当前采用以下实现方式：

- `HTML + Tailwind（预编译）`：页面主体使用静态 HTML，Tailwind 通过根目录 `tailwind.config.js` 预编译为 `pages/tailwind.css`，**无运行时 CDN 依赖**
- `Vanilla JavaScript`：负责主题切换、公共组件注入、FAQ 折叠、价格卡片与模型目录渲染等交互
- `共享样式层`：抽取了统一主题、背景、动画、按钮和卡片样式，减少多页重复
- `Partial 模板机制`：公共头尾、CTA、充值按钮等片段通过运行时加载复用
- `自托管字体`：Inter / Space Grotesk / Material Symbols 字体文件本地托管，无外部请求
- `中英双语`：`i18n.js` 维护中英文案，按 `data-i18n` 键切换

## 目录结构

```text
.
├─ README.md
├─ package.json                # 依赖声明与 CSS 编译脚本
├─ pnpm-lock.yaml
├─ tailwind.config.js          # Tailwind 主题 token（颜色/圆角/字体）
├─ tailwind.input.css          # Tailwind 入口（@tailwind 指令）
├─ scripts/
│  └─ fetch-model-icons.js     # 拉取模型厂商 logo 的工具脚本
├─ docs/                       # 设计文档（开发参考，不部署）
│  ├─ STYLE_TRANSFER_GUIDE.md
│  └─ plans/                   # 设计方向、UI 系统、改版计划等
└─ pages/                      # ← 站点根：部署时上传这个目录的内容
   ├─ index.html               # 首页
   ├─ models.html              # 模型目录页
   ├─ docs.html                # 文档页
   ├─ pricing.html             # 价格页
   ├─ common.css               # 公共样式
   ├─ tailwind.css             # Tailwind 预编译产物（pnpm run build:css 生成）
   ├─ components.js            # 公共 partial 加载与注入逻辑
   ├─ shared.js                # 主题切换、鼠标跟随高亮等共享逻辑
   ├─ i18n.js                  # 中英文案
   ├─ pricing-cards.js         # 价格卡片数据驱动渲染
   ├─ models-catalog.js        # 模型目录筛选与渲染
   ├─ models-data.json         # 模型元数据（运行时 fetch）
   ├─ logo.png                 # 站点 Logo
   ├─ fonts/                   # 自托管字体（woff2）
   ├─ model-icons/             # 厂商 logo（SVG）
   └─ partials/
      ├─ header.html           # 公共头部模板
      ├─ footer.html           # 公共底部模板
      ├─ cta-actions.html      # 双按钮 CTA 模板
      └─ recharge-button.html  # 充值按钮模板
```

## 设计文档说明

`docs/plans/` 中的文档用途如下：

| 文档 | 作用 | 重要性 |
| --- | --- | --- |
| `pigcoder-design-language.md` | 主设计方向 | 最高 |
| `pigcoder-ui-system-reference.md` | 给其它页面复用 | 最高 |
| `pigcoder-design-revamp-plan.md` | 本次改版计划 | 中 |
| `openrouter.ai-DESIGN.md` | OpenRouter 参考 | 参考用 |
| `pigcoder-dark-technical-style-reference.md` | 暗色技术感参考 | 补充用 |

后续让 AI 继续设计或实现页面时，优先使用 `pigcoder-design-language.md` 和 `pigcoder-ui-system-reference.md`如果要做更强的暗色技术感页面，再额外参考 `pigcoder-dark-technical-style-reference.md`。

## 本地预览

推荐通过静态服务器访问，**不建议直接双击 html 用 `file://` 打开**。

原因：

- `pages/partials/*.html` 依赖运行时 `fetch` 加载
- `pages/models-data.json` 依赖运行时 `fetch` 加载
- 直接 `file://` 访问会触发跨源或本地文件读取限制，导致头尾与模型目录加载失败

可选方式：

1. 在 `pages/` 目录启动任意静态服务器：`pnpm dlx serve pages` 或 `python -m http.server`（在 pages 目录下）
2. 部署到测试域名或正式域名进行联调

## 修改样式

改了 HTML/JS 里的 Tailwind 类名后，必须重新编译 CSS（配置在根目录，产物输出到 `pages/tailwind.css`）：

```bash
pnpm install          # 首次安装依赖
pnpm run build:css    # 重新编译 tailwind.css
pnpm run watch:css    # 或开发时开启监听，自动重编译
```

颜色 token 改动需同步两处：`tailwind.config.js` 与 `pages/common.css` 的 `--pc-*` 变量保持一致。

模型厂商图标：`models-data.json` 新增厂商后，运行 `node scripts/fetch-model-icons.js` 自动补齐缺失的 logo。

## 部署说明

这是静态站点仓库，**部署只需上传 `pages/` 目录的内容**到静态服务器（Caddy / Nginx / 对象存储均可）。项目根的 `package.json`、`tailwind.config.js`、`node_modules`、`scripts` 等是构建工具，**不需要上传**。

部署要求：

- 能托管 `pages/` 下的静态资源
- 能通过 HTTP/HTTPS 返回 `partials` 模板文件和 `models-data.json`（页面用 fetch 加载）
- 页面路径与资源路径保持相对引用可用

需重点确认以下文件能被正常访问：

- `pages/common.css`、`pages/tailwind.css`
- `pages/boot.js`、`pages/components.js`、`pages/shared.js`、`pages/i18n.js`
- `pages/pricing-cards.js`、`pages/models-catalog.js`、`pages/models-data.json`
- `pages/partials/*.html`、`pages/model-icons/*.svg`、`pages/fonts/*`

资源引用带 `?v=` 版本号；每次改动样式/脚本时 bump 版本号（全站统一，含 `components.js` 的 `ASSET_VERSION`），浏览器会自动拉取新版避免缓存。Caddy/Nginx 可对带版本号的静态资源开启长缓存（`immutable`），HTML 设 `no-cache`。

## 维护建议

后续维护建议优先按以下方向继续：

1. 在真实域名环境中做浏览器 smoke test，确认 partial 与模型目录的加载体验
2. 将 FAQ、文档中的重复配置块继续做数据化，减轻 `i18n.js` 双写
3. 如果页面数量持续增长，再考虑升级到 Vite / Next.js 等前端工程化方案

## 注意事项

- 这是静态站点仓库，默认不包含后端逻辑（控制台在 `pigcode.ai`，官网只做展示与文档）
- Tailwind 已预编译为本地 `tailwind.css`，字体自托管，**无外部 CDN 依赖**，可部署到受限网络环境
- `pages/models-data.json` 是静态数据文件，不会自动更新；若页面宣称「每日更新」，需要有流程定期重新生成该文件（可配合 `scripts/fetch-model-icons.js` 补新厂商图标）
