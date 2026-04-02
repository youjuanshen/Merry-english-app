// Unit 1 Lesson 4: Look! It's a cat.
// Core vocab: draw, nose, face, eye, ear, mouth
// Sentences: "Let's draw together!", "This is a face.", "These are two eyes.", etc.
var unit1_lesson4 = {
  "id": "U1L4",
  "title": "Look! It's a cat.",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "cat",
        "options": [
          "<img src=\"assets/images/dog.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "猫"
      },
      {
        "type": "listen_select",
        "audio": "panda",
        "options": [
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "熊猫"
      },
      {
        "type": "listen_select",
        "audio": "bear",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "熊"
      },
      {
        "type": "listen_select",
        "audio": "Let's draw together!",
        "options": [
          "这是一张脸。",
          "我们一起画画吧！",
          "看！是一只猫。",
          "这些是两只眼睛。"
        ],
        "correct": 1,
        "chinese": "我们一起画画吧！"
      },
      {
        "type": "listen_select",
        "audio": "This is a face.",
        "options": [
          "这是一个鼻子。",
          "这些是两只耳朵。",
          "这是一张脸。",
          "我们一起画画吧！"
        ],
        "correct": 2,
        "chinese": "这是一张脸。"
      },
      {
        "type": "listen_select",
        "audio": "Look! It's a cat.",
        "options": [
          "我们一起画画吧！",
          "这是一张脸。",
          "它是一只熊猫吗？",
          "看！是一只猫。"
        ],
        "correct": 3,
        "chinese": "看！是一只猫。"
      },
      {
        "type": "listen_tf",
        "audio": "This is a cat.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只猫，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a panda.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是熊猫，这是一只猫。"
      },
      {
        "type": "listen_select",
        "audio": "This is a face. These are two eyes.",
        "options": [
          "这是一张脸。这些是两只眼睛。",
          "那是一张脸。那些是两只眼睛。",
          "这些是两只耳朵。这是一个鼻子。",
          "看！是一只猫。"
        ],
        "correct": 0,
        "chinese": "这是一张脸。这些是两只眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "These are two ears. This is a nose and a mouth.",
        "options": [
          "这是一张脸。这些是两只眼睛。",
          "我们一起画画吧！",
          "这些是两只耳朵。这是一个鼻子和一张嘴巴。",
          "它是一只熊猫吗？不，不是。"
        ],
        "correct": 2,
        "chinese": "这些是两只耳朵。这是一个鼻子和一张嘴巴。"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "cat",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/dog.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "猫"
      },
      {
        "type": "listen_select",
        "audio": "panda",
        "options": [
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "熊猫"
      },
      {
        "type": "listen_select",
        "audio": "Let's draw together!",
        "options": [
          "这是一张脸。",
          "看！是一只猫。",
          "我们一起画画吧！",
          "这些是两只眼睛。"
        ],
        "correct": 2,
        "chinese": "我们一起画画吧！"
      },
      {
        "type": "listen_select",
        "audio": "This is a face.",
        "options": [
          "这是一张脸。",
          "这是一个鼻子。",
          "这些是两只耳朵。",
          "我们一起画画吧！"
        ],
        "correct": 0,
        "chinese": "这是一张脸。"
      },
      {
        "type": "listen_select",
        "audio": "These are two eyes.",
        "options": [
          "这些是两只耳朵。",
          "那些是两只眼睛。",
          "这些是两只眼睛。",
          "这是一个鼻子。"
        ],
        "correct": 2,
        "chinese": "这些是两只眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "That is a face.",
        "options": [
          "那是一张脸。",
          "这是一张脸。",
          "那些是两只眼睛。",
          "看！是一只猫。"
        ],
        "correct": 0,
        "chinese": "那是一张脸。"
      },
      {
        "type": "listen_select",
        "audio": "Those are two eyes.",
        "options": [
          "这些是两只眼睛。",
          "那是一张脸。",
          "这些是两只耳朵。",
          "那些是两只眼睛。"
        ],
        "correct": 3,
        "chinese": "那些是两只眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "Look! It's a cat.",
        "options": [
          "它是一只熊猫吗？",
          "看！是一只猫。",
          "我们一起画画吧！",
          "不，不是。"
        ],
        "correct": 1,
        "chinese": "看！是一只猫。"
      },
      {
        "type": "listen_select",
        "audio": "These are two ears.",
        "options": [
          "这些是两只眼睛。",
          "这是一个鼻子。",
          "这些是两只耳朵。",
          "那是一张脸。"
        ],
        "correct": 2,
        "chinese": "这些是两只耳朵。"
      },
      {
        "type": "listen_select",
        "audio": "This is a nose and a mouth.",
        "options": [
          "这是一个鼻子和一张嘴巴。",
          "这是一张脸。",
          "这些是两只耳朵。",
          "看！是一只猫。"
        ],
        "correct": 0,
        "chinese": "这是一个鼻子和一张嘴巴。"
      },
      {
        "type": "listen_select",
        "audio": "Look, a nose and a mouth.",
        "options": [
          "这些是两只眼睛。",
          "看，一个鼻子和一张嘴巴。",
          "我们一起画画吧！",
          "这些是两只耳朵。"
        ],
        "correct": 1,
        "chinese": "看，一个鼻子和一张嘴巴。"
      },
      {
        "type": "listen_select",
        "audio": "Is it a panda?",
        "options": [
          "是的，它是。",
          "它是一只猫吗？",
          "不，不是。",
          "它是一只熊猫吗？"
        ],
        "correct": 3,
        "chinese": "它是一只熊猫吗？"
      },
      {
        "type": "listen_select",
        "audio": "No, it isn't.",
        "options": [
          "不，不是。",
          "是的，它是。",
          "请猜猜！",
          "看！是一只猫。"
        ],
        "correct": 0,
        "chinese": "不，不是。"
      },
      {
        "type": "listen_select",
        "audio": "This is a face. These are two eyes.",
        "options": [
          "那是一张脸。那些是两只眼睛。",
          "这是一张脸。这些是两只眼睛。",
          "这些是两只耳朵。这是一个鼻子。",
          "我们一起画画吧！"
        ],
        "correct": 1,
        "chinese": "这是一张脸。这些是两只眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "That is a face. Those are two eyes.",
        "options": [
          "这是一张脸。这些是两只眼睛。",
          "这些是两只耳朵。这是一个鼻子。",
          "那是一张脸。那些是两只眼睛。",
          "看！是一只猫。"
        ],
        "correct": 2,
        "chinese": "那是一张脸。那些是两只眼睛。"
      },
      {
        "type": "listen_tf",
        "audio": "This is a cat.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只猫，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a panda.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只熊猫，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a bear.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是熊，这是一只猫。"
      },
      {
        "type": "listen_select",
        "audio": "Is it a panda? No, it isn't.",
        "options": [
          "它是一只猫吗？是的，它是。",
          "我们一起画画吧！",
          "它是一只熊猫吗？不，不是。",
          "看！是一只猫。"
        ],
        "correct": 2,
        "chinese": "它是一只熊猫吗？不，不是。"
      },
      {
        "type": "listen_select",
        "audio": "These are two ears. This is a nose and a mouth.",
        "options": [
          "这是一张脸。这些是两只眼睛。",
          "这些是两只耳朵。这是一个鼻子和一张嘴巴。",
          "那是一张脸。那些是两只眼睛。",
          "我们一起画画吧！"
        ],
        "correct": 1,
        "chinese": "这些是两只耳朵。这是一个鼻子和一张嘴巴。"
      },
      {
        "type": "listen_sequence",
        "audio": "nose, eye, mouth",
        "sequence": [
          "nose",
          "eye",
          "mouth"
        ],
        "words": [
          "nose",
          "eye",
          "mouth"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "This is a face. These are two eyes.",
        "context": "🎨 美术课上，老师让大家画脸。",
        "question": "老师先画了什么？",
        "options": [
          "脸和眼睛",
          "耳朵和鼻子",
          "嘴巴",
          "头发"
        ],
        "correct": 0,
        "chinese": "这是一张脸。这些是两只眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "Is it a panda? No, it isn't.",
        "context": "🎨 同学画完了，你看看他画的是什么。",
        "question": "他画的是熊猫吗？",
        "options": [
          "不是",
          "是的",
          "不知道",
          "可能是"
        ],
        "correct": 0,
        "chinese": "它是熊猫吗？不，不是。"
      },
      {
        "type": "listen_select",
        "audio": "Let's draw together!",
        "context": "✏️ 老师说我们一起画！",
        "question": "老师想让大家做什么？",
        "options": [
          "一起画画",
          "一起跑步",
          "一起吃饭",
          "一起睡觉"
        ],
        "correct": 0,
        "chinese": "我们一起画画吧！"
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
            "text": "<img src=\"assets/images/dog.png\" width=\"80\">",
            "value": "dog"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          },
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          }
        ],
        "correct": "cat"
      },
      {
        "type": "word_match",
        "word": "panda",
        "sentence": "Is it a panda?",
        "chinese": "它是一只熊猫吗？",
        "options": [
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/monkey.png\" width=\"80\">",
            "value": "monkey"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "word_match",
        "word": "bear",
        "sentence": "This is a bear.",
        "chinese": "这是一只熊。",
        "options": [
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          },
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          }
        ],
        "correct": "bear"
      },
      {
        "type": "sentence_match",
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
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          }
        ],
        "correct": "cat"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a panda? No, it isn't.",
        "chinese": "它是一只熊猫吗？不，不是。",
        "options": [
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
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
        "correct": "cat"
      },
      {
        "type": "sentence_match",
        "sentence": "Let's draw together!",
        "chinese": "我们一起画画吧！",
        "options": [
          {
            "text": "这是一张脸。",
            "value": "wrong1"
          },
          {
            "text": "我们一起画画吧！",
            "value": "correct"
          },
          {
            "text": "看！是一只猫。",
            "value": "wrong2"
          },
          {
            "text": "这些是两只眼睛。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a face. These are two eyes.",
        "chinese": "这是一张脸。这些是两只眼睛。",
        "options": [
          {
            "text": "这些是两只耳朵。这是一个鼻子。",
            "value": "wrong1"
          },
          {
            "text": "那是一张脸。那些是两只眼睛。",
            "value": "wrong2"
          },
          {
            "text": "这是一张脸。这些是两只眼睛。",
            "value": "correct"
          },
          {
            "text": "看！是一只猫。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "These are two ears. This is a nose and a mouth.",
        "chinese": "这些是两只耳朵。这是一个鼻子和一张嘴巴。",
        "options": [
          {
            "text": "这些是两只耳朵。这是一个鼻子和一张嘴巴。",
            "value": "correct"
          },
          {
            "text": "这是一张脸。这些是两只眼睛。",
            "value": "wrong1"
          },
          {
            "text": "我们一起画画吧！",
            "value": "wrong2"
          },
          {
            "text": "看，一个鼻子和一张嘴巴。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你正在和朋友一起画画，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "This is a face.",
            "value": "wrong1"
          },
          {
            "text": "Look! It's a cat.",
            "value": "wrong2"
          },
          {
            "text": "Let's draw together!",
            "value": "correct"
          },
          {
            "text": "Is it a panda?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你画好了一只猫，想给朋友看，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Let's draw together!",
            "value": "wrong1"
          },
          {
            "text": "This is a face.",
            "value": "wrong2"
          },
          {
            "text": "Is it a panda?",
            "value": "wrong3"
          },
          {
            "text": "Look! It's a cat.",
            "value": "correct"
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
            "word": "cat",
            "match": "<img src=\"assets/images/cat.png\" width=\"50\">",
            "chinese": "猫"
          },
          {
            "word": "panda",
            "match": "<img src=\"assets/images/panda.png\" width=\"50\">",
            "chinese": "熊猫"
          },
          {
            "word": "bear",
            "match": "<img src=\"assets/images/bear.png\" width=\"50\">",
            "chinese": "熊"
          },
          {
            "word": "bird",
            "match": "<img src=\"assets/images/bird.png\" width=\"50\">",
            "chinese": "鸟"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "nose",
            "match": "鼻子",
            "example": "This is a nose."
          },
          {
            "word": "face",
            "match": "脸",
            "example": "This is a face."
          },
          {
            "word": "eye",
            "match": "眼睛",
            "example": "These are two eyes."
          },
          {
            "word": "ear",
            "match": "耳朵",
            "example": "These are two ears."
          }
        ]
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
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          }
        ],
        "correct": "cat"
      },
      {
        "type": "word_match",
        "word": "panda",
        "sentence": "Is it a panda?",
        "chinese": "它是一只熊猫吗？",
        "options": [
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          },
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "Let's draw together!",
        "chinese": "我们一起画画吧！",
        "options": [
          {
            "text": "看！是一只猫。",
            "value": "wrong1"
          },
          {
            "text": "我们一起画画吧！",
            "value": "correct"
          },
          {
            "text": "这是一张脸。",
            "value": "wrong2"
          },
          {
            "text": "它是一只熊猫吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a face.",
        "chinese": "这是一张脸。",
        "options": [
          {
            "text": "这是一个鼻子。",
            "value": "wrong1"
          },
          {
            "text": "这些是两只耳朵。",
            "value": "wrong2"
          },
          {
            "text": "这是一张脸。",
            "value": "correct"
          },
          {
            "text": "我们一起画画吧！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "These are two eyes.",
        "chinese": "这些是两只眼睛。",
        "options": [
          {
            "text": "这些是两只眼睛。",
            "value": "correct"
          },
          {
            "text": "那些是两只眼睛。",
            "value": "wrong1"
          },
          {
            "text": "这些是两只耳朵。",
            "value": "wrong2"
          },
          {
            "text": "这是一个鼻子。",
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
            "text": "这是一张脸。",
            "value": "wrong1"
          },
          {
            "text": "那是一张脸。",
            "value": "correct"
          },
          {
            "text": "那些是两只眼睛。",
            "value": "wrong2"
          },
          {
            "text": "看！是一只猫。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Those are two eyes.",
        "chinese": "那些是两只眼睛。",
        "options": [
          {
            "text": "这些是两只眼睛。",
            "value": "wrong1"
          },
          {
            "text": "那是一张脸。",
            "value": "wrong2"
          },
          {
            "text": "这些是两只耳朵。",
            "value": "wrong3"
          },
          {
            "text": "那些是两只眼睛。",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! It's a cat.",
        "chinese": "看！是一只猫。",
        "options": [
          {
            "text": "看！是一只猫。",
            "value": "correct"
          },
          {
            "text": "它是一只熊猫吗？",
            "value": "wrong1"
          },
          {
            "text": "我们一起画画吧！",
            "value": "wrong2"
          },
          {
            "text": "不，不是。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "These are two ears.",
        "chinese": "这些是两只耳朵。",
        "options": [
          {
            "text": "那些是两只眼睛。",
            "value": "wrong1"
          },
          {
            "text": "这些是两只耳朵。",
            "value": "correct"
          },
          {
            "text": "这是一个鼻子。",
            "value": "wrong2"
          },
          {
            "text": "这是一张脸。",
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
            "text": "这是一张脸。",
            "value": "wrong1"
          },
          {
            "text": "这些是两只耳朵。",
            "value": "wrong2"
          },
          {
            "text": "这是一个鼻子和一张嘴巴。",
            "value": "correct"
          },
          {
            "text": "看！是一只猫。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Look, a nose and a mouth.",
        "chinese": "看，一个鼻子和一张嘴巴。",
        "options": [
          {
            "text": "看，一个鼻子和一张嘴巴。",
            "value": "correct"
          },
          {
            "text": "看！是一只猫。",
            "value": "wrong1"
          },
          {
            "text": "这些是两只耳朵。",
            "value": "wrong2"
          },
          {
            "text": "我们一起画画吧！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a panda?",
        "chinese": "它是一只熊猫吗？",
        "options": [
          {
            "text": "它是一只猫吗？",
            "value": "wrong1"
          },
          {
            "text": "它是一只熊猫吗？",
            "value": "correct"
          },
          {
            "text": "不，不是。",
            "value": "wrong2"
          },
          {
            "text": "是的，它是。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "No, it isn't.",
        "chinese": "不，不是。",
        "options": [
          {
            "text": "是的，它是。",
            "value": "wrong1"
          },
          {
            "text": "不，不是。",
            "value": "correct"
          },
          {
            "text": "看！是一只猫。",
            "value": "wrong2"
          },
          {
            "text": "我们一起画画吧！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "This is a face. These are two eyes.",
        "chinese": "这是一张脸。这些是两只眼睛。",
        "options": [
          {
            "text": "这些是两只耳朵。这是一个鼻子。",
            "value": "wrong1"
          },
          {
            "text": "那是一张脸。那些是两只眼睛。",
            "value": "wrong2"
          },
          {
            "text": "看！是一只猫。",
            "value": "wrong3"
          },
          {
            "text": "这是一张脸。这些是两只眼睛。",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "That is a face. Those are two eyes.",
        "chinese": "那是一张脸。那些是两只眼睛。",
        "options": [
          {
            "text": "那是一张脸。那些是两只眼睛。",
            "value": "correct"
          },
          {
            "text": "这是一张脸。这些是两只眼睛。",
            "value": "wrong1"
          },
          {
            "text": "这些是两只耳朵。这是一个鼻子。",
            "value": "wrong2"
          },
          {
            "text": "我们一起画画吧！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你画了一张脸和两只眼睛，你想告诉朋友：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "This is a face. These are two eyes.",
            "value": "correct"
          },
          {
            "text": "These are two ears. This is a nose.",
            "value": "wrong1"
          },
          {
            "text": "Look! It's a cat.",
            "value": "wrong2"
          },
          {
            "text": "Is it a panda?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "朋友问你画的是不是熊猫，但不是，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Yes, it is.",
            "value": "wrong1"
          },
          {
            "text": "Let's draw together!",
            "value": "wrong2"
          },
          {
            "text": "No, it isn't.",
            "value": "correct"
          },
          {
            "text": "This is a face.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你画完了一只猫，想展示给朋友看，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Let's draw together!",
            "value": "wrong1"
          },
          {
            "text": "Is it a panda?",
            "value": "wrong2"
          },
          {
            "text": "This is a face.",
            "value": "wrong3"
          },
          {
            "text": "Look! It's a cat.",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "These are two ears. This is a nose and a mouth.",
        "chinese": "这些是两只耳朵。这是一个鼻子和一张嘴巴。",
        "options": [
          {
            "text": "这是一张脸。这些是两只眼睛。",
            "value": "wrong1"
          },
          {
            "text": "这些是两只耳朵。这是一个鼻子和一张嘴巴。",
            "value": "correct"
          },
          {
            "text": "看，一个鼻子和一张嘴巴。",
            "value": "wrong2"
          },
          {
            "text": "我们一起画画吧！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想邀请朋友画画，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "This is a face.",
            "value": "wrong1"
          },
          {
            "text": "Let's draw together!",
            "value": "correct"
          },
          {
            "text": "Look! It's a cat.",
            "value": "wrong2"
          },
          {
            "text": "No, it isn't.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "This is a face. These are two eyes.",
        "context": "你在帮朋友检查他的画。他说画了一张完整的脸。",
        "question": "他画的还缺什么？",
        "options": [
          {
            "text": "耳朵、鼻子和嘴巴",
            "value": "correct"
          },
          {
            "text": "什么都不缺",
            "value": "w1"
          },
          {
            "text": "只缺眼睛",
            "value": "w2"
          },
          {
            "text": "只缺脸",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "这是一张脸。这些是两只眼睛。"
      },
      {
        "type": "scenario",
        "sentence": "Let's draw together!",
        "context": "美术课老师说了一句话。你想知道该做什么。",
        "question": "老师让大家做什么？",
        "options": [
          {
            "text": "一起画画",
            "value": "correct"
          },
          {
            "text": "一起跑步",
            "value": "w1"
          },
          {
            "text": "一起吃饭",
            "value": "w2"
          },
          {
            "text": "一起睡觉",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "我们一起画画吧！"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "Let's draw together!",
          "This is a face.",
          "These are two eyes."
        ],
        "chinese": "把画画步骤排好顺序！",
        "chineseHint": "我们一起画画吧！ / 这是一张脸。 / 这些是两只眼睛。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "Is it a panda?",
          "No, it isn't.",
          "It's a cat!"
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "它是熊猫吗？ / 不，不是。 / 是猫！"
      },
      {
        "type": "word_match",
        "word": "bear",
        "options": [
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "bear",
        "chinese": "bear"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "猫的首字母是？",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "c",
          "k",
          "g",
          "d"
        ],
        "correct": 0,
        "chinese": "猫",
        "word": "猫"
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
        "type": "fill_blank",
        "prompt": "Look! It's a _____.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "panda",
          "cat",
          "bear",
          "dog"
        ],
        "correct": 1,
        "chinese": "看！是一只猫。"
      },
      {
        "type": "word_puzzle",
        "hint": "d_aw",
        "word": "draw",
        "options": [
          "v",
          "n",
          "r",
          "w"
        ],
        "correct": 2,
        "chinese": "draw"
      },
      {
        "type": "word_puzzle",
        "hint": "n_se",
        "word": "nose",
        "options": [
          "v",
          "q",
          "o",
          "p"
        ],
        "correct": 2,
        "chinese": "nose"
      },
      {
        "type": "word_puzzle",
        "hint": "f_ce",
        "word": "face",
        "options": [
          "o",
          "w",
          "a",
          "f"
        ],
        "correct": 2,
        "chinese": "face"
      },
      {
        "type": "fill_blank",
        "prompt": "This is a _____.",
        "options": [
          "eye",
          "draw",
          "nose",
          "face"
        ],
        "correct": 3,
        "chinese": "This is a face."
      },
      {
        "type": "fill_blank",
        "prompt": "Draw a _____.",
        "options": [
          "face",
          "nose",
          "eye",
          "draw"
        ],
        "correct": 0,
        "chinese": "Draw a face."
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
        "chineseWords": [
          "我们",
          "一起",
          "画画",
          "吧"
        ],
        "chineseScrambled": [
          "画画",
          "吧",
          "我们",
          "一起"
        ]
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
          "This",
          "a",
          "is"
        ],
        "chineseWords": [
          "这",
          "是",
          "一张",
          "脸"
        ],
        "chineseScrambled": [
          "脸",
          "这",
          "一张",
          "是"
        ]
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
        "chineseWords": [
          "这些",
          "是",
          "两只",
          "眼睛"
        ],
        "chineseScrambled": [
          "眼睛",
          "两只",
          "这些",
          "是"
        ]
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
          "a",
          "That",
          "face",
          "is"
        ],
        "chineseWords": [
          "那",
          "是",
          "一张",
          "脸"
        ],
        "chineseScrambled": [
          "一张",
          "脸",
          "那",
          "是"
        ]
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
        "chineseWords": [
          "那些",
          "是",
          "两只",
          "眼睛"
        ],
        "chineseScrambled": [
          "两只",
          "眼睛",
          "那些",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "看！是一只猫。",
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
        ],
        "chineseWords": [
          "看",
          "是",
          "一只",
          "猫"
        ],
        "chineseScrambled": [
          "猫",
          "看",
          "一只",
          "是"
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
        "chineseWords": [
          "这些",
          "是",
          "两只",
          "耳朵"
        ],
        "chineseScrambled": [
          "耳朵",
          "两只",
          "这些",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这是一个鼻子。",
        "words": [
          "This",
          "is",
          "a",
          "nose"
        ],
        "scrambled": [
          "nose",
          "This",
          "a",
          "is"
        ],
        "chineseWords": [
          "这",
          "是",
          "一个",
          "鼻子"
        ],
        "chineseScrambled": [
          "鼻子",
          "这",
          "一个",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这是一张嘴巴。",
        "words": [
          "This",
          "is",
          "a",
          "mouth"
        ],
        "scrambled": [
          "mouth",
          "This",
          "a",
          "is"
        ],
        "chineseWords": [
          "这",
          "是",
          "一张",
          "嘴巴"
        ],
        "chineseScrambled": [
          "嘴巴",
          "这",
          "一张",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "看，一个鼻子。",
        "words": [
          "Look",
          "a",
          "nose"
        ],
        "scrambled": [
          "a",
          "Look",
          "nose"
        ],
        "chineseWords": [
          "看",
          "一个",
          "鼻子"
        ],
        "chineseScrambled": [
          "鼻子",
          "看",
          "一个"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "还有一张嘴巴。",
        "words": [
          "And",
          "a",
          "mouth"
        ],
        "scrambled": [
          "mouth",
          "And",
          "a"
        ],
        "chineseWords": [
          "还有",
          "一张",
          "嘴巴"
        ],
        "chineseScrambled": [
          "嘴巴",
          "还有",
          "一张"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它是一只熊猫吗？",
        "words": [
          "Is",
          "it",
          "a",
          "panda"
        ],
        "scrambled": [
          "panda",
          "Is",
          "a",
          "it"
        ],
        "chineseWords": [
          "它",
          "是",
          "一只",
          "熊猫",
          "吗"
        ],
        "chineseScrambled": [
          "熊猫",
          "吗",
          "它",
          "一只",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "不，不是。",
        "words": [
          "No",
          "it",
          "isn't"
        ],
        "scrambled": [
          "it",
          "No",
          "isn't"
        ],
        "chineseWords": [
          "不",
          "不是"
        ],
        "chineseScrambled": [
          "不是",
          "不"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "Look! It's a _____.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "panda",
          "cat",
          "bear",
          "dog"
        ],
        "correct": 1,
        "chinese": "看！是一只猫。"
      },
      {
        "type": "fill_blank",
        "prompt": "This is a _____. These are two eyes.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "nose",
          "face",
          "mouth",
          "ear"
        ],
        "correct": 1,
        "chinese": "这是一张脸。这些是两只眼睛。"
      },
      {
        "type": "fill_blank",
        "prompt": "This is a _____ and a mouth.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "nose",
          "face",
          "eye",
          "ear"
        ],
        "correct": 0,
        "chinese": "这是一个鼻子和一张嘴巴。"
      },
      {
        "type": "fill_blank",
        "prompt": "Is it a _____? No, it isn't.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "options": [
          "cat",
          "panda",
          "bear",
          "rabbit"
        ],
        "correct": 1,
        "chinese": "它是一只熊猫吗？不，不是。"
      },
      {
        "type": "fill_blank",
        "prompt": "Let's _____ together!",
        "image": "<img src=\"assets/images/drawing.png\" width=\"80\">",
        "options": [
          "draw",
          "run",
          "jump",
          "eat"
        ],
        "correct": 0,
        "chinese": "我们一起画画吧！"
      },
      {
        "type": "word_puzzle",
        "hint": "dr_w",
        "word": "draw",
        "options": [
          "d",
          "j",
          "g",
          "a"
        ],
        "correct": 3,
        "chinese": "draw"
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "word": "cat",
        "chinese": "猫",
        "expected": "cat"
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
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "word": "bear",
        "chinese": "熊",
        "expected": "bear"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "word": "tiger",
        "chinese": "老虎",
        "expected": "tiger"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "word": "rabbit",
        "chinese": "兔子",
        "expected": "rabbit"
      },
      {
        "type": "speak_select",
        "audio": "cat",
        "options": [
          "<img src=\"assets/images/dog.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "猫"
      },
      {
        "type": "speak_select",
        "audio": "panda",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "熊猫"
      },
      {
        "type": "repeat_sentence",
        "word": "Let's draw together!",
        "chinese": "我们一起画画吧！",
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
        "word": "Look! It's a cat.",
        "chinese": "看！是一只猫。",
        "expected": "Look! It's a cat."
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "Let's draw together!",
        "chinese": "我们一起画画吧！",
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
        "word": "These are two ears.",
        "chinese": "这些是两只耳朵。",
        "expected": "These are two ears."
      },
      {
        "type": "repeat_sentence",
        "word": "This is a nose and a mouth.",
        "chinese": "这是一个鼻子和一张嘴巴。",
        "expected": "This is a nose and a mouth."
      },
      {
        "type": "repeat_sentence",
        "word": "Look, a nose and a mouth.",
        "chinese": "看，一个鼻子和一张嘴巴。",
        "expected": "Look, a nose and a mouth."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "Is it a panda?",
        "chinese": "它是一只熊猫吗？",
        "expected": "Is it a panda?"
      },
      {
        "type": "repeat_sentence",
        "word": "No, it isn't.",
        "chinese": "不，不是。",
        "expected": "No, it isn't."
      },
      {
        "type": "repeat_sentence",
        "word": "This is a face. These are two eyes.",
        "chinese": "这是一张脸。这些是两只眼睛。",
        "expected": "This is a face. These are two eyes."
      },
      {
        "type": "repeat_sentence",
        "word": "That is a face. Those are two eyes.",
        "chinese": "那是一张脸。那些是两只眼睛。",
        "expected": "That is a face. Those are two eyes."
      },
      {
        "type": "repeat_sentence",
        "word": "These are two ears. This is a nose and a mouth.",
        "chinese": "这些是两只耳朵。这是一个鼻子和一张嘴巴。",
        "expected": "These are two ears. This is a nose and a mouth."
      },
      {
        "type": "repeat_sentence",
        "word": "Is it a panda? No, it isn't.",
        "chinese": "它是一只熊猫吗？不，不是。",
        "expected": "Is it a panda? No, it isn't."
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
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "panda",
        "chinese": "熊猫",
        "expected": "panda"
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
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "word": "tiger",
        "chinese": "老虎",
        "expected": "tiger"
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
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "word": "cat",
        "chinese": "cat"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "panda",
        "chinese": "panda"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "word": "bear",
        "chinese": "bear"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "word": "bird",
        "chinese": "bird"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/duck.png\" width=\"80\">",
        "word": "duck",
        "chinese": "duck"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "word": "rabbit",
        "chinese": "rabbit"
      }
    ]
  }
};
