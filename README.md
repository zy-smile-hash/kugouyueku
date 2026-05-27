# 酷狗乐库功能模块拆解

一个用于展示酷狗乐库完整页面的手机端预览页面，支持在 GitHub Pages 上部署分享。

## 🎵 功能特性

- 📱 **手机预览模式** - iPhone 风格的真实尺寸预览
- 🖼️ **完整查看模式** - 直接查看完整页面图
- ✨ **精美 UI 设计** - 渐变背景、毛玻璃效果
- 📦 **单文件部署** - 所有资源内嵌在 index.html 中
- 🌐 **完全离线** - 无需外部资源，可直接本地打开

## 🚀 部署到 GitHub Pages

### 方法一：直接上传到仓库

1. 在 GitHub 上创建一个仓库（如 `kugouyueku`）
2. 将本项目的 `index.html` 文件上传到仓库
3. 进入仓库的 **Settings** → **Pages**
4. 在 **Build and deployment** 部分：
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `main` 或 `master`，文件夹选择 `/ (root)`
5. 点击 **Save**，等待几分钟部署完成

### 方法二：使用 GitHub Actions 自动部署

也可以配置 GitHub Actions 来自动部署。

## 📁 文件说明

| 文件 | 说明 |
|------|------|
| [index.html](file:///workspace/index.html) | 主页面文件（已包含所有资源） |
| yuelu_image.png | 原始页面图片（不参与部署） |
| yuelu_mobile_preview.html | 旧版预览页面 |

## 🎨 页面预览

访问：https://zy-smile-hash.github.io/kugouyueku/

## 📱 使用方式

1. 访问部署后的页面
2. 点击「📱 手机预览」查看 iPhone 模拟器效果
3. 点击「🖼️ 完整查看」直接浏览完整页面
4. 在手机上访问可获得最佳体验

## 🛠️ 本地开发

```bash
# 克隆项目
git clone <your-repo-url>
cd kugouyueku

# 启动本地服务器
python3 -m http.server 8000

# 访问 http://localhost:8000
```

## 📄 License

MIT License
