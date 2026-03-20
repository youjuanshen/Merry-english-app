const students = [
  '1. 张宇豪', '2. 张佳寒', '3. 张睿渊', '4. 张羽韬', '5. 张美茹',
  '6. 张嘉钦', '7. 卢梦婷', '8. 张悦萱', '9. 张语涵', '10. 张英豪',
  '11. 张志鹏', '12. 张智杰', '13. 张梓婷', '14. 张品琪', '15. 张诺依',
  '16. 张雨泽', '17. 张依彤', '18. 张艺楠', '19. 张思彤', '20. 张子豪',
  '21. 张梓亦', '22. 张皓鑫', '23. 张雨欣', '24. 张如欣', '25. 张柏涵',
  '26. 张梓纯', '27. 张泽鑫'
];

let selectedStudents = [];
let players = [];
let currentPlayerIndex = 0;
let currentQuestionIndex = 0;
let isAnimating = false;

// Welcome Screen Logic - 3,2,1倒计时
document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const loginScreen = document.getElementById('login-screen');
    const countdownEl = document.getElementById('countdown');

    if (welcomeScreen && loginScreen && countdownEl) {
        let count = 3;
        const countdownInterval = setInterval(() => {
            count--;
            if (count > 0) {
                countdownEl.textContent = count;
            } else {
                clearInterval(countdownInterval);
                countdownEl.textContent = 'GO!';
                setTimeout(() => {
                    welcomeScreen.style.opacity = '0';
                    setTimeout(() => {
                        welcomeScreen.classList.remove('active');
                        loginScreen.classList.add('active');
                    }, 500);
                }, 300);
            }
        }, 1000);
    }

    // Load current lesson from Cloud/LocalStorage via Sync
    Sync.getCurrentLessonOnce().then(lesson => {
        if (lesson && lesson.displayName) {
            const courseInfoDisplay = document.getElementById('course-info-display');
            const displayLessonTitle = document.getElementById('display-lesson-title');
            const displayModuleTitle = document.getElementById('display-module-title');
            
            if (courseInfoDisplay && displayLessonTitle && displayModuleTitle) {
                displayLessonTitle.textContent = lesson.displayName.split('-')[0].trim();
                displayModuleTitle.textContent = lesson.displayName.split('-')[1] ? lesson.displayName.split('-')[1].trim() : '听力'; 
                courseInfoDisplay.style.display = 'block';
            }
        }
    });
});

// 计时器相关
let questionTimer = null;
let timeLeft = 0;
let currentTimeLimit = 30; // 默认每题30秒
const DEFAULT_TIME_LIMIT = 30;

// ========== 自适应难度系统 ==========
// 前测统计（用于计算学生水平）
let pretestStats = {
    player1: { correct: 0, total: 0, totalTime: 0, wrongWords: [] },
    player2: { correct: 0, total: 0, totalTime: 0, wrongWords: [] }
};
let questionStartTime = 0; // 每题开始时间

// 学生水平等级：A=基础好, B=基础中等, C=基础薄弱
let studentLevel = 'B'; // 默认中等

// 动态难度调整
let consecutiveCorrect = 0; // 连续答对次数
let consecutiveWrong = 0;   // 连续答错次数
let currentDifficulty = 'medium'; // easy/medium/hard

// 根据 Bloom Mastery Learning 理论设置阈值
const MASTERY_THRESHOLD = 0.8;  // 80%正确率为掌握
const STRUGGLE_THRESHOLD = 0.6; // 60%以下为薄弱
const FAST_TIME_RATIO = 0.5;    // 标准时间的50%以内算快
const SLOW_TIME_RATIO = 1.5;    // 标准时间的150%以上算慢

// Student <-> Teacher Sync
let lastTeacherCommandTime = 0;

Sync.listenTeacherCommand((cmd) => {
    if (cmd && cmd.timestamp > lastTeacherCommandTime) {
        lastTeacherCommandTime = cmd.timestamp;
        handleTeacherCommand(cmd);
    }
});

// 有效的模块和阶段
const VALID_MODULES = ['listening', 'reading', 'writing', 'speaking'];
const VALID_PHASES = ['pretest', 'practice'];

function handleTeacherCommand(cmd) {
    // 输入验证
    if (!cmd || typeof cmd !== 'object') return;

    if (cmd.action === 'start') {
        // 验证模块和阶段
        if (!VALID_MODULES.includes(cmd.module)) {
            console.error('Invalid module:', cmd.module);
            return;
        }
        if (!VALID_PHASES.includes(cmd.phase)) {
            console.error('Invalid phase:', cmd.phase);
            return;
        }

        // 始终保存教师设置的模块和阶段（无论学生端处于什么状态）
        currentModule = cmd.module;
        currentPhase = cmd.phase;
        currentTimeLimit = Math.max(0, Math.min(300, cmd.timeLimit || 0));

        console.log(`教师命令: 模块=${currentModule}, 阶段=${currentPhase}`);

        // 更新UI显示当前模块
        const displayModuleTitle = document.getElementById('display-module-title');
        if (displayModuleTitle) {
            const moduleNames = { listening: '听力', reading: '阅读', writing: '写作', speaking: '口语' };
            displayModuleTitle.textContent = moduleNames[currentModule] || '听力';
        }

        const modScreen = document.getElementById('module-screen');
        const gameScreen = document.getElementById('game-screen');

        // 如果已经在模块选择或游戏界面，直接开始
        if (modScreen.classList.contains('active') || gameScreen.classList.contains('active')) {
            document.getElementById('login-screen').classList.remove('active');
            modScreen.classList.remove('active');
            startGame();
        }
        // 如果在登录界面，教师命令已保存，学生选择完成后会使用这些设置
    } else if (cmd.action === 'pause') {
        alert('👩‍🏫 老师已暂停活动，请注意听讲！');
    }
}

function syncStudentProgress(isComplete = false) {
    if (!players || players.length === 0) return;
    
    const p1 = players[0];
    const p2 = players[1];
    
    // Extract ID (e.g. "1. 张宇豪" -> 1)
    const id1Match = p1.name.match(/^(\d+)/);
    const id1 = id1Match ? parseInt(id1Match[1]) : 0;
    const name1 = p1.name.replace(/^\d+\.\s*/, '');
    
    let id2 = null, name2 = null;
    if (p2) {
        const id2Match = p2.name.match(/^(\d+)/);
        id2 = id2Match ? parseInt(id2Match[1]) : 0;
        name2 = p2.name.replace(/^\d+\.\s*/, '');
    }
    
    const progressData = {
        studentId: id1,
        studentName: name1,
        partnerId: id2,
        partnerName: name2,
        module: currentModule,
        phase: currentPhase,
        currentQuestion: Math.min(currentQuestionIndex + 1, moduleQuestions.length),
        totalQuestions: moduleQuestions.length,
        stars: p1.stars + (p2 ? p2.stars : 0),
        completed: isComplete,
        timestamp: Date.now(),
        // Add detailed stats for Teacher Dashboard
        correct: pretestStats.player1.correct + (id2 ? pretestStats.player2.correct : 0) + p1.correct + (p2 ? p2.correct : 0),
        totalAnswered: pretestStats.player1.total + (id2 ? pretestStats.player2.total : 0) + p1.total + (p2 ? p2.total : 0),
        wrongWords: [...new Set([...pretestStats.player1.wrongWords, ...(id2 ? pretestStats.player2.wrongWords : [])])]
    };
    
    if (id1) Sync.setDashboardData(`studentProgress_${id1}`, progressData);
    if (id2) {
        const progressData2 = { 
            ...progressData, 
            studentId: id2, 
            studentName: name2, 
            partnerId: id1, 
            partnerName: name1 
        };
        Sync.setDashboardData(`studentProgress_${id2}`, progressData2);
    }
}

