// FAQ页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    // FAQ项展开/收起功能
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // 关闭其他打开的FAQ项
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // 切换当前FAQ项的状态
            item.classList.toggle('active');
        });
    });

    // FAQ分类筛选功能
    const categories = document.querySelectorAll('.faq-category');
    const faqContainer = document.querySelector('.faq-container');
    
    categories.forEach(category => {
        category.addEventListener('click', () => {
            // 移除其他分类的active状态
            categories.forEach(cat => cat.classList.remove('active'));
            
            // 添加当前分类的active状态
            category.classList.add('active');
            
            const selectedCategory = category.getAttribute('data-category');
            
            // 筛选FAQ项
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 默认显示"全部"分类
    const allCategory = document.querySelector('.faq-category[data-category="all"]');
    if (allCategory) {
        allCategory.classList.add('active');
    }
}); 