// data.js

const lessonObjectives = {
  // Unit 1: Animals 动物
  'U1L1': {
    title: 'Unit 1 Lesson 1: This is a bear.',
    vocabulary: [
      { word: 'animal', chinese: '动物' },
      { word: 'bear', chinese: '熊' },
      { word: 'horse', chinese: '马' },
      { word: 'bird', chinese: '鸟' },
      { word: 'panda', chinese: '熊猫' }
    ],
    sentences: [
      { en: 'This is a bear.', cn: '这是一只熊。' },
      { en: 'That is a panda.', cn: '那是一只熊猫。' },
      { en: "It's big.", cn: '它很大。' },
      { en: "It's cute.", cn: '它很可爱。' }
    ],
    objectives: [
      '能听懂并认读5个动物单词',
      '能用This is.../That is...介绍动物',
      '能用It\'s...描述动物特征'
    ]
  },
  'U1L2': {
    title: 'Unit 1 Lesson 2: I see a monkey.',
    vocabulary: [
      { word: 'monkey', chinese: '猴子' },
      { word: 'elephant', chinese: '大象' },
      { word: 'tiger', chinese: '老虎' },
      { word: 'lion', chinese: '狮子' }
    ],
    sentences: [
      { en: 'I see a monkey.', cn: '我看见一只猴子。' },
      { en: 'Look! A tiger!', cn: '看！一只老虎！' },
      { en: "It's big and strong.", cn: '它又大又壮。' }
    ],
    objectives: [
      '能听懂并认读4个动物单词',
      '能用I see...描述看到的动物',
      '能用形容词描述动物特征'
    ]
  },
  'U1L3': {
    title: 'Unit 1 Lesson 3: The rabbit is small.',
    vocabulary: [
      { word: 'rabbit', chinese: '兔子' },
      { word: 'mouse', chinese: '老鼠' },
      { word: 'fish', chinese: '鱼' },
      { word: 'duck', chinese: '鸭子' }
    ],
    sentences: [
      { en: 'The rabbit is small.', cn: '兔子很小。' },
      { en: 'The duck is yellow.', cn: '鸭子是黄色的。' },
      { en: 'I like fish.', cn: '我喜欢鱼。' }
    ],
    objectives: [
      '能听懂并认读4个动物单词',
      '能用The...is...描述动物',
      '能用I like...表达喜好'
    ]
  },
  'U1L4': {
    title: 'Unit 1 Lesson 4: What is this? It\'s a dog.',
    vocabulary: [
      { word: 'dog', chinese: '狗' },
      { word: 'cat', chinese: '猫' },
      { word: 'What', chinese: '什么' }
    ],
    sentences: [
      { en: 'What is this?', cn: '这是什么？' },
      { en: "It's a dog.", cn: '这是一只狗。' },
      { en: 'What is that?', cn: '那是什么？' }
    ],
    objectives: [
      '能听懂并认读dog, cat等单词',
      '能用What is this/that?提问',
      '能用It\'s a...回答'
    ]
  },
  // Unit 2: Colors 颜色
  'U2L1': {
    title: 'Unit 2 Lesson 1: It\'s red.',
    vocabulary: [
      { word: 'red', chinese: '红色' },
      { word: 'yellow', chinese: '黄色' },
      { word: 'blue', chinese: '蓝色' },
      { word: 'green', chinese: '绿色' }
    ],
    sentences: [
      { en: "It's red.", cn: '它是红色的。' },
      { en: 'The apple is red.', cn: '苹果是红色的。' },
      { en: 'What color is it?', cn: '它是什么颜色？' }
    ],
    objectives: [
      '能听懂并认读4个颜色单词',
      '能用It\'s...描述颜色',
      '能用What color is it?提问'
    ]
  },
  'U2L2': {
    title: 'Unit 2 Lesson 2: I like blue.',
    vocabulary: [
      { word: 'orange', chinese: '橙色' },
      { word: 'purple', chinese: '紫色' },
      { word: 'pink', chinese: '粉色' },
      { word: 'black', chinese: '黑色' }
    ],
    sentences: [
      { en: 'I like blue.', cn: '我喜欢蓝色。' },
      { en: 'Do you like pink?', cn: '你喜欢粉色吗？' },
      { en: 'Yes, I do. / No, I don\'t.', cn: '是的/不是。' }
    ],
    objectives: [
      '能听懂并认读4个颜色单词',
      '能用I like...表达颜色喜好',
      '能用Do you like...?询问他人喜好'
    ]
  },
  'U2L3': {
    title: 'Unit 2 Lesson 3: The sky is blue.',
    vocabulary: [
      { word: 'white', chinese: '白色' },
      { word: 'brown', chinese: '棕色' },
      { word: 'sky', chinese: '天空' },
      { word: 'sun', chinese: '太阳' }
    ],
    sentences: [
      { en: 'The sky is blue.', cn: '天空是蓝色的。' },
      { en: 'The sun is yellow.', cn: '太阳是黄色的。' },
      { en: 'Look at the rainbow!', cn: '看那道彩虹！' }
    ],
    objectives: [
      '能听懂并认读4个颜色单词',
      '能用The...is...描述事物颜色',
      '能描述自然界的颜色'
    ]
  },
  'U2L4': {
    title: 'Unit 2 Lesson 4: Colors Review 颜色复习',
    vocabulary: [
      { word: 'rainbow', chinese: '彩虹' },
      { word: 'color', chinese: '颜色' }
    ],
    sentences: [
      { en: 'How many colors?', cn: '有多少种颜色？' },
      { en: 'I can see seven colors.', cn: '我能看到七种颜色。' }
    ],
    objectives: [
      '能复习所有颜色单词',
      '能综合运用颜色词汇',
      '能描述彩虹的颜色'
    ]
  },
  // Unit 3: Numbers 数字
  'U3L1': {
    title: 'Unit 3 Lesson 1: I have two apples.',
    vocabulary: [
      { word: 'one', chinese: '一' },
      { word: 'two', chinese: '二' },
      { word: 'three', chinese: '三' },
      { word: 'four', chinese: '四' },
      { word: 'five', chinese: '五' }
    ],
    sentences: [
      { en: 'I have two apples.', cn: '我有两个苹果。' },
      { en: 'How many?', cn: '有多少？' },
      { en: 'One, two, three...', cn: '一，二，三……' }
    ],
    objectives: [
      '能听懂并认读数字1-5',
      '能用I have...表达拥有',
      '能用How many?询问数量'
    ]
  },
  'U3L2': {
    title: 'Unit 3 Lesson 2: Six little ducks.',
    vocabulary: [
      { word: 'six', chinese: '六' },
      { word: 'seven', chinese: '七' },
      { word: 'eight', chinese: '八' },
      { word: 'nine', chinese: '九' },
      { word: 'ten', chinese: '十' }
    ],
    sentences: [
      { en: 'Six little ducks.', cn: '六只小鸭子。' },
      { en: 'Count with me!', cn: '跟我一起数！' },
      { en: 'There are ten birds.', cn: '有十只鸟。' }
    ],
    objectives: [
      '能听懂并认读数字6-10',
      '能用There are...描述数量',
      '能流利地从1数到10'
    ]
  },
  'U3L3': {
    title: 'Unit 3 Lesson 3: How old are you?',
    vocabulary: [
      { word: 'old', chinese: '岁/老的' },
      { word: 'years old', chinese: '岁' }
    ],
    sentences: [
      { en: 'How old are you?', cn: '你几岁了？' },
      { en: "I'm eight years old.", cn: '我八岁了。' },
      { en: 'Happy birthday!', cn: '生日快乐！' }
    ],
    objectives: [
      '能用How old are you?询问年龄',
      '能用I\'m...years old.回答年龄',
      '能综合运用数字1-10'
    ]
  },
  'U3L4': {
    title: 'Unit 3 Lesson 4: Numbers Review 数字复习',
    vocabulary: [
      { word: 'count', chinese: '数数' },
      { word: 'number', chinese: '数字' }
    ],
    sentences: [
      { en: 'Let\'s count!', cn: '让我们数数！' },
      { en: 'What number is it?', cn: '这是什么数字？' }
    ],
    objectives: [
      '能复习数字1-10',
      '能快速认读数字',
      '能在情境中运用数字'
    ]
  },
  // Unit 4: Family 家庭
  'U4L1': {
    title: 'Unit 4 Lesson 1: This is my mother.',
    vocabulary: [
      { word: 'mother', chinese: '妈妈' },
      { word: 'father', chinese: '爸爸' },
      { word: 'brother', chinese: '哥哥/弟弟' },
      { word: 'sister', chinese: '姐姐/妹妹' }
    ],
    sentences: [
      { en: 'This is my mother.', cn: '这是我妈妈。' },
      { en: 'I love my family.', cn: '我爱我的家人。' },
      { en: 'Who is she?', cn: '她是谁？' }
    ],
    objectives: [
      '能听懂并认读4个家庭成员单词',
      '能用This is my...介绍家人',
      '能用Who is...?询问家人身份'
    ]
  },
  'U4L2': {
    title: 'Unit 4 Lesson 2: She is my grandmother.',
    vocabulary: [
      { word: 'grandmother', chinese: '奶奶/外婆' },
      { word: 'grandfather', chinese: '爷爷/外公' },
      { word: 'grandma', chinese: '奶奶/外婆' },
      { word: 'grandpa', chinese: '爷爷/外公' }
    ],
    sentences: [
      { en: 'She is my grandmother.', cn: '她是我奶奶。' },
      { en: 'He is my grandfather.', cn: '他是我爷爷。' },
      { en: 'I love grandma!', cn: '我爱奶奶！' }
    ],
    objectives: [
      '能听懂并认读祖父母称呼',
      '能用She/He is my...介绍家人',
      '能表达对家人的爱'
    ]
  },
  'U4L3': {
    title: 'Unit 4 Lesson 3: How many people?',
    vocabulary: [
      { word: 'family', chinese: '家庭' },
      { word: 'people', chinese: '人' },
      { word: 'baby', chinese: '宝宝' }
    ],
    sentences: [
      { en: 'How many people in your family?', cn: '你家有几口人？' },
      { en: 'There are five people.', cn: '有五口人。' },
      { en: 'This is my baby sister.', cn: '这是我的小妹妹。' }
    ],
    objectives: [
      '能询问家庭人数',
      '能用There are...回答人数',
      '能介绍自己的家庭'
    ]
  },
  'U4L4': {
    title: 'Unit 4 Lesson 4: Family Review 家庭复习',
    vocabulary: [
      { word: 'love', chinese: '爱' },
      { word: 'happy', chinese: '快乐的' }
    ],
    sentences: [
      { en: 'My family is happy.', cn: '我的家庭很幸福。' },
      { en: 'We love each other.', cn: '我们彼此相爱。' }
    ],
    objectives: [
      '能复习所有家庭成员单词',
      '能完整介绍自己的家庭',
      '能表达家庭情感'
    ]
  }
};

