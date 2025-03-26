/**
 * C++课程页面脚本
 */

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

    // FAQ 手风琴效果
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            // 先关闭所有打开的问题
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    const answer = q.nextElementSibling;
                    if (answer) {
                        answer.style.display = 'none';
                    }
                }
            });

            // 切换当前问题的状态
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (answer) {
                answer.style.display = this.classList.contains('active') ? 'block' : 'none';
            }
        });
    });

    // 初始化编译器模拟
    initCompilerSimulation();

    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 动画效果
    const animatedElements = document.querySelectorAll('.animate__animated');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const animation = el.dataset.animation || 'fadeIn';
                el.classList.add(`animate__${animation}`);
                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.2
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // 代码编辑器模拟运行功能
    const runButton = document.querySelector('.code-editor-run');
    const codeOutput = document.querySelector('.code-editor-output');
    const scrollUpBtn = document.querySelector('.code-scroll-button:first-child');
    const scrollDownBtn = document.querySelector('.code-scroll-button:last-child');
    
    if (runButton) {
        runButton.addEventListener('click', function() {
            // 模拟运行效果
            codeOutput.innerHTML = 'Compiling code...<br>';
            
            setTimeout(function() {
                codeOutput.innerHTML = `Hello C++ World!
a + b = 8
a - b = 2

<div class="code-scroll-controls">
    <button class="code-scroll-button">▲</button>
    <button class="code-scroll-button">▼</button>
</div>`;
                
                // 重新绑定滚动按钮事件
                initScrollControls();
            }, 800);
        });
    }
    
    // 初始化滚动控制功能
    function initScrollControls() {
        const scrollUpBtn = document.querySelector('.code-scroll-button:first-child');
        const scrollDownBtn = document.querySelector('.code-scroll-button:last-child');
        
        if (scrollUpBtn && scrollDownBtn) {
            scrollUpBtn.addEventListener('click', function() {
                codeOutput.scrollTop -= 50;
            });
            
            scrollDownBtn.addEventListener('click', function() {
                codeOutput.scrollTop += 50;
            });
        }
    }
    
    // 初始化滚动控制
    initScrollControls();
    
    // 课程大纲手风琴效果
    const accordionHeaders = document.querySelectorAll('.course-outline .accordion-header');
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                
                // 切换当前面板
                this.classList.toggle('active');
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
        
        // 默认展开第一个面板
        accordionHeaders[0].click();
    }
    
    // FAQ手风琴效果
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const header = item.querySelector('.faq-question');
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                
                // 切换当前面板
                this.parentElement.classList.toggle('active');
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
    }
});

/**
 * 初始化C++编译器模拟
 */
