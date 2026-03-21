// reading.js

let draggedEl = null;

function renderReadingQuestion(q, container) {
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
        textEl.style.fontSize = '40px';
        textEl.style.fontWeight = 'bold';
        textEl.style.marginBottom = '30px';
        textEl.style.textAlign = 'center';
        textEl.textContent = q.sentence;
        container.appendChild(textEl);

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
            card.textContent = opt;
            card.onclick = () => {
                const correctAnswer = q.options[q.correct];
                handleAnswer(idx === q.correct, card, correctAnswer);
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
