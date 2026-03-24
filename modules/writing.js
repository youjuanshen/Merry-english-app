// writing.js

function _shuffleWritingOptions(q) {
    if (!q.options || q.options.length < 2 || typeof q.correct !== 'number') return;
    var correctVal = q.options[q.correct];
    for (var i = q.options.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = q.options[i]; q.options[i] = q.options[j]; q.options[j] = tmp;
    }
    q.correct = q.options.indexOf(correctVal);
}

function renderWritingQuestion(q, container) {
    // 打乱选项顺序
    _shuffleWritingOptions(q);

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
        var isOrder = (q.type === 'sentence_order');
        var hasChinese = isOrder && q.chineseWords && q.chineseScrambled;

        // === 多邻国风格双语排列题 ===

        if (q.image) {
            var imgEl = document.createElement('div');
            imgEl.style.cssText = 'text-align:center;margin-bottom:8px;';
            imgEl.innerHTML = q.image;
            container.appendChild(imgEl);
        }

        // 构建一个排列区块的通用函数
        function buildOrderSection(cfg) {
            var section = document.createElement('div');
            section.style.cssText = 'margin-bottom:16px;';

            // 标签
            var label = document.createElement('div');
            label.style.cssText = 'font-size:14px;color:#afafaf;margin-bottom:6px;text-align:center;font-weight:bold;';
            label.textContent = cfg.label;
            section.appendChild(label);

            // 答题区横线
            var ansArea = document.createElement('div');
            ansArea.style.cssText = 'min-height:50px;border-bottom:2px solid #e5e5e5;margin:0 16px 12px;padding:8px 0;display:flex;gap:6px;flex-wrap:wrap;align-items:center;';
            var ph = document.createElement('span');
            ph.style.cssText = 'color:#ccc;font-size:16px;';
            ph.textContent = cfg.placeholder;
            ansArea.appendChild(ph);
            section.appendChild(ansArea);

            // 词块区
            var srcArea = document.createElement('div');
            srcArea.style.cssText = 'display:flex;gap:8px;justify-content:center;flex-wrap:wrap;padding:0 10px;';
            section.appendChild(srcArea);

            var placed = [];

            function refresh() {
                while (ansArea.firstChild) ansArea.removeChild(ansArea.firstChild);
                if (placed.length === 0) {
                    ansArea.appendChild(ph);
                    return;
                }
                placed.forEach(function(item, idx) {
                    var chip = document.createElement('div');
                    chip.style.cssText = 'background:' + cfg.chipBg + ';border:2px solid ' + cfg.chipBorder +
                        ';border-radius:12px;padding:6px 14px;font-size:' + cfg.fontSize +
                        ';font-weight:bold;color:' + cfg.chipColor + ';cursor:pointer;transition:all 0.15s;';
                    chip.textContent = item.text;
                    chip.onclick = function() {
                        if (isAnimating) return;
                        item.piece.style.opacity = '1';
                        item.piece.style.transform = 'scale(1)';
                        placed.splice(idx, 1);
                        refresh();
                        if (cfg.onChange) cfg.onChange();
                    };
                    item.chip = chip;
                    ansArea.appendChild(chip);
                });
            }

            cfg.scrambled.forEach(function(item) {
                var piece = document.createElement('div');
                piece.style.cssText = 'background:white;border:2px solid #e5e5e5;border-radius:12px;padding:8px 16px;font-size:' +
                    cfg.fontSize + ';font-weight:bold;color:#4b4b4b;cursor:pointer;transition:all 0.15s;box-shadow:0 2px 0 #e5e5e5;user-select:none;';
                piece.textContent = item;
                piece.onmouseenter = function() { if (piece.style.opacity !== '0') piece.style.borderColor = cfg.chipBorder; };
                piece.onmouseleave = function() { if (piece.style.opacity !== '0') piece.style.borderColor = '#e5e5e5'; };
                piece.onclick = function() {
                    if (isAnimating || piece.style.opacity === '0') return;
                    piece.style.opacity = '0';
                    piece.style.transform = 'scale(0.8)';
                    placed.push({ text: item, piece: piece, chip: null });
                    refresh();
                    if (cfg.onChange) cfg.onChange();
                };
                srcArea.appendChild(piece);
            });

            return {
                el: section,
                getAnswer: function() { return placed.map(function(p) { return p.text; }); },
                isFull: function() { return placed.length === cfg.correct.length; },
                isCorrect: function() { return this.getAnswer().join('') === cfg.correct.join(''); },
                showResult: function(ok) {
                    placed.forEach(function(p) {
                        if (ok) {
                            p.chip.style.background = '#d7ffb8';
                            p.chip.style.borderColor = '#58cc02';
                            p.chip.style.color = '#58cc02';
                        } else {
                            p.chip.style.background = '#ffdfe0';
                            p.chip.style.borderColor = '#ff4b4b';
                            p.chip.style.color = '#ff4b4b';
                        }
                    });
                },
                reset: function() {
                    placed.forEach(function(p) {
                        p.piece.style.opacity = '1';
                        p.piece.style.transform = 'scale(1)';
                    });
                    placed = [];
                    refresh();
                },
                placed: placed,
                refresh: refresh
            };
        }

        // 英文排列区
        var enSection = buildOrderSection({
            label: '🇬🇧 排列英文',
            placeholder: '点击词块组成英文句子',
            scrambled: isOrder ? q.scrambled : q.scrambled,
            correct: isOrder ? q.words : q.letters,
            fontSize: isOrder ? '18px' : '32px',
            chipBg: '#ddf4ff', chipBorder: '#84d8ff', chipColor: '#1cb0f6',
            onChange: function() { checkBothDone(); }
        });
        container.appendChild(enSection.el);

        // 中文排列区（如果有数据）
        var cnSection = null;
        if (hasChinese) {
            cnSection = buildOrderSection({
                label: '🇨🇳 排列中文',
                placeholder: '点击词块组成中文句子',
                scrambled: q.chineseScrambled,
                correct: q.chineseWords,
                fontSize: '18px',
                chipBg: '#fff3dd', chipBorder: '#ffb020', chipColor: '#e09000',
                onChange: function() { checkBothDone(); }
            });
            container.appendChild(cnSection.el);
        }

        // 检查两边是否都填满
        function checkBothDone() {
            var enDone = enSection.isFull();
            var cnDone = cnSection ? cnSection.isFull() : true;
            if (!enDone || !cnDone) return;

            var enOk = enSection.isCorrect();
            var cnOk = cnSection ? cnSection.isCorrect() : true;

            if (enOk && cnOk) {
                enSection.showResult(true);
                if (cnSection) cnSection.showResult(true);
                setTimeout(function() { handleAnswer(true); }, 600);
            } else {
                enSection.showResult(!enOk ? false : true);
                if (cnSection) cnSection.showResult(!cnOk ? false : true);
                setTimeout(function() {
                    if (!enOk) enSection.reset();
                    if (cnSection && !cnOk) cnSection.reset();
                    handleAnswer(false);
                }, 800);
            }
        }

        // 非 sentence_order（word_puzzle）不需要中文排列
        if (!isOrder) {
            var descEl = document.createElement('h3');
            descEl.textContent = '拼出单词！';
            if (q.chinese) descEl.textContent += ' (' + q.chinese + ')';
            container.insertBefore(descEl, container.firstChild);
        }

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
