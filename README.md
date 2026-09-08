# 舒脉康 - 静脉曲张袜 Hugo 网站模板

一个专为静脉曲张袜/医用弹力袜电商设计的 Hugo 静态网站模板，包含产品展示、科普博客、自定义主题、响应式布局，可一键部署到 GitHub Pages。

## 功能特性

- 完整的电商网站结构（首页、产品中心、科普博客、关于我们、联系我们）
- 4款示例产品（一级预防款、二级治疗中筒、二级治疗长筒、孕妇专用款）
- 3篇专业科普文章（静脉曲张基础知识、选购指南、穿戴保养指南）
- 自定义响应式主题，移动端适配
- 内置 SEO 优化（meta 标签、Open Graph、结构化数据、sitemap）
- GitHub Actions 自动构建部署
- 医疗器械合规提示（备案号、注册证号、免责声明）
- 产品购买按钮（可配置跳转到有赞/微盟等电商平台）

## 目录结构

```
jmqz-hugo-site/
├── config.toml              # 网站配置文件（最重要）
├── archetypes/              # 文章模板
│   ├── default.md           # 默认文章模板
│   └── products.md          # 产品页模板
├── content/                 # 所有内容（Markdown 文件）
│   ├── _index.md            # 首页
│   ├── about.md             # 关于我们
│   ├── contact.md           # 联系我们
│   ├── products/            # 产品页面
│   │   ├── _index.md        # 产品列表页
│   │   ├── level1-zhongtong.md
│   │   ├── level2-zhongtong.md
│   │   ├── level2-changtong.md
│   │   └── maternity.md
│   └── blog/                # 科普博客
│       ├── _index.md
│       ├── what-is-varicose-veins.md
│       ├── how-to-choose.md
│       └── wearing-guide.md
├── layouts/                 # 网站模板（HTML）
│   ├── index.html           # 首页模板
│   ├── _default/
│   │   ├── baseof.html      # 基础布局
│   │   ├── single.html      # 单页模板
│   │   └── list.html        # 列表页模板
│   └── partials/
│       ├── head.html        # <head> 部分
│       ├── header.html      # 页头导航
│       └── footer.html      # 页脚
├── static/                  # 静态资源（直接复制到输出）
│   ├── css/style.css        # 样式文件
│   ├── js/main.js           # 脚本文件
│   ├── favicon.svg          # 网站图标
│   ├── CNAME                # 自定义域名配置
│   └── images/              # 图片目录（需自行添加）
├── .github/workflows/
│   └── hugo.yml             # GitHub Actions 自动部署
├── .gitignore
└── README.md
```

## 快速开始

### 1. 安装 Hugo

**Windows（推荐使用 scoop）：**
```bash
scoop install hugo
```

**Mac：**
```bash
brew install hugo
```

**Linux：**
```bash
sudo apt-get install hugo
# 或从 https://github.com/gohugoio/hugo/releases 下载
```

验证安装：
```bash
hugo version
```

### 2. 本地预览

进入项目目录，启动本地服务器：

```bash
cd jmqz-hugo-site
hugo server
```

然后在浏览器打开 `http://localhost:1313`，即可看到网站。

修改任何内容，页面会自动刷新（热重载）。

### 3. 构建生产版本

```bash
hugo --minify
```

生成的静态文件在 `public/` 目录，可以部署到任何静态托管服务。

## 部署到 GitHub Pages

### 方法一：GitHub Actions 自动部署（推荐）

1. 在 GitHub 创建一个新仓库（如 `jmqz-website`）
2. 将本项目推送到 GitHub：
   ```bash
   git init
   git add .
   git commit -m "初始版本：静脉曲张袜网站"
   git branch -M main
   git remote add origin https://github.com/你的用户名/jmqz-website.git
   git push -u origin main
   ```
3. 进入仓库 → **Settings** → **Pages**
4. Source 选择 **GitHub Actions**
5. 推送代码后，Actions 会自动构建并部署
6. 部署完成后，网站地址为 `https://你的用户名.github.io/jmqz-website/`

### 方法二：手动部署

1. 本地构建：`hugo --minify`
2. 将 `public/` 目录的内容推送到 `gh-pages` 分支
3. 在 Settings → Pages 中选择 `gh-pages` 分支

