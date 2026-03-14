// listening.js

function renderListeningQuestion(q, container) {
    // Sound button with instruction
    const instruction = document.createElement('div');
    instruction.style.textAlign = 'center';
    instruction.style.marginBottom = '10px';
    instruction.style.fontSize = '18px';
    instruction.style.color = '#666';
    instruction.textContent = '👆 点击喇叭听发音';
    container.appendChild(instruction);

    const playBtn = document.createElement('button');
    playBtn.className = 'play-sound-btn animate-pop';
    playBtn.innerHTML = '🔊';
    playBtn.onclick = () => speakWord(q.audio);
    container.appendChild(playBtn);

    // Chinese hint
    const chineseHint = getChineseHint(q.audio);
    if (chineseHint) {
        const hintEl = document.createElement('div');
        hintEl.className = 'chinese-hint';
        hintEl.textContent = `提示：${chineseHint}`;
        container.appendChild(hintEl);
    }

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
        const imgEl = document.createElement('div');
        imgEl.style.fontSize = '80px';
        imgEl.style.marginBottom = '20px';
        imgEl.innerHTML = q.image;
        container.appendChild(imgEl);

        // Add Chinese translation for the sentence
        const sentenceHint = getChineseHint(q.audio);
        if (sentenceHint) {
            const hintEl = document.createElement('div');
            hintEl.className = 'chinese-hint';
            hintEl.textContent = `句子意思：${sentenceHint}`;
            container.appendChild(hintEl);
        }

        const grid = document.createElement('div');
        grid.className = 'options-grid';

        [['✔️ 对', true], ['❌ 错', false]].forEach(([label, value]) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.innerHTML = label;
            card.onclick = () => {
                const correctAnswer = q.correct ? '对 ✔️' : '错 ❌';
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
    }
}
