// speaking.js

function renderSpeakingQuestion(q, container) {
    if (q.type === 'wheel_spin') {
        renderWheelSpin(q, container);
        return;
    }
    if (q.type === 'repeat_word' || q.type === 'repeat_sentence') {
        const textEl = document.createElement('h2');
        textEl.style.fontSize = q.type === 'repeat_sentence' ? '40px' : '60px';
        textEl.style.textAlign = 'center';
        textEl.textContent = q.word || q.sentence;
        container.appendChild(textEl);
    } else if (q.type === 'picture_speak') {
        const imgEl = document.createElement('div');
        imgEl.style.fontSize = '80px';
        imgEl.style.marginBottom = '20px';
        imgEl.innerHTML = q.image;
        container.appendChild(imgEl);
    }

    // Play demo audio button
    const demoBtn = document.createElement('button');
    demoBtn.className = 'play-sound-btn animate-pop';
    demoBtn.style.marginBottom = '10px';
    demoBtn.innerHTML = '🔊';
    // Fallback to text to speech if audio file is not available natively yet
    demoBtn.onclick = () => speakWord(q.word || q.sentence || q.expected);
    container.appendChild(demoBtn);

    const hintEl = document.createElement('div');
    hintEl.style.color = 'var(--gray-shadow)';
    hintEl.style.marginBottom = '30px';
    hintEl.textContent = 'Listen to demo first';
    container.appendChild(hintEl);

    // Record button
    const recordBtn = document.createElement('button');
    recordBtn.style.width = '100px';
    recordBtn.style.height = '100px';
    recordBtn.style.borderRadius = '50%';
    recordBtn.style.backgroundColor = '#ff4b4b';
    recordBtn.style.color = 'white';
    recordBtn.style.fontSize = '40px';
    recordBtn.style.border = 'none';
    recordBtn.style.boxShadow = '0 6px 0 #cc0000';
    recordBtn.style.display = 'flex';
    recordBtn.style.alignItems = 'center';
    recordBtn.style.justifyContent = 'center';
    recordBtn.style.cursor = 'pointer';
    recordBtn.style.transition = 'all 0.2s';
    recordBtn.innerHTML = '🎤';

    const statusText = document.createElement('div');
    statusText.style.marginTop = '20px';
    statusText.style.fontSize = '24px';
    statusText.style.fontWeight = 'bold';
    statusText.style.minHeight = '30px';
    
    let isRecording = false;

    recordBtn.onclick = () => {
        if(isAnimating) return;
        
        if (!isRecording) {
            // Start recording (Mock)
            isRecording = true;
            recordBtn.style.backgroundColor = 'var(--secondary)';
            recordBtn.style.boxShadow = '0 6px 0 var(--secondary-shadow)';
            recordBtn.style.transform = 'scale(1.1)';
            recordBtn.innerHTML = '⬛'; // stop icon
            statusText.textContent = 'Recording: "..."';
            statusText.style.color = 'var(--text)';
        } else {
            // Stop recording
            isRecording = false;
            recordBtn.style.backgroundColor = '#ff4b4b';
            recordBtn.style.boxShadow = '0 6px 0 #cc0000';
            recordBtn.style.transform = 'scale(1)';
            recordBtn.innerHTML = '🎤';
            
            // Mock AI scoring process
            statusText.textContent = 'AI is scoring...';
            isAnimating = true;
            
            setTimeout(() => {
                // Random mock score between 60 and 100 for now
                const mockScore = Math.floor(Math.random() * 41) + 60;
                let stars = '⭐'.repeat(Math.ceil((mockScore-50)/10));
                
                statusText.innerHTML = `<span style="color:var(--primary); font-size:30px;">Score: ${mockScore} ${stars}</span>`;
                
                // Allow proceeding based on this mock interaction. Treat as correct.
                setTimeout(() => {
                    handleAnswer(true);
                }, 1500);

            }, 1000);
        }
    };

    container.appendChild(recordBtn);
    container.appendChild(statusText);
}

function renderWheelSpin(q, container) {
    const descEl = document.createElement('h3');
    descEl.textContent = 'Spin the wheel! ' + (q.chinese || '');
    container.appendChild(descEl);

    const wheelContainer = document.createElement('div');
    wheelContainer.style.width = '200px';
    wheelContainer.style.height = '200px';
    wheelContainer.style.borderRadius = '50%';
    wheelContainer.style.border = '10px solid var(--secondary)';
    wheelContainer.style.margin = '20px auto';
    wheelContainer.style.position = 'relative';
    wheelContainer.style.overflow = 'hidden';
    wheelContainer.style.cursor = 'pointer';
    wheelContainer.style.transition = 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
    
    // Simplistic wheel display
    const wordsEl = document.createElement('div');
    wordsEl.style.width = '100%';
    wordsEl.style.height = '100%';
    wordsEl.style.display = 'flex';
    wordsEl.style.flexDirection = 'column';
    wordsEl.style.justifyContent = 'space-around';
    wordsEl.style.alignItems = 'center';
    
    q.options.forEach(opt => {
        const item = document.createElement('div');
        item.textContent = opt;
        item.style.fontWeight = 'bold';
        wordsEl.appendChild(item);
    });

    wheelContainer.appendChild(wordsEl);
    
    const pointer = document.createElement('div');
    pointer.style.position = 'absolute';
    pointer.style.top = '-20px';
    pointer.style.left = '50%';
    pointer.style.transform = 'translateX(-50%)';
    pointer.style.width = '0';
    pointer.style.height = '0';
    pointer.style.borderLeft = '15px solid transparent';
    pointer.style.borderRight = '15px solid transparent';
    pointer.style.borderTop = '30px solid #ff4b4b';
    pointer.style.zIndex = '10';

    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.width = 'max-content';
    wrapper.style.margin = '0 auto';

    wrapper.appendChild(pointer);
    wrapper.appendChild(wheelContainer);
    container.appendChild(wrapper);

    wheelContainer.onclick = () => {
        if(isAnimating) return;
        isAnimating = true;
        
        const spins = 5;
        const randomOptIndex = Math.floor(Math.random() * q.options.length);
        const deg = spins * 360 + randomOptIndex * (360 / q.options.length);
        
        wheelContainer.style.transform = `rotate(${deg}deg)`;
        
        setTimeout(() => {
            isAnimating = false;
            // Now render the embedded question
            container.innerHTML = '';
            
            // Re-render as a speaking question of type_embedded
            const subQ = {
                type: q.type_embedded,
                word: q.options[randomOptIndex],
                chinese: q.chinese
            };
            
            const transitionEl = document.createElement('h2');
            transitionEl.textContent = "You got: " + subQ.word;
            transitionEl.className = 'animate-pop';
            transitionEl.style.color = 'var(--primary)';
            transitionEl.style.textAlign = 'center';
            container.appendChild(transitionEl);
            
            setTimeout(() => {
                container.innerHTML = '';
                renderSpeakingQuestion(subQ, container);
            }, 1500);
            
        }, 3000);
    };
}
