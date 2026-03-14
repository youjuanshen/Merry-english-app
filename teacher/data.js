// data.js

const lessonObjectives = {
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
