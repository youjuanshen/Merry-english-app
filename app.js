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
let currentPhase = 'pretest';
let currentLessonData = lesson1;
let moduleQuestions = [];

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
}

function playWrongSound() {
    playTone(300, 'sawtooth', 0.3);
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

const startBtn = document.getElementById('start-btn');
const moduleSelect = document.getElementById('module-select');
const phaseRadios = document.querySelectorAll('input[name="phase"]');

function toggleStudent(name, el) {
    if (selectedStudents.includes(name)) {
        selectedStudents = selectedStudents.filter(n => n !== name);
        el.classList.remove('selected');
    } else {
        if (selectedStudents.length >= 2) return; // Max 2
        selectedStudents.push(name);
        el.classList.add('selected');
    }
    startBtn.disabled = selectedStudents.length !== 2;
}

function getQuestions(module, phase) {
    return currentLessonData[module][phase] || [];
}

startBtn.onclick = startGame;

function startGame() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    players = selectedStudents.map(n => ({ name: n, stars: 0 }));
    document.getElementById('player1-ui').querySelector('.name').textContent = players[0].name;
    document.getElementById('player2-ui').querySelector('.name').textContent = players[1].name;

    currentModule = moduleSelect.value;
    currentPhase = Array.from(phaseRadios).find(r => r.checked).value;
    moduleQuestions = getQuestions(currentModule, currentPhase);
    currentQuestionIndex = 0;

    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');

    renderQuestion();
}

function renderQuestion() {
    isAnimating = false;
    updateHeader();
    
    // Check if we reached the end
    if (currentQuestionIndex >= moduleQuestions.length) {
        showFinishScreen();
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

function updateHeader() {
    document.getElementById('player1-ui').classList.toggle('active-player', currentPlayerIndex === 0);
    document.getElementById('player2-ui').classList.toggle('active-player', currentPlayerIndex === 1);
    document.getElementById('player1-ui').querySelector('.stars').innerHTML = `⭐ ${players[0].stars}`;
    document.getElementById('player2-ui').querySelector('.stars').innerHTML = `⭐ ${players[1].stars}`;
}

function handleAnswer(isCorrect, cardEl = null) {
    if(isAnimating) return;
    isAnimating = true;

    if (isCorrect) {
        if (cardEl) cardEl.classList.add('correct');
        playSuccessSound();
        onCorrect();
    } else {
        if (cardEl) cardEl.classList.add('wrong');
        playWrongSound();
        setTimeout(() => {
            if (cardEl) cardEl.classList.remove('wrong');
            isAnimating = false;
        }, 1000);
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
