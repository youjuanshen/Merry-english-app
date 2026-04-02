// Unit 2 Lesson 4: Put on your sports shoes.
// Core vocab: sport, shoe, skirt, want, shorts
// Sentences: "Put on your T-shirt and shorts, please.", "Now put on your sports shoes.", etc.
var unit2_lesson4 = {
  "id": "U2L4",
  "title": "Put on your sports shoes.",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "skirt",
        "options": [
          "<img src=\"assets/images/shorts.png\" width=\"80\">",
          "<img src=\"assets/images/skirt.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "裙子"
      },
      {
        "type": "listen_select",
        "audio": "shorts",
        "options": [
          "<img src=\"assets/images/skirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shorts.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "短裤"
      },
      {
        "type": "listen_select",
        "audio": "shirt",
        "options": [
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/skirt.png\" width=\"80\">",
          "<img src=\"assets/images/shorts.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "衬衫"
      },
      {
        "type": "listen_select",
        "audio": "You can't wear your skirt.",
        "options": [
          "请穿上你的短裤。",
          "你不能穿你的裙子。",
          "现在穿上你的运动鞋。",
          "它们对你来说太大了。"
        ],
        "correct": 1,
        "chinese": "你不能穿你的裙子。"
      },
      {
        "type": "listen_select",
        "audio": "Put on your T-shirt and shorts, please.",
        "options": [
          "现在穿上你的运动鞋。",
          "你不能穿你的裙子。",
          "请穿上你的T恤和短裤。",
          "我也想要我的运动鞋。"
        ],
        "correct": 2,
        "chinese": "请穿上你的T恤和短裤。"
      },
      {
        "type": "listen_select",
        "audio": "Now put on your sports shoes.",
        "options": [
          "请穿上你的T恤和短裤。",
          "你不能穿你的裙子。",
          "它们对我来说太小了。",
          "现在穿上你的运动鞋。"
        ],
        "correct": 3,
        "chinese": "现在穿上你的运动鞋。"
      },
      {
        "type": "listen_tf",
        "audio": "This is a skirt.",
        "image": "<img src=\"assets/images/skirt.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一条裙子，正确！"
      },
      {
        "type": "listen_select",
        "audio": "They are too big for you.",
        "options": [
          "它们对你来说太大了。",
          "它们对我来说太小了。",
          "我也想要我的运动鞋。",
          "请穿上你的T恤和短裤。"
        ],
        "correct": 0,
        "chinese": "它们对你来说太大了。"
      },
      {
        "type": "listen_select",
        "audio": "I want my sports shoes, too.",
        "options": [
          "请穿上你的T恤和短裤。",
          "现在穿上你的运动鞋。",
          "我也想要我的运动鞋。",
          "它们对你来说太大了。"
        ],
        "correct": 2,
        "chinese": "我也想要我的运动鞋。"
      },
      {
        "type": "listen_select",
        "audio": "Put on your sports shoes.",
        "options": [
          "穿上你的运动鞋。",
          "穿上你的裙子。",
          "穿上你的T恤。",
          "穿上你的短裤。"
        ],
        "correct": 0,
        "chinese": "穿上你的运动鞋。"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "skirt",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shorts.png\" width=\"80\">",
          "<img src=\"assets/images/skirt.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "裙子"
      },
      {
        "type": "listen_select",
        "audio": "shorts",
        "options": [
          "<img src=\"assets/images/shorts.png\" width=\"80\">",
          "<img src=\"assets/images/skirt.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "短裤"
      },
      {
        "type": "listen_select",
        "audio": "I'm sorry, you can't wear your skirt.",
        "options": [
          "对不起，你不能穿你的裙子。",
          "请穿上你的T恤和短裤。",
          "现在穿上你的运动鞋。",
          "好的，谢谢。"
        ],
        "correct": 0,
        "chinese": "对不起，你不能穿你的裙子。"
      },
      {
        "type": "listen_select",
        "audio": "OK, thank you.",
        "options": [
          "对不起。",
          "好的，谢谢。",
          "不客气。",
          "我也想要我的运动鞋。"
        ],
        "correct": 1,
        "chinese": "好的，谢谢。"
      },
      {
        "type": "listen_select",
        "audio": "Put on your T-shirt and shorts, please.",
        "options": [
          "现在穿上你的运动鞋。",
          "你不能穿你的裙子。",
          "请穿上你的T恤和短裤。",
          "我也想要我的运动鞋。"
        ],
        "correct": 2,
        "chinese": "请穿上你的T恤和短裤。"
      },
      {
        "type": "listen_select",
        "audio": "Now put on your sports shoes.",
        "options": [
          "请穿上你的T恤和短裤。",
          "现在穿上你的运动鞋。",
          "它们对你来说太大了。",
          "好的，谢谢。"
        ],
        "correct": 1,
        "chinese": "现在穿上你的运动鞋。"
      },
      {
        "type": "listen_select",
        "audio": "They are too big for you.",
        "options": [
          "它们对我来说太小了。",
          "我也想要我的运动鞋。",
          "它们对你来说太大了。",
          "现在穿上你的运动鞋。"
        ],
        "correct": 2,
        "chinese": "它们对你来说太大了。"
      },
      {
        "type": "listen_select",
        "audio": "They are too small for me.",
        "options": [
          "它们对你来说太大了。",
          "它们对我来说太小了。",
          "请穿上你的T恤和短裤。",
          "我也想要我的运动鞋。"
        ],
        "correct": 1,
        "chinese": "它们对我来说太小了。"
      },
      {
        "type": "listen_select",
        "audio": "I want my sports shoes, too.",
        "options": [
          "我也想要我的运动鞋。",
          "现在穿上你的运动鞋。",
          "它们对你来说太大了。",
          "好的，谢谢。"
        ],
        "correct": 0,
        "chinese": "我也想要我的运动鞋。"
      },
      {
        "type": "listen_select",
        "audio": "My sports shoes, please.",
        "options": [
          "现在穿上你的运动鞋。",
          "我也想要我的运动鞋。",
          "请给我我的运动鞋。",
          "好的，谢谢。"
        ],
        "correct": 2,
        "chinese": "请给我我的运动鞋。"
      },
      {
        "type": "listen_select",
        "audio": "I'm sorry, you can't wear your skirt. OK, thank you.",
        "options": [
          "对不起，你不能穿你的裙子。好的，谢谢。",
          "请穿上你的T恤和短裤。现在穿上你的运动鞋。",
          "它们对你来说太大了。它们对我来说太小了。",
          "我也想要我的运动鞋。请给我我的运动鞋。"
        ],
        "correct": 0,
        "chinese": "对不起，你不能穿你的裙子。好的，谢谢。"
      },
      {
        "type": "listen_select",
        "audio": "Put on your T-shirt and shorts, please. Now put on your sports shoes.",
        "options": [
          "请穿上你的T恤和短裤。现在穿上你的运动鞋。",
          "对不起，你不能穿你的裙子。好的，谢谢。",
          "它们对你来说太大了。我也想要我的运动鞋。",
          "请给我我的运动鞋。好的，谢谢。"
        ],
        "correct": 0,
        "chinese": "请穿上你的T恤和短裤。现在穿上你的运动鞋。"
      },
      {
        "type": "listen_select",
        "audio": "They are too big for you. They are too small for me.",
        "options": [
          "请穿上你的T恤和短裤。",
          "它们对你来说太大了。它们对我来说太小了。",
          "我也想要我的运动鞋。",
          "对不起，你不能穿你的裙子。"
        ],
        "correct": 1,
        "chinese": "它们对你来说太大了。它们对我来说太小了。"
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
        "image": "<img src=\"assets/images/skirt.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是夹克，这是一条裙子。"
      },
      {
        "type": "listen_tf",
        "audio": "This is a skirt.",
        "image": "<img src=\"assets/images/skirt.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一条裙子，正确！"
      },
      {
        "type": "listen_select",
        "audio": "I want my sports shoes, too. My sports shoes, please.",
        "options": [
          "我也想要我的运动鞋。请给我我的运动鞋。",
          "现在穿上你的运动鞋。好的，谢谢。",
          "它们对你来说太大了。它们对我来说太小了。",
          "请穿上你的T恤和短裤。"
        ],
        "correct": 0,
        "chinese": "我也想要我的运动鞋。请给我我的运动鞋。"
      },
      {
        "type": "listen_select",
        "audio": "Now put on your sports shoes. They are too big for you.",
        "options": [
          "请穿上你的T恤和短裤。好的，谢谢。",
          "对不起，你不能穿你的裙子。",
          "现在穿上你的运动鞋。它们对你来说太大了。",
          "我也想要我的运动鞋。"
        ],
        "correct": 2,
        "chinese": "现在穿上你的运动鞋。它们对你来说太大了。"
      },
      {
        "type": "listen_select",
        "audio": "I'm sorry, you can't wear your skirt. Put on your T-shirt and shorts, please.",
        "options": [
          "对不起，你不能穿你的裙子。请穿上你的T恤和短裤。",
          "现在穿上你的运动鞋。它们对你来说太大了。",
          "我也想要我的运动鞋。请给我我的运动鞋。",
          "好的，谢谢。不客气。"
        ],
        "correct": 0,
        "chinese": "对不起，你不能穿你的裙子。请穿上你的T恤和短裤。"
      },
      {
        "type": "listen_select",
        "audio": "My sports shoes, please. They are too small for me.",
        "options": [
          "请给我我的运动鞋。它们对我来说太小了。",
          "现在穿上你的运动鞋。它们对你来说太大了。",
          "我也想要我的运动鞋。好的，谢谢。",
          "请穿上你的T恤和短裤。"
        ],
        "correct": 0,
        "chinese": "请给我我的运动鞋。它们对我来说太小了。"
      },
      {
        "type": "listen_sequence",
        "audio": "skirt, shorts, T-shirt",
        "sequence": [
          "skirt",
          "shorts",
          "T-shirt"
        ],
        "words": [
          "<img src=\"assets/images/T-shirt.png\" width=\"60\">",
          "<img src=\"assets/images/skirt.png\" width=\"60\">",
          "<img src=\"assets/images/shorts.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "Now put on your sports shoes.",
        "context": "👟 体育课要换运动鞋。老师说了一句话。",
        "question": "老师让你穿什么？",
        "options": [
          "运动鞋",
          "裙子",
          "短裤",
          "T恤"
        ],
        "correct": 0,
        "chinese": "现在穿上你的运动鞋。"
      },
      {
        "type": "listen_select",
        "audio": "I'm sorry, you can't wear your skirt.",
        "context": "👗 你想穿裙子，但是老师说不行。",
        "question": "老师怎么说？",
        "options": [
          "不能穿裙子",
          "可以穿裙子",
          "裙子很好看",
          "买新裙子"
        ],
        "correct": 0,
        "chinese": "对不起，你不能穿裙子。"
      },
      {
        "type": "listen_select",
        "audio": "Put on your T-shirt and shorts.",
        "context": "👕 老师让大家准备好。",
        "question": "要穿什么？",
        "options": [
          "T恤和短裤",
          "裙子和鞋子",
          "夹克和毛衣",
          "衬衫和裤子"
        ],
        "correct": 0,
        "chinese": "穿上你的T恤和短裤。"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "word": "skirt",
        "sentence": "You can't wear your skirt.",
        "chinese": "你不能穿你的裙子。",
        "options": [
          {
            "text": "<img src=\"assets/images/shorts.png\" width=\"80\">",
            "value": "shorts"
          },
          {
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "skirt"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          }
        ],
        "correct": "skirt"
      },
      {
        "type": "word_match",
        "word": "shorts",
        "sentence": "Put on your shorts.",
        "chinese": "穿上你的短裤。",
        "options": [
          {
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "skirt"
          },
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
          {
            "text": "<img src=\"assets/images/shorts.png\" width=\"80\">",
            "value": "shorts"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          }
        ],
        "correct": "shorts"
      },
      {
        "type": "word_match",
        "word": "jacket",
        "sentence": "This is a jacket.",
        "chinese": "这是一件夹克。",
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
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "skirt"
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
        "sentence": "You can't wear your skirt.",
        "chinese": "你不能穿你的裙子。",
        "options": [
          {
            "text": "请穿上你的T恤和短裤。",
            "value": "wrong1"
          },
          {
            "text": "你不能穿你的裙子。",
            "value": "correct"
          },
          {
            "text": "现在穿上你的运动鞋。",
            "value": "wrong2"
          },
          {
            "text": "好的，谢谢。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Put on your T-shirt and shorts, please.",
        "chinese": "请穿上你的T恤和短裤。",
        "options": [
          {
            "text": "请穿上你的T恤和短裤。",
            "value": "correct"
          },
          {
            "text": "现在穿上你的运动鞋。",
            "value": "wrong1"
          },
          {
            "text": "你不能穿你的裙子。",
            "value": "wrong2"
          },
          {
            "text": "我也想要我的运动鞋。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Now put on your sports shoes.",
        "chinese": "现在穿上你的运动鞋。",
        "options": [
          {
            "text": "请穿上你的T恤和短裤。",
            "value": "wrong1"
          },
          {
            "text": "它们对你来说太大了。",
            "value": "wrong2"
          },
          {
            "text": "现在穿上你的运动鞋。",
            "value": "correct"
          },
          {
            "text": "好的，谢谢。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They are too big for you.",
        "chinese": "它们对你来说太大了。",
        "options": [
          {
            "text": "它们对我来说太小了。",
            "value": "wrong1"
          },
          {
            "text": "它们对你来说太大了。",
            "value": "correct"
          },
          {
            "text": "我也想要我的运动鞋。",
            "value": "wrong2"
          },
          {
            "text": "现在穿上你的运动鞋。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I want my sports shoes, too.",
        "chinese": "我也想要我的运动鞋。",
        "options": [
          {
            "text": "现在穿上你的运动鞋。",
            "value": "wrong1"
          },
          {
            "text": "它们对你来说太大了。",
            "value": "wrong2"
          },
          {
            "text": "请给我我的运动鞋。",
            "value": "wrong3"
          },
          {
            "text": "我也想要我的运动鞋。",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "老师让你穿上T恤和短裤，你会听到：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Now put on your sports shoes.",
            "value": "wrong1"
          },
          {
            "text": "Put on your T-shirt and shorts, please.",
            "value": "correct"
          },
          {
            "text": "You can't wear your skirt.",
            "value": "wrong2"
          },
          {
            "text": "I want my sports shoes, too.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你穿的鞋太大了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "They are too small for me.",
            "value": "wrong1"
          },
          {
            "text": "I want my sports shoes, too.",
            "value": "wrong2"
          },
          {
            "text": "They are too big for you.",
            "value": "wrong3"
          },
          {
            "text": "They are too big for me.",
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
            "word": "sports_shoes",
            "match": "<img src=\"assets/images/sports_shoes.png\" width=\"50\">",
            "chinese": "运动鞋"
          },
          {
            "word": "skirt",
            "match": "<img src=\"assets/images/skirt.png\" width=\"50\">",
            "chinese": "裙子"
          },
          {
            "word": "shorts",
            "match": "<img src=\"assets/images/shorts.png\" width=\"50\">",
            "chinese": "短裤"
          },
          {
            "word": "T-shirt",
            "match": "<img src=\"assets/images/T-shirt.png\" width=\"50\">",
            "chinese": "T恤"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "sport",
            "match": "运动",
            "example": "Put on your sports shoes."
          },
          {
            "word": "shoe",
            "match": "鞋子",
            "example": "I want my sports shoes."
          },
          {
            "word": "skirt",
            "match": "裙子",
            "example": "I can't wear your skirt."
          },
          {
            "word": "want",
            "match": "想要",
            "example": "I want my sports shoes."
          }
        ]
      },
      {
        "type": "word_match",
        "word": "skirt",
        "sentence": "You can't wear your skirt.",
        "chinese": "你不能穿你的裙子。",
        "options": [
          {
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "skirt"
          },
          {
            "text": "<img src=\"assets/images/shorts.png\" width=\"80\">",
            "value": "shorts"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          }
        ],
        "correct": "skirt"
      },
      {
        "type": "word_match",
        "word": "shorts",
        "sentence": "Put on your shorts.",
        "chinese": "穿上你的短裤。",
        "options": [
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/shorts.png\" width=\"80\">",
            "value": "shorts"
          },
          {
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "skirt"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          }
        ],
        "correct": "shorts"
      },
      {
        "type": "sentence_match",
        "sentence": "I'm sorry, you can't wear your skirt.",
        "chinese": "对不起，你不能穿你的裙子。",
        "options": [
          {
            "text": "对不起，你不能穿你的裙子。",
            "value": "correct"
          },
          {
            "text": "请穿上你的T恤和短裤。",
            "value": "wrong1"
          },
          {
            "text": "好的，谢谢。",
            "value": "wrong2"
          },
          {
            "text": "现在穿上你的运动鞋。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "OK, thank you.",
        "chinese": "好的，谢谢。",
        "options": [
          {
            "text": "对不起。",
            "value": "wrong1"
          },
          {
            "text": "好的，谢谢。",
            "value": "correct"
          },
          {
            "text": "不客气。",
            "value": "wrong2"
          },
          {
            "text": "我也想要我的运动鞋。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Put on your T-shirt and shorts, please.",
        "chinese": "请穿上你的T恤和短裤。",
        "options": [
          {
            "text": "现在穿上你的运动鞋。",
            "value": "wrong1"
          },
          {
            "text": "你不能穿你的裙子。",
            "value": "wrong2"
          },
          {
            "text": "请穿上你的T恤和短裤。",
            "value": "correct"
          },
          {
            "text": "我也想要我的运动鞋。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Now put on your sports shoes.",
        "chinese": "现在穿上你的运动鞋。",
        "options": [
          {
            "text": "请穿上你的T恤和短裤。",
            "value": "wrong1"
          },
          {
            "text": "现在穿上你的运动鞋。",
            "value": "correct"
          },
          {
            "text": "它们对你来说太大了。",
            "value": "wrong2"
          },
          {
            "text": "好的，谢谢。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They are too big for you.",
        "chinese": "它们对你来说太大了。",
        "options": [
          {
            "text": "它们对我来说太小了。",
            "value": "wrong1"
          },
          {
            "text": "我也想要我的运动鞋。",
            "value": "wrong2"
          },
          {
            "text": "它们对你来说太大了。",
            "value": "correct"
          },
          {
            "text": "现在穿上你的运动鞋。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They are too small for me.",
        "chinese": "它们对我来说太小了。",
        "options": [
          {
            "text": "它们对你来说太大了。",
            "value": "wrong1"
          },
          {
            "text": "它们对我来说太小了。",
            "value": "correct"
          },
          {
            "text": "请穿上你的T恤和短裤。",
            "value": "wrong2"
          },
          {
            "text": "好的，谢谢。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I want my sports shoes, too.",
        "chinese": "我也想要我的运动鞋。",
        "options": [
          {
            "text": "现在穿上你的运动鞋。",
            "value": "wrong1"
          },
          {
            "text": "请给我我的运动鞋。",
            "value": "wrong2"
          },
          {
            "text": "我也想要我的运动鞋。",
            "value": "correct"
          },
          {
            "text": "它们对你来说太大了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "My sports shoes, please.",
        "chinese": "请给我我的运动鞋。",
        "options": [
          {
            "text": "请给我我的运动鞋。",
            "value": "correct"
          },
          {
            "text": "我也想要我的运动鞋。",
            "value": "wrong1"
          },
          {
            "text": "现在穿上你的运动鞋。",
            "value": "wrong2"
          },
          {
            "text": "好的，谢谢。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I'm sorry, you can't wear your skirt. OK, thank you.",
        "chinese": "对不起，你不能穿你的裙子。好的，谢谢。",
        "options": [
          {
            "text": "对不起，你不能穿你的裙子。好的，谢谢。",
            "value": "correct"
          },
          {
            "text": "请穿上你的T恤和短裤。现在穿上你的运动鞋。",
            "value": "wrong1"
          },
          {
            "text": "它们对你来说太大了。它们对我来说太小了。",
            "value": "wrong2"
          },
          {
            "text": "我也想要我的运动鞋。请给我我的运动鞋。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "They are too big for you. They are too small for me.",
        "chinese": "它们对你来说太大了。它们对我来说太小了。",
        "options": [
          {
            "text": "对不起，你不能穿你的裙子。好的，谢谢。",
            "value": "wrong1"
          },
          {
            "text": "它们对你来说太大了。它们对我来说太小了。",
            "value": "correct"
          },
          {
            "text": "请穿上你的T恤和短裤。现在穿上你的运动鞋。",
            "value": "wrong2"
          },
          {
            "text": "我也想要我的运动鞋。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想要自己的运动鞋，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Now put on your sports shoes.",
            "value": "wrong1"
          },
          {
            "text": "They are too big for you.",
            "value": "wrong2"
          },
          {
            "text": "I want my sports shoes, too.",
            "value": "correct"
          },
          {
            "text": "Put on your T-shirt and shorts, please.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你穿的鞋太小了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "They are too big for me.",
            "value": "wrong1"
          },
          {
            "text": "I want my sports shoes, too.",
            "value": "wrong2"
          },
          {
            "text": "They are too small for me.",
            "value": "correct"
          },
          {
            "text": "Now put on your sports shoes.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "老师让你穿上运动鞋，你会听到：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Put on your T-shirt and shorts, please.",
            "value": "wrong1"
          },
          {
            "text": "Now put on your sports shoes.",
            "value": "correct"
          },
          {
            "text": "You can't wear your skirt.",
            "value": "wrong2"
          },
          {
            "text": "OK, thank you.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Put on your T-shirt and shorts, please. Now put on your sports shoes.",
        "chinese": "请穿上你的T恤和短裤。现在穿上你的运动鞋。",
        "options": [
          {
            "text": "请穿上你的T恤和短裤。现在穿上你的运动鞋。",
            "value": "correct"
          },
          {
            "text": "对不起，你不能穿你的裙子。好的，谢谢。",
            "value": "wrong1"
          },
          {
            "text": "它们对你来说太大了。它们对我来说太小了。",
            "value": "wrong2"
          },
          {
            "text": "我也想要我的运动鞋。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I want my sports shoes, too. My sports shoes, please.",
        "chinese": "我也想要我的运动鞋。请给我我的运动鞋。",
        "options": [
          {
            "text": "我也想要我的运动鞋。请给我我的运动鞋。",
            "value": "correct"
          },
          {
            "text": "现在穿上你的运动鞋。它们对你来说太大了。",
            "value": "wrong1"
          },
          {
            "text": "对不起，你不能穿你的裙子。",
            "value": "wrong2"
          },
          {
            "text": "好的，谢谢。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你不能穿裙子，老师告诉你要穿T恤和短裤：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Now put on your sports shoes.",
            "value": "wrong1"
          },
          {
            "text": "I'm sorry, you can't wear your skirt. Put on your T-shirt and shorts, please.",
            "value": "correct"
          },
          {
            "text": "I want my sports shoes, too.",
            "value": "wrong2"
          },
          {
            "text": "They are too big for you.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Now put on your sports shoes. They are too big for you.",
        "chinese": "现在穿上你的运动鞋。它们对你来说太大了。",
        "options": [
          {
            "text": "请穿上你的T恤和短裤。好的，谢谢。",
            "value": "wrong1"
          },
          {
            "text": "现在穿上你的运动鞋。它们对你来说太大了。",
            "value": "correct"
          },
          {
            "text": "我也想要我的运动鞋。请给我我的运动鞋。",
            "value": "wrong2"
          },
          {
            "text": "对不起，你不能穿你的裙子。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "My sports shoes, please. They are too small for me.",
        "chinese": "请给我我的运动鞋。它们对我来说太小了。",
        "options": [
          {
            "text": "请给我我的运动鞋。它们对我来说太小了。",
            "value": "correct"
          },
          {
            "text": "现在穿上你的运动鞋。它们对你来说太大了。",
            "value": "wrong1"
          },
          {
            "text": "我也想要我的运动鞋。好的，谢谢。",
            "value": "wrong2"
          },
          {
            "text": "请穿上你的T恤和短裤。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "Put on your T-shirt and shorts, please.",
        "context": "体育课通知贴在墙上。你朋友问要穿什么。",
        "question": "要穿什么去体育课？",
        "options": [
          {
            "text": "T恤和短裤",
            "value": "correct"
          },
          {
            "text": "裙子和毛衣",
            "value": "w1"
          },
          {
            "text": "夹克和长裤",
            "value": "w2"
          },
          {
            "text": "衬衫和鞋子",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "请穿上你的T恤和短裤。"
      },
      {
        "type": "scenario",
        "sentence": "I want my sports shoes, please.",
        "context": "同学写了一张纸条给妈妈。",
        "question": "他想要什么？",
        "options": [
          {
            "text": "运动鞋",
            "value": "correct"
          },
          {
            "text": "裙子",
            "value": "w1"
          },
          {
            "text": "T恤",
            "value": "w2"
          },
          {
            "text": "短裤",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "请给我运动鞋。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "Put on your T-shirt.",
          "Put on your shorts.",
          "Now put on your shoes."
        ],
        "chinese": "把穿衣步骤排好！",
        "chineseHint": "穿上T恤。 / 穿上短裤。 / 穿上鞋子。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "I want my skirt.",
          "Sorry, you can't.",
          "OK, I'll wear shorts."
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "我想穿裙子。 / 对不起，不行。 / 好吧，我穿短裤。"
      },
      {
        "type": "word_match",
        "word": "sports_shoes",
        "options": [
          {
            "text": "<img src=\"assets/images/sports_shoes.png\" width=\"80\">",
            "value": "sports_shoes"
          },
          {
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/shorts.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "sports_shoes",
        "chinese": "sports_shoes"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "裙子的首字母是？",
        "image": "<img src=\"assets/images/skirt.png\" width=\"80\">",
        "options": [
          "c",
          "s",
          "k",
          "g"
        ],
        "correct": 1,
        "chinese": "裙子",
        "word": "裙子"
      },
      {
        "type": "pinyin_fill",
        "hint": "sk_rt",
        "image": "<img src=\"assets/images/skirt.png\" width=\"80\">",
        "options": [
          "i",
          "a",
          "o",
          "e"
        ],
        "correct": 0,
        "chinese": "裙子"
      },
      {
        "type": "pinyin_fill",
        "hint": "sh_rts",
        "image": "<img src=\"assets/images/shorts.png\" width=\"80\">",
        "options": [
          "o",
          "a",
          "e",
          "i"
        ],
        "correct": 0,
        "chinese": "短裤"
      },
      {
        "type": "fill_blank",
        "prompt": "You can't wear your _____.",
        "image": "<img src=\"assets/images/skirt.png\" width=\"80\">",
        "options": [
          "shorts",
          "skirt",
          "jacket",
          "sweater"
        ],
        "correct": 1,
        "chinese": "你不能穿你的裙子。"
      },
      {
        "type": "word_puzzle",
        "hint": "s_ort",
        "word": "sport",
        "options": [
          "v",
          "p",
          "f",
          "w"
        ],
        "correct": 1,
        "chinese": "sport"
      },
      {
        "type": "word_puzzle",
        "hint": "s_oe",
        "word": "shoe",
        "options": [
          "z",
          "h",
          "x",
          "q"
        ],
        "correct": 1,
        "chinese": "shoe"
      },
      {
        "type": "word_puzzle",
        "hint": "s_irt",
        "word": "skirt",
        "options": [
          "k",
          "r",
          "b",
          "z"
        ],
        "correct": 0,
        "chinese": "skirt"
      },
      {
        "type": "fill_blank",
        "prompt": "Put on your _____.",
        "options": [
          "skirt",
          "sport",
          "shoe",
          "shorts"
        ],
        "correct": 3,
        "chinese": "Put on your shorts."
      },
      {
        "type": "fill_blank",
        "prompt": "I want my _____.",
        "options": [
          "shoe",
          "sport",
          "skirt",
          "shoes"
        ],
        "correct": 3,
        "chinese": "I want my shoes."
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "好的，谢谢。",
        "words": [
          "OK",
          "thank",
          "you"
        ],
        "scrambled": [
          "thank",
          "OK",
          "you"
        ],
        "chineseWords": [
          "好的",
          "谢谢"
        ],
        "chineseScrambled": [
          "谢谢",
          "好的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在穿上你的运动鞋。",
        "words": [
          "Now",
          "put",
          "on",
          "your",
          "sports",
          "shoes"
        ],
        "scrambled": [
          "sports",
          "Now",
          "shoes",
          "put",
          "your",
          "on"
        ],
        "chineseWords": [
          "现在",
          "穿上",
          "你的",
          "运动鞋"
        ],
        "chineseScrambled": [
          "运动鞋",
          "现在",
          "你的",
          "穿上"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它们对你来说太大了。",
        "words": [
          "They",
          "are",
          "too",
          "big",
          "for",
          "you"
        ],
        "scrambled": [
          "big",
          "They",
          "you",
          "too",
          "for",
          "are"
        ],
        "chineseWords": [
          "它们",
          "对你来说",
          "太",
          "大",
          "了"
        ],
        "chineseScrambled": [
          "大",
          "了",
          "它们",
          "太",
          "对你来说"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它们对我来说太小了。",
        "words": [
          "They",
          "are",
          "too",
          "small",
          "for",
          "me"
        ],
        "scrambled": [
          "small",
          "They",
          "me",
          "too",
          "for",
          "are"
        ],
        "chineseWords": [
          "它们",
          "对我来说",
          "太",
          "小",
          "了"
        ],
        "chineseScrambled": [
          "小",
          "了",
          "它们",
          "太",
          "对我来说"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我也想要我的运动鞋。",
        "words": [
          "I",
          "want",
          "my",
          "sports",
          "shoes",
          "too"
        ],
        "scrambled": [
          "sports",
          "I",
          "too",
          "shoes",
          "want",
          "my"
        ],
        "chineseWords": [
          "我",
          "也",
          "想要",
          "我的",
          "运动鞋"
        ],
        "chineseScrambled": [
          "运动鞋",
          "也",
          "我",
          "想要",
          "我的"
        ]
      },
      {
        "type": "sentence_order",
        "sentence": "My sports shoes, please.",
        "chinese": "请给我我的运动鞋。",
        "words": [
          "My",
          "sports",
          "shoes",
          "please"
        ],
        "scrambled": [
          "please",
          "sports",
          "My",
          "shoes"
        ],
        "chineseWords": [
          "请给我",
          "我的",
          "运动鞋"
        ],
        "chineseScrambled": [
          "运动鞋",
          "请给我",
          "我的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "你不能穿你的裙子。",
        "words": [
          "You",
          "can't",
          "wear",
          "your",
          "skirt"
        ],
        "scrambled": [
          "skirt",
          "You",
          "wear",
          "can't",
          "your"
        ],
        "chineseWords": [
          "你",
          "不能",
          "穿",
          "你的",
          "裙子"
        ],
        "chineseScrambled": [
          "裙子",
          "穿",
          "你",
          "不能",
          "你的"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "You can't wear your _____.",
        "image": "<img src=\"assets/images/skirt.png\" width=\"80\">",
        "options": [
          "shorts",
          "skirt",
          "jacket",
          "sweater"
        ],
        "correct": 1,
        "chinese": "你不能穿你的裙子。"
      },
      {
        "type": "fill_blank",
        "prompt": "Put on your T-shirt and _____, please.",
        "image": "<img src=\"assets/images/shorts.png\" width=\"80\">",
        "options": [
          "skirt",
          "jacket",
          "shorts",
          "sweater"
        ],
        "correct": 2,
        "chinese": "请穿上你的T恤和短裤。"
      },
      {
        "type": "fill_blank",
        "prompt": "Now put on your sports _____.",
        "image": "<img src=\"assets/images/sports_shoes.png\" width=\"80\">",
        "options": [
          "shirt",
          "shoes",
          "shorts",
          "skirt"
        ],
        "correct": 1,
        "chinese": "现在穿上你的运动鞋。"
      },
      {
        "type": "fill_blank",
        "prompt": "They are too _____ for you.",
        "image": "<img src=\"assets/images/sports_shoes.png\" width=\"80\">",
        "options": [
          "big",
          "small",
          "long",
          "short"
        ],
        "correct": 0,
        "chinese": "它们对你来说太大了。"
      },
      {
        "type": "fill_blank",
        "prompt": "I _____ my sports shoes, too.",
        "image": "<img src=\"assets/images/sports_shoes.png\" width=\"80\">",
        "options": [
          "like",
          "want",
          "have",
          "wear"
        ],
        "correct": 1,
        "chinese": "我也想要我的运动鞋。"
      },
      {
        "type": "word_puzzle",
        "hint": "sp_rt",
        "word": "sport",
        "options": [
          "l",
          "r",
          "t",
          "o"
        ],
        "correct": 3,
        "chinese": "sport"
      },
      {
        "type": "word_puzzle",
        "hint": "sh_e",
        "word": "shoe",
        "options": [
          "q",
          "d",
          "x",
          "o"
        ],
        "correct": 3,
        "chinese": "shoe"
      },
      {
        "type": "word_puzzle",
        "hint": "sk_rt",
        "word": "skirt",
        "options": [
          "m",
          "s",
          "w",
          "i"
        ],
        "correct": 3,
        "chinese": "skirt"
      },
      {
        "type": "word_puzzle",
        "hint": "sho_ts",
        "word": "shorts",
        "options": [
          "d",
          "f",
          "r",
          "u"
        ],
        "correct": 2,
        "chinese": "shorts"
      },
      {
        "type": "fill_blank",
        "prompt": "Put on your _____.",
        "options": [
          "sport",
          "shorts",
          "shoe",
          "skirt"
        ],
        "correct": 1,
        "chinese": "Put on your shorts."
      },
      {
        "type": "fill_blank",
        "prompt": "I want my _____.",
        "options": [
          "sport",
          "skirt",
          "shoes",
          "shoe"
        ],
        "correct": 2,
        "chinese": "I want my shoes."
      },
      {
        "type": "fill_blank",
        "prompt": "I like my _____.",
        "options": [
          "skirt",
          "shoe",
          "sport",
          "shorts"
        ],
        "correct": 0,
        "chinese": "I like my skirt."
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/skirt.png\" width=\"80\">",
        "word": "skirt",
        "chinese": "裙子",
        "expected": "skirt"
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
        "image": "<img src=\"assets/images/sports_shoes.png\" width=\"80\">",
        "word": "shoes",
        "chinese": "鞋",
        "expected": "shoes"
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
        "type": "speak_select",
        "audio": "skirt",
        "options": [
          "<img src=\"assets/images/shorts.png\" width=\"80\">",
          "<img src=\"assets/images/skirt.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "裙子"
      },
      {
        "type": "speak_select",
        "audio": "shorts",
        "options": [
          "<img src=\"assets/images/skirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shorts.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "短裤"
      },
      {
        "type": "repeat_sentence",
        "word": "Put on your T-shirt and shorts, please.",
        "chinese": "请穿上你的T恤和短裤。",
        "expected": "Put on your T-shirt and shorts, please."
      },
      {
        "type": "repeat_sentence",
        "word": "Now put on your sports shoes.",
        "chinese": "现在穿上你的运动鞋。",
        "expected": "Now put on your sports shoes."
      },
      {
        "type": "repeat_sentence",
        "word": "They are too big for you.",
        "chinese": "它们对你来说太大了。",
        "expected": "They are too big for you."
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "I'm sorry, you can't wear your skirt.",
        "chinese": "对不起，你不能穿你的裙子。",
        "expected": "I'm sorry, you can't wear your skirt."
      },
      {
        "type": "repeat_sentence",
        "word": "OK, thank you.",
        "chinese": "好的，谢谢。",
        "expected": "OK, thank you."
      },
      {
        "type": "repeat_sentence",
        "word": "Put on your T-shirt and shorts, please.",
        "chinese": "请穿上你的T恤和短裤。",
        "expected": "Put on your T-shirt and shorts, please."
      },
      {
        "type": "repeat_sentence",
        "word": "Now put on your sports shoes.",
        "chinese": "现在穿上你的运动鞋。",
        "expected": "Now put on your sports shoes."
      },
      {
        "type": "repeat_sentence",
        "word": "They are too big for you.",
        "chinese": "它们对你来说太大了。",
        "expected": "They are too big for you."
      },
      {
        "type": "repeat_sentence",
        "word": "They are too small for me.",
        "chinese": "它们对我来说太小了。",
        "expected": "They are too small for me."
      },
      {
        "type": "repeat_sentence",
        "word": "I want my sports shoes, too.",
        "chinese": "我也想要我的运动鞋。",
        "expected": "I want my sports shoes, too."
      },
      {
        "type": "repeat_sentence",
        "word": "My sports shoes, please.",
        "chinese": "请给我我的运动鞋。",
        "expected": "My sports shoes, please."
      },
      {
        "type": "repeat_sentence",
        "word": "I'm sorry, you can't wear your skirt. OK, thank you.",
        "chinese": "对不起，你不能穿你的裙子。好的，谢谢。",
        "expected": "I'm sorry, you can't wear your skirt. OK, thank you."
      },
      {
        "type": "repeat_sentence",
        "word": "Put on your T-shirt and shorts, please. Now put on your sports shoes.",
        "chinese": "请穿上你的T恤和短裤。现在穿上你的运动鞋。",
        "expected": "Put on your T-shirt and shorts, please. Now put on your sports shoes."
      },
      {
        "type": "repeat_sentence",
        "word": "They are too big for you. They are too small for me.",
        "chinese": "它们对你来说太大了。它们对我来说太小了。",
        "expected": "They are too big for you. They are too small for me."
      },
      {
        "type": "repeat_sentence",
        "word": "I want my sports shoes, too. My sports shoes, please.",
        "chinese": "我也想要我的运动鞋。请给我我的运动鞋。",
        "expected": "I want my sports shoes, too. My sports shoes, please."
      },
      {
        "type": "repeat_sentence",
        "word": "Now put on your sports shoes. They are too big for you.",
        "chinese": "现在穿上你的运动鞋。它们对你来说太大了。",
        "expected": "Now put on your sports shoes. They are too big for you."
      },
      {
        "type": "repeat_sentence",
        "word": "My sports shoes, please. They are too small for me.",
        "chinese": "请给我我的运动鞋。它们对我来说太小了。",
        "expected": "My sports shoes, please. They are too small for me."
      },
      {
        "type": "repeat_sentence",
        "word": "You can't wear your skirt. Put on your T-shirt and shorts, please.",
        "chinese": "你不能穿你的裙子。请穿上你的T恤和短裤。",
        "expected": "You can't wear your skirt. Put on your T-shirt and shorts, please."
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/skirt.png\" width=\"80\">",
        "word": "skirt",
        "chinese": "裙子",
        "expected": "skirt"
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
        "image": "<img src=\"assets/images/sports_shoes.png\" width=\"80\">",
        "word": "shoes",
        "chinese": "鞋",
        "expected": "shoes"
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
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "word": "jacket",
        "chinese": "夹克",
        "expected": "jacket"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/sports_shoes.png\" width=\"80\">",
        "word": "sports_shoes",
        "chinese": "sports_shoes"
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
      }
    ]
  }
};
