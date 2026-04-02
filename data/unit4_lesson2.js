// Unit 4 Lesson 2: Do you want some apple juice?
// Core vocab: some, drink, juice, hamburger, salad, glass
var unit4_lesson2 = {
  "id": "U4L2",
  "title": "Do you want some apple juice?",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "hamburger",
        "options": [
          "<img src=\"assets/images/hamburger.png\" width=\"80\">",
          "<img src=\"assets/images/salad.png\" width=\"80\">",
          "<img src=\"assets/images/bread.png\" width=\"80\">",
          "<img src=\"assets/images/egg.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "汉堡"
      },
      {
        "type": "listen_select",
        "audio": "salad",
        "options": [
          "<img src=\"assets/images/milk.png\" width=\"80\">",
          "<img src=\"assets/images/hamburger.png\" width=\"80\">",
          "<img src=\"assets/images/salad.png\" width=\"80\">",
          "<img src=\"assets/images/apple_juice.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "沙拉"
      },
      {
        "type": "listen_select",
        "audio": "apple juice",
        "options": [
          "<img src=\"assets/images/water.png\" width=\"80\">",
          "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">",
          "<img src=\"assets/images/orange_juice.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "苹果汁"
      },
      {
        "type": "listen_select",
        "audio": "What do you want to eat, kids?",
        "options": [
          "你们想吃什么，孩子们？",
          "你们想喝什么？",
          "你喜欢什么水果？",
          "今天晚饭吃什么？"
        ],
        "correct": 0,
        "chinese": "你们想吃什么，孩子们？"
      },
      {
        "type": "listen_select",
        "audio": "I want a hamburger and a salad.",
        "options": [
          "我想要一个汉堡和一份沙拉。",
          "我想喝苹果汁。",
          "我想要面条和鸡蛋。",
          "我想要米饭和汤。"
        ],
        "correct": 0,
        "chinese": "我想要一个汉堡和一份沙拉。"
      },
      {
        "type": "listen_select",
        "audio": "What do you want to drink?",
        "options": [
          "你想吃什么？",
          "你想喝什么？",
          "你喜欢什么饮料？",
          "你想要一些苹果汁吗？"
        ],
        "correct": 1,
        "chinese": "你想喝什么？"
      },
      {
        "type": "listen_tf",
        "audio": "hamburger",
        "image": "<img src=\"assets/images/hamburger.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是汉堡，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "salad",
        "image": "<img src=\"assets/images/hamburger.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是沙拉，这是汉堡。"
      },
      {
        "type": "listen_select",
        "audio": "Do you want some apple juice? Yes, I do!",
        "options": [
          "你想要一些苹果汁吗？是的！",
          "你想吃汉堡吗？不想。",
          "你喜欢沙拉吗？是的。",
          "你想喝牛奶吗？好的。"
        ],
        "correct": 0,
        "chinese": "你想要一些苹果汁吗？是的！"
      },
      {
        "type": "listen_select",
        "audio": "Can I help you?",
        "options": [
          "我也是！",
          "我能帮你吗？",
          "你想吃什么？",
          "谢谢你。"
        ],
        "correct": 1,
        "chinese": "我能帮你吗？"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "hamburger",
        "options": [
          "<img src=\"assets/images/salad.png\" width=\"80\">",
          "<img src=\"assets/images/egg.png\" width=\"80\">",
          "<img src=\"assets/images/hamburger.png\" width=\"80\">",
          "<img src=\"assets/images/bread.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "汉堡"
      },
      {
        "type": "listen_select",
        "audio": "salad",
        "options": [
          "<img src=\"assets/images/rice.png\" width=\"80\">",
          "<img src=\"assets/images/salad.png\" width=\"80\">",
          "<img src=\"assets/images/hamburger.png\" width=\"80\">",
          "<img src=\"assets/images/chicken.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "沙拉"
      },
      {
        "type": "listen_select",
        "audio": "apple juice",
        "options": [
          "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">",
          "<img src=\"assets/images/water.png\" width=\"80\">",
          "<img src=\"assets/images/orange_juice.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "苹果汁"
      },
      {
        "type": "listen_tf",
        "audio": "apple juice",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是苹果汁，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "hamburger",
        "image": "<img src=\"assets/images/salad.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是汉堡，这是沙拉。"
      },
      {
        "type": "listen_tf",
        "audio": "salad",
        "image": "<img src=\"assets/images/salad.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是沙拉，正确！"
      },
      {
        "type": "listen_select",
        "audio": "What do you want to eat, kids?",
        "options": [
          "你们想喝什么？",
          "你们想吃什么，孩子们？",
          "今天午饭吃什么？",
          "我能帮你吗？"
        ],
        "correct": 1,
        "chinese": "你们想吃什么，孩子们？"
      },
      {
        "type": "listen_select",
        "audio": "I want a hamburger and a salad.",
        "options": [
          "我想要牛奶和面包。",
          "我想要一个汉堡和一份沙拉。",
          "我想喝苹果汁。",
          "我想要鸡蛋和面条。"
        ],
        "correct": 1,
        "chinese": "我想要一个汉堡和一份沙拉。"
      },
      {
        "type": "listen_select",
        "audio": "What do you want to drink?",
        "options": [
          "你想喝什么？",
          "你想吃什么？",
          "你最喜欢什么饮料？",
          "你想要一些水吗？"
        ],
        "correct": 0,
        "chinese": "你想喝什么？"
      },
      {
        "type": "listen_select",
        "audio": "Do you want some apple juice?",
        "options": [
          "你想吃汉堡吗？",
          "你想要一些水吗？",
          "你想要一些苹果汁吗？",
          "你喜欢沙拉吗？"
        ],
        "correct": 2,
        "chinese": "你想要一些苹果汁吗？"
      },
      {
        "type": "listen_select",
        "audio": "We want five hamburgers, five salads and five glasses of apple juice.",
        "options": [
          "我们想要五个汉堡、五份沙拉和五杯苹果汁。",
          "我们想要三个汉堡和三杯牛奶。",
          "我想要一个汉堡和一份沙拉。",
          "我们想要五杯水。"
        ],
        "correct": 0,
        "chinese": "我们想要五个汉堡、五份沙拉和五杯苹果汁。"
      },
      {
        "type": "listen_select",
        "audio": "Me too!",
        "options": [
          "谢谢你！",
          "不客气。",
          "我也是！",
          "我能帮你吗？"
        ],
        "correct": 2,
        "chinese": "我也是！"
      },
      {
        "type": "listen_select",
        "audio": "Can I help you?",
        "options": [
          "我能帮你吗？",
          "你想喝什么？",
          "我也是！",
          "给你。"
        ],
        "correct": 0,
        "chinese": "我能帮你吗？"
      },
      {
        "type": "listen_select",
        "audio": "Yes, I do!",
        "options": [
          "是的，我想要！",
          "不，谢谢。",
          "我也是！",
          "好主意！"
        ],
        "correct": 0,
        "chinese": "是的，我想要！"
      },
      {
        "type": "listen_select",
        "audio": "I want a hamburger.",
        "options": [
          "我想要一份沙拉。",
          "我想要一个汉堡。",
          "我想喝苹果汁。",
          "我想要牛奶。"
        ],
        "correct": 1,
        "chinese": "我想要一个汉堡。"
      },
      {
        "type": "listen_select",
        "audio": "Five glasses of apple juice.",
        "options": [
          "五杯苹果汁。",
          "五杯牛奶。",
          "三杯水。",
          "五个汉堡。"
        ],
        "correct": 0,
        "chinese": "五杯苹果汁。"
      },
      {
        "type": "listen_select",
        "audio": "What do you want to eat?",
        "options": [
          "你想吃什么？",
          "你想喝什么？",
          "你喜欢什么？",
          "你最喜欢的水果是什么？"
        ],
        "correct": 0,
        "chinese": "你想吃什么？"
      },
      {
        "type": "listen_select",
        "audio": "I want a salad.",
        "options": [
          "我想要面条。",
          "我想要米饭。",
          "我想要一份沙拉。",
          "我想要面包。"
        ],
        "correct": 2,
        "chinese": "我想要一份沙拉。"
      },
      {
        "type": "listen_sequence",
        "audio": "hamburger, juice, water",
        "sequence": [
          "hamburger",
          "juice",
          "water"
        ],
        "words": [
          "<img src=\"assets/images/water.png\" width=\"60\">",
          "<img src=\"assets/images/hamburger.png\" width=\"60\">",
          "<img src=\"assets/images/orange_juice.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "What do you want to eat?",
        "context": "🍔 你在餐厅点餐。服务员问你。",
        "question": "服务员在问什么？",
        "options": [
          "想吃什么",
          "想喝什么",
          "多少钱",
          "好不好吃"
        ],
        "correct": 0,
        "chinese": "你想吃什么？"
      },
      {
        "type": "listen_select",
        "audio": "What do you want to drink?",
        "context": "🥤 点完吃的，服务员又问了。",
        "question": "服务员这次问什么？",
        "options": [
          "想喝什么",
          "想吃什么",
          "要几杯",
          "好不好喝"
        ],
        "correct": 0,
        "chinese": "你想喝什么？"
      },
      {
        "type": "listen_select",
        "audio": "I want some apple juice.",
        "context": "🍎 你朋友想喝果汁。",
        "question": "朋友想喝什么？",
        "options": [
          "苹果汁",
          "橙汁",
          "牛奶",
          "水"
        ],
        "correct": 0,
        "chinese": "我想要一些苹果汁。"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "word": "hamburger",
        "sentence": "I want a hamburger.",
        "chinese": "我想要一个汉堡。",
        "options": [
          {
            "text": "<img src=\"assets/images/hamburger.png\" width=\"80\">",
            "value": "hamburger"
          },
          {
            "text": "<img src=\"assets/images/salad.png\" width=\"80\">",
            "value": "salad"
          },
          {
            "text": "<img src=\"assets/images/bread.png\" width=\"80\">",
            "value": "bread"
          },
          {
            "text": "<img src=\"assets/images/egg.png\" width=\"80\">",
            "value": "egg"
          }
        ],
        "correct": "hamburger"
      },
      {
        "type": "word_match",
        "word": "salad",
        "sentence": "I want a salad.",
        "chinese": "我想要一份沙拉。",
        "options": [
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "milk"
          },
          {
            "text": "<img src=\"assets/images/salad.png\" width=\"80\">",
            "value": "salad"
          },
          {
            "text": "<img src=\"assets/images/hamburger.png\" width=\"80\">",
            "value": "hamburger"
          },
          {
            "text": "<img src=\"assets/images/rice.png\" width=\"80\">",
            "value": "rice"
          }
        ],
        "correct": "salad"
      },
      {
        "type": "word_match",
        "word": "apple juice",
        "sentence": "Do you want some apple juice?",
        "chinese": "你想要一些苹果汁吗？",
        "options": [
          {
            "text": "<img src=\"assets/images/water.png\" width=\"80\">",
            "value": "water"
          },
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "milk"
          },
          {
            "text": "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
            "value": "apple juice"
          },
          {
            "text": "<img src=\"assets/images/orange_juice.png\" width=\"80\">",
            "value": "orange juice"
          }
        ],
        "correct": "apple juice"
      },
      {
        "type": "sentence_match",
        "sentence": "What do you want to eat?",
        "chinese": "你想吃什么？",
        "options": [
          {
            "text": "你想吃什么？",
            "value": "correct"
          },
          {
            "text": "你想喝什么？",
            "value": "wrong1"
          },
          {
            "text": "你喜欢什么水果？",
            "value": "wrong2"
          },
          {
            "text": "今天晚饭吃什么？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What do you want to drink?",
        "chinese": "你想喝什么？",
        "options": [
          {
            "text": "你想吃什么？",
            "value": "wrong1"
          },
          {
            "text": "你最喜欢什么饮料？",
            "value": "wrong2"
          },
          {
            "text": "你想喝什么？",
            "value": "correct"
          },
          {
            "text": "你想要一些水吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I want a hamburger and a salad.",
        "chinese": "我想要一个汉堡和一份沙拉。",
        "options": [
          {
            "text": "我想要牛奶和面包。",
            "value": "wrong1"
          },
          {
            "text": "我想要一个汉堡和一份沙拉。",
            "value": "correct"
          },
          {
            "text": "我想要鸡蛋和面条。",
            "value": "wrong2"
          },
          {
            "text": "我想喝苹果汁。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Do you want some apple juice?",
        "chinese": "你想要一些苹果汁吗？",
        "options": [
          {
            "text": "你想要一些苹果汁吗？",
            "value": "correct"
          },
          {
            "text": "你想吃汉堡吗？",
            "value": "wrong1"
          },
          {
            "text": "你喜欢沙拉吗？",
            "value": "wrong2"
          },
          {
            "text": "你想喝牛奶吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Can I help you?",
        "chinese": "我能帮你吗？",
        "options": [
          {
            "text": "我也是！",
            "value": "wrong1"
          },
          {
            "text": "谢谢你。",
            "value": "wrong2"
          },
          {
            "text": "我能帮你吗？",
            "value": "correct"
          },
          {
            "text": "不客气。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想要一些苹果汁吗？",
        "options": [
          {
            "text": "Do you want some milk?",
            "value": "wrong1"
          },
          {
            "text": "What do you want to eat?",
            "value": "wrong2"
          },
          {
            "text": "Do you want some apple juice?",
            "value": "correct"
          },
          {
            "text": "Can I help you?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想吃什么？",
        "options": [
          {
            "text": "What do you want to drink?",
            "value": "wrong1"
          },
          {
            "text": "What do you want to eat?",
            "value": "correct"
          },
          {
            "text": "Can I help you?",
            "value": "wrong2"
          },
          {
            "text": "Do you want some apple juice?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      }
    ],
    "practice": [
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对图片！",
        "pairs": [
          {
            "word": "hamburger",
            "match": "<img src=\"assets/images/hamburger.png\" width=\"50\">",
            "chinese": "汉堡"
          },
          {
            "word": "salad",
            "match": "<img src=\"assets/images/salad.png\" width=\"50\">",
            "chinese": "沙拉"
          },
          {
            "word": "juice",
            "match": "<img src=\"assets/images/orange_juice.png\" width=\"50\">",
            "chinese": "橙汁"
          },
          {
            "word": "water",
            "match": "<img src=\"assets/images/water.png\" width=\"50\">",
            "chinese": "水"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "drink",
            "match": "喝",
            "example": "What do you want to drink?"
          },
          {
            "word": "juice",
            "match": "果汁",
            "example": "I want apple juice."
          },
          {
            "word": "hamburger",
            "match": "汉堡",
            "example": "I want a hamburger."
          },
          {
            "word": "salad",
            "match": "沙拉",
            "example": "I want a salad."
          }
        ]
      },
      {
        "type": "word_match",
        "word": "hamburger",
        "sentence": "I want a hamburger.",
        "chinese": "我想要一个汉堡。",
        "options": [
          {
            "text": "<img src=\"assets/images/hamburger.png\" width=\"80\">",
            "value": "hamburger"
          },
          {
            "text": "<img src=\"assets/images/chicken.png\" width=\"80\">",
            "value": "chicken"
          },
          {
            "text": "<img src=\"assets/images/fish.png\" width=\"80\">",
            "value": "fish"
          },
          {
            "text": "<img src=\"assets/images/bread.png\" width=\"80\">",
            "value": "bread"
          }
        ],
        "correct": "hamburger"
      },
      {
        "type": "word_match",
        "word": "salad",
        "sentence": "I want a salad.",
        "chinese": "我想要一份沙拉。",
        "options": [
          {
            "text": "<img src=\"assets/images/egg.png\" width=\"80\">",
            "value": "egg"
          },
          {
            "text": "<img src=\"assets/images/salad.png\" width=\"80\">",
            "value": "salad"
          },
          {
            "text": "<img src=\"assets/images/rice.png\" width=\"80\">",
            "value": "rice"
          },
          {
            "text": "<img src=\"assets/images/soup.png\" width=\"80\">",
            "value": "soup"
          }
        ],
        "correct": "salad"
      },
      {
        "type": "word_match",
        "word": "apple juice",
        "sentence": "Do you want some apple juice?",
        "chinese": "你想要一些苹果汁吗？",
        "options": [
          {
            "text": "<img src=\"assets/images/orange_juice.png\" width=\"80\">",
            "value": "orange juice"
          },
          {
            "text": "<img src=\"assets/images/water.png\" width=\"80\">",
            "value": "water"
          },
          {
            "text": "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
            "value": "apple juice"
          },
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "milk"
          }
        ],
        "correct": "apple juice"
      },
      {
        "type": "sentence_match",
        "sentence": "What do you want to eat, kids?",
        "chinese": "你们想吃什么，孩子们？",
        "options": [
          {
            "text": "你们想吃什么，孩子们？",
            "value": "correct"
          },
          {
            "text": "你们想喝什么？",
            "value": "wrong1"
          },
          {
            "text": "我能帮你吗？",
            "value": "wrong2"
          },
          {
            "text": "你喜欢什么水果？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I want a hamburger and a salad.",
        "chinese": "我想要一个汉堡和一份沙拉。",
        "options": [
          {
            "text": "我想要面条和鸡蛋。",
            "value": "wrong1"
          },
          {
            "text": "我想要一个汉堡和一份沙拉。",
            "value": "correct"
          },
          {
            "text": "我想喝苹果汁。",
            "value": "wrong2"
          },
          {
            "text": "我想要米饭和鸡肉。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What do you want to drink?",
        "chinese": "你想喝什么？",
        "options": [
          {
            "text": "你想喝什么？",
            "value": "correct"
          },
          {
            "text": "你想吃什么？",
            "value": "wrong1"
          },
          {
            "text": "你最喜欢的饮料是什么？",
            "value": "wrong2"
          },
          {
            "text": "你想要水吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Do you want some apple juice? Yes, I do!",
        "chinese": "你想要一些苹果汁吗？是的！",
        "options": [
          {
            "text": "你想要一些苹果汁吗？是的！",
            "value": "correct"
          },
          {
            "text": "你想喝牛奶吗？不想。",
            "value": "wrong1"
          },
          {
            "text": "你喜欢橙汁吗？是的。",
            "value": "wrong2"
          },
          {
            "text": "你想要水吗？好的。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "We want five hamburgers, five salads and five glasses of apple juice.",
        "chinese": "我们想要五个汉堡、五份沙拉和五杯苹果汁。",
        "options": [
          {
            "text": "我们想要五个汉堡、五份沙拉和五杯苹果汁。",
            "value": "correct"
          },
          {
            "text": "我们想要三个汉堡和三杯牛奶。",
            "value": "wrong1"
          },
          {
            "text": "我们想要五杯水和五份沙拉。",
            "value": "wrong2"
          },
          {
            "text": "我想要一个汉堡和一份沙拉。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Me too!",
        "chinese": "我也是！",
        "options": [
          {
            "text": "我也是！",
            "value": "correct"
          },
          {
            "text": "谢谢你！",
            "value": "wrong1"
          },
          {
            "text": "不客气。",
            "value": "wrong2"
          },
          {
            "text": "我能帮你吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Can I help you?",
        "chinese": "我能帮你吗？",
        "options": [
          {
            "text": "你想吃什么？",
            "value": "wrong1"
          },
          {
            "text": "我能帮你吗？",
            "value": "correct"
          },
          {
            "text": "我也是！",
            "value": "wrong2"
          },
          {
            "text": "给你。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Five glasses of apple juice.",
        "chinese": "五杯苹果汁。",
        "options": [
          {
            "text": "五杯苹果汁。",
            "value": "correct"
          },
          {
            "text": "五杯牛奶。",
            "value": "wrong1"
          },
          {
            "text": "五个汉堡。",
            "value": "wrong2"
          },
          {
            "text": "三杯水。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "我想要一个汉堡和一份沙拉。",
        "options": [
          {
            "text": "I want milk and bread.",
            "value": "wrong1"
          },
          {
            "text": "I want a hamburger and a salad.",
            "value": "correct"
          },
          {
            "text": "I want some apple juice.",
            "value": "wrong2"
          },
          {
            "text": "I want eggs and noodles.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想喝什么？",
        "options": [
          {
            "text": "What do you want to eat?",
            "value": "wrong1"
          },
          {
            "text": "Can I help you?",
            "value": "wrong2"
          },
          {
            "text": "What do you want to drink?",
            "value": "correct"
          },
          {
            "text": "Do you want some apple juice?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想要一些苹果汁吗？",
        "options": [
          {
            "text": "Do you want some milk?",
            "value": "wrong1"
          },
          {
            "text": "Do you want some apple juice?",
            "value": "correct"
          },
          {
            "text": "What do you want to eat?",
            "value": "wrong2"
          },
          {
            "text": "Can I help you?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "我能帮你吗？",
        "options": [
          {
            "text": "Me too!",
            "value": "wrong1"
          },
          {
            "text": "What do you want to drink?",
            "value": "wrong2"
          },
          {
            "text": "Can I help you?",
            "value": "correct"
          },
          {
            "text": "Yes, I do!",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "我也是！",
        "options": [
          {
            "text": "Thank you!",
            "value": "wrong1"
          },
          {
            "text": "Me too!",
            "value": "correct"
          },
          {
            "text": "Yes, I do!",
            "value": "wrong2"
          },
          {
            "text": "Can I help you?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I want some apple juice.",
        "chinese": "我想要一些苹果汁。",
        "options": [
          {
            "text": "我想要一些苹果汁。",
            "value": "correct"
          },
          {
            "text": "我想要一些牛奶。",
            "value": "wrong1"
          },
          {
            "text": "我想要一份沙拉。",
            "value": "wrong2"
          },
          {
            "text": "我想要一些水。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Yes, I do!",
        "chinese": "是的，我想要！",
        "options": [
          {
            "text": "是的，我想要！",
            "value": "correct"
          },
          {
            "text": "不，谢谢。",
            "value": "wrong1"
          },
          {
            "text": "我也是！",
            "value": "wrong2"
          },
          {
            "text": "好主意！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "I want a hamburger and a salad.",
        "context": "朋友写了点餐单。你帮他告诉服务员。",
        "question": "朋友想吃什么？",
        "options": [
          {
            "text": "汉堡和沙拉",
            "value": "correct"
          },
          {
            "text": "鸡肉和米饭",
            "value": "w1"
          },
          {
            "text": "面条和鸡蛋",
            "value": "w2"
          },
          {
            "text": "面包和牛奶",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "我想要一个汉堡和一份沙拉。"
      },
      {
        "type": "scenario",
        "sentence": "Can I help you?",
        "context": "你走进餐厅，服务员跟你说话了。",
        "question": "服务员想做什么？",
        "options": [
          {
            "text": "帮你点餐",
            "value": "correct"
          },
          {
            "text": "让你离开",
            "value": "w1"
          },
          {
            "text": "问你几点了",
            "value": "w2"
          },
          {
            "text": "给你钱",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "我能帮你吗？"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "Can I help you?",
          "I want a hamburger.",
          "Here you are."
        ],
        "chinese": "把点餐对话排好！",
        "chineseHint": "我能帮你吗？ / 我想要汉堡。 / 给你。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "What do you want to drink?",
          "Apple juice, please.",
          "OK!"
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "你想喝什么？ / 请来苹果汁。 / 好的！"
      },
      {
        "type": "word_match",
        "word": "water",
        "options": [
          {
            "text": "<img src=\"assets/images/water.png\" width=\"80\">",
            "value": "water"
          },
          {
            "text": "<img src=\"assets/images/hamburger.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/salad.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "water",
        "chinese": "water"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "汉堡的首字母是？",
        "image": "<img src=\"assets/images/hamburger.png\" width=\"80\">",
        "options": [
          "h",
          "s",
          "j",
          "g"
        ],
        "correct": 0,
        "chinese": "汉堡",
        "word": "汉堡"
      },
      {
        "type": "fill_blank",
        "prompt": "I want a _____ and a salad.",
        "image": "<img src=\"assets/images/hamburger.png\" width=\"80\">",
        "options": [
          "hamburger",
          "milk",
          "egg",
          "bread"
        ],
        "correct": 0,
        "chinese": "我想要一个汉堡和一份沙拉。"
      },
      {
        "type": "fill_blank",
        "prompt": "What do you want to _____?",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
        "options": [
          "eat",
          "drink",
          "play",
          "read"
        ],
        "correct": 1,
        "chinese": "你想喝什么？"
      },
      {
        "type": "fill_blank",
        "prompt": "Do you want _____ apple juice?",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
        "options": [
          "some",
          "a",
          "the",
          "an"
        ],
        "correct": 0,
        "chinese": "你想要一些苹果汁吗？"
      },
      {
        "type": "word_puzzle",
        "hint": "d_ink",
        "word": "drink",
        "options": [
          "i",
          "g",
          "r",
          "z"
        ],
        "correct": 2,
        "chinese": "drink"
      },
      {
        "type": "word_puzzle",
        "hint": "j_ice",
        "word": "juice",
        "options": [
          "t",
          "b",
          "u",
          "k"
        ],
        "correct": 2,
        "chinese": "juice"
      },
      {
        "type": "word_puzzle",
        "hint": "h_mburger",
        "word": "hamburger",
        "options": [
          "a",
          "g",
          "j",
          "m"
        ],
        "correct": 0,
        "chinese": "hamburger"
      },
      {
        "type": "fill_blank",
        "prompt": "I want a _____.",
        "options": [
          "drink",
          "salad",
          "hamburger",
          "juice"
        ],
        "correct": 2,
        "chinese": "I want a hamburger."
      },
      {
        "type": "fill_blank",
        "prompt": "I want some _____.",
        "options": [
          "juice",
          "salad",
          "hamburger",
          "drink"
        ],
        "correct": 0,
        "chinese": "I want some juice."
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "你们想吃什么，孩子们？",
        "words": [
          "What",
          "do",
          "you",
          "want",
          "to",
          "eat"
        ],
        "scrambled": [
          "eat",
          "What",
          "to",
          "you",
          "do",
          "want"
        ],
        "chineseWords": [
          "什么",
          "你们",
          "想",
          "吃"
        ],
        "chineseScrambled": [
          "吃",
          "什么",
          "你们",
          "想"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "你想喝什么？",
        "words": [
          "What",
          "do",
          "you",
          "want",
          "to",
          "drink"
        ],
        "scrambled": [
          "drink",
          "do",
          "What",
          "to",
          "want",
          "you"
        ],
        "chineseWords": [
          "什么",
          "你",
          "想",
          "喝"
        ],
        "chineseScrambled": [
          "喝",
          "什么",
          "想",
          "你"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "你想要一些苹果汁吗？",
        "words": [
          "Do",
          "you",
          "want",
          "some",
          "apple",
          "juice"
        ],
        "scrambled": [
          "juice",
          "Do",
          "some",
          "you",
          "apple",
          "want"
        ],
        "chineseWords": [
          "你",
          "想要",
          "一些",
          "苹果汁",
          "吗"
        ],
        "chineseScrambled": [
          "苹果汁",
          "吗",
          "你",
          "一些",
          "想要"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "是的，我想要！",
        "words": [
          "Yes",
          "I",
          "do"
        ],
        "scrambled": [
          "do",
          "Yes",
          "I"
        ],
        "chineseWords": [
          "是的",
          "我",
          "想要"
        ],
        "chineseScrambled": [
          "想要",
          "是的",
          "我"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我也是！",
        "words": [
          "Me",
          "too"
        ],
        "scrambled": [
          "too",
          "Me"
        ],
        "chineseWords": [
          "我",
          "也是"
        ],
        "chineseScrambled": [
          "也是",
          "我"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我能帮你吗？",
        "words": [
          "Can",
          "I",
          "help",
          "you"
        ],
        "scrambled": [
          "you",
          "Can",
          "help",
          "I"
        ],
        "chineseWords": [
          "我",
          "能",
          "帮",
          "你",
          "吗"
        ],
        "chineseScrambled": [
          "帮",
          "吗",
          "我",
          "你",
          "能"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我想要一个汉堡。",
        "words": [
          "I",
          "want",
          "a",
          "hamburger"
        ],
        "scrambled": [
          "hamburger",
          "a",
          "I",
          "want"
        ],
        "chineseWords": [
          "我",
          "想要",
          "一个",
          "汉堡"
        ],
        "chineseScrambled": [
          "汉堡",
          "我",
          "一个",
          "想要"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我想要一份沙拉。",
        "words": [
          "I",
          "want",
          "a",
          "salad"
        ],
        "scrambled": [
          "salad",
          "I",
          "a",
          "want"
        ],
        "chineseWords": [
          "我",
          "想要",
          "一份",
          "沙拉"
        ],
        "chineseScrambled": [
          "沙拉",
          "一份",
          "我",
          "想要"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我想要一些苹果汁。",
        "words": [
          "I",
          "want",
          "some",
          "apple",
          "juice"
        ],
        "scrambled": [
          "juice",
          "some",
          "I",
          "apple",
          "want"
        ],
        "chineseWords": [
          "我",
          "想要",
          "一些",
          "苹果汁"
        ],
        "chineseScrambled": [
          "苹果汁",
          "我",
          "一些",
          "想要"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "五杯苹果汁。",
        "words": [
          "Five",
          "glasses",
          "of",
          "apple",
          "juice"
        ],
        "scrambled": [
          "juice",
          "Five",
          "of",
          "glasses",
          "apple"
        ],
        "chineseWords": [
          "五",
          "杯",
          "苹果汁"
        ],
        "chineseScrambled": [
          "苹果汁",
          "五",
          "杯"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "你想吃什么？",
        "words": [
          "What",
          "do",
          "you",
          "want",
          "to",
          "eat"
        ],
        "scrambled": [
          "to",
          "What",
          "eat",
          "want",
          "do",
          "you"
        ],
        "chineseWords": [
          "什么",
          "你",
          "想",
          "吃"
        ],
        "chineseScrambled": [
          "想",
          "什么",
          "吃",
          "你"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "五个汉堡和五份沙拉。",
        "words": [
          "Five",
          "hamburgers",
          "and",
          "five",
          "salads"
        ],
        "scrambled": [
          "salads",
          "Five",
          "and",
          "five",
          "hamburgers"
        ],
        "chineseWords": [
          "五个",
          "汉堡",
          "和",
          "五份",
          "沙拉"
        ],
        "chineseScrambled": [
          "沙拉",
          "五个",
          "和",
          "汉堡",
          "五份"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "What do you want to _____?",
        "image": "<img src=\"assets/images/hamburger.png\" width=\"80\">",
        "options": [
          "eat",
          "drink",
          "play",
          "draw"
        ],
        "correct": 0,
        "chinese": "你想吃什么？"
      },
      {
        "type": "fill_blank",
        "prompt": "I want a _____ and a salad.",
        "image": "<img src=\"assets/images/hamburger.png\" width=\"80\">",
        "options": [
          "hamburger",
          "egg",
          "noodle",
          "bread"
        ],
        "correct": 0,
        "chinese": "我想要一个汉堡和一份沙拉。"
      },
      {
        "type": "fill_blank",
        "prompt": "Do you want some apple _____?",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
        "options": [
          "water",
          "milk",
          "juice",
          "salad"
        ],
        "correct": 2,
        "chinese": "你想要一些苹果汁吗？"
      },
      {
        "type": "fill_blank",
        "prompt": "Five _____ of apple juice.",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
        "options": [
          "cups",
          "glasses",
          "bottles",
          "boxes"
        ],
        "correct": 1,
        "chinese": "五杯苹果汁。"
      },
      {
        "type": "fill_blank",
        "prompt": "_____ I help you?",
        "image": "<img src=\"assets/images/salad.png\" width=\"80\">",
        "options": [
          "Can",
          "Do",
          "Is",
          "Are"
        ],
        "correct": 0,
        "chinese": "我能帮你吗？"
      },
      {
        "type": "word_puzzle",
        "hint": "dr_nk",
        "word": "drink",
        "options": [
          "y",
          "e",
          "n",
          "i"
        ],
        "correct": 3,
        "chinese": "drink"
      },
      {
        "type": "fill_blank",
        "prompt": "I want a _____.",
        "options": [
          "salad",
          "drink",
          "juice",
          "hamburger"
        ],
        "correct": 3,
        "chinese": "I want a hamburger."
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "word": "hamburger",
        "chinese": "汉堡",
        "image": "<img src=\"assets/images/hamburger.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "salad",
        "chinese": "沙拉",
        "image": "<img src=\"assets/images/salad.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "apple juice",
        "chinese": "苹果汁",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "drink",
        "chinese": "喝",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "glass",
        "chinese": "杯子",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">"
      },
      {
        "type": "speak_select",
        "audio": "hamburger",
        "options": [
          "<img src=\"assets/images/hamburger.png\" width=\"80\">",
          "<img src=\"assets/images/salad.png\" width=\"80\">",
          "<img src=\"assets/images/bread.png\" width=\"80\">",
          "<img src=\"assets/images/egg.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "汉堡"
      },
      {
        "type": "speak_select",
        "audio": "salad",
        "options": [
          "<img src=\"assets/images/milk.png\" width=\"80\">",
          "<img src=\"assets/images/salad.png\" width=\"80\">",
          "<img src=\"assets/images/hamburger.png\" width=\"80\">",
          "<img src=\"assets/images/rice.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "沙拉"
      },
      {
        "type": "speak_select",
        "audio": "apple juice",
        "options": [
          "<img src=\"assets/images/water.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">",
          "<img src=\"assets/images/orange_juice.png\" width=\"80\">",
          "<img src=\"assets/images/apple_juice.png\" width=\"80\">"
        ],
        "correct": 3,
        "chinese": "苹果汁"
      },
      {
        "type": "speak_select",
        "audio": "What do you want to eat?",
        "options": [
          "你想喝什么？",
          "你想吃什么？",
          "我能帮你吗？",
          "你喜欢什么？"
        ],
        "correct": 1,
        "chinese": "你想吃什么？"
      },
      {
        "type": "speak_select",
        "audio": "Do you want some apple juice?",
        "options": [
          "你想要一些苹果汁吗？",
          "你想喝牛奶吗？",
          "你想吃汉堡吗？",
          "你要一些水吗？"
        ],
        "correct": 0,
        "chinese": "你想要一些苹果汁吗？"
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "What do you want to eat, kids?",
        "chinese": "你们想吃什么，孩子们？",
        "expected": "What do you want to eat, kids?"
      },
      {
        "type": "repeat_sentence",
        "word": "I want a hamburger and a salad.",
        "chinese": "我想要一个汉堡和一份沙拉。",
        "expected": "I want a hamburger and a salad."
      },
      {
        "type": "repeat_sentence",
        "word": "What do you want to drink?",
        "chinese": "你想喝什么？",
        "expected": "What do you want to drink?"
      },
      {
        "type": "repeat_sentence",
        "word": "Do you want some apple juice?",
        "chinese": "你想要一些苹果汁吗？",
        "expected": "Do you want some apple juice?"
      },
      {
        "type": "repeat_sentence",
        "word": "Yes, I do!",
        "chinese": "是的，我想要！",
        "expected": "Yes, I do!"
      },
      {
        "type": "repeat_sentence",
        "word": "We want five hamburgers, five salads and five glasses of apple juice.",
        "chinese": "我们想要五个汉堡、五份沙拉和五杯苹果汁。",
        "expected": "We want five hamburgers, five salads and five glasses of apple juice."
      },
      {
        "type": "repeat_sentence",
        "word": "Me too!",
        "chinese": "我也是！",
        "expected": "Me too!"
      },
      {
        "type": "repeat_sentence",
        "word": "Can I help you?",
        "chinese": "我能帮你吗？",
        "expected": "Can I help you?"
      },
      {
        "type": "repeat_sentence",
        "word": "I want a hamburger.",
        "chinese": "我想要一个汉堡。",
        "expected": "I want a hamburger."
      },
      {
        "type": "repeat_sentence",
        "word": "I want a salad.",
        "chinese": "我想要一份沙拉。",
        "expected": "I want a salad."
      },
      {
        "type": "repeat_sentence",
        "word": "I want some apple juice.",
        "chinese": "我想要一些苹果汁。",
        "expected": "I want some apple juice."
      },
      {
        "type": "repeat_sentence",
        "word": "Five glasses of apple juice.",
        "chinese": "五杯苹果汁。",
        "expected": "Five glasses of apple juice."
      },
      {
        "type": "repeat_sentence",
        "word": "Five hamburgers and five salads.",
        "chinese": "五个汉堡和五份沙拉。",
        "expected": "Five hamburgers and five salads."
      },
      {
        "type": "repeat_sentence",
        "word": "What do you want to eat?",
        "chinese": "你想吃什么？",
        "expected": "What do you want to eat?"
      },
      {
        "type": "repeat_sentence",
        "word": "Do you want some apple juice? Yes, I do!",
        "chinese": "你想要一些苹果汁吗？是的！",
        "expected": "Do you want some apple juice? Yes, I do!"
      },
      {
        "type": "repeat_word",
        "word": "hamburger",
        "chinese": "汉堡",
        "image": "<img src=\"assets/images/hamburger.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "salad",
        "chinese": "沙拉",
        "image": "<img src=\"assets/images/salad.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "juice",
        "chinese": "果汁",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "drink",
        "chinese": "喝",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "glass",
        "chinese": "杯子",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/hamburger.png\" width=\"80\">",
        "word": "hamburger",
        "chinese": "hamburger"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/salad.png\" width=\"80\">",
        "word": "salad",
        "chinese": "salad"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/orange_juice.png\" width=\"80\">",
        "word": "orange_juice",
        "chinese": "orange_juice"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/water.png\" width=\"80\">",
        "word": "water",
        "chinese": "water"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/milk.png\" width=\"80\">",
        "word": "milk",
        "chinese": "milk"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bread.png\" width=\"80\">",
        "word": "bread",
        "chinese": "bread"
      }
    ]
  }
};
