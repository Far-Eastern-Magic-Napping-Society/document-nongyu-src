# 农屿APP文档中心

这是农屿APP的官方文档中心，使用 [Docusaurus](https://docusaurus.io/) 构建的现代化静态网站。

## 项目介绍

农屿APP是专为四川农业大学学生打造的智慧校园助手，提供纯净无广告的校园服务体验。

### 主要功能
- **课表查询**：简洁的课程表界面，支持旷课记录提醒
- **校园论坛**：食堂评分、课程讨论、生活分享
- **教务信息**：成绩查询、学分统计、专业排名
- **安全社区**：仅限川农学生使用，确保社区环境

## 环境要求

- Node.js 20.0 或更高版本
- npm 或 yarn 包管理器

## 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

## 本地开发

```bash
# 使用 npm
npm start

# 或使用 yarn
yarn start
```

此命令会启动本地开发服务器并打开浏览器窗口。大部分更改会实时反映，无需重启服务器。

访问地址：http://localhost:3000

## 构建项目

```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build
```

此命令会在 `build` 目录中生成静态内容，可以部署到任何静态内容托管服务。

## 部署方法

### 方法一：GitHub Pages 自动部署（推荐）

#### 1. 配置 GitHub Pages

在 GitHub 仓库设置中：
1. 进入 **Settings** → **Pages**
2. 选择 **Source**: "GitHub Actions"
3. 保存设置

#### 2. 使用 Docusaurus 部署命令

**使用 SSH（推荐）：**

```bash
# 使用 npm
USE_SSH=true npm run deploy

# 或使用 yarn
USE_SSH=true yarn deploy
```

**不使用 SSH：**

```bash
# 使用 npm
GIT_USER=<你的GitHub用户名> npm run deploy

# 或使用 yarn
GIT_USER=<你的GitHub用户名> yarn deploy
```

#### 3. 手动部署到 GitHub Pages

如果自动部署有问题，可以手动部署：

```bash
# 1. 构建项目
npm run build

# 2. 进入构建目录
cd build

# 3. 初始化 git 仓库
git init

# 4. 添加远程仓库
git remote add origin https://github.com/nongzhuan555/nongyu.git

# 5. 切换到 gh-pages 分支
git checkout -b gh-pages

# 6. 添加所有文件
git add .

# 7. 提交更改
git commit -m "Deploy docs to GitHub Pages"

# 8. 推送到 gh-pages 分支
git push -f origin gh-pages
```

### 方法二：Vercel 部署

1. 访问 [Vercel](https://vercel.com/)
2. 使用 GitHub 账号登录
3. 导入此仓库
4. 配置构建设置：
   - **Framework Preset**: Docusaurus
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. 点击 **Deploy**

### 方法三：Netlify 部署

1. 访问 [Netlify](https://netlify.com/)
2. 使用 GitHub 账号登录
3. 选择 **New site from Git**
4. 选择此仓库
5. 配置构建设置：
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. 点击 **Deploy site**

### 方法四：手动部署到服务器

1. 构建项目：
```bash
npm run build
```

2. 将 `build` 目录内容上传到服务器
3. 配置 Web 服务器（如 Nginx、Apache）指向上传的目录

#### Nginx 配置示例：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 部署验证

部署完成后，访问以下地址验证：

- **GitHub Pages**: https://nongzhuan555.github.io/nongyu/
- **Vercel**: https://your-project.vercel.app
- **Netlify**: https://your-project.netlify.app

## 常见问题

### 1. 构建失败

```bash
# 清理缓存
npm run clear

# 重新安装依赖
rm -rf node_modules package-lock.json
npm install

# 重新构建
npm run build
```

### 2. 部署到 GitHub Pages 失败

- 检查 GitHub Pages 设置
- 确保仓库是公开的
- 检查 GitHub Actions 权限

### 3. 页面显示 404

- 检查 `baseUrl` 配置
- 确保部署到正确的分支
- 检查文件路径是否正确

## 开发指南

### 添加新文档

1. 在 `docs/` 目录下创建新的 `.md` 文件
2. 在 `sidebars.js` 中添加对应的侧边栏配置
3. 提交并推送更改

### 修改样式

1. 编辑 `src/css/custom.css` 文件
2. 修改组件样式
3. 重新构建项目

### 添加新页面

1. 在 `src/pages/` 目录下创建新的 React 组件
2. 配置路由
3. 更新导航栏

## 贡献指南

1. Fork 此仓库
2. 创建功能分支：`git checkout -b feature/new-feature`
3. 提交更改：`git commit -m 'Add new feature'`
4. 推送分支：`git push origin feature/new-feature`
5. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证。详情请查看 [LICENSE](LICENSE) 文件。

## 联系我们

- **项目地址**: https://github.com/nongzhuan555/nongyu
- **文档地址**: https://nongzhuan555.github.io/nongyu/
- **农屿APP**: https://nongzhuan555.github.io/

---

*农屿APP - 让校园生活更简单*
