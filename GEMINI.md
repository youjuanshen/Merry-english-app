# GEMINI.md - Gemini 唯一任务文档

> **重要：这是你唯一需要看的任务文档！**
>
> 其他文档都是历史存档，不要看。
>
> 审查人：Claude | 最终确认：Merry

---

## 工作流程（必读）

1. **每次开始工作前**：先读这个文件，查看当前任务
2. **完成任务后**：更新下方任务状态表，**然后立即开始下一个任务**
3. **主动领取新任务**：完成后检查是否有新的待办任务
4. **不要动无关代码**：只修改任务要求的部分
5. **每个任务完成后 Push 到 GitHub**

---

## 任务状态总表

### 已完成任务（历史记录）

| # | 任务名称 | 完成时间 | 备注 |
|---|----------|----------|------|
| 1 | 欢迎页面动画 | 2026-03-14 | 3秒倒计时 + 自动跳转 |
| 2 | 学生列表分页 | 2026-03-14 | Claude修复了翻页bug |
| 3 | 课程选择移到教师后台 | 2026-03-14 | 学生端不再显示课程选择 |
| 4 | 题型提示说明 | 2026-03-14 | 每种题型添加操作说明 |
| 5 | 题库扩展（16课） | 2026-03-15 | 4单元×4课，每课156题 |
| 6 | 动物卡通插图 | 2026-03-15 | 40+张PNG图片 |
| 7 | 教师后台数据看板 | 2026-03-15 | 成绩统计+数据导出 |
| 8 | 合作题型开发 | 2026-03-15 | 你说我猜、接力拼写等 |

### 当前任务

| # | 任务名称 | 状态 | 优先级 |
|---|----------|------|--------|
| 14 | 扩展气球射击题目 | ⏳ 待开始 | 高 |
| 15 | 添加情境题（问题导向） | ⏳ 待开始 | 高 |
| 16 | 设计微项目题型数据 | ⏳ 待开始 | 中 |

### 已完成任务（续）

| # | 任务名称 | 完成时间 | 备注 |
|---|----------|----------|------|
| 9 | 竞品分析（文字版） | 2026-03-15 | 基于知识库的分析 |
| 10 | 竞品截图收集 | 2026-03-15 | 从网上搜索截图 |
| 11 | 竞品深度分析+应用建议 | 2026-03-15 | 五个App深度对比 |
| 12 | 题库和图片质量检查 | 2026-03-15 | 全部通过 |
| 13 | 题型理论对齐检查 | 2026-03-15 | 发现3Ps缺失问题 |

---

# 🔥 任务14：扩展气球射击题目

## 任务背景

目前 `balloon_pop` 题型只在 `lesson1.js` 里有，其他单元没有。需要给所有16课都添加气球射击题目。

## 你需要做的

### 第1步：查看现有balloon_pop数据格式

在 `/代码/data/lesson1.js` 里找到 `balloon_pop` 题目，了解数据格式：

```javascript
{
    "type": "balloon_pop",
    "text": "Find the tiger",
    "chinese": "找到 老虎",
    "options": [
        "<img src=\"assets/images/cat.png\" width=\"80\">",
        "<img src=\"assets/images/tiger.png\" width=\"80\">",
        ...
    ],
    "correct": 1,  // 正确答案的索引
    "difficulty": "easy"
}
```

### 第2步：给每课添加balloon_pop题目

在 `unit1_lesson2.js` 到 `unit4_lesson4.js` 的 **practice** 数组中，各添加 **3-5道** balloon_pop 题目。

要求：
- 使用该课的词汇（参考已有题目的单词）
- 难度分布：easy 2道，medium 2道，hard 1道
- 图片使用 `/assets/images/` 里已有的

---

# 🔥 任务15：添加情境题（问题导向）

## 任务背景

根据任务13的理论对齐报告，App缺少**问题导向(Problem-Based Learning)**的题型。需要添加有真实生活情境的题目。

## 数据格式

创建新的题型 `scenario`：

```javascript
{
    "type": "scenario",
    "scenario": "Tom is at a pet shop. He wants a quiet pet.",
    "scenarioImage": "🏪🐕🐈🐟",  // 或使用图片
    "chinese": "汤姆在宠物店，他想要一只安静的宠物",
    "question": "What should Tom buy?",
    "options": ["A dog", "A cat", "A fish"],
    "correct": 2,
    "feedback": "A fish is quiet!",
    "difficulty": "medium"
}
```

## 你需要做的

### 第1步：设计10个生活情境

围绕三年级学生熟悉的场景：
1. 学校（课堂、操场、食堂）
2. 家庭（客厅、卧室、厨房）
3. 商店（超市、文具店、宠物店）
4. 公园/动物园

### 第2步：每个情境写3道题

共30道情境题，分布在不同单元。

### 第3步：添加到题库

在 `unit2_lesson1.js` 到 `unit3_lesson4.js` 的 practice 数组中添加。

---

# 🔥 任务16：设计微项目题型数据

## 任务背景

项目导向(Project-Based Learning)目前为0%。设计"微项目"让学生有产出感。

## 微项目设计

### 项目1：自我介绍卡片

```javascript
{
    "type": "project_card",
    "title": "Make Your ID Card",
    "chinese": "制作你的名片",
    "steps": [
        { "label": "Choose avatar", "options": ["🧒", "👧", "🐱", "🐶"] },
        { "label": "Your name", "input": "text", "placeholder": "My name is..." },
        { "label": "Your age", "options": ["7", "8", "9", "10"] },
        { "label": "I like", "options": ["dogs", "cats", "music", "sports"] }
    ],
    "template": "Hi! I'm {name}. I'm {age} years old. I like {like}."
}
```

### 项目2：设计动物园

```javascript
{
    "type": "project_zoo",
    "title": "Design Your Zoo",
    "chinese": "设计你的动物园",
    "budget": 10,
    "animals": [
        { "name": "lion", "price": 3, "image": "lion.png" },
        { "name": "monkey", "price": 2, "image": "monkey.png" },
        { "name": "bird", "price": 1, "image": "bird.png" }
    ]
}
```

## 你需要做的

1. 设计3个微项目的数据结构
2. 写入 `/代码/data/projects.js` 新文件
3. 更新任务状态表

---

---

## 测试检查清单（每次修改代码后必测）

- [ ] 选择学生 → 能选中两个人
- [ ] 开始学习 → 能进入答题
- [ ] 答题 → 答对显示绿色+正确答案
- [ ] 下一题按钮 → 答对后可点击
- [ ] 按钮不和图片重叠
- [ ] 页面不会卡住

---

## 代码仓库

路径：`/Users/shenyoujuan/Merry_Data/PhD research/09_App开发/代码/`

主要文件：
- `index.html` - 主页面
- `app.js` - 核心逻辑
- `style.css` - 样式
- `modules/` - 各题型模块
- `data/` - 题库数据
- `assets/images/` - 图片资源

---

*最后更新：2026-03-15 by Claude*
