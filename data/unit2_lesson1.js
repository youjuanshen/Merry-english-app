// Unit 2 Lesson 1: What size do you wear?
// Core vocab: T-shirt, do, wear, size, big, small
// Sentences: "Put on your team T-shirts, please.", "What size do you wear?", "It's too big.", "It's too small."
var unit2_lesson1 = {
  "id": "U2L1",
  "title": "What size do you wear?",
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
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/skirt.png\" width=\"80\">"
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
        "audio": "What size do you wear?",
        "options": [
          "请穿上你的队服T恤。",
          "你穿多大号？",
          "太大了。",
          "太小了。"
        ],
        "correct": 1,
        "chinese": "你穿多大号？"
      },
      {
        "type": "listen_select",
        "audio": "Put on your team T-shirts, please.",
        "options": [
          "你穿多大号？",
          "太大了。",
          "请穿上你的队服T恤。",
          "S号。"
        ],
        "correct": 2,
        "chinese": "请穿上你的队服T恤。"
      },
      {
        "type": "listen_select",
        "audio": "It's too big.",
        "options": [
          "太小了。",
          "你穿多大号？",
          "请穿上你的队服T恤。",
          "太大了。"
        ],
        "correct": 3,
        "chinese": "太大了。"
      },
      {
        "type": "listen_tf",
        "audio": "This is a T-shirt.",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一件T恤，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a jacket.",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是夹克，这是一件T恤。"
      },
      {
        "type": "listen_select",
        "audio": "What size do you wear? Size S.",
        "options": [
          "你穿多大号？S号。",
          "请穿上你的队服T恤。",
          "太大了。太小了。",
          "你穿M号。"
        ],
        "correct": 0,
        "chinese": "你穿多大号？S号。"
      },
      {
        "type": "listen_select",
        "audio": "Put on your team T-shirts, please. What size do you wear?",
        "options": [
          "太大了。太小了。",
          "S号。M号。",
          "请穿上你的队服T恤。你穿多大号？",
          "你穿多大号？太大了。"
        ],
        "correct": 2,
        "chinese": "请穿上你的队服T恤。你穿多大号？"
      }
    ],
    "practice": [
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
        "audio": "sweater",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/skirt.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "毛衣"
      },
      {
        "type": "listen_select",
        "audio": "Put on your team T-shirts, please.",
        "options": [
          "你穿多大号？",
          "请穿上你的队服T恤。",
          "太大了。",
          "S号。"
        ],
        "correct": 1,
        "chinese": "请穿上你的队服T恤。"
      },
      {
        "type": "listen_select",
        "audio": "What size do you wear?",
        "options": [
          "你穿多大号？",
          "请穿上你的队服T恤。",
          "太大了。",
          "太小了。"
        ],
        "correct": 0,
        "chinese": "你穿多大号？"
      },
      {
        "type": "listen_select",
        "audio": "Size S.",
        "options": [
          "L号。",
          "M号。",
          "S号。",
          "XL号。"
        ],
        "correct": 2,
        "chinese": "S号。"
      },
      {
        "type": "listen_select",
        "audio": "Size M.",
        "options": [
          "M号。",
          "S号。",
          "L号。",
          "XL号。"
        ],
        "correct": 0,
        "chinese": "M号。"
      },
      {
        "type": "listen_select",
        "audio": "Size L.",
        "options": [
          "S号。",
          "XL号。",
          "M号。",
          "L号。"
        ],
        "correct": 3,
        "chinese": "L号。"
      },
      {
        "type": "listen_select",
        "audio": "Size XL.",
        "options": [
          "L号。",
          "XL号。",
          "S号。",
          "M号。"
        ],
        "correct": 1,
        "chinese": "XL号。"
      },
      {
        "type": "listen_select",
        "audio": "It's too big.",
        "options": [
          "太小了。",
          "你穿多大号？",
          "太大了。",
          "请穿上你的队服T恤。"
        ],
        "correct": 2,
        "chinese": "太大了。"
      },
      {
        "type": "listen_select",
        "audio": "It's too small.",
        "options": [
          "太大了。",
          "太小了。",
          "S号。",
          "你穿多大号？"
        ],
        "correct": 1,
        "chinese": "太小了。"
      },
      {
        "type": "listen_select",
        "audio": "What size do you wear? Size M.",
        "options": [
          "你穿多大号？S号。",
          "请穿上你的队服T恤。",
          "你穿多大号？M号。",
          "太大了。"
        ],
        "correct": 2,
        "chinese": "你穿多大号？M号。"
      },
      {
        "type": "listen_select",
        "audio": "What size do you wear? Size L.",
        "options": [
          "你穿多大号？L号。",
          "你穿多大号？XL号。",
          "太小了。",
          "请穿上你的队服T恤。"
        ],
        "correct": 0,
        "chinese": "你穿多大号？L号。"
      },
      {
        "type": "listen_select",
        "audio": "What size do you wear? Size XL.",
        "options": [
          "你穿多大号？S号。",
          "太大了。",
          "请穿上你的队服T恤。",
          "你穿多大号？XL号。"
        ],
        "correct": 3,
        "chinese": "你穿多大号？XL号。"
      },
      {
        "type": "listen_tf",
        "audio": "This is a T-shirt.",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一件T恤，正确！"
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
        "audio": "This is a sweater.",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是毛衣，这是一件T恤。"
      },
      {
        "type": "listen_select",
        "audio": "Put on your team T-shirts, please. What size do you wear? Size S.",
        "options": [
          "请穿上你的队服T恤。你穿多大号？S号。",
          "你穿多大号？M号。太大了。",
          "太小了。请穿上你的队服T恤。",
          "你穿多大号？XL号。"
        ],
        "correct": 0,
        "chinese": "请穿上你的队服T恤。你穿多大号？S号。"
      },
      {
        "type": "listen_select",
        "audio": "It's too big. It's too small.",
        "options": [
          "太大了。太小了。",
          "太小了。太大了。",
          "你穿多大号？S号。",
          "请穿上你的队服T恤。"
        ],
        "correct": 0,
        "chinese": "太大了。太小了。"
      },
      {
        "type": "listen_select",
        "audio": "What size do you wear? Size S. It's too small.",
        "options": [
          "你穿多大号？S号。太大了。",
          "你穿多大号？M号。太小了。",
          "你穿多大号？S号。太小了。",
          "请穿上你的队服T恤。"
        ],
        "correct": 2,
        "chinese": "你穿多大号？S号。太小了。"
      },
      {
        "type": "listen_select",
        "audio": "What size do you wear? Size XL. It's too big.",
        "options": [
          "你穿多大号？L号。太大了。",
          "你穿多大号？XL号。太大了。",
          "你穿多大号？XL号。太小了。",
          "请穿上你的队服T恤。"
        ],
        "correct": 1,
        "chinese": "你穿多大号？XL号。太大了。"
      },
      {
        "type": "listen_sequence",
        "audio": "T-shirt, shorts, jacket",
        "sequence": [
          "T-shirt",
          "shorts",
          "jacket"
        ],
        "words": [
          "<img src=\"assets/images/jacket.png\" width=\"60\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"60\">",
          "<img src=\"assets/images/shorts.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "What size do you wear?",
        "context": "👕 体育课要穿队服。老师问你穿多大号。",
        "question": "老师问你什么？",
        "options": [
          "穿多大号",
          "穿什么颜色",
          "穿什么鞋",
          "去哪里"
        ],
        "correct": 0,
        "chinese": "你穿多大号？"
      },
      {
        "type": "listen_select",
        "audio": "It's too big.",
        "context": "👕 你试了一件T恤，但穿不下。",
        "question": "这件衣服怎么了？",
        "options": [
          "太大了",
          "太小了",
          "刚好",
          "太贵了"
        ],
        "correct": 0,
        "chinese": "太大了。"
      },
      {
        "type": "listen_select",
        "audio": "It's too small.",
        "context": "👕 换了一件小号的，还是不行。",
        "question": "这件呢？",
        "options": [
          "太小了",
          "太大了",
          "刚好",
          "太长了"
        ],
        "correct": 0,
        "chinese": "太小了。"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "word": "T-shirt",
        "sentence": "Put on your team T-shirts, please.",
        "chinese": "请穿上你的队服T恤。",
        "options": [
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "T-shirt"
          },
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          }
        ],
        "correct": "T-shirt"
      },
      {
        "type": "word_match",
        "word": "jacket",
        "sentence": "This is a jacket.",
        "chinese": "这是一件夹克。",
        "options": [
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "T-shirt"
          }
        ],
        "correct": "jacket"
      },
      {
        "type": "word_match",
        "word": "shirt",
        "sentence": "This is a shirt.",
        "chinese": "这是一件衬衫。",
        "options": [
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "T-shirt"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          }
        ],
        "correct": "shirt"
      },
      {
        "type": "sentence_match",
        "sentence": "Put on your team T-shirts, please.",
        "chinese": "请穿上你的队服T恤。",
        "options": [
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "T-shirt"
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
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          }
        ],
        "correct": "T-shirt"
      },
      {
        "type": "sentence_match",
        "sentence": "What size do you wear?",
        "chinese": "你穿多大号？",
        "options": [
          {
            "text": "太大了。",
            "value": "wrong1"
          },
          {
            "text": "你穿多大号？",
            "value": "correct"
          },
          {
            "text": "请穿上你的队服T恤。",
            "value": "wrong2"
          },
          {
            "text": "太小了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's too big.",
        "chinese": "太大了。",
        "options": [
          {
            "text": "太大了。",
            "value": "correct"
          },
          {
            "text": "太小了。",
            "value": "wrong1"
          },
          {
            "text": "你穿多大号？",
            "value": "wrong2"
          },
          {
            "text": "S号。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's too small.",
        "chinese": "太小了。",
        "options": [
          {
            "text": "太大了。",
            "value": "wrong1"
          },
          {
            "text": "你穿多大号？",
            "value": "wrong2"
          },
          {
            "text": "太小了。",
            "value": "correct"
          },
          {
            "text": "M号。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Size S.",
        "chinese": "S号。",
        "options": [
          {
            "text": "M号。",
            "value": "wrong1"
          },
          {
            "text": "L号。",
            "value": "wrong2"
          },
          {
            "text": "S号。",
            "value": "correct"
          },
          {
            "text": "XL号。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "老师让你穿上队服T恤，你会听到：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "What size do you wear?",
            "value": "wrong1"
          },
          {
            "text": "It's too big.",
            "value": "wrong2"
          },
          {
            "text": "Put on your team T-shirts, please.",
            "value": "correct"
          },
          {
            "text": "Size S.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你试了一件T恤，发现太大了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's too small.",
            "value": "wrong1"
          },
          {
            "text": "What size do you wear?",
            "value": "wrong2"
          },
          {
            "text": "Size M.",
            "value": "wrong3"
          },
          {
            "text": "It's too big.",
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
            "word": "T-shirt",
            "match": "<img src=\"assets/images/T-shirt.png\" width=\"50\">",
            "chinese": "T恤"
          },
          {
            "word": "shorts",
            "match": "<img src=\"assets/images/shorts.png\" width=\"50\">",
            "chinese": "短裤"
          },
          {
            "word": "jacket",
            "match": "<img src=\"assets/images/jacket.png\" width=\"50\">",
            "chinese": "夹克"
          },
          {
            "word": "shirt",
            "match": "<img src=\"assets/images/shirt.png\" width=\"50\">",
            "chinese": "衬衫"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "wear",
            "match": "穿",
            "example": "What size do you wear?"
          },
          {
            "word": "size",
            "match": "尺寸",
            "example": "What size do you wear?"
          },
          {
            "word": "big",
            "match": "太大",
            "example": "It's too big."
          },
          {
            "word": "small",
            "match": "太小",
            "example": "It's too small."
          }
        ]
      },
      {
        "type": "word_match",
        "word": "T-shirt",
        "sentence": "Put on your team T-shirts, please.",
        "chinese": "请穿上你的队服T恤。",
        "options": [
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "T-shirt"
          },
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
          }
        ],
        "correct": "T-shirt"
      },
      {
        "type": "word_match",
        "word": "sweater",
        "sentence": "This is a sweater.",
        "chinese": "这是一件毛衣。",
        "options": [
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "T-shirt"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          }
        ],
        "correct": "sweater"
      },
      {
        "type": "sentence_match",
        "sentence": "Put on your team T-shirts, please.",
        "chinese": "请穿上你的队服T恤。",
        "options": [
          {
            "text": "你穿多大号？",
            "value": "wrong1"
          },
          {
            "text": "请穿上你的队服T恤。",
            "value": "correct"
          },
          {
            "text": "太大了。",
            "value": "wrong2"
          },
          {
            "text": "S号。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What size do you wear?",
        "chinese": "你穿多大号？",
        "options": [
          {
            "text": "请穿上你的队服T恤。",
            "value": "wrong1"
          },
          {
            "text": "太大了。",
            "value": "wrong2"
          },
          {
            "text": "你穿多大号？",
            "value": "correct"
          },
          {
            "text": "太小了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Size S.",
        "chinese": "S号。",
        "options": [
          {
            "text": "S号。",
            "value": "correct"
          },
          {
            "text": "M号。",
            "value": "wrong1"
          },
          {
            "text": "L号。",
            "value": "wrong2"
          },
          {
            "text": "XL号。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Size M.",
        "chinese": "M号。",
        "options": [
          {
            "text": "S号。",
            "value": "wrong1"
          },
          {
            "text": "M号。",
            "value": "correct"
          },
          {
            "text": "L号。",
            "value": "wrong2"
          },
          {
            "text": "XL号。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Size L.",
        "chinese": "L号。",
        "options": [
          {
            "text": "S号。",
            "value": "wrong1"
          },
          {
            "text": "M号。",
            "value": "wrong2"
          },
          {
            "text": "L号。",
            "value": "correct"
          },
          {
            "text": "XL号。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Size XL.",
        "chinese": "XL号。",
        "options": [
          {
            "text": "S号。",
            "value": "wrong1"
          },
          {
            "text": "M号。",
            "value": "wrong2"
          },
          {
            "text": "L号。",
            "value": "wrong3"
          },
          {
            "text": "XL号。",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's too big.",
        "chinese": "太大了。",
        "options": [
          {
            "text": "太小了。",
            "value": "wrong1"
          },
          {
            "text": "太大了。",
            "value": "correct"
          },
          {
            "text": "你穿多大号？",
            "value": "wrong2"
          },
          {
            "text": "请穿上你的队服T恤。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's too small.",
        "chinese": "太小了。",
        "options": [
          {
            "text": "太大了。",
            "value": "wrong1"
          },
          {
            "text": "你穿多大号？",
            "value": "wrong2"
          },
          {
            "text": "太小了。",
            "value": "correct"
          },
          {
            "text": "S号。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What size do you wear? Size S.",
        "chinese": "你穿多大号？S号。",
        "options": [
          {
            "text": "你穿多大号？S号。",
            "value": "correct"
          },
          {
            "text": "你穿多大号？M号。",
            "value": "wrong1"
          },
          {
            "text": "太大了。",
            "value": "wrong2"
          },
          {
            "text": "请穿上你的队服T恤。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What size do you wear? Size XL. It's too big.",
        "chinese": "你穿多大号？XL号。太大了。",
        "options": [
          {
            "text": "你穿多大号？XL号。太大了。",
            "value": "correct"
          },
          {
            "text": "你穿多大号？S号。太小了。",
            "value": "wrong1"
          },
          {
            "text": "请穿上你的队服T恤。",
            "value": "wrong2"
          },
          {
            "text": "你穿多大号？M号。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想问别人穿多大号，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Put on your team T-shirts, please.",
            "value": "wrong1"
          },
          {
            "text": "It's too big.",
            "value": "wrong2"
          },
          {
            "text": "What size do you wear?",
            "value": "correct"
          },
          {
            "text": "Size S.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你试了一件T恤，发现太小了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's too big.",
            "value": "wrong1"
          },
          {
            "text": "What size do you wear?",
            "value": "wrong2"
          },
          {
            "text": "Put on your team T-shirts, please.",
            "value": "wrong3"
          },
          {
            "text": "It's too small.",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "老师让大家穿上队服T恤，你会听到：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Put on your team T-shirts, please.",
            "value": "correct"
          },
          {
            "text": "What size do you wear?",
            "value": "wrong1"
          },
          {
            "text": "It's too big.",
            "value": "wrong2"
          },
          {
            "text": "Size M.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What size do you wear? Size S. It's too small.",
        "chinese": "你穿多大号？S号。太小了。",
        "options": [
          {
            "text": "你穿多大号？S号。太小了。",
            "value": "correct"
          },
          {
            "text": "你穿多大号？XL号。太大了。",
            "value": "wrong1"
          },
          {
            "text": "请穿上你的队服T恤。",
            "value": "wrong2"
          },
          {
            "text": "你穿多大号？M号。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Put on your team T-shirts, please. What size do you wear?",
        "chinese": "请穿上你的队服T恤。你穿多大号？",
        "options": [
          {
            "text": "太大了。太小了。",
            "value": "wrong1"
          },
          {
            "text": "请穿上你的队服T恤。你穿多大号？",
            "value": "correct"
          },
          {
            "text": "你穿多大号？S号。",
            "value": "wrong2"
          },
          {
            "text": "S号。太小了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人问你穿多大号，你穿M号，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Size S.",
            "value": "wrong1"
          },
          {
            "text": "Size M.",
            "value": "correct"
          },
          {
            "text": "Size L.",
            "value": "wrong2"
          },
          {
            "text": "Size XL.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's too big. It's too small.",
        "chinese": "太大了。太小了。",
        "options": [
          {
            "text": "太大了。太小了。",
            "value": "correct"
          },
          {
            "text": "太小了。太大了。",
            "value": "wrong1"
          },
          {
            "text": "你穿多大号？S号。",
            "value": "wrong2"
          },
          {
            "text": "请穿上你的队服T恤。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你穿L号，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Size S.",
            "value": "wrong1"
          },
          {
            "text": "Size M.",
            "value": "wrong2"
          },
          {
            "text": "Size L.",
            "value": "correct"
          },
          {
            "text": "Size XL.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "Put on your team T-shirts, please.",
        "context": "体育老师发了通知。你的朋友不懂英文，问你老师说了什么。",
        "question": "老师让大家做什么？",
        "options": [
          {
            "text": "穿上队服T恤",
            "value": "correct"
          },
          {
            "text": "脱掉外套",
            "value": "w1"
          },
          {
            "text": "穿上鞋子",
            "value": "w2"
          },
          {
            "text": "回家",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "请穿上你的队服T恤。"
      },
      {
        "type": "scenario",
        "sentence": "What size do you wear? Size M.",
        "context": "你帮朋友买衣服，店员问了一个问题。",
        "question": "朋友穿什么号？",
        "options": [
          {
            "text": "M号",
            "value": "correct"
          },
          {
            "text": "S号",
            "value": "w1"
          },
          {
            "text": "L号",
            "value": "w2"
          },
          {
            "text": "XL号",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "你穿多大号？M号。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "What size do you wear?",
          "Size M.",
          "OK, here you are."
        ],
        "chinese": "把买衣服对话排好！",
        "chineseHint": "你穿多大号？ / M号。 / 好的，给你。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "Put on your T-shirt.",
          "It's too big.",
          "Try a small one."
        ],
        "chinese": "把试衣服过程排好！",
        "chineseHint": "穿上T恤。 / 太大了。 / 试试小号。"
      },
      {
        "type": "word_match",
        "word": "shorts",
        "options": [
          {
            "text": "<img src=\"assets/images/shorts.png\" width=\"80\">",
            "value": "shorts"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "shorts",
        "chinese": "shorts"
      },
      {
        "type": "word_match",
        "word": "jacket",
        "options": [
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/shorts.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "jacket",
        "chinese": "jacket"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "T恤的首字母是？",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "options": [
          "s",
          "t",
          "d",
          "p"
        ],
        "correct": 1,
        "chinese": "T恤",
        "word": "T恤"
      },
      {
        "type": "pinyin_fill",
        "hint": "w_ar",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "options": [
          "e",
          "a",
          "o",
          "i"
        ],
        "correct": 0,
        "chinese": "穿"
      },
      {
        "type": "pinyin_fill",
        "hint": "s_ze",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "options": [
          "i",
          "a",
          "o",
          "e"
        ],
        "correct": 0,
        "chinese": "尺码"
      },
      {
        "type": "fill_blank",
        "prompt": "Put on your team _____, please.",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "options": [
          "T-shirts",
          "jackets",
          "sweaters",
          "shirts"
        ],
        "correct": 0,
        "chinese": "请穿上你的队服T恤。"
      },
      {
        "type": "word_puzzle",
        "hint": "s_irt",
        "word": "shirt",
        "options": [
          "d",
          "m",
          "h",
          "r"
        ],
        "correct": 2,
        "chinese": "shirt"
      },
      {
        "type": "word_puzzle",
        "hint": "w_ar",
        "word": "wear",
        "options": [
          "e",
          "i",
          "t",
          "s"
        ],
        "correct": 0,
        "chinese": "wear"
      },
      {
        "type": "word_puzzle",
        "hint": "s_ze",
        "word": "size",
        "options": [
          "m",
          "d",
          "z",
          "i"
        ],
        "correct": 3,
        "chinese": "size"
      },
      {
        "type": "fill_blank",
        "prompt": "What size do you _____?",
        "options": [
          "big",
          "shirt",
          "size",
          "wear"
        ],
        "correct": 3,
        "chinese": "What size do you wear?"
      },
      {
        "type": "fill_blank",
        "prompt": "It's too _____.",
        "options": [
          "wear",
          "big",
          "shirt",
          "size"
        ],
        "correct": 1,
        "chinese": "It's too big."
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "请穿上你的队服T恤。",
        "words": [
          "Put",
          "on",
          "your",
          "team",
          "T-shirts",
          "please"
        ],
        "scrambled": [
          "T-shirts",
          "Put",
          "please",
          "your",
          "on",
          "team"
        ],
        "chineseWords": [
          "请",
          "穿上",
          "你的",
          "队服",
          "T恤"
        ],
        "chineseScrambled": [
          "T恤",
          "请",
          "队服",
          "穿上",
          "你的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "你穿多大号？",
        "words": [
          "What",
          "size",
          "do",
          "you",
          "wear"
        ],
        "scrambled": [
          "size",
          "you",
          "What",
          "wear",
          "do"
        ],
        "chineseWords": [
          "你",
          "穿",
          "多大",
          "号"
        ],
        "chineseScrambled": [
          "多大",
          "号",
          "你",
          "穿"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "S号。",
        "words": [
          "Size",
          "S"
        ],
        "scrambled": [
          "S",
          "Size"
        ],
        "chineseWords": [
          "S",
          "号"
        ],
        "chineseScrambled": [
          "号",
          "S"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "M号。",
        "words": [
          "Size",
          "M"
        ],
        "scrambled": [
          "M",
          "Size"
        ],
        "chineseWords": [
          "M",
          "号"
        ],
        "chineseScrambled": [
          "号",
          "M"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "L号。",
        "words": [
          "Size",
          "L"
        ],
        "scrambled": [
          "L",
          "Size"
        ],
        "chineseWords": [
          "L",
          "号"
        ],
        "chineseScrambled": [
          "号",
          "L"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "XL号。",
        "words": [
          "Size",
          "XL"
        ],
        "scrambled": [
          "XL",
          "Size"
        ],
        "chineseWords": [
          "XL",
          "号"
        ],
        "chineseScrambled": [
          "号",
          "XL"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "太大了。",
        "words": [
          "It's",
          "too",
          "big"
        ],
        "scrambled": [
          "big",
          "It's",
          "too"
        ],
        "chineseWords": [
          "太",
          "大",
          "了"
        ],
        "chineseScrambled": [
          "大",
          "了",
          "太"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "太小了。",
        "words": [
          "It's",
          "too",
          "small"
        ],
        "scrambled": [
          "small",
          "It's",
          "too"
        ],
        "chineseWords": [
          "太",
          "小",
          "了"
        ],
        "chineseScrambled": [
          "小",
          "了",
          "太"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "太大了。太小了。",
        "words": [
          "It's",
          "too",
          "big",
          "It's",
          "too",
          "small"
        ],
        "scrambled": [
          "too",
          "small",
          "It's",
          "big",
          "It's",
          "too"
        ],
        "chineseWords": [
          "太",
          "大",
          "了",
          "太",
          "小",
          "了"
        ],
        "chineseScrambled": [
          "小",
          "太",
          "了",
          "大",
          "了",
          "太"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "Put on your team _____, please.",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "options": [
          "T-shirts",
          "jackets",
          "sweaters",
          "shirts"
        ],
        "correct": 0,
        "chinese": "请穿上你的队服T恤。"
      },
      {
        "type": "fill_blank",
        "prompt": "What _____ do you wear?",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "options": [
          "color",
          "size",
          "name",
          "number"
        ],
        "correct": 1,
        "chinese": "你穿多大号？"
      },
      {
        "type": "fill_blank",
        "prompt": "It's too _____.",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "options": [
          "big",
          "red",
          "new",
          "old"
        ],
        "correct": 0,
        "chinese": "太大了。"
      },
      {
        "type": "fill_blank",
        "prompt": "What size do you _____?",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "options": [
          "eat",
          "wear",
          "draw",
          "like"
        ],
        "correct": 1,
        "chinese": "你穿多大号？"
      },
      {
        "type": "word_puzzle",
        "hint": "sh_rt",
        "word": "shirt",
        "options": [
          "i",
          "q",
          "p",
          "x"
        ],
        "correct": 0,
        "chinese": "shirt"
      },
      {
        "type": "word_puzzle",
        "hint": "we_r",
        "word": "wear",
        "options": [
          "n",
          "i",
          "a",
          "k"
        ],
        "correct": 2,
        "chinese": "wear"
      },
      {
        "type": "word_puzzle",
        "hint": "si_e",
        "word": "size",
        "options": [
          "z",
          "k",
          "i",
          "v"
        ],
        "correct": 0,
        "chinese": "size"
      },
      {
        "type": "fill_blank",
        "prompt": "Put on your _____.",
        "options": [
          "t-shirt",
          "size",
          "shirt",
          "wear"
        ],
        "correct": 0,
        "chinese": "Put on your T-shirt."
      },
      {
        "type": "fill_blank",
        "prompt": "Size M _____.",
        "options": [
          "shirt",
          "wear",
          "please",
          "size"
        ],
        "correct": 2,
        "chinese": "Size M please."
      },
      {
        "type": "fill_blank",
        "prompt": "Put on your _____, please.",
        "options": [
          "T-shirt",
          "bear",
          "clock",
          "dinner"
        ],
        "correct": 0,
        "chinese": "请穿上你的T恤。"
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "word": "T-shirt",
        "chinese": "T恤",
        "expected": "T-shirt"
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
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "word": "size",
        "chinese": "尺码",
        "expected": "size"
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
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/skirt.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "夹克"
      },
      {
        "type": "repeat_sentence",
        "word": "Put on your team T-shirts, please.",
        "chinese": "请穿上你的队服T恤。",
        "expected": "Put on your team T-shirts, please."
      },
      {
        "type": "repeat_sentence",
        "word": "What size do you wear?",
        "chinese": "你穿多大号？",
        "expected": "What size do you wear?"
      },
      {
        "type": "repeat_sentence",
        "word": "It's too big.",
        "chinese": "太大了。",
        "expected": "It's too big."
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "Put on your team T-shirts, please.",
        "chinese": "请穿上你的队服T恤。",
        "expected": "Put on your team T-shirts, please."
      },
      {
        "type": "repeat_sentence",
        "word": "What size do you wear?",
        "chinese": "你穿多大号？",
        "expected": "What size do you wear?"
      },
      {
        "type": "repeat_sentence",
        "word": "Size S.",
        "chinese": "S号。",
        "expected": "Size S."
      },
      {
        "type": "repeat_sentence",
        "word": "Size M.",
        "chinese": "M号。",
        "expected": "Size M."
      },
      {
        "type": "repeat_sentence",
        "word": "Size L.",
        "chinese": "L号。",
        "expected": "Size L."
      },
      {
        "type": "repeat_sentence",
        "word": "Size XL.",
        "chinese": "XL号。",
        "expected": "Size XL."
      },
      {
        "type": "repeat_sentence",
        "word": "It's too big.",
        "chinese": "太大了。",
        "expected": "It's too big."
      },
      {
        "type": "repeat_sentence",
        "word": "It's too small.",
        "chinese": "太小了。",
        "expected": "It's too small."
      },
      {
        "type": "repeat_sentence",
        "word": "What size do you wear? Size S.",
        "chinese": "你穿多大号？S号。",
        "expected": "What size do you wear? Size S."
      },
      {
        "type": "repeat_sentence",
        "word": "What size do you wear? Size M.",
        "chinese": "你穿多大号？M号。",
        "expected": "What size do you wear? Size M."
      },
      {
        "type": "repeat_sentence",
        "word": "What size do you wear? Size L.",
        "chinese": "你穿多大号？L号。",
        "expected": "What size do you wear? Size L."
      },
      {
        "type": "repeat_sentence",
        "word": "What size do you wear? Size XL.",
        "chinese": "你穿多大号？XL号。",
        "expected": "What size do you wear? Size XL."
      },
      {
        "type": "repeat_sentence",
        "word": "Put on your team T-shirts, please. What size do you wear?",
        "chinese": "请穿上你的队服T恤。你穿多大号？",
        "expected": "Put on your team T-shirts, please. What size do you wear?"
      },
      {
        "type": "repeat_sentence",
        "word": "It's too big. It's too small.",
        "chinese": "太大了。太小了。",
        "expected": "It's too big. It's too small."
      },
      {
        "type": "repeat_sentence",
        "word": "What size do you wear? Size XL. It's too big.",
        "chinese": "你穿多大号？XL号。太大了。",
        "expected": "What size do you wear? Size XL. It's too big."
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "word": "T-shirt",
        "chinese": "T恤",
        "expected": "T-shirt"
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
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "word": "wear",
        "chinese": "穿",
        "expected": "wear"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "word": "T-shirt",
        "chinese": "T-shirt"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/shorts.png\" width=\"80\">",
        "word": "shorts",
        "chinese": "shorts"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "word": "jacket",
        "chinese": "jacket"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "word": "shirt",
        "chinese": "shirt"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/skirt.png\" width=\"80\">",
        "word": "skirt",
        "chinese": "skirt"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "word": "sweater",
        "chinese": "sweater"
      }
    ]
  }
};
