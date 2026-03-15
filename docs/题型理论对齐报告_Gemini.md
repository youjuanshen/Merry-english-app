# 题型理论对齐报告 (建构主义框架评估)

## 分析时间
2026-03-15

## 一、现有题型统计

根据对当前代码库 `/data/` 目录下的前测与练习题型（包含如 `listen_pick`, `listen_sort`, `read_match`, `read_tf`, `write_spell`, `speak_repeat` 以及合作题型 `coop_speak_guess`, `coop_relay_spell`, `coop_match_compete` 等）的分析，结合建构主义（Constructivism）三种核心教学方法的映射情况如下：

| 教学方法 | 现有对应题型 | 数量占比评估 | 对齐度评价 |
|----------|----------|------|------|
| **游戏导向 (Play-Based)** | `coop_match_compete` (配对竞赛)<br>`coop_relay_spell` (接力) | 约 15% | **勉强足够**。具有一定的可玩性，但形式较为单一。 |
| **问题导向 (Problem-Based)** | `coop_speak_guess` (你说我猜) | < 5% | **严重不足**。绝大多数是去背景化的机械操练，缺乏真实的生活语境或“解决问题”的驱动力。 |
| **项目导向 (Project-Based)** | 无 | 0% | **完全缺失**。学生在App中只是不断的“输入-选择”，没有最终产出的“作品”或“项目”。 |
| **传统行为主义操练** | `listen_pick`, `write_spell` 等普通单选题/填空 | > 80% | **过多**。不符合高质量的建构主义教学要求。 |

---

## 二、新题型设计建议

针对框架核心要求的缺失环节，强烈建议补充以下三类题型：

### 游戏导向 (Play-Based) 新题型：强化动作与感知
1. **单词气球射击 (Word Pop)**
   - **玩法**：屏幕下方发射弹弓或飞镖，天上飘过印有英文单词的各色气球。系统播放音频 "Find the DOG!"，两名玩家（分别控制左边和右边区域）看谁先精准射中印着 DOG 的气球。
   - **理论意义**：通过动作反馈和竞争机制隐蔽机械识记的枯燥感。
2. **打地鼠拼写 (Whack-a-Mole Spelling)**
   - **玩法**：九宫格地洞，地鼠头上顶着不同的字母随机冒出。屏幕提示需要拼写 "A _ P L E"。学生必须敲击头上顶着 "P" 的地鼠填补空缺。

### 问题导向 (Problem-Based) 新题型：引入情境与任务
1. **真实情境推理 (Scenario Detective)**
   - **设计**：去掉单纯的 "Listen & Pick"，改为播放一段环境音（如肚子咕咕叫），屏幕提供文字和语音："Tom is hungry. What should he say?" 选项为 "A. I want an apple. B. I like dogs." 
   - **理论意义**：学生需要通过解决“Tom饿了怎么办”的具体问题来调用英语知识，而不是机械翻译。
2. **失物招领 (Lost & Found)**
   - **设计**：屏幕上有一张杂乱的房间图片。系统提示："I lost my book. Where is it?" 玩家需要在图画中寻找隐藏的书本并点击它。

### 项目导向 (Project-Based) 新题型：产出与创造
由于移动端 App 的时长限制，我们采用**微项目（Micro-Projects）**的形式：
1. **制作电子名片 (ID Card Maker)**
   - **设计**：不再是填空题。给出一个空白的卡片模板，听取数段语音素材。学生自己决定拖拽哪个动物头像，键盘输入名字，然后点击 "Generate My Avatar"。最终卡片可以以图片形式呈现并保存在相册。
   - **理论意义**：学习结束的产出不再是一个冷冰冰的分数，而是一个具有个人色彩的可分享“数字资产”。
2. **设计动物园 (Zoo Designer)**
   - **设计**：一个空白草地沙盘。系统给予 10 块金币预算，各种动物（Lion, Tiger, Bear）标价不同。学生必须用英语阅读规则（"A lion needs 5 coins"），然后拖拽组建自己的动物园，如果最后计算总价正确，即可过关。

---

## 三、具体实现方案 (以问题导向的情境推理为例)

**代码思路设计：**
在原有的 `app.js` 逻辑中其实可以直接借用现有的 DOM 组件。
可以设计一个新的题型 `problem_scenario`：

```javascript
// 在 data/ 题库中：
{
    id: "unit1_prob_01",
    type: "problem_scenario",
    scenarioText: "Tom walks into a pet shop. He wants a small, quiet pet. What should he buy?",
    scenarioAudio: "prob_u1_01.mp3",
    options: [
        { text: "A dog", image: "dog.png", isCorrect: false },
        { text: "A fish", image: "fish.png", isCorrect: true },
        { text: "A tiger", image: "tiger.png", isCorrect: false }
    ],
    correctFeedback: "Good job! A fish is a small and quiet pet."
}

// 在 app.js 渲染逻辑中：
function renderProblemScenario(question) {
    const container = document.getElementById('question-container');
    container.innerHTML = `
        <div class="scenario-prompt">
           <img src="assets/images/characters/tom_thinking.png" class="scenario-avatar" />
           <div class="speech-bubble">${question.scenarioText}</div>
        </div>
        <div class="options-grid">
           ${question.options.map(opt => `
               <div class="option-card" onclick="checkAnswer(${opt.isCorrect})">
                   <img src="assets/images/${opt.image}" />
                   <span>${opt.text}</span>
               </div>
           `).join('')}
        </div>
    `;
    // 添加特定情境音效
}
```

通过修改不到 50 行代码，即可让原本枯燥的选择题瞬间转变具有“语境”的问题导向学习（PBL）。
