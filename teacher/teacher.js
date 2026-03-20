// teacher.js
// Logic for Merry Teacher Dashboard

document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;
    if (page === 'prepare') initPreparePage();
    if (page === 'control') initControlPage();
    if (page === 'feedback') initFeedbackPage();
    if (page === 'dashboard') initDashboardPage();
});

// --- STATE（从localStorage恢复上次选择）---
let savedLesson = {};
try {
    savedLesson = JSON.parse(localStorage.getItem('currentLesson') || '{}');
} catch (e) { savedLesson = {}; }

let currentLesson = savedLesson.unit && savedLesson.lesson
    ? `U${savedLesson.unit}L${savedLesson.lesson}`
    : 'U1L1';
let currentModule = savedLesson.module || 'listening';
let currentPhase = 'pretest';

// 从 Sync 引擎拉取最近一次的教师指令
Sync.listenTeacherCommand(cmd => {
    if (cmd && cmd.phase) currentPhase = cmd.phase;
});

// 根据单元和课时更新 currentLesson ID
function updateCurrentLesson() {
    const unitEl = document.getElementById('unit-select');
    const lessonEl = document.getElementById('lesson-select');
    const unitVal = unitEl ? unitEl.value : '1';
    const lessonVal = lessonEl ? lessonEl.value : '1';
    currentLesson = `U${unitVal}L${lessonVal}`;
    renderObjectives(currentLesson);
}

