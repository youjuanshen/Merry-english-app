// Unit 1 Lesson 2: These are pandas.
// Core vocab: small, ear, eye, baby, long, leg, these, those
// Sentences: "These are pandas.", "Those are horses.", "They have small ears.", "It's black and white.", "They are big."
var lesson2 = {
  "id": "U1L2",
  "title": "These are pandas.",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "panda",
        "options": [
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "这些是熊猫。"
      },
      {
        "type": "listen_tf",
        "audio": "horse",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "correct": true,
        "chinese": "那些是马。"
      },
      {
        "type": "listen_select",
        "audio": "bear",
        "options": [
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "这是一只熊。它很大。"
      },
      {
        "type": "listen_tf",
        "audio": "rabbit",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "correct": false,
        "chinese": "这是一只兔子。"
      },
      {
        "type": "listen_select",
        "audio": "duck",
        "options": [
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "这是一只鸭子。"
      },
      {
        "type": "listen_tf",
        "audio": "monkey",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只猴子。"
      },
      {
        "type": "listen_select",
        "audio": "bird",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 3,
        "chinese": "这是一只鸟。"
      },
      {
        "type": "listen_tf",
        "audio": "panda",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "correct": false,
        "chinese": "这些是熊猫。它们是黑白色的。"
      },
      {
        "type": "listen_select",
        "audio": "rabbit",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "这是一只兔子。它有长耳朵。"
      },
      {
        "type": "listen_select",
        "audio": "horse",
        "options": [
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "那些是马。它们有长腿。"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "panda",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "这些是熊猫。它们是黑白色的。"
      },
      {
        "type": "listen_tf",
        "audio": "bear",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只熊。它们很大。"
      },
      {
        "type": "listen_select",
        "audio": "horse",
        "options": [
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "那些是马。它们有长腿。"
      },
      {
        "type": "listen_tf",
        "audio": "duck",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": false,
        "chinese": "这是一只鸭子。"
      },
      {
        "type": "listen_select",
        "audio": "monkey",
        "options": [
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "这是一只猴子。"
      },
      {
        "type": "listen_tf",
        "audio": "rabbit",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只兔子。它们有小眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "bird",
        "options": [
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "这是一只鸟。"
      },
      {
        "type": "listen_tf",
        "audio": "horse",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "correct": false,
        "chinese": "那些是马。"
      },
      {
        "type": "listen_select",
        "audio": "bear",
        "options": [
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "这是一只熊。它们很大。"
      },
      {
        "type": "listen_select",
        "audio": "duck",
        "options": [
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "这是一只鸭子。"
      },
      {
        "type": "listen_tf",
        "audio": "panda",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "correct": true,
        "chinese": "这些是熊猫。它们有小耳朵。"
      },
      {
        "type": "listen_select",
        "audio": "rabbit",
        "options": [
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "这是一只兔子。它有长耳朵。"
      },
      {
        "type": "listen_tf",
        "audio": "bird",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只鸟。"
      },
      {
        "type": "listen_select",
        "audio": "monkey",
        "options": [
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">"
        ],
        "correct": 3,
        "chinese": "这是一只猴子。"
      },
      {
        "type": "listen_select",
        "audio": "horse",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "那些是马。它们有长腿。"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "sentence_match",
        "sentence": "These are pandas.",
        "chinese": "这些是熊猫。",
        "options": [
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "panda"
      },
      {
        "type": "word_match",
        "word": "ear",
        "sentence": "They have small ears.",
        "chinese": "它们有小耳朵。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "Those are horses.",
        "chinese": "那些是马。",
        "options": [
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "horse"
      },
      {
        "type": "word_match",
        "word": "bear",
        "sentence": "This is a bear. They are big.",
        "chinese": "这是一只熊。它们很大。",
        "options": [
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"}
        ],
        "correct": "bear"
      },
      {
        "type": "sentence_match",
        "sentence": "It's black and white.",
        "chinese": "它是黑白色的。",
        "options": [
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "panda"
      },
      {
        "type": "word_match",
        "word": "duck",
        "sentence": "This is a duck.",
        "chinese": "这是一只鸭子。",
        "options": [
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "duck"
      },
      {
        "type": "sentence_match",
        "sentence": "They have small ears.",
        "chinese": "它们有小耳朵。",
        "options": [
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"}
        ],
        "correct": "panda"
      },
      {
        "type": "word_match",
        "word": "monkey",
        "sentence": "This is a monkey.",
        "chinese": "这是一只猴子。",
        "options": [
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"}
        ],
        "correct": "monkey"
      },
      {
        "type": "sentence_match",
        "sentence": "They are big.",
        "chinese": "它们很大。",
        "options": [
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "bear"
      },
      {
        "type": "word_match",
        "word": "horse",
        "sentence": "Those are horses. They have long legs.",
        "chinese": "那些是马。它们有长腿。",
        "options": [
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"}
        ],
        "correct": "horse"
      }
    ],
    "practice": [
      {
        "type": "word_match",
        "word": "panda",
        "sentence": "These are pandas. It's black and white.",
        "chinese": "这些是熊猫。它们是黑白色的。",
        "options": [
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"}
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "Those are horses. They have long legs.",
        "chinese": "那些是马。它们有长腿。",
        "options": [
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "horse"
      },
      {
        "type": "word_match",
        "word": "rabbit",
        "sentence": "This is a rabbit. It has long ears.",
        "chinese": "这是一只兔子。它有长耳朵。",
        "options": [
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "These are pandas. They have small ears.",
        "chinese": "这些是熊猫。它们有小耳朵。",
        "options": [
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "panda"
      },
      {
        "type": "word_match",
        "word": "bear",
        "sentence": "This is a bear. They are big.",
        "chinese": "这是一只熊。它们很大。",
        "options": [
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "bear"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a monkey.",
        "chinese": "这是一只猴子。",
        "options": [
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "monkey"
      },
      {
        "type": "word_match",
        "word": "bird",
        "sentence": "This is a bird. It has two eyes.",
        "chinese": "这是一只鸟。它有两只眼睛。",
        "options": [
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"}
        ],
        "correct": "bird"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a duck.",
        "chinese": "这是一只鸭子。",
        "options": [
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "duck"
      },
      {
        "type": "word_match",
        "word": "horse",
        "sentence": "Those are horses.",
        "chinese": "那些是马。",
        "options": [
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "horse"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a bear. It's big.",
        "chinese": "这是一只熊。它很大。",
        "options": [
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "bear"
      },
      {
        "type": "word_match",
        "word": "duck",
        "sentence": "This is a duck.",
        "chinese": "这是一只鸭子。",
        "options": [
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "duck"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a rabbit. It has long ears.",
        "chinese": "这是一只兔子。它有长耳朵。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "word_match",
        "word": "panda",
        "sentence": "These are pandas.",
        "chinese": "这些是熊猫。",
        "options": [
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"}
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a bird.",
        "chinese": "这是一只鸟。",
        "options": [
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "bird"
      },
      {
        "type": "word_match",
        "word": "monkey",
        "sentence": "This is a monkey.",
        "chinese": "这是一只猴子。",
        "options": [
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
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
        "prompt": "小的(small)的首字母是？",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["c", "s", "z", "x"],
        "correct": 1,
        "chinese": "小的第一个字母是s。"
      },
      {
        "type": "fill_blank",
        "prompt": "These are _____.",
        "image": "🐼",
        "options": ["pandas", "horses", "bears", "birds"],
        "correct": 0,
        "chinese": "这些是熊猫。"
      },
      {
        "type": "word_puzzle",
        "chinese": "耳朵",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "letters": ["e", "a", "r"],
        "scrambled": ["a", "r", "e"]
      },
      {
        "type": "letter_select",
        "prompt": "眼睛的首字母是？",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "options": ["a", "i", "e", "o"],
        "correct": 2,
        "chinese": "眼睛的第一个字母是e。"
      },
      {
        "type": "fill_blank",
        "prompt": "Those are _____.",
        "image": "🐴",
        "options": ["pandas", "bears", "horses", "ducks"],
        "correct": 2,
        "chinese": "那些是马。"
      },
      {
        "type": "word_puzzle",
        "chinese": "眼睛",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "letters": ["e", "y", "e"],
        "scrambled": ["y", "e", "e"]
      },
      {
        "type": "letter_select",
        "prompt": "腿的首字母是？",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["r", "l", "k", "t"],
        "correct": 1,
        "chinese": "腿的第一个字母是l。"
      },
      {
        "type": "fill_blank",
        "prompt": "They have small _____.",
        "image": "🐼",
        "options": ["legs", "eyes", "ears", "mouths"],
        "correct": 2,
        "chinese": "它们有小耳朵。"
      },
      {
        "type": "word_puzzle",
        "chinese": "腿",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "letters": ["l", "e", "g"],
        "scrambled": ["g", "l", "e"]
      },
      {
        "type": "letter_select",
        "prompt": "宝宝的首字母是？",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["d", "p", "b", "g"],
        "correct": 2,
        "chinese": "宝宝的第一个字母是b。"
      },
      {
        "type": "sentence_order",
        "chinese": "这些是熊猫。",
        "words": ["These", "are", "pandas"],
        "scrambled": ["pandas", "These", "are"]
      },
      {
        "type": "sentence_order",
        "chinese": "那些是马。",
        "words": ["Those", "are", "horses"],
        "scrambled": ["are", "horses", "Those"]
      }
    ],
    "practice": [
      {
        "type": "letter_select",
        "prompt": "熊猫的首字母是？",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["b", "d", "q", "p"],
        "correct": 3,
        "chinese": "熊猫的第一个字母是p。"
      },
      {
        "type": "fill_blank",
        "prompt": "These are _____. It's black and white.",
        "image": "🐼",
        "options": ["horses", "pandas", "bears", "ducks"],
        "correct": 1,
        "chinese": "这些是熊猫。它们是黑白色的。"
      },
      {
        "type": "word_puzzle",
        "chinese": "小的",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "letters": ["s", "m", "a", "l", "l"],
        "scrambled": ["l", "s", "m", "a", "l"]
      },
      {
        "type": "letter_select",
        "prompt": "马的首字母是？",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["n", "h", "m", "r"],
        "correct": 1,
        "chinese": "马的第一个字母是h。"
      },
      {
        "type": "fill_blank",
        "prompt": "They have long _____.",
        "image": "🐴",
        "options": ["ears", "eyes", "legs", "mouths"],
        "correct": 2,
        "chinese": "它们有长腿。"
      },
      {
        "type": "word_puzzle",
        "chinese": "长的",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "letters": ["l", "o", "n", "g"],
        "scrambled": ["n", "g", "l", "o"]
      },
      {
        "type": "fill_blank",
        "prompt": "This is a _____. They are big.",
        "image": "🐻",
        "options": ["rabbit", "duck", "bear", "bird"],
        "correct": 2,
        "chinese": "这是一只熊。它们很大。"
      },
      {
        "type": "letter_select",
        "prompt": "熊的首字母是？",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "options": ["b", "d", "p", "g"],
        "correct": 0,
        "chinese": "熊的第一个字母是b。"
      },
      {
        "type": "word_puzzle",
        "chinese": "熊猫",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "letters": ["p", "a", "n", "d", "a"],
        "scrambled": ["d", "a", "p", "n", "a"]
      },
      {
        "type": "fill_blank",
        "prompt": "This is a _____. It has long ears.",
        "image": "🐰",
        "options": ["duck", "rabbit", "monkey", "panda"],
        "correct": 1,
        "chinese": "这是一只兔子。它有长耳朵。"
      },
      {
        "type": "word_puzzle",
        "chinese": "兔子",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "letters": ["r", "a", "b", "b", "i", "t"],
        "scrambled": ["b", "r", "a", "t", "i", "b"]
      },
      {
        "type": "letter_select",
        "prompt": "鸭子的首字母是？",
        "image": "<img src=\"assets/images/duck.png\" width=\"80\">",
        "options": ["b", "p", "d", "q"],
        "correct": 2,
        "chinese": "鸭子的第一个字母是d。"
      },
      {
        "type": "fill_blank",
        "prompt": "These are _____.",
        "image": "🐦",
        "options": ["birds", "ducks", "pandas", "rabbits"],
        "correct": 0,
        "chinese": "这些是鸟。"
      },
      {
        "type": "word_puzzle",
        "chinese": "马",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "letters": ["h", "o", "r", "s", "e"],
        "scrambled": ["r", "h", "e", "o", "s"]
      },
      {
        "type": "fill_blank",
        "prompt": "This is a _____.",
        "image": "🐒",
        "options": ["monkey", "bear", "horse", "panda"],
        "correct": 0,
        "chinese": "这是一只猴子。"
      },
      {
        "type": "sentence_order",
        "chinese": "这些是熊猫。",
        "words": ["These", "are", "pandas"],
        "scrambled": ["are", "These", "pandas"]
      },
      {
        "type": "sentence_order",
        "chinese": "那些是马。",
        "words": ["Those", "are", "horses"],
        "scrambled": ["horses", "Those", "are"]
      },
      {
        "type": "sentence_order",
        "chinese": "它们有小耳朵。",
        "words": ["They", "have", "small", "ears"],
        "scrambled": ["small", "They", "ears", "have"]
      },
      {
        "type": "sentence_order",
        "chinese": "它们很大。",
        "words": ["They", "are", "big"],
        "scrambled": ["big", "are", "They"]
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_sentence",
        "word": "These are pandas.",
        "chinese": "请跟读这个句子：这些是熊猫。",
        "expected": "These are pandas."
      },
      {
        "type": "repeat_word",
        "word": "small",
        "chinese": "请跟读这个单词：小的。",
        "expected": "small"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/panda.png\" width=\"120\">",
        "expected": "panda",
        "chinese": "请看图说出这个动物的英文名字：熊猫。"
      },
      {
        "type": "repeat_sentence",
        "word": "Those are horses.",
        "chinese": "请跟读这个句子：那些是马。",
        "expected": "Those are horses."
      },
      {
        "type": "repeat_word",
        "word": "ear",
        "chinese": "请跟读这个单词：耳朵。",
        "expected": "ear"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/horse.png\" width=\"120\">",
        "expected": "horse",
        "chinese": "请看图说出这个动物的英文名字：马。"
      },
      {
        "type": "repeat_sentence",
        "word": "They have small ears.",
        "chinese": "请跟读这个句子：它们有小耳朵。",
        "expected": "They have small ears."
      },
      {
        "type": "repeat_word",
        "word": "eye",
        "chinese": "请跟读这个单词：眼睛。",
        "expected": "eye"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bear.png\" width=\"120\">",
        "expected": "bear",
        "chinese": "请看图说出这个动物的英文名字：熊。"
      },
      {
        "type": "repeat_sentence",
        "word": "It's black and white.",
        "chinese": "请跟读这个句子：它是黑白色的。",
        "expected": "It's black and white."
      }
    ],
    "practice": [
      {
        "type": "repeat_word",
        "word": "small",
        "chinese": "请跟读这个单词：小的。",
        "expected": "small"
      },
      {
        "type": "repeat_word",
        "word": "ear",
        "chinese": "请跟读这个单词：耳朵。",
        "expected": "ear"
      },
      {
        "type": "repeat_word",
        "word": "eye",
        "chinese": "请跟读这个单词：眼睛。",
        "expected": "eye"
      },
      {
        "type": "repeat_word",
        "word": "baby",
        "chinese": "请跟读这个单词：宝宝。",
        "expected": "baby"
      },
      {
        "type": "repeat_word",
        "word": "long",
        "chinese": "请跟读这个单词：长的。",
        "expected": "long"
      },
      {
        "type": "repeat_word",
        "word": "leg",
        "chinese": "请跟读这个单词：腿。",
        "expected": "leg"
      },
      {
        "type": "repeat_sentence",
        "word": "These are pandas.",
        "chinese": "请跟读这个句子：这些是熊猫。",
        "expected": "These are pandas."
      },
      {
        "type": "repeat_sentence",
        "word": "Those are horses.",
        "chinese": "请跟读这个句子：那些是马。",
        "expected": "Those are horses."
      },
      {
        "type": "repeat_sentence",
        "word": "They have small ears.",
        "chinese": "请跟读这个句子：它们有小耳朵。",
        "expected": "They have small ears."
      },
      {
        "type": "repeat_sentence",
        "word": "It's black and white.",
        "chinese": "请跟读这个句子：它是黑白色的。",
        "expected": "It's black and white."
      },
      {
        "type": "repeat_sentence",
        "word": "They are big.",
        "chinese": "请跟读这个句子：它们很大。",
        "expected": "They are big."
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/panda.png\" width=\"120\">",
        "expected": "panda",
        "chinese": "请看图说出这个动物的英文名字：熊猫。"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/horse.png\" width=\"120\">",
        "expected": "horse",
        "chinese": "请看图说出这个动物的英文名字：马。"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"120\">",
        "expected": "rabbit",
        "chinese": "请看图说出这个动物的英文名字：兔子。"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bear.png\" width=\"120\">",
        "expected": "bear",
        "chinese": "请看图说出这个动物的英文名字：熊。"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/duck.png\" width=\"120\">",
        "expected": "duck",
        "chinese": "请看图说出这个动物的英文名字：鸭子。"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/monkey.png\" width=\"120\">",
        "expected": "monkey",
        "chinese": "请看图说出这个动物的英文名字：猴子。"
      }
    ]
  }
};
