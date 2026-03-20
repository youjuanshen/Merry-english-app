# GEMINI.md - 当前任务文档

> **开始工作前必读：`../项目规则.md`**（文件放置规则、目录结构、代码规范、禁止事项）
>
> 历史任务(1-28)已全部完成，归档在底部。只看 **当前任务** 部分即可。

---

## 工作流程

1. 看当前任务 → 2. 做 → 3. commit + push → 4. 做下一个

---

## 当前任务（Gemini负责）

> ⚠️ Codex同时在修另外3个任务（见CODEX.md），**不要改Codex负责的文件**。
> - Codex负责：`style.css`、`teacher/teacher.css`、`firebase-sync.js`、`app.js`中Sync相关代码
> - Gemini负责：`data/*.js` 题库文件、`modules/*.js`、`teacher/teacher.js`

> ⚠️ **严重问题**：除 U1L1 听力外，其他课程的题库内容和UI渲染都有严重错误。必须按顺序执行以下四步。

| # | 任务 | 优先级 | 状态 |
|---|------|--------|------|
| 42 | 🔥🔥 题库内容逐课审查（含39/40/41） | P0 | ⬜ 待做 |
| 43 | 🔥 iOS 12 兼容性排查 | P0 | ⬜ 待做 |
| 44 | UI渲染逐课逐模块测试 | P1 | ⬜ 待做 |
| 45 | 输出最终报告 | P1 | ⬜ 待做 |
| 46 | 打地鼠题型优化 | P1 | ⬜ 待做 |
| 47 | 🔥 选择题统一4个选项 | P0 | ⬜ 待做 |

---

## 任务42：题库内容逐课审查（P0，最重要！）

> 合并了原任务39（correct类型）、40（语法错误）、41（缺失词汇），升级为全面审查。

### 背景
除 U1L1 听力外，其他课程题库内容严重错误。必须逐课逐题审查。

### 审查内容

#### A. 词汇是否匹配课本
参考文件：`../03_课本原材与题库/00_全册核心教材/03_三下课本内容提取_App对照.md`

逐课对照：
- 每道题的词汇是否出现在该课的课本内容中
- 是否有张冠李戴（把别课的词放到这课）
- 是否有编造的词（课本里根本没有的）
- 干扰项图片是否用了正确主题（如Unit 2衣服主题不能用动物图片）
- 缺失的核心词汇要补上（每个至少出现2道题）

⚠️ 已知问题：Unit 2-4 主题之前全部搞错了（任务36已修过），需要确认修复是否到位。

#### B. 语法是否正确
- 不可数名词（milk, bread, water, rice, soup）不能加 a/an
- 复数形式（eggs, noodles）要正确
- 句型要用课本真实句型，不要用 "I see a ___" 万能模板
- 各单元应该用的句型：

| 单元 | 应该用的句型 |
|------|------------|
| Unit 1（动物） | "This is a bear." / "That is a horse." / "It's big." |
| Unit 2（衣服） | "I wear a T-shirt." / "What size do you wear?" / "It's too big." |
| Unit 3（时间） | "It's eleven o'clock." / "What's the time?" / "It's time for lunch." |
| Unit 4（食物） | "I like eggs." / "What do you like for breakfast?" / "I'm hungry." |

#### C. correct 答案是否正确
- `listen_select` 的 correct 必须是**数字索引**（从0开始），指向正确选项
- `listen_tf` 的 correct 必须是**布尔值**
- 逐题验证：人工看题目+选项，确认标注的正确答案确实是对的
- **Unit 3 问题最严重，优先检查**

#### D. 每课输出审查表
```
### U1L1 审查结果
| 模块 | 题号 | 题型 | 问题 | 修复方案 |
|------|------|------|------|---------|
| listening | Q3 | listen_select | correct=true应为correct=0 | 已修复 |
```

发现问题立即修复，**每完成一课就 commit + push**。

---

## 任务43：iOS 12 兼容性排查（P0）

### 目的
排除 iPhone 7 / iOS 12 设备导致的渲染问题，确认是代码问题还是设备问题。

### 对比测试
用 U1L1 听力（已知正常）分别在两个环境下测试：
1. Chrome 桌面版（正常环境）
2. Puppeteer 模拟 iPhone 7（414x736，UA 设为 iOS 12 Safari）

对比：CSS差异、JS报错、图片和音频加载。

### 代码扫描
搜索所有 .js 文件，确认没有使用 iOS 12 不支持的语法：

| 不支持的语法 | 替代方案 |
|------------|---------|
| `?.`（可选链） | `&&` 判断 |
| `??`（空值合并） | `\|\|` |
| `globalThis` | `window` |
| `Array.flat()` | `[].concat(...arr)` |
| `Object.fromEntries()` | 循环赋值 |
| `matchAll()` | `exec` 循环 |
| CSS `gap`（flexbox） | `margin` 替代 |

