# Live2D 看板娘集成说明

本文档介绍如何在农屿文档中心中使用和配置 Live2D 看板娘功能。

## 功能特性

- 🎭 多种 Live2D 模型可选
- 📱 移动端适配
- 💬 交互式对话
- 🎨 自定义样式
- ⚙️ 灵活配置

## 已集成的模型

1. **Unity 酱** - 默认模型，活泼可爱
2. **时雨** - 优雅知性
3. **春** - 温柔治愈

## 使用方法

### 基本使用

Live2D 看板娘已经自动集成到网站中，无需额外配置即可使用。

### 交互功能

- **点击身体**: 触发特殊反应
- **点击脸部**: 触发害羞反应
- **鼠标悬停**: 显示欢迎信息
- **控制按钮**: 点击右下角的 👋 按钮可以显示/隐藏看板娘

### 自定义配置

如需修改配置，请编辑 `src/components/Live2D/config.js` 文件：

```javascript
export const live2dConfig = {
  // 模型配置
  model: {
    current: 0, // 当前使用的模型索引
  },
  
  // 显示配置
  display: {
    position: 'right', // 显示位置
    width: 150,        // 宽度
    height: 300,       // 高度
    hOffset: 0,        // 水平偏移
    vOffset: -20,      // 垂直偏移
  },
  
  // 对话框配置
  dialog: {
    enable: true,
    script: {
      'tap body': '哎呀！别碰我！',
      'tap face': '人家已经不是小孩子了！',
      // 添加更多对话...
    },
  },
};
```

## 添加新模型

1. 在 `config.js` 中的 `models` 数组添加新模型：

```javascript
{
  name: 'new-model',
  jsonPath: 'https://example.com/new-model.model.json',
  displayName: '新模型'
}
```

2. 修改 `current` 值切换到新模型

## 样式自定义

可以通过修改 `src/css/live2d.css` 来自定义样式：

```css
#live2d-widget {
  /* 自定义看板娘容器样式 */
}

.live2d-widget-dialog {
  /* 自定义对话框样式 */
}
```

## 移动端适配

看板娘在移动端会自动缩小显示，可以通过以下配置调整：

```javascript
mobile: {
  show: true,  // 是否在移动端显示
  scale: 0.5,  // 缩放比例
}
```

## 故障排除

### 看板娘不显示

1. 检查网络连接，确保能访问 CDN 资源
2. 查看浏览器控制台是否有错误信息
3. 确认 Live2D 脚本加载成功

### 模型加载失败

1. 检查模型 JSON 文件路径是否正确
2. 确认模型文件可以正常访问
3. 尝试切换到其他模型

### 性能问题

1. 降低模型质量或大小
2. 调整透明度设置
3. 在移动端禁用看板娘

## 技术实现

- 使用 `live2d-widget` 库实现 Live2D 功能
- 通过 React 组件方式集成到 Docusaurus
- 支持动态加载和配置
- 响应式设计，适配各种设备

## 更新日志

- **v1.0.0**: 初始版本，集成基础 Live2D 功能
- 支持多种模型切换
- 添加交互式对话
- 移动端适配优化

---

如有问题或建议，请联系开发团队。
