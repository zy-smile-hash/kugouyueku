# 酷狗乐库功能模块拆解

一个用于展示酷狗乐库完整页面的手机端交互式预览页面，支持点击热区查看各功能模块详情。

## 🎵 功能特性

- 📱 **手机预览模式** - iPhone 风格的真实尺寸预览
- 👆 **交互热区** - 点击页面不同区域进入功能详情
- 📋 **功能说明** - 每个模块都有详细的功能说明和交互逻辑
- ✨ **精美 UI 设计** - 渐变背景、动画效果
- 📦 **单文件部署** - 所有内容集成在 index.html 中

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

## 📁 功能模块说明

| 模块 | 位置 | 功能描述 |
|------|------|----------|
| 🔍 搜索 | 顶部搜索栏 | 搜索歌曲、歌手、歌单、MV |
| 🏆 排行榜 | 顶部Tab | 查看各类音乐榜单 |
| 📋 歌单广场 | 顶部Tab | 浏览精选歌单 |
| 🎤 歌手 | 顶部Tab | 浏览歌手列表 |
| 🎪 推荐活动 | 轮播图区域 | 查看平台推荐活动 |
| 📁 本地音乐 | 功能图标区 | 管理本地音乐文件 |
| 📻 电台 | 功能图标区 | 收听各类主题电台 |
| 🎬 MV | 功能图标区 | 观看高清MV视频 |
| 🎧 DJ | 功能图标区 | 收听DJ节目和有声内容 |
| 🎶 推荐歌单 | 推荐区域 | 查看个性化推荐歌单 |
| ✨ 新歌首发 | 新歌区域 | 查看最新发布歌曲 |

## 🎨 页面预览

访问：https://zy-smile-hash.github.io/kugouyueku/

## 📱 使用方式

1. 访问部署后的页面
2. 在手机预览图中点击不同区域（热区）
3. 进入该功能模块的详情页面
4. 点击左上角返回按钮回到首页
5. 在手机上访问可获得最佳体验

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