// Module Control
let currentModule = 'listening';
let currentPhase = 'pretest'; // pretest -> practice
let currentLessonData = lesson1;
let moduleQuestions = [];

// Professional hints - Duolingo style (不直接给答案，引导思考)
// 分层提示：Level 1 = 轻提示, Level 2 = 更多提示, Level 3 = 查书提示

// 提示设计原则：
// - 操作指示用中文（学生看得懂）
// - 知识点用英文（测试是否掌握）
const hintData = {
    // ===== 动物单词 Animals =====
    'bear': {
        level1: 'b___',
        level2: 'bear',
        level3: '请查书第2页'
    },
    'horse': {
        level1: 'h____',
        level2: 'horse',
        level3: '请查书第2页'
    },
    'bird': {
        level1: 'b___',
        level2: 'bird',
        level3: '请查书第2页'
    },
    'panda': {
        level1: 'p____',
        level2: 'panda',
        level3: '请查书第3页'
    },
    'animal': {
        level1: 'a_____',
        level2: 'animal',
        level3: '请查书第2页'
    },

    // ===== 形容词 Adjectives =====
    'big': {
        level1: 'b__',
        level2: 'big',
        level3: '请查书第5页'
    },
    'cute': {
        level1: 'c___',
        level2: 'cute',
        level3: '请查书第5页'
    },
    'fast': {
        level1: 'f___',
        level2: 'fast',
        level3: '请查书第5页'
    },

    // ===== This/That 句型 =====
    'This is a bear.': {
        level1: 'This / That ?',
        level2: 'This is a ___.',
        level3: '近的用This，远的用That'
    },
    'That is a horse.': {
        level1: 'This / That ?',
        level2: 'That is a ___.',
        level3: '近的用This，远的用That'
    },
    'This is a bird.': {
        level1: 'This / That ?',
        level2: 'This is a ___.',
        level3: '近的用This，远的用That'
    },
    'That is a panda.': {
        level1: 'This / That ?',
        level2: 'That is a ___.',
        level3: '近的用This，远的用That'
    },

    // ===== It's 句型 =====
    "It's big.": {
        level1: "It's ___.",
        level2: 'big / small ?',
        level3: '请查书第5页'
    },
    "It's cute.": {
        level1: "It's ___.",
        level2: 'cute',
        level3: '请查书第5页'
    },
    'It can run fast.': {
        level1: 'It can ___ fast.',
        level2: 'run',
        level3: '请查书第5页'
    },

    // ===== 组合句子 =====
    "This is a bear. It's big.": {
        level1: 'bear + big',
        level2: 'This is a bear.',
        level3: '两句话：这是熊 + 它很大'
    },
    "That is a panda. It's cute.": {
        level1: 'panda + cute',
        level2: 'That is a panda.',
        level3: '两句话：那是熊猫 + 它很可爱'
    },
    'This is a horse. It can run fast.': {
        level1: 'horse + fast',
        level2: 'This is a horse.',
        level3: '两句话：这是马 + 它跑得快'
    },

    // ===== 听力排序 =====
    'bear, bird': {
        level1: '先听到哪个？',
        level2: 'bear → bird',
        level3: '请两人一起商量'
    },
    'horse, panda': {
        level1: '先听到哪个？',
        level2: 'horse → panda',
        level3: '请两人一起商量'
    },
    'bird, bear, panda': {
        level1: '顺序：1, 2, 3',
        level2: 'bird → bear → panda',
        level3: '请两人一起商量'
    },
    'panda, horse, bird': {
        level1: '顺序：1, 2, 3',
        level2: 'panda → horse → bird',
        level3: '请两人一起商量'
    }
};

// Track wrong attempts per question
let wrongAttempts = 0;

function getHint(word) {
    const hints = hintData[word];
    if (!hints) return '';

    // 根据错误次数给不同级别的提示
    if (wrongAttempts === 0) {
        return hints.level1;
    } else if (wrongAttempts === 1) {
        return hints.level2;
    } else {
        return hints.level3;
    }
}

function resetHintLevel() {
    wrongAttempts = 0;
}

function increaseHintLevel() {
    wrongAttempts = Math.min(wrongAttempts + 1, 2);
}

// Keep for backward compatibility
function getEnglishHint(english) {
    return getHint(english);
}

function getChineseHint(english) {
    // 不再使用中文提示
    return '';
}

// Web Audio API for sound effects
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playTone(freq, type, duration, vol = 0.1) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

function playSuccessSound() {
    playTone(523.25, 'sine', 0.1); // C5
    setTimeout(() => playTone(659.25, 'sine', 0.2), 100); // E5
    setTimeout(() => playTone(783.99, 'sine', 0.3), 200); // G5
}

function playWrongSound() {
    playTone(300, 'sawtooth', 0.2);
    playTone(250, 'sawtooth', 0.3);
}

// Voice encouragement - English like Duolingo
const successPhrases = ['Great!', 'Awesome!', 'Good job!', 'Perfect!', 'Well done!', 'Excellent!'];
const tryAgainPhrases = ['Try again!', 'Almost!', 'Keep going!', 'You can do it!'];

function speakEncouragement(isCorrect) {
    if ('speechSynthesis' in window) {
        const phrases = isCorrect ? successPhrases : tryAgainPhrases;
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        const utterance = new SpeechSynthesisUtterance(phrase);
        utterance.lang = 'en-US';
        utterance.rate = 1.0;
        window.speechSynthesis.speak(utterance);
    }
}

// Show floating feedback text (中文显示，配合英文语音)
// 语音说英文，屏幕显示中文翻译，让学生知道英文意思
// 多邻国风格鼓励语（更丰富、更有趣）
const feedbackMap = {
    success: [
        { en: 'Great!', cn: '太棒了！' },
        { en: 'Awesome!', cn: '真厉害！' },
        { en: 'Good job!', cn: '好极了！' },
        { en: 'Perfect!', cn: '完美！' },
        { en: 'Well done!', cn: '做得好！' },
        { en: 'Excellent!', cn: '太优秀了！' },
        { en: 'Amazing!', cn: '太厉害了！' },
        { en: 'Brilliant!', cn: '聪明！' },
        { en: 'Fantastic!', cn: '非常好！' },
        { en: 'Super!', cn: '超级棒！' },
        { en: 'Wonderful!', cn: '太厉害了！' },
        { en: 'Incredible!', cn: '难以置信！' }
    ],
    encourage: [
        { en: 'Try again!', cn: '再试一次！' },
        { en: 'Almost!', cn: '差一点！' },
        { en: 'Keep going!', cn: '继续加油！' },
        { en: 'You can do it!', cn: '你可以的！' },
        { en: 'Don\'t give up!', cn: '别放弃！' },
        { en: 'So close!', cn: '很接近了！' }
    ],
    // 连击专用鼓励语
    combo: [
        { en: 'On fire!', cn: '火力全开！' },
        { en: 'Unstoppable!', cn: '势不可挡！' },
        { en: 'Keep it up!', cn: '保持下去！' },
        { en: 'You\'re on a roll!', cn: '状态爆棚！' }
    ]
};

