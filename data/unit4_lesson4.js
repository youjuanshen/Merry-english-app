// Unit 4 Lesson 4: What's for dinner?
// Core vocab: dinner, rice, soup, chicken, fish, vegetable, Chinese food, delicious
var unit4_lesson4 = {
  "id": "U4L4",
  "title": "What's for dinner?",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "rice",
        "options": [
          "<img src=\"assets/images/rice.png\" width=\"80\">",
          "<img src=\"assets/images/soup.png\" width=\"80\">",
          "<img src=\"assets/images/chicken.png\" width=\"80\">",
          "<img src=\"assets/images/bread.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "米饭"
      },
      {
        "type": "listen_select",
        "audio": "soup",
        "options": [
          "<img src=\"assets/images/fish.png\" width=\"80\">",
          "<img src=\"assets/images/rice.png\" width=\"80\">",
          "<img src=\"assets/images/soup.png\" width=\"80\">",
          "<img src=\"assets/images/vegetable.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "汤"
      },
      {
        "type": "listen_select",
        "audio": "fish",
        "options": [
          "<img src=\"assets/images/chicken.png\" width=\"80\">",
          "<img src=\"assets/images/fish.png\" width=\"80\">",
          "<img src=\"assets/images/egg.png\" width=\"80\">",
          "<img src=\"assets/images/rice.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "鱼"
      },
      {
        "type": "listen_select",
        "audio": "What's for dinner today?",
        "options": [
          "今天晚饭吃什么？",
          "今天早饭吃什么？",
          "你想吃什么？",
          "你最喜欢的食物是什么？"
        ],
        "correct": 0,
        "chinese": "今天晚饭吃什么？"
      },
      {
        "type": "listen_select",
        "audio": "We have some rice, soup, chicken and fish.",
        "options": [
          "我们有米饭、汤、鸡肉和鱼。",
          "我们有牛奶、面包和鸡蛋。",
          "我们有汉堡和沙拉。",
          "我们有面条和鸡蛋。"
        ],
        "correct": 0,
        "chinese": "我们有米饭、汤、鸡肉和鱼。"
      },
      {
        "type": "listen_select",
        "audio": "Can we have some vegetables?",
        "options": [
          "我们能吃一些蔬菜吗？",
          "我们能喝一些汤吗？",
          "你想吃鸡肉吗？",
          "今天有鱼吗？"
        ],
        "correct": 0,
        "chinese": "我们能吃一些蔬菜吗？"
      },
      {
        "type": "listen_tf",
        "audio": "chicken",
        "image": "<img src=\"assets/images/chicken.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是鸡肉，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "fish",
        "image": "<img src=\"assets/images/chicken.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是鱼，这是鸡肉。"
      },
      {
        "type": "listen_select",
        "audio": "Chinese food! It's a big dinner!",
        "options": [
          "中国菜！这是一顿丰盛的晚餐！",
          "我喜欢吃中国菜。",
          "今天晚饭吃什么？",
          "我们有鸡肉和鱼。"
        ],
        "correct": 0,
        "chinese": "中国菜！这是一顿丰盛的晚餐！"
      },
      {
        "type": "listen_select",
        "audio": "Let me help you, Mom. That's great!",
        "options": [
          "妈妈，让我来帮你。太好了！",
          "谢谢你，妈妈。",
          "妈妈，今天晚饭吃什么？",
          "给你，妈妈。"
        ],
        "correct": 0,
        "chinese": "妈妈，让我来帮你。太好了！"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "chicken",
        "options": [
          "<img src=\"assets/images/fish.png\" width=\"80\">",
          "<img src=\"assets/images/rice.png\" width=\"80\">",
          "<img src=\"assets/images/chicken.png\" width=\"80\">",
          "<img src=\"assets/images/soup.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "鸡肉"
      },
      {
        "type": "listen_select",
        "audio": "vegetable",
        "options": [
          "<img src=\"assets/images/vegetable.png\" width=\"80\">",
          "<img src=\"assets/images/rice.png\" width=\"80\">",
          "<img src=\"assets/images/fish.png\" width=\"80\">",
          "<img src=\"assets/images/chicken.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "蔬菜"
      },
      {
        "type": "listen_select",
        "audio": "rice",
        "options": [
          "<img src=\"assets/images/soup.png\" width=\"80\">",
          "<img src=\"assets/images/rice.png\" width=\"80\">",
          "<img src=\"assets/images/bread.png\" width=\"80\">",
          "<img src=\"assets/images/noodle.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "米饭"
      },
      {
        "type": "listen_tf",
        "audio": "soup",
        "image": "<img src=\"assets/images/soup.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是汤，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "rice",
        "image": "<img src=\"assets/images/fish.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是米饭，这是鱼。"
      },
      {
        "type": "listen_tf",
        "audio": "vegetable",
        "image": "<img src=\"assets/images/vegetable.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是蔬菜，正确！"
      },
      {
        "type": "listen_select",
        "audio": "What's for dinner today?",
        "options": [
          "你想吃什么？",
          "今天晚饭吃什么？",
          "今天早饭吃什么？",
          "你最喜欢什么食物？"
        ],
        "correct": 1,
        "chinese": "今天晚饭吃什么？"
      },
      {
        "type": "listen_select",
        "audio": "We have some rice, soup, chicken and fish.",
        "options": [
          "我们有牛奶和面包。",
          "我们有面条和鸡蛋。",
          "我们有米饭、汤、鸡肉和鱼。",
          "我们有汉堡和沙拉。"
        ],
        "correct": 2,
        "chinese": "我们有米饭、汤、鸡肉和鱼。"
      },
      {
        "type": "listen_select",
        "audio": "Can we have some vegetables?",
        "options": [
          "我们能吃一些蔬菜吗？",
          "你想吃鸡肉吗？",
          "今天有鱼吗？",
          "我们能喝汤吗？"
        ],
        "correct": 0,
        "chinese": "我们能吃一些蔬菜吗？"
      },
      {
        "type": "listen_select",
        "audio": "Chinese food! It's a big dinner!",
        "options": [
          "中国菜！这是一顿丰盛的晚餐！",
          "我喜欢中国菜。",
          "中国菜很好吃。",
          "这是晚饭。"
        ],
        "correct": 0,
        "chinese": "中国菜！这是一顿丰盛的晚餐！"
      },
      {
        "type": "listen_select",
        "audio": "Fido, here you are.",
        "options": [
          "给你，Fido。",
          "过来，Fido。",
          "Fido，今天吃什么？",
          "Fido，你好。"
        ],
        "correct": 0,
        "chinese": "给你，Fido。"
      },
      {
        "type": "listen_select",
        "audio": "How about some Chinese food?",
        "options": [
          "来一些中国菜怎么样？",
          "你喜欢中国菜吗？",
          "中国菜好吃吗？",
          "今天吃什么？"
        ],
        "correct": 0,
        "chinese": "来一些中国菜怎么样？"
      },
      {
        "type": "listen_select",
        "audio": "Good idea. I like it!",
        "options": [
          "好主意。我喜欢！",
          "谢谢你。",
          "不客气。",
          "我也是。"
        ],
        "correct": 0,
        "chinese": "好主意。我喜欢！"
      },
      {
        "type": "listen_select",
        "audio": "Let me help you, Mom.",
        "options": [
          "妈妈，让我来帮你。",
          "谢谢你，妈妈。",
          "妈妈，今天吃什么？",
          "妈妈，我饿了。"
        ],
        "correct": 0,
        "chinese": "妈妈，让我来帮你。"
      },
      {
        "type": "listen_select",
        "audio": "That's great!",
        "options": [
          "太好了！",
          "谢谢！",
          "好主意！",
          "我喜欢！"
        ],
        "correct": 0,
        "chinese": "太好了！"
      },
      {
        "type": "listen_tf",
        "audio": "fish",
        "image": "<img src=\"assets/images/fish.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是鱼，正确！"
      },
      {
        "type": "listen_select",
        "audio": "We have rice and soup.",
        "options": [
          "我们有米饭和汤。",
          "我们有鸡肉和鱼。",
          "我们有面包和牛奶。",
          "我们有蔬菜和水果。"
        ],
        "correct": 0,
        "chinese": "我们有米饭和汤。"
      },
      {
        "type": "listen_select",
        "audio": "We have chicken and fish.",
        "options": [
          "我们有面条和鸡蛋。",
          "我们有米饭和汤。",
          "我们有鸡肉和鱼。",
          "我们有蔬菜和水果。"
        ],
        "correct": 2,
        "chinese": "我们有鸡肉和鱼。"
      },
      {
        "type": "listen_tf",
        "audio": "chicken",
        "image": "<img src=\"assets/images/fish.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是鸡肉，这是鱼。"
      },
      {
        "type": "listen_select",
        "audio": "How about some Chinese food? Good idea!",
        "options": [
          "来一些中国菜怎么样？好主意！",
          "你喜欢中国菜吗？是的。",
          "今天吃中国菜吗？好的。",
          "中国菜好吃吗？很好吃。"
        ],
        "correct": 0,
        "chinese": "来一些中国菜怎么样？好主意！"
      },
      {
        "type": "listen_sequence",
        "audio": "rice, soup, fish",
        "sequence": [
          "rice",
          "soup",
          "fish"
        ],
        "words": [
          "<img src=\"assets/images/fish.png\" width=\"60\">",
          "<img src=\"assets/images/rice.png\" width=\"60\">",
          "<img src=\"assets/images/soup.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "What's for dinner?",
        "context": "🍚 到了吃晚饭的时间。你问妈妈今晚吃什么。",
        "question": "你在问什么？",
        "options": [
          "晚餐吃什么",
          "午餐吃什么",
          "早餐吃什么",
          "想喝什么"
        ],
        "correct": 0,
        "chinese": "晚餐吃什么？"
      },
      {
        "type": "listen_select",
        "audio": "We have rice, soup and chicken.",
        "context": "🥘 妈妈说了今晚的菜。",
        "question": "今晚有什么菜？",
        "options": [
          "米饭、汤和鸡肉",
          "面条和鸡蛋",
          "汉堡和沙拉",
          "面包和牛奶"
        ],
        "correct": 0,
        "chinese": "我们有米饭、汤和鸡肉。"
      },
      {
        "type": "listen_select",
        "audio": "Let me help you, Mom.",
        "context": "💡 你想帮妈妈做饭。",
        "question": "你想做什么？",
        "options": [
          "帮妈妈做饭",
          "出去玩",
          "做作业",
          "看电视"
        ],
        "correct": 0,
        "chinese": "妈妈，让我来帮你。"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "word": "rice",
        "sentence": "We have some rice.",
        "chinese": "我们有一些米饭。",
        "options": [
          {
            "text": "<img src=\"assets/images/rice.png\" width=\"80\">",
            "value": "rice"
          },
          {
            "text": "<img src=\"assets/images/soup.png\" width=\"80\">",
            "value": "soup"
          },
          {
            "text": "<img src=\"assets/images/bread.png\" width=\"80\">",
            "value": "bread"
          },
          {
            "text": "<img src=\"assets/images/noodle.png\" width=\"80\">",
            "value": "noodle"
          }
        ],
        "correct": "rice"
      },
      {
        "type": "word_match",
        "word": "chicken",
        "sentence": "We have some chicken.",
        "chinese": "我们有一些鸡肉。",
        "options": [
          {
            "text": "<img src=\"assets/images/fish.png\" width=\"80\">",
            "value": "fish"
          },
          {
            "text": "<img src=\"assets/images/egg.png\" width=\"80\">",
            "value": "egg"
          },
          {
            "text": "<img src=\"assets/images/chicken.png\" width=\"80\">",
            "value": "chicken"
          },
          {
            "text": "<img src=\"assets/images/rice.png\" width=\"80\">",
            "value": "rice"
          }
        ],
        "correct": "chicken"
      },
      {
        "type": "word_match",
        "word": "fish",
        "sentence": "We have some fish.",
        "chinese": "我们有一些鱼。",
        "options": [
          {
            "text": "<img src=\"assets/images/chicken.png\" width=\"80\">",
            "value": "chicken"
          },
          {
            "text": "<img src=\"assets/images/fish.png\" width=\"80\">",
            "value": "fish"
          },
          {
            "text": "<img src=\"assets/images/soup.png\" width=\"80\">",
            "value": "soup"
          },
          {
            "text": "<img src=\"assets/images/vegetable.png\" width=\"80\">",
            "value": "vegetable"
          }
        ],
        "correct": "fish"
      },
      {
        "type": "sentence_match",
        "sentence": "What's for dinner today?",
        "chinese": "今天晚饭吃什么？",
        "options": [
          {
            "text": "今天晚饭吃什么？",
            "value": "correct"
          },
          {
            "text": "今天早饭吃什么？",
            "value": "wrong1"
          },
          {
            "text": "你想吃什么？",
            "value": "wrong2"
          },
          {
            "text": "你最喜欢什么食物？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "We have some rice, soup, chicken and fish.",
        "chinese": "我们有米饭、汤、鸡肉和鱼。",
        "options": [
          {
            "text": "我们有牛奶、面包和鸡蛋。",
            "value": "wrong1"
          },
          {
            "text": "我们有米饭、汤、鸡肉和鱼。",
            "value": "correct"
          },
          {
            "text": "我们有汉堡和沙拉。",
            "value": "wrong2"
          },
          {
            "text": "我们有面条和鸡蛋。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Can we have some vegetables?",
        "chinese": "我们能吃一些蔬菜吗？",
        "options": [
          {
            "text": "我们能吃一些蔬菜吗？",
            "value": "correct"
          },
          {
            "text": "你想吃鸡肉吗？",
            "value": "wrong1"
          },
          {
            "text": "我们能喝汤吗？",
            "value": "wrong2"
          },
          {
            "text": "今天有鱼吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Chinese food! It's a big dinner!",
        "chinese": "中国菜！这是一顿丰盛的晚餐！",
        "options": [
          {
            "text": "中国菜！这是一顿丰盛的晚餐！",
            "value": "correct"
          },
          {
            "text": "我喜欢中国菜。",
            "value": "wrong1"
          },
          {
            "text": "中国菜很好吃。",
            "value": "wrong2"
          },
          {
            "text": "今天晚饭很多。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "How about some Chinese food? Good idea. I like it!",
        "chinese": "来一些中国菜怎么样？好主意。我喜欢！",
        "options": [
          {
            "text": "来一些中国菜怎么样？好主意。我喜欢！",
            "value": "correct"
          },
          {
            "text": "你喜欢中国菜吗？是的，我喜欢。",
            "value": "wrong1"
          },
          {
            "text": "中国菜好吃吗？很好吃。",
            "value": "wrong2"
          },
          {
            "text": "今天吃中国菜。太好了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "今天晚饭吃什么？",
        "options": [
          {
            "text": "What do you want to eat?",
            "value": "wrong1"
          },
          {
            "text": "What's for dinner today?",
            "value": "correct"
          },
          {
            "text": "What's your favorite food?",
            "value": "wrong2"
          },
          {
            "text": "What's for breakfast?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "来一些中国菜怎么样？好主意！",
        "options": [
          {
            "text": "Do you like Chinese food? Yes!",
            "value": "wrong1"
          },
          {
            "text": "How about some Chinese food? Good idea!",
            "value": "correct"
          },
          {
            "text": "Can we have some Chinese food? Sure!",
            "value": "wrong2"
          },
          {
            "text": "What's for dinner? Chinese food!",
            "value": "wrong3"
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
            "word": "rice",
            "match": "<img src=\"assets/images/rice.png\" width=\"50\">",
            "chinese": "米饭"
          },
          {
            "word": "soup",
            "match": "<img src=\"assets/images/soup.png\" width=\"50\">",
            "chinese": "汤"
          },
          {
            "word": "chicken",
            "match": "<img src=\"assets/images/chicken.png\" width=\"50\">",
            "chinese": "鸡肉"
          },
          {
            "word": "fish",
            "match": "<img src=\"assets/images/fish.png\" width=\"50\">",
            "chinese": "鱼"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "dinner",
            "match": "晚餐",
            "example": "What's for dinner?"
          },
          {
            "word": "rice",
            "match": "米饭",
            "example": "We have rice."
          },
          {
            "word": "soup",
            "match": "汤",
            "example": "We have soup."
          },
          {
            "word": "vegetable",
            "match": "蔬菜",
            "example": "I like vegetables."
          }
        ]
      },
      {
        "type": "word_match",
        "word": "soup",
        "sentence": "We have some soup.",
        "chinese": "我们有一些汤。",
        "options": [
          {
            "text": "<img src=\"assets/images/soup.png\" width=\"80\">",
            "value": "soup"
          },
          {
            "text": "<img src=\"assets/images/rice.png\" width=\"80\">",
            "value": "rice"
          },
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "milk"
          },
          {
            "text": "<img src=\"assets/images/water.png\" width=\"80\">",
            "value": "water"
          }
        ],
        "correct": "soup"
      },
      {
        "type": "word_match",
        "word": "vegetable",
        "sentence": "Can we have some vegetables?",
        "chinese": "我们能吃一些蔬菜吗？",
        "options": [
          {
            "text": "<img src=\"assets/images/rice.png\" width=\"80\">",
            "value": "rice"
          },
          {
            "text": "<img src=\"assets/images/vegetable.png\" width=\"80\">",
            "value": "vegetable"
          },
          {
            "text": "<img src=\"assets/images/chicken.png\" width=\"80\">",
            "value": "chicken"
          },
          {
            "text": "<img src=\"assets/images/fish.png\" width=\"80\">",
            "value": "fish"
          }
        ],
        "correct": "vegetable"
      },
      {
        "type": "word_match",
        "word": "fish",
        "sentence": "We have some fish for dinner.",
        "chinese": "晚饭我们有一些鱼。",
        "options": [
          {
            "text": "<img src=\"assets/images/chicken.png\" width=\"80\">",
            "value": "chicken"
          },
          {
            "text": "<img src=\"assets/images/soup.png\" width=\"80\">",
            "value": "soup"
          },
          {
            "text": "<img src=\"assets/images/fish.png\" width=\"80\">",
            "value": "fish"
          },
          {
            "text": "<img src=\"assets/images/egg.png\" width=\"80\">",
            "value": "egg"
          }
        ],
        "correct": "fish"
      },
      {
        "type": "sentence_match",
        "sentence": "What's for dinner today?",
        "chinese": "今天晚饭吃什么？",
        "options": [
          {
            "text": "今天晚饭吃什么？",
            "value": "correct"
          },
          {
            "text": "今天早饭吃什么？",
            "value": "wrong1"
          },
          {
            "text": "你想吃什么？",
            "value": "wrong2"
          },
          {
            "text": "你最喜欢什么？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "We have some rice, soup, chicken and fish.",
        "chinese": "我们有米饭、汤、鸡肉和鱼。",
        "options": [
          {
            "text": "我们有米饭、汤、鸡肉和鱼。",
            "value": "correct"
          },
          {
            "text": "我们有面条和鸡蛋。",
            "value": "wrong1"
          },
          {
            "text": "我们有汉堡和沙拉。",
            "value": "wrong2"
          },
          {
            "text": "我们有牛奶和面包。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Can we have some vegetables?",
        "chinese": "我们能吃一些蔬菜吗？",
        "options": [
          {
            "text": "我们能吃一些蔬菜吗？",
            "value": "correct"
          },
          {
            "text": "我们能喝一些汤吗？",
            "value": "wrong1"
          },
          {
            "text": "你想吃鸡肉吗？",
            "value": "wrong2"
          },
          {
            "text": "今天有鱼吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Chinese food! It's a big dinner!",
        "chinese": "中国菜！这是一顿丰盛的晚餐！",
        "options": [
          {
            "text": "中国菜！这是一顿丰盛的晚餐！",
            "value": "correct"
          },
          {
            "text": "我喜欢中国菜。很好吃。",
            "value": "wrong1"
          },
          {
            "text": "今天晚饭很多菜。",
            "value": "wrong2"
          },
          {
            "text": "中国菜好吃。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Fido, here you are.",
        "chinese": "给你，Fido。",
        "options": [
          {
            "text": "给你，Fido。",
            "value": "correct"
          },
          {
            "text": "过来，Fido。",
            "value": "wrong1"
          },
          {
            "text": "Fido，你好。",
            "value": "wrong2"
          },
          {
            "text": "Fido，吃饭了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "How about some Chinese food?",
        "chinese": "来一些中国菜怎么样？",
        "options": [
          {
            "text": "来一些中国菜怎么样？",
            "value": "correct"
          },
          {
            "text": "你喜欢中国菜吗？",
            "value": "wrong1"
          },
          {
            "text": "中国菜好吃吗？",
            "value": "wrong2"
          },
          {
            "text": "今天吃中国菜。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Good idea. I like it!",
        "chinese": "好主意。我喜欢！",
        "options": [
          {
            "text": "好主意。我喜欢！",
            "value": "correct"
          },
          {
            "text": "谢谢你。",
            "value": "wrong1"
          },
          {
            "text": "不客气。",
            "value": "wrong2"
          },
          {
            "text": "我也是。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Let me help you, Mom.",
        "chinese": "妈妈，让我来帮你。",
        "options": [
          {
            "text": "妈妈，让我来帮你。",
            "value": "correct"
          },
          {
            "text": "谢谢你，妈妈。",
            "value": "wrong1"
          },
          {
            "text": "妈妈，今天吃什么？",
            "value": "wrong2"
          },
          {
            "text": "妈妈，我饿了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "That's great!",
        "chinese": "太好了！",
        "options": [
          {
            "text": "太好了！",
            "value": "correct"
          },
          {
            "text": "谢谢！",
            "value": "wrong1"
          },
          {
            "text": "好主意！",
            "value": "wrong2"
          },
          {
            "text": "我喜欢！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "我们有米饭、汤、鸡肉和鱼。",
        "options": [
          {
            "text": "We have milk, bread, eggs and noodles.",
            "value": "wrong1"
          },
          {
            "text": "We have some rice, soup, chicken and fish.",
            "value": "correct"
          },
          {
            "text": "We have hamburgers and salads.",
            "value": "wrong2"
          },
          {
            "text": "We have some vegetables.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "我们能吃一些蔬菜吗？",
        "options": [
          {
            "text": "Can we have some vegetables?",
            "value": "correct"
          },
          {
            "text": "Do you want some chicken?",
            "value": "wrong1"
          },
          {
            "text": "Can we have some soup?",
            "value": "wrong2"
          },
          {
            "text": "Do you like fish?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "中国菜！这是一顿丰盛的晚餐！",
        "options": [
          {
            "text": "I like Chinese food!",
            "value": "wrong1"
          },
          {
            "text": "Chinese food! It's a big dinner!",
            "value": "correct"
          },
          {
            "text": "Chinese food is delicious!",
            "value": "wrong2"
          },
          {
            "text": "What's for dinner?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "妈妈，让我来帮你。太好了！",
        "options": [
          {
            "text": "Thank you, Mom. You're welcome!",
            "value": "wrong1"
          },
          {
            "text": "Let me help you, Mom. That's great!",
            "value": "correct"
          },
          {
            "text": "Mom, what's for dinner? Chinese food!",
            "value": "wrong2"
          },
          {
            "text": "Good idea. I like it!",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "word_match",
        "word": "rice",
        "sentence": "We have rice for dinner.",
        "chinese": "我们晚饭有米饭。",
        "options": [
          {
            "text": "<img src=\"assets/images/bread.png\" width=\"80\">",
            "value": "bread"
          },
          {
            "text": "<img src=\"assets/images/noodle.png\" width=\"80\">",
            "value": "noodle"
          },
          {
            "text": "<img src=\"assets/images/rice.png\" width=\"80\">",
            "value": "rice"
          },
          {
            "text": "<img src=\"assets/images/egg.png\" width=\"80\">",
            "value": "egg"
          }
        ],
        "correct": "rice"
      },
      {
        "type": "sentence_match",
        "sentence": "给你，Fido。",
        "options": [
          {
            "text": "Here you are, Fido.",
            "value": "correct"
          },
          {
            "text": "Come here, Fido.",
            "value": "wrong1"
          },
          {
            "text": "Hello, Fido.",
            "value": "wrong2"
          },
          {
            "text": "Good boy, Fido.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "好主意。我喜欢！",
        "options": [
          {
            "text": "Good idea. I like it!",
            "value": "correct"
          },
          {
            "text": "Thank you. I like it!",
            "value": "wrong1"
          },
          {
            "text": "Me too! I like it!",
            "value": "wrong2"
          },
          {
            "text": "That's great! I like it!",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "word_match",
        "word": "chicken",
        "sentence": "We have chicken for dinner.",
        "chinese": "晚饭有鸡肉。",
        "options": [
          {
            "text": "<img src=\"assets/images/chicken.png\" width=\"80\">",
            "value": "chicken"
          },
          {
            "text": "<img src=\"assets/images/fish.png\" width=\"80\">",
            "value": "fish"
          },
          {
            "text": "<img src=\"assets/images/vegetable.png\" width=\"80\">",
            "value": "vegetable"
          },
          {
            "text": "<img src=\"assets/images/soup.png\" width=\"80\">",
            "value": "soup"
          }
        ],
        "correct": "chicken"
      },
      {
        "type": "scenario",
        "sentence": "We have rice, soup and chicken.",
        "context": "你朋友不吃鸡肉。你看了看今晚的菜单。",
        "question": "有没有你朋友能吃的？",
        "options": [
          {
            "text": "有，米饭和汤",
            "value": "correct"
          },
          {
            "text": "全都不能吃",
            "value": "w1"
          },
          {
            "text": "只有鸡肉",
            "value": "w2"
          },
          {
            "text": "什么都没有",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "我们有米饭、汤和鸡肉。"
      },
      {
        "type": "scenario",
        "sentence": "Good idea! Let me help you.",
        "context": "妈妈说做中国菜。你想帮忙。",
        "question": "你的态度是什么？",
        "options": [
          {
            "text": "很愿意帮忙",
            "value": "correct"
          },
          {
            "text": "不想帮忙",
            "value": "w1"
          },
          {
            "text": "想去玩",
            "value": "w2"
          },
          {
            "text": "想看电视",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "好主意！让我来帮你。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "What's for dinner?",
          "Rice, soup and chicken.",
          "Yummy!"
        ],
        "chinese": "把晚餐对话排好！",
        "chineseHint": "晚餐吃什么？ / 米饭、汤和鸡肉。 / 好吃！"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "Let me help you, Mom.",
          "Good idea!",
          "Here you are."
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "妈妈让我帮你。 / 好主意！ / 给你。"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "米饭(rice)的首字母是？",
        "image": "<img src=\"assets/images/rice.png\" width=\"80\">",
        "options": [
          "r",
          "l",
          "n",
          "m"
        ],
        "correct": 0,
        "chinese": "米饭",
        "word": "米饭"
      },
      {
        "type": "fill_blank",
        "prompt": "What's for _____ today?",
        "image": "<img src=\"assets/images/rice.png\" width=\"80\">",
        "options": [
          "breakfast",
          "lunch",
          "dinner",
          "drink"
        ],
        "correct": 2,
        "chinese": "今天晚饭吃什么？"
      },
      {
        "type": "fill_blank",
        "prompt": "We have some rice, soup, _____ and fish.",
        "image": "<img src=\"assets/images/chicken.png\" width=\"80\">",
        "options": [
          "chicken",
          "bread",
          "milk",
          "egg"
        ],
        "correct": 0,
        "chinese": "我们有米饭、汤、鸡肉和鱼。"
      },
      {
        "type": "fill_blank",
        "prompt": "Can we have some _____?",
        "image": "<img src=\"assets/images/vegetable.png\" width=\"80\">",
        "options": [
          "vegetables",
          "rice",
          "soup",
          "fish"
        ],
        "correct": 0,
        "chinese": "我们能吃一些蔬菜吗？"
      },
      {
        "type": "word_puzzle",
        "hint": "d_nner",
        "word": "dinner",
        "options": [
          "a",
          "i",
          "q",
          "d"
        ],
        "correct": 1,
        "chinese": "dinner"
      },
      {
        "type": "word_puzzle",
        "hint": "r_ce",
        "word": "rice",
        "options": [
          "w",
          "x",
          "r",
          "i"
        ],
        "correct": 3,
        "chinese": "rice"
      },
      {
        "type": "word_puzzle",
        "hint": "s_up",
        "word": "soup",
        "options": [
          "s",
          "c",
          "y",
          "o"
        ],
        "correct": 3,
        "chinese": "soup"
      },
      {
        "type": "fill_blank",
        "prompt": "What's for _____?",
        "options": [
          "rice",
          "chicken",
          "soup",
          "dinner"
        ],
        "correct": 3,
        "chinese": "What's for dinner?"
      },
      {
        "type": "fill_blank",
        "prompt": "We have _____.",
        "options": [
          "soup",
          "chicken",
          "dinner",
          "rice"
        ],
        "correct": 3,
        "chinese": "We have rice."
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "妈妈，今天晚饭吃什么？",
        "words": [
          "Mom",
          "what's",
          "for",
          "dinner",
          "today"
        ],
        "scrambled": [
          "dinner",
          "Mom",
          "today",
          "what's",
          "for"
        ],
        "chineseWords": [
          "妈妈",
          "今天",
          "晚饭",
          "吃什么"
        ],
        "chineseScrambled": [
          "吃什么",
          "妈妈",
          "晚饭",
          "今天"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我们能吃一些蔬菜吗？",
        "words": [
          "Can",
          "we",
          "have",
          "some",
          "vegetables"
        ],
        "scrambled": [
          "vegetables",
          "Can",
          "some",
          "have",
          "we"
        ],
        "chineseWords": [
          "我们",
          "能",
          "吃",
          "一些",
          "蔬菜",
          "吗"
        ],
        "chineseScrambled": [
          "蔬菜",
          "吗",
          "我们",
          "一些",
          "能",
          "吃"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "中国菜！这是一顿丰盛的晚餐！",
        "words": [
          "Chinese",
          "food",
          "It's",
          "a",
          "big",
          "dinner"
        ],
        "scrambled": [
          "dinner",
          "Chinese",
          "a",
          "It's",
          "food",
          "big"
        ],
        "chineseWords": [
          "中国菜",
          "这是",
          "一顿",
          "丰盛的",
          "晚餐"
        ],
        "chineseScrambled": [
          "晚餐",
          "中国菜",
          "丰盛的",
          "这是",
          "一顿"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "给你，Fido。",
        "words": [
          "Fido",
          "here",
          "you",
          "are"
        ],
        "scrambled": [
          "are",
          "Fido",
          "you",
          "here"
        ],
        "chineseWords": [
          "Fido",
          "给你"
        ],
        "chineseScrambled": [
          "给你",
          "Fido"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "来一些中国菜怎么样？",
        "words": [
          "How",
          "about",
          "some",
          "Chinese",
          "food"
        ],
        "scrambled": [
          "food",
          "How",
          "Chinese",
          "some",
          "about"
        ],
        "chineseWords": [
          "来",
          "一些",
          "中国菜",
          "怎么样"
        ],
        "chineseScrambled": [
          "中国菜",
          "怎么样",
          "来",
          "一些"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "好主意。我喜欢！",
        "words": [
          "Good",
          "idea",
          "I",
          "like",
          "it"
        ],
        "scrambled": [
          "it",
          "Good",
          "like",
          "idea",
          "I"
        ],
        "chineseWords": [
          "好",
          "主意",
          "我",
          "喜欢"
        ],
        "chineseScrambled": [
          "喜欢",
          "好",
          "我",
          "主意"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "妈妈，让我来帮你。",
        "words": [
          "Let",
          "me",
          "help",
          "you",
          "Mom"
        ],
        "scrambled": [
          "Mom",
          "Let",
          "you",
          "help",
          "me"
        ],
        "chineseWords": [
          "让",
          "我",
          "帮",
          "你",
          "妈妈"
        ],
        "chineseScrambled": [
          "妈妈",
          "帮",
          "让",
          "你",
          "我"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "太好了！",
        "words": [
          "That's",
          "great"
        ],
        "scrambled": [
          "great",
          "That's"
        ],
        "chineseWords": [
          "太好了"
        ],
        "chineseScrambled": [
          "太好了"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我们有米饭和汤。",
        "words": [
          "We",
          "have",
          "rice",
          "and",
          "soup"
        ],
        "scrambled": [
          "soup",
          "We",
          "and",
          "rice",
          "have"
        ],
        "chineseWords": [
          "我们",
          "有",
          "米饭",
          "和",
          "汤"
        ],
        "chineseScrambled": [
          "汤",
          "我们",
          "和",
          "有",
          "米饭"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我们有鸡肉和鱼。",
        "words": [
          "We",
          "have",
          "chicken",
          "and",
          "fish"
        ],
        "scrambled": [
          "fish",
          "We",
          "and",
          "chicken",
          "have"
        ],
        "chineseWords": [
          "我们",
          "有",
          "鸡肉",
          "和",
          "鱼"
        ],
        "chineseScrambled": [
          "鱼",
          "和",
          "我们",
          "鸡肉",
          "有"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "好主意。",
        "words": [
          "idea",
          "I"
        ],
        "scrambled": [
          "I",
          "idea"
        ],
        "chineseWords": [
          "好主意"
        ],
        "chineseScrambled": [
          "好主意"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我喜欢！",
        "words": [
          "like",
          "it"
        ],
        "scrambled": [
          "it",
          "like"
        ],
        "chineseWords": [
          "我",
          "喜欢"
        ],
        "chineseScrambled": [
          "喜欢",
          "我"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "今天晚饭吃什么？",
        "words": [
          "What's",
          "for",
          "dinner",
          "today"
        ],
        "scrambled": [
          "today",
          "What's",
          "dinner",
          "for"
        ],
        "chineseWords": [
          "今天",
          "晚饭",
          "吃什么"
        ],
        "chineseScrambled": [
          "吃什么",
          "今天",
          "晚饭"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "What's for _____ today?",
        "image": "<img src=\"assets/images/chicken.png\" width=\"80\">",
        "options": [
          "dinner",
          "breakfast",
          "lunch",
          "drink"
        ],
        "correct": 0,
        "chinese": "今天晚饭吃什么？"
      },
      {
        "type": "fill_blank",
        "prompt": "We have some rice, soup, chicken and _____.",
        "image": "<img src=\"assets/images/fish.png\" width=\"80\">",
        "options": [
          "fish",
          "egg",
          "bread",
          "milk"
        ],
        "correct": 0,
        "chinese": "我们有米饭、汤、鸡肉和鱼。"
      },
      {
        "type": "fill_blank",
        "prompt": "Chinese food! It's a _____ dinner!",
        "image": "<img src=\"assets/images/rice.png\" width=\"80\">",
        "options": [
          "big",
          "small",
          "good",
          "new"
        ],
        "correct": 0,
        "chinese": "中国菜！这是一顿丰盛的晚餐！"
      },
      {
        "type": "fill_blank",
        "prompt": "How _____ some Chinese food?",
        "image": "<img src=\"assets/images/rice.png\" width=\"80\">",
        "options": [
          "about",
          "is",
          "are",
          "do"
        ],
        "correct": 0,
        "chinese": "来一些中国菜怎么样？"
      },
      {
        "type": "fill_blank",
        "prompt": "Let me _____ you, Mom.",
        "image": "<img src=\"assets/images/vegetable.png\" width=\"80\">",
        "options": [
          "help",
          "give",
          "eat",
          "drink"
        ],
        "correct": 0,
        "chinese": "妈妈，让我来帮你。"
      },
      {
        "type": "word_puzzle",
        "hint": "din_er",
        "word": "dinner",
        "options": [
          "k",
          "r",
          "v",
          "n"
        ],
        "correct": 3,
        "chinese": "dinner"
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "word": "rice",
        "chinese": "米饭",
        "image": "<img src=\"assets/images/rice.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "soup",
        "chinese": "汤",
        "image": "<img src=\"assets/images/soup.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "chicken",
        "chinese": "鸡肉",
        "image": "<img src=\"assets/images/chicken.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "fish",
        "chinese": "鱼",
        "image": "<img src=\"assets/images/fish.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "vegetable",
        "chinese": "蔬菜",
        "image": "<img src=\"assets/images/vegetable.png\" width=\"80\">"
      },
      {
        "type": "speak_select",
        "audio": "rice",
        "options": [
          "<img src=\"assets/images/rice.png\" width=\"80\">",
          "<img src=\"assets/images/bread.png\" width=\"80\">",
          "<img src=\"assets/images/noodle.png\" width=\"80\">",
          "<img src=\"assets/images/soup.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "米饭"
      },
      {
        "type": "speak_select",
        "audio": "chicken",
        "options": [
          "<img src=\"assets/images/fish.png\" width=\"80\">",
          "<img src=\"assets/images/chicken.png\" width=\"80\">",
          "<img src=\"assets/images/egg.png\" width=\"80\">",
          "<img src=\"assets/images/rice.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "鸡肉"
      },
      {
        "type": "speak_select",
        "audio": "fish",
        "options": [
          "<img src=\"assets/images/chicken.png\" width=\"80\">",
          "<img src=\"assets/images/soup.png\" width=\"80\">",
          "<img src=\"assets/images/fish.png\" width=\"80\">",
          "<img src=\"assets/images/vegetable.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "鱼"
      },
      {
        "type": "speak_select",
        "audio": "What's for dinner today?",
        "options": [
          "今天早饭吃什么？",
          "你想吃什么？",
          "今天晚饭吃什么？",
          "你最喜欢什么？"
        ],
        "correct": 2,
        "chinese": "今天晚饭吃什么？"
      },
      {
        "type": "speak_select",
        "audio": "Can we have some vegetables?",
        "options": [
          "我们能吃一些蔬菜吗？",
          "我们能喝一些汤吗？",
          "你想吃鸡肉吗？",
          "今天有鱼吗？"
        ],
        "correct": 0,
        "chinese": "我们能吃一些蔬菜吗？"
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "Mom, what's for dinner today?",
        "chinese": "妈妈，今天晚饭吃什么？",
        "expected": "Mom, what's for dinner today?"
      },
      {
        "type": "repeat_sentence",
        "word": "We have some rice, soup, chicken and fish.",
        "chinese": "我们有米饭、汤、鸡肉和鱼。",
        "expected": "We have some rice, soup, chicken and fish."
      },
      {
        "type": "repeat_sentence",
        "word": "Can we have some vegetables?",
        "chinese": "我们能吃一些蔬菜吗？",
        "expected": "Can we have some vegetables?"
      },
      {
        "type": "repeat_sentence",
        "word": "Chinese food! It's a big dinner!",
        "chinese": "中国菜！这是一顿丰盛的晚餐！",
        "expected": "Chinese food! It's a big dinner!"
      },
      {
        "type": "repeat_sentence",
        "word": "Fido, here you are.",
        "chinese": "给你，Fido。",
        "expected": "Fido, here you are."
      },
      {
        "type": "repeat_sentence",
        "word": "How about some Chinese food?",
        "chinese": "来一些中国菜怎么样？",
        "expected": "How about some Chinese food?"
      },
      {
        "type": "repeat_sentence",
        "word": "Good idea. I like it!",
        "chinese": "好主意。我喜欢！",
        "expected": "Good idea. I like it!"
      },
      {
        "type": "repeat_sentence",
        "word": "Let me help you, Mom.",
        "chinese": "妈妈，让我来帮你。",
        "expected": "Let me help you, Mom."
      },
      {
        "type": "repeat_sentence",
        "word": "That's great!",
        "chinese": "太好了！",
        "expected": "That's great!"
      },
      {
        "type": "repeat_sentence",
        "word": "We have rice and soup.",
        "chinese": "我们有米饭和汤。",
        "expected": "We have rice and soup."
      },
      {
        "type": "repeat_sentence",
        "word": "We have chicken and fish.",
        "chinese": "我们有鸡肉和鱼。",
        "expected": "We have chicken and fish."
      },
      {
        "type": "repeat_sentence",
        "word": "How about some Chinese food? Good idea. I like it!",
        "chinese": "来一些中国菜怎么样？好主意。我喜欢！",
        "expected": "How about some Chinese food? Good idea. I like it!"
      },
      {
        "type": "repeat_sentence",
        "word": "Let me help you, Mom. That's great!",
        "chinese": "妈妈，让我来帮你。太好了！",
        "expected": "Let me help you, Mom. That's great!"
      },
      {
        "type": "repeat_sentence",
        "word": "What's for dinner today?",
        "chinese": "今天晚饭吃什么？",
        "expected": "What's for dinner today?"
      },
      {
        "type": "repeat_sentence",
        "word": "It's a big dinner!",
        "chinese": "这是一顿丰盛的晚餐！",
        "expected": "It's a big dinner!"
      },
      {
        "type": "repeat_word",
        "word": "dinner",
        "chinese": "晚餐",
        "image": "<img src=\"assets/images/rice.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "rice",
        "chinese": "米饭",
        "image": "<img src=\"assets/images/rice.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "fish",
        "chinese": "鱼",
        "image": "<img src=\"assets/images/fish.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "vegetable",
        "chinese": "蔬菜",
        "image": "<img src=\"assets/images/vegetable.png\" width=\"80\">"
      },
      {
        "type": "repeat_word",
        "word": "chicken",
        "chinese": "鸡肉",
        "image": "<img src=\"assets/images/chicken.png\" width=\"80\">"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/rice.png\" width=\"80\">",
        "word": "rice",
        "chinese": "rice"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/soup.png\" width=\"80\">",
        "word": "soup",
        "chinese": "soup"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/chicken.png\" width=\"80\">",
        "word": "chicken",
        "chinese": "chicken"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/fish.png\" width=\"80\">",
        "word": "fish",
        "chinese": "fish"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/vegetable.png\" width=\"80\">",
        "word": "vegetable",
        "chinese": "vegetable"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/egg.png\" width=\"80\">",
        "word": "egg",
        "chinese": "egg"
      }
    ]
  }
};
