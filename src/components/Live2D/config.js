// Live2D 配置文件
export const live2dConfig = {
  // 模型配置 - 只使用 Unity 酱
  model: {
    jsonPath: 'https://unpkg.com/live2d-widget-model-unitychan@1.0.5/assets/unitychan.model.json',
    name: 'unitychan',
    displayName: 'Unity 酱'
  },

  // 显示配置
  display: {
    position: 'right', // 显示位置：left 或 right
    width: 150, // 宽度
    height: 300, // 高度
    hOffset: 0, // 水平偏移
    vOffset: -20, // 垂直偏移
  },

  // 移动端配置
  mobile: {
    show: true, // 移动端是否显示
    scale: 0.5, // 移动端缩放比例
  },

  // 反应配置
  react: {
    opacity: 0.7, // 透明度
  },

  // 对话框配置
  dialog: {
    enable: true, // 启用对话框
    script: {
      'tap body': '哎呀！别碰我！',
      'tap face': '人家已经不是小孩子了！',
      'tap': '欢迎来到农屿文档中心！',
      'hover': '有什么可以帮助您的吗？',
      'init': '你好！我是农屿的看板娘，有什么可以帮助您的吗？',
      'mouseover': '你好呀~',
      'mouseout': '不要离开我嘛~'
    },
  },

  // 其他配置
  other: {
    // 是否在控制台显示调试信息
    debug: false,
    // 自动隐藏时间（毫秒，0 表示不自动隐藏）
    autoHide: 0,
    // 是否显示控制按钮
    showControls: true
  }
};

// 获取模型配置
export const getModel = () => {
  return live2dConfig.model;
};
