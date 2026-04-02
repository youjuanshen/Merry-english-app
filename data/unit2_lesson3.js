// Unit 2 Lesson 3: Where is my sweater?
// Core vocab: where, room, sweater, under, bed, chair, schoolbag
// Sentences: "Where is my sweater, Mom?", "Is it on your bed?", "Is it under your chair?", etc.
var unit2_lesson3 = {
  "id": "U2L3",
  "title": "Where is my sweater?",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "sweater",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shorts.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "毛衣"
      },
      {
        "type": "listen_select",
        "audio": "bed",
        "options": [
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "床"
      },
      {
        "type": "listen_select",
        "audio": "chair",
        "options": [
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "椅子"
      },
      {
        "type": "listen_select",
        "audio": "Where is my sweater, Mom?",
        "options": [
          "它在你的床上吗？",
          "妈妈，我的毛衣在哪里？",
          "它在你的椅子下面吗？",
          "看！你的毛衣在你的书包里！"
        ],
        "correct": 1,
        "chinese": "妈妈，我的毛衣在哪里？"
      },
      {
        "type": "listen_select",
        "audio": "Is it on your bed?",
        "options": [
          "它在你的椅子下面吗？",
          "妈妈，我的毛衣在哪里？",
          "它在你的床上吗？",
          "不，不在。"
        ],
        "correct": 2,
        "chinese": "它在你的床上吗？"
      },
      {
        "type": "listen_select",
        "audio": "Is it under your chair?",
        "options": [
          "它在你的床上吗？",
          "看！你的毛衣在你的书包里！",
          "妈妈，我的毛衣在哪里？",
          "它在你的椅子下面吗？"
        ],
        "correct": 3,
        "chinese": "它在你的椅子下面吗？"
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
        "type": "listen_select",
        "audio": "Look! Your sweater is in your schoolbag!",
        "options": [
          "看！你的毛衣在你的书包里！",
          "妈妈，我的毛衣在哪里？",
          "它在你的床上吗？不，不在。",
          "亲爱的，请把你的衣服收好。"
        ],
        "correct": 0,
        "chinese": "看！你的毛衣在你的书包里！"
      },
      {
        "type": "listen_select",
        "audio": "Dear, put away your clothes, please.",
        "options": [
          "妈妈，我的毛衣在哪里？",
          "它在你的椅子下面吗？",
          "亲爱的，请把你的衣服收好。",
          "好的，妈妈。"
        ],
        "correct": 2,
        "chinese": "亲爱的，请把你的衣服收好。"
      }
    ],
    "practice": [
      {
        "type": "listen_select",
        "audio": "sweater",
        "options": [
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shorts.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "毛衣"
      },
      {
        "type": "listen_select",
        "audio": "schoolbag",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 0,
        "chinese": "书包"
      },
      {
        "type": "listen_select",
        "audio": "Where is my sweater, Mom?",
        "options": [
          "妈妈，我的毛衣在哪里？",
          "它在你的床上吗？",
          "不，不在。",
          "好的，妈妈。"
        ],
        "correct": 0,
        "chinese": "妈妈，我的毛衣在哪里？"
      },
      {
        "type": "listen_select",
        "audio": "Is it on your bed?",
        "options": [
          "它在你的椅子下面吗？",
          "它在你的床上吗？",
          "妈妈，我的毛衣在哪里？",
          "不，不在。"
        ],
        "correct": 1,
        "chinese": "它在你的床上吗？"
      },
      {
        "type": "listen_select",
        "audio": "No, it isn't.",
        "options": [
          "好的，妈妈。",
          "是的，它在。",
          "不，不在。",
          "谢谢。"
        ],
        "correct": 2,
        "chinese": "不，不在。"
      },
      {
        "type": "listen_select",
        "audio": "Is it under your chair?",
        "options": [
          "它在你的椅子下面吗？",
          "它在你的床上吗？",
          "你的毛衣在你的书包里。",
          "妈妈，我的毛衣在哪里？"
        ],
        "correct": 0,
        "chinese": "它在你的椅子下面吗？"
      },
      {
        "type": "listen_select",
        "audio": "Look! Your sweater is in your schoolbag!",
        "options": [
          "它在你的床上吗？",
          "妈妈，我的毛衣在哪里？",
          "看！你的毛衣在你的书包里！",
          "不，不在。"
        ],
        "correct": 2,
        "chinese": "看！你的毛衣在你的书包里！"
      },
      {
        "type": "listen_select",
        "audio": "Dear, put away your clothes, please.",
        "options": [
          "好的，妈妈。",
          "亲爱的，请把你的衣服收好。",
          "妈妈，我的毛衣在哪里？",
          "谢谢。"
        ],
        "correct": 1,
        "chinese": "亲爱的，请把你的衣服收好。"
      },
      {
        "type": "listen_select",
        "audio": "Okay, Mom.",
        "options": [
          "不，不在。",
          "谢谢。",
          "不客气。",
          "好的，妈妈。"
        ],
        "correct": 3,
        "chinese": "好的，妈妈。"
      },
      {
        "type": "listen_select",
        "audio": "Oh, thank you very much.",
        "options": [
          "哦，非常感谢。",
          "不客气。",
          "好的，妈妈。",
          "妈妈，我的毛衣在哪里？"
        ],
        "correct": 0,
        "chinese": "哦，非常感谢。"
      },
      {
        "type": "listen_select",
        "audio": "You're welcome.",
        "options": [
          "谢谢。",
          "好的，妈妈。",
          "不客气。",
          "不，不在。"
        ],
        "correct": 2,
        "chinese": "不客气。"
      },
      {
        "type": "listen_select",
        "audio": "Where is my sweater, Mom? Is it on your bed? No, it isn't.",
        "options": [
          "妈妈，我的毛衣在哪里？它在你的床上吗？不，不在。",
          "它在你的椅子下面吗？不，不在。",
          "看！你的毛衣在你的书包里！",
          "亲爱的，请把你的衣服收好。好的，妈妈。"
        ],
        "correct": 0,
        "chinese": "妈妈，我的毛衣在哪里？它在你的床上吗？不，不在。"
      },
      {
        "type": "listen_select",
        "audio": "Is it under your chair? No, it isn't.",
        "options": [
          "它在你的床上吗？不，不在。",
          "它在你的椅子下面吗？不，不在。",
          "看！你的毛衣在你的书包里！",
          "好的，妈妈。"
        ],
        "correct": 1,
        "chinese": "它在你的椅子下面吗？不，不在。"
      },
      {
        "type": "listen_select",
        "audio": "Oh, thank you very much. You're welcome.",
        "options": [
          "好的，妈妈。不客气。",
          "亲爱的，请把你的衣服收好。",
          "哦，非常感谢。不客气。",
          "妈妈，我的毛衣在哪里？"
        ],
        "correct": 2,
        "chinese": "哦，非常感谢。不客气。"
      },
      {
        "type": "listen_tf",
        "audio": "This is a schoolbag.",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一个书包，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a sweater.",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "correct": true,
        "chinese": "这是一件毛衣，正确！"
      },
      {
        "type": "listen_tf",
        "audio": "This is a bed.",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "correct": false,
        "chinese": "这不是床，这是一把椅子。"
      },
      {
        "type": "listen_select",
        "audio": "Dear, put away your clothes, please. Okay, Mom.",
        "options": [
          "亲爱的，请把你的衣服收好。好的，妈妈。",
          "妈妈，我的毛衣在哪里？不，不在。",
          "哦，非常感谢。不客气。",
          "看！你的毛衣在你的书包里！"
        ],
        "correct": 0,
        "chinese": "亲爱的，请把你的衣服收好。好的，妈妈。"
      },
      {
        "type": "listen_select",
        "audio": "Look! Your sweater is in your schoolbag! Oh, thank you very much.",
        "options": [
          "妈妈，我的毛衣在哪里？不，不在。",
          "看！你的毛衣在你的书包里！哦，非常感谢。",
          "亲爱的，请把你的衣服收好。好的，妈妈。",
          "它在你的椅子下面吗？不，不在。"
        ],
        "correct": 1,
        "chinese": "看！你的毛衣在你的书包里！哦，非常感谢。"
      },
      {
        "type": "listen_select",
        "audio": "Where is my sweater, Mom? Is it under your chair?",
        "options": [
          "妈妈，我的毛衣在哪里？它在你的床上吗？",
          "看！你的毛衣在你的书包里！",
          "妈妈，我的毛衣在哪里？它在你的椅子下面吗？",
          "亲爱的，请把你的衣服收好。"
        ],
        "correct": 2,
        "chinese": "妈妈，我的毛衣在哪里？它在你的椅子下面吗？"
      },
      {
        "type": "listen_sequence",
        "audio": "bed, chair, schoolbag",
        "sequence": [
          "bed",
          "chair",
          "schoolbag"
        ],
        "words": [
          "<img src=\"assets/images/schoolbag.png\" width=\"60\">",
          "<img src=\"assets/images/bed.png\" width=\"60\">",
          "<img src=\"assets/images/chair.png\" width=\"60\">"
        ],
        "chinese": "听音频，按顺序点图片！"
      },
      {
        "type": "listen_select",
        "audio": "Is it on your bed?",
        "context": "🏠 你的毛衣找不到了！妈妈帮你找。",
        "question": "妈妈觉得毛衣在哪？",
        "options": [
          "床上",
          "椅子下",
          "书包里",
          "桌子上"
        ],
        "correct": 0,
        "chinese": "它在你的床上吗？"
      },
      {
        "type": "listen_select",
        "audio": "Is it under your chair?",
        "context": "🏠 不在床上，妈妈又猜了一个地方。",
        "question": "妈妈这次猜哪里？",
        "options": [
          "椅子下面",
          "床上",
          "书包里",
          "门后面"
        ],
        "correct": 0,
        "chinese": "它在你的椅子下面吗？"
      },
      {
        "type": "listen_select",
        "audio": "Your sweater is in your schoolbag.",
        "context": "🎒 终于找到了！",
        "question": "毛衣在哪里找到的？",
        "options": [
          "书包里",
          "床上",
          "椅子下",
          "柜子里"
        ],
        "correct": 0,
        "chinese": "你的毛衣在你的书包里。"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "word": "sweater",
        "sentence": "Where is my sweater?",
        "chinese": "我的毛衣在哪里？",
        "options": [
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
          },
          {
            "text": "<img src=\"assets/images/shorts.png\" width=\"80\">",
            "value": "shorts"
          }
        ],
        "correct": "sweater"
      },
      {
        "type": "word_match",
        "word": "bed",
        "sentence": "Is it on your bed?",
        "chinese": "它在你的床上吗？",
        "options": [
          {
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "chair"
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
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          }
        ],
        "correct": "bed"
      },
      {
        "type": "word_match",
        "word": "chair",
        "sentence": "Is it under your chair?",
        "chinese": "它在你的椅子下面吗？",
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
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "schoolbag"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          }
        ],
        "correct": "chair"
      },
      {
        "type": "sentence_match",
        "sentence": "Where is my sweater, Mom?",
        "chinese": "妈妈，我的毛衣在哪里？",
        "options": [
          {
            "text": "它在你的床上吗？",
            "value": "wrong1"
          },
          {
            "text": "妈妈，我的毛衣在哪里？",
            "value": "correct"
          },
          {
            "text": "它在你的椅子下面吗？",
            "value": "wrong2"
          },
          {
            "text": "不，不在。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it on your bed?",
        "chinese": "它在你的床上吗？",
        "options": [
          {
            "text": "它在你的床上吗？",
            "value": "correct"
          },
          {
            "text": "它在你的椅子下面吗？",
            "value": "wrong1"
          },
          {
            "text": "妈妈，我的毛衣在哪里？",
            "value": "wrong2"
          },
          {
            "text": "不，不在。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it under your chair?",
        "chinese": "它在你的椅子下面吗？",
        "options": [
          {
            "text": "它在你的床上吗？",
            "value": "wrong1"
          },
          {
            "text": "不，不在。",
            "value": "wrong2"
          },
          {
            "text": "它在你的椅子下面吗？",
            "value": "correct"
          },
          {
            "text": "妈妈，我的毛衣在哪里？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Your sweater is in your schoolbag!",
        "chinese": "你的毛衣在你的书包里！",
        "options": [
          {
            "text": "你的毛衣在你的书包里！",
            "value": "correct"
          },
          {
            "text": "它在你的床上吗？",
            "value": "wrong1"
          },
          {
            "text": "妈妈，我的毛衣在哪里？",
            "value": "wrong2"
          },
          {
            "text": "它在你的椅子下面吗？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Dear, put away your clothes, please.",
        "chinese": "亲爱的，请把你的衣服收好。",
        "options": [
          {
            "text": "好的，妈妈。",
            "value": "wrong1"
          },
          {
            "text": "妈妈，我的毛衣在哪里？",
            "value": "wrong2"
          },
          {
            "text": "亲爱的，请把你的衣服收好。",
            "value": "correct"
          },
          {
            "text": "不客气。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你找不到毛衣，想问妈妈，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Is it on your bed?",
            "value": "wrong1"
          },
          {
            "text": "Dear, put away your clothes, please.",
            "value": "wrong2"
          },
          {
            "text": "Where is my sweater, Mom?",
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
        "sentence": "妈妈帮你找到了毛衣，你很感谢，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Okay, Mom.",
            "value": "wrong1"
          },
          {
            "text": "You're welcome.",
            "value": "wrong2"
          },
          {
            "text": "No, it isn't.",
            "value": "wrong3"
          },
          {
            "text": "Oh, thank you very much.",
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
            "word": "sweater",
            "match": "<img src=\"assets/images/sweater.png\" width=\"50\">",
            "chinese": "毛衣"
          },
          {
            "word": "bed",
            "match": "<img src=\"assets/images/bed.png\" width=\"50\">",
            "chinese": "床"
          },
          {
            "word": "chair",
            "match": "<img src=\"assets/images/chair.png\" width=\"50\">",
            "chinese": "椅子"
          },
          {
            "word": "schoolbag",
            "match": "<img src=\"assets/images/schoolbag.png\" width=\"50\">",
            "chinese": "书包"
          }
        ]
      },
      {
        "type": "tap_pair",
        "chinese": "点英文词，配对中文！",
        "pairs": [
          {
            "word": "Where",
            "match": "在哪里",
            "example": "Where is my sweater, Mom?"
          },
          {
            "word": "under",
            "match": "在…下面",
            "example": "Is it under your chair?"
          },
          {
            "word": "sweater",
            "match": "毛衣",
            "example": "Where is my sweater?"
          },
          {
            "word": "put away",
            "match": "收好",
            "example": "Please put away your clothes."
          }
        ]
      },
      {
        "type": "word_match",
        "word": "schoolbag",
        "sentence": "Your sweater is in your schoolbag!",
        "chinese": "你的毛衣在你的书包里！",
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
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "chair"
          },
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          }
        ],
        "correct": "schoolbag"
      },
      {
        "type": "word_match",
        "word": "sweater",
        "sentence": "Where is my sweater?",
        "chinese": "我的毛衣在哪里？",
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
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "skirt"
          }
        ],
        "correct": "sweater"
      },
      {
        "type": "sentence_match",
        "sentence": "Where is my sweater, Mom?",
        "chinese": "妈妈，我的毛衣在哪里？",
        "options": [
          {
            "text": "妈妈，我的毛衣在哪里？",
            "value": "correct"
          },
          {
            "text": "它在你的床上吗？",
            "value": "wrong1"
          },
          {
            "text": "不，不在。",
            "value": "wrong2"
          },
          {
            "text": "好的，妈妈。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it on your bed?",
        "chinese": "它在你的床上吗？",
        "options": [
          {
            "text": "它在你的椅子下面吗？",
            "value": "wrong1"
          },
          {
            "text": "它在你的床上吗？",
            "value": "correct"
          },
          {
            "text": "妈妈，我的毛衣在哪里？",
            "value": "wrong2"
          },
          {
            "text": "不，不在。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "No, it isn't.",
        "chinese": "不，不在。",
        "options": [
          {
            "text": "是的，它在。",
            "value": "wrong1"
          },
          {
            "text": "不，不在。",
            "value": "correct"
          },
          {
            "text": "好的，妈妈。",
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
        "sentence": "Is it under your chair?",
        "chinese": "它在你的椅子下面吗？",
        "options": [
          {
            "text": "它在你的床上吗？",
            "value": "wrong1"
          },
          {
            "text": "妈妈，我的毛衣在哪里？",
            "value": "wrong2"
          },
          {
            "text": "它在你的椅子下面吗？",
            "value": "correct"
          },
          {
            "text": "你的毛衣在你的书包里！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "chinese": "看！你的毛衣在你的书包里！",
        "options": [
          {
            "text": "看！你的毛衣在你的书包里！",
            "value": "correct"
          },
          {
            "text": "它在你的床上吗？",
            "value": "wrong1"
          },
          {
            "text": "它在你的椅子下面吗？",
            "value": "wrong2"
          },
          {
            "text": "妈妈，我的毛衣在哪里？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Dear, put away your clothes, please.",
        "chinese": "亲爱的，请把你的衣服收好。",
        "options": [
          {
            "text": "好的，妈妈。",
            "value": "wrong1"
          },
          {
            "text": "不客气。",
            "value": "wrong2"
          },
          {
            "text": "亲爱的，请把你的衣服收好。",
            "value": "correct"
          },
          {
            "text": "妈妈，我的毛衣在哪里？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Okay, Mom.",
        "chinese": "好的，妈妈。",
        "options": [
          {
            "text": "不，不在。",
            "value": "wrong1"
          },
          {
            "text": "好的，妈妈。",
            "value": "correct"
          },
          {
            "text": "谢谢。",
            "value": "wrong2"
          },
          {
            "text": "不客气。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Oh, thank you very much.",
        "chinese": "哦，非常感谢。",
        "options": [
          {
            "text": "不客气。",
            "value": "wrong1"
          },
          {
            "text": "好的，妈妈。",
            "value": "wrong2"
          },
          {
            "text": "哦，非常感谢。",
            "value": "correct"
          },
          {
            "text": "不，不在。",
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
            "text": "好的，妈妈。",
            "value": "wrong2"
          },
          {
            "text": "不，不在。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Where is my sweater, Mom? Is it on your bed? No, it isn't.",
        "chinese": "妈妈，我的毛衣在哪里？它在你的床上吗？不，不在。",
        "options": [
          {
            "text": "妈妈，我的毛衣在哪里？它在你的床上吗？不，不在。",
            "value": "correct"
          },
          {
            "text": "它在你的椅子下面吗？不，不在。",
            "value": "wrong1"
          },
          {
            "text": "看！你的毛衣在你的书包里！",
            "value": "wrong2"
          },
          {
            "text": "亲爱的，请把你的衣服收好。好的，妈妈。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Is it under your chair? No, it isn't.",
        "chinese": "它在你的椅子下面吗？不，不在。",
        "options": [
          {
            "text": "它在你的床上吗？不，不在。",
            "value": "wrong1"
          },
          {
            "text": "它在你的椅子下面吗？不，不在。",
            "value": "correct"
          },
          {
            "text": "看！你的毛衣在你的书包里！",
            "value": "wrong2"
          },
          {
            "text": "好的，妈妈。",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想问毛衣是不是在椅子下面，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Is it on your bed?",
            "value": "wrong1"
          },
          {
            "text": "Where is my sweater?",
            "value": "wrong2"
          },
          {
            "text": "Is it under your chair?",
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
        "sentence": "妈妈让你收好衣服，你答应了，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Where is my sweater, Mom?",
            "value": "wrong1"
          },
          {
            "text": "No, it isn't.",
            "value": "wrong2"
          },
          {
            "text": "Thank you very much.",
            "value": "wrong3"
          },
          {
            "text": "Okay, Mom.",
            "value": "correct"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Dear, put away your clothes, please. Okay, Mom.",
        "chinese": "亲爱的，请把你的衣服收好。好的，妈妈。",
        "options": [
          {
            "text": "亲爱的，请把你的衣服收好。好的，妈妈。",
            "value": "correct"
          },
          {
            "text": "妈妈，我的毛衣在哪里？不，不在。",
            "value": "wrong1"
          },
          {
            "text": "哦，非常感谢。不客气。",
            "value": "wrong2"
          },
          {
            "text": "看！你的毛衣在你的书包里！",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Oh, thank you very much. You're welcome.",
        "chinese": "哦，非常感谢。不客气。",
        "options": [
          {
            "text": "好的，妈妈。不客气。",
            "value": "wrong1"
          },
          {
            "text": "哦，非常感谢。不客气。",
            "value": "correct"
          },
          {
            "text": "亲爱的，请把你的衣服收好。",
            "value": "wrong2"
          },
          {
            "text": "妈妈，我的毛衣在哪里？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你找到了毛衣在书包里，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Is it on your bed?",
            "value": "wrong1"
          },
          {
            "text": "Look! Your sweater is in your schoolbag!",
            "value": "correct"
          },
          {
            "text": "Where is my sweater?",
            "value": "wrong2"
          },
          {
            "text": "Okay, Mom.",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "你想问毛衣是不是在床上，你会说：",
        "chinese": "情景选择",
        "options": [
          {
            "text": "Is it under your chair?",
            "value": "wrong1"
          },
          {
            "text": "Where is my sweater?",
            "value": "wrong2"
          },
          {
            "text": "Is it on your bed?",
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
        "sentence": "Look! Your sweater is in your schoolbag! Oh, thank you very much.",
        "chinese": "看！你的毛衣在你的书包里！哦，非常感谢。",
        "options": [
          {
            "text": "看！你的毛衣在你的书包里！哦，非常感谢。",
            "value": "correct"
          },
          {
            "text": "它在你的椅子下面吗？不，不在。",
            "value": "wrong1"
          },
          {
            "text": "亲爱的，请把你的衣服收好。好的，妈妈。",
            "value": "wrong2"
          },
          {
            "text": "妈妈，我的毛衣在哪里？",
            "value": "wrong3"
          }
        ],
        "correct": "correct"
      },
      {
        "type": "scenario",
        "sentence": "Where is my sweater? Is it on your bed?",
        "context": "你朋友的毛衣丢了，他写了纸条问妈妈。妈妈回复说不在床上。",
        "question": "毛衣在床上吗？",
        "options": [
          {
            "text": "不在",
            "value": "correct"
          },
          {
            "text": "在",
            "value": "w1"
          },
          {
            "text": "不知道",
            "value": "w2"
          },
          {
            "text": "可能在",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "我的毛衣在哪里？它在你的床上吗？"
      },
      {
        "type": "scenario",
        "sentence": "Your sweater is in your schoolbag!",
        "context": "妈妈终于找到了毛衣，告诉你在哪里。",
        "question": "你应该去哪里拿毛衣？",
        "options": [
          {
            "text": "书包",
            "value": "correct"
          },
          {
            "text": "床上",
            "value": "w1"
          },
          {
            "text": "椅子下",
            "value": "w2"
          },
          {
            "text": "柜子里",
            "value": "w3"
          }
        ],
        "correct": "correct",
        "chinese": "你的毛衣在你的书包里！"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "Where is my sweater?",
          "Is it on your bed?",
          "No, it isn't."
        ],
        "chinese": "把找毛衣对话排好！",
        "chineseHint": "我的毛衣在哪？ / 在你床上吗？ / 不，不是。"
      },
      {
        "type": "sentence_sequence",
        "sentences": [
          "Is it under your chair?",
          "No, it isn't.",
          "It's in your schoolbag!"
        ],
        "chinese": "把对话排好顺序！",
        "chineseHint": "在椅子下面吗？ / 不，不是。 / 在你书包里！"
      },
      {
        "type": "word_match",
        "word": "bed",
        "options": [
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          },
          {
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "bed",
        "chinese": "bed"
      },
      {
        "type": "word_match",
        "word": "chair",
        "options": [
          {
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "chair"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "wrong1"
          },
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "wrong2"
          }
        ],
        "correct": "chair",
        "chinese": "chair"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "prompt": "毛衣的首字母是？",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "options": [
          "c",
          "s",
          "w",
          "j"
        ],
        "correct": 1,
        "chinese": "毛衣",
        "word": "毛衣"
      },
      {
        "type": "pinyin_fill",
        "hint": "b_d",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "options": [
          "e",
          "a",
          "o",
          "i"
        ],
        "correct": 0,
        "chinese": "床"
      },
      {
        "type": "pinyin_fill",
        "hint": "ch_ir",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "options": [
          "a",
          "e",
          "o",
          "i"
        ],
        "correct": 0,
        "chinese": "椅子"
      },
      {
        "type": "fill_blank",
        "prompt": "Where is my _____, Mom?",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "options": [
          "jacket",
          "sweater",
          "shirt",
          "skirt"
        ],
        "correct": 1,
        "chinese": "妈妈，我的毛衣在哪里？"
      },
      {
        "type": "word_puzzle",
        "hint": "w_ere",
        "word": "where",
        "options": [
          "p",
          "j",
          "i",
          "h"
        ],
        "correct": 3,
        "chinese": "where"
      },
      {
        "type": "word_puzzle",
        "hint": "s_eater",
        "word": "sweater",
        "options": [
          "h",
          "n",
          "k",
          "w"
        ],
        "correct": 3,
        "chinese": "sweater"
      },
      {
        "type": "word_puzzle",
        "hint": "u_der",
        "word": "under",
        "options": [
          "p",
          "n",
          "q",
          "r"
        ],
        "correct": 1,
        "chinese": "under"
      },
      {
        "type": "fill_blank",
        "prompt": "Where is my _____?",
        "options": [
          "under",
          "sweater",
          "where",
          "bed"
        ],
        "correct": 1,
        "chinese": "Where is my sweater?"
      },
      {
        "type": "fill_blank",
        "prompt": "Is it on your _____?",
        "options": [
          "under",
          "where",
          "bed",
          "sweater"
        ],
        "correct": 2,
        "chinese": "Is it on your bed?"
      }
    ],
    "practice": [
      {
        "type": "sentence_order",
        "chinese": "妈妈，我的毛衣在哪里？",
        "words": [
          "Where",
          "is",
          "my",
          "sweater",
          "Mom"
        ],
        "scrambled": [
          "sweater",
          "Where",
          "Mom",
          "my",
          "is"
        ],
        "chineseWords": [
          "妈妈",
          "我的",
          "毛衣",
          "在哪里"
        ],
        "chineseScrambled": [
          "毛衣",
          "在哪里",
          "妈妈",
          "我的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它在你的床上吗？",
        "words": [
          "Is",
          "it",
          "on",
          "your",
          "bed"
        ],
        "scrambled": [
          "bed",
          "Is",
          "your",
          "it",
          "on"
        ],
        "chineseWords": [
          "它",
          "在",
          "你的",
          "床上",
          "吗"
        ],
        "chineseScrambled": [
          "床上",
          "吗",
          "它",
          "你的",
          "在"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "不，不在。",
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
          "不在"
        ],
        "chineseScrambled": [
          "不在",
          "不"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "它在你的椅子下面吗？",
        "words": [
          "Is",
          "it",
          "under",
          "your",
          "chair"
        ],
        "scrambled": [
          "chair",
          "Is",
          "under",
          "it",
          "your"
        ],
        "chineseWords": [
          "它",
          "在",
          "你的",
          "椅子",
          "下面",
          "吗"
        ],
        "chineseScrambled": [
          "椅子",
          "吗",
          "它",
          "下面",
          "在",
          "你的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "亲爱的，请把你的衣服收好。",
        "words": [
          "Dear",
          "put",
          "away",
          "your",
          "clothes",
          "please"
        ],
        "scrambled": [
          "clothes",
          "Dear",
          "please",
          "put",
          "your",
          "away"
        ],
        "chineseWords": [
          "亲爱的",
          "请",
          "把",
          "你的",
          "衣服",
          "收好"
        ],
        "chineseScrambled": [
          "衣服",
          "收好",
          "亲爱的",
          "请",
          "你的",
          "把"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "好的，妈妈。",
        "words": [
          "Okay",
          "Mom"
        ],
        "scrambled": [
          "Mom",
          "Okay"
        ],
        "chineseWords": [
          "好的",
          "妈妈"
        ],
        "chineseScrambled": [
          "妈妈",
          "好的"
        ]
      },
      {
        "type": "sentence_order",
        "chinese": "哦，非常感谢。",
        "words": [
          "Oh",
          "thank",
          "you",
          "very",
          "much"
        ],
        "scrambled": [
          "very",
          "Oh",
          "much",
          "thank",
          "you"
        ],
        "chineseWords": [
          "哦",
          "非常",
          "感谢"
        ],
        "chineseScrambled": [
          "感谢",
          "哦",
          "非常"
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
        "chinese": "看！",
        "words": [
          "Look"
        ],
        "scrambled": [
          "Look"
        ],
        "chineseWords": [
          "看"
        ],
        "chineseScrambled": [
          "看"
        ]
      },
      {
        "type": "fill_blank",
        "prompt": "Where is my _____, Mom?",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "options": [
          "jacket",
          "sweater",
          "shirt",
          "skirt"
        ],
        "correct": 1,
        "chinese": "妈妈，我的毛衣在哪里？"
      },
      {
        "type": "fill_blank",
        "prompt": "Is it _____ your bed?",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "options": [
          "in",
          "on",
          "under",
          "at"
        ],
        "correct": 1,
        "chinese": "它在你的床上吗？"
      },
      {
        "type": "fill_blank",
        "prompt": "Is it _____ your chair?",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "options": [
          "on",
          "in",
          "under",
          "at"
        ],
        "correct": 2,
        "chinese": "它在你的椅子下面吗？"
      },
      {
        "type": "fill_blank",
        "prompt": "Your sweater is _____ your schoolbag!",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "options": [
          "on",
          "under",
          "in",
          "at"
        ],
        "correct": 2,
        "chinese": "你的毛衣在你的书包里！"
      },
      {
        "type": "fill_blank",
        "prompt": "Dear, put _____ your clothes, please.",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "options": [
          "on",
          "away",
          "in",
          "up"
        ],
        "correct": 1,
        "chinese": "亲爱的，请把你的衣服收好。"
      },
      {
        "type": "word_puzzle",
        "hint": "wh_re",
        "word": "where",
        "options": [
          "c",
          "e",
          "q",
          "r"
        ],
        "correct": 1,
        "chinese": "where"
      },
      {
        "type": "word_puzzle",
        "hint": "swe_ter",
        "word": "sweater",
        "options": [
          "d",
          "c",
          "m",
          "a"
        ],
        "correct": 3,
        "chinese": "sweater"
      },
      {
        "type": "word_puzzle",
        "hint": "un_er",
        "word": "under",
        "options": [
          "n",
          "d",
          "p",
          "x"
        ],
        "correct": 1,
        "chinese": "under"
      },
      {
        "type": "fill_blank",
        "prompt": "Where is my _____?",
        "options": [
          "under",
          "where",
          "sweater",
          "bed"
        ],
        "correct": 2,
        "chinese": "Where is my sweater?"
      },
      {
        "type": "fill_blank",
        "prompt": "Is it on your _____?",
        "options": [
          "bed",
          "where",
          "sweater",
          "under"
        ],
        "correct": 0,
        "chinese": "Is it on your bed?"
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "word": "sweater",
        "chinese": "毛衣",
        "expected": "sweater"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "word": "bed",
        "chinese": "床",
        "expected": "bed"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "word": "chair",
        "chinese": "椅子",
        "expected": "chair"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "word": "schoolbag",
        "chinese": "书包",
        "expected": "schoolbag"
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
        "audio": "sweater",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shorts.png\" width=\"80\">"
        ],
        "correct": 1,
        "chinese": "毛衣"
      },
      {
        "type": "speak_select",
        "audio": "bed",
        "options": [
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">"
        ],
        "correct": 2,
        "chinese": "床"
      },
      {
        "type": "repeat_sentence",
        "word": "Where is my sweater, Mom?",
        "chinese": "妈妈，我的毛衣在哪里？",
        "expected": "Where is my sweater, Mom?"
      },
      {
        "type": "repeat_sentence",
        "word": "Is it on your bed?",
        "chinese": "它在你的床上吗？",
        "expected": "Is it on your bed?"
      },
      {
        "type": "repeat_sentence",
        "word": "No, it isn't.",
        "chinese": "不，不在。",
        "expected": "No, it isn't."
      }
    ],
    "practice": [
      {
        "type": "repeat_sentence",
        "word": "Where is my sweater, Mom?",
        "chinese": "妈妈，我的毛衣在哪里？",
        "expected": "Where is my sweater, Mom?"
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "word": "Is it on your bed?",
        "chinese": "它在你的床上吗？",
        "expected": "Is it on your bed?"
      },
      {
        "type": "repeat_sentence",
        "word": "No, it isn't.",
        "chinese": "不，不在。",
        "expected": "No, it isn't."
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "word": "Is it under your chair?",
        "chinese": "它在你的椅子下面吗？",
        "expected": "Is it under your chair?"
      },
      {
        "type": "repeat_sentence",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "word": "Look! Your sweater is in your schoolbag!",
        "chinese": "看！你的毛衣在你的书包里！",
        "expected": "Look! Your sweater is in your schoolbag!"
      },
      {
        "type": "repeat_sentence",
        "word": "Dear, put away your clothes, please.",
        "chinese": "亲爱的，请把你的衣服收好。",
        "expected": "Dear, put away your clothes, please."
      },
      {
        "type": "repeat_sentence",
        "word": "Okay, Mom.",
        "chinese": "好的，妈妈。",
        "expected": "Okay, Mom."
      },
      {
        "type": "repeat_sentence",
        "word": "Oh, thank you very much.",
        "chinese": "哦，非常感谢。",
        "expected": "Oh, thank you very much."
      },
      {
        "type": "repeat_sentence",
        "word": "You're welcome.",
        "chinese": "不客气。",
        "expected": "You're welcome."
      },
      {
        "type": "repeat_sentence",
        "word": "Where is my sweater, Mom? Is it on your bed?",
        "chinese": "妈妈，我的毛衣在哪里？它在你的床上吗？",
        "expected": "Where is my sweater, Mom? Is it on your bed?"
      },
      {
        "type": "repeat_sentence",
        "word": "Is it under your chair? No, it isn't.",
        "chinese": "它在你的椅子下面吗？不，不在。",
        "expected": "Is it under your chair? No, it isn't."
      },
      {
        "type": "repeat_sentence",
        "word": "Look! Your sweater is in your schoolbag! Oh, thank you very much.",
        "chinese": "看！你的毛衣在你的书包里！哦，非常感谢。",
        "expected": "Look! Your sweater is in your schoolbag! Oh, thank you very much."
      },
      {
        "type": "repeat_sentence",
        "word": "Dear, put away your clothes, please. Okay, Mom.",
        "chinese": "亲爱的，请把你的衣服收好。好的，妈妈。",
        "expected": "Dear, put away your clothes, please. Okay, Mom."
      },
      {
        "type": "repeat_sentence",
        "word": "Oh, thank you very much. You're welcome.",
        "chinese": "哦，非常感谢。不客气。",
        "expected": "Oh, thank you very much. You're welcome."
      },
      {
        "type": "repeat_sentence",
        "word": "Is it on your bed? No, it isn't.",
        "chinese": "它在你的床上吗？不，不在。",
        "expected": "Is it on your bed? No, it isn't."
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
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "word": "bed",
        "chinese": "床",
        "expected": "bed"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "word": "chair",
        "chinese": "椅子",
        "expected": "chair"
      },
      {
        "type": "repeat_word",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "word": "schoolbag",
        "chinese": "书包",
        "expected": "schoolbag"
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
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "word": "sweater",
        "chinese": "sweater"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "word": "bed",
        "chinese": "bed"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "word": "chair",
        "chinese": "chair"
      },
      {
        "type": "picture_speak",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "word": "schoolbag",
        "chinese": "schoolbag"
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
