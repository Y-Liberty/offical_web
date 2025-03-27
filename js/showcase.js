/**
 * 学生作品展示页面脚本
 * 功能包括：作品分类筛选、加载更多作品等功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面
    initShowcasePage();
});

/**
 * 页面初始化函数
 */
function initShowcasePage() {
    // 初始化筛选按钮
    initFilterButtons();
    
    // 初始化加载更多功能
    initLoadMore();
    
    // 初始化模态框事件
    initModalEvents();
    
    // 添加卡片动画效果
    addCardAnimations();
    
    // 初始化代码复制功能
    initCodeCopyButtons();
    
    // 初始化Scratch角色代码切换
    initScratchSpriteSwitch();
}

/**
 * 初始化作品筛选按钮功能
 */
function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const showcaseItems = document.querySelectorAll('.showcase-item-wrapper');
    
    // 为每个筛选按钮添加点击事件
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的活跃状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 为当前点击的按钮添加活跃状态
            this.classList.add('active');
            
            // 获取筛选类别
            const filterValue = this.getAttribute('data-filter');
            
            // 筛选作品项目
            showcaseItems.forEach(item => {
                if (filterValue === 'all') {
                    // 显示所有作品
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // 检查项目是否属于当前筛选类别
                    const itemCategories = item.getAttribute('data-category').split(' ');
                    
                    if (itemCategories.includes(filterValue)) {
                        // 显示符合筛选条件的作品
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        // 隐藏不符合筛选条件的作品
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

/**
 * 初始化"加载更多"功能
 * 注意：这是一个模拟功能，实际项目中通常会通过AJAX从服务器加载更多内容
 */
function initLoadMore() {
    const loadMoreBtn = document.getElementById('load-more');
    
    // 这里模拟加载更多功能，实际应用中应该从服务器获取数据
    let loadCount = 0;
    
    loadMoreBtn.addEventListener('click', function() {
        // 模拟加载中状态
        loadMoreBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> 加载中...';
        loadMoreBtn.disabled = true;
        
        // 模拟网络请求延迟
        setTimeout(() => {
            loadCount++;
            
            if (loadCount === 1) {
                // 添加更多作品（这里是示例）
                appendMoreProjects();
                
                // 恢复按钮状态
                loadMoreBtn.innerHTML = '加载更多 <i class="bi bi-arrow-down-circle"></i>';
                loadMoreBtn.disabled = false;
            } else {
                // 模拟没有更多内容可加载
                loadMoreBtn.innerHTML = '没有更多作品了';
                loadMoreBtn.disabled = true;
            }
        }, 1500);
    });
}

/**
 * 添加更多作品项目（模拟数据）
 */
function appendMoreProjects() {
    const showcaseGrid = document.getElementById('showcase-grid');
    
    // 这里模拟添加3个新作品
    const newProjects = [
        {
            id: 'project10',
            title: '智能家居控制器',
            image: 'images/showcase/project1.jpg',
            category: 'cpp',
            author: '吴小康 | 16岁 | 学习C++ 9个月'
        },
        {
            id: 'project11',
            title: '趣味问答游戏',
            image: 'images/showcase/project2.jpg',
            category: 'python',
            author: '林小玲 | 12岁 | 学习Python 5个月'
        },
        {
            id: 'project12',
            title: '动画故事书',
            image: 'images/showcase/project3.jpg',
            category: 'scratch',
            author: '陈小乐 | 9岁 | 学习Scratch 2个月'
        }
    ];
    
    // 为每个新项目创建HTML元素并添加到网格中
    newProjects.forEach(project => {
        const projectHTML = createProjectHTML(project);
        showcaseGrid.insertAdjacentHTML('beforeend', projectHTML);
    });
    
    // 添加新卡片的动画效果
    addCardAnimations();
    
    // 重新绑定筛选功能，以包含新添加的元素
    initFilterButtons();
}

/**
 * 创建项目HTML字符串
 * @param {Object} project - 项目数据对象
 * @returns {string} - 项目HTML字符串
 */
function createProjectHTML(project) {
    return `
        <div class="col-lg-4 col-md-6 mb-4 showcase-item-wrapper" data-category="${project.category}">
            <div class="showcase-item" id="${project.id}">
                <div class="showcase-img">
                    <img src="${project.image}" alt="${project.title}" class="img-fluid">
                </div>
                <div class="showcase-info">
                    <h5>${project.title}</h5>
                    <div class="showcase-author">
                        <i class="bi bi-person-circle"></i>
                        <span>${project.author}</span>
                    </div>
                    <div class="showcase-actions">
                        <a href="#" class="action-btn code-btn" data-bs-toggle="modal" data-bs-target="#projectModal${project.id.replace('project', '')}">
                            <i class="bi bi-code-slash"></i> 查看代码
                        </a>
                        <a href="#" class="action-btn demo-btn" data-bs-toggle="modal" data-bs-target="#projectModal${project.id.replace('project', '')}">
                            <i class="bi bi-play-circle"></i> 运行效果
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * 初始化模态框事件
 */
function initModalEvents() {
    // 获取所有项目模态框
    const projectModals = document.querySelectorAll('.project-modal');
    
    // 为每个模态框添加显示事件处理
    projectModals.forEach(modal => {
        modal.addEventListener('show.bs.modal', function(event) {
            // 获取触发模态框的按钮
            const button = event.relatedTarget;
            const actionType = button.classList.contains('code-btn') ? 'code' : 'demo';
            
            // 根据点击的按钮类型激活不同的标签页
            if (actionType === 'code') {
                // 激活代码标签页
                const codeTab = modal.querySelector('.nav-link[id^="code-tab"]');
                if (codeTab) {
                    const bsTab = new bootstrap.Tab(codeTab);
                    bsTab.show();
                }
            } else {
                // 激活运行效果标签页
                const demoTab = modal.querySelector('.nav-link[id^="demo-tab"]');
                if (demoTab) {
                    const bsTab = new bootstrap.Tab(demoTab);
                    bsTab.show();
                }
            }
        });
    });
}

/**
 * 添加卡片动画效果
 */
function addCardAnimations() {
    // 获取所有卡片元素
    const cards = document.querySelectorAll('.showcase-item');
    
    // 为每个卡片添加鼠标悬停效果
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const btns = this.querySelectorAll('.action-btn');
            btns.forEach((btn, index) => {
                btn.style.transitionDelay = `${0.05 * index}s`;
                btn.classList.add('active');
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const btns = this.querySelectorAll('.action-btn');
            btns.forEach(btn => {
                btn.style.transitionDelay = '0s';
                btn.classList.remove('active');
            });
        });
    });
}

/**
 * 初始化代码复制按钮功能
 * 使用clipboard.js库实现代码复制
 */
function initCodeCopyButtons() {
    // 检查是否已加载clipboard.js
    if (typeof ClipboardJS === 'undefined') {
        // 如果clipboard.js未加载，动态加载它
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js';
        script.onload = initClipboard;
        document.head.appendChild(script);
    } else {
        // 如果clipboard.js已加载，直接初始化
        initClipboard();
    }
    
    function initClipboard() {
        // 初始化所有复制按钮
        const clipboard = new ClipboardJS('.copy-code-btn');
        
        // 成功复制时显示提示
        clipboard.on('success', function(e) {
            const button = e.trigger;
            const originalText = button.innerHTML;
            
            // 更改按钮文字为成功提示
            button.innerHTML = '<i class="bi bi-check-circle"></i> 已复制';
            
            // 2秒后恢复原始文字
            setTimeout(function() {
                button.innerHTML = originalText;
            }, 2000);
            
            e.clearSelection();
        });
        
        // 复制失败时显示错误提示
        clipboard.on('error', function(e) {
            const button = e.trigger;
            button.innerHTML = '<i class="bi bi-exclamation-circle"></i> 复制失败';
            
            setTimeout(function() {
                button.innerHTML = '<i class="bi bi-clipboard"></i> 复制代码';
            }, 2000);
        });
        
        // 为导航切换添加事件，更新复制按钮的目标
        document.querySelectorAll('.nav-pills .nav-link').forEach(link => {
            link.addEventListener('shown.bs.tab', function(event) {
                const target = event.target.getAttribute('data-bs-target');
                const codeElement = document.querySelector(`${target} code`);
                const copyButton = event.target.closest('.tab-pane').querySelector('.copy-code-btn');
                
                if (codeElement && copyButton) {
                    copyButton.setAttribute('data-clipboard-target', `#${codeElement.id}`);
                }
            });
        });
    }
}

/**
 * 初始化Scratch角色代码切换功能
 */
function initScratchSpriteSwitch() {
    // 获取所有Scratch项目的角色列表
    const spriteLists = document.querySelectorAll('.scratch-sprites-list .list-group');
    
    // 为每个列表添加点击事件
    spriteLists.forEach(list => {
        const spriteItems = list.querySelectorAll('.list-group-item');
        
        spriteItems.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                
                // 获取当前代码显示区域
                const codeDisplay = this.closest('.row').querySelector('.scratch-code-display');
                
                // 移除所有项的活跃状态
                spriteItems.forEach(sprite => {
                    sprite.classList.remove('active');
                });
                
                // 为当前项添加活跃状态
                this.classList.add('active');
                
                // 获取选中的角色ID
                const spriteId = this.getAttribute('data-sprite');
                
                // 隐藏所有代码
                const codeDivs = codeDisplay.querySelectorAll('.sprite-code');
                codeDivs.forEach(div => {
                    div.style.display = 'none';
                });
                
                // 显示选中角色的代码
                const selectedCode = codeDisplay.querySelector(`#${spriteId}-code`);
                if (selectedCode) {
                    selectedCode.style.display = 'block';
                }
            });
        });
    });
} 