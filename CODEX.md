# CODEX.md - 当前任务文档

> **开始工作前必读：`../项目规则.md`**（文件放置规则、目录结构、代码规范、禁止事项）
>
> ⚠️ Gemini同时在修另外3个任务（见GEMINI.md），**不要改Gemini负责的文件**。
> - Codex负责：`style.css`、`teacher/teacher.css`、`firebase-sync.js`、`app.js`中Sync相关代码
> - Gemini负责：`data/*.js` 题库文件、`teacher/teacher.js`

---

## 工作流程

1. 看当前任务 → 2. 做 → 3. commit + push → 4. 做下一个

---

## 当前任务（Codex负责）

| # | 任务 | 优先级 | 状态 |
|---|------|--------|------|
| C1 | 🔥 CSS flex gap 兼容性修复（15处） | P0 | ✅ 已完成 |
| C2 | 🔥 CSS scroll-snap + 其他webkit前缀修复 | P1 | ✅ 已完成 |
| C3 | 🔥 Firebase Sync一致性修复（3处） | P1 | ✅ 已完成 |

---

## 任务C1：CSS flex gap 兼容性修复（P0）

### 问题
iOS 12 Safari **不支持** flexbox 中的 `gap` 属性（仅从 iOS 14.5 起才支持）。当前代码中约15处在 flex 容器中使用了 `gap`，会导致 iPhone 7 上元素间距消失、布局错乱。

### 修复方法
将 flex 容器中的 `gap` 改为子元素的 `margin`。

**示例**：
```css
/* 修复前 */
.container {
    display: flex;
    gap: 10px;
}

/* 修复后 */
.container {
    display: flex;
}
.container > * {
    margin-right: 10px;
}
.container > *:last-child {
    margin-right: 0;
}
```

如果是 `flex-wrap` 容器（换行布局），需要同时加 `margin-bottom`：
```css
.container > * {
    margin-right: 10px;
    margin-bottom: 10px;
}
```

### 需要修复的位置

#### style.css（学生端）
| 行号（约） | 选择器 | gap值 | flex方向 |
|-----------|--------|------|---------|
| 187 | 某flex容器 | 查看代码确认 | 查看代码确认 |
| 338 | 某flex容器 | 查看代码确认 | 查看代码确认 |
| 398 | 某flex容器 | 查看代码确认 | 查看代码确认 |
| 488 | 某flex容器 | 查看代码确认 | 查看代码确认 |
| 526 | 某flex容器 | 查看代码确认 | 查看代码确认 |
| 902 | 某flex容器 | 查看代码确认 | 查看代码确认 |
| 1200 | 某flex容器 | 查看代码确认 | 查看代码确认 |
| 1284 | 某flex容器 | 查看代码确认 | 查看代码确认 |
| 1301 | 某flex容器 | 查看代码确认 | 查看代码确认 |
| 1331 | 某flex容器 | 查看代码确认 | 查看代码确认 |

#### teacher/teacher.css（教师端）
| 行号（约） | 选择器 | gap值 |
|-----------|--------|------|
| 78 | 某flex容器 | 查看代码确认 |
| 93 | 某flex容器 | 查看代码确认 |
| 347 | 某flex容器 | 查看代码确认 |

### 注意
- **不要改 grid 容器中的 gap**（grid gap iOS 12支持）
- 先确认该容器是 `display: flex` 还是 `display: grid`，只改 flex 的
- 修完后用 Chrome DevTools 的 iPhone 7 模拟（414x736）检查布局

---

## 任务C2：CSS scroll-snap + 其他webkit前缀修复（P1）

### 问题A：scroll-snap 缺少 webkit 前缀
iOS 12 Safari 只支持旧版 scroll-snap，需要 `-webkit-` 前缀。

### 修复方法
在每个 `scroll-snap-type` 和 `scroll-snap-align` 前面加 webkit 版本：

```css
/* 修复前 */
.container {
    scroll-snap-type: x mandatory;
}
.item {
    scroll-snap-align: start;
}

/* 修复后 */
.container {
    -webkit-scroll-snap-type: mandatory;  /* iOS 12 旧语法 */
    scroll-snap-type: x mandatory;
}
.item {
    -webkit-scroll-snap-align: start;
    scroll-snap-align: start;
}
```

### 需要修复的位置

| 文件 | 行号（约） | 属性 |
|------|-----------|------|
| style.css | 157 | `scroll-snap-type: x mandatory` |
| style.css | 172 | `scroll-snap-align: start` |
| style.css | 205 | `scroll-snap-align: start` |
| teacher/teacher.css | 319 | `scroll-snap-type: x mandatory` |
| teacher/teacher.css | 332 | `scroll-snap-align: start` |

