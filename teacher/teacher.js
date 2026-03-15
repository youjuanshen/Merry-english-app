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
        const timeLimitEl = document.getElementById('time-limit-select');
        const timeLimit = parseInt(timeLimitEl ? timeLimitEl.value : 0) || 0;

        const unitEl = document.getElementById('unit-select');
        const lessonEl = document.getElementById('lesson-select');
        const unitVal = unitEl ? unitEl.value : '1';
        const lessonVal = lessonEl ? lessonEl.value : '1';
        
        const unitSelect = document.getElementById('unit-select');
        const lessonSelect = document.getElementById('lesson-select');
        const unitText = unitSelect ? unitSelect.options[unitSelect.selectedIndex].text : `Unit ${unitVal}`;
        const lessonText = lessonSelect ? lessonSelect.options[lessonSelect.selectedIndex].text.split(':')[0] : `Lesson ${lessonVal}`;
        const moduleText = getModuleChinese(currentModule);
        
        const currentLessonObj = {
          unit: parseInt(unitVal),
          lesson: parseInt(lessonVal),
          module: currentModule,
          displayName: `${unitText} ${lessonText} - ${moduleText}`
        };
        
        localStorage.setItem('currentLesson', JSON.stringify(currentLessonObj));

        // Publish command to student app
        localStorage.setItem('teacherCommand', JSON.stringify({
            action: 'start',
            module: currentModule,
            phase: 'pretest', // Start with pretest by default
            lesson: currentLesson,
            timeLimit: timeLimit,
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
    
    const completeContainer = document.getElementById('complete-list');
    const incompleteContainer = document.getElementById('incomplete-list');
    
    if (completeCount === 0) {
        completeContainer.innerHTML = '<li>暂无小组完成</li>';
    } else {
        const compList = allProgress.filter(p => p.completed);
        completeContainer.innerHTML = compList.map(p => `<li>• ${p.studentName}组 (⭐ ${p.stars || 0})</li>`).join('');
    }

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

// --- DASHBOARD PAGE ---
function initDashboardPage() {
    let allProgress = [];
    if (typeof localStorage !== 'undefined') {
        for (let i = 1; i <= 27; i++) {
            const pStr = localStorage.getItem('studentProgress_' + i);
            if (pStr) {
                allProgress.push(JSON.parse(pStr));
            } else {
                let sName = 'Student ' + i;
                if (typeof observationGroups !== 'undefined') {
                    observationGroups.forEach(g => {
                        const s = g.find(st => st.id === i);
                        if (s) sName = s.name;
                    });
                }
                allProgress.push({
                    studentId: i,
                    studentName: sName,
                    completed: false,
                    correct: 0,
                    totalAnswered: 0,
                    stars: 0,
                    wrongWords: []
                });
            }
        }
    }

    // 1. Class Overview Render
    const completedCount = allProgress.filter(p => p.completed).length;
    let sumCorrect = 0, sumTotal = 0;
    allProgress.forEach(p => {
        sumCorrect += p.correct || 0;
        sumTotal += p.totalAnswered || 0;
    });
    
    const avgAcc = sumTotal > 0 ? Math.round((sumCorrect / sumTotal) * 100) : 0;
    const trendIconClass = avgAcc >= 80 ? '📈' : (avgAcc < 60 ? '📉 ⚠️' : '➡️');
    
    // Extract weak words across class
    const wordFreq = {};
    allProgress.forEach(p => {
        if (p.wrongWords) {
            p.wrongWords.forEach(w => {
                wordFreq[w] = (wordFreq[w] || 0) + 1;
            });
        }
    });
    const sortedWords = Object.entries(wordFreq).sort((a,b) => b[1] - a[1]).slice(0, 5);
    const weakWordsHtml = sortedWords.length > 0 
        ? sortedWords.map(item => `<span style="background:#fff3cd; color:#856404; padding:5px 10px; border-radius:15px; font-size:14px; border:1px solid #ffeeba;">${item[0]} (${item[1]}人错)</span>`).join(' ')
        : '<span style="color:var(--teacher-success);">全班表现优异，暂无易错词！</span>';
    
    const tabTrend = document.getElementById('tab-trend');
    if (tabTrend) {
        tabTrend.innerHTML = `
            <div class="teacher-card">
                <h3 class="card-title">🏫 班级今日概览</h3>
                <ul class="info-list">
                    <li><strong>今日完成率：</strong> ${completedCount} / 27 (${Math.round((completedCount/27)*100)}%)</li>
                    <li><strong>班级平均正确率：</strong> ${avgAcc}% ${trendIconClass}</li>
                </ul>
            </div>
            <div class="teacher-card">
                <h3 class="card-title">📖 薄弱词汇预警</h3>
                <p style="font-size:14px; color:var(--teacher-text-light);">（建议下一节课重点复习）</p>
                <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:10px;">
                    ${weakWordsHtml}
                </div>
            </div>
        `;
    }

    // 2. Student List Render
    const listContainer = document.getElementById('student-list-container');
    if (listContainer) {
        listContainer.innerHTML = allProgress.map(s => {
            const acc = s.totalAnswered > 0 ? Math.round((s.correct / s.totalAnswered) * 100) : 0;
            let icon = acc > 75 ? '📈' : (acc < 60 ? '📉 ⚠️' : '➡️');
            if (s.totalAnswered === 0) icon = '⏳ 未开始';
            
            const errList = (s.wrongWords && s.wrongWords.length > 0) 
                ? `<div style="font-size:12px; color:#e74c3c; margin-top:5px;">易错词：${s.wrongWords.join(', ')}</div>` 
                : `<div style="font-size:12px; color:#27ae60; margin-top:5px;">无明显薄弱词</div>`;

            return `
            <div class="student-list-item">
                <div class="student-avatar" style="font-size:18px;">${s.studentId}</div>
                <div class="student-info">
                    <h4 class="student-name">${s.studentName}</h4>
                    <p class="student-stats">正确率: ${s.totalAnswered > 0 ? acc + '%' : '--'} ${icon} | 总星星: ⭐ ${s.stars}</p>
                    ${s.totalAnswered > 0 ? errList : ''}
                </div>
                ${s.completed ? '<span style="color:#27ae60;font-weight:bold;font-size:12px;white-space:nowrap;">✅ 已完成</span>' : ''}
            </div>
            `;
        }).join('');
    }
}

function downloadCSV() {
    let allProgress = [];
    for (let i = 1; i <= 27; i++) {
        const p = localStorage.getItem('studentProgress_' + i);
        if (p) allProgress.push(JSON.parse(p));
    }
    
    if (allProgress.length === 0) {
        alert("暂无学生数据可导出");
        return;
    }

    let csvContent = "";
    // UTF-8 BOM helps Excel recognize Chinese correctly
    csvContent += "\uFEFF"; 
    csvContent += "学号,姓名,搭档,完成状态,答题总数,正确数,正确率,获得星星,易错词\n";
    
    allProgress.forEach(p => {
        const acc = p.totalAnswered > 0 ? Math.round((p.correct / p.totalAnswered) * 100) + '%' : '0%';
        const status = p.completed ? "已完成" : "未完成";
        const partner = p.partnerName || "无";
        const words = (p.wrongWords || []).join('; ');
        
        let rowArray = [
            p.studentId,
            p.studentName,
            partner,
            status,
            p.totalAnswered || 0,
            p.correct || 0,
            acc,
            p.stars || 0,
            words
        ];
        
        // Escape quotes and comma
        let rowStr = rowArray.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(",");
        csvContent += rowStr + "\n";
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    
    const dateStr = new Date().toISOString().split('T')[0];
    link.download = "Merry英语成绩单_" + dateStr + ".csv";
    document.body.appendChild(link);
    link.click();
    
    setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, 100);
}
