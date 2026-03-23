// Unit 1 Lesson 1: This is a bear.
// Core vocab: animal, bear, horse, bird, panda
// Extra vocab: rabbit, monkey, duck
var lesson1 = {
  "id": "U1L1",
  "title": "This is a bear.",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "bear",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/dog.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "熊"
      },
      {
        "type": "listen_tf",
        "audio": "horse",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "correct": true,
        "chinese": "马"
      },
      {
        "type": "listen_select",
        "audio": "bird",
        "options": [
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "鸟"
      },
      {
        "type": "listen_tf",
        "audio": "panda",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "correct": false,
        "chinese": "熊猫"
      },
      {
        "type": "listen_select",
        "audio": "animal",
        "options": [
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 3,
        "chinese": "动物"
      },
      {
        "type": "listen_select",
        "audio": "Look! This is a bear. It's big.",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "看！这是一只熊。它很大。"
      },
      {
        "type": "listen_tf",
        "audio": "rabbit",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "correct": false,
        "chinese": "兔子"
      },
      {
        "type": "listen_select",
        "audio": "monkey",
        "options": [
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "猴子"
      },
      {
        "type": "listen_select",
        "audio": "That is a horse. It can run fast.",
        "options": [
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "那是一匹马。它跑得快。"
      },
      {
        "type": "listen_select",
        "audio": "duck",
        "options": [
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "鸭子"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "bear",
        "options": [
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "熊"
      },
      {
        "type": "listen_select",
        "audio": "horse",
        "options": [
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "马"
      },
      {
        "type": "listen_tf",
        "audio": "bird",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "correct": true,
        "chinese": "鸟"
      },
      {
        "type": "listen_select",
        "audio": "panda",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "熊猫"
      },
      {
        "type": "listen_select",
        "audio": "animal",
        "options": [
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 3,
        "chinese": "动物"
      },
      {
        "type": "listen_tf",
        "audio": "rabbit",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": true,
        "chinese": "兔子"
      },
      {
        "type": "listen_select",
        "audio": "monkey",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "猴子"
      },
      {
        "type": "listen_select",
        "audio": "duck",
        "options": [
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/elephant.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "鸭子"
      },
      {
        "type": "listen_select",
        "audio": "So many animals! Let's go in and have a look.",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "好多动物！我们进去看看吧。"
      },
      {
        "type": "listen_select",
        "audio": "Look! This is a bear. It's big.",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "看！这是一只熊。它很大。"
      },
      {
        "type": "listen_select",
        "audio": "That is a horse. It can run fast.",
        "options": [
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "那是一匹马。它跑得快。"
      },
      {
        "type": "listen_select",
        "audio": "This is a red bird. That is a blue bird. They are beautiful.",
        "options": [
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "这是一只红色的鸟。那是一只蓝色的鸟。它们很漂亮。"
      },
      {
        "type": "listen_select",
        "audio": "That is a panda. It's black and white. It's cute.",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "那是一只熊猫。它是黑白色的。它很可爱。"
      },
      {
        "type": "listen_tf",
        "audio": "bear",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "correct": false,
        "chinese": "熊"
      },
      {
        "type": "listen_tf",
        "audio": "horse",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "correct": true,
        "chinese": "马"
      },
      {
        "type": "listen_tf",
        "audio": "panda",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "correct": true,
        "chinese": "熊猫"
      },
      {
        "type": "listen_tf",
        "audio": "duck",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "correct": false,
        "chinese": "鸭子"
      },
      {
        "type": "listen_select",
        "audio": "OK, let's go.",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 3,
        "chinese": "好的，我们走吧。"
      },
      {
        "type": "listen_select",
        "audio": "rabbit",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "兔子"
      },
      {
        "type": "listen_select",
        "audio": "bird",
        "options": [
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 3,
        "chinese": "鸟"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "sentence_match",
        "sentence": "Look! This is a bear.",
        "chinese": "看！这是一只熊。",
        "options": [
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          }
        ],
        "correct": "bear"
      },
      {
        "type": "sentence_match",
        "sentence": "It's big.",
        "chinese": "它很大。",
        "options": [
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/mouse.png\" width=\"80\">",
            "value": "mouse"
          },
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          }
        ],
        "correct": "bear"
      },
      {
        "type": "sentence_match",
        "sentence": "That is a horse.",
        "chinese": "那是一匹马。",
        "options": [
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          },
          {
            "text": "<img src=\"assets/images/monkey.png\" width=\"80\">",
            "value": "monkey"
          }
        ],
        "correct": "horse"
      },
      {
        "type": "sentence_match",
        "sentence": "It can run fast.",
        "chinese": "它能跑得很快。",
        "options": [
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          },
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/mouse.png\" width=\"80\">",
            "value": "mouse"
          }
        ],
        "correct": "horse"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a red bird.",
        "chinese": "这是一只红色的鸟。",
        "options": [
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          }
        ],
        "correct": "bird"
      },
      {
        "type": "sentence_match",
        "sentence": "That is a panda.",
        "chinese": "那是一只熊猫。",
        "options": [
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          },
          {
            "text": "<img src=\"assets/images/monkey.png\" width=\"80\">",
            "value": "monkey"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "It's black and white.",
        "chinese": "它是黑白色的。",
        "options": [
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "It's cute.",
        "chinese": "它很可爱。",
        "options": [
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/elephant.png\" width=\"80\">",
            "value": "elephant"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "They are beautiful.",
        "chinese": "它们很漂亮。",
        "options": [
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          },
          {
            "text": "<img src=\"assets/images/mouse.png\" width=\"80\">",
            "value": "mouse"
          },
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          }
        ],
        "correct": "bird"
      },
      {
        "type": "sentence_match",
        "sentence": "So many animals!",
        "chinese": "好多动物！",
        "options": [
          {
            "text": "好多动物！",
            "value": "correct"
          },
          {
            "text": "好多人！",
            "value": "wrong1"
          },
          {
            "text": "好多食物！",
            "value": "wrong2"
          },
          {
            "text": "好多玩具！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      }
    ],
    "practice": [
      {
        "type": "sentence_match",
        "sentence": "So many animals!",
        "chinese": "好多动物！",
        "options": [
          {
            "text": "好多动物！",
            "value": "correct"
          },
          {
            "text": "好多花！",
            "value": "wrong1"
          },
          {
            "text": "好多书！",
            "value": "wrong2"
          },
          {
            "text": "好多人！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Let's go in and have a look.",
        "chinese": "我们进去看看吧。",
        "options": [
          {
            "text": "我们进去看看吧。",
            "value": "correct"
          },
          {
            "text": "我们回家吧。",
            "value": "wrong1"
          },
          {
            "text": "我们吃饭吧。",
            "value": "wrong2"
          },
          {
            "text": "我们睡觉吧。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "OK, let's go.",
        "chinese": "好的，走吧。",
        "options": [
          {
            "text": "好的，走吧。",
            "value": "correct"
          },
          {
            "text": "不，我不去。",
            "value": "wrong1"
          },
          {
            "text": "好的，吃吧。",
            "value": "wrong2"
          },
          {
            "text": "好的，睡吧。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! This is a bear.",
        "chinese": "看！这是一只熊。",
        "options": [
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          },
          {
            "text": "<img src=\"assets/images/monkey.png\" width=\"80\">",
            "value": "monkey"
          },
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          }
        ],
        "correct": "bear"
      },
      {
        "type": "sentence_match",
        "sentence": "It's big.",
        "chinese": "它很大。",
        "options": [
          {
            "text": "<img src=\"assets/images/elephant.png\" width=\"80\">",
            "value": "elephant"
          },
          {
            "text": "<img src=\"assets/images/mouse.png\" width=\"80\">",
            "value": "mouse"
          },
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          }
        ],
        "correct": "elephant"
      },
      {
        "type": "word_match",
        "word": "bear",
        "sentence": "This is a bear.",
        "chinese": "这是一只熊。",
        "options": [
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          }
        ],
        "correct": "bear"
      },
      {
        "type": "sentence_match",
        "sentence": "That is a horse.",
        "chinese": "那是一匹马。",
        "options": [
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          }
        ],
        "correct": "horse"
      },
      {
        "type": "sentence_match",
        "sentence": "It can run fast.",
        "chinese": "它能跑得很快。",
        "options": [
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          },
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/mouse.png\" width=\"80\">",
            "value": "mouse"
          }
        ],
        "correct": "horse"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a red bird.",
        "chinese": "这是一只红色的鸟。",
        "options": [
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          }
        ],
        "correct": "bird"
      },
      {
        "type": "sentence_match",
        "sentence": "That is a blue bird.",
        "chinese": "那是一只蓝色的鸟。",
        "options": [
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          },
          {
            "text": "<img src=\"assets/images/monkey.png\" width=\"80\">",
            "value": "monkey"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          }
        ],
        "correct": "bird"
      },
      {
        "type": "sentence_match",
        "sentence": "They are beautiful.",
        "chinese": "它们很漂亮。",
        "options": [
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          },
          {
            "text": "<img src=\"assets/images/mouse.png\" width=\"80\">",
            "value": "mouse"
          },
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          }
        ],
        "correct": "bird"
      },
      {
        "type": "sentence_match",
        "sentence": "That is a panda.",
        "chinese": "那是一只熊猫。",
        "options": [
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          },
          {
            "text": "<img src=\"assets/images/monkey.png\" width=\"80\">",
            "value": "monkey"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "It's black and white.",
        "chinese": "它是黑白色的。",
        "options": [
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          },
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "It's cute.",
        "chinese": "它很可爱。",
        "options": [
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/elephant.png\" width=\"80\">",
            "value": "elephant"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "word_match",
        "word": "panda",
        "sentence": "That is a panda.",
        "chinese": "那是一只熊猫。",
        "options": [
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "word_match",
        "word": "horse",
        "sentence": "That is a horse.",
        "chinese": "那是一匹马。",
        "options": [
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          },
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          }
        ],
        "correct": "horse"
      },
      {
        "type": "word_match",
        "word": "bird",
        "sentence": "This is a red bird.",
        "chinese": "这是一只红色的鸟。",
        "options": [
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          },
          {
            "text": "<img src=\"assets/images/monkey.png\" width=\"80\">",
            "value": "monkey"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          }
        ],
        "correct": "bird"
      },
      {
        "type": "sentence_match",
        "sentence": "That is a blue bird.",
        "chinese": "那是一只蓝色的鸟。",
        "options": [
          {
            "text": "那是一只蓝色的鸟。",
            "value": "correct"
          },
          {
            "text": "那是一只红色的鸟。",
            "value": "wrong1"
          },
          {
            "text": "那是一只绿色的鸟。",
            "value": "wrong2"
          },
          {
            "text": "那是一只黄色的鸟。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "So many animals!",
        "chinese": "好多动物！",
        "options": [
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          }
        ],
        "correct": "bear"
      },
      {
        "type": "word_match",
        "word": "bear",
        "sentence": "Look! This is a bear.",
        "chinese": "看！这是一只熊。",
        "options": [
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/monkey.png\" width=\"80\">",
            "value": "monkey"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          }
        ],
        "correct": "bear"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "sentence_order",
        "chinese": "这是一只熊。",
        "words": ["This", "is", "a", "bear"],
        "scrambled": ["bear", "a", "This", "is"]
      },
      {
        "type": "sentence_order",
        "chinese": "那是一匹马。",
        "words": ["That", "is", "a", "horse"],
        "scrambled": ["horse", "That", "a", "is"]
      },
      {
        "type": "fill_blank",
        "prompt": "This is a _____. It's big.",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "options": ["bear", "bird", "horse", "panda"],
        "correct": 0,
        "chinese": "这是一只熊。它很大。"
      },
      {
        "type": "fill_blank",
        "prompt": "That is a _____. It's cute.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["bird", "panda", "horse", "duck"],
        "correct": 1,
        "chinese": "那是一只熊猫。它很可爱。"
      },
      {
        "type": "word_puzzle",
        "chinese": "熊",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "letters": ["b", "e", "a", "r"],
        "scrambled": ["a", "r", "b", "e"]
      },
      {
        "type": "word_puzzle",
        "chinese": "鸟",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "letters": ["b", "i", "r", "d"],
        "scrambled": ["r", "d", "b", "i"]
      },
      {
        "type": "letter_select",
        "prompt": "熊猫的首字母是？",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["d", "b", "p", "q"],
        "correct": 2,
        "chinese": "熊猫"
      },
      {
        "type": "letter_select",
        "prompt": "马的首字母是？",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["n", "h", "m", "b"],
        "correct": 1,
        "chinese": "马"
      },
      {
        "type": "pinyin_fill",
        "hint": "b_ar",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "options": ["e", "a", "o", "i"],
        "correct": 0,
        "chinese": "熊"
      },
      {
        "type": "fill_blank",
        "prompt": "It can run _____.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["fast", "big", "cute", "white"],
        "correct": 0,
        "chinese": "它跑得很快。"
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "好多动物！",
        "words": ["So", "many", "animals"],
        "scrambled": ["animals", "So", "many"]
      },
      {
        "type": "sentence_order",
        "chinese": "我们进去看看吧。",
        "words": ["Let's", "go", "in", "and", "have", "a", "look"],
        "scrambled": ["go", "a", "Let's", "have", "look", "in", "and"]
      },
      {
        "type": "sentence_order",
        "chinese": "好的，我们走吧。",
        "words": ["OK", "let's", "go"],
        "scrambled": ["let's", "OK", "go"]
      },
      {
        "type": "sentence_order",
        "chinese": "这是一只熊。",
        "words": ["This", "is", "a", "bear"],
        "scrambled": ["a", "bear", "This", "is"]
      },
      {
        "type": "sentence_order",
        "chinese": "它很大。",
        "words": ["It's", "big"],
        "scrambled": ["big", "It's"]
      },
      {
        "type": "sentence_order",
        "chinese": "那是一匹马。",
        "words": ["That", "is", "a", "horse"],
        "scrambled": ["a", "That", "horse", "is"]
      },
      {
        "type": "sentence_order",
        "chinese": "它跑得很快。",
        "words": ["It", "can", "run", "fast"],
        "scrambled": ["run", "It", "fast", "can"]
      },
      {
        "type": "sentence_order",
        "chinese": "这是一只红色的鸟。",
        "words": ["This", "is", "a", "red", "bird"],
        "scrambled": ["red", "a", "bird", "This", "is"]
      },
      {
        "type": "sentence_order",
        "chinese": "那是一只蓝色的鸟。",
        "words": ["That", "is", "a", "blue", "bird"],
        "scrambled": ["blue", "That", "a", "bird", "is"]
      },
      {
        "type": "sentence_order",
        "chinese": "它们很漂亮。",
        "words": ["They", "are", "beautiful"],
        "scrambled": ["beautiful", "They", "are"]
      },
      {
        "type": "sentence_order",
        "chinese": "那是一只熊猫。",
        "words": ["That", "is", "a", "panda"],
        "scrambled": ["panda", "That", "a", "is"]
      },
      {
        "type": "sentence_order",
        "chinese": "它是黑白色的。",
        "words": ["It's", "black", "and", "white"],
        "scrambled": ["white", "It's", "and", "black"]
      },
      {
        "type": "sentence_order",
        "chinese": "它很可爱。",
        "words": ["It's", "cute"],
        "scrambled": ["cute", "It's"]
      },
      {
        "type": "fill_blank",
        "prompt": "This is a _____. It's big.",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "options": ["bear", "bird", "horse", "panda"],
        "correct": 0,
        "chinese": "这是一只熊。它很大。"
      },
      {
        "type": "fill_blank",
        "prompt": "That is a _____. It can run fast.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["bird", "bear", "horse", "duck"],
        "correct": 2,
        "chinese": "那是一匹马。它跑得很快。"
      },
      {
        "type": "fill_blank",
        "prompt": "This is a red _____.",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "options": ["bird", "bear", "panda", "monkey"],
        "correct": 0,
        "chinese": "这是一只红色的鸟。"
      },
      {
        "type": "fill_blank",
        "prompt": "That is a _____. It's black and white.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["horse", "panda", "duck", "rabbit"],
        "correct": 1,
        "chinese": "那是一只熊猫。它是黑白色的。"
      },
      {
        "type": "word_puzzle",
        "chinese": "熊",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "letters": ["b", "e", "a", "r"],
        "scrambled": ["r", "b", "e", "a"]
      },
      {
        "type": "word_puzzle",
        "chinese": "马",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "letters": ["h", "o", "r", "s", "e"],
        "scrambled": ["o", "e", "h", "r", "s"]
      },
      {
        "type": "word_puzzle",
        "chinese": "鸟",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "letters": ["b", "i", "r", "d"],
        "scrambled": ["i", "d", "b", "r"]
      },
      {
        "type": "word_puzzle",
        "chinese": "熊猫",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "letters": ["p", "a", "n", "d", "a"],
        "scrambled": ["d", "a", "p", "n", "a"]
      },
      {
        "type": "letter_select",
        "prompt": "熊的首字母是？",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "options": ["p", "d", "b", "g"],
        "correct": 2,
        "chinese": "熊"
      },
      {
        "type": "letter_select",
        "prompt": "鸟的首字母是？",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "options": ["d", "b", "p", "g"],
        "correct": 1,
        "chinese": "鸟"
      },
      {
        "type": "pinyin_fill",
        "hint": "h_rse",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["o", "a", "e", "u"],
        "correct": 0,
        "chinese": "马"
      },
      {
        "type": "pinyin_fill",
        "hint": "p_nda",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["a", "e", "o", "i"],
        "correct": 0,
        "chinese": "熊猫"
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "word": "animal",
        "chinese": "动物",
        "expected": "animal"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "word": "bear",
        "chinese": "熊",
        "expected": "bear"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "word": "horse",
        "chinese": "马",
        "expected": "horse"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "word": "bird",
        "chinese": "鸟",
        "expected": "bird"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "panda",
        "chinese": "熊猫",
        "expected": "panda"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "word": "rabbit",
        "chinese": "兔子",
        "expected": "rabbit"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "word": "monkey",
        "chinese": "猴子",
        "expected": "monkey"
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "word": "This is a bear.",
        "chinese": "这是一只熊。",
        "expected": "This is a bear."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "word": "It's big.",
        "chinese": "它很大。",
        "expected": "It's big."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "It's cute.",
        "chinese": "它很可爱。",
        "expected": "It's cute."
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "So many animals!",
        "chinese": "好多动物！",
        "expected": "So many animals!"
      },
      {
        "type": "repeat_sentence",
        "word": "Let's go in and have a look.",
        "chinese": "我们进去看看吧。",
        "expected": "Let's go in and have a look."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "word": "This is a bear.",
        "chinese": "这是一只熊。",
        "expected": "This is a bear."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "word": "It's big.",
        "chinese": "它很大。",
        "expected": "It's big."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "word": "That is a horse.",
        "chinese": "那是一匹马。",
        "expected": "That is a horse."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "word": "It can run fast.",
        "chinese": "它跑得很快。",
        "expected": "It can run fast."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "word": "This is a red bird.",
        "chinese": "这是一只红色的鸟。",
        "expected": "This is a red bird."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "word": "That is a blue bird.",
        "chinese": "那是一只蓝色的鸟。",
        "expected": "That is a blue bird."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "word": "They are beautiful.",
        "chinese": "它们很漂亮。",
        "expected": "They are beautiful."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "That is a panda.",
        "chinese": "那是一只熊猫。",
        "expected": "That is a panda."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "It's black and white.",
        "chinese": "它是黑白色的。",
        "expected": "It's black and white."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "It's cute.",
        "chinese": "它很可爱。",
        "expected": "It's cute."
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "word": "animal",
        "chinese": "动物",
        "expected": "animal"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "word": "bear",
        "chinese": "熊",
        "expected": "bear"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "word": "horse",
        "chinese": "马",
        "expected": "horse"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bird.png\" width=\"120\">",
        "expected": "bird",
        "word": "bird",
        "chinese": "鸟"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/panda.png\" width=\"120\">",
        "expected": "panda",
        "word": "panda",
        "chinese": "熊猫"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"120\">",
        "expected": "rabbit",
        "word": "rabbit",
        "chinese": "兔子"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/monkey.png\" width=\"120\">",
        "expected": "monkey",
        "word": "monkey",
        "chinese": "猴子"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/duck.png\" width=\"120\">",
        "expected": "duck",
        "word": "duck",
        "chinese": "鸭子"
      }
    ]
  }
};
