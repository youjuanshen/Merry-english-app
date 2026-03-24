#!/usr/bin/env node
// ============================================================
// 题库全自动质量检测 v2
// 用法: node test-all.js
// 检测标准来自 Merry 测试中发现的13类问题
// ============================================================

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const imgDir = path.join(__dirname, 'assets', 'images');
const files = fs.readdirSync(dataDir).filter(f => /^unit\d+_lesson\d+\.js$/.test(f)).sort();

// 已有图片列表
const existingImages = fs.existsSync(imgDir) ? fs.readdirSync(imgDir) : [];

let totalIssues = 0;
const issuesByFile = {};

function issue(file, severity, category, msg) {
  if (!issuesByFile[file]) issuesByFile[file] = [];
  issuesByFile[file].push({ severity, category, msg });
  totalIssues++;
}

// 课本原文
const textbook = {
  'U1L1': { vocab: ['animal','bear','horse','bird','panda'], sentences: ['This is a bear','That is a horse','It can run fast','This is a red bird','That is a blue bird','They are beautiful','That is a panda','black and white',"It's cute",'So many animals',"Let's go and have a look","OK, let's go","It's big"] },
  'U1L2': { vocab: ['small','ear','eye','baby','long','leg','these','those'], sentences: ['These are pandas','small ears','black eyes','Those are horses','They are brown','long legs','like grass','Baby pandas','They are lovely','ride a horse','go and see those horses'] },
  'U1L3': { vocab: ['jump','mouth','meat','tiger','no','rabbit','carrot'], sentences: ['I have an animal friend','Please guess','Is it a rabbit','Yes, it is',"No, it isn't","It's a tiger",'I can jump','My mouth is small','two long ears','like carrots','I can run fast','My mouth is big','like meat','What am I'] },
  'U1L4': { vocab: ['draw','nose','face','eye','ear','mouth'], sentences: ['draw together','This is a face','These are two eyes','That is a face','Those are two eyes',"It's a cat",'two ears','a nose and a mouth','Is it a panda'] },
  'U2L1': { vocab: ['T-shirt','wear','size'], sentences: ['Put on your','What size do you wear','too big','too small'] },
  'U2L2': { vocab: ['whose','shirt','jacket'], sentences: ['Whose shirt is this','Is this your jacket','Here you are','Thank you',"You're welcome",'This is my jacket','This is my shirt','Whose jacket'] },
  'U2L3': { vocab: ['where','sweater','under','bed','chair','schoolbag'], sentences: ['Where is my sweater','Is it on your bed','Is it under your chair','in your schoolbag','put away your clothes','thank you very much'] },
  'U2L4': { vocab: ['sport','shoe','skirt','shorts'], sentences: ['Put on your T-shirt and shorts','I want my sports shoes','too big for you','too small for me','Put on your sports shoes',"can't wear your skirt",'My sports shoes, please'] },
};

// 图片-audio上下文匹配规则
const contextRules = [
  ['small ears','panda'],['black eyes','panda'],['long legs','horse'],['long ears','rabbit'],
  ['run fast','horse'],['lovely','baby'],['carrots','rabbit'],['meat','tiger'],['draw','drawing'],
  ['mouth is small','rabbit'],['mouth is big','tiger'],['can jump','rabbit'],['i can jump','rabbit'],
];

// ============================
// 开始检测
// ============================

