// listening.js

function renderListeningQuestion(q, container) {
    // Sound button
    const playBtn = document.createElement('button');
    playBtn.className = 'play-sound-btn animate-pop';
    playBtn.innerHTML = '🔊';
    playBtn.onclick = () => speakWord(q.audio);
    container.appendChild(playBtn);
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
                handleAnswer(idx === q.correct, card);
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

        const grid = document.createElement('div');
        grid.className = 'options-grid';
        
        ['✔️ Yes', '❌ No'].forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.innerHTML = opt;
            // idx 0 is Yes (true), idx 1 is No (false)
            const isSelectTrue = idx === 0;
            card.onclick = () => {
                handleAnswer(isSelectTrue === q.correct, card);
            };
            grid.appendChild(card);
        });
        container.appendChild(grid);

    } else if (q.type === 'listen_sequence') {
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
            
            // store original index in the array so we can compare with q.correct
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
                    if (currentAns.join(',') === q.correct.join(',')) {
                        handleAnswer(true);
                    } else {
                        handleAnswer(false);
                        setTimeout(() => {
                            sortArea.innerHTML = '';
                            wordsContainer.childNodes.forEach(n => n.style.opacity = '1');
                            currentAns = [];
                        }, 1000);
                    }
                }
            };
            wordsContainer.appendChild(wordBtn);
        });
        container.appendChild(wordsContainer);
    }
}
