# 🚀 快速获取分享链接

---

## ⚡ 最快方案：Netlify 一键部署（推荐）

### 1分钟搞定！

1. **下载本项目文件夹**
2. **访问 https://app.netlify.com/drop**
3. **直接拖放整个文件夹**
4. **获取你的预览链接！**

---

## 📦 方案二：GitHub Pages（永久链接）

### 完整步骤：

#### 1️⃣ 创建 GitHub 仓库
- 打开：https://github.com/new
- 仓库名：`kugou-music-lib`
- 选择：**Public**
- 不勾选任何选项
- 点击 Create repository

#### 2️⃣ 推送代码
```bash
# 在本目录执行：
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

#### 3️⃣ 启用 GitHub Pages
- 进入仓库 → Settings → Pages
- Source: `main` 分支，`/ (root)` 目录
- 点击 Save
- 等待 2-5 分钟

#### 4️⃣ 获取链接
```
https://你的用户名.github.io/仓库名/yuelu_interactive.html
```

---

## 📖 详细文档

- 查看 [deploy-guide.html](deploy-guide.html) 图形化指南
- 运行 `bash deploy.sh` 查看命令行指南
- 查看 [README.md](README.md) 完整说明

---

## 📱 本地预览
```bash
python3 -m http.server 8000
# 访问 http://localhost:8000/yuelu_interactive.html
```

---

## 💡 提示

- **推荐用 Netlify**，无需注册 GitHub，拖放即用
- GitHub Pages 链接永久，适合长期分享
- 预览主页面：`yuelu_interactive.html`
