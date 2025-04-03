// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 初始化新闻筛选功能
    initNewsFilter();
    
    // 初始化加载更多按钮
    initLoadMore();
    
    // 初始化分享按钮功能
    initShareButtons();
    
    // 初始化新闻卡片动画
    initNewsCardAnimation();
});

// 初始化新闻筛选功能
function initNewsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-grid [data-category]');
    const searchInput = document.getElementById('news-search');
    
    // 筛选按钮点击事件
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 给当前按钮添加active类
            this.classList.add('active');
            
            // 获取当前筛选类别
            const category = this.getAttribute('data-category');
            
            // 筛选新闻卡片
            filterNewsByCategory(category);
            
            // 清空搜索框
            if(searchInput) {
                searchInput.value = '';
            }
        });
    });
    
    // 搜索框输入事件
    if(searchInput) {
        searchInput.addEventListener('input', function() {
            // 移除所有筛选按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 将"全部"按钮设为active
            document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
            
            // 获取搜索关键词
            const keyword = this.value.toLowerCase().trim();
            
            // 如果关键词为空，显示所有新闻
            if(keyword === '') {
                newsCards.forEach(card => {
                    card.style.display = 'block';
                });
                return;
            }
            
            // 根据关键词筛选新闻
            newsCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const content = card.querySelector('p').textContent.toLowerCase();
                const category = card.getAttribute('data-category').toLowerCase();
                
                if(title.includes(keyword) || content.includes(keyword) || category.includes(keyword)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // 搜索按钮点击事件
    const searchBtn = document.querySelector('.search-btn');
    if(searchBtn) {
        searchBtn.addEventListener('click', function() {
            // 触发搜索框的input事件
            const event = new Event('input');
            searchInput.dispatchEvent(event);
        });
    }
    
    // 根据类别筛选新闻
    function filterNewsByCategory(category) {
        // 如果选择全部，显示所有新闻
        if(category === 'all') {
            newsCards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }
        
        // 否则根据类别筛选
        newsCards.forEach(card => {
            if(card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// 初始化加载更多按钮
function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;
    
    // 初始显示的新闻卡片数量
    const initialVisibleCount = 6;
    // 每次加载更多的数量
    const loadMoreCount = 3;
    // 所有新闻卡片
    const newsCards = document.querySelectorAll('.news-grid .col-lg-4');
    // 当前可见的数量
    let visibleCount = initialVisibleCount;
    
    // 初始隐藏超出显示范围的新闻卡片
    hideExtraCards();
    
    // 加载更多按钮点击事件
    loadMoreBtn.addEventListener('click', function() {
        // 增加可见数量
        visibleCount += loadMoreCount;
        
        // 显示新的可见卡片
        showVisibleCards();
        
        // 如果已经显示所有卡片，隐藏加载更多按钮
        if(visibleCount >= newsCards.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
    
    // 隐藏超出显示范围的卡片
    function hideExtraCards() {
        for(let i = 0; i < newsCards.length; i++) {
            if(i >= visibleCount) {
                newsCards[i].style.display = 'none';
            }
        }
        
        // 如果新闻卡片总数小于等于初始显示数量，隐藏加载更多按钮
        if(newsCards.length <= initialVisibleCount) {
            loadMoreBtn.style.display = 'none';
        }
    }
    
    // 显示可见范围内的卡片
    function showVisibleCards() {
        for(let i = 0; i < Math.min(visibleCount, newsCards.length); i++) {
            newsCards[i].style.display = 'block';
            
            // 为新显示的卡片添加淡入动画
            if(i >= visibleCount - loadMoreCount) {
                newsCards[i].classList.add('animate__animated', 'animate__fadeInUp');
                // 动画结束后移除动画类
                setTimeout(() => {
                    newsCards[i].classList.remove('animate__animated', 'animate__fadeInUp');
                }, 1000);
            }
        }
    }
}

// 初始化分享按钮功能
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.btn-share');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 获取当前模态框
            const modal = this.closest('.modal');
            // 获取新闻标题
            const title = modal.querySelector('.modal-title').textContent;
            // 创建分享URL（实际项目中应该使用完整的URL）
            const shareUrl = `${window.location.origin}${window.location.pathname}#${modal.id}`;
            
            // 如果浏览器支持Web Share API
            if(navigator.share) {
                navigator.share({
                    title: title,
                    text: `壹零贰肆少儿编程教育 - ${title}`,
                    url: shareUrl
                })
                .catch(err => {
                    console.error('分享失败:', err);
                    // 回退方案：复制链接到剪贴板
                    fallbackShare(shareUrl);
                });
            } else {
                // 回退方案：复制链接到剪贴板
                fallbackShare(shareUrl);
            }
        });
    });
    
    // 回退分享方案：复制到剪贴板
    function fallbackShare(url) {
        // 创建一个临时输入框
        const input = document.createElement('input');
        input.style.position = 'fixed';
        input.style.opacity = 0;
        input.value = url;
        document.body.appendChild(input);
        
        // 选择并复制文本
        input.select();
        document.execCommand('copy');
        
        // 移除临时输入框
        document.body.removeChild(input);
        
        // 显示复制成功提示
        alert('链接已复制到剪贴板，可以粘贴分享给好友');
    }
}

// 初始化新闻卡片动画
function initNewsCardAnimation() {
    const newsCards = document.querySelectorAll('.news-card');
    
    // 创建观察器选项
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    // 创建观察器实例
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                // 添加动画类
                card.classList.add('animate__animated', 'animate__fadeInUp');
                // 动画结束后移除动画类
                setTimeout(() => {
                    card.classList.remove('animate__animated', 'animate__fadeInUp');
                }, 1000);
                // 停止观察已经显示的卡片
                observer.unobserve(card);
            }
        });
    }, options);
    
    // 对每个新闻卡片应用观察器
    newsCards.forEach(card => {
        observer.observe(card);
    });
    
    // 鼠标悬停效果
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const readMoreBtn = this.querySelector('.read-more');
            if(readMoreBtn) {
                readMoreBtn.classList.add('pulse-effect');
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const readMoreBtn = this.querySelector('.read-more');
            if(readMoreBtn) {
                readMoreBtn.classList.remove('pulse-effect');
            }
        });
    });
}

// 添加滚动动画效果
function addScrollEffects() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    // 创建观察器选项
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    // 创建观察器实例
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // 对每个元素应用观察器
    animateElements.forEach(element => {
        observer.observe(element);
    });
} 