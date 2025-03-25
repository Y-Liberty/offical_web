/**
 * 图片优化脚本
 * 使用方法: node optimize.js
 * 需要先安装依赖: npm install sharp
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 需要处理的图片目录
const imageDirectories = [
    'images/hero',
    'images/course',
    'images/showcase',
    'images/awards',
    'images/news',
    'images/teachers',
];

// 优化配置
const config = {
    jpg: {
        quality: 80, // 质量
        progressive: true // 渐进式加载
    },
    png: {
        quality: 80,
        compressionLevel: 9
    },
    webp: {
        quality: 80
    }
};

// 文件大小限制 (2MB)
const SIZE_LIMIT = 2 * 1024 * 1024;

// 遍历所有图片目录
async function optimizeImages() {
    for (const dir of imageDirectories) {
        await processDirectory(dir);
    }
    console.log('图片优化完成!');
}

// 处理单个目录
async function processDirectory(directory) {
    try {
        const files = fs.readdirSync(directory, { withFileTypes: true });
        
        for (const file of files) {
            const fullPath = path.join(directory, file.name);
            
            // 如果是目录，递归处理
            if (file.isDirectory()) {
                await processDirectory(fullPath);
                continue;
            }
            
            // 检查是否是图片文件
            const ext = path.extname(file.name).toLowerCase();
            if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
                continue;
            }
            
            // 检查文件大小
            const stats = fs.statSync(fullPath);
            if (stats.size <= SIZE_LIMIT) {
                continue; // 文件不够大，跳过
            }
            
            console.log(`优化图片: ${fullPath} (${(stats.size / 1024 / 1024).toFixed(2)}MB)`);
            
            // 根据文件类型进行优化
            try {
                let image = sharp(fullPath);
                
                // 获取图片信息
                const metadata = await image.metadata();
                
                // 如果尺寸超过1920px，调整大小
                if (metadata.width > 1920) {
                    image = image.resize(1920);
                }
                
                // 转换为WebP格式
                const webpOutput = `${fullPath.replace(ext, '')}.webp`;
                await image.webp(config.webp).toFile(webpOutput);
                
                // 同时压缩原始格式
                if (ext === '.png') {
                    await image.png(config.png).toFile(`${fullPath}.optimized`);
                } else {
                    await image.jpeg(config.jpg).toFile(`${fullPath}.optimized`);
                }
                
                // 替换原文件
                fs.unlinkSync(fullPath);
                fs.renameSync(`${fullPath}.optimized`, fullPath);
                
                console.log(`  ✓ 已压缩并创建WebP版本: ${webpOutput}`);
            } catch (err) {
                console.error(`  ✗ 处理图片失败: ${fullPath}`, err);
            }
        }
    } catch (err) {
        console.error(`访问目录失败: ${directory}`, err);
    }
}

// 运行优化
optimizeImages().catch(console.error); 