function showFeedbackText(isCorrect) {
    let list, item;

    // 连击时使用特殊鼓励语
    if (isCorrect && consecutiveCorrect >= 2) {
        // 混合使用普通成功语和连击语
        if (Math.random() > 0.5) {
            list = feedbackMap.combo;
        } else {
            list = feedbackMap.success;
        }
    } else {
        list = isCorrect ? feedbackMap.success : feedbackMap.encourage;
    }

    item = list[Math.floor(Math.random() * list.length)];

    const feedback = document.createElement('div');
    feedback.className = 'floating-feedback ' + (isCorrect ? 'success' : 'encourage');
    feedback.textContent = item.cn;
    document.body.appendChild(feedback);

    // 如果是连击，显示连击数
    if (isCorrect && consecutiveCorrect >= 2) {
        showComboIndicator(consecutiveCorrect);
    }

    setTimeout(() => {
        if (document.body.contains(feedback)) {
            document.body.removeChild(feedback);
        }
    }, 1500);
}

// 显示连击Combo指示器
function showComboIndicator(count) {
    // 移除旧的连击指示器
    const oldCombo = document.getElementById('combo-indicator');
    if (oldCombo) oldCombo.remove();

    const combo = document.createElement('div');
    combo.id = 'combo-indicator';
    combo.className = 'combo-indicator';
    combo.innerHTML = `<span class="combo-fire">🔥</span> 连击 x ${count}`;
    document.body.appendChild(combo);

    setTimeout(() => {
        if (document.body.contains(combo)) {
            combo.classList.add('fade-out');
            setTimeout(() => combo.remove(), 300);
        }
    }, 2000);
}

// 语音鼓励（说英文）
function speakFeedback(isCorrect) {
    if ('speechSynthesis' in window) {
        const list = isCorrect ? feedbackMap.success : feedbackMap.encourage;
        const item = list[Math.floor(Math.random() * list.length)];
        const utterance = new SpeechSynthesisUtterance(item.en);
        utterance.lang = 'en-US';
        utterance.rate = 1.0;
        window.speechSynthesis.speak(utterance);
    }
}

function speakWord(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    }
}

// 给选项卡片内的图片添加白色背景（用Canvas去除透明PNG的马赛克效果）
function wrapImagesWithWhiteBg(container) {
    // 扩大选择范围：option-card、tf-image-container、以及其他可能的图片容器
    const images = container.querySelectorAll('.option-card img, .tf-image-container img, .question-image img, img[src*="png"], img[src*="PNG"]');
    images.forEach(img => {
        // 等图片加载完成后用Canvas处理
        const processImage = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.naturalWidth || 100;
            canvas.height = img.naturalHeight || 100;

            // 先填充白色背景
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 再绘制图片
            ctx.drawImage(img, 0, 0);

            // 替换原图片src
            img.src = canvas.toDataURL('image/png');
        };

        if (img.complete) {
            processImage();
        } else {
            img.onload = processImage;
        }
    });
}

// Render student list - 响应式分页
const studentPagesEl = document.getElementById('student-pages');
const pageDotsEl = document.getElementById('page-dots');

// 根据屏幕宽度计算每页学生数
function getStudentsPerPage() {
    const width = window.innerWidth;
    if (width >= 1000) return 30;      // iPad横屏: 6列x5行
    if (width >= 700) return 25;       // iPad竖屏: 5列x5行
    if (width >= 400) return 12;       // iPhone 7 Plus: 3列x4行
    return 12;                          // iPhone 7: 3列x4行 (默认也是12)
}

const STUDENTS_PER_PAGE = getStudentsPerPage();
const totalPages = Math.ceil(students.length / STUDENTS_PER_PAGE);

// 创建分页
for (let page = 0; page < totalPages; page++) {
    const pageEl = document.createElement('div');
    pageEl.className = 'student-page';

    const startIdx = page * STUDENTS_PER_PAGE;
    const endIdx = Math.min(startIdx + STUDENTS_PER_PAGE, students.length);

    for (let i = startIdx; i < endIdx; i++) {
        const name = students[i];
        const el = document.createElement('div');
        el.className = 'student-card';
        el.textContent = name; // 保留学号，如 "1. 张宇豪"
        el.onclick = () => toggleStudent(name, el);
        pageEl.appendChild(el);
    }

    studentPagesEl.appendChild(pageEl);

    // 创建页码点
    const dot = document.createElement('div');
    dot.className = 'page-dot' + (page === 0 ? ' active' : '');
    pageDotsEl.appendChild(dot);
}

// 监听滚动更新页码指示器
studentPagesEl.addEventListener('scroll', () => {
    const scrollLeft = studentPagesEl.scrollLeft;
    const pageWidth = studentPagesEl.offsetWidth;
    const currentPage = Math.round(scrollLeft / pageWidth);
    const dots = pageDotsEl.querySelectorAll('.page-dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentPage);
    });
});

const nextBtn = document.getElementById('next-btn');

function toggleStudent(name, el) {
    if (selectedStudents.includes(name)) {
        selectedStudents = selectedStudents.filter(n => n !== name);
        el.classList.remove('selected');
    } else {
        if (selectedStudents.length >= 2) return; // Max 2
        selectedStudents.push(name);
        el.classList.add('selected');
    }
    nextBtn.disabled = selectedStudents.length !== 2;
    
    // Update selected names display - 简洁风格，保留学号
    const selectedNamesEl = document.getElementById('selected-names');
    if (selectedNamesEl) {
        if (selectedStudents.length === 0) {
            selectedNamesEl.textContent = '______ 和 ______';
        } else if (selectedStudents.length === 1) {
            selectedNamesEl.textContent = `${selectedStudents[0]} 和 ______`;
        } else {
            selectedNamesEl.textContent = `${selectedStudents[0]} 和 ${selectedStudents[1]}`;
        }
    }
}

function getQuestions(module, phase) {
    const allQuestions = currentLessonData[module][phase] || [];

    // 前测：返回所有题目
    if (phase === 'pretest') {
        return allQuestions;
    }

    // 练习：根据学生水平筛选题目
    return filterQuestionsByLevel(allQuestions, studentLevel);
}

// 根据学生水平筛选题目
function filterQuestionsByLevel(questions, level) {
    // 如果题目没有难度标签，根据水平分配比例
    const difficultyMap = {
        'A': { easy: 0.2, medium: 0.4, hard: 0.4 },  // 基础好：多给难题
        'B': { easy: 0.3, medium: 0.5, hard: 0.2 },  // 基础中等：均衡
        'C': { easy: 0.5, medium: 0.4, hard: 0.1 }   // 基础薄弱：多给简单题
    };

    const ratio = difficultyMap[level] || difficultyMap['B'];

    // 按难度分组
    const easy = questions.filter(q => q.difficulty === 'easy' || !q.difficulty);
    const medium = questions.filter(q => q.difficulty === 'medium');
    const hard = questions.filter(q => q.difficulty === 'hard');

    // 如果题目都没有难度标签，按索引位置推断难度
    if (medium.length === 0 && hard.length === 0) {
        const total = questions.length;
        const easyCount = Math.floor(total * 0.4);
        const mediumCount = Math.floor(total * 0.4);

        questions.forEach((q, i) => {
            if (i < easyCount) q.difficulty = 'easy';
            else if (i < easyCount + mediumCount) q.difficulty = 'medium';
            else q.difficulty = 'hard';
        });

        return filterQuestionsByLevel(questions, level);
    }

    // 根据比例选择题目
    const result = [];
    const targetCount = Math.min(30, questions.length); // 最多30题

    const easyTarget = Math.floor(targetCount * ratio.easy);
    const mediumTarget = Math.floor(targetCount * ratio.medium);
    const hardTarget = targetCount - easyTarget - mediumTarget;

    // 随机选择
    result.push(...shuffleArray(easy).slice(0, easyTarget));
    result.push(...shuffleArray(medium).slice(0, mediumTarget));
    result.push(...shuffleArray(hard).slice(0, hardTarget));

    // 打乱顺序
    return shuffleArray(result);
}