function initCompilerSimulation() {
    const codeInput = document.getElementById('code-input');
    const codeOutput = document.getElementById('code-output');
    const runButton = document.getElementById('run-button');
    const clearButton = document.getElementById('clear-output');
    
    if (!codeInput || !codeOutput || !runButton) return;

    // 示例代码
    const defaultCode = `#include <iostream>
using namespace std;

int main() {
    cout << "欢迎使用C++编译器！" << endl;
    
    int a, b;
    cout << "请输入两个整数: ";
    
    // 这里模拟用户输入5和3
    a = 5;
    b = 3;
    
    cout << "你输入的数字是: " << a << " 和 " << b << endl;
    cout << a << " + " << b << " = " << (a + b) << endl;
    cout << a << " - " << b << " = " << (a - b) << endl;
    cout << a << " * " << b << " = " << (a * b) << endl;
    cout << a << " / " << b << " = " << (a / b) << endl;
    
    return 0;
}`;

    // 设置默认代码
    if (codeInput.textContent === '') {
        codeInput.textContent = defaultCode;
    }
    
    // 语法高亮功能
    function applySyntaxHighlighting(code) {
        // 简单的语法高亮替换
        return code
            .replace(/\b(int|float|double|char|bool|void|using|namespace|return|if|else|for|while|do|switch|case|break|continue|struct|class)\b/g, '<span class="keyword">$1</span>')
            .replace(/\b(std|string|vector|cout|cin|endl)\b/g, '<span class="variable">$1</span>')
            .replace(/\b(main|printf|scanf)\b/g, '<span class="function">$1</span>')
            .replace(/\b([0-9]+)\b/g, '<span class="number">$1</span>')
            .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
            .replace(/(".*?")/g, '<span class="string">$1</span>')
            .replace(/(&lt;|&gt;|{|}|\(|\)|\[|\]|;|,|\.|::|=|\+|-|\*|\/|%)/g, '<span class="punctuation">$1</span>');
    }
    
    // 更新代码高亮
    function updateSyntaxHighlighting() {
        const codeText = codeInput.textContent;
        const htmlCode = applySyntaxHighlighting(
            codeText.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
        );
        codeInput.innerHTML = htmlCode;
        
        // 保持光标位置
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(codeInput);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    
    // 运行代码
    function runCode() {
        const code = codeInput.textContent;
        
        // 清除现有输出
        codeOutput.innerHTML = '';
        
        // 添加"编译中"状态
        codeOutput.innerHTML = '<div class="output-message">编译中...</div>';
        
        // 模拟编译和运行延迟
        setTimeout(() => {
            // 清除"编译中"状态
            codeOutput.innerHTML = '';
            
            // 模拟简单的C++程序输出
            try {
                // 这里我们只是模拟输出，实际上不会真正执行C++代码
                simulateOutput(code);
            } catch (error) {
                codeOutput.innerHTML += `<div class="error-output">${error.message}</div>`;
            }
        }, 800);
    }
    
    // 模拟C++代码输出
    function simulateOutput(code) {
        // 检查代码是否包含main函数
        if (!code.includes('main()') && !code.includes('main ()')) {
            codeOutput.innerHTML = `<div class="error-output">错误: 找不到main函数！</div>`;
            return;
        }
        
        // 提取cout语句来模拟输出
        const outputLines = [];
        
        // 查找所有cout语句
        const coutRegex = /cout\s*<<\s*(.+?)\s*;/g;
        let match;
        
        while ((match = coutRegex.exec(code)) !== null) {
            const outputExpression = match[1];
            
            // 处理简单的字符串输出
            if (outputExpression.includes('"')) {
                const stringMatch = outputExpression.match(/"([^"]+)"/);
                if (stringMatch) {
                    let output = stringMatch[1];
                    
                    // 处理endl
                    if (outputExpression.includes('endl')) {
                        output += '\n';
                    }
                    
                    outputLines.push(output);
                }
            } 
            // 处理变量和计算结果的简单模拟
            else if (code.includes('a = 5') && code.includes('b = 3')) {
                if (outputExpression.includes('a + b')) {
                    outputLines.push('8');
                } else if (outputExpression.includes('a - b')) {
                    outputLines.push('2');
                } else if (outputExpression.includes('a * b')) {
                    outputLines.push('15');
                } else if (outputExpression.includes('a / b')) {
                    outputLines.push('1');
                } else if (outputExpression.includes('a')) {
                    outputLines.push('5');
                } else if (outputExpression.includes('b')) {
                    outputLines.push('3');
                }
                
                // 处理endl
                if (outputExpression.includes('endl')) {
                    outputLines.push('\n');
                }
            }
        }
        
        // 将输出展示到控制台
        if (outputLines.length > 0) {
            codeOutput.innerHTML = `<div class="output-header">
                <span class="output-title">程序输出:</span>
            </div>
            <div class="success-output">${outputLines.join('')}</div>`;
        } else {
            codeOutput.innerHTML = `<div class="success-output">程序运行成功，无输出。</div>`;
        }
    }
    
    // 清除输出
    function clearOutput() {
        codeOutput.innerHTML = '';
    }
    
    // 事件监听
    runButton.addEventListener('click', runCode);
    
    if (clearButton) {
        clearButton.addEventListener('click', clearOutput);
    }
    
    // 初始语法高亮
    updateSyntaxHighlighting();
    
    // 监听代码编辑
    codeInput.addEventListener('input', function() {
        // 保存选择位置
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const startOffset = range.startOffset;
        
        // 更新语法高亮
        updateSyntaxHighlighting();
        
        // 尝试恢复光标位置
        try {
            const newRange = document.createRange();
            newRange.setStart(codeInput.childNodes[0], startOffset);
            newRange.collapse(true);
            selection.removeAllRanges();
            selection.addRange(newRange);
        } catch (e) {
            // 如果无法精确恢复位置，就将光标放在最后
            const range = document.createRange();
            range.selectNodeContents(codeInput);
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    });
}

// 示例项目模态框展示
function showProjectDetails(projectId) {
    // 基于项目ID加载相应的项目信息
    // 此函数将被HTML中的按钮调用
    console.log('显示项目详情: ' + projectId);
} 