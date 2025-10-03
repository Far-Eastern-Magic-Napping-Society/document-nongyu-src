import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { live2dConfig, getModel } from './config';

const Live2D = () => {
  const { siteConfig } = useDocusaurusContext();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 动态加载 Live2D 脚本
    const loadLive2D = () => {
      // 检查是否已经加载过
      if (window.L2Dwidget) {
        setIsLoaded(true);
        return;
      }

      // 加载 Live2D 脚本
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        try {
          // 获取模型配置
          const model = getModel();
          
          // 初始化 Live2D
          window.L2Dwidget.init({
            model: {
              jsonPath: model.jsonPath,
            },
            display: live2dConfig.display,
            mobile: live2dConfig.mobile,
            react: live2dConfig.react,
            dialog: {
              enable: live2dConfig.dialog.enable,
              script: live2dConfig.dialog.script,
              hitokoto: false,
              hitokotoAPI: '',
              hitokotoMaxLength: 20,
              hitokotoTime: 60000,
              hitokotoText: '一言',
              hitokotoWidth: 250,
              hitokotoHeight: 100,
              hitokotoX: 0,
              hitokotoY: 0,
              hitokotoFont: '12px Microsoft YaHei',
              hitokotoColor: '#191970',
              hitokotoBackground: 'rgba(255, 255, 255, 0.8)',
              hitokotoBorder: '1px solid #ccc',
              hitokotoBorderRadius: '5px',
              hitokotoPadding: '10px',
              hitokotoBoxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              hitokotoZIndex: 9999
            },
          });
          setIsLoaded(true);
        } catch (error) {
          console.error('Live2D 初始化失败:', error);
        }
      };

      script.onerror = () => {
        console.error('Live2D 脚本加载失败');
      };
    };

    // 延迟加载，确保页面完全加载
    const timer = setTimeout(loadLive2D, 1000);

    return () => {
      clearTimeout(timer);
      // 清理 Live2D 实例
      if (window.L2Dwidget) {
        try {
          window.L2Dwidget.destroy();
        } catch (error) {
          console.error('Live2D 清理失败:', error);
        }
      }
    };
  }, []);

  return null; // 不渲染任何控制按钮
};

export default Live2D;
