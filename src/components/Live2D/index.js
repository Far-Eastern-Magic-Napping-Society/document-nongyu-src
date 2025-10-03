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
            dialog: live2dConfig.dialog,
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

  // 添加控制按钮
  const toggleLive2D = () => {
    if (window.L2Dwidget) {
      const widget = document.getElementById('live2d-widget');
      if (widget) {
        widget.classList.toggle('hidden');
      }
    }
  };

  return (
    <>
      {isLoaded && (
        <div 
          style={{
            position: 'fixed',
            bottom: '10px',
            right: '170px',
            zIndex: 10000,
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
          }}
        >
          <button
            onClick={toggleLive2D}
            style={{
              width: '30px',
              height: '30px',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
            }}
            title="切换看板娘显示"
          >
            👋
          </button>
        </div>
      )}
    </>
  );
};

export default Live2D;
