// Unit 4 Lesson 3: What's your favorite drink?
// Core vocab: favorite, fruit, orange, banana, sweet, water
var unit4_lesson3 = {
  "id": "U4L3",
  "title": "What's your favorite drink?",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "banana",
        "options": [
          "<img src=\"assets/images/banana.png\" width=\"80\">",
          "<img src=\"assets/images/red_apple.png\" width=\"80\">",
          "<img src=\"assets/images/orange_orange.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "香蕉"
      },
      {
        "type": "listen_select",
        "audio": "orange",
        "options": [
          "<img src=\"assets/images/banana.png\" width=\"80\">",
          "<img src=\"assets/images/water.png\" width=\"80\">",
          "<img src=\"assets/images/orange.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "橙子"
      },
      {
        "type": "listen_select",
        "audio": "water",
        "options": [
          "<img src=\"assets/images/milk.png\" width=\"80\">",
          "<img src=\"assets/images/orange_juice.png\" width=\"80\">",
          "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
          "<img src=\"assets/images/water.png\" width=\"80\">"
        ],
        "correct": 3,
        "chinese": "水"
      },
      {
        "type": "listen_select",
        "audio": "What's your favorite drink?",
        "options": [
          "你最喜欢的饮料是什么？",
          "你最喜欢的水果是什么？",
          "你想喝什么？",
          "你想吃什么？"
        ],
        "correct": 0,
        "chinese": "你最喜欢的饮料是什么？"
      },
      {
        "type": "listen_select",
        "audio": "My favorite drink is milk.",
        "options": [
          "我最喜欢的水果是香蕉。",
          "我最喜欢的饮料是牛奶。",
          "我喜欢苹果汁。",
          "我想喝水。"
        ],
        "correct": 1,
        "chinese": "我最喜欢的饮料是牛奶。"
      },
      {
        "type": "listen_select",
        "audio": "What's your favorite fruit?",
        "options": [
          "你想吃什么水果？",
          "你最喜欢的饮料是什么？",
          "你最喜欢的水果是什么？",
          "这里有一些水果。"
        ],
        "correct": 2,
        "chinese": "你最喜欢的水果是什么？"
      },
      {
        "type": "listen_tf",
        "audio": "banana",
        "image": "<img src=\"assets/images/banana.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是香蕉，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "orange",
        "image": "<img src=\"assets/images/banana.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是橙子，这是香蕉。"
      },
      {
        "type": "listen_select",
        "audio": "I like apples. And I like apple juice, too.",
        "options": [
          "我喜欢苹果。我也喜欢苹果汁。",
          "我喜欢香蕉和橙汁。",
          "我最喜欢的水果是橙子。",
          "我想喝一些水。"
        ],
        "correct": 0,
        "chinese": "我喜欢苹果。我也喜欢苹果汁。"
      },
      {
        "type": "listen_select",
        "audio": "Do you want some orange juice? It's sweet.",
        "options": [
          "你想要一些苹果汁吗？很好喝。",
          "你想要一些橙汁吗？它是甜的。",
          "你想喝牛奶吗？很新鲜。",
          "你喜欢什么水果？"
        ],
        "correct": 1,
        "chinese": "你想要一些橙汁吗？它是甜的。"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "banana",
        "options": [
          "<img src=\"assets/images/red_apple.png\" width=\"80\">",
          "<img src=\"assets/images/orange_orange.png\" width=\"80\">",
          "<img src=\"assets/images/banana.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "香蕉"
      },
      {
        "type": "listen_select",
        "audio": "orange",
        "options": [
          "<img src=\"assets/images/orange.png\" width=\"80\">",
          "<img src=\"assets/images/banana.png\" width=\"80\">",
          "<img src=\"assets/images/water.png\" width=\"80\">",
          "<img src=\"assets/images/red_apple.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "橙子"
      },
      {
        "type": "listen_select",
        "audio": "water",
        "options": [
          "<img src=\"assets/images/milk.png\" width=\"80\">",
          "<img src=\"assets/images/water.png\" width=\"80\">",
          "<img src=\"assets/images/orange_juice.png\" width=\"80\">",
          "<img src=\"assets/images/apple_juice.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "水"
      },
      {
        "type": "listen_tf",
        "audio": "banana",
        "image": "<img src=\"assets/images/orange_orange.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是香蕉，这是橙子。"
      },
      {
        "type": "listen_tf",
        "audio": "orange juice",
        "image": "<img src=\"assets/images/orange_juice.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是橙汁，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "milk",
        "image": "<img src=\"assets/images/milk.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是牛奶，正确！"
      },
      {
        "type": "listen_select",
        "audio": "What's your favorite drink?",
        "options": [
          "你最喜欢的水果是什么？",
          "你想喝什么？",
          "你最喜欢的饮料是什么？",
          "你想吃什么？"
        ],
        "correct": 2,
        "chinese": "你最喜欢的饮料是什么？"
      },
      {
        "type": "listen_select",
        "audio": "My favorite drink is milk.",
        "options": [
          "我最喜欢的饮料是牛奶。",
          "我最喜欢的水果是香蕉。",
          "我喜欢喝水。",
          "我想要橙汁。"
        ],
        "correct": 0,
        "chinese": "我最喜欢的饮料是牛奶。"
      },
      {
        "type": "listen_select",
        "audio": "Here are some fruits.",
        "options": [
          "这里有一些水果。",
          "你喜欢什么水果？",
          "我最喜欢香蕉。",
          "这些是橙子。"
        ],
        "correct": 0,
        "chinese": "这里有一些水果。"
      },
      {
        "type": "listen_select",
        "audio": "What's your favorite fruit?",
        "options": [
          "你最喜欢的饮料是什么？",
          "你想要一些水果吗？",
          "你最喜欢的水果是什么？",
          "这里有一些水果。"
        ],
        "correct": 2,
        "chinese": "你最喜欢的水果是什么？"
      },
      {
        "type": "listen_select",
        "audio": "My favorite fruit is bananas.",
        "options": [
          "我最喜欢的水果是香蕉。",
          "我最喜欢的饮料是牛奶。",
          "我喜欢苹果和橙子。",
          "我想要一些水果。"
        ],
        "correct": 0,
        "chinese": "我最喜欢的水果是香蕉。"
      },
      {
        "type": "listen_select",
        "audio": "What about you?",
        "options": [
          "你呢？",
          "是的，请给我。",
          "谢谢你。",
          "不客气。"
        ],
        "correct": 0,
        "chinese": "你呢？"
      },
      {
        "type": "listen_select",
        "audio": "I like apples.",
        "options": [
          "我喜欢香蕉。",
          "我喜欢苹果。",
          "我喜欢橙子。",
          "我喜欢牛奶。"
        ],
        "correct": 1,
        "chinese": "我喜欢苹果。"
      },
      {
        "type": "listen_select",
        "audio": "And I like apple juice, too.",
        "options": [
          "我也喜欢苹果汁。",
          "我也喜欢橙汁。",
          "我也喜欢牛奶。",
          "我也喜欢水。"
        ],
        "correct": 0,
        "chinese": "我也喜欢苹果汁。"
      },
      {
        "type": "listen_select",
        "audio": "Do you want some orange juice? It's sweet.",
        "options": [
          "你想要一些橙汁吗？它是甜的。",
          "你想要一些苹果汁吗？它很好喝。",
          "你想喝牛奶吗？",
          "你喜欢什么饮料？"
        ],
        "correct": 0,
        "chinese": "你想要一些橙汁吗？它是甜的。"
      },
      {
        "type": "listen_select",
        "audio": "Yes, please.",
        "options": [
          "不，谢谢。",
          "是的，请给我。",
          "我也是。",
          "好主意。"
        ],
        "correct": 1,
        "chinese": "是的，请给我。"
      },
      {
        "type": "listen_tf",
        "audio": "apple juice",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是苹果汁，正确！"
      },
      {
        "type": "listen_select",
        "audio": "I like apples. And I like apple juice, too.",
        "options": [
          "我喜欢橙子和橙汁。",
          "我喜欢苹果。我也喜欢苹果汁。",
          "我喜欢香蕉和牛奶。",
          "我最喜欢的水果是苹果。"
        ],
        "correct": 1,
        "chinese": "我喜欢苹果。我也喜欢苹果汁。"
      },
      {
        "type": "listen_select",
        "audio": "It's sweet.",
        "options": [
          "它是甜的。",
          "它是酸的。",
          "它很好喝。",
          "它很大。"
        ],
        "correct": 0,
        "chinese": "它是甜的。"
      },
      {
        "type": "listen_select",
        "audio": "My favorite fruit is bananas. What about you?",
        "options": [
          "我最喜欢的水果是香蕉。你呢？",
          "我最喜欢的饮料是牛奶。你呢？",
          "我喜欢苹果。你喜欢什么？",
          "这里有一些水果。你想要吗？"
        ],
        "correct": 0,
        "chinese": "我最喜欢的水果是香蕉。你呢？"
      },
      {
        "type": "listen_sequence",
        "audio": "orange, banana, water",
        "sequence": [
          "orange",
          "banana",
          "water"
        ],
        "words": [
          "<img src=\"assets/images/water.png\" width=\"60\">",
          "<img src=\"assets/images/orange_orange.png\" width=\"60\">",
          "<img src=\"assets/images/banana.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "What's your favorite fruit?",
        "context": "🍌 朋友问你最喜欢什么水果。",
        "question": "朋友在问什么？",
        "options": [
          "最喜欢什么水果",
          "最喜欢什么饮料",
          "想吃什么",
          "想喝什么"
        ],
        "correct": 0,
        "chinese": "你最喜欢什么水果？"
      },
      {
        "type": "listen_select",
        "audio": "I like bananas. They're sweet.",
        "context": "🍊 你告诉朋友你的选择。",
        "question": "你喜欢什么？为什么？",
        "options": [
          "香蕉，因为甜",
          "橙子，因为酸",
          "苹果，因为脆",
          "水，因为解渴"
        ],
        "correct": 0,
        "chinese": "我喜欢香蕉。它们很甜。"
      },
      {
        "type": "listen_select",
        "audio": "I want some water.",
        "context": "💧 渴了想喝点什么。",
        "question": "他想喝什么？",
        "options": [
          "水",
          "果汁",
          "牛奶",
          "可乐"
        ],
        "correct": 0,
        "chinese": "我想要一些水。"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "word": "banana",
        "sentence": "My favorite fruit is bananas.",
        "chinese": "我最喜欢的水果是香蕉。",
        "options": [
          {
            "text": "<img src=\"assets/images/banana.png\" width=\"80\">",
            "value": "banana"
          },
          {
            "text": "<img src=\"assets/images/red_apple.png\" width=\"80\">",
            "value": "apple"
          },
          {
            "text": "<img src=\"assets/images/orange_orange.png\" width=\"80\">",
            "value": "orange"
          },
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "milk"
          }
        ],
        "correct": "banana"
      },
      {
        "type": "word_match",
        "word": "orange",
        "sentence": "Do you want some orange juice?",
        "chinese": "你想要一些橙汁吗？",
        "options": [
          {
            "text": "<img src=\"assets/images/banana.png\" width=\"80\">",
            "value": "banana"
          },
          {
            "text": "<img src=\"assets/images/orange_orange.png\" width=\"80\">",
            "value": "orange"
          },
          {
            "text": "<img src=\"assets/images/water.png\" width=\"80\">",
            "value": "water"
          },
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "milk"
          }
        ],
        "correct": "orange"
      },
      {
        "type": "word_match",
        "word": "milk",
        "sentence": "My favorite drink is milk.",
        "chinese": "我最喜欢的饮料是牛奶。",
        "options": [
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
          },
          {
            "text": "<img src=\"assets/images/orange_juice.png\" width=\"80\">",
            "value": "orange juice"
          }
        ],
        "correct": "milk"
      },
      {
        "type": "sentence_match",
        "sentence": "What's your favorite drink?",
        "chinese": "你最喜欢的饮料是什么？",
        "options": [
          {
            "text": "你最喜欢的饮料是什么？",
            "value": "correct"
          },
          {
            "text": "你最喜欢的水果是什么？",
            "value": "wrong1"
          },
          {
            "text": "你想喝什么？",
            "value": "wrong2"
          },
          {
            "text": "你想吃什么？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What's your favorite fruit?",
        "chinese": "你最喜欢的水果是什么？",
        "options": [
          {
            "text": "你最喜欢的饮料是什么？",
            "value": "wrong1"
          },
          {
            "text": "你最喜欢的水果是什么？",
            "value": "correct"
          },
          {
            "text": "这里有一些水果。",
            "value": "wrong2"
          },
          {
            "text": "你喜欢香蕉吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "My favorite fruit is bananas.",
        "chinese": "我最喜欢的水果是香蕉。",
        "options": [
          {
            "text": "我最喜欢的水果是香蕉。",
            "value": "correct"
          },
          {
            "text": "我最喜欢的饮料是牛奶。",
            "value": "wrong1"
          },
          {
            "text": "我喜欢苹果。",
            "value": "wrong2"
          },
          {
            "text": "我想要一些橙汁。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I like apples. And I like apple juice, too.",
        "chinese": "我喜欢苹果。我也喜欢苹果汁。",
        "options": [
          {
            "text": "我喜欢苹果。我也喜欢苹果汁。",
            "value": "correct"
          },
          {
            "text": "我喜欢香蕉和橙汁。",
            "value": "wrong1"
          },
          {
            "text": "我最喜欢的饮料是牛奶。",
            "value": "wrong2"
          },
          {
            "text": "我想要一些水果。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Do you want some orange juice? It's sweet.",
        "chinese": "你想要一些橙汁吗？它是甜的。",
        "options": [
          {
            "text": "你想要一些苹果汁吗？",
            "value": "wrong1"
          },
          {
            "text": "你想要一些橙汁吗？它是甜的。",
            "value": "correct"
          },
          {
            "text": "你喜欢什么饮料？",
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
        "sentence": "你最喜欢的饮料是什么？",
        "options": [
          {
            "text": "What's your favorite fruit?",
            "value": "wrong1"
          },
          {
            "text": "What do you want to drink?",
            "value": "wrong2"
          },
          {
            "text": "What's your favorite drink?",
            "value": "correct"
          },
          {
            "text": "Do you want some milk?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你最喜欢的水果是什么？",
        "options": [
          {
            "text": "What's your favorite drink?",
            "value": "wrong1"
          },
          {
            "text": "What's your favorite fruit?",
            "value": "correct"
          },
          {
            "text": "Here are some fruits.",
            "value": "wrong2"
          },
          {
            "text": "Do you want some bananas?",
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
            "word": "orange",
            "match": "<img src=\"assets/images/orange_orange.png\" width=\"50\">",
            "chinese": "橙子"
          },
          {
            "word": "banana",
            "match": "<img src=\"assets/images/banana.png\" width=\"50\">",
            "chinese": "香蕉"
          },
          {
            "word": "apple juice",
            "match": "<img src=\"assets/images/apple_juice.png\" width=\"50\">",
            "chinese": "苹果汁"
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
            "word": "favorite",
            "match": "最喜欢",
            "example": "What's your favorite fruit?"
          },
          {
            "word": "fruit",
            "match": "水果",
            "example": "What's your favorite fruit?"
          },
          {
            "word": "sweet",
            "match": "甜的",
            "example": "It's sweet."
          },
          {
            "word": "water",
            "match": "水",
            "example": "I want some water."
          }
        ]
      },
      {
        "type": "word_match",
        "word": "banana",
        "sentence": "I like bananas.",
        "chinese": "我喜欢香蕉。",
        "options": [
          {
            "text": "<img src=\"assets/images/orange_orange.png\" width=\"80\">",
            "value": "orange"
          },
          {
            "text": "<img src=\"assets/images/banana.png\" width=\"80\">",
            "value": "banana"
          },
          {
            "text": "<img src=\"assets/images/red_apple.png\" width=\"80\">",
            "value": "apple"
          },
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "milk"
          }
        ],
        "correct": "banana"
      },
      {
        "type": "word_match",
        "word": "orange juice",
        "sentence": "Do you want some orange juice?",
        "chinese": "你想要一些橙汁吗？",
        "options": [
          {
            "text": "<img src=\"assets/images/orange_juice.png\" width=\"80\">",
            "value": "orange juice"
          },
          {
            "text": "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
            "value": "apple juice"
          },
          {
            "text": "<img src=\"assets/images/water.png\" width=\"80\">",
            "value": "water"
          },
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "milk"
          }
        ],
        "correct": "orange juice"
      },
      {
        "type": "word_match",
        "word": "apple juice",
        "sentence": "I like apple juice.",
        "chinese": "我喜欢苹果汁。",
        "options": [
          {
            "text": "<img src=\"assets/images/water.png\" width=\"80\">",
            "value": "water"
          },
          {
            "text": "<img src=\"assets/images/orange_juice.png\" width=\"80\">",
            "value": "orange juice"
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
        "sentence": "What's your favorite drink? My favorite drink is milk.",
        "chinese": "你最喜欢的饮料是什么？我最喜欢的饮料是牛奶。",
        "options": [
          {
            "text": "你最喜欢的饮料是什么？我最喜欢的饮料是牛奶。",
            "value": "correct"
          },
          {
            "text": "你最喜欢的水果是什么？我最喜欢的水果是香蕉。",
            "value": "wrong1"
          },
          {
            "text": "你想喝什么？我想喝水。",
            "value": "wrong2"
          },
          {
            "text": "你想要橙汁吗？是的。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Yes, please.",
        "chinese": "是的，请给我。",
        "options": [
          {
            "text": "是的，请给我。",
            "value": "correct"
          },
          {
            "text": "不，谢谢。",
            "value": "wrong1"
          },
          {
            "text": "我也是。",
            "value": "wrong2"
          },
          {
            "text": "好主意。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Here are some fruits.",
        "chinese": "这里有一些水果。",
        "options": [
          {
            "text": "这里有一些水果。",
            "value": "correct"
          },
          {
            "text": "你喜欢什么水果？",
            "value": "wrong1"
          },
          {
            "text": "我最喜欢香蕉。",
            "value": "wrong2"
          },
          {
            "text": "这些是橙子。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What's your favorite fruit? My favorite fruit is bananas.",
        "chinese": "你最喜欢的水果是什么？我最喜欢的水果是香蕉。",
        "options": [
          {
            "text": "你最喜欢的水果是什么？我最喜欢的水果是香蕉。",
            "value": "correct"
          },
          {
            "text": "你最喜欢的饮料是什么？我最喜欢的饮料是牛奶。",
            "value": "wrong1"
          },
          {
            "text": "你喜欢苹果吗？是的，我喜欢。",
            "value": "wrong2"
          },
          {
            "text": "这里有一些水果。你想要吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What about you?",
        "chinese": "你呢？",
        "options": [
          {
            "text": "你呢？",
            "value": "correct"
          },
          {
            "text": "谢谢你。",
            "value": "wrong1"
          },
          {
            "text": "是的，请给我。",
            "value": "wrong2"
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
        "sentence": "I like apples. And I like apple juice, too.",
        "chinese": "我喜欢苹果。我也喜欢苹果汁。",
        "options": [
          {
            "text": "我喜欢苹果。我也喜欢苹果汁。",
            "value": "correct"
          },
          {
            "text": "我喜欢香蕉和橙汁。",
            "value": "wrong1"
          },
          {
            "text": "我最喜欢牛奶。",
            "value": "wrong2"
          },
          {
            "text": "我想喝一些水。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Do you want some orange juice? It's sweet.",
        "chinese": "你想要一些橙汁吗？它是甜的。",
        "options": [
          {
            "text": "你想要一些苹果汁吗？",
            "value": "wrong1"
          },
          {
            "text": "你想要一些橙汁吗？它是甜的。",
            "value": "correct"
          },
          {
            "text": "你想喝水吗？",
            "value": "wrong2"
          },
          {
            "text": "你喜欢什么饮料？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's sweet.",
        "chinese": "它是甜的。",
        "options": [
          {
            "text": "它是甜的。",
            "value": "correct"
          },
          {
            "text": "它是酸的。",
            "value": "wrong1"
          },
          {
            "text": "它很好喝。",
            "value": "wrong2"
          },
          {
            "text": "它很大。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "我喜欢苹果。我也喜欢苹果汁。",
        "options": [
          {
            "text": "I like oranges. And I like orange juice, too.",
            "value": "wrong1"
          },
          {
            "text": "I like apples. And I like apple juice, too.",
            "value": "correct"
          },
          {
            "text": "I like bananas. And I like milk, too.",
            "value": "wrong2"
          },
          {
            "text": "My favorite fruit is apples.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想要一些橙汁吗？它是甜的。",
        "options": [
          {
            "text": "Do you want some apple juice? It's sweet.",
            "value": "wrong1"
          },
          {
            "text": "Do you want some orange juice? It's sweet.",
            "value": "correct"
          },
          {
            "text": "Do you want some milk? It's good.",
            "value": "wrong2"
          },
          {
            "text": "What's your favorite drink?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "这里有一些水果。",
        "options": [
          {
            "text": "Here are some fruits.",
            "value": "correct"
          },
          {
            "text": "What's your favorite fruit?",
            "value": "wrong1"
          },
          {
            "text": "I like bananas.",
            "value": "wrong2"
          },
          {
            "text": "Do you want some fruits?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "我最喜欢的饮料是牛奶。",
        "options": [
          {
            "text": "My favorite fruit is bananas.",
            "value": "wrong1"
          },
          {
            "text": "I like milk.",
            "value": "wrong2"
          },
          {
            "text": "My favorite drink is milk.",
            "value": "correct"
          },
          {
            "text": "I want some milk.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "word_match",
        "word": "water",
        "sentence": "I want some water.",
        "chinese": "我想要一些水。",
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
            "text": "<img src=\"assets/images/orange_juice.png\" width=\"80\">",
            "value": "orange juice"
          },
          {
            "text": "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
            "value": "apple juice"
          }
        ],
        "correct": "water"
      },
      {
        "type": "sentence_match",
        "sentence": "My favorite drink is milk. What about you?",
        "chinese": "我最喜欢的饮料是牛奶。你呢？",
        "options": [
          {
            "text": "我最喜欢的饮料是牛奶。你呢？",
            "value": "correct"
          },
          {
            "text": "我最喜欢的水果是苹果。你喜欢吗？",
            "value": "wrong1"
          },
          {
            "text": "我想喝橙汁。你想喝什么？",
            "value": "wrong2"
          },
          {
            "text": "这里有一些水果。你想要吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "是的，请给我。",
        "options": [
          {
            "text": "No, thanks.",
            "value": "wrong1"
          },
          {
            "text": "Yes, please.",
            "value": "correct"
          },
          {
            "text": "Me too!",
            "value": "wrong2"
          },
          {
            "text": "Good idea.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "我最喜欢的水果是香蕉。",
        "options": [
          {
            "text": "My favorite drink is milk.",
            "value": "wrong1"
          },
          {
            "text": "I like bananas.",
            "value": "wrong2"
          },
          {
            "text": "My favorite fruit is bananas.",
            "value": "correct"
          },
          {
            "text": "Here are some bananas.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你呢？",
        "options": [
          {
            "text": "Yes, please.",
            "value": "wrong1"
          },
          {
            "text": "What about you?",
            "value": "correct"
          },
          {
            "text": "Thank you.",
            "value": "wrong2"
          },
          {
            "text": "Me too!",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "My favorite fruit is bananas.",
        "context": "你在做调查问卷，问同学最喜欢什么水果。一个同学的回答是：",
        "question": "他最喜欢什么水果？",
        "options": [
          {
            "text": "香蕉",
            "value": "correct"
          },
          {
            "text": "橙子",
            "value": "w1"
          },
          {
            "text": "苹果",
            "value": "w2"
          },
          {
            "text": "西瓜",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "我最喜欢的水果是香蕉。"
      },
      {
        "type": "scenario",
        "sentence": "It's sweet.",
        "context": "你问朋友为什么喜欢这个水果。他说了一个原因。",
        "question": "为什么喜欢？",
        "options": [
          {
            "text": "因为甜",
            "value": "correct"
          },
          {
            "text": "因为大",
            "value": "w1"
          },
          {
            "text": "因为便宜",
            "value": "w2"
          },
          {
            "text": "因为好看",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "它很甜。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "What's your favorite fruit?",
          "I like bananas.",
          "They're sweet!"
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "你最喜欢什么水果？ / 我喜欢香蕉。 / 它们很甜！"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "I'm thirsty.",
          "I want some water.",
          "Here you are."
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "我渴了。 / 我想要水。 / 给你。"
      },
      {
        "type": "word_match",
        "word": "orange",
        "options": [
          {
            "text": "<img src=\"assets/images/orange_orange.png\" width=\"80\">",
            "value": "orange"
          },
          {
            "text": "<img src=\"assets/images/banana.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/water.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "orange",
        "chinese": "orange"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "香蕉的首字母是？",
        "image": "<img src=\"assets/images/banana.png\" width=\"80\">",
        "options": [
          "b",
          "d",
          "p",
          "g"
        ],
        "correct": 0,
        "chinese": "香蕉",
        "word": "香蕉"
      },
      {
        "type": "fill_blank",
        "prompt": "My favorite _____ is milk.",
        "image": "<img src=\"assets/images/milk.png\" width=\"80\">",
        "options": [
          "drink",
          "fruit",
          "food",
          "color"
        ],
        "correct": 0,
        "chinese": "我最喜欢的饮料是牛奶。"
      },
      {
        "type": "fill_blank",
        "prompt": "My favorite _____ is bananas.",
        "image": "<img src=\"assets/images/banana.png\" width=\"80\">",
        "options": [
          "drink",
          "fruit",
          "food",
          "animal"
        ],
        "correct": 1,
        "chinese": "我最喜欢的水果是香蕉。"
      },
      {
        "type": "fill_blank",
        "prompt": "Do you want some orange juice? It's _____.",
        "image": "<img src=\"assets/images/orange_juice.png\" width=\"80\">",
        "options": [
          "big",
          "sweet",
          "small",
          "hot"
        ],
        "correct": 1,
        "chinese": "你想要一些橙汁吗？它是甜的。"
      },
      {
        "type": "word_puzzle",
        "hint": "f_vorite",
        "word": "favorite",
        "options": [
          "h",
          "l",
          "o",
          "a"
        ],
        "correct": 3,
        "chinese": "favorite"
      },
      {
        "type": "word_puzzle",
        "hint": "f_uit",
        "word": "fruit",
        "options": [
          "o",
          "r",
          "e",
          "q"
        ],
        "correct": 1,
        "chinese": "fruit"
      },
      {
        "type": "word_puzzle",
        "hint": "o_ange",
        "word": "orange",
        "options": [
          "x",
          "k",
          "r",
          "w"
        ],
        "correct": 2,
        "chinese": "orange"
      },
      {
        "type": "fill_blank",
        "prompt": "I like _____.",
        "options": [
          "bananas",
          "orange",
          "favorite",
          "fruit"
        ],
        "correct": 0,
        "chinese": "I like bananas."
      },
      {
        "type": "fill_blank",
        "prompt": "I want _____.",
        "options": [
          "favorite",
          "fruit",
          "water",
          "orange"
        ],
        "correct": 2,
        "chinese": "I want water."
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "你最喜欢的饮料是什么？",
        "words": [
          "What's",
          "your",
          "favorite",
          "drink"
        ],
        "scrambled": [
          "drink",
          "What's",
          "favorite",
          "your"
        ],
        "chineseWords": [
          "什么",
          "你",
          "最喜欢的",
          "饮料"
        ],
        "chineseScrambled": [
          "饮料",
          "什么",
          "你",
          "最喜欢的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我最喜欢的饮料是牛奶。",
        "words": [
          "My",
          "favorite",
          "drink",
          "is",
          "milk"
        ],
        "scrambled": [
          "milk",
          "My",
          "is",
          "favorite",
          "drink"
        ],
        "chineseWords": [
          "我",
          "最喜欢的",
          "饮料",
          "是",
          "牛奶"
        ],
        "chineseScrambled": [
          "牛奶",
          "是",
          "我",
          "饮料",
          "最喜欢的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "是的，请给我。",
        "words": [
          "Yes",
          "please"
        ],
        "scrambled": [
          "please",
          "Yes"
        ],
        "chineseWords": [
          "是的",
          "请给我"
        ],
        "chineseScrambled": [
          "请给我",
          "是的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这里有一些水果。",
        "words": [
          "Here",
          "are",
          "some",
          "fruits"
        ],
        "scrambled": [
          "fruits",
          "Here",
          "some",
          "are"
        ],
        "chineseWords": [
          "这里",
          "有",
          "一些",
          "水果"
        ],
        "chineseScrambled": [
          "水果",
          "这里",
          "一些",
          "有"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "你最喜欢的水果是什么？",
        "words": [
          "What's",
          "your",
          "favorite",
          "fruit"
        ],
        "scrambled": [
          "fruit",
          "What's",
          "your",
          "favorite"
        ],
        "chineseWords": [
          "什么",
          "你",
          "最喜欢的",
          "水果"
        ],
        "chineseScrambled": [
          "水果",
          "什么",
          "最喜欢的",
          "你"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我最喜欢的水果是香蕉。",
        "words": [
          "My",
          "favorite",
          "fruit",
          "is",
          "bananas"
        ],
        "scrambled": [
          "bananas",
          "is",
          "My",
          "fruit",
          "favorite"
        ],
        "chineseWords": [
          "我",
          "最喜欢的",
          "水果",
          "是",
          "香蕉"
        ],
        "chineseScrambled": [
          "香蕉",
          "我",
          "是",
          "最喜欢的",
          "水果"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "你呢？",
        "words": [
          "What",
          "about",
          "you"
        ],
        "scrambled": [
          "you",
          "What",
          "about"
        ],
        "chineseWords": [
          "你",
          "呢"
        ],
        "chineseScrambled": [
          "呢",
          "你"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我喜欢苹果。",
        "words": [
          "I",
          "like",
          "apples"
        ],
        "scrambled": [
          "apples",
          "I",
          "like"
        ],
        "chineseWords": [
          "我",
          "喜欢",
          "苹果"
        ],
        "chineseScrambled": [
          "苹果",
          "喜欢",
          "我"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我也喜欢苹果汁。",
        "words": [
          "And",
          "I",
          "like",
          "apple",
          "juice",
          "too"
        ],
        "scrambled": [
          "juice",
          "And",
          "too",
          "apple",
          "I",
          "like"
        ],
        "chineseWords": [
          "我",
          "也",
          "喜欢",
          "苹果汁"
        ],
        "chineseScrambled": [
          "苹果汁",
          "也",
          "我",
          "喜欢"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "你想要一些橙汁吗？",
        "words": [
          "Do",
          "you",
          "want",
          "some",
          "orange",
          "juice"
        ],
        "scrambled": [
          "juice",
          "Do",
          "some",
          "orange",
          "want",
          "you"
        ],
        "chineseWords": [
          "你",
          "想要",
          "一些",
          "橙汁",
          "吗"
        ],
        "chineseScrambled": [
          "橙汁",
          "吗",
          "你",
          "一些",
          "想要"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它是甜的。",
        "words": [
          "It's",
          "sweet"
        ],
        "scrambled": [
          "sweet",
          "It's"
        ],
        "chineseWords": [
          "它",
          "是甜的"
        ],
        "chineseScrambled": [
          "是甜的",
          "它"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "What's your _____ drink?",
        "image": "<img src=\"assets/images/milk.png\" width=\"80\">",
        "options": [
          "favorite",
          "big",
          "some",
          "sweet"
        ],
        "correct": 0,
        "chinese": "你最喜欢的饮料是什么？"
      },
      {
        "type": "fill_blank",
        "prompt": "Here are some _____.",
        "image": "<img src=\"assets/images/banana.png\" width=\"80\">",
        "options": [
          "fruits",
          "drinks",
          "animals",
          "books"
        ],
        "correct": 0,
        "chinese": "这里有一些水果。"
      },
      {
        "type": "fill_blank",
        "prompt": "My favorite fruit is _____.",
        "image": "<img src=\"assets/images/banana.png\" width=\"80\">",
        "options": [
          "milk",
          "bananas",
          "water",
          "juice"
        ],
        "correct": 1,
        "chinese": "我最喜欢的水果是香蕉。"
      },
      {
        "type": "fill_blank",
        "prompt": "Do you want some orange juice? It's _____.",
        "image": "<img src=\"assets/images/orange_juice.png\" width=\"80\">",
        "options": [
          "big",
          "small",
          "sweet",
          "hot"
        ],
        "correct": 2,
        "chinese": "你想要一些橙汁吗？它是甜的。"
      },
      {
        "type": "fill_blank",
        "prompt": "I like apples. And I like apple _____, too.",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
        "options": [
          "water",
          "milk",
          "juice",
          "salad"
        ],
        "correct": 2,
        "chinese": "我喜欢苹果。我也喜欢苹果汁。"
      },
      {
        "type": "word_puzzle",
        "hint": "favo_ite",
        "word": "favorite",
        "options": [
          "i",
          "z",
          "c",
          "r"
        ],
        "correct": 3,
        "chinese": "favorite"
      },
      {
        "type": "word_puzzle",
        "hint": "fr_it",
        "word": "fruit",
        "options": [
          "x",
          "e",
          "j",
          "u"
        ],
        "correct": 3,
        "chinese": "fruit"
      },
      {
        "type": "fill_blank",
        "prompt": "I like _____.",
        "options": [
          "favorite",
          "bananas",
          "fruit",
          "orange"
        ],
        "correct": 1,
        "chinese": "I like bananas."
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "word": "banana",
        "chinese": "香蕉",
        "image": "<img src=\"assets/images/banana.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "orange",
        "chinese": "橙子",
        "image": "<img src=\"assets/images/orange_orange.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "water",
        "chinese": "水",
        "image": "<img src=\"assets/images/water.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "fruit",
        "chinese": "水果",
        "image": "<img src=\"assets/images/banana.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "sweet",
        "chinese": "甜的",
        "image": "<img src=\"assets/images/orange_juice.png\" width=\"80\">"
      },
      {
        "type": "speak_select",
        "audio": "banana",
        "options": [
          "<img src=\"assets/images/banana.png\" width=\"80\">",
          "<img src=\"assets/images/red_apple.png\" width=\"80\">",
          "<img src=\"assets/images/orange_orange.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "香蕉"
      },
      {
        "type": "speak_select",
        "audio": "orange",
        "options": [
          "<img src=\"assets/images/banana.png\" width=\"80\">",
          "<img src=\"assets/images/water.png\" width=\"80\">",
          "<img src=\"assets/images/orange_orange.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "橙子"
      },
      {
        "type": "speak_select",
        "audio": "milk",
        "options": [
          "<img src=\"assets/images/water.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">",
          "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
          "<img src=\"assets/images/orange_juice.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "牛奶"
      },
      {
        "type": "speak_select",
        "audio": "What's your favorite fruit?",
        "options": [
          "你最喜欢的饮料是什么？",
          "你最喜欢的水果是什么？",
          "你想吃什么？",
          "你喜欢香蕉吗？"
        ],
        "correct": 1,
        "chinese": "你最喜欢的水果是什么？"
      },
      {
        "type": "speak_select",
        "audio": "It's sweet.",
        "options": [
          "它很大。",
          "它很小。",
          "它是甜的。",
          "它很好。"
        ],
        "correct": 2,
        "chinese": "它是甜的。"
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "What's your favorite drink?",
        "chinese": "你最喜欢的饮料是什么？",
        "expected": "What's your favorite drink?"
      },
      {
        "type": "repeat_sentence",
        "word": "My favorite drink is milk.",
        "chinese": "我最喜欢的饮料是牛奶。",
        "expected": "My favorite drink is milk."
      },
      {
        "type": "repeat_sentence",
        "word": "Yes, please.",
        "chinese": "是的，请给我。",
        "expected": "Yes, please."
      },
      {
        "type": "repeat_sentence",
        "word": "Here are some fruits.",
        "chinese": "这里有一些水果。",
        "expected": "Here are some fruits."
      },
      {
        "type": "repeat_sentence",
        "word": "What's your favorite fruit?",
        "chinese": "你最喜欢的水果是什么？",
        "expected": "What's your favorite fruit?"
      },
      {
        "type": "repeat_sentence",
        "word": "My favorite fruit is bananas.",
        "chinese": "我最喜欢的水果是香蕉。",
        "expected": "My favorite fruit is bananas."
      },
      {
        "type": "repeat_sentence",
        "word": "What about you?",
        "chinese": "你呢？",
        "expected": "What about you?"
      },
      {
        "type": "repeat_sentence",
        "word": "I like apples.",
        "chinese": "我喜欢苹果。",
        "expected": "I like apples."
      },
      {
        "type": "repeat_sentence",
        "word": "And I like apple juice, too.",
        "chinese": "我也喜欢苹果汁。",
        "expected": "And I like apple juice, too."
      },
      {
        "type": "repeat_sentence",
        "word": "Do you want some orange juice?",
        "chinese": "你想要一些橙汁吗？",
        "expected": "Do you want some orange juice?"
      },
      {
        "type": "repeat_sentence",
        "word": "It's sweet.",
        "chinese": "它是甜的。",
        "expected": "It's sweet."
      },
      {
        "type": "repeat_sentence",
        "word": "I like apples. And I like apple juice, too.",
        "chinese": "我喜欢苹果。我也喜欢苹果汁。",
        "expected": "I like apples. And I like apple juice, too."
      },
      {
        "type": "repeat_sentence",
        "word": "Do you want some orange juice? It's sweet.",
        "chinese": "你想要一些橙汁吗？它是甜的。",
        "expected": "Do you want some orange juice? It's sweet."
      },
      {
        "type": "repeat_sentence",
        "word": "What's your favorite drink? My favorite drink is milk.",
        "chinese": "你最喜欢的饮料是什么？我最喜欢的饮料是牛奶。",
        "expected": "What's your favorite drink? My favorite drink is milk."
      },
      {
        "type": "repeat_sentence",
        "word": "What's your favorite fruit? My favorite fruit is bananas.",
        "chinese": "你最喜欢的水果是什么？我最喜欢的水果是香蕉。",
        "expected": "What's your favorite fruit? My favorite fruit is bananas."
      },
      {
        "type": "repeat_word",
        "word": "favorite",
        "chinese": "最喜欢的",
        "image": "<img src=\"assets/images/banana.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "fruit",
        "chinese": "水果",
        "image": "<img src=\"assets/images/banana.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "sweet",
        "chinese": "甜的",
        "image": "<img src=\"assets/images/orange_juice.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "orange",
        "chinese": "橙子",
        "image": "<img src=\"assets/images/orange_orange.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "water",
        "chinese": "水",
        "image": "<img src=\"assets/images/water.png\" width=\"80\">"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/orange_orange.png\" width=\"80\">",
        "word": "orange_orange",
        "chinese": "orange_orange"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/banana.png\" width=\"80\">",
        "word": "banana",
        "chinese": "banana"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/apple_juice.png\" width=\"80\">",
        "word": "apple_juice",
        "chinese": "apple_juice"
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
