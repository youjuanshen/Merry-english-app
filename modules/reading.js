// reading.js

let draggedEl = null;

function _shuffleOptions(q) {
    // 打乱选项顺序，防止正确答案总在同一位置
    if (!q.options || q.options.length < 2) return;

    var isObj = typeof q.options[0] === 'object' && q.options[0] !== null;

    if (isObj) {
        // value-based: 直接打乱，onclick 用 value 判断对错
        for (var i = q.options.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = q.options[i];
            q.options[i] = q.options[j];
            q.options[j] = tmp;
        }
    } else if (typeof q.correct === 'number') {
        // index-based: 记住正确答案，打乱后更新 correct 索引
        var correctVal = q.options[q.correct];
        for (var i = q.options.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = q.options[i];
            q.options[i] = q.options[j];
            q.options[j] = tmp;
        }
        q.correct = q.options.indexOf(correctVal);
    }
}

function renderReadingQuestion(q, container) {
    // 容错：如果题目数据不完整，自动跳过
    if (!q || (!q.options && !q.pairs && q.type !== 'spot_diff' && q.type !== 'sentence_sequence')) {
        var skipEl = document.createElement('div');
        skipEl.style.textAlign = 'center';
        skipEl.style.padding = '40px';
        skipEl.innerHTML = '<div style="font-size:40px;margin-bottom:15px;">⚠️</div>' +
            '<div style="font-size:18px;color:#888;">这道题数据不完整，自动跳过</div>';
        container.appendChild(skipEl);
        setTimeout(function() { handleAnswer(true); }, 1000);
        return;
    }
    // 打乱选项顺序
    _shuffleOptions(q);

    if (q.type === 'word_match') {
        const textEl = document.createElement('div');
        textEl.style.fontSize = '60px';
        textEl.style.fontWeight = 'bold';
        textEl.style.marginBottom = '30px';
        textEl.style.textAlign = 'center';
        textEl.textContent = q.word;
        container.appendChild(textEl);

        const grid = document.createElement('div');
        grid.className = 'options-grid';
        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            const isObj = typeof opt === 'object' && opt !== null;
            const displayText = isObj ? opt.text : opt;
            card.style.fontSize = (typeof displayText === 'string' && displayText.length > 2) ? '30px' : '60px';
            card.innerHTML = displayText;
            card.onclick = () => {
                if (isObj) {
                    handleAnswer(opt.value === q.correct || opt.value === q.word, card);
                } else {
                    handleAnswer(idx === q.correct, card);
                }
            };
            grid.appendChild(card);
        });
        container.appendChild(grid);

    } else if (q.type === 'sentence_match') {
        const textEl = document.createElement('div');
        textEl.style.fontSize = '36px';
        textEl.style.fontWeight = 'bold';
        textEl.style.marginBottom = '10px';
        textEl.style.textAlign = 'center';
        textEl.textContent = q.sentence;
        container.appendChild(textEl);

        // 中文翻译默认不显示，答错后才作为提示出现（支架撤退设计）

        const grid = document.createElement('div');
        grid.className = 'options-grid';
        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.style.fontSize = '30px';
            
            const isObj = typeof opt === 'object' && opt !== null;
            card.innerHTML = isObj ? opt.text : opt;
            
            card.onclick = () => {
                if (isObj) {
                    const correctAnswer = q.options.find(o => o.value === q.correct);
                    handleAnswer(opt.value === q.correct, card, correctAnswer ? correctAnswer.text : null);
                } else {
                    handleAnswer(idx === q.correct, card);
                }
            };
            grid.appendChild(card);
        });
        container.appendChild(grid);

    } else if (q.type === 'drag_match') {
        const dragArea = document.createElement('div');
        dragArea.style.display = 'flex';
        dragArea.style.justifyContent = 'space-around';
        dragArea.style.width = '100%';
        dragArea.style.marginTop = '20px';

        const leftCol = document.createElement('div');
        leftCol.style.display = 'flex';
        leftCol.style.flexDirection = 'column';
        leftCol.style.gap = '20px';

        const rightCol = document.createElement('div');
        rightCol.style.display = 'flex';
        rightCol.style.flexDirection = 'column';
        rightCol.style.gap = '20px';

        // Shuffle right column options to make it a game
        let rightOptions = q.pairs.map((p, i) => ({ content: p[1], id: i }));
        rightOptions = rightOptions.sort(() => Math.random() - 0.5);

        let correctPairs = 0;
        const totalPairs = q.pairs.length;

        q.pairs.forEach((pair, idx) => {
            // Left Item (Draggable)
            const leftItem = document.createElement('div');
            leftItem.className = 'option-card';
            leftItem.style.minHeight = '60px';
            leftItem.style.padding = '10px 20px';
            leftItem.style.cursor = 'grab';
            leftItem.textContent = pair[0];
            leftItem.draggable = true;
            
            leftItem.ondragstart = (e) => {
                draggedEl = leftItem;
                e.dataTransfer.setData('text/plain', idx);
                setTimeout(() => leftItem.style.opacity = '0.5', 0);
            };
            
            leftItem.ondragend = () => {
                leftItem.style.opacity = '1';
                draggedEl = null;
            };

            // Touch events for iPhone 7
            leftItem.ontouchstart = (e) => {
                draggedEl = leftItem;
                leftItem.dataset.id = idx;
                leftItem.style.opacity = '0.5';
                e.preventDefault(); // prevent scroll
            };
            
            leftItem.ontouchmove = (e) => {
                if(!draggedEl) return;
                const touchLocation = e.targetTouches[0];
                draggedEl.style.position = 'absolute';
                draggedEl.style.left = touchLocation.pageX - 50 + 'px';
                draggedEl.style.top = touchLocation.pageY - 30 + 'px';
                draggedEl.style.zIndex = 1000;
            };

            leftItem.ontouchend = (e) => {
                if(!draggedEl) return;
                const changedTouch = e.changedTouches[0];
                draggedEl.style.position = 'relative';
                draggedEl.style.left = '0px';
                draggedEl.style.top = '0px';
                draggedEl.style.zIndex = 1;
                draggedEl.style.opacity = '1';

                // Find if dropped over a dropzone
                const elemBelow = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
                const dropzone = elemBelow ? elemBelow.closest('.drop-target') : null;
                
                if (dropzone) {
                    handleDrop(dropzone, draggedEl.dataset.id, draggedEl);
                }
                draggedEl = null;
            };

            leftCol.appendChild(leftItem);
        });

        rightOptions.forEach((opt) => {
             // Right Item (Drop target)
             const rightItem = document.createElement('div');
             rightItem.className = 'option-card drop-target';
             rightItem.style.minHeight = '60px';
             rightItem.style.padding = '10px 20px';
             rightItem.style.fontSize = '40px';
             rightItem.innerHTML = opt.content;
             rightItem.dataset.id = opt.id;

             rightItem.ondragover = (e) => {
                 e.preventDefault();
                 rightItem.style.borderColor = 'var(--secondary)';
             };
             
             rightItem.ondragleave = () => {
                 rightItem.style.borderColor = 'var(--gray)';
             };
             
             rightItem.ondrop = (e) => {
                 e.preventDefault();
                 rightItem.style.borderColor = 'var(--gray)';
                 const draggedId = e.dataTransfer.getData('text/plain');
                 handleDrop(rightItem, draggedId, draggedEl);
             };

             rightCol.appendChild(rightItem);
        });

        function handleDrop(dropzone, draggedId, element) {
            if (draggedId == dropzone.dataset.id) {
                // Correct match
                dropzone.classList.add('correct');
                element.style.visibility = 'hidden'; // Hide the dragged one
                playSuccessSound();
                correctPairs++;
                if(correctPairs === totalPairs) {
                    setTimeout(() => handleAnswer(true), 500);
                }
            } else {
                // Wrong match
                dropzone.classList.add('wrong');
                playWrongSound();
                setTimeout(() => dropzone.classList.remove('wrong'), 500);
            }
        }

        dragArea.appendChild(leftCol);
        dragArea.appendChild(rightCol);
        container.appendChild(dragArea);
    } else if (q.type === 'drag_connect') {
        // Reuse drag_match logic but name it drag_connect for Phase 3 compatibility
        const dragArea = document.createElement('div');
        dragArea.style.display = 'flex';
        dragArea.style.justifyContent = 'space-around';
        dragArea.style.width = '100%';
        dragArea.style.marginTop = '20px';

        const leftCol = document.createElement('div');
        leftCol.style.display = 'flex';
        leftCol.style.flexDirection = 'column';
        leftCol.style.gap = '20px';

        const rightCol = document.createElement('div');
        rightCol.style.display = 'flex';
        rightCol.style.flexDirection = 'column';
        rightCol.style.gap = '20px';

        let rightOptions = q.pairs.map((p, i) => ({ content: p[1], id: i }));
        rightOptions = rightOptions.sort(() => Math.random() - 0.5);

        let correctPairs = 0;
        const totalPairs = q.pairs.length;

        q.pairs.forEach((pair, idx) => {
            const leftItem = document.createElement('div');
            leftItem.className = 'option-card';
            leftItem.style.minHeight = '60px';
            leftItem.style.padding = '10px 20px';
            leftItem.style.cursor = 'grab';
            leftItem.innerHTML = pair[0];
            leftItem.draggable = true;
            
            leftItem.ondragstart = (e) => {
                draggedEl = leftItem;
                e.dataTransfer.setData('text/plain', idx);
                setTimeout(() => leftItem.style.opacity = '0.5', 0);
            };
            
            leftItem.ondragend = () => {
                leftItem.style.opacity = '1';
                draggedEl = null;
            };

            leftItem.ontouchstart = (e) => {
                draggedEl = leftItem;
                leftItem.dataset.id = idx;
                leftItem.style.opacity = '0.5';
                e.preventDefault(); 
            };
            
            leftItem.ontouchmove = (e) => {
                if(!draggedEl) return;
                const touchLocation = e.targetTouches[0];
                draggedEl.style.position = 'absolute';
                draggedEl.style.left = touchLocation.pageX - 50 + 'px';
                draggedEl.style.top = touchLocation.pageY - 30 + 'px';
                draggedEl.style.zIndex = 1000;
            };

            leftItem.ontouchend = (e) => {
                if(!draggedEl) return;
                const changedTouch = e.changedTouches[0];
                draggedEl.style.position = 'relative';
                draggedEl.style.left = '0px';
                draggedEl.style.top = '0px';
                draggedEl.style.zIndex = 1;
                draggedEl.style.opacity = '1';

                const elemBelow = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
                const dropzone = elemBelow ? elemBelow.closest('.drop-target') : null;
                
                if (dropzone) {
                    handleDrop(dropzone, draggedEl.dataset.id, draggedEl);
                }
                draggedEl = null;
            };

            leftCol.appendChild(leftItem);
        });

        rightOptions.forEach((opt) => {
             const rightItem = document.createElement('div');
             rightItem.className = 'option-card drop-target';
             rightItem.style.minHeight = '60px';
             rightItem.style.padding = '10px 20px';
             rightItem.style.fontSize = '40px';
             rightItem.innerHTML = opt.content;
             rightItem.dataset.id = opt.id;

             rightItem.ondragover = (e) => {
                 e.preventDefault();
                 rightItem.style.borderColor = 'var(--secondary)';
             };
             
             rightItem.ondragleave = () => {
                 rightItem.style.borderColor = 'var(--gray)';
             };
             
             rightItem.ondrop = (e) => {
                 e.preventDefault();
                 rightItem.style.borderColor = 'var(--gray)';
                 const draggedId = e.dataTransfer.getData('text/plain');
                 handleDrop(rightItem, draggedId, draggedEl);
             };

             rightCol.appendChild(rightItem);
        });

        function handleDrop(dropzone, draggedId, element) {
            if (draggedId == dropzone.dataset.id) {
                dropzone.classList.add('correct');
                element.style.visibility = 'hidden';
                playSuccessSound();
                correctPairs++;
                if(correctPairs === totalPairs) {
                    setTimeout(() => handleAnswer(true), 500);
                }
            } else {
                dropzone.classList.add('wrong');
                playWrongSound();
                setTimeout(() => dropzone.classList.remove('wrong'), 500);
            }
        }

        dragArea.appendChild(leftCol);
        dragArea.appendChild(rightCol);
        container.appendChild(dragArea);
    } else if (q.type === 'memory_match' || q.type === 'coop_match_compete') {
        const descEl = document.createElement('h3');
        if (q.type === 'coop_match_compete') {
            descEl.innerHTML = '🔥 <span style="color:#e74c3c;">合作/抢答配对：双方同时开始，看谁找得快！</span> ' + (q.chinese || '');
        } else {
            descEl.textContent = '🧩 配对单词和图片！ ' + (q.chinese || '');
        }
        container.appendChild(descEl);

        const grid = document.createElement('div');
        grid.className = 'options-grid';
        let cards = [];
        
        // combine words and images
        q.pairs.forEach((p, idx) => {
            cards.push({ content: p.word, matchId: idx, isText: true });
            cards.push({ content: p.image, matchId: idx, isText: false });
        });
        cards = cards.sort(() => Math.random() - 0.5);

        let flippedCards = [];
        let matchedPairs = 0;

        cards.forEach(cardData => {
            const cardEl = document.createElement('div');
            cardEl.className = 'option-card card-flip';
            cardEl.style.minHeight = '80px';
            cardEl.textContent = '❓';
            
            cardEl.onclick = () => {
                if(isAnimating) return;
                if(cardEl.classList.contains('flipped') || cardEl.classList.contains('correct')) return;
                
                cardEl.innerHTML = cardData.content;
                cardEl.classList.add('flipped');
                if(cardData.isText) cardEl.style.fontSize = '30px';
                
                flippedCards.push({el: cardEl, data: cardData});
                if(flippedCards.length === 2) {
                    isAnimating = true;
                    if(flippedCards[0].data.matchId === flippedCards[1].data.matchId) {
                        // Match
                        playSuccessSound();
                        flippedCards.forEach(c => c.el.classList.add('correct'));
                        matchedPairs++;
                        flippedCards = [];
                        isAnimating = false;
                        if(matchedPairs === q.pairs.length) {
                            setTimeout(() => handleAnswer(true), 500);
                        }
                    } else {
                        // No match
                        playWrongSound();
                        flippedCards.forEach(c => c.el.classList.add('wrong'));
                        setTimeout(() => {
                            flippedCards.forEach(c => {
                                c.el.classList.remove('wrong');
                                c.el.classList.remove('flipped');
                                c.el.innerHTML = '❓';
                                c.el.style.fontSize = '';
                            });
                            flippedCards = [];
                            isAnimating = false;
                        }, 1000);
                    }
                }
            };
            grid.appendChild(cardEl);
        });
        container.appendChild(grid);
    } else if (q.type === 'tap_pair') {
        // 点击配对题：左边英文词，右边图片/中文，点一个词再点一张图配对
        // Play-based + i+1：游戏化交互 + 词义配对练习
        var pairs = q.pairs || []; // [{word: 'bear', match: '<img ...>', matchId: 0}, ...]
        var matchedCount = 0;
        var selectedWord = null;

        var titleEl = document.createElement('div');
        titleEl.style.cssText = 'text-align:center;font-size:18px;font-weight:bold;margin-bottom:12px;color:#333;';
        titleEl.textContent = '👆 点英文词，再点配对的图片！';
        container.appendChild(titleEl);

        var pairArea = document.createElement('div');
        pairArea.className = 'tap-pair-area';
        pairArea.style.cssText = 'display:flex;justify-content:space-between;gap:8px;width:100%;align-items:stretch;';

        // 左列：英文词
        var leftCol = document.createElement('div');
        leftCol.style.cssText = 'display:flex;flex-direction:column;gap:6px;flex:1;';

        // 右列：图片/中文（乱序）
        var rightCol = document.createElement('div');
        rightCol.style.cssText = 'display:flex;flex-direction:column;gap:6px;flex:1;';

        // 打乱右列顺序
        var rightItems = pairs.map(function(p, i) { return { content: p.match, id: i }; });
        for (var ri = rightItems.length - 1; ri > 0; ri--) {
            var rj = Math.floor(Math.random() * (ri + 1));
            var tmp = rightItems[ri]; rightItems[ri] = rightItems[rj]; rightItems[rj] = tmp;
        }

        pairs.forEach(function(pair, idx) {
            var wordBtn = document.createElement('div');
            wordBtn.className = 'option-card';
            wordBtn.style.cssText = 'padding:6px 10px;font-size:18px;font-weight:bold;text-align:center;cursor:pointer;min-height:48px;display:flex;align-items:center;justify-content:center;border:2px solid #e0e0e0;border-radius:12px;background:#fff;';
            wordBtn.textContent = pair.word;
            wordBtn.dataset.pairId = idx;
            wordBtn.dataset.side = 'left';

            wordBtn.onclick = function() {
                if (wordBtn.classList.contains('matched')) return;
                // 取消之前的选中
                var allLeft = leftCol.querySelectorAll('.option-card');
                allLeft.forEach(function(el) { el.style.border = '2px solid #e0e0e0'; });
                // 选中当前
                wordBtn.style.border = '3px solid #1cb0f6';
                selectedWord = { el: wordBtn, id: idx };
            };
            leftCol.appendChild(wordBtn);
        });

        rightItems.forEach(function(item) {
            var matchBtn = document.createElement('div');
            matchBtn.className = 'option-card';
            matchBtn.style.cssText = 'padding:4px 8px;font-size:16px;text-align:center;cursor:pointer;min-height:48px;display:flex;align-items:center;justify-content:center;border:2px solid #e0e0e0;border-radius:12px;background:#fff;overflow:hidden;';
            matchBtn.innerHTML = item.content;
            matchBtn.dataset.pairId = item.id;
            matchBtn.dataset.side = 'right';

            matchBtn.onclick = function() {
                if (matchBtn.classList.contains('matched')) return;
                if (!selectedWord) {
                    // 没选左边的词，提示一下
                    matchBtn.style.border = '2px solid #ff9500';
                    setTimeout(function() { matchBtn.style.border = '2px solid #e0e0e0'; }, 500);
                    return;
                }
                // 判断配对是否正确
                if (selectedWord.id == item.id) {
                    // 配对成功
                    selectedWord.el.classList.add('matched');
                    selectedWord.el.style.cssText += 'background:#e8f5e9;border:2px solid #4caf50;opacity:0.6;pointer-events:none;';
                    matchBtn.classList.add('matched');
                    matchBtn.style.cssText += 'background:#e8f5e9;border:2px solid #4caf50;opacity:0.6;pointer-events:none;';
                    if (window.SoundSystem) SoundSystem.playCorrect();
                    matchedCount++;
                    selectedWord = null;
                    if (matchedCount === pairs.length) {
                        setTimeout(function() { handleAnswer(true); }, 600);
                    }
                } else {
                    // 配对错误
                    matchBtn.style.border = '2px solid #e74c3c';
                    matchBtn.classList.add('wrong');
                    if (window.SoundSystem) SoundSystem.playWrong();
                    setTimeout(function() {
                        matchBtn.style.border = '2px solid #e0e0e0';
                        matchBtn.classList.remove('wrong');
                    }, 500);
                    selectedWord.el.style.border = '2px solid #e0e0e0';
                    selectedWord = null;
                    // 记录错误次数（触发支架）
                    window.wrongCount = (window.wrongCount || 0) + 1;
                    var wc = window.wrongCount;
                    console.log('[tap_pair] wrongCount=' + wc + ' pairs=' + pairs.length + ' matchedCount=' + matchedCount);

                    // ===== tap_pair 支架：错2次才给提示，之后每错1次多教一个词 =====
                    if (wc < 3) {
                        // 前2次错误不给提示，让学生自己尝试
                        return;
                    }

                    var isImagePair = pairs[0] && pairs[0].match && pairs[0].match.indexOf('<img') !== -1;
                    var hintIdx = -1;
                    var allLeftCards = leftCol.querySelectorAll('.option-card');
                    for (var hi = 0; hi < allLeftCards.length; hi++) {
                        if (!allLeftCards[hi].classList.contains('matched') && !allLeftCards[hi].dataset.hinted) {
                            hintIdx = parseInt(allLeftCards[hi].dataset.pairId);
                            allLeftCards[hi].dataset.hinted = 'true';
                            break;
                        }
                    }

                    if (hintIdx >= 0) {
                        var hintText = '';
                        if (isImagePair) {
                            // 词→图片题：告诉中文意思（还要自己找图片，不等于给答案）
                            var chineseMeaning = pairs[hintIdx].chinese || '';
                            if (!chineseMeaning) {
                                // 没有 chinese 字段，用通用提示
                                hintText = '💡 "' + pairs[hintIdx].word + '" — 想想这个词是什么意思？';
                            } else {
                                hintText = '💡 "' + pairs[hintIdx].word + '" = ' + chineseMeaning;
                            }
                        } else {
                            // 词→中文题：给例句语境（不直接给答案，让学生推断）
                            var exSentence = pairs[hintIdx].example || '';
                            if (exSentence) {
                                hintText = '💡 例句：' + exSentence;
                            } else {
                                hintText = '💡 "' + pairs[hintIdx].word + '" — 在课文里出现过，想想看！';
                            }
                        }

                        // 浮动提示：屏幕中央弹出，2秒后消失
                        var oldHint = document.getElementById('tap-pair-hint');
                        if (oldHint) oldHint.remove();
                        var hintEl = document.createElement('div');
                        hintEl.id = 'tap-pair-hint';
                        hintEl.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0.8);background:#fff8e1;color:#e65100;font-size:17px;font-weight:bold;padding:14px 24px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.2);z-index:9999;opacity:0;transition:all 0.3s ease;text-align:center;max-width:80%;';
                        hintEl.textContent = hintText;
                        document.body.appendChild(hintEl);
                        // 弹入动画
                        setTimeout(function() {
                            hintEl.style.opacity = '1';
                            hintEl.style.transform = 'translate(-50%,-50%) scale(1)';
                        }, 50);
                        // 2秒后消失
                        setTimeout(function() {
                            hintEl.style.opacity = '0';
                            hintEl.style.transform = 'translate(-50%,-50%) scale(0.8)';
                            setTimeout(function() { if (hintEl.parentNode) hintEl.remove(); }, 300);
                        }, 2500);
                    }
                }
            };
            rightCol.appendChild(matchBtn);
        });

        pairArea.appendChild(leftCol);
        pairArea.appendChild(rightCol);
        container.appendChild(pairArea);

    } else if (q.type === 'sentence_sequence') {
        // 句子排序：把3个短句按正确顺序排列（语篇组织能力）
        var titleSeq = document.createElement('div');
        titleSeq.style.cssText = 'text-align:center;font-size:17px;font-weight:bold;margin-bottom:12px;color:#333;';
        titleSeq.textContent = '📖 把句子按正确顺序排列！';
        container.appendChild(titleSeq);

        var sortArea = document.createElement('div');
        sortArea.style.cssText = 'display:flex;gap:6px;justify-content:center;min-height:40px;margin-bottom:10px;padding:8px;background:#f5f5f5;border-radius:12px;flex-wrap:wrap;';
        container.appendChild(sortArea);

        var sentences = q.sentences || [];
        // 打乱顺序显示
        var shuffled = sentences.map(function(s, i) { return { text: s, correctPos: i }; });
        for (var si = shuffled.length - 1; si > 0; si--) {
            var sj = Math.floor(Math.random() * (si + 1));
            var tmp = shuffled[si]; shuffled[si] = shuffled[sj]; shuffled[sj] = tmp;
        }

        var currentAns = [];
        var numberLabels = ['①', '②', '③', '④', '⑤'];
        var cardsArea = document.createElement('div');
        cardsArea.style.cssText = 'display:flex;flex-direction:column;gap:8px;padding-bottom:20px;width:100%;';

        shuffled.forEach(function(item) {
            var card = document.createElement('div');
            card.className = 'option-card';
            card.style.cssText = 'padding:12px 16px;font-size:16px;text-align:left;cursor:pointer;border:2px solid #e0e0e0;border-radius:12px;background:#fff;line-height:1.4;';
            card.textContent = item.text;

            card.onclick = function() {
                if (isAnimating) return;
                if (card.classList.contains('picked')) return;
                card.classList.add('picked');
                card.style.opacity = '0.4';
                card.style.pointerEvents = 'none';
                currentAns.push(item.correctPos);

                var badge = document.createElement('span');
                badge.style.cssText = 'display:inline-block;width:28px;height:28px;border-radius:50%;background:#1cb0f6;color:#fff;text-align:center;line-height:28px;font-size:14px;font-weight:bold;';
                badge.textContent = numberLabels[currentAns.length - 1];
                badge.onclick = function() {
                    if (isAnimating) return;
                    sortArea.removeChild(badge);
                    card.classList.remove('picked');
                    card.style.opacity = '1';
                    card.style.pointerEvents = 'auto';
                    currentAns = currentAns.filter(function(p) { return p !== item.correctPos; });
                    var badges = sortArea.querySelectorAll('span');
                    for (var bi = 0; bi < badges.length; bi++) badges[bi].textContent = numberLabels[bi];
                };
                sortArea.appendChild(badge);

                if (currentAns.length === sentences.length) {
                    var correctOrder = sentences.map(function(_, i) { return i; });
                    if (currentAns.join(',') === correctOrder.join(',')) {
                        handleAnswer(true);
                    } else {
                        handleAnswer(false, null, sentences.join(' → '));
                        setTimeout(function() {
                            sortArea.innerHTML = '';
                            var allCards = cardsArea.querySelectorAll('.option-card');
                            for (var ri = 0; ri < allCards.length; ri++) {
                                allCards[ri].classList.remove('picked');
                                allCards[ri].style.opacity = '1';
                                allCards[ri].style.pointerEvents = 'auto';
                            }
                            currentAns = [];
                        }, 2500);
                    }
                }
            };
            cardsArea.appendChild(card);
        });
        container.appendChild(cardsArea);

    } else if (q.type === 'spot_diff') {
        const descEl = document.createElement('h3');
        descEl.textContent = q.question;
        if(q.chinese) descEl.textContent += ` (${q.chinese})`;
        container.appendChild(descEl);

        const grid = document.createElement('div');
        grid.style.display = 'flex';
        grid.style.justifyContent = 'space-around';
        grid.style.width = '100%';
        container.appendChild(grid);

        [q.image1, q.image2].forEach((img, idx) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.innerHTML = img;
            card.style.padding = '30px';
            card.onclick = () => handleAnswer(idx === q.correct, card);
            grid.appendChild(card);
        });

    } else if (q.type === 'scenario') {
        // 情境题 - Problem-Based Learning
        const scenarioBox = document.createElement('div');
        scenarioBox.style.background = '#FFF8E1';
        scenarioBox.style.border = '2px solid #FFB74D';
        scenarioBox.style.borderRadius = '16px';
        scenarioBox.style.padding = '15px';
        scenarioBox.style.marginBottom = '15px';
        scenarioBox.style.textAlign = 'center';

        // 情境图片/emoji
        if (q.scenarioImage) {
            const imgEl = document.createElement('div');
            imgEl.style.fontSize = '48px';
            imgEl.style.marginBottom = '10px';
            imgEl.innerHTML = q.scenarioImage;
            scenarioBox.appendChild(imgEl);
        }

        // 情境描述
        const scenarioText = document.createElement('p');
        scenarioText.style.fontSize = '16px';
        scenarioText.style.margin = '0 0 5px 0';
        scenarioText.style.fontWeight = 'bold';
        scenarioText.textContent = q.scenario || '';
        scenarioBox.appendChild(scenarioText);

        // 中文提示
        if (q.chinese) {
            const chineseText = document.createElement('p');
            chineseText.style.fontSize = '14px';
            chineseText.style.color = '#666';
            chineseText.style.margin = '0';
            chineseText.textContent = q.chinese;
            scenarioBox.appendChild(chineseText);
        }

        container.appendChild(scenarioBox);

        // 问题
        const questionEl = document.createElement('h3');
        questionEl.style.textAlign = 'center';
        questionEl.style.marginBottom = '15px';
        questionEl.textContent = q.question || '';
        container.appendChild(questionEl);

        // 选项
        const grid = document.createElement('div');
        grid.className = 'options-grid';
        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.style.fontSize = '18px';
            card.style.padding = '15px';
            const isObj = typeof opt === 'object' && opt !== null;
            card.textContent = isObj ? opt.text : opt;
            card.onclick = () => {
                const isCorrect = isObj
                    ? opt.value === q.correct
                    : idx === q.correct;
                const correctOpt = q.options.find(o =>
                    typeof o === 'object' && o !== null ? o.value === q.correct : false
                );
                const correctAnswer = correctOpt ? correctOpt.text : q.options[q.correct];
                handleAnswer(isCorrect, card, correctAnswer);
            };
            grid.appendChild(card);
        });
        container.appendChild(grid);
    } else if (q.type === 'whack_mole') {
        var descEl = document.createElement('h3');
        descEl.innerHTML = '🔨 打中 <strong style="font-size:24px;color:#ff4b4b;">' + (q.word || q.sentence || '') + '</strong>';
        container.appendChild(descEl);

        var wmGrid = document.createElement('div');
        wmGrid.className = 'whack-mole-grid';
        var moles = [];

        q.options.forEach(function(opt, idx) {
            var hole = document.createElement('div');
            hole.className = 'whack-mole-hole';

            var mole = document.createElement('div');
            mole.className = 'whack-mole-item';
            var isOptObj = typeof opt === 'object' && opt !== null;
            mole.innerHTML = isOptObj ? opt.text : opt;
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

        // clear interval only on correct answer
        var origHandleAnswer = handleAnswer;
        handleAnswer = function(isCorrect, cardEl, fallback) {
            if (isCorrect) clearInterval(moleInterval);
            origHandleAnswer(isCorrect, cardEl, fallback);
        }
    } else if (q.type === 'duo_race') {
        var drTitle = document.createElement('h2');
        drTitle.style.color = '#ff4b4b';
        drTitle.innerHTML = '⚡ 比比谁更快 ⚡';
        container.appendChild(drTitle);

        var drDescEl = document.createElement('div');
        drDescEl.style.marginBottom = '20px';
        drDescEl.innerHTML = '谁先找到 <strong style="font-size:24px;color:#ff4b4b;">' + (q.word || q.sentence || q.chinese || '') + '</strong> ？';
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

             // Safely check if players array is defined for the current index
             var playerName = (typeof players !== 'undefined' && players && players[playerIdx]) ? players[playerIdx].name : ('Player ' + (playerIdx+1));
             var pname = document.createElement('h4');
             pname.textContent = playerName;
             pname.style.textAlign = 'center';
             playerArea.appendChild(pname);

             q.options.forEach(function(opt, idx) {
                 var card = document.createElement('div');
                 card.className = 'option-card';
                 card.style.marginBottom = '10px';
                 card.style.minHeight = '60px';
                 var isOptObj = typeof opt === 'object' && opt !== null;
                 card.innerHTML = isOptObj ? opt.text : opt;
                 card.onclick = function() {
                     // Temporary override currentPlayerIndex so the correct player gets the star
                     var originalPlayer = (typeof currentPlayerIndex !== 'undefined') ? currentPlayerIndex : 0;
                     if (typeof currentPlayerIndex !== 'undefined') currentPlayerIndex = playerIdx;
                     handleAnswer(idx === q.correct, card);
                     if (typeof currentPlayerIndex !== 'undefined') currentPlayerIndex = originalPlayer;
                 };
                 playerArea.appendChild(card);
             });
             raceArea.appendChild(playerArea);
        });
        container.appendChild(raceArea);
    }
}
