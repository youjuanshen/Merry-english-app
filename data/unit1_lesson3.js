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
        "audio": "tiger",
        "options": [
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "老虎"
      },
      {
        "type": "listen_select",
        "audio": "rabbit",
        "options": [
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "兔子"
      },
      {
        "type": "listen_select",
        "audio": "carrot",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "胡萝卜（兔子爱吃胡萝卜）"
      },
      {
        "type": "listen_select",
        "audio": "I have an animal friend.",
        "options": ["我有一个动物朋友。", "请你猜猜！", "它会跳。", "它不是猫。"],
        "correct": 0,
        "chinese": "我有一个动物朋友。"
      },
      {
        "type": "listen_select",
        "audio": "No, it isn't.",
        "options": ["不，它不是。", "是的，它是。", "请你猜猜！", "我有一个动物朋友。"],
        "correct": 0,
        "chinese": "不，它不是。"
      },
      {
        "type": "listen_tf",
        "audio": "tiger",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是老虎，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "rabbit",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是兔子，这是猫。"
      },
      {
        "type": "listen_select",
        "audio": "Is it a ___? No, it isn't. It's a tiger!",
        "options": ["rabbit", "cat", "bear", "horse"],
        "correct": 1,
        "chinese": "它是___吗？不，它不是。它是老虎！(猫)"
      },
      {
        "type": "listen_select",
        "audio": "It can ___. I like carrots.",
        "options": ["run", "jump", "fly", "swim"],
        "correct": 1,
        "chinese": "它会___。我喜欢胡萝卜。(跳)"
      },
      {
        "type": "listen_select",
        "audio": "Your friend says: I have an animal friend. Please guess! What do you ask?",
        "options": ["Is it a rabbit?", "It can jump.", "I like carrots.", "My mouth is small."],
        "correct": 0,
        "chinese": "你的朋友说：我有一个动物朋友，请你猜猜！你会怎么问？"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "mouth",
        "options": [
          "<img src=\"assets/images/cat.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "嘴巴（兔子嘴巴小）"
      },
      {
        "type": "listen_select",
        "audio": "jump",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/horse.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "跳（兔子会跳）"
      },
      {
        "type": "listen_select",
        "audio": "meat",
        "options": [
          "<img src=\"assets/images/rabbit.png\" width=\"80\">",
          "<img src=\"assets/images/tiger.png\" width=\"80\">",
          "<img src=\"assets/images/panda.png\" width=\"80\">",
          "<img src=\"assets/images/bird.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "肉（老虎吃肉）"
      },
      {
        "type": "listen_select",
        "audio": "no",
        "options": [
          "<img src=\"assets/images/monkey.png\" width=\"80\">",
          "<img src=\"assets/images/duck.png\" width=\"80\">",
          "<img src=\"assets/images/bear.png\" width=\"80\">",
          "<img src=\"assets/images/cat.png\" width=\"80\">"
        ],
        "correct": 3,
        "chinese": "不（不，它不是猫。）"
      },
      {
        "type": "listen_select",
        "audio": "It can jump.",
        "options": ["它会跳。", "它会跑。", "我的嘴巴小。", "我有两只长耳朵。"],
        "correct": 0,
        "chinese": "它会跳。"
      },
      {
        "type": "listen_select",
        "audio": "My mouth is small.",
        "options": ["我有两只长耳朵。", "我的嘴巴小。", "我喜欢胡萝卜。", "它会跳。"],
        "correct": 1,
        "chinese": "我的嘴巴小。"
      },
      {
        "type": "listen_select",
        "audio": "I have two long ears.",
        "options": ["我喜欢胡萝卜。", "它会跳。", "我有两只长耳朵。", "我的嘴巴小。"],
        "correct": 2,
        "chinese": "我有两只长耳朵。"
      },
      {
        "type": "listen_select",
        "audio": "I like carrots.",
        "options": ["我喜欢胡萝卜。", "我的嘴巴小。", "它会跳。", "我有两只长耳朵。"],
        "correct": 0,
        "chinese": "我喜欢胡萝卜。"
      },
      {
        "type": "listen_select",
        "audio": "My ___ is small. I have two long ears.",
        "options": ["eye", "nose", "mouth", "leg"],
        "correct": 2,
        "chinese": "我的___小。我有两只长耳朵。(嘴巴)"
      },
      {
        "type": "listen_select",
        "audio": "I like ___. What am I?",
        "options": ["grass", "meat", "carrots", "fish"],
        "correct": 2,
        "chinese": "我喜欢___。我是什么？(胡萝卜——兔子)"
      },
      {
        "type": "listen_select",
        "audio": "It can jump. I have two long ___.",
        "options": ["legs", "eyes", "ears", "mouths"],
        "correct": 2,
        "chinese": "它会跳。我有两只长___。(耳朵)"
      },
      {
        "type": "listen_tf",
        "audio": "It can jump.",
        "image": "<img src=\"assets/images/rabbit.png\" width=\"80\">",
        "correct": true,
        "chinese": "兔子会跳，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "tiger",
        "image": "<img src=\"assets/images/cat.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是老虎，这是猫。"
      },
      {
        "type": "listen_tf",
        "audio": "I like carrots.",
        "image": "<img src=\"assets/images/tiger.png\" width=\"80\">",
        "correct": false,
        "chinese": "老虎不喜欢胡萝卜，老虎喜欢吃肉。"
      },
      {
        "type": "listen_select",
        "audio": "A says: Is it a rabbit? What does B say?",
        "options": ["Yes, it is.", "It can jump.", "My mouth is small.", "I like carrots."],
        "correct": 0,
        "chinese": "A问：它是兔子吗？B会说什么？"
      },
      {
        "type": "listen_select",
        "audio": "A says: Is it a cat? What does B say?",
        "options": ["Yes, it is.", "No, it isn't. It's a tiger!", "It can jump.", "My mouth is small."],
        "correct": 1,
        "chinese": "A问：它是猫吗？B会说什么？"
      },
      {
        "type": "listen_select",
        "audio": "A says: I have an animal friend. Please guess! What does B say?",
        "options": ["It's a tiger!", "I like carrots.", "Is it a rabbit?", "My mouth is small."],
        "correct": 2,
        "chinese": "A说：我有一个动物朋友，请你猜猜！B会说什么？"
      },
      {
        "type": "listen_select",
        "audio": "An animal has a small mouth, two long ears, and likes carrots. What is it?",
        "options": ["It's a tiger.", "It's a cat.", "It's a rabbit.", "It's a bear."],
        "correct": 2,
        "chinese": "一个动物嘴巴小，有两只长耳朵，喜欢胡萝卜。它是什么？"
      },
      {
        "type": "listen_select",
        "audio": "An animal can jump and likes meat. What is it?",
        "options": ["It's a rabbit.", "It's a tiger.", "It's a duck.", "It's a panda."],
        "correct": 1,
        "chinese": "一个动物会跳，喜欢吃肉。它是什么？"
      },
      {
        "type": "listen_select",
        "audio": "Your friend asks you to guess an animal. You want to know if it's a cat. What do you say?",
        "options": ["Is it a cat?", "It's a tiger!", "No, it isn't.", "I like carrots."],
        "correct": 0,
        "chinese": "你的朋友让你猜一个动物，你想知道它是不是猫，你会怎么说？"
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
        "type": "sentence_match",
        "sentence": "I have two long ears. I like carrots.",
        "chinese": "我有两只长耳朵。我喜欢胡萝卜。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "My mouth is small. It can jump.",
        "chinese": "我的嘴巴很小。它会跳。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/lion.png\" width=\"80\">", "value": "lion"},
          {"text": "<img src=\"assets/images/elephant.png\" width=\"80\">", "value": "elephant"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"}
        ],
        "correct": "rabbit"
      },
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
        "sentence": "What am I?",
        "chinese": "我是什么？",
        "options": [
          {"text": "我是什么？", "value": "correct"},
          {"text": "你是谁？", "value": "wrong1"},
          {"text": "这是什么？", "value": "wrong2"},
          {"text": "它在哪里？", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你有一个动物朋友，你想让别人猜猜是什么，你会说：",
        "chinese": "情景选择",
        "options": [
          {"text": "I have an animal friend. Please guess!", "value": "correct"},
          {"text": "It's a tiger!", "value": "wrong1"},
          {"text": "It can jump.", "value": "wrong2"},
          {"text": "I like carrots.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人问你是不是兔子，确实是，你会回答：",
        "chinese": "情景选择",
        "options": [
          {"text": "Yes, it is.", "value": "correct"},
          {"text": "No, it isn't.", "value": "wrong1"},
          {"text": "It's a tiger!", "value": "wrong2"},
          {"text": "Please guess!", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: I have an animal friend. Please guess!\nB: ______",
        "chinese": "A说我有一个动物朋友请猜猜，B应该怎么猜？",
        "options": [
          {"text": "Is it a rabbit?", "value": "correct"},
          {"text": "It can jump.", "value": "wrong1"},
          {"text": "I like carrots.", "value": "wrong2"},
          {"text": "What am I?", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: Is it a cat?\nB: ______",
        "chinese": "A问是猫吗，实际上不是，B应该怎么回答？",
        "options": [
          {"text": "No, it isn't. It's a tiger!", "value": "correct"},
          {"text": "Yes, it is.", "value": "wrong1"},
          {"text": "I like carrots.", "value": "wrong2"},
          {"text": "Please guess!", "value": "wrong3"}
        ],
        "correct": "correct"
      }
    ],
    "practice": [
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
        "type": "word_match",
        "word": "tiger",
        "sentence": "It's a tiger!",
        "chinese": "它是一只老虎！",
        "options": [
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/lion.png\" width=\"80\">", "value": "lion"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"}
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
          {"text": "<img src=\"assets/images/monkey.png\" width=\"80\">", "value": "monkey"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "I have two long ears. My mouth is small.",
        "chinese": "我有两只长耳朵。我的嘴巴很小。",
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
        "sentence": "It can jump. I like carrots.",
        "chinese": "它会跳。我喜欢胡萝卜。",
        "options": [
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/horse.png\" width=\"80\">", "value": "horse"},
          {"text": "<img src=\"assets/images/duck.png\" width=\"80\">", "value": "duck"},
          {"text": "<img src=\"assets/images/panda.png\" width=\"80\">", "value": "panda"}
        ],
        "correct": "rabbit"
      },
      {
        "type": "sentence_match",
        "sentence": "It's a tiger! It can jump.",
        "chinese": "它是一只老虎！它会跳。",
        "options": [
          {"text": "<img src=\"assets/images/tiger.png\" width=\"80\">", "value": "tiger"},
          {"text": "<img src=\"assets/images/cat.png\" width=\"80\">", "value": "cat"},
          {"text": "<img src=\"assets/images/rabbit.png\" width=\"80\">", "value": "rabbit"},
          {"text": "<img src=\"assets/images/bear.png\" width=\"80\">", "value": "bear"}
        ],
        "correct": "tiger"
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
        "sentence": "你想让朋友猜你的动物朋友是什么，你会说：",
        "chinese": "情景选择",
        "options": [
          {"text": "I have an animal friend. Please guess!", "value": "correct"},
          {"text": "It's a tiger!", "value": "wrong1"},
          {"text": "I like carrots.", "value": "wrong2"},
          {"text": "What am I?", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人猜你的动物朋友是兔子，猜对了，你会说：",
        "chinese": "情景选择",
        "options": [
          {"text": "Yes, it is.", "value": "correct"},
          {"text": "No, it isn't.", "value": "wrong1"},
          {"text": "It's a tiger!", "value": "wrong2"},
          {"text": "Please guess!", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人猜错了，不是猫，你会说：",
        "chinese": "情景选择",
        "options": [
          {"text": "No, it isn't.", "value": "correct"},
          {"text": "Yes, it is.", "value": "wrong1"},
          {"text": "I like carrots.", "value": "wrong2"},
          {"text": "It can jump.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想描述一只有长耳朵、小嘴巴、喜欢胡萝卜的动物，你会说：",
        "chinese": "情景选择",
        "options": [
          {"text": "I have two long ears. My mouth is small. I like carrots.", "value": "correct"},
          {"text": "It's a tiger! It can jump.", "value": "wrong1"},
          {"text": "I have an animal friend.", "value": "wrong2"},
          {"text": "What am I?", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你在玩猜谜游戏，描述完动物特征后想问对方这是什么，你会说：",
        "chinese": "情景选择",
        "options": [
          {"text": "What am I?", "value": "correct"},
          {"text": "Please guess!", "value": "wrong1"},
          {"text": "Yes, it is.", "value": "wrong2"},
          {"text": "It can jump.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: I have an animal friend. It can jump.\nB: ______",
        "chinese": "A说我有一个动物朋友，它会跳，B应该怎么猜？",
        "options": [
          {"text": "Is it a rabbit?", "value": "correct"},
          {"text": "I like carrots.", "value": "wrong1"},
          {"text": "It's a tiger!", "value": "wrong2"},
          {"text": "What am I?", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: Is it a rabbit?\nB: ______\nA: Is it a cat?\nB: ______",
        "chinese": "A先猜兔子（对了），再猜猫（不对），B分别怎么回答？",
        "options": [
          {"text": "Yes, it is. / No, it isn't.", "value": "correct"},
          {"text": "No, it isn't. / Yes, it is.", "value": "wrong1"},
          {"text": "It can jump. / I like carrots.", "value": "wrong2"},
          {"text": "Please guess! / What am I?", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: Is it a cat?\nB: No, it isn't.\nA: What is it?\nB: ______",
        "chinese": "A猜是猫，B说不是，A问是什么，B应该说：",
        "options": [
          {"text": "It's a tiger!", "value": "correct"},
          {"text": "Yes, it is.", "value": "wrong1"},
          {"text": "Please guess!", "value": "wrong2"},
          {"text": "I like carrots.", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: I have two long ears. My mouth is small. I like carrots. What am I?\nB: ______",
        "chinese": "A描述了长耳朵、小嘴巴、喜欢胡萝卜，问我是什么，B应该说：",
        "options": [
          {"text": "You are a rabbit!", "value": "correct"},
          {"text": "You are a tiger!", "value": "wrong1"},
          {"text": "You are a cat!", "value": "wrong2"},
          {"text": "You are a horse!", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "A: It can jump.\nB: Is it a rabbit?\nA: ______",
        "chinese": "B猜是兔子，但A的动物朋友是老虎，A应该说：",
        "options": [
          {"text": "No, it isn't. It's a tiger!", "value": "correct"},
          {"text": "Yes, it is.", "value": "wrong1"},
          {"text": "I like carrots.", "value": "wrong2"},
          {"text": "My mouth is small.", "value": "wrong3"}
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
