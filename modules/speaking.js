// speaking.js

function renderSpeakingQuestion(q, container) {
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
