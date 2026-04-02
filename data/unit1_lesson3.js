// Unit 1 Lesson 3: I have an animal friend.
// Core vocab: jump, mouth, meat, tiger, no, rabbit, carrot
// Sentences: "I have an animal friend.", "Is it a rabbit?", "Is it a cat?", "No, it isn't. It's a tiger!", etc.
var unit1_lesson3 = {
  "id": "U1L3",
  "title": "I have an animal friend.",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "tiger",
        "options": [
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "老虎"
      },
      {
        "type": "listen_select",
        "audio": "rabbit",
        "options": [
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "兔子"
      },
      {
        "type": "listen_select",
        "audio": "cat",
        "options": [
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/dog.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/mouse.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "猫"
      },
      {
        "type": "listen_select",
        "audio": "I have an animal friend.",
        "options": [
          "它是一只兔子吗？",
          "我有一个动物朋友。",
          "请猜猜！",
          "它是一只老虎！"
        ],
        "correct": 1,
        "chinese": "我有一个动物朋友。"
      },
      {
        "type": "listen_select",
        "audio": "Is it a rabbit?",
        "options": [
          "它是一只猫吗？",
          "我有一个动物朋友。",
          "它是一只兔子吗？",
          "不，不是。"
        ],
        "correct": 2,
        "chinese": "它是一只兔子吗？"
      },
      {
        "type": "listen_select",
        "audio": "I can jump.",
        "options": [
          "我跑得很快。",
          "我的嘴巴很小。",
          "我喜欢胡萝卜。",
          "我会跳。"
        ],
        "correct": 3,
        "chinese": "我会跳。"
      },
      {
        "type": "listen_tf",
        "audio": "This is a tiger.",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只老虎，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a rabbit.",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是兔子，这是一只猫。"
      },
      {
        "type": "listen_select",
        "audio": "My mouth is small. I have two long ears.",
        "options": [
          "我的嘴巴很小。我有两只长耳朵。",
          "我的嘴巴很大。我喜欢肉。",
          "我是黑黄色的。我跑得很快。",
          "我有一个动物朋友。请猜猜！"
        ],
        "correct": 0,
        "chinese": "我的嘴巴很小。我有两只长耳朵。"
      },
      {
        "type": "listen_select",
        "audio": "I am black and yellow. I can run fast.",
        "options": [
          "我是白色的。我会跳。",
          "我喜欢胡萝卜。我是什么？",
          "我是黑黄色的。我跑得很快。",
          "它是一只猫吗？不，不是。"
        ],
        "correct": 2,
        "chinese": "我是黑黄色的。我跑得很快。"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "tiger",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "老虎"
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
        "audio": "I have an animal friend.",
        "options": [
          "请猜猜！",
          "我有一个动物朋友。",
          "它是一只兔子吗？",
          "是的，它是。"
        ],
        "correct": 1,
        "chinese": "我有一个动物朋友。"
      },
      {
        "type": "listen_select",
        "audio": "Please guess!",
        "options": [
          "请猜猜！",
          "我有一个动物朋友。",
          "不，不是。",
          "我是什么？"
        ],
        "correct": 0,
        "chinese": "请猜猜！"
      },
      {
        "type": "listen_select",
        "audio": "Is it a rabbit?",
        "options": [
          "它是一只老虎吗？",
          "它是一只猫吗？",
          "它是一只兔子吗？",
          "是的，它是。"
        ],
        "correct": 2,
        "chinese": "它是一只兔子吗？"
      },
      {
        "type": "listen_select",
        "audio": "Yes, it is.",
        "options": [
          "不，不是。",
          "请猜猜！",
          "我是什么？",
          "是的，它是。"
        ],
        "correct": 3,
        "chinese": "是的，它是。"
      },
      {
        "type": "listen_select",
        "audio": "Is it a cat?",
        "options": [
          "它是一只猫吗？",
          "它是一只兔子吗？",
          "它是一只老虎吗？",
          "不，不是。"
        ],
        "correct": 0,
        "chinese": "它是一只猫吗？"
      },
      {
        "type": "listen_select",
        "audio": "No, it isn't. It's a tiger!",
        "options": [
          "是的，它是。它是一只兔子。",
          "不，不是。它是一只老虎！",
          "它是一只猫吗？",
          "我有一个动物朋友。"
        ],
        "correct": 1,
        "chinese": "不，不是。它是一只老虎！"
      },
      {
        "type": "listen_select",
        "audio": "I am white. I can jump.",
        "options": [
          "我是白色的。我会跳。",
          "我是黑黄色的。我跑得很快。",
          "我的嘴巴很大。我喜欢肉。",
          "我有两只长耳朵。"
        ],
        "correct": 0,
        "chinese": "我是白色的。我会跳。"
      },
      {
        "type": "listen_select",
        "audio": "My mouth is small.",
        "options": [
          "我的嘴巴很大。",
          "我会跳。",
          "我的嘴巴很小。",
          "我喜欢肉。"
        ],
        "correct": 2,
        "chinese": "我的嘴巴很小。"
      },
      {
        "type": "listen_select",
        "audio": "I have two long ears.",
        "options": [
          "我有两只长耳朵。",
          "我的嘴巴很小。",
          "我喜欢胡萝卜。",
          "我是白色的。"
        ],
        "correct": 0,
        "chinese": "我有两只长耳朵。"
      },
      {
        "type": "listen_select",
        "audio": "I like carrots.",
        "options": [
          "我喜欢肉。",
          "我会跳。",
          "我喜欢胡萝卜。",
          "我是什么？"
        ],
        "correct": 2,
        "chinese": "我喜欢胡萝卜。"
      },
      {
        "type": "listen_select",
        "audio": "What am I?",
        "options": [
          "请猜猜！",
          "我是什么？",
          "它是一只兔子吗？",
          "是的，它是。"
        ],
        "correct": 1,
        "chinese": "我是什么？"
      },
      {
        "type": "listen_select",
        "audio": "I am black and yellow.",
        "options": [
          "我是白色的。",
          "我的嘴巴很大。",
          "我是黑黄色的。",
          "我跑得很快。"
        ],
        "correct": 2,
        "chinese": "我是黑黄色的。"
      },
      {
        "type": "listen_select",
        "audio": "I can run fast.",
        "options": [
          "我会跳。",
          "我跑得很快。",
          "我喜欢肉。",
          "我的嘴巴很大。"
        ],
        "correct": 1,
        "chinese": "我跑得很快。"
      },
      {
        "type": "listen_select",
        "audio": "My mouth is big.",
        "options": [
          "我的嘴巴很小。",
          "我有两只长耳朵。",
          "我喜欢肉。",
          "我的嘴巴很大。"
        ],
        "correct": 3,
        "chinese": "我的嘴巴很大。"
      },
      {
        "type": "listen_select",
        "audio": "I like meat.",
        "options": [
          "我喜欢肉。",
          "我喜欢胡萝卜。",
          "我会跳。",
          "我是白色的。"
        ],
        "correct": 0,
        "chinese": "我喜欢肉。"
      },
      {
        "type": "listen_tf",
        "audio": "This is a tiger.",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只老虎，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a rabbit.",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一只兔子，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a cat.",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是猫，这是一只老虎。"
      },
      {
        "type": "listen_sequence",
        "audio": "tiger, rabbit, duck",
        "sequence": [
          "tiger",
          "rabbit",
          "duck"
        ],
        "words": [
          "<img src=\"assets/images/duck.png\" width=\"60\">",
          "<img src=\"assets/images/tiger.png\" width=\"60\">",
          "<img src=\"assets/images/rabbit.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "I can jump. My mouth is small.",
        "context": "🐰 朋友在猜动物谜语。你听到了一个线索。",
        "question": "这是什么动物？",
        "options": [
          "兔子",
          "老虎",
          "猴子",
          "鸭子"
        ],
        "correct": 0,
        "chinese": "我会跳。我的嘴巴小。"
      },
      {
        "type": "listen_select",
        "audio": "I can run fast. My mouth is big. I like meat.",
        "context": "🐯 又一个谜语！这个动物很凶。",
        "question": "这是什么动物？",
        "options": [
          "老虎",
          "兔子",
          "鸟",
          "熊猫"
        ],
        "correct": 0,
        "chinese": "我跑得快。我嘴巴大。我喜欢吃肉。"
      },
      {
        "type": "listen_select",
        "audio": "I have an animal friend. Please guess!",
        "context": "❓ 有人在描述自己的动物朋友。",
        "question": "他想让你做什么？",
        "options": [
          "猜一猜",
          "看一看",
          "跑一跑",
          "吃东西"
        ],
        "correct": 0,
        "chinese": "我有一个动物朋友。请猜猜！"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "word": "tiger",
        "sentence": "It's a tiger!",
        "chinese": "它是一只老虎！",
        "options": [
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
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
            "text": "<img src=\"assets/images/lion.png\" width=\"80\">",
            "value": "lion"
          }
        ],
        "correct": "tiger"
      },
      {
        "type": "word_match",
        "word": "rabbit",
        "sentence": "Is it a rabbit?",
        "chinese": "它是一只兔子吗？",
        "options": [
          {
            "text": "<img src=\"assets/images/monkey.png\" width=\"80\">",
            "value": "monkey"
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
            "text": "<img src=\"assets/images/mouse.png\" width=\"80\">",
            "value": "mouse"
          }
        ],
        "correct": "rabbit"
      },
      {
        "type": "word_match",
        "word": "cat",
        "sentence": "Is it a cat?",
        "chinese": "它是一只猫吗？",
        "options": [
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
          },
          {
            "text": "<img src=\"assets/images/dog.png\" width=\"80\">",
            "value": "dog"
          }
        ],
        "correct": "cat"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a rabbit? Yes, it is.",
        "chinese": "它是一只兔子吗？是的，它是。",
        "options": [
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "rabbit"
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
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "No, it isn't. It's a tiger!",
        "chinese": "不，不是。它是一只老虎！",
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
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          },
          {
            "text": "<img src=\"assets/images/bear.png\" width=\"80\">",
            "value": "bear"
          }
        ],
        "correct": "tiger"
      },
      {
        "type": "sentence_match",
        "sentence": "I have an animal friend.",
        "chinese": "我有一个动物朋友。",
        "options": [
          {
            "text": "它是一只兔子吗？",
            "value": "wrong1"
          },
          {
            "text": "我有一个动物朋友。",
            "value": "correct"
          },
          {
            "text": "请猜猜！",
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
        "sentence": "I can jump.",
        "chinese": "我会跳。",
        "options": [
          {
            "text": "我跑得很快。",
            "value": "wrong1"
          },
          {
            "text": "我喜欢肉。",
            "value": "wrong2"
          },
          {
            "text": "我会跳。",
            "value": "correct"
          },
          {
            "text": "我的嘴巴很小。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I like meat.",
        "chinese": "我喜欢肉。",
        "options": [
          {
            "text": "我喜欢肉。",
            "value": "correct"
          },
          {
            "text": "我喜欢胡萝卜。",
            "value": "wrong1"
          },
          {
            "text": "我会跳。",
            "value": "wrong2"
          },
          {
            "text": "我跑得很快。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你有一个动物朋友，你想让别人猜，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Is it a rabbit?",
            "value": "wrong1"
          },
          {
            "text": "No, it isn't.",
            "value": "wrong2"
          },
          {
            "text": "I have an animal friend. Please guess!",
            "value": "correct"
          },
          {
            "text": "I can jump.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想问那个动物是不是猫，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Is it a rabbit?",
            "value": "wrong1"
          },
          {
            "text": "It's a tiger!",
            "value": "wrong2"
          },
          {
            "text": "I have an animal friend.",
            "value": "wrong3"
          },
          {
            "text": "Is it a cat?",
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
            "word": "tiger",
            "match": "<img src=\"assets/images/tiger.png\" width=\"50\">",
            "chinese": "老虎"
          },
          {
            "word": "rabbit",
            "match": "<img src=\"assets/images/rabbit.png\" width=\"50\">",
            "chinese": "兔子"
          },
          {
            "word": "monkey",
            "match": "<img src=\"assets/images/monkey.png\" width=\"50\">",
            "chinese": "猴子"
          },
          {
            "word": "duck",
            "match": "<img src=\"assets/images/duck.png\" width=\"50\">",
            "chinese": "鸭子"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "jump",
            "match": "跳",
            "example": "I can jump!"
          },
          {
            "word": "mouth",
            "match": "嘴巴",
            "example": "My mouth is small."
          },
          {
            "word": "meat",
            "match": "肉",
            "example": "I like meat."
          },
          {
            "word": "carrot",
            "match": "胡萝卜",
            "example": "I like carrots."
          }
        ]
      },
      {
        "type": "word_match",
        "word": "tiger",
        "sentence": "It's a tiger!",
        "chinese": "它是一只老虎！",
        "options": [
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
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
            "text": "<img src=\"assets/images/lion.png\" width=\"80\">",
            "value": "lion"
          }
        ],
        "correct": "tiger"
      },
      {
        "type": "word_match",
        "word": "rabbit",
        "sentence": "Is it a rabbit?",
        "chinese": "它是一只兔子吗？",
        "options": [
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
          },
          {
            "text": "<img src=\"assets/images/horse.png\" width=\"80\">",
            "value": "horse"
          }
        ],
        "correct": "rabbit"
      },
      {
        "type": "word_match",
        "word": "cat",
        "sentence": "Is it a cat?",
        "chinese": "它是一只猫吗？",
        "options": [
          {
            "text": "<img src=\"assets/images/dog.png\" width=\"80\">",
            "value": "dog"
          },
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "tiger"
          },
          {
            "text": "<img src=\"assets/images/cat.png\" width=\"80\">",
            "value": "cat"
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
        "sentence": "I have an animal friend.",
        "chinese": "我有一个动物朋友。",
        "options": [
          {
            "text": "我有一个动物朋友。",
            "value": "correct"
          },
          {
            "text": "它是一只兔子吗？",
            "value": "wrong1"
          },
          {
            "text": "请猜猜！",
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
        "sentence": "Please guess!",
        "chinese": "请猜猜！",
        "options": [
          {
            "text": "不，不是。",
            "value": "wrong1"
          },
          {
            "text": "请猜猜！",
            "value": "correct"
          },
          {
            "text": "我是什么？",
            "value": "wrong2"
          },
          {
            "text": "我有一个动物朋友。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a rabbit?",
        "chinese": "它是一只兔子吗？",
        "options": [
          {
            "text": "它是一只猫吗？",
            "value": "wrong1"
          },
          {
            "text": "不，不是。",
            "value": "wrong2"
          },
          {
            "text": "它是一只兔子吗？",
            "value": "correct"
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
        "sentence": "Yes, it is.",
        "chinese": "是的，它是。",
        "options": [
          {
            "text": "不，不是。",
            "value": "wrong1"
          },
          {
            "text": "是的，它是。",
            "value": "correct"
          },
          {
            "text": "请猜猜！",
            "value": "wrong2"
          },
          {
            "text": "我是什么？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a cat?",
        "chinese": "它是一只猫吗？",
        "options": [
          {
            "text": "它是一只猫吗？",
            "value": "correct"
          },
          {
            "text": "它是一只兔子吗？",
            "value": "wrong1"
          },
          {
            "text": "它是一只老虎吗？",
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
        "sentence": "No, it isn't. It's a tiger!",
        "chinese": "不，不是。它是一只老虎！",
        "options": [
          {
            "text": "是的，它是。它是一只兔子。",
            "value": "wrong1"
          },
          {
            "text": "不，不是。它是一只猫。",
            "value": "wrong2"
          },
          {
            "text": "不，不是。它是一只老虎！",
            "value": "correct"
          },
          {
            "text": "我有一个动物朋友。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I am white. I can jump.",
        "chinese": "我是白色的。我会跳。",
        "options": [
          {
            "text": "我是黑黄色的。我跑得很快。",
            "value": "wrong1"
          },
          {
            "text": "我是白色的。我会跳。",
            "value": "correct"
          },
          {
            "text": "我的嘴巴很大。我喜欢肉。",
            "value": "wrong2"
          },
          {
            "text": "我有两只长耳朵。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "My mouth is small.",
        "chinese": "我的嘴巴很小。",
        "options": [
          {
            "text": "我的嘴巴很大。",
            "value": "wrong1"
          },
          {
            "text": "我喜欢肉。",
            "value": "wrong2"
          },
          {
            "text": "我的嘴巴很小。",
            "value": "correct"
          },
          {
            "text": "我会跳。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I have two long ears.",
        "chinese": "我有两只长耳朵。",
        "options": [
          {
            "text": "我有两只长耳朵。",
            "value": "correct"
          },
          {
            "text": "我的嘴巴很小。",
            "value": "wrong1"
          },
          {
            "text": "我喜欢胡萝卜。",
            "value": "wrong2"
          },
          {
            "text": "我是白色的。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I like carrots.",
        "chinese": "我喜欢胡萝卜。",
        "options": [
          {
            "text": "我喜欢肉。",
            "value": "wrong1"
          },
          {
            "text": "我会跳。",
            "value": "wrong2"
          },
          {
            "text": "我喜欢胡萝卜。",
            "value": "correct"
          },
          {
            "text": "我是什么？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What am I?",
        "chinese": "我是什么？",
        "options": [
          {
            "text": "请猜猜！",
            "value": "wrong1"
          },
          {
            "text": "我是什么？",
            "value": "correct"
          },
          {
            "text": "它是一只兔子吗？",
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
        "sentence": "I am black and yellow. I can run fast.",
        "chinese": "我是黑黄色的。我跑得很快。",
        "options": [
          {
            "text": "我是白色的。我会跳。",
            "value": "wrong1"
          },
          {
            "text": "我的嘴巴很小。我喜欢胡萝卜。",
            "value": "wrong2"
          },
          {
            "text": "我是黑黄色的。我跑得很快。",
            "value": "correct"
          },
          {
            "text": "我有两只长耳朵。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "My mouth is big. I like meat.",
        "chinese": "我的嘴巴很大。我喜欢肉。",
        "options": [
          {
            "text": "我的嘴巴很大。我喜欢肉。",
            "value": "correct"
          },
          {
            "text": "我的嘴巴很小。我喜欢胡萝卜。",
            "value": "wrong1"
          },
          {
            "text": "我是白色的。我会跳。",
            "value": "wrong2"
          },
          {
            "text": "我有两只长耳朵。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你的动物朋友是白色的、会跳、有长耳朵，它是什么？",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's a tiger!",
            "value": "wrong1"
          },
          {
            "text": "It's a cat!",
            "value": "wrong2"
          },
          {
            "text": "It's a rabbit!",
            "value": "correct"
          },
          {
            "text": "It's a bear!",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你的动物朋友是黑黄色的、跑得快、嘴巴大，它是什么？",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's a cat!",
            "value": "wrong1"
          },
          {
            "text": "It's a rabbit!",
            "value": "wrong2"
          },
          {
            "text": "It's a bear!",
            "value": "wrong3"
          },
          {
            "text": "It's a tiger!",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人问你那个动物是不是猫，但它不是，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Yes, it is.",
            "value": "wrong1"
          },
          {
            "text": "No, it isn't.",
            "value": "correct"
          },
          {
            "text": "Please guess!",
            "value": "wrong2"
          },
          {
            "text": "I have an animal friend.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人问你那个动物是不是兔子，它确实是，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "No, it isn't.",
            "value": "wrong1"
          },
          {
            "text": "Please guess!",
            "value": "wrong2"
          },
          {
            "text": "Yes, it is.",
            "value": "correct"
          },
          {
            "text": "It's a tiger!",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "I can jump. My mouth is small. I like carrots.",
        "context": "你在玩猜动物游戏。读这些线索猜猜是什么动物。",
        "question": "这是什么动物？",
        "options": [
          {
            "text": "兔子",
            "value": "correct"
          },
          {
            "text": "老虎",
            "value": "w1"
          },
          {
            "text": "熊",
            "value": "w2"
          },
          {
            "text": "鸟",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "我会跳。我嘴巴小。我喜欢吃胡萝卜。"
      },
      {
        "type": "scenario",
        "sentence": "I can run fast. My mouth is big. I like meat.",
        "context": "又一个线索！",
        "question": "这是什么动物？",
        "options": [
          {
            "text": "老虎",
            "value": "correct"
          },
          {
            "text": "兔子",
            "value": "w1"
          },
          {
            "text": "熊猫",
            "value": "w2"
          },
          {
            "text": "鸭子",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "我跑得快。我嘴巴大。我喜欢吃肉。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "I have an animal friend.",
          "Please guess!",
          "Is it a rabbit?"
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "我有一个动物朋友。 / 请猜猜！ / 它是兔子吗？"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "I can jump.",
          "My mouth is small.",
          "I like carrots."
        ],
        "chinese": "把描述排好顺序！",
        "chineseHint": "我会跳。 / 我嘴巴小。 / 我喜欢胡萝卜。"
      },
      {
        "type": "word_match",
        "word": "monkey",
        "options": [
          {
            "text": "<img src=\"assets/images/monkey.png\" width=\"80\">",
            "value": "monkey"
          },
          {
            "text": "<img src=\"assets/images/tiger.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "monkey",
        "chinese": "monkey"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "老虎的首字母是？",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": [
          "l",
          "t",
          "d",
          "g"
        ],
        "correct": 1,
        "chinese": "老虎",
        "word": "老虎"
      },
      {
        "type": "pinyin_fill",
        "hint": "t_ger",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": [
          "i",
          "a",
          "o",
          "e"
        ],
        "correct": 0,
        "chinese": "老虎"
      },
      {
        "type": "pinyin_fill",
        "hint": "rab_it",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": [
          "a",
          "i",
          "b",
          "e"
        ],
        "correct": 2,
        "chinese": "兔子"
      },
      {
        "type": "fill_blank",
        "prompt": "Is it a _____? Yes, it is.",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": [
          "tiger",
          "rabbit",
          "cat",
          "bear"
        ],
        "correct": 1,
        "chinese": "它是一只兔子吗？是的，它是。"
      },
      {
        "type": "word_puzzle",
        "hint": "j_mp",
        "word": "jump",
        "options": [
          "c",
          "v",
          "t",
          "u"
        ],
        "correct": 3,
        "chinese": "jump"
      },
      {
        "type": "word_puzzle",
        "hint": "m_uth",
        "word": "mouth",
        "options": [
          "o",
          "e",
          "n",
          "k"
        ],
        "correct": 0,
        "chinese": "mouth"
      },
      {
        "type": "word_puzzle",
        "hint": "m_at",
        "word": "meat",
        "options": [
          "e",
          "f",
          "h",
          "l"
        ],
        "correct": 0,
        "chinese": "meat"
      },
      {
        "type": "fill_blank",
        "prompt": "Is it a _____?",
        "options": [
          "mouth",
          "jump",
          "rabbit",
          "meat"
        ],
        "correct": 2,
        "chinese": "Is it a rabbit?"
      },
      {
        "type": "fill_blank",
        "prompt": "It's a _____!",
        "options": [
          "jump",
          "meat",
          "tiger",
          "mouth"
        ],
        "correct": 2,
        "chinese": "It's a tiger!"
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "我有一个动物朋友。",
        "words": [
          "I",
          "have",
          "an",
          "animal",
          "friend"
        ],
        "scrambled": [
          "animal",
          "I",
          "friend",
          "have",
          "an"
        ],
        "chineseWords": [
          "我",
          "有",
          "一个",
          "动物",
          "朋友"
        ],
        "chineseScrambled": [
          "动物",
          "朋友",
          "我",
          "一个",
          "有"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "请猜猜！",
        "words": [
          "Please",
          "guess"
        ],
        "scrambled": [
          "guess",
          "Please"
        ],
        "chineseWords": [
          "请",
          "猜猜"
        ],
        "chineseScrambled": [
          "猜猜",
          "请"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它是一只兔子吗？",
        "words": [
          "Is",
          "it",
          "a",
          "rabbit"
        ],
        "scrambled": [
          "rabbit",
          "Is",
          "a",
          "it"
        ],
        "chineseWords": [
          "它",
          "是",
          "一只",
          "兔子",
          "吗"
        ],
        "chineseScrambled": [
          "兔子",
          "吗",
          "它",
          "是",
          "一只"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "是的，它是。",
        "words": [
          "Yes",
          "it",
          "is"
        ],
        "scrambled": [
          "it",
          "Yes",
          "is"
        ],
        "chineseWords": [
          "是的",
          "它",
          "是"
        ],
        "chineseScrambled": [
          "它",
          "是",
          "是的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它是一只猫吗？",
        "words": [
          "Is",
          "it",
          "a",
          "cat"
        ],
        "scrambled": [
          "a",
          "cat",
          "Is",
          "it"
        ],
        "chineseWords": [
          "它",
          "是",
          "一只",
          "猫",
          "吗"
        ],
        "chineseScrambled": [
          "猫",
          "它",
          "吗",
          "一只",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "不，不是。它是一只老虎！",
        "words": [
          "No",
          "it",
          "isn't",
          "It's",
          "a",
          "tiger"
        ],
        "scrambled": [
          "It's",
          "No",
          "tiger",
          "it",
          "a",
          "isn't"
        ],
        "chineseWords": [
          "不",
          "不是",
          "它是",
          "一只",
          "老虎"
        ],
        "chineseScrambled": [
          "老虎",
          "不",
          "它是",
          "不是",
          "一只"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我是白色的。",
        "words": [
          "I",
          "am",
          "white"
        ],
        "scrambled": [
          "white",
          "I",
          "am"
        ],
        "chineseWords": [
          "我",
          "是",
          "白色的"
        ],
        "chineseScrambled": [
          "白色的",
          "我",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我会跳。",
        "words": [
          "I",
          "can",
          "jump"
        ],
        "scrambled": [
          "jump",
          "I",
          "can"
        ],
        "chineseWords": [
          "我",
          "会",
          "跳"
        ],
        "chineseScrambled": [
          "跳",
          "我",
          "会"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我的嘴巴很小。",
        "words": [
          "My",
          "mouth",
          "is",
          "small"
        ],
        "scrambled": [
          "is",
          "My",
          "small",
          "mouth"
        ],
        "chineseWords": [
          "我的",
          "嘴巴",
          "很小"
        ],
        "chineseScrambled": [
          "很小",
          "我的",
          "嘴巴"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我有两只长耳朵。",
        "words": [
          "I",
          "have",
          "two",
          "long",
          "ears"
        ],
        "scrambled": [
          "long",
          "I",
          "ears",
          "have",
          "two"
        ],
        "chineseWords": [
          "我",
          "有",
          "两只",
          "长",
          "耳朵"
        ],
        "chineseScrambled": [
          "耳朵",
          "两只",
          "我",
          "长",
          "有"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我喜欢胡萝卜。",
        "words": [
          "I",
          "like",
          "carrots"
        ],
        "scrambled": [
          "carrots",
          "I",
          "like"
        ],
        "chineseWords": [
          "我",
          "喜欢",
          "胡萝卜"
        ],
        "chineseScrambled": [
          "胡萝卜",
          "我",
          "喜欢"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我是什么？",
        "words": [
          "What",
          "am",
          "I"
        ],
        "scrambled": [
          "I",
          "What",
          "am"
        ],
        "chineseWords": [
          "什么",
          "是",
          "我"
        ],
        "chineseScrambled": [
          "我",
          "什么",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我是黑黄色的。",
        "words": [
          "I",
          "am",
          "black",
          "and",
          "yellow"
        ],
        "scrambled": [
          "black",
          "I",
          "yellow",
          "am",
          "and"
        ],
        "chineseWords": [
          "我",
          "是",
          "黑",
          "和",
          "黄色的"
        ],
        "chineseScrambled": [
          "黄色的",
          "我",
          "和",
          "黑",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我的嘴巴很大。",
        "words": [
          "My",
          "mouth",
          "is",
          "big"
        ],
        "scrambled": [
          "big",
          "mouth",
          "My",
          "is"
        ],
        "chineseWords": [
          "我的",
          "嘴巴",
          "很大"
        ],
        "chineseScrambled": [
          "嘴巴",
          "很大",
          "我的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我喜欢肉。",
        "words": [
          "I",
          "like",
          "meat"
        ],
        "scrambled": [
          "meat",
          "I",
          "like"
        ],
        "chineseWords": [
          "我",
          "喜欢",
          "肉"
        ],
        "chineseScrambled": [
          "肉",
          "我",
          "喜欢"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我跑得很快。",
        "words": [
          "I",
          "can",
          "run",
          "fast"
        ],
        "scrambled": [
          "run",
          "I",
          "fast",
          "can"
        ],
        "chineseWords": [
          "我",
          "跑得",
          "很快"
        ],
        "chineseScrambled": [
          "很快",
          "我",
          "跑得"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "Is it a _____? Yes, it is.",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": [
          "tiger",
          "rabbit",
          "cat",
          "bear"
        ],
        "correct": 1,
        "chinese": "它是一只兔子吗？是的，它是。"
      },
      {
        "type": "fill_blank",
        "prompt": "No, it isn't. It's a _____!",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": [
          "rabbit",
          "cat",
          "tiger",
          "dog"
        ],
        "correct": 2,
        "chinese": "不，不是。它是一只老虎！"
      },
      {
        "type": "fill_blank",
        "prompt": "My _____ is small. I have two long ears.",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": [
          "nose",
          "mouth",
          "eye",
          "ear"
        ],
        "correct": 1,
        "chinese": "我的嘴巴很小。我有两只长耳朵。"
      },
      {
        "type": "fill_blank",
        "prompt": "I am black and yellow. I like _____.",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": [
          "carrots",
          "grass",
          "meat",
          "fish"
        ],
        "correct": 2,
        "chinese": "我是黑黄色的。我喜欢肉。"
      },
      {
        "type": "fill_blank",
        "prompt": "I am white. I can _____.",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": [
          "run",
          "jump",
          "fly",
          "swim"
        ],
        "correct": 1,
        "chinese": "我是白色的。我会跳。"
      }
    ]
  },
  "speaking": {
    "pretest": [
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
        "type": "repeat_word",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "word": "cat",
        "chinese": "猫",
        "expected": "cat"
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
        "image": "<img src=\"assets/images/panda.png\" width=\"80\">",
        "word": "panda",
        "chinese": "熊猫",
        "expected": "panda"
      },
      {
        "type": "speak_select",
        "audio": "tiger",
        "options": [
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "老虎"
      },
      {
        "type": "speak_select",
        "audio": "rabbit",
        "options": [
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "兔子"
      },
      {
        "type": "repeat_sentence",
        "word": "I have an animal friend.",
        "chinese": "我有一个动物朋友。",
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
        "word": "It's a tiger!",
        "chinese": "它是一只老虎！",
        "expected": "It's a tiger!"
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "I have an animal friend.",
        "chinese": "我有一个动物朋友。",
        "expected": "I have an animal friend."
      },
      {
        "type": "repeat_sentence",
        "word": "Please guess!",
        "chinese": "请猜猜！",
        "expected": "Please guess!"
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "word": "Is it a rabbit?",
        "chinese": "它是一只兔子吗？",
        "expected": "Is it a rabbit?"
      },
      {
        "type": "repeat_sentence",
        "word": "Yes, it is.",
        "chinese": "是的，它是。",
        "expected": "Yes, it is."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "word": "Is it a cat?",
        "chinese": "它是一只猫吗？",
        "expected": "Is it a cat?"
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "word": "No, it isn't. It's a tiger!",
        "chinese": "不，不是。它是一只老虎！",
        "expected": "No, it isn't. It's a tiger!"
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "word": "I am white. I can jump.",
        "chinese": "我是白色的。我会跳。",
        "expected": "I am white. I can jump."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "word": "My mouth is small.",
        "chinese": "我的嘴巴很小。",
        "expected": "My mouth is small."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "word": "I have two long ears.",
        "chinese": "我有两只长耳朵。",
        "expected": "I have two long ears."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "word": "I like carrots.",
        "chinese": "我喜欢胡萝卜。",
        "expected": "I like carrots."
      },
      {
        "type": "repeat_sentence",
        "word": "What am I?",
        "chinese": "我是什么？",
        "expected": "What am I?"
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "word": "I am black and yellow.",
        "chinese": "我是黑黄色的。",
        "expected": "I am black and yellow."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "word": "I can run fast.",
        "chinese": "我跑得很快。",
        "expected": "I can run fast."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "word": "My mouth is big. I like meat.",
        "chinese": "我的嘴巴很大。我喜欢肉。",
        "expected": "My mouth is big. I like meat."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "word": "I can run fast. My mouth is big.",
        "chinese": "我跑得很快。我的嘴巴很大。",
        "expected": "I can run fast. My mouth is big."
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
        "type": "repeat_word",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "word": "cat",
        "chinese": "猫",
        "expected": "cat"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "word": "monkey",
        "chinese": "猴子",
        "expected": "monkey"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/duck.png\" width=\"80\">",
        "word": "duck",
        "chinese": "鸭子",
        "expected": "duck"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "word": "tiger",
        "chinese": "tiger"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "word": "rabbit",
        "chinese": "rabbit"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/monkey.png\" width=\"80\">",
        "word": "monkey",
        "chinese": "monkey"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/duck.png\" width=\"80\">",
        "word": "duck",
        "chinese": "duck"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "word": "cat",
        "chinese": "cat"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bird.png\" width=\"80\">",
        "word": "bird",
        "chinese": "bird"
      }
    ]
  }
};
