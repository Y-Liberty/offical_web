// Scratch页面交互脚本
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 数字动画效果
    const countElements = document.querySelectorAll('.count-number');
    const statsSection = document.querySelector('.stats-section');
    
    let animated = false;
    
    function animateNumbers() {
        if (animated) return;
        
        countElements.forEach(count => {
            const target = +count.getAttribute('data-count');
            let current = 0;
            const increment = target / 50; // 将目标值分为50步
            const timer = setInterval(() => {
                current += increment;
                count.textContent = Math.floor(current);
                if (current >= target) {
                    count.textContent = target;
                    clearInterval(timer);
                }
            }, 30);
        });
        
        animated = true;
    }
    
    // 监听滚动，当统计部分进入视口时启动动画
    window.addEventListener('scroll', function() {
        if (statsSection) {
            const sectionPos = statsSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight;
            
            if (sectionPos < screenPos - 100) {
                animateNumbers();
            }
        }
    });

    // FAQ折叠效果
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // 切换当前FAQ的状态
            this.classList.toggle('active');
            
            // 关闭其他FAQ
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    otherQuestion.classList.remove('active');
                }
            });
        });
    });

    // 课程大纲折叠效果
    const outlineItems = document.querySelectorAll('.outline-list li');
    
    outlineItems.forEach(item => {
        const heading = item.querySelector('h3');
        if (heading) {
            heading.addEventListener('click', function() {
                // 切换当前项的状态
                item.classList.toggle('active');
                
                // 关闭其他项
                outlineItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        }
    });

    // 图片悬停动画效果
    const introImage = document.querySelector('.intro-image');
    if (introImage) {
        introImage.classList.add('float-animation');
    }

    // 横幅按钮动画效果
    const bannerButtons = document.querySelectorAll('.banner-buttons .btn');
    bannerButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 12px 20px rgba(255, 85, 0, 0.3)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // 课程特点卡片随机浮动效果
    const featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach((box, index) => {
        box.style.animationDelay = `${index * 0.2}s`;
        box.classList.add('float-animation');
    });

    // 移除标题动画效果
    document.querySelectorAll('.section-title h2').forEach(title => {
        title.classList.remove('scroll-animation');
        title.style.opacity = 1;
        title.style.transform = 'none';
    });

    // 模态框效果优化
    const trialModal = document.getElementById('trialModal');
    if (trialModal) {
        trialModal.addEventListener('show.bs.modal', function() {
            document.body.classList.add('modal-open');
        });
        
        trialModal.addEventListener('hidden.bs.modal', function() {
            document.body.classList.remove('modal-open');
        });
    }

    // 回到顶部按钮
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 课程大纲项目立即可见
    document.querySelectorAll('.outline-list li').forEach((item) => {
        item.classList.remove('scroll-animation');
        item.style.opacity = 1;
        item.style.transform = 'none';
    });

    // 角色选择功能实现
    const characterTabs = document.querySelectorAll(".character-tabs li");
    
    characterTabs.forEach(tab => {
        tab.addEventListener("click", function() {
            // 获取当前角色所在的模态框
            const modalBody = this.closest(".modal-body");
            const character = this.getAttribute("data-character");
            
            // 移除所有选项卡的激活状态
            const tabs = modalBody.querySelectorAll(".character-tabs li");
            tabs.forEach(t => t.classList.remove("active"));
            
            // 隐藏所有角色代码
            const codes = modalBody.querySelectorAll(".character-code");
            codes.forEach(code => code.style.display = "none");
            
            // 激活当前选项卡并显示对应代码
            this.classList.add("active");
            modalBody.querySelector(`#${character}-code`).style.display = "block";
        });
    });
}); 