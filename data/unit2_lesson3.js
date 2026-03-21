var unit2_lesson3 = {
  "id": "U2L3",
  "title": "Unit 2 Lesson 3: Where is my sweater?",
  "listening": {
    "pretest": [
      {
        "type": "listen_select",
        "audio": "sweater",
        "chinese": "这是sweater。",
        "options": [
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": 2,
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">"
      },
      {
        "type": "listen_tf",
        "audio": "bed",
        "chinese": "这是bed。",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": false,
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">"
      },
      {
        "type": "listen_select",
        "audio": "chair",
        "chinese": "这是chair。",
        "options": [
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": 0,
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">"
      },
      {
        "type": "listen_tf",
        "audio": "schoolbag",
        "chinese": "这是书包。",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": false,
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">"
      },
      {
        "type": "listen_select",
        "audio": "sweater",
        "chinese": "这是sweater。",
        "options": [
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 0,
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">"
      },
      {
        "type": "listen_tf",
        "audio": "bed",
        "chinese": "这是bed。",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": true,
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">"
      },
      {
        "type": "listen_tf",
        "audio": "chair",
        "chinese": "这是chair。",
        "options": [
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": true,
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">"
      },
      {
        "type": "listen_select",
        "audio": "schoolbag",
        "chinese": "这是书包。",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": 0,
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
      },
      {
        "type": "listen_tf",
        "audio": "sweater",
        "chinese": "这是sweater。",
        "options": [
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": false,
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">"
      },
      {
        "type": "listen_select",
        "audio": "bed",
        "chinese": "这是bed。",
        "options": [
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": 2,
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">"
      }
    ],
    "practice": [
      {
        "type": "scenario",
        "audio": "sweater",
        "chinese": "这是sweater。",
        "options": [
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": 2,
        "difficulty": "hard",
        "text": "Find the word",
        "scenario": "Where is my sweater?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "balloon_pop",
        "audio": "bed",
        "chinese": "这是bed。",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": 1,
        "difficulty": "hard",
        "text": "Find the word",
        "scenario": "Look! Your sweater is in your schoolbag!",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "duo_listen_select",
        "audio": "chair",
        "chinese": "这是chair。",
        "options": [
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": 0,
        "difficulty": "hard",
        "text": "Find the word",
        "scenario": "Look! Your sweater is in your schoolbag!",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "balloon_pop",
        "audio": "schoolbag",
        "chinese": "这是书包。",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": 0,
        "difficulty": "medium",
        "text": "Find the word",
        "scenario": "Look! Your sweater is in your schoolbag!",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "scenario",
        "audio": "sweater",
        "chinese": "这是sweater。",
        "options": [
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 0,
        "difficulty": "easy",
        "text": "Find the word",
        "scenario": "Look! Your sweater is in your schoolbag!",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "duo_listen_select",
        "audio": "bed",
        "chinese": "这是bed。",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": 3,
        "difficulty": "hard",
        "text": "Find the word",
        "scenario": "Look! Your sweater is in your schoolbag!",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "scenario",
        "audio": "chair",
        "chinese": "这是chair。",
        "options": [
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": 3,
        "difficulty": "easy",
        "text": "Find the word",
        "scenario": "Where is my sweater?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "scenario",
        "audio": "schoolbag",
        "chinese": "这是书包。",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": 0,
        "difficulty": "hard",
        "text": "Find the word",
        "scenario": "Where is my sweater?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "scenario",
        "audio": "sweater",
        "chinese": "这是sweater。",
        "options": [
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 0,
        "difficulty": "easy",
        "text": "Find the word",
        "scenario": "Where is my sweater?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "duo_listen_select",
        "audio": "bed",
        "chinese": "这是bed。",
        "options": [
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": 2,
        "difficulty": "medium",
        "text": "Find the word",
        "scenario": "Where is my sweater?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "scenario",
        "audio": "chair",
        "chinese": "这是chair。",
        "options": [
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 2,
        "difficulty": "medium",
        "text": "Find the word",
        "scenario": "Where is my sweater?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "balloon_pop",
        "audio": "schoolbag",
        "chinese": "这是书包。",
        "options": [
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": 2,
        "difficulty": "medium",
        "text": "Find the word",
        "scenario": "Look! Your sweater is in your schoolbag!",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "word_match",
        "chinese": "我的sweater在哪里？",
        "word": "sweater",
        "sentence": "Where is my sweater?",
        "options": [
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          },
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
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
        "correct": "sweater"
      },
      {
        "type": "sentence_match",
        "chinese": "我穿了一件bed。",
        "word": "bed",
        "sentence": "I wear a bed.",
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
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "skirt"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          }
        ],
        "correct": "bed"
      },
      {
        "type": "sentence_match",
        "chinese": "我的sweater在哪里？",
        "word": "chair",
        "sentence": "Where is my sweater?",
        "options": [
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
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
          }
        ],
        "correct": "chair"
      },
      {
        "type": "word_match",
        "chinese": "我穿了一件书包。",
        "word": "schoolbag",
        "sentence": "I wear a schoolbag.",
        "options": [
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
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
          }
        ],
        "correct": "schoolbag"
      },
      {
        "type": "sentence_match",
        "chinese": "我穿了一件sweater。",
        "word": "sweater",
        "sentence": "I wear a sweater.",
        "options": [
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
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
            "text": "<img src=\"assets/images/dress.png\" width=\"80\">",
            "value": "dress"
          }
        ],
        "correct": "sweater"
      },
      {
        "type": "sentence_match",
        "chinese": "我穿了一件bed。",
        "word": "bed",
        "sentence": "I wear a bed.",
        "options": [
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          },
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "schoolbag"
          },
          {
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "chair"
          }
        ],
        "correct": "bed"
      },
      {
        "type": "word_match",
        "chinese": "我的sweater在哪里？",
        "word": "chair",
        "sentence": "Where is my sweater?",
        "options": [
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
          },
          {
            "text": "<img src=\"assets/images/chair.png\" width=\"80\">",
            "value": "chair"
          }
        ],
        "correct": "chair"
      },
      {
        "type": "word_match",
        "chinese": "我穿了一件书包。",
        "word": "schoolbag",
        "sentence": "I wear a schoolbag.",
        "options": [
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
        "chinese": "我的sweater在哪里？",
        "word": "sweater",
        "sentence": "Where is my sweater?",
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
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/t-shirt.png\" width=\"80\">",
            "value": "t-shirt"
          }
        ],
        "correct": "sweater"
      },
      {
        "type": "word_match",
        "chinese": "我的sweater在哪里？",
        "word": "bed",
        "sentence": "Where is my sweater?",
        "options": [
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
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
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          }
        ],
        "correct": "bed"
      }
    ],
    "practice": [
      {
        "type": "duo_race",
        "chinese": "这是毛衣。",
        "word": "sweater",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "options": [
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          },
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
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
        "correct": 2,
        "difficulty": "hard"
      },
      {
        "type": "duo_race",
        "chinese": "这是床。",
        "word": "bed",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": 1,
        "difficulty": "hard"
      },
      {
        "type": "duo_race",
        "chinese": "我穿了一件chair。",
        "word": "chair",
        "sentence": "I wear a chair.",
        "options": [
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
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
          }
        ],
        "correct": 1,
        "difficulty": "hard"
      },
      {
        "type": "word_match",
        "chinese": "这是书包。",
        "word": "schoolbag",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "options": [
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
          },
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
          }
        ],
        "correct": 0,
        "difficulty": "easy"
      },
      {
        "type": "duo_race",
        "chinese": "这是毛衣。",
        "word": "sweater",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "options": [
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 0,
        "difficulty": "hard"
      },
      {
        "type": "word_match",
        "chinese": "这是床。",
        "word": "bed",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": 3,
        "difficulty": "easy"
      },
      {
        "type": "word_match",
        "chinese": "这是椅子。",
        "word": "chair",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "options": [
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": 3,
        "difficulty": "hard"
      },
      {
        "type": "sentence_match",
        "chinese": "这是书包。",
        "word": "schoolbag",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">"
        ],
        "correct": "schoolbag",
        "difficulty": "medium"
      },
      {
        "type": "duo_race",
        "chinese": "这是毛衣。",
        "word": "sweater",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "options": [
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 0,
        "difficulty": "easy"
      },
      {
        "type": "sentence_match",
        "chinese": "我穿了一件bed。",
        "word": "bed",
        "sentence": "I wear a bed.",
        "options": [
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
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
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          }
        ],
        "correct": 2,
        "difficulty": "hard"
      },
      {
        "type": "word_match",
        "chinese": "我穿了一件chair。",
        "word": "chair",
        "sentence": "I wear a chair.",
        "options": [
          {
            "text": "<img src=\"assets/images/bed.png\" width=\"80\">",
            "value": "bed"
          },
          {
            "text": "<img src=\"assets/images/sweater.png\" width=\"80\">",
            "value": "sweater"
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
        "correct": 2,
        "difficulty": "hard"
      },
      {
        "type": "duo_race",
        "chinese": "这是书包。",
        "word": "schoolbag",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "options": [
          "<img src=\"assets/images/chair.png\" width=\"80\">",
          "<img src=\"assets/images/sweater.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/bed.png\" width=\"80\">"
        ],
        "correct": 2,
        "difficulty": "easy"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "letter_select",
        "word": "sweater",
        "chinese": "这是sweater。",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "display": "s_eater",
        "options": [
          "w",
          "x",
          "y",
          "z"
        ],
        "correct": "w"
      },
      {
        "type": "letter_select",
        "word": "bed",
        "chinese": "这是bed。",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "display": "_ed",
        "options": [
          "c",
          "e",
          "d",
          "b"
        ],
        "correct": "b"
      },
      {
        "type": "word_spell",
        "word": "chair",
        "chinese": "这是chair。",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "display": "c_air",
        "options": [
          "j",
          "k",
          "h",
          "i"
        ],
        "correct": "h"
      },
      {
        "type": "letter_select",
        "word": "schoolbag",
        "chinese": "这是书包。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "display": "sch_olbag",
        "options": [
          "r",
          "o",
          "q",
          "p"
        ],
        "correct": "o"
      },
      {
        "type": "letter_select",
        "word": "sweater",
        "chinese": "这是sweater。",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "display": "s_eater",
        "options": [
          "x",
          "y",
          "w",
          "z"
        ],
        "correct": "w"
      },
      {
        "type": "letter_select",
        "word": "bed",
        "chinese": "这是bed。",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "display": "be_",
        "options": [
          "d",
          "g",
          "f",
          "e"
        ],
        "correct": "d"
      },
      {
        "type": "letter_select",
        "word": "chair",
        "chinese": "这是chair。",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "display": "_hair",
        "options": [
          "c",
          "f",
          "e",
          "d"
        ],
        "correct": "c"
      },
      {
        "type": "letter_select",
        "word": "schoolbag",
        "chinese": "这是书包。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "display": "schoo_bag",
        "options": [
          "l",
          "n",
          "m",
          "o"
        ],
        "correct": "l"
      },
      {
        "type": "letter_select",
        "word": "sweater",
        "chinese": "这是sweater。",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "display": "_weater",
        "options": [
          "t",
          "v",
          "s",
          "u"
        ],
        "correct": "s"
      },
      {
        "type": "letter_select",
        "word": "bed",
        "chinese": "这是bed。",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "display": "b_d",
        "options": [
          "g",
          "h",
          "e",
          "f"
        ],
        "correct": "e"
      }
    ],
    "practice": [
      {
        "type": "duo_spell",
        "word": "sweater",
        "chinese": "这是sweater。",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "display": "s_eater",
        "options": [
          "w",
          "x",
          "y",
          "z"
        ],
        "correct": "w",
        "difficulty": "medium",
        "parts": [
          "swe",
          "ater"
        ]
      },
      {
        "type": "duo_spell",
        "word": "bed",
        "chinese": "这是bed。",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "display": "_ed",
        "options": [
          "c",
          "e",
          "d",
          "b"
        ],
        "correct": "b",
        "difficulty": "easy",
        "parts": [
          "b",
          "ed"
        ]
      },
      {
        "type": "duo_spell",
        "word": "chair",
        "chinese": "这是chair。",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "display": "c_air",
        "options": [
          "j",
          "k",
          "h",
          "i"
        ],
        "correct": "h",
        "difficulty": "hard",
        "parts": [
          "ch",
          "air"
        ]
      },
      {
        "type": "duo_spell",
        "word": "schoolbag",
        "chinese": "这是书包。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "display": "sch_olbag",
        "options": [
          "r",
          "o",
          "q",
          "p"
        ],
        "correct": "o",
        "difficulty": "hard",
        "parts": [
          "scho",
          "olbag"
        ]
      },
      {
        "type": "letter_select",
        "word": "sweater",
        "chinese": "这是sweater。",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "display": "s_eater",
        "options": [
          "x",
          "y",
          "w",
          "z"
        ],
        "correct": "w",
        "difficulty": "easy",
        "parts": [
          "swe",
          "ater"
        ]
      },
      {
        "type": "duo_spell",
        "word": "bed",
        "chinese": "这是bed。",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "display": "be_",
        "options": [
          "d",
          "g",
          "f",
          "e"
        ],
        "correct": "d",
        "difficulty": "hard",
        "parts": [
          "b",
          "ed"
        ]
      },
      {
        "type": "letter_select",
        "word": "chair",
        "chinese": "这是chair。",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "display": "_hair",
        "options": [
          "c",
          "f",
          "e",
          "d"
        ],
        "correct": "c",
        "difficulty": "medium",
        "parts": [
          "ch",
          "air"
        ]
      },
      {
        "type": "duo_spell",
        "word": "schoolbag",
        "chinese": "这是书包。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "display": "schoo_bag",
        "options": [
          "l",
          "n",
          "m",
          "o"
        ],
        "correct": "l",
        "difficulty": "medium",
        "parts": [
          "scho",
          "olbag"
        ]
      },
      {
        "type": "duo_spell",
        "word": "sweater",
        "chinese": "这是sweater。",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "display": "_weater",
        "options": [
          "t",
          "v",
          "s",
          "u"
        ],
        "correct": "s",
        "difficulty": "hard",
        "parts": [
          "swe",
          "ater"
        ]
      },
      {
        "type": "duo_spell",
        "word": "bed",
        "chinese": "这是bed。",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "display": "b_d",
        "options": [
          "g",
          "h",
          "e",
          "f"
        ],
        "correct": "e",
        "difficulty": "easy",
        "parts": [
          "b",
          "ed"
        ]
      },
      {
        "type": "duo_spell",
        "word": "chair",
        "chinese": "这是chair。",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "display": "_hair",
        "options": [
          "c",
          "d",
          "f",
          "e"
        ],
        "correct": "c",
        "difficulty": "medium",
        "parts": [
          "ch",
          "air"
        ]
      },
      {
        "type": "letter_select",
        "word": "schoolbag",
        "chinese": "这是书包。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "display": "sch_olbag",
        "options": [
          "r",
          "p",
          "o",
          "q"
        ],
        "correct": "o",
        "difficulty": "medium",
        "parts": [
          "scho",
          "olbag"
        ]
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "read_word",
        "word": "sweater",
        "chinese": "我的sweater在哪里？",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "sentence": "Where is my sweater?"
      },
      {
        "type": "read_word",
        "word": "bed",
        "chinese": "我喜欢bed。",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "sentence": "I like bed."
      },
      {
        "type": "shadowing",
        "word": "chair",
        "chinese": "我喜欢chair。",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "sentence": "I like chair."
      },
      {
        "type": "read_word",
        "word": "schoolbag",
        "chinese": "我的sweater在哪里？",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "sentence": "Where is my sweater?"
      },
      {
        "type": "shadowing",
        "word": "sweater",
        "chinese": "我喜欢sweater。",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "sentence": "I like sweater."
      },
      {
        "type": "read_word",
        "word": "bed",
        "chinese": "我喜欢bed。",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "sentence": "I like bed."
      },
      {
        "type": "shadowing",
        "word": "chair",
        "chinese": "我的sweater在哪里？",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "sentence": "Where is my sweater?"
      },
      {
        "type": "shadowing",
        "word": "schoolbag",
        "chinese": "我的sweater在哪里？",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "sentence": "Where is my sweater?"
      },
      {
        "type": "read_word",
        "word": "sweater",
        "chinese": "我的sweater在哪里？",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "sentence": "Where is my sweater?"
      },
      {
        "type": "shadowing",
        "word": "bed",
        "chinese": "我喜欢bed。",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "sentence": "I like bed."
      }
    ],
    "practice": [
      {
        "type": "roleplay",
        "word": "sweater",
        "chinese": "这是一只sweater。",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "sentence": "This is a sweater.",
        "difficulty": "hard"
      },
      {
        "type": "debate",
        "word": "bed",
        "chinese": "这是床。",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "difficulty": "easy"
      },
      {
        "type": "debate",
        "word": "chair",
        "chinese": "这是一只chair。",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "sentence": "This is a chair.",
        "difficulty": "medium"
      },
      {
        "type": "roleplay",
        "word": "schoolbag",
        "chinese": "这是一只书包。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "sentence": "This is a schoolbag.",
        "difficulty": "medium"
      },
      {
        "type": "read_word",
        "word": "sweater",
        "chinese": "这是一只sweater。",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "sentence": "This is a sweater.",
        "difficulty": "medium"
      },
      {
        "type": "read_word",
        "word": "bed",
        "chinese": "这是一只bed。",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "sentence": "This is a bed.",
        "difficulty": "easy"
      },
      {
        "type": "roleplay",
        "word": "chair",
        "chinese": "这是一只chair。",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "sentence": "This is a chair.",
        "difficulty": "hard"
      },
      {
        "type": "roleplay",
        "word": "schoolbag",
        "chinese": "这是书包。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "difficulty": "easy"
      },
      {
        "type": "shadowing",
        "word": "sweater",
        "chinese": "这是一只sweater。",
        "image": "<img src=\"assets/images/sweater.png\" width=\"80\">",
        "sentence": "This is a sweater.",
        "difficulty": "easy"
      },
      {
        "type": "shadowing",
        "word": "bed",
        "chinese": "这是床。",
        "image": "<img src=\"assets/images/bed.png\" width=\"80\">",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "difficulty": "easy"
      },
      {
        "type": "read_word",
        "word": "chair",
        "chinese": "这是一只chair。",
        "image": "<img src=\"assets/images/chair.png\" width=\"80\">",
        "sentence": "This is a chair.",
        "difficulty": "easy"
      },
      {
        "type": "read_word",
        "word": "schoolbag",
        "chinese": "这是书包。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "sentence": "Look! Your sweater is in your schoolbag!",
        "difficulty": "medium"
      }
    ]
  }
};
