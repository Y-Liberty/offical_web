# 网站自定义修改指南

本文档列出了网站中需要手动修改的所有部分，包括图片资源、联系信息、内容细节等。按照以下指导完成修改后，网站将完全符合"壹零贰肆少儿编程"的品牌形象。

## index.html 需要修改的内容

### 网站品牌和标识
- [ ] 修改网站标题：`<title>壹零贰肆 - 少儿编程教育</title>`
- [ ] 更新导航栏品牌名称：`<span class="logo-text">壹零贰肆</span>`
- [ ] 更新品牌标语：`<span class="logo-tagline">少儿编程教育</span>`

### 页面内容
- [ ] 更新首页横幅内容：
  ```html
  <h1 class="hero-title">培养孩子的<span class="highlight">编程思维</span>，开启未来无限可能</h1>
  <p class="hero-subtitle">通过有趣的编程课程，激发孩子的创造力和解决问题的能力</p>
  ```
- [ ] 修改教学特色部分的内容（趣味教学、小班授课、系统课程）
- [ ] 更新热门课程内容（Scratch编程启蒙、Python编程基础、C++算法进阶）
- [ ] 更新学生作品展示内容：
  ```html
  <h4>太空冒险游戏</h4>
  <p>张小明 | 10岁 | Scratch作品</p>
  ```
- [ ] 更新新闻动态内容：
  ```html
  <h3>暑期特别课程招生开始</h3>
  <p>为期四周的暑期编程营即将开始，提供人工智能、游戏开发和机器人编程三大主题，让孩子度过一个充实而有趣的科技假期...</p>
  ```
- [ ] 更新学生竞赛成果部分内容（奖项名称、获奖者、奖项等）
- [ ] 更新统计数据（120+奖项、85%获奖率、48金牌、12国际赛）

### 联系信息
- [ ] 更新联系我们部分：
  ```html
  <li><i class="bi bi-geo-alt-fill"></i> <span>地址：科技园区创新路88号未来大厦15楼</span></li>
  <li><i class="bi bi-telephone-fill"></i> <span>电话：400-123-4567</span></li>
  <li><i class="bi bi-envelope-fill"></i> <span>邮箱：info@weilaima.com</span></li>
  <li><i class="bi bi-clock-fill"></i> <span>工作时间：周一至周五 9:00-18:00，周六周日 10:00-17:00</span></li>
  ```
- [ ] 更新联系表单提交配置：
  ```html
  <form class="contact-form" action="https://formsubmit.co/yi_coder@163.com" method="POST">
  <input type="hidden" name="_subject" value="壹零贰肆少儿编程 - 网站咨询">
  <input type="hidden" name="_cc" value="info@weilaima.com">
  <input type="hidden" name="_next" value="https://yourwebsite.com/thanks.html">
  ```
- [ ] 更新免费试听表单提交配置：
  ```html
  <form class="trial-form" id="trial-form" action="https://formsubmit.co/yi_coder@163.com" method="POST">
  <input type="hidden" name="_subject" value="壹零贰肆少儿编程 - 试听预约">
  <input type="hidden" name="_cc" value="info@weilaima.com">
  <input type="hidden" name="_next" value="https://yourwebsite.com/thanks.html">
  ```

### 底部信息
- [ ] 更新关于我们简介：
  ```html
  <p>壹零贰肆少儿编程致力于为6-18岁青少年提供优质的编程教育，培养孩子的逻辑思维、解决问题的能力和创造力。</p>
  ```
- [ ] 更新社交媒体链接：微信、QQ、微博、抖音、B站等
- [ ] 更新二维码提示文字：
  ```html
  <p>获取最新资讯、课程优惠与教育干货</p>
  <p>添加微信客服咨询课程详情</p>
  ```
- [ ] 更新版权信息：
  ```html
  <p>© 2023 壹零贰肆少儿编程 版权所有 | 京ICP备12345678号-1</p>
  ```
- [ ] 更新底部菜单链接：隐私政策、服务条款、招贤纳士、网站地图

## 图片资源

根据优化的文件夹结构，请准备以下图片资源：

