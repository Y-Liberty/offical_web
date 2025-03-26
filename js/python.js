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

    // 初始化课程大纲手风琴
    initOutlineAccordion();
    
    // 初始化代码高亮显示
    initCodeHighlighting();
});

// 常见问题折叠功能
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    const faqAnswers = document.querySelectorAll('.faq-answer');
    
    // 确保初始状态正确
    faqAnswers.forEach((answer, index) => {
        // 默认隐藏所有答案，除了第一个
        if (index === 0) {
            answer.style.display = 'block';
            faqQuestions[index].classList.add('active');
        } else {
            answer.style.display = 'none';
            faqQuestions[index].classList.remove('active');
        }
    });
    
    // 给每个问题添加点击事件
    faqQuestions.forEach((question, index) => {
        question.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            const answer = this.nextElementSibling;
            
            // 如果当前激活，就关闭它
            if (isActive) {
                this.classList.remove('active');
                answer.style.display = 'none';
            } else {
                // 否则关闭所有其他的，打开当前的
                faqQuestions.forEach((q, i) => {
                    if (i !== index) {
                        q.classList.remove('active');
                        faqAnswers[i].style.display = 'none';
                    }
                });
                
                // 打开当前问题的答案
                this.classList.add('active');
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
    const elements = document.querySelectorAll('.feature-box, .project-box, .intro-image, .outline-item');
    
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
    console.log('开始初始化猜数字游戏...'); // 调试用
    
    const restartBtn = document.getElementById('restart-game');
    const submitBtn = document.getElementById('submit-guess');
    const userGuessInput = document.getElementById('user-guess');
    const gameOutput = document.getElementById('game-output');
    const guessFeedback = document.getElementById('guess-feedback');
    
    // 检查所有必要元素是否存在
    if (!restartBtn) console.error('重新开始按钮未找到!');
    if (!submitBtn) console.error('提交按钮未找到!');
    if (!userGuessInput) console.error('用户输入框未找到!');
    if (!gameOutput) console.error('游戏输出区域未找到!');
    if (!guessFeedback) console.error('反馈区域未找到!');
    
    if (!restartBtn || !submitBtn || !userGuessInput || !gameOutput) {
        console.error('猜数字游戏元素未找到，无法初始化游戏!');
        return;
    }
    
    console.log('游戏元素检查通过，继续初始化...'); // 调试用
    
    // 为测试按钮添加点击事件
    const testOutputBtn = document.getElementById('test-output');
    if (testOutputBtn) {
        console.log('找到测试按钮，添加点击事件');
        testOutputBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('测试按钮被点击');
            
            // 直接添加一条测试消息到游戏输出区域
            try {
                const testMsg = document.createElement('p');
                testMsg.textContent = '这是一条测试消息，时间: ' + new Date().toLocaleTimeString();
                testMsg.style.backgroundColor = '#f0f7ff';
                testMsg.style.color = '#0066cc';
                testMsg.style.padding = '8px 12px';
                testMsg.style.borderRadius = '6px';
                testMsg.style.marginBottom = '10px';
                testMsg.style.borderLeft = '3px solid #0066cc';
                testMsg.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                testMsg.style.maxWidth = '95%';
                
                gameOutput.appendChild(testMsg);
                console.log('测试消息已添加到游戏输出区域');
                
                // 滚动到底部
                gameOutput.scrollTop = gameOutput.scrollHeight;
            } catch (error) {
                console.error('添加测试消息时出错:', error);
                alert('添加测试消息失败: ' + error.message);
            }
        });
    } else {
        console.error('测试按钮未找到!');
    }
    
    let secretNumber = 0;
    let attempts = 0;
    let maxAttempts = 10;
    let gameActive = true;
    
    // 初始化游戏
    function initGame() {
        // 清空游戏输出区域，但保留欢迎消息
        if (gameOutput) {
            // 查找既有的消息（已经添加的静态欢迎消息）
            const existingMessages = gameOutput.querySelectorAll('p');
            
            // 如果没有任何消息，我们添加欢迎消息
            if (existingMessages.length === 0) {
                addMessage('欢迎来到猜数字游戏！', 'normal');
                addMessage(`我想了一个1到100之间的数字，你有${maxAttempts}次机会猜出它。`, 'normal');
                addMessage('请输入1到100之间的有效数字！', 'hint');
            } else {
                // 如果已经有静态消息，只需添加一条新的游戏开始消息
                addMessage('新游戏已开始!', 'normal');
                addMessage(`我想了一个1到100之间的数字，你有${maxAttempts}次机会猜出它。`, 'normal');
            }
        }
        
        // 生成1到100之间的随机数
        secretNumber = Math.floor(Math.random() * 100) + 1;
        console.log('生成的随机数:', secretNumber); // 调试用
        
        // 强制设置secretNumber为50（测试用，实际使用时请注释掉这行）
        // secretNumber = 50;
        
        // 重置游戏状态
        attempts = 0;
        gameActive = true;
        
        // 清空用户输入和反馈
        userGuessInput.value = '';
        guessFeedback.innerHTML = '';
        
        // 重置输入框提示文本
        userGuessInput.placeholder = '输入1-100的数字';
        
        // 启用输入和提交按钮
        userGuessInput.disabled = false;
        submitBtn.disabled = false;
        
        // 设置焦点到输入框
        userGuessInput.focus();
        
        // 确保滚动到顶部
        gameOutput.scrollTop = 0;
        
        console.log('游戏初始化完成，随机数:', secretNumber, '游戏状态:', gameActive);
    }
    
    // 添加消息到游戏输出区域
    function addMessage(message, type = 'normal') {
        console.log('添加消息:', message, type); // 调试用
        
        try {
            const messageElem = document.createElement('p');
            
            switch(type) {
                case 'success':
                    messageElem.classList.add('success-message');
                    messageElem.style.color = '#28a745';
                    messageElem.style.fontWeight = '500';
                    messageElem.style.backgroundColor = '#e8f5e9';
                    messageElem.style.borderLeft = '3px solid #28a745';
                    break;
                case 'lose':
                    messageElem.classList.add('lose-message');
                    messageElem.style.color = '#dc3545';
                    messageElem.style.fontWeight = '500';
                    messageElem.style.backgroundColor = '#feebed';
                    messageElem.style.borderLeft = '3px solid #dc3545';
                    break;
                case 'too-small':
                    messageElem.classList.add('too-small');
                    messageElem.style.color = '#0d6efd';
                    messageElem.style.backgroundColor = '#e6f2ff';
                    messageElem.style.borderLeft = '3px solid #0d6efd';
                    break;
                case 'too-large':
                    messageElem.classList.add('too-large');
                    messageElem.style.color = '#fd7e14';
                    messageElem.style.backgroundColor = '#fff3e6';
                    messageElem.style.borderLeft = '3px solid #fd7e14';
                    break;
                case 'hint':
                    messageElem.classList.add('hint-message');
                    messageElem.style.color = '#6c757d';
                    messageElem.style.backgroundColor = '#f8f9fa';
                    messageElem.style.borderLeft = '3px solid #6c757d';
                    break;
                default:
                    // 默认样式设置
                    messageElem.style.backgroundColor = '#f8f9fa';
                    messageElem.style.padding = '8px 12px';
                    messageElem.style.borderRadius = '6px';
                    messageElem.style.marginBottom = '10px';
                    break;
            }
            
            // 应用通用样式
            messageElem.style.padding = '8px 12px';
            messageElem.style.borderRadius = '6px';
            messageElem.style.marginBottom = '10px';
            messageElem.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
            messageElem.style.maxWidth = '95%';
            messageElem.style.wordWrap = 'break-word';
            
            messageElem.textContent = message;
            
            // 确保输出区域存在
            if (!gameOutput) {
                console.error('游戏输出区域不存在!');
                return;
            }
            
            // 直接使用innerHTML添加一个测试（如果appendChild不起作用）
            // const testHtml = `<p style="color: red; background-color: #ffeeee; padding: 8px; margin: 5px 0; border-radius: 4px;">测试消息: ${message}</p>`;
            // gameOutput.innerHTML += testHtml;
            
            // 添加到DOM
            gameOutput.appendChild(messageElem);
            console.log('消息已添加到游戏输出区域'); // 调试用
            
            // 确保滚动到最新消息
            scrollOutputToBottom();
        } catch (error) {
            console.error('添加消息时出错:', error);
        }
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
        console.log('执行handleGuess函数'); // 调试用
        
        if (!gameActive) {
            console.log('游戏不活跃，无法处理猜测'); // 调试用
            return;
        }
        
        // 获取用户输入
        const guess = parseInt(userGuessInput.value);
        console.log('用户猜测:', guess); // 调试用
        
        // 验证输入
        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log('无效输入:', guess); // 调试用
            guessFeedback.textContent = '请输入1到100之间的有效数字！';
            guessFeedback.style.color = '#dc3545';
            userGuessInput.value = ''; // 清空无效输入
            userGuessInput.focus();
            return;
        }
        
        // 清空反馈和输入
        guessFeedback.textContent = '';
        userGuessInput.value = '';
        
        // 增加尝试次数
        attempts++;
        console.log(`第${attempts}次尝试，猜测: ${guess}, 正确答案: ${secretNumber}`); // 调试用
        
        try {
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
        } catch (error) {
            console.error('处理猜测时出错:', error); // 调试用
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
    if (restartBtn) {
        restartBtn.addEventListener('click', function(e) {
            e.preventDefault(); // 防止表单提交
            initGame();
        });
    }
    
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault(); // 防止表单提交
            console.log('提交按钮被点击'); // 调试用
            handleGuess();
        });
    }
    
    // 支持回车键提交
    if (userGuessInput) {
        userGuessInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault(); // 防止表单提交
                console.log('按下回车键'); // 调试用
                handleGuess();
            }
        });
    }
    
    // 额外添加直接点击事件监听（确保事件绑定）
    document.addEventListener('click', function(e) {
        if (e.target === submitBtn) {
            console.log('通过文档捕获的提交按钮点击事件'); // 调试用
            e.preventDefault();
            e.stopPropagation();
            handleGuess();
        }
    });
    
    // 初始化游戏
    console.log('初始化猜数字游戏'); // 调试用
    
    // 使用延迟启动游戏，确保DOM已完全加载
    setTimeout(() => {
        try {
            console.log('延迟启动游戏...');
            
            // 不再清空游戏输出区域，而是保留预先设置的静态欢迎消息
            console.log('保留预设的欢迎消息');
            
            // 启动游戏
            initGame();
            console.log('游戏已初始化完成');
            
            // 额外调试 - 检查游戏状态
            console.log('游戏状态:', {
                active: gameActive,
                secretNumber: secretNumber,
                attempts: attempts,
                maxAttempts: maxAttempts
            });
        } catch (error) {
            console.error('初始化游戏时发生错误:', error);
            
            // 尝试显示错误信息
            if (gameOutput) {
                const errorMsg = document.createElement('p');
                errorMsg.textContent = '游戏初始化失败，请刷新页面重试。';
                errorMsg.style.color = 'red';
                gameOutput.appendChild(errorMsg);
            }
        }
    }, 500);
}

