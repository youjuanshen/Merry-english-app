// speaking.js

function renderSpeakingQuestion(q, container) {
    if (q.type === 'wheel_spin') {
        renderWheelSpin(q, container);
        return;
    }
    // 统一简洁布局：单词/句子 + 中文 + 麦克风，一屏搞定
    if (q.type === 'repeat_word' || q.type === 'repeat_sentence' || q.type === 'picture_speak') {
        // 如果有图片，小尺寸显示
        if (q.type === 'picture_speak' && q.image) {
            var imgEl = document.createElement('div');
            imgEl.style.cssText = 'text-align:center;margin-bottom:5px;';
            imgEl.innerHTML = q.image;
            container.appendChild(imgEl);
        }
        // 英文单词/句子（核心内容）
        var word = q.word || q.sentence || q.expected || '';
        if (word) {
            var wordEl = document.createElement('div');
            wordEl.style.cssText = 'text-align:center;font-size:' + (word.length > 15 ? '26px' : '38px') + ';font-weight:bold;margin-bottom:2px;';
            wordEl.textContent = word;
            container.appendChild(wordEl);
        }
        // 中文翻译（小字灰色）
        if (q.chinese) {
            var chEl = document.createElement('div');
            chEl.style.cssText = 'text-align:center;font-size:14px;color:#aaa;margin-bottom:8px;';
            chEl.textContent = q.chinese;
            container.appendChild(chEl);
        }
    } else if (q.type === 'coop_speak_guess') {
        // Dual interface in one container
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.height = '100%';
        container.style.padding = '10px';
        
        // Describer section
        const describerName = players[currentPlayerIndex] ? players[currentPlayerIndex].name.replace(/^\d+\.\s*/, '') : 'Player 1';
        const guesserName = players[1 - currentPlayerIndex] ? players[1 - currentPlayerIndex].name.replace(/^\d+\.\s*/, '') : 'Player 2';
        
        const topHalf = document.createElement('div');
        topHalf.style.flex = '1';
        topHalf.style.borderBottom = '3px dashed #ddd';
        topHalf.style.paddingBottom = '10px';
        topHalf.style.marginBottom = '15px';
        topHalf.innerHTML = `
            <div style="font-size:18px; color:var(--primary); font-weight:bold; margin-bottom:5px;">
                🗣️ 描述方：${describerName}
            </div>
            <div style="font-size:14px; color:var(--gray-shadow); margin-bottom:10px;">
                向下方的同学描述这个词的特征或读出音标：
            </div>
            <div style="font-size:45px; font-weight:bold; letter-spacing:2px; color:#333;">
                ${q.word}
            </div>
            <div style="font-size:18px; color:#888; margin-top:5px;">
                ${q.chinese}
            </div>
        `;
        
        // Guesser section
        const bottomHalf = document.createElement('div');
        bottomHalf.style.flex = '1';
        bottomHalf.innerHTML = `
            <div style="font-size:18px; color:var(--secondary); font-weight:bold; margin-bottom:10px;">
                👆 猜图方：${guesserName}
            </div>
            <div style="font-size:14px; color:var(--gray-shadow); margin-bottom:10px;">
                听搭档描述，快速点击正确图片！
            </div>
        `;
        
        const grid = document.createElement('div');
        grid.className = 'options-grid';
        grid.style.marginTop = '0';
        
        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.style.fontSize = '60px';
            card.style.padding = '10px';
            card.innerHTML = (typeof opt === 'object' && opt !== null) ? opt.text : opt;
            card.onclick = () => {
                handleAnswer(idx === q.correct, card);
            };
            grid.appendChild(card);
        });

        bottomHalf.appendChild(grid);
        
        container.appendChild(topHalf);
        container.appendChild(bottomHalf);
        
        // Disable regular "play audio" button since this is a coop question
        return;
    }

    // 🔊和🎤放同一行，统一大小
    var btnRow = document.createElement('div');
    btnRow.style.cssText = 'display:flex;justify-content:center;align-items:center;gap:20px;margin-bottom:8px;';

    var demoBtn = document.createElement('button');
    demoBtn.style.cssText = 'background:#1cb0f6;border:none;border-radius:50%;width:70px;height:70px;font-size:30px;color:white;cursor:pointer;box-shadow:0 4px 0 #0d8ecf;';
    demoBtn.innerHTML = '🔊';
    demoBtn.onclick = function() { speakWord(q.word || q.sentence || q.expected); };

    var recordBtn = document.createElement('button');
    recordBtn.style.cssText = 'width:70px;height:70px;border-radius:50%;background:#58CC02;color:white;font-size:30px;border:none;box-shadow:0 4px 0 #46a302;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s;';
    recordBtn.innerHTML = '🎤';

    btnRow.appendChild(demoBtn);
    btnRow.appendChild(recordBtn);
    container.appendChild(btnRow);

    var statusText = document.createElement('div');
    statusText.style.cssText = 'margin-top:5px;font-size:13px;font-weight:bold;min-height:20px;color:#888;text-align:center;';
    statusText.textContent = '🔊听示范  🎤录音';

    // 录音中脉冲动画
    if (!document.getElementById('recording-pulse-style')) {
        var pulseStyle = document.createElement('style');
        pulseStyle.id = 'recording-pulse-style';
        pulseStyle.textContent = '@keyframes recordPulse{0%{box-shadow:0 0 0 0 rgba(255,75,75,0.5)}70%{box-shadow:0 0 0 20px rgba(255,75,75,0)}100%{box-shadow:0 0 0 0 rgba(255,75,75,0)}}';
        document.head.appendChild(pulseStyle);
    }

    var isRecording = false;

    recordBtn.onclick = function() {
        if(isAnimating) return;

        if (!isRecording) {
            isRecording = true;
            recordBtn.style.background = '#ff4b4b';
            recordBtn.style.boxShadow = '0 0 0 0 rgba(255,75,75,0.5)';
            recordBtn.style.animation = 'recordPulse 1.5s infinite';
            recordBtn.style.webkitAnimation = 'recordPulse 1.5s infinite';
            recordBtn.style.transform = 'scale(1.1)';
            recordBtn.innerHTML = '🎤';
            statusText.textContent = '🔴 录音中...';
            statusText.style.color = '#ff4b4b';
        } else {
            isRecording = false;
            recordBtn.style.background = '#58CC02';
            recordBtn.style.boxShadow = '0 6px 0 #46a302';
            recordBtn.style.animation = 'none';
            recordBtn.style.webkitAnimation = 'none';
            recordBtn.style.transform = 'scale(1)';
            recordBtn.innerHTML = '✅';
            statusText.textContent = '评分中...';
            statusText.style.color = '#888';
            isAnimating = true;

            setTimeout(function() {
                var mockScore = Math.floor(Math.random() * 41) + 60;
                var starCount = mockScore >= 100 ? 5 : mockScore >= 80 ? 4 : mockScore >= 60 ? 3 : mockScore >= 40 ? 2 : 1;
                var stars = '';
                for (var s = 0; s < starCount; s++) stars += '⭐';

                statusText.innerHTML = '<span style="color:#58CC02;font-size:24px;">得分: ' + mockScore + ' ' + stars + '</span>';

                isAnimating = false;
                handleAnswer(true);
            }, 1000);
        }
    };

    container.appendChild(statusText);
}

function renderWheelSpin(q, container) {
    const descEl = document.createElement('h3');
    descEl.textContent = '转动转盘！ ' + (q.chinese || '');
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
            transitionEl.textContent = "你抽到了: " + subQ.word;
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