### Logo相关 (images/logo/)
- [ ] 主要logo: `images/logo/logo-primary.png`（建议尺寸：120px×40px）- 深色背景使用
- [ ] 白色logo: `images/logo/logo-white.png`（建议尺寸：140px×45px）- 用于页脚等浅色背景

### 课程相关图片
#### Scratch课程 (images/course/scratch/)
- [ ] 启蒙课程: `images/course/scratch/basic.jpg`（建议尺寸：360px×240px）
- [ ] 创意编程: `images/course/scratch/advanced.jpg`（建议尺寸：360px×240px）
- [ ] 课程大纲图: `images/course/scratch/outline.jpg`（建议尺寸：800px×600px）

#### Python课程 (images/course/python/)
- [ ] 基础课程: `images/course/python/basic.jpg`（建议尺寸：360px×240px）
- [ ] 应用开发: `images/course/python/advanced.jpg`（建议尺寸：360px×240px）
- [ ] 课程大纲图: `images/course/python/outline.jpg`（建议尺寸：800px×600px）

#### C++课程 (images/course/cpp/)
- [ ] 基础课程: `images/course/cpp/basic.jpg`（建议尺寸：360px×240px）
- [ ] 算法课程: `images/course/cpp/algorithm.jpg`（建议尺寸：360px×240px）
- [ ] 课程大纲图: `images/course/cpp/outline.jpg`（建议尺寸：800px×600px）

#### 整体课程体系
- [ ] 课程体系图: `images/course/system-diagram.jpg`（建议尺寸：800px×600px）

### 教师相关图片
#### 团队照片 (images/teachers/team/)
- [ ] 教师照片: `images/teachers/team/teacher1.jpg` 到 `images/teachers/team/teacher6.jpg`（建议尺寸：250px×250px，最好为正方形）
- [ ] 团队合影: `images/teachers/team/group-photo.jpg`（建议尺寸：800px×500px）

#### 证书与资质 (images/teachers/certs/)
- [ ] 证书图片: `images/teachers/certs/cert1.png` 到 `images/teachers/certs/cert4.png`（建议尺寸：300px×300px）

#### 培训系统 (images/teachers/training/)
- [ ] 培训系统图片: `images/teachers/training/system.jpg`（建议尺寸：700px×500px）

### 首页和横幅图片
- [ ] 首页大banner: `images/hero/main-banner.jpg`（建议尺寸：1920px×600px）
- [ ] 各页面横幅: `images/banners/about-banner.jpg`，`images/banners/course-banner.jpg` 等（建议尺寸：1920px×400px）

### "关于我们"页面 (images/about/)
- [ ] 机构介绍图: `images/about/intro.jpg`（建议尺寸：600px×400px）
- [ ] 发展历程图: `images/about/history.jpg`（建议尺寸：800px×500px）

### 学生作品展示 (images/showcase/)
- [ ] 学生项目: `images/showcase/projects/` 目录下放置各种项目图片
- [ ] 比赛照片: `images/showcase/competitions/` 目录下放置比赛相关照片
- [ ] 作品展示: `images/showcase/gallery/` 目录下放置其他作品展示图片

### 其他资源
- [ ] 合作伙伴logo: `images/partners/` 目录下放置各合作伙伴logo
- [ ] 公众号二维码: `images/qrcode/wechat.png`（建议尺寸：200px×200px）
- [ ] UI元素: `images/ui/` 目录下放置各种界面元素

详细的图片组织和命名规范，请参考 `images/README.md` 文件。

## 联系信息

### 地址与电话
- [ ] 公司地址：目前为"科技园区创新路88号未来大厦15楼"
- [ ] 联系电话：目前为"400-123-4567"
- [ ] 电子邮箱：目前为"info@weilaima.com"

### 社交媒体链接
- [ ] 微信公众号（更新二维码）
- [ ] 微博链接
- [ ] 其他社交媒体账号链接

## 课程信息