// 数组随机打乱
function shuffleArray(arr) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

// Step 1: Click "开始学习" to go directly to game-screen (skip module-screen)
nextBtn.onclick = function() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    players = selectedStudents.map(n => ({ name: n, stars: 0 }));

    document.getElementById('login-screen').classList.remove('active');
    
    // Dynamic Course Loading System
    // 检查教师端是否设置了模块和阶段
    Sync.getCurrentLessonOnce().then(lesson => {
        if (lesson) {
            currentModule = lesson.module || 'listening';
            const dataVarName = (lesson.unit === 1 && lesson.lesson === 1) ? 'lesson1' : `unit${lesson.unit}_lesson${lesson.lesson}`;
            if (window[dataVarName]) {
                currentLessonData = window[dataVarName];
            } else {
                currentLessonData = lesson1;
            }
        } else {
            currentModule = 'listening'; // fallback
            currentLessonData = lesson1;
        }

        Sync.listenTeacherCommand(cmd => {
            if (cmd) {
                currentModule = cmd.module || 'listening';
                currentPhase = cmd.phase || 'pretest';
            } else {
                currentModule = 'listening';
                currentPhase = 'pretest';
            }
            startGame();
        });
        startGame(); // 初始启动
    });
    
    // 检查教师端是否设置了模块和阶段
    const cmd = Sync.getTeacherCommandOnce ? Sync.getTeacherCommandOnce() : null;
    if (cmd) {
        currentModule = cmd.module || 'listening';
        currentPhase = cmd.phase || 'pretest';
    } else {
        currentModule = 'listening';
        currentPhase = 'pretest';
    }
    startGame();
};

// Step 2: Click module card to start (仅当没有教师指令时使用)
document.querySelectorAll('.module-card').forEach(card => {
    card.onclick = function() {
        if (window.SoundSystem) SoundSystem.playClick();
        currentModule = this.dataset.module;
        currentPhase = 'pretest';
        startGame();
    };
});

function startGame() {
    document.getElementById('player1-ui').querySelector('.name').textContent = players[0].name;
    document.getElementById('player2-ui').querySelector('.name').textContent = players[1].name;

    // 重新读取教师设置的课程和模块（确保使用最新设置）
    Sync.getCurrentLessonOnce().then(lesson => {
        if (lesson) {
            const dataVarName = (lesson.unit === 1 && lesson.lesson === 1) ? 'lesson1' : `unit${lesson.unit}_lesson${lesson.lesson}`;
            if (window[dataVarName]) {
                currentLessonData = window[dataVarName];
            }
        }

        // 标记双人练习完成（每日任务）
        if (typeof markDuoPracticeComplete === 'function') {
            markDuoPracticeComplete();
        }

        // 重置前测统计
        pretestStats = {
            player1: { correct: 0, total: 0, totalTime: 0, wrongWords: [] },
            player2: { correct: 0, total: 0, totalTime: 0, wrongWords: [] }
        };
        studentLevel = 'B'; // 重置为默认中等
        consecutiveCorrect = 0;
        consecutiveWrong = 0;
        currentDifficulty = 'medium';

        moduleQuestions = getQuestions(currentModule, currentPhase);
        currentQuestionIndex = 0;
        currentPlayerIndex = 0;

        // 如果没有设置时间限制，使用默认值
        if (!currentTimeLimit || currentTimeLimit === 0) {
            currentTimeLimit = DEFAULT_TIME_LIMIT;
        }

        document.getElementById('module-screen').classList.remove('active');
        document.getElementById('game-screen').classList.add('active');

        // Show phase indicator
        updatePhaseIndicator();
        renderQuestion();
    });
}

function updatePhaseIndicator() {
    let indicator = document.getElementById('phase-indicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'phase-indicator';
        indicator.className = 'phase-indicator';
        const gameScreen = document.getElementById('game-screen');
        gameScreen.insertBefore(indicator, gameScreen.firstChild);
    }

    const phaseNames = {
        pretest: '前测',
        practice: '练习'
    };
    const moduleNames = {
        listening: '听力',
        reading: '阅读',
        writing: '写作',
        speaking: '口语'
    };

    const lesson = Sync.getCurrentLessonOnceSync ? Sync.getCurrentLessonOnceSync() : null;
    if (lesson) {
        // 课程名取 displayName 的第一段（去掉模块部分，避免重复）
        const lessonTitle = lesson.displayName ? lesson.displayName.split('-')[0].trim() : lesson.displayName;
        indicator.textContent = `📚 ${lessonTitle} · ${moduleNames[currentModule] || ''} · ${phaseNames[currentPhase]}`;
    } else {
        indicator.textContent = `📚 ${moduleNames[currentModule] || ''} · ${phaseNames[currentPhase]}`;
    }
}

function showQuestionHint(type, container) {
    const hints = {
        'memory_match': '翻开两张卡片，找出相同的配对',
        'drag_connect': '把左边的单词和右边的图片连起来',
        'sentence_order': '把打乱的单词排成正确的句子',
        'word_puzzle': '把字母拼成正确的单词',
        'fill_blank': '在空格里填上正确的单词',
        'duo_race': '双人抢答竞赛！',
        'whack_mole': '打地鼠抢答！',
        'word_match': '找到匹配的图片/单词',
        'sentence_match': '根据句子选出匹配的图片',
        'letter_select': '选出缺少的字母！',
        'word_spell': '根据图片拼出正确的单词！',
        'duo_spell': '接力拼写单词！',
        'duo_sentence': '双人合作排列句子！',
        'listen_select': '听录音，选出正确的图片',
        'listen_tf': '判断录音与图片是否一致',
        'duo_listen_select': '一人听音，一人选图！',
        'listen_question': '听问题，选出合适的回答',
        'read_sentence': '大声朗读这个句子',
        'repeat_word': '大声跟读单词'
    };

    if (hints[type]) {
        const hintEl = document.createElement('div');
        hintEl.className = 'question-type-hint';
        hintEl.textContent = hints[type];
        container.appendChild(hintEl);

        setTimeout(() => {
            hintEl.style.opacity = '0';
            setTimeout(() => {
                 if (hintEl.parentNode === container) {
                     hintEl.remove();
                 }
            }, 500);
        }, 3000);
    }
}

