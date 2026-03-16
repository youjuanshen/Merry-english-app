/**
 * Web Audio API 音效系统
 * 完全本地内存生成，无需下载庞大音频文件
 */

const SoundSystem = (function() {
    let audioCtx = null;
    let isMuted = false;

    function init() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContext();
        }
    }

    // 必须在用户第一次交互（点击）时调用，以解锁 iOS 音频限制
    function resume() {
        init();
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }

    function toggleMute() {
        isMuted = !isMuted;
        return isMuted;
    }

    function playTone(freq, type, duration, vol=0.1, delay=0) {
        if (isMuted) return;
        init();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
        
        // 消除音爆的包络线
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime + delay);
        gainNode.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + delay + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + duration);

        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc.start(audioCtx.currentTime + delay);
        osc.stop(audioCtx.currentTime + delay + duration);
    }

    return {
        resume,
        toggleMute,
        
        // 按钮点击：轻微的"哒"
        playClick: () => {
            playTone(400, 'sine', 0.1, 0.05);
        },

        // 答对：短促的"叮咚" (高音双重)
        playCorrect: () => {
            playTone(880, 'sine', 0.15, 0.1); // A5
            playTone(1108.73, 'sine', 0.3, 0.1, 0.1); // C#6
        },

        // 答错：温和的"嗡" (低音)
        playWrong: () => {
            playTone(150, 'sawtooth', 0.3, 0.1);
        },

        // 连击(combo)：越来越高的音调
        playCombo: (comboCount) => {
            // 基础音 440Hz (A4)，每连击升半音等
            const baseFreq = 440;
            const freq = baseFreq * Math.pow(1.059463, Math.min(comboCount, 12)); 
            playTone(freq, 'sine', 0.2, 0.1);
            playTone(freq * 1.5, 'sine', 0.3, 0.05, 0.1); 
        },

        // 成就解锁：胜利号角
        playAchievement: () => {
            playTone(523.25, 'square', 0.2, 0.08, 0.0); // C5
            playTone(659.25, 'square', 0.2, 0.08, 0.2); // E5
            playTone(783.99, 'square', 0.4, 0.08, 0.4); // G5
            playTone(1046.50, 'square', 0.6, 0.08, 0.6); // C6
        },

        // 关卡完成：欢呼 (简化为快节奏和弦琶音)
        playLevelComplete: () => {
            let delay = 0;
            const notes = [440, 554.37, 659.25, 880, 659.25, 880, 1108.73];
            for (let f of notes) {
                playTone(f, 'sine', 0.15, 0.1, delay);
                delay += 0.1;
            }
        },

        // 欢迎页倒计时 3-2-1-GO!
        playCountdownTick: () => {
            // 3-2-1 时的"叮"
            playTone(600, 'sine', 0.1, 0.1);
        },
        playCountdownGo: () => {
            // GO 时的"嘟嘟嘟"
            playTone(1200, 'square', 0.3, 0.1);
        }
    };
})();

// 全局暴露
window.SoundSystem = SoundSystem;
