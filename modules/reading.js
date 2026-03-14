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
    }
}