### 课程价格
- [ ] Scratch启蒙编程：目前为¥2,980
- [ ] Scratch创意编程：目前为¥3,980
- [ ] Python编程基础：目前为¥4,580
- [ ] Python应用开发：目前为¥5,280
- [ ] C++编程基础：目前为¥5,680
- [ ] C++算法与数据结构：目前为¥6,980

### 课程描述
- [ ] 检查并更新各课程的描述内容，确保准确性和吸引力
- [ ] 检查并更新课程时长、适合年龄范围等信息

### 课程特色
- [ ] 确认课程特色描述是否符合实际情况
- [ ] 更新课程体系图片和说明

## 教师信息

### 教师团队
- [ ] 更新核心教师团队成员信息（姓名、照片、背景介绍）
- [ ] 确认教师资质和特色描述是否准确

### 证书与资质
- [ ] 更新教师资质证书图片
- [ ] 更新培训体系描述

## 常见问题(FAQs)

- [ ] 根据实际情况修改FAQ问答内容，确保信息准确性
- [ ] 可根据常见咨询问题添加新的FAQ项目

## 版权信息

- [ ] 更新页脚版权信息："© 2023 壹零贰肆少儿编程 版权所有 | 京ICP备12345678号-1"
- [ ] 更新年份（如需要）

## 页面内容检查清单

### 首页
- [ ] 检查首页宣传语是否符合品牌定位
- [ ] 更新特色介绍
- [ ] 确认首页课程展示是否为重点推荐课程

### 关于我们
- [ ] 更新公司简介
- [ ] 检查发展历程时间线是否准确
- [ ] 更新公司愿景和使命宣言
- [ ] 确认荣誉和奖项内容

### 课程体系
- [ ] 检查课程分类和筛选是否合理
- [ ] 确认课程详情页链接是否正确

### 师资力量
- [ ] 更新师资优势描述
- [ ] 检查教师介绍内容

### 联系我们
- [ ] 确认联系表单是否正常工作
- [ ] 更新校区地址和联系方式（如有多个校区）

## 导航菜单

- [ ] 检查导航菜单项是否需要调整
- [ ] 确认下拉菜单内容是否完整

## 域名和SEO信息

- [ ] 更新网站标题中的机构名称
- [ ] 检查meta描述中的机构名称
- [ ] 更新所有页面的SEO相关标签
- [ ] 确认网站地图是否需要更新

## 其他定制信息

- [ ] 检查表单提交后的反馈信息
- [ ] 更新隐私政策（如有）
- [ ] 更新服务条款（如有）
- [ ] 确认第三方工具集成（如统计分析工具）

## 代码引用路径更新

在更新完图片资源后，需要修改代码中的图片引用路径。以下是主要需要更新的文件：

- [ ] HTML文件中的图片引用路径
- [ ] CSS文件中的背景图片路径
- [ ] JavaScript文件中的图片路径（如有）

例如，将原来的：
```html
<img src="images/logo.png" alt="壹零贰肆">
```

更新为：
```html
<img src="images/logo/logo-primary.png" alt="壹零贰肆">
```

# courses
## 图片资源
- [ ] 将photo文件夹中的图片放入images/course下的相应子文件夹中
- [ ] 课程卡片使用正确的目录结构，例如：
  - Scratch课程：images/course/scratch/basic.jpg, images/course/scratch/advanced.jpg
  - Python课程：images/course/python/basic.jpg, images/course/python/advanced.jpg
  - C++课程：images/course/cpp/basic.jpg, images/course/cpp/algorithm.jpg
- [ ] 课程体系图使用images/course/system-diagram.jpg

## 页面内容
- [ ] 检查课程卡片中的年龄范围与实际课程匹配
- [ ] 确保课程筛选功能正常工作
- [ ] 根据需要调整课程卡片的布局和样式

## 底部信息
- [ ] 移除社交媒体图标（微信、QQ、微博、抖音、B站）
- [ ] 保留网站导航和版权信息

# scratch

## 页面内容
- [ ] 更新Scratch横幅内容：
  ```html
  <h1>Scratch <span class="highlight">创意编程</span></h1>
  <p>专为6-12岁儿童设计的图形化编程课程，激发创造力，培养逻辑思维和问题解决能力</p>
  ```
