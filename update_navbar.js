const fs = require('fs');
const path = require('path');

// 读取导航栏模板
const navbarTemplate = fs.readFileSync('templates/navbar.html', 'utf8');

// 需要更新的页面列表
const pages = [
    'index.html',
    'about.html',
    'courses.html',
    'scratch.html',
    'python.html',
    'cpp.html',
    'showcase.html',
    'competition.html',
    'news.html',
    'faq.html',
    'teachers.html',
    'privacy-policy.html',
    'terms-of-service.html',
    'careers.html',
    'sitemap.html'
];

// 更新每个页面的导航栏
pages.forEach(page => {
    if (fs.existsSync(page)) {
        let content = fs.readFileSync(page, 'utf8');
        
        // 查找导航栏部分并替换
        content = content.replace(
            /<!-- 导航栏 -->[\s\S]*?<\/header>/,
            navbarTemplate
        );
        
        // 根据当前页面设置活动状态
        const pageName = path.basename(page);
        if (pageName === 'index.html') {
            content = content.replace('class="nav-link" href="index.html"', 'class="nav-link active" href="index.html"');
        } else if (pageName === 'about.html') {
            content = content.replace('class="nav-link dropdown-toggle" href="#"', 'class="nav-link dropdown-toggle active" href="#"');
            content = content.replace('href="about.html">关于我们', 'href="about.html" class="active">关于我们');
        }
        // 添加其他页面的活动状态...
        
        fs.writeFileSync(page, content, 'utf8');
        console.log(`Updated navbar in ${page}`);
    } else {
        console.log(`${page} not found`);
    }
}); 