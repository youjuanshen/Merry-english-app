// Unit 1 Lesson 1: This is a bear.
const lesson1 = {
  id: 'U1L1',
  title: 'This is a bear.',

  // 听力板块
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
      // 1-6: 打地鼠（快速反应）
      { type: 'whack_mole', audio: 'bear', options: ['<img src="assets/images/bear.png" width="80">', '<img src="assets/images/horse.png" width="80">', '<img src="assets/images/bird.png" width="80">', '<img src="assets/images/panda.png" width="80">'], correct: 0, timeLimit: 3, chinese: '熊' },
      { type: 'whack_mole', audio: 'horse', options: ['<img src="assets/images/bear.png" width="80">', '<img src="assets/images/horse.png" width="80">', '<img src="assets/images/bird.png" width="80">', '<img src="assets/images/panda.png" width="80">'], correct: 1, timeLimit: 3, chinese: '马' },
      { type: 'whack_mole', audio: 'bird', options: ['<img src="assets/images/bear.png" width="80">', '<img src="assets/images/horse.png" width="80">', '<img src="assets/images/bird.png" width="80">', '<img src="assets/images/panda.png" width="80">'], correct: 2, timeLimit: 3, chinese: '鸟' },
      { type: 'whack_mole', audio: 'panda', options: ['<img src="assets/images/bear.png" width="80">', '<img src="assets/images/horse.png" width="80">', '<img src="assets/images/bird.png" width="80">', '<img src="assets/images/panda.png" width="80">'], correct: 3, timeLimit: 3, chinese: '熊猫' },
      { type: 'whack_mole', audio: 'animal', options: ['<img src="assets/images/bear.png" width="80">', '🚗', '📚', '🏠'], correct: 0, timeLimit: 3, chinese: '动物' },
      { type: 'whack_mole', audio: 'This is a bear.', options: ['<img src="assets/images/bear.png" width="80">', '<img src="assets/images/horse.png" width="80">', '<img src="assets/images/bird.png" width="80">', '<img src="assets/images/panda.png" width="80">'], correct: 0, timeLimit: 4, chinese: '这是一只熊。' },

      // 7-12: 气球爆破
      { type: 'balloon_pop', text: 'bear', options: ['<img src="assets/images/bear.png" width="60">', '<img src="assets/images/horse.png" width="60">', '<img src="assets/images/bird.png" width="60">', '<img src="assets/images/panda.png" width="60">'], correct: 0, chinese: '熊' },
      { type: 'balloon_pop', text: 'This is a bird.', options: ['<img src="assets/images/bear.png" width="60">', '<img src="assets/images/horse.png" width="60">', '<img src="assets/images/bird.png" width="60">', '<img src="assets/images/panda.png" width="60">'], correct: 2, chinese: '这是一只鸟。' },
      { type: 'balloon_pop', text: 'That is a panda.', options: ['<img src="assets/images/bear.png" width="60">', '<img src="assets/images/horse.png" width="60">', '<img src="assets/images/bird.png" width="60">', '<img src="assets/images/panda.png" width="60">'], correct: 3, chinese: '那是一只熊猫。' },
      { type: 'balloon_pop', text: "It's big.", options: ['<img src="assets/images/elephant.png" width="60">', '<img src="assets/images/mouse.png" width="60">'], correct: 0, chinese: '它很大。' },
      { type: 'balloon_pop', text: "It's cute.", options: ['<img src="assets/images/panda.png" width="60">', '<img src="assets/images/tiger.png" width="60">'], correct: 0, chinese: '它很可爱。' },
      { type: 'balloon_pop', text: "It can run fast.", options: ['<img src="assets/images/horse.png" width="60">', '🐢'], correct: 0, chinese: '它跑得很快。' },

      // 13-18: 听音排序
      { type: 'listen_sequence', audio: 'bear, bird', words: ['<img src="assets/images/bear.png" width="60">', '<img src="assets/images/bird.png" width="60">', '<img src="assets/images/horse.png" width="60">'], correct: [0, 1], chinese: '熊，鸟' },
      { type: 'listen_sequence', audio: 'horse, panda', words: ['<img src="assets/images/horse.png" width="60">', '<img src="assets/images/panda.png" width="60">', '<img src="assets/images/bear.png" width="60">'], correct: [0, 1], chinese: '马，熊猫' },
      { type: 'listen_sequence', audio: 'bird, bear, panda', words: ['<img src="assets/images/bird.png" width="60">', '<img src="assets/images/bear.png" width="60">', '<img src="assets/images/panda.png" width="60">'], correct: [0, 1, 2], chinese: '鸟，熊，熊猫' },
      { type: 'listen_sequence', audio: 'panda, horse, bird', words: ['<img src="assets/images/panda.png" width="60">', '<img src="assets/images/horse.png" width="60">', '<img src="assets/images/bird.png" width="60">'], correct: [0, 1, 2], chinese: '熊猫，马，鸟' },
      { type: 'listen_sequence', audio: 'bear, horse, bird, panda', words: ['<img src="assets/images/bear.png" width="60">', '<img src="assets/images/horse.png" width="60">', '<img src="assets/images/bird.png" width="60">', '<img src="assets/images/panda.png" width="60">'], correct: [0, 1, 2, 3], chinese: '熊，马，鸟，熊猫' },
      { type: 'listen_sequence', audio: 'panda, bird, horse, bear', words: ['<img src="assets/images/panda.png" width="60">', '<img src="assets/images/bird.png" width="60">', '<img src="assets/images/horse.png" width="60">', '<img src="assets/images/bear.png" width="60">'], correct: [0, 1, 2, 3], chinese: '熊猫，鸟，马，熊' },

      // 19-24: 双人PK模式
      { type: 'duo_race', audio: 'This is a bear.', options: ['<img src="assets/images/bear.png" width="80">', '<img src="assets/images/horse.png" width="80">'], correct: 0, chinese: '这是一只熊。' },
      { type: 'duo_race', audio: 'That is a horse.', options: ['<img src="assets/images/horse.png" width="80">', '<img src="assets/images/panda.png" width="80">'], correct: 0, chinese: '那是一匹马。' },
      { type: 'duo_race', audio: 'This is a bird.', options: ['<img src="assets/images/bird.png" width="80">', '<img src="assets/images/bear.png" width="80">'], correct: 0, chinese: '这是一只鸟。' },
      { type: 'duo_race', audio: 'That is a panda.', options: ['<img src="assets/images/panda.png" width="80">', '<img src="assets/images/horse.png" width="80">'], correct: 0, chinese: '那是一只熊猫。' },
      { type: 'duo_race', audio: "It's big.", options: ['<img src="assets/images/elephant.png" width="80">', '<img src="assets/images/mouse.png" width="80">'], correct: 0, chinese: '它很大。' },
      { type: 'duo_race', audio: "It's cute.", options: ['<img src="assets/images/panda.png" width="80">', '<img src="assets/images/tiger.png" width="80">'], correct: 0, chinese: '它很可爱。' },
      
      // 25-30: 综合题
      { type: 'listen_select', audio: 'This is a bear. It\'s big.', options: ['<img src="assets/images/bear.png" width="80">', '<img src="assets/images/mouse.png" width="80">'], correct: 0, chinese: '这是一只熊。它很大。' },
      { type: 'listen_select', audio: 'That is a panda. It\'s cute.', options: ['<img src="assets/images/panda.png" width="80">', '<img src="assets/images/tiger.png" width="80">'], correct: 0, chinese: '那是一只熊猫。它很可爱。' },
      { type: 'listen_select', audio: 'This is a horse. It can run fast.', options: ['<img src="assets/images/horse.png" width="80">', '🐢'], correct: 0, chinese: '这是一匹马。它跑得很快。' }
    ]
  },

  // 阅读板块
  reading: {
    pretest: [
      { type: 'word_match', word: 'bear', options: ['<img src="assets/images/bear.png" width="80">', '<img src="assets/images/horse.png" width="80">', '<img src="assets/images/bird.png" width="80">', '<img src="assets/images/panda.png" width="80">'], correct: 0, chinese: '熊' },
      { type: 'word_match', word: 'horse', options: ['<img src="assets/images/bear.png" width="80">', '<img src="assets/images/horse.png" width="80">', '<img src="assets/images/bird.png" width="80">', '<img src="assets/images/panda.png" width="80">'], correct: 1, chinese: '马' },
      { type: 'sentence_match', sentence: 'This is a bear.', options: ['<img src="assets/images/bear.png" width="80">', '<img src="assets/images/bird.png" width="80">'], correct: 0, chinese: '这是一只熊。' },
      { type: 'sentence_match', sentence: 'They are birds.', options: ['<img src="assets/images/bird.png" width="80">', '<img src="assets/images/bear.png" width="80">'], correct: 0, chinese: '它们是鸟。' }
    ],
    practice: [
      {
        type: 'memory_match',
        pairs: [
          { word: 'bear', image: '<img src="assets/images/bear.png" width="60">', chinese: '熊' },
          { word: 'horse', image: '<img src="assets/images/horse.png" width="60">', chinese: '马' },
          { word: 'bird', image: '<img src="assets/images/bird.png" width="60">', chinese: '鸟' },
          { word: 'panda', image: '<img src="assets/images/panda.png" width="60">', chinese: '熊猫' }
        ],
        timeLimit: 60
      },
      {
        type: 'drag_connect',
        pairs: [
          ['bear', '<img src="assets/images/bear.png" width="60">'],
          ['bird', '<img src="assets/images/bird.png" width="60">'],
          ['horse', '<img src="assets/images/horse.png" width="60">']
        ],
        chinese: '将单词与图片连线'
      },
      { type: 'word_match', word: 'panda', options: ['<img src="assets/images/panda.png" width="80">', '<img src="assets/images/horse.png" width="80">'], correct: 0, chinese: '熊猫' },
      { type: 'sentence_match', sentence: 'It\'s big.', options: ['<img src="assets/images/elephant.png" width="80">', '<img src="assets/images/mouse.png" width="80">'], correct: 0, chinese: '它很大。' },
      {
        type: 'spot_diff',
        image1: '<img src="assets/images/bear.png" width="100">',
        image2: '<img src="assets/images/panda.png" width="100">',
        question: 'Which one is "bear"?',
        correct: 0,
        chinese: '选出“熊”'
      }
    ]
  },

  // 写作板块
  writing: {
    pretest: [
      { type: 'letter_select', prompt: 'bear的首字母是?', options: ['a', 'b', 'c'], correct: 1, chinese: '熊' },
      { type: 'letter_select', prompt: 'panda的首字母是?', options: ['n', 'o', 'p'], correct: 2, chinese: '熊猫' }
    ],
    practice: [
      {
        type: 'word_puzzle',
        word: 'bear',
        letters: ['b', 'e', 'a', 'r'],
        scrambled: ['a', 'r', 'b', 'e'],
        image: '<img src="assets/images/bear.png" width="80">',
        chinese: '熊'
      },
      {
        type: 'word_puzzle',
        word: 'horse',
        letters: ['h', 'o', 'r', 's', 'e'],
        scrambled: ['e', 'o', 's', 'r', 'h'],
        image: '<img src="assets/images/horse.png" width="80">',
        chinese: '马'
      },
      {
        type: 'sentence_order',
        sentence: 'This is a bear.',
        words: ['This', 'is', 'a', 'bear', '.'],
        scrambled: ['bear', 'a', 'is', 'This', '.'],
        chinese: '这是一只熊。'
      },
      {
        type: 'pinyin_fill',
        image: '<img src="assets/images/bird.png" width="80">',
        hint: '_ i r d',
        options: ['b', 'p', 'd'],
        correct: 0,
        chinese: '鸟'
      }
    ]
  },

  // 口语板块
  speaking: {
    pretest: [
      { type: 'repeat_word', word: 'bear', audio: 'bear.mp3', chinese: '熊' },
      { type: 'repeat_word', word: 'horse', audio: 'horse.mp3', chinese: '马' }
    ],
    practice: [
       { type: 'wheel_spin', options: ['bear', 'horse', 'bird', 'panda'], type_embedded: 'repeat_word', chinese: '转盘读词' },
       { type: 'picture_speak', image: '<img src="assets/images/panda.png" width="100">', expected: 'This is a panda.', chinese: '看图说话' },
       { type: 'picture_speak', image: '<img src="assets/images/elephant.png" width="100">', expected: 'It\'s big.', chinese: '看图说话' },
       { type: 'repeat_sentence', sentence: 'It can run fast.', audio: 's7.mp3', chinese: '它跑得快。' }
    ]
  }
};
