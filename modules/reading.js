// reading.js

let draggedEl = null;

function renderReadingQuestion(q, container) {
    if (q.type === 'word_match' || q.type === 'sentence_match') {
        const textEl = document.createElement('div');
        textEl.style.fontSize = q.type === 'word_match' ? '60px' : '40px';
        textEl.style.fontWeight = 'bold';
        textEl.style.marginBottom = '30px';
        textEl.style.textAlign = 'center';
        textEl.textContent = q.word || q.sentence;
        container.appendChild(textEl);

        const grid = document.createElement('div');
        grid.className = 'options-grid';
        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            if (opt.length > 2) {
                 // Might be text (e.g emojis with modifiers + text)
                 card.style.fontSize = '30px';
            } else {
                 card.style.fontSize = '60px'; // usually emoji
            }
            card.innerHTML = opt;
            card.onclick = () => {
                handleAnswer(idx === q.correct, card);
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
            descEl.textContent = 'Match words and pictures! ' + (q.chinese || '');
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
    }
}
