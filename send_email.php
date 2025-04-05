<?php
header('Content-Type: application/json');

// 获取表单数据
$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// 验证数据
if (empty($name) || empty($phone) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => '请填写所有必填字段']);
    exit;
}

// 设置收件人邮箱
$to = 'yi_coder@163.com';

// 设置邮件主题
$subject = '网站留言 - ' . $name;

// 构建邮件内容
$email_content = "
<html>
<head>
    <title>网站留言</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f8f9fa; padding: 15px; border-radius: 5px; }
        .content { margin-top: 20px; }
        .field { margin-bottom: 10px; }
        .label { font-weight: bold; color: #666; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>新的网站留言</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <span class='label'>姓名：</span>
                <span>{$name}</span>
            </div>
            <div class='field'>
                <span class='label'>电话：</span>
                <span>{$phone}</span>
            </div>
            <div class='field'>
                <span class='label'>邮箱：</span>
                <span>{$email}</span>
            </div>
            <div class='field'>
                <span class='label'>留言内容：</span>
                <p>{$message}</p>
            </div>
        </div>
    </div>
</body>
</html>
";

// 设置邮件头
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: {$email}" . "\r\n";
$headers .= "Reply-To: {$email}" . "\r\n";

// 发送邮件
$mail_sent = mail($to, $subject, $email_content, $headers);

if ($mail_sent) {
    echo json_encode(['success' => true, 'message' => '留言已成功发送']);
} else {
    echo json_encode(['success' => false, 'message' => '发送失败，请稍后重试']);
}
?> 