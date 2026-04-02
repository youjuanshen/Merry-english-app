// Unit 3 Lesson 2: What's the time in New York?
// Core vocab: kid, read, watch, TV
// Sentences: "What's the time in New York?", "I'm watching TV.", "She is reading.", etc.
var unit3_lesson2 = {
  "id": "U3L2",
  "title": "What's the time in New York?",
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
        "audio": "drawing",
        "options": [
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/drawing.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "画画"
      },
      {
        "type": "listen_select",
        "audio": "schoolbag",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "书包"
      },
      {
        "type": "listen_select",
        "audio": "What's the time in New York?",
        "options": [
          "爷爷，伦敦几点了？",
          "纽约几点了？",
          "我在看电视。",
          "现在是福州上午八点半。"
        ],
        "correct": 1,
        "chinese": "纽约几点了？"
      },
      {
        "type": "listen_select",
        "audio": "I'm watching TV.",
        "options": [
          "我在看书。",
          "孩子们在做什么？",
          "我在看电视。",
          "她在看书。"
        ],
        "correct": 2,
        "chinese": "我在看电视。"
      },
      {
        "type": "listen_select",
        "audio": "I'm reading.",
        "options": [
          "我在看电视。",
          "孩子们在做什么？",
          "她在看书。",
          "我在看书。"
        ],
        "correct": 3,
        "chinese": "我在看书。"
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
        "audio": "What's the time in London, Grandpa?",
        "options": [
          "爷爷，伦敦几点了？",
          "纽约几点了？",
          "现在是上午十点半。",
          "我在看电视。"
        ],
        "correct": 0,
        "chinese": "爷爷，伦敦几点了？"
      },
      {
        "type": "listen_select",
        "audio": "What are the kids doing? Ben and Kate are playing with toys.",
        "options": [
          "孩子们在做什么？本和凯特在玩玩具。",
          "奶奶也在看电视吗？不，她没有。",
          "我在看电视。我在看书。",
          "爷爷，伦敦几点了？"
        ],
        "correct": 0,
        "chinese": "孩子们在做什么？本和凯特在玩玩具。"
      },
      {
        "type": "listen_select",
        "audio": "She is reading a book.",
        "options": [
          "她在读书。",
          "她在看电视。",
          "她在睡觉。",
          "她在做作业。"
        ],
        "correct": 0,
        "chinese": "她在读书。"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "clock",
        "options": [
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "钟"
      },
      {
        "type": "listen_select",
        "audio": "chair",
        "options": [
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/drawing.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "椅子"
      },
      {
        "type": "listen_select",
        "audio": "It's 8:30 a.m. in Fuzhou.",
        "options": [
          "现在是福州上午八点半。",
          "纽约几点了？",
          "现在是上午十点半。",
          "我在看电视。"
        ],
        "correct": 0,
        "chinese": "现在是福州上午八点半。"
      },
      {
        "type": "listen_select",
        "audio": "What's the time in New York?",
        "options": [
          "现在是福州上午八点半。",
          "纽约几点了？",
          "爷爷，伦敦几点了？",
          "我在看书。"
        ],
        "correct": 1,
        "chinese": "纽约几点了？"
      },
      {
        "type": "listen_select",
        "audio": "What's the time in London, Grandpa?",
        "options": [
          "纽约几点了？",
          "我在看电视。",
          "爷爷，伦敦几点了？",
          "孩子们在做什么？"
        ],
        "correct": 2,
        "chinese": "爷爷，伦敦几点了？"
      },
      {
        "type": "listen_select",
        "audio": "It's 10:30 a.m.",
        "options": [
          "现在是下午七点半。",
          "现在是福州上午八点半。",
          "纽约几点了？",
          "现在是上午十点半。"
        ],
        "correct": 3,
        "chinese": "现在是上午十点半。"
      },
      {
        "type": "listen_select",
        "audio": "I'm watching TV.",
        "options": [
          "我在看书。",
          "我在看电视。",
          "她在看书。",
          "孩子们在玩玩具。"
        ],
        "correct": 1,
        "chinese": "我在看电视。"
      },
      {
        "type": "listen_select",
        "audio": "It's 7:30 p.m.",
        "options": [
          "现在是上午十点半。",
          "现在是福州上午八点半。",
          "现在是下午七点半。",
          "纽约几点了？"
        ],
        "correct": 2,
        "chinese": "现在是下午七点半。"
      },
      {
        "type": "listen_select",
        "audio": "I'm reading.",
        "options": [
          "我在看书。",
          "我在看电视。",
          "她在看书。",
          "孩子们在做什么？"
        ],
        "correct": 0,
        "chinese": "我在看书。"
      },
      {
        "type": "listen_select",
        "audio": "What are the kids doing?",
        "options": [
          "奶奶也在看电视吗？",
          "爷爷，伦敦几点了？",
          "我在看电视。",
          "孩子们在做什么？"
        ],
        "correct": 3,
        "chinese": "孩子们在做什么？"
      },
      {
        "type": "listen_select",
        "audio": "Ben and Kate are playing with toys.",
        "options": [
          "本和凯特在玩玩具。",
          "孩子们在做什么？",
          "奶奶也在看电视吗？",
          "她在看书。"
        ],
        "correct": 0,
        "chinese": "本和凯特在玩玩具。"
      },
      {
        "type": "listen_select",
        "audio": "Is Grandma watching TV, too?",
        "options": [
          "爷爷，伦敦几点了？",
          "孩子们在做什么？",
          "奶奶也在看电视吗？",
          "不，她没有。"
        ],
        "correct": 2,
        "chinese": "奶奶也在看电视吗？"
      },
      {
        "type": "listen_select",
        "audio": "No, she isn't. She is reading.",
        "options": [
          "是的，她在看电视。",
          "不，她没有。她在看书。",
          "孩子们在玩玩具。",
          "我在看电视。"
        ],
        "correct": 1,
        "chinese": "不，她没有。她在看书。"
      },
      {
        "type": "listen_select",
        "audio": "It's 10:30 a.m. I'm watching TV.",
        "options": [
          "现在是上午十点半。我在看电视。",
          "现在是下午七点半。我在看书。",
          "孩子们在做什么？本和凯特在玩玩具。",
          "爷爷，伦敦几点了？"
        ],
        "correct": 0,
        "chinese": "现在是上午十点半。我在看电视。"
      },
      {
        "type": "listen_select",
        "audio": "It's 7:30 p.m. I'm reading.",
        "options": [
          "现在是上午十点半。我在看电视。",
          "孩子们在做什么？",
          "现在是下午七点半。我在看书。",
          "奶奶也在看电视吗？"
        ],
        "correct": 2,
        "chinese": "现在是下午七点半。我在看书。"
      },
      {
        "type": "listen_select",
        "audio": "Is Grandma watching TV, too? No, she isn't. She is reading.",
        "options": [
          "奶奶也在看电视吗？不，她没有。她在看书。",
          "孩子们在做什么？本和凯特在玩玩具。",
          "现在是上午十点半。我在看电视。",
          "爷爷，伦敦几点了？"
        ],
        "correct": 0,
        "chinese": "奶奶也在看电视吗？不，她没有。她在看书。"
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
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是床，这是一个钟。"
      },
      {
        "type": "listen_select",
        "audio": "What are the kids doing? Ben and Kate are playing with toys.",
        "options": [
          "孩子们在做什么？本和凯特在玩玩具。",
          "奶奶也在看电视吗？不，她没有。她在看书。",
          "现在是上午十点半。我在看电视。",
          "爷爷，伦敦几点了？现在是下午七点半。"
        ],
        "correct": 0,
        "chinese": "孩子们在做什么？本和凯特在玩玩具。"
      },
      {
        "type": "listen_select",
        "audio": "It's 8:30 a.m. in Fuzhou. What's the time in New York?",
        "options": [
          "爷爷，伦敦几点了？现在是上午十点半。",
          "现在是福州上午八点半。纽约几点了？",
          "我在看电视。我在看书。",
          "孩子们在做什么？"
        ],
        "correct": 1,
        "chinese": "现在是福州上午八点半。纽约几点了？"
      },
      {
        "type": "listen_sequence",
        "audio": "reading, watching TV, sleeping",
        "sequence": [
          "reading",
          "watching TV",
          "sleeping"
        ],
        "words": [
          "<img src=\"assets/images/sleeping.png\" width=\"60\">",
          "<img src=\"assets/images/reading.png\" width=\"60\">",
          "<img src=\"assets/images/watching_tv.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "I'm watching TV.",
        "context": "📺 你打电话给朋友，问他在干什么。",
        "question": "朋友在做什么？",
        "options": [
          "看电视",
          "读书",
          "写作业",
          "睡觉"
        ],
        "correct": 0,
        "chinese": "我在看电视。"
      },
      {
        "type": "listen_select",
        "audio": "She is reading.",
        "context": "📖 姐姐呢？她在干什么？",
        "question": "姐姐在做什么？",
        "options": [
          "读书",
          "看电视",
          "画画",
          "做作业"
        ],
        "correct": 0,
        "chinese": "她在读书。"
      },
      {
        "type": "listen_select",
        "audio": "What's the time in New York?",
        "context": "🌍 你想知道纽约几点了。",
        "question": "有人在问什么？",
        "options": [
          "纽约几点",
          "伦敦几点",
          "北京几点",
          "今天星期几"
        ],
        "correct": 0,
        "chinese": "纽约几点了？"
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
        "word": "bed",
        "sentence": "This is a bed.",
        "chinese": "这是一张床。",
        "options": [
          {
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "chair"
          },
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          },
          {
            "text": "<img src=\"assets/images/clock.png\" width=\"80\">",
            "value": "clock"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "schoolbag"
          }
        ],
        "correct": "bed"
      },
      {
        "type": "word_match",
        "word": "drawing",
        "sentence": "I'm drawing.",
        "chinese": "我在画画。",
        "options": [
          {
            "text": "<img src=\"assets/images/clock.png\" width=\"80\">",
            "value": "clock"
          },
          {
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "chair"
          },
          {
            "text": "<img src=\"assets/images/drawing.png\" width=\"80\">",
            "value": "drawing"
          },
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          }
        ],
        "correct": "drawing"
      },
      {
        "type": "sentence_match",
        "sentence": "What's the time in New York?",
        "chinese": "纽约几点了？",
        "options": [
          {
            "text": "爷爷，伦敦几点了？",
            "value": "wrong1"
          },
          {
            "text": "纽约几点了？",
            "value": "correct"
          },
          {
            "text": "我在看电视。",
            "value": "wrong2"
          },
          {
            "text": "现在是福州上午八点半。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I'm watching TV.",
        "chinese": "我在看电视。",
        "options": [
          {
            "text": "我在看电视。",
            "value": "correct"
          },
          {
            "text": "我在看书。",
            "value": "wrong1"
          },
          {
            "text": "她在看书。",
            "value": "wrong2"
          },
          {
            "text": "孩子们在玩玩具。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I'm reading.",
        "chinese": "我在看书。",
        "options": [
          {
            "text": "我在看电视。",
            "value": "wrong1"
          },
          {
            "text": "孩子们在做什么？",
            "value": "wrong2"
          },
          {
            "text": "我在看书。",
            "value": "correct"
          },
          {
            "text": "她在看书。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What are the kids doing?",
        "chinese": "孩子们在做什么？",
        "options": [
          {
            "text": "孩子们在做什么？",
            "value": "correct"
          },
          {
            "text": "奶奶也在看电视吗？",
            "value": "wrong1"
          },
          {
            "text": "纽约几点了？",
            "value": "wrong2"
          },
          {
            "text": "我在看电视。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "She is reading.",
        "chinese": "她在看书。",
        "options": [
          {
            "text": "我在看书。",
            "value": "wrong1"
          },
          {
            "text": "她在看电视。",
            "value": "wrong2"
          },
          {
            "text": "她在看书。",
            "value": "correct"
          },
          {
            "text": "孩子们在玩玩具。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想问纽约现在几点了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "What's the time in London?",
            "value": "wrong1"
          },
          {
            "text": "I'm watching TV.",
            "value": "wrong2"
          },
          {
            "text": "What's the time in New York?",
            "value": "correct"
          },
          {
            "text": "What are the kids doing?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想问奶奶是不是也在看电视，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "What are the kids doing?",
            "value": "wrong1"
          },
          {
            "text": "I'm watching TV.",
            "value": "wrong2"
          },
          {
            "text": "She is reading.",
            "value": "wrong3"
          },
          {
            "text": "Is Grandma watching TV, too?",
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
            "word": "reading",
            "match": "<img src=\"assets/images/reading.png\" width=\"50\">",
            "chinese": "读书"
          },
          {
            "word": "watching TV",
            "match": "<img src=\"assets/images/watching_tv.png\" width=\"50\">",
            "chinese": "看电视"
          },
          {
            "word": "homework",
            "match": "<img src=\"assets/images/homework.png\" width=\"50\">",
            "chinese": "作业"
          },
          {
            "word": "sleeping",
            "match": "<img src=\"assets/images/sleeping.png\" width=\"50\">",
            "chinese": "睡觉"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "kid",
            "match": "孩子",
            "example": "Come on, kids!"
          },
          {
            "word": "read",
            "match": "读书",
            "example": "She is reading."
          },
          {
            "word": "watch",
            "match": "看",
            "example": "I'm watching TV."
          },
          {
            "word": "TV",
            "match": "电视",
            "example": "I'm watching TV."
          }
        ]
      },
      {
        "type": "word_match",
        "word": "clock",
        "sentence": "What's the time?",
        "chinese": "几点了？",
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
        "word": "chair",
        "sentence": "This is a chair.",
        "chinese": "这是一把椅子。",
        "options": [
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          },
          {
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "chair"
          },
          {
            "text": "<img src=\"assets/images/clock.png\" width=\"80\">",
            "value": "clock"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "schoolbag"
          }
        ],
        "correct": "chair"
      },
      {
        "type": "sentence_match",
        "sentence": "It's 8:30 a.m. in Fuzhou.",
        "chinese": "现在是福州上午八点半。",
        "options": [
          {
            "text": "现在是福州上午八点半。",
            "value": "correct"
          },
          {
            "text": "纽约几点了？",
            "value": "wrong1"
          },
          {
            "text": "现在是上午十点半。",
            "value": "wrong2"
          },
          {
            "text": "我在看电视。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What's the time in New York?",
        "chinese": "纽约几点了？",
        "options": [
          {
            "text": "爷爷，伦敦几点了？",
            "value": "wrong1"
          },
          {
            "text": "纽约几点了？",
            "value": "correct"
          },
          {
            "text": "现在是福州上午八点半。",
            "value": "wrong2"
          },
          {
            "text": "我在看书。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What's the time in London, Grandpa?",
        "chinese": "爷爷，伦敦几点了？",
        "options": [
          {
            "text": "纽约几点了？",
            "value": "wrong1"
          },
          {
            "text": "现在是上午十点半。",
            "value": "wrong2"
          },
          {
            "text": "爷爷，伦敦几点了？",
            "value": "correct"
          },
          {
            "text": "孩子们在做什么？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's 10:30 a.m. I'm watching TV.",
        "chinese": "现在是上午十点半。我在看电视。",
        "options": [
          {
            "text": "现在是上午十点半。我在看电视。",
            "value": "correct"
          },
          {
            "text": "现在是下午七点半。我在看书。",
            "value": "wrong1"
          },
          {
            "text": "孩子们在做什么？",
            "value": "wrong2"
          },
          {
            "text": "奶奶也在看电视吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's 7:30 p.m. I'm reading.",
        "chinese": "现在是下午七点半。我在看书。",
        "options": [
          {
            "text": "现在是上午十点半。我在看电视。",
            "value": "wrong1"
          },
          {
            "text": "现在是下午七点半。我在看书。",
            "value": "correct"
          },
          {
            "text": "孩子们在玩玩具。",
            "value": "wrong2"
          },
          {
            "text": "奶奶也在看电视吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What are the kids doing?",
        "chinese": "孩子们在做什么？",
        "options": [
          {
            "text": "奶奶也在看电视吗？",
            "value": "wrong1"
          },
          {
            "text": "孩子们在做什么？",
            "value": "correct"
          },
          {
            "text": "我在看电视。",
            "value": "wrong2"
          },
          {
            "text": "纽约几点了？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Ben and Kate are playing with toys.",
        "chinese": "本和凯特在玩玩具。",
        "options": [
          {
            "text": "本和凯特在玩玩具。",
            "value": "correct"
          },
          {
            "text": "孩子们在做什么？",
            "value": "wrong1"
          },
          {
            "text": "她在看书。",
            "value": "wrong2"
          },
          {
            "text": "我在看电视。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is Grandma watching TV, too?",
        "chinese": "奶奶也在看电视吗？",
        "options": [
          {
            "text": "孩子们在做什么？",
            "value": "wrong1"
          },
          {
            "text": "我在看电视。",
            "value": "wrong2"
          },
          {
            "text": "奶奶也在看电视吗？",
            "value": "correct"
          },
          {
            "text": "她在看书。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "No, she isn't. She is reading.",
        "chinese": "不，她没有。她在看书。",
        "options": [
          {
            "text": "是的，她在看电视。",
            "value": "wrong1"
          },
          {
            "text": "不，她没有。她在看书。",
            "value": "correct"
          },
          {
            "text": "孩子们在玩玩具。",
            "value": "wrong2"
          },
          {
            "text": "我在看电视。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I'm watching TV.",
        "chinese": "我在看电视。",
        "options": [
          {
            "text": "我在看书。",
            "value": "wrong1"
          },
          {
            "text": "我在看电视。",
            "value": "correct"
          },
          {
            "text": "她在看书。",
            "value": "wrong2"
          },
          {
            "text": "孩子们在玩玩具。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I'm reading.",
        "chinese": "我在看书。",
        "options": [
          {
            "text": "我在看电视。",
            "value": "wrong1"
          },
          {
            "text": "她在看书。",
            "value": "wrong2"
          },
          {
            "text": "我在看书。",
            "value": "correct"
          },
          {
            "text": "孩子们在做什么？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "She is reading.",
        "chinese": "她在看书。",
        "options": [
          {
            "text": "她在看书。",
            "value": "correct"
          },
          {
            "text": "我在看书。",
            "value": "wrong1"
          },
          {
            "text": "我在看电视。",
            "value": "wrong2"
          },
          {
            "text": "奶奶也在看电视吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想问爷爷伦敦几点了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "What's the time in New York?",
            "value": "wrong1"
          },
          {
            "text": "What's the time in London, Grandpa?",
            "value": "correct"
          },
          {
            "text": "What are the kids doing?",
            "value": "wrong2"
          },
          {
            "text": "I'm watching TV.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想知道孩子们在做什么，你会问：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Is Grandma watching TV, too?",
            "value": "wrong1"
          },
          {
            "text": "What's the time in London?",
            "value": "wrong2"
          },
          {
            "text": "What are the kids doing?",
            "value": "correct"
          },
          {
            "text": "I'm reading.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is Grandma watching TV, too? No, she isn't. She is reading.",
        "chinese": "奶奶也在看电视吗？不，她没有。她在看书。",
        "options": [
          {
            "text": "奶奶也在看电视吗？不，她没有。她在看书。",
            "value": "correct"
          },
          {
            "text": "孩子们在做什么？本和凯特在玩玩具。",
            "value": "wrong1"
          },
          {
            "text": "现在是上午十点半。我在看电视。",
            "value": "wrong2"
          },
          {
            "text": "爷爷，伦敦几点了？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What are the kids doing? Ben and Kate are playing with toys.",
        "chinese": "孩子们在做什么？本和凯特在玩玩具。",
        "options": [
          {
            "text": "孩子们在做什么？本和凯特在玩玩具。",
            "value": "correct"
          },
          {
            "text": "奶奶也在看电视吗？不，她没有。",
            "value": "wrong1"
          },
          {
            "text": "现在是下午七点半。我在看书。",
            "value": "wrong2"
          },
          {
            "text": "纽约几点了？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's 8:30 a.m. in Fuzhou. What's the time in New York?",
        "chinese": "现在是福州上午八点半。纽约几点了？",
        "options": [
          {
            "text": "现在是福州上午八点半。纽约几点了？",
            "value": "correct"
          },
          {
            "text": "爷爷，伦敦几点了？现在是上午十点半。",
            "value": "wrong1"
          },
          {
            "text": "我在看电视。我在看书。",
            "value": "wrong2"
          },
          {
            "text": "孩子们在做什么？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人问奶奶是不是在看电视，但她没有，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Yes, she is.",
            "value": "wrong1"
          },
          {
            "text": "No, she isn't. She is reading.",
            "value": "correct"
          },
          {
            "text": "I'm watching TV.",
            "value": "wrong2"
          },
          {
            "text": "What are the kids doing?",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "I'm watching TV. She is reading.",
        "context": "妈妈问家里两个孩子在干什么。你看到他们的状态。",
        "question": "两个孩子分别在做什么？",
        "options": [
          {
            "text": "一个看电视，一个读书",
            "value": "correct"
          },
          {
            "text": "都在看电视",
            "value": "w1"
          },
          {
            "text": "都在读书",
            "value": "w2"
          },
          {
            "text": "都在睡觉",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "我在看电视。她在读书。"
      },
      {
        "type": "scenario",
        "sentence": "Come on, kids! It's time for bed.",
        "context": "爸爸说了一句话。现在很晚了。",
        "question": "爸爸让孩子们做什么？",
        "options": [
          {
            "text": "去睡觉",
            "value": "correct"
          },
          {
            "text": "看电视",
            "value": "w1"
          },
          {
            "text": "做作业",
            "value": "w2"
          },
          {
            "text": "吃饭",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "快点，孩子们！该睡觉了。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "What are you doing?",
          "I'm watching TV.",
          "Come on, it's late!"
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "你在做什么？ / 我在看电视。 / 快点，很晚了！"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "She is reading.",
          "He is sleeping.",
          "It's very quiet."
        ],
        "chinese": "把描述排好顺序！",
        "chineseHint": "她在读书。 / 他在睡觉。 / 很安静。"
      },
      {
        "type": "word_match",
        "word": "reading",
        "options": [
          {
            "text": "<img src=\"assets/images/reading.png\" width=\"80\">",
            "value": "reading"
          },
          {
            "text": "<img src=\"assets/images/watching_tv.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/sleeping.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "reading",
        "chinese": "reading"
      },
      {
        "type": "word_match",
        "word": "watching TV",
        "options": [
          {
            "text": "<img src=\"assets/images/watching_tv.png\" width=\"80\">",
            "value": "watching TV"
          },
          {
            "text": "<img src=\"assets/images/sleeping.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/reading.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "watching TV",
        "chinese": "watching TV"
      },
      {
        "type": "word_match",
        "word": "sleeping",
        "options": [
          {
            "text": "<img src=\"assets/images/sleeping.png\" width=\"80\">",
            "value": "sleeping"
          },
          {
            "text": "<img src=\"assets/images/reading.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/watching_tv.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "sleeping",
        "chinese": "sleeping"
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
        "hint": "w_tch",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "a",
          "e",
          "o",
          "i"
        ],
        "correct": 0,
        "chinese": "看"
      },
      {
        "type": "pinyin_fill",
        "hint": "r_ad",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "e",
          "a",
          "o",
          "i"
        ],
        "correct": 0,
        "chinese": "读"
      },
      {
        "type": "fill_blank",
        "prompt": "I'm watching _____.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "book",
          "TV",
          "clock",
          "time"
        ],
        "correct": 1,
        "chinese": "我在看电视。"
      },
      {
        "type": "word_puzzle",
        "hint": "k_d",
        "word": "kid",
        "options": [
          "i",
          "v",
          "t",
          "g"
        ],
        "correct": 0,
        "chinese": "kid"
      },
      {
        "type": "word_puzzle",
        "hint": "r_ad",
        "word": "read",
        "options": [
          "e",
          "a",
          "c",
          "m"
        ],
        "correct": 0,
        "chinese": "read"
      },
      {
        "type": "word_puzzle",
        "hint": "w_tch",
        "word": "watch",
        "options": [
          "t",
          "x",
          "m",
          "a"
        ],
        "correct": 3,
        "chinese": "watch"
      },
      {
        "type": "fill_blank",
        "prompt": "She is _____.",
        "options": [
          "kid",
          "read",
          "watch",
          "reading"
        ],
        "correct": 3,
        "chinese": "She is reading."
      },
      {
        "type": "fill_blank",
        "prompt": "I'm _____ TV.",
        "options": [
          "watching",
          "watch",
          "kid",
          "read"
        ],
        "correct": 0,
        "chinese": "I'm watching TV."
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "现在是福州上午八点半。",
        "words": [
          "It's",
          "8:30",
          "a.m.",
          "in",
          "Fuzhou"
        ],
        "scrambled": [
          "a.m.",
          "It's",
          "Fuzhou",
          "8:30",
          "in"
        ],
        "chineseWords": [
          "现在是",
          "福州",
          "上午",
          "八点半"
        ],
        "chineseScrambled": [
          "八点半",
          "现在是",
          "上午",
          "福州"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "纽约几点了？",
        "words": [
          "What's",
          "the",
          "time",
          "in",
          "New York"
        ],
        "scrambled": [
          "time",
          "What's",
          "New York",
          "in",
          "the"
        ],
        "chineseWords": [
          "纽约",
          "几点",
          "了"
        ],
        "chineseScrambled": [
          "几点",
          "了",
          "纽约"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "爷爷，伦敦几点了？",
        "words": [
          "What's",
          "the",
          "time",
          "in",
          "London",
          "Grandpa"
        ],
        "scrambled": [
          "London",
          "What's",
          "Grandpa",
          "time",
          "in",
          "the"
        ],
        "chineseWords": [
          "爷爷",
          "伦敦",
          "几点",
          "了"
        ],
        "chineseScrambled": [
          "几点",
          "爷爷",
          "了",
          "伦敦"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在是上午十点半。",
        "words": [
          "It's",
          "10:30",
          "a.m."
        ],
        "scrambled": [
          "a.m.",
          "It's",
          "10:30"
        ],
        "chineseWords": [
          "现在是",
          "上午",
          "十点半"
        ],
        "chineseScrambled": [
          "十点半",
          "上午",
          "现在是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我在看电视。",
        "words": [
          "I'm",
          "watching",
          "TV"
        ],
        "scrambled": [
          "TV",
          "I'm",
          "watching"
        ],
        "chineseWords": [
          "我",
          "在看",
          "电视"
        ],
        "chineseScrambled": [
          "电视",
          "我",
          "在看"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在是下午七点半。",
        "words": [
          "It's",
          "7:30",
          "p.m."
        ],
        "scrambled": [
          "p.m.",
          "It's",
          "7:30"
        ],
        "chineseWords": [
          "现在是",
          "下午",
          "七点半"
        ],
        "chineseScrambled": [
          "七点半",
          "下午",
          "现在是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我在看书。",
        "words": [
          "I'm",
          "reading"
        ],
        "scrambled": [
          "reading",
          "I'm"
        ],
        "chineseWords": [
          "我",
          "在看书"
        ],
        "chineseScrambled": [
          "在看书",
          "我"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "孩子们在做什么？",
        "words": [
          "What",
          "are",
          "the",
          "kids",
          "doing"
        ],
        "scrambled": [
          "kids",
          "What",
          "doing",
          "are",
          "the"
        ],
        "chineseWords": [
          "孩子们",
          "在做",
          "什么"
        ],
        "chineseScrambled": [
          "什么",
          "孩子们",
          "在做"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "奶奶也在看电视吗？",
        "words": [
          "Is",
          "Grandma",
          "watching",
          "TV",
          "too"
        ],
        "scrambled": [
          "TV",
          "Is",
          "too",
          "Grandma",
          "watching"
        ],
        "chineseWords": [
          "奶奶",
          "也",
          "在看",
          "电视",
          "吗"
        ],
        "chineseScrambled": [
          "电视",
          "吗",
          "奶奶",
          "也",
          "在看"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "不，她没有。她在看书。",
        "words": [
          "No",
          "she",
          "isn't",
          "She",
          "is",
          "reading"
        ],
        "scrambled": [
          "She",
          "No",
          "reading",
          "she",
          "is",
          "isn't"
        ],
        "chineseWords": [
          "不",
          "她没有",
          "她",
          "在看书"
        ],
        "chineseScrambled": [
          "在看书",
          "不",
          "她",
          "她没有"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在是上午十点半。我在看电视。",
        "words": [
          "It's",
          "10:30",
          "a.m.",
          "I'm",
          "watching",
          "TV"
        ],
        "scrambled": [
          "I'm",
          "10:30",
          "TV",
          "It's",
          "watching",
          "a.m."
        ],
        "chineseWords": [
          "现在是",
          "上午",
          "十点半",
          "我",
          "在看",
          "电视"
        ],
        "chineseScrambled": [
          "电视",
          "十点半",
          "我",
          "现在是",
          "在看",
          "上午"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在是下午七点半。我在看书。",
        "words": [
          "It's",
          "7:30",
          "p.m.",
          "I'm",
          "reading"
        ],
        "scrambled": [
          "reading",
          "It's",
          "p.m.",
          "I'm",
          "7:30"
        ],
        "chineseWords": [
          "现在是",
          "下午",
          "七点半",
          "我",
          "在看书"
        ],
        "chineseScrambled": [
          "在看书",
          "七点半",
          "现在是",
          "我",
          "下午"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "不，她没有。",
        "words": [
          "No",
          "she",
          "isn't"
        ],
        "scrambled": [
          "she",
          "No",
          "isn't"
        ],
        "chineseWords": [
          "吗",
          "不",
          "她没有"
        ],
        "chineseScrambled": [
          "不",
          "吗",
          "她没有"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "她在看书。",
        "words": [
          "She",
          "is",
          "reading"
        ],
        "scrambled": [
          "is",
          "She",
          "reading"
        ],
        "chineseWords": [
          "她",
          "在看书"
        ],
        "chineseScrambled": [
          "在看书",
          "她"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "I'm watching _____.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "book",
          "TV",
          "clock",
          "time"
        ],
        "correct": 1,
        "chinese": "我在看电视。"
      },
      {
        "type": "fill_blank",
        "prompt": "What's the _____ in New York?",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "clock",
          "time",
          "day",
          "name"
        ],
        "correct": 1,
        "chinese": "纽约几点了？"
      },
      {
        "type": "fill_blank",
        "prompt": "What are the _____ doing?",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "boys",
          "kids",
          "dogs",
          "cats"
        ],
        "correct": 1,
        "chinese": "孩子们在做什么？"
      },
      {
        "type": "fill_blank",
        "prompt": "She is _____.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "watching",
          "reading",
          "playing",
          "drawing"
        ],
        "correct": 1,
        "chinese": "她在看书。"
      },
      {
        "type": "fill_blank",
        "prompt": "Is Grandma _____ TV, too?",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "reading",
          "watching",
          "playing",
          "doing"
        ],
        "correct": 1,
        "chinese": "奶奶也在看电视吗？"
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
        "word": "watch",
        "chinese": "看",
        "expected": "watch"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "read",
        "chinese": "读",
        "expected": "read"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "kid",
        "chinese": "孩子",
        "expected": "kid"
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
        "audio": "bed",
        "options": [
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "床"
      },
      {
        "type": "repeat_sentence",
        "word": "What's the time in New York?",
        "chinese": "纽约几点了？",
        "expected": "What's the time in New York?"
      },
      {
        "type": "repeat_sentence",
        "word": "I'm watching TV.",
        "chinese": "我在看电视。",
        "expected": "I'm watching TV."
      },
      {
        "type": "repeat_sentence",
        "word": "I'm reading.",
        "chinese": "我在看书。",
        "expected": "I'm reading."
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "It's 8:30 a.m. in Fuzhou.",
        "chinese": "现在是福州上午八点半。",
        "expected": "It's 8:30 a.m. in Fuzhou."
      },
      {
        "type": "repeat_sentence",
        "word": "What's the time in New York?",
        "chinese": "纽约几点了？",
        "expected": "What's the time in New York?"
      },
      {
        "type": "repeat_sentence",
        "word": "What's the time in London, Grandpa?",
        "chinese": "爷爷，伦敦几点了？",
        "expected": "What's the time in London, Grandpa?"
      },
      {
        "type": "repeat_sentence",
        "word": "It's 10:30 a.m. I'm watching TV.",
        "chinese": "现在是上午十点半。我在看电视。",
        "expected": "It's 10:30 a.m. I'm watching TV."
      },
      {
        "type": "repeat_sentence",
        "word": "It's 7:30 p.m. I'm reading.",
        "chinese": "现在是下午七点半。我在看书。",
        "expected": "It's 7:30 p.m. I'm reading."
      },
      {
        "type": "repeat_sentence",
        "word": "What are the kids doing?",
        "chinese": "孩子们在做什么？",
        "expected": "What are the kids doing?"
      },
      {
        "type": "repeat_sentence",
        "word": "Ben and Kate are playing with toys.",
        "chinese": "本和凯特在玩玩具。",
        "expected": "Ben and Kate are playing with toys."
      },
      {
        "type": "repeat_sentence",
        "word": "Is Grandma watching TV, too?",
        "chinese": "奶奶也在看电视吗？",
        "expected": "Is Grandma watching TV, too?"
      },
      {
        "type": "repeat_sentence",
        "word": "No, she isn't. She is reading.",
        "chinese": "不，她没有。她在看书。",
        "expected": "No, she isn't. She is reading."
      },
      {
        "type": "repeat_sentence",
        "word": "I'm watching TV.",
        "chinese": "我在看电视。",
        "expected": "I'm watching TV."
      },
      {
        "type": "repeat_sentence",
        "word": "I'm reading.",
        "chinese": "我在看书。",
        "expected": "I'm reading."
      },
      {
        "type": "repeat_sentence",
        "word": "She is reading.",
        "chinese": "她在看书。",
        "expected": "She is reading."
      },
      {
        "type": "repeat_sentence",
        "word": "It's 8:30 a.m. in Fuzhou. What's the time in New York?",
        "chinese": "现在是福州上午八点半。纽约几点了？",
        "expected": "It's 8:30 a.m. in Fuzhou. What's the time in New York?"
      },
      {
        "type": "repeat_sentence",
        "word": "What are the kids doing? Ben and Kate are playing with toys.",
        "chinese": "孩子们在做什么？本和凯特在玩玩具。",
        "expected": "What are the kids doing? Ben and Kate are playing with toys."
      },
      {
        "type": "repeat_sentence",
        "word": "Is Grandma watching TV, too? No, she isn't.",
        "chinese": "奶奶也在看电视吗？不，她没有。",
        "expected": "Is Grandma watching TV, too? No, she isn't."
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
        "word": "watch",
        "chinese": "看",
        "expected": "watch"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "read",
        "chinese": "读",
        "expected": "read"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "kid",
        "chinese": "孩子",
        "expected": "kid"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "time",
        "chinese": "时间",
        "expected": "time"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/reading.png\" width=\"80\">",
        "word": "reading",
        "chinese": "reading"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/watching_tv.png\" width=\"80\">",
        "word": "watching_tv",
        "chinese": "watching_tv"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/homework.png\" width=\"80\">",
        "word": "homework",
        "chinese": "homework"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/sleeping.png\" width=\"80\">",
        "word": "sleeping",
        "chinese": "sleeping"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/drawing.png\" width=\"80\">",
        "word": "drawing",
        "chinese": "drawing"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/cooking.png\" width=\"80\">",
        "word": "cooking",
        "chinese": "cooking"
      }
    ]
  }
};
