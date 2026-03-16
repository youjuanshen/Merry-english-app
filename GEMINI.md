# GEMINI.md - 当前任务文档

> **开始工作前必读：`../项目规则.md`**（文件放置规则、目录结构、代码规范、禁止事项）
>
> 历史任务(1-28)已全部完成，归档在底部。只看 **当前任务** 部分即可。

---

## 工作流程

1. 看当前任务 → 2. 做 → 3. commit + push → 4. 做下一个

---

## 当前任务

| # | 任务 | 优先级 | 状态 |
|---|------|--------|------|
| 29 | 修复图片空白 + 底部异常框 | ✅ | 已完成 |
| 30 | 教师端教学目标不更新 | ✅ | 已完成 |
| 31 | 教师端作业检查功能 | ✅ | 已完成 |
| 32 | 教学目标按听说读写模块变化 | 🔴 最高 | 待办 |
| 33 | 作业检查"保存"按钮改为"提交" | 🟢 简单 | 待办 |
| 34 | 修复阅读模块题型渲染bug | 🔴 最高 | 待办 |

---

## 任务29：修复图片空白 + 底部异常框

### 问题A：图片空白
- iPhone上部分图片不显示
- 原因：10张PNG图片过大（最大458KB）

需压缩的图片：

| 文件 | 大小 |
|------|------|
| bear.png | 458KB |
| cat.png | 363KB |
| elephant.png | 248KB |
| tiger.png | 226KB |
| mouse.png | 211KB |
| horse.png | 178KB |
| bird.png | 157KB |
| rabbit.png | 129KB |
| panda.png | 123KB |
| dog.png | 105KB |

修复方法：
```bash
# 压缩到200x200，目标<100KB
cd assets/images
for f in bear cat elephant tiger mouse horse bird rabbit panda dog; do
  sips -Z 200 ${f}.png --out ${f}.png
done
```

### 问题B：底部异常颜色框
- 学生端底部出现不同颜色的框框
- 可能是 `feedback-panel`、`correct-answer-display`、`progressive-hint` 元素残留
- 在Chrome DevTools用iPhone模式（414x736）排查

---

## 任务30：教师端教学目标不更新

### 问题
切换单元/课时后，教学目标始终显示 Unit 1 Lesson 1。

### 关键信息
- `teacher/data.js` 中 `lessonObjectives` 已有 U1L1~U4L4 全部16课数据（没有缺失）
- 问题在 `teacher/teacher.js` 的代码逻辑

### 排查步骤
1. 检查 `initPreparePage()` 是否在恢复select值后调用了 `updateCurrentLesson()`
2. 检查 select 的 change 事件是否正常触发 `updateCurrentLesson()`
3. 在浏览器Console里手动测试：`updateCurrentLesson()` 看教学目标是否变化

---

## 任务31：教师端作业检查功能

### 需求
在课前准备页面增加"作业检查"，教师点击标记未交作业的学生。

### 交互
1. `teacher/prepare.html` 新增卡片，显示27人名单（网格布局）
2. 点击学生名字 = 标记未交（变红），再点取消
3. 底部显示"已标记 X 人未交"
4. 自动保存到 localStorage

### 数据格式
```javascript
// key: 'homeworkRecords'
{
  "2026-03-16_U1L1": {
    date: "2026-03-16",
    lesson: "U1L1",
    missingStudents: [1, 5, 12]
  }
}
```

### 其他页面联动
- `control.html` 顶部显示"上节课未交作业：张美茹、张志鹏"
- `feedback.html` 显示作业完成率

### 学生名单
```
1.张宇豪  2.张佳寒  3.张睿渊  4.张羽韬  5.张美茹
6.张嘉钦  7.卢梦婷  8.张悦萱  9.张语涵  10.张英豪
11.张志鹏 12.张智杰 13.张梓婷 14.张品琪 15.张诺依
16.张雨泽 17.张依彤 18.张艺楠 19.张思彤 20.张子豪
21.张梓亦 22.张皓鑫 23.张雨欣 24.张如欣 25.张柏涵
26.张梓纯 27.张泽鑫
```

---

## 代码速查

```
代码/
├── index.html          # 学生端
├── app.js              # 核心逻辑
├── style.css           # 样式
├── modules/            # 听力/阅读/写作/口语
├── data/               # 16课题库 + 成就/任务/宠物/地图
├── teacher/            # 教师端（prepare/control/dashboard/feedback）
└── assets/images/      # 42张PNG
```

### app.js 关键函数

| 函数 | 作用 |
|------|------|
| `startGame` | 开始游戏，重新读取课程设置 |
| `renderQuestion` | 渲染题目（开头清除残留面板） |
| `handleAnswer` | 处理答题 |
| `showFeedbackPanel` | 底部反馈面板 |
| `onCorrect` | 答对加星星 |
| `showTransition` | 前测完成页（再来一遍/开始练习） |
| `showFinishScreen` | 练习完成页（再来一次/返回首页） |

### 注意事项
- 兼容 iOS 12+（不用 `?.` 等新语法）
- 所有 `JSON.parse` 必须有 try-catch
- 师生通信靠 localStorage 的 `teacherCommand` 和 `currentLesson`

---

## 任务32：教学目标按听说读写模块变化

### 需求
当前教学目标只跟单元/课时变化，不跟模块变化。希望选择不同模块（听力/阅读/写作/口语）时，教学目标也显示对应模块的重点。