const observationGroups = [
  [
    {id: 1, name: '张宇豪'}, {id: 2, name: '张佳寒'}, {id: 3, name: '张睿渊'}, 
    {id: 4, name: '张羽韬'}, {id: 5, name: '张美茹'}, {id: 6, name: '张嘉钦'}, 
    {id: 7, name: '卢梦婷'}
  ],
  [
    {id: 8, name: '张悦萱'}, {id: 9, name: '张语涵'}, {id: 10, name: '张英豪'}, 
    {id: 11, name: '张志鹏'}, {id: 12, name: '张智杰'}, {id: 13, name: '张梓婷'}, 
    {id: 14, name: '张品琪'}
  ],
  [
    {id: 15, name: '张诺依'}, {id: 16, name: '张雨泽'}, {id: 17, name: '张依彤'}, 
    {id: 18, name: '张艺楠'}, {id: 19, name: '张思彤'}, {id: 20, name: '张子豪'}, 
    {id: 21, name: '张梓亦'}
  ],
  [
    {id: 22, name: '张皓鑫'}, {id: 23, name: '张雨欣'}, {id: 24, name: '张如欣'}, 
    {id: 25, name: '张柏涵'}, {id: 26, name: '张梓纯'}, {id: 27, name: '张泽鑫'}
  ]
];

// Calculate which group is active based on the day of the year
function getTodayObservationGroup() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    return observationGroups[dayOfYear % 4];
}