## 自定义配置

### 修改网站基本信息

编辑 `config.toml`：

```toml
baseURL = "https://www.yourdomain.com/"  # 你的域名
title = "你的品牌名 - 专业静脉曲张袜"
languageCode = "zh-cn"

[params]
  siteName = "品牌名"
  siteSubtitle = "品牌副标题"
  description = "网站描述（用于SEO）"
  keywords = "关键词1,关键词2,关键词3"
  contactPhone = "400-XXX-XXXX"      # 客服电话
  contactWechat = "your-wechat-id"    # 客服微信
  shopUrl = "https://your-shop.youzan.com"  # 电商店铺链接
  icp = "京ICP备XXXXXXXX号"            # ICP备案号
  medicalLicense = "京食药监械经营备XXXXXXXX号"  # 医疗器械经营备案号
```

### 修改导航菜单

在 `config.toml` 的 `[menu]` 部分修改：

```toml
[menu]
  [[menu.main]]
    name = "首页"
    url = "/"
    weight = 1
  [[menu.main]]
    name = "产品中心"
    url = "/products/"
    weight = 2
  # ... 更多菜单项
```

`weight` 越小，排序越靠前。

### 添加新产品

在 `content/products/` 目录下创建新的 `.md` 文件，或使用命令：

```bash
hugo new products/新产品名.md
```

产品页 Front Matter 模板：

```yaml
---
title: "产品名称"
date: 2026-09-01
price: "¥199"              # 价格
pressure: "二级压力（23-32mmHg）"  # 压力等级
style: "中筒"               # 款式
sizes: "S / M / L / XL"    # 尺码
badge: "热销"               # 角标（可选）
summary: "产品简短描述"     # 列表页显示的摘要
categories: ["二级压力", "中筒款"]
pressures: ["二级压力"]     # 用于按压力筛选
audiences: ["静脉曲张患者"] # 适用人群
registrationNo: "京械注准20242090XXX"  # 医疗器械注册证号
buyUrl: ""                  # 单独的购买链接（不填则用全局shopUrl）
toc: true
---
```

然后在正文写产品详情。

### 添加新博客文章

```bash
hugo new blog/文章名.md
```

文章 Front Matter：

```yaml
---
title: "文章标题"
date: 2026-09-01
description: "文章描述（用于SEO）"
categories: ["分类名"]
tags: ["标签1", "标签2"]
toc: true
---
```

### 修改样式

编辑 `static/css/style.css`。主要颜色变量：

- 主色调：`#1a73e8`（蓝色，专业信任）
- 深色：`#1a1a2e`（标题、页脚背景）
- 价格红：`#e53935`
- 背景灰：`#fafbfc`

如需大面积改色，可在 CSS 中搜索替换对应色值。

### 添加产品图片

1. 将图片放入 `static/images/` 目录
2. 在产品页的 Front Matter 中添加：
   ```yaml
   image: "/images/product-1.jpg"
   ```
3. 首页和列表页会自动显示图片

建议图片尺寸：产品图 800x800px，博客封面 1200x750px。

## 绑定自定义域名

### 1. 修改 CNAME 文件

编辑 `static/CNAME`，写入你的域名：

```
www.yourdomain.com
```

### 2. DNS 解析

在域名注册商处添加 DNS 记录：

- **CNAME 记录**：主机记录 `www`，记录值 `你的用户名.github.io`
- **A 记录**（如果要用裸域名）：主机记录 `@`，记录值指向 GitHub Pages IP（185.199.108.153 等）

### 3. 中文域名注意事项

中文域名（如 `静脉曲张.cn`）在 DNS 中会自动转码为 Punycode 格式，按注册商界面操作即可。但建议：
- 同时注册一个拼音域名作为主域名
- 中文域名做 301 跳转到拼音域名
- 部分老浏览器对中文域名支持不完善

### 4. 启用 HTTPS

在 GitHub 仓库 → Settings → Pages → 勾选 **Enforce HTTPS**（DNS 生效后才能勾选）。

## 电商功能接入

本模板为静态网站，电商交易功能需要接入第三方服务：

### 方案一：跳转到有赞/微盟（推荐，最简单）

