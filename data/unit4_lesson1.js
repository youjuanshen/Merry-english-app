// Unit 4 Lesson 1: What do you like for breakfast?
// Core vocab: breakfast, milk, bread, egg, noodle, today, hungry, about
// Sentences: "I'm hungry.", "It's time for breakfast.", "What do you like for breakfast?", etc.
var unit4_lesson1 = {
  "id": "U4L1",
  "title": "What do you like for breakfast?",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "milk",
        "options": [
          "<img src=\"assets/images/bread.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">",
          "<img src=\"assets/images/egg.png\" width=\"80\">",
          "<img src=\"assets/images/noodle.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "牛奶"
      },
      {
        "type": "listen_select",
        "audio": "bread",
        "options": [
          "<img src=\"assets/images/egg.png\" width=\"80\">",
          "<img src=\"assets/images/noodle.png\" width=\"80\">",
          "<img src=\"assets/images/bread.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "面包"
      },
      {
        "type": "listen_select",
        "audio": "egg",
        "options": [
          "<img src=\"assets/images/egg.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">",
          "<img src=\"assets/images/bread.png\" width=\"80\">",
          "<img src=\"assets/images/noodle.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "鸡蛋"
      },
      {
        "type": "listen_select",
        "audio": "Good morning, Mom. I'm hungry.",
        "options": [
          "妈妈早上好。我饿了。",
          "该吃早餐了。",
          "你早餐喜欢吃什么？",
          "我喜欢鸡蛋和面条。"
        ],
        "correct": 0,
        "chinese": "妈妈早上好。我饿了。"
      },
      {
        "type": "listen_select",
        "audio": "It's time for breakfast.",
        "options": [
          "我饿了。",
          "该吃早餐了。",
          "你早餐喜欢吃什么？",
          "我喜欢牛奶和面包。"
        ],
        "correct": 1,
        "chinese": "该吃早餐了。"
      },
      {
        "type": "listen_select",
        "audio": "What do you like for breakfast?",
        "options": [
          "我饿了。",
          "该吃早餐了。",
          "你早餐喜欢吃什么？",
          "我喜欢鸡蛋和面条。"
        ],
        "correct": 2,
        "chinese": "你早餐喜欢吃什么？"
      },
      {
        "type": "listen_tf",
        "audio": "This is milk.",
        "image": "<img src=\"assets/images/milk.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是牛奶，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is bread.",
        "image": "<img src=\"assets/images/egg.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是面包，这是鸡蛋。"
      },
      {
        "type": "listen_select",
        "audio": "We have milk, bread, eggs and noodles today.",
        "options": [
          "今天我们有牛奶、面包、鸡蛋和面条。",
          "你早餐喜欢吃什么？",
          "妈妈早上好。我饿了。",
          "我喜欢鸡蛋和面条。"
        ],
        "correct": 0,
        "chinese": "今天我们有牛奶、面包、鸡蛋和面条。"
      },
      {
        "type": "listen_select",
        "audio": "What do you like for breakfast, Yang Ming? I like eggs and noodles.",
        "options": [
          "该吃早餐了。今天我们有牛奶和面包。",
          "杨明，你早餐喜欢吃什么？我喜欢鸡蛋和面条。",
          "妈妈早上好。我饿了。",
          "我喜欢牛奶和面包。"
        ],
        "correct": 1,
        "chinese": "杨明，你早餐喜欢吃什么？我喜欢鸡蛋和面条。"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "milk",
        "options": [
          "<img src=\"assets/images/noodle.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">",
          "<img src=\"assets/images/bread.png\" width=\"80\">",
          "<img src=\"assets/images/egg.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "牛奶"
      },
      {
        "type": "listen_select",
        "audio": "noodle",
        "options": [
          "<img src=\"assets/images/egg.png\" width=\"80\">",
          "<img src=\"assets/images/bread.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">",
          "<img src=\"assets/images/noodle.png\" width=\"80\">"
        ],
        "correct": 3,
        "chinese": "面条"
      },
      {
        "type": "listen_select",
        "audio": "Good morning, Mom.",
        "options": [
          "妈妈早上好。",
          "我饿了。",
          "该吃早餐了。",
          "你早餐喜欢吃什么？"
        ],
        "correct": 0,
        "chinese": "妈妈早上好。"
      },
      {
        "type": "listen_select",
        "audio": "I'm hungry.",
        "options": [
          "该吃早餐了。",
          "我饿了。",
          "你早餐喜欢吃什么？",
          "我喜欢牛奶和面包。"
        ],
        "correct": 1,
        "chinese": "我饿了。"
      },
      {
        "type": "listen_select",
        "audio": "It's time for breakfast.",
        "options": [
          "我饿了。",
          "你早餐喜欢吃什么？",
          "该吃早餐了。",
          "我喜欢鸡蛋和面条。"
        ],
        "correct": 2,
        "chinese": "该吃早餐了。"
      },
      {
        "type": "listen_select",
        "audio": "We have milk, bread, eggs and noodles today.",
        "options": [
          "你早餐喜欢吃什么？",
          "我饿了。",
          "我喜欢牛奶和面包。",
          "今天我们有牛奶、面包、鸡蛋和面条。"
        ],
        "correct": 3,
        "chinese": "今天我们有牛奶、面包、鸡蛋和面条。"
      },
      {
        "type": "listen_select",
        "audio": "What do you like for breakfast, Yang Ming?",
        "options": [
          "杨明，你早餐喜欢吃什么？",
          "该吃早餐了。",
          "我饿了。",
          "我喜欢鸡蛋和面条。"
        ],
        "correct": 0,
        "chinese": "杨明，你早餐喜欢吃什么？"
      },
      {
        "type": "listen_select",
        "audio": "I like eggs and noodles.",
        "options": [
          "我喜欢牛奶和面包。",
          "我喜欢鸡蛋和面条。",
          "你早餐喜欢吃什么？",
          "该吃早餐了。"
        ],
        "correct": 1,
        "chinese": "我喜欢鸡蛋和面条。"
      },
      {
        "type": "listen_select",
        "audio": "I like milk and bread.",
        "options": [
          "我喜欢鸡蛋和面条。",
          "该吃早餐了。",
          "我喜欢牛奶和面包。",
          "你早餐喜欢吃什么？"
        ],
        "correct": 2,
        "chinese": "我喜欢牛奶和面包。"
      },
      {
        "type": "listen_select",
        "audio": "Good morning, Mom. I'm hungry.",
        "options": [
          "妈妈早上好。我饿了。",
          "该吃早餐了。",
          "你早餐喜欢吃什么？",
          "我喜欢鸡蛋和面条。"
        ],
        "correct": 0,
        "chinese": "妈妈早上好。我饿了。"
      },
      {
        "type": "listen_select",
        "audio": "It's time for breakfast. We have milk, bread, eggs and noodles today.",
        "options": [
          "妈妈早上好。我饿了。",
          "该吃早餐了。今天我们有牛奶、面包、鸡蛋和面条。",
          "你早餐喜欢吃什么？我喜欢鸡蛋和面条。",
          "我喜欢牛奶和面包。"
        ],
        "correct": 1,
        "chinese": "该吃早餐了。今天我们有牛奶、面包、鸡蛋和面条。"
      },
      {
        "type": "listen_select",
        "audio": "What do you like for breakfast, Yang Ming? I like eggs and noodles.",
        "options": [
          "该吃早餐了。",
          "杨明，你早餐喜欢吃什么？我喜欢鸡蛋和面条。",
          "妈妈早上好。我饿了。",
          "我喜欢牛奶和面包。"
        ],
        "correct": 1,
        "chinese": "杨明，你早餐喜欢吃什么？我喜欢鸡蛋和面条。"
      },
      {
        "type": "listen_select",
        "audio": "What do you like for breakfast? I like milk and bread.",
        "options": [
          "你早餐喜欢吃什么？我喜欢牛奶和面包。",
          "杨明，你早餐喜欢吃什么？我喜欢鸡蛋和面条。",
          "该吃早餐了。",
          "今天我们有牛奶、面包、鸡蛋和面条。"
        ],
        "correct": 0,
        "chinese": "你早餐喜欢吃什么？我喜欢牛奶和面包。"
      },
      {
        "type": "listen_tf",
        "audio": "This is bread.",
        "image": "<img src=\"assets/images/bread.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是面包，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is an egg.",
        "image": "<img src=\"assets/images/egg.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一个鸡蛋，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is milk.",
        "image": "<img src=\"assets/images/noodle.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是牛奶，这是面条。"
      },
      {
        "type": "listen_select",
        "audio": "Good morning, Mom. I'm hungry. It's time for breakfast.",
        "options": [
          "妈妈早上好。我饿了。该吃早餐了。",
          "你早餐喜欢吃什么？我喜欢鸡蛋和面条。",
          "今天我们有牛奶、面包、鸡蛋和面条。",
          "我喜欢牛奶和面包。"
        ],
        "correct": 0,
        "chinese": "妈妈早上好。我饿了。该吃早餐了。"
      },
      {
        "type": "listen_select",
        "audio": "We have milk, bread, eggs and noodles today. What do you like for breakfast?",
        "options": [
          "妈妈早上好。我饿了。",
          "今天我们有牛奶、面包、鸡蛋和面条。你早餐喜欢吃什么？",
          "该吃早餐了。我喜欢鸡蛋和面条。",
          "我喜欢牛奶和面包。该吃早餐了。"
        ],
        "correct": 1,
        "chinese": "今天我们有牛奶、面包、鸡蛋和面条。你早餐喜欢吃什么？"
      },
      {
        "type": "listen_select",
        "audio": "I like eggs and noodles. I like milk and bread.",
        "options": [
          "我喜欢鸡蛋和面条。我喜欢牛奶和面包。",
          "你早餐喜欢吃什么？该吃早餐了。",
          "妈妈早上好。我饿了。",
          "今天我们有牛奶、面包、鸡蛋和面条。"
        ],
        "correct": 0,
        "chinese": "我喜欢鸡蛋和面条。我喜欢牛奶和面包。"
      },
      {
        "type": "listen_select",
        "audio": "Good morning, Mom. I'm hungry. It's time for breakfast. We have milk, bread, eggs and noodles today.",
        "options": [
          "妈妈早上好。我饿了。该吃早餐了。今天我们有牛奶、面包、鸡蛋和面条。",
          "你早餐喜欢吃什么？我喜欢鸡蛋和面条。我喜欢牛奶和面包。",
          "该吃早餐了。我饿了。",
          "今天我们有牛奶和面包。"
        ],
        "correct": 0,
        "chinese": "妈妈早上好。我饿了。该吃早餐了。今天我们有牛奶、面包、鸡蛋和面条。"
      },
      {
        "type": "listen_sequence",
        "audio": "milk, bread, egg",
        "sequence": [
          "milk",
          "bread",
          "egg"
        ],
        "words": [
          "<img src=\"assets/images/egg.png\" width=\"60\">",
          "<img src=\"assets/images/milk.png\" width=\"60\">",
          "<img src=\"assets/images/bread.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "I'm hungry. It's time for breakfast.",
        "context": "🍳 早上起来肚子好饿！",
        "question": "他想做什么？",
        "options": [
          "吃早餐",
          "去上学",
          "去睡觉",
          "去玩"
        ],
        "correct": 0,
        "chinese": "我饿了。该吃早餐了。"
      },
      {
        "type": "listen_select",
        "audio": "What do you like for breakfast?",
        "context": "🥛 妈妈问你早餐想吃什么。",
        "question": "妈妈在问什么？",
        "options": [
          "早餐想吃什么",
          "午餐想吃什么",
          "晚餐想吃什么",
          "想喝什么"
        ],
        "correct": 0,
        "chinese": "你早餐喜欢吃什么？"
      },
      {
        "type": "listen_select",
        "audio": "I like eggs and noodles.",
        "context": "🍞 你告诉妈妈你想吃的。",
        "question": "你喜欢什么？",
        "options": [
          "鸡蛋和面条",
          "牛奶和面包",
          "米饭和汤",
          "鸡肉和鱼"
        ],
        "correct": 0,
        "chinese": "我喜欢鸡蛋和面条。"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "word": "milk",
        "sentence": "I like milk.",
        "chinese": "我喜欢牛奶。",
        "options": [
          {
            "text": "<img src=\"assets/images/bread.png\" width=\"80\">",
            "value": "bread"
          },
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "milk"
          },
          {
            "text": "<img src=\"assets/images/egg.png\" width=\"80\">",
            "value": "egg"
          },
          {
            "text": "<img src=\"assets/images/noodle.png\" width=\"80\">",
            "value": "noodle"
          }
        ],
        "correct": "milk"
      },
      {
        "type": "word_match",
        "word": "bread",
        "sentence": "I like bread.",
        "chinese": "我喜欢面包。",
        "options": [
          {
            "text": "<img src=\"assets/images/egg.png\" width=\"80\">",
            "value": "egg"
          },
          {
            "text": "<img src=\"assets/images/noodle.png\" width=\"80\">",
            "value": "noodle"
          },
          {
            "text": "<img src=\"assets/images/bread.png\" width=\"80\">",
            "value": "bread"
          },
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "milk"
          }
        ],
        "correct": "bread"
      },
      {
        "type": "word_match",
        "word": "egg",
        "sentence": "I like eggs.",
        "chinese": "我喜欢鸡蛋。",
        "options": [
          {
            "text": "<img src=\"assets/images/egg.png\" width=\"80\">",
            "value": "egg"
          },
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "milk"
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
        "correct": "egg"
      },
      {
        "type": "sentence_match",
        "sentence": "I'm hungry.",
        "chinese": "我饿了。",
        "options": [
          {
            "text": "我饿了。",
            "value": "correct"
          },
          {
            "text": "该吃早餐了。",
            "value": "wrong1"
          },
          {
            "text": "你早餐喜欢吃什么？",
            "value": "wrong2"
          },
          {
            "text": "妈妈早上好。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's time for breakfast.",
        "chinese": "该吃早餐了。",
        "options": [
          {
            "text": "我饿了。",
            "value": "wrong1"
          },
          {
            "text": "该吃早餐了。",
            "value": "correct"
          },
          {
            "text": "我喜欢鸡蛋和面条。",
            "value": "wrong2"
          },
          {
            "text": "妈妈早上好。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What do you like for breakfast?",
        "chinese": "你早餐喜欢吃什么？",
        "options": [
          {
            "text": "我饿了。",
            "value": "wrong1"
          },
          {
            "text": "该吃早餐了。",
            "value": "wrong2"
          },
          {
            "text": "你早餐喜欢吃什么？",
            "value": "correct"
          },
          {
            "text": "我喜欢牛奶和面包。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I like eggs and noodles.",
        "chinese": "我喜欢鸡蛋和面条。",
        "options": [
          {
            "text": "我喜欢牛奶和面包。",
            "value": "wrong1"
          },
          {
            "text": "你早餐喜欢吃什么？",
            "value": "wrong2"
          },
          {
            "text": "我喜欢鸡蛋和面条。",
            "value": "correct"
          },
          {
            "text": "该吃早餐了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I like milk and bread.",
        "chinese": "我喜欢牛奶和面包。",
        "options": [
          {
            "text": "我喜欢鸡蛋和面条。",
            "value": "wrong1"
          },
          {
            "text": "我喜欢牛奶和面包。",
            "value": "correct"
          },
          {
            "text": "该吃早餐了。",
            "value": "wrong2"
          },
          {
            "text": "我饿了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你饿了，想告诉妈妈，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's time for breakfast.",
            "value": "wrong1"
          },
          {
            "text": "What do you like for breakfast?",
            "value": "wrong2"
          },
          {
            "text": "Good morning, Mom. I'm hungry.",
            "value": "correct"
          },
          {
            "text": "I like eggs and noodles.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人问你早餐喜欢吃什么，你喜欢牛奶和面包，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "I like eggs and noodles.",
            "value": "wrong1"
          },
          {
            "text": "I'm hungry.",
            "value": "wrong2"
          },
          {
            "text": "It's time for breakfast.",
            "value": "wrong3"
          },
          {
            "text": "I like milk and bread.",
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
            "word": "milk",
            "match": "<img src=\"assets/images/milk.png\" width=\"50\">",
            "chinese": "牛奶"
          },
          {
            "word": "bread",
            "match": "<img src=\"assets/images/bread.png\" width=\"50\">",
            "chinese": "面包"
          },
          {
            "word": "egg",
            "match": "<img src=\"assets/images/egg.png\" width=\"50\">",
            "chinese": "鸡蛋"
          },
          {
            "word": "noodle",
            "match": "<img src=\"assets/images/noodle.png\" width=\"50\">",
            "chinese": "面条"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "breakfast",
            "match": "早餐",
            "example": "It's time for breakfast."
          },
          {
            "word": "hungry",
            "match": "饿了",
            "example": "I'm hungry."
          },
          {
            "word": "milk",
            "match": "牛奶",
            "example": "I like milk."
          },
          {
            "word": "bread",
            "match": "面包",
            "example": "I like bread."
          }
        ]
      },
      {
        "type": "word_match",
        "word": "noodle",
        "sentence": "I like noodles.",
        "chinese": "我喜欢面条。",
        "options": [
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "milk"
          },
          {
            "text": "<img src=\"assets/images/noodle.png\" width=\"80\">",
            "value": "noodle"
          },
          {
            "text": "<img src=\"assets/images/egg.png\" width=\"80\">",
            "value": "egg"
          },
          {
            "text": "<img src=\"assets/images/bread.png\" width=\"80\">",
            "value": "bread"
          }
        ],
        "correct": "noodle"
      },
      {
        "type": "word_match",
        "word": "milk",
        "sentence": "We have milk.",
        "chinese": "我们有牛奶。",
        "options": [
          {
            "text": "<img src=\"assets/images/bread.png\" width=\"80\">",
            "value": "bread"
          },
          {
            "text": "<img src=\"assets/images/egg.png\" width=\"80\">",
            "value": "egg"
          },
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "milk"
          },
          {
            "text": "<img src=\"assets/images/noodle.png\" width=\"80\">",
            "value": "noodle"
          }
        ],
        "correct": "milk"
      },
      {
        "type": "sentence_match",
        "sentence": "Good morning, Mom.",
        "chinese": "妈妈早上好。",
        "options": [
          {
            "text": "妈妈早上好。",
            "value": "correct"
          },
          {
            "text": "我饿了。",
            "value": "wrong1"
          },
          {
            "text": "该吃早餐了。",
            "value": "wrong2"
          },
          {
            "text": "你早餐喜欢吃什么？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I'm hungry.",
        "chinese": "我饿了。",
        "options": [
          {
            "text": "该吃早餐了。",
            "value": "wrong1"
          },
          {
            "text": "我饿了。",
            "value": "correct"
          },
          {
            "text": "妈妈早上好。",
            "value": "wrong2"
          },
          {
            "text": "我喜欢牛奶和面包。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's time for breakfast.",
        "chinese": "该吃早餐了。",
        "options": [
          {
            "text": "我饿了。",
            "value": "wrong1"
          },
          {
            "text": "你早餐喜欢吃什么？",
            "value": "wrong2"
          },
          {
            "text": "该吃早餐了。",
            "value": "correct"
          },
          {
            "text": "我喜欢鸡蛋和面条。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "We have milk, bread, eggs and noodles today.",
        "chinese": "今天我们有牛奶、面包、鸡蛋和面条。",
        "options": [
          {
            "text": "今天我们有牛奶、面包、鸡蛋和面条。",
            "value": "correct"
          },
          {
            "text": "你早餐喜欢吃什么？",
            "value": "wrong1"
          },
          {
            "text": "我喜欢鸡蛋和面条。",
            "value": "wrong2"
          },
          {
            "text": "该吃早餐了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What do you like for breakfast, Yang Ming?",
        "chinese": "杨明，你早餐喜欢吃什么？",
        "options": [
          {
            "text": "该吃早餐了。",
            "value": "wrong1"
          },
          {
            "text": "杨明，你早餐喜欢吃什么？",
            "value": "correct"
          },
          {
            "text": "我喜欢鸡蛋和面条。",
            "value": "wrong2"
          },
          {
            "text": "今天我们有牛奶和面包。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I like eggs and noodles.",
        "chinese": "我喜欢鸡蛋和面条。",
        "options": [
          {
            "text": "我喜欢牛奶和面包。",
            "value": "wrong1"
          },
          {
            "text": "你早餐喜欢吃什么？",
            "value": "wrong2"
          },
          {
            "text": "我喜欢鸡蛋和面条。",
            "value": "correct"
          },
          {
            "text": "该吃早餐了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I like milk and bread.",
        "chinese": "我喜欢牛奶和面包。",
        "options": [
          {
            "text": "我喜欢鸡蛋和面条。",
            "value": "wrong1"
          },
          {
            "text": "我喜欢牛奶和面包。",
            "value": "correct"
          },
          {
            "text": "该吃早餐了。",
            "value": "wrong2"
          },
          {
            "text": "我饿了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Good morning, Mom. I'm hungry.",
        "chinese": "妈妈早上好。我饿了。",
        "options": [
          {
            "text": "妈妈早上好。我饿了。",
            "value": "correct"
          },
          {
            "text": "该吃早餐了。你早餐喜欢吃什么？",
            "value": "wrong1"
          },
          {
            "text": "我喜欢鸡蛋和面条。",
            "value": "wrong2"
          },
          {
            "text": "今天我们有牛奶和面包。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's time for breakfast. We have milk, bread, eggs and noodles today.",
        "chinese": "该吃早餐了。今天我们有牛奶、面包、鸡蛋和面条。",
        "options": [
          {
            "text": "妈妈早上好。我饿了。",
            "value": "wrong1"
          },
          {
            "text": "该吃早餐了。今天我们有牛奶、面包、鸡蛋和面条。",
            "value": "correct"
          },
          {
            "text": "你早餐喜欢吃什么？我喜欢鸡蛋和面条。",
            "value": "wrong2"
          },
          {
            "text": "我喜欢牛奶和面包。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What do you like for breakfast, Yang Ming? I like eggs and noodles.",
        "chinese": "杨明，你早餐喜欢吃什么？我喜欢鸡蛋和面条。",
        "options": [
          {
            "text": "杨明，你早餐喜欢吃什么？我喜欢鸡蛋和面条。",
            "value": "correct"
          },
          {
            "text": "该吃早餐了。今天我们有牛奶和面包。",
            "value": "wrong1"
          },
          {
            "text": "妈妈早上好。我饿了。",
            "value": "wrong2"
          },
          {
            "text": "我喜欢牛奶和面包。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What do you like for breakfast? I like milk and bread.",
        "chinese": "你早餐喜欢吃什么？我喜欢牛奶和面包。",
        "options": [
          {
            "text": "你早餐喜欢吃什么？我喜欢牛奶和面包。",
            "value": "correct"
          },
          {
            "text": "杨明，你早餐喜欢吃什么？我喜欢鸡蛋和面条。",
            "value": "wrong1"
          },
          {
            "text": "该吃早餐了。",
            "value": "wrong2"
          },
          {
            "text": "妈妈早上好。我饿了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你饿了，想告诉妈妈，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's time for breakfast.",
            "value": "wrong1"
          },
          {
            "text": "What do you like for breakfast?",
            "value": "wrong2"
          },
          {
            "text": "Good morning, Mom. I'm hungry.",
            "value": "correct"
          },
          {
            "text": "I like eggs and noodles.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人问你早餐喜欢吃什么，你喜欢鸡蛋和面条，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "I like milk and bread.",
            "value": "wrong1"
          },
          {
            "text": "I like eggs and noodles.",
            "value": "correct"
          },
          {
            "text": "I'm hungry.",
            "value": "wrong2"
          },
          {
            "text": "It's time for breakfast.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "该吃早餐了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Good morning, Mom.",
            "value": "wrong1"
          },
          {
            "text": "I'm hungry.",
            "value": "wrong2"
          },
          {
            "text": "It's time for breakfast.",
            "value": "correct"
          },
          {
            "text": "I like milk and bread.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Good morning, Mom. I'm hungry. It's time for breakfast.",
        "chinese": "妈妈早上好。我饿了。该吃早餐了。",
        "options": [
          {
            "text": "妈妈早上好。我饿了。该吃早餐了。",
            "value": "correct"
          },
          {
            "text": "你早餐喜欢吃什么？我喜欢鸡蛋和面条。",
            "value": "wrong1"
          },
          {
            "text": "今天我们有牛奶、面包、鸡蛋和面条。",
            "value": "wrong2"
          },
          {
            "text": "我喜欢牛奶和面包。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "We have milk, bread, eggs and noodles today. What do you like for breakfast?",
        "chinese": "今天我们有牛奶、面包、鸡蛋和面条。你早餐喜欢吃什么？",
        "options": [
          {
            "text": "今天我们有牛奶、面包、鸡蛋和面条。你早餐喜欢吃什么？",
            "value": "correct"
          },
          {
            "text": "妈妈早上好。我饿了。",
            "value": "wrong1"
          },
          {
            "text": "该吃早餐了。我喜欢鸡蛋和面条。",
            "value": "wrong2"
          },
          {
            "text": "我喜欢牛奶和面包。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I like eggs and noodles. I like milk and bread.",
        "chinese": "我喜欢鸡蛋和面条。我喜欢牛奶和面包。",
        "options": [
          {
            "text": "我喜欢鸡蛋和面条。我喜欢牛奶和面包。",
            "value": "correct"
          },
          {
            "text": "该吃早餐了。你早餐喜欢吃什么？",
            "value": "wrong1"
          },
          {
            "text": "妈妈早上好。我饿了。",
            "value": "wrong2"
          },
          {
            "text": "今天我们有牛奶、面包、鸡蛋和面条。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想问别人早餐喜欢吃什么，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "I'm hungry.",
            "value": "wrong1"
          },
          {
            "text": "It's time for breakfast.",
            "value": "wrong2"
          },
          {
            "text": "I like eggs and noodles.",
            "value": "wrong3"
          },
          {
            "text": "What do you like for breakfast?",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "I like eggs and noodles.",
        "context": "餐厅的点餐卡上写着一个人的早餐选择。你朋友不吃面条。",
        "question": "你朋友会喜欢这个人的选择吗？",
        "options": [
          {
            "text": "不完全喜欢，有面条",
            "value": "correct"
          },
          {
            "text": "完全喜欢",
            "value": "w1"
          },
          {
            "text": "完全不喜欢",
            "value": "w2"
          },
          {
            "text": "不知道",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "我喜欢鸡蛋和面条。"
      },
      {
        "type": "scenario",
        "sentence": "I like milk and bread.",
        "context": "你帮朋友点早餐。朋友的卡片上写着这个。",
        "question": "你应该帮朋友点什么？",
        "options": [
          {
            "text": "牛奶和面包",
            "value": "correct"
          },
          {
            "text": "鸡蛋和面条",
            "value": "w1"
          },
          {
            "text": "米饭和汤",
            "value": "w2"
          },
          {
            "text": "果汁和汉堡",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "我喜欢牛奶和面包。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "I'm hungry.",
          "It's time for breakfast.",
          "I like eggs and noodles."
        ],
        "chinese": "把早餐对话排好！",
        "chineseHint": "我饿了。 / 该吃早餐了。 / 我喜欢鸡蛋和面条。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "Good morning, Mom.",
          "What's for breakfast?",
          "Milk and bread."
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "妈妈早上好。 / 早餐吃什么？ / 牛奶和面包。"
      },
      {
        "type": "word_match",
        "word": "bread",
        "options": [
          {
            "text": "<img src=\"assets/images/bread.png\" width=\"80\">",
            "value": "bread"
          },
          {
            "text": "<img src=\"assets/images/egg.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "bread",
        "chinese": "bread"
      },
      {
        "type": "word_match",
        "word": "egg",
        "options": [
          {
            "text": "<img src=\"assets/images/egg.png\" width=\"80\">",
            "value": "egg"
          },
          {
            "text": "<img src=\"assets/images/milk.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/bread.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "egg",
        "chinese": "egg"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "牛奶(milk)的首字母是？",
        "image": "<img src=\"assets/images/milk.png\" width=\"80\">",
        "options": [
          "n",
          "m",
          "l",
          "k"
        ],
        "correct": 1,
        "chinese": "牛奶",
        "word": "牛奶"
      },
      {
        "type": "pinyin_fill",
        "hint": "m_lk",
        "image": "<img src=\"assets/images/milk.png\" width=\"80\">",
        "options": [
          "i",
          "a",
          "o",
          "e"
        ],
        "correct": 0,
        "chinese": "牛奶"
      },
      {
        "type": "pinyin_fill",
        "hint": "br_ad",
        "image": "<img src=\"assets/images/bread.png\" width=\"80\">",
        "options": [
          "e",
          "a",
          "o",
          "i"
        ],
        "correct": 0,
        "chinese": "面包"
      },
      {
        "type": "fill_blank",
        "prompt": "I like _____ and noodles.",
        "image": "<img src=\"assets/images/egg.png\" width=\"80\">",
        "options": [
          "milk",
          "bread",
          "eggs",
          "water"
        ],
        "correct": 2,
        "chinese": "我喜欢鸡蛋和面条。"
      },
      {
        "type": "word_puzzle",
        "hint": "b_eakfast",
        "word": "breakfast",
        "options": [
          "k",
          "q",
          "b",
          "r"
        ],
        "correct": 3,
        "chinese": "breakfast"
      },
      {
        "type": "word_puzzle",
        "hint": "m_lk",
        "word": "milk",
        "options": [
          "i",
          "h",
          "s",
          "g"
        ],
        "correct": 0,
        "chinese": "milk"
      },
      {
        "type": "word_puzzle",
        "hint": "b_ead",
        "word": "bread",
        "options": [
          "m",
          "e",
          "d",
          "r"
        ],
        "correct": 3,
        "chinese": "bread"
      },
      {
        "type": "fill_blank",
        "prompt": "I like _____.",
        "options": [
          "eggs",
          "breakfast",
          "bread",
          "milk"
        ],
        "correct": 0,
        "chinese": "I like eggs."
      },
      {
        "type": "fill_blank",
        "prompt": "Time for _____.",
        "options": [
          "bread",
          "breakfast",
          "milk",
          "egg"
        ],
        "correct": 1,
        "chinese": "Time for breakfast."
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "妈妈早上好。",
        "words": [
          "Good",
          "morning",
          "Mom"
        ],
        "scrambled": [
          "Mom",
          "Good",
          "morning"
        ],
        "chineseWords": [
          "妈妈",
          "早上好"
        ],
        "chineseScrambled": [
          "早上好",
          "妈妈"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我饿了。",
        "words": [
          "I'm",
          "hungry"
        ],
        "scrambled": [
          "hungry",
          "I'm"
        ],
        "chineseWords": [
          "我",
          "饿了"
        ],
        "chineseScrambled": [
          "饿了",
          "我"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "该吃早餐了。",
        "words": [
          "It's",
          "time",
          "for",
          "breakfast"
        ],
        "scrambled": [
          "breakfast",
          "It's",
          "for",
          "time"
        ],
        "chineseWords": [
          "该",
          "吃",
          "早餐",
          "了"
        ],
        "chineseScrambled": [
          "早餐",
          "了",
          "该",
          "吃"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我喜欢鸡蛋和面条。",
        "words": [
          "I",
          "like",
          "eggs",
          "and",
          "noodles"
        ],
        "scrambled": [
          "noodles",
          "I",
          "and",
          "like",
          "eggs"
        ],
        "chineseWords": [
          "我",
          "喜欢",
          "鸡蛋",
          "和",
          "面条"
        ],
        "chineseScrambled": [
          "面条",
          "我",
          "和",
          "喜欢",
          "鸡蛋"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我喜欢牛奶和面包。",
        "words": [
          "I",
          "like",
          "milk",
          "and",
          "bread"
        ],
        "scrambled": [
          "bread",
          "I",
          "and",
          "like",
          "milk"
        ],
        "chineseWords": [
          "我",
          "喜欢",
          "牛奶",
          "和",
          "面包"
        ],
        "chineseScrambled": [
          "面包",
          "我",
          "和",
          "喜欢",
          "牛奶"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "妈妈早上好。我饿了。",
        "words": [
          "Good",
          "morning",
          "Mom",
          "I'm",
          "hungry"
        ],
        "scrambled": [
          "I'm",
          "Good",
          "hungry",
          "morning",
          "Mom"
        ],
        "chineseWords": [
          "妈妈",
          "早上好",
          "我",
          "饿了"
        ],
        "chineseScrambled": [
          "饿了",
          "妈妈",
          "我",
          "早上好"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "你早餐喜欢吃什么？",
        "words": [
          "What",
          "do",
          "you",
          "like",
          "for",
          "breakfast"
        ],
        "scrambled": [
          "for",
          "like",
          "you",
          "do",
          "What",
          "breakfast"
        ],
        "chineseWords": [
          "你",
          "早餐",
          "喜欢吃",
          "什么",
          "我"
        ],
        "chineseScrambled": [
          "什么",
          "喜欢吃",
          "早餐",
          "你",
          "我"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "Good morning, Mom. I'm _____.",
        "image": "<img src=\"assets/images/bread.png\" width=\"80\">",
        "options": [
          "happy",
          "hungry",
          "sleepy",
          "cold"
        ],
        "correct": 1,
        "chinese": "妈妈早上好。我饿了。"
      },
      {
        "type": "fill_blank",
        "prompt": "It's time for _____.",
        "image": "<img src=\"assets/images/milk.png\" width=\"80\">",
        "options": [
          "lunch",
          "dinner",
          "breakfast",
          "bed"
        ],
        "correct": 2,
        "chinese": "该吃早餐了。"
      },
      {
        "type": "fill_blank",
        "prompt": "We have milk, bread, _____ and noodles today.",
        "image": "<img src=\"assets/images/egg.png\" width=\"80\">",
        "options": [
          "fish",
          "eggs",
          "rice",
          "soup"
        ],
        "correct": 1,
        "chinese": "今天我们有牛奶、面包、鸡蛋和面条。"
      },
      {
        "type": "fill_blank",
        "prompt": "What do you _____ for breakfast?",
        "image": "<img src=\"assets/images/bread.png\" width=\"80\">",
        "options": [
          "want",
          "like",
          "have",
          "eat"
        ],
        "correct": 1,
        "chinese": "你早餐喜欢吃什么？"
      },
      {
        "type": "fill_blank",
        "prompt": "I like _____ and bread.",
        "image": "<img src=\"assets/images/milk.png\" width=\"80\">",
        "options": [
          "eggs",
          "noodles",
          "milk",
          "rice"
        ],
        "correct": 2,
        "chinese": "我喜欢牛奶和面包。"
      },
      {
        "type": "word_puzzle",
        "hint": "brea_fast",
        "word": "breakfast",
        "options": [
          "p",
          "y",
          "v",
          "k"
        ],
        "correct": 3,
        "chinese": "breakfast"
      },
      {
        "type": "word_puzzle",
        "hint": "mi_k",
        "word": "milk",
        "options": [
          "l",
          "u",
          "m",
          "j"
        ],
        "correct": 0,
        "chinese": "milk"
      },
      {
        "type": "word_puzzle",
        "hint": "br_ad",
        "word": "bread",
        "options": [
          "g",
          "v",
          "u",
          "e"
        ],
        "correct": 3,
        "chinese": "bread"
      },
      {
        "type": "word_puzzle",
        "hint": "e_g",
        "word": "egg",
        "options": [
          "n",
          "q",
          "j",
          "g"
        ],
        "correct": 3,
        "chinese": "egg"
      },
      {
        "type": "fill_blank",
        "prompt": "I'm _____.",
        "options": [
          "breakfast",
          "hungry",
          "bread",
          "milk"
        ],
        "correct": 1,
        "chinese": "I'm hungry."
      },
      {
        "type": "fill_blank",
        "prompt": "I like _____.",
        "options": [
          "milk",
          "bread",
          "breakfast",
          "eggs"
        ],
        "correct": 3,
        "chinese": "I like eggs."
      },
      {
        "type": "fill_blank",
        "prompt": "Time for _____.",
        "options": [
          "egg",
          "breakfast",
          "milk",
          "bread"
        ],
        "correct": 1,
        "chinese": "Time for breakfast."
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/milk.png\" width=\"80\">",
        "word": "milk",
        "chinese": "牛奶",
        "expected": "milk"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/bread.png\" width=\"80\">",
        "word": "bread",
        "chinese": "面包",
        "expected": "bread"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/egg.png\" width=\"80\">",
        "word": "egg",
        "chinese": "鸡蛋",
        "expected": "egg"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/noodle.png\" width=\"80\">",
        "word": "noodle",
        "chinese": "面条",
        "expected": "noodle"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/bread.png\" width=\"80\">",
        "word": "breakfast",
        "chinese": "早餐",
        "expected": "breakfast"
      },
      {
        "type": "speak_select",
        "audio": "milk",
        "options": [
          "<img src=\"assets/images/bread.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">",
          "<img src=\"assets/images/egg.png\" width=\"80\">",
          "<img src=\"assets/images/noodle.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "牛奶"
      },
      {
        "type": "speak_select",
        "audio": "egg",
        "options": [
          "<img src=\"assets/images/noodle.png\" width=\"80\">",
          "<img src=\"assets/images/bread.png\" width=\"80\">",
          "<img src=\"assets/images/egg.png\" width=\"80\">",
          "<img src=\"assets/images/milk.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "鸡蛋"
      },
      {
        "type": "repeat_sentence",
        "word": "I'm hungry.",
        "chinese": "我饿了。",
        "expected": "I'm hungry."
      },
      {
        "type": "repeat_sentence",
        "word": "It's time for breakfast.",
        "chinese": "该吃早餐了。",
        "expected": "It's time for breakfast."
      },
      {
        "type": "repeat_sentence",
        "word": "What do you like for breakfast?",
        "chinese": "你早餐喜欢吃什么？",
        "expected": "What do you like for breakfast?"
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "Good morning, Mom.",
        "chinese": "妈妈早上好。",
        "expected": "Good morning, Mom."
      },
      {
        "type": "repeat_sentence",
        "word": "I'm hungry.",
        "chinese": "我饿了。",
        "expected": "I'm hungry."
      },
      {
        "type": "repeat_sentence",
        "word": "It's time for breakfast.",
        "chinese": "该吃早餐了。",
        "expected": "It's time for breakfast."
      },
      {
        "type": "repeat_sentence",
        "word": "We have milk, bread, eggs and noodles today.",
        "chinese": "今天我们有牛奶、面包、鸡蛋和面条。",
        "expected": "We have milk, bread, eggs and noodles today."
      },
      {
        "type": "repeat_sentence",
        "word": "What do you like for breakfast, Yang Ming?",
        "chinese": "杨明，你早餐喜欢吃什么？",
        "expected": "What do you like for breakfast, Yang Ming?"
      },
      {
        "type": "repeat_sentence",
        "word": "I like eggs and noodles.",
        "chinese": "我喜欢鸡蛋和面条。",
        "expected": "I like eggs and noodles."
      },
      {
        "type": "repeat_sentence",
        "word": "I like milk and bread.",
        "chinese": "我喜欢牛奶和面包。",
        "expected": "I like milk and bread."
      },
      {
        "type": "repeat_sentence",
        "word": "Good morning, Mom. I'm hungry.",
        "chinese": "妈妈早上好。我饿了。",
        "expected": "Good morning, Mom. I'm hungry."
      },
      {
        "type": "repeat_sentence",
        "word": "It's time for breakfast. We have milk, bread, eggs and noodles today.",
        "chinese": "该吃早餐了。今天我们有牛奶、面包、鸡蛋和面条。",
        "expected": "It's time for breakfast. We have milk, bread, eggs and noodles today."
      },
      {
        "type": "repeat_sentence",
        "word": "What do you like for breakfast, Yang Ming? I like eggs and noodles.",
        "chinese": "杨明，你早餐喜欢吃什么？我喜欢鸡蛋和面条。",
        "expected": "What do you like for breakfast, Yang Ming? I like eggs and noodles."
      },
      {
        "type": "repeat_sentence",
        "word": "What do you like for breakfast? I like milk and bread.",
        "chinese": "你早餐喜欢吃什么？我喜欢牛奶和面包。",
        "expected": "What do you like for breakfast? I like milk and bread."
      },
      {
        "type": "repeat_sentence",
        "word": "Good morning, Mom. I'm hungry. It's time for breakfast.",
        "chinese": "妈妈早上好。我饿了。该吃早餐了。",
        "expected": "Good morning, Mom. I'm hungry. It's time for breakfast."
      },
      {
        "type": "repeat_sentence",
        "word": "We have milk, bread, eggs and noodles today. What do you like for breakfast?",
        "chinese": "今天我们有牛奶、面包、鸡蛋和面条。你早餐喜欢吃什么？",
        "expected": "We have milk, bread, eggs and noodles today. What do you like for breakfast?"
      },
      {
        "type": "repeat_sentence",
        "word": "I like eggs and noodles. I like milk and bread.",
        "chinese": "我喜欢鸡蛋和面条。我喜欢牛奶和面包。",
        "expected": "I like eggs and noodles. I like milk and bread."
      },
      {
        "type": "repeat_sentence",
        "word": "Good morning, Mom. I'm hungry. It's time for breakfast. We have milk, bread, eggs and noodles today.",
        "chinese": "妈妈早上好。我饿了。该吃早餐了。今天我们有牛奶、面包、鸡蛋和面条。",
        "expected": "Good morning, Mom. I'm hungry. It's time for breakfast. We have milk, bread, eggs and noodles today."
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/milk.png\" width=\"80\">",
        "word": "milk",
        "chinese": "牛奶",
        "expected": "milk"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/bread.png\" width=\"80\">",
        "word": "bread",
        "chinese": "面包",
        "expected": "bread"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/egg.png\" width=\"80\">",
        "word": "egg",
        "chinese": "鸡蛋",
        "expected": "egg"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/noodle.png\" width=\"80\">",
        "word": "noodle",
        "chinese": "面条",
        "expected": "noodle"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/bread.png\" width=\"80\">",
        "word": "hungry",
        "chinese": "饿的",
        "expected": "hungry"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/milk.png\" width=\"80\">",
        "word": "milk",
        "chinese": "milk"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bread.png\" width=\"80\">",
        "word": "bread",
        "chinese": "bread"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/egg.png\" width=\"80\">",
        "word": "egg",
        "chinese": "egg"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/noodle.png\" width=\"80\">",
        "word": "noodle",
        "chinese": "noodle"
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
      }
    ]
  }
};
