# 网站自定义修改指南

## 页面修改清单

# index.html
## 品牌标识
- [ ] 网站标题：`<title>壹零贰肆 - 少儿编程教育</title>`
- [ ] 导航栏品牌名称：`<span class="logo-text">壹零贰肆</span>`
- [ ] 品牌标语：`<span class="logo-tagline">少儿编程教育</span>`

## 页面内容
- [ ] 首页横幅内容：
  ```html
  <h1 class="hero-title">培养孩子的<span class="highlight">编程思维</span>，开启未来无限可能</h1>
  <p class="hero-subtitle">通过有趣的编程课程，激发孩子的创造力和解决问题的能力</p>
  ```
- [ ] 教学特色部分（3个特色卡片）
- [ ] 热门课程内容（3个课程卡片）
- [ ] 学生作品展示（4个作品展示）
- [ ] 新闻动态（3条最新新闻）
- [ ] 学生竞赛成果（4个获奖展示）
- [ ] 统计数据（4个数据展示）

## 联系信息
- [ ] 联系我们部分：
  ```html
  <li><i class="bi bi-geo-alt-fill"></i> <span>地址：赛罕区双树街与汇成巷交叉口南50米首岛联合办公</span></li>
  <li><i class="bi bi-telephone-fill"></i> <span>电话：150-4487-1232</span></li>
  <li><i class="bi bi-envelope-fill"></i> <span>邮箱：yi_coder@163.com</span></li>
  <li><i class="bi bi-clock-fill"></i> <span>工作时间：周一至周五 18:00-20:00，周六周日 8:30-20:00</span></li>
  ```
- [ ] 联系表单配置：
  ```html
  <form class="contact-form" action="https://formsubmit.co/yi_coder@163.com" method="POST">
  <input type="hidden" name="_subject" value="壹零贰肆少儿编程 - 网站咨询">
  <input type="hidden" name="_cc" value="yi_coder@163.com">
  <input type="hidden" name="_next" value="https://yourwebsite.com/thanks.html">
  ```
- [ ] 免费试听表单配置：
  ```html
  <form class="trial-form" id="trial-form" action="https://formsubmit.co/yi_coder@163.com" method="POST">
  <input type="hidden" name="_subject" value="壹零贰肆少儿编程 - 试听预约">
  <input type="hidden" name="_cc" value="yi_coder@163.com">
  <input type="hidden" name="_next" value="https://yourwebsite.com/thanks.html">
  ```

## 底部信息
- [ ] 关于我们简介：
  ```html
  <p>壹零贰肆少儿编程致力于为6-18岁青少年提供优质的编程教育，培养孩子的逻辑思维、解决问题的能力和创造力。</p>
  ```
- [ ] 社交媒体链接：微信、QQ、微博、抖音、B站等
- [ ] 二维码提示文字：
  ```html
  <p>获取最新资讯、课程优惠与教育干货</p>
  <p>添加微信客服咨询课程详情</p>
  ```
- [ ] 版权信息：
  ```html
  <p>© 2024 壹零贰肆少儿编程 版权所有 | 蒙ICP备2024016867号-1</p>
  ```
- [ ] 底部菜单链接：隐私政策、服务条款、招贤纳士、网站地图

# about.html
## 页面内容
- [ ] 公司简介：
  ```html
  <div class="about-intro">
    <h2>关于壹零贰肆</h2>
    <p>壹零贰肆少儿编程成立于2018年，专注于为6-18岁青少年提供专业的编程教育...</p>
  </div>
  ```
- [ ] 发展历程时间线：
  ```html
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-date">2018年</div>
      <div class="timeline-content">
        <h4>壹零贰肆少儿编程成立</h4>
        <p>在北京成立第一家校区...</p>
      </div>
    </div>
    <!-- 更多时间线项目 -->
  </div>
  ```
- [ ] 公司愿景和使命：
  ```html
  <div class="vision-mission">
    <h3>我们的愿景</h3>
    <p>成为国内领先的少儿编程教育品牌...</p>
    <h3>我们的使命</h3>
    <p>让每个孩子都能享受编程的乐趣...</p>
  </div>
  ```
- [ ] 荣誉和奖项展示（6个奖项）

## 图片资源
- [ ] 机构介绍图：`images/about/intro.jpg`（600px×400px）
- [ ] 发展历程图：`images/about/history.jpg`（800px×500px）
- [ ] 团队照片：`images/about/team.jpg`（800px×500px）

