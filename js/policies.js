// 政策页面通用JS功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航栏滚动效果
    initNavbar();
    
    // 初始化平滑滚动
    initSmoothScroll();
    
    // 初始化回到顶部按钮
    initBackToTop();
    
    // 为政策内容添加动画效果
    animatePolicyItems();
});

// 导航栏滚动效果
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // 初始检查
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    }
}

// 平滑滚动到锚点
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 回到顶部按钮
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 为政策内容添加动画效果
function animatePolicyItems() {
    const policyItems = document.querySelectorAll('.policy-item');
    
    if (policyItems.length > 0) {
        // 使用 Intersection Observer 实现滚动显示动画
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        policyItems.forEach(item => {
            observer.observe(item);
        });
    }
}

// 添加目录导航（如果存在）
document.addEventListener('DOMContentLoaded', function() {
    const tocContainer = document.querySelector('.policy-toc');
    if (tocContainer) {
        const headings = document.querySelectorAll('.policy-item h3');
        if (headings.length > 0) {
            const tocList = document.createElement('ul');
            tocList.className = 'toc-list';
            
            headings.forEach((heading, index) => {
                const id = `section-${index + 1}`;
                heading.id = id;
                
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `#${id}`;
                link.textContent = heading.textContent;
                
                listItem.appendChild(link);
                tocList.appendChild(listItem);
            });
            
            tocContainer.appendChild(tocList);
        }
    }
});

// 添加搜索功能（如果存在）
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('policy-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const policyItems = document.querySelectorAll('.policy-item');
            
            policyItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // 如果搜索框为空，显示所有项目
            if (searchTerm === '') {
                policyItems.forEach(item => {
                    item.style.display = 'block';
                });
            }
        });
    }
}); 
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航栏滚动效果
    initNavbar();
    
    // 初始化平滑滚动
    initSmoothScroll();
    
    // 初始化回到顶部按钮
    initBackToTop();
    
    // 为政策内容添加动画效果
    animatePolicyItems();
});

// 导航栏滚动效果
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // 初始检查
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    }
}

// 平滑滚动到锚点
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 回到顶部按钮
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 为政策内容添加动画效果
function animatePolicyItems() {
    const policyItems = document.querySelectorAll('.policy-item');
    
    if (policyItems.length > 0) {
        // 使用 Intersection Observer 实现滚动显示动画
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        policyItems.forEach(item => {
            observer.observe(item);
        });
    }
}

// 添加目录导航（如果存在）
document.addEventListener('DOMContentLoaded', function() {
    const tocContainer = document.querySelector('.policy-toc');
    if (tocContainer) {
        const headings = document.querySelectorAll('.policy-item h3');
        if (headings.length > 0) {
            const tocList = document.createElement('ul');
            tocList.className = 'toc-list';
            
            headings.forEach((heading, index) => {
                const id = `section-${index + 1}`;
                heading.id = id;
                
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `#${id}`;
                link.textContent = heading.textContent;
                
                listItem.appendChild(link);
                tocList.appendChild(listItem);
            });
            
            tocContainer.appendChild(tocList);
        }
    }
});

// 添加搜索功能（如果存在）
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('policy-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const policyItems = document.querySelectorAll('.policy-item');
            
            policyItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // 如果搜索框为空，显示所有项目
            if (searchTerm === '') {
                policyItems.forEach(item => {
                    item.style.display = 'block';
                });
            }
        });
    }
}); 