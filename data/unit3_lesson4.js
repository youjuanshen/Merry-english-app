// Unit 3 Lesson 4: It's time to do my homework.
// Core vocab: play, picture, homework
// Sentences: "It's time to do my homework.", "It's time to draw a picture.", "It's time to go to bed.", "Oh, no! My homework!"
var unit3_lesson4 = {
  "id": "U3L4",
  "title": "It's time to do my homework.",
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
        "audio": "bed",
        "options": [
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "床"
      },
      {
        "type": "listen_select",
        "audio": "It's time to do my homework.",
        "options": [
          "该画画了。",
          "该做作业了。",
          "该上床睡觉了。",
          "哦，不！我的作业！"
        ],
        "correct": 1,
        "chinese": "该做作业了。"
      },
      {
        "type": "listen_select",
        "audio": "It's time to draw a picture.",
        "options": [
          "该做作业了。",
          "该上床睡觉了。",
          "该画画了。",
          "哦，不！我的作业！"
        ],
        "correct": 2,
        "chinese": "该画画了。"
      },
      {
        "type": "listen_select",
        "audio": "It's time to go to bed.",
        "options": [
          "该做作业了。",
          "该画画了。",
          "哦，不！我的作业！",
          "该上床睡觉了。"
        ],
        "correct": 3,
        "chinese": "该上床睡觉了。"
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
        "audio": "It's 7:00 p.m. It's time to do my homework.",
        "options": [
          "现在是晚上七点。该做作业了。",
          "现在是晚上七点半。该画画了。",
          "现在是晚上九点。该上床睡觉了。",
          "哦，不！我的作业！"
        ],
        "correct": 0,
        "chinese": "现在是晚上七点。该做作业了。"
      },
      {
        "type": "listen_select",
        "audio": "It's 9:00 p.m. It's time to go to bed. Oh, no! My homework!",
        "options": [
          "现在是晚上七点。该做作业了。",
          "现在是晚上七点半。该画画了。",
          "现在是晚上九点。该上床睡觉了。哦，不！我的作业！",
          "该做作业了。该画画了。"
        ],
        "correct": 2,
        "chinese": "现在是晚上九点。该上床睡觉了。哦，不！我的作业！"
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
        "audio": "drawing",
        "options": [
          "<img src=\"assets/images/drawing.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "画画"
      },
      {
        "type": "listen_select",
        "audio": "It's 7:00 p.m.",
        "options": [
          "现在是晚上七点半。",
          "现在是晚上九点。",
          "现在是晚上七点。",
          "该做作业了。"
        ],
        "correct": 2,
        "chinese": "现在是晚上七点。"
      },
      {
        "type": "listen_select",
        "audio": "It's time to do my homework.",
        "options": [
          "该画画了。",
          "该做作业了。",
          "该上床睡觉了。",
          "哦，不！我的作业！"
        ],
        "correct": 1,
        "chinese": "该做作业了。"
      },
      {
        "type": "listen_select",
        "audio": "It's 7:30 p.m.",
        "options": [
          "现在是晚上七点。",
          "现在是晚上七点半。",
          "现在是晚上九点。",
          "该画画了。"
        ],
        "correct": 1,
        "chinese": "现在是晚上七点半。"
      },
      {
        "type": "listen_select",
        "audio": "It's time to draw a picture.",
        "options": [
          "该做作业了。",
          "该上床睡觉了。",
          "该画画了。",
          "哦，不！我的作业！"
        ],
        "correct": 2,
        "chinese": "该画画了。"
      },
      {
        "type": "listen_select",
        "audio": "It's 9:00 p.m.",
        "options": [
          "现在是晚上七点。",
          "现在是晚上七点半。",
          "该上床睡觉了。",
          "现在是晚上九点。"
        ],
        "correct": 3,
        "chinese": "现在是晚上九点。"
      },
      {
        "type": "listen_select",
        "audio": "It's time to go to bed.",
        "options": [
          "该做作业了。",
          "该画画了。",
          "哦，不！我的作业！",
          "该上床睡觉了。"
        ],
        "correct": 3,
        "chinese": "该上床睡觉了。"
      },
      {
        "type": "listen_select",
        "audio": "Oh, no! My homework!",
        "options": [
          "该做作业了。",
          "哦，不！我的作业！",
          "该画画了。",
          "该上床睡觉了。"
        ],
        "correct": 1,
        "chinese": "哦，不！我的作业！"
      },
      {
        "type": "listen_select",
        "audio": "It's 7:00 p.m. It's time to do my homework.",
        "options": [
          "现在是晚上七点。该做作业了。",
          "现在是晚上七点半。该画画了。",
          "现在是晚上九点。该上床睡觉了。",
          "哦，不！我的作业！"
        ],
        "correct": 0,
        "chinese": "现在是晚上七点。该做作业了。"
      },
      {
        "type": "listen_select",
        "audio": "It's 7:30 p.m. It's time to draw a picture.",
        "options": [
          "现在是晚上七点。该做作业了。",
          "现在是晚上七点半。该画画了。",
          "现在是晚上九点。该上床睡觉了。",
          "哦，不！我的作业！"
        ],
        "correct": 1,
        "chinese": "现在是晚上七点半。该画画了。"
      },
      {
        "type": "listen_select",
        "audio": "It's 9:00 p.m. It's time to go to bed.",
        "options": [
          "现在是晚上七点。该做作业了。",
          "现在是晚上七点半。该画画了。",
          "现在是晚上九点。该上床睡觉了。",
          "哦，不！我的作业！"
        ],
        "correct": 2,
        "chinese": "现在是晚上九点。该上床睡觉了。"
      },
      {
        "type": "listen_select",
        "audio": "It's 9:00 p.m. It's time to go to bed. Oh, no! My homework!",
        "options": [
          "现在是晚上九点。该上床睡觉了。哦，不！我的作业！",
          "现在是晚上七点。该做作业了。",
          "现在是晚上七点半。该画画了。",
          "该做作业了。该画画了。"
        ],
        "correct": 0,
        "chinese": "现在是晚上九点。该上床睡觉了。哦，不！我的作业！"
      },
      {
        "type": "listen_select",
        "audio": "It's 7:00 p.m. It's time to do my homework. It's 7:30 p.m. It's time to draw a picture.",
        "options": [
          "现在是晚上七点。该做作业了。现在是晚上七点半。该画画了。",
          "现在是晚上九点。该上床睡觉了。哦，不！我的作业！",
          "该做作业了。哦，不！我的作业！",
          "现在是晚上七点半。该画画了。该上床睡觉了。"
        ],
        "correct": 0,
        "chinese": "现在是晚上七点。该做作业了。现在是晚上七点半。该画画了。"
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
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是椅子，这是一张床。"
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
        "audio": "It's time to do my homework. It's time to draw a picture. It's time to go to bed.",
        "options": [
          "该做作业了。该画画了。该上床睡觉了。",
          "现在是晚上七点。现在是晚上七点半。现在是晚上九点。",
          "哦，不！我的作业！该做作业了。",
          "该画画了。哦，不！我的作业！"
        ],
        "correct": 0,
        "chinese": "该做作业了。该画画了。该上床睡觉了。"
      },
      {
        "type": "listen_select",
        "audio": "It's time to go to bed. Oh, no! My homework!",
        "options": [
          "该做作业了。哦，不！我的作业！",
          "该上床睡觉了。哦，不！我的作业！",
          "该画画了。该上床睡觉了。",
          "现在是晚上九点。该做作业了。"
        ],
        "correct": 1,
        "chinese": "该上床睡觉了。哦，不！我的作业！"
      },
      {
        "type": "listen_select",
        "audio": "It's 7:30 p.m. It's time to draw a picture. It's 9:00 p.m. It's time to go to bed.",
        "options": [
          "现在是晚上七点。该做作业了。现在是晚上七点半。该画画了。",
          "现在是晚上七点半。该画画了。现在是晚上九点。该上床睡觉了。",
          "现在是晚上九点。该上床睡觉了。哦，不！我的作业！",
          "该做作业了。该画画了。"
        ],
        "correct": 1,
        "chinese": "现在是晚上七点半。该画画了。现在是晚上九点。该上床睡觉了。"
      },
      {
        "type": "listen_sequence",
        "audio": "homework, drawing, sleeping",
        "sequence": [
          "homework",
          "drawing",
          "sleeping"
        ],
        "words": [
          "<img src=\"assets/images/sleeping.png\" width=\"60\">",
          "<img src=\"assets/images/homework.png\" width=\"60\">",
          "<img src=\"assets/images/drawing.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "It's time to do my homework.",
        "context": "📚 到了做作业的时间。",
        "question": "现在该做什么？",
        "options": [
          "做作业",
          "画画",
          "睡觉",
          "吃饭"
        ],
        "correct": 0,
        "chinese": "该做作业了。"
      },
      {
        "type": "listen_select",
        "audio": "It's time to draw a picture.",
        "context": "🎨 做完作业，接下来做什么呢？",
        "question": "接下来做什么？",
        "options": [
          "画画",
          "做作业",
          "睡觉",
          "看电视"
        ],
        "correct": 0,
        "chinese": "该画画了。"
      },
      {
        "type": "listen_select",
        "audio": "It's time to go to bed.",
        "context": "😴 天很晚了。",
        "question": "该做什么了？",
        "options": [
          "睡觉",
          "做作业",
          "画画",
          "吃早餐"
        ],
        "correct": 0,
        "chinese": "该上床睡觉了。"
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
        "word": "bed",
        "sentence": "It's time to go to bed.",
        "chinese": "该上床睡觉了。",
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
        "correct": "bed"
      },
      {
        "type": "word_match",
        "word": "drawing",
        "sentence": "It's time to draw a picture.",
        "chinese": "该画画了。",
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
        "type": "sentence_match",
        "sentence": "It's time to do my homework.",
        "chinese": "该做作业了。",
        "options": [
          {
            "text": "该画画了。",
            "value": "wrong1"
          },
          {
            "text": "该做作业了。",
            "value": "correct"
          },
          {
            "text": "该上床睡觉了。",
            "value": "wrong2"
          },
          {
            "text": "哦，不！我的作业！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's time to draw a picture.",
        "chinese": "该画画了。",
        "options": [
          {
            "text": "该做作业了。",
            "value": "wrong1"
          },
          {
            "text": "该上床睡觉了。",
            "value": "wrong2"
          },
          {
            "text": "该画画了。",
            "value": "correct"
          },
          {
            "text": "哦，不！我的作业！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's time to go to bed.",
        "chinese": "该上床睡觉了。",
        "options": [
          {
            "text": "该做作业了。",
            "value": "wrong1"
          },
          {
            "text": "该画画了。",
            "value": "wrong2"
          },
          {
            "text": "哦，不！我的作业！",
            "value": "wrong3"
          },
          {
            "text": "该上床睡觉了。",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Oh, no! My homework!",
        "chinese": "哦，不！我的作业！",
        "options": [
          {
            "text": "哦，不！我的作业！",
            "value": "correct"
          },
          {
            "text": "该做作业了。",
            "value": "wrong1"
          },
          {
            "text": "该画画了。",
            "value": "wrong2"
          },
          {
            "text": "该上床睡觉了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's 7:00 p.m.",
        "chinese": "现在是晚上七点。",
        "options": [
          {
            "text": "现在是晚上七点半。",
            "value": "wrong1"
          },
          {
            "text": "现在是晚上七点。",
            "value": "correct"
          },
          {
            "text": "现在是晚上九点。",
            "value": "wrong2"
          },
          {
            "text": "该做作业了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "晚上九点了，该睡觉了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's time to do my homework.",
            "value": "wrong1"
          },
          {
            "text": "It's time to draw a picture.",
            "value": "wrong2"
          },
          {
            "text": "It's time to go to bed.",
            "value": "correct"
          },
          {
            "text": "Oh, no! My homework!",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你突然想起作业还没做，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's time to go to bed.",
            "value": "wrong1"
          },
          {
            "text": "It's time to draw a picture.",
            "value": "wrong2"
          },
          {
            "text": "It's time to do my homework.",
            "value": "wrong3"
          },
          {
            "text": "Oh, no! My homework!",
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
            "word": "homework",
            "match": "<img src=\"assets/images/homework.png\" width=\"50\">",
            "chinese": "作业"
          },
          {
            "word": "drawing",
            "match": "<img src=\"assets/images/drawing.png\" width=\"50\">",
            "chinese": "画画"
          },
          {
            "word": "sleeping",
            "match": "<img src=\"assets/images/sleeping.png\" width=\"50\">",
            "chinese": "睡觉"
          },
          {
            "word": "reading",
            "match": "<img src=\"assets/images/reading.png\" width=\"50\">",
            "chinese": "读书"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "play",
            "match": "玩",
            "example": "I want to play."
          },
          {
            "word": "picture",
            "match": "画",
            "example": "It's time to draw a picture."
          },
          {
            "word": "homework",
            "match": "作业",
            "example": "It's time to do my homework."
          },
          {
            "word": "bed",
            "match": "床",
            "example": "It's time to go to bed."
          }
        ]
      },
      {
        "type": "word_match",
        "word": "clock",
        "sentence": "It's 7:00 p.m.",
        "chinese": "现在是晚上七点。",
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
        "word": "bed",
        "sentence": "It's time to go to bed.",
        "chinese": "该上床睡觉了。",
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
        "type": "sentence_match",
        "sentence": "It's 7:00 p.m.",
        "chinese": "现在是晚上七点。",
        "options": [
          {
            "text": "现在是晚上七点。",
            "value": "correct"
          },
          {
            "text": "现在是晚上七点半。",
            "value": "wrong1"
          },
          {
            "text": "现在是晚上九点。",
            "value": "wrong2"
          },
          {
            "text": "该做作业了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's time to do my homework.",
        "chinese": "该做作业了。",
        "options": [
          {
            "text": "该画画了。",
            "value": "wrong1"
          },
          {
            "text": "该做作业了。",
            "value": "correct"
          },
          {
            "text": "该上床睡觉了。",
            "value": "wrong2"
          },
          {
            "text": "哦，不！我的作业！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's 7:30 p.m.",
        "chinese": "现在是晚上七点半。",
        "options": [
          {
            "text": "现在是晚上七点。",
            "value": "wrong1"
          },
          {
            "text": "现在是晚上七点半。",
            "value": "correct"
          },
          {
            "text": "现在是晚上九点。",
            "value": "wrong2"
          },
          {
            "text": "该画画了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's time to draw a picture.",
        "chinese": "该画画了。",
        "options": [
          {
            "text": "该做作业了。",
            "value": "wrong1"
          },
          {
            "text": "该上床睡觉了。",
            "value": "wrong2"
          },
          {
            "text": "该画画了。",
            "value": "correct"
          },
          {
            "text": "哦，不！我的作业！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's 9:00 p.m.",
        "chinese": "现在是晚上九点。",
        "options": [
          {
            "text": "现在是晚上七点。",
            "value": "wrong1"
          },
          {
            "text": "现在是晚上七点半。",
            "value": "wrong2"
          },
          {
            "text": "现在是晚上九点。",
            "value": "correct"
          },
          {
            "text": "该上床睡觉了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's time to go to bed.",
        "chinese": "该上床睡觉了。",
        "options": [
          {
            "text": "该做作业了。",
            "value": "wrong1"
          },
          {
            "text": "该画画了。",
            "value": "wrong2"
          },
          {
            "text": "哦，不！我的作业！",
            "value": "wrong3"
          },
          {
            "text": "该上床睡觉了。",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Oh, no! My homework!",
        "chinese": "哦，不！我的作业！",
        "options": [
          {
            "text": "哦，不！我的作业！",
            "value": "correct"
          },
          {
            "text": "该做作业了。",
            "value": "wrong1"
          },
          {
            "text": "该画画了。",
            "value": "wrong2"
          },
          {
            "text": "该上床睡觉了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's 7:00 p.m. It's time to do my homework.",
        "chinese": "现在是晚上七点。该做作业了。",
        "options": [
          {
            "text": "现在是晚上七点。该做作业了。",
            "value": "correct"
          },
          {
            "text": "现在是晚上七点半。该画画了。",
            "value": "wrong1"
          },
          {
            "text": "现在是晚上九点。该上床睡觉了。",
            "value": "wrong2"
          },
          {
            "text": "哦，不！我的作业！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's 7:30 p.m. It's time to draw a picture.",
        "chinese": "现在是晚上七点半。该画画了。",
        "options": [
          {
            "text": "现在是晚上七点。该做作业了。",
            "value": "wrong1"
          },
          {
            "text": "现在是晚上七点半。该画画了。",
            "value": "correct"
          },
          {
            "text": "现在是晚上九点。该上床睡觉了。",
            "value": "wrong2"
          },
          {
            "text": "哦，不！我的作业！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's 9:00 p.m. It's time to go to bed.",
        "chinese": "现在是晚上九点。该上床睡觉了。",
        "options": [
          {
            "text": "现在是晚上七点。该做作业了。",
            "value": "wrong1"
          },
          {
            "text": "现在是晚上七点半。该画画了。",
            "value": "wrong2"
          },
          {
            "text": "现在是晚上九点。该上床睡觉了。",
            "value": "correct"
          },
          {
            "text": "哦，不！我的作业！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's 9:00 p.m. It's time to go to bed. Oh, no! My homework!",
        "chinese": "现在是晚上九点。该上床睡觉了。哦，不！我的作业！",
        "options": [
          {
            "text": "现在是晚上九点。该上床睡觉了。哦，不！我的作业！",
            "value": "correct"
          },
          {
            "text": "现在是晚上七点。该做作业了。",
            "value": "wrong1"
          },
          {
            "text": "现在是晚上七点半。该画画了。",
            "value": "wrong2"
          },
          {
            "text": "该做作业了。该画画了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "晚上七点了，该做作业了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's time to draw a picture.",
            "value": "wrong1"
          },
          {
            "text": "It's time to go to bed.",
            "value": "wrong2"
          },
          {
            "text": "It's time to do my homework.",
            "value": "correct"
          },
          {
            "text": "Oh, no! My homework!",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "晚上七点半了，该画画了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's time to do my homework.",
            "value": "wrong1"
          },
          {
            "text": "It's time to draw a picture.",
            "value": "correct"
          },
          {
            "text": "It's time to go to bed.",
            "value": "wrong2"
          },
          {
            "text": "Oh, no! My homework!",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "晚上九点了，该睡觉了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's time to do my homework.",
            "value": "wrong1"
          },
          {
            "text": "It's time to draw a picture.",
            "value": "wrong2"
          },
          {
            "text": "Oh, no! My homework!",
            "value": "wrong3"
          },
          {
            "text": "It's time to go to bed.",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你发现作业忘做了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "It's time to go to bed.",
            "value": "wrong1"
          },
          {
            "text": "Oh, no! My homework!",
            "value": "correct"
          },
          {
            "text": "It's time to draw a picture.",
            "value": "wrong2"
          },
          {
            "text": "It's time to do my homework.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's 7:00 p.m. It's time to do my homework. It's 7:30 p.m. It's time to draw a picture.",
        "chinese": "现在是晚上七点。该做作业了。现在是晚上七点半。该画画了。",
        "options": [
          {
            "text": "现在是晚上七点。该做作业了。现在是晚上七点半。该画画了。",
            "value": "correct"
          },
          {
            "text": "现在是晚上九点。该上床睡觉了。哦，不！我的作业！",
            "value": "wrong1"
          },
          {
            "text": "该做作业了。哦，不！我的作业！",
            "value": "wrong2"
          },
          {
            "text": "现在是晚上七点半。该画画了。该上床睡觉了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's time to go to bed. Oh, no! My homework!",
        "chinese": "该上床睡觉了。哦，不！我的作业！",
        "options": [
          {
            "text": "该做作业了。哦，不！我的作业！",
            "value": "wrong1"
          },
          {
            "text": "该上床睡觉了。哦，不！我的作业！",
            "value": "correct"
          },
          {
            "text": "该画画了。该上床睡觉了。",
            "value": "wrong2"
          },
          {
            "text": "现在是晚上九点。该做作业了。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "It's time to do my homework. It's time to draw a picture. It's time to go to bed.",
        "chinese": "该做作业了。该画画了。该上床睡觉了。",
        "options": [
          {
            "text": "该做作业了。该画画了。该上床睡觉了。",
            "value": "correct"
          },
          {
            "text": "现在是晚上七点。现在是晚上七点半。现在是晚上九点。",
            "value": "wrong1"
          },
          {
            "text": "哦，不！我的作业！该做作业了。",
            "value": "wrong2"
          },
          {
            "text": "该画画了。哦，不！我的作业！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "It's time to do my homework.",
        "context": "你朋友发来消息想约你打球。你看了看时间表。",
        "question": "你能去打球吗？",
        "options": [
          {
            "text": "不能，该做作业了",
            "value": "correct"
          },
          {
            "text": "可以",
            "value": "w1"
          },
          {
            "text": "该睡觉了",
            "value": "w2"
          },
          {
            "text": "该吃饭了",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "该做作业了。"
      },
      {
        "type": "scenario",
        "sentence": "It's time to go to bed.",
        "context": "你还想看电视，但时间表上写着该做什么了。",
        "question": "你应该做什么？",
        "options": [
          {
            "text": "去睡觉",
            "value": "correct"
          },
          {
            "text": "继续看电视",
            "value": "w1"
          },
          {
            "text": "做作业",
            "value": "w2"
          },
          {
            "text": "画画",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "该上床睡觉了。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "It's time to do homework.",
          "It's time to draw.",
          "It's time for bed."
        ],
        "chinese": "把一天的安排排好！",
        "chineseHint": "该做作业了。 / 该画画了。 / 该睡觉了。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "Oh no!",
          "My homework!",
          "I forgot!"
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "哦不！ / 我的作业！ / 我忘了！"
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
            "text": "<img src=\"assets/images/sleeping.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "homework",
        "chinese": "homework"
      },
      {
        "type": "word_match",
        "word": "drawing",
        "options": [
          {
            "text": "<img src=\"assets/images/drawing.png\" width=\"80\">",
            "value": "drawing"
          },
          {
            "text": "<img src=\"assets/images/sleeping.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/homework.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "drawing",
        "chinese": "drawing"
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
            "text": "<img src=\"assets/images/homework.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/drawing.png\" width=\"80\">",
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
        "prompt": "作业(homework)的首字母是？",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "g",
          "h",
          "j",
          "k"
        ],
        "correct": 1,
        "chinese": "作业",
        "word": "作业"
      },
      {
        "type": "pinyin_fill",
        "hint": "h_mework",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "o",
          "a",
          "e",
          "i"
        ],
        "correct": 0,
        "chinese": "作业"
      },
      {
        "type": "pinyin_fill",
        "hint": "p_cture",
        "image": "<img src=\"assets/images/drawing.png\" width=\"80\">",
        "options": [
          "i",
          "a",
          "o",
          "e"
        ],
        "correct": 0,
        "chinese": "图画"
      },
      {
        "type": "fill_blank",
        "prompt": "It's time to do my _____.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "picture",
          "homework",
          "dinner",
          "bed"
        ],
        "correct": 1,
        "chinese": "该做作业了。"
      },
      {
        "type": "word_puzzle",
        "hint": "p_ay",
        "word": "play",
        "options": [
          "z",
          "w",
          "l",
          "a"
        ],
        "correct": 2,
        "chinese": "play"
      },
      {
        "type": "word_puzzle",
        "hint": "p_cture",
        "word": "picture",
        "options": [
          "k",
          "i",
          "u",
          "f"
        ],
        "correct": 1,
        "chinese": "picture"
      },
      {
        "type": "word_puzzle",
        "hint": "h_mework",
        "word": "homework",
        "options": [
          "k",
          "n",
          "z",
          "o"
        ],
        "correct": 3,
        "chinese": "homework"
      },
      {
        "type": "fill_blank",
        "prompt": "It's time for _____.",
        "options": [
          "play",
          "homework",
          "picture"
        ],
        "correct": 1,
        "chinese": "It's time for homework."
      },
      {
        "type": "fill_blank",
        "prompt": "Draw a _____.",
        "options": [
          "play",
          "homework",
          "picture"
        ],
        "correct": 2,
        "chinese": "Draw a picture."
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "现在是晚上七点。",
        "words": [
          "It's",
          "7:00",
          "p.m."
        ],
        "scrambled": [
          "p.m.",
          "It's",
          "7:00"
        ],
        "chineseWords": [
          "现在是",
          "晚上",
          "七点"
        ],
        "chineseScrambled": [
          "七点",
          "现在是",
          "晚上"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "该做作业了。",
        "words": [
          "It's",
          "time",
          "to",
          "do",
          "my",
          "homework"
        ],
        "scrambled": [
          "homework",
          "It's",
          "to",
          "time",
          "my",
          "do"
        ],
        "chineseWords": [
          "该",
          "做",
          "作业",
          "了"
        ],
        "chineseScrambled": [
          "作业",
          "了",
          "该",
          "做"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在是晚上七点半。",
        "words": [
          "It's",
          "7:30",
          "p.m."
        ],
        "scrambled": [
          "7:30",
          "p.m.",
          "It's"
        ],
        "chineseWords": [
          "现在是",
          "晚上",
          "七点半"
        ],
        "chineseScrambled": [
          "七点半",
          "晚上",
          "现在是"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "该画画了。",
        "words": [
          "It's",
          "time",
          "to",
          "draw",
          "a",
          "picture"
        ],
        "scrambled": [
          "draw",
          "It's",
          "picture",
          "time",
          "a",
          "to"
        ],
        "chineseWords": [
          "该",
          "画",
          "画",
          "了"
        ],
        "chineseScrambled": [
          "画",
          "了",
          "该",
          "画"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "现在是晚上九点。",
        "words": [
          "It's",
          "9:00",
          "p.m."
        ],
        "scrambled": [
          "9:00",
          "It's",
          "p.m."
        ],
        "chineseWords": [
          "现在是",
          "晚上",
          "九点"
        ],
        "chineseScrambled": [
          "九点",
          "现在是",
          "晚上"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "该上床睡觉了。",
        "words": [
          "It's",
          "time",
          "to",
          "go",
          "to",
          "bed"
        ],
        "scrambled": [
          "bed",
          "It's",
          "to",
          "go",
          "time",
          "to"
        ],
        "chineseWords": [
          "该",
          "上床",
          "睡觉",
          "了"
        ],
        "chineseScrambled": [
          "睡觉",
          "了",
          "该",
          "上床"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "哦，不！我的作业！",
        "words": [
          "Oh",
          "no",
          "My",
          "homework"
        ],
        "scrambled": [
          "My",
          "Oh",
          "homework",
          "no"
        ],
        "chineseWords": [
          "哦",
          "不",
          "我的",
          "作业"
        ],
        "chineseScrambled": [
          "作业",
          "哦",
          "我的",
          "不"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "哦，不！",
        "words": [
          "bed",
          "Oh"
        ],
        "scrambled": [
          "Oh",
          "bed"
        ],
        "chineseWords": [
          "哦",
          "不"
        ],
        "chineseScrambled": [
          "不",
          "哦"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "我的作业！",
        "words": [
          "no",
          "My",
          "homework"
        ],
        "scrambled": [
          "My",
          "no",
          "homework"
        ],
        "chineseWords": [
          "我的",
          "作业"
        ],
        "chineseScrambled": [
          "作业",
          "我的"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "It's time to do my _____.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "picture",
          "homework",
          "dinner",
          "bed"
        ],
        "correct": 1,
        "chinese": "该做作业了。"
      },
      {
        "type": "fill_blank",
        "prompt": "It's time to draw a _____.",
        "image": "<img src=\"assets/images/drawing.png\" width=\"80\">",
        "options": [
          "homework",
          "picture",
          "dinner",
          "bed"
        ],
        "correct": 1,
        "chinese": "该画画了。"
      },
      {
        "type": "fill_blank",
        "prompt": "It's time to go to _____.",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "options": [
          "school",
          "bed",
          "home",
          "dinner"
        ],
        "correct": 1,
        "chinese": "该上床睡觉了。"
      },
      {
        "type": "fill_blank",
        "prompt": "Oh, no! My _____!",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "picture",
          "dinner",
          "homework",
          "bed"
        ],
        "correct": 2,
        "chinese": "哦，不！我的作业！"
      },
      {
        "type": "fill_blank",
        "prompt": "It's _____ to do my homework.",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "options": [
          "day",
          "time",
          "clock",
          "hour"
        ],
        "correct": 1,
        "chinese": "该做作业了。"
      },
      {
        "type": "word_puzzle",
        "hint": "pl_y",
        "word": "play",
        "options": [
          "e",
          "a",
          "f",
          "v"
        ],
        "correct": 1,
        "chinese": "play"
      },
      {
        "type": "word_puzzle",
        "hint": "pic_ure",
        "word": "picture",
        "options": [
          "c",
          "t",
          "m",
          "x"
        ],
        "correct": 1,
        "chinese": "picture"
      },
      {
        "type": "word_puzzle",
        "hint": "home_ork",
        "word": "homework",
        "options": [
          "w",
          "h",
          "j",
          "t"
        ],
        "correct": 0,
        "chinese": "homework"
      },
      {
        "type": "fill_blank",
        "prompt": "It's time for _____.",
        "options": [
          "play",
          "picture",
          "homework"
        ],
        "correct": 2,
        "chinese": "It's time for homework."
      },
      {
        "type": "fill_blank",
        "prompt": "Draw a _____.",
        "options": [
          "play",
          "picture",
          "homework"
        ],
        "correct": 1,
        "chinese": "Draw a picture."
      }
    ]
  },
  "speaking": {
    "pretest": [
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
        "word": "homework",
        "chinese": "作业",
        "expected": "homework"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/drawing.png\" width=\"80\">",
        "word": "picture",
        "chinese": "图画",
        "expected": "picture"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "play",
        "chinese": "玩",
        "expected": "play"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "word": "bed",
        "chinese": "床",
        "expected": "bed"
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
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/clock.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "床"
      },
      {
        "type": "repeat_sentence",
        "word": "It's time to do my homework.",
        "chinese": "该做作业了。",
        "expected": "It's time to do my homework."
      },
      {
        "type": "repeat_sentence",
        "word": "It's time to draw a picture.",
        "chinese": "该画画了。",
        "expected": "It's time to draw a picture."
      },
      {
        "type": "repeat_sentence",
        "word": "It's time to go to bed.",
        "chinese": "该上床睡觉了。",
        "expected": "It's time to go to bed."
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "It's 7:00 p.m.",
        "chinese": "现在是晚上七点。",
        "expected": "It's 7:00 p.m."
      },
      {
        "type": "repeat_sentence",
        "word": "It's time to do my homework.",
        "chinese": "该做作业了。",
        "expected": "It's time to do my homework."
      },
      {
        "type": "repeat_sentence",
        "word": "It's 7:30 p.m.",
        "chinese": "现在是晚上七点半。",
        "expected": "It's 7:30 p.m."
      },
      {
        "type": "repeat_sentence",
        "word": "It's time to draw a picture.",
        "chinese": "该画画了。",
        "expected": "It's time to draw a picture."
      },
      {
        "type": "repeat_sentence",
        "word": "It's 9:00 p.m.",
        "chinese": "现在是晚上九点。",
        "expected": "It's 9:00 p.m."
      },
      {
        "type": "repeat_sentence",
        "word": "It's time to go to bed.",
        "chinese": "该上床睡觉了。",
        "expected": "It's time to go to bed."
      },
      {
        "type": "repeat_sentence",
        "word": "Oh, no! My homework!",
        "chinese": "哦，不！我的作业！",
        "expected": "Oh, no! My homework!"
      },
      {
        "type": "repeat_sentence",
        "word": "It's 7:00 p.m. It's time to do my homework.",
        "chinese": "现在是晚上七点。该做作业了。",
        "expected": "It's 7:00 p.m. It's time to do my homework."
      },
      {
        "type": "repeat_sentence",
        "word": "It's 7:30 p.m. It's time to draw a picture.",
        "chinese": "现在是晚上七点半。该画画了。",
        "expected": "It's 7:30 p.m. It's time to draw a picture."
      },
      {
        "type": "repeat_sentence",
        "word": "It's 9:00 p.m. It's time to go to bed.",
        "chinese": "现在是晚上九点。该上床睡觉了。",
        "expected": "It's 9:00 p.m. It's time to go to bed."
      },
      {
        "type": "repeat_sentence",
        "word": "It's time to go to bed. Oh, no! My homework!",
        "chinese": "该上床睡觉了。哦，不！我的作业！",
        "expected": "It's time to go to bed. Oh, no! My homework!"
      },
      {
        "type": "repeat_sentence",
        "word": "It's 9:00 p.m. It's time to go to bed. Oh, no! My homework!",
        "chinese": "现在是晚上九点。该上床睡觉了。哦，不！我的作业！",
        "expected": "It's 9:00 p.m. It's time to go to bed. Oh, no! My homework!"
      },
      {
        "type": "repeat_sentence",
        "word": "It's time to do my homework. It's time to draw a picture.",
        "chinese": "该做作业了。该画画了。",
        "expected": "It's time to do my homework. It's time to draw a picture."
      },
      {
        "type": "repeat_sentence",
        "word": "It's time to draw a picture. It's time to go to bed.",
        "chinese": "该画画了。该上床睡觉了。",
        "expected": "It's time to draw a picture. It's time to go to bed."
      },
      {
        "type": "repeat_sentence",
        "word": "It's time to do my homework. It's time to draw a picture. It's time to go to bed.",
        "chinese": "该做作业了。该画画了。该上床睡觉了。",
        "expected": "It's time to do my homework. It's time to draw a picture. It's time to go to bed."
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
        "word": "homework",
        "chinese": "作业",
        "expected": "homework"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/drawing.png\" width=\"80\">",
        "word": "picture",
        "chinese": "图画",
        "expected": "picture"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/drawing.png\" width=\"80\">",
        "word": "draw",
        "chinese": "画",
        "expected": "draw"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/clock.png\" width=\"80\">",
        "word": "play",
        "chinese": "玩",
        "expected": "play"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/homework.png\" width=\"80\">",
        "word": "homework",
        "chinese": "homework"
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
        "image": "<img src=\"assets/images/reading.png\" width=\"80\">",
        "word": "reading",
        "chinese": "reading"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/cooking.png\" width=\"80\">",
        "word": "cooking",
        "chinese": "cooking"
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
