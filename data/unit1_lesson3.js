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
        "audio": "jump",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "跳"
      },
      {
        "type": "listen_tf",
        "audio": "tiger",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "correct": true,
        "chinese": "老虎"
      },
      {
        "type": "listen_select",
        "audio": "rabbit",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "兔子"
      },
      {
        "type": "listen_select",
        "audio": "I have an animal friend. Please guess!",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "我有一个动物朋友。请猜猜！"
      },
      {
        "type": "listen_tf",
        "audio": "mouth",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "correct": true,
        "chinese": "嘴巴"
      },
      {
        "type": "listen_select",
        "audio": "meat",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "肉"
      },
      {
        "type": "listen_tf",
        "audio": "no",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "correct": false,
        "chinese": "不"
      },
      {
        "type": "listen_select",
        "audio": "Is it a rabbit? Yes, it is.",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "它是一只兔子吗？是的，它是。"
      },
      {
        "type": "listen_select",
        "audio": "carrot",
        "options": [
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "胡萝卜"
      },
      {
        "type": "listen_tf",
        "audio": "tiger",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "correct": false,
        "chinese": "老虎"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "jump",
        "options": [
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "跳"
      },
      {
        "type": "listen_select",
        "audio": "mouth",
        "options": [
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "嘴巴"
      },
      {
        "type": "listen_tf",
        "audio": "meat",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "correct": true,
        "chinese": "肉"
      },
      {
        "type": "listen_select",
        "audio": "tiger",
        "options": [
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/monkey.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "老虎"
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
        "audio": "carrot",
        "options": [
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "胡萝卜"
      },
      {
        "type": "listen_select",
        "audio": "no",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "不"
      },
      {
        "type": "listen_select",
        "audio": "I have an animal friend. Please guess!",
        "options": [
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "我有一个动物朋友。请猜猜！"
      },
      {
        "type": "listen_select",
        "audio": "Is it a rabbit? Yes, it is.",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "它是一只兔子吗？是的，它是。"
      },
      {
        "type": "listen_select",
        "audio": "Is it a cat? No, it isn't. It's a tiger!",
        "options": [
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "它是一只猫吗？不，不是。它是一只老虎！"
      },
      {
        "type": "listen_select",
        "audio": "It can jump. I am white. I can jump. My mouth is small.",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "它会跳。我是白色的。我会跳。我的嘴巴很小。"
      },
      {
        "type": "listen_select",
        "audio": "I have two long ears. I like carrots. What am I?",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "我有两只长耳朵。我喜欢胡萝卜。我是什么？"
      },
      {
        "type": "listen_tf",
        "audio": "tiger",
        "image": "<img src=\"assets/images/bear.png\" width=\"80\">",
        "correct": false,
        "chinese": "老虎"
      },
      {
        "type": "listen_tf",
        "audio": "jump",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": true,
        "chinese": "跳"
      },
      {
        "type": "listen_tf",
        "audio": "mouth",
        "image": "<img src=\"assets/images/duck.png\" width=\"80\">",
        "correct": false,
        "chinese": "嘴巴"
      },
      {
        "type": "listen_tf",
        "audio": "meat",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": false,
        "chinese": "肉"
      },
      {
        "type": "listen_select",
        "audio": "My mouth is small.",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "我的嘴巴很小。"
      },
      {
        "type": "listen_select",
        "audio": "I like carrots.",
        "options": [
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "我喜欢胡萝卜。"
      },
      {
        "type": "listen_select",
        "audio": "It can jump.",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "它会跳。"
      },
      {
        "type": "listen_tf",
        "audio": "carrot",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": true,
        "chinese": "胡萝卜"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "sentence_match",
        "sentence": "I have an animal friend.",
        "chinese": "我有一个动物朋友。",
        "options": [
          {"text": "我有一个动物朋友。", "value": "correct"},
          {"text": "我有一个玩具。", "value": "wrong1"},
          {"text": "我有一本书。", "value": "wrong2"},
          {"text": "我有一个苹果。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a rabbit?",
        "chinese": "它是兔子吗？",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/dog.png\" width=\"80\">", "value": "dog"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a cat?",
        "chinese": "它是猫吗？",
        "options": [
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "cat"
      },
      {
        "type": "sentence_match",
        "sentence": "It's a tiger!",
        "chinese": "它是一只老虎！",
        "options": [
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/lion.png\" width=\"80\">", "value": "lion"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "tiger"
      },
      {
        "type": "sentence_match",
        "sentence": "It can jump.",
        "chinese": "它会跳。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/elephant.png\" width=\"80\">", "value": "elephant"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "I am white. I can jump.",
        "chinese": "我是白色的。我会跳。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "I have two long ears.",
        "chinese": "我有两只长耳朵。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/mouse.png\" width=\"80\">", "value": "mouse"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "I like carrots.",
        "chinese": "我喜欢胡萝卜。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "Yes, it is.",
        "chinese": "是的。",
        "options": [
          {"text": "是的。", "value": "correct"},
          {"text": "不是。", "value": "wrong1"},
          {"text": "我不知道。", "value": "wrong2"},
          {"text": "好的。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What am I?",
        "chinese": "我是什么？",
        "options": [
          {"text": "我是什么？", "value": "correct"},
          {"text": "你是谁？", "value": "wrong1"},
          {"text": "这是什么？", "value": "wrong2"},
          {"text": "它在哪里？", "value": "wrong3"}
        ],
        "correct": "correct"
      }
    ],
    "practice": [
      {
        "type": "sentence_match",
        "sentence": "I have an animal friend.",
        "chinese": "我有一个动物朋友。",
        "options": [
          {"text": "我有一个动物朋友。", "value": "correct"},
          {"text": "我有一个好朋友。", "value": "wrong1"},
          {"text": "我有一只小猫。", "value": "wrong2"},
          {"text": "我有一本故事书。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Please guess!",
        "chinese": "请猜一猜！",
        "options": [
          {"text": "请猜一猜！", "value": "correct"},
          {"text": "请看一看！", "value": "wrong1"},
          {"text": "请听一听！", "value": "wrong2"},
          {"text": "请说一说！", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a rabbit?",
        "chinese": "它是兔子吗？",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/dog.png\" width=\"80\">", "value": "dog"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "Yes, it is.",
        "chinese": "是的。",
        "options": [
          {"text": "是的。", "value": "correct"},
          {"text": "不是。", "value": "wrong1"},
          {"text": "我不知道。", "value": "wrong2"},
          {"text": "也许吧。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it a cat?",
        "chinese": "它是猫吗？",
        "options": [
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "cat"
      },
      {
        "type": "sentence_match",
        "sentence": "No, it isn't.",
        "chinese": "不是。",
        "options": [
          {"text": "不是。", "value": "correct"},
          {"text": "是的。", "value": "wrong1"},
          {"text": "好的。", "value": "wrong2"},
          {"text": "谢谢。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's a tiger!",
        "chinese": "它是一只老虎！",
        "options": [
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/lion.png\" width=\"80\">", "value": "lion"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "tiger"
      },
      {
        "type": "sentence_match",
        "sentence": "It can jump.",
        "chinese": "它会跳。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/elephant.png\" width=\"80\">", "value": "elephant"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "I am white. I can jump.",
        "chinese": "我是白色的。我会跳。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "My mouth is small.",
        "chinese": "我的嘴巴很小。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/lion.png\" width=\"80\">", "value": "lion"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/elephant.png\" width=\"80\">", "value": "elephant"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "I have two long ears.",
        "chinese": "我有两只长耳朵。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/mouse.png\" width=\"80\">", "value": "mouse"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "I like carrots.",
        "chinese": "我喜欢胡萝卜。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "What am I?",
        "chinese": "我是什么？",
        "options": [
          {"text": "我是什么？", "value": "correct"},
          {"text": "你是谁？", "value": "wrong1"},
          {"text": "这是什么？", "value": "wrong2"},
          {"text": "那是谁？", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "word_match",
        "word": "tiger",
        "sentence": "It's a tiger!",
        "chinese": "它是一只老虎！",
        "options": [
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/lion.png\" width=\"80\">", "value": "lion"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "tiger"
      },
      {
        "type": "word_match",
        "word": "rabbit",
        "sentence": "Is it a rabbit?",
        "chinese": "它是兔子吗？",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/mouse.png\" width=\"80\">", "value": "mouse"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "word_match",
        "word": "cat",
        "sentence": "Is it a cat?",
        "chinese": "它是猫吗？",
        "options": [
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/dog.png\" width=\"80\">", "value": "dog"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/bird.png\" width=\"80\">", "value": "bird"}
        ],
        "correct": "cat"
      },
      {
        "type": "sentence_match",
        "sentence": "My mouth is small.",
        "chinese": "我的嘴巴很小。",
        "options": [
          {"text": "我的嘴巴很小。", "value": "correct"},
          {"text": "我的嘴巴很大。", "value": "wrong1"},
          {"text": "我的耳朵很小。", "value": "wrong2"},
          {"text": "我的眼睛很小。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I have two long ears.",
        "chinese": "我有两只长耳朵。",
        "options": [
          {"text": "我有两只长耳朵。", "value": "correct"},
          {"text": "我有两只短耳朵。", "value": "wrong1"},
          {"text": "我有两只大眼睛。", "value": "wrong2"},
          {"text": "我有两条长腿。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I like carrots.",
        "chinese": "我喜欢胡萝卜。",
        "options": [
          {"text": "我喜欢胡萝卜。", "value": "correct"},
          {"text": "我喜欢吃草。", "value": "wrong1"},
          {"text": "我喜欢吃鱼。", "value": "wrong2"},
          {"text": "我喜欢吃肉。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I am white. I can jump.",
        "chinese": "我是白色的。我会跳。",
        "options": [
          {"text": "我是白色的。我会跳。", "value": "correct"},
          {"text": "我是黑色的。我会飞。", "value": "wrong1"},
          {"text": "我是棕色的。我会跑。", "value": "wrong2"},
          {"text": "我是红色的。我会游。", "value": "wrong3"}
        ],
        "correct": "correct"
      }
    ]
  },

  "writing": {
    "pretest": [
      {
        "type": "sentence_order",
        "chinese": "我有一个动物朋友。",
        "words": ["I", "have", "an", "animal", "friend"],
        "scrambled": ["animal", "I", "friend", "have", "an"]
      },
      {
        "type": "sentence_order",
        "chinese": "它是一只兔子吗？",
        "words": ["Is", "it", "a", "rabbit"],
        "scrambled": ["rabbit", "Is", "a", "it"]
      },
      {
        "type": "fill_blank",
        "prompt": "Is it a _____? No, it isn't. It's a tiger!",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": ["cat", "rabbit", "tiger", "duck"],
        "correct": 2,
        "chinese": "它是一只猫吗？不，不是。它是一只老虎！"
      },
      {
        "type": "fill_blank",
        "prompt": "It can _____.",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": ["jump", "run", "draw", "fly"],
        "correct": 0,
        "chinese": "它会跳。"
      },
      {
        "type": "word_puzzle",
        "chinese": "老虎",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "letters": ["t", "i", "g", "e", "r"],
        "scrambled": ["g", "r", "t", "e", "i"]
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
        "prompt": "老虎的首字母是？",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": ["l", "t", "f", "j"],
        "correct": 1,
        "chinese": "老虎"
      },
      {
        "type": "letter_select",
        "prompt": "嘴巴的首字母是？",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": ["n", "w", "m", "r"],
        "correct": 2,
        "chinese": "嘴巴"
      },
      {
        "type": "pinyin_fill",
        "hint": "t_ger",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": ["i", "a", "o", "e"],
        "correct": 0,
        "chinese": "老虎"
      },
      {
        "type": "fill_blank",
        "prompt": "I have two long _____.",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": ["ears", "eyes", "legs", "mouths"],
        "correct": 0,
        "chinese": "我有两只长耳朵。"
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "我有一个动物朋友。",
        "words": ["I", "have", "an", "animal", "friend"],
        "scrambled": ["friend", "an", "I", "animal", "have"]
      },
      {
        "type": "sentence_order",
        "chinese": "请猜猜！",
        "words": ["Please", "guess"],
        "scrambled": ["guess", "Please"]
      },
      {
        "type": "sentence_order",
        "chinese": "它是一只兔子吗？",
        "words": ["Is", "it", "a", "rabbit"],
        "scrambled": ["a", "rabbit", "Is", "it"]
      },
      {
        "type": "sentence_order",
        "chinese": "是的，它是。",
        "words": ["Yes", "it", "is"],
        "scrambled": ["it", "Yes", "is"]
      },
      {
        "type": "sentence_order",
        "chinese": "它是一只猫吗？",
        "words": ["Is", "it", "a", "cat"],
        "scrambled": ["cat", "Is", "a", "it"]
      },
      {
        "type": "sentence_order",
        "chinese": "不，不是。",
        "words": ["No", "it", "isn't"],
        "scrambled": ["isn't", "No", "it"]
      },
      {
        "type": "sentence_order",
        "chinese": "它是一只老虎！",
        "words": ["It's", "a", "tiger"],
        "scrambled": ["tiger", "It's", "a"]
      },
      {
        "type": "sentence_order",
        "chinese": "它会跳。",
        "words": ["It", "can", "jump"],
        "scrambled": ["can", "jump", "It"]
      },
      {
        "type": "sentence_order",
        "chinese": "我的嘴巴很小。",
        "words": ["My", "mouth", "is", "small"],
        "scrambled": ["is", "My", "small", "mouth"]
      },
      {
        "type": "sentence_order",
        "chinese": "我有两只长耳朵。",
        "words": ["I", "have", "two", "long", "ears"],
        "scrambled": ["two", "I", "ears", "have", "long"]
      },
      {
        "type": "sentence_order",
        "chinese": "我喜欢胡萝卜。",
        "words": ["I", "like", "carrots"],
        "scrambled": ["carrots", "I", "like"]
      },
      {
        "type": "sentence_order",
        "chinese": "我是什么？",
        "words": ["What", "am", "I"],
        "scrambled": ["I", "What", "am"]
      },
      {
        "type": "fill_blank",
        "prompt": "I have an animal _____. Please guess!",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": ["friend", "baby", "meat", "mouth"],
        "correct": 0,
        "chinese": "我有一个动物朋友。请猜猜！"
      },
      {
        "type": "fill_blank",
        "prompt": "Is it a _____? Yes, it is.",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": ["tiger", "rabbit", "bear", "duck"],
        "correct": 1,
        "chinese": "它是一只兔子吗？是的，它是。"
      },
      {
        "type": "fill_blank",
        "prompt": "Is it a _____? No, it isn't.",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": ["cat", "rabbit", "tiger", "monkey"],
        "correct": 0,
        "chinese": "它是一只猫吗？不，不是。"
      },
      {
        "type": "fill_blank",
        "prompt": "It's a _____! It can jump.",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": ["bear", "tiger", "duck", "horse"],
        "correct": 1,
        "chinese": "它是一只老虎！它会跳。"
      },
      {
        "type": "fill_blank",
        "prompt": "My _____ is small.",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": ["mouth", "ear", "eye", "leg"],
        "correct": 0,
        "chinese": "我的嘴巴很小。"
      },
      {
        "type": "word_puzzle",
        "chinese": "老虎",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "letters": ["t", "i", "g", "e", "r"],
        "scrambled": ["e", "t", "r", "i", "g"]
      },
      {
        "type": "word_puzzle",
        "chinese": "跳",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "letters": ["j", "u", "m", "p"],
        "scrambled": ["u", "j", "p", "m"]
      },
      {
        "type": "word_puzzle",
        "chinese": "嘴巴",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "letters": ["m", "o", "u", "t", "h"],
        "scrambled": ["u", "h", "m", "t", "o"]
      },
      {
        "type": "word_puzzle",
        "chinese": "肉",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "letters": ["m", "e", "a", "t"],
        "scrambled": ["a", "t", "m", "e"]
      },
      {
        "type": "letter_select",
        "prompt": "跳(jump)的首字母是？",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": ["g", "j", "y", "p"],
        "correct": 1,
        "chinese": "跳"
      },
      {
        "type": "letter_select",
        "prompt": "兔子的首字母是？",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": ["r", "n", "l", "t"],
        "correct": 0,
        "chinese": "兔子"
      },
      {
        "type": "pinyin_fill",
        "hint": "j_mp",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "options": ["u", "a", "o", "i"],
        "correct": 0,
        "chinese": "跳"
      },
      {
        "type": "pinyin_fill",
        "hint": "m_uth",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "options": ["o", "a", "e", "i"],
        "correct": 0,
        "chinese": "嘴巴"
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
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
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "word": "tiger",
        "chinese": "老虎",
        "expected": "tiger"
      },
      {
        "type": "repeat_word",
        "word": "no",
        "chinese": "不",
        "expected": "no"
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
        "word": "carrot",
        "chinese": "胡萝卜",
        "expected": "carrot"
      },
      {
        "type": "repeat_sentence",
        "word": "I have an animal friend.",
        "chinese": "我有一个动物朋友。",
        "expected": "I have an animal friend."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "word": "Is it a rabbit?",
        "chinese": "它是兔子吗？",
        "expected": "Is it a rabbit?"
      },
      {
        "type": "repeat_sentence",
        "word": "Yes, it is.",
        "chinese": "是的。",
        "expected": "Yes, it is."
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
        "chinese": "它是兔子吗？",
        "expected": "Is it a rabbit?"
      },
      {
        "type": "repeat_sentence",
        "word": "Yes, it is.",
        "chinese": "是的。",
        "expected": "Yes, it is."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "word": "Is it a cat?",
        "chinese": "它是猫吗？",
        "expected": "Is it a cat?"
      },
      {
        "type": "repeat_sentence",
        "word": "No, it isn't.",
        "chinese": "不，不是。",
        "expected": "No, it isn't."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "word": "It's a tiger!",
        "chinese": "是老虎！",
        "expected": "It's a tiger!"
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "word": "It can jump.",
        "chinese": "它会跳。",
        "expected": "It can jump."
      },
      {
        "type": "repeat_sentence",
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
        "type": "repeat_word",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
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
        "type": "repeat_word",
        "word": "carrot",
        "chinese": "胡萝卜",
        "expected": "carrot"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/tiger.png\" width=\"120\">",
        "expected": "tiger",
        "word": "tiger",
        "chinese": "老虎"
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
        "image": "<img src=\"assets/images/cat.png\" width=\"120\">",
        "expected": "cat",
        "word": "cat",
        "chinese": "猫"
      }
    ]
  }
};
