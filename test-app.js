/**
 * Merry英语App 自动化测试脚本
 *
 * 功能：
 * 1. 自动打开页面，等待欢迎倒计时
 * 2. 自动选择两个学生
 * 3. 自动进入学习模块
 * 4. 自动答题并截图
 * 5. 检查JS错误
 *
 * 运行方式：
 *   node test-app.js
 *
 * 截图保存在：test-screenshots/ 文件夹
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// 配置
const CONFIG = {
    baseUrl: 'http://localhost:8080',
    screenshotDir: './test-screenshots',
    headless: false,  // false = 显示浏览器窗口，方便观察
    slowMo: 100,      // 每个操作间隔100ms，方便看清
    viewport: {
        width: 414,   // iPhone 7 Plus 宽度
        height: 736   // iPhone 7 Plus 高度
    }
};

// 测试结果收集
const testResults = {
    passed: [],
    failed: [],
    errors: [],
    screenshots: []
};

// 工具函数：等待并截图
async function screenshot(page, name) {
    const filename = `${Date.now()}-${name}.png`;
    const filepath = path.join(CONFIG.screenshotDir, filename);
    await page.screenshot({ path: filepath, fullPage: true });
    testResults.screenshots.push(filename);
    console.log(`📸 截图: ${filename}`);
    return filepath;
}

// 工具函数：安全点击
async function safeClick(page, selector, description) {
    try {
        await page.waitForSelector(selector, { timeout: 5000 });
        await page.click(selector);
        console.log(`✅ 点击: ${description}`);
        return true;
    } catch (e) {
        console.log(`❌ 点击失败: ${description} - ${e.message}`);
        testResults.failed.push(`点击失败: ${description}`);
        return false;
    }
}

// 工具函数：等待元素出现
async function waitFor(page, selector, description, timeout = 10000) {
    try {
        await page.waitForSelector(selector, { timeout });
        console.log(`✅ 找到: ${description}`);
        return true;
    } catch (e) {
        console.log(`❌ 未找到: ${description}`);
        testResults.failed.push(`未找到: ${description}`);
        return false;
    }
}

// 测试1：欢迎页面
async function testWelcomePage(page) {
    console.log('\n🧪 测试1: 欢迎页面');

    await page.goto(CONFIG.baseUrl);
    await screenshot(page, '01-welcome');

    // 检查欢迎页面元素
    const hasWelcome = await waitFor(page, '#welcome-screen', '欢迎页面');

    // 等待倒计时结束（最多5秒）
    console.log('⏳ 等待倒计时...');
    await page.waitForFunction(
        () => !document.getElementById('welcome-screen') ||
              document.getElementById('welcome-screen').style.display === 'none',
        { timeout: 10000 }
    ).catch(() => console.log('⚠️ 倒计时超时'));

    await screenshot(page, '02-after-countdown');
    testResults.passed.push('欢迎页面加载');
}

// 测试2：学生选择页面
async function testStudentSelection(page) {
    console.log('\n🧪 测试2: 学生选择页面');

    // 等待学生选择页面出现
    const hasStudentScreen = await waitFor(page, '#student-select-screen', '学生选择页面');
    if (!hasStudentScreen) return;

    await screenshot(page, '03-student-select');

    // 选择第一个学生
    const student1 = await safeClick(page, '.student-card:nth-child(1)', '选择学生1');
    await new Promise(r => setTimeout(r, 300));

    // 选择第二个学生
    const student2 = await safeClick(page, '.student-card:nth-child(2)', '选择学生2');
    await new Promise(r => setTimeout(r, 300));

    await screenshot(page, '04-students-selected');

    // 点击开始学习
    const startBtn = await safeClick(page, '#start-game-btn', '开始学习按钮');
    await new Promise(r => setTimeout(r, 500));

    testResults.passed.push('学生选择流程');
}

// 测试3：模块选择页面
async function testModuleSelection(page) {
    console.log('\n🧪 测试3: 模块选择页面');

    // 等待模块选择页面
    const hasModuleScreen = await waitFor(page, '#module-select-screen', '模块选择页面', 3000);

    if (hasModuleScreen) {
        await screenshot(page, '05-module-select');

        // 选择听力模块
        const listening = await safeClick(page, '[data-module="listening"]', '听力模块');
        await new Promise(r => setTimeout(r, 500));

        testResults.passed.push('模块选择');
    } else {
        console.log('⚠️ 可能直接进入游戏（教师端控制）');
    }
}

// 测试4：答题界面
async function testGameplay(page) {
    console.log('\n🧪 测试4: 答题界面');

    // 等待游戏界面
    const hasGame = await waitFor(page, '#game-screen', '游戏界面', 5000);
    if (!hasGame) {
        console.log('⚠️ 游戏界面未出现，可能需要教师端启动');
        return;
    }

    await screenshot(page, '06-game-start');

    // 等待题目出现
    await new Promise(r => setTimeout(r, 1000));
    await screenshot(page, '07-question');

    // 尝试点击一个选项
    const hasOption = await page.$('.option-card');
    if (hasOption) {
        await safeClick(page, '.option-card:first-child', '第一个选项');
        await new Promise(r => setTimeout(r, 1500));
        await screenshot(page, '08-after-answer');
        testResults.passed.push('答题流程');
    }

    // 检查反馈面板
    const hasFeedback = await page.$('#feedback-panel');
    if (hasFeedback) {
        await screenshot(page, '09-feedback');
        testResults.passed.push('反馈面板显示');
    }
}

// 测试5：检查JS错误
async function testJSErrors(page) {
    console.log('\n🧪 测试5: 检查JS错误');

    if (testResults.errors.length === 0) {
        console.log('✅ 无JS错误');
        testResults.passed.push('无JS错误');
    } else {
        console.log(`❌ 发现 ${testResults.errors.length} 个JS错误:`);
        testResults.errors.forEach((err, i) => {
            console.log(`   ${i + 1}. ${err}`);
        });
    }
}

// 测试6：教师端
async function testTeacherPanel(page) {
    console.log('\n🧪 测试6: 教师端');

    await page.goto(CONFIG.baseUrl + '/teacher/');
    await new Promise(r => setTimeout(r, 1000));
    await screenshot(page, '10-teacher-index');

    // 测试各个教师端页面
    const teacherPages = ['prepare.html', 'control.html', 'dashboard.html', 'feedback.html'];

    for (let i = 0; i < teacherPages.length; i++) {
        const pageName = teacherPages[i];
        await page.goto(`${CONFIG.baseUrl}/teacher/${pageName}`);
        await new Promise(r => setTimeout(r, 800));
        await screenshot(page, `11-teacher-${pageName.replace('.html', '')}`);
        console.log(`✅ 教师端页面: ${pageName}`);
    }

    testResults.passed.push('教师端页面加载');
}

// 主测试流程
async function runTests() {
    console.log('🚀 Merry英语App 自动化测试开始\n');
    console.log('=' .repeat(50));

    // 创建截图目录
    if (!fs.existsSync(CONFIG.screenshotDir)) {
        fs.mkdirSync(CONFIG.screenshotDir, { recursive: true });
    }

    // 启动浏览器
    const browser = await puppeteer.launch({
        headless: CONFIG.headless,
        slowMo: CONFIG.slowMo,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport(CONFIG.viewport);

    // 监听JS错误
    page.on('pageerror', error => {
        testResults.errors.push(error.message);
        console.log(`🔴 JS错误: ${error.message}`);
    });

    // 监听console输出
    page.on('console', msg => {
        if (msg.type() === 'error') {
            testResults.errors.push(msg.text());
        }
    });

    try {
        // 运行测试
        await testWelcomePage(page);
        await testStudentSelection(page);
        await testModuleSelection(page);
        await testGameplay(page);
        await testJSErrors(page);
        await testTeacherPanel(page);

    } catch (e) {
        console.log(`\n💥 测试出错: ${e.message}`);
        await screenshot(page, 'error-' + Date.now());
    }

    // 关闭浏览器
    await browser.close();

    // 输出测试报告
    console.log('\n' + '='.repeat(50));
    console.log('📊 测试报告\n');

    console.log(`✅ 通过: ${testResults.passed.length}`);
    testResults.passed.forEach(t => console.log(`   - ${t}`));

    if (testResults.failed.length > 0) {
        console.log(`\n❌ 失败: ${testResults.failed.length}`);
        testResults.failed.forEach(t => console.log(`   - ${t}`));
    }

    if (testResults.errors.length > 0) {
        console.log(`\n🔴 JS错误: ${testResults.errors.length}`);
        testResults.errors.forEach(t => console.log(`   - ${t}`));
    }

    console.log(`\n📸 截图: ${testResults.screenshots.length} 张`);
    console.log(`   保存在: ${path.resolve(CONFIG.screenshotDir)}`);

    console.log('\n' + '='.repeat(50));
    console.log('🏁 测试完成\n');

    // 保存测试报告
    const reportPath = path.join(CONFIG.screenshotDir, 'test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(testResults, null, 2));
    console.log(`📄 报告已保存: ${reportPath}`);
}

// 运行
runTests().catch(console.error);
