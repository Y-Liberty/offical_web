// 师资力量页面脚本

document.addEventListener('DOMContentLoaded', function() {
    // 初始化Bootstrap工具提示
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // 教师信息卡片悬停效果
    const teacherCards = document.querySelectorAll('.teacher-card');
    
    teacherCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // 过滤教师功能（如果有教师过滤按钮）
    const teacherFilterButtons = document.querySelectorAll('.teacher-filter-btn');
    
    if(teacherFilterButtons.length > 0) {
        teacherFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 移除所有按钮的active类
                teacherFilterButtons.forEach(btn => btn.classList.remove('active'));
                // 添加当前按钮的active类
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                teacherCards.forEach(card => {
                    // 如果选择"全部"或者卡片类别与所选过滤器匹配
                    if (filter === 'all' || card.getAttribute('data-specialty') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        // 隐藏不匹配的卡片
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // 实现简单的评价轮播效果
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.opacity = '1';
                testimonial.style.display = 'block';
            } else {
                testimonial.style.opacity = '0';
                testimonial.style.display = 'none';
            }
        });
    }
    
    // 初始化显示第一个评价
    if(testimonials.length > 1) {
        showTestimonial(currentTestimonial);
        
        // 自动轮播
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    // 动画效果 - 滚动时淡入元素
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.advantage-card, .teacher-card, .certification-item, .training-step, .cta-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animated');
                element.style.opacity = '1';
                element.style.transform = element.classList.contains('teacher-card') ? 'translateY(-10px)' : 'translateY(0)';
            }
        });
    };
    
    // 初始化动画元素的样式
    document.querySelectorAll('.advantage-card, .teacher-card, .certification-item, .training-step, .cta-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transform = 'translateY(20px)';
    });
    
    // 监听滚动事件
    window.addEventListener('scroll', animateOnScroll);
    // 初始加载时检查
    setTimeout(animateOnScroll, 100);

    // 免费试听课表单提交
    const trialForm = document.getElementById('trialForm');
    const submitTrialBtn = document.getElementById('submitTrial');
    
    if (trialForm && submitTrialBtn) {
        submitTrialBtn.addEventListener('click', function() {
            // 简单的表单验证
            let isValid = true;
            const requiredFields = trialForm.querySelectorAll('[required]');
            
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
                successAlert.textContent = '预约成功！我们将尽快与您联系确认上课时间。';
                
                trialForm.appendChild(successAlert);
                
                // 重置表单
                trialForm.reset();
                
                // 3秒后隐藏模态框
                setTimeout(() => {
                    const modal = bootstrap.Modal.getInstance(document.getElementById('trialModal'));
                    modal.hide();
                    // 在模态框隐藏后移除成功消息
                    setTimeout(() => {
                        successAlert.remove();
                    }, 500);
                }, 3000);
            }
        });
        
        // 重置模态框打开时的表单状态
        document.getElementById('trialModal').addEventListener('hidden.bs.modal', function () {
            trialForm.reset();
            const invalidFields = trialForm.querySelectorAll('.is-invalid');
            invalidFields.forEach(field => field.classList.remove('is-invalid'));
            const alerts = trialForm.querySelectorAll('.alert');
            alerts.forEach(alert => alert.remove());
        });
    }
}); 