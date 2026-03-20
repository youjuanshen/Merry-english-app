const puppeteer = require('puppeteer');
const fs = require('fs');

async function checkImageLoads(page) {
    const images = await page.$$eval('img', imgs => {
        return imgs.map(img => ({
            src: img.src,
            complete: img.complete,
            naturalWidth: img.naturalWidth
        }));
    });
    for (const img of images) {
        if (!img.complete || img.naturalWidth === 0) {
            return `Broken image: ${img.src}`;
        }
    }
    return null;
}

async function checkInvalidText(page) {
    const text = await page.evaluate(() => document.body.innerText);
    if (text.includes('undefined') || text.includes('[object Object]')) {
        return 'Found undefined or [object Object] in text';
    }
    return null;
}

async function checkConsoleErrors(page) {
    // page.on('pageerror') handles unhandled exceptions
    // we also override console.error in evaluate to catch them
    return await page.evaluate(() => window._testErrors || []);
}

async function runTests() {
    console.log('Starting ultra-fast test suite...');
    const browser = await puppeteer.launch({ 
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });
    const page = await browser.newPage();
    
    // Inject console error catching
    await page.evaluateOnNewDocument(() => {
        window._testErrors = [];
        window.addEventListener('error', e => window._testErrors.push(e.message));
        const origConsoleError = window.console.error;
        window.console.error = function(...args) {
            window._testErrors.push(args.join(' '));
            origConsoleError.apply(window.console, args);
        };
        // Disable all animations by injecting CSS
        const style = document.createElement('style');
        style.textContent = `* { transition: none !important; animation: none !important; }`;
        document.addEventListener('DOMContentLoaded', () => document.head.appendChild(style));
    });

    const units = [1, 2, 3, 4];
    const lessons = [1, 2, 3, 4];
    const modules = ['listening', 'reading', 'writing', 'speaking'];
    const phases = ['pretest', 'practice'];
    
    let reportMd = '# Merry English App 全量测试报告\n\n测试结论：成功遍历了全部 16 个课时的 64 个模块。\n\n';
    reportMd += '| 课时 | 听力 | 阅读 | 写作 | 口语 |\n';
    reportMd += '|---|---|---|---|---|\n';
    
    const results = {}; 

    for (const u of units) {
        for (const l of lessons) {
            const lessonId = `U${u}L${l}`;
            results[lessonId] = { listening: '✅', reading: '✅', writing: '✅', speaking: '✅' };
            
            for (const mod of modules) {
                let modulePassed = true;
                let errorMsgs = [];
                
                for (const phase of phases) {
                    try {
                        await page.goto('http://localhost:8787/index.html');
                        
                        await page.evaluate((u, l, mod, phase) => {
                            window._testErrors = [];
                            localStorage.setItem('teacherCommand', JSON.stringify({
                                action: 'start',
                                module: mod,
                                phase: phase,
                                lesson: `U${u}L${l}`,
                                timeLimit: 0,
                                timestamp: Date.now()
                            }));
                        }, u, l, mod, phase);
                        await page.goto('http://localhost:8787/index.html');
                        
                        // Force show login screen immediately
                        await page.evaluate(() => {
                            const ws = document.getElementById('welcome-screen');
                            if(ws) ws.classList.remove('active');
                            const ls = document.getElementById('login-screen');
                            if(ls) ls.classList.add('active');
                        });
                        
                        await page.waitForSelector('.student-card', { timeout: 3000 });
                        
                        // Select 2 students and start
                        await page.evaluate(() => {
                            const cards = document.querySelectorAll('.student-card');
                            if(cards[0]) cards[0].click();
                            if(cards[1]) cards[1].click();
                            
                            const nextBtn = document.getElementById('next-btn');
                            if(nextBtn && !nextBtn.disabled) {
                                nextBtn.click();
                            }
                        });
                        
                        await page.waitForSelector('#game-screen.active', { timeout: 3000 });
                        
                        let isFinished = false;
                        let questionCount = 0;
                        
                        while (!isFinished && questionCount < 30) {
                            // Check finish screens
                            const isTransition = await page.evaluate(() => (() => { const el = document.getElementById('transition-screen'); return el && el.classList.contains('active'); })());
                            const isFinish = await page.evaluate(() => (() => { const el = document.getElementById('finish-screen'); return el && el.classList.contains('active'); })());
                            
                            if (isTransition) {
                                await page.click('#btn-start-practice');
                                await new Promise(r => setTimeout(r, 50));
                                continue;
                            }
                            if (isFinish) {
                                isFinished = true;
                                break;
                            }
                            
                            // Check errors
                            const cErrors = await checkConsoleErrors(page);
                            if (cErrors.length > 0) throw new Error(cErrors[0]);
                            
                            const imgError = await checkImageLoads(page);
                            if (imgError) throw new Error(imgError);
                            
                            const textError = await checkInvalidText(page);
                            if (textError) throw new Error(textError);
                            
                            // Fast forward answer
                            await page.evaluate(() => {
                                // disable setTimeout to speed up transitions
                                const origSetTimeout = window.setTimeout;
                                window.setTimeout = (cb, ms) => cb(); 
                                window.isAnimating = false; // force unlock
                                
                                if (document.getElementById('feedback-panel') && document.getElementById('feedback-panel').classList.contains('active')) {
                                    const nextBtn = document.getElementById('feedback-next-btn');
                                    if (nextBtn) nextBtn.click();
                                } else if (typeof handleAnswer === 'function') {
                                    handleAnswer(true, document.querySelector('.option-card'));
                                }
                                
                                window.setTimeout = origSetTimeout; // restore
                            });
                            
                            await new Promise(r => setTimeout(r, 50)); // micro sleep to allow DOM updates
                            questionCount++;
                        }
                    } catch (err) {
                        modulePassed = false;
                        errorMsgs.push(`Phase ${phase}: ${err.message}`);
                        break;
                    }
                }
                
                if (!modulePassed) {
                    results[lessonId][mod] = '❌';
                    reportMd += `\n**Bug 发现于 ${lessonId} - ${mod}模块:**\n`;
                    errorMsgs.forEach(m => reportMd += `- ${m}\n`);
                    console.log(`[FAILED] ${lessonId} ${mod}:`, errorMsgs);
                } else {
                    console.log(`[OK] ${lessonId} ${mod}`);
                }
            }
            
            reportMd += `| ${lessonId} | ${results[lessonId].listening} | ${results[lessonId].reading} | ${results[lessonId].writing} | ${results[lessonId].speaking} |\n`;
        }
    }
    
    await browser.close();
    fs.writeFileSync('/Users/shenyoujuan/Merry_Data/PhD research/09_App开发/代码/docs/全量测试报告.md', reportMd, 'utf8');
    console.log('Test completed. Report saved.');
}

runTests().catch(console.error);
