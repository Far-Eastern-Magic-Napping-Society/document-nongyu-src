# EdgeOne Pages 部署错误修复说明

## 🐛 问题原因

EdgeOne Pages 部署失败的原因是 **Docusaurus 检测到了断开的链接（Broken Links）**。

### 错误信息解析

```
Error: Docusaurus found broken links!
- broken link on source page path = /docs/next/my-custom-url:
   -> linking to /create-a-page
   -> linking to ./create-a-page.md (resolved as: /docs/next/create-a-page.md)
```

**问题所在**：
- 文件 `docs/my-doc.md` 中引用了 `./create-a-page.md`
- 但该文件实际位置是 `docs/tutorial-basics/create-a-page.md`
- 链接路径不正确导致 Docusaurus 无法解析

## ✅ 已完成的修复

1. **修复了 `docs/my-doc.md` 中的断开链接**
   - 原来：`./create-a-page.md`
   - 修改为：`./tutorial-basics/create-a-page.md`

2. **提交并推送到 GitHub**
   ```bash
   git add -A
   git commit -m "修复断开的链接并更新中文化配置"
   git push
   ```

## 🔍 为什么本地能运行但部署失败？

### 本地开发 (`npm start`)
- 使用**开发模式**，对链接检查较宽松
- 可能只显示警告而不中断运行
- 主要关注开发体验

### 生产构建 (`npm run build` 或 EdgeOne Pages)
- 使用**生产模式**，严格检查所有链接
- `onBrokenLinks: 'throw'` 配置会导致构建失败
- 确保部署的网站没有 404 链接

## 📋 配置选项

在 `docusaurus.config.js` 中可以配置链接检查行为：

```javascript
module.exports = {
  // 严格模式（推荐用于生产）
  onBrokenLinks: 'throw',  // 发现断开链接时抛出错误并停止构建
  
  // 宽松模式（不推荐）
  onBrokenLinks: 'warn',   // 只显示警告，继续构建
  onBrokenLinks: 'ignore', // 完全忽略断开链接
};
```

**建议**：保持 `'throw'` 配置，确保网站质量！

## 🚀 现在可以重新部署了

修复完成并推送到 GitHub 后，EdgeOne Pages 会自动触发新的构建，或者您可以手动重新部署。

### 方法 1：EdgeOne Pages 自动重新部署
如果您的 EdgeOne Pages 配置了自动部署，推送代码后会自动重新构建。

### 方法 2：手动触发部署
在 EdgeOne Pages 控制台中点击"重新部署"按钮。

### 方法 3：使用 MCP 工具重新部署
```bash
# 确保代码已推送到 GitHub
# 然后使用 EdgeOne Pages MCP 工具部署
```

## 🔧 常见的 Broken Links 问题

### 1. 相对路径错误
❌ 错误：`./create-a-page.md`（文件不在当前目录）
✅ 正确：`./tutorial-basics/create-a-page.md`

### 2. 绝对路径缺少文件扩展名
❌ 错误：`/docs/intro`（在某些配置下可能失败）
✅ 正确：`/docs/intro.md` 或 `/docs/intro`（取决于配置）

### 3. 引用不存在的文件
❌ 错误：链接到已删除或未创建的文件
✅ 正确：确保所有引用的文件都存在

### 4. 大小写问题
❌ 错误：`./Hello.md`（实际文件是 `hello.md`）
✅ 正确：`./hello.md`（Linux 系统区分大小写）

## 🛠️ 如何检查 Broken Links

### 本地检查
```bash
# 运行生产构建，会检查所有链接
npm run build

# 如果有断开链接，构建会失败并显示详细信息
```

### 检查输出
构建时注意这些警告和错误：
- `[WARNING] Markdown link with URL ... couldn't be resolved`
- `[ERROR] Error: Docusaurus found broken links!`

## 📝 最佳实践

1. **使用相对路径**
   ```markdown
   [链接到同目录文件](./sibling.md)
   [链接到子目录文件](./subfolder/child.md)
   [链接到父目录文件](../parent.md)
   ```

2. **定期运行生产构建**
   ```bash
   npm run build
   ```
   在开发过程中定期检查，避免积累问题。

3. **使用 VS Code 插件**
   - 安装 Markdown 链接检查插件
   - 实时检测断开的链接

4. **提交前检查**
   ```bash
   npm run build  # 确保没有构建错误
   git add .
   git commit -m "your message"
   git push
   ```

## ✅ 修复完成清单

- [x] 修复了 `docs/my-doc.md` 中的断开链接
- [x] 提交更改到 Git
- [x] 推送到 GitHub
- [ ] 等待 EdgeOne Pages 重新部署
- [ ] 验证网站可以访问

## 🎉 预期结果

修复后，EdgeOne Pages 部署应该会成功，您将看到：
```
✔ Client: Compiled successfully
✔ Server: Compiled successfully
[SUCCESS] Website built successfully
```

然后您的网站就可以通过 EdgeOne Pages 提供的 URL 访问了！