### 输出
- "兼容性问题：有/无"
- 如果有：列出不兼容的地方 + 修复方案，修完 commit
- 如果无：确认问题与设备无关

---

## 任务44：UI渲染逐课逐模块测试（P1）

### 前提
任务42（题库审查）和任务43（兼容性排查）完成后才做。

### 测试方法
用 Puppeteer 对 16课 × 4模块 = 64 组合逐个测试：

1. 通过 localStorage 设置课程和模块
2. 启动 http-server，Puppeteer 打开 localhost:8080
3. 自动答题（前测+练习各 3 题）
4. 每题检查：

| 检查项 | 说明 |
|--------|------|
| 题目文字 | 不是空白、不是 [object Object] |
| 图片显示 | 路径存在、图片与题目对应 |
| 选项布局 | 不重叠、不溢出 |
| 特殊题型 | duo_race, whack_mole, balloon_pop, sentence_match, scenario 能正常渲染 |
| 反馈面板 | 答对/答错后正确弹出 |
| JS报错 | console 无 error |

5. 截图保存到 test-screenshots/

发现问题立即修复，修复后重测确认。

### 测试矩阵

| | 听力 | 阅读 | 写作 | 口语 |
|---|---|---|---|---|
| U1L1 | ⬜ | ⬜ | ⬜ | ⬜ |
| U1L2 | ⬜ | ⬜ | ⬜ | ⬜ |
| U1L3 | ⬜ | ⬜ | ⬜ | ⬜ |
| U1L4 | ⬜ | ⬜ | ⬜ | ⬜ |
| U2L1 | ⬜ | ⬜ | ⬜ | ⬜ |
| U2L2 | ⬜ | ⬜ | ⬜ | ⬜ |
| U2L3 | ⬜ | ⬜ | ⬜ | ⬜ |
| U2L4 | ⬜ | ⬜ | ⬜ | ⬜ |
| U3L1 | ⬜ | ⬜ | ⬜ | ⬜ |
| U3L2 | ⬜ | ⬜ | ⬜ | ⬜ |
| U3L3 | ⬜ | ⬜ | ⬜ | ⬜ |
| U3L4 | ⬜ | ⬜ | ⬜ | ⬜ |
| U4L1 | ⬜ | ⬜ | ⬜ | ⬜ |
| U4L2 | ⬜ | ⬜ | ⬜ | ⬜ |
| U4L3 | ⬜ | ⬜ | ⬜ | ⬜ |
| U4L4 | ⬜ | ⬜ | ⬜ | ⬜ |

---

## 任务45：输出最终报告（P1）

在 `docs/题库审查+测试报告.md` 中输出：
1. **题库审查**：16课审查结果（每课多少题有问题、改了什么）
2. **兼容性**：iOS 12 兼容性结论
3. **UI测试**：64 组合矩阵（✅/❌）
4. **已知问题**：仍存在的问题清单

---

## 任务47：选择题统一4个选项（P0）

### 问题
很多 `word_match`、`listen_select` 题只有2个选项，学生50%概率蒙对，没有区分度。

### 修复要求
1. 搜索所有 `data/*.js`，找出 options 数组少于4个的题目
2. 补充到**4个选项**，干扰项必须是**同单元同主题**的内容：

| 单元 | 干扰项来源 |
|------|----------|
| Unit 1（动物） | bear, cat, dog, bird, horse, rabbit, panda, tiger, lion, monkey 中选 |
| Unit 2（衣服） | shirt, T-shirt, jacket, skirt, dress, shorts, schoolbag 中选 |
| Unit 3（时间） | 不同时间的钟面图片 |
| Unit 4（食物） | egg, milk, bread, rice, noodles, soup, water 中选 |

3. 干扰项图片必须用 `assets/images/` 中已有的图片，不要引用不存在的图片
4. `listen_tf`（判断题）保持2个选项（对/错），不用改

### 验证
修完后统计：改了多少道题，确认所有选择题都是4个选项。

---

## 任务46：打地鼠题型优化（P1）

### 问题
Merry 测试反馈：
1. **反应太慢** — 点击地鼠后延迟明显
2. **太简单没悬念** — 图片直接全部露出来，同时提示文字告诉你找什么，完全没有挑战性
3. **不像打地鼠** — 更像是选择题，缺少"冒出来→消失"的节奏感

### 优化方案

#### A. 加快节奏
- 地鼠出现时间从 1000ms 缩短到 **700ms**
- 地鼠切换间隔从 1200ms 缩短到 **900ms**
- 点击后立即响应，不要有延迟

#### B. 增加悬念
- 地鼠默认**隐藏**（显示❓），冒出来时才显示内容
- 同时只露出 **1-2 个**地鼠，不要全部同时显示
- 每次随机位置冒出，增加不确定性