# courses.html
## 页面内容
- [ ] 课程体系介绍：
  ```html
  <div class="course-system">
    <h2>我们的课程体系</h2>
    <p>壹零贰肆少儿编程提供完整的编程学习路径...</p>
  </div>
  ```
- [ ] 课程分类说明（3个主要分类）
- [ ] 课程筛选功能（年龄、难度、类型）
- [ ] 课程卡片内容（9个课程展示）

## 图片资源
- [ ] 课程体系图：`images/course/system-diagram.jpg`（800px×600px）
- [ ] 课程分类图片：
  - Scratch：`images/course/scratch/category.jpg`（400px×300px）
  - Python：`images/course/python/category.jpg`（400px×300px）
  - C++：`images/course/cpp/category.jpg`（400px×300px）
- [ ] 课程卡片图片（每个课程一张）

# scratch.html
## 页面内容
- [ ] 横幅内容：
  ```html
  <h1>Scratch <span class="highlight">创意编程</span></h1>
  <p>专为6-12岁儿童设计的图形化编程课程，激发创造力，培养逻辑思维和问题解决能力</p>
  ```
- [ ] 课程介绍：
  ```html
  <div class="course-intro">
    <h2>什么是Scratch编程？</h2>
    <p>Scratch是由麻省理工学院开发的图形化编程语言...</p>
  </div>
  ```
- [ ] 课程特点（6个特点展示）
- [ ] 课程大纲（5个阶段说明）
- [ ] 学生作品展示（4个作品）
- [ ] FAQ问答（8个常见问题）

## 图片资源
- [ ] 横幅图片：`images/course/scratch/banner.jpg`（1920px×400px）
- [ ] 课程介绍图片：`images/course/scratch/intro.jpg`（600px×400px）
- [ ] 课程大纲图片：`images/course/scratch/outline.jpg`（800px×600px）
- [ ] 学生项目图片（4张）

# python.html
## 页面内容
- [ ] 横幅内容：
  ```html
  <h1>Python <span class="highlight">少儿编程</span></h1>
  <p>专为10-16岁青少年设计的编程课程，从基础入门到实际应用开发，培养编程思维和问题解决能力</p>
  ```
- [ ] 课程介绍：
  ```html
  <div class="course-intro">
    <h2>为什么选择Python？</h2>
    <p>Python是当今最受欢迎的编程语言之一...</p>
  </div>
  ```
- [ ] 课程特点（6个特点展示）
- [ ] 课程大纲（5个阶段说明）
- [ ] 学生作品展示（4个作品）
- [ ] 项目代码展示（3个代码示例）

## 图片资源
- [ ] 横幅图片：`images/course/python/banner.jpg`（1920px×400px）
- [ ] 课程介绍图片：`images/course/python/intro.jpg`（600px×400px）
- [ ] 课程大纲图片：`images/course/python/outline.jpg`（800px×600px）
- [ ] 学生项目图片（4张）
- [ ] 代码示例图片（3张）

# cpp.html
## 页面内容
- [ ] 横幅内容：
  ```html
  <h1>C++ <span class="highlight">算法编程</span></h1>
  <p>专为12-18岁青少年设计的高级编程课程，培养算法思维，为信息学竞赛打下坚实基础</p>
  ```
- [ ] 课程介绍：
  ```html
  <div class="course-intro">
    <h2>C++编程的重要性</h2>
    <p>C++是信息学竞赛的主要编程语言...</p>
  </div>
  ```
- [ ] 课程特点（6个特点展示）
- [ ] 课程大纲（5个阶段说明）
- [ ] 算法学习内容（4个算法示例）
- [ ] 竞赛指导内容（3个竞赛介绍）

## 图片资源
- [ ] 横幅图片：`images/course/cpp/banner.jpg`（1920px×400px）
- [ ] 课程介绍图片：`images/course/cpp/intro.jpg`（600px×400px）
- [ ] 课程大纲图片：`images/course/cpp/outline.jpg`（800px×600px）
- [ ] 算法示例图片（4张）

# showcase.html
## 页面内容
- [ ] 筛选功能按钮：
  ```html
  <div class="filter-buttons">
    <button class="filter-btn active" data-filter="all">全部</button>
    <button class="filter-btn" data-filter="scratch">Scratch</button>
    <button class="filter-btn" data-filter="python">Python</button>
    <button class="filter-btn" data-filter="cpp">C++</button>
    <button class="filter-btn" data-filter="award">获奖作品</button>
  </div>
  ```