// 初始化课程大纲手风琴
function initOutlineAccordion() {
    const accordionItems = document.querySelectorAll('.outline-item');
    const accordionButtons = document.querySelectorAll('.outline-item .accordion-button');
    
    if (accordionButtons.length === 0) return;
    
    // 为每个手风琴按钮添加动画效果
    accordionButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // 按钮已经通过bootstrap处理折叠逻辑，这里只添加额外效果
            const isCollapsed = button.classList.contains('collapsed');
            const accordionBody = button.closest('.accordion-item').querySelector('.accordion-collapse');
            
            // 添加淡入效果
            if (!isCollapsed) {
                setTimeout(() => {
                    if (accordionBody.classList.contains('show')) {
                        accordionBody.style.opacity = '0';
                        setTimeout(() => {
                            accordionBody.style.transition = 'opacity 0.5s ease';
                            accordionBody.style.opacity = '1';
                        }, 50);
                    }
                }, 300);
            }
        });
    });
    
    // 默认展开第一个
    if (accordionItems.length > 0) {
        // Bootstrap已处理默认展开，此处添加初始可见性
        const firstAccordionBody = accordionItems[0].querySelector('.accordion-collapse');
        if (firstAccordionBody && firstAccordionBody.classList.contains('show')) {
            firstAccordionBody.style.opacity = '1';
        }
    }
}

