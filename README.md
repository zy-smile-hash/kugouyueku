# 酷狗乐库 - 手机预览页面

一个交互式的酷狗乐库页面原型，支持功能按钮点击跳转到二级页面。

## 🌐 在线预览

您可以通过以下方式在线预览：

### 方案一：GitHub Pages（推荐）
将此仓库推送到GitHub后，启用GitHub Pages即可通过以下链接访问：
```
https://your-username.github.io/repository-name/yuelu_interactive.html
```

### 方案二：Netlify/Vercel部署
使用Netlify或Vercel一键部署。

## 📱 功能特性

### 可点击跳转的功能按钮（14个）
1. 🔍 搜索
2. 📚 听书
3. 🎵 歌曲/歌单分类
4. 🏆 歌曲排行榜
5. 🎤 歌手分类
6. 📱 APP下载
7. 🏅 勋章收藏馆（含5种勋章说明）
8. 💿 至臻唱片库
9. ⭐ 星光站
10. 🤖 AI写歌
11. 💎 数字专辑
12. 🛒 酷狗商城
13. 🎫 微信小程序
14. 📅 新歌预约

### 专题推荐模块（4个）
- ✨ 编辑精选
- 🔥 热歌榜
- 🎶 新歌速递
- 🎧 热门专区

## 📂 文件结构

```
.
├── yuelu_image.png                # 主页面原图
├── yuelu_interactive.html         # 交互式预览页面（推荐）
├── yuelu_mobile_preview.html      # 简单预览页面
├── images/
│   ├── buttons/                   # 按钮截图
│   │   ├── btn4_ranking.png
│   │   ├── btn5_artists.png
│   │   └── ... (14个按钮)
│   └── modules/                   # 模块截图
│       ├── module1.png
│       ├── module2.png
│       └── ... (17个模块)
└── README.md
```

## 🚀 部署步骤

### 1. 创建GitHub仓库

1. 登录 [GitHub](https://github.com)
2. 点击 "New repository" 创建新仓库
3. 填写仓库名称（如：kugou-music-lib）
4. 设置为 Public（公开）
5. 不要初始化 README
6. 点击 "Create repository"

### 2. 推送代码到GitHub

```bash
# 初始化git仓库（已完成）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit - 酷狗乐库页面预览"

# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送
git branch -M main
git push -u origin main
```

### 3. 启用GitHub Pages

1. 进入仓库的 "Settings" 页面
2. 左侧菜单找到 "Pages"
3. 在 "Source" 部分选择：
   - 分支：`main`（或 `master`）
   - 目录：`/ (root)`
4. 点击 "Save"
5. 等待几分钟，页面会自动部署

## 🎯 本地预览

```bash
# 使用Python启动本地服务器
python3 -m http.server 8000

# 然后在浏览器访问
http://localhost:8000/yuelu_interactive.html
```

## 📝 说明

- 页面使用HTML+CSS+JavaScript纯前端实现
- 所有图片资源已包含在images目录中
- 点击红色高亮区域可跳转到对应二级页面
- 点击返回按钮可回到主页面

## 🔧 技术栈

- HTML5
- CSS3
- Vanilla JavaScript

---
*项目基于飞书wiki页面内容创建，仅供学习和演示使用。*