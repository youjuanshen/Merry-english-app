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
    }
}
