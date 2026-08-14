# Pigcode 品牌资产

全站 logo 的唯一权威来源。需要在别处用 logo 时从这里取，不要从线上页面另存或从 `pages/` 里复制。

## 目录

```
brand/
├─ logo/      主 logo，透明底（日常用这个）
├─ icon/      方形小图标，favicon / app icon 用
├─ social/    社交分享图 1200×630，不透明
├─ vector/    矢量版 SVG
└─ legacy/    改版前的旧素材，仅存档
```

## logo/ —— 主 logo

| 文件 | 尺寸 |
|---|---|
| `logo-640.png` | 640×640（原生最大） |
| `logo-512.png` | 512×512 |
| `logo-256.png` | 256×256 |
| `logo-128.png` | 128×128 |

透明底，图形四周留有呼吸位。**这个留白是刻意的** —— 站点 header 用 `rounded-full` 做圆形裁切，留白保证耳朵尖不被切掉。做圆形头像时用这一组。

## icon/ —— 方形图标

| 文件 | 用途 |
|---|---|
| `favicon.ico` | 浏览器标签页，内含 16/32/48 三种尺寸 |
| `apple-touch-180.png` | iOS 添加到主屏幕，**不透明白底** |
| `icon-180.png` | 180×180 透明版，供其他场景用 |
| `icon-80.png` `icon-64.png` `icon-32.png` `icon-16.png` | 各类小图标，透明 |

和 `logo/` 是**同一图形的不同框取**：这组做过重新裁切居中，图形填满画框。小尺寸下能多占几个像素，更清楚。**不要用于圆形裁切**，会切掉耳朵尖。

**iOS 主屏图标必须用 `apple-touch-180.png` 这个不透明版**。iOS 不支持主屏图标透明，透明区域会被渲染成黑色。这个文件是 RGB 模式、不含 alpha 通道，并留了 8% 边距防止 iOS 的圆角方形遮罩切掉耳朵尖。别拿 `icon-180.png` 当 apple-touch-icon 用。

## social/ —— 社交分享图

`og-image-light.png` / `og-image-dark.png`，1200×630。

**故意做成不透明的**。Twitter/X、微信等平台对透明 PNG 的处理不一致，有的合成到白底、有的黑底，效果不可控。正方形图在时间线里也会被裁切或降级成小图，所以用了 1200×630 横版。

## vector/ —— 矢量

`logo-mark.svg`、`logo.svg`，已移除白底矩形，透明。

**已知缺陷**：两个 SVG 的 `</>` 徽标都被 viewBox 右边缘裁掉了一部分。小尺寸下比位图差，所以站点的 favicon 用的是位图而非 SVG。哪天修了 viewBox 再考虑切回矢量。

## legacy/ —— 旧素材存档

| 文件 | 说明 |
|---|---|
| `logo-640-white-bg.jpg` | 改版前的白底 JPEG，站点长期在用的那版 |
| `logo-2048-original-pigcoder.jpg` | 2048×2048 原图，底部带 **pigcoder** 旧品牌字样 |
| `logo-mark-white-bg.svg` `logo-white-bg.svg` | 带白底矩形的 SVG 旧版 |

只作存档，不要用于新场景。

注意 `logo-2048-original-pigcoder.jpg` 虽然分辨率最高，但它和现用 logo **是不同的美术版本**，不是同一图的高清版 —— 它更扁平、描边更硬，且顶部深蓝描边有个未闭合的断口。拿它当高清源会和线上不一致。

## 当前 logo 是怎么做出来的

从 `legacy/logo-640-white-bg.jpg` 加工而来：

1. **抠白底**：从画布四边做连通区域漫填，只删与边缘连通的近白像素。不能用全局删白 —— logo 内部深蓝描边与黄色圆之间有一道白色月牙，全局删会打穿。
2. **消除毛边**：过渡带像素从确定前景 BFS 外扩取最近前景色 F，按 `P = a·F + (1-a)·255` 反解 alpha 并反预乘。只按亮度阈值切会留一圈灰蓝残留，在深色底上是明显毛边。
3. **加描边**：距离变换生成 16px 宽、45% 不透明度的半透白圈，外沿 1.5px 羽化。用于解决深色模式下深蓝描边 `rgb(12,48,96)` 与深色底 `rgb(10,15,26)` 对比不足、轮廓发糊的问题。浅色底上这圈几乎不可见，无副作用。
4. **清碎片**：连通域分析，保留最大主体，清除底部残留的旧字样碎片。

`logo/` 保持原框取，`icon/` 额外做了重裁居中。

## 改 logo 时要同步的地方

本目录是源头，改完需要手动同步到这些位置：

**web-pigcoder**
- `pages/logo.png` ← `brand/logo/logo-256.png`
- `pages/favicon-32.png` ← `brand/icon/icon-32.png`
- `pages/apple-touch-icon.png` ← `brand/icon/icon-180.png`
- 改完记得 bump `pages/components.js` 里的 `ASSET_VERSION`，否则老访客拿的是缓存

**chat-vue**（独立仓库）
- `public/logo-mark.png`、`web-next/public/logo-mark.png` ← `brand/logo/logo-256.png`
- `public/favicon.ico` ← `brand/icon/favicon.ico`
- `public/favicon-32.png` ← `brand/icon/icon-32.png`
- `web-next/src/app/icon.png` ← `brand/icon/icon-80.png`
- `public/logo-mark.svg`、`public/logo.svg` ← `brand/vector/`
