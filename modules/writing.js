// writing.js

function renderWritingQuestion(q, container) {
    if (q.type === 'letter_select') {
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
        descEl.textContent = `TRACE LETTER FOR: ${q.word}`;
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
        hint.textContent = 'Tap to trace';
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
        descEl.textContent = q.type === 'word_puzzle' ? 'Spell the word! ' : 'Order the sentence! ';
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
                         setTimeout(() => handleAnswer(true), 500);
                     } else {
                         setTimeout(() => {
                             handleAnswer(false);
                             // Return all pieces
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

    } else if (q.type === 'pinyin_fill') {
        const descEl = document.createElement('h3');
        descEl.textContent = 'Fill in the missing letter! ' + (q.chinese || '');
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
    }
}
