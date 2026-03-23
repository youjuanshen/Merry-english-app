// Unit 1 Lesson 3: I have an animal friend.
// Core vocab: jump, mouth, meat, tiger, no
// Sentences: "I have an animal friend.", "Is it a rabbit?", "Yes, it is.", "No, it isn't.", "It can jump."
var lesson3 = {
  "id": "U1L3",
  "title": "I have an animal friend.",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "tiger",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "这是一只老虎"
      },
      {
        "type": "listen_tf",
        "audio": "rabbit",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只兔子。它会跳"
      },
      {
        "type": "listen_select",
        "audio": "monkey",
        "options": [
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "这是一只猴子。它会跳"
      },
      {
        "type": "listen_tf",
        "audio": "tiger",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "correct": false,
        "chinese": "这是一只老虎。它吃肉"
      },
      {
        "type": "listen_select",
        "audio": "bear",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "我有一个动物朋友。它是一只熊"
      },
      {
        "type": "listen_tf",
        "audio": "duck",
        "image": "<img src=\"assets/images/duck.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只鸭子"
      },
      {
        "type": "listen_select",
        "audio": "rabbit",
        "options": [
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "它是一只兔子吗？是的，它是"
      },
      {
        "type": "listen_tf",
        "audio": "panda",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "correct": false,
        "chinese": "它是一只熊猫吗？不，不是"
      },
      {
        "type": "listen_select",
        "audio": "horse",
        "options": [
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "我有一个动物朋友。它是一匹马"
      },
      {
        "type": "listen_select",
        "audio": "bird",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 3,
        "chinese": "这是一只鸟"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "tiger",
        "options": [
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "这是一只老虎。它吃肉"
      },
      {
        "type": "listen_tf",
        "audio": "rabbit",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": true,
        "chinese": "它是一只兔子吗？是的，它是"
      },
      {
        "type": "listen_select",
        "audio": "bear",
        "options": [
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "我有一个动物朋友。它是一只熊"
      },
      {
        "type": "listen_tf",
        "audio": "monkey",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "correct": false,
        "chinese": "这是一只猴子。它会跳"
      },
      {
        "type": "listen_select",
        "audio": "panda",
        "options": [
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "我有一个动物朋友。它是一只熊猫"
      },
      {
        "type": "listen_tf",
        "audio": "horse",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "correct": true,
        "chinese": "它是一匹马吗？是的，它是"
      },
      {
        "type": "listen_select",
        "audio": "duck",
        "options": [
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "这是一只鸭子"
      },
      {
        "type": "listen_tf",
        "audio": "bird",
        "image": "<img src=\"assets/images/duck.png\" width=\"80\">",
        "correct": false,
        "chinese": "这是一只鸟"
      },
      {
        "type": "listen_select",
        "audio": "rabbit",
        "options": [
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "这是一只兔子。它会跳"
      },
      {
        "type": "listen_select",
        "audio": "tiger",
        "options": [
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "它是一只老虎吗？是的，它是"
      },
      {
        "type": "listen_tf",
        "audio": "panda",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "correct": true,
        "chinese": "我有一个动物朋友。它是一只熊猫"
      },
      {
        "type": "listen_select",
        "audio": "monkey",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "这是一只猴子"
      },
      {
        "type": "listen_tf",
        "audio": "bear",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": false,
        "chinese": "我有一个动物朋友。它是一只熊"
      },
      {
        "type": "listen_select",
        "audio": "horse",
        "options": [
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "它是一匹马吗？是的，它是"
      },
      {
        "type": "listen_select",
        "audio": "bird",
        "options": [
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "这是一只鸟"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "sentence_match",
        "sentence": "I have an animal friend. It's a tiger.",
        "chinese": "我有一个动物朋友。它是一只老虎",
        "options": [
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "tiger"
      },
      {
        "type": "word_match",
        "word": "rabbit",
        "sentence": "Is it a rabbit? Yes, it is.",
        "chinese": "它是一只兔子吗？是的，它是",
        "options": [
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "It can jump.",
        "chinese": "它会跳",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "word_match",
        "word": "tiger",
        "sentence": "This is a tiger. It eats meat.",
        "chinese": "这是一只老虎。它吃肉",
        "options": [
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "tiger"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a bear? No, it isn't.",
        "chinese": "它是一只熊吗？不，不是",
        "options": [
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "word_match",
        "word": "monkey",
        "sentence": "I have an animal friend. It's a monkey.",
        "chinese": "我有一个动物朋友。它是一只猴子",
        "options": [
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"}
        ],
        "correct": "monkey"
      },
      {
        "type": "sentence_match",
        "sentence": "I have an animal friend. It's a panda.",
        "chinese": "我有一个动物朋友。它是一只熊猫",
        "options": [
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"}
        ],
        "correct": "panda"
      },
      {
        "type": "word_match",
        "word": "horse",
        "sentence": "Is it a horse? Yes, it is.",
        "chinese": "它是一匹马吗？是的，它是",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "horse"
      },
      {
        "type": "word_match",
        "word": "duck",
        "sentence": "Is it a duck? No, it isn't.",
        "chinese": "它是一只鸭子吗？不，不是",
        "options": [
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"}
        ],
        "correct": "duck"
      },
      {
        "type": "sentence_match",
        "sentence": "I have an animal friend. It's a bear.",
        "chinese": "我有一个动物朋友。它是一只熊",
        "options": [
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "bear"
      }
    ],
    "practice": [
      {
        "type": "word_match",
        "word": "tiger",
        "sentence": "I have an animal friend. It's a tiger.",
        "chinese": "我有一个动物朋友。它是一只老虎",
        "options": [
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "tiger"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a rabbit? Yes, it is. It can jump.",
        "chinese": "它是一只兔子吗？是的，它是。它会跳",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "word_match",
        "word": "bear",
        "sentence": "I have an animal friend. It's a bear.",
        "chinese": "我有一个动物朋友。它是一只熊",
        "options": [
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "bear"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a monkey? No, it isn't.",
        "chinese": "它是一只猴子吗？不，不是",
        "options": [
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "word_match",
        "word": "panda",
        "sentence": "Is it a panda? Yes, it is.",
        "chinese": "它是一只熊猫吗？是的，它是",
        "options": [
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a tiger. It eats meat.",
        "chinese": "这是一只老虎。它吃肉",
        "options": [
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "tiger"
      },
      {
        "type": "word_match",
        "word": "horse",
        "sentence": "I have an animal friend. It's a horse.",
        "chinese": "我有一个动物朋友。它是一匹马",
        "options": [
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "horse"
      },
      {
        "type": "sentence_match",
        "sentence": "I have an animal friend. It's a duck.",
        "chinese": "我有一个动物朋友。它是一只鸭子",
        "options": [
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"}
        ],
        "correct": "duck"
      },
      {
        "type": "word_match",
        "word": "bird",
        "sentence": "Is it a bird? Yes, it is.",
        "chinese": "它是一只鸟吗？是的，它是",
        "options": [
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"}
        ],
        "correct": "bird"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a horse? No, it isn't. It's a tiger.",
        "chinese": "它是一匹马吗？不，不是。它是一只老虎",
        "options": [
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"}
        ],
        "correct": "tiger"
      },
      {
        "type": "word_match",
        "word": "rabbit",
        "sentence": "This is a rabbit. It can jump.",
        "chinese": "这是一只兔子。它会跳",
        "options": [
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "I have an animal friend. It's a monkey.",
        "chinese": "我有一个动物朋友。它是一只猴子",
        "options": [
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "monkey"
      },
      {
        "type": "word_match",
        "word": "duck",
        "sentence": "Is it a duck? Yes, it is.",
        "chinese": "它是一只鸭子吗？是的，它是",
        "options": [
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"}
        ],
        "correct": "duck"
      },
      {
        "type": "sentence_match",
        "sentence": "I have an animal friend. It's a bird.",
        "chinese": "我有一个动物朋友。它是一只鸟",
        "options": [
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "bird"
      },
      {
        "type": "word_match",
        "word": "monkey",
        "sentence": "Is it a monkey? Yes, it is. It can jump.",
        "chinese": "它是一只猴子吗？是的，它是。它会跳",
        "options": [
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "monkey"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "老虎的首字母是？",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": ["l", "t", "f", "j"],
        "correct": 1,
        "chinese": "老虎的第一个字母是t"
      },
      {
        "type": "fill_blank",
        "prompt": "Is it a _____? Yes, it is.",
        "image": "🐰",
        "options": ["tiger", "rabbit", "bear", "duck"],
        "correct": 1,
        "chinese": "它是一只兔子吗？是的，它是"
      },
      {
        "type": "word_puzzle",
        "chinese": "老虎",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "letters": ["t", "i", "g", "e", "r"],
        "scrambled": ["g", "r", "t", "e", "i"]
      },
      {
        "type": "letter_select",
        "prompt": "跳(jump)的首字母是？",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": ["g", "j", "y", "p"],
        "correct": 1,
        "chinese": "跳的第一个字母是j"
      },
      {
        "type": "fill_blank",
        "prompt": "I have an animal friend. It's a _____.",
        "image": "🐻",
        "options": ["duck", "bird", "bear", "horse"],
        "correct": 2,
        "chinese": "我有一个动物朋友。它是一只熊"
      },
      {
        "type": "word_puzzle",
        "chinese": "跳",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "letters": ["j", "u", "m", "p"],
        "scrambled": ["m", "p", "j", "u"]
      },
      {
        "type": "letter_select",
        "prompt": "嘴巴的首字母是？",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": ["n", "w", "m", "r"],
        "correct": 2,
        "chinese": "嘴巴的第一个字母是m"
      },
      {
        "type": "fill_blank",
        "prompt": "Is it a _____? No, it isn't.",
        "image": "🐯",
        "options": ["rabbit", "duck", "monkey", "tiger"],
        "correct": 3,
        "chinese": "它是一只老虎吗？不，不是"
      },
      {
        "type": "word_puzzle",
        "chinese": "嘴巴",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "letters": ["m", "o", "u", "t", "h"],
        "scrambled": ["u", "h", "m", "t", "o"]
      },
      {
        "type": "letter_select",
        "prompt": "肉的首字母是？",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": ["n", "m", "w", "r"],
        "correct": 1,
        "chinese": "肉的第一个字母是m"
      },
      {
        "type": "sentence_order",
        "chinese": "我有一个动物朋友",
        "words": ["I", "have", "an", "animal", "friend"],
        "scrambled": ["animal", "I", "friend", "have", "an"]
      },
      {
        "type": "sentence_order",
        "chinese": "它会跳",
        "words": ["It", "can", "jump"],
        "scrambled": ["jump", "It", "can"]
      }
    ],
    "practice": [
      {
        "type": "letter_select",
        "prompt": "兔子的首字母是？",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": ["r", "n", "l", "t"],
        "correct": 0,
        "chinese": "兔子的第一个字母是r"
      },
      {
        "type": "fill_blank",
        "prompt": "I have an animal friend. It's a _____.",
        "image": "🐯",
        "options": ["bear", "tiger", "rabbit", "duck"],
        "correct": 1,
        "chinese": "我有一个动物朋友。它是一只老虎"
      },
      {
        "type": "word_puzzle",
        "chinese": "兔子",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "letters": ["r", "a", "b", "b", "i", "t"],
        "scrambled": ["i", "b", "r", "t", "a", "b"]
      },
      {
        "type": "fill_blank",
        "prompt": "Is it a _____? Yes, it is. It can jump.",
        "image": "🐰",
        "options": ["duck", "rabbit", "horse", "bear"],
        "correct": 1,
        "chinese": "它是一只兔子吗？是的，它是。它会跳"
      },
      {
        "type": "letter_select",
        "prompt": "熊的首字母是？",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "options": ["d", "b", "p", "g"],
        "correct": 1,
        "chinese": "熊的第一个字母是b"
      },
      {
        "type": "word_puzzle",
        "chinese": "肉",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "letters": ["m", "e", "a", "t"],
        "scrambled": ["a", "t", "m", "e"]
      },
      {
        "type": "fill_blank",
        "prompt": "I have an animal friend. It's a _____.",
        "image": "🐼",
        "options": ["panda", "horse", "tiger", "duck"],
        "correct": 0,
        "chinese": "我有一个动物朋友。它是一只熊猫"
      },
      {
        "type": "letter_select",
        "prompt": "猴子的首字母是？",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "options": ["n", "k", "m", "w"],
        "correct": 2,
        "chinese": "猴子的第一个字母是m"
      },
      {
        "type": "word_puzzle",
        "chinese": "老虎",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "letters": ["t", "i", "g", "e", "r"],
        "scrambled": ["e", "t", "r", "i", "g"]
      },
      {
        "type": "fill_blank",
        "prompt": "Is it a _____? No, it isn't.",
        "image": "🐴",
        "options": ["horse", "bear", "tiger", "monkey"],
        "correct": 0,
        "chinese": "它是一匹马吗？不，不是"
      },
      {
        "type": "word_puzzle",
        "chinese": "猴子",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "letters": ["m", "o", "n", "k", "e", "y"],
        "scrambled": ["o", "k", "m", "e", "y", "n"]
      },
      {
        "type": "fill_blank",
        "prompt": "I have an animal friend. It's a _____.",
        "image": "🐒",
        "options": ["bird", "monkey", "duck", "horse"],
        "correct": 1,
        "chinese": "我有一个动物朋友。它是一只猴子"
      },
      {
        "type": "letter_select",
        "prompt": "鸭子的首字母是？",
        "image": "<img src=\"assets/images/duck.png\" width=\"80\">",
        "options": ["b", "d", "p", "q"],
        "correct": 1,
        "chinese": "鸭子的第一个字母是d"
      },
      {
        "type": "word_puzzle",
        "chinese": "鸟",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "letters": ["b", "i", "r", "d"],
        "scrambled": ["r", "b", "d", "i"]
      },
      {
        "type": "fill_blank",
        "prompt": "Is it a _____? Yes, it is.",
        "image": "🐦",
        "options": ["bird", "rabbit", "tiger", "panda"],
        "correct": 0,
        "chinese": "它是一只鸟吗？是的，它是"
      },
      {
        "type": "sentence_order",
        "chinese": "我有一个动物朋友",
        "words": ["I", "have", "an", "animal", "friend"],
        "scrambled": ["friend", "an", "I", "animal", "have"]
      },
      {
        "type": "sentence_order",
        "chinese": "它是一只兔子吗？",
        "words": ["Is", "it", "a", "rabbit"],
        "scrambled": ["rabbit", "Is", "a", "it"]
      },
      {
        "type": "sentence_order",
        "chinese": "它会跳",
        "words": ["It", "can", "jump"],
        "scrambled": ["can", "jump", "It"]
      },
      {
        "type": "sentence_order",
        "chinese": "不，不是",
        "words": ["No", "it", "isn't"],
        "scrambled": ["isn't", "No", "it"]
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_sentence",
        "word": "I have an animal friend.",
        "chinese": "我有一个动物朋友",
        "expected": "I have an animal friend."
      },
      {
        "type": "repeat_word",
        "word": "tiger",
        "chinese": "老虎",
        "expected": "tiger"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/tiger.png\" width=\"120\">",
        "expected": "tiger",
        "chinese": "老虎"
      },
      {
        "type": "repeat_sentence",
        "word": "Is it a rabbit?",
        "chinese": "它是一只兔子吗？",
        "expected": "Is it a rabbit?"
      },
      {
        "type": "repeat_word",
        "word": "jump",
        "chinese": "跳",
        "expected": "jump"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"120\">",
        "expected": "rabbit",
        "chinese": "兔子"
      },
      {
        "type": "repeat_sentence",
        "word": "Yes, it is.",
        "chinese": "是的，它是",
        "expected": "Yes, it is."
      },
      {
        "type": "repeat_word",
        "word": "mouth",
        "chinese": "嘴巴",
        "expected": "mouth"
      },
      {
        "type": "repeat_sentence",
        "word": "No, it isn't.",
        "chinese": "不，不是",
        "expected": "No, it isn't."
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bear.png\" width=\"120\">",
        "expected": "bear",
        "chinese": "熊"
      }
    ],
    "practice": [
      {
        "type": "repeat_word",
        "word": "tiger",
        "chinese": "老虎",
        "expected": "tiger"
      },
      {
        "type": "repeat_word",
        "word": "jump",
        "chinese": "跳",
        "expected": "jump"
      },
      {
        "type": "repeat_word",
        "word": "mouth",
        "chinese": "嘴巴",
        "expected": "mouth"
      },
      {
        "type": "repeat_word",
        "word": "meat",
        "chinese": "肉",
        "expected": "meat"
      },
      {
        "type": "repeat_word",
        "word": "no",
        "chinese": "不",
        "expected": "no"
      },
      {
        "type": "repeat_sentence",
        "word": "I have an animal friend.",
        "chinese": "我有一个动物朋友",
        "expected": "I have an animal friend."
      },
      {
        "type": "repeat_sentence",
        "word": "Is it a rabbit?",
        "chinese": "它是一只兔子吗？",
        "expected": "Is it a rabbit?"
      },
      {
        "type": "repeat_sentence",
        "word": "Yes, it is.",
        "chinese": "是的，它是",
        "expected": "Yes, it is."
      },
      {
        "type": "repeat_sentence",
        "word": "No, it isn't.",
        "chinese": "不，不是",
        "expected": "No, it isn't."
      },
      {
        "type": "repeat_sentence",
        "word": "It can jump.",
        "chinese": "它会跳",
        "expected": "It can jump."
      },
      {
        "type": "repeat_sentence",
        "word": "Is it a tiger?",
        "chinese": "它是一只老虎吗？",
        "expected": "Is it a tiger?"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/tiger.png\" width=\"120\">",
        "expected": "tiger",
        "chinese": "老虎"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"120\">",
        "expected": "rabbit",
        "chinese": "兔子"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/monkey.png\" width=\"120\">",
        "expected": "monkey",
        "chinese": "猴子"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bear.png\" width=\"120\">",
        "expected": "bear",
        "chinese": "熊"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/horse.png\" width=\"120\">",
        "expected": "horse",
        "chinese": "马"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/panda.png\" width=\"120\">",
        "expected": "panda",
        "chinese": "熊猫"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/duck.png\" width=\"120\">",
        "expected": "duck",
        "chinese": "鸭子"
      }
    ]
  }
};