// 初始化代码高亮显示
function initCodeHighlighting() {
    // 获取所有模态框中的代码示例
    const modalCodeExamples = document.querySelectorAll('.modal .code-example pre code');
    
    if (modalCodeExamples.length > 0) {
        modalCodeExamples.forEach(codeBlock => {
            // 处理代码高亮
            let codeText = codeBlock.innerHTML;
            
            // 处理注释
            codeText = codeText.replace(/(#.+)$/gm, '<span style="color:#6a9955;">$1</span>');
            
            // 处理关键字
            const keywords = ['def', 'class', 'import', 'from', 'if', 'else', 'elif', 'for', 'while', 'return', 'True', 'False', 'None', 'and', 'or', 'not', 'in', 'is', 'try', 'except', 'finally', 'with', 'as', 'break', 'continue', 'pass'];
            keywords.forEach(keyword => {
                const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
                codeText = codeText.replace(regex, '<span style="color:#569cd6;">$1</span>');
            });
            
            // 处理字符串
            codeText = codeText.replace(/(['"])(.*?)(\1)/g, '<span style="color:#ce9178;">$1$2$1</span>');
            
            // 处理函数
            codeText = codeText.replace(/\b(\w+)(?=\()/g, '<span style="color:#dcdcaa;">$1</span>');
            
            // 处理数字
            codeText = codeText.replace(/\b(\d+)\b/g, '<span style="color:#b5cea8;">$1</span>');
            
            codeBlock.innerHTML = codeText;
        });
    }
} 