function renderQuestion() {
    isAnimating = false;

    // 清除上一题的反馈元素（防止遮挡）
    hideFeedbackPanel();
    // 清除连击指示器
    const combo = document.getElementById('combo-indicator');
    if (combo) combo.remove();

    hideCorrectAnswerDisplay();
    hideCorrectHint();

    updateHeader();

    // Check if we reached the end of current phase
    if (currentQuestionIndex >= moduleQuestions.length) {
        if (currentPhase === 'pretest') {
            // Pretest done, calculate level and start practice
            calculateStudentLevel();
            showTransition();
        } else {
            // Practice done, show finish
            showFinishScreen();
        }
        return;
    }

    const q = moduleQuestions[currentQuestionIndex];
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    
    // Add dynamic question type hint
    showQuestionHint(q.type, container);

    // 记录每题开始时间（用于计算答题用时）
    questionStartTime = Date.now();

    // Update turn indicator with progress and timer (合并显示)
    const currentPlayerName = players[currentPlayerIndex].name.replace(/^\d+\.\s*/, '');
    const progress = `${currentQuestionIndex + 1}/${moduleQuestions.length}`;

    // 练习阶段显示当前难度
    let difficultyIndicator = '';
    if (currentPhase === 'practice') {
        const diffLabels = { easy: '🟢简单', medium: '🟡中等', hard: '🔴困难' };
        difficultyIndicator = `<span class="difficulty-tag">${diffLabels[currentDifficulty] || ''}</span>`;
    }

    // 简洁设计：进度只在顶部显示，这里只显示轮次和计时
    document.getElementById('turn-indicator').innerHTML = `
        <span class="turn-name">请 <strong>${currentPlayerName}</strong> 回答</span>
        ${difficultyIndicator}
        <span class="turn-timer" id="question-timer">${currentTimeLimit ? currentTimeLimit + 's' : ''}</span>
    `;

    // Update header progress (头像中间)
    document.getElementById('question-progress').textContent = progress;

    // 启动计时器
    startQuestionTimer();

    // Delegate to module renderers
    if (currentModule === 'listening') {
        renderListeningQuestion(q, container);
    } else if (currentModule === 'reading') {
        renderReadingQuestion(q, container);
    } else if (currentModule === 'writing') {
        renderWritingQuestion(q, container);
    } else if (currentModule === 'speaking') {
        renderSpeakingQuestion(q, container);
    }

    // 给所有选项卡片内的图片添加白色背景包装（去除透明马赛克）
    wrapImagesWithWhiteBg(container);

    // 添加"下一题"按钮（默认禁用，答对后才启用）
    const skipBtn = document.createElement('button');
    skipBtn.className = 'next-btn';
    skipBtn.id = 'next-question-btn';
    // 最后一题：显示「再来一次」
    const isLastQuestion = (currentQuestionIndex >= moduleQuestions.length - 1);
    if (isLastQuestion) {
        skipBtn.textContent = '再来一次 ↩';
        skipBtn.onclick = function() { location.reload(); };
    } else {
        skipBtn.textContent = '下一题 ▶';
        skipBtn.onclick = skipToNextQuestion;
    }
    skipBtn.disabled = true; // 默认禁用
    container.appendChild(skipBtn);

    syncStudentProgress();
}

