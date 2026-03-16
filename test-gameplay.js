/**
 * 完整游戏流程测试：选学生 → 答题 → 检查星星
 */
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const DIR = './test-screenshots';
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

async function shot(page, name) {
    const f = path.join(DIR, `gameplay-${name}.png`);
    await page.screenshot({ path: f, fullPage: true });
    console.log(`📸 ${name}`);
}

async function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
}

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 414, height: 736 });

    // 监听JS错误
    page.on('pageerror', e => console.log('🔴 JS错误:', e.message));
    page.on('console', msg => {
        if (msg.type() === 'error') console.log('🔴 Console:', msg.text());
        // 打印调试日志
        if (msg.text().includes('教师') || msg.text().includes('模块') || msg.text().includes('题目') || msg.text().includes('课程')) {
            console.log('📋 Log:', msg.text());
        }
    });

    // ===== 1. 打开页面 =====
    console.log('\n===== 1. 打开页面 =====');
    await page.goto('http://localhost:8080');
    await delay(500);

    // 等待欢迎倒计时结束
    console.log('⏳ 等待倒计时...');
    await page.waitForFunction(() => {
        const ws = document.getElementById('welcome-screen');
        return !ws || !ws.classList.contains('active');
    }, { timeout: 15000 }).catch(() => console.log('⚠️ 倒计时超时'));

    await delay(500);
    await shot(page, '01-after-welcome');

    // ===== 2. 选择学生 =====
    console.log('\n===== 2. 选择学生 =====');

    // 检查当前页面状态
    const screenState = await page.evaluate(() => {
        const screens = ['welcome-screen', 'login-screen', 'module-screen', 'game-screen', 'finish-screen'];
        return screens.filter(id => {
            const el = document.getElementById(id);
            return el && el.classList.contains('active');
        });
    });
    console.log('当前活跃页面:', screenState);

    // 点击第一个学生
    const cards = await page.$$('.student-card');
    console.log(`找到 ${cards.length} 个学生卡片`);

    if (cards.length >= 2) {
        await cards[0].click();
        await delay(300);
        await cards[1].click();
        await delay(300);
        await shot(page, '02-students-selected');

        // 检查选中状态
        const selected = await page.evaluate(() => {
            const sel = document.querySelectorAll('.student-card.selected');
            return Array.from(sel).map(s => s.textContent.trim());
        });
        console.log('已选学生:', selected);
    }

    // 点击"开始学习"（按钮ID是next-btn）
    await delay(500);
    const startBtn = await page.$('#next-btn');
    if (startBtn) {
        // 检查是否disabled
        const isDisabled = await page.evaluate(el => el.disabled, startBtn);
        console.log('按钮disabled:', isDisabled);
        if (!isDisabled) {
            await startBtn.click();
            console.log('✅ 点击"开始学习"');
        } else {
            console.log('❌ 按钮仍然disabled');
        }
        await delay(2000);
    } else {
        console.log('❌ 未找到next-btn');
    }

    await shot(page, '03-game-start');

    // ===== 3. 检查游戏界面 =====
    console.log('\n===== 3. 检查游戏界面 =====');

    const gameActive = await page.evaluate(() => {
        const gs = document.getElementById('game-screen');
        return gs && gs.classList.contains('active');
    });
    console.log('游戏界面激活:', gameActive);

    if (!gameActive) {
        // 可能在模块选择页面
        const moduleActive = await page.evaluate(() => {
            const ms = document.getElementById('module-screen');
            return ms && ms.classList.contains('active');
        });
        if (moduleActive) {
            console.log('在模块选择页面，点击听力模块');
            await page.click('.module-card');
            await delay(1000);
        }
    }

    // 检查星星初始状态
    const starsBefore = await page.evaluate(() => {
        const s1 = document.querySelector('#player1-ui .stars');
        const s2 = document.querySelector('#player2-ui .stars');
        return {
            p1: s1 ? s1.textContent.trim() : 'not found',
            p2: s2 ? s2.textContent.trim() : 'not found'
        };
    });
    console.log('星星初始状态:', starsBefore);

    // ===== 4. 答题测试（答3题）=====
    console.log('\n===== 4. 答题测试 =====');

    for (let i = 0; i < 3; i++) {
        console.log(`\n--- 第 ${i + 1} 题 ---`);
        await delay(500);
        await shot(page, `04-q${i + 1}-before`);

        // 尝试点击选项
        const option = await page.$('.option-card');
        const tfOption = await page.$('.tf-option-card');
        const sortWord = await page.$('.sort-word');

        if (option) {
            await option.click();
            console.log('✅ 点击了选项卡');
        } else if (tfOption) {
            await tfOption.click();
            console.log('✅ 点击了判断选项');
        } else if (sortWord) {
            // 点击所有排序词
            const words = await page.$$('.sort-word');
            for (const w of words) {
                await w.click();
                await delay(200);
            }
            console.log('✅ 点击了排序词');
        } else {
            console.log('❌ 未找到可点击的选项');
            await shot(page, `04-q${i + 1}-no-option`);
            continue;
        }

        await delay(1500);
        await shot(page, `04-q${i + 1}-after-answer`);

        // 检查反馈面板是否出现
        const hasFeedback = await page.$('#feedback-panel');
        if (hasFeedback) {
            console.log('✅ 反馈面板出现');

            // 检查反馈面板内容
            const feedbackText = await page.evaluate(() => {
                const panel = document.getElementById('feedback-panel');
                return panel ? panel.textContent.trim() : 'not found';
            });
            console.log('反馈内容:', feedbackText.substring(0, 50));

            // 点击"继续"
            const continueBtn = await page.$('.feedback-continue-btn');
            if (continueBtn) {
                await continueBtn.click();
                console.log('✅ 点击"继续"');
                await delay(500);
            } else {
                console.log('❌ 未找到"继续"按钮');
            }
        } else {
            console.log('⚠️ 无反馈面板（可能答错了，等待重试）');
            await delay(2000);
        }

        // 检查当前星星
        const starsNow = await page.evaluate(() => {
            const s1 = document.querySelector('#player1-ui .stars');
            const s2 = document.querySelector('#player2-ui .stars');
            return {
                p1: s1 ? s1.textContent.trim() : 'not found',
                p2: s2 ? s2.textContent.trim() : 'not found'
            };
        });
        console.log('当前星星:', starsNow);
    }

    // ===== 5. 最终状态 =====
    console.log('\n===== 5. 最终状态 =====');
    await shot(page, '05-final');

    const finalStars = await page.evaluate(() => {
        const s1 = document.querySelector('#player1-ui .stars');
        const s2 = document.querySelector('#player2-ui .stars');
        return {
            p1: s1 ? s1.textContent.trim() : 'not found',
            p2: s2 ? s2.textContent.trim() : 'not found'
        };
    });
    console.log('最终星星:', finalStars);

    // 检查绿色答案条是否还存在
    const hasCorrectDisplay = await page.$('#correct-answer-display');
    console.log('绿色答案条残留:', !!hasCorrectDisplay);

    await browser.close();
    console.log('\n🏁 测试完成');
})().catch(console.error);