#### C. 提示优化
- 提示文字用中文："🔨 找到 [目标词/图] 打它！"
- 目标词用大号加粗显示在顶部，和地鼠区分开

### 修改文件
- `modules/listening.js` — whack_mole 部分
- `modules/reading.js` — whack_mole 部分

### 注意
- 兼容 iOS 12（不用新语法）
- 动画用 CSS transition，不要用 JS 计算位置

---

## 已完成任务归档（29-38）

| # | 任务 | 完成时间 | 谁做的 |
|---|------|----------|--------|
| 29 | 修复图片空白 + 底部异常框 | 03-16 | Gemini |
| 30 | 教师端教学目标不更新 | 03-16 | Gemini |
| 31 | 教师端作业检查功能 | 03-16 | Gemini |
| 32 | 教学目标按听说读写模块变化 | 03-16 | Gemini |
| 33 | 提交按钮文字修改 | 03-16 | Gemini |
| 34 | 阅读模块题型渲染bug | 03-16 | Gemini |
| 35 | 全量64组合测试 | 03-16 | Gemini |
| 36 | 真实语料引擎 | 03-17 | Gemini |
| 37 | Firebase跨设备通信 | 03-17 | Gemini |
| 38 | 音效系统 | 03-17 | Gemini |

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

## 任务35：全量逐课逐模块测试+修复

### 要求
用 Puppeteer 对**每一课、每一个模块**进行完整测试。发现问题立即修复，修复后重新测试确认。

### 测试矩阵（64个组合）

| | 听力 | 阅读 | 写作 | 口语 |
|---|---|---|---|---|
| U1L1 | ⬜ | ⬜ | ⬜ | ⬜ |
| U1L2 | ⬜ | ⬜ | ⬜ | ⬜ |
| U1L3 | ⬜ | ⬜ | ⬜ | ⬜ |
| U1L4 | ⬜ | ⬜ | ⬜ | ⬜ |
| U2L1 | ⬜ | ⬜ | ⬜ | ⬜ |
| U2L2 | ⬜ | ⬜ | ⬜ | ⬜ |
| U2L3 | ⬜ | ⬜ | ⬜ | ⬜ |
| U2L4 | ⬜ | ⬜ | ⬜ | ⬜ |
| U3L1 | ⬜ | ⬜ | ⬜ | ⬜ |
| U3L2 | ⬜ | ⬜ | ⬜ | ⬜ |
| U3L3 | ⬜ | ⬜ | ⬜ | ⬜ |
| U3L4 | ⬜ | ⬜ | ⬜ | ⬜ |
| U4L1 | ⬜ | ⬜ | ⬜ | ⬜ |
| U4L2 | ⬜ | ⬜ | ⬜ | ⬜ |
| U4L3 | ⬜ | ⬜ | ⬜ | ⬜ |
| U4L4 | ⬜ | ⬜ | ⬜ | ⬜ |

⬜ = 待测 → ✅ 通过 / ❌ 有问题（修复后改✅）

### 每个组合的测试步骤

1. **设置课程**：通过教师端或localStorage设置当前课程和模块
2. **前测（pretest）**：
   - 逐题检查：题目是否正确渲染、选项是否可点击、图片是否显示
   - 答题后：反馈面板是否正确显示、星星是否更新
   - 所有题做完后：是否显示前测结果页
3. **练习（practice）**：
   - 同样逐题检查
   - 特别注意：duo_race、whack_mole、balloon_pop、scenario 等特殊题型
   - 所有题做完后：是否显示完成页、"再来一次"按钮是否可用
4. **记录结果**：在上面的矩阵中标记 ✅ 或 ❌

### 检查清单（每道题都要看）

- [ ] 题目文字正确渲染（不是空白、不是 [object Object]）
- [ ] 图片正确显示（不是空白、不是破图）
- [ ] 选项可以点击
- [ ] 答对：反馈面板显示、星星+1
- [ ] 答错：提示显示、可以重试
- [ ] 没有JS报错（console无error）
- [ ] 没有布局错乱（元素不重叠）

### 发现问题时

1. 记录：哪课、哪个模块、哪种题型、什么问题
2. 立即修复代码
3. 重新测试确认修复
4. commit + push

### 输出

测试完成后创建 `docs/全量测试报告.md`，包含：
- 64个组合的通过/失败状态
- 发现并修复的问题清单
- 每个修复的commit hash

---

## 任务36：真实语料引擎（题库对齐课本）

### 背景
当前16课题库很多是占位数据，词汇和句型不完全贴合真实教案。需要根据Merry提供的课本内容重新生成真实题库。

### 流程
1. Merry提供每课的真实内容（词汇表、句型、对话）→ 放在 `03_课本原材与题库/`
2. 读取课本内容，按现有 `data/*.js` 的格式生成真实题库
3. 替换对应的 lesson 文件
4. 逐课测试验证

