// Unit 3 Lesson 3: It's five twenty.
// Core vocab: thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, dinner, cook
// Sentences: "It's five twenty.", "I'm doing my homework.", "Yang Fan is reading.", etc.
var unit3_lesson3 = {
  "id": "U3L3",
  "title": "It's five twenty.",
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
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/drawing.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">"
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
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "书包"
      },
      {
        "type": "listen_select",
        "audio": "It's five twenty.",
        "options": [
          "现在是六点半。",
          "你在做什么？",
          "现在是五点二十。",
          "我在做作业。"
        ],
        "correct": 2,
        "chinese": "现在是五点二十。"
      },
      {
        "type": "listen_select",
        "audio": "I'm doing my homework.",
        "options": [
          "我在画画。",
          "我在做作业。",
          "杨帆在看书。",
          "你在吃晚饭吗？"
        ],
        "correct": 1,
        "chinese": "我在做作业。"
      },
      {
        "type": "listen_select",
        "audio": "Yang Fan is reading.",
        "options": [
          "我在做作业。",
          "我在画画。",
          "你在吃晚饭吗？",
          "杨帆在看书。"
        ],
        "correct": 3,
        "chinese": "杨帆在看书。"
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
        "audio": "It's six thirty. Are you having your dinner, Yang Fan?",
        "options": [
          "现在是六点半。杨帆，你在吃晚饭吗？",
          "现在是五点二十。你在做什么？",
          "我在做作业。杨帆在看书。",
          "不。我在画画。"
        ],
        "correct": 0,
        "chinese": "现在是六点半。杨帆，你在吃晚饭吗？"
      },
      {
        "type": "listen_select",
        "audio": "Thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty!",
        "options": [
          "十一、十二、十三、十四！",
          "十三、十四、十五、十六、十七、十八、十九、二十！",
          "现在是五点二十。你在做什么？",
          "我在做作业。杨帆在看书。"
        ],
        "correct": 1,
        "chinese": "十三、十四、十五、十六、十七、十八、十九、二十！"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "clock",
        "options": [
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "钟"
      },
      {
        "type": "listen_select",
        "audio": "bed",
        "options": [
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/drawing.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "床"
      },
      {
        "type": "listen_select",
        "audio": "It's five twenty.",
        "options": [
          "现在是五点二十。",
          "现在是六点半。",
          "你在做什么？",
          "我在做作业。"
        ],
        "correct": 0,
        "chinese": "现在是五点二十。"
      },
      {
        "type": "listen_select",
        "audio": "What are you doing?",
        "options": [
          "我在做作业。",
          "你在做什么？",
          "杨帆在看书。",
          "现在是五点二十。"
        ],
        "correct": 1,
        "chinese": "你在做什么？"
      },
      {
        "type": "listen_select",
        "audio": "I'm doing my homework.",
        "options": [
          "杨帆在看书。",
          "我在画画。",
          "我在做作业。",
          "你在吃晚饭吗？"
        ],
        "correct": 2,
        "chinese": "我在做作业。"
      },
      {
        "type": "listen_select",
        "audio": "Yang Fan is reading.",
        "options": [
          "我在做作业。",
          "杨帆在看书。",
          "我在画画。",
          "你在做什么？"
        ],
        "correct": 1,
        "chinese": "杨帆在看书。"
      },
      {
        "type": "listen_select",
        "audio": "It's six thirty.",
        "options": [
          "现在是五点二十。",
          "你在做什么？",
          "现在是六点半。",
          "我在做作业。"
        ],
        "correct": 2,
        "chinese": "现在是六点半。"
      },
      {
        "type": "listen_select",
        "audio": "Are you having your dinner, Yang Fan?",
        "options": [
          "你在做什么？",
          "杨帆在看书。",
          "我在画画。",
          "杨帆，你在吃晚饭吗？"
        ],
        "correct": 3,
        "chinese": "杨帆，你在吃晚饭吗？"
      },
      {
        "type": "listen_select",
        "audio": "No. I'm drawing.",
        "options": [
          "不。我在画画。",
          "是的。我在吃晚饭。",
          "我在做作业。",
          "杨帆在看书。"
        ],
        "correct": 0,
        "chinese": "不。我在画画。"
      },
      {
        "type": "listen_select",
        "audio": "Thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty!",
        "options": [
          "十一、十二、十三、十四！",
          "现在是五点二十。",
          "十三、十四、十五、十六、十七、十八、十九、二十！",
          "我在做作业。"
        ],
        "correct": 2,
        "chinese": "十三、十四、十五、十六、十七、十八、十九、二十！"
      },
      {
        "type": "listen_select",
        "audio": "It's five twenty. What are you doing?",
        "options": [
          "现在是五点二十。你在做什么？",
          "现在是六点半。你在吃晚饭吗？",
          "我在做作业。杨帆在看书。",
          "不。我在画画。"
        ],
        "correct": 0,
        "chinese": "现在是五点二十。你在做什么？"
      },
      {
        "type": "listen_select",
        "audio": "It's six thirty. Are you having your dinner, Yang Fan?",
        "options": [
          "现在是五点二十。你在做什么？",
          "我在做作业。杨帆在看书。",
          "现在是六点半。杨帆，你在吃晚饭吗？",
          "十三、十四、十五！"
        ],
        "correct": 2,
        "chinese": "现在是六点半。杨帆，你在吃晚饭吗？"
      },
      {
        "type": "listen_select",
        "audio": "Are you having your dinner, Yang Fan? No. I'm drawing.",
        "options": [
          "杨帆，你在吃晚饭吗？不。我在画画。",
          "你在做什么？我在做作业。",
          "杨帆在看书。现在是六点半。",
          "十三、十四、十五、十六！"
        ],
        "correct": 0,
        "chinese": "杨帆，你在吃晚饭吗？不。我在画画。"
      },
      {
        "type": "listen_select",
        "audio": "It's five twenty. What are you doing? I'm doing my homework.",
        "options": [
          "现在是六点半。你在吃晚饭吗？不。",
          "现在是五点二十。你在做什么？我在做作业。",
          "杨帆在看书。我在画画。",
          "十七、十八、十九、二十！"
        ],
        "correct": 1,
        "chinese": "现在是五点二十。你在做什么？我在做作业。"
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
        "audio": "This is a chair.",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一把椅子，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a schoolbag.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是书包，这是一个钟。"
      },
      {
        "type": "listen_select",
        "audio": "thirteen",
        "options": [
          "十四",
          "十五",
          "十三",
          "十六"
        ],
        "correct": 2,
        "chinese": "十三"
      },
      {
        "type": "listen_select",
        "audio": "twenty",
        "options": [
          "十九",
          "二十",
          "十八",
          "十七"
        ],
        "correct": 1,
        "chinese": "二十"
      },
      {
        "type": "listen_select",
        "audio": "I'm doing my homework. Yang Fan is reading.",
        "options": [
          "我在做作业。杨帆在看书。",
          "现在是五点二十。你在做什么？",
          "不。我在画画。",
          "杨帆，你在吃晚饭吗？"
        ],
        "correct": 0,
        "chinese": "我在做作业。杨帆在看书。"
      },
      {
        "type": "listen_sequence",
        "audio": "cooking, homework, drawing",
        "sequence": [
          "cooking",
          "homework",
          "drawing"
        ],
        "words": [
          "<img src=\"assets/images/drawing.png\" width=\"60\">",
          "<img src=\"assets/images/cooking.png\" width=\"60\">",
          "<img src=\"assets/images/homework.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "I'm doing my homework.",
        "context": "🕐 放学了，妈妈问你在做什么。",
        "question": "你在做什么？",
        "options": [
          "做作业",
          "看电视",
          "画画",
          "做饭"
        ],
        "correct": 0,
        "chinese": "我在做作业。"
      },
      {
        "type": "listen_select",
        "audio": "It's six thirty.",
        "context": "🕕 到了吃饭时间了。",
        "question": "现在几点？",
        "options": [
          "六点半",
          "五点二十",
          "七点",
          "八点"
        ],
        "correct": 0,
        "chinese": "现在是六点半。"
      },
      {
        "type": "listen_select",
        "audio": "Are you having your dinner?",
        "context": "🍳 妈妈问杨帆在不在吃晚饭。",
        "question": "妈妈问什么？",
        "options": [
          "在不在吃晚饭",
          "在不在做作业",
          "在不在看书",
          "在不在睡觉"
        ],
        "correct": 0,
        "chinese": "你在吃晚饭吗？"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "word": "clock",
        "sentence": "What's the time?",
        "chinese": "几点了？",
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
        "word": "drawing",
        "sentence": "I'm drawing.",
        "chinese": "我在画画。",
        "options": [
          {
            "text": "<img src=\"assets/images/clock.png\" width=\"80\">",
            "value": "clock"
          },
          {
            "text": "<img src=\"assets/images/drawing.png\" width=\"80\">",
            "value": "drawing"
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
        "correct": "drawing"
      },
      {
        "type": "word_match",
        "word": "schoolbag",
        "sentence": "This is a schoolbag.",
        "chinese": "这是一个书包。",
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
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "schoolbag"
          },
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          }
        ],
        "correct": "schoolbag"
      },
      {
        "type": "sentence_match",
        "sentence": "It's five twenty.",
        "chinese": "现在是五点二十。",
        "options": [
          {
            "text": "现在是六点半。",
            "value": "wrong1"
          },
          {
            "text": "现在是五点二十。",
            "value": "correct"
          },
          {
            "text": "你在做什么？",
            "value": "wrong2"
          },
          {
            "text": "我在做作业。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I'm doing my homework.",
        "chinese": "我在做作业。",
        "options": [
          {
            "text": "我在做作业。",
            "value": "correct"
          },
          {
            "text": "我在画画。",
            "value": "wrong1"
          },
          {
            "text": "杨帆在看书。",
            "value": "wrong2"
          },
          {
            "text": "你在吃晚饭吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Yang Fan is reading.",
        "chinese": "杨帆在看书。",
        "options": [
          {
            "text": "我在做作业。",
            "value": "wrong1"
          },
          {
            "text": "我在画画。",
            "value": "wrong2"
          },
          {
            "text": "杨帆在看书。",
            "value": "correct"
          },
          {
            "text": "你在吃晚饭吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "No. I'm drawing.",
        "chinese": "不。我在画画。",
        "options": [
          {
            "text": "不。我在画画。",
            "value": "correct"
          },
          {
            "text": "是的。我在吃晚饭。",
            "value": "wrong1"
          },
          {
            "text": "我在做作业。",
            "value": "wrong2"
          },
          {
            "text": "杨帆在看书。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Are you having your dinner?",
        "chinese": "你在吃晚饭吗？",
        "options": [
          {
            "text": "你在做什么？",
            "value": "wrong1"
          },
          {
            "text": "你在吃晚饭吗？",
            "value": "correct"
          },
          {
            "text": "你在看书吗？",
            "value": "wrong2"
          },
          {
            "text": "你在画画吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想问别人在做什么，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's five twenty.",
            "value": "wrong1"
          },
          {
            "text": "I'm doing my homework.",
            "value": "wrong2"
          },
          {
            "text": "What are you doing?",
            "value": "correct"
          },
          {
            "text": "Yang Fan is reading.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人问你是不是在吃晚饭，但你在画画，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Yes. I'm having dinner.",
            "value": "wrong1"
          },
          {
            "text": "No. I'm drawing.",
            "value": "correct"
          },
          {
            "text": "I'm doing my homework.",
            "value": "wrong2"
          },
          {
            "text": "Yang Fan is reading.",
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
            "word": "cooking",
            "match": "<img src=\"assets/images/cooking.png\" width=\"50\">",
            "chinese": "做饭"
          },
          {
            "word": "homework",
            "match": "<img src=\"assets/images/homework.png\" width=\"50\">",
            "chinese": "作业"
          },
          {
            "word": "reading",
            "match": "<img src=\"assets/images/reading.png\" width=\"50\">",
            "chinese": "读书"
          },
          {
            "word": "drawing",
            "match": "<img src=\"assets/images/drawing.png\" width=\"50\">",
            "chinese": "画画"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "thirteen",
            "match": "十三",
            "example": "It's thirteen."
          },
          {
            "word": "fifteen",
            "match": "十五",
            "example": "It's fifteen."
          },
          {
            "word": "twenty",
            "match": "二十",
            "example": "It's five twenty."
          },
          {
            "word": "dinner",
            "match": "晚饭",
            "example": "Are you having your dinner?"
          }
        ]
      },
      {
        "type": "word_match",
        "word": "clock",
        "sentence": "It's five twenty.",
        "chinese": "现在是五点二十。",
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
        "word": "drawing",
        "sentence": "I'm drawing.",
        "chinese": "我在画画。",
        "options": [
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          },
          {
            "text": "<img src=\"assets/images/drawing.png\" width=\"80\">",
            "value": "drawing"
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
        "correct": "drawing"
      },
      {
        "type": "sentence_match",
        "sentence": "It's five twenty.",
        "chinese": "现在是五点二十。",
        "options": [
          {
            "text": "现在是六点半。",
            "value": "wrong1"
          },
          {
            "text": "现在是五点二十。",
            "value": "correct"
          },
          {
            "text": "你在做什么？",
            "value": "wrong2"
          },
          {
            "text": "我在做作业。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "What are you doing?",
        "chinese": "你在做什么？",
        "options": [
          {
            "text": "你在做什么？",
            "value": "correct"
          },
          {
            "text": "现在是五点二十。",
            "value": "wrong1"
          },
          {
            "text": "我在做作业。",
            "value": "wrong2"
          },
          {
            "text": "杨帆在看书。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I'm doing my homework.",
        "chinese": "我在做作业。",
        "options": [
          {
            "text": "我在画画。",
            "value": "wrong1"
          },
          {
            "text": "我在做作业。",
            "value": "correct"
          },
          {
            "text": "杨帆在看书。",
            "value": "wrong2"
          },
          {
            "text": "你在吃晚饭吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Yang Fan is reading.",
        "chinese": "杨帆在看书。",
        "options": [
          {
            "text": "我在做作业。",
            "value": "wrong1"
          },
          {
            "text": "我在画画。",
            "value": "wrong2"
          },
          {
            "text": "杨帆在看书。",
            "value": "correct"
          },
          {
            "text": "现在是六点半。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's six thirty.",
        "chinese": "现在是六点半。",
        "options": [
          {
            "text": "现在是五点二十。",
            "value": "wrong1"
          },
          {
            "text": "现在是六点半。",
            "value": "correct"
          },
          {
            "text": "你在做什么？",
            "value": "wrong2"
          },
          {
            "text": "我在做作业。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Are you having your dinner, Yang Fan?",
        "chinese": "杨帆，你在吃晚饭吗？",
        "options": [
          {
            "text": "你在做什么？",
            "value": "wrong1"
          },
          {
            "text": "杨帆在看书。",
            "value": "wrong2"
          },
          {
            "text": "杨帆，你在吃晚饭吗？",
            "value": "correct"
          },
          {
            "text": "我在做作业。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "No. I'm drawing.",
        "chinese": "不。我在画画。",
        "options": [
          {
            "text": "不。我在画画。",
            "value": "correct"
          },
          {
            "text": "是的。我在吃晚饭。",
            "value": "wrong1"
          },
          {
            "text": "我在做作业。",
            "value": "wrong2"
          },
          {
            "text": "杨帆在看书。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty!",
        "chinese": "十三、十四、十五、十六、十七、十八、十九、二十！",
        "options": [
          {
            "text": "十一、十二、十三、十四！",
            "value": "wrong1"
          },
          {
            "text": "十三、十四、十五、十六、十七、十八、十九、二十！",
            "value": "correct"
          },
          {
            "text": "现在是五点二十。",
            "value": "wrong2"
          },
          {
            "text": "我在做作业。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's five twenty. What are you doing?",
        "chinese": "现在是五点二十。你在做什么？",
        "options": [
          {
            "text": "现在是五点二十。你在做什么？",
            "value": "correct"
          },
          {
            "text": "现在是六点半。你在吃晚饭吗？",
            "value": "wrong1"
          },
          {
            "text": "我在做作业。杨帆在看书。",
            "value": "wrong2"
          },
          {
            "text": "不。我在画画。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's six thirty. Are you having your dinner, Yang Fan?",
        "chinese": "现在是六点半。杨帆，你在吃晚饭吗？",
        "options": [
          {
            "text": "现在是五点二十。你在做什么？",
            "value": "wrong1"
          },
          {
            "text": "现在是六点半。杨帆，你在吃晚饭吗？",
            "value": "correct"
          },
          {
            "text": "我在做作业。杨帆在看书。",
            "value": "wrong2"
          },
          {
            "text": "不。我在画画。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你在做作业，别人问你在做什么，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "I'm drawing.",
            "value": "wrong1"
          },
          {
            "text": "Yang Fan is reading.",
            "value": "wrong2"
          },
          {
            "text": "I'm doing my homework.",
            "value": "correct"
          },
          {
            "text": "It's five twenty.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "别人问杨帆是不是在吃晚饭，但他在画画：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Yes. I'm having dinner.",
            "value": "wrong1"
          },
          {
            "text": "No. I'm drawing.",
            "value": "correct"
          },
          {
            "text": "I'm doing my homework.",
            "value": "wrong2"
          },
          {
            "text": "Yang Fan is reading.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "I'm doing my homework. Yang Fan is reading.",
        "chinese": "我在做作业。杨帆在看书。",
        "options": [
          {
            "text": "我在做作业。杨帆在看书。",
            "value": "correct"
          },
          {
            "text": "现在是五点二十。你在做什么？",
            "value": "wrong1"
          },
          {
            "text": "不。我在画画。",
            "value": "wrong2"
          },
          {
            "text": "杨帆，你在吃晚饭吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Are you having your dinner, Yang Fan? No. I'm drawing.",
        "chinese": "杨帆，你在吃晚饭吗？不。我在画画。",
        "options": [
          {
            "text": "杨帆，你在吃晚饭吗？不。我在画画。",
            "value": "correct"
          },
          {
            "text": "现在是五点二十。你在做什么？",
            "value": "wrong1"
          },
          {
            "text": "我在做作业。杨帆在看书。",
            "value": "wrong2"
          },
          {
            "text": "十三、十四、十五！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's five twenty. What are you doing? I'm doing my homework.",
        "chinese": "现在是五点二十。你在做什么？我在做作业。",
        "options": [
          {
            "text": "现在是五点二十。你在做什么？我在做作业。",
            "value": "correct"
          },
          {
            "text": "现在是六点半。你在吃晚饭吗？不。我在画画。",
            "value": "wrong1"
          },
          {
            "text": "杨帆在看书。我在画画。",
            "value": "wrong2"
          },
          {
            "text": "十三、十四、十五、十六！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's six thirty. Are you having your dinner, Yang Fan? No. I'm drawing.",
        "chinese": "现在是六点半。杨帆，你在吃晚饭吗？不。我在画画。",
        "options": [
          {
            "text": "现在是五点二十。你在做什么？我在做作业。",
            "value": "wrong1"
          },
          {
            "text": "现在是六点半。杨帆，你在吃晚饭吗？不。我在画画。",
            "value": "correct"
          },
          {
            "text": "我在做作业。杨帆在看书。",
            "value": "wrong2"
          },
          {
            "text": "十七、十八、十九、二十！",
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
            "text": "I'm doing my homework.",
            "value": "wrong1"
          },
          {
            "text": "What are you doing?",
            "value": "wrong2"
          },
          {
            "text": "What's the time?",
            "value": "correct"
          },
          {
            "text": "Yang Fan is reading.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想问别人在做什么，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's five twenty.",
            "value": "wrong1"
          },
          {
            "text": "What are you doing?",
            "value": "correct"
          },
          {
            "text": "I'm doing my homework.",
            "value": "wrong2"
          },
          {
            "text": "No. I'm drawing.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "It's five twenty. I'm doing my homework.",
        "context": "你给朋友发消息。朋友想约你出去玩。",
        "question": "你现在有空吗？",
        "options": [
          {
            "text": "没空，在做作业",
            "value": "correct"
          },
          {
            "text": "有空",
            "value": "w1"
          },
          {
            "text": "在看电视",
            "value": "w2"
          },
          {
            "text": "在吃饭",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "现在五点二十。我在做作业。"
      },
      {
        "type": "scenario",
        "sentence": "Yang Fan is reading.",
        "context": "妈妈想叫杨帆吃饭。你看了看杨帆在干嘛。",
        "question": "杨帆现在在做什么？",
        "options": [
          {
            "text": "读书",
            "value": "correct"
          },
          {
            "text": "做作业",
            "value": "w1"
          },
          {
            "text": "画画",
            "value": "w2"
          },
          {
            "text": "看电视",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "杨帆在看书。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "It's five twenty.",
          "What are you doing?",
          "I'm doing my homework."
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "五点二十。 / 你在做什么？ / 我在做作业。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "It's six thirty.",
          "Are you having dinner?",
          "No, I'm drawing."
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "六点半。 / 你在吃晚饭吗？ / 不，我在画画。"
      },
      {
        "type": "word_match",
        "word": "cooking",
        "options": [
          {
            "text": "<img src=\"assets/images/cooking.png\" width=\"80\">",
            "value": "cooking"
          },
          {
            "text": "<img src=\"assets/images/homework.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/drawing.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "cooking",
        "chinese": "cooking"
      },
      {
        "type": "word_match",
        "word": "homework",
        "options": [
          {
            "text": "<img src=\"assets/images/homework.png\" width=\"80\">",
            "value": "homework"
          },
          {
            "text": "<img src=\"assets/images/drawing.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/cooking.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "homework",
        "chinese": "homework"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "十三(thirteen)的首字母是？",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "s",
          "t",
          "f",
          "e"
        ],
        "correct": 1,
        "chinese": "十三",
        "word": "十三"
      },
      {
        "type": "pinyin_fill",
        "hint": "d_nner",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "i",
          "a",
          "o",
          "e"
        ],
        "correct": 0,
        "chinese": "晚饭"
      },
      {
        "type": "pinyin_fill",
        "hint": "tw_nty",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "e",
          "a",
          "o",
          "i"
        ],
        "correct": 0,
        "chinese": "二十"
      },
      {
        "type": "fill_blank",
        "prompt": "I'm doing my _____.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "dinner",
          "homework",
          "drawing",
          "reading"
        ],
        "correct": 1,
        "chinese": "我在做作业。"
      },
      {
        "type": "word_puzzle",
        "hint": "t_irteen",
        "word": "thirteen",
        "options": [
          "h",
          "d",
          "g",
          "e"
        ],
        "correct": 0,
        "chinese": "thirteen"
      },
      {
        "type": "word_puzzle",
        "hint": "f_fteen",
        "word": "fifteen",
        "options": [
          "i",
          "a",
          "n",
          "b"
        ],
        "correct": 0,
        "chinese": "fifteen"
      },
      {
        "type": "word_puzzle",
        "hint": "t_enty",
        "word": "twenty",
        "options": [
          "n",
          "g",
          "h",
          "w"
        ],
        "correct": 3,
        "chinese": "twenty"
      },
      {
        "type": "fill_blank",
        "prompt": "It's six _____.",
        "options": [
          "twenty",
          "thirteen",
          "thirty",
          "fifteen"
        ],
        "correct": 2,
        "chinese": "It's six thirty."
      },
      {
        "type": "fill_blank",
        "prompt": "Yang Fan is _____.",
        "options": [
          "fifteen",
          "twenty",
          "reading",
          "thirteen"
        ],
        "correct": 2,
        "chinese": "Yang Fan is reading."
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "现在是五点二十。",
        "words": [
          "It's",
          "five",
          "twenty"
        ],
        "scrambled": [
          "twenty",
          "It's",
          "five"
        ],
        "chineseWords": [
          "现在是",
          "五点",
          "二十"
        ],
        "chineseScrambled": [
          "二十",
          "现在是",
          "五点"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "你在做什么？",
        "words": [
          "What",
          "are",
          "you",
          "doing"
        ],
        "scrambled": [
          "doing",
          "What",
          "you",
          "are"
        ],
        "chineseWords": [
          "你",
          "在做",
          "什么"
        ],
        "chineseScrambled": [
          "什么",
          "你",
          "在做"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我在做作业。",
        "words": [
          "I'm",
          "doing",
          "my",
          "homework"
        ],
        "scrambled": [
          "homework",
          "I'm",
          "my",
          "doing"
        ],
        "chineseWords": [
          "我",
          "在做",
          "作业"
        ],
        "chineseScrambled": [
          "作业",
          "我",
          "在做"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "杨帆在看书。",
        "words": [
          "Yang Fan",
          "is",
          "reading"
        ],
        "scrambled": [
          "reading",
          "Yang Fan",
          "is"
        ],
        "chineseWords": [
          "杨帆",
          "在",
          "看书"
        ],
        "chineseScrambled": [
          "看书",
          "杨帆",
          "在"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在是六点半。",
        "words": [
          "It's",
          "six",
          "thirty"
        ],
        "scrambled": [
          "thirty",
          "It's",
          "six"
        ],
        "chineseWords": [
          "现在是",
          "六点",
          "半"
        ],
        "chineseScrambled": [
          "半",
          "现在是",
          "六点"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "杨帆，你在吃晚饭吗？",
        "words": [
          "Are",
          "you",
          "having",
          "your",
          "dinner",
          "Yang Fan"
        ],
        "scrambled": [
          "dinner",
          "Are",
          "Yang Fan",
          "having",
          "you",
          "your"
        ],
        "chineseWords": [
          "杨帆",
          "你",
          "在吃",
          "晚饭",
          "吗"
        ],
        "chineseScrambled": [
          "晚饭",
          "吗",
          "杨帆",
          "在吃",
          "你"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "不。我在画画。",
        "words": [
          "No",
          "I'm",
          "drawing"
        ],
        "scrambled": [
          "I'm",
          "No",
          "drawing"
        ],
        "chineseWords": [
          "不",
          "我",
          "在画画"
        ],
        "chineseScrambled": [
          "在画画",
          "不",
          "我"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "不。",
        "words": [
          "No"
        ],
        "scrambled": [
          "No"
        ],
        "chineseWords": [
          "不"
        ],
        "chineseScrambled": [
          "不"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我在画画。",
        "words": [
          "I'm",
          "drawing"
        ],
        "scrambled": [
          "drawing",
          "I'm"
        ],
        "chineseWords": [
          "我",
          "在画画"
        ],
        "chineseScrambled": [
          "在画画",
          "我"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "I'm doing my _____.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "dinner",
          "homework",
          "drawing",
          "reading"
        ],
        "correct": 1,
        "chinese": "我在做作业。"
      },
      {
        "type": "fill_blank",
        "prompt": "Yang Fan is _____.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "drawing",
          "reading",
          "cooking",
          "playing"
        ],
        "correct": 1,
        "chinese": "杨帆在看书。"
      },
      {
        "type": "fill_blank",
        "prompt": "Are you having your _____, Yang Fan?",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "breakfast",
          "lunch",
          "dinner",
          "homework"
        ],
        "correct": 2,
        "chinese": "杨帆，你在吃晚饭吗？"
      },
      {
        "type": "fill_blank",
        "prompt": "No. I'm _____.",
        "image": "<img src=\"assets/images/drawing.png\" width=\"80\">",
        "options": [
          "reading",
          "drawing",
          "cooking",
          "playing"
        ],
        "correct": 1,
        "chinese": "不。我在画画。"
      },
      {
        "type": "fill_blank",
        "prompt": "What are you _____?",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "doing",
          "having",
          "reading",
          "watching"
        ],
        "correct": 0,
        "chinese": "你在做什么？"
      },
      {
        "type": "word_puzzle",
        "hint": "thir_een",
        "word": "thirteen",
        "options": [
          "u",
          "c",
          "z",
          "t"
        ],
        "correct": 3,
        "chinese": "thirteen"
      },
      {
        "type": "word_puzzle",
        "hint": "fif_een",
        "word": "fifteen",
        "options": [
          "t",
          "i",
          "n",
          "r"
        ],
        "correct": 0,
        "chinese": "fifteen"
      },
      {
        "type": "word_puzzle",
        "hint": "twe_ty",
        "word": "twenty",
        "options": [
          "n",
          "v",
          "b",
          "i"
        ],
        "correct": 0,
        "chinese": "twenty"
      },
      {
        "type": "fill_blank",
        "prompt": "It's six _____.",
        "options": [
          "thirteen",
          "twenty",
          "fifteen",
          "thirty"
        ],
        "correct": 3,
        "chinese": "It's six thirty."
      },
      {
        "type": "fill_blank",
        "prompt": "I'm _____.",
        "options": [
          "twenty",
          "drawing",
          "thirteen",
          "fifteen"
        ],
        "correct": 1,
        "chinese": "I'm drawing."
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "thirteen",
        "chinese": "十三",
        "expected": "thirteen"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "fifteen",
        "chinese": "十五",
        "expected": "fifteen"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "seventeen",
        "chinese": "十七",
        "expected": "seventeen"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "twenty",
        "chinese": "二十",
        "expected": "twenty"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "dinner",
        "chinese": "晚饭",
        "expected": "dinner"
      },
      {
        "type": "speak_select",
        "audio": "clock",
        "options": [
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "钟"
      },
      {
        "type": "speak_select",
        "audio": "drawing",
        "options": [
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/drawing.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "画画"
      },
      {
        "type": "repeat_sentence",
        "word": "It's five twenty.",
        "chinese": "现在是五点二十。",
        "expected": "It's five twenty."
      },
      {
        "type": "repeat_sentence",
        "word": "I'm doing my homework.",
        "chinese": "我在做作业。",
        "expected": "I'm doing my homework."
      },
      {
        "type": "repeat_sentence",
        "word": "Yang Fan is reading.",
        "chinese": "杨帆在看书。",
        "expected": "Yang Fan is reading."
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "It's five twenty.",
        "chinese": "现在是五点二十。",
        "expected": "It's five twenty."
      },
      {
        "type": "repeat_sentence",
        "word": "What are you doing?",
        "chinese": "你在做什么？",
        "expected": "What are you doing?"
      },
      {
        "type": "repeat_sentence",
        "word": "I'm doing my homework.",
        "chinese": "我在做作业。",
        "expected": "I'm doing my homework."
      },
      {
        "type": "repeat_sentence",
        "word": "Yang Fan is reading.",
        "chinese": "杨帆在看书。",
        "expected": "Yang Fan is reading."
      },
      {
        "type": "repeat_sentence",
        "word": "It's six thirty.",
        "chinese": "现在是六点半。",
        "expected": "It's six thirty."
      },
      {
        "type": "repeat_sentence",
        "word": "Are you having your dinner, Yang Fan?",
        "chinese": "杨帆，你在吃晚饭吗？",
        "expected": "Are you having your dinner, Yang Fan?"
      },
      {
        "type": "repeat_sentence",
        "word": "No. I'm drawing.",
        "chinese": "不。我在画画。",
        "expected": "No. I'm drawing."
      },
      {
        "type": "repeat_sentence",
        "word": "Thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty!",
        "chinese": "十三、十四、十五、十六、十七、十八、十九、二十！",
        "expected": "Thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty!"
      },
      {
        "type": "repeat_sentence",
        "word": "It's five twenty. What are you doing?",
        "chinese": "现在是五点二十。你在做什么？",
        "expected": "It's five twenty. What are you doing?"
      },
      {
        "type": "repeat_sentence",
        "word": "It's six thirty. Are you having your dinner, Yang Fan?",
        "chinese": "现在是六点半。杨帆，你在吃晚饭吗？",
        "expected": "It's six thirty. Are you having your dinner, Yang Fan?"
      },
      {
        "type": "repeat_sentence",
        "word": "I'm doing my homework. Yang Fan is reading.",
        "chinese": "我在做作业。杨帆在看书。",
        "expected": "I'm doing my homework. Yang Fan is reading."
      },
      {
        "type": "repeat_sentence",
        "word": "Are you having your dinner, Yang Fan? No. I'm drawing.",
        "chinese": "杨帆，你在吃晚饭吗？不。我在画画。",
        "expected": "Are you having your dinner, Yang Fan? No. I'm drawing."
      },
      {
        "type": "repeat_sentence",
        "word": "It's five twenty. What are you doing? I'm doing my homework.",
        "chinese": "现在是五点二十。你在做什么？我在做作业。",
        "expected": "It's five twenty. What are you doing? I'm doing my homework."
      },
      {
        "type": "repeat_sentence",
        "word": "It's six thirty. Are you having your dinner? No. I'm drawing.",
        "chinese": "现在是六点半。你在吃晚饭吗？不。我在画画。",
        "expected": "It's six thirty. Are you having your dinner? No. I'm drawing."
      },
      {
        "type": "repeat_sentence",
        "word": "Thirteen, fourteen, fifteen!",
        "chinese": "十三、十四、十五！",
        "expected": "Thirteen, fourteen, fifteen!"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "fourteen",
        "chinese": "十四",
        "expected": "fourteen"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "sixteen",
        "chinese": "十六",
        "expected": "sixteen"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "eighteen",
        "chinese": "十八",
        "expected": "eighteen"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "nineteen",
        "chinese": "十九",
        "expected": "nineteen"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "cook",
        "chinese": "做饭",
        "expected": "cook"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/cooking.png\" width=\"80\">",
        "word": "cooking",
        "chinese": "cooking"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/homework.png\" width=\"80\">",
        "word": "homework",
        "chinese": "homework"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/reading.png\" width=\"80\">",
        "word": "reading",
        "chinese": "reading"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/drawing.png\" width=\"80\">",
        "word": "drawing",
        "chinese": "drawing"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/sleeping.png\" width=\"80\">",
        "word": "sleeping",
        "chinese": "sleeping"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/watching_tv.png\" width=\"80\">",
        "word": "watching_tv",
        "chinese": "watching_tv"
      }
    ]
  }
};
