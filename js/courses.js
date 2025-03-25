// 课程体系页面脚本

document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 初始化Bootstrap工具提示
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // 页面标题动画效果
    setTimeout(function() {
        document.querySelector('.page-title-section h1').classList.add('animate__animated', 'animate__fadeInUp');
        setTimeout(function() {
            document.querySelector('.page-title-section p').classList.add('animate__animated', 'animate__fadeInUp');
            setTimeout(function() {
                document.querySelector('.page-title-section .breadcrumb').classList.add('animate__animated', 'animate__fadeInUp');
            }, 300);
        }, 300);
    }, 100);

    // 标题装饰元素动画
    const decorationItems = document.querySelectorAll('.decoration-item');
    decorationItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('active');
        }, index * 200);
    });

    // 课程过滤功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    // 根据年龄范围定义过滤条件
    const ageRanges = {
        'kindergarten': [4, 6],  // 4-6岁
        'primary': [7, 12],     // 7-12岁
        'junior': [13, 15],     // 13-15岁
        'senior': [16, 18]      // 16-18岁
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的active类
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            
            // 检查是否有匹配的课程
            let hasMatches = false;
            
            // 收集并排序匹配的课程
            const matchedCards = [];
            const unmatchedCards = [];
            
            courseCards.forEach(card => {
                // 获取课程年龄文本
                const ageText = card.querySelector('.course-age').textContent.trim();
                // 提取年龄范围
                const ageMatch = ageText.match(/(\d+)-(\d+)岁/);
                
                let shouldShow = false;
                
                if (filter === 'all') {
                    // 显示所有课程
                    shouldShow = true;
                } else if (ageMatch) {
                    // 获取课程的最小和最大年龄
                    const minAge = parseInt(ageMatch[1]);
                    const maxAge = parseInt(ageMatch[2]);
                    
                    // 获取过滤器的年龄范围
                    const filterRange = ageRanges[filter];
                    
                    // 检查是否有重叠
                    // 课程年龄范围与过滤器年龄范围有重叠即显示
                    if (filterRange) {
                        const [filterMin, filterMax] = filterRange;
                        shouldShow = (maxAge >= filterMin && minAge <= filterMax);
                    }
                }
                
                // 收集匹配和不匹配的卡片
                if (shouldShow) {
                    matchedCards.push({
                        card: card,
                        minAge: ageMatch ? parseInt(ageMatch[1]) : 0,
                        element: card.parentElement
                    });
                    hasMatches = true;
                } else {
                    unmatchedCards.push(card.parentElement);
                }
            });
            
            // 按年龄排序匹配的卡片
            matchedCards.sort((a, b) => a.minAge - b.minAge);
            
            // 获取课程容器
            const courseContainer = document.querySelector('.courses-section .row');
            
            // 首先隐藏所有卡片
            unmatchedCards.forEach(element => {
                element.style.display = 'none';
            });
            
            // 然后按排序顺序显示匹配的卡片
            matchedCards.forEach((item, index) => {
                const element = item.element;
                // 重新添加到容器以保持排序
                courseContainer.appendChild(element);
                element.style.display = 'block';
                
                // 添加淡入动画
                setTimeout(() => {
                    item.card.style.opacity = '1';
                    item.card.style.transform = 'translateY(0)';
                }, index * 50 + 50);
            });

            // 处理无课程情况
            const noCoursesMessage = document.getElementById('no-courses-message');
            if (!hasMatches) {
                if (!noCoursesMessage) {
                    const message = document.createElement('div');
                    message.id = 'no-courses-message';
                    message.className = 'col-12 text-center py-5 mt-4';
                    message.innerHTML = `
                        <div class="alert alert-info">
                            <i class="bi bi-info-circle me-2"></i>
                            暂时没有该年龄段的课程，请选择其他类别查看或联系我们了解更多信息。
                        </div>
                    `;
                    courseContainer.appendChild(message);
                }
            } else if (noCoursesMessage) {
                noCoursesMessage.remove();
            }
        });
    });

    // 滚动动画效果
    function animateOnScroll() {
        const elements = document.querySelectorAll('.reveal-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // 如果是系统特性，添加级联动画
                    if (entry.target.classList.contains('system-features')) {
                        const features = entry.target.querySelectorAll('.system-feature');
                        features.forEach((feature, index) => {
                            setTimeout(() => {
                                feature.style.opacity = '1';
                                feature.style.transform = 'translateX(0)';
                            }, 150 * index);
                        });
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    }

    animateOnScroll();

    // 为课程卡片添加显示类
    function animateCourseCards() {
        const cards = document.querySelectorAll('.course-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate__animated', 'animate__fadeInUp');
                card.style.opacity = '1';
            }, index * 100 + 200);
        });
    }
    
    // 初始化时执行一次
    window.addEventListener('load', function() {
        animateCourseCards();
    });

    // 课程详情弹窗
    const courseDetailButtons = document.querySelectorAll('.view-course-detail');
    
    courseDetailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 获取关联的数据
            const courseId = this.getAttribute('data-course-id');
            const courseTitle = this.getAttribute('data-title');
            const courseDescription = this.getAttribute('data-description');
            const courseContent = this.getAttribute('data-content');
            const coursePrice = this.getAttribute('data-price');
            
            // 更新模态框内容
            const modal = document.getElementById('courseDetailModal');
            modal.querySelector('.modal-title').textContent = courseTitle;
            modal.querySelector('.course-modal-description').textContent = courseDescription;
            modal.querySelector('.course-modal-content').innerHTML = courseContent;
            modal.querySelector('.course-modal-price').textContent = coursePrice;
            
            // 显示模态框
            const courseModal = new bootstrap.Modal(modal);
            courseModal.show();
        });
    });

    // FAQ折叠面板
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 添加点击效果
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });

    // 课程比较表高亮效果
    const comparisonRows = document.querySelectorAll('.comparison-table tr');
    
    comparisonRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.classList.add('highlight');
        });
        
        row.addEventListener('mouseleave', function() {
            this.classList.remove('highlight');
        });
    });

    // 表单验证
    const registrationForm = document.getElementById('courseRegistrationForm');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 简单的表单验证
            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            if (isValid) {
                // 显示成功消息
                const successAlert = document.createElement('div');
                successAlert.className = 'alert alert-success mt-3';
                successAlert.textContent = '表单提交成功！我们将尽快与您联系。';
                
                this.appendChild(successAlert);
                
                // 重置表单
                this.reset();
                
                // 3秒后移除成功消息
                setTimeout(() => {
                    successAlert.remove();
                }, 3000);
            }
        });
    }

    // FAQ交互功能
    function initFaqAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        const activeClass = 'active';
        
        // 默认展开第一个问题
        if (faqItems.length > 0) {
            faqItems[0].classList.add(activeClass);
        }
        
        // 使用事件委托来减少事件监听器数量
        const faqContainer = document.querySelector('.faq-container');
        if (!faqContainer) return;
        
        faqContainer.addEventListener('click', (e) => {
            // 查找最近的问题元素
            const question = e.target.closest('.faq-question');
            if (!question) return;
            
            // 获取当前问题项
            const item = question.closest('.faq-item');
            if (!item) return;
            
            // 如果已经是激活状态，则仅关闭它
            if (item.classList.contains(activeClass)) {
                item.classList.remove(activeClass);
                return;
            }
            
            // 使用requestAnimationFrame优化性能
            window.requestAnimationFrame(() => {
                // 仅关闭当前打开的项目
                const activeItem = faqContainer.querySelector('.faq-item.active');
                if (activeItem) {
                    activeItem.classList.remove(activeClass);
                }
                
                // 打开新项目，稍微延迟执行以避免两个变化同时发生导致的卡顿
                window.requestAnimationFrame(() => {
                    item.classList.add(activeClass);
                });
            });
        });
    }

    // 初始化FAQ手风琴
    initFaqAccordion();
}); 