- [ ] 学生作品展示项（12个作品）
- [ ] 项目详情模态框（每个作品一个）
- [ ] 参与创作区块：
  ```html
  <div class="join-showcase">
    <h2>也想展示你的作品？</h2>
    <p>如果你是我们的学员，并且完成了一个优秀的编程项目，欢迎向老师提交你的作品！</p>
  </div>
  ```

## 图片资源
- [ ] 学生作品缩略图：`images/showcase/thumbnails/`（400px×300px）
- [ ] 作品详情图片：`images/showcase/details/`（800px×600px）
- [ ] 参与创作区块图片：`images/showcase/join.jpg`（500px×400px）

# teachers.html
## 页面内容
- [ ] 教师团队介绍：
  ```html
  <div class="teachers-intro">
    <h2>我们的教师团队</h2>
    <p>壹零贰肆拥有一支专业、热情、富有经验的教师团队...</p>
  </div>
  ```
- [ ] 教师个人简介（6位教师）
- [ ] 教学特色说明（4个特色）
- [ ] 培训体系介绍：
  ```html
  <div class="training-system">
    <h3>教师培训体系</h3>
    <p>我们建立了完善的教师培训体系...</p>
  </div>
  ```

## 图片资源
- [ ] 教师照片：`images/teachers/team/`（250px×250px）
- [ ] 团队合影：`images/teachers/team/group.jpg`（800px×500px）
- [ ] 证书图片：`images/teachers/certs/`（300px×300px）
- [ ] 培训系统图片：`images/teachers/training/system.jpg`（700px×500px）

# competition.html
## 页面内容
- [ ] 竞赛介绍：
  ```html
  <div class="competition-intro">
    <h2>编程竞赛</h2>
    <p>壹零贰肆定期组织各类编程竞赛，为学生提供展示和交流的平台...</p>
  </div>
  ```
- [ ] 竞赛规则（3个主要规则）
- [ ] 参赛要求（4个要求）
- [ ] 奖项设置（3个奖项等级）
- [ ] 往届回顾（4届比赛）

## 图片资源
- [ ] 竞赛宣传图片：`images/competition/promo.jpg`（800px×500px）
- [ ] 往届比赛照片：`images/competition/previous/`（600px×400px）
- [ ] 获奖作品展示：`images/competition/awards/`（400px×300px）

# news.html
## 页面内容
- [ ] 新闻列表（12条新闻）
- [ ] 新闻详情（每个新闻一个页面）
- [ ] 新闻分类（4个分类）
- [ ] 新闻时间线（按月份组织）

## 图片资源
- [ ] 新闻配图：`images/news/`（400px×300px）
- [ ] 新闻封面图：`images/news/covers/`（800px×400px）

# faq.html
## 页面内容
- [ ] 常见问题列表（20个问题）
- [ ] 问题分类（4个分类）
- [ ] 问题解答（每个问题详细解答）
- [ ] 联系咨询部分：
  ```html
  <div class="contact-consult">
    <h3>还有问题？</h3>
    <p>欢迎随时联系我们，我们的专业顾问将为您解答</p>
  </div>
  ```

# contact.html
## 页面内容
- [ ] 联系表单：
  ```html
  <form class="contact-form" action="https://formsubmit.co/yi_coder@163.com" method="POST">
    <input type="hidden" name="_subject" value="壹零贰肆少儿编程 - 网站咨询">
    <input type="hidden" name="_cc" value="yi_coder@163.com">
    <input type="hidden" name="_next" value="https://yourwebsite.com/thanks.html">
  </form>
  ```
- [ ] 校区信息（3个校区）
- [ ] 联系方式（电话、邮箱、微信）
- [ ] 地图位置（3个校区地图）

## 图片资源
- [ ] 校区照片：`images/contact/campus/`（600px×400px）
- [ ] 地图截图：`images/contact/maps/`（800px×500px）

# resources.html
## 页面内容
- [ ] 资源分类（4个分类）
- [ ] 资源列表（每个分类10个资源）
- [ ] 资源描述（每个资源详细说明）
- [ ] 下载链接（每个资源下载地址）

## 图片资源
- [ ] 资源封面图：`images/resources/covers/`（300px×400px）
- [ ] 资源预览图：`images/resources/previews/`（600px×400px）

# careers.html
## 页面内容
- [ ] 招聘职位（5个职位）
- [ ] 职位要求（每个职位详细要求）
- [ ] 福利待遇：
  ```html
  <div class="benefits">
    <h3>我们提供</h3>
    <ul>
      <li>具有竞争力的薪资</li>
      <li>完善的培训体系</li>
      <li>良好的发展空间</li>
    </ul>
  </div>
  ```
