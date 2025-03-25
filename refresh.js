// 强制刷新缓存脚本
(function() {
  // 禁用所有缓存
  function disableCache() {
    // 添加时间戳参数到所有CSS链接
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    cssLinks.forEach(link => {
      const url = new URL(link.href);
      url.searchParams.set('_t', Date.now());
      link.href = url.toString();
    });
    
    // 添加时间戳到所有脚本
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (script.src && !script.src.includes('refresh.js')) {
        const url = new URL(script.src);
        url.searchParams.set('_t', Date.now());
        script.src = url.toString();
      }
    });
    
    // 添加时间戳到所有图片
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.src) {
        const url = new URL(img.src);
        url.searchParams.set('_t', Date.now());
        img.src = url.toString();
      }
    });
  }
  
  // 在页面加载后执行
  window.addEventListener('DOMContentLoaded', function() {
    // 检查是否需要强制刷新
    const forceRefresh = new URLSearchParams(window.location.search).get('refresh');
    if (forceRefresh === 'true') {
      disableCache();
      
      // 移除URL中的refresh参数，避免循环刷新
      const url = new URL(window.location.href);
      url.searchParams.delete('refresh');
      history.replaceState({}, '', url.toString());
      
      console.log('已强制刷新所有资源缓存');
    } else {
      console.log('可以通过添加?refresh=true参数来强制刷新缓存');
    }
  });
})(); 