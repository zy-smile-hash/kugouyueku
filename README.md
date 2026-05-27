# 酷狗乐库功能模块拆解

一个用于展示酷狗乐库完整页面的手机端预览页面，支持在 GitHub Pages 上部署分享。

## 🎵 功能特性

- 📱 **手机预览模式** - iPhone 风格的真实尺寸预览
- ✨ **精美 UI 设计** - 渐变背景
- 📦 **双文件部署** - 需要同时上传 index.html 和 yuelu_image.png

## 🚀 部署到 GitHub Pages

### 重要提示

**必须同时上传以下两个文件：**
1. [index.html](file:///workspace/index.html) - 主页面文件
2. [yuelu_image.png](file:///workspace/yuelu_image.png) - 乐库页面图片

### 方法一：直接上传到仓库

1. 进入仓库：https://github.com/zy-smile-hash/kugouyueku
2. 点击右上角 **Add file** → **Upload files**
3. 同时选择以下两个文件上传：
   - `index.html`
   - `yuelu_image.png`
4. 等待上传完成，在页面底部填写提交信息
5. 点击 **Commit changes**
6. 进入仓库的 **Settings** → **Pages**
7. 在 **Build and deployment** 部分：
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `main`，文件夹选择 `/ (root)`
8. 点击 **Save**，等待 **3-10 分钟**部署完成

## 📁 文件说明

| 文件 | 说明 | 是否需要上传 |
|------|------|------------|
| [index.html](file:///workspace/index.html) | 主页面文件 | ✅ **必须** |
| [yuelu_image.png](file:///workspace/yuelu_image.png) | 乐库页面图片 | ✅ **必须** |
| README.md | 说明文档 | ✅ 推荐 |
| yuelu_mobile_preview.html | 旧版预览页面 | ❌ 不需要 |
| yuelu_image_base64.txt | base64 编码文件 | ❌ 不需要 |

## 🎨 页面预览

访问：https://zy-smile-hash.github.io/kugouyueku/

## 📱 使用方式

1. 访问部署后的页面
2. 在手机上访问可获得最佳体验
3. 上下滚动查看完整的乐库页面

## 🛠️ 本地开发

```bash
# 克隆项目
git clone <your-repo-url>
cd kugouyueku

# 确保 index.html 和 yuelu_image.png 在同一目录
# 启动本地服务器
python3 -m http.server 8000

# 访问 http://localhost:8000
```

## 📄 License

MIT License