- [ ] 应聘流程（4个步骤）

# 通用修改项
## 图片资源
- [ ] Logo相关：
  - 主要logo：`images/logo/logo-primary.png`（120px×40px）
  - 白色logo：`images/logo/logo-white.png`（140px×45px）
- [ ] 课程相关图片：
  - Scratch课程：`images/course/scratch/`
  - Python课程：`images/course/python/`
  - C++课程：`images/course/cpp/`
- [ ] 教师相关图片：`images/teachers/`
- [ ] 首页和横幅图片：`images/hero/`和`images/banners/`
- [ ] 关于我们页面图片：`images/about/`
- [ ] 学生作品展示图片：`images/showcase/`
- [ ] 其他资源图片：`images/ui/`

## 联系信息
- [ ] 地址与电话：
  ```html
  <address>
    地址：赛罕区双树街与汇成巷交叉口南50米首岛联合办公<br>
    电话：150-4487-1232<br>
    邮箱：yi_coder@163.com
  </address>
  ```
- [ ] 社交媒体链接：
  ```html
  <div class="social-links">
    <a href="#"><i class="bi bi-wechat"></i></a>
    <a href="#"><i class="bi bi-qq"></i></a>
    <a href="#"><i class="bi bi-weibo"></i></a>
  </div>
  ```

## 课程信息
- [ ] 课程价格：
  ```html
  <div class="course-prices">
    <div class="price-item">
      <h4>Scratch启蒙编程</h4>
      <p class="price">¥2,980</p>
    </div>
    <!-- 更多课程价格 -->
  </div>
  ```
- [ ] 课程描述（每个课程详细描述）
- [ ] 课程特色（每个课程3-4个特色）

## 教师信息
- [ ] 教师团队信息（6位教师）
- [ ] 证书与资质（4个证书）

## 其他
- [ ] 常见问题(FAQs)（20个问题）
- [ ] 版权信息：
  ```html
  <p>© 2024 壹零贰肆少儿编程 版权所有 | 蒙ICP备2024016867号-1</p>
  ```
- [ ] 导航菜单（所有页面统一）
- [ ] SEO信息（所有页面meta标签）
- [ ] 表单反馈（所有表单提交后页面）
- [ ] 隐私政策：`privacy-policy.html`
- [ ] 服务条款：`terms-of-service.html`

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
  <li><i class="bi bi-geo-alt-fill"></i> <span>地址：赛罕区双树街与汇成巷交叉口南50米首岛联合办公</span></li>
  <li><i class="bi bi-telephone-fill"></i> <span>电话：150-4487-1232</span></li>
  <li><i class="bi bi-envelope-fill"></i> <span>邮箱：yi_coder@163.com</span></li>
  <li><i class="bi bi-clock-fill"></i> <span>工作时间：周一至周五 18:00-20:00，周六周日 8:30-20:00</span></li>
  ```
- [ ] 更新联系表单提交配置：
  ```html
  <form class="contact-form" action="https://formsubmit.co/yi_coder@163.com" method="POST">
  <input type="hidden" name="_subject" value="壹零贰肆少儿编程 - 网站咨询">
  <input type="hidden" name="_cc" value="yi_coder@163.com">
  <input type="hidden" name="_next" value="https://yourwebsite.com/thanks.html">
  ```
- [ ] 更新免费试听表单提交配置：
  ```html
  <form class="trial-form" id="trial-form" action="https://formsubmit.co/yi_coder@163.com" method="POST">
  <input type="hidden" name="_subject" value="壹零贰肆少儿编程 - 试听预约">
  <input type="hidden" name="_cc" value="yi_coder@163.com">
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
  <p>© 2024 壹零贰肆少儿编程 版权所有 | 蒙ICP备2024016867号-1</p>
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
- [ ] 公司地址：目前为"赛罕区双树街与汇成巷交叉口南50米首岛联合办公"
- [ ] 联系电话：目前为"150-4487-1232"
- [ ] 电子邮箱：目前为"yi_coder@163.com"

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

- [ ] 更新页脚版权信息："© 2024 壹零贰肆少儿编程 版权所有 | 蒙ICP备2024016867号-1"
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

# 学生作品展示页面 (showcase.html)

## 页面内容调整

