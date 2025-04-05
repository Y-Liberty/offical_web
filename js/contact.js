document.addEventListener('DOMContentLoaded', function() {
    // 表单验证和提交
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // 表单验证
            if (!validateForm(formData)) {
                return;
            }

            // 显示提交中状态
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="bi bi-arrow-repeat"></i> 提交中...';
            submitButton.disabled = true;

            // 模拟表单提交（实际项目中需要替换为真实的API调用）
            setTimeout(() => {
                // 显示成功提示
                showAlert('success', '留言已成功提交，我们会尽快与您联系！');
                
                // 重置表单
                contactForm.reset();
                
                // 恢复按钮状态
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }

    // 表单验证函数
    function validateForm(data) {
        // 姓名验证
        if (!data.name.trim()) {
            showAlert('error', '请输入您的姓名');
            return false;
        }

        // 电话验证
        const phoneRegex = /^1[3-9]\d{9}$/;
        if (!phoneRegex.test(data.phone)) {
            showAlert('error', '请输入正确的手机号码');
            return false;
        }

        // 邮箱验证
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showAlert('error', '请输入正确的电子邮箱');
            return false;
        }

        // 咨询类型验证
        if (!data.subject) {
            showAlert('error', '请选择咨询类型');
            return false;
        }

        // 留言内容验证
        if (!data.message.trim()) {
            showAlert('error', '请输入留言内容');
            return false;
        }

        return true;
    }

    // 显示提示信息
    function showAlert(type, message) {
        // 移除现有的提示
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        // 创建新的提示
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`;
        alertDiv.setAttribute('role', 'alert');
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        // 添加到表单前
        contactForm.insertBefore(alertDiv, contactForm.firstChild);

        // 5秒后自动关闭
        setTimeout(() => {
            const bsAlert = new bootstrap.Alert(alertDiv);
            bsAlert.close();
        }, 5000);
    }

    // 初始化百度地图（需要替换为实际的百度地图API密钥）
    function initMap() {
        // 这里需要替换为实际的百度地图API密钥和初始化代码
        console.log('地图初始化');
    }

    // 页面加载完成后初始化地图
    initMap();
}); 