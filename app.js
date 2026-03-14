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

// Student <-> Teacher Sync
let lastTeacherCommandTime = 0;

setInterval(() => {
    const cmdStr = localStorage.getItem('teacherCommand');
    if (cmdStr) {
        const cmd = JSON.parse(cmdStr);
        if (cmd.timestamp > lastTeacherCommandTime) {
            lastTeacherCommandTime = cmd.timestamp;
            handleTeacherCommand(cmd);
        }
    }
}, 1500);

function handleTeacherCommand(cmd) {
    if (cmd.action === 'start') {
        const modScreen = document.getElementById('module-screen');
        const gameScreen = document.getElementById('game-screen');
        
        if (modScreen.classList.contains('active') || gameScreen.classList.contains('active')) {
            currentModule = cmd.module;
            currentPhase = cmd.phase; // pretest or practice
            
            // Skip directly to game screen
            document.getElementById('login-screen').classList.remove('active');
            modScreen.classList.remove('active');
            startGame();
        }
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
        timestamp: Date.now()
    };
    
    if (id1) localStorage.setItem(`studentProgress_${id1}`, JSON.stringify(progressData));
    if (id2) {
        const progressData2 = { 
            ...progressData, 
            studentId: id2, 
            studentName: name2, 
            partnerId: id1, 
            partnerName: name1 
        };
        localStorage.setItem(`studentProgress_${id2}`, JSON.stringify(progressData2));
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
const feedbackMap = {
    success: [
        { en: 'Great!', cn: '🎉 太棒了！' },
        { en: 'Awesome!', cn: '⭐ 真厉害！' },
        { en: 'Good job!', cn: '👏 好极了！' },
        { en: 'Perfect!', cn: '✨ 完美！' },
        { en: 'Well done!', cn: '🌟 做得好！' },
        { en: 'Excellent!', cn: '💯 太棒了！' }
    ],
    encourage: [
        { en: 'Try again!', cn: '💪 再试一次！' },
        { en: 'Almost!', cn: '🤔 差一点！' },
        { en: 'Keep going!', cn: '😊 继续加油！' },
        { en: 'You can do it!', cn: '👊 你可以的！' }
    ]
};

function showFeedbackText(isCorrect) {
    const list = isCorrect ? feedbackMap.success : feedbackMap.encourage;
    const item = list[Math.floor(Math.random() * list.length)];

    const feedback = document.createElement('div');
    feedback.className = 'floating-feedback ' + (isCorrect ? 'success' : 'encourage');
    feedback.textContent = item.cn;  // 屏幕显示中文
    document.body.appendChild(feedback);

    setTimeout(() => {
        if (document.body.contains(feedback)) {
            document.body.removeChild(feedback);
        }
    }, 1500);
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

// Render student list
const studentListEl = document.getElementById('student-list');
students.forEach(name => {
    const el = document.createElement('div');
    el.className = 'student-card';
    el.textContent = name;
    el.onclick = () => toggleStudent(name, el);
    studentListEl.appendChild(el);
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
}

function getQuestions(module, phase) {
    return currentLessonData[module][phase] || [];
}

// Step 1: Click "下一步" to go to module selection
nextBtn.onclick = function() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    players = selectedStudents.map(n => ({ name: n, stars: 0 }));

    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('module-screen').classList.add('active');
};

// Step 2: Click module card to start pretest
document.querySelectorAll('.module-card').forEach(card => {
    card.onclick = function() {
        currentModule = this.dataset.module;
        currentPhase = 'pretest'; // Always start with pretest
        startGame();
    };
});

function startGame() {
    document.getElementById('player1-ui').querySelector('.name').textContent = players[0].name;
    document.getElementById('player2-ui').querySelector('.name').textContent = players[1].name;

    moduleQuestions = getQuestions(currentModule, currentPhase);
    currentQuestionIndex = 0;
    currentPlayerIndex = 0;

    document.getElementById('module-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');

    // Show phase indicator
    updatePhaseIndicator();
    renderQuestion();
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

    const moduleNames = {
        listening: '听力',
        reading: '阅读',
        writing: '写作',
        speaking: '口语'
    };
    const phaseNames = {
        pretest: '前测',
        practice: '练习'
    };

    indicator.textContent = `${moduleNames[currentModule]} - ${phaseNames[currentPhase]}`;
}

function renderQuestion() {
    isAnimating = false;
    updateHeader();

    // Check if we reached the end of current phase
    if (currentQuestionIndex >= moduleQuestions.length) {
        if (currentPhase === 'pretest') {
            // Pretest done, start practice
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

    // Update turn indicator (in header area)
    const currentPlayerName = players[currentPlayerIndex].name.replace(/^\d+\.\s*/, '');
    document.getElementById('turn-indicator').innerHTML = `👉 请 <strong>${currentPlayerName}</strong> 同学回答`;

    // Progress bar
    document.getElementById('progress-fill').style.width = ((currentQuestionIndex) / moduleQuestions.length * 100) + '%';

    // Progress text (简洁版，在头像中间)
    document.getElementById('question-progress').textContent = `${currentQuestionIndex + 1}/${moduleQuestions.length}`;

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
    
    syncStudentProgress();
}

function showTransition() {
    const container = document.getElementById('question-container');
    container.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 60px; margin-bottom: 20px;">🎉</div>
            <h2>前测完成！</h2>
            <p style="font-size: 20px; color: #666;">准备开始练习...</p>
        </div>
    `;

    createConfetti(30);

    setTimeout(() => {
        currentPhase = 'practice';
        moduleQuestions = getQuestions(currentModule, currentPhase);
        currentQuestionIndex = 0;
        updatePhaseIndicator();
        renderQuestion();
    }, 2000);
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

    if (isCorrect) {
        if (cardEl) cardEl.classList.add('correct');
        playSuccessSound();
        showFeedbackText(true);   // 屏幕显示中文
        speakFeedback(true);      // 语音说英文
        resetHintLevel();

        // 答对时显示正确答案+中文翻译（加深学习印象）
        const q = moduleQuestions[currentQuestionIndex];
        if (q) {
            showCorrectAnswerWithTranslation(q);
        }

        // 延迟进入下一题，让学生看清答案
        setTimeout(() => {
            hideCorrectAnswerDisplay();
            onCorrect();
        }, 2000);
    } else {
        if (cardEl) cardEl.classList.add('wrong');
        playWrongSound();
        showFeedbackText(false);  // 屏幕显示中文
        speakFeedback(false);     // 语音说英文

        // 答错才显示提示（分层提示）
        const q = moduleQuestions[currentQuestionIndex];
        if (q && q.audio) {
            const hint = getHint(q.audio);
            if (hint) {
                showProgressiveHint(hint, wrongAttempts);
            }
        }
        increaseHintLevel();

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
function showCorrectAnswerWithTranslation(q) {
    let display = document.getElementById('correct-answer-display');
    if (!display) {
        display = document.createElement('div');
        display.id = 'correct-answer-display';
        display.className = 'correct-answer-display';
        document.getElementById('question-container').appendChild(display);
    }

    // 获取英文内容和中文翻译
    let english = q.audio || q.word || q.sentence || '';
    let chinese = q.chinese || '';

    if (english && chinese) {
        display.innerHTML = `
            <div class="answer-english">${english}</div>
            <div class="answer-chinese">${chinese}</div>
        `;
    } else if (english) {
        display.innerHTML = `<div class="answer-english">${english}</div>`;
    }

    display.style.display = 'block';
}

function hideCorrectAnswerDisplay() {
    const display = document.getElementById('correct-answer-display');
    if (display) {
        display.style.display = 'none';
    }
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
    document.getElementById('progress-fill').style.width = '100%';

    // Show final scores
    const finishStars = document.getElementById('finish-stars');
    finishStars.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div>${players[0].name}: ⭐ ${players[0].stars}</div>
            <div>${players[1].name}: ⭐ ${players[1].stars}</div>
        </div>
    `;

    createConfetti(50);
    syncStudentProgress(true);
}

function createConfetti(count = 20) {
    const container = document.getElementById('confetti-container');
    const colors = ['#58cc02', '#1cb0f6', '#ffcb00', '#ff4b4b'];
    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
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