function showTransition() {
    const container = document.getElementById('question-container');

    // 获取水平等级描述
    const levelInfo = {
        'A': { emoji: '🌟', label: '基础扎实', desc: '你们很棒！接下来挑战更难的题目！', color: '#58cc02' },
        'B': { emoji: '👍', label: '基础中等', desc: '继续加油！练习会帮助你们进步！', color: '#1cb0f6' },
        'C': { emoji: '💪', label: '需要加强', desc: '别担心！我们从简单的开始练习！', color: '#ff9500' }
    };

    const info = levelInfo[studentLevel] || levelInfo['B'];

    // 计算每位同学的统计数据
    const p1 = pretestStats.player1;
    const p2 = pretestStats.player2;

    const p1Accuracy = p1.total > 0 ? Math.round((p1.correct / p1.total) * 100) : 0;
    const p2Accuracy = p2.total > 0 ? Math.round((p2.correct / p2.total) * 100) : 0;
    const p1AvgTime = p1.total > 0 ? (p1.totalTime / p1.total / 1000).toFixed(1) : 0;
    const p2AvgTime = p2.total > 0 ? (p2.totalTime / p2.total / 1000).toFixed(1) : 0;

    // 整体正确率
    const totalCorrect = p1.correct + p2.correct;
    const totalQuestions = p1.total + p2.total;
    const totalAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

    container.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 50px; margin-bottom: 10px;">🎉</div>
            <h2 style="margin: 10px 0;">前测完成！</h2>

            <!-- 两位同学的成绩 -->
            <div style="display: flex; margin: 15px 0;">
                <!-- 玩家1 -->
                <div style="flex: 1; margin-right: 10px; background: #e3f4ff; border: 2px solid #1cb0f6; border-radius: 12px; padding: 12px;">
                    <div style="font-size: 24px;">👦</div>
                    <div style="font-size: 14px; font-weight: bold; color: #1cb0f6;">${player1Name}</div>
                    <div style="font-size: 20px; font-weight: bold; margin: 5px 0;">${p1Accuracy}%</div>
                    <div style="font-size: 12px; color: #666;">
                        ${p1.correct}/${p1.total}题 · ${p1AvgTime}秒/题
                    </div>
                </div>
                <!-- 玩家2 -->
                <div style="flex: 1; background: #fff3e0; border: 2px solid #ff9500; border-radius: 12px; padding: 12px;">
                    <div style="font-size: 24px;">👧</div>
                    <div style="font-size: 14px; font-weight: bold; color: #ff9500;">${player2Name}</div>
                    <div style="font-size: 20px; font-weight: bold; margin: 5px 0;">${p2Accuracy}%</div>
                    <div style="font-size: 12px; color: #666;">
                        ${p2.correct}/${p2.total}题 · ${p2AvgTime}秒/题
                    </div>
                </div>
            </div>

            <!-- 整体水平 -->
            <div style="background: linear-gradient(135deg, ${info.color}22, ${info.color}11);
                        border: 2px solid ${info.color};
                        border-radius: 12px;
                        padding: 12px;
                        margin: 10px 0;">
                <div style="font-size: 28px;">${info.emoji}</div>
                <div style="font-size: 18px; font-weight: bold; color: ${info.color};">
                    整体水平：${info.label}
                </div>
                <div style="font-size: 14px; color: #888; margin-top: 5px;">
                    ${info.desc}
                </div>
            </div>

            <!-- 按钮区域 -->
            <div style="display: flex; margin-top: 20px;">
                <button onclick="restartPretest()" style="flex: 1; margin-right: 10px; padding: 15px; font-size: 16px; background: #fff; border: 2px solid #1cb0f6; color: #1cb0f6; border-radius: 12px; cursor: pointer;">
                    🔄 再来一遍
                </button>
                <button onclick="startPractice()" style="flex: 1; padding: 15px; font-size: 16px; background: #58cc02; border: none; color: white; border-radius: 12px; cursor: pointer;">
                    ▶️ 开始练习
                </button>
            </div>
        </div>
    `;

    createConfetti(30);
}

// 重新开始前测
function restartPretest() {
    // 重置前测统计
    pretestStats = {
        player1: { correct: 0, total: 0, totalTime: 0, wrongWords: [] },
        player2: { correct: 0, total: 0, totalTime: 0, wrongWords: [] }
    };
    currentPhase = 'pretest';
    moduleQuestions = getQuestions(currentModule, currentPhase);
    currentQuestionIndex = 0;
    updatePhaseIndicator();
    renderQuestion();
}

// 开始练习
function startPractice() {
    currentPhase = 'practice';
    moduleQuestions = getQuestions(currentModule, currentPhase);
    currentQuestionIndex = 0;
    currentDifficulty = studentLevel === 'A' ? 'medium' : (studentLevel === 'C' ? 'easy' : 'medium');
    updatePhaseIndicator();
    renderQuestion();
}

// 计算学生水平（基于前测表现）
function calculateStudentLevel() {
    const p1 = pretestStats.player1;
    const p2 = pretestStats.player2;

    // 综合两人的表现
    const totalCorrect = p1.correct + p2.correct;
    const totalQuestions = p1.total + p2.total;
    const totalTime = p1.totalTime + p2.totalTime;

    if (totalQuestions === 0) {
        studentLevel = 'B';
        return;
    }

    const accuracy = totalCorrect / totalQuestions;
    const avgTimePerQuestion = totalTime / totalQuestions; // 毫秒
    const standardTime = currentTimeLimit * 1000; // 转换为毫秒

    // 根据 Bloom Mastery Learning 理论
    // A级：正确率≥80% 且 平均用时≤标准时间
    // B级：正确率60-80% 或 用时中等
    // C级：正确率<60% 或 用时很长

    if (accuracy >= MASTERY_THRESHOLD && avgTimePerQuestion <= standardTime) {
        studentLevel = 'A';
    } else if (accuracy < STRUGGLE_THRESHOLD || avgTimePerQuestion > standardTime * SLOW_TIME_RATIO) {
        studentLevel = 'C';
    } else {
        studentLevel = 'B';
    }

    console.log(`学生水平评估: 正确率=${(accuracy*100).toFixed(1)}%, 平均用时=${(avgTimePerQuestion/1000).toFixed(1)}s, 等级=${studentLevel}`);
}

function updateHeader() {
    document.getElementById('player1-ui').classList.toggle('active-player', currentPlayerIndex === 0);
    document.getElementById('player2-ui').classList.toggle('active-player', currentPlayerIndex === 1);
    document.getElementById('player1-ui').querySelector('.stars').innerHTML = `⭐ ${players[0].stars}`;
    document.getElementById('player2-ui').querySelector('.stars').innerHTML = `⭐ ${players[1].stars}`;
}

function handleAnswer(isCorrect, cardEl = null, correctAnswer = null) {
    if(isAnimating) return;
    isAnimating = true;

    // 记录答题时间
    const responseTime = Date.now() - questionStartTime;

    // 记录前测或练习统计（用于计算学生水平和易错词收集）
    const playerKey = currentPlayerIndex === 0 ? 'player1' : 'player2';
    const targetStats = pretestStats[playerKey];
    
    // We update pretestStats as a global accumulator for the Teacher Dashboard export
    targetStats.total++;
    targetStats.totalTime += responseTime;
    
    if (isCorrect) {
        targetStats.correct++;
        // 处理成就
        processAchievements(true);
    } else {
        // 处理成就（答错也要记录）
        processAchievements(false);
        const q = moduleQuestions[currentQuestionIndex];
        if (q && q.word && !targetStats.wrongWords.includes(q.word)) {
            // Store up to 10 unique wrong words per session
            if (targetStats.wrongWords.length < 10) {
                targetStats.wrongWords.push(q.word);
            }
        }
    }

    // 动态难度调整（练习阶段）
    if (currentPhase === 'practice') {
        if (isCorrect) {
            consecutiveCorrect++;
            consecutiveWrong = 0;
            // 连续3题正确，提升难度
            if (consecutiveCorrect >= 3) {
                adjustDifficulty('up');
                consecutiveCorrect = 0;
            }
        } else {
            consecutiveWrong++;
            consecutiveCorrect = 0;
            // 连续2题错误，降低难度
            if (consecutiveWrong >= 2) {
                adjustDifficulty('down');
                consecutiveWrong = 0;
            }
        }
    }

    const q = moduleQuestions[currentQuestionIndex];

    if (isCorrect) {
        stopQuestionTimer(); // 答对停止计时
        if (cardEl) cardEl.classList.add('correct');
        if (window.SoundSystem) SoundSystem.playCorrect();
        playSuccessSound();
        speakFeedback(true);      // 语音说英文
        resetHintLevel();

        // 只显示底部反馈面板（包含答案和鼓励语，不再重复显示绿色答案条）
        showFeedbackPanel(true, q);

        // 答对后解锁交互
        isAnimating = false;

        // 不再自动跳转，让学生点击继续按钮
    } else {
        if (cardEl) cardEl.classList.add('wrong');
        if (window.SoundSystem) SoundSystem.playWrong();
        playWrongSound();
        speakFeedback(false);     // 语音说英文

        // 答错才显示提示（分层提示）
        if (q && q.audio) {
            const hint = getHint(q.audio);
            if (hint) {
                showProgressiveHint(hint, wrongAttempts);
            }
        }
        increaseHintLevel();

        // 答错后显示提示一段时间，但不显示底部面板（让学生继续尝试）
        setTimeout(() => {
            if (cardEl) cardEl.classList.remove('wrong');
            hideCorrectHint();
            isAnimating = false;
        }, 2500);
    }
}

function showProgressiveHint(hint, level) {
    let hintEl = document.getElementById('progressive-hint');
    if (!hintEl) {
        hintEl = document.createElement('div');
        hintEl.id = 'progressive-hint';
        hintEl.className = 'correct-hint';
        document.getElementById('question-container').appendChild(hintEl);
    }

    // 中文标签（学生看得懂）
    const icons = ['💡', '📝', '📖'];
    const labels = ['提示：', '答案是：', ''];  // level3直接显示内容

    if (level === 2) {
        // Level 3: 直接显示中文指示
        hintEl.innerHTML = `${icons[level]} ${hint}`;
    } else {
        hintEl.innerHTML = `${icons[level]} ${labels[level]} <strong>${hint}</strong>`;
    }
    hintEl.style.display = 'block';
}

// 答对时显示正确答案+中文翻译（让学生加深印象）
// 替换原来的题目位置，只保留选项
function showCorrectAnswerWithTranslation(q) {
    const container = document.getElementById('question-container');

    // 隐藏原来的题目内容（除了选项区域和固定底部的按钮等）
    const protectedClasses = ['options-grid', 'sort-area', 'whack-mole-grid', 'balloon-container', 'next-btn'];
    
    for (let i = 0; i < container.children.length; i++) {
        const child = container.children[i];
        let shouldHide = true;
        
        // 如果元素包含受保护的类之一，则不隐藏
        for (const cls of protectedClasses) {
            if (child.classList.contains(cls)) {
                shouldHide = false;
                break;
            }
        }
        
        if (child.id === 'correct-answer-display' || child.id === 'progressive-hint' || child.id === 'correct-hint') {
            shouldHide = false;
        }
        
        if (shouldHide) {
            child.dataset.originalDisplay = getComputedStyle(child).display;
            child.style.display = 'none';
        }
    }

    // 移除旧的正确答案显示（如果有）
    let display = document.getElementById('correct-answer-display');
    if (display) {
        display.remove();
    }

    // 创建新的正确答案显示
    display = document.createElement('div');
    display.id = 'correct-answer-display';
    display.className = 'correct-answer-display';

    // 获取英文内容和中文翻译
    let english = q.audio || q.word || q.sentence || '';
    let chinese = q.chinese || '';

    if (english && chinese) {
        display.innerHTML = `
            <div class="answer-english">✓ ${english}</div>
            <div class="answer-chinese">${chinese}</div>
        `;
    } else if (english) {
        display.innerHTML = `<div class="answer-english">✓ ${english}</div>`;
    }

    // 直接插入到最前面，也就是原来题目的位置
    if (container.firstChild) {
        container.insertBefore(display, container.firstChild);
    } else {
        container.appendChild(display);
    }

    // 确保下一题按钮被启用
    const nextBtn = document.getElementById('next-question-btn');
    if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.style.pointerEvents = 'auto';
    }
}

function hideCorrectAnswerDisplay() {
    const display = document.getElementById('correct-answer-display');
    if (display) {
        display.remove();
    }
    // 恢复题目内容显示
    const container = document.getElementById('question-container');
    if (container) {
        for (let i = 0; i < container.children.length; i++) {
            const child = container.children[i];
            if (child.dataset.originalDisplay !== undefined) {
                child.style.display = child.dataset.originalDisplay;
                delete child.dataset.originalDisplay;
            }
        }
    }
}

// ===== 多邻国风格底部反馈面板 =====
// 记录当前答题是否正确（用于继续按钮判断是否加分）
var lastAnswerCorrect = false;

function showFeedbackPanel(isCorrect, question) {
    // 记录本题是否答对
    lastAnswerCorrect = isCorrect;

    // 移除旧的面板
    hideFeedbackPanel();

    // 添加标记类到body
    document.body.classList.add('feedback-panel-active');

    const panel = document.createElement('div');
    panel.id = 'feedback-panel';
    panel.className = `feedback-panel ${isCorrect ? 'correct' : 'wrong'}`;

    // 获取鼓励语
    const feedbackList = isCorrect ? feedbackMap.success : feedbackMap.encourage;
    const feedback = feedbackList[Math.floor(Math.random() * feedbackList.length)];

    // 获取正确答案
    let answerWord = (question && question.audio) || (question && question.word) || (question && question.sentence) || '';
    let answerChinese = (question && question.chinese) || '';

    // 构建面板内容
    let contentHTML = '';
    if (isCorrect) {
        contentHTML = `
            <div class="feedback-panel-content">
                <div class="feedback-icon">✓</div>
                <div class="feedback-text">
                    <div class="feedback-title">${feedback.cn}</div>
                    ${answerWord ? `<div class="feedback-answer"><span class="answer-word">${answerWord}</span>${answerChinese ? ` = ${answerChinese}` : ''}</div>` : ''}
                </div>
            </div>
            <button class="feedback-continue-btn" onclick="onFeedbackContinue()">继续</button>
        `;
    } else {
        contentHTML = `
            <div class="feedback-panel-content">
                <div class="feedback-icon">✗</div>
                <div class="feedback-text">
                    <div class="feedback-title">${feedback.cn}</div>
                    ${answerWord ? `<div class="feedback-answer">正确答案：<span class="answer-word">${answerWord}</span>${answerChinese ? ` (${answerChinese})` : ''}</div>` : ''}
                </div>
            </div>
            <button class="feedback-continue-btn" onclick="onFeedbackContinue()">继续</button>
        `;
    }

    panel.innerHTML = contentHTML;
    document.body.appendChild(panel);
}

function hideFeedbackPanel() {
    const panel = document.getElementById('feedback-panel');
    if (panel) {
        panel.remove();
    }
    document.body.classList.remove('feedback-panel-active');
}

function onFeedbackContinue() {
    hideFeedbackPanel();
    hideCorrectAnswerDisplay();
    hideCorrectHint();

    // 如果上一题答对了，调用 onCorrect 加分；否则只跳到下一题
    if (lastAnswerCorrect) {
        onCorrect();
    } else {
        skipToNextQuestion();
    }
}

// ===== 动态难度调整 =====
function adjustDifficulty(direction) {
    const levels = ['easy', 'medium', 'hard'];
    const currentIndex = levels.indexOf(currentDifficulty);

    if (direction === 'up' && currentIndex < levels.length - 1) {
        currentDifficulty = levels[currentIndex + 1];
        showDifficultyChangeNotice('up');
    } else if (direction === 'down' && currentIndex > 0) {
        currentDifficulty = levels[currentIndex - 1];
        showDifficultyChangeNotice('down');
    }

    console.log(`难度调整: ${direction} -> ${currentDifficulty}`);
}

function showDifficultyChangeNotice(direction) {
    const notice = document.createElement('div');
    notice.className = 'difficulty-notice';

    if (direction === 'up') {
        notice.innerHTML = '📈 难度提升！';
        notice.style.background = 'linear-gradient(135deg, #ff9500, #ffb800)';
    } else {
        notice.innerHTML = '📉 难度降低';
        notice.style.background = 'linear-gradient(135deg, #58cc02, #7ce000)';
    }

    document.body.appendChild(notice);

    setTimeout(() => {
        if (document.body.contains(notice)) {
            document.body.removeChild(notice);
        }
    }, 1500);
}

// ===== 计时器功能 =====
function startQuestionTimer() {
    // 清除之前的计时器
    if (questionTimer) {
        clearInterval(questionTimer);
        questionTimer = null;
    }

    if (!currentTimeLimit || currentTimeLimit === 0) {
         const timerEl = document.getElementById('question-timer');
         if (timerEl) {
             timerEl.textContent = '⏱️ 无限制';
             timerEl.style.color = '';
         }
         return;
    }

    timeLeft = currentTimeLimit;
    updateTimerDisplay();

    questionTimer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            // 时间到，强制下一题
            clearInterval(questionTimer);
            forceNextQuestion();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('question-timer');
    if (timerEl) {
        timerEl.textContent = `⏱️ ${timeLeft}s`;
        // 时间少于10秒变红色警告
        if (timeLeft <= 10) {
            timerEl.style.color = '#ff4b4b';
            timerEl.style.fontWeight = 'bold';
        } else {
            timerEl.style.color = '';
            timerEl.style.fontWeight = '';
        }
    }
}

function stopQuestionTimer() {
    if (questionTimer) {
        clearInterval(questionTimer);
        questionTimer = null;
    }
}

function forceNextQuestion() {
    // 时间到，显示提示并强制下一题
    showFeedbackText(false);
    speakFeedback(false);

    setTimeout(() => {
        currentPlayerIndex = Math.random() < 0.5 ? 0 : 1;
        currentQuestionIndex++;
        resetHintLevel();
        syncStudentProgress();
        renderQuestion();
    }, 1500);
}

// 手动跳过/下一题按钮
function skipToNextQuestion() {
    if (isAnimating) return;
    stopQuestionTimer();
    hideCorrectAnswerDisplay(); // 隐藏正确答案显示
    currentPlayerIndex = Math.random() < 0.5 ? 0 : 1;
    currentQuestionIndex++;
    resetHintLevel();
    syncStudentProgress();
    renderQuestion();
}

function showCorrectHint(answer) {
    let hint = document.getElementById('correct-hint');
    if (!hint) {
        hint = document.createElement('div');
        hint.id = 'correct-hint';
        hint.className = 'correct-hint';
        document.getElementById('question-container').appendChild(hint);
    }
    hint.innerHTML = `💡 提示：正确答案是 <strong>${answer}</strong>`;
    hint.style.display = 'block';
}

function hideCorrectHint() {
    const hint = document.getElementById('correct-hint');
    if (hint) {
        hint.style.display = 'none';
    }
    const progressiveHint = document.getElementById('progressive-hint');
    if (progressiveHint) {
        progressiveHint.style.display = 'none';
    }
}

function onCorrect() {
    players[currentPlayerIndex].stars += 1;
    updateHeader();
    createConfetti(15);

    // Random next player (not just alternating)
    currentPlayerIndex = Math.random() < 0.5 ? 0 : 1;
    currentQuestionIndex++;
    syncStudentProgress();
    renderQuestion();
}

function showFinishScreen() {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('finish-screen').classList.add('active');

    // Show final scores
    const finishStars = document.getElementById('finish-stars');
    finishStars.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div style="font-size: 24px; margin: 10px 0;">${players[0].name}: ⭐ ${players[0].stars}</div>
            <div style="font-size: 24px; margin: 10px 0;">${players[1].name}: ⭐ ${players[1].stars}</div>
        </div>
        <div style="display: flex; margin-top: 20px; padding: 0 20px;">
            <button onclick="restartCurrentModule()" style="flex: 1; margin-right: 10px; padding: 15px; font-size: 16px; background: #fff; border: 2px solid #1cb0f6; color: #1cb0f6; border-radius: 12px; cursor: pointer;">
                🔄 再来一次
            </button>
            <button onclick="location.reload()" style="flex: 1; padding: 15px; font-size: 16px; background: #58cc02; border: none; color: white; border-radius: 12px; cursor: pointer;">
                🏠 返回首页
            </button>
        </div>
    `;

    createConfetti(50);
    syncStudentProgress(true);
}