- [ ] 修改课程介绍部分的内容（什么是Scratch编程）
- [ ] 更新课程特点内容（趣味学习、逻辑思维、创造能力、个性化指导、阶梯式课程、项目展示）
- [ ] 更新课程大纲内容（五个阶段的描述）
- [ ] 更新学生作品展示内容：
  ```html
  <h3>太空冒险游戏</h3>
  <p class="student-info">张小明 | 10岁 | 学习Scratch 3个月</p>
  ```
- [ ] 更新FAQ问答内容

## 图片资源
- [ ] Scratch横幅图片：`images/course/scratch/basic.jpg`
- [ ] 课程介绍图片：`images/course/scratch/advanced.jpg`
- [ ] 课程大纲图片：`images/course/scratch/outline.jpg`
- [ ] 学生项目图片：
  - `images/course/scratch/projects/project1.jpg`
  - `images/course/scratch/projects/project2.jpg`
  - `images/course/scratch/projects/project3.jpg`
  - `images/course/scratch/projects/project4.jpg`

## 统计数据
- [ ] 更新统计数据（5000+学生人数、200+获奖作品、98%学生满意度、10000+创意项目）

## 课程详情
- [ ] 检查课程适合年龄（6-12岁）
- [ ] 检查小班人数（6-8人）
- [ ] 检查课程班型（周末班/暑假班）

## 其他定制信息
- [ ] 检查"预约免费试听"模态框中的默认选项
- [ ] 确认"感兴趣的课程"下拉菜单选项
- [ ] 更新页面标题和META描述

# python

## 页面内容
- [ ] 更新Python横幅内容：
  ```html
  <h1>Python <span class="highlight">少儿编程</span></h1>
  <p>专为10-16岁青少年设计的编程课程，从基础入门到实际应用开发，培养编程思维和问题解决能力</p>
  ```
- [ ] 修改课程介绍部分的内容（什么是Python编程）
- [ ] 更新课程特点内容（实践驱动、逻辑思维、AI与数据、实用工具、渐进式学习、竞赛导向）
- [ ] 更新课程大纲内容（五个阶段的描述）

## 学生作品展示
- [ ] 核对并更新学生作品展示内容：
  ```html
  <h3>数据可视化项目</h3>
  <p class="student-info">王小明 | 15岁 | 学习Python 6个月</p>
  ```
- [ ] 更新项目核心代码图片：
  - `images/course/python/projects/code/code1.jpg`
  - `images/course/python/projects/code/code2.jpg`
  - `images/course/python/projects/code/code3.jpg`
- [ ] 更新项目效果展示图片：
  - `images/course/python/projects/project1_demo.jpg`
  - `images/course/python/projects/project2_demo.jpg`
  - `images/course/python/projects/project3_demo.jpg`
- [ ] 修改项目代码说明和技术亮点

## 常见问题
- [ ] 更新FAQ问答内容（学习基础、适合年龄、学习好处、硬件要求、课程特色）

## 图片资源
- [ ] Python横幅图片：`images/course/python/basic.jpg`
- [ ] 课程介绍图片：`images/course/python/advanced.jpg`
- [ ] 课程大纲图片：`images/course/python/outline.jpg`
- [ ] 学生项目图片：
  - `images/course/python/projects/project1.jpg`
  - `images/course/python/projects/project2.jpg`
  - `images/course/python/projects/project3.jpg`

## 课程详情
- [ ] 检查课程适合年龄（10-16岁）
- [ ] 检查小班人数（8-10人）
- [ ] 检查课程班型（周末班/暑假班）

## 其他定制信息
- [ ] 检查"预约免费试听"模态框中的默认选项
- [ ] 确认"感兴趣的课程"下拉菜单选项是否默认选中"Python少儿编程"
- [ ] 更新页面标题和META描述

---

完成上述修改后，请全面检查网站，确保所有"未来码少儿编程"的引用都已更新为"壹零贰肆少儿编程"，所有图片资源都已替换，所有联系信息都已更新为正确信息。 