files.forEach(file => {
  const code = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const idMatch = code.match(/"id":\s*"(\w+)"/);
  const lessonId = idMatch ? idMatch[1] : '';
  const expectedVar = file.replace('.js', '');
  const varMatch = code.match(/var\s+(\w+)\s*=/);

  // #3 变量名不匹配
  if (varMatch && varMatch[1] !== expectedVar) {
    if (!(file === 'unit1_lesson1.js' && varMatch[1] === 'lesson1')) {
      issue(file, 'P0', '变量名不匹配', `变量 "${varMatch[1]}" ≠ 文件名 "${expectedVar}" → 课程加载会失败`);
    }
  }

  // #1 中文audio
  const cnAudio = [...code.matchAll(/"audio":\s*"([^"]*[\u4e00-\u9fa5][^"]*)"/g)];
  cnAudio.forEach(m => issue(file, 'P0', '中文audio', `${m[1].substring(0,60)}`));

  // #2 填空audio
  const blankAudio = [...code.matchAll(/"audio":\s*"([^"]*___[^"]*)"/g)];
  blankAudio.forEach(m => issue(file, 'P0', '填空audio', `${m[1].substring(0,60)}`));

  // #4 图片不匹配audio + #5 复数配单数 + #12 身体部位选图
  const lsPattern = /"type":\s*"listen_select",\s*"audio":\s*"([^"]+)",\s*"options":\s*\[(.*?)\],\s*"correct":\s*(\d+)/gs;
  let m;
  while ((m = lsPattern.exec(code)) !== null) {
    const audio = m[1], options = m[2], correctIdx = parseInt(m[3]);
    if (!options.includes('<img')) continue;

    const imgs = [...options.matchAll(/assets\/images\/(\w+)\.png/g)].map(x => x[1]);
    if (correctIdx >= imgs.length) {
      issue(file, 'P0', '索引越界', `correct=${correctIdx} 但只有 ${imgs.length} 选项: "${audio.substring(0,40)}"`);
      continue;
    }

    const correctImg = imgs[correctIdx].toLowerCase();
    const audioLower = audio.toLowerCase();

    // #4 图片匹配检查
    let matched = audioLower.includes(correctImg) || audioLower.includes(correctImg.replace(/_/g, ' '));
    if (!matched) {
      for (const [kw, animal] of contextRules) {
        if (audioLower.includes(kw) && correctImg.includes(animal)) { matched = true; break; }
      }
    }
    if (!matched) {
      issue(file, 'P0', '图片不匹配', `audio="${audio.substring(0,50)}" → img=${correctImg}`);
    }

    // #5 复数配单数
    if (/^(these|those|they)\s/i.test(audio) && options.includes('<img')) {
      if (!correctImg.includes('baby') && !correctImg.includes('drawing')) {
        issue(file, 'P1', '复数配单数图', `"${audio.substring(0,40)}" 用单数图片 ${correctImg}.png`);
      }
    }
  }

  // #12 身体部位/动作词直接选图（没有句子上下文）
  const bodyParts = ['ear', 'eye', 'nose', 'mouth', 'face', 'leg', 'jump', 'meat', 'carrot', 'no', 'small'];
  const singleWordImg = /"audio":\s*"(\w+)",\s*"options":\s*\[([^]*?)\]/g;
  let swm;
  while ((swm = singleWordImg.exec(code)) !== null) {
    if (swm[2].includes('<img') && bodyParts.includes(swm[1].toLowerCase())) {
      issue(file, 'P2', '单词选图不当', `"${swm[1]}" 是身体部位/动作词，不应用动物图片选择`);
    }
  }

  // #6 图片文件是否存在
  const imgRefs = [...code.matchAll(/assets\/images\/(\w+\.png)/g)].map(x => x[1]);
  const uniqueImgs = [...new Set(imgRefs)];
  uniqueImgs.forEach(img => {
    if (!existingImages.includes(img)) {
      issue(file, 'P1', '图片缺失', `引用了 ${img} 但文件不存在`);
    }
  });

  // #13 前测出对话补全
  const pretestStart = code.indexOf('"pretest"');
  const practiceStart = code.indexOf('"practice"');
  if (pretestStart !== -1 && practiceStart !== -1) {
    const pretest = code.substring(pretestStart, practiceStart);
    if (pretest.includes('______') || pretest.includes('B: _')) {
      issue(file, 'P2', '前测对话补全', '前测中出现了对话补全题（太难）');
    }
  }

  // #9 #10 课文覆盖度
  const tb = textbook[lessonId];
  if (tb) {
    const lower = code.toLowerCase();

    // 词汇
    const missingV = tb.vocab.filter(v => !lower.includes(v.toLowerCase()));
    if (missingV.length > 0) {
      issue(file, 'P1', '词汇缺失', `缺少: ${missingV.join(', ')}`);
    }

    // 句子 - 分模块检查（writing模块特殊处理：sentence_order的words数组拼接后也算覆盖）
    const mods = ['listening', 'reading', 'writing', 'speaking'];
    for (const mod of mods) {
      const modIdx = code.indexOf(`"${mod}"`);
      if (modIdx === -1) { issue(file, 'P1', '模块缺失', `缺少 ${mod} 模块`); continue; }
      const nextMod = mods[mods.indexOf(mod) + 1];
      const endIdx = nextMod ? code.indexOf(`"${nextMod}"`, modIdx) : code.length;
      const modContent = code.substring(modIdx, endIdx);
      const modLower = modContent.toLowerCase();

      // 对 writing/speaking，也检查 "words" 数组拼接后的句子
      let expandedContent = modLower;
      if (mod === 'writing' || mod === 'speaking') {
        const wordsArrays = [...modContent.matchAll(/"words":\s*\[([^\]]+)\]/g)];
        for (const wa of wordsArrays) {
          const joined = wa[1].replace(/"/g, '').replace(/,\s*/g, ' ').trim();
          expandedContent += ' ' + joined.toLowerCase();
        }
        // Also check "expected" and "word" fields for speaking
        const expectedFields = [...modContent.matchAll(/"(?:expected|word)":\s*"([^"]+)"/g)];
        for (const ef of expectedFields) {
          expandedContent += ' ' + ef[1].toLowerCase();
        }
      }

      const missing = tb.sentences.filter(s => !expandedContent.includes(s.toLowerCase()));
      if (missing.length > 0) {
        issue(file, 'P1', `${mod}句子缺失`, `缺 ${missing.length}/${tb.sentences.length}: ${missing.slice(0,3).join(' | ')}${missing.length > 3 ? ' ...' : ''}`);
      }
    }
  }
});

