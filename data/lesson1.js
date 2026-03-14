// Unit 1 Lesson 1: This is a bear.
const lesson1 = {
  id: 'U1L1',
  title: 'This is a bear.',

  // ==================== 听力板块 ====================
  listening: {
    pretest: [
      // 1-4: 听单词选图（基础）
      { type: 'listen_select', audio: 'bear', options: ['🐻', '🐴'], correct: 0, chinese: '熊' },
      { type: 'listen_select', audio: 'horse', options: ['🐴', '🐦'], correct: 0, chinese: '马' },
      { type: 'listen_select', audio: 'bird', options: ['🐦', '🐼'], correct: 0, chinese: '鸟' },
      { type: 'listen_select', audio: 'panda', options: ['🐼', '🐻'], correct: 0, chinese: '熊猫' },

      // 5-8: 听句子选图
      { type: 'listen_select', audio: 'This is a bear.', options: ['🐻', '🐴', '🐦', '🐼'], correct: 0, chinese: '这是一只熊。' },
      { type: 'listen_select', audio: 'That is a horse.', options: ['🐻', '🐴', '🐦', '🐼'], correct: 1, chinese: '那是一匹马。' },
      { type: 'listen_select', audio: 'This is a bird.', options: ['🐻', '🐴', '🐦', '🐼'], correct: 2, chinese: '这是一只鸟。' },
      { type: 'listen_select', audio: 'That is a panda.', options: ['🐻', '🐴', '🐦', '🐼'], correct: 3, chinese: '那是一只熊猫。' },

      // 9-12: 判断对错
      { type: 'listen_tf', audio: 'This is a bear.', image: '🐻', correct: true, chinese: '这是一只熊。' },
      { type: 'listen_tf', audio: 'This is a bird.', image: '🐼', correct: false, chinese: '这是一只鸟。' },
      { type: 'listen_tf', audio: 'That is a horse.', image: '🐴', correct: true, chinese: '那是一匹马。' },
      { type: 'listen_tf', audio: 'That is a panda.', image: '🐦', correct: false, chinese: '那是一只熊猫。' }
    ],

    practice: [
      // 1-6: 听单词选图（基础复习）
      { type: 'listen_select', audio: 'bear', options: ['🐻', '🐴', '🐦', '🐼'], correct: 0, chinese: '熊' },
      { type: 'listen_select', audio: 'horse', options: ['🐻', '🐴', '🐦', '🐼'], correct: 1, chinese: '马' },
      { type: 'listen_select', audio: 'bird', options: ['🐻', '🐴', '🐦', '🐼'], correct: 2, chinese: '鸟' },
      { type: 'listen_select', audio: 'panda', options: ['🐻', '🐴', '🐦', '🐼'], correct: 3, chinese: '熊猫' },
      { type: 'listen_select', audio: 'This is a bear.', options: ['🐻', '🐴'], correct: 0, chinese: '这是一只熊。' },
      { type: 'listen_select', audio: 'That is a bird.', options: ['🐦', '🐼'], correct: 0, chinese: '那是一只鸟。' },

      // 7-12: 判断对错
      { type: 'listen_tf', audio: 'This is a panda.', image: '🐼', correct: true, chinese: '这是一只熊猫。' },
      { type: 'listen_tf', audio: 'That is a bear.', image: '🐴', correct: false, chinese: '那是一只熊。' },
      { type: 'listen_tf', audio: 'This is a horse.', image: '🐴', correct: true, chinese: '这是一匹马。' },
      { type: 'listen_tf', audio: 'That is a bird.', image: '🐻', correct: false, chinese: '那是一只鸟。' },
      { type: 'listen_tf', audio: "It's big.", image: '🐘', correct: true, chinese: '它很大。' },
      { type: 'listen_tf', audio: "It's cute.", image: '🐼', correct: true, chinese: '它很可爱。' },

      // 13-18: 听句子选图（进阶）
      { type: 'listen_select', audio: "This is a bear. It's big.", options: ['🐻', '🐭'], correct: 0, chinese: '这是一只熊。它很大。' },
      { type: 'listen_select', audio: "That is a panda. It's cute.", options: ['🐼', '🐯'], correct: 0, chinese: '那是一只熊猫。它很可爱。' },
      { type: 'listen_select', audio: 'This is a horse. It can run fast.', options: ['🐴', '🐢'], correct: 0, chinese: '这是一匹马。它跑得很快。' },
      { type: 'listen_select', audio: "That is a bird. It's beautiful.", options: ['🐦', '🐻'], correct: 0, chinese: '那是一只鸟。它很美丽。' },
      { type: 'listen_select', audio: "It's small.", options: ['🐭', '🐘'], correct: 0, chinese: '它很小。' },
      { type: 'listen_select', audio: "It can fly.", options: ['🐦', '🐴'], correct: 0, chinese: '它会飞。' },

      // 19-24: 听问题选答案
      { type: 'listen_select', audio: "What's this?", options: ['This is a bear.', 'Yes, it is.'], correct: 0, chinese: '这是什么？' },
      { type: 'listen_select', audio: "What's that?", options: ['That is a horse.', 'No, it isn\'t.'], correct: 0, chinese: '那是什么？' },
      { type: 'listen_select', audio: "Is it big?", options: ['Yes, it is.', 'It\'s a bear.'], correct: 0, chinese: '它大吗？' },
      { type: 'listen_select', audio: "Is it cute?", options: ['Yes, it is.', 'That is a panda.'], correct: 0, chinese: '它可爱吗？' },
      { type: 'listen_select', audio: "Is this a bird?", options: ['Yes, it is.', 'No, it isn\'t.'], correct: 0, chinese: '这是一只鸟吗？' },
      { type: 'listen_select', audio: "Is that a panda?", options: ['Yes, it is.', 'No, it isn\'t.'], correct: 0, chinese: '那是一只熊猫吗？' },

      // 25-30: 综合题
      { type: 'listen_tf', audio: 'Bears are big.', image: '🐻', correct: true, chinese: '熊很大。' },
      { type: 'listen_tf', audio: 'Birds can fly.', image: '🐦', correct: true, chinese: '鸟会飞。' },
      { type: 'listen_tf', audio: 'Horses can run fast.', image: '🐴', correct: true, chinese: '马跑得快。' },
      { type: 'listen_tf', audio: 'Pandas are black and white.', image: '🐼', correct: true, chinese: '熊猫是黑白色的。' },
      { type: 'listen_select', audio: 'I like pandas. They are cute.', options: ['🐼', '🐯'], correct: 0, chinese: '我喜欢熊猫。它们很可爱。' },
      { type: 'listen_select', audio: 'Look at the bird. It can fly.', options: ['🐦', '🐻'], correct: 0, chinese: '看那只鸟。它会飞。' }
    ]
  },

  // ==================== 阅读板块 ====================
  reading: {
    pretest: [
      // 1-4: 看单词选图
      { type: 'word_match', word: 'bear', options: ['🐻', '🐴', '🐦', '🐼'], correct: 0, chinese: '熊' },
      { type: 'word_match', word: 'horse', options: ['🐻', '🐴', '🐦', '🐼'], correct: 1, chinese: '马' },
      { type: 'word_match', word: 'bird', options: ['🐻', '🐴', '🐦', '🐼'], correct: 2, chinese: '鸟' },
      { type: 'word_match', word: 'panda', options: ['🐻', '🐴', '🐦', '🐼'], correct: 3, chinese: '熊猫' },

      // 5-8: 看句子选图
      { type: 'sentence_match', sentence: 'This is a bear.', options: ['🐻', '🐴'], correct: 0, chinese: '这是一只熊。' },
      { type: 'sentence_match', sentence: 'That is a horse.', options: ['🐴', '🐦'], correct: 0, chinese: '那是一匹马。' },
      { type: 'sentence_match', sentence: 'This is a bird.', options: ['🐦', '🐼'], correct: 0, chinese: '这是一只鸟。' },
      { type: 'sentence_match', sentence: 'That is a panda.', options: ['🐼', '🐻'], correct: 0, chinese: '那是一只熊猫。' },

      // 9-12: 看图选单词
      { type: 'word_match', word: '🐻', options: ['bear', 'bird', 'horse', 'panda'], correct: 0, chinese: '熊' },
      { type: 'word_match', word: '🐴', options: ['bear', 'bird', 'horse', 'panda'], correct: 2, chinese: '马' },
      { type: 'word_match', word: '🐦', options: ['bear', 'bird', 'horse', 'panda'], correct: 1, chinese: '鸟' },
      { type: 'word_match', word: '🐼', options: ['bear', 'bird', 'horse', 'panda'], correct: 3, chinese: '熊猫' }
    ],

    practice: [
      // 1-6: 单词配图
      { type: 'word_match', word: 'bear', options: ['🐻', '🐴'], correct: 0, chinese: '熊' },
      { type: 'word_match', word: 'horse', options: ['🐴', '🐦'], correct: 0, chinese: '马' },
      { type: 'word_match', word: 'bird', options: ['🐦', '🐼'], correct: 0, chinese: '鸟' },
      { type: 'word_match', word: 'panda', options: ['🐼', '🐻'], correct: 0, chinese: '熊猫' },
      { type: 'word_match', word: 'big', options: ['🐘', '🐭'], correct: 0, chinese: '大的' },
      { type: 'word_match', word: 'small', options: ['🐭', '🐘'], correct: 0, chinese: '小的' },

      // 7-12: 句子配图
      { type: 'sentence_match', sentence: "It's big.", options: ['🐘', '🐭'], correct: 0, chinese: '它很大。' },
      { type: 'sentence_match', sentence: "It's small.", options: ['🐭', '🐘'], correct: 0, chinese: '它很小。' },
      { type: 'sentence_match', sentence: "It's cute.", options: ['🐼', '🐯'], correct: 0, chinese: '它很可爱。' },
      { type: 'sentence_match', sentence: 'It can fly.', options: ['🐦', '🐴'], correct: 0, chinese: '它会飞。' },
      { type: 'sentence_match', sentence: 'It can run fast.', options: ['🐴', '🐢'], correct: 0, chinese: '它跑得快。' },
      { type: 'sentence_match', sentence: 'They are birds.', options: ['🐦🐦', '🐻🐻'], correct: 0, chinese: '它们是鸟。' },

      // 13-18: 看图选句子
      { type: 'sentence_match', sentence: '🐻', options: ['This is a bear.', 'This is a bird.'], correct: 0, chinese: '熊' },
      { type: 'sentence_match', sentence: '🐴', options: ['That is a horse.', 'That is a panda.'], correct: 0, chinese: '马' },
      { type: 'sentence_match', sentence: '🐦', options: ['This is a bird.', 'This is a bear.'], correct: 0, chinese: '鸟' },
      { type: 'sentence_match', sentence: '🐼', options: ['That is a panda.', 'That is a horse.'], correct: 0, chinese: '熊猫' },
      { type: 'sentence_match', sentence: '🐘', options: ["It's big.", "It's small."], correct: 0, chinese: '大象' },
      { type: 'sentence_match', sentence: '🐭', options: ["It's small.", "It's big."], correct: 0, chinese: '老鼠' },

      // 19-24: This/That辨析
      { type: 'sentence_match', sentence: '👉🐻 (近)', options: ['This is a bear.', 'That is a bear.'], correct: 0, chinese: '近处用This' },
      { type: 'sentence_match', sentence: '👉🐴 (远)', options: ['That is a horse.', 'This is a horse.'], correct: 0, chinese: '远处用That' },
      { type: 'sentence_match', sentence: '👉🐦 (近)', options: ['This is a bird.', 'That is a bird.'], correct: 0, chinese: '近处用This' },
      { type: 'sentence_match', sentence: '👉🐼 (远)', options: ['That is a panda.', 'This is a panda.'], correct: 0, chinese: '远处用That' },
      { type: 'word_match', word: 'This (近)', options: ['👆', '👉'], correct: 0, chinese: '这个（近）' },
      { type: 'word_match', word: 'That (远)', options: ['👉', '👆'], correct: 0, chinese: '那个（远）' },

      // 25-30: 综合阅读
      { type: 'sentence_match', sentence: "This is a bear. It's big.", options: ['🐻', '🐭'], correct: 0, chinese: '这是一只熊。它很大。' },
      { type: 'sentence_match', sentence: "That is a panda. It's cute.", options: ['🐼', '🐯'], correct: 0, chinese: '那是一只熊猫。它很可爱。' },
      { type: 'sentence_match', sentence: 'This is a bird. It can fly.', options: ['🐦', '🐴'], correct: 0, chinese: '这是一只鸟。它会飞。' },
      { type: 'sentence_match', sentence: 'That is a horse. It can run fast.', options: ['🐴', '🐢'], correct: 0, chinese: '那是一匹马。它跑得快。' },
      { type: 'word_match', word: 'animals', options: ['🐻🐴🐦🐼', '🚗📚🏠✏️'], correct: 0, chinese: '动物们' },
      { type: 'sentence_match', sentence: 'I like animals.', options: ['🐻🐴🐦🐼', '😊'], correct: 0, chinese: '我喜欢动物。' }
    ]
  },

  // ==================== 写作板块 ====================
  writing: {
    pretest: [
      // 1-4: 首字母选择
      { type: 'letter_select', prompt: 'bear 的首字母是?', image: '🐻', options: ['a', 'b', 'c'], correct: 1, chinese: '熊' },
      { type: 'letter_select', prompt: 'horse 的首字母是?', image: '🐴', options: ['g', 'h', 'i'], correct: 1, chinese: '马' },
      { type: 'letter_select', prompt: 'bird 的首字母是?', image: '🐦', options: ['a', 'b', 'c'], correct: 1, chinese: '鸟' },
      { type: 'letter_select', prompt: 'panda 的首字母是?', image: '🐼', options: ['n', 'o', 'p'], correct: 2, chinese: '熊猫' },

      // 5-8: 填空
      { type: 'fill_blank', prompt: 'This is a _____.', image: '🐻', options: ['bear', 'bird', 'horse'], correct: 0, chinese: '这是一只熊。' },
      { type: 'fill_blank', prompt: 'That is a _____.', image: '🐴', options: ['horse', 'panda', 'bird'], correct: 0, chinese: '那是一匹马。' },
      { type: 'fill_blank', prompt: 'This is a _____.', image: '🐦', options: ['bird', 'bear', 'panda'], correct: 0, chinese: '这是一只鸟。' },
      { type: 'fill_blank', prompt: 'That is a _____.', image: '🐼', options: ['panda', 'horse', 'bird'], correct: 0, chinese: '那是一只熊猫。' },

      // 9-12: This/That选择
      { type: 'fill_blank', prompt: '_____ is a bear. (近)', image: '👆🐻', options: ['This', 'That'], correct: 0, chinese: '这是一只熊。' },
      { type: 'fill_blank', prompt: '_____ is a horse. (远)', image: '👉🐴', options: ['This', 'That'], correct: 1, chinese: '那是一匹马。' },
      { type: 'fill_blank', prompt: '_____ is a bird. (近)', image: '👆🐦', options: ['This', 'That'], correct: 0, chinese: '这是一只鸟。' },
      { type: 'fill_blank', prompt: '_____ is a panda. (远)', image: '👉🐼', options: ['This', 'That'], correct: 1, chinese: '那是一只熊猫。' }
    ],

    practice: [
      // 1-6: 首字母填空
      { type: 'letter_select', prompt: '_ear', image: '🐻', options: ['b', 'p', 'd'], correct: 0, chinese: '熊' },
      { type: 'letter_select', prompt: '_orse', image: '🐴', options: ['h', 'n', 'm'], correct: 0, chinese: '马' },
      { type: 'letter_select', prompt: '_ird', image: '🐦', options: ['b', 'd', 'p'], correct: 0, chinese: '鸟' },
      { type: 'letter_select', prompt: '_anda', image: '🐼', options: ['p', 'b', 'd'], correct: 0, chinese: '熊猫' },
      { type: 'letter_select', prompt: '_ig', image: '🐘', options: ['b', 'd', 'g'], correct: 0, chinese: '大的' },
      { type: 'letter_select', prompt: '_ute', image: '🐼', options: ['c', 'k', 'q'], correct: 0, chinese: '可爱的' },

      // 7-12: 句子填空
      { type: 'fill_blank', prompt: 'This _____ a bear.', image: '🐻', options: ['is', 'are', 'am'], correct: 0, chinese: '这是一只熊。' },
      { type: 'fill_blank', prompt: 'That _____ a horse.', image: '🐴', options: ['is', 'are', 'am'], correct: 0, chinese: '那是一匹马。' },
      { type: 'fill_blank', prompt: "It's _____ .", image: '🐘', options: ['big', 'small', 'cute'], correct: 0, chinese: '它很大。' },
      { type: 'fill_blank', prompt: "It's _____ .", image: '🐭', options: ['small', 'big', 'fast'], correct: 0, chinese: '它很小。' },
      { type: 'fill_blank', prompt: "It's _____ .", image: '🐼', options: ['cute', 'big', 'fast'], correct: 0, chinese: '它很可爱。' },
      { type: 'fill_blank', prompt: 'It can run _____ .', image: '🐴', options: ['fast', 'slow', 'big'], correct: 0, chinese: '它跑得快。' },

      // 13-18: 单词拼写（选字母）
      { type: 'letter_select', prompt: 'b_ar', image: '🐻', options: ['e', 'a', 'o'], correct: 0, chinese: '熊' },
      { type: 'letter_select', prompt: 'hor_e', image: '🐴', options: ['s', 'c', 'z'], correct: 0, chinese: '马' },
      { type: 'letter_select', prompt: 'bir_', image: '🐦', options: ['d', 't', 'p'], correct: 0, chinese: '鸟' },
      { type: 'letter_select', prompt: 'pand_', image: '🐼', options: ['a', 'e', 'o'], correct: 0, chinese: '熊猫' },
      { type: 'letter_select', prompt: 'Th_s', image: '👆', options: ['i', 'a', 'o'], correct: 0, chinese: '这个' },
      { type: 'letter_select', prompt: 'Th_t', image: '👉', options: ['a', 'i', 'o'], correct: 0, chinese: '那个' },

      // 19-24: a/an选择
      { type: 'fill_blank', prompt: 'This is _____ bear.', image: '🐻', options: ['a', 'an'], correct: 0, chinese: '这是一只熊。' },
      { type: 'fill_blank', prompt: 'That is _____ horse.', image: '🐴', options: ['a', 'an'], correct: 0, chinese: '那是一匹马。' },
      { type: 'fill_blank', prompt: 'This is _____ bird.', image: '🐦', options: ['a', 'an'], correct: 0, chinese: '这是一只鸟。' },
      { type: 'fill_blank', prompt: 'That is _____ elephant.', image: '🐘', options: ['an', 'a'], correct: 0, chinese: '那是一头大象。' },
      { type: 'fill_blank', prompt: 'This is _____ animal.', image: '🐻', options: ['an', 'a'], correct: 0, chinese: '这是一只动物。' },
      { type: 'fill_blank', prompt: 'That is _____ panda.', image: '🐼', options: ['a', 'an'], correct: 0, chinese: '那是一只熊猫。' },

      // 25-30: 综合
      { type: 'fill_blank', prompt: '_____ is a bear. It\'s big.', image: '👆🐻', options: ['This', 'That'], correct: 0, chinese: '这是一只熊。它很大。' },
      { type: 'fill_blank', prompt: '_____ is a panda. It\'s cute.', image: '👉🐼', options: ['That', 'This'], correct: 0, chinese: '那是一只熊猫。它很可爱。' },
      { type: 'fill_blank', prompt: 'This is a horse. It can _____ fast.', image: '🐴', options: ['run', 'fly', 'swim'], correct: 0, chinese: '这是一匹马。它跑得快。' },
      { type: 'fill_blank', prompt: 'That is a bird. It can _____ .', image: '🐦', options: ['fly', 'run', 'swim'], correct: 0, chinese: '那是一只鸟。它会飞。' },
      { type: 'letter_select', prompt: 'I like _nimals.', image: '🐻🐴🐦🐼', options: ['a', 'e', 'o'], correct: 0, chinese: '我喜欢动物。' },
      { type: 'fill_blank', prompt: 'They _____ birds.', image: '🐦🐦', options: ['are', 'is', 'am'], correct: 0, chinese: '它们是鸟。' }
    ]
  },

  // ==================== 口语板块 ====================
  speaking: {
    pretest: [
      // 1-4: 跟读单词
      { type: 'repeat_word', word: 'bear', image: '🐻', chinese: '熊' },
      { type: 'repeat_word', word: 'horse', image: '🐴', chinese: '马' },
      { type: 'repeat_word', word: 'bird', image: '🐦', chinese: '鸟' },
      { type: 'repeat_word', word: 'panda', image: '🐼', chinese: '熊猫' },

      // 5-8: 跟读句子
      { type: 'repeat_sentence', sentence: 'This is a bear.', image: '🐻', chinese: '这是一只熊。' },
      { type: 'repeat_sentence', sentence: 'That is a horse.', image: '🐴', chinese: '那是一匹马。' },
      { type: 'repeat_sentence', sentence: 'This is a bird.', image: '🐦', chinese: '这是一只鸟。' },
      { type: 'repeat_sentence', sentence: 'That is a panda.', image: '🐼', chinese: '那是一只熊猫。' },

      // 9-12: 看图说话
      { type: 'picture_speak', image: '🐻', expected: 'bear', chinese: '说出动物名称' },
      { type: 'picture_speak', image: '🐴', expected: 'horse', chinese: '说出动物名称' },
      { type: 'picture_speak', image: '🐦', expected: 'bird', chinese: '说出动物名称' },
      { type: 'picture_speak', image: '🐼', expected: 'panda', chinese: '说出动物名称' }
    ],

    practice: [
      // 1-6: 跟读单词
      { type: 'repeat_word', word: 'bear', image: '🐻', chinese: '熊' },
      { type: 'repeat_word', word: 'horse', image: '🐴', chinese: '马' },
      { type: 'repeat_word', word: 'bird', image: '🐦', chinese: '鸟' },
      { type: 'repeat_word', word: 'panda', image: '🐼', chinese: '熊猫' },
      { type: 'repeat_word', word: 'big', image: '🐘', chinese: '大的' },
      { type: 'repeat_word', word: 'cute', image: '🐼', chinese: '可爱的' },

      // 7-12: 跟读句子（基础）
      { type: 'repeat_sentence', sentence: 'This is a bear.', image: '🐻', chinese: '这是一只熊。' },
      { type: 'repeat_sentence', sentence: 'That is a horse.', image: '🐴', chinese: '那是一匹马。' },
      { type: 'repeat_sentence', sentence: 'This is a bird.', image: '🐦', chinese: '这是一只鸟。' },
      { type: 'repeat_sentence', sentence: 'That is a panda.', image: '🐼', chinese: '那是一只熊猫。' },
      { type: 'repeat_sentence', sentence: "It's big.", image: '🐘', chinese: '它很大。' },
      { type: 'repeat_sentence', sentence: "It's cute.", image: '🐼', chinese: '它很可爱。' },

      // 13-18: 看图说句子
      { type: 'picture_speak', image: '🐻', expected: 'This is a bear.', chinese: '说：这是一只熊。' },
      { type: 'picture_speak', image: '🐴', expected: 'That is a horse.', chinese: '说：那是一匹马。' },
      { type: 'picture_speak', image: '🐦', expected: 'This is a bird.', chinese: '说：这是一只鸟。' },
      { type: 'picture_speak', image: '🐼', expected: 'That is a panda.', chinese: '说：那是一只熊猫。' },
      { type: 'picture_speak', image: '🐘', expected: "It's big.", chinese: '说：它很大。' },
      { type: 'picture_speak', image: '🐭', expected: "It's small.", chinese: '说：它很小。' },

      // 19-24: 跟读句子（进阶）
      { type: 'repeat_sentence', sentence: "This is a bear. It's big.", image: '🐻', chinese: '这是一只熊。它很大。' },
      { type: 'repeat_sentence', sentence: "That is a panda. It's cute.", image: '🐼', chinese: '那是一只熊猫。它很可爱。' },
      { type: 'repeat_sentence', sentence: 'This is a horse. It can run fast.', image: '🐴', chinese: '这是一匹马。它跑得快。' },
      { type: 'repeat_sentence', sentence: 'That is a bird. It can fly.', image: '🐦', chinese: '那是一只鸟。它会飞。' },
      { type: 'repeat_sentence', sentence: 'I like animals.', image: '🐻🐴🐦🐼', chinese: '我喜欢动物。' },
      { type: 'repeat_sentence', sentence: 'They are cute.', image: '🐼🐼', chinese: '它们很可爱。' },

      // 25-30: 问答练习
      { type: 'repeat_sentence', sentence: "What's this? This is a bear.", image: '🐻', chinese: '这是什么？这是一只熊。' },
      { type: 'repeat_sentence', sentence: "What's that? That is a horse.", image: '🐴', chinese: '那是什么？那是一匹马。' },
      { type: 'repeat_sentence', sentence: 'Is it big? Yes, it is.', image: '🐘', chinese: '它大吗？是的。' },
      { type: 'repeat_sentence', sentence: 'Is it cute? Yes, it is.', image: '🐼', chinese: '它可爱吗？是的。' },
      { type: 'picture_speak', image: '🐻🐴🐦🐼', expected: 'I like animals.', chinese: '说：我喜欢动物。' },
      { type: 'picture_speak', image: '🐼', expected: "It's cute.", chinese: '说：它很可爱。' }
    ]
  }
};