// 重新开始当前模块
function restartCurrentModule() {
    document.getElementById('finish-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    startGame();
}

// ===== 宠物系统集成 =====

// 宠物按钮点击事件
var petBtn = document.getElementById('pet-btn');
if (petBtn) {
    petBtn.onclick = function() {
        if (typeof showPetModal === 'function') {
            showPetModal();
        }
    };
}

// ===== 进度地图集成 =====

// 进度地图按钮点击事件
var mapBtn = document.getElementById('map-btn');
if (mapBtn) {
    mapBtn.onclick = function() {
        if (typeof showProgressMapModal === 'function') {
            showProgressMapModal();
        }
    };
}

// 从地图选择课程
function selectLessonFromMap(lessonId) {
    // 根据lessonId找到对应的课程数据
    var lessonMap = {
        'U1L1': lesson1,
        'U1L2': unit1_lesson2,
        'U1L3': unit1_lesson3,
        'U1L4': unit1_lesson4,
        'U2L1': unit2_lesson1,
        'U2L2': unit2_lesson2,
        'U2L3': unit2_lesson3,
        'U2L4': unit2_lesson4,
        'U3L1': unit3_lesson1,
        'U3L2': unit3_lesson2,
        'U3L3': unit3_lesson3,
        'U3L4': unit3_lesson4,
        'U4L1': unit4_lesson1,
        'U4L2': unit4_lesson2,
        'U4L3': unit4_lesson3,
        'U4L4': unit4_lesson4
    };

    if (lessonMap[lessonId]) {
        // 保存选择的课程
        Sync.setCurrentLesson({
            id: lessonId,
            displayName: lessonMap[lessonId].title + ' - 听力',
            module: 'listening',
            stage: 'practice'
        });

        // 刷新页面加载新课程
        location.reload();
    }
}

// ===== 成就系统集成 =====

// 成就按钮点击事件
var achievementsBtn = document.getElementById('achievements-btn');
if (achievementsBtn) {
    achievementsBtn.onclick = function() {
        // 隐藏登录页面
        var loginScreen = document.getElementById('login-screen');
        loginScreen.classList.remove('active');
        loginScreen.style.display = 'none';

        // 隐藏任务面板（如果打开的话）
        var questsContainer = document.getElementById('daily-quests-container');
        if (questsContainer) questsContainer.style.display = 'none';

        // 显示成就页面
        var achScreen = document.getElementById('achievements-screen');
        achScreen.classList.add('active');
        achScreen.style.display = 'flex';

        var container = document.getElementById('achievements-container');
        if (typeof renderAchievementsPage === 'function') {
            renderAchievementsPage(container);
        }
    };
}

// 返回按钮
var backToLoginBtn = document.getElementById('back-to-login');
if (backToLoginBtn) {
    backToLoginBtn.onclick = function() {
        // 隐藏成就页面
        var achScreen = document.getElementById('achievements-screen');
        achScreen.classList.remove('active');
        achScreen.style.display = 'none';

        // 显示登录页面
        var loginScreen = document.getElementById('login-screen');
        loginScreen.classList.add('active');
        loginScreen.style.display = 'flex';
    };
}

// ===== 每日任务集成 =====

// 任务按钮点击事件
var questsBtn = document.getElementById('quests-btn');
var questsContainer = document.getElementById('daily-quests-container');
var questsVisible = false;

if (questsBtn && questsContainer) {
    questsBtn.onclick = function() {
        questsVisible = !questsVisible;
        if (questsVisible) {
            if (typeof renderDailyQuestsPanel === 'function') {
                questsContainer.innerHTML = renderDailyQuestsPanel();
            }
            questsContainer.style.display = 'block';
        } else {
            questsContainer.style.display = 'none';
        }
    };

    // 初始化时检查重置
    if (typeof checkDailyReset === 'function') {
        checkDailyReset();
    }
}

// 处理成就检测（在答题后调用）
function processAchievements(isCorrect) {
    if (typeof checkAndUpdateAchievements !== 'function') return;

    // 获取搭档名称
    var partnerName = null;
    if (players && players.length > 1) {
        var otherPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        partnerName = players[otherPlayerIndex].name;
    }

    var newAchievements = checkAndUpdateAchievements(isCorrect, partnerName);

    // 显示新解锁的成就
    if (newAchievements && newAchievements.length > 0) {
        if (window.SoundSystem) SoundSystem.playAchievement();
        for (var i = 0; i < newAchievements.length; i++) {
            setTimeout(function(ach) {
                return function() {
                    showAchievementUnlock(ach);
                };
            }(newAchievements[i]), i * 2000);
        }
    }

    // 处理每日任务
    if (typeof processDailyQuests === 'function') {
        processDailyQuests(isCorrect, consecutiveCorrect);
    }
}

function createConfetti(count) {
    if (count === undefined) count = 20;
    const container = document.getElementById('confetti-container');
    var colors = ['#58cc02', '#1cb0f6', '#ffcb00', '#ff4b4b'];
    for (var i = 0; i < count; i++) {
        var el = document.createElement('div');
        el.className = 'confetti';
        el.style.left = Math.random() * 100 + 'vw';
        el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        el.style.animation = `fall ${Math.random() * 1 + 1}s linear forwards`;
        el.style.webkitAnimation = `fall ${Math.random() * 1 + 1}s linear forwards`;
        container.appendChild(el);
        setTimeout(() => {
            if (container.contains(el)) container.removeChild(el);
        }, 2000);
    }
}
