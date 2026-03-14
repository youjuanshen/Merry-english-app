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

// Module Control
let currentModule = 'listening';
let currentPhase = 'pretest'; // pretest -> practice
let currentLessonData = lesson1;
let moduleQuestions = [];

// Chinese vocabulary helper
const vocabulary = {
    // Animals
    'bear': '熊', 'horse': '马', 'bird': '鸟', 'panda': '熊猫',
    'animal': '动物', 'animals': '动物们',
    // Adjectives
    'big': '大的', 'small': '小的', 'cute': '可爱的', 'fast': '快的',
    'beautiful': '美丽的', 'red': '红色', 'blue': '蓝色',
    'black': '黑色', 'white': '白色',
    // Sentences
    'This is a bear.': '这是一只熊。',
    'That is a horse.': '那是一匹马。',
    'This is a bird.': '这是一只鸟。',
    'That is a panda.': '那是一只熊猫。',
    'It\'s big.': '它很大。',
    'It\'s cute.': '它很可爱。',
    'It can run fast.': '它跑得很快。',
    'They are beautiful.': '它们很美丽。',
    'It\'s black and white.': '它是黑白色的。',
    'This is a red bird.': '这是一只红色的鸟。',
    'What\'s this?': '这是什么？',
    'What\'s that?': '那是什么？',
    'Is it big?': '它大吗？',
    'Is it cute?': '它可爱吗？',
    'Yes': '是的', 'No': '不是'
};

function getChineseHint(english) {
    return vocabulary[english] || '';
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

// Voice encouragement
const successPhrases = ['太棒了！', '真厉害！', '你真棒！', '继续加油！', '非常好！', '好极了！'];
const tryAgainPhrases = ['再想想！', '加油！', '没关系！', '再试一次！', '你可以的！'];

function speakEncouragement(isCorrect) {
    if ('speechSynthesis' in window) {
        const phrases = isCorrect ? successPhrases : tryAgainPhrases;
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        const utterance = new SpeechSynthesisUtterance(phrase);
        utterance.lang = 'zh-CN';
        utterance.rate = 1.1;
        window.speechSynthesis.speak(utterance);
    }
}

// Show floating feedback text
function showFeedbackText(isCorrect) {
    const text = isCorrect ? ['🎉 太棒了！', '⭐ 真厉害！', '👏 好极了！'][Math.floor(Math.random() * 3)]
                           : ['💪 加油！', '🤔 再想想！', '😊 没关系！'][Math.floor(Math.random() * 3)];

    const feedback = document.createElement('div');
    feedback.className = 'floating-feedback ' + (isCorrect ? 'success' : 'encourage');
    feedback.textContent = text;
    document.body.appendChild(feedback);

    setTimeout(() => {
        if (document.body.contains(feedback)) {
            document.body.removeChild(feedback);
        }
    }, 1500);
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

    // Progress
    document.getElementById('progress-fill').style.width = ((currentQuestionIndex) / moduleQuestions.length * 100) + '%';

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
        showFeedbackText(true);
        speakEncouragement(true);
        onCorrect();
    } else {
        if (cardEl) cardEl.classList.add('wrong');
        playWrongSound();
        showFeedbackText(false);
        speakEncouragement(false);

        // Show correct answer hint if provided
        if (correctAnswer !== null) {
            showCorrectHint(correctAnswer);
        }

        setTimeout(() => {
            if (cardEl) cardEl.classList.remove('wrong');
            hideCorrectHint();
            isAnimating = false;
        }, 2000);
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
}

function onCorrect() {
    players[currentPlayerIndex].stars += 1;
    updateHeader();
    createConfetti(15);

    setTimeout(() => {
        currentPlayerIndex = (currentPlayerIndex + 1) % 2;
        currentQuestionIndex++;
        renderQuestion();
    }, 1500);
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