### 问题B：teacher.css 缺少其他 webkit 前缀

| 文件 | 行号（约） | 需要添加 |
|------|-----------|---------|
| teacher/teacher.css | 290, 373 | `-webkit-user-select: none` 加在 `user-select: none` 前面 |
| teacher/teacher.css | 38 | `position: -webkit-sticky` 加在 `position: sticky` 前面 |

### 问题C：Grid gap 加回退

Grid 中的 `gap` 在 iOS 12 支持，但建议同时写 `grid-gap` 作为保险：

```css
/* 修复后 */
.grid-container {
    grid-gap: 10px;  /* 旧语法回退 */
    gap: 10px;
}
```

搜索两个CSS文件中所有 `display: grid` 容器的 `gap`，在前面加一行 `grid-gap` 同值。

---

## 任务C3：Firebase Sync一致性修复（P1）

### 问题
`firebase-sync.js` 封装了 `Sync` 对象来统一处理 localStorage / Firebase 双路径。但有3处代码绕过 Sync 直接读 localStorage，导致 Firebase 模式下读到空数据。

### 需要修复的3处

#### 修复1：app.js 约第733行
```javascript
// 修复前
var cmd = localStorage.getItem('teacherCommand');

// 修复后
var cmd = Sync.getTeacherCommandOnce ? Sync.getTeacherCommandOnce() : localStorage.getItem('teacherCommand');
```
> 注意：需要先检查 `firebase-sync.js` 中 Sync 对象是否有对应的同步读取方法。如果没有，需要在 Sync 中添加一个 `getOnce` 方法。

#### 修复2：app.js 约第828行
```javascript
// 修复前
var lesson = localStorage.getItem('currentLesson');

// 修复后（同理）
var lesson = Sync.getCurrentLessonOnce ? Sync.getCurrentLessonOnce() : localStorage.getItem('currentLesson');
```

#### 修复3：teacher/teacher.js 约第611行
```javascript
// 修复前（在 downloadCSV 函数中）
var data = localStorage.getItem('studentProgress_' + i);

// 修复后
var data = Sync.getStudentProgressOnce ? Sync.getStudentProgressOnce(i) : localStorage.getItem('studentProgress_' + i);
```

### 实现方案

**方案A（推荐）**：在 `firebase-sync.js` 的 Sync 对象中添加同步读取方法，内部维护一个本地缓存，Firebase `on` 回调更新缓存，同步读时直接返回缓存值。

```javascript
// firebase-sync.js 中添加
var _cache = {};

// 在 Firebase on 回调中
firebase.database().ref('teacherCommand').on('value', function(snapshot) {
    _cache.teacherCommand = snapshot.val();
    // 原有回调逻辑...
});

// 新增同步读取方法
Sync.getTeacherCommandOnce = function() {
    if (useFirebase) {
        return _cache.teacherCommand || null;
    }
    return localStorage.getItem('teacherCommand');
};
```

**方案B（简单）**：在 Firebase 模式下，每次写入 Firebase 时同时写一份到 localStorage 作为缓存。这样现有的 `localStorage.getItem` 调用不用改。

选哪个方案你决定，但要保证 Firebase 模式和 localStorage 模式都能正常工作。

### 验证方法
1. Firebase 模式：教师端发指令 → 学生端能收到并执行
2. localStorage 模式（`useFirebase = false`）：功能和之前一样
3. `downloadCSV()` 在 Firebase 模式下能导出数据

---

## 代码规范（必读）

- 兼容 iOS 12+（**不用** `?.`、`??`、`Promise.allSettled` 等新语法）
- 所有 `JSON.parse` 必须有 try-catch
- 不要硬编码敏感信息
- commit 信息格式：`fix: 修复XX` / `feat: 添加XX`
- 完成后 push 到 GitHub

---

## 代码速查

```
代码/
├── index.html          # 学生端
├── app.js              # 核心逻辑（⚠️ 只改Sync相关代码）
├── style.css           # 学生端样式（Codex负责）
├── firebase-sync.js    # Firebase同步模块（Codex负责）
├── modules/            # 听力/阅读/写作/口语/音效
├── data/               # 16课题库（Gemini负责，不要改）
├── teacher/
│   ├── teacher.css     # 教师端样式（Codex负责）
│   ├── teacher.js      # 教师端逻辑（⚠️ 只改downloadCSV的Sync调用）
│   └── *.html          # 教师端页面
└── assets/images/      # 图片资源
```
