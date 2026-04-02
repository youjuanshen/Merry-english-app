// Unit 3 Lesson 1: It's eleven o'clock in Beijing.
// Core vocab: time, eleven, twelve, clock, o'clock
// Sentences: "What's the time, Mom?", "It's eleven o'clock in Beijing.", etc.
var unit3_lesson1 = {
  "id": "U3L1",
  "title": "It's eleven o'clock in Beijing.",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "clock",
        "options": [
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "钟"
      },
      {
        "type": "listen_select",
        "audio": "chair",
        "options": [
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "椅子"
      },
      {
        "type": "listen_select",
        "audio": "bed",
        "options": [
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "床"
      },
      {
        "type": "listen_select",
        "audio": "What's the time, Mom?",
        "options": [
          "现在是北京时间十一点。",
          "妈妈，几点了？",
          "好多钟！",
          "现在是伦敦时间十二点吗？"
        ],
        "correct": 1,
        "chinese": "妈妈，几点了？"
      },
      {
        "type": "listen_select",
        "audio": "It's eleven o'clock in Beijing.",
        "options": [
          "现在是伦敦时间三点。",
          "妈妈，几点了？",
          "现在是北京时间十一点。",
          "好多钟！"
        ],
        "correct": 2,
        "chinese": "现在是北京时间十一点。"
      },
      {
        "type": "listen_select",
        "audio": "So many clocks!",
        "options": [
          "妈妈，几点了？",
          "现在是北京时间十一点。",
          "现在是伦敦时间三点。",
          "好多钟！"
        ],
        "correct": 3,
        "chinese": "好多钟！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a clock.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一个钟，正确！"
      },
      {
        "type": "listen_select",
        "audio": "Is it twelve o'clock in London? No, it isn't. It's three o'clock.",
        "options": [
          "现在是伦敦时间十二点吗？不，不是。现在是三点。",
          "妈妈，几点了？现在是北京时间十一点。",
          "好多钟！现在几点了？",
          "现在是北京时间十一点。好多钟！"
        ],
        "correct": 0,
        "chinese": "现在是伦敦时间十二点吗？不，不是。现在是三点。"
      },
      {
        "type": "listen_select",
        "audio": "What's the time, Mom? It's eleven o'clock in Beijing.",
        "options": [
          "好多钟！现在是三点。",
          "妈妈，几点了？现在是北京时间十一点。",
          "现在是伦敦时间十二点吗？不，不是。",
          "现在是三点。好多钟！"
        ],
        "correct": 1,
        "chinese": "妈妈，几点了？现在是北京时间十一点。"
      },
      {
        "type": "listen_select",
        "audio": "It's eleven o'clock.",
        "options": [
          "十一点了。",
          "十二点了。",
          "三点了。",
          "一点了。"
        ],
        "correct": 0,
        "chinese": "十一点了。"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "clock",
        "options": [
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "钟"
      },
      {
        "type": "listen_select",
        "audio": "schoolbag",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "书包"
      },
      {
        "type": "listen_select",
        "audio": "What's the time, Mom?",
        "options": [
          "妈妈，几点了？",
          "现在是北京时间十一点。",
          "好多钟！",
          "不，不是。"
        ],
        "correct": 0,
        "chinese": "妈妈，几点了？"
      },
      {
        "type": "listen_select",
        "audio": "It's eleven o'clock in Beijing.",
        "options": [
          "现在是伦敦时间三点。",
          "现在是北京时间十一点。",
          "妈妈，几点了？",
          "好多钟！"
        ],
        "correct": 1,
        "chinese": "现在是北京时间十一点。"
      },
      {
        "type": "listen_select",
        "audio": "Is it twelve o'clock in London?",
        "options": [
          "现在是北京时间十一点吗？",
          "妈妈，几点了？",
          "现在是伦敦时间十二点吗？",
          "好多钟！"
        ],
        "correct": 2,
        "chinese": "现在是伦敦时间十二点吗？"
      },
      {
        "type": "listen_select",
        "audio": "No, it isn't.",
        "options": [
          "是的，是的。",
          "不，不是。",
          "妈妈，几点了？",
          "好多钟！"
        ],
        "correct": 1,
        "chinese": "不，不是。"
      },
      {
        "type": "listen_select",
        "audio": "It's three o'clock.",
        "options": [
          "现在是十一点。",
          "现在是十二点。",
          "好多钟！",
          "现在是三点。"
        ],
        "correct": 3,
        "chinese": "现在是三点。"
      },
      {
        "type": "listen_select",
        "audio": "So many clocks!",
        "options": [
          "好多钟！",
          "妈妈，几点了？",
          "现在是北京时间十一点。",
          "不，不是。"
        ],
        "correct": 0,
        "chinese": "好多钟！"
      },
      {
        "type": "listen_select",
        "audio": "What's the time, Mom? It's eleven o'clock in Beijing.",
        "options": [
          "妈妈，几点了？现在是北京时间十一点。",
          "现在是伦敦时间十二点吗？不，不是。",
          "好多钟！现在是三点。",
          "现在是三点。好多钟！"
        ],
        "correct": 0,
        "chinese": "妈妈，几点了？现在是北京时间十一点。"
      },
      {
        "type": "listen_select",
        "audio": "Is it twelve o'clock in London? No, it isn't.",
        "options": [
          "妈妈，几点了？现在是北京时间十一点。",
          "现在是伦敦时间十二点吗？不，不是。",
          "现在是三点。好多钟！",
          "好多钟！妈妈，几点了？"
        ],
        "correct": 1,
        "chinese": "现在是伦敦时间十二点吗？不，不是。"
      },
      {
        "type": "listen_select",
        "audio": "Is it twelve o'clock in London? No, it isn't. It's three o'clock.",
        "options": [
          "现在是伦敦时间十二点吗？不，不是。现在是三点。",
          "妈妈，几点了？现在是北京时间十一点。",
          "好多钟！现在是三点。",
          "现在是北京时间十一点。好多钟！"
        ],
        "correct": 0,
        "chinese": "现在是伦敦时间十二点吗？不，不是。现在是三点。"
      },
      {
        "type": "listen_select",
        "audio": "It's eleven o'clock.",
        "options": [
          "现在是三点。",
          "现在是十二点。",
          "现在是十一点。",
          "妈妈，几点了？"
        ],
        "correct": 2,
        "chinese": "现在是十一点。"
      },
      {
        "type": "listen_select",
        "audio": "It's twelve o'clock.",
        "options": [
          "现在是十一点。",
          "现在是十二点。",
          "现在是三点。",
          "好多钟！"
        ],
        "correct": 1,
        "chinese": "现在是十二点。"
      },
      {
        "type": "listen_tf",
        "audio": "This is a clock.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一个钟，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a bed.",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一张床，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a chair.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是椅子，这是一个钟。"
      },
      {
        "type": "listen_select",
        "audio": "What's the time, Mom? It's eleven o'clock. So many clocks!",
        "options": [
          "妈妈，几点了？现在是十一点。好多钟！",
          "现在是伦敦时间十二点吗？不，不是。现在是三点。",
          "现在是北京时间十一点。妈妈，几点了？",
          "好多钟！现在是十二点。"
        ],
        "correct": 0,
        "chinese": "妈妈，几点了？现在是十一点。好多钟！"
      },
      {
        "type": "listen_select",
        "audio": "It's eleven o'clock in Beijing. So many clocks!",
        "options": [
          "现在是伦敦时间十二点。好多钟！",
          "现在是北京时间十一点。好多钟！",
          "妈妈，几点了？不，不是。",
          "现在是三点。妈妈，几点了？"
        ],
        "correct": 1,
        "chinese": "现在是北京时间十一点。好多钟！"
      },
      {
        "type": "listen_select",
        "audio": "It's three o'clock. So many clocks!",
        "options": [
          "现在是十一点。好多钟！",
          "妈妈，几点了？好多钟！",
          "现在是三点。好多钟！",
          "现在是十二点。不，不是。"
        ],
        "correct": 2,
        "chinese": "现在是三点。好多钟！"
      },
      {
        "type": "listen_select",
        "audio": "It's twelve o'clock. So many clocks!",
        "options": [
          "现在是十二点。好多钟！",
          "现在是十一点。好多钟！",
          "现在是三点。好多钟！",
          "妈妈，几点了？"
        ],
        "correct": 0,
        "chinese": "现在是十二点。好多钟！"
      },
      {
        "type": "listen_sequence",
        "audio": "three, eleven, twelve",
        "sequence": [
          "three",
          "eleven",
          "twelve"
        ],
        "words": [
          "<img src=\"assets/images/clock_3.png\" width=\"60\">",
          "<img src=\"assets/images/clock_12.png\" width=\"60\">",
          "<img src=\"assets/images/clock_11.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "It's eleven o'clock.",
        "context": "⏰ 你在北京，妈妈问几点了。",
        "question": "现在几点？",
        "options": [
          "十一点",
          "十二点",
          "三点",
          "一点"
        ],
        "correct": 0,
        "chinese": "现在是十一点。"
      },
      {
        "type": "listen_select",
        "audio": "It's three o'clock in London.",
        "context": "🕐 你想知道伦敦几点。",
        "question": "伦敦几点？",
        "options": [
          "三点",
          "十一点",
          "十二点",
          "一点"
        ],
        "correct": 0,
        "chinese": "伦敦现在三点。"
      },
      {
        "type": "listen_select",
        "audio": "So many clocks!",
        "context": "⏰ 好多钟！你数了数。",
        "question": "这里有什么？",
        "options": [
          "很多钟",
          "很多动物",
          "很多书",
          "很多人"
        ],
        "correct": 0,
        "chinese": "好多钟！"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "word": "clock",
        "sentence": "So many clocks!",
        "chinese": "好多钟！",
        "options": [
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          },
          {
            "text": "<img src=\"assets/images/clock.png\" width=\"80\">",
            "value": "clock"
          },
          {
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "chair"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "schoolbag"
          }
        ],
        "correct": "clock"
      },
      {
        "type": "word_match",
        "word": "chair",
        "sentence": "This is a chair.",
        "chinese": "这是一把椅子。",
        "options": [
          {
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "chair"
          },
          {
            "text": "<img src=\"assets/images/clock.png\" width=\"80\">",
            "value": "clock"
          },
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "schoolbag"
          }
        ],
        "correct": "chair"
      },
      {
        "type": "word_match",
        "word": "bed",
        "sentence": "This is a bed.",
        "chinese": "这是一张床。",
        "options": [
          {
            "text": "<img src=\"assets/images/clock.png\" width=\"80\">",
            "value": "clock"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "schoolbag"
          },
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          },
          {
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "chair"
          }
        ],
        "correct": "bed"
      },
      {
        "type": "sentence_match",
        "sentence": "What's the time, Mom?",
        "chinese": "妈妈，几点了？",
        "options": [
          {
            "text": "现在是北京时间十一点。",
            "value": "wrong1"
          },
          {
            "text": "妈妈，几点了？",
            "value": "correct"
          },
          {
            "text": "好多钟！",
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
        "sentence": "It's eleven o'clock in Beijing.",
        "chinese": "现在是北京时间十一点。",
        "options": [
          {
            "text": "现在是北京时间十一点。",
            "value": "correct"
          },
          {
            "text": "现在是伦敦时间十二点。",
            "value": "wrong1"
          },
          {
            "text": "现在是三点。",
            "value": "wrong2"
          },
          {
            "text": "妈妈，几点了？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's three o'clock.",
        "chinese": "现在是三点。",
        "options": [
          {
            "text": "现在是十一点。",
            "value": "wrong1"
          },
          {
            "text": "现在是十二点。",
            "value": "wrong2"
          },
          {
            "text": "现在是三点。",
            "value": "correct"
          },
          {
            "text": "好多钟！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "So many clocks!",
        "chinese": "好多钟！",
        "options": [
          {
            "text": "妈妈，几点了？",
            "value": "wrong1"
          },
          {
            "text": "好多钟！",
            "value": "correct"
          },
          {
            "text": "现在是三点。",
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
        "sentence": "Is it twelve o'clock in London?",
        "chinese": "现在是伦敦时间十二点吗？",
        "options": [
          {
            "text": "现在是伦敦时间十二点吗？",
            "value": "correct"
          },
          {
            "text": "现在是北京时间十一点。",
            "value": "wrong1"
          },
          {
            "text": "妈妈，几点了？",
            "value": "wrong2"
          },
          {
            "text": "好多钟！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想问妈妈现在几点了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's eleven o'clock.",
            "value": "wrong1"
          },
          {
            "text": "So many clocks!",
            "value": "wrong2"
          },
          {
            "text": "What's the time, Mom?",
            "value": "correct"
          },
          {
            "text": "No, it isn't.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你看到很多钟，你会感叹：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "What's the time?",
            "value": "wrong1"
          },
          {
            "text": "It's eleven o'clock.",
            "value": "wrong2"
          },
          {
            "text": "No, it isn't.",
            "value": "wrong3"
          },
          {
            "text": "So many clocks!",
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
            "word": "clock",
            "match": "<img src=\"assets/images/clock.png\" width=\"50\">",
            "chinese": "钟"
          },
          {
            "word": "eleven",
            "match": "<img src=\"assets/images/clock_11.png\" width=\"50\">",
            "chinese": "十一点"
          },
          {
            "word": "twelve",
            "match": "<img src=\"assets/images/clock_12.png\" width=\"50\">",
            "chinese": "十二点"
          },
          {
            "word": "three",
            "match": "<img src=\"assets/images/clock_3.png\" width=\"50\">",
            "chinese": "三点"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "time",
            "match": "时间",
            "example": "What's the time?"
          },
          {
            "word": "eleven",
            "match": "十一",
            "example": "It's eleven o'clock."
          },
          {
            "word": "twelve",
            "match": "十二",
            "example": "It's twelve o'clock."
          },
          {
            "word": "clock",
            "match": "钟",
            "example": "So many clocks!"
          }
        ]
      },
      {
        "type": "word_match",
        "word": "clock",
        "sentence": "So many clocks!",
        "chinese": "好多钟！",
        "options": [
          {
            "text": "<img src=\"assets/images/clock.png\" width=\"80\">",
            "value": "clock"
          },
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          },
          {
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "chair"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "schoolbag"
          }
        ],
        "correct": "clock"
      },
      {
        "type": "word_match",
        "word": "schoolbag",
        "sentence": "This is a schoolbag.",
        "chinese": "这是一个书包。",
        "options": [
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "schoolbag"
          },
          {
            "text": "<img src=\"assets/images/clock.png\" width=\"80\">",
            "value": "clock"
          },
          {
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "chair"
          }
        ],
        "correct": "schoolbag"
      },
      {
        "type": "sentence_match",
        "sentence": "What's the time, Mom?",
        "chinese": "妈妈，几点了？",
        "options": [
          {
            "text": "妈妈，几点了？",
            "value": "correct"
          },
          {
            "text": "现在是北京时间十一点。",
            "value": "wrong1"
          },
          {
            "text": "好多钟！",
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
        "sentence": "It's eleven o'clock in Beijing.",
        "chinese": "现在是北京时间十一点。",
        "options": [
          {
            "text": "现在是伦敦时间十二点。",
            "value": "wrong1"
          },
          {
            "text": "现在是北京时间十一点。",
            "value": "correct"
          },
          {
            "text": "现在是三点。",
            "value": "wrong2"
          },
          {
            "text": "妈妈，几点了？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it twelve o'clock in London?",
        "chinese": "现在是伦敦时间十二点吗？",
        "options": [
          {
            "text": "现在是北京时间十一点吗？",
            "value": "wrong1"
          },
          {
            "text": "妈妈，几点了？",
            "value": "wrong2"
          },
          {
            "text": "现在是伦敦时间十二点吗？",
            "value": "correct"
          },
          {
            "text": "好多钟！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "No, it isn't.",
        "chinese": "不，不是。",
        "options": [
          {
            "text": "是的，是的。",
            "value": "wrong1"
          },
          {
            "text": "不，不是。",
            "value": "correct"
          },
          {
            "text": "妈妈，几点了？",
            "value": "wrong2"
          },
          {
            "text": "好多钟！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's three o'clock.",
        "chinese": "现在是三点。",
        "options": [
          {
            "text": "现在是十一点。",
            "value": "wrong1"
          },
          {
            "text": "现在是十二点。",
            "value": "wrong2"
          },
          {
            "text": "现在是三点。",
            "value": "correct"
          },
          {
            "text": "好多钟！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "So many clocks!",
        "chinese": "好多钟！",
        "options": [
          {
            "text": "好多钟！",
            "value": "correct"
          },
          {
            "text": "妈妈，几点了？",
            "value": "wrong1"
          },
          {
            "text": "现在是三点。",
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
        "sentence": "It's eleven o'clock.",
        "chinese": "现在是十一点。",
        "options": [
          {
            "text": "现在是十二点。",
            "value": "wrong1"
          },
          {
            "text": "现在是三点。",
            "value": "wrong2"
          },
          {
            "text": "现在是十一点。",
            "value": "correct"
          },
          {
            "text": "妈妈，几点了？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's twelve o'clock.",
        "chinese": "现在是十二点。",
        "options": [
          {
            "text": "现在是十二点。",
            "value": "correct"
          },
          {
            "text": "现在是十一点。",
            "value": "wrong1"
          },
          {
            "text": "现在是三点。",
            "value": "wrong2"
          },
          {
            "text": "好多钟！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What's the time, Mom? It's eleven o'clock in Beijing.",
        "chinese": "妈妈，几点了？现在是北京时间十一点。",
        "options": [
          {
            "text": "妈妈，几点了？现在是北京时间十一点。",
            "value": "correct"
          },
          {
            "text": "现在是伦敦时间十二点吗？不，不是。",
            "value": "wrong1"
          },
          {
            "text": "好多钟！现在是三点。",
            "value": "wrong2"
          },
          {
            "text": "现在是十一点。好多钟！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it twelve o'clock in London? No, it isn't. It's three o'clock.",
        "chinese": "现在是伦敦时间十二点吗？不，不是。现在是三点。",
        "options": [
          {
            "text": "妈妈，几点了？现在是北京时间十一点。",
            "value": "wrong1"
          },
          {
            "text": "现在是伦敦时间十二点吗？不，不是。现在是三点。",
            "value": "correct"
          },
          {
            "text": "好多钟！现在是十一点。",
            "value": "wrong2"
          },
          {
            "text": "现在是十二点。不，不是。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想问现在几点了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's eleven o'clock.",
            "value": "wrong1"
          },
          {
            "text": "What's the time, Mom?",
            "value": "correct"
          },
          {
            "text": "So many clocks!",
            "value": "wrong2"
          },
          {
            "text": "No, it isn't.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想知道伦敦是不是十二点，你会问：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "What's the time, Mom?",
            "value": "wrong1"
          },
          {
            "text": "It's eleven o'clock in Beijing.",
            "value": "wrong2"
          },
          {
            "text": "Is it twelve o'clock in London?",
            "value": "correct"
          },
          {
            "text": "So many clocks!",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人问你是不是十二点，但不是，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Yes, it is.",
            "value": "wrong1"
          },
          {
            "text": "So many clocks!",
            "value": "wrong2"
          },
          {
            "text": "No, it isn't.",
            "value": "correct"
          },
          {
            "text": "What's the time?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你看到墙上挂了好多钟，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "What's the time?",
            "value": "wrong1"
          },
          {
            "text": "It's eleven o'clock.",
            "value": "wrong2"
          },
          {
            "text": "No, it isn't.",
            "value": "wrong3"
          },
          {
            "text": "So many clocks!",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's eleven o'clock in Beijing. So many clocks!",
        "chinese": "现在是北京时间十一点。好多钟！",
        "options": [
          {
            "text": "现在是北京时间十一点。好多钟！",
            "value": "correct"
          },
          {
            "text": "妈妈，几点了？现在是三点。",
            "value": "wrong1"
          },
          {
            "text": "现在是伦敦时间十二点吗？不，不是。",
            "value": "wrong2"
          },
          {
            "text": "好多钟！妈妈，几点了？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's three o'clock. So many clocks!",
        "chinese": "现在是三点。好多钟！",
        "options": [
          {
            "text": "现在是十一点。好多钟！",
            "value": "wrong1"
          },
          {
            "text": "现在是三点。好多钟！",
            "value": "correct"
          },
          {
            "text": "妈妈，几点了？好多钟！",
            "value": "wrong2"
          },
          {
            "text": "现在是十二点。不，不是。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's twelve o'clock. So many clocks!",
        "chinese": "现在是十二点。好多钟！",
        "options": [
          {
            "text": "现在是十二点。好多钟！",
            "value": "correct"
          },
          {
            "text": "现在是十一点。好多钟！",
            "value": "wrong1"
          },
          {
            "text": "现在是三点。好多钟！",
            "value": "wrong2"
          },
          {
            "text": "妈妈，几点了？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What's the time, Mom? It's eleven o'clock in Beijing. So many clocks!",
        "chinese": "妈妈，几点了？现在是北京时间十一点。好多钟！",
        "options": [
          {
            "text": "妈妈，几点了？现在是北京时间十一点。好多钟！",
            "value": "correct"
          },
          {
            "text": "现在是伦敦时间十二点吗？不，不是。现在是三点。",
            "value": "wrong1"
          },
          {
            "text": "好多钟！现在是十一点。妈妈，几点了？",
            "value": "wrong2"
          },
          {
            "text": "现在是三点。好多钟！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "It's eleven o'clock in Beijing.",
        "context": "你朋友在伦敦，他想知道北京现在几点。你看到时钟。",
        "question": "北京几点？",
        "options": [
          {
            "text": "十一点",
            "value": "correct"
          },
          {
            "text": "三点",
            "value": "w1"
          },
          {
            "text": "十二点",
            "value": "w2"
          },
          {
            "text": "一点",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "北京现在十一点。"
      },
      {
        "type": "scenario",
        "sentence": "What's the time? It's twelve o'clock.",
        "context": "你迟到了，看了一下钟。",
        "question": "现在几点？",
        "options": [
          {
            "text": "十二点",
            "value": "correct"
          },
          {
            "text": "十一点",
            "value": "w1"
          },
          {
            "text": "三点",
            "value": "w2"
          },
          {
            "text": "一点",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "几点了？十二点。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "What's the time, Mom?",
          "It's eleven o'clock.",
          "Oh, so late!"
        ],
        "chinese": "把问时间对话排好！",
        "chineseHint": "妈妈，几点了？ / 十一点了。 / 哦，太晚了！"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "So many clocks!",
          "What's the time?",
          "It's three o'clock."
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "好多钟！ / 几点了？ / 三点了。"
      },
      {
        "type": "word_match",
        "word": "eleven",
        "options": [
          {
            "text": "<img src=\"assets/images/clock_11.png\" width=\"80\">",
            "value": "eleven"
          },
          {
            "text": "<img src=\"assets/images/clock_12.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/clock.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "eleven",
        "chinese": "eleven"
      },
      {
        "type": "word_match",
        "word": "twelve",
        "options": [
          {
            "text": "<img src=\"assets/images/clock_12.png\" width=\"80\">",
            "value": "twelve"
          },
          {
            "text": "<img src=\"assets/images/clock.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/clock_11.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "twelve",
        "chinese": "twelve"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "钟的首字母是？",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "k",
          "c",
          "g",
          "t"
        ],
        "correct": 1,
        "chinese": "钟",
        "word": "钟"
      },
      {
        "type": "pinyin_fill",
        "hint": "cl_ck",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "o",
          "a",
          "e",
          "i"
        ],
        "correct": 0,
        "chinese": "钟"
      },
      {
        "type": "pinyin_fill",
        "hint": "t_me",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "i",
          "a",
          "o",
          "e"
        ],
        "correct": 0,
        "chinese": "时间"
      },
      {
        "type": "fill_blank",
        "prompt": "What's the _____, Mom?",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "clock",
          "time",
          "name",
          "day"
        ],
        "correct": 1,
        "chinese": "妈妈，几点了？"
      },
      {
        "type": "word_puzzle",
        "hint": "t_me",
        "word": "time",
        "options": [
          "l",
          "k",
          "f",
          "i"
        ],
        "correct": 3,
        "chinese": "time"
      },
      {
        "type": "word_puzzle",
        "hint": "e_even",
        "word": "eleven",
        "options": [
          "y",
          "s",
          "l",
          "a"
        ],
        "correct": 2,
        "chinese": "eleven"
      },
      {
        "type": "word_puzzle",
        "hint": "t_elve",
        "word": "twelve",
        "options": [
          "r",
          "w",
          "j",
          "s"
        ],
        "correct": 1,
        "chinese": "twelve"
      },
      {
        "type": "fill_blank",
        "prompt": "What's the _____?",
        "options": [
          "clock",
          "eleven",
          "time",
          "twelve"
        ],
        "correct": 2,
        "chinese": "What's the time?"
      },
      {
        "type": "fill_blank",
        "prompt": "It's eleven _____.",
        "options": [
          "twelve",
          "time",
          "o'clock",
          "eleven"
        ],
        "correct": 2,
        "chinese": "It's eleven o'clock."
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "妈妈，几点了？",
        "words": [
          "What's",
          "the",
          "time",
          "Mom"
        ],
        "scrambled": [
          "time",
          "What's",
          "Mom",
          "the"
        ],
        "chineseWords": [
          "妈妈",
          "几点",
          "了"
        ],
        "chineseScrambled": [
          "了",
          "妈妈",
          "几点"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在是北京时间十一点。",
        "words": [
          "It's",
          "eleven",
          "o'clock",
          "in",
          "Beijing"
        ],
        "scrambled": [
          "o'clock",
          "It's",
          "Beijing",
          "eleven",
          "in"
        ],
        "chineseWords": [
          "现在是",
          "北京",
          "时间",
          "十一",
          "点"
        ],
        "chineseScrambled": [
          "十一",
          "点",
          "现在是",
          "时间",
          "北京"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在是伦敦时间十二点吗？",
        "words": [
          "Is",
          "it",
          "twelve",
          "o'clock",
          "in",
          "London"
        ],
        "scrambled": [
          "twelve",
          "Is",
          "London",
          "o'clock",
          "it",
          "in"
        ],
        "chineseWords": [
          "现在是",
          "伦敦",
          "时间",
          "十二",
          "点",
          "吗"
        ],
        "chineseScrambled": [
          "十二",
          "吗",
          "现在是",
          "时间",
          "点",
          "伦敦"
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
        "chinese": "现在是三点。",
        "words": [
          "It's",
          "three",
          "o'clock"
        ],
        "scrambled": [
          "three",
          "It's",
          "o'clock"
        ],
        "chineseWords": [
          "现在是",
          "三",
          "点"
        ],
        "chineseScrambled": [
          "三",
          "点",
          "现在是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "好多钟！",
        "words": [
          "So",
          "many",
          "clocks"
        ],
        "scrambled": [
          "clocks",
          "So",
          "many"
        ],
        "chineseWords": [
          "好多",
          "钟"
        ],
        "chineseScrambled": [
          "钟",
          "好多"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在是十一点。",
        "words": [
          "It's",
          "eleven",
          "o'clock"
        ],
        "scrambled": [
          "eleven",
          "It's",
          "o'clock"
        ],
        "chineseWords": [
          "现在是",
          "十一",
          "点"
        ],
        "chineseScrambled": [
          "点",
          "现在是",
          "十一"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在是十二点。",
        "words": [
          "It's",
          "twelve",
          "o'clock"
        ],
        "scrambled": [
          "twelve",
          "o'clock",
          "It's"
        ],
        "chineseWords": [
          "现在是",
          "十二",
          "点"
        ],
        "chineseScrambled": [
          "十二",
          "现在是",
          "点"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在是三点。好多钟！",
        "words": [
          "It's",
          "three",
          "o'clock",
          "So",
          "many",
          "clocks"
        ],
        "scrambled": [
          "So",
          "three",
          "clocks",
          "It's",
          "many",
          "o'clock"
        ],
        "chineseWords": [
          "现在是",
          "三",
          "点",
          "好多",
          "钟"
        ],
        "chineseScrambled": [
          "好多",
          "三",
          "钟",
          "现在是",
          "点"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在是十二点。好多钟！",
        "words": [
          "It's",
          "twelve",
          "o'clock",
          "So",
          "many",
          "clocks"
        ],
        "scrambled": [
          "clocks",
          "twelve",
          "It's",
          "So",
          "o'clock",
          "many"
        ],
        "chineseWords": [
          "现在是",
          "十二",
          "点",
          "好多",
          "钟"
        ],
        "chineseScrambled": [
          "钟",
          "十二",
          "好多",
          "现在是",
          "点"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "What's the _____, Mom?",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "clock",
          "time",
          "name",
          "day"
        ],
        "correct": 1,
        "chinese": "妈妈，几点了？"
      },
      {
        "type": "fill_blank",
        "prompt": "It's _____ o'clock in Beijing.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "eleven",
          "three",
          "twelve",
          "one"
        ],
        "correct": 0,
        "chinese": "现在是北京时间十一点。"
      },
      {
        "type": "fill_blank",
        "prompt": "Is it _____ o'clock in London?",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "eleven",
          "twelve",
          "three",
          "one"
        ],
        "correct": 1,
        "chinese": "现在是伦敦时间十二点吗？"
      },
      {
        "type": "fill_blank",
        "prompt": "It's _____ o'clock.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "eleven",
          "twelve",
          "three",
          "one"
        ],
        "correct": 2,
        "chinese": "现在是三点。"
      },
      {
        "type": "fill_blank",
        "prompt": "So many _____!",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "animals",
          "clocks",
          "books",
          "birds"
        ],
        "correct": 1,
        "chinese": "好多钟！"
      },
      {
        "type": "word_puzzle",
        "hint": "ti_e",
        "word": "time",
        "options": [
          "o",
          "s",
          "r",
          "m"
        ],
        "correct": 3,
        "chinese": "time"
      },
      {
        "type": "word_puzzle",
        "hint": "ele_en",
        "word": "eleven",
        "options": [
          "m",
          "k",
          "v",
          "s"
        ],
        "correct": 2,
        "chinese": "eleven"
      },
      {
        "type": "fill_blank",
        "prompt": "What's the _____?",
        "options": [
          "twelve",
          "clock",
          "time",
          "eleven"
        ],
        "correct": 2,
        "chinese": "What's the time?"
      },
      {
        "type": "fill_blank",
        "prompt": "It's eleven _____.",
        "options": [
          "eleven",
          "twelve",
          "o'clock",
          "time"
        ],
        "correct": 2,
        "chinese": "It's eleven o'clock."
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "clock",
        "chinese": "钟",
        "expected": "clock"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "time",
        "chinese": "时间",
        "expected": "time"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "eleven",
        "chinese": "十一",
        "expected": "eleven"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "twelve",
        "chinese": "十二",
        "expected": "twelve"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "three",
        "chinese": "三",
        "expected": "three"
      },
      {
        "type": "speak_select",
        "audio": "clock",
        "options": [
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "钟"
      },
      {
        "type": "speak_select",
        "audio": "chair",
        "options": [
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "椅子"
      },
      {
        "type": "repeat_sentence",
        "word": "What's the time, Mom?",
        "chinese": "妈妈，几点了？",
        "expected": "What's the time, Mom?"
      },
      {
        "type": "repeat_sentence",
        "word": "It's eleven o'clock.",
        "chinese": "现在是十一点。",
        "expected": "It's eleven o'clock."
      },
      {
        "type": "repeat_sentence",
        "word": "So many clocks!",
        "chinese": "好多钟！",
        "expected": "So many clocks!"
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "What's the time, Mom?",
        "chinese": "妈妈，几点了？",
        "expected": "What's the time, Mom?"
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "It's eleven o'clock in Beijing.",
        "chinese": "现在是北京时间十一点。",
        "expected": "It's eleven o'clock in Beijing."
      },
      {
        "type": "repeat_sentence",
        "word": "Is it twelve o'clock in London?",
        "chinese": "现在是伦敦时间十二点吗？",
        "expected": "Is it twelve o'clock in London?"
      },
      {
        "type": "repeat_sentence",
        "word": "No, it isn't.",
        "chinese": "不，不是。",
        "expected": "No, it isn't."
      },
      {
        "type": "repeat_sentence",
        "word": "It's three o'clock.",
        "chinese": "现在是三点。",
        "expected": "It's three o'clock."
      },
      {
        "type": "repeat_sentence",
        "word": "So many clocks!",
        "chinese": "好多钟！",
        "expected": "So many clocks!"
      },
      {
        "type": "repeat_sentence",
        "word": "It's eleven o'clock.",
        "chinese": "现在是十一点。",
        "expected": "It's eleven o'clock."
      },
      {
        "type": "repeat_sentence",
        "word": "It's twelve o'clock.",
        "chinese": "现在是十二点。",
        "expected": "It's twelve o'clock."
      },
      {
        "type": "repeat_sentence",
        "word": "What's the time, Mom? It's eleven o'clock in Beijing.",
        "chinese": "妈妈，几点了？现在是北京时间十一点。",
        "expected": "What's the time, Mom? It's eleven o'clock in Beijing."
      },
      {
        "type": "repeat_sentence",
        "word": "Is it twelve o'clock in London? No, it isn't.",
        "chinese": "现在是伦敦时间十二点吗？不，不是。",
        "expected": "Is it twelve o'clock in London? No, it isn't."
      },
      {
        "type": "repeat_sentence",
        "word": "Is it twelve o'clock in London? No, it isn't. It's three o'clock.",
        "chinese": "现在是伦敦时间十二点吗？不，不是。现在是三点。",
        "expected": "Is it twelve o'clock in London? No, it isn't. It's three o'clock."
      },
      {
        "type": "repeat_sentence",
        "word": "It's eleven o'clock in Beijing. So many clocks!",
        "chinese": "现在是北京时间十一点。好多钟！",
        "expected": "It's eleven o'clock in Beijing. So many clocks!"
      },
      {
        "type": "repeat_sentence",
        "word": "It's three o'clock. So many clocks!",
        "chinese": "现在是三点。好多钟！",
        "expected": "It's three o'clock. So many clocks!"
      },
      {
        "type": "repeat_sentence",
        "word": "It's twelve o'clock. So many clocks!",
        "chinese": "现在是十二点。好多钟！",
        "expected": "It's twelve o'clock. So many clocks!"
      },
      {
        "type": "repeat_sentence",
        "word": "What's the time, Mom? It's eleven o'clock. So many clocks!",
        "chinese": "妈妈，几点了？现在是十一点。好多钟！",
        "expected": "What's the time, Mom? It's eleven o'clock. So many clocks!"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "clock",
        "chinese": "钟",
        "expected": "clock"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "time",
        "chinese": "时间",
        "expected": "time"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "eleven",
        "chinese": "十一",
        "expected": "eleven"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "twelve",
        "chinese": "十二",
        "expected": "twelve"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "three",
        "chinese": "三",
        "expected": "three"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "clock",
        "chinese": "clock"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/clock_11.png\" width=\"80\">",
        "word": "clock_11",
        "chinese": "clock_11"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/clock_12.png\" width=\"80\">",
        "word": "clock_12",
        "chinese": "clock_12"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/clock_3.png\" width=\"80\">",
        "word": "clock_3",
        "chinese": "clock_3"
      },
      {
        "type": "picture_speak",
        "image": "",
        "word": "eleven",
        "chinese": "eleven"
      },
      {
        "type": "picture_speak",
        "image": "",
        "word": "twelve",
        "chinese": "twelve"
      }
    ]
  }
};
