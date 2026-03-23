// Unit 1 Lesson 4: Look! It's a cat.
// Core vocab: draw, nose, cat
// Sentences: "Look! It's a cat.", "These are two eyes.", "Let's draw."
var lesson4 = {
  "id": "U1L4",
  "title": "Look! It's a cat.",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "cat",
        "options": [
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/dog.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "看！这是一只猫"
      },
      {
        "type": "listen_tf",
        "audio": "cat",
        "image": "<img src=\"assets/images/dog.png\" width=\"80\">",
        "correct": false,
        "chinese": "看！这是一只猫"
      },
      {
        "type": "listen_select",
        "audio": "bear",
        "options": [
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "这是一只熊"
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
        "audio": "panda",
        "options": [
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "看！这是一只熊猫"
      },
      {
        "type": "listen_tf",
        "audio": "horse",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": false,
        "chinese": "这是一匹马"
      },
      {
        "type": "listen_select",
        "audio": "rabbit",
        "options": [
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 3,
        "chinese": "看！这是一只兔子"
      },
      {
        "type": "listen_tf",
        "audio": "bird",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只鸟"
      },
      {
        "type": "listen_select",
        "audio": "monkey",
        "options": [
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "这是一只猴子"
      },
      {
        "type": "listen_select",
        "audio": "horse",
        "options": [
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "看！这是一匹马"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "cat",
        "options": [
          "<img src=\"assets/images/dog.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "看！这是一只猫"
      },
      {
        "type": "listen_tf",
        "audio": "cat",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "correct": true,
        "chinese": "看！这是一只猫"
      },
      {
        "type": "listen_select",
        "audio": "bear",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "这是一只熊"
      },
      {
        "type": "listen_tf",
        "audio": "panda",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "correct": false,
        "chinese": "看！这是一只熊猫"
      },
      {
        "type": "listen_select",
        "audio": "rabbit",
        "options": [
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "看！这是一只兔子"
      },
      {
        "type": "listen_tf",
        "audio": "monkey",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只猴子"
      },
      {
        "type": "listen_select",
        "audio": "duck",
        "options": [
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "看！这是一只鸭子"
      },
      {
        "type": "listen_tf",
        "audio": "horse",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "correct": true,
        "chinese": "看！这是一匹马"
      },
      {
        "type": "listen_select",
        "audio": "bird",
        "options": [
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "这是一只鸟"
      },
      {
        "type": "listen_tf",
        "audio": "tiger",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "correct": false,
        "chinese": "这是一只老虎"
      },
      {
        "type": "listen_select",
        "audio": "panda",
        "options": [
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "看！这是一只熊猫"
      },
      {
        "type": "listen_tf",
        "audio": "rabbit",
        "image": "<img src=\"assets/images/duck.png\" width=\"80\">",
        "correct": false,
        "chinese": "看！这是一只兔子"
      },
      {
        "type": "listen_select",
        "audio": "horse",
        "options": [
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "看！这是一匹马"
      },
      {
        "type": "listen_select",
        "audio": "monkey",
        "options": [
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "这是一只猴子。我们来画画吧"
      },
      {
        "type": "listen_tf",
        "audio": "bear",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "correct": true,
        "chinese": "看！这是一只熊"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "sentence_match",
        "sentence": "Look! It's a cat.",
        "chinese": "看！这是一只猫",
        "options": [
          {"text": "<img src=\"assets/images/dog.png\" width=\"80\">", "value": "dog"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "cat"
      },
      {
        "type": "word_match",
        "word": "cat",
        "sentence": "Look! It's a cat.",
        "chinese": "看！这是一只猫",
        "options": [
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"}
        ],
        "correct": "cat"
      },
      {
        "type": "sentence_match",
        "sentence": "These are two eyes.",
        "chinese": "这些是两只眼睛",
        "options": [
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "cat"
      },
      {
        "type": "word_match",
        "word": "nose",
        "sentence": "This is a nose.",
        "chinese": "这是一个鼻子",
        "options": [
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"}
        ],
        "correct": "cat"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! It's a bear.",
        "chinese": "看！这是一只熊",
        "options": [
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "bear"
      },
      {
        "type": "word_match",
        "word": "panda",
        "sentence": "Look! It's a panda.",
        "chinese": "看！这是一只熊猫",
        "options": [
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! It's a rabbit.",
        "chinese": "看！这是一只兔子",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "word_match",
        "word": "horse",
        "sentence": "Look! It's a horse.",
        "chinese": "看！这是一匹马",
        "options": [
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"}
        ],
        "correct": "horse"
      },
      {
        "type": "word_match",
        "word": "duck",
        "sentence": "Look! It's a duck.",
        "chinese": "看！这是一只鸭子",
        "options": [
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "duck"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! It's a bird.",
        "chinese": "看！这是一只鸟",
        "options": [
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "bird"
      }
    ],
    "practice": [
      {
        "type": "word_match",
        "word": "cat",
        "sentence": "Look! It's a cat. Let's draw.",
        "chinese": "看！这是一只猫。我们来画画吧",
        "options": [
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/dog.png\" width=\"80\">", "value": "dog"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "cat"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! It's a cat. These are two eyes.",
        "chinese": "看！这是一只猫。这些是两只眼睛",
        "options": [
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "cat"
      },
      {
        "type": "word_match",
        "word": "bear",
        "sentence": "Look! It's a bear.",
        "chinese": "看！这是一只熊",
        "options": [
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"}
        ],
        "correct": "bear"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! It's a panda.",
        "chinese": "看！这是一只熊猫",
        "options": [
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "panda"
      },
      {
        "type": "word_match",
        "word": "rabbit",
        "sentence": "Look! It's a rabbit.",
        "chinese": "看！这是一只兔子",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! It's a horse.",
        "chinese": "看！这是一匹马",
        "options": [
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"}
        ],
        "correct": "horse"
      },
      {
        "type": "word_match",
        "word": "monkey",
        "sentence": "Look! It's a monkey. Let's draw.",
        "chinese": "看！这是一只猴子。我们来画画吧",
        "options": [
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "monkey"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! It's a duck.",
        "chinese": "看！这是一只鸭子",
        "options": [
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "duck"
      },
      {
        "type": "word_match",
        "word": "bird",
        "sentence": "Look! It's a bird.",
        "chinese": "看！这是一只鸟",
        "options": [
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"}
        ],
        "correct": "bird"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! It's a tiger.",
        "chinese": "看！这是一只老虎",
        "options": [
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "tiger"
      },
      {
        "type": "word_match",
        "word": "panda",
        "sentence": "Look! It's a panda. Let's draw.",
        "chinese": "看！这是一只熊猫。我们来画画吧",
        "options": [
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"}
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! It's a monkey.",
        "chinese": "看！这是一只猴子",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "monkey"
      },
      {
        "type": "word_match",
        "word": "horse",
        "sentence": "Look! It's a horse.",
        "chinese": "看！这是一匹马",
        "options": [
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "horse"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! It's a cat.",
        "chinese": "看！这是一只猫。我们来画画吧",
        "options": [
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"}
        ],
        "correct": "cat"
      },
      {
        "type": "word_match",
        "word": "duck",
        "sentence": "Look! It's a duck. Let's draw.",
        "chinese": "看！这是一只鸭子。我们来画画吧",
        "options": [
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "duck"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "猫的首字母是？",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": ["k", "c", "s", "g"],
        "correct": 1,
        "chinese": "猫的第一个字母是c"
      },
      {
        "type": "fill_blank",
        "prompt": "Look! It's a _____.",
        "image": "🐱",
        "options": ["cat", "dog", "bear", "duck"],
        "correct": 0,
        "chinese": "看！这是一只猫"
      },
      {
        "type": "word_puzzle",
        "chinese": "猫",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "letters": ["c", "a", "t"],
        "scrambled": ["t", "c", "a"]
      },
      {
        "type": "letter_select",
        "prompt": "鼻子的首字母是？",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": ["m", "n", "h", "r"],
        "correct": 1,
        "chinese": "鼻子的第一个字母是n"
      },
      {
        "type": "fill_blank",
        "prompt": "These are two _____.",
        "image": "👀",
        "options": ["ears", "eyes", "noses", "mouths"],
        "correct": 1,
        "chinese": "这些是两只眼睛"
      },
      {
        "type": "word_puzzle",
        "chinese": "鼻子",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "letters": ["n", "o", "s", "e"],
        "scrambled": ["s", "n", "e", "o"]
      },
      {
        "type": "letter_select",
        "prompt": "画(draw)的首字母是？",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": ["b", "p", "d", "g"],
        "correct": 2,
        "chinese": "画的第一个字母是d"
      },
      {
        "type": "fill_blank",
        "prompt": "Look! It's a _____.",
        "image": "🐻",
        "options": ["duck", "cat", "bear", "bird"],
        "correct": 2,
        "chinese": "看！这是一只熊"
      },
      {
        "type": "word_puzzle",
        "chinese": "画",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "letters": ["d", "r", "a", "w"],
        "scrambled": ["w", "d", "a", "r"]
      },
      {
        "type": "letter_select",
        "prompt": "鸟的首字母是？",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "options": ["d", "p", "b", "g"],
        "correct": 2,
        "chinese": "鸟的第一个字母是b"
      },
      {
        "type": "sentence_order",
        "chinese": "看！这是一只猫",
        "words": ["Look", "It's", "a", "cat"],
        "scrambled": ["a", "Look", "cat", "It's"]
      },
      {
        "type": "sentence_order",
        "chinese": "我们来画画吧",
        "words": ["Let's", "draw"],
        "scrambled": ["draw", "Let's"]
      }
    ],
    "practice": [
      {
        "type": "letter_select",
        "prompt": "猫的首字母是？",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": ["s", "k", "c", "g"],
        "correct": 2,
        "chinese": "猫的第一个字母是c"
      },
      {
        "type": "fill_blank",
        "prompt": "Look! It's a _____. Let's draw.",
        "image": "🐱",
        "options": ["bear", "cat", "horse", "duck"],
        "correct": 1,
        "chinese": "看！这是一只猫。我们来画画吧"
      },
      {
        "type": "word_puzzle",
        "chinese": "猫",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "letters": ["c", "a", "t"],
        "scrambled": ["a", "t", "c"]
      },
      {
        "type": "letter_select",
        "prompt": "熊猫的首字母是？",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["p", "b", "d", "q"],
        "correct": 0,
        "chinese": "熊猫的第一个字母是p"
      },
      {
        "type": "fill_blank",
        "prompt": "Look! It's a _____.",
        "image": "🐼",
        "options": ["bear", "panda", "cat", "monkey"],
        "correct": 1,
        "chinese": "看！这是一只熊猫"
      },
      {
        "type": "word_puzzle",
        "chinese": "鼻子",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "letters": ["n", "o", "s", "e"],
        "scrambled": ["o", "e", "n", "s"]
      },
      {
        "type": "fill_blank",
        "prompt": "Look! It's a _____.",
        "image": "🐰",
        "options": ["rabbit", "duck", "bear", "horse"],
        "correct": 0,
        "chinese": "看！这是一只兔子"
      },
      {
        "type": "letter_select",
        "prompt": "马的首字母是？",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["n", "m", "h", "r"],
        "correct": 2,
        "chinese": "马的第一个字母是h"
      },
      {
        "type": "word_puzzle",
        "chinese": "画",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "letters": ["d", "r", "a", "w"],
        "scrambled": ["a", "w", "d", "r"]
      },
      {
        "type": "fill_blank",
        "prompt": "Look! It's a _____.",
        "image": "🐴",
        "options": ["cat", "horse", "bird", "panda"],
        "correct": 1,
        "chinese": "看！这是一匹马"
      },
      {
        "type": "word_puzzle",
        "chinese": "熊",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "letters": ["b", "e", "a", "r"],
        "scrambled": ["e", "b", "r", "a"]
      },
      {
        "type": "letter_select",
        "prompt": "猴子的首字母是？",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "options": ["n", "m", "w", "k"],
        "correct": 1,
        "chinese": "猴子的第一个字母是m"
      },
      {
        "type": "fill_blank",
        "prompt": "Look! It's a _____. Let's draw.",
        "image": "🐦",
        "options": ["bird", "duck", "cat", "rabbit"],
        "correct": 0,
        "chinese": "看！这是一只鸟。我们来画画吧"
      },
      {
        "type": "word_puzzle",
        "chinese": "鸭子",
        "image": "<img src=\"assets/images/duck.png\" width=\"80\">",
        "letters": ["d", "u", "c", "k"],
        "scrambled": ["k", "d", "u", "c"]
      },
      {
        "type": "fill_blank",
        "prompt": "Look! It's a _____.",
        "image": "🐒",
        "options": ["monkey", "bear", "cat", "horse"],
        "correct": 0,
        "chinese": "看！这是一只猴子"
      },
      {
        "type": "sentence_order",
        "chinese": "看！这是一只猫",
        "words": ["Look", "It's", "a", "cat"],
        "scrambled": ["It's", "cat", "Look", "a"]
      },
      {
        "type": "sentence_order",
        "chinese": "这些是两只眼睛",
        "words": ["These", "are", "two", "eyes"],
        "scrambled": ["two", "These", "eyes", "are"]
      },
      {
        "type": "sentence_order",
        "chinese": "我们来画画吧",
        "words": ["Let's", "draw"],
        "scrambled": ["draw", "Let's"]
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_sentence",
        "word": "Look! It's a cat.",
        "chinese": "看！这是一只猫",
        "expected": "Look! It's a cat."
      },
      {
        "type": "repeat_word",
        "word": "cat",
        "chinese": "猫",
        "expected": "cat"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/cat.png\" width=\"120\">",
        "expected": "cat",
        "chinese": "猫"
      },
      {
        "type": "repeat_word",
        "word": "nose",
        "chinese": "鼻子",
        "expected": "nose"
      },
      {
        "type": "repeat_sentence",
        "word": "These are two eyes.",
        "chinese": "这些是两只眼睛",
        "expected": "These are two eyes."
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bear.png\" width=\"120\">",
        "expected": "bear",
        "chinese": "熊"
      },
      {
        "type": "repeat_word",
        "word": "draw",
        "chinese": "画",
        "expected": "draw"
      },
      {
        "type": "repeat_sentence",
        "word": "Let's draw.",
        "chinese": "我们来画画吧",
        "expected": "Let's draw."
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/panda.png\" width=\"120\">",
        "expected": "panda",
        "chinese": "熊猫"
      },
      {
        "type": "repeat_sentence",
        "word": "Look! It's a bear.",
        "chinese": "看！这是一只熊",
        "expected": "Look! It's a bear."
      }
    ],
    "practice": [
      {
        "type": "repeat_word",
        "word": "cat",
        "chinese": "猫",
        "expected": "cat"
      },
      {
        "type": "repeat_word",
        "word": "nose",
        "chinese": "鼻子",
        "expected": "nose"
      },
      {
        "type": "repeat_word",
        "word": "draw",
        "chinese": "画",
        "expected": "draw"
      },
      {
        "type": "repeat_sentence",
        "word": "Look! It's a cat.",
        "chinese": "看！这是一只猫",
        "expected": "Look! It's a cat."
      },
      {
        "type": "repeat_sentence",
        "word": "These are two eyes.",
        "chinese": "这些是两只眼睛",
        "expected": "These are two eyes."
      },
      {
        "type": "repeat_sentence",
        "word": "Let's draw.",
        "chinese": "我们来画画吧",
        "expected": "Let's draw."
      },
      {
        "type": "repeat_sentence",
        "word": "Look! It's a bear.",
        "chinese": "看！这是一只熊",
        "expected": "Look! It's a bear."
      },
      {
        "type": "repeat_sentence",
        "word": "Look! It's a panda.",
        "chinese": "看！这是一只熊猫",
        "expected": "Look! It's a panda."
      },
      {
        "type": "repeat_sentence",
        "word": "Look! It's a rabbit.",
        "chinese": "看！这是一只兔子",
        "expected": "Look! It's a rabbit."
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/cat.png\" width=\"120\">",
        "expected": "cat",
        "chinese": "猫"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bear.png\" width=\"120\">",
        "expected": "bear",
        "chinese": "熊"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/panda.png\" width=\"120\">",
        "expected": "panda",
        "chinese": "熊猫"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"120\">",
        "expected": "rabbit",
        "chinese": "兔子"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/horse.png\" width=\"120\">",
        "expected": "horse",
        "chinese": "马"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/duck.png\" width=\"120\">",
        "expected": "duck",
        "chinese": "鸭子"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/monkey.png\" width=\"120\">",
        "expected": "monkey",
        "chinese": "猴子"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bird.png\" width=\"120\">",
        "expected": "bird",
        "chinese": "鸟"
      }
    ]
  }
};
