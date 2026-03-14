// teacher.js
// Logic for Merry Teacher Dashboard

document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;
    if (page === 'prepare') initPreparePage();
    if (page === 'control') initControlPage();
    if (page === 'feedback') initFeedbackPage();
    if (page === 'dashboard') initDashboardPage();
});

// --- STATE ---
let currentLesson = 'U1L1';
let currentModule = 'listening';
let currentPhase = 'pretest';

// --- PREPARE PAGE ---
function initPreparePage() {
    renderObjectives(currentLesson);
    renderObservationList();

    // Module Selector Logic
    const modSelectors = document.querySelectorAll('.module-select');
    modSelectors.forEach(el => {
        el.onclick = () => {
            modSelectors.forEach(m => {
                m.classList.remove('active');
                m.innerHTML = m.innerHTML.replace('<br>✓', '<br>&nbsp;');
            });
            el.classList.add('active');
            el.innerHTML = el.innerHTML.replace('<br>&nbsp;', '<br>✓');
            currentModule = el.dataset.mod;
        };
    });

    // Start Class
    document.getElementById('btn-start-class').onclick = () => {
        // Publish command to student app
        localStorage.setItem('teacherCommand', JSON.stringify({
            action: 'start',
            module: currentModule,
            phase: 'pretest', // Start with pretest by default
            lesson: currentLesson,
            timestamp: Date.now()
        }));
        // Navigate to control
        window.location.href = 'control.html';
    };
}

function renderObjectives(lessonId) {
    const data = lessonObjectives[lessonId];
    if(!data) return;

    const container = document.getElementById('objectives-container');
    container.innerHTML = `
        <h3 class="card-title">📖 教学目标</h3>
        <h4 style="margin-top:0; color:var(--teacher-primary)">${data.title}</h4>
        
        <div style="margin-bottom: 10px;">
            <strong>教学目标：</strong>
            <ol class="info-list">
                ${data.objectives.map(o => `<li>${o}</li>`).join('')}
            </ol>
        </div>

        <div style="margin-bottom: 10px;">
            <strong>核心词汇：</strong>
            <div style="background:var(--teacher-bg); padding:10px; border-radius:8px; font-weight:bold; color:#f26622;">
                ${data.vocabulary.map(v => `${v.word} ${v.chinese}`).join(' | ')}
            </div>
        </div>
        
        <div style="margin-bottom: 10px;">
            <strong>核心句型：</strong>
            <ul class="info-list">
                ${data.sentences.map(s => `<li>${s.en} ${s.cn}</li>`).join('')}
            </ul>
        </div>
    `;
}

function renderObservationList() {
    const group = getTodayObservationGroup();
    const container = document.getElementById('observation-list');
    container.innerHTML = group.map(student => `
        <div class="name-item">
            <label><input type="checkbox" checked disabled> ${student.id}. ${student.name}</label>
        </div>
    `).join('');
}

// --- CONTROL PAGE ---
function initControlPage() {
    const lastCmdStr = localStorage.getItem('teacherCommand');
    if (lastCmdStr) {
        const cmd = JSON.parse(lastCmdStr);
        document.getElementById('display-module').textContent = getModuleChinese(cmd.module) + ' - ' + (cmd.phase === 'pretest' ? '前测' : '实战');
        currentModule = cmd.module;
        currentPhase = cmd.phase;
    }

    // Timer logic
    let seconds = 0;
    const timerEl = document.getElementById('timer-display');
    setInterval(() => {
        seconds++;
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        timerEl.textContent = `⏱️ ${m}:${s}`;
    }, 1000);

    // Poll student progress
    setInterval(pollStudentProgress, 2000);
    pollStudentProgress();

    // Pause button
    document.getElementById('btn-pause').onclick = function() {
        const isPaused = this.textContent.includes('继续');
        const cmd = JSON.parse(localStorage.getItem('teacherCommand') || '{}');
        cmd.action = isPaused ? 'start' : 'pause';
        cmd.timestamp = Date.now();
        localStorage.setItem('teacherCommand', JSON.stringify(cmd));
        this.innerHTML = isPaused ? '📢 暂停' : '▶️ 继续';
        this.className = isPaused ? 'teacher-btn btn-warning' : 'teacher-btn btn-success';
    };

    // Next Phase Button
    document.getElementById('btn-next').onclick = () => {
        const cmd = JSON.parse(localStorage.getItem('teacherCommand') || '{}');
        cmd.phase = cmd.phase === 'pretest' ? 'practice' : 'pretest';
        cmd.action = 'start';
        cmd.timestamp = Date.now();
        localStorage.setItem('teacherCommand', JSON.stringify(cmd));
        window.location.reload(); // Reload to update UI
    };
}

function pollStudentProgress() {
    const allProgress = [];
    for (let i = 1; i <= 27; i++) {
        const p = localStorage.getItem(`studentProgress_${i}`);
        if (p) allProgress.push(JSON.parse(p));
    }
    
    // Group by active pairing (assuming progress contains names and identities)
    updateRankingDisplay(allProgress);
    updateCompletionDisplay(allProgress);
}

function updateRankingDisplay(allProgress) {
    // Sort by stars descending
    allProgress.sort((a, b) => b.stars - a.stars);
    
    // Limit to top 5 (hide bottom 3 pairs as per PRD)
    const topProgress = allProgress.slice(0, 5);
    
    const container = document.getElementById('ranking-list');
    if(topProgress.length === 0) {
        container.innerHTML = '<div style="color:var(--teacher-text-light); text-align:center; padding: 20px;">等待数据...</div>';
        return;
    }
    
    const medals = ['🥇', '🥈', '🥉', '4.', '5.'];
    container.innerHTML = topProgress.map((p, idx) => `
        <div class="ranking-item">
            <div class="r-rank">${medals[idx]}</div>
            <div class="r-names">${p.studentId}.${p.studentName} ${p.partnerName ? `& ${p.partnerName}` : ''}</div>
            <div class="r-score">⭐ ${p.stars || 0}</div>
        </div>
    `).join('');
}

function updateCompletionDisplay(allProgress) {
    if(allProgress.length === 0) return;
    
    let completeCount = 0;
    const incomplete = [];
    
    allProgress.forEach(p => {
        if (p.completed) {
            completeCount++;
        } else {
            incomplete.push(p);
        }
    });

    // Approximate total groups (assuming pairs)
    const totalGroups = Math.ceil(27 / 2);
    const progressPercent = Math.min(100, (completeCount / totalGroups) * 100);
    
    document.getElementById('completion-bar-fill').style.width = `${progressPercent}%`;
    document.getElementById('completion-text').textContent = `${completeCount}/${totalGroups}组`;
    
    const incompleteContainer = document.getElementById('incomplete-list');
    if (incomplete.length === 0) {
        incompleteContainer.innerHTML = '<li>全部完成！🎉</li>';
    } else {
        incompleteContainer.innerHTML = incomplete.map(p => 
            `<li>• ${p.studentName}组 (第${p.currentQuestion || 0}/${p.totalQuestions || 0}题)</li>`
        ).join('');
    }
}

// --- HELPER ---
function getModuleChinese(mod) {
    const map = { listening: '听力', reading: '阅读', writing: '写作', speaking: '口语' };
    return map[mod] || mod;
}
