# 酷狗乐库功能交互演示

基于酷狗音乐APP乐库PRD文档的交互式功能演示，支持在GitHub Pages上部署分享。

## 🎵 功能特性

- 📱 **手机预览模式** - iPhone 风格的真实尺寸预览
- 🖱️ **可点击功能区域** - 主页面上的功能区域可点击
- 📄 **二级页面详情** - 每个功能模块都有详细的功能说明和交互逻辑
- ✨ **精美 UI 设计** - 渐变背景、平滑过渡动画
- 📦 **双文件部署** - 需要同时上传 index.html 和 yuelu_image.png

## 🎯 功能模块

### 01 顶部导航区
- 搜索框
- 消息通知
- 用户头像

### 02 运营流量区
- Banner轮播
- 活动入口
- 新歌推荐
- 热点资讯

### 03 快捷功能入口区
- 每日推荐
- 歌单
- 电台
- 排行榜
- MV
- KTV
- 彩铃
- 有声

### 04 内容主分区
- 推荐歌单
- 推荐歌曲
- 新歌速递
- 专辑推荐
- 歌手推荐
- 分类浏览

### 05 全局体验区
- 底部导航栏
- 迷你播放器
- 播放控制
- 播放列表
- 音量控制

## 🚀 部署到 GitHub Pages

### 重要提示

**必须同时上传以下两个文件：**
1. [index.html](file:///workspace/index.html) - 主页面文件
2. [yuelu_image.png](file:///workspace/yuelu_image.png) - 乐库页面图片

### 部署步骤

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

## 🎨 页面预览

访问：https://zy-smile-hash.github.io/kugouyueku/

## 📱 使用方式

1. 访问部署后的页面
2. 点击手机中的功能区域（蓝色虚线框）
3. 查看该功能模块的详细说明和交互逻辑
4. 点击左上角返回按钮返回主页面

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
