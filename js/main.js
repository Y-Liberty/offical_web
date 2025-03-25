// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 初始化返回顶部按钮
    initBackToTop();
    
    // 初始化滚动导航效果
    initScrollNavigation();
    
    // 初始化表单提交事件
    initFormSubmission();
    
    // 初始化图片延迟加载
    initLazyLoading();
    
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // 判断滚动方向
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            // 向下滚动且不在顶部时隐藏导航栏
            navbar.classList.add('navbar-hidden');
        } else {
            // 向上滚动时显示导航栏
            navbar.classList.remove('navbar-hidden');
        }
        
        // 滚动超过50px时添加scrolled类
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 保存当前滚动位置
    });
    
    // 导航链接点击平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // 获取导航栏高度并添加额外的偏移量
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const extraOffset = targetId === '#courses' ? -80 : 0; // 使用负偏移量让课程部分完全显示在顶部
                
                window.scrollTo({
                    top: targetElement.offsetTop - (navbarHeight + extraOffset),
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 下拉菜单交互增强
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            if (window.innerWidth >= 992) {
                this.querySelector('.dropdown-menu').classList.add('show');
            }
        });
        
        dropdown.addEventListener('mouseleave', function() {
            if (window.innerWidth >= 992) {
                this.querySelector('.dropdown-menu').classList.remove('show');
            }
        });
    });
    
    // 课程卡片动画效果
    // 初始化浮动元素动画
    initFloatingElements();
    
    // 课程卡片进入视图时的动画
    const courseCards = document.querySelectorAll('.course-card');
    
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
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // 对每个课程卡片应用观察器
    courseCards.forEach(card => {
        observer.observe(card);
        // 初始设置为隐藏状态
        card.style.opacity = '0';
        
        // 添加延迟以使卡片按顺序出现
        setTimeout(() => {
            card.style.opacity = '1';
        }, 300);
    });
    
    // 为课程卡片添加鼠标跟随效果
    courseCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            // 获取鼠标在卡片内的位置
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // 计算鼠标位置相对于卡片中心的偏移
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // 根据鼠标位置，创建倾斜效果
            const tiltX = (x - centerX) / centerX * 5;
            const tiltY = (y - centerY) / centerY * 5;
            
            // 应用变换
            this.style.transform = `perspective(1000px) rotateX(${-tiltY}deg) rotateY(${tiltX}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        // 鼠标离开卡片时，重置变换
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
});

// 初始化返回顶部按钮
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        // 显示/隐藏返回顶部按钮
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        // 点击返回顶部
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 初始化滚动导航效果
function initScrollNavigation() {
    const header = document.querySelector('.navbar');
    
    if (header) {
        // 页面滚动时导航栏效果
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 100) {
                header.style.padding = '10px 0';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '15px 0';
                header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // 页面内平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // 获取导航栏高度并添加额外的偏移量
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const extraOffset = targetId === '#courses' ? -80 : 0; // 使用负偏移量让课程部分完全显示在顶部
                    
                    // 使用scrollTo代替scrollIntoView以便精确控制偏移量
                    window.scrollTo({
                        top: targetElement.offsetTop - (navbarHeight + extraOffset),
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// 初始化表单提交事件
function initFormSubmission() {
    // 咨询表单和试听表单都通过HTML直接配置为使用FormSubmit服务
    console.log('表单已配置为使用FormSubmit服务，提交后将发送邮件');
    
    // 为试听表单添加模态框关闭功能
    const trialForm = document.querySelector('.trial-form');
    if (trialForm) {
        trialForm.addEventListener('submit', function() {
            // 表单提交后延迟关闭模态框，等待FormSubmit处理
            setTimeout(function() {
                const modal = bootstrap.Modal.getInstance(document.getElementById('trialModal'));
                if (modal) {
                    modal.hide();
                }
            }, 500);
        });
    }
}

// 实现图片延迟加载，提高页面加载性能
function initLazyLoading() {
    const images = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    
                    // 如果有data-src属性，则设置src
                    if (image.getAttribute('data-src')) {
                        image.src = image.getAttribute('data-src');
                        image.removeAttribute('data-src');
                    }
                    
                    imageObserver.unobserve(image);
                }
            });
        });
        
        images.forEach(img => {
            if (img.getAttribute('data-src')) {
                imageObserver.observe(img);
            }
        });
    } else {
        // 不支持IntersectionObserver的降级处理
        images.forEach(img => {
            if (img.getAttribute('data-src')) {
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
            }
        });
    }
}

// 添加课程过滤功能（用于课程页面）
function filterCourses(category) {
    const allCourses = document.querySelectorAll('.course-item');
    
    if (allCourses.length > 0) {
        if (category === 'all') {
            allCourses.forEach(course => {
                course.style.display = 'block';
            });
        } else {
            allCourses.forEach(course => {
                if (course.getAttribute('data-category') === category) {
                    course.style.display = 'block';
                } else {
                    course.style.display = 'none';
                }
            });
        }
    }
}

// 简单的轮播图实现（用于首页或其他需要的地方）
let currentSlide = 0;
function changeSlide(direction, sliderSelector = '.carousel-slides') {
    const slides = document.querySelectorAll(`${sliderSelector} .carousel-slide`);
    
    if (slides.length > 0) {
        // 隐藏当前幻灯片
        slides[currentSlide].classList.remove('active');
        
        // 更新幻灯片索引
        if (direction === 'next') {
            currentSlide = (currentSlide + 1) % slides.length;
        } else {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        }
        
        // 显示新的幻灯片
        slides[currentSlide].classList.add('active');
    }
}

// 自动轮播定时器
function startAutoSlide(interval = 5000, sliderSelector = '.carousel-slides') {
    const slides = document.querySelectorAll(`${sliderSelector} .carousel-slide`);
    
    if (slides.length > 1) {
        return setInterval(() => {
            changeSlide('next', sliderSelector);
        }, interval);
    }
    
    return null;
}

// 初始化FAQ手风琴效果（用于常见问题页面）
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const header = item.querySelector('.faq-header');
            
            if (header) {
                header.addEventListener('click', () => {
                    item.classList.toggle('active');
                });
            }
        });
    }
}

// 初始化浮动元素动画
function initFloatingElements() {
    const floatElements = document.querySelectorAll('.float-element');
    
    floatElements.forEach(element => {
        // 随机位置
        element.style.left = `${Math.random() * 80 + 10}%`;
        element.style.top = `${Math.random() * 80 + 10}%`;
        
        // 随机延迟
        const delay = Math.random() * 5;
        element.style.animationDelay = `${delay}s`;
        
        // 随机动画持续时间
        const duration = Math.random() * 3 + 8;
        element.style.animationDuration = `${duration}s`;
    });
} 