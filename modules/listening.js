// listening.js

function renderListeningQuestion(q, container) {
    // 容错：如果题目数据不完整，自动跳过
    if (!q || (!q.options && q.type !== 'listen_tf' && q.type !== 'listen_sequence')) {
        var skipEl = document.createElement('div');
        skipEl.style.textAlign = 'center';
        skipEl.style.padding = '40px';
        skipEl.innerHTML = '<div style="font-size:40px;margin-bottom:15px;">⚠️</div>' +
            '<div style="font-size:18px;color:#888;">这道题数据不完整，自动跳过</div>';
        container.appendChild(skipEl);
        setTimeout(function() { handleAnswer(true); }, 1000);
        return;
    }
    // 打乱选项顺序（防止正确答案总在同一位置）
    if (q.options && q.options.length > 1 && typeof q.correct === 'number') {
        var correctVal = q.options[q.correct];
        for (var si = q.options.length - 1; si > 0; si--) {
            var sj = Math.floor(Math.random() * (si + 1));
            var stmp = q.options[si]; q.options[si] = q.options[sj]; q.options[sj] = stmp;
        }
        q.correct = q.options.indexOf(correctVal);
    }

    // 喇叭按钮（紧凑，节省空间给选项）
    var playBtn = document.createElement('button');
    playBtn.className = 'play-sound-btn animate-pop';
    playBtn.innerHTML = '🔊';
    // 使用CSS默认样式，不再内联覆盖
    playBtn.onclick = function() { speakWord(q.audio); };
    container.appendChild(playBtn);

    // 提示不要一开始就显示，只在答错时才显示
    // （由handleAnswer函数中的showProgressiveHint处理）

    // listen_sequence 有自己的播放逻辑，不走默认 auto play
    if (q.type !== 'listen_sequence') {
        setTimeout(function() { speakWord(q.audio); }, 300);
    }

    if (q.type === 'listen_select' || q.type === 'listen_question') {
        // Scenario 情境框（PBL）：如果题目有 context 字段，显示情境
        if (q.context) {
            var ctxBox = document.createElement('div');
            ctxBox.style.cssText = 'background:#FFF8E1;border:2px solid #FFB74D;border-radius:12px;padding:10px 14px;margin-bottom:10px;text-align:center;';
            ctxBox.innerHTML = '<div style="font-size:14px;color:#e65100;font-weight:bold;">' + q.context + '</div>';
            if (q.question) {
                ctxBox.innerHTML += '<div style="font-size:13px;color:#666;margin-top:4px;">' + q.question + '</div>';
            }
            container.appendChild(ctxBox);
        }
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
        // 听音排序：播放3个词的音频，学生按听到的顺序点击图片/文字
        // 理论：i+1（听力理解→排序输出）+ Play-based（游戏化排序）

        // 顶部：播放按钮 + 说明
        playBtn.innerHTML = '🔊 再听一遍';
        playBtn.style.cssText += 'font-size:14px;padding:8px 16px;white-space:nowrap;min-width:120px;width:auto;height:auto;border-radius:24px;';

        var instructionSeq = document.createElement('div');
        instructionSeq.style.cssText = 'text-align:center;margin-bottom:12px;font-size:16px;color:#666;font-weight:bold;';
        instructionSeq.textContent = '👂 听音频，按顺序点击！';
        container.appendChild(instructionSeq);

        // 已选区域（显示 ①②③）
        var sortArea = document.createElement('div');
        sortArea.style.cssText = 'display:flex;gap:8px;justify-content:center;min-height:50px;margin-bottom:12px;padding:8px;background:#f5f5f5;border-radius:12px;';
        container.appendChild(sortArea);

        // 选项区域（图片/文字卡片，乱序显示）
        // correctPos = 该词在 sequence 中的播放顺序位置
        var items = q.words.map(function(w, i) {
            // 提取词名：从图片标签 (bear.png → bear) 或纯文本
            var wordName = '';
            var imgMatch = w.match(/([\w-]+)\.(?:png|jpg|gif)/);
            if (imgMatch) {
                wordName = imgMatch[1].toLowerCase().replace(/_/g, ' ');
            } else {
                wordName = w.trim().toLowerCase();
            }

            // 在 sequence 中找到该词的正确位置
            var seqPos = i; // 默认回退
            if (q.sequence && wordName) {
                for (var si = 0; si < q.sequence.length; si++) {
                    var seqWord = q.sequence[si].toLowerCase().replace(/-/g, ' ');
                    if (seqWord === wordName || wordName.indexOf(seqWord) !== -1 || seqWord.indexOf(wordName) !== -1) {
                        seqPos = si;
                        break;
                    }
                }
            }
            return { content: w, correctPos: seqPos };
        });
        // 打乱
        for (var si = items.length - 1; si > 0; si--) {
            var sj = Math.floor(Math.random() * (si + 1));
            var stmp = items[si]; items[si] = items[sj]; items[sj] = stmp;
        }

        var cardsContainer = document.createElement('div');
        cardsContainer.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap;justify-content:center;';

        var currentAns = [];
        var numberLabels = ['①', '②', '③', '④', '⑤'];

        // 自动播放音频序列（正常速度）
        function playSequence() {
            var audios = q.sequence || [];
            var delay = 0;
            audios.forEach(function(word, i) {
                setTimeout(function() {
                    if (window.speakWord) speakWord(word);
                }, delay);
                delay += 1200;
            });
        }

        // 逐词慢速播放（支架 Level 2 用）
        function playSequenceSlow() {
            var audios = q.sequence || [];
            var delay = 0;
            audios.forEach(function(word, i) {
                setTimeout(function() {
                    if (window.speakWord) speakWord(word);
                    // 播放时短暂高亮对应的编号提示
                    var numHint = document.getElementById('seq-num-hint');
                    if (numHint) numHint.textContent = '第' + (i + 1) + '个';
                }, delay);
                delay += 2000; // 间隔更长，给学生思考时间
            });
        }

        // 高亮第一个应该点的卡片（支架 Level 3 用）
        function highlightFirstCorrect() {
            var allCards = cardsContainer.querySelectorAll('.option-card');
            for (var hi = 0; hi < allCards.length; hi++) {
                if (!allCards[hi].classList.contains('picked') && allCards[hi].dataset.correctPos === '0') {
                    allCards[hi].style.border = '3px solid #4caf50';
                    allCards[hi].style.boxShadow = '0 0 10px rgba(76,175,80,0.5)';
                    break;
                }
            }
        }

        // 点击播放按钮重播
        playBtn.onclick = function() {
            var wc = window.wrongCount || 0;
            if (wc >= 2) { playSequenceSlow(); } else { playSequence(); }
        };
        // 自动播放
        setTimeout(playSequence, 500);

        // 支架提示区域
        var seqHintArea = document.createElement('div');
        seqHintArea.id = 'seq-num-hint';
        seqHintArea.style.cssText = 'text-align:center;font-size:14px;color:#999;min-height:20px;margin-bottom:4px;';
        container.appendChild(seqHintArea);

        items.forEach(function(item, displayIdx) {
            var card = document.createElement('div');
            card.className = 'option-card';
            card.style.cssText = 'padding:10px 16px;font-size:18px;text-align:center;cursor:pointer;min-width:80px;min-height:60px;display:flex;align-items:center;justify-content:center;border:2px solid #e0e0e0;border-radius:12px;background:#fff;position:relative;';
            card.innerHTML = item.content;
            card.dataset.correctPos = item.correctPos;

            card.onclick = function() {
                if (isAnimating) return;
                if (card.classList.contains('picked')) return;

                // 标记已选
                card.classList.add('picked');
                card.style.opacity = '0.4';
                card.style.pointerEvents = 'none';
                currentAns.push(item.correctPos);

                // 在已选区显示编号
                var badge = document.createElement('div');
                badge.style.cssText = 'width:40px;height:40px;border-radius:50%;background:#1cb0f6;color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;';
                badge.textContent = numberLabels[currentAns.length - 1] || currentAns.length;
                badge.onclick = function() {
                    // 点击已选的可以撤销
                    if (isAnimating) return;
                    sortArea.removeChild(badge);
                    card.classList.remove('picked');
                    card.style.opacity = '1';
                    card.style.pointerEvents = 'auto';
                    currentAns = currentAns.filter(function(p) { return p !== item.correctPos; });
                    // 重新编号
                    var badges = sortArea.querySelectorAll('div');
                    for (var bi = 0; bi < badges.length; bi++) {
                        badges[bi].textContent = numberLabels[bi] || (bi + 1);
                    }
                };
                sortArea.appendChild(badge);

                // 全部选完，判断对错
                var totalItems = q.sequence ? q.sequence.length : q.words.length;
                if (currentAns.length === totalItems) {
                    // 正确顺序就是 0,1,2,...
                    var correctOrder = [];
                    for (var ci = 0; ci < totalItems; ci++) correctOrder.push(ci);
                    var isCorrect = currentAns.join(',') === correctOrder.join(',');

                    if (isCorrect) {
                        handleAnswer(true);
                    } else {
                        // 答错：显示正确顺序，重置让学生再试
                        var correctWords = (q.sequence || []).join(' → ');
                        handleAnswer(false, null, correctWords);
                        setTimeout(function() {
                            sortArea.innerHTML = '';
                            var allCards = cardsContainer.querySelectorAll('.option-card');
                            for (var ri = 0; ri < allCards.length; ri++) {
                                allCards[ri].classList.remove('picked');
                                allCards[ri].style.opacity = '1';
                                allCards[ri].style.pointerEvents = 'auto';
                            }
                            currentAns = [];
                            // 渐进支架重播
                            var wc = window.wrongCount || 0;
                            if (wc >= 3) {
                                // Level 3+：慢速逐词播放 + 高亮第一个
                                playSequenceSlow();
                                setTimeout(highlightFirstCorrect, 500);
                            } else if (wc >= 2) {
                                // Level 2：慢速逐词播放（每词之间停顿更长）
                                playSequenceSlow();
                            } else {
                                // Level 1：正常速度重播
                                playSequence();
                            }
                        }, 2500);
                    }
                }
            };
            cardsContainer.appendChild(card);
        });
        container.appendChild(cardsContainer);
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

        // clear interval only on correct answer
        var origHandleAnswer = handleAnswer;
        handleAnswer = function(isCorrect, cardEl) {
            if (isCorrect) clearInterval(moleInterval);
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
