# 部署交接说明（给生产机执行部署的 AI / 运维）

> 本文档随仓库分发。目标：把本静态站部署到 Cloudflare Pages，并且**不弄断**现有 pigcode.ai 上的 API 网关。执行前通读一遍，红线部分务必遵守。

## 项目速览

- 纯静态站点，**`pages/` 目录即最终产物**，无需任何构建步骤（`pages/tailwind.css` 是已提交的编译产物）
- 生产分支：`main`；资源缓存版本号：`?v=20260816-model-lineup`（改动文件后发布需全局升级此串，见 README「日常更新手册」）
- `pages/models-data.json` 约 1.8MB（5,097 个模型的目录数据），是页面必需文件

## 🔴 红线（违反会造成生产事故）

1. **禁止把 `pigcode.ai` 根域名绑定到 Cloudflare Pages。**
   该域名同时承载 sub2api 网关（`/api/*`、`/v1*`、`/login`、控制台）。Pages 绑定自定义域会接管整个主机名，所有用户已配置的 Base URL `https://pigcode.ai` 会立即失效。
   本次部署只允许使用 `*.pages.dev` 域名，或绑定不冲突的子域（如 `www.pigcode.ai`）。
2. **不要改动 pigcode.ai 的现有 DNS 记录**（代理状态、A/CNAME 一律不动）。
3. 如果选择"替换源站静态文件"的部署方式：只覆盖静态文件目录，**不碰网关/反代配置**；必须复制 `pages/` 的**全部内容**（`fonts/`、`model-icons/`、`partials/`、`models-data.json`、全部 css/js），漏掉 `partials/` 页面头尾会渲染为空。

## 推荐执行步骤（Cloudflare Pages，直传方式，全程可用 API/CLI）

```bash
git clone https://github.com/pigzwy/web-pigcoder.git && cd web-pigcoder   # main 分支
# 用机器上已配置的 CF 凭证（CLOUDFLARE_API_TOKEN / ACCOUNT_ID）：
npx wrangler pages project create pigcode-web --production-branch main
npx wrangler pages deploy pages --project-name pigcode-web
```

完成后得到 `pigcode-web.pages.dev` 预览地址。验证清单：

- [ ] 首页标题逐字入场、鼠标划过字符会弹跳；hero 有鼠标金色柔光
- [ ] `/models.html` 统计显示 **5,097 / 60 / 18**，卡片可加载更多、筛选可用
- [ ] `/pricing.html` 分组带厂牌图标，每平台最低倍率卡有金色「最低倍率」徽章
- [ ] `/docs.html` 右侧目录滚动时悬浮不消失
- [ ] 暗色模式与英文切换正常

可选：在 CF 控制台把该 Pages 项目 Connect to Git（仓库 `pigzwy/web-pigcoder`，production branch `main`，build command 留空，output dir `pages`），以后 push 即自动发布。

## 关于价格页「实时数据」

`pricing-cards.js` 运行时会尝试同源请求 `/api/pricing`、`/api/groups`（sub2api 分组接口）。在 pages.dev 域名下这些请求是 404/跨域，会**静默回退**到内置静态快照——这是预期行为，不是 bug。只有静态站与 sub2api 同域部署时实时数据才生效。

## 主域完全迁移（本次不做，仅备忘）

若未来要让 Pages 接管 `pigcode.ai`：需先建 DNS-only 的 `origin.pigcode.ai` 指向 sub2api 源站，并部署 Worker 将 `/api/*`、`/v1*`、`/login*`、控制台全部路径转发到 origin，逐路径核对后再切换。未完成 Worker 前不得绑定主域（见红线 1）。

## 数据更新

模型目录数据刷新：`node scripts/sync-models.js`（拉取开放数据集重写 `pages/models-data.json`），随后升级资源版本号并重新部署。
