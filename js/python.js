// Python页面脚本

document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('navbar-scrolled');
        } else {
            header.classList.remove('navbar-scrolled');
        }
    });

    // 初始化窗口滚动时触发一次，确保正确应用样式
    window.dispatchEvent(new Event('scroll'));

    // FAQ 折叠效果
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // 关闭其他所有已打开的FAQ
            faqQuestions.forEach(item => {
                if (item !== question) {
                    item.classList.remove('active');
                    const answer = item.nextElementSibling;
                    if (answer && answer.classList.contains('faq-answer')) {
                        answer.style.display = 'none';
                    }
                }
            });

            // 切换当前FAQ的状态
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (answer && answer.classList.contains('faq-answer')) {
                answer.style.display = this.classList.contains('active') ? 'block' : 'none';
            }
        });
    });

    // 平滑滚动到锚点位置
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 数字增长动画
    function animateNumbers() {
        const numberElements = document.querySelectorAll('.count-number');
        const animationDuration = 2000; // 动画持续时间（毫秒）
        
        numberElements.forEach(numberElement => {
            const finalNumber = parseInt(numberElement.getAttribute('data-count'));
            const increment = finalNumber / (animationDuration / 16); // 每16ms的增量
            let currentNumber = 0;
            
            const updateNumber = () => {
                currentNumber += increment;
                if (currentNumber < finalNumber) {
                    numberElement.textContent = Math.round(currentNumber);
                    requestAnimationFrame(updateNumber);
                } else {
                    numberElement.textContent = finalNumber;
                }
            };
            
            updateNumber();
        });
    }

    // 检测元素是否在视口中
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // 当统计数字区域进入视口时开始动画
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        let animated = false;
        window.addEventListener('scroll', function() {
            if (!animated && isElementInViewport(statsSection)) {
                animateNumbers();
                animated = true;
            }
        });

        // 初始检查
        if (isElementInViewport(statsSection)) {
            animateNumbers();
            animated = true;
        }
    }

    // 代码示例语法高亮效果
    const codeExamples = document.querySelectorAll('.code-example pre');
    if (codeExamples.length > 0) {
        codeExamples.forEach(codeBlock => {
            // 简单的语法高亮处理
            let codeText = codeBlock.innerHTML;
            
            // 处理注释
            codeText = codeText.replace(/(#.+)$/gm, '<span class="code-comment">$1</span>');
            
            // 处理关键字
            const keywords = ['def', 'class', 'import', 'from', 'if', 'else', 'elif', 'for', 'while', 'return', 'True', 'False', 'None', 'and', 'or', 'not', 'in', 'is', 'try', 'except', 'finally', 'with', 'as', 'break', 'continue', 'pass'];
            keywords.forEach(keyword => {
                const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
                codeText = codeText.replace(regex, '<span class="code-keyword">$1</span>');
            });
            
            // 处理字符串
            codeText = codeText.replace(/(['"])(.*?)(\1)/g, '<span class="code-string">$1$2$1</span>');
            
            // 处理函数
            codeText = codeText.replace(/\b(\w+)(?=\()/g, '<span class="code-function">$1</span>');
            
            codeBlock.innerHTML = codeText;
        });
    }

    // 试听表单验证
    const trialForm = document.getElementById('trial-form');
    if (trialForm) {
        trialForm.addEventListener('submit', function(e) {
            const childNameInput = document.querySelector('input[name="child_name"]');
            const childAgeInput = document.querySelector('input[name="child_age"]');
            const parentNameInput = document.querySelector('input[name="parent_name"]');
            const phoneInput = document.querySelector('input[name="phone"]');

            let isValid = true;

            // 简单验证
            if (!childNameInput.value.trim()) {
                childNameInput.classList.add('is-invalid');
                isValid = false;
            } else {
                childNameInput.classList.remove('is-invalid');
            }

            const age = parseInt(childAgeInput.value);
            if (isNaN(age) || age < 5 || age > 16) {
                childAgeInput.classList.add('is-invalid');
                isValid = false;
            } else {
                childAgeInput.classList.remove('is-invalid');
            }

            if (!parentNameInput.value.trim()) {
                parentNameInput.classList.add('is-invalid');
                isValid = false;
            } else {
                parentNameInput.classList.remove('is-invalid');
            }

            // 简单的电话号码验证（仅检查是否为数字且长度合理）
            const phonePattern = /^1[3-9]\d{9}$/;
            if (!phonePattern.test(phoneInput.value)) {
                phoneInput.classList.add('is-invalid');
                isValid = false;
            } else {
                phoneInput.classList.remove('is-invalid');
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    // 返回顶部按钮
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    // 初始化常见问题功能
    initFAQAccordion();
    
    // 初始化统计数字动画
    initCountAnimation();
    
    // 初始化滚动动画
    initScrollAnimations();
    
    // 浮动元素效果
    createFloatingElements();

    // 初始化猜数字游戏
    initNumberGuessGame();
});

// 常见问题折叠功能
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // 切换当前项的活动状态
            this.classList.toggle('active');
            
            // 获取对应的回答元素
            const answer = this.nextElementSibling;
            
            // 如果回答当前可见，则隐藏它，否则显示它
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
}

// 统计数字动画
function initCountAnimation() {
    const countElements = document.querySelectorAll('.count-number');
    let animated = false;
    
    const animateCount = () => {
        if (animated) return;
        
        const statsSection = document.querySelector('.stats-section');
        const statsSectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (statsSectionTop < windowHeight * 0.8) {
            animated = true;
            
            countElements.forEach(counter => {
                const target = +counter.getAttribute('data-count');
                let count = 0;
                const duration = 2000; // 动画持续时间（毫秒）
                const frameDuration = 1000 / 60; // 每帧持续时间（60fps）
                const totalFrames = Math.round(duration / frameDuration);
                const increment = target / totalFrames;
                
                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        counter.innerText = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                updateCount();
            });
        }
    };
    
    // 检查是否在可视区域内
    window.addEventListener('scroll', animateCount);
    
    // 初始检查，以防元素已经在可视区域内
    animateCount();
}

// 滚动动画
function initScrollAnimations() {
    const elements = document.querySelectorAll('.feature-box, .project-box, .intro-image, .outline-list li');
    
    const checkScroll = () => {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
                element.style.opacity = '1';
            }
        });
    };
    
    // 设置初始状态
    elements.forEach(element => {
        element.style.opacity = '0';
    });
    
    // 添加滚动监听
    window.addEventListener('scroll', checkScroll);
    
    // 初始检查
    checkScroll();
}

// 创建浮动元素效果
function createFloatingElements() {
    const sections = [
        document.querySelector('.course-intro'),
        document.querySelector('.course-features'),
        document.querySelector('.course-outline')
    ];
    
    // Python相关的符号和关键词
    const pythonSymbols = [
        '{ }', '[ ]', '( )', '# ', 'def', 'if', 'for', 'import',
        'class', 'return', 'print()', 'self', 'True', 'False', 'None'
    ];
    
    sections.forEach(section => {
        if (!section) return;
        
        // 创建浮动元素容器
        const floatingContainer = document.createElement('div');
        floatingContainer.className = 'floating-elements';
        floatingContainer.style.position = 'absolute';
        floatingContainer.style.top = '0';
        floatingContainer.style.left = '0';
        floatingContainer.style.width = '100%';
        floatingContainer.style.height = '100%';
        floatingContainer.style.overflow = 'hidden';
        floatingContainer.style.pointerEvents = 'none';
        floatingContainer.style.zIndex = '0';
        
        // 添加10个浮动元素
        for (let i = 0; i < 10; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.style.position = 'absolute';
            element.style.opacity = '0.05';
            element.style.color = '#4B8BBE';
            element.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
            element.style.fontFamily = 'monospace';
            element.style.fontWeight = 'bold';
            element.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
            
            // 随机位置
            element.style.top = `${Math.random() * 100}%`;
            element.style.left = `${Math.random() * 100}%`;
            
            // 随机Python符号
            element.textContent = pythonSymbols[Math.floor(Math.random() * pythonSymbols.length)];
            
            // 添加动画
            element.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
            element.style.animationDelay = `${Math.random() * 5}s`;
            
            floatingContainer.appendChild(element);
        }
        
        section.style.position = 'relative';
        section.prepend(floatingContainer);
    });
    
    // 添加浮动动画样式
    if (!document.getElementById('floating-animation')) {
        const style = document.createElement('style');
        style.id = 'floating-animation';
        style.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translateY(0) rotate(0deg);
                }
                25% {
                    transform: translateY(-15px) rotate(5deg);
                }
                50% {
                    transform: translateY(0) rotate(0deg);
                }
                75% {
                    transform: translateY(15px) rotate(-5deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// 猜数字游戏模拟
function initNumberGuessGame() {
    const restartBtn = document.getElementById('restart-game');
    const submitBtn = document.getElementById('submit-guess');
    const userGuessInput = document.getElementById('user-guess');
    const gameOutput = document.getElementById('game-output');
    const guessFeedback = document.getElementById('guess-feedback');
    
    if (!restartBtn || !submitBtn || !userGuessInput || !gameOutput) return;
    
    let secretNumber = 0;
    let attempts = 0;
    let maxAttempts = 10;
    let gameActive = true;
    
    // 初始化游戏
    function initGame() {
        // 清空游戏输出区域，只保留欢迎信息
        gameOutput.innerHTML = '';
        
        // 添加欢迎信息
        addMessage('欢迎来到猜数字游戏！', 'normal');
        addMessage(`我想了一个1到100之间的数字，你有${maxAttempts}次机会猜出它。`, 'normal');
        addMessage('请输入1到100之间的有效数字！', 'hint');
        
        // 生成1到100之间的随机数
        secretNumber = Math.floor(Math.random() * 100) + 1;
        
        // 重置游戏状态
        attempts = 0;
        gameActive = true;
        
        // 清空用户输入和反馈
        userGuessInput.value = '';
        guessFeedback.innerHTML = '';
        
        // 启用输入和提交按钮
        userGuessInput.disabled = false;
        submitBtn.disabled = false;
        
        // 设置焦点到输入框
        userGuessInput.focus();
    }
    
    // 添加消息到游戏输出区域
    function addMessage(message, type = 'normal') {
        const messageElem = document.createElement('p');
        
        switch(type) {
            case 'success':
                messageElem.classList.add('success-message');
                break;
            case 'lose':
                messageElem.classList.add('lose-message');
                break;
            case 'too-small':
                messageElem.classList.add('too-small');
                break;
            case 'too-large':
                messageElem.classList.add('too-large');
                break;
            case 'hint':
                messageElem.classList.add('hint-message');
                break;
            default:
                // 默认样式不添加特殊类
                break;
        }
        
        messageElem.textContent = message;
        gameOutput.appendChild(messageElem);
        
        // 确保滚动到最新消息
        scrollOutputToBottom();
    }
    
    // 滚动输出区域到底部
    function scrollOutputToBottom() {
        setTimeout(() => {
            // 确保滚动到底部
            gameOutput.scrollTop = gameOutput.scrollHeight;
        }, 50); // 使用短延迟确保DOM更新完成
    }
    
    // 处理用户猜测
    function handleGuess() {
        if (!gameActive) return;
        
        // 获取用户输入
        const guess = parseInt(userGuessInput.value);
        
        // 验证输入
        if (isNaN(guess) || guess < 1 || guess > 100) {
            guessFeedback.textContent = '请输入1到100之间的有效数字！';
            return;
        }
        
        // 清空反馈和输入
        guessFeedback.textContent = '';
        userGuessInput.value = '';
        
        // 增加尝试次数
        attempts++;
        
        // 添加用户猜测消息
        addMessage(`第${attempts}次猜测: ${guess}`, 'normal');
        
        // 根据猜测结果添加响应
        if (guess < secretNumber) {
            addMessage('太小了！再试一次。', 'too-small');
        } else if (guess > secretNumber) {
            addMessage('太大了！再试一次。', 'too-large');
        } else {
            // 猜对了
            addMessage(`恭喜你猜对了！答案是${secretNumber}。`, 'success');
            addMessage(`你用了${attempts}次尝试。`, 'success');
            endGame(true);
            return;
        }
        
        // 检查是否达到最大尝试次数
        if (attempts >= maxAttempts) {
            addMessage(`游戏结束！正确答案是${secretNumber}。`, 'lose');
            endGame(false);
        } else {
            // 给用户提示还剩余多少次
            userGuessInput.placeholder = `还有${maxAttempts - attempts}次机会`;
            userGuessInput.focus();
        }
    }
    
    // 结束游戏
    function endGame(isWin) {
        gameActive = false;
        userGuessInput.disabled = true;
        submitBtn.disabled = true;
        
        if (isWin) {
            guessFeedback.innerHTML = '<span class="success-message">恭喜你赢了！点击"重新开始"再玩一次。</span>';
        } else {
            guessFeedback.innerHTML = '<span class="lose-message">很遗憾，你没有猜对。点击"重新开始"再玩一次。</span>';
        }
    }
    
    // 按钮事件处理
    restartBtn.addEventListener('click', initGame);
    
    submitBtn.addEventListener('click', handleGuess);
    
    // 支持回车键提交
    userGuessInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleGuess();
        }
    });
    
    // 初始化游戏
    initGame();
} 