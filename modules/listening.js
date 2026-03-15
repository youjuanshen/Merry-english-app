// listening.js

function renderListeningQuestion(q, container) {
    // 喇叭按钮（紧凑，节省空间给选项）
    const playBtn = document.createElement('button');
    playBtn.className = 'play-sound-btn animate-pop';
    playBtn.innerHTML = '🔊';
    playBtn.style.width = '60px';
    playBtn.style.height = '60px';
    playBtn.style.fontSize = '32px';
    playBtn.style.marginBottom = '8px';
    playBtn.onclick = () => speakWord(q.audio);
    container.appendChild(playBtn);

    // 提示不要一开始就显示，只在答错时才显示
    // （由handleAnswer函数中的showProgressiveHint处理）

    setTimeout(() => speakWord(q.audio), 300); // Auto play

    if (q.type === 'listen_select' || q.type === 'listen_question') {
        if (q.image) {
            const imgEl = document.createElement('div');
            imgEl.style.fontSize = '80px';
            imgEl.style.marginBottom = '20px';
            imgEl.innerHTML = q.image;
            container.appendChild(imgEl);
        }

        const grid = document.createElement('div');
        grid.className = 'options-grid';
        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.innerHTML = opt;
            card.onclick = () => {
                const correctAnswer = q.options[q.correct];
                handleAnswer(idx === q.correct, card, correctAnswer);
            };
            grid.appendChild(card);
        });
        container.appendChild(grid);

    } else if (q.type === 'listen_tf') {
        // 对错题 - 充分利用空间，图片更大
        const imgEl = document.createElement('div');
        imgEl.className = 'tf-image-container';
        imgEl.innerHTML = q.image;
        container.appendChild(imgEl);

        // 两个大按钮并排 - Yes/No 英文
        const grid = document.createElement('div');
        grid.className = 'tf-options-grid';

        [['Yes', true, '#58cc02'], ['No', false, '#ff4b4b']].forEach(([label, value, color]) => {
            const card = document.createElement('div');
            card.className = 'tf-option-card';
            card.innerHTML = label;
            card.style.borderColor = color;
            card.onclick = () => {
                const correctAnswer = q.correct ? 'Yes' : 'No';
                handleAnswer(value === q.correct, card, correctAnswer);
            };
            grid.appendChild(card);
        });
        container.appendChild(grid);

    } else if (q.type === 'listen_sequence') {
        const instructionSeq = document.createElement('div');
        instructionSeq.style.textAlign = 'center';
        instructionSeq.style.marginBottom = '15px';
        instructionSeq.style.fontSize = '16px';
        instructionSeq.style.color = '#666';
        instructionSeq.textContent = '按顺序点击，排列正确顺序';
        container.appendChild(instructionSeq);

        const sortArea = document.createElement('div');
        sortArea.className = 'sort-area';
        container.appendChild(sortArea);

        const wordsContainer = document.createElement('div');
        wordsContainer.style.display = 'flex';
        wordsContainer.style.gap = '10px';
        wordsContainer.style.flexWrap = 'wrap';
        wordsContainer.style.justifyContent = 'center';

        let currentAns = [];

        q.words.forEach((word) => {
            const wordBtn = document.createElement('div');
            wordBtn.className = 'sort-word';
            wordBtn.innerHTML = word;

            const originalIndex = q.words.indexOf(word);

            wordBtn.onclick = () => {
                if (isAnimating) return;
                if (currentAns.includes(originalIndex)) return;
                wordBtn.style.opacity = '0.3';

                const cloned = document.createElement('div');
                cloned.className = 'sort-word animate-pop';
                cloned.innerHTML = word;
                cloned.onclick = () => {
                    if (isAnimating) return;
                    sortArea.removeChild(cloned);
                    wordBtn.style.opacity = '1';
                    currentAns = currentAns.filter(idx => idx !== originalIndex);
                };
                sortArea.appendChild(cloned);
                currentAns.push(originalIndex);

                if (currentAns.length === q.correct.length) {
                    const correctSequence = q.correct.map(i => q.words[i]).join(' → ');
                    if (currentAns.join(',') === q.correct.join(',')) {
                        handleAnswer(true, null, null);
                    } else {
                        handleAnswer(false, null, correctSequence);
                        setTimeout(() => {
                            sortArea.innerHTML = '';
                            wordsContainer.childNodes.forEach(n => n.style.opacity = '1');
                            currentAns = [];
                        }, 2500);
                    }
                }
            };
            wordsContainer.appendChild(wordBtn);
        });
        container.appendChild(wordsContainer);
    } else if (q.type === 'whack_mole') {
        const descEl = document.createElement('h3');
        descEl.textContent = 'Whack the correct one! ' + (q.chinese || '');
        container.appendChild(descEl);

        const grid = document.createElement('div');
        grid.className = 'whack-mole-grid';
        let moles = [];

        q.options.forEach((opt, idx) => {
            const hole = document.createElement('div');
            hole.className = 'whack-mole-hole';
            
            const mole = document.createElement('div');
            mole.className = 'whack-mole-item';
            mole.innerHTML = opt;
            moles.push(mole);
            
            mole.onclick = (e) => {
                 e.stopPropagation(); // prevent hole click
                 if(!mole.classList.contains('up')) return;
                 handleAnswer(idx === q.correct, hole);
                 mole.classList.remove('up');
            };

            hole.appendChild(mole);
            grid.appendChild(hole);
        });
        container.appendChild(grid);

        // Mole logic
        let moleInterval = setInterval(() => {
            if(isAnimating) return;
            moles.forEach(m => m.classList.remove('up'));
            const randomMole = moles[Math.floor(Math.random() * moles.length)];
            randomMole.classList.add('up');
            setTimeout(() => randomMole.classList.remove('up'), 1000);
        }, 1200);

        // clear interval on answer
        const origHandleAnswer = handleAnswer;
        handleAnswer = function(isCorrect, cardEl) {
            clearInterval(moleInterval);
            origHandleAnswer(isCorrect, cardEl);
        }
        
    } else if (q.type === 'balloon_pop') {
        const descEl = document.createElement('h3');
        descEl.textContent = q.text || 'Pop the correct balloon!';
        if(q.chinese) descEl.textContent += ` (${q.chinese})`;
        container.appendChild(descEl);
        
        const area = document.createElement('div');
        area.className = 'balloon-container';
        container.appendChild(area);
        
        q.options.forEach((opt, idx) => {
            const bal = document.createElement('div');
            bal.className = 'balloon';
            bal.innerHTML = opt;
            bal.style.left = (10 + idx * 22) + '%';
            bal.style.animationDelay = (Math.random() * 2) + 's';
            
            bal.onclick = () => {
                bal.style.animationPlayState = 'paused';
                handleAnswer(idx === q.correct, bal);
            };
            area.appendChild(bal);
        });
        
    } else if (q.type === 'duo_race') {
        const title = document.createElement('h2');
        title.style.color = '#ff4b4b';
        title.innerHTML = '⚡ DUO RACE ⚡';
        container.appendChild(title);
        
        const descEl = document.createElement('div');
        descEl.style.marginBottom = '20px';
        descEl.textContent = 'Who is faster? ' + (q.chinese || '');
        container.appendChild(descEl);
        
        const raceArea = document.createElement('div');
        raceArea.style.display = 'flex';
        raceArea.style.justifyContent = 'space-between';
        raceArea.style.width = '100%';
        
        [0, 1].forEach(playerIdx => {
             const playerArea = document.createElement('div');
             playerArea.style.width = '45%';
             playerArea.style.border = '2px dashed var(--gray)';
             playerArea.style.padding = '10px';
             playerArea.style.borderRadius = '16px';
             
             const pname = document.createElement('h4');
             pname.textContent = players[playerIdx].name;
             pname.style.textAlign = 'center';
             playerArea.appendChild(pname);
             
             q.options.forEach((opt, idx) => {
                 const card = document.createElement('div');
                 card.className = 'option-card';
                 card.style.marginBottom = '10px';
                 card.style.minHeight = '60px';
                 card.innerHTML = opt;
                 card.onclick = () => {
                     // Temporary override currentPlayerIndex so the correct player gets the star
                     const originalPlayer = currentPlayerIndex;
                     currentPlayerIndex = playerIdx;
                     handleAnswer(idx === q.correct, card);
                     currentPlayerIndex = originalPlayer;
                 };
                 playerArea.appendChild(card);
             });
             raceArea.appendChild(playerArea);
        });
        container.appendChild(raceArea);
    } else if (q.type === 'duo_listen_select') {
        const title = document.createElement('h2');
        title.style.color = '#ff4b4b';
        title.innerHTML = '🎧 DUO LISTEN 🎧';
        container.appendChild(title);
        
        const descEl = document.createElement('div');
        descEl.style.marginBottom = '20px';
        descEl.innerHTML = `<strong>Player 1</strong> 戴耳机听<br>告诉 <strong>Player 2</strong> 选答案！`;
        container.appendChild(descEl);

        const playBtn = document.createElement('button');
        playBtn.className = 'play-sound-btn animate-pop';
        playBtn.innerHTML = '🔊 听音频';
        playBtn.style.padding = '15px 30px';
        playBtn.style.fontSize = '24px';
        playBtn.style.marginBottom = '25px';
        playBtn.style.width = 'auto';
        playBtn.style.height = 'auto';
        playBtn.style.borderRadius = '30px';
        playBtn.onclick = () => speakWord(q.audio);
        container.appendChild(playBtn);

        const grid = document.createElement('div');
        grid.className = 'options-grid';
        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.innerHTML = opt;
            card.onclick = () => {
                handleAnswer(idx === q.correct, card);
            };
            grid.appendChild(card);
        });
        container.appendChild(grid);
    }
}