// ============================
// 输出报告
// ============================

console.log('\n' + '═'.repeat(70));
console.log('  📊 题库质量检测报告');
console.log('  检测文件: ' + files.length + ' 个');
console.log('  检测时间: ' + new Date().toLocaleString());
console.log('═'.repeat(70));

if (totalIssues === 0) {
  console.log('\n  ✅ 全部通过！没有发现问题。\n');
} else {
  // 按严重级别统计
  let p0 = 0, p1 = 0, p2 = 0;
  Object.values(issuesByFile).flat().forEach(i => {
    if (i.severity === 'P0') p0++;
    else if (i.severity === 'P1') p1++;
    else p2++;
  });

  console.log(`\n  发现 ${totalIssues} 个问题: 🔴 P0=${p0}  🟡 P1=${p1}  🔵 P2=${p2}\n`);

  // 按文件输出
  for (const [file, issues] of Object.entries(issuesByFile)) {
    console.log(`\n📄 ${file} (${issues.length} 个问题)`);
    console.log('-'.repeat(50));
    issues.forEach(i => {
      const icon = i.severity === 'P0' ? '🔴' : i.severity === 'P1' ? '🟡' : '🔵';
      console.log(`  ${icon} [${i.category}] ${i.msg}`);
    });
  }

  // 分类汇总
  console.log('\n' + '═'.repeat(70));
  console.log('  📋 按类型汇总');
  console.log('═'.repeat(70));
  const cats = {};
  Object.values(issuesByFile).flat().forEach(i => {
    const key = `${i.severity} ${i.category}`;
    cats[key] = (cats[key] || 0) + 1;
  });
  Object.entries(cats).sort().forEach(([k, v]) => {
    const icon = k.startsWith('P0') ? '🔴' : k.startsWith('P1') ? '🟡' : '🔵';
    console.log(`  ${icon} ${k}: ${v} 个`);
  });
}

console.log('\n' + '═'.repeat(70) + '\n');