1. 在有赞或微盟开通店铺，上传产品
2. 将 `config.toml` 中的 `shopUrl` 改为你的店铺链接
3. 每个产品页可单独设置 `buyUrl` 跳转到对应商品页
4. 用户点击"立即购买"跳转到有赞完成下单

### 方案二：Snipcart 嵌入式购物车

1. 注册 [snipcart.com](https://snipcart.com)
2. 获取 API Key
3. 在 `layouts/partials/footer.html` 中添加 Snipcart 的 JS 代码
4. 产品购买按钮改为 Snipcart 格式（参考模板注释）
5. 在 Snipcart 后台配置支付方式

> 注意：Snipcart 对国内支付宝/微信支付支持有限，国内用户建议用方案一。

### 方案三：客服人工接单

起步阶段最简单的方式：
- 购买按钮改为"联系客服"
- 展示客服微信二维码
- 用户添加微信后人工咨询、下单、收款
- 适合验证市场阶段，零技术成本

## 内容更新指南

### 日常更新内容

1. 在本地修改 `content/` 下的 Markdown 文件
2. `hugo server` 预览效果
3. 确认无误后 `git push` 到 GitHub
4. GitHub Actions 自动构建部署，1-2分钟后线上更新

### 批量更新产品

- 每个产品是一个独立的 `.md` 文件，直接编辑即可
- 产品价格、库存等信息在 Front Matter 中修改
- 下架产品：将文件移入 `content/products/draft/` 或删除

### 发布博客文章

1. `hugo new blog/新文章.md`
2. 编辑文章内容
3. 确认 `draft: false`（草稿状态不会发布）
4. 推送部署

## SEO 优化

本模板已内置基础 SEO 优化，还可以做以下增强：

1. **每篇文章设置 description**：Front Matter 中的 `description` 会作为 meta description
2. **提交 sitemap**：网站上线后向百度搜索资源平台、Google Search Console 提交 `sitemap.xml`
3. **友情链接**：与健康类、医疗类网站交换友情链接
4. **内容更新**：保持每周1-2篇科普文章更新
5. **图片 alt**：内容中的图片添加描述性 alt 文本

## 合规注意事项

静脉曲张袜属于二类医疗器械，网站运营需注意：

1. **资质展示**：在网站底部展示《第二类医疗器械经营备案凭证》
2. **宣传合规**：
   - 不使用"治愈""根治""疗效"等绝对化用语
   - 不使用患者名义做疗效证明
   - 产品页标注医疗器械注册证号
   - 包含免责声明（模板已内置）
3. **广告审查**：付费投放医疗器械广告可能需要事先审查
4. **ICP备案**：国内域名需完成 ICP 备案才能正常访问

## 常见问题

**Q：hugo server 启动报错？**
A：确认在项目根目录下运行命令，且 Hugo 版本为最新版。运行 `hugo version` 检查。

**Q：推送后网站没有更新？**
A：进入 GitHub 仓库 → Actions，查看构建是否成功。如果失败，查看日志排查原因。常见原因：Markdown 语法错误、配置文件格式错误。

**Q：图片不显示？**
A：确认图片放在 `static/images/` 目录，且路径引用正确（以 `/` 开头）。检查文件名大小写，Linux 服务器区分大小写。

**Q：中文域名无法访问？**
A：中文域名需要完成 ICP 备案，且部分浏览器/输入法对中文域名支持不完善。建议主用拼音域名，中文域名做跳转。

**Q：可以换成其他主题吗？**
A：可以。下载 Hugo 主题放入 `themes/` 目录，在 `config.toml` 中设置 `theme = "主题名"`。但本模板的自定义布局（产品卡片、购买框等）需要适配新主题。

**Q：如何添加更多页面？**
A：在 `content/` 下创建新的 `.md` 文件即可。如需独立的列表页（如 `/cases/`），创建一个目录并在其中放 `_index.md`。

## 技术支持

如遇到问题，可以：
1. 查阅 [Hugo 官方文档](https://gohugo.io/documentation/)
2. 查看 GitHub Actions 构建日志
3. 检查 Markdown 文件语法（Front Matter 格式、缩进）

## 许可证

本模板仅供学习和商业使用。内容中的产品信息、注册证号等均为示例，上线前请替换为真实信息。

---

**祝你的静脉曲张袜网站运营顺利！**