### 筛选功能
- [ ] 根据实际需求修改筛选按钮：
  ```html
  <button class="filter-btn active" data-filter="all">全部</button>
  <button class="filter-btn" data-filter="scratch"><i class="bi bi-puzzle"></i> Scratch</button>
  <button class="filter-btn" data-filter="python"><i class="bi bi-code-slash"></i> Python</button>
  <button class="filter-btn" data-filter="cpp"><i class="bi bi-cpu"></i> C++</button>
  <button class="filter-btn" data-filter="award"><i class="bi bi-trophy"></i> 获奖作品</button>
  ```
  可按需添加更多分类按钮，如按年龄分类、按难度分类等

### 学生作品展示项
- [ ] 更新每个展示项的内容，包括：
  - 学生姓名
  - 年龄
  - 项目名称
  - 项目类型
  - 获奖情况
  - 项目图片

- [ ] 修改作品项示例：
  ```html
  <div class="col-lg-4 col-md-6 mb-4 showcase-item-wrapper" data-category="scratch award">
      <div class="showcase-item" id="project1">
          <div class="showcase-img">
              <img src="images/showcase/project1.jpg" alt="太空冒险游戏" class="img-fluid">
              <div class="showcase-overlay">
                  <div class="overlay-content">
                      <span class="project-category">Scratch作品</span>
                      <h4>太空冒险游戏</h4>
                      <p class="project-author">张小明 | 10岁</p>
                      <a href="#" class="btn btn-view" data-bs-toggle="modal" data-bs-target="#projectModal1">
                          查看详情 <i class="bi bi-arrow-right"></i>
                      </a>
                  </div>
              </div>
          </div>
          <div class="showcase-info">
              <div class="d-flex justify-content-between align-items-center">
                  <div>
                      <h5>太空冒险游戏</h5>
                      <p class="mb-0">Scratch | 游戏开发</p>
                  </div>
                  <div class="showcase-badge">
                      <span class="badge bg-success"><i class="bi bi-trophy"></i> 获奖</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
  ```

### 项目详情模态框
- [ ] 更新项目详情模态框内容：
  - 项目标题
  - 大图展示
  - 演示视频链接（YouTube/BiliBili等，根据情况修改）
  - 作者信息
  - 项目描述
  - 技术要点
  - 获奖情况
  - 老师评语

- [ ] 模态框内容示例：
  ```html
  <div class="modal-body">
      <div class="row">
          <div class="col-lg-8">
              <div class="project-showcase">
                  <img src="images/showcase/project1.jpg" alt="太空冒险游戏" class="img-fluid rounded">
                  <div class="project-video mt-3">
                      <div class="ratio ratio-16x9">
                          <!-- 替换为实际视频链接 -->
                          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="项目演示视频" allowfullscreen></iframe>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-lg-4">
              <div class="project-details">
                  <!-- 替换为实际项目信息 -->
                  <div class="project-info-item">
                      <h6>作者信息</h6>
                      <p>张小明 | 10岁 | 三年级</p>
                  </div>
                  <!-- 其他项目详情... -->
              </div>
          </div>
      </div>
  </div>
  ```

### 参与创作区块
- [ ] 更新参与创作区块的内容，包括文案和图片：
  ```html
  <div class="join-content">
      <h2>也想展示你的作品？</h2>
      <p>如果你是我们的学员，并且完成了一个优秀的编程项目，欢迎向老师提交你的作品，有机会在这里展示！</p>
      <!-- 其他内容... -->
  </div>
  ```

## 图片资源

### 学生作品展示图片
- [ ] 准备学生作品缩略图（推荐尺寸：400px×300px）：
  - `
  - `images/showcase/project1.jpg`
  - `images/showcase/project2.jpg`
  - `images/showcase/project3.jpg`
  - 等更多作品图片

### 参与创作区块图片
- [ ] 准备参与创作区块的图片（推荐尺寸：500px×400px）：
  - `images/showcase/join-showcase.jpg`

## JavaScript功能定制

### 筛选功能
- [ ] 如需修改筛选逻辑，编辑 `js/showcase.js` 中的 `initFilterButtons()` 函数

### 加载更多功能
- [ ] 如需连接实际后端加载更多作品，修改 `js/showcase.js` 中的 `initLoadMore()` 函数
- [ ] 可以根据实际情况修改加载作品的数量和行为

---

完成上述修改后，请全面检查网站，确保所有"未来码少儿编程"的引用都已更新为"壹零贰肆少儿编程"，所有图片资源都已替换，所有联系信息都已更新为正确信息。 