### 实现方案
1. 在 `teacher/data.js` 的 `lessonObjectives` 中，给每课增加按模块分类的目标：
```javascript
'U1L1': {
    title: '...',
    vocabulary: [...],
    sentences: [...],
    objectives: [...],           // 通用目标（保留）
    moduleObjectives: {          // 新增：按模块的教学目标
        listening: ['能听懂5个动物单词', '能根据录音选择正确图片'],
        reading: ['能认读5个动物单词', '能理解简单句子含义'],
        writing: ['能正确拼写5个动物单词', '能补全简单句子'],
        speaking: ['能正确朗读5个动物单词', '能用This is...造句']
    }
}
```

2. 在 `teacher/teacher.js` 的 `renderObjectives` 函数中，根据 `currentModule` 显示对应模块的目标
3. 模块选择器点击时，也调用 `renderObjectives` 更新显示

### 修改文件
- `teacher/data.js` - 16课都要加 `moduleObjectives`
- `teacher/teacher.js` - `renderObjectives` 读取模块目标

---

## 任务33：作业检查"保存"按钮改为"提交"

### 需求
`teacher/prepare.html` 中作业检查的"保存作业检查结果"按钮文字改为"提交"。

### 修改
1. `teacher/prepare.html` - 按钮文字改为"提交"
2. `teacher/teacher.js` - `saveHomeworkCheck` 函数中成功提示改为"✅ 提交成功！"

---

## 任务34：修复阅读模块题型渲染bug

### Bug A：duo_race 和 whack_mole 在阅读模块显示空白
- `modules/reading.js` 不支持 `duo_race` 和 `whack_mole` 题型
- 但 `data/unit2_lesson1.js` 的 reading.practice 里有这两种题（约第836、866行）
- **方案二选一**：
  - 方案1（推荐）：在 `reading.js` 中添加 `duo_race` 和 `whack_mole` 的渲染逻辑（可以复用 `listening.js` 中的代码）
  - 方案2：把阅读题库中的 `duo_race` 和 `whack_mole` 题目改为 `reading.js` 已支持的题型

### Bug B：sentence_match 的 options 格式不匹配
- 题库里 sentence_match 的 options 用的是对象格式：`{text: "<img...>", value: "red"}`
- 但 `reading.js` 第17-31行直接 `card.innerHTML = opt`，对象会显示为 `[object Object]`
- 而且判断正确的逻辑也错了：`idx === q.correct`，但 `q.correct` 是字符串（如 "red"）不是数字索引

**修复方法**（reading.js 第6-31行）：
```javascript
// sentence_match 的 options 是 {text, value} 对象
if (q.type === 'sentence_match') {
    q.options.forEach((opt, idx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.innerHTML = opt.text;  // 用 opt.text 而不是 opt
        card.onclick = () => {
            handleAnswer(opt.value === q.correct, card);  // 用 value 比较
        };
        grid.appendChild(card);
    });
}
```

### 检查范围
- 不只是 U2L1，**所有16课的 reading 题库**都要检查是否有同样的问题
- 搜索所有 `data/*.js` 中 reading 部分使用了 `duo_race`、`whack_mole`、`sentence_match` 的地方

---

## 已完成任务归档（1-31）

| # | 任务 | 完成时间 | 谁做的 |
|---|------|----------|--------|
| 1 | 欢迎页面动画 | 03-14 | Gemini |
| 2 | 学生列表分页 | 03-14 | Gemini+Claude |
| 3 | 课程选择移到教师后台 | 03-14 | Gemini |
| 4 | 题型提示说明 | 03-14 | Gemini |
| 5 | 题库扩展16课 | 03-15 | Gemini |
| 6 | 动物卡通插图 | 03-15 | Gemini |
| 7 | 教师后台数据看板 | 03-15 | Gemini |
| 8 | 合作题型开发 | 03-15 | Gemini |
| 9 | 竞品分析 | 03-15 | Gemini |
| 10 | 竞品截图收集 | 03-15 | Gemini |
| 11 | 竞品深度分析 | 03-15 | Gemini |
| 12 | 题库质量检查 | 03-15 | Gemini |
| 13 | 题型理论对齐 | 03-15 | Gemini |
| 14 | 气球射击题目 | 03-15 | Gemini |
| 15 | 情境题 | 03-15 | Gemini |
| 16 | 微项目数据 | 03-15 | Gemini |
| 17 | UI全面测试修复 | 03-16 | Claude |
| 18 | 实战题型渲染器 | 03-15 | Gemini |
| 19 | 真机UI测试 | 03-16 | Gemini |
| 20 | 成就系统 | 03-16 | Claude |
| 21 | 每日任务 | 03-16 | Claude |
| 22 | 测试成就+任务 | 03-16 | Gemini |
| 23 | 扩展题库scenario | 03-16 | Claude |
| 24 | 进度地图 | 03-16 | Claude |
| 25 | 宠物系统 | 03-16 | Claude |
| 26 | 测试地图+宠物 | 03-16 | Gemini |
| 27 | 音频资源检查 | - | 暂缓（用Web Speech API） |
| 28 | 多邻国风格优化 | - | 暂缓 |

### Claude 03-16 修复记录

| 提交 | 内容 |
|------|------|
| `bc4a08c` | 修复3处JS语法错误 + PWA图标 |
| `9d487d3` | JSON.parse添加try-catch + 输入验证 |
| `2c9aa31` | 前测"再来一遍"按钮 + 清除反馈遮挡 |
| `f2ac66d` | 移除绿色答案条 + 教师端课程恢复 |
| `05f2cd5` | 完成界面"再来一次"按钮 |