// --- PREPARE PAGE ---
function initPreparePage() {
    // 恢复上次选择的单元和课时
    if (savedLesson.unit) {
        const unitEl = document.getElementById('unit-select');
        if (unitEl) unitEl.value = String(savedLesson.unit);
    }
    if (savedLesson.lesson) {
        const lessonEl = document.getElementById('lesson-select');
        if (lessonEl) lessonEl.value = String(savedLesson.lesson);
    }

    // 恢复模块选择
    if (currentModule) {
        const modSelectors = document.querySelectorAll('.module-select');
        modSelectors.forEach(el => {
            el.classList.remove('active');
            el.innerHTML = el.innerHTML.replace('<br>✓', '<br>&nbsp;');
            if (el.dataset.mod === currentModule) {
                el.classList.add('active');
                el.innerHTML = el.innerHTML.replace('<br>&nbsp;', '<br>✓');
            }
        });
    }

    // 恢复阶段选择
    if (currentPhase) {
        const phaseSelectors = document.querySelectorAll('.phase-select');
        phaseSelectors.forEach(el => {
            el.classList.remove('active');
            if (el.dataset.phase === currentPhase) {
                el.classList.add('active');
            }
        });
    }

    renderObjectives(currentLesson);
    renderObservationList();
    renderHomeworkCheckList();
    renderLastHomeworkIncomplete();
    // 强制同步一次界面内容保证和 DOM element 绝对一致
    updateCurrentLesson();

    // 监听单元和课时选择变化，更新教学目标（防止老设备兼容性问题，用 onchange + addEventListener 且加上 input）
    const unitSelect = document.getElementById('unit-select');
    const lessonSelect = document.getElementById('lesson-select');
    if (unitSelect) {
        unitSelect.onchange = updateCurrentLesson;
        unitSelect.addEventListener('input', updateCurrentLesson);
    }
    if (lessonSelect) {
        lessonSelect.onchange = updateCurrentLesson;
        lessonSelect.addEventListener('input', updateCurrentLesson);
    }

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
            renderObjectives(currentLesson); // 切换模块时重新渲染目标
        };
    });

    // Phase Selector Logic (前测/实战)
    const phaseSelectors = document.querySelectorAll('.phase-select');
    phaseSelectors.forEach(el => {
        el.onclick = () => {
            phaseSelectors.forEach(p => p.classList.remove('active'));
            el.classList.add('active');
            currentPhase = el.dataset.phase;
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
        
        Sync.setCurrentLesson(currentLessonObj);

        // Publish command to student app via Sync engine
        Sync.sendTeacherCommand({
            action: 'start',
            module: currentModule,
            phase: currentPhase, // 使用选择的阶段（前测/实战）
            lesson: currentLesson,
            timeLimit: timeLimit,
            timestamp: Date.now()
        });
        
        // Navigate to control
        window.location.href = 'control.html';
    };
}

function renderObjectives(lessonId) {
    const data = lessonObjectives[lessonId];
    if(!data) return;

    const modNames = { listening: '听力', reading: '阅读', writing: '写作', speaking: '口语' };
    const modName = modNames[currentModule] || '听力';
    let moduleObjHtml = '';
    
    if (data.moduleObjectives && data.moduleObjectives[currentModule]) {
        moduleObjHtml = `
            <div style="margin-bottom: 10px; background-color: #f0f7ff; padding: 10px; border-radius: 8px; border-left: 4px solid var(--teacher-primary);">
                <strong style="color: var(--teacher-primary);">📍 ${modName}模块目标：</strong>
                <ol class="info-list" style="margin-top: 5px;">
                    ${data.moduleObjectives[currentModule].map(o => `<li>${o}</li>`).join('')}
                </ol>
            </div>
        `;
    } else {
        moduleObjHtml = `
            <div style="margin-bottom: 10px; background-color: #f0f7ff; padding: 10px; border-radius: 8px; border-left: 4px solid var(--teacher-primary);">
                <strong style="color: var(--teacher-primary);">📍 ${modName}模块目标：</strong>
                <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">（掌握本课通用目标并进行${modName}专项训练）</p>
            </div>
        `;
    }

    const container = document.getElementById('objectives-container');
    container.innerHTML = `
        <h3 class="card-title">📖 教学目标</h3>
        <h4 style="margin-top:0; color:var(--teacher-primary)">${data.title}</h4>
        
        ${moduleObjHtml}

        <div style="margin-bottom: 10px;">
            <strong>本课通用目标：</strong>
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

// --- HOMEWORK CHECK ---
function renderHomeworkCheckList() {
    const container = document.getElementById('homework-check-list');
    const dotsContainer = document.getElementById('hw-page-dots');
    if (!container) return;
    
    // 获取所有的学生 (27人)
    const allStudents = [];
    if (typeof observationGroups !== 'undefined') {
        observationGroups.forEach(group => {
            group.forEach(s => allStudents.push(s));
        });
        allStudents.sort((a, b) => a.id - b.id); // 按学号排序
    }

    container.innerHTML = '';
    if (dotsContainer) dotsContainer.innerHTML = '';

    const STUDENTS_PER_PAGE = 12; // 3列x4行
    const totalPages = Math.ceil(allStudents.length / STUDENTS_PER_PAGE);

    for (let page = 0; page < totalPages; page++) {
        const pageEl = document.createElement('div');
        pageEl.className = 'hw-page';

        const startIdx = page * STUDENTS_PER_PAGE;
        const endIdx = Math.min(startIdx + STUDENTS_PER_PAGE, allStudents.length);

        for (let i = startIdx; i < endIdx; i++) {
            const student = allStudents[i];
            const cardEl = document.createElement('div');
            cardEl.className = 'hw-student-card';
            cardEl.dataset.id = student.id;
            cardEl.dataset.name = student.name;
            cardEl.textContent = `${student.id}. ${student.name}`;
            cardEl.onclick = () => toggleHomeworkStatus(cardEl);
            pageEl.appendChild(cardEl);
        }
        
        container.appendChild(pageEl);

        // 创建页码点
        if (dotsContainer) {
            const dot = document.createElement('div');
            dot.className = `hw-page-dot ${page === 0 ? 'active' : ''}`;
            dotsContainer.appendChild(dot);
        }
    }

    // 监听滑动更新点点
    container.addEventListener('scroll', () => {
        if (!dotsContainer) return;
        const scrollLeft = container.scrollLeft;
        const pageIndex = Math.round(scrollLeft / container.clientWidth);
        const dots = dotsContainer.querySelectorAll('.hw-page-dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === pageIndex);
        });
    });

    // 绑定保存按钮
    const saveBtn = document.getElementById('btn-save-homework');
    if (saveBtn) {
        saveBtn.onclick = saveHomeworkCheck;
    }
}

function toggleHomeworkStatus(element) {
    element.classList.toggle('incomplete');
}

function saveHomeworkCheck() {
    const incompleteCards = document.querySelectorAll('.hw-student-card.incomplete');
    const incompleteStudents = Array.from(incompleteCards).map(card => ({
        id: card.dataset.id,
        name: card.dataset.name
    }));

    localStorage.setItem('homeworkIncomplete', JSON.stringify(incompleteStudents));
    
    // 视觉反馈
    const btn = document.getElementById('btn-save-homework');
    const originalText = btn.innerHTML;
    btn.innerHTML = '✅ 提交成功！';
    btn.style.backgroundColor = '#2ecc71';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.backgroundColor = '';
        renderLastHomeworkIncomplete(); // 更新上方显示
    }, 2000);
}

function renderLastHomeworkIncomplete() {
    const container = document.getElementById('last-homework-incomplete');
    if (!container) return;

    Sync.getHomeworkRecordsOnce().then(records => {
        try {
            // Find most recent homework check intuitively or return all flat array
            // Here we assume it's simply an array if they didn't implement the date-key structure correctly yet
            let saved = [];
            if (Array.isArray(records)) {
                saved = records;
            } else {
                // If it's an object, flatten to get the latest missing students
                let latestDate = '';
                for (let key in records) {
                    if (key > latestDate) {
                        latestDate = key;
                        saved = records[key];
                    }
                }
            }
            // fallback structure compatibility
            if (!Array.isArray(saved)) {
                 saved = JSON.parse(localStorage.getItem('homeworkIncomplete') || '[]');
            }
            
            if (saved.length === 0) {
                container.innerHTML = '<p style="color:var(--teacher-success); font-size:14px; font-weight:bold;">🎉 上节课全班都交齐了作业！</p>';
            } else {
                container.innerHTML = saved.map(s => 
                    `<span class="hw-incomplete-badge">${s.id}. ${s.name}</span>`
                ).join('');
            }
        } catch (e) {
            container.innerHTML = '<p style="color:#888; font-size:14px;">暂无记录</p>';
        }
    });
}

// --- CONTROL PAGE ---
function initControlPage() {
    Sync.listenTeacherCommand(cmd => {
        if (cmd && cmd.module) {
            document.getElementById('display-module').textContent = getModuleChinese(cmd.module) + ' - ' + (cmd.phase === 'pretest' ? '前测' : '实战');
            currentModule = cmd.module;
            currentPhase = cmd.phase;
        }
    });

    // Timer logic
    let seconds = 0;
    const timerEl = document.getElementById('timer-display');
    setInterval(() => {
        seconds++;
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        timerEl.textContent = `⏱️ ${m}:${s}`;
    }, 1000);

    // 显示未交作业
    const hwContainer = document.getElementById('control-homework-incomplete');
    if (hwContainer) {
        try {
            const saved = JSON.parse(localStorage.getItem('homeworkIncomplete') || '[]');
            if (saved.length === 0) {
                hwContainer.innerHTML = '<div style="text-align:center; padding:10px;"><p style="color:var(--teacher-success); font-size:14px; font-weight:bold; margin:0;">🎉 全班交齐作业！</p></div>';
            } else {
                hwContainer.innerHTML = '<div style="display:flex; flex-wrap:wrap; justify-content:center; padding-top:10px;">' + 
                    saved.map(s => `<span class="hw-incomplete-badge" style="margin-bottom:5px;">${s.id}. ${s.name}</span>`).join('') +
                    '</div>';
            }
        } catch (e) {
            hwContainer.innerHTML = '<p style="color:#888; font-size:14px; text-align:center;">暂无记录</p>';
        }
    }

    // Poll student progress
    setInterval(pollStudentProgress, 2000);
    pollStudentProgress();

    // Pause button
    document.getElementById('btn-pause').onclick = function() {
        const isPaused = this.textContent.includes('继续');
        Sync.sendTeacherCommand({
            action: isPaused ? 'start' : 'pause',
            module: currentModule,
            phase: currentPhase,
            timestamp: Date.now()
        });
        this.innerHTML = isPaused ? '📢 暂停' : '▶️ 继续';
        this.className = isPaused ? 'teacher-btn btn-warning' : 'teacher-btn btn-success';
    };

    // Next Phase Button
    document.getElementById('btn-next').onclick = () => {
        currentPhase = currentPhase === 'pretest' ? 'practice' : 'pretest';
        Sync.sendTeacherCommand({
            action: 'start',
            module: currentModule,
            phase: currentPhase,
            timestamp: Date.now()
        });
        window.location.reload(); // Reload to update UI
    };
}

async function pollStudentProgress() {
    const allProgress = [];
    for (let i = 1; i <= 27; i++) {
        const p = await Sync.getDashboardDataOnce(`studentProgress_${i}`);
        if (p) {
            // Because previous raw storage was string but Firebase returns object directly,
            // the Sync wrapper for localStorage also returns object.
            allProgress.push(p);
        }
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
async function initDashboardPage() {
    let allProgress = [];
    for (let i = 1; i <= 27; i++) {
        const pObj = await Sync.getDashboardDataOnce('studentProgress_' + i);
        if (pObj) {
            allProgress.push(pObj);
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
                <div style="display:flex; flex-wrap:wrap; margin-top:10px; margin:-5px;">
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

async function downloadCSV() {
    let allProgress = [];
    for (let i = 1; i <= 27; i++) {
        let pObj = null;
        if (Sync && typeof Sync.getDashboardDataOnce === 'function') {
            try {
                pObj = await Sync.getDashboardDataOnce('studentProgress_' + i);
            } catch (e) {
                pObj = null;
            }
        } else {
            const p = localStorage.getItem('studentProgress_' + i);
            if (p) {
                try {
                    pObj = JSON.parse(p);
                } catch (e) {
                    pObj = null;
                }
            }
        }
        if (pObj) allProgress.push(pObj);
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
