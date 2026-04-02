// Unit 1 Lesson 2: These are pandas.
// Core vocab: small, ear, eye, baby, long, leg, these, those
// Sentences: "These are pandas.", "Those are horses.", "They have small ears and black eyes.", etc.
var unit1_lesson2 = {
  "id": "U1L2",
  "title": "These are pandas.",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "panda",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "熊猫"
      },
      {
        "type": "listen_select",
        "audio": "horse",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "马"
      },
      {
        "type": "listen_select",
        "audio": "bear",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "熊"
      },
      {
        "type": "listen_select",
        "audio": "These are pandas.",
        "options": [
          "那些是马。",
          "这些是熊猫。",
          "它们有小耳朵。",
          "看，熊猫宝宝。"
        ],
        "correct": 1,
        "chinese": "这些是熊猫。"
      },
      {
        "type": "listen_select",
        "audio": "Those are horses.",
        "options": [
          "这些是熊猫。",
          "它们有长腿。",
          "那些是马。",
          "我们骑马吧。"
        ],
        "correct": 2,
        "chinese": "那些是马。"
      },
      {
        "type": "listen_select",
        "audio": "They are lovely.",
        "options": [
          "它们是棕色的。",
          "它们有小耳朵。",
          "它们喜欢吃草。",
          "它们很可爱。"
        ],
        "correct": 3,
        "chinese": "它们很可爱。"
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
        "audio": "This is a horse.",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是马，这是一只熊。"
      },
      {
        "type": "listen_select",
        "audio": "They have small ears and black eyes.",
        "options": [
          "它们有长腿。",
          "它们是棕色的。",
          "它们有小耳朵和黑眼睛。",
          "它们喜欢吃草。"
        ],
        "correct": 2,
        "chinese": "它们有小耳朵和黑眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "Now let's go and see those horses.",
        "options": [
          "我们骑马吧。",
          "现在我们去看那些马吧。",
          "看，熊猫宝宝。",
          "好的。"
        ],
        "correct": 1,
        "chinese": "现在我们去看那些马吧。"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "panda",
        "options": [
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "熊猫"
      },
      {
        "type": "listen_select",
        "audio": "horse",
        "options": [
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "马"
      },
      {
        "type": "listen_select",
        "audio": "These are pandas.",
        "options": [
          "那些是马。",
          "它们很可爱。",
          "这些是熊猫。",
          "它们有长腿。"
        ],
        "correct": 2,
        "chinese": "这些是熊猫。"
      },
      {
        "type": "listen_select",
        "audio": "They have small ears and black eyes.",
        "options": [
          "它们有小耳朵和黑眼睛。",
          "它们是棕色的。",
          "它们很可爱。",
          "这些是熊猫。"
        ],
        "correct": 0,
        "chinese": "它们有小耳朵和黑眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "They have small ears.",
        "options": [
          "它们有黑眼睛。",
          "它们有长腿。",
          "它们是棕色的。",
          "它们有小耳朵。"
        ],
        "correct": 3,
        "chinese": "它们有小耳朵。"
      },
      {
        "type": "listen_select",
        "audio": "They have black eyes.",
        "options": [
          "它们有黑眼睛。",
          "它们有小耳朵。",
          "它们很可爱。",
          "看，熊猫宝宝。"
        ],
        "correct": 0,
        "chinese": "它们有黑眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "Look, baby pandas.",
        "options": [
          "那些是马。",
          "看，熊猫宝宝。",
          "它们很可爱。",
          "我们骑马吧。"
        ],
        "correct": 1,
        "chinese": "看，熊猫宝宝。"
      },
      {
        "type": "listen_select",
        "audio": "They are lovely.",
        "options": [
          "它们有小耳朵。",
          "它们喜欢吃草。",
          "它们很可爱。",
          "它们有长腿。"
        ],
        "correct": 2,
        "chinese": "它们很可爱。"
      },
      {
        "type": "listen_select",
        "audio": "Now let's go and see those horses.",
        "options": [
          "现在我们去看那些马吧。",
          "看，熊猫宝宝。",
          "我们骑马吧。",
          "好的。"
        ],
        "correct": 0,
        "chinese": "现在我们去看那些马吧。"
      },
      {
        "type": "listen_select",
        "audio": "All right.",
        "options": [
          "太棒了！",
          "酷！",
          "我们骑马吧。",
          "好的。"
        ],
        "correct": 3,
        "chinese": "好的。"
      },
      {
        "type": "listen_select",
        "audio": "Those are horses.",
        "options": [
          "它们有小耳朵。",
          "那些是马。",
          "这些是熊猫。",
          "它们很可爱。"
        ],
        "correct": 1,
        "chinese": "那些是马。"
      },
      {
        "type": "listen_select",
        "audio": "They are brown.",
        "options": [
          "它们是棕色的。",
          "它们喜欢吃草。",
          "它们有长腿。",
          "它们很可爱。"
        ],
        "correct": 0,
        "chinese": "它们是棕色的。"
      },
      {
        "type": "listen_select",
        "audio": "They have long legs.",
        "options": [
          "它们有小耳朵。",
          "它们是棕色的。",
          "它们有长腿。",
          "它们喜欢吃草。"
        ],
        "correct": 2,
        "chinese": "它们有长腿。"
      },
      {
        "type": "listen_select",
        "audio": "They like grass.",
        "options": [
          "它们有长腿。",
          "它们很可爱。",
          "它们是棕色的。",
          "它们喜欢吃草。"
        ],
        "correct": 3,
        "chinese": "它们喜欢吃草。"
      },
      {
        "type": "listen_select",
        "audio": "Let's ride a horse.",
        "options": [
          "那些是马。",
          "我们骑马吧。",
          "现在我们去看那些马吧。",
          "好的。"
        ],
        "correct": 1,
        "chinese": "我们骑马吧。"
      },
      {
        "type": "listen_select",
        "audio": "Great!",
        "options": [
          "好的。",
          "酷！",
          "太棒了！",
          "我们骑马吧。"
        ],
        "correct": 2,
        "chinese": "太棒了！"
      },
      {
        "type": "listen_select",
        "audio": "Cool!",
        "options": [
          "酷！",
          "太棒了！",
          "好的。",
          "那些是马。"
        ],
        "correct": 0,
        "chinese": "酷！"
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
        "audio": "This is a horse.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一匹马，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a bear.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是熊，这是一只熊猫。"
      },
      {
        "type": "listen_sequence",
        "audio": "panda, horse, rabbit",
        "sequence": [
          "panda",
          "horse",
          "rabbit"
        ],
        "words": [
          "<img src=\"assets/images/rabbit.png\" width=\"60\">",
          "<img src=\"assets/images/panda.png\" width=\"60\">",
          "<img src=\"assets/images/horse.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "They have small ears and black eyes.",
        "context": "🐼 你在看熊猫，朋友问它们长什么样。",
        "question": "熊猫的耳朵是什么样的？",
        "options": [
          "小的",
          "大的",
          "长的",
          "短的"
        ],
        "correct": 0,
        "chinese": "它们有小耳朵和黑眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "They have long legs.",
        "context": "🐴 你来到马区，想知道马的特点。",
        "question": "马的腿是什么样的？",
        "options": [
          "长的",
          "短的",
          "小的",
          "大的"
        ],
        "correct": 0,
        "chinese": "它们有长腿。"
      },
      {
        "type": "listen_select",
        "audio": "Baby pandas. They are lovely.",
        "context": "🐼 朋友问你熊猫宝宝可爱吗。",
        "question": "熊猫宝宝怎么样？",
        "options": [
          "很可爱",
          "很大",
          "很快",
          "很高"
        ],
        "correct": 0,
        "chinese": "熊猫宝宝。它们很可爱。"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "word": "panda",
        "sentence": "These are pandas.",
        "chinese": "这些是熊猫。",
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
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "word_match",
        "word": "horse",
        "sentence": "Those are horses.",
        "chinese": "那些是马。",
        "options": [
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
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
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          }
        ],
        "correct": "horse"
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
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
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
        "correct": "bear"
      },
      {
        "type": "sentence_match",
        "sentence": "These are pandas. They have small ears and black eyes.",
        "chinese": "这些是熊猫。它们有小耳朵和黑眼睛。",
        "options": [
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          },
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          },
          {
            "text": "<img src=\"assets/images/dog.png\" width=\"80\">",
            "value": "dog"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "Those are horses. They are brown.",
        "chinese": "那些是马。它们是棕色的。",
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
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          }
        ],
        "correct": "horse"
      },
      {
        "type": "sentence_match",
        "sentence": "They are lovely.",
        "chinese": "它们很可爱。",
        "options": [
          {
            "text": "它们是棕色的。",
            "value": "wrong1"
          },
          {
            "text": "它们有长腿。",
            "value": "wrong2"
          },
          {
            "text": "它们很可爱。",
            "value": "correct"
          },
          {
            "text": "它们喜欢吃草。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They have long legs.",
        "chinese": "它们有长腿。",
        "options": [
          {
            "text": "它们有长腿。",
            "value": "correct"
          },
          {
            "text": "它们有小耳朵。",
            "value": "wrong1"
          },
          {
            "text": "它们有黑眼睛。",
            "value": "wrong2"
          },
          {
            "text": "它们是棕色的。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They like grass.",
        "chinese": "它们喜欢吃草。",
        "options": [
          {
            "text": "它们喜欢吃肉。",
            "value": "wrong1"
          },
          {
            "text": "它们喜欢吃鱼。",
            "value": "wrong2"
          },
          {
            "text": "它们喜欢吃水果。",
            "value": "wrong3"
          },
          {
            "text": "它们喜欢吃草。",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你看到几只可爱的熊猫宝宝，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Those are horses. They are brown.",
            "value": "wrong1"
          },
          {
            "text": "Look, baby pandas. They are lovely.",
            "value": "correct"
          },
          {
            "text": "They have long legs.",
            "value": "wrong2"
          },
          {
            "text": "They like grass.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想邀请朋友一起去看那边的马，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "These are pandas.",
            "value": "wrong1"
          },
          {
            "text": "Let's ride a horse.",
            "value": "wrong2"
          },
          {
            "text": "They are brown.",
            "value": "wrong3"
          },
          {
            "text": "Now let's go and see those horses.",
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
            "word": "panda",
            "match": "<img src=\"assets/images/panda.png\" width=\"50\">",
            "chinese": "熊猫"
          },
          {
            "word": "horse",
            "match": "<img src=\"assets/images/horse.png\" width=\"50\">",
            "chinese": "马"
          },
          {
            "word": "duck",
            "match": "<img src=\"assets/images/duck.png\" width=\"50\">",
            "chinese": "鸭子"
          },
          {
            "word": "rabbit",
            "match": "<img src=\"assets/images/rabbit.png\" width=\"50\">",
            "chinese": "兔子"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "small",
            "match": "小的",
            "example": "They have small ears."
          },
          {
            "word": "long",
            "match": "长的",
            "example": "They have long legs."
          },
          {
            "word": "these",
            "match": "这些",
            "example": "These are pandas."
          },
          {
            "word": "those",
            "match": "那些",
            "example": "Those are horses."
          }
        ]
      },
      {
        "type": "word_match",
        "word": "panda",
        "sentence": "These are pandas.",
        "chinese": "这些是熊猫。",
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
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "word_match",
        "word": "horse",
        "sentence": "Those are horses.",
        "chinese": "那些是马。",
        "options": [
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          },
          {
            "text": "<img src=\"assets/images/elephant.png\" width=\"80\">",
            "value": "elephant"
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
        "word": "bear",
        "sentence": "This is a bear.",
        "chinese": "这是一只熊。",
        "options": [
          {
            "text": "<img src=\"assets/images/monkey.png\" width=\"80\">",
            "value": "monkey"
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
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
          }
        ],
        "correct": "bear"
      },
      {
        "type": "sentence_match",
        "sentence": "These are pandas. They have small ears.",
        "chinese": "这些是熊猫。它们有小耳朵。",
        "options": [
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "panda"
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
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
          }
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "Those are horses. They have long legs.",
        "chinese": "那些是马。它们有长腿。",
        "options": [
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
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
            "text": "<img src=\"assets/images/mouse.png\" width=\"80\">",
            "value": "mouse"
          }
        ],
        "correct": "horse"
      },
      {
        "type": "sentence_match",
        "sentence": "These are pandas.",
        "chinese": "这些是熊猫。",
        "options": [
          {
            "text": "这些是老虎。",
            "value": "wrong1"
          },
          {
            "text": "这些是熊猫。",
            "value": "correct"
          },
          {
            "text": "那些是熊猫。",
            "value": "wrong2"
          },
          {
            "text": "这些是小鸟。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They have small ears and black eyes.",
        "chinese": "它们有小耳朵和黑眼睛。",
        "options": [
          {
            "text": "它们有大耳朵和蓝眼睛。",
            "value": "wrong1"
          },
          {
            "text": "它们有长耳朵和红眼睛。",
            "value": "wrong2"
          },
          {
            "text": "它们有小嘴巴和黑鼻子。",
            "value": "wrong3"
          },
          {
            "text": "它们有小耳朵和黑眼睛。",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Look, baby pandas.",
        "chinese": "看，熊猫宝宝。",
        "options": [
          {
            "text": "看，熊猫宝宝。",
            "value": "correct"
          },
          {
            "text": "看，小马驹。",
            "value": "wrong1"
          },
          {
            "text": "看，小老虎。",
            "value": "wrong2"
          },
          {
            "text": "看，小兔子。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They are lovely.",
        "chinese": "它们很可爱。",
        "options": [
          {
            "text": "它们是棕色的。",
            "value": "wrong1"
          },
          {
            "text": "它们很可爱。",
            "value": "correct"
          },
          {
            "text": "它们有长腿。",
            "value": "wrong2"
          },
          {
            "text": "它们喜欢吃草。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Now let's go and see those horses.",
        "chinese": "现在我们去看那些马吧。",
        "options": [
          {
            "text": "我们骑马吧。",
            "value": "wrong1"
          },
          {
            "text": "看，熊猫宝宝。",
            "value": "wrong2"
          },
          {
            "text": "现在我们去看那些马吧。",
            "value": "correct"
          },
          {
            "text": "好的。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "All right.",
        "chinese": "好的。",
        "options": [
          {
            "text": "太棒了！",
            "value": "wrong1"
          },
          {
            "text": "酷！",
            "value": "wrong2"
          },
          {
            "text": "我们骑马吧。",
            "value": "wrong3"
          },
          {
            "text": "好的。",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Those are horses.",
        "chinese": "那些是马。",
        "options": [
          {
            "text": "那些是马。",
            "value": "correct"
          },
          {
            "text": "这些是马。",
            "value": "wrong1"
          },
          {
            "text": "那些是猫。",
            "value": "wrong2"
          },
          {
            "text": "那些是鸟。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They are brown.",
        "chinese": "它们是棕色的。",
        "options": [
          {
            "text": "它们是黑白色的。",
            "value": "wrong1"
          },
          {
            "text": "它们是棕色的。",
            "value": "correct"
          },
          {
            "text": "它们是红色的。",
            "value": "wrong2"
          },
          {
            "text": "它们是绿色的。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They have long legs.",
        "chinese": "它们有长腿。",
        "options": [
          {
            "text": "它们有小耳朵。",
            "value": "wrong1"
          },
          {
            "text": "它们是棕色的。",
            "value": "wrong2"
          },
          {
            "text": "它们有长腿。",
            "value": "correct"
          },
          {
            "text": "它们喜欢吃草。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They like grass.",
        "chinese": "它们喜欢吃草。",
        "options": [
          {
            "text": "它们喜欢吃草。",
            "value": "correct"
          },
          {
            "text": "它们很可爱。",
            "value": "wrong1"
          },
          {
            "text": "它们有长腿。",
            "value": "wrong2"
          },
          {
            "text": "它们是棕色的。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Let's ride a horse.",
        "chinese": "我们骑马吧。",
        "options": [
          {
            "text": "那些是马。",
            "value": "wrong1"
          },
          {
            "text": "现在我们去看那些马吧。",
            "value": "wrong2"
          },
          {
            "text": "我们骑马吧。",
            "value": "correct"
          },
          {
            "text": "好的。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Great!",
        "chinese": "太棒了！",
        "options": [
          {
            "text": "好的。",
            "value": "wrong1"
          },
          {
            "text": "太棒了！",
            "value": "correct"
          },
          {
            "text": "酷！",
            "value": "wrong2"
          },
          {
            "text": "我们骑马吧。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Cool!",
        "chinese": "酷！",
        "options": [
          {
            "text": "太棒了！",
            "value": "wrong1"
          },
          {
            "text": "好的。",
            "value": "wrong2"
          },
          {
            "text": "那些是马。",
            "value": "wrong3"
          },
          {
            "text": "酷！",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你看到一群熊猫有小耳朵和黑眼睛，你想告诉朋友：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "These are pandas. They have small ears and black eyes.",
            "value": "correct"
          },
          {
            "text": "Those are horses. They are brown.",
            "value": "wrong1"
          },
          {
            "text": "Baby pandas. They are lovely.",
            "value": "wrong2"
          },
          {
            "text": "They have long legs.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想邀请朋友骑马，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Now let's go and see those horses.",
            "value": "wrong1"
          },
          {
            "text": "Those are horses.",
            "value": "wrong2"
          },
          {
            "text": "Let's ride a horse.",
            "value": "correct"
          },
          {
            "text": "They have long legs.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "These are pandas. They have small ears.",
        "context": "动物园要给动物做名牌。这个名牌该贴给谁？",
        "question": "这是哪种动物的名牌？",
        "options": [
          {
            "text": "熊猫",
            "value": "correct"
          },
          {
            "text": "马",
            "value": "w1"
          },
          {
            "text": "兔子",
            "value": "w2"
          },
          {
            "text": "鸟",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "这些是熊猫。它们有小耳朵。"
      },
      {
        "type": "scenario",
        "sentence": "Those are horses. They are brown.",
        "context": "朋友想看棕色的动物。你看到一块牌子。",
        "question": "这些动物是棕色的吗？",
        "options": [
          {
            "text": "是的",
            "value": "correct"
          },
          {
            "text": "不是",
            "value": "w1"
          },
          {
            "text": "是黑色的",
            "value": "w2"
          },
          {
            "text": "是白色的",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "那些是马。它们是棕色的。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "These are pandas.",
          "They have small ears.",
          "They are lovely."
        ],
        "chinese": "把介绍排好顺序！",
        "chineseHint": "这些是熊猫。 / 它们有小耳朵。 / 它们很可爱。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "Those are horses.",
          "They are brown.",
          "They have long legs."
        ],
        "chinese": "把介绍排好顺序！",
        "chineseHint": "那些是马。 / 它们是棕色的。 / 它们有长腿。"
      },
      {
        "type": "word_match",
        "word": "duck",
        "options": [
          {
            "text": "<img src=\"assets/images/duck.png\" width=\"80\">",
            "value": "duck"
          },
          {
            "text": "<img src=\"assets/images/panda.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "duck",
        "chinese": "duck"
      }
    ]
  },
  "writing": {
    "pretest": [
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
        "chinese": "熊猫",
        "word": "熊猫"
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
        "type": "fill_blank",
        "prompt": "These are _____. They have small ears.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": [
          "pandas",
          "horses",
          "bears",
          "birds"
        ],
        "correct": 0,
        "chinese": "这些是熊猫。它们有小耳朵。"
      },
      {
        "type": "word_puzzle",
        "hint": "s_all",
        "word": "small",
        "options": [
          "m",
          "s",
          "u",
          "n"
        ],
        "correct": 0,
        "chinese": "small"
      },
      {
        "type": "word_puzzle",
        "hint": "e_r",
        "word": "ear",
        "options": [
          "p",
          "c",
          "n",
          "a"
        ],
        "correct": 3,
        "chinese": "ear"
      },
      {
        "type": "word_puzzle",
        "hint": "e_e",
        "word": "eye",
        "options": [
          "x",
          "j",
          "e",
          "y"
        ],
        "correct": 3,
        "chinese": "eye"
      },
      {
        "type": "fill_blank",
        "prompt": "These are _____.",
        "options": [
          "eye",
          "small",
          "pandas",
          "ear"
        ],
        "correct": 2,
        "chinese": "These are pandas."
      },
      {
        "type": "fill_blank",
        "prompt": "Those are _____.",
        "options": [
          "small",
          "eye",
          "ear",
          "horses"
        ],
        "correct": 3,
        "chinese": "Those are horses."
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "这些是熊猫。",
        "words": [
          "These",
          "are",
          "pandas"
        ],
        "scrambled": [
          "pandas",
          "These",
          "are"
        ],
        "chineseWords": [
          "这些",
          "是",
          "熊猫"
        ],
        "chineseScrambled": [
          "熊猫",
          "这些",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它们有小耳朵。",
        "words": [
          "They",
          "have",
          "small",
          "ears"
        ],
        "scrambled": [
          "small",
          "They",
          "ears",
          "have"
        ],
        "chineseWords": [
          "它们",
          "有",
          "小",
          "耳朵"
        ],
        "chineseScrambled": [
          "耳朵",
          "小",
          "它们",
          "有"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它们有黑眼睛。",
        "words": [
          "They",
          "have",
          "black",
          "eyes"
        ],
        "scrambled": [
          "eyes",
          "They",
          "black",
          "have"
        ],
        "chineseWords": [
          "它们",
          "有",
          "黑",
          "眼睛"
        ],
        "chineseScrambled": [
          "眼睛",
          "黑",
          "它们",
          "有"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "看，熊猫宝宝。",
        "words": [
          "Look",
          "baby",
          "pandas"
        ],
        "scrambled": [
          "baby",
          "Look",
          "pandas"
        ],
        "chineseWords": [
          "看",
          "熊猫",
          "宝宝"
        ],
        "chineseScrambled": [
          "宝宝",
          "看",
          "熊猫"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它们很可爱。",
        "words": [
          "They",
          "are",
          "lovely"
        ],
        "scrambled": [
          "lovely",
          "They",
          "are"
        ],
        "chineseWords": [
          "它们",
          "很",
          "可爱"
        ],
        "chineseScrambled": [
          "可爱",
          "它们",
          "很"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在我们去看看。",
        "words": [
          "Now",
          "let's",
          "go",
          "and",
          "see"
        ],
        "scrambled": [
          "go",
          "Now",
          "let's",
          "see",
          "and"
        ],
        "chineseWords": [
          "现在",
          "我们",
          "去",
          "看看"
        ],
        "chineseScrambled": [
          "看看",
          "现在",
          "去",
          "我们"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "那些是马。",
        "words": [
          "Those",
          "are",
          "horses"
        ],
        "scrambled": [
          "horses",
          "are",
          "Those"
        ],
        "chineseWords": [
          "那些",
          "是",
          "马"
        ],
        "chineseScrambled": [
          "马",
          "那些",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "好的。",
        "words": [
          "All",
          "right"
        ],
        "scrambled": [
          "right",
          "All"
        ],
        "chineseWords": [
          "好的"
        ],
        "chineseScrambled": [
          "好的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它们是棕色的。",
        "words": [
          "They",
          "are",
          "brown"
        ],
        "scrambled": [
          "brown",
          "They",
          "are"
        ],
        "chineseWords": [
          "它们",
          "是",
          "棕色的"
        ],
        "chineseScrambled": [
          "棕色的",
          "它们",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它们有长腿。",
        "words": [
          "They",
          "have",
          "long",
          "legs"
        ],
        "scrambled": [
          "long",
          "They",
          "legs",
          "have"
        ],
        "chineseWords": [
          "它们",
          "有",
          "长",
          "腿"
        ],
        "chineseScrambled": [
          "腿",
          "长",
          "它们",
          "有"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它们喜欢吃草。",
        "words": [
          "They",
          "like",
          "grass"
        ],
        "scrambled": [
          "grass",
          "They",
          "like"
        ],
        "chineseWords": [
          "它们",
          "喜欢",
          "草"
        ],
        "chineseScrambled": [
          "草",
          "它们",
          "喜欢"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我们骑马吧。",
        "words": [
          "Let's",
          "ride",
          "a",
          "horse"
        ],
        "scrambled": [
          "ride",
          "a",
          "Let's",
          "horse"
        ],
        "chineseWords": [
          "我们",
          "骑",
          "一匹",
          "马"
        ],
        "chineseScrambled": [
          "马",
          "我们",
          "一匹",
          "骑"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "太棒了！",
        "words": [
          "Great"
        ],
        "scrambled": [
          "Great"
        ],
        "chineseWords": [
          "太棒了"
        ],
        "chineseScrambled": [
          "太棒了"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "酷！",
        "words": [
          "Cool"
        ],
        "scrambled": [
          "Cool"
        ],
        "chineseWords": [
          "酷"
        ],
        "chineseScrambled": [
          "酷"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "These are _____. They have small ears.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": [
          "pandas",
          "horses",
          "bears",
          "birds"
        ],
        "correct": 0,
        "chinese": "这些是熊猫。它们有小耳朵。"
      },
      {
        "type": "fill_blank",
        "prompt": "Those are _____. They are brown.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": [
          "bears",
          "horses",
          "pandas",
          "ducks"
        ],
        "correct": 1,
        "chinese": "那些是马。它们是棕色的。"
      },
      {
        "type": "fill_blank",
        "prompt": "They have _____ ears and black eyes.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": [
          "big",
          "long",
          "small",
          "red"
        ],
        "correct": 2,
        "chinese": "它们有小耳朵和黑眼睛。"
      },
      {
        "type": "fill_blank",
        "prompt": "They have _____ legs.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": [
          "short",
          "small",
          "big",
          "long"
        ],
        "correct": 3,
        "chinese": "它们有长腿。"
      },
      {
        "type": "fill_blank",
        "prompt": "They like _____.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": [
          "meat",
          "grass",
          "fish",
          "fruit"
        ],
        "correct": 1,
        "chinese": "它们喜欢吃草。"
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "panda",
        "chinese": "熊猫",
        "expected": "panda"
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
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "word": "bear",
        "chinese": "熊",
        "expected": "bear"
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
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "word": "bird",
        "chinese": "鸟",
        "expected": "bird"
      },
      {
        "type": "speak_select",
        "audio": "panda",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "熊猫"
      },
      {
        "type": "speak_select",
        "audio": "horse",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "马"
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "These are pandas.",
        "chinese": "这些是熊猫。",
        "expected": "These are pandas."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "word": "Those are horses.",
        "chinese": "那些是马。",
        "expected": "Those are horses."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "They are lovely.",
        "chinese": "它们很可爱。",
        "expected": "They are lovely."
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "These are pandas.",
        "chinese": "这些是熊猫。",
        "expected": "These are pandas."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "They have small ears and black eyes.",
        "chinese": "它们有小耳朵和黑眼睛。",
        "expected": "They have small ears and black eyes."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "Look, baby pandas.",
        "chinese": "看，熊猫宝宝。",
        "expected": "Look, baby pandas."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "They are lovely.",
        "chinese": "它们很可爱。",
        "expected": "They are lovely."
      },
      {
        "type": "repeat_sentence",
        "word": "Now let's go and see those horses.",
        "chinese": "现在我们去看那些马吧。",
        "expected": "Now let's go and see those horses."
      },
      {
        "type": "repeat_sentence",
        "word": "All right.",
        "chinese": "好的。",
        "expected": "All right."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "word": "Those are horses.",
        "chinese": "那些是马。",
        "expected": "Those are horses."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "word": "They are brown.",
        "chinese": "它们是棕色的。",
        "expected": "They are brown."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "word": "They have long legs.",
        "chinese": "它们有长腿。",
        "expected": "They have long legs."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "word": "They like grass.",
        "chinese": "它们喜欢吃草。",
        "expected": "They like grass."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "word": "Let's ride a horse.",
        "chinese": "我们骑马吧。",
        "expected": "Let's ride a horse."
      },
      {
        "type": "repeat_sentence",
        "word": "Great!",
        "chinese": "太棒了！",
        "expected": "Great!"
      },
      {
        "type": "repeat_sentence",
        "word": "Cool!",
        "chinese": "酷！",
        "expected": "Cool!"
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "They have small ears.",
        "chinese": "它们有小耳朵。",
        "expected": "They have small ears."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "They have black eyes.",
        "chinese": "它们有黑眼睛。",
        "expected": "They have black eyes."
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
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "word": "horse",
        "chinese": "马",
        "expected": "horse"
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
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "word": "rabbit",
        "chinese": "兔子",
        "expected": "rabbit"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "word": "bird",
        "chinese": "鸟",
        "expected": "bird"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "panda",
        "chinese": "panda"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "word": "horse",
        "chinese": "horse"
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
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "word": "bird",
        "chinese": "bird"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "word": "monkey",
        "chinese": "monkey"
      }
    ]
  }
};
