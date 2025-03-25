/**
 * 图片加载优化
 * 实现WebP格式支持检测和图片懒加载功能增强
 */

// 检测浏览器是否支持WebP格式
function checkWebpSupport() {
    return new Promise(resolve => {
        const webP = new Image();
        webP.onload = webP.onerror = function() {
            resolve(webP.height === 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
}

// 根据WebP支持情况替换图片路径
async function initWebpSupport() {
    // 检测WebP支持
    const webpSupported = await checkWebpSupport();
    
    if (webpSupported) {
        console.log('浏览器支持WebP格式，将优先使用WebP图片');
        
        // 获取所有图片元素
        const images = document.querySelectorAll('img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"]');
        
        // 替换为WebP格式
        images.forEach(img => {
            const currentSrc = img.getAttribute('src');
            const webpSrc = currentSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
            
            // 创建新的图片元素来检测WebP版本是否存在
            const testImg = new Image();
            testImg.onload = function() {
                img.setAttribute('src', webpSrc);
            };
            testImg.onerror = function() {
                // WebP版本不存在，保留原始格式
                console.log('未找到WebP版本:', webpSrc);
            };
            testImg.src = webpSrc;
        });
    }
}

// 图片预加载函数
function preloadCriticalImages() {
    const imagesToPreload = [
        'images/hero/main-banner.jpg',
        'images/logo/logo-primary.png'
    ];
    
    // 对于必要的图片进行预加载
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// 使用IntersectionObserver增强懒加载
function enhanceLazyLoading() {
    // 检查是否支持IntersectionObserver
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // 设置src属性，触发加载
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    
                    // 停止监听已加载的图片
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            // 对于没有加载的图片进行监听
            if (!img.complete) {
                imageObserver.observe(img);
            }
        });
    }
}

// 页面加载完成后执行优化
document.addEventListener('DOMContentLoaded', () => {
    // 预加载关键图片
    preloadCriticalImages();
    
    // 初始化WebP支持
    initWebpSupport();
    
    // 增强懒加载
    enhanceLazyLoading();
}); 