### 输出
- 更新后的 `data/lesson1.js` ~ `data/unit4_lesson4.js`
- 每课题目必须来自真实课本内容

### 课本素材已就绪
- **素材文件**：`../03_课本原材与题库/00_全册核心教材/03_三下课本内容提取_App对照.md`
- **词汇参考**：`../03_课本原材与题库/00_全册核心教材/02_全册词汇与句型大纲.md`
- **重大发现**：Unit 2-4 的主题全部错了！
  - Unit 2 课本是"衣服"，App写的是"数字/颜色"
  - Unit 3 课本是"时间"，App写的是"颜色"
  - Unit 4 课本是"食物"，App写的是"家庭"
- **Unit 1 基本匹配**，只需微调
- **Unit 2-4 需要全部重写**：词汇、句型、题目
- **需要新增约34张图片**（衣服、时钟、食物等），详见素材文件底部
- 保持现有数据格式不变（题型、字段名等）

---

## 任务37：跨设备师生通信（替换localStorage）

### 背景
**关键事实**：教师端在Merry的iPhone 12上，学生端在13台iPhone 7上。不同设备之间 localStorage 无法通信！当前教师端的"开始上课"命令根本发不到学生手机上。

### 推荐方案：Firebase Realtime Database
- 免费额度：1GB存储 + 10GB/月流量（完全够用）
- 改动最小：只需把 `localStorage.getItem/setItem` 替换为 Firebase 的 `ref.on/set`
- 无需搭服务器，纯前端即可
- 实时同步（毫秒级）

### 实现步骤
1. 创建 Firebase 项目（免费）
2. 在 `index.html` 和 `teacher/*.html` 中引入 Firebase SDK
3. 创建 `firebase-sync.js` 模块，封装读写操作：
```javascript
// 替换 localStorage 的读写
// 写入（教师端）
firebase.database().ref('teacherCommand').set({
    action: 'start',
    module: 'listening',
    phase: 'pretest',
    timestamp: Date.now()
});

// 监听（学生端）
firebase.database().ref('teacherCommand').on('value', (snapshot) => {
    const cmd = snapshot.val();
    if (cmd) handleTeacherCommand(cmd);
});
```
4. 需要替换的 localStorage key：
   - `teacherCommand` → Firebase `/teacherCommand`
   - `currentLesson` → Firebase `/currentLesson`
   - `studentProgress` → Firebase `/students/{studentId}/progress`
   - `homeworkIncomplete` → Firebase `/homework`
5. 学生本地数据（成就、宠物等）仍保留在 localStorage（不需要跨设备）

### 注意
- 必须兼容 iOS 12（Firebase JS SDK v8 支持）
- 网络断开时要有离线回退（先用localStorage缓存，恢复后同步）
- Firebase 安全规则暂用开放模式（教学场景，非公开产品）

### 测试方法
- 在两个不同浏览器标签页模拟教师端和学生端
- 教师端发命令 → 学生端秒级收到

---

## 任务38：音效系统

### 需求
给App添加音效，提升课堂体验感。

### 需要的音效

| 场景 | 音效 | 说明 |
|------|------|------|
| 欢迎页倒计时 | 3-2-1-GO! | 每秒一个"叮"，GO时一个"嘟嘟嘟" |
| 答对 | 成功音 | 短促的"叮咚" |
| 答错 | 失败音 | 温和的"嗡" |
| 连击(combo) | 连击音 | 越来越高的音调 |
| 成就解锁 | 庆祝音 | 胜利号角 |
| 关卡完成 | 完成音 | 欢呼 |
| 按钮点击 | 点击音 | 轻微的"哒" |

### 实现方式
- 使用 Web Audio API 生成简单音效（不需要音频文件）
- 创建 `modules/sounds.js`，封装所有音效函数
- 在对应的事件处理函数中调用

### 注意
- iOS 12 要求用户交互后才能播放音频（第一次点击时 `audioContext.resume()`）
- 音效要短（<1秒），不影响流畅度
- 提供静音开关

---

## 已完成任务归档（1-35）

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
| 36 | 真实语料引擎（题库对齐课本） | 03-17 | Gemini |
| 37 | 跨设备师生通信（Firebase） | 03-17 | Gemini |
| 38 | 音效系统（Web Audio API） | 03-17 | Gemini |

### Claude 03-16 修复记录

| 提交 | 内容 |
|------|------|
| `bc4a08c` | 修复3处JS语法错误 + PWA图标 |
| `9d487d3` | JSON.parse添加try-catch + 输入验证 |
| `2c9aa31` | 前测"再来一遍"按钮 + 清除反馈遮挡 |
| `f2ac66d` | 移除绿色答案条 + 教师端课程恢复 |
| `05f2cd5` | 完成界面"再来一次"按钮 |
