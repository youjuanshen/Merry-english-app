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
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "熊猫"
      },
      {
        "type": "listen_select",
        "audio": "horse",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "马"
      },
      {
        "type": "listen_select",
        "audio": "baby",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/baby.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "宝宝"
      },
      {
        "type": "listen_select",
        "audio": "They have small ears and black eyes.",
        "options": ["它们有小耳朵和黑眼睛。", "它们有长腿。", "它们是棕色的。", "它们很可爱。"],
        "correct": 0,
        "chinese": "它们有小耳朵和黑眼睛。"
      },
      {
        "type": "listen_select",
        "audio": "They are lovely.",
        "options": ["它们很可爱。", "它们是棕色的。", "它们有长腿。", "它们有小耳朵。"],
        "correct": 0,
        "chinese": "它们很可爱。"
      },
      {
        "type": "listen_tf",
        "audio": "These are pandas.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "correct": true,
        "chinese": "这些是熊猫，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "Those are horses.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是马，这是熊猫。"
      },
      {
        "type": "listen_select",
        "audio": "___ are pandas. They have small ears.",
        "options": ["Those", "These", "This", "That"],
        "correct": 1,
        "chinese": "___是熊猫。它们有小耳朵。(这些)"
      },
      {
        "type": "listen_select",
        "audio": "___ are horses. They have long legs.",
        "options": ["These", "This", "Those", "That"],
        "correct": 2,
        "chinese": "___是马。它们有长腿。(那些)"
      },
      {
        "type": "listen_select",
        "audio": "You see baby pandas. They are very cute. What do you say?",
        "options": ["They are lovely.", "They have long legs.", "They are brown.", "They like grass."],
        "correct": 0,
        "chinese": "你看到熊猫宝宝，它们非常可爱，你会说什么？"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "ear",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "耳朵（兔子有长耳朵）"
      },
      {
        "type": "listen_select",
        "audio": "eye",
        "options": [
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "眼睛（熊猫有黑眼睛）"
      },
      {
        "type": "listen_select",
        "audio": "leg",
        "options": [
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "腿（马有长腿）"
      },
      {
        "type": "listen_select",
        "audio": "small",
        "options": [
          "<img src=\"assets/images/elephant.png\" width=\"80\">",
          "<img src=\"assets/images/baby.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "小的"
      },
      {
        "type": "listen_select",
        "audio": "These are pandas.",
        "options": ["这些是熊猫。", "那些是马。", "它们有小耳朵。", "它们很可爱。"],
        "correct": 0,
        "chinese": "这些是熊猫。"
      },
      {
        "type": "listen_select",
        "audio": "Those are horses.",
        "options": ["它们有长腿。", "那些是马。", "它们是棕色的。", "这些是熊猫。"],
        "correct": 1,
        "chinese": "那些是马。"
      },
      {
        "type": "listen_select",
        "audio": "They are brown.",
        "options": ["它们很可爱。", "它们有小耳朵。", "它们是棕色的。", "它们有长腿。"],
        "correct": 2,
        "chinese": "它们是棕色的。"
      },
      {
        "type": "listen_select",
        "audio": "They like grass.",
        "options": ["它们喜欢吃草。", "它们有长腿。", "它们是棕色的。", "它们很可爱。"],
        "correct": 0,
        "chinese": "它们喜欢吃草。"
      },
      {
        "type": "listen_select",
        "audio": "___ are pandas. They have ___ ears.",
        "options": ["These, small", "Those, long", "This, big", "That, black"],
        "correct": 0,
        "chinese": "___是熊猫。它们有___耳朵。(这些，小)"
      },
      {
        "type": "listen_select",
        "audio": "Those are horses. They have ___ legs.",
        "options": ["small", "black", "long", "brown"],
        "correct": 2,
        "chinese": "那些是马。它们有___腿。(长)"
      },
      {
        "type": "listen_select",
        "audio": "They have small ears and ___ eyes.",
        "options": ["long", "brown", "black", "big"],
        "correct": 2,
        "chinese": "它们有小耳朵和___眼睛。(黑色的)"
      },
      {
        "type": "listen_tf",
        "audio": "These are pandas.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是熊猫，这是马。"
      },
      {
        "type": "listen_tf",
        "audio": "Baby pandas.",
        "image": "<img src=\"assets/images/baby.png\" width=\"80\">",
        "correct": true,
        "chinese": "熊猫宝宝，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "Those are horses.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "correct": true,
        "chinese": "那些是马，正确！"
      },
      {
        "type": "listen_select",
        "audio": "A says: These are pandas. What does B say?",
        "options": ["They have small ears and black eyes.", "They have long legs.", "They are brown.", "They like grass."],
        "correct": 0,
        "chinese": "A说：这些是熊猫。B会说什么？"
      },
      {
        "type": "listen_select",
        "audio": "A says: Those are horses. What does B say?",
        "options": ["They have small ears.", "They are brown. They have long legs.", "They are lovely.", "They have black eyes."],
        "correct": 1,
        "chinese": "A说：那些是马。B会说什么？"
      },
      {
        "type": "listen_select",
        "audio": "A says: Look! Baby pandas! What does B say?",
        "options": ["They have long legs.", "They are brown.", "They are lovely.", "They like grass."],
        "correct": 2,
        "chinese": "A说：看！熊猫宝宝！B会说什么？"
      },
      {
        "type": "listen_select",
        "audio": "You see brown horses eating grass. What do you say?",
        "options": ["They like grass.", "They have small ears.", "They are lovely.", "They have black eyes."],
        "correct": 0,
        "chinese": "你看到棕色的马在吃草，你会说什么？"
      },
      {
        "type": "listen_select",
        "audio": "You see pandas with small ears. What do you say?",
        "options": ["They have long legs.", "They are brown.", "They have small ears and black eyes.", "They like grass."],
        "correct": 2,
        "chinese": "你看到有小耳朵的熊猫，你会说什么？"
      },
      {
        "type": "listen_select",
        "audio": "You see cute baby pandas. What do you say?",
        "options": ["They are brown.", "Baby pandas! They are lovely.", "They have long legs.", "They like grass."],
        "correct": 1,
        "chinese": "你看到可爱的熊猫宝宝，你会说什么？"
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
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "panda"
      },
      {
        "type": "word_match",
        "word": "horse",
        "sentence": "Those are horses.",
        "chinese": "那些是马。",
        "options": [
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "horse"
      },
      {
        "type": "sentence_match",
        "sentence": "These are pandas. They have small ears and black eyes.",
        "chinese": "这些是熊猫。它们有小耳朵和黑眼睛。",
        "options": [
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/dog.png\" width=\"80\">", "value": "dog"}
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "Those are horses. They are brown.",
        "chinese": "那些是马。它们是棕色的。",
        "options": [
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "horse"
      },
      {
        "type": "sentence_match",
        "sentence": "They have long legs.",
        "chinese": "它们有长腿。",
        "options": [
          {"text": "它们有长腿。", "value": "correct"},
          {"text": "它们有短腿。", "value": "wrong1"},
          {"text": "它们有长耳朵。", "value": "wrong2"},
          {"text": "它们有大眼睛。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They like grass.",
        "chinese": "它们喜欢吃草。",
        "options": [
          {"text": "它们喜欢吃草。", "value": "correct"},
          {"text": "它们喜欢吃鱼。", "value": "wrong1"},
          {"text": "它们喜欢吃肉。", "value": "wrong2"},
          {"text": "它们喜欢吃水果。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你看到几只熊猫宝宝，觉得很可爱，你会说：",
        "chinese": "情景选择",
        "options": [
          {"text": "Baby pandas. They are lovely.", "value": "correct"},
          {"text": "Those are horses. They are brown.", "value": "wrong1"},
          {"text": "They have long legs.", "value": "wrong2"},
          {"text": "They like grass.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想告诉朋友那些棕色的动物是马，你会说：",
        "chinese": "情景选择",
        "options": [
          {"text": "Those are horses. They are brown.", "value": "correct"},
          {"text": "These are pandas. They are lovely.", "value": "wrong1"},
          {"text": "Baby pandas.", "value": "wrong2"},
          {"text": "They have small ears.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: These are pandas.\nB: ______",
        "chinese": "A说这些是熊猫，B应该怎么描述它们？",
        "options": [
          {"text": "They have small ears and black eyes.", "value": "correct"},
          {"text": "They have long legs.", "value": "wrong1"},
          {"text": "They are brown.", "value": "wrong2"},
          {"text": "They like grass.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: Those are horses.\nB: ______",
        "chinese": "A说那些是马，B应该怎么描述它们？",
        "options": [
          {"text": "They have long legs. They like grass.", "value": "correct"},
          {"text": "They have small ears.", "value": "wrong1"},
          {"text": "Baby pandas.", "value": "wrong2"},
          {"text": "They are lovely.", "value": "wrong3"}
        ],
        "correct": "correct"
      }
    ],
    "practice": [
      {
        "type": "word_match",
        "word": "panda",
        "sentence": "These are pandas.",
        "chinese": "这些是熊猫。",
        "options": [
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"}
        ],
        "correct": "panda"
      },
      {
        "type": "word_match",
        "word": "horse",
        "sentence": "Those are horses.",
        "chinese": "那些是马。",
        "options": [
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/elephant.png\" width=\"80\">", "value": "elephant"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "horse"
      },
      {
        "type": "word_match",
        "word": "baby",
        "sentence": "Baby pandas.",
        "chinese": "熊猫宝宝。",
        "options": [
          {"text": "<img src=\"assets/images/baby.png\" width=\"80\">", "value": "baby"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"}
        ],
        "correct": "baby"
      },
      {
        "type": "sentence_match",
        "sentence": "These are pandas. They have small ears and black eyes.",
        "chinese": "这些是熊猫。它们有小耳朵和黑眼睛。",
        "options": [
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/dog.png\" width=\"80\">", "value": "dog"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"}
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
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/mouse.png\" width=\"80\">", "value": "mouse"}
        ],
        "correct": "horse"
      },
      {
        "type": "sentence_match",
        "sentence": "Baby pandas. They are lovely.",
        "chinese": "熊猫宝宝。它们很可爱。",
        "options": [
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/elephant.png\" width=\"80\">", "value": "elephant"},
          {"text": "<img src=\"assets/images/lion.png\" width=\"80\">", "value": "lion"}
        ],
        "correct": "panda"
      },
      {
        "type": "sentence_match",
        "sentence": "These are pandas.",
        "chinese": "这些是熊猫。",
        "options": [
          {"text": "这些是熊猫。", "value": "correct"},
          {"text": "这些是老虎。", "value": "wrong1"},
          {"text": "那些是熊猫。", "value": "wrong2"},
          {"text": "这些是小鸟。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They have small ears and black eyes.",
        "chinese": "它们有小耳朵和黑眼睛。",
        "options": [
          {"text": "它们有小耳朵和黑眼睛。", "value": "correct"},
          {"text": "它们有大耳朵和蓝眼睛。", "value": "wrong1"},
          {"text": "它们有长耳朵和红眼睛。", "value": "wrong2"},
          {"text": "它们有小嘴巴和黑鼻子。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Those are horses.",
        "chinese": "那些是马。",
        "options": [
          {"text": "那些是马。", "value": "correct"},
          {"text": "这些是马。", "value": "wrong1"},
          {"text": "那些是猫。", "value": "wrong2"},
          {"text": "那些是鸟。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They are brown.",
        "chinese": "它们是棕色的。",
        "options": [
          {"text": "它们是棕色的。", "value": "correct"},
          {"text": "它们是黑白色的。", "value": "wrong1"},
          {"text": "它们是红色的。", "value": "wrong2"},
          {"text": "它们是绿色的。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你看到一群熊猫有小耳朵和黑眼睛，你想告诉朋友：",
        "chinese": "情景选择",
        "options": [
          {"text": "These are pandas. They have small ears and black eyes.", "value": "correct"},
          {"text": "Those are horses. They are brown.", "value": "wrong1"},
          {"text": "Baby pandas. They are lovely.", "value": "wrong2"},
          {"text": "They have long legs.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想描述马喜欢吃草，你会说：",
        "chinese": "情景选择",
        "options": [
          {"text": "They like grass.", "value": "correct"},
          {"text": "They are lovely.", "value": "wrong1"},
          {"text": "They have small ears.", "value": "wrong2"},
          {"text": "Baby pandas.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你看到马有长长的腿，你会说：",
        "chinese": "情景选择",
        "options": [
          {"text": "Those are horses. They have long legs.", "value": "correct"},
          {"text": "These are pandas. They have small ears.", "value": "wrong1"},
          {"text": "Baby pandas. They are lovely.", "value": "wrong2"},
          {"text": "They like grass.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你看到很可爱的熊猫宝宝，你会说：",
        "chinese": "情景选择",
        "options": [
          {"text": "Baby pandas. They are lovely.", "value": "correct"},
          {"text": "Those are horses. They are brown.", "value": "wrong1"},
          {"text": "They have long legs.", "value": "wrong2"},
          {"text": "They like grass.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你看到棕色的马在吃草，你想描述它们：",
        "chinese": "情景选择",
        "options": [
          {"text": "Those are horses. They are brown. They like grass.", "value": "correct"},
          {"text": "These are pandas. They have small ears.", "value": "wrong1"},
          {"text": "Baby pandas. They are lovely.", "value": "wrong2"},
          {"text": "They have small ears and black eyes.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: Look! These are pandas.\nB: ______",
        "chinese": "A说看这些是熊猫，B应该怎么描述？",
        "options": [
          {"text": "They have small ears and black eyes.", "value": "correct"},
          {"text": "They have long legs.", "value": "wrong1"},
          {"text": "They are brown.", "value": "wrong2"},
          {"text": "They like grass.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: Those are horses. They are brown.\nB: ______",
        "chinese": "A说那些是马，它们是棕色的，B接着说什么？",
        "options": [
          {"text": "They have long legs. They like grass.", "value": "correct"},
          {"text": "They have small ears.", "value": "wrong1"},
          {"text": "Baby pandas.", "value": "wrong2"},
          {"text": "They are lovely.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: Look! Baby pandas.\nB: ______",
        "chinese": "A说看熊猫宝宝，B应该说什么？",
        "options": [
          {"text": "They are lovely.", "value": "correct"},
          {"text": "They are brown.", "value": "wrong1"},
          {"text": "They have long legs.", "value": "wrong2"},
          {"text": "They like grass.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: What do horses like?\nB: ______",
        "chinese": "A问马喜欢什么，B应该说什么？",
        "options": [
          {"text": "They like grass.", "value": "correct"},
          {"text": "They are lovely.", "value": "wrong1"},
          {"text": "They have small ears.", "value": "wrong2"},
          {"text": "Baby pandas.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: These are pandas. They have small ears.\nB: ______",
        "chinese": "A描述了熊猫有小耳朵，B接着补充什么？",
        "options": [
          {"text": "They have black eyes too.", "value": "correct"},
          {"text": "They have long legs.", "value": "wrong1"},
          {"text": "They are brown.", "value": "wrong2"},
          {"text": "They like grass.", "value": "wrong3"}
        ],
        "correct": "correct"
      }
    ]
  },

  "writing": {
    "pretest": [
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
      },
      {
        "type": "fill_blank",
        "prompt": "They have small _____ and black eyes.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["ears", "legs", "eyes", "mouths"],
        "correct": 0,
        "chinese": "它们有小耳朵和黑色的眼睛。"
      },
      {
        "type": "fill_blank",
        "prompt": "Those are _____. They are brown.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["pandas", "horses", "bears", "ducks"],
        "correct": 1,
        "chinese": "那些是马。它们是棕色的。"
      },
      {
        "type": "word_puzzle",
        "chinese": "耳朵",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "letters": ["e", "a", "r"],
        "scrambled": ["a", "r", "e"]
      },
      {
        "type": "word_puzzle",
        "chinese": "眼睛",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "letters": ["e", "y", "e"],
        "scrambled": ["y", "e", "e"]
      },
      {
        "type": "letter_select",
        "prompt": "腿的首字母是？",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["r", "l", "k", "t"],
        "correct": 1,
        "chinese": "腿"
      },
      {
        "type": "letter_select",
        "prompt": "宝宝的首字母是？",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["d", "p", "b", "g"],
        "correct": 2,
        "chinese": "宝宝"
      },
      {
        "type": "pinyin_fill",
        "hint": "sm_ll",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["a", "e", "o", "i"],
        "correct": 0,
        "chinese": "小的"
      },
      {
        "type": "fill_blank",
        "prompt": "They have long _____.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["ears", "eyes", "legs", "mouths"],
        "correct": 2,
        "chinese": "它们有长腿。"
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "这些是熊猫。",
        "words": ["These", "are", "pandas"],
        "scrambled": ["are", "These", "pandas"]
      },
      {
        "type": "sentence_order",
        "chinese": "它们有小耳朵和黑色的眼睛。",
        "words": ["They", "have", "small", "ears", "and", "black", "eyes"],
        "scrambled": ["small", "They", "eyes", "and", "ears", "have", "black"]
      },
      {
        "type": "sentence_order",
        "chinese": "那些是马。",
        "words": ["Those", "are", "horses"],
        "scrambled": ["horses", "Those", "are"]
      },
      {
        "type": "sentence_order",
        "chinese": "它们是棕色的。",
        "words": ["They", "are", "brown"],
        "scrambled": ["brown", "They", "are"]
      },
      {
        "type": "sentence_order",
        "chinese": "它们有长腿。",
        "words": ["They", "have", "long", "legs"],
        "scrambled": ["long", "They", "legs", "have"]
      },
      {
        "type": "sentence_order",
        "chinese": "它们喜欢吃草。",
        "words": ["They", "like", "grass"],
        "scrambled": ["grass", "They", "like"]
      },
      {
        "type": "sentence_order",
        "chinese": "熊猫宝宝。",
        "words": ["Baby", "pandas"],
        "scrambled": ["pandas", "Baby"]
      },
      {
        "type": "sentence_order",
        "chinese": "它们很可爱。",
        "words": ["They", "are", "lovely"],
        "scrambled": ["lovely", "They", "are"]
      },
      {
        "type": "fill_blank",
        "prompt": "These are _____. They have small ears.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["horses", "pandas", "bears", "ducks"],
        "correct": 1,
        "chinese": "这些是熊猫。它们有小耳朵。"
      },
      {
        "type": "fill_blank",
        "prompt": "Those are horses. They have long _____.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["ears", "eyes", "legs", "mouths"],
        "correct": 2,
        "chinese": "那些是马。它们有长腿。"
      },
      {
        "type": "fill_blank",
        "prompt": "They like _____.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["grass", "meat", "fish", "milk"],
        "correct": 0,
        "chinese": "它们喜欢吃草。"
      },
      {
        "type": "fill_blank",
        "prompt": "_____ pandas. They are lovely.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["Baby", "Big", "Small", "Old"],
        "correct": 0,
        "chinese": "熊猫宝宝。它们很可爱。"
      },
      {
        "type": "word_puzzle",
        "chinese": "小的",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "letters": ["s", "m", "a", "l", "l"],
        "scrambled": ["l", "s", "m", "a", "l"]
      },
      {
        "type": "word_puzzle",
        "chinese": "耳朵",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "letters": ["e", "a", "r"],
        "scrambled": ["r", "a", "e"]
      },
      {
        "type": "word_puzzle",
        "chinese": "长的",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "letters": ["l", "o", "n", "g"],
        "scrambled": ["n", "g", "l", "o"]
      },
      {
        "type": "word_puzzle",
        "chinese": "腿",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "letters": ["l", "e", "g"],
        "scrambled": ["g", "l", "e"]
      },
      {
        "type": "word_puzzle",
        "chinese": "宝宝",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "letters": ["b", "a", "b", "y"],
        "scrambled": ["y", "b", "a", "b"]
      },
      {
        "type": "letter_select",
        "prompt": "小的首字母是？",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["c", "s", "z", "x"],
        "correct": 1,
        "chinese": "小的"
      },
      {
        "type": "letter_select",
        "prompt": "眼睛的首字母是？",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "options": ["a", "i", "e", "o"],
        "correct": 2,
        "chinese": "眼睛"
      },
      {
        "type": "pinyin_fill",
        "hint": "b_by",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["a", "e", "o", "i"],
        "correct": 0,
        "chinese": "宝宝"
      },
      {
        "type": "pinyin_fill",
        "hint": "l_ng",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["o", "a", "e", "i"],
        "correct": 0,
        "chinese": "长的"
      },
      {
        "type": "fill_blank",
        "prompt": "They have _____ eyes.",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "options": ["black", "blue", "red", "green"],
        "correct": 0,
        "chinese": "它们有黑色的眼睛。"
      },
      {
        "type": "fill_blank",
        "prompt": "Those are horses. They are _____.",
        "image": "<img src=\"assets/images/horse.png\" width=\"80\">",
        "options": ["brown", "black", "white", "red"],
        "correct": 0,
        "chinese": "那些是马。它们是棕色的。"
      },
      {
        "type": "sentence_order",
        "chinese": "它们有小耳朵。",
        "words": ["They", "have", "small", "ears"],
        "scrambled": ["small", "ears", "They", "have"]
      },
      {
        "type": "sentence_order",
        "chinese": "它们喜欢吃草。",
        "words": ["They", "like", "grass"],
        "scrambled": ["like", "grass", "They"]
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "word": "small",
        "chinese": "小的",
        "expected": "small"
      },
      {
        "type": "repeat_word",
        "word": "ear",
        "chinese": "耳朵",
        "expected": "ear"
      },
      {
        "type": "repeat_word",
        "word": "eye",
        "chinese": "眼睛",
        "expected": "eye"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/baby.png\" width=\"80\">",
        "word": "baby",
        "chinese": "宝宝",
        "expected": "baby"
      },
      {
        "type": "repeat_word",
        "word": "long",
        "chinese": "长的",
        "expected": "long"
      },
      {
        "type": "repeat_word",
        "word": "leg",
        "chinese": "腿",
        "expected": "leg"
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
        "type": "picture_speak",
        "image": "<img src=\"assets/images/panda.png\" width=\"120\">",
        "expected": "panda",
        "word": "panda",
        "chinese": "熊猫"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/horse.png\" width=\"120\">",
        "expected": "horse",
        "word": "horse",
        "chinese": "马"
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
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "Baby pandas.",
        "chinese": "熊猫宝宝。",
        "expected": "Baby pandas."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "They are lovely.",
        "chinese": "它们很可爱。",
        "expected": "They are lovely."
      },
      {
        "type": "repeat_word",
        "word": "small",
        "chinese": "小的",
        "expected": "small"
      },
      {
        "type": "repeat_word",
        "word": "ear",
        "chinese": "耳朵",
        "expected": "ear"
      },
      {
        "type": "repeat_word",
        "word": "eye",
        "chinese": "眼睛",
        "expected": "eye"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/baby.png\" width=\"80\">",
        "word": "baby",
        "chinese": "宝宝",
        "expected": "baby"
      },
      {
        "type": "repeat_word",
        "word": "long",
        "chinese": "长的",
        "expected": "long"
      },
      {
        "type": "repeat_word",
        "word": "leg",
        "chinese": "腿",
        "expected": "leg"
      },
      {
        "type": "repeat_word",
        "word": "these",
        "chinese": "这些",
        "expected": "these"
      },
      {
        "type": "repeat_word",
        "word": "those",
        "chinese": "那些",
        "expected": "those"
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
        "image": "<img src=\"assets/images/horse.png\" width=\"120\">",
        "expected": "horse",
        "word": "horse",
        "chinese": "马"
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
      }
    ]
  }
};
