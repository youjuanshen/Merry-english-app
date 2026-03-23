// writing.js

function renderWritingQuestion(q, container) {
    // 容错：如果题目数据不完整，显示提示并允许跳过
    if (!q || (!q.options && !q.letters && !q.scrambled && !q.parts && !q.pairs && q.type !== 'letter_trace' && q.type !== 'coop_relay_spell')) {
        var skipEl = document.createElement('div');
        skipEl.style.textAlign = 'center';
        skipEl.style.padding = '40px';
        skipEl.innerHTML = '<div style="font-size:40px;margin-bottom:15px;">⚠️</div>' +
            '<div style="font-size:18px;color:#888;margin-bottom:20px;">这道题数据不完整，自动跳过</div>';
        container.appendChild(skipEl);
        setTimeout(function() { handleAnswer(true); }, 1000);
        return;
    }
    if (q.type === 'letter_select') {
        // 显示图片（帮助学生区分熊和熊猫等）
        if (q.image) {
            var imgEl = document.createElement('div');
            imgEl.style.cssText = 'text-align:center;margin-bottom:8px;';
            imgEl.innerHTML = q.image;
            container.appendChild(imgEl);
        }
        const promptEl = document.createElement('h2');
        promptEl.textContent = q.prompt;
        container.appendChild(promptEl);

        const grid = document.createElement('div');
        grid.className = 'options-grid';
        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.style.fontSize = '50px';
            card.textContent = opt;
            card.onclick = () => {
                handleAnswer(idx === q.correct, card);
            };
            grid.appendChild(card);
        });
        container.appendChild(grid);

    } else if (q.type === 'letter_trace') {
        const descEl = document.createElement('div');
        descEl.style.fontSize = '20px';
        descEl.style.marginBottom = '20px';
        descEl.style.color = 'var(--gray-shadow)';
        descEl.textContent = '描摹字母: ' + q.word;
        container.appendChild(descEl);

        const traceArea = document.createElement('div');
        traceArea.style.width = '200px';
        traceArea.style.height = '250px';
        traceArea.style.border = '4px dashed var(--gray)';
        traceArea.style.borderRadius = '20px';
        traceArea.style.display = 'flex';
        traceArea.style.alignItems = 'center';
        traceArea.style.justifyContent = 'center';
        traceArea.style.fontSize = '120px';
        traceArea.style.fontWeight = 'bold';
        traceArea.style.color = '#eee';
        traceArea.style.position = 'relative';
        traceArea.textContent = q.letter;
        
        // Simplified tracing: just click the big letter to fill it (simulates tracing success)
        traceArea.onclick = () => {
            if(isAnimating) return;
            traceArea.style.color = 'var(--primary)';
            traceArea.style.borderColor = 'var(--primary)';
            traceArea.classList.add('animate-pop');
            setTimeout(() => handleAnswer(true), 800);
        };

        const hint = document.createElement('div');
        hint.style.position = 'absolute';
        hint.style.bottom = '-30px';
        hint.style.fontSize = '16px';
        hint.style.color = 'var(--secondary)';
        hint.textContent = '点击描摹';
        traceArea.appendChild(hint);

        container.appendChild(traceArea);

    } else if (q.type === 'word_spell' || q.type === 'sentence_fill') {
        if (q.image) {
            const imgEl = document.createElement('div');
            imgEl.style.fontSize = '80px';
            imgEl.style.marginBottom = '20px';
            imgEl.innerHTML = q.image;
            container.appendChild(imgEl);
        }

        const hintEl = document.createElement('div');
        hintEl.style.fontSize = q.type === 'word_spell' ? '60px' : '30px';
        hintEl.style.fontWeight = 'bold';
        hintEl.style.marginBottom = '30px';
        hintEl.style.letterSpacing = '5px';
        hintEl.textContent = q.hint || q.sentence;
        container.appendChild(hintEl);

        const grid = document.createElement('div');
        grid.className = 'options-grid';
        
        // Sort options randomly or keep them
        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.style.fontSize = '40px';
            card.textContent = opt;
            card.onclick = () => {
                if (idx === q.correct) {
                    hintEl.textContent = hintEl.textContent.replace('_', opt).replace('___', opt);
                    hintEl.style.color = 'var(--primary)';
                    hintEl.classList.add('animate-pop');
                }
                handleAnswer(idx === q.correct, card);
            };
            grid.appendChild(card);
        });
        container.appendChild(grid);
    } else if (q.type === 'word_puzzle' || q.type === 'sentence_order') {
        const descEl = document.createElement('h3');
        descEl.textContent = q.type === 'word_puzzle' ? '拼出单词！ ' : '排列句子！ ';
        if(q.chinese) descEl.textContent += `(${q.chinese})`;
        container.appendChild(descEl);

        if(q.image) {
            const imgEl = document.createElement('div');
            imgEl.style.marginBottom = '20px';
            imgEl.innerHTML = q.image;
            container.appendChild(imgEl);
        }

        const answerArea = document.createElement('div');
        answerArea.style.display = 'flex';
        answerArea.style.gap = '10px';
        answerArea.style.justifyContent = 'center';
        answerArea.style.marginBottom = '30px';
        answerArea.style.minHeight = '60px';
        answerArea.style.flexWrap = 'wrap';
        
        const sourceArea = document.createElement('div');
        sourceArea.style.display = 'flex';
        sourceArea.style.gap = '10px';
        sourceArea.style.justifyContent = 'center';
        sourceArea.style.flexWrap = 'wrap';

        let correctArr = q.type === 'word_puzzle' ? q.letters : q.words;
        let scrambledArr = q.scrambled;
        
        // Create empty slots
        correctArr.forEach(() => {
            const slot = document.createElement('div');
            slot.className = 'puzzle-slot';
            // Scale down font for sentences
            if(q.type === 'sentence_order') {
                slot.style.width = 'auto';
                slot.style.minWidth = '50px';
                slot.style.padding = '0 10px';
                slot.style.fontSize = '24px';
            }
            answerArea.appendChild(slot);
        });

        let currentFilled = 0;

        scrambledArr.forEach((item) => {
             const piece = document.createElement('div');
             piece.className = 'option-card';
             piece.style.padding = q.type === 'sentence_order' ? '10px 20px' : '10px';
             piece.style.minHeight = 'auto';
             piece.style.fontSize = q.type === 'sentence_order' ? '24px' : '40px';
             piece.textContent = item;
             
             piece.onclick = () => {
                 if(isAnimating || piece.style.opacity === '0') return;
                 piece.style.opacity = '0';
                 
                 const slot = answerArea.children[currentFilled];
                 slot.textContent = item;
                 slot.dataset.originalId = item; // Store what was put here
                 
                 // Make slot clickable to return piece
                 slot.onclick = () => {
                     if(slot.textContent === '') return;
                     piece.style.opacity = '1';
                     slot.textContent = '';
                     slot.onclick = null;
                     currentFilled--;
                 };

                 currentFilled++;
                 
                 if(currentFilled === correctArr.length) {
                     // Check answer
                     let currentAns = Array.from(answerArea.children).map(s => s.textContent);
                     
                     if (currentAns.join('') === correctArr.join('')) {
                         setTimeout(function() { handleAnswer(true); }, 500);
                     } else {
                         // 拼错了：红色闪烁提示，然后重置让学生重试
                         Array.from(answerArea.children).forEach(function(s) {
                             s.style.borderColor = '#ff4b4b';
                         });
                         setTimeout(function() {
                             Array.from(answerArea.children).forEach(function(s) {
                                 s.textContent = '';
                                 s.style.borderColor = '';
                                 s.onclick = null;
                             });
                             Array.from(sourceArea.children).forEach(function(p) { p.style.opacity = '1'; });
                             currentFilled = 0;
                         }, 800);
                     }
                 }
             };
             sourceArea.appendChild(piece);
        });

        container.appendChild(answerArea);
        container.appendChild(sourceArea);

    } else if (q.type === 'fill_blank') {
        // 填空题：句子填空
        if (q.image) {
            const imgEl = document.createElement('div');
            imgEl.style.fontSize = '60px';
            imgEl.style.marginBottom = '15px';
            imgEl.innerHTML = q.image;
            container.appendChild(imgEl);
        }

        const promptEl = document.createElement('div');
        promptEl.style.fontSize = '28px';
        promptEl.style.fontWeight = 'bold';
        promptEl.style.marginBottom = '25px';
        promptEl.style.textAlign = 'center';
        promptEl.textContent = q.prompt;
        container.appendChild(promptEl);

        const grid = document.createElement('div');
        grid.className = 'options-grid';
        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.style.fontSize = '30px';
            card.textContent = opt;
            card.onclick = () => {
                if (idx === q.correct) {
                    promptEl.textContent = promptEl.textContent.replace('_____', opt).replace('___', opt);
                    promptEl.style.color = 'var(--primary)';
                    promptEl.classList.add('animate-pop');
                }
                handleAnswer(idx === q.correct, card);
            };
            grid.appendChild(card);
        });
        container.appendChild(grid);

    } else if (q.type === 'pinyin_fill') {
        const descEl = document.createElement('h3');
        descEl.textContent = '填上缺少的字母！ ' + (q.chinese || '');
        container.appendChild(descEl);

        if (q.image) {
            const imgEl = document.createElement('div');
            imgEl.style.marginBottom = '20px';
            imgEl.innerHTML = q.image;
            container.appendChild(imgEl);
        }

        const hintEl = document.createElement('div');
        hintEl.style.fontSize = '60px';
        hintEl.style.fontWeight = 'bold';
        hintEl.style.marginBottom = '30px';
        hintEl.style.letterSpacing = '5px';
        hintEl.textContent = q.hint;
        container.appendChild(hintEl);

        const grid = document.createElement('div');
        grid.className = 'options-grid';
        
        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.style.fontSize = '40px';
            card.textContent = opt;
            card.onclick = () => {
                if (idx === q.correct) {
                    hintEl.textContent = hintEl.textContent.replace('_', opt);
                    hintEl.style.color = 'var(--primary)';
                    hintEl.classList.add('animate-pop');
                }
                handleAnswer(idx === q.correct, card);
            };
            grid.appendChild(card);
        });
        container.appendChild(grid);
    } else if (q.type === 'duo_spell' || q.type === 'duo_sentence') {
        const title = document.createElement('h2');
        title.style.color = '#ff4b4b';
        title.innerHTML = q.type === 'duo_spell' ? '🧩 合作拼词 🧩' : '🧩 合作造句 🧩';
        container.appendChild(title);

        const descEl = document.createElement('h3');
        descEl.textContent = q.chinese || '合作完成！';
        container.appendChild(descEl);

        const turnInfo = document.createElement('div');
        turnInfo.style.marginBottom = '20px';
        turnInfo.style.color = 'var(--secondary)';
        turnInfo.textContent = `一人一半，轮流拼！`;
        container.appendChild(turnInfo);

        if(q.image) {
            const imgEl = document.createElement('div');
            imgEl.style.marginBottom = '20px';
            imgEl.innerHTML = q.image;
            container.appendChild(imgEl);
        }

        const answerArea = document.createElement('div');
        answerArea.style.display = 'flex';
        answerArea.style.gap = '10px';
        answerArea.style.justifyContent = 'center';
        answerArea.style.marginBottom = '30px';
        answerArea.style.minHeight = '60px';
        answerArea.style.flexWrap = 'wrap';

        const sourceArea = document.createElement('div');
        sourceArea.style.display = 'flex';
        sourceArea.style.gap = '10px';
        sourceArea.style.justifyContent = 'center';
        sourceArea.style.flexWrap = 'wrap';

        let correctArr = q.type === 'duo_spell' ? q.parts : q.words;
        let scrambledArr = q.scrambled;
        
        correctArr.forEach(() => {
            const slot = document.createElement('div');
            slot.className = 'puzzle-slot';
            if(q.type === 'duo_sentence') {
                slot.style.width = 'auto';
                slot.style.minWidth = '50px';
                slot.style.padding = '0 10px';
                slot.style.fontSize = '24px';
            }
            answerArea.appendChild(slot);
        });

        let currentFilled = 0;

        scrambledArr.forEach((item) => {
             const piece = document.createElement('div');
             piece.className = 'option-card';
             piece.style.padding = q.type === 'duo_sentence' ? '10px 20px' : '10px';
             piece.style.minHeight = 'auto';
             piece.style.fontSize = q.type === 'duo_sentence' ? '24px' : '40px';
             piece.textContent = item;
             
             piece.onclick = () => {
                 if(isAnimating || piece.style.opacity === '0') return;
                 piece.style.opacity = '0';
                 
                 const slot = answerArea.children[currentFilled];
                 slot.textContent = item;
                 
                 slot.onclick = () => {
                     if(slot.textContent === '') return;
                     piece.style.opacity = '1';
                     slot.textContent = '';
                     slot.onclick = null;
                     currentFilled--;
                 };

                 currentFilled++;
                 if(currentFilled === correctArr.length) {
                     let currentAns = Array.from(answerArea.children).map(s => s.textContent);
                     if (currentAns.join('') === correctArr.join('')) {
                         setTimeout(() => handleAnswer(true), 500);
                     } else {
                         setTimeout(() => {
                             handleAnswer(false);
                             Array.from(answerArea.children).forEach(s => {
                                 s.textContent = '';
                                 s.onclick = null;
                             });
                             Array.from(sourceArea.children).forEach(p => p.style.opacity = '1');
                             currentFilled = 0;
                         }, 500);
                     }
                 }
             };
             sourceArea.appendChild(piece);
        });

        container.appendChild(answerArea);
        container.appendChild(sourceArea);
    } else if (q.type === 'coop_relay_spell') {
        const word = q.expected || q.word || 'APPLE';
        const p1Name = players[currentPlayerIndex] ? players[currentPlayerIndex].name.replace(/^\d+\.\s*/, '') : 'Player 1';
        const p2Name = players[1 - currentPlayerIndex] ? players[1 - currentPlayerIndex].name.replace(/^\d+\.\s*/, '') : 'Player 2';
        
        const splitIndex = Math.ceil(word.length / 2);
        
        container.innerHTML = `
            <div style="font-size:20px; font-weight:bold; color:var(--primary); margin-bottom:10px;">
                🤝 接力拼写: ${q.chinese || ''}
            </div>
            <div style="font-size:16px; color:var(--gray-shadow); margin-bottom:20px;">
                <span id="p1-turn-indicator" style="color:var(--primary); font-weight:bold;">👉 ${p1Name}</span> 先拼前半部分，<span id="p2-turn-indicator" style="color:#aaa;">${p2Name}</span> 接着拼！
            </div>
            <div id="spell-display" style="font-size:60px; font-weight:bold; letter-spacing:10px; margin-bottom:30px;">
                ${'_'.repeat(word.length)}
            </div>
        `;
        
        let currentInputIndex = 0;
        let p1Done = false;
        
        const keyboard = document.createElement('div');
        keyboard.className = 'options-grid';
        keyboard.style.gridTemplateColumns = 'repeat(5, 1fr)';
        keyboard.style.gap = '5px';
        
        const letters = q.options ? q.options : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        
        letters.forEach(letter => {
            const btn = document.createElement('div');
            btn.className = 'option-card';
            btn.style.fontSize = '30px';
            btn.style.padding = '10px';
            btn.style.minHeight = '50px';
            btn.textContent = letter.toUpperCase();
            
            btn.onclick = () => {
                if (letter.toLowerCase() === word[currentInputIndex].toLowerCase()) {
                    playSuccessSound();
                    currentInputIndex++;
                    let displayStr = word.substring(0, currentInputIndex) + '_'.repeat(word.length - currentInputIndex);
                    document.getElementById('spell-display').textContent = displayStr.toUpperCase();
                    
                    if (currentInputIndex === splitIndex && !p1Done) {
                        p1Done = true;
                        document.getElementById('p1-turn-indicator').style.color = '#aaa';
                        document.getElementById('p1-turn-indicator').style.fontWeight = 'normal';
                        document.getElementById('p2-turn-indicator').style.color = 'var(--secondary)';
                        document.getElementById('p2-turn-indicator').style.fontWeight = 'bold';
                        document.getElementById('p2-turn-indicator').innerHTML = `👉 ${p2Name}`;
                        
                        document.getElementById('spell-display').classList.add('animate-pop');
                        setTimeout(() => document.getElementById('spell-display').classList.remove('animate-pop'), 300);
                    }
                    
                    if (currentInputIndex === word.length) {
                        document.getElementById('spell-display').style.color = 'var(--primary)';
                        document.getElementById('spell-display').classList.add('animate-pop');
                        setTimeout(() => handleAnswer(true), 1000);
                    }
                } else {
                    playWrongSound();
                    btn.classList.add('wrong');
                    setTimeout(() => btn.classList.remove('wrong'), 500);
                }
            };
            
            keyboard.appendChild(btn);
        });
        
        container.appendChild(keyboard);
    }
}
