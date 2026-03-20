// listening.js

function renderListeningQuestion(q, container) {
    // 喇叭按钮（紧凑，节省空间给选项）
    var playBtn = document.createElement('button');
    playBtn.className = 'play-sound-btn animate-pop';
    playBtn.innerHTML = '🔊';
    // 使用CSS默认样式，不再内联覆盖
    playBtn.onclick = function() { speakWord(q.audio); };
    container.appendChild(playBtn);

    // 提示不要一开始就显示，只在答错时才显示
    // （由handleAnswer函数中的showProgressiveHint处理）

    setTimeout(function() { speakWord(q.audio); }, 300); // Auto play

    if (q.type === 'listen_select' || q.type === 'listen_question') {
        if (q.image) {
            var imgEl = document.createElement('div');
            imgEl.style.fontSize = '80px';
            imgEl.style.marginBottom = '20px';
            imgEl.innerHTML = q.image;
            container.appendChild(imgEl);
        }

        var grid = document.createElement('div');
        grid.className = 'options-grid';
        q.options.forEach(function(opt, idx) {
            var card = document.createElement('div');
            card.className = 'option-card';
            var isOptObj = typeof opt === 'object' && opt !== null;
            card.innerHTML = isOptObj ? opt.text : opt;
            card.onclick = function() {
                var correctAnswer = q.options[q.correct];
                var correctDisplay = (typeof correctAnswer === 'object' && correctAnswer !== null) ? correctAnswer.text : correctAnswer;
                handleAnswer(idx === q.correct, card, correctDisplay);
            };
            grid.appendChild(card);
        });
        container.appendChild(grid);

    } else if (q.type === 'listen_tf') {
        // 对错题 - 图片和按钮分离，避免重叠
        // 增加喇叭按钮与图片之间的间距
        var spacer = document.createElement('div');
        spacer.style.height = '10px';
        container.appendChild(spacer);

        var tfImgEl = document.createElement('div');
        tfImgEl.className = 'tf-image-container';
        tfImgEl.innerHTML = q.image;
        container.appendChild(tfImgEl);

        // 两个大按钮并排 - Yes/No 英文
        var tfGrid = document.createElement('div');
        tfGrid.className = 'tf-options-grid';

        // 两个按钮初始都是蓝色边框，避免暗示正确答案
        var tfOptions = [['Yes', true], ['No', false]];
        tfOptions.forEach(function(item) {
            var label = item[0];
            var value = item[1];
            var card = document.createElement('div');
            card.className = 'tf-option-card';
            card.innerHTML = label;
            card.style.borderColor = '#1cb0f6';  // 统一蓝色边框
            card.style.color = '#1cb0f6';        // 统一蓝色文字
            card.onclick = function() {
                var correctAnswer = q.correct ? 'Yes' : 'No';
                handleAnswer(value === q.correct, card, correctAnswer);
            };
            tfGrid.appendChild(card);
        });
        container.appendChild(tfGrid);

    } else if (q.type === 'listen_sequence') {
        var instructionSeq = document.createElement('div');
        instructionSeq.style.textAlign = 'center';
        instructionSeq.style.marginBottom = '15px';
        instructionSeq.style.fontSize = '16px';
        instructionSeq.style.color = '#666';
        instructionSeq.textContent = '按顺序点击，排列正确顺序';
        container.appendChild(instructionSeq);

        var sortArea = document.createElement('div');
        sortArea.className = 'sort-area';
        container.appendChild(sortArea);

        var wordsContainer = document.createElement('div');
        wordsContainer.style.display = 'flex';
        wordsContainer.style.gap = '10px';
        wordsContainer.style.flexWrap = 'wrap';
        wordsContainer.style.justifyContent = 'center';

        var currentAns = [];

        q.words.forEach(function(word) {
            var wordBtn = document.createElement('div');
            wordBtn.className = 'sort-word';
            wordBtn.innerHTML = word;

            var originalIndex = q.words.indexOf(word);

            wordBtn.onclick = function() {
                if (isAnimating) return;
                if (currentAns.indexOf(originalIndex) !== -1) return;
                wordBtn.style.opacity = '0.3';

                var cloned = document.createElement('div');
                cloned.className = 'sort-word animate-pop';
                cloned.innerHTML = word;
                cloned.onclick = function() {
                    if (isAnimating) return;
                    sortArea.removeChild(cloned);
                    wordBtn.style.opacity = '1';
                    currentAns = currentAns.filter(function(idx) { return idx !== originalIndex; });
                };
                sortArea.appendChild(cloned);
                currentAns.push(originalIndex);

                if (currentAns.length === q.correct.length) {
                    var correctSequence = q.correct.map(function(i) { return q.words[i]; }).join(' → ');
                    if (currentAns.join(',') === q.correct.join(',')) {
                        handleAnswer(true, null, null);
                    } else {
                        handleAnswer(false, null, correctSequence);
                        setTimeout(function() {
                            sortArea.innerHTML = '';
                            for (var i = 0; i < wordsContainer.childNodes.length; i++) {
                                wordsContainer.childNodes[i].style.opacity = '1';
                            }
                            currentAns = [];
                        }, 2500);
                    }
                }
            };
            wordsContainer.appendChild(wordBtn);
        });
        container.appendChild(wordsContainer);
    } else if (q.type === 'whack_mole') {
        var descEl = document.createElement('h3');
        descEl.textContent = 'Whack the correct one! ' + (q.chinese || '');
        container.appendChild(descEl);

        var wmGrid = document.createElement('div');
        wmGrid.className = 'whack-mole-grid';
        var moles = [];

        q.options.forEach(function(opt, idx) {
            var hole = document.createElement('div');
            hole.className = 'whack-mole-hole';

            var mole = document.createElement('div');
            mole.className = 'whack-mole-item';
            mole.innerHTML = (typeof opt === 'object' && opt !== null) ? opt.text : opt;
            moles.push(mole);

            mole.onclick = function(e) {
                 e.stopPropagation(); // prevent hole click
                 if(!mole.classList.contains('up')) return;
                 handleAnswer(idx === q.correct, hole);
                 mole.classList.remove('up');
            };

            hole.appendChild(mole);
            wmGrid.appendChild(hole);
        });
        container.appendChild(wmGrid);

        // Mole logic
        var moleInterval = setInterval(function() {
            if(isAnimating) return;
            moles.forEach(function(m) { m.classList.remove('up'); });
            var randomMole = moles[Math.floor(Math.random() * moles.length)];
            randomMole.classList.add('up');
            setTimeout(function() { randomMole.classList.remove('up'); }, 1000);
        }, 1200);

        // clear interval on answer
        var origHandleAnswer = handleAnswer;
        handleAnswer = function(isCorrect, cardEl) {
            clearInterval(moleInterval);
            origHandleAnswer(isCorrect, cardEl);
        }
        
    } else if (q.type === 'balloon_pop') {
        var bpDescEl = document.createElement('h3');
        bpDescEl.textContent = q.text || 'Pop the correct balloon!';
        if(q.chinese) bpDescEl.textContent += ' (' + q.chinese + ')';
        container.appendChild(bpDescEl);

        var area = document.createElement('div');
        area.className = 'balloon-container';
        container.appendChild(area);

        q.options.forEach(function(opt, idx) {
            var bal = document.createElement('div');
            bal.className = 'balloon';
            bal.innerHTML = (typeof opt === 'object' && opt !== null) ? opt.text : opt;
            bal.style.left = (10 + idx * 22) + '%';
            bal.style.animationDelay = (Math.random() * 2) + 's';

            bal.onclick = function() {
                bal.style.animationPlayState = 'paused';
                handleAnswer(idx === q.correct, bal);
            };
            area.appendChild(bal);
        });
        
    } else if (q.type === 'duo_race') {
        var drTitle = document.createElement('h2');
        drTitle.style.color = '#ff4b4b';
        drTitle.innerHTML = '⚡ DUO RACE ⚡';
        container.appendChild(drTitle);

        var drDescEl = document.createElement('div');
        drDescEl.style.marginBottom = '20px';
        drDescEl.textContent = 'Who is faster? ' + (q.chinese || '');
        container.appendChild(drDescEl);

        var raceArea = document.createElement('div');
        raceArea.style.display = 'flex';
        raceArea.style.justifyContent = 'space-between';
        raceArea.style.width = '100%';

        [0, 1].forEach(function(playerIdx) {
             var playerArea = document.createElement('div');
             playerArea.style.width = '45%';
             playerArea.style.border = '2px dashed var(--gray)';
             playerArea.style.padding = '10px';
             playerArea.style.borderRadius = '16px';

             var pname = document.createElement('h4');
             pname.textContent = players[playerIdx].name;
             pname.style.textAlign = 'center';
             playerArea.appendChild(pname);

             q.options.forEach(function(opt, idx) {
                 var card = document.createElement('div');
                 card.className = 'option-card';
                 card.style.marginBottom = '10px';
                 card.style.minHeight = '60px';
                 card.innerHTML = (typeof opt === 'object' && opt !== null) ? opt.text : opt;
                 card.onclick = function() {
                     // Temporary override currentPlayerIndex so the correct player gets the star
                     var originalPlayer = currentPlayerIndex;
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
        var dlTitle = document.createElement('h2');
        dlTitle.style.color = '#ff4b4b';
        dlTitle.innerHTML = '🎧 DUO LISTEN 🎧';
        container.appendChild(dlTitle);

        var dlDescEl = document.createElement('div');
        dlDescEl.style.marginBottom = '20px';
        dlDescEl.innerHTML = '<strong>Player 1</strong> 戴耳机听<br>告诉 <strong>Player 2</strong> 选答案！';
        container.appendChild(dlDescEl);

        var dlPlayBtn = document.createElement('button');
        dlPlayBtn.className = 'play-sound-btn animate-pop';
        dlPlayBtn.innerHTML = '🔊 听音频';
        dlPlayBtn.style.padding = '15px 30px';
        dlPlayBtn.style.fontSize = '24px';
        dlPlayBtn.style.marginBottom = '25px';
        dlPlayBtn.style.width = 'auto';
        dlPlayBtn.style.height = 'auto';
        dlPlayBtn.style.borderRadius = '30px';
        dlPlayBtn.onclick = function() { speakWord(q.audio); };
        container.appendChild(dlPlayBtn);

        var dlGrid = document.createElement('div');
        dlGrid.className = 'options-grid';
        q.options.forEach(function(opt, idx) {
            var card = document.createElement('div');
            card.className = 'option-card';
            card.innerHTML = (typeof opt === 'object' && opt !== null) ? opt.text : opt;
            card.onclick = function() {
                handleAnswer(idx === q.correct, card);
            };
            dlGrid.appendChild(card);
        });
        container.appendChild(dlGrid);
    }
}
