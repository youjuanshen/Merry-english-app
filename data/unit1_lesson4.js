// Unit 1 Lesson 4: Look! It's a cat.
// Core vocab: draw, nose, cat
// Sentences: "Look! It's a cat.", "These are two eyes.", "Let's draw."
var unit1_lesson4 = {
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
        "chinese": "猫"
      },
      {
        "type": "listen_select",
        "audio": "This is a nose.",
        "options": [
          "这是一个鼻子。",
          "这是一张脸。",
          "这些是两只眼睛。",
          "这些是两只耳朵。"
        ],
        "correct": 0,
        "chinese": "这是一个鼻子。"
      },
      {
        "type": "listen_select",
        "audio": "Let's draw together!",
        "options": [
          "<img src=\"assets/images/drawing.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "我们一起画画吧！"
      },
      {
        "type": "listen_tf",
        "audio": "cat",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是猫，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "draw",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是画画，这是熊。"
      },
      {
        "type": "listen_select",
        "audio": "Let's draw together!",
        "options": [
          "我们一起画画吧！",
          "这是一张脸。",
          "这些是两只眼睛。",
          "看！是一只猫。"
        ],
        "correct": 0,
        "chinese": "我们一起画画吧！"
      },
      {
        "type": "listen_select",
        "audio": "This is a face.",
        "options": [
          "看！是一只猫。",
          "这是一张脸。",
          "这是一个鼻子。",
          "我们一起画画吧！"
        ],
        "correct": 1,
        "chinese": "这是一张脸。"
      },
      {
        "type": "listen_select",
        "audio": "This is a face. These are two eyes.",
        "options": [
          "这是一张脸。这些是两只眼睛。",
          "这些是两只耳朵。",
          "这是一个鼻子和一张嘴。",
          "我们一起画画吧！"
        ],
        "correct": 0,
        "chinese": "这是一张脸。这些是两只眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "This is a nose and a mouth.",
        "options": [
          "这是一张脸。",
          "这些是两只眼睛。",
          "这是一个鼻子和一张嘴。",
          "看！是一只猫。"
        ],
        "correct": 2,
        "chinese": "这是一个鼻子和一张嘴。"
      },
      {
        "type": "listen_select",
        "audio": "Let's draw together!",
        "options": [
          "我们一起画画吧！",
          "看！是一只猫。",
          "这是两只耳朵。",
          "这是一张脸。"
        ],
        "correct": 0,
        "chinese": "我们一起画画吧！"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "This is a face.",
        "options": [
          "这是一张脸。",
          "这些是两只眼睛。",
          "这是一个鼻子。",
          "这些是两只耳朵。"
        ],
        "correct": 0,
        "chinese": "这是一张脸。"
      },
      {
        "type": "listen_select",
        "audio": "These are two eyes.",
        "options": [
          "这些是两只耳朵。",
          "这些是两只眼睛。",
          "这是一张脸。",
          "这是一个鼻子。"
        ],
        "correct": 1,
        "chinese": "这些是两只眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "These are two ears.",
        "options": [
          "这些是两只耳朵。",
          "这些是两只眼睛。",
          "这是一张嘴。",
          "这是一张脸。"
        ],
        "correct": 0,
        "chinese": "这些是两只耳朵。"
      },
      {
        "type": "listen_select",
        "audio": "This is a nose and a mouth.",
        "options": [
          "这是一张脸。",
          "这些是两只眼睛。",
          "这是一个鼻子和一张嘴。",
          "我们一起画画吧！"
        ],
        "correct": 2,
        "chinese": "这是一个鼻子和一张嘴。"
      },
      {
        "type": "listen_tf",
        "audio": "These are two ears.",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": true,
        "chinese": "兔子有两只耳朵，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a nose.",
        "image": "<img src=\"assets/images/elephant.png\" width=\"80\">",
        "correct": true,
        "chinese": "大象有鼻子，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "Look! It's a cat.",
        "image": "<img src=\"assets/images/dog.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是猫，这是狗。"
      },
      {
        "type": "listen_select",
        "audio": "These are two eyes.",
        "options": [
          "这些是两只眼睛。",
          "那些是两只眼睛。",
          "这是一个鼻子。",
          "这些是两只耳朵。"
        ],
        "correct": 0,
        "chinese": "这些是两只眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "Those are two eyes.",
        "options": [
          "这些是两只眼睛。",
          "那些是两只眼睛。",
          "这些是两只耳朵。",
          "这是一张脸。"
        ],
        "correct": 1,
        "chinese": "那些是两只眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "These are two ears.",
        "options": [
          "这些是两只耳朵。",
          "这些是两只眼睛。",
          "这是一个鼻子。",
          "那是一张脸。"
        ],
        "correct": 0,
        "chinese": "这些是两只耳朵。"
      },
      {
        "type": "listen_select",
        "audio": "This is a nose and a mouth.",
        "options": [
          "这是一张脸。",
          "这是一个鼻子和一张嘴。",
          "这些是两只眼睛。",
          "那些是两只耳朵。"
        ],
        "correct": 1,
        "chinese": "这是一个鼻子和一张嘴。"
      },
      {
        "type": "listen_select",
        "audio": "This is a face.",
        "options": [
          "这是一张脸。",
          "这些是两只眼睛。",
          "这是一个鼻子。",
          "这些是两只耳朵。"
        ],
        "correct": 0,
        "chinese": "这是一张脸。"
      },
      {
        "type": "listen_select",
        "audio": "These are two ears.",
        "options": [
          "这些是两只眼睛。",
          "这是一张脸。",
          "这些是两只耳朵。",
          "这是一个鼻子。"
        ],
        "correct": 2,
        "chinese": "这些是两只耳朵。"
      },
      {
        "type": "listen_select",
        "audio": "That is a face. Those are two eyes.",
        "options": [
          "那是一张脸。那些是两只眼睛。",
          "这是一张脸。这些是两只耳朵。",
          "这是一个鼻子和一张嘴。",
          "看！是一只猫。"
        ],
        "correct": 0,
        "chinese": "那是一张脸。那些是两只眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "Look! It's a cat.",
        "options": [
          "我们一起画画吧！",
          "看！是一只猫。",
          "这是一张脸。",
          "这些是两只耳朵。"
        ],
        "correct": 1,
        "chinese": "看！是一只猫。"
      },
      {
        "type": "listen_tf",
        "audio": "These are two eyes.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "correct": true,
        "chinese": "猫有两只眼睛，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a nose.",
        "image": "<img src=\"assets/images/elephant.png\" width=\"80\">",
        "correct": true,
        "chinese": "大象有鼻子，正确！"
      },
      {
        "type": "listen_select",
        "audio": "This is a nose and a mouth.",
        "options": [
          "这些是两只眼睛。",
          "这是一个鼻子和一张嘴。",
          "这是一张脸。",
          "我们一起画画吧！"
        ],
        "correct": 1,
        "chinese": "这是一个鼻子和一张嘴。"
      },
      {
        "type": "listen_select",
        "audio": "Let's draw together!",
        "options": [
          "<img src=\"assets/images/drawing.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "我们一起画画吧！"
      },
      {
        "type": "listen_select",
        "audio": "These are two eyes. These are two ears.",
        "options": [
          "这些是两只眼睛。这些是两只耳朵。",
          "这是一张脸。这是一个鼻子。",
          "看！是一只猫。",
          "我们一起画画吧！"
        ],
        "correct": 0,
        "chinese": "这些是两只眼睛。这些是两只耳朵。"
      },
      {
        "type": "listen_select",
        "audio": "Look, a nose and a mouth.",
        "options": [
          "看，一个鼻子和一张嘴。",
          "这是一张脸。",
          "这些是两只眼睛。",
          "我们一起画画吧！"
        ],
        "correct": 0,
        "chinese": "看，一个鼻子和一张嘴。"
      },
      {
        "type": "listen_select",
        "audio": "Is it a panda? No, it isn't.",
        "options": [
          "它是熊猫吗？不，不是。",
          "看！是一只猫。",
          "这是一张脸。",
          "我们一起画画吧！"
        ],
        "correct": 0,
        "chinese": "它是熊猫吗？不，不是。"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "word": "cat",
        "sentence": "Look! It's a cat.",
        "chinese": "看！是一只猫。",
        "options": [
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          },
          {
            "text": "<img src=\"assets/images/dog.png\" width=\"80\">",
            "value": "dog"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          }
        ],
        "correct": "cat"
      },
      {
        "type": "word_match",
        "word": "face",
        "sentence": "This is a face.",
        "chinese": "这是一张脸。",
        "options": [
          {
            "text": "<img src=\"assets/images/drawing.png\" width=\"80\">",
            "value": "face"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          },
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          }
        ],
        "correct": "face"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a face. These are two eyes.",
        "chinese": "这是一张脸。这是两只眼睛。",
        "options": [
          {
            "text": "<img src=\"assets/images/drawing.png\" width=\"80\">",
            "value": "drawing"
          },
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          }
        ],
        "correct": "drawing"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! It's a cat. These are two ears.",
        "chinese": "看！是一只猫。这是两只耳朵。",
        "options": [
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          },
          {
            "text": "<img src=\"assets/images/dog.png\" width=\"80\">",
            "value": "dog"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          }
        ],
        "correct": "cat"
      },
      {
        "type": "sentence_match",
        "sentence": "Let's draw together!",
        "chinese": "我们一起画画吧！",
        "options": [
          {
            "text": "我们一起画画吧！",
            "value": "correct"
          },
          {
            "text": "我们一起唱歌吧！",
            "value": "wrong1"
          },
          {
            "text": "我们一起跳舞吧！",
            "value": "wrong2"
          },
          {
            "text": "我们一起吃饭吧！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a nose and a mouth.",
        "chinese": "这是一个鼻子和一张嘴巴。",
        "options": [
          {
            "text": "这是一个鼻子和一张嘴巴。",
            "value": "correct"
          },
          {
            "text": "这是两只眼睛和两只耳朵。",
            "value": "wrong1"
          },
          {
            "text": "这是一张脸和一只手。",
            "value": "wrong2"
          },
          {
            "text": "这是一个头和一只脚。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想邀请朋友一起画画，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Let's draw together!",
            "value": "correct"
          },
          {
            "text": "This is a face.",
            "value": "wrong1"
          },
          {
            "text": "These are two eyes.",
            "value": "wrong2"
          },
          {
            "text": "Look! It's a cat.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你在画脸的五官，画完眼睛和耳朵后，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "This is a nose and a mouth.",
            "value": "correct"
          },
          {
            "text": "This is a face.",
            "value": "wrong1"
          },
          {
            "text": "Let's draw together!",
            "value": "wrong2"
          },
          {
            "text": "Those are two eyes.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: Let's draw together!\nB: ______",
        "chinese": "A说我们一起画画吧，B应该说什么？",
        "options": [
          {
            "text": "OK! This is a face.",
            "value": "correct"
          },
          {
            "text": "It's a cat.",
            "value": "wrong1"
          },
          {
            "text": "Those are two eyes.",
            "value": "wrong2"
          },
          {
            "text": "I like carrots.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: This is a face. These are two eyes.\nB: ______",
        "chinese": "A画了一张脸和两只眼睛，B接着画什么？",
        "options": [
          {
            "text": "These are two ears. This is a nose and a mouth.",
            "value": "correct"
          },
          {
            "text": "Let's draw together!",
            "value": "wrong1"
          },
          {
            "text": "That is a face.",
            "value": "wrong2"
          },
          {
            "text": "It's a bear.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      }
    ],
    "practice": [
      {
        "type": "word_match",
        "word": "eye",
        "sentence": "These are two eyes.",
        "chinese": "这是两只眼睛。",
        "options": [
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "eye"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "ear"
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
        "correct": "eye"
      },
      {
        "type": "word_match",
        "word": "ear",
        "sentence": "These are two ears.",
        "chinese": "这是两只耳朵。",
        "options": [
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "ear"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "eye"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          },
          {
            "text": "<img src=\"assets/images/mouse.png\" width=\"80\">",
            "value": "mouse"
          }
        ],
        "correct": "ear"
      },
      {
        "type": "word_match",
        "word": "cat",
        "sentence": "Look! It's a cat.",
        "chinese": "看！是一只猫。",
        "options": [
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          },
          {
            "text": "<img src=\"assets/images/dog.png\" width=\"80\">",
            "value": "dog"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          },
          {
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          }
        ],
        "correct": "cat"
      },
      {
        "type": "sentence_match",
        "sentence": "That is a face. Those are two eyes.",
        "chinese": "那是一张脸。那是两只眼睛。",
        "options": [
          {
            "text": "<img src=\"assets/images/drawing.png\" width=\"80\">",
            "value": "drawing"
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
            "text": "<img src=\"assets/images/bird.png\" width=\"80\">",
            "value": "bird"
          }
        ],
        "correct": "drawing"
      },
      {
        "type": "sentence_match",
        "sentence": "These are two ears. This is a nose and a mouth.",
        "chinese": "这是两只耳朵。这是一个鼻子和一张嘴巴。",
        "options": [
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
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
        "correct": "cat"
      },
      {
        "type": "sentence_match",
        "sentence": "Let's draw together! This is a face.",
        "chinese": "我们一起画画吧！这是一张脸。",
        "options": [
          {
            "text": "<img src=\"assets/images/drawing.png\" width=\"80\">",
            "value": "drawing"
          },
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          }
        ],
        "correct": "drawing"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a face.",
        "chinese": "这是一张脸。",
        "options": [
          {
            "text": "这是一张脸。",
            "value": "correct"
          },
          {
            "text": "这是一只手。",
            "value": "wrong1"
          },
          {
            "text": "这是一只脚。",
            "value": "wrong2"
          },
          {
            "text": "这是一只猫。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "These are two eyes.",
        "chinese": "这是两只眼睛。",
        "options": [
          {
            "text": "这是两只眼睛。",
            "value": "correct"
          },
          {
            "text": "这是两只耳朵。",
            "value": "wrong1"
          },
          {
            "text": "这是两只手。",
            "value": "wrong2"
          },
          {
            "text": "这是两条腿。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "That is a face.",
        "chinese": "那是一张脸。",
        "options": [
          {
            "text": "那是一张脸。",
            "value": "correct"
          },
          {
            "text": "这是一张脸。",
            "value": "wrong1"
          },
          {
            "text": "那是一只猫。",
            "value": "wrong2"
          },
          {
            "text": "那是一张桌子。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Those are two eyes.",
        "chinese": "那是两只眼睛。",
        "options": [
          {
            "text": "那是两只眼睛。",
            "value": "correct"
          },
          {
            "text": "这是两只眼睛。",
            "value": "wrong1"
          },
          {
            "text": "那是两只耳朵。",
            "value": "wrong2"
          },
          {
            "text": "那是两条腿。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想邀请同学一起画画，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Let's draw together!",
            "value": "correct"
          },
          {
            "text": "This is a face.",
            "value": "wrong1"
          },
          {
            "text": "These are two eyes.",
            "value": "wrong2"
          },
          {
            "text": "Look! It's a cat.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你在画画，先画了一张脸，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "This is a face.",
            "value": "correct"
          },
          {
            "text": "Let's draw together!",
            "value": "wrong1"
          },
          {
            "text": "Look! It's a cat.",
            "value": "wrong2"
          },
          {
            "text": "Those are two eyes.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你画完了一只猫，指给朋友看，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Look! It's a cat.",
            "value": "correct"
          },
          {
            "text": "This is a face.",
            "value": "wrong1"
          },
          {
            "text": "These are two ears.",
            "value": "wrong2"
          },
          {
            "text": "Let's draw together!",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你指着远处的画说那是一张脸，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "That is a face.",
            "value": "correct"
          },
          {
            "text": "This is a face.",
            "value": "wrong1"
          },
          {
            "text": "These are two eyes.",
            "value": "wrong2"
          },
          {
            "text": "Look! It's a cat.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你在描述画上的五官，画了鼻子和嘴巴，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "This is a nose and a mouth.",
            "value": "correct"
          },
          {
            "text": "These are two eyes.",
            "value": "wrong1"
          },
          {
            "text": "These are two ears.",
            "value": "wrong2"
          },
          {
            "text": "That is a face.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: Let's draw together!\nB: OK!\nA: This is a face.\nB: ______",
        "chinese": "A画了一张脸，B接着画什么？",
        "options": [
          {
            "text": "These are two eyes.",
            "value": "correct"
          },
          {
            "text": "Let's draw together!",
            "value": "wrong1"
          },
          {
            "text": "It's a cat.",
            "value": "wrong2"
          },
          {
            "text": "That is a face.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: These are two eyes. These are two ears.\nB: ______",
        "chinese": "A画了眼睛和耳朵，B接着画什么？",
        "options": [
          {
            "text": "This is a nose and a mouth.",
            "value": "correct"
          },
          {
            "text": "This is a face.",
            "value": "wrong1"
          },
          {
            "text": "Let's draw together!",
            "value": "wrong2"
          },
          {
            "text": "Those are two eyes.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: This is a face. These are two eyes. These are two ears. This is a nose and a mouth.\nB: ______",
        "chinese": "A画完了所有五官，B看了之后会说什么？",
        "options": [
          {
            "text": "Look! It's a cat.",
            "value": "correct"
          },
          {
            "text": "Let's draw together!",
            "value": "wrong1"
          },
          {
            "text": "This is a face.",
            "value": "wrong2"
          },
          {
            "text": "That is a face.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: Look! That is a face. Those are two eyes.\nB: ______",
        "chinese": "A指着远处的画说那是脸和眼睛，B接着说什么？",
        "options": [
          {
            "text": "These are two ears. This is a nose and a mouth.",
            "value": "correct"
          },
          {
            "text": "Let's draw together!",
            "value": "wrong1"
          },
          {
            "text": "This is a face.",
            "value": "wrong2"
          },
          {
            "text": "It's a dog.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: What's this?\nB: ______",
        "chinese": "A指着画上的两只耳朵问这是什么，B应该说：",
        "options": [
          {
            "text": "These are two ears.",
            "value": "correct"
          },
          {
            "text": "This is a face.",
            "value": "wrong1"
          },
          {
            "text": "Those are two eyes.",
            "value": "wrong2"
          },
          {
            "text": "This is a nose.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Look, a nose and a mouth.",
        "options": [
          {"text": "看，一个鼻子和一张嘴。", "value": "correct"},
          {"text": "这是一张脸。", "value": "wrong1"},
          {"text": "这些是两只眼睛。", "value": "wrong2"},
          {"text": "看！是一只猫。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a panda? No, it isn't.",
        "options": [
          {"text": "它是熊猫吗？不，不是。", "value": "correct"},
          {"text": "看！是一只猫。", "value": "wrong1"},
          {"text": "我们一起画画吧！", "value": "wrong2"},
          {"text": "这些是两只耳朵。", "value": "wrong3"}
        ],
        "correct": "correct"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "sentence_order",
        "chinese": "我们一起画画吧！",
        "words": [
          "Let's",
          "draw",
          "together"
        ],
        "scrambled": [
          "draw",
          "Let's",
          "together"
        ],
        "chineseWords": ["我们", "一起", "画画", "吧"],
        "chineseScrambled": ["吧", "我们", "画画", "一起"],
        "chineseWords": ["我们", "一起", "画画", "吧"],
        "chineseScrambled": ["画画", "吧", "我们", "一起"]
      },
      {
        "type": "sentence_order",
        "chinese": "这是一张脸。",
        "words": [
          "This",
          "is",
          "a",
          "face"
        ],
        "scrambled": [
          "face",
          "a",
          "This",
          "is"
        ],
        "chineseWords": ["这", "是", "一张", "脸"],
        "chineseScrambled": ["一张", "是", "脸", "这"]
      },
      {
        "type": "fill_blank",
        "prompt": "These are two _____.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "ears",
          "eyes",
          "noses",
          "mouths"
        ],
        "correct": 1,
        "chinese": "这些是两只眼睛。"
      },
      {
        "type": "fill_blank",
        "prompt": "Look! It's a _____.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "cat",
          "dog",
          "bear",
          "duck"
        ],
        "correct": 0,
        "chinese": "看！这是一只猫。"
      },
      {
        "type": "word_puzzle",
        "chinese": "猫",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "letters": [
          "c",
          "a",
          "t"
        ],
        "scrambled": [
          "t",
          "c",
          "a"
        ]
      },
      {
        "type": "word_puzzle",
        "chinese": "鼻子",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "letters": [
          "n",
          "o",
          "s",
          "e"
        ],
        "scrambled": [
          "s",
          "n",
          "e",
          "o"
        ]
      },
      {
        "type": "letter_select",
        "prompt": "猫的首字母是？",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "k",
          "c",
          "s",
          "g"
        ],
        "correct": 1,
        "chinese": "猫"
      },
      {
        "type": "letter_select",
        "prompt": "画(draw)的首字母是？",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "b",
          "p",
          "d",
          "g"
        ],
        "correct": 2,
        "chinese": "画"
      },
      {
        "type": "pinyin_fill",
        "hint": "c_t",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "a",
          "e",
          "o",
          "i"
        ],
        "correct": 0,
        "chinese": "猫"
      },
      {
        "type": "fill_blank",
        "prompt": "This is a _____ and a mouth.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "nose",
          "ear",
          "eye",
          "leg"
        ],
        "correct": 0,
        "chinese": "这是一个鼻子和一张嘴巴。"
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "我们一起画画吧！",
        "words": [
          "Let's",
          "draw",
          "together"
        ],
        "scrambled": [
          "together",
          "Let's",
          "draw"
        ],
        "chineseWords": ["这是", "一个鼻子", "和", "一张嘴巴"],
        "chineseScrambled": ["一张嘴巴", "这是", "一个鼻子", "和"]
      },
      {
        "type": "sentence_order",
        "chinese": "这是一张脸。",
        "words": [
          "This",
          "is",
          "a",
          "face"
        ],
        "chineseWords": ["我们", "一起", "画画", "吧"],
        "chineseScrambled": ["我们", "画画", "一起", "吧"],
        "scrambled": [
          "a",
          "face",
          "This",
          "is"
        ],
        "chineseWords": ["这", "是", "一张", "脸"],
        "chineseScrambled": ["这", "脸", "一张", "是"]
      },
      {
        "type": "sentence_order",
        "chinese": "这些是两只眼睛。",
        "words": [
          "These",
          "are",
          "two",
          "eyes"
        ],
        "scrambled": [
          "two",
          "These",
          "eyes",
          "are"
        ],
        "chineseWords": ["这些", "是", "两只", "眼睛"],
        "chineseScrambled": ["眼睛", "这些", "是", "两只"]
      },
      {
        "type": "sentence_order",
        "chinese": "那是一张脸。",
        "words": [
          "That",
          "is",
          "a",
          "face"
        ],
        "scrambled": [
          "face",
          "That",
          "a",
          "is"
        ],
        "chineseWords": ["那", "是", "一张", "脸"],
        "chineseScrambled": ["脸", "是", "那", "一张"]
      },
      {
        "type": "sentence_order",
        "chinese": "那些是两只眼睛。",
        "words": [
          "Those",
          "are",
          "two",
          "eyes"
        ],
        "scrambled": [
          "eyes",
          "Those",
          "two",
          "are"
        ],
        "chineseWords": ["那些", "是", "两只", "眼睛"],
        "chineseScrambled": ["眼睛", "两只", "是", "那些"]
      },
      {
        "type": "sentence_order",
        "chinese": "看！这是一只猫。",
        "words": [
          "Look",
          "It's",
          "a",
          "cat"
        ],
        "scrambled": [
          "a",
          "Look",
          "cat",
          "It's"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这些是两只耳朵。",
        "words": [
          "These",
          "are",
          "two",
          "ears"
        ],
        "scrambled": [
          "ears",
          "These",
          "two",
          "are"
        ],
        "chineseWords": ["这些", "是", "两只", "耳朵"],
        "chineseScrambled": ["这些", "两只", "耳朵", "是"]
      },
      {
        "type": "sentence_order",
        "chinese": "这是一个鼻子和一张嘴巴。",
        "words": [
          "This",
          "is",
          "a",
          "nose",
          "and",
          "a",
          "mouth"
        ],
        "scrambled": [
          "a",
          "nose",
          "This",
          "mouth",
          "and",
          "is",
          "a"
        ],
        "chineseWords": ["这是", "一个鼻子", "和", "一张嘴巴"],
        "chineseScrambled": ["和", "一张嘴巴", "一个鼻子", "这是"]
      },
      {
        "type": "fill_blank",
        "prompt": "Let's draw _____!",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "together",
          "fast",
          "big",
          "small"
        ],
        "correct": 0,
        "chinese": "我们一起画画吧！"
      },
      {
        "type": "fill_blank",
        "prompt": "This is a _____.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "face",
          "nose",
          "ear",
          "eye"
        ],
        "correct": 0,
        "chinese": "这是一张脸。"
      },
      {
        "type": "fill_blank",
        "prompt": "These are two _____.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "ears",
          "eyes",
          "noses",
          "mouths"
        ],
        "correct": 1,
        "chinese": "这些是两只眼睛。"
      },
      {
        "type": "fill_blank",
        "prompt": "Look! It's a _____.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "cat",
          "bear",
          "horse",
          "duck"
        ],
        "correct": 0,
        "chinese": "看！这是一只猫。"
      },
      {
        "type": "fill_blank",
        "prompt": "This is a _____ and a mouth.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "nose",
          "ear",
          "eye",
          "face"
        ],
        "correct": 0,
        "chinese": "这是一个鼻子和一张嘴巴。"
      },
      {
        "type": "word_puzzle",
        "chinese": "猫",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "letters": [
          "c",
          "a",
          "t"
        ],
        "scrambled": [
          "t",
          "a",
          "c"
        ]
      },
      {
        "type": "word_puzzle",
        "chinese": "鼻子",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "letters": [
          "n",
          "o",
          "s",
          "e"
        ],
        "scrambled": [
          "o",
          "e",
          "n",
          "s"
        ]
      },
      {
        "type": "word_puzzle",
        "chinese": "脸",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "letters": [
          "f",
          "a",
          "c",
          "e"
        ],
        "scrambled": [
          "c",
          "f",
          "e",
          "a"
        ]
      },
      {
        "type": "word_puzzle",
        "chinese": "画",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "letters": [
          "d",
          "r",
          "a",
          "w"
        ],
        "scrambled": [
          "w",
          "d",
          "a",
          "r"
        ]
      },
      {
        "type": "letter_select",
        "prompt": "猫的首字母是？",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "s",
          "k",
          "c",
          "g"
        ],
        "correct": 2,
        "chinese": "猫"
      },
      {
        "type": "letter_select",
        "prompt": "鼻子的首字母是？",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "m",
          "n",
          "h",
          "r"
        ],
        "correct": 1,
        "chinese": "鼻子"
      },
      {
        "type": "pinyin_fill",
        "hint": "n_se",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "o",
          "a",
          "e",
          "i"
        ],
        "correct": 0,
        "chinese": "鼻子"
      },
      {
        "type": "pinyin_fill",
        "hint": "f_ce",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "a",
          "e",
          "o",
          "i"
        ],
        "correct": 0,
        "chinese": "脸"
      },
      {
        "type": "sentence_order",
        "chinese": "那些是两只眼睛。",
        "words": [
          "Those",
          "are",
          "two",
          "eyes"
        ],
        "scrambled": [
          "two",
          "eyes",
          "Those",
          "are"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这些是两只耳朵。",
        "words": [
          "These",
          "are",
          "two",
          "ears"
        ],
        "scrambled": [
          "two",
          "ears",
          "These",
          "are"
        ],
        "chineseWords": ["这些", "是", "两只", "耳朵"],
        "chineseScrambled": ["是", "两只", "耳朵", "这些"]
      },
      {
        "type": "fill_blank",
        "prompt": "That is a _____.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "face",
          "nose",
          "ear",
          "eye"
        ],
        "correct": 0,
        "chinese": "那是一张脸。"
      },
      {
        "type": "fill_blank",
        "prompt": "Those are two _____.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "ears",
          "eyes",
          "noses",
          "mouths"
        ],
        "correct": 1,
        "chinese": "那些是两只眼睛。"
      },
      {
        "type": "sentence_order",
        "chinese": "它是熊猫吗？不，不是。",
        "words": ["Is", "it", "a", "panda", "No", "it", "isn't"],
        "scrambled": ["No", "a", "it", "panda", "Is", "isn't", "it"],
        "chineseWords": ["它", "是", "熊猫", "吗", "不", "不是"],
        "chineseScrambled": ["不是", "它", "熊猫", "吗", "是", "不"]
      }
    ],
        "chineseWords": ["那些", "是", "两只", "眼睛"],
        "chineseScrambled": ["眼睛", "两只", "是", "那些"]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/drawing.png\" width=\"80\">",
        "word": "draw",
        "chinese": "画",
        "expected": "draw"
      },
      {
        "type": "repeat_word",
        "word": "nose",
        "chinese": "鼻子",
        "expected": "nose"
      },
      {
        "type": "repeat_word",
        "word": "face",
        "chinese": "脸",
        "expected": "face"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "word": "cat",
        "chinese": "猫",
        "expected": "cat"
      },
      {
        "type": "repeat_word",
        "word": "eye",
        "chinese": "眼睛",
        "expected": "eye"
      },
      {
        "type": "repeat_word",
        "word": "ear",
        "chinese": "耳朵",
        "expected": "ear"
      },
      {
        "type": "repeat_word",
        "word": "mouth",
        "chinese": "嘴巴",
        "expected": "mouth"
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/drawing.png\" width=\"80\">",
        "word": "Let's draw together!",
        "chinese": "我们一起画吧！",
        "expected": "Let's draw together!"
      },
      {
        "type": "repeat_sentence",
        "word": "This is a face.",
        "chinese": "这是一张脸。",
        "expected": "This is a face."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "word": "Look! It's a cat.",
        "chinese": "看！是一只猫。",
        "expected": "Look! It's a cat."
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/drawing.png\" width=\"80\">",
        "word": "Let's draw together!",
        "chinese": "我们一起画吧！",
        "expected": "Let's draw together!"
      },
      {
        "type": "repeat_sentence",
        "word": "This is a face.",
        "chinese": "这是一张脸。",
        "expected": "This is a face."
      },
      {
        "type": "repeat_sentence",
        "word": "These are two eyes.",
        "chinese": "这些是两只眼睛。",
        "expected": "These are two eyes."
      },
      {
        "type": "repeat_sentence",
        "word": "That is a face.",
        "chinese": "那是一张脸。",
        "expected": "That is a face."
      },
      {
        "type": "repeat_sentence",
        "word": "Those are two eyes.",
        "chinese": "那些是两只眼睛。",
        "expected": "Those are two eyes."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "word": "Look! It's a cat.",
        "chinese": "看！是一只猫。",
        "expected": "Look! It's a cat."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "word": "These are two ears.",
        "chinese": "这些是两只耳朵。",
        "expected": "These are two ears."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "word": "This is a nose and a mouth.",
        "chinese": "这是一个鼻子和一张嘴巴。",
        "expected": "This is a nose and a mouth."
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/drawing.png\" width=\"80\">",
        "word": "draw",
        "chinese": "画",
        "expected": "draw"
      },
      {
        "type": "repeat_word",
        "word": "nose",
        "chinese": "鼻子",
        "expected": "nose"
      },
      {
        "type": "repeat_word",
        "word": "face",
        "chinese": "脸",
        "expected": "face"
      },
      {
        "type": "repeat_word",
        "word": "eye",
        "chinese": "眼睛",
        "expected": "eye"
      },
      {
        "type": "repeat_word",
        "word": "ear",
        "chinese": "耳朵",
        "expected": "ear"
      },
      {
        "type": "repeat_word",
        "word": "mouth",
        "chinese": "嘴巴",
        "expected": "mouth"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/cat.png\" width=\"120\">",
        "expected": "cat",
        "word": "cat",
        "chinese": "猫"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bear.png\" width=\"120\">",
        "expected": "bear",
        "word": "bear",
        "chinese": "熊"
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
        "image": "<img src=\"assets/images/duck.png\" width=\"120\">",
        "expected": "duck",
        "word": "duck",
        "chinese": "鸭子"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/monkey.png\" width=\"120\">",
        "expected": "monkey",
        "word": "monkey",
        "chinese": "猴子"
      }
,
      {
        "type": "repeat_sentence",
        "word": "Is it a panda? No, it isn't.",
        "chinese": "它是熊猫吗？不，不是。",
        "expected": "Is it a panda? No, it isn't."
      }
    ]
  }
};
