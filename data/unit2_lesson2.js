// Unit 2 Lesson 2: Whose shirt is this?
// Core vocab: whose, shirt, jacket
// Sentences: "Whose shirt is this?", "This is my jacket.", "Here you are.", etc.
var unit2_lesson2 = {
  "id": "U2L2",
  "title": "Whose shirt is this?",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "shirt",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/shorts.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "衬衫"
      },
      {
        "type": "listen_select",
        "audio": "jacket",
        "options": [
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/skirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "夹克"
      },
      {
        "type": "listen_select",
        "audio": "sweater",
        "options": [
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shorts.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "毛衣"
      },
      {
        "type": "listen_select",
        "audio": "Whose shirt is this?",
        "options": [
          "这是谁的夹克？",
          "这是我的衬衫。",
          "这是谁的衬衫？",
          "给你。"
        ],
        "correct": 2,
        "chinese": "这是谁的衬衫？"
      },
      {
        "type": "listen_select",
        "audio": "This is my jacket.",
        "options": [
          "这是我的衬衫。",
          "这是我的夹克。",
          "这是谁的夹克？",
          "谢谢。"
        ],
        "correct": 1,
        "chinese": "这是我的夹克。"
      },
      {
        "type": "listen_select",
        "audio": "Here you are.",
        "options": [
          "谢谢。",
          "不客气。",
          "给你。",
          "这是谁的衬衫？"
        ],
        "correct": 2,
        "chinese": "给你。"
      },
      {
        "type": "listen_tf",
        "audio": "This is a shirt.",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一件衬衫，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a jacket.",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是夹克，这是一件衬衫。"
      },
      {
        "type": "listen_select",
        "audio": "Whose jacket is this? It's Wang Tao's jacket.",
        "options": [
          "这是谁的衬衫？这是杨明的衬衫。",
          "这是谁的夹克？这是王涛的夹克。",
          "这是我的夹克。这是我的衬衫。",
          "给你。谢谢。"
        ],
        "correct": 1,
        "chinese": "这是谁的夹克？这是王涛的夹克。"
      },
      {
        "type": "listen_select",
        "audio": "Is this your jacket? No, it isn't.",
        "options": [
          "这是你的夹克吗？不，不是。",
          "这是谁的衬衫？这是杨明的衬衫。",
          "给你。谢谢。不客气。",
          "这是我的夹克。"
        ],
        "correct": 0,
        "chinese": "这是你的夹克吗？不，不是。"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "shirt",
        "options": [
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/shorts.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "衬衫"
      },
      {
        "type": "listen_select",
        "audio": "jacket",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/skirt.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "夹克"
      },
      {
        "type": "listen_select",
        "audio": "Yang Ming, this is your T-shirt.",
        "options": [
          "杨明，这是你的T恤。",
          "这是我的衬衫。",
          "这是谁的夹克？",
          "给你。"
        ],
        "correct": 0,
        "chinese": "杨明，这是你的T恤。"
      },
      {
        "type": "listen_select",
        "audio": "This is my jacket.",
        "options": [
          "这是我的衬衫。",
          "这是我的夹克。",
          "这是谁的夹克？",
          "这是你的T恤。"
        ],
        "correct": 1,
        "chinese": "这是我的夹克。"
      },
      {
        "type": "listen_select",
        "audio": "This is my shirt.",
        "options": [
          "这是谁的衬衫？",
          "这是我的夹克。",
          "这是我的衬衫。",
          "给你。"
        ],
        "correct": 2,
        "chinese": "这是我的衬衫。"
      },
      {
        "type": "listen_select",
        "audio": "Whose shirt is this?",
        "options": [
          "这是谁的衬衫？",
          "这是我的衬衫。",
          "这是谁的夹克？",
          "这是杨明的衬衫。"
        ],
        "correct": 0,
        "chinese": "这是谁的衬衫？"
      },
      {
        "type": "listen_select",
        "audio": "It's Yang Ming's shirt.",
        "options": [
          "这是王涛的夹克。",
          "这是我的衬衫。",
          "这是杨明的衬衫。",
          "这是谁的衬衫？"
        ],
        "correct": 2,
        "chinese": "这是杨明的衬衫。"
      },
      {
        "type": "listen_select",
        "audio": "Whose jacket is this?",
        "options": [
          "这是谁的衬衫？",
          "这是我的夹克。",
          "这是你的夹克吗？",
          "这是谁的夹克？"
        ],
        "correct": 3,
        "chinese": "这是谁的夹克？"
      },
      {
        "type": "listen_select",
        "audio": "Is this your jacket?",
        "options": [
          "这是你的夹克吗？",
          "这是谁的夹克？",
          "不，不是。",
          "这是我的夹克。"
        ],
        "correct": 0,
        "chinese": "这是你的夹克吗？"
      },
      {
        "type": "listen_select",
        "audio": "No, it isn't. It's Wang Tao's jacket.",
        "options": [
          "是的，它是。这是杨明的衬衫。",
          "不，不是。这是王涛的夹克。",
          "这是谁的衬衫？",
          "给你。谢谢。"
        ],
        "correct": 1,
        "chinese": "不，不是。这是王涛的夹克。"
      },
      {
        "type": "listen_select",
        "audio": "Here you are.",
        "options": [
          "谢谢。",
          "不客气。",
          "给你。",
          "这是谁的衬衫？"
        ],
        "correct": 2,
        "chinese": "给你。"
      },
      {
        "type": "listen_select",
        "audio": "Thank you.",
        "options": [
          "给你。",
          "谢谢。",
          "不客气。",
          "这是我的夹克。"
        ],
        "correct": 1,
        "chinese": "谢谢。"
      },
      {
        "type": "listen_select",
        "audio": "You're welcome.",
        "options": [
          "谢谢。",
          "给你。",
          "这是谁的衬衫？",
          "不客气。"
        ],
        "correct": 3,
        "chinese": "不客气。"
      },
      {
        "type": "listen_select",
        "audio": "Whose shirt is this? It's Yang Ming's shirt.",
        "options": [
          "这是谁的衬衫？这是杨明的衬衫。",
          "这是谁的夹克？这是王涛的夹克。",
          "这是你的夹克吗？不，不是。",
          "给你。谢谢。"
        ],
        "correct": 0,
        "chinese": "这是谁的衬衫？这是杨明的衬衫。"
      },
      {
        "type": "listen_select",
        "audio": "Is this your jacket? No, it isn't. It's Wang Tao's jacket.",
        "options": [
          "这是你的夹克吗？是的，它是。",
          "这是谁的衬衫？这是杨明的衬衫。",
          "这是你的夹克吗？不，不是。这是王涛的夹克。",
          "给你。谢谢。不客气。"
        ],
        "correct": 2,
        "chinese": "这是你的夹克吗？不，不是。这是王涛的夹克。"
      },
      {
        "type": "listen_select",
        "audio": "Here you are. Thank you. You're welcome.",
        "options": [
          "给你。谢谢。不客气。",
          "这是谁的衬衫？这是杨明的衬衫。",
          "这是我的夹克。这是我的衬衫。",
          "这是你的夹克吗？不，不是。"
        ],
        "correct": 0,
        "chinese": "给你。谢谢。不客气。"
      },
      {
        "type": "listen_tf",
        "audio": "This is a jacket.",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一件夹克，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a shirt.",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是衬衫，这是一件夹克。"
      },
      {
        "type": "listen_select",
        "audio": "Yang Ming, this is your T-shirt. What size do you wear?",
        "options": [
          "杨明，这是你的T恤。你穿多大号？",
          "这是谁的衬衫？这是杨明的衬衫。",
          "这是我的夹克。",
          "给你。谢谢。"
        ],
        "correct": 0,
        "chinese": "杨明，这是你的T恤。你穿多大号？"
      },
      {
        "type": "listen_select",
        "audio": "This is my jacket. This is my shirt.",
        "options": [
          "这是谁的夹克？这是谁的衬衫？",
          "这是我的夹克。这是我的衬衫。",
          "杨明，这是你的T恤。",
          "给你。谢谢。不客气。"
        ],
        "correct": 1,
        "chinese": "这是我的夹克。这是我的衬衫。"
      },
      {
        "type": "listen_sequence",
        "audio": "shirt, jacket, sweater",
        "sequence": [
          "shirt",
          "jacket",
          "sweater"
        ],
        "words": [
          "<img src=\"assets/images/sweater.png\" width=\"60\">",
          "<img src=\"assets/images/shirt.png\" width=\"60\">",
          "<img src=\"assets/images/jacket.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "Whose shirt is this?",
        "context": "👔 有人丢了一件衬衫。",
        "question": "有人在问什么？",
        "options": [
          "这是谁的衬衫",
          "这是什么颜色",
          "多少钱",
          "好不好看"
        ],
        "correct": 0,
        "chinese": "这是谁的衬衫？"
      },
      {
        "type": "listen_select",
        "audio": "Here you are. Thank you.",
        "context": "🧥 你帮朋友找到了夹克。",
        "question": "朋友说了什么？",
        "options": [
          "谢谢",
          "不客气",
          "对不起",
          "再见"
        ],
        "correct": 0,
        "chinese": "给你。谢谢。"
      },
      {
        "type": "listen_select",
        "audio": "Is this your jacket?",
        "context": "👔 有人问这件夹克是不是你的。",
        "question": "他在问什么？",
        "options": [
          "这是不是你的夹克",
          "你想买夹克吗",
          "夹克好看吗",
          "夹克多少钱"
        ],
        "correct": 0,
        "chinese": "这是你的夹克吗？"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "word": "shirt",
        "sentence": "This is my shirt.",
        "chinese": "这是我的衬衫。",
        "options": [
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
          {
            "text": "<img src=\"assets/images/shorts.png\" width=\"80\">",
            "value": "shorts"
          }
        ],
        "correct": "shirt"
      },
      {
        "type": "word_match",
        "word": "jacket",
        "sentence": "This is my jacket.",
        "chinese": "这是我的夹克。",
        "options": [
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
          {
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "skirt"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          }
        ],
        "correct": "jacket"
      },
      {
        "type": "word_match",
        "word": "sweater",
        "sentence": "This is a sweater.",
        "chinese": "这是一件毛衣。",
        "options": [
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/shorts.png\" width=\"80\">",
            "value": "shorts"
          }
        ],
        "correct": "sweater"
      },
      {
        "type": "sentence_match",
        "sentence": "Whose shirt is this?",
        "chinese": "这是谁的衬衫？",
        "options": [
          {
            "text": "这是谁的夹克？",
            "value": "wrong1"
          },
          {
            "text": "这是我的衬衫。",
            "value": "wrong2"
          },
          {
            "text": "这是谁的衬衫？",
            "value": "correct"
          },
          {
            "text": "给你。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "This is my jacket.",
        "chinese": "这是我的夹克。",
        "options": [
          {
            "text": "这是我的夹克。",
            "value": "correct"
          },
          {
            "text": "这是我的衬衫。",
            "value": "wrong1"
          },
          {
            "text": "这是谁的夹克？",
            "value": "wrong2"
          },
          {
            "text": "谢谢。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Here you are.",
        "chinese": "给你。",
        "options": [
          {
            "text": "谢谢。",
            "value": "wrong1"
          },
          {
            "text": "给你。",
            "value": "correct"
          },
          {
            "text": "不客气。",
            "value": "wrong2"
          },
          {
            "text": "这是谁的衬衫？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Thank you.",
        "chinese": "谢谢。",
        "options": [
          {
            "text": "给你。",
            "value": "wrong1"
          },
          {
            "text": "不客气。",
            "value": "wrong2"
          },
          {
            "text": "谢谢。",
            "value": "correct"
          },
          {
            "text": "这是我的衬衫。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "You're welcome.",
        "chinese": "不客气。",
        "options": [
          {
            "text": "不客气。",
            "value": "correct"
          },
          {
            "text": "谢谢。",
            "value": "wrong1"
          },
          {
            "text": "给你。",
            "value": "wrong2"
          },
          {
            "text": "这是谁的夹克？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想知道这件衬衫是谁的，你会问：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "This is my shirt.",
            "value": "wrong1"
          },
          {
            "text": "Here you are.",
            "value": "wrong2"
          },
          {
            "text": "Whose shirt is this?",
            "value": "correct"
          },
          {
            "text": "Thank you.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人把东西递给你，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Here you are.",
            "value": "wrong1"
          },
          {
            "text": "You're welcome.",
            "value": "wrong2"
          },
          {
            "text": "Whose shirt is this?",
            "value": "wrong3"
          },
          {
            "text": "Thank you.",
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
            "word": "shirt",
            "match": "<img src=\"assets/images/shirt.png\" width=\"50\">",
            "chinese": "衬衫"
          },
          {
            "word": "jacket",
            "match": "<img src=\"assets/images/jacket.png\" width=\"50\">",
            "chinese": "夹克"
          },
          {
            "word": "sweater",
            "match": "<img src=\"assets/images/sweater.png\" width=\"50\">",
            "chinese": "毛衣"
          },
          {
            "word": "skirt",
            "match": "<img src=\"assets/images/skirt.png\" width=\"50\">",
            "chinese": "裙子"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "whose",
            "match": "谁的",
            "example": "Whose shirt is this?"
          },
          {
            "word": "shirt",
            "match": "衬衫",
            "example": "This is my shirt."
          },
          {
            "word": "jacket",
            "match": "夹克",
            "example": "This is my jacket."
          },
          {
            "word": "welcome",
            "match": "不客气",
            "example": "You're welcome."
          }
        ]
      },
      {
        "type": "word_match",
        "word": "shirt",
        "sentence": "Whose shirt is this?",
        "chinese": "这是谁的衬衫？",
        "options": [
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
          {
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "skirt"
          }
        ],
        "correct": "shirt"
      },
      {
        "type": "word_match",
        "word": "jacket",
        "sentence": "Whose jacket is this?",
        "chinese": "这是谁的夹克？",
        "options": [
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/shorts.png\" width=\"80\">",
            "value": "shorts"
          }
        ],
        "correct": "jacket"
      },
      {
        "type": "sentence_match",
        "sentence": "Yang Ming, this is your T-shirt.",
        "chinese": "杨明，这是你的T恤。",
        "options": [
          {
            "text": "杨明，这是你的T恤。",
            "value": "correct"
          },
          {
            "text": "这是我的衬衫。",
            "value": "wrong1"
          },
          {
            "text": "这是谁的夹克？",
            "value": "wrong2"
          },
          {
            "text": "给你。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "This is my jacket.",
        "chinese": "这是我的夹克。",
        "options": [
          {
            "text": "这是我的衬衫。",
            "value": "wrong1"
          },
          {
            "text": "这是我的夹克。",
            "value": "correct"
          },
          {
            "text": "这是谁的夹克？",
            "value": "wrong2"
          },
          {
            "text": "谢谢。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "This is my shirt.",
        "chinese": "这是我的衬衫。",
        "options": [
          {
            "text": "这是谁的衬衫？",
            "value": "wrong1"
          },
          {
            "text": "这是我的夹克。",
            "value": "wrong2"
          },
          {
            "text": "这是我的衬衫。",
            "value": "correct"
          },
          {
            "text": "给你。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Whose shirt is this?",
        "chinese": "这是谁的衬衫？",
        "options": [
          {
            "text": "这是谁的衬衫？",
            "value": "correct"
          },
          {
            "text": "这是我的衬衫。",
            "value": "wrong1"
          },
          {
            "text": "这是谁的夹克？",
            "value": "wrong2"
          },
          {
            "text": "这是杨明的衬衫。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's Yang Ming's shirt.",
        "chinese": "这是杨明的衬衫。",
        "options": [
          {
            "text": "这是王涛的夹克。",
            "value": "wrong1"
          },
          {
            "text": "这是杨明的衬衫。",
            "value": "correct"
          },
          {
            "text": "这是我的衬衫。",
            "value": "wrong2"
          },
          {
            "text": "这是谁的衬衫？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Whose jacket is this?",
        "chinese": "这是谁的夹克？",
        "options": [
          {
            "text": "这是谁的衬衫？",
            "value": "wrong1"
          },
          {
            "text": "这是我的夹克。",
            "value": "wrong2"
          },
          {
            "text": "这是谁的夹克？",
            "value": "correct"
          },
          {
            "text": "这是你的夹克吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is this your jacket?",
        "chinese": "这是你的夹克吗？",
        "options": [
          {
            "text": "这是你的夹克吗？",
            "value": "correct"
          },
          {
            "text": "这是谁的夹克？",
            "value": "wrong1"
          },
          {
            "text": "不，不是。",
            "value": "wrong2"
          },
          {
            "text": "这是我的夹克。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "No, it isn't. It's Wang Tao's jacket.",
        "chinese": "不，不是。这是王涛的夹克。",
        "options": [
          {
            "text": "是的，它是。这是杨明的衬衫。",
            "value": "wrong1"
          },
          {
            "text": "不，不是。这是王涛的夹克。",
            "value": "correct"
          },
          {
            "text": "这是谁的衬衫？",
            "value": "wrong2"
          },
          {
            "text": "给你。谢谢。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Here you are.",
        "chinese": "给你。",
        "options": [
          {
            "text": "谢谢。",
            "value": "wrong1"
          },
          {
            "text": "给你。",
            "value": "correct"
          },
          {
            "text": "不客气。",
            "value": "wrong2"
          },
          {
            "text": "这是谁的衬衫？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Thank you.",
        "chinese": "谢谢。",
        "options": [
          {
            "text": "谢谢。",
            "value": "correct"
          },
          {
            "text": "给你。",
            "value": "wrong1"
          },
          {
            "text": "不客气。",
            "value": "wrong2"
          },
          {
            "text": "这是我的衬衫。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "You're welcome.",
        "chinese": "不客气。",
        "options": [
          {
            "text": "给你。",
            "value": "wrong1"
          },
          {
            "text": "谢谢。",
            "value": "wrong2"
          },
          {
            "text": "不客气。",
            "value": "correct"
          },
          {
            "text": "这是谁的夹克？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Whose shirt is this? It's Yang Ming's shirt.",
        "chinese": "这是谁的衬衫？这是杨明的衬衫。",
        "options": [
          {
            "text": "这是谁的衬衫？这是杨明的衬衫。",
            "value": "correct"
          },
          {
            "text": "这是谁的夹克？这是王涛的夹克。",
            "value": "wrong1"
          },
          {
            "text": "这是你的夹克吗？不，不是。",
            "value": "wrong2"
          },
          {
            "text": "给你。谢谢。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is this your jacket? No, it isn't. It's Wang Tao's jacket.",
        "chinese": "这是你的夹克吗？不，不是。这是王涛的夹克。",
        "options": [
          {
            "text": "这是谁的衬衫？这是杨明的衬衫。",
            "value": "wrong1"
          },
          {
            "text": "给你。谢谢。不客气。",
            "value": "wrong2"
          },
          {
            "text": "这是你的夹克吗？不，不是。这是王涛的夹克。",
            "value": "correct"
          },
          {
            "text": "这是我的夹克。这是我的衬衫。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想知道这件夹克是谁的，你会问：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "This is my jacket.",
            "value": "wrong1"
          },
          {
            "text": "Is this your jacket?",
            "value": "wrong2"
          },
          {
            "text": "Whose jacket is this?",
            "value": "correct"
          },
          {
            "text": "Here you are.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人帮你找到了衬衫递给你，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Here you are.",
            "value": "wrong1"
          },
          {
            "text": "You're welcome.",
            "value": "wrong2"
          },
          {
            "text": "Thank you.",
            "value": "correct"
          },
          {
            "text": "Whose shirt is this?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Here you are. Thank you. You're welcome.",
        "chinese": "给你。谢谢。不客气。",
        "options": [
          {
            "text": "给你。谢谢。不客气。",
            "value": "correct"
          },
          {
            "text": "谢谢。不客气。给你。",
            "value": "wrong1"
          },
          {
            "text": "这是谁的衬衫？",
            "value": "wrong2"
          },
          {
            "text": "这是我的夹克。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "This is my jacket. This is my shirt.",
        "chinese": "这是我的夹克。这是我的衬衫。",
        "options": [
          {
            "text": "这是我的夹克。这是我的衬衫。",
            "value": "correct"
          },
          {
            "text": "这是谁的衬衫？这是杨明的衬衫。",
            "value": "wrong1"
          },
          {
            "text": "杨明，这是你的T恤。",
            "value": "wrong2"
          },
          {
            "text": "给你。谢谢。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人问你这件夹克是不是你的，但不是，你会说：",
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
            "text": "Here you are.",
            "value": "wrong2"
          },
          {
            "text": "Thank you.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "Whose shirt is this? It's my shirt.",
        "context": "更衣室里有一件衬衫没人认领。你看到一张纸条。",
        "question": "谁的衬衫？",
        "options": [
          {
            "text": "写纸条的人的",
            "value": "correct"
          },
          {
            "text": "老师的",
            "value": "w1"
          },
          {
            "text": "没人的",
            "value": "w2"
          },
          {
            "text": "朋友的",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "这是谁的衬衫？这是我的衬衫。"
      },
      {
        "type": "scenario",
        "sentence": "Is this your jacket? Yes, it is.",
        "context": "你捡到一件夹克问同学。",
        "question": "这件夹克是他的吗？",
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
            "text": "不知道",
            "value": "w2"
          },
          {
            "text": "可能是",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "这是你的夹克吗？是的。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "Whose shirt is this?",
          "It's my shirt.",
          "Thank you!"
        ],
        "chinese": "把找衣服对话排好！",
        "chineseHint": "这是谁的衬衫？ / 这是我的衬衫。 / 谢谢！"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "Is this your jacket?",
          "Yes, it is.",
          "Here you are."
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "这是你的夹克吗？ / 是的。 / 给你。"
      },
      {
        "type": "word_match",
        "word": "sweater",
        "options": [
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "sweater",
        "chinese": "sweater"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "衬衫的首字母是？",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "options": [
          "c",
          "s",
          "j",
          "t"
        ],
        "correct": 1,
        "chinese": "衬衫",
        "word": "衬衫"
      },
      {
        "type": "pinyin_fill",
        "hint": "sh_rt",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "options": [
          "i",
          "a",
          "o",
          "e"
        ],
        "correct": 0,
        "chinese": "衬衫"
      },
      {
        "type": "pinyin_fill",
        "hint": "j_cket",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "options": [
          "a",
          "e",
          "o",
          "i"
        ],
        "correct": 0,
        "chinese": "夹克"
      },
      {
        "type": "fill_blank",
        "prompt": "Whose _____ is this?",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "options": [
          "jacket",
          "shirt",
          "sweater",
          "skirt"
        ],
        "correct": 1,
        "chinese": "这是谁的衬衫？"
      },
      {
        "type": "word_puzzle",
        "hint": "w_ose",
        "word": "whose",
        "options": [
          "h",
          "p",
          "q",
          "w"
        ],
        "correct": 0,
        "chinese": "whose"
      },
      {
        "type": "word_puzzle",
        "hint": "s_irt",
        "word": "shirt",
        "options": [
          "e",
          "x",
          "h",
          "d"
        ],
        "correct": 2,
        "chinese": "shirt"
      },
      {
        "type": "word_puzzle",
        "hint": "j_cket",
        "word": "jacket",
        "options": [
          "k",
          "g",
          "a",
          "m"
        ],
        "correct": 2,
        "chinese": "jacket"
      },
      {
        "type": "fill_blank",
        "prompt": "Whose shirt is _____?",
        "options": [
          "jacket",
          "whose",
          "this",
          "shirt"
        ],
        "correct": 2,
        "chinese": "Whose shirt is this?"
      },
      {
        "type": "fill_blank",
        "prompt": "This is my _____.",
        "options": [
          "shirt",
          "whose",
          "jacket"
        ],
        "correct": 2,
        "chinese": "This is my jacket."
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "杨明，这是你的T恤。",
        "words": [
          "Yang Ming",
          "this",
          "is",
          "your",
          "T-shirt"
        ],
        "scrambled": [
          "T-shirt",
          "Yang Ming",
          "your",
          "this",
          "is"
        ],
        "chineseWords": [
          "杨明",
          "这",
          "是",
          "你的",
          "T恤"
        ],
        "chineseScrambled": [
          "T恤",
          "杨明",
          "你的",
          "这",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这是我的夹克。",
        "words": [
          "This",
          "is",
          "my",
          "jacket"
        ],
        "scrambled": [
          "jacket",
          "This",
          "my",
          "is"
        ],
        "chineseWords": [
          "这",
          "是",
          "我的",
          "夹克"
        ],
        "chineseScrambled": [
          "夹克",
          "这",
          "我的",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这是我的衬衫。",
        "words": [
          "This",
          "is",
          "my",
          "shirt"
        ],
        "scrambled": [
          "my",
          "shirt",
          "This",
          "is"
        ],
        "chineseWords": [
          "这",
          "是",
          "我的",
          "衬衫"
        ],
        "chineseScrambled": [
          "衬衫",
          "我的",
          "这",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这是谁的衬衫？",
        "words": [
          "Whose",
          "shirt",
          "is",
          "this"
        ],
        "scrambled": [
          "shirt",
          "Whose",
          "this",
          "is"
        ],
        "chineseWords": [
          "谁的",
          "衬衫",
          "是",
          "这"
        ],
        "chineseScrambled": [
          "这",
          "衬衫",
          "谁的",
          "是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这是杨明的衬衫。",
        "words": [
          "It's",
          "Yang Ming's",
          "shirt"
        ],
        "scrambled": [
          "shirt",
          "It's",
          "Yang Ming's"
        ],
        "chineseWords": [
          "这是",
          "杨明的",
          "衬衫"
        ],
        "chineseScrambled": [
          "衬衫",
          "这是",
          "杨明的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这是谁的夹克？",
        "words": [
          "Whose",
          "jacket",
          "is",
          "this"
        ],
        "scrambled": [
          "this",
          "jacket",
          "Whose",
          "is"
        ],
        "chineseWords": [
          "谁的",
          "夹克",
          "是",
          "这"
        ],
        "chineseScrambled": [
          "这",
          "夹克",
          "是",
          "谁的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这是你的夹克吗？",
        "words": [
          "Is",
          "this",
          "your",
          "jacket"
        ],
        "scrambled": [
          "jacket",
          "Is",
          "your",
          "this"
        ],
        "chineseWords": [
          "是",
          "这",
          "你的",
          "夹克",
          "吗"
        ],
        "chineseScrambled": [
          "夹克",
          "吗",
          "是",
          "你的",
          "这"
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
        "type": "sentence_order",
        "chinese": "这是王涛的夹克。",
        "words": [
          "It's",
          "Wang Tao's",
          "jacket"
        ],
        "scrambled": [
          "jacket",
          "It's",
          "Wang Tao's"
        ],
        "chineseWords": [
          "这是",
          "王涛的",
          "夹克"
        ],
        "chineseScrambled": [
          "王涛的",
          "夹克",
          "这是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "给你。",
        "words": [
          "Here",
          "you",
          "are"
        ],
        "scrambled": [
          "you",
          "Here",
          "are"
        ],
        "chineseWords": [
          "给",
          "你"
        ],
        "chineseScrambled": [
          "你",
          "给"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "谢谢。",
        "words": [
          "Thank",
          "you"
        ],
        "scrambled": [
          "you",
          "Thank"
        ],
        "chineseWords": [
          "谢谢"
        ],
        "chineseScrambled": [
          "谢谢"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "不客气。",
        "words": [
          "You're",
          "welcome"
        ],
        "scrambled": [
          "welcome",
          "You're"
        ],
        "chineseWords": [
          "不客气"
        ],
        "chineseScrambled": [
          "不客气"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "不，不是。",
        "words": [
          "No",
          "it"
        ],
        "scrambled": [
          "it",
          "No"
        ],
        "chineseWords": [
          "吗",
          "不"
        ],
        "chineseScrambled": [
          "不",
          "吗"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "这是王涛的夹克。",
        "words": [
          "isn't",
          "It's",
          "Wang Tao's",
          "jacket"
        ],
        "scrambled": [
          "Wang Tao's",
          "It's",
          "isn't",
          "jacket"
        ],
        "chineseWords": [
          "不是",
          "这是",
          "王涛的",
          "夹克"
        ],
        "chineseScrambled": [
          "王涛的",
          "这是",
          "不是",
          "夹克"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "Whose _____ is this? It's Yang Ming's.",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "options": [
          "jacket",
          "shirt",
          "sweater",
          "skirt"
        ],
        "correct": 1,
        "chinese": "这是谁的衬衫？这是杨明的。"
      },
      {
        "type": "fill_blank",
        "prompt": "Is this your _____? No, it isn't.",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "options": [
          "shirt",
          "jacket",
          "sweater",
          "shorts"
        ],
        "correct": 1,
        "chinese": "这是你的夹克吗？不，不是。"
      },
      {
        "type": "fill_blank",
        "prompt": "Here you are. _____ you.",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "options": [
          "Help",
          "Thank",
          "See",
          "Give"
        ],
        "correct": 1,
        "chinese": "给你。谢谢。"
      },
      {
        "type": "fill_blank",
        "prompt": "Thank you. You're _____.",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "options": [
          "welcome",
          "good",
          "happy",
          "nice"
        ],
        "correct": 0,
        "chinese": "谢谢。不客气。"
      },
      {
        "type": "fill_blank",
        "prompt": "This is _____ jacket.",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "options": [
          "your",
          "my",
          "his",
          "her"
        ],
        "correct": 1,
        "chinese": "这是我的夹克。"
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "word": "shirt",
        "chinese": "衬衫",
        "expected": "shirt"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "word": "jacket",
        "chinese": "夹克",
        "expected": "jacket"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "word": "sweater",
        "chinese": "毛衣",
        "expected": "sweater"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/shorts.png\" width=\"80\">",
        "word": "shorts",
        "chinese": "短裤",
        "expected": "shorts"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/skirt.png\" width=\"80\">",
        "word": "skirt",
        "chinese": "裙子",
        "expected": "skirt"
      },
      {
        "type": "speak_select",
        "audio": "shirt",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/shorts.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "衬衫"
      },
      {
        "type": "speak_select",
        "audio": "jacket",
        "options": [
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/skirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "夹克"
      },
      {
        "type": "repeat_sentence",
        "word": "Whose shirt is this?",
        "chinese": "这是谁的衬衫？",
        "expected": "Whose shirt is this?"
      },
      {
        "type": "repeat_sentence",
        "word": "This is my jacket.",
        "chinese": "这是我的夹克。",
        "expected": "This is my jacket."
      },
      {
        "type": "repeat_sentence",
        "word": "Here you are.",
        "chinese": "给你。",
        "expected": "Here you are."
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "Yang Ming, this is your T-shirt.",
        "chinese": "杨明，这是你的T恤。",
        "expected": "Yang Ming, this is your T-shirt."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "word": "This is my jacket.",
        "chinese": "这是我的夹克。",
        "expected": "This is my jacket."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "word": "This is my shirt.",
        "chinese": "这是我的衬衫。",
        "expected": "This is my shirt."
      },
      {
        "type": "repeat_sentence",
        "word": "Whose shirt is this?",
        "chinese": "这是谁的衬衫？",
        "expected": "Whose shirt is this?"
      },
      {
        "type": "repeat_sentence",
        "word": "It's Yang Ming's shirt.",
        "chinese": "这是杨明的衬衫。",
        "expected": "It's Yang Ming's shirt."
      },
      {
        "type": "repeat_sentence",
        "word": "Whose jacket is this?",
        "chinese": "这是谁的夹克？",
        "expected": "Whose jacket is this?"
      },
      {
        "type": "repeat_sentence",
        "word": "Is this your jacket?",
        "chinese": "这是你的夹克吗？",
        "expected": "Is this your jacket?"
      },
      {
        "type": "repeat_sentence",
        "word": "No, it isn't. It's Wang Tao's jacket.",
        "chinese": "不，不是。这是王涛的夹克。",
        "expected": "No, it isn't. It's Wang Tao's jacket."
      },
      {
        "type": "repeat_sentence",
        "word": "Here you are.",
        "chinese": "给你。",
        "expected": "Here you are."
      },
      {
        "type": "repeat_sentence",
        "word": "Thank you.",
        "chinese": "谢谢。",
        "expected": "Thank you."
      },
      {
        "type": "repeat_sentence",
        "word": "You're welcome.",
        "chinese": "不客气。",
        "expected": "You're welcome."
      },
      {
        "type": "repeat_sentence",
        "word": "Whose shirt is this? It's Yang Ming's shirt.",
        "chinese": "这是谁的衬衫？这是杨明的衬衫。",
        "expected": "Whose shirt is this? It's Yang Ming's shirt."
      },
      {
        "type": "repeat_sentence",
        "word": "Is this your jacket? No, it isn't.",
        "chinese": "这是你的夹克吗？不，不是。",
        "expected": "Is this your jacket? No, it isn't."
      },
      {
        "type": "repeat_sentence",
        "word": "Here you are. Thank you. You're welcome.",
        "chinese": "给你。谢谢。不客气。",
        "expected": "Here you are. Thank you. You're welcome."
      },
      {
        "type": "repeat_sentence",
        "word": "This is my jacket. This is my shirt.",
        "chinese": "这是我的夹克。这是我的衬衫。",
        "expected": "This is my jacket. This is my shirt."
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "word": "shirt",
        "chinese": "衬衫",
        "expected": "shirt"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "word": "jacket",
        "chinese": "夹克",
        "expected": "jacket"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "word": "sweater",
        "chinese": "毛衣",
        "expected": "sweater"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/shorts.png\" width=\"80\">",
        "word": "shorts",
        "chinese": "短裤",
        "expected": "shorts"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/skirt.png\" width=\"80\">",
        "word": "skirt",
        "chinese": "裙子",
        "expected": "skirt"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "word": "shirt",
        "chinese": "shirt"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "word": "jacket",
        "chinese": "jacket"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "word": "sweater",
        "chinese": "sweater"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/skirt.png\" width=\"80\">",
        "word": "skirt",
        "chinese": "skirt"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/shorts.png\" width=\"80\">",
        "word": "shorts",
        "chinese": "shorts"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "word": "T-shirt",
        "chinese": "T-shirt"
      }
    ]
  }
};
