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
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "熊"
      },
      {
        "type": "listen_select",
        "audio": "horse",
        "options": [
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "马"
      },
      {
        "type": "listen_select",
        "audio": "panda",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "熊猫"
      },
      {
        "type": "listen_tf",
        "audio": "bird",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是鸟，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "bear",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是熊，这是熊猫。"
      },
      {
        "type": "listen_select",
        "audio": "It's big.",
        "options": [
          "它很大。",
          "它很可爱。",
          "它跑得很快。",
          "它们很漂亮。"
        ],
        "correct": 0,
        "chinese": "它很大。"
      },
      {
        "type": "listen_select",
        "audio": "They are beautiful.",
        "options": [
          "它们很漂亮。",
          "它很可爱。",
          "它很大。",
          "它是黑白色的。"
        ],
        "correct": 0,
        "chinese": "它们很漂亮。"
      },
      {
        "type": "listen_select",
        "audio": "This is a ___. It's big.",
        "options": [
          "bear",
          "bird",
          "panda",
          "duck"
        ],
        "correct": 0,
        "chinese": "这是一只___。它很大。(熊)"
      },
      {
        "type": "listen_select",
        "audio": "That is a ___. It can run fast.",
        "options": [
          "bird",
          "panda",
          "horse",
          "monkey"
        ],
        "correct": 2,
        "chinese": "那是一匹___。它跑得很快。(马)"
      },
      {
        "type": "listen_select",
        "audio": "You see many animals at the zoo. What do you say?",
        "options": [
          "So many animals!",
          "It's big.",
          "They are beautiful.",
          "It can run fast."
        ],
        "correct": 0,
        "chinese": "你在动物园看到很多动物，你会说什么？"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "bird",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "鸟"
      },
      {
        "type": "listen_select",
        "audio": "monkey",
        "options": [
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
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
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "鸭子"
      },
      {
        "type": "listen_select",
        "audio": "rabbit",
        "options": [
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "兔子"
      },
      {
        "type": "listen_tf",
        "audio": "horse",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是马，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "duck",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是鸭子，这是兔子。"
      },
      {
        "type": "listen_tf",
        "audio": "monkey",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是猴子，正确！"
      },
      {
        "type": "listen_select",
        "audio": "It's black and white.",
        "options": [
          "它是黑白色的。",
          "它很大。",
          "它跑得很快。",
          "它们很漂亮。"
        ],
        "correct": 0,
        "chinese": "它是黑白色的。"
      },
      {
        "type": "listen_select",
        "audio": "It can run fast.",
        "options": [
          "它很可爱。",
          "它跑得很快。",
          "它很大。",
          "它是黑白色的。"
        ],
        "correct": 1,
        "chinese": "它跑得很快。"
      },
      {
        "type": "listen_select",
        "audio": "It's cute.",
        "options": [
          "它们很漂亮。",
          "它很大。",
          "它很可爱。",
          "它跑得很快。"
        ],
        "correct": 2,
        "chinese": "它很可爱。"
      },
      {
        "type": "listen_select",
        "audio": "Let's go in and have a look.",
        "options": [
          "我们进去看看吧。",
          "好多动物！",
          "我们走吧。",
          "它们很漂亮。"
        ],
        "correct": 0,
        "chinese": "我们进去看看吧。"
      },
      {
        "type": "listen_select",
        "audio": "This is a ___. It's black and white.",
        "options": [
          "bear",
          "horse",
          "panda",
          "bird"
        ],
        "correct": 2,
        "chinese": "这是一只___。它是黑白色的。(熊猫)"
      },
      {
        "type": "listen_select",
        "audio": "This is a red ___. That is a blue ___.",
        "options": [
          "bear",
          "bird",
          "horse",
          "panda"
        ],
        "correct": 1,
        "chinese": "这是一只红色的___。那是一只蓝色的___。(鸟)"
      },
      {
        "type": "listen_select",
        "audio": "That is a ___. It's cute.",
        "options": [
          "horse",
          "bird",
          "bear",
          "panda"
        ],
        "correct": 3,
        "chinese": "那是一只___。它很可爱。(熊猫)"
      },
      {
        "type": "listen_select",
        "audio": "A says: Look! This is a bear. What does B say?",
        "options": [
          "It's big!",
          "It can run fast.",
          "They are beautiful.",
          "It's cute!"
        ],
        "correct": 0,
        "chinese": "A说：看！这是一只熊。B会说什么？"
      },
      {
        "type": "listen_select",
        "audio": "A says: That is a horse. What does B say?",
        "options": [
          "It's black and white.",
          "It can run fast.",
          "It's cute.",
          "They are beautiful."
        ],
        "correct": 1,
        "chinese": "A说：那是一匹马。B会说什么？"
      },
      {
        "type": "listen_select",
        "audio": "A says: So many animals! What does B say?",
        "options": [
          "It's big.",
          "OK, let's go.",
          "It's cute.",
          "It can run fast."
        ],
        "correct": 1,
        "chinese": "A说：好多动物！B会说什么？"
      },
      {
        "type": "listen_select",
        "audio": "You see a black and white panda. What do you say?",
        "options": [
          "It's black and white. It's cute!",
          "It can run fast.",
          "They are beautiful.",
          "It's big."
        ],
        "correct": 0,
        "chinese": "你看到一只黑白色的熊猫，你会说什么？"
      },
      {
        "type": "listen_select",
        "audio": "You see two colorful birds. What do you say?",
        "options": [
          "It's big.",
          "It can run fast.",
          "They are beautiful.",
          "It's cute."
        ],
        "correct": 2,
        "chinese": "你看到两只漂亮的鸟，你会说什么？"
      },
      {
        "type": "listen_select",
        "audio": "Your friend wants to visit the zoo. What do you say?",
        "options": [
          "It's cute.",
          "Let's go in and have a look.",
          "It's big.",
          "They are beautiful."
        ],
        "correct": 1,
        "chinese": "你的朋友想去动物园，你会说什么？"
      }
    ]
  },
  "reading": {
    "pretest": [
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
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          },
          {
            "text": "<img src=\"assets/images/dog.png\" width=\"80\">",
            "value": "dog"
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
            "text": "<img src=\"assets/images/monkey.png\" width=\"80\">",
            "value": "monkey"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a bear. It's big.",
        "chinese": "这是一只熊。它很大。",
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
        "sentence": "That is a horse. It can run fast.",
        "chinese": "那是一匹马。它能跑得很快。",
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
        "sentence": "They are beautiful.",
        "chinese": "它们很漂亮。",
        "options": [
          {
            "text": "它们很漂亮。",
            "value": "correct"
          },
          {
            "text": "它们很大。",
            "value": "wrong1"
          },
          {
            "text": "它们很可爱。",
            "value": "wrong2"
          },
          {
            "text": "它是黑白色的。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's black and white.",
        "chinese": "它是黑白色的。",
        "options": [
          {
            "text": "它是黑白色的。",
            "value": "correct"
          },
          {
            "text": "它是红色的。",
            "value": "wrong1"
          },
          {
            "text": "它是棕色的。",
            "value": "wrong2"
          },
          {
            "text": "它是蓝色的。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你在动物园看到一只大熊，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "This is a bear. It's big.",
            "value": "correct"
          },
          {
            "text": "That is a panda. It's cute.",
            "value": "wrong1"
          },
          {
            "text": "It can run fast.",
            "value": "wrong2"
          },
          {
            "text": "They are beautiful.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你看到一只黑白色的熊猫，觉得很可爱，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "That is a panda. It's black and white. It's cute.",
            "value": "correct"
          },
          {
            "text": "This is a bear. It's big.",
            "value": "wrong1"
          },
          {
            "text": "That is a horse. It can run fast.",
            "value": "wrong2"
          },
          {
            "text": "This is a red bird.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: So many animals!\nB: ______",
        "chinese": "A说好多动物！B应该说什么？",
        "options": [
          {
            "text": "Let's go in and have a look.",
            "value": "correct"
          },
          {
            "text": "It's big.",
            "value": "wrong1"
          },
          {
            "text": "They are beautiful.",
            "value": "wrong2"
          },
          {
            "text": "It's black and white.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: Let's go in and have a look.\nB: ______",
        "chinese": "A说我们进去看看吧，B应该说什么？",
        "options": [
          {
            "text": "OK, let's go.",
            "value": "correct"
          },
          {
            "text": "It's cute.",
            "value": "wrong1"
          },
          {
            "text": "This is a bear.",
            "value": "wrong2"
          },
          {
            "text": "They are beautiful.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      }
    ],
    "practice": [
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
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
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
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          },
          {
            "text": "<img src=\"assets/images/monkey.png\" width=\"80\">",
            "value": "monkey"
          }
        ],
        "correct": "bird"
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
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/elephant.png\" width=\"80\">",
            "value": "elephant"
          }
        ],
        "correct": "bear"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a red bird. That is a blue bird.",
        "chinese": "这是一只红色的鸟。那是一只蓝色的鸟。",
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
        "sentence": "That is a panda. It's cute.",
        "chinese": "那是一只熊猫。它很可爱。",
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
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
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
        "sentence": "It's black and white. It's cute.",
        "chinese": "它是黑白色的。它很可爱。",
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
            "text": "我们出去玩吧。",
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
        "sentence": "It's cute.",
        "chinese": "它很可爱。",
        "options": [
          {
            "text": "它很可爱。",
            "value": "correct"
          },
          {
            "text": "它很大。",
            "value": "wrong1"
          },
          {
            "text": "它很快。",
            "value": "wrong2"
          },
          {
            "text": "它很漂亮。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你在动物园看到两只漂亮的鸟，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "This is a red bird. That is a blue bird. They are beautiful.",
            "value": "correct"
          },
          {
            "text": "This is a bear. It's big.",
            "value": "wrong1"
          },
          {
            "text": "That is a horse. It can run fast.",
            "value": "wrong2"
          },
          {
            "text": "That is a panda. It's cute.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你看到一匹马跑得很快，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "That is a horse. It can run fast.",
            "value": "correct"
          },
          {
            "text": "This is a bear. It's big.",
            "value": "wrong1"
          },
          {
            "text": "That is a panda. It's cute.",
            "value": "wrong2"
          },
          {
            "text": "They are beautiful.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想邀请朋友一起去看动物，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "So many animals! Let's go in and have a look.",
            "value": "correct"
          },
          {
            "text": "This is a bear. It's big.",
            "value": "wrong1"
          },
          {
            "text": "That is a panda. It's cute.",
            "value": "wrong2"
          },
          {
            "text": "It can run fast.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你看到一只熊猫，它是黑白色的，你想告诉朋友：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "That is a panda. It's black and white.",
            "value": "correct"
          },
          {
            "text": "This is a bear. It's big.",
            "value": "wrong1"
          },
          {
            "text": "This is a red bird.",
            "value": "wrong2"
          },
          {
            "text": "It can run fast.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "朋友说动物园看到一只很大的动物，你想知道是什么，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's big.",
            "value": "correct"
          },
          {
            "text": "It's cute.",
            "value": "wrong1"
          },
          {
            "text": "They are beautiful.",
            "value": "wrong2"
          },
          {
            "text": "It can run fast.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: Look! This is a bear.\nB: ______",
        "chinese": "A说看这是一只熊，B应该说什么？",
        "options": [
          {
            "text": "It's big!",
            "value": "correct"
          },
          {
            "text": "It can jump.",
            "value": "wrong1"
          },
          {
            "text": "They are beautiful.",
            "value": "wrong2"
          },
          {
            "text": "Let's draw.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: This is a red bird. That is a blue bird.\nB: ______",
        "chinese": "A介绍了两只鸟，B应该说什么？",
        "options": [
          {
            "text": "They are beautiful.",
            "value": "correct"
          },
          {
            "text": "It's big.",
            "value": "wrong1"
          },
          {
            "text": "It can run fast.",
            "value": "wrong2"
          },
          {
            "text": "It's black and white.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: That is a panda.\nB: ______",
        "chinese": "A说那是一只熊猫，B应该说什么？",
        "options": [
          {
            "text": "It's black and white. It's cute.",
            "value": "correct"
          },
          {
            "text": "It can run fast.",
            "value": "wrong1"
          },
          {
            "text": "It's big.",
            "value": "wrong2"
          },
          {
            "text": "They are beautiful.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: That is a horse.\nB: ______",
        "chinese": "A说那是一匹马，B应该说什么？",
        "options": [
          {
            "text": "It can run fast.",
            "value": "correct"
          },
          {
            "text": "It's cute.",
            "value": "wrong1"
          },
          {
            "text": "It's black and white.",
            "value": "wrong2"
          },
          {
            "text": "They are beautiful.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: So many animals! Let's go in and have a look.\nB: ______",
        "chinese": "A说好多动物，我们进去看看吧，B应该说什么？",
        "options": [
          {
            "text": "OK, let's go.",
            "value": "correct"
          },
          {
            "text": "It's big.",
            "value": "wrong1"
          },
          {
            "text": "This is a bear.",
            "value": "wrong2"
          },
          {
            "text": "It's cute.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "sentence_order",
        "chinese": "这是一只熊。",
        "words": [
          "This",
          "is",
          "a",
          "bear"
        ],
        "scrambled": [
          "bear",
          "a",
          "This",
          "is"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "那是一匹马。",
        "words": [
          "That",
          "is",
          "a",
          "horse"
        ],
        "scrambled": [
          "horse",
          "That",
          "a",
          "is"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "This is a _____. It's big.",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "options": [
          "bear",
          "bird",
          "horse",
          "panda"
        ],
        "correct": 0,
        "chinese": "这是一只熊。它很大。"
      },
      {
        "type": "fill_blank",
        "prompt": "That is a _____. It's cute.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": [
          "bird",
          "panda",
          "horse",
          "duck"
        ],
        "correct": 1,
        "chinese": "那是一只熊猫。它很可爱。"
      },
      {
        "type": "word_puzzle",
        "chinese": "熊",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "letters": [
          "b",
          "e",
          "a",
          "r"
        ],
        "scrambled": [
          "a",
          "r",
          "b",
          "e"
        ]
      },
      {
        "type": "word_puzzle",
        "chinese": "鸟",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "letters": [
          "b",
          "i",
          "r",
          "d"
        ],
        "scrambled": [
          "r",
          "d",
          "b",
          "i"
        ]
      },
      {
        "type": "letter_select",
        "prompt": "熊猫的首字母是？",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": [
          "d",
          "b",
          "p",
          "q"
        ],
        "correct": 2,
        "chinese": "熊猫"
      },
      {
        "type": "letter_select",
        "prompt": "马的首字母是？",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": [
          "n",
          "h",
          "m",
          "b"
        ],
        "correct": 1,
        "chinese": "马"
      },
      {
        "type": "pinyin_fill",
        "hint": "b_ar",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "options": [
          "e",
          "a",
          "o",
          "i"
        ],
        "correct": 0,
        "chinese": "熊"
      },
      {
        "type": "fill_blank",
        "prompt": "It can run _____.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": [
          "fast",
          "big",
          "cute",
          "white"
        ],
        "correct": 0,
        "chinese": "它跑得很快。"
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "好多动物！",
        "words": [
          "So",
          "many",
          "animals"
        ],
        "scrambled": [
          "animals",
          "So",
          "many"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我们进去看看吧。",
        "words": [
          "Let's",
          "go",
          "in",
          "and",
          "have",
          "a",
          "look"
        ],
        "scrambled": [
          "go",
          "a",
          "Let's",
          "have",
          "look",
          "in",
          "and"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "好的，我们走吧。",
        "words": [
          "OK",
          "let's",
          "go"
        ],
        "scrambled": [
          "let's",
          "OK",
          "go"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这是一只熊。",
        "words": [
          "This",
          "is",
          "a",
          "bear"
        ],
        "scrambled": [
          "a",
          "bear",
          "This",
          "is"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它很大。",
        "words": [
          "It's",
          "big"
        ],
        "scrambled": [
          "big",
          "It's"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "那是一匹马。",
        "words": [
          "That",
          "is",
          "a",
          "horse"
        ],
        "scrambled": [
          "a",
          "That",
          "horse",
          "is"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它跑得很快。",
        "words": [
          "It",
          "can",
          "run",
          "fast"
        ],
        "scrambled": [
          "run",
          "It",
          "fast",
          "can"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这是一只红色的鸟。",
        "words": [
          "This",
          "is",
          "a",
          "red",
          "bird"
        ],
        "scrambled": [
          "red",
          "a",
          "bird",
          "This",
          "is"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "那是一只蓝色的鸟。",
        "words": [
          "That",
          "is",
          "a",
          "blue",
          "bird"
        ],
        "scrambled": [
          "blue",
          "That",
          "a",
          "bird",
          "is"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它们很漂亮。",
        "words": [
          "They",
          "are",
          "beautiful"
        ],
        "scrambled": [
          "beautiful",
          "They",
          "are"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "那是一只熊猫。",
        "words": [
          "That",
          "is",
          "a",
          "panda"
        ],
        "scrambled": [
          "panda",
          "That",
          "a",
          "is"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它是黑白色的。",
        "words": [
          "It's",
          "black",
          "and",
          "white"
        ],
        "scrambled": [
          "white",
          "It's",
          "and",
          "black"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它很可爱。",
        "words": [
          "It's",
          "cute"
        ],
        "scrambled": [
          "cute",
          "It's"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "This is a _____. It's big.",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "options": [
          "bear",
          "bird",
          "horse",
          "panda"
        ],
        "correct": 0,
        "chinese": "这是一只熊。它很大。"
      },
      {
        "type": "fill_blank",
        "prompt": "That is a _____. It can run fast.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": [
          "bird",
          "bear",
          "horse",
          "duck"
        ],
        "correct": 2,
        "chinese": "那是一匹马。它跑得很快。"
      },
      {
        "type": "fill_blank",
        "prompt": "This is a red _____.",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "options": [
          "bird",
          "bear",
          "panda",
          "monkey"
        ],
        "correct": 0,
        "chinese": "这是一只红色的鸟。"
      },
      {
        "type": "fill_blank",
        "prompt": "That is a _____. It's black and white.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": [
          "horse",
          "panda",
          "duck",
          "rabbit"
        ],
        "correct": 1,
        "chinese": "那是一只熊猫。它是黑白色的。"
      },
      {
        "type": "word_puzzle",
        "chinese": "熊",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "letters": [
          "b",
          "e",
          "a",
          "r"
        ],
        "scrambled": [
          "r",
          "b",
          "e",
          "a"
        ]
      },
      {
        "type": "word_puzzle",
        "chinese": "马",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "letters": [
          "h",
          "o",
          "r",
          "s",
          "e"
        ],
        "scrambled": [
          "o",
          "e",
          "h",
          "r",
          "s"
        ]
      },
      {
        "type": "word_puzzle",
        "chinese": "鸟",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "letters": [
          "b",
          "i",
          "r",
          "d"
        ],
        "scrambled": [
          "i",
          "d",
          "b",
          "r"
        ]
      },
      {
        "type": "word_puzzle",
        "chinese": "熊猫",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "letters": [
          "p",
          "a",
          "n",
          "d",
          "a"
        ],
        "scrambled": [
          "d",
          "a",
          "p",
          "n",
          "a"
        ]
      },
      {
        "type": "letter_select",
        "prompt": "熊的首字母是？",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "options": [
          "p",
          "d",
          "b",
          "g"
        ],
        "correct": 2,
        "chinese": "熊"
      },
      {
        "type": "letter_select",
        "prompt": "鸟的首字母是？",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "options": [
          "d",
          "b",
          "p",
          "g"
        ],
        "correct": 1,
        "chinese": "鸟"
      },
      {
        "type": "pinyin_fill",
        "hint": "h_rse",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": [
          "o",
          "a",
          "e",
          "u"
        ],
        "correct": 0,
        "chinese": "马"
      },
      {
        "type": "pinyin_fill",
        "hint": "p_nda",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": [
          "a",
          "e",
          "o",
          "i"
        ],
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
