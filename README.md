# Code_流苏 个人主页

一个静态单页个人主页，基于 [Sn0w](https://github.com/lin-snow/Sn0w) 模板（React + Vite + Tailwind v4）改造。
所有文案、项目、文章、链接都集中在 [`src/content.ts`](src/content.ts) —— 改这一个文件就能改站内一切，无需碰组件代码。

- **线上地址：** <https://www.yueliusu.top/>
- **备用地址：** <https://yueliusu.github.io/yueliusu/>（DNS 未生效或自定义域名失效时用这个；但启用自定义域名后，本路径的资源会因 base 切到 `/` 而失效，详见下方"自定义域名"）
- **仓库：** <https://github.com/yueliusu/yueliusu>
- **作者：** [Code_流苏](https://blog.csdn.net/qq_51646682) — AI 应用开发 / 编程教程 / 计算机科普 / 工具安利

---

## 一、本地开发

需要 Node 22+ 与 npm。

```bash
npm install      # 装依赖
npm run dev      # http://localhost:5173/  开发预览（热更新）
npm run build    # tsc -b && vite build  → 生成 dist/
npm run preview  # 本地预览构建产物
npm run lint     # eslint .
npm run format   # prettier --write .
```

## 二、改了内容怎么发布

站内 99% 的内容只动一个文件：[`src/content.ts`](src/content.ts)。它导出 5 段：

- `intro` — 顶部自我介绍（name / 三段文案 / 状态栏链接）
- `experience` — 履历行（左侧标签 + 右侧日期 stamp）
- `projects` — 项目卡（点击行展开 blurb / 标签 / 链接）
- `artifacts` — 代表作（带斜向手撕便签的日期）
- `links` — 底部 Elsewhere，`heart: true` 会渲染心形 CTA

改完直接：

```bash
git add -A && git commit -m "update: 改了啥" && git push
```

推 `main` 后，GitHub Actions（[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)）约 1 分钟内自动构建并部署到 GitHub Pages。**不需要手动 `npm run build` 再发** —— 服务器上自己构建。

---

## 三、部署机制（GitHub Actions）

启用方式（通常已配好，仅作记录）：

```bash
gh api -X POST repos/yueliusu/yueliusu/pages \
  -f build_type=workflow -f source[branch]=main -f source[path]=/
```

工作流 `.github/workflows/deploy.yml` 的步骤：
1. checkout → setup Node 22 → `npm ci` → `npm run build`
2. `configure-pages` → `upload-pages-artifact`（上传 `dist/`）
3. `deploy-pages` 把 artifact 发布到 Pages

权限：`pages: write` + `id-token: write`；并发限制只保留最新一次部署。

跑挂了怎么看日志：

```bash
gh run watch              # 实时看最新一次
gh run view --log-failed  # 查失败步骤的完整日志
```

## 四、自定义域名 `www.yueliusu.top`

仓库根的 [`public/CNAME`](public/CNAME) 文件内容是 `www.yueliusu.top` —— Vite 构建时把它复制到 `dist/CNAME`，GitHub Pages 据此识别自定义域名，把站点的"根"从 `/<repo>/` 改成 `/`。

### 当前 DNS 配置（Cloudflare 管理）

域名 NS 已从 DNSPod 切到 Cloudflare（`chuck.ns.cloudflare.com` / `nelci.ns.cloudflare.com`），记录如下：

| 类型 | 名称 | 记录值 | 代理 | 说明 |
|---|---|---|---|---|
| CNAME | `www` | `yueliusu.github.io` | DNS only 灰云 | **主站**，走 `*.github.io` wildcard 证书 |
| A | `@` | `185.199.108.153` | DNS only 灰云 | 裸域备用（裸域证书偶发卡签发） |
| A | `@` | `185.199.109.153` | DNS only 灰云 | 裸域备用 |
| A | `@` | `185.199.110.153` | DNS only 灰云 | 裸域备用 |
| A | `@` | `185.199.111.153` | DNS only 灰云 | 裸域备用 |

> **为什么用 `www` 而不是裸域 `yueliusu.top`**：裸域 GitHub Pages HTTPS 证书需要 4 条 A 记录，且 Let's Encrypt ACME 验证在本域名偶发卡在 `authorization_created`。`www` 走 CNAME 到 `yueliusu.github.io`，复用 GitHub 已有的 `*.github.io` wildcard 证书，立即可用。

### 检查并打开 HTTPS

```bash
# 看 GitHub 是否已识别该域名
gh api repos/yueliusu/yueliusu/pages --jq '{html_url, status, https_enforced}'

# 强制 HTTPS（GitHub 会自动签 Let’s Encrypt 证书）
gh api -X PUT repos/yueliusu/yueliusu/pages \
  -F https_enforced=true -f build_type=workflow
```

如果 `https://www.yueliusu.top/` 显示证书错误，是 GitHub 还在签发 Let’s Encrypt 证书，等 10~30 分钟。

### base 路径与备份访问

启用自定义域名后，[`vite.config.ts`](vite.config.ts) 的 `base` 必须是 `"/"`。这意味着资源路径是 `/assets/...`，所以 `yueliusu.github.io/yueliusu/` 这个 GitHub 默认子路径下的资源会 404 —— 这是 GitHub Pages + 自定义域名 + 项目仓库的固有取舍。如果你**临时放弃自定义域名**：

1. 删 `public/CNAME`
2. 把 `vite.config.ts` 的 `base` 改回 `command === "build" ? "/yueliusu/" : "/"`
3. 推一次即可恢复 `yueliusu.github.io/yueliusu/` 访问

---

## 五、改头像 / favicon

头像与 favicon 的源在 [`scripts/make-icon.mjs`](scripts/make-icon.mjs)（一个手绘"流苏"图案，呼应"流苏"这个名字）。改完源 SVG 后重生成所有尺寸：

```bash
node scripts/make-icon.mjs
# 输出：public/icon.svg / favicon-{16,32,96,180}.png / apple-touch-icon.png / favicon.ico
```

页面内贴纸头像（左上角可拖那个）是 `src/assets/avatar-mark.png`，单独换：把新图塞进 `src/assets/`，保持 144×144 即可。

---

## 六、文件索引

| 路径 | 作用 |
|---|---|
| `src/content.ts` | **站内所有文案 / 项目 / 文章 / 链接 —— 主要改这个** |
| `src/App.tsx` | 页面外壳（区域顺序） |
| `src/components/` | 纯展示组件（intro / sections / desk） |
| `src/index.css` | Tailwind + 纸张/便签/手绘风 token |
| `index.html` | `<title>`、SEO meta、JSON-LD |
| `public/CNAME` | 自定义域名声明（`www.yueliusu.top`） |
| `public/{avatar,favicon-*}` | 头像 / favicon 全家桶 |
| `vite.config.ts` | `base` 路径（自定义域名用 `/`，否则用 `/yueliusu/`） |
| `.github/workflows/deploy.yml` | GitHub Actions 自动部署 |

---

## 七、原始模板致谢

本站基于 [lin-snow/Sn0w](https://github.com/lin-snow/Sn0w) 的模板改造，遵循其 AGPL-3.0 协议（见 [`LICENSE`](LICENSE)）。原作是 L1nSn0w 的个人主页，所有页面视觉、手绘风装饰、字体配置都来自他 / 她的设计。