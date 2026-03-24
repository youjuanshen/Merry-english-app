var unit2_lesson2 = {
  "id": "U2L2",
  "title": "Unit 2 Lesson 2: Whose shirt is this?",
  "listening": {
    "pretest": [
      {
        "type": "listen_tf",
        "audio": "shirt",
        "chinese": "这是衬衫。",
        "options": [
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": true,
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">"
      },
      {
        "type": "listen_tf",
        "audio": "jacket",
        "chinese": "这是夹克。",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">"
        ],
        "correct": false,
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
      },
      {
        "type": "listen_select",
        "audio": "whose",
        "chinese": "这是whose。",
        "options": [
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 1,
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">"
      },
      {
        "type": "listen_tf",
        "audio": "clothes",
        "chinese": "这是clothes。",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": false,
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">"
      },
      {
        "type": "listen_select",
        "audio": "shirt",
        "chinese": "这是衬衫。",
        "options": [
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 2,
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">"
      },
      {
        "type": "listen_tf",
        "audio": "jacket",
        "chinese": "这是夹克。",
        "options": [
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": false,
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">"
      },
      {
        "type": "listen_select",
        "audio": "whose",
        "chinese": "这是whose。",
        "options": [
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 2,
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
      },
      {
        "type": "listen_select",
        "audio": "clothes",
        "chinese": "这是clothes。",
        "options": [
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 2,
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">"
      },
      {
        "type": "listen_tf",
        "audio": "shirt",
        "chinese": "这是衬衫。",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": false,
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">"
      },
      {
        "type": "listen_select",
        "audio": "jacket",
        "chinese": "这是夹克。",
        "options": [
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 3,
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">"
      }
    ],
    "practice": [
      {
        "type": "scenario",
        "audio": "shirt",
        "chinese": "这是衬衫。",
        "options": [
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 0,
        "difficulty": "hard",
        "text": "Find the word",
        "scenario": "It's Yang Ming's shirt.",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "balloon_pop",
        "audio": "jacket",
        "chinese": "这是夹克。",
        "options": [
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">"
        ],
        "correct": 2,
        "difficulty": "easy",
        "text": "Find the word",
        "scenario": "Whose shirt is this?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "duo_listen_select",
        "audio": "whose",
        "chinese": "这是whose。",
        "options": [
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 2,
        "difficulty": "easy",
        "text": "Find the word",
        "scenario": "It's Yang Ming's shirt.",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "scenario",
        "audio": "clothes",
        "chinese": "这是clothes。",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 1,
        "difficulty": "easy",
        "text": "Find the word",
        "scenario": "Whose shirt is this?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "balloon_pop",
        "audio": "shirt",
        "chinese": "这是衬衫。",
        "options": [
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 2,
        "difficulty": "medium",
        "text": "Find the word",
        "scenario": "Whose shirt is this?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "listen_select",
        "audio": "jacket",
        "chinese": "这是夹克。",
        "options": [
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 1,
        "difficulty": "hard",
        "text": "Find the word",
        "scenario": "Whose shirt is this?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "scenario",
        "audio": "whose",
        "chinese": "这是whose。",
        "options": [
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 2,
        "difficulty": "easy",
        "text": "Find the word",
        "scenario": "Whose shirt is this?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "balloon_pop",
        "audio": "clothes",
        "chinese": "这是clothes。",
        "options": [
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 2,
        "difficulty": "hard",
        "text": "Find the word",
        "scenario": "It's Yang Ming's shirt.",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "listen_select",
        "audio": "shirt",
        "chinese": "这是衬衫。",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 1,
        "difficulty": "hard",
        "text": "Find the word",
        "scenario": "Whose shirt is this?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "duo_listen_select",
        "audio": "jacket",
        "chinese": "这是夹克。",
        "options": [
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 3,
        "difficulty": "hard",
        "text": "Find the word",
        "scenario": "It's Yang Ming's shirt.",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "balloon_pop",
        "audio": "whose",
        "chinese": "这是whose。",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 3,
        "difficulty": "hard",
        "text": "Find the word",
        "scenario": "Whose shirt is this?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "listen_select",
        "audio": "clothes",
        "chinese": "这是clothes。",
        "options": [
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 2,
        "difficulty": "hard",
        "text": "Find the word",
        "scenario": "Whose shirt is this?",
        "question": "What should we pick?",
        "feedback": "Great choice!"
      },
      {
        "type": "listen_select",
        "audio": "Yang Ming, this is your T-shirt.",
        "options": [
          "杨明，这是你的T恤。",
          "这是我的夹克。",
          "这是谁的衬衫？",
          "谢谢你。"
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
          "给你。"
        ],
        "correct": 1,
        "chinese": "这是我的夹克。"
      },
      {
        "type": "listen_select",
        "audio": "This is my shirt.",
        "options": [
          "这是我的衬衫。",
          "这是我的夹克。",
          "这是你的T恤。",
          "这是谁的衬衫？"
        ],
        "correct": 0,
        "chinese": "这是我的衬衫。"
      },
      {
        "type": "listen_select",
        "audio": "Whose jacket is this?",
        "options": [
          "这是谁的衬衫？",
          "这是我的夹克。",
          "这是谁的夹克？",
          "给你。谢谢。"
        ],
        "correct": 2,
        "chinese": "这是谁的夹克？"
      }
,
      {
        "type": "listen_select",
        "audio": "Is this your jacket? No, it isn't.",
        "options": ["这是你的夹克吗？不，不是。", "这是谁的衬衫？", "给你。谢谢。", "这是我的衬衫。"],
        "correct": 0,
        "chinese": "这是你的夹克吗？不，不是。"
      },
      {
        "type": "listen_select",
        "audio": "Here you are. Thank you. You're welcome.",
        "options": ["给你。谢谢。不客气。", "这是谁的衬衫？", "这是我的夹克。", "不，不是。"],
        "correct": 0,
        "chinese": "给你。谢谢。不客气。"
      }
    ]
  },
  "reading": {
    "pretest": [
      {
        "type": "sentence_match",
        "chinese": "我穿了一件衬衫。",
        "word": "shirt",
        "sentence": "I wear a shirt.",
        "options": [
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "whose"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "clothes"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          }
        ],
        "correct": "shirt"
      },
      {
        "type": "word_match",
        "chinese": "我穿了一件夹克。",
        "word": "jacket",
        "sentence": "I wear a jacket.",
        "options": [
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "whose"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "clothes"
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
        "chinese": "这是谁的。",
        "word": "whose",
        "sentence": "Whose shirt is this?",
        "options": [
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "whose"
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
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "clothes"
          }
        ],
        "correct": "whose"
      },
      {
        "type": "word_match",
        "chinese": "这是你的clothes吗？",
        "word": "clothes",
        "sentence": "Is this your clothes?",
        "options": [
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "clothes"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "whose"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          }
        ],
        "correct": "clothes"
      },
      {
        "type": "word_match",
        "chinese": "我穿了一件衬衫。",
        "word": "shirt",
        "sentence": "I wear a shirt.",
        "options": [
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "clothes"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "whose"
          },
          {
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "dress"
          },
          {
            "text": "<img src=\"assets/images/shorts.png\" width=\"80\">",
            "value": "shorts"
          }
        ],
        "correct": "shirt"
      },
      {
        "type": "sentence_match",
        "chinese": "我穿了一件夹克。",
        "word": "jacket",
        "sentence": "I wear a jacket.",
        "options": [
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "whose"
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
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "dress"
          }
        ],
        "correct": "jacket"
      },
      {
        "type": "word_match",
        "chinese": "这是你的whose吗？",
        "word": "whose",
        "sentence": "Is this your whose?",
        "options": [
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "clothes"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "schoolbag"
          },
          {
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "skirt"
          }
        ],
        "correct": "whose"
      },
      {
        "type": "sentence_match",
        "chinese": "这是你的clothes吗？",
        "word": "clothes",
        "sentence": "Is this your clothes?",
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
            "text": "<img src=\"assets/images/t-shirt.png\" width=\"80\">",
            "value": "t-shirt"
          },
          {
            "text": "<img src=\"assets/images/shorts.png\" width=\"80\">",
            "value": "shorts"
          }
        ],
        "correct": "clothes"
      },
      {
        "type": "word_match",
        "chinese": "这是衬衫。",
        "word": "shirt",
        "sentence": "Whose shirt is this?",
        "options": [
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "clothes"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "whose"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          }
        ],
        "correct": "shirt"
      },
      {
        "type": "word_match",
        "chinese": "我穿了一件夹克。",
        "word": "jacket",
        "sentence": "I wear a jacket.",
        "options": [
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "clothes"
          },
          {
            "text": "<img src=\"assets/images/t-shirt.png\" width=\"80\">",
            "value": "t-shirt"
          },
          {
            "text": "<img src=\"assets/images/skirt.png\" width=\"80\">",
            "value": "skirt"
          }
        ],
        "correct": "jacket"
      }
    ],
    "practice": [
      {
        "type": "sentence_match",
        "chinese": "我穿了一件衬衫。",
        "word": "shirt",
        "sentence": "I wear a shirt.",
        "options": [
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "whose"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "clothes"
          },
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          }
        ],
        "correct": "shirt",
        "difficulty": "hard"
      },
      {
        "type": "sentence_match",
        "chinese": "我穿了一件夹克。",
        "word": "jacket",
        "sentence": "I wear a jacket.",
        "options": [
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "whose"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "clothes"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          }
        ],
        "correct": 2,
        "difficulty": "easy"
      },
      {
        "type": "sentence_match",
        "chinese": "这是你的whose吗？",
        "word": "whose",
        "sentence": "Is this your whose?",
        "options": [
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": "whose",
        "difficulty": "easy"
      },
      {
        "type": "sentence_match",
        "chinese": "这是你的clothes吗？",
        "word": "clothes",
        "sentence": "Is this your clothes?",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": "clothes",
        "difficulty": "easy"
      },
      {
        "type": "duo_race",
        "chinese": "我穿了一件衬衫。",
        "word": "shirt",
        "sentence": "I wear a shirt.",
        "options": [
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 0,
        "difficulty": "medium"
      },
      {
        "type": "duo_race",
        "chinese": "我穿了一件夹克。",
        "word": "jacket",
        "sentence": "I wear a jacket.",
        "options": [
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "whose"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "clothes"
          }
        ],
        "correct": 0,
        "difficulty": "hard"
      },
      {
        "type": "word_match",
        "chinese": "这是你的whose吗？",
        "word": "whose",
        "sentence": "Is this your whose?",
        "options": [
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": "whose",
        "difficulty": "easy"
      },
      {
        "type": "word_match",
        "chinese": "这是杨明的衬衫。",
        "word": "clothes",
        "sentence": "It's Yang Ming's shirt.",
        "options": [
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "clothes"
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
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "whose"
          }
        ],
        "correct": 2,
        "difficulty": "hard"
      },
      {
        "type": "duo_race",
        "chinese": "这是杨明的衬衫。",
        "word": "shirt",
        "sentence": "It's Yang Ming's shirt.",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 1,
        "difficulty": "easy"
      },
      {
        "type": "duo_race",
        "chinese": "这是杨明的衬衫。",
        "word": "jacket",
        "sentence": "It's Yang Ming's shirt.",
        "options": [
          {
            "text": "<img src=\"assets/images/jacket.png\" width=\"80\">",
            "value": "jacket"
          },
          {
            "text": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
            "value": "clothes"
          },
          {
            "text": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
            "value": "whose"
          },
          {
            "text": "<img src=\"assets/images/shirt.png\" width=\"80\">",
            "value": "shirt"
          }
        ],
        "correct": 0,
        "difficulty": "easy"
      },
      {
        "type": "sentence_match",
        "chinese": "这是你的whose吗？",
        "word": "whose",
        "sentence": "Is this your whose?",
        "options": [
          "<img src=\"assets/images/jacket.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">"
        ],
        "correct": 3,
        "difficulty": "hard"
      },
      {
        "type": "word_match",
        "chinese": "这是杨明的衬衫。",
        "word": "clothes",
        "sentence": "It's Yang Ming's shirt.",
        "options": [
          "<img src=\"assets/images/shirt.png\" width=\"80\">",
          "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
          "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
          "<img src=\"assets/images/jacket.png\" width=\"80\">"
        ],
        "correct": 2,
        "difficulty": "easy"
      },
      {
        "type": "sentence_match",
        "sentence": "Yang Ming, this is your T-shirt.",
        "options": [
          {"text": "杨明，这是你的T恤。", "value": "correct"},
          {"text": "这是我的夹克。", "value": "wrong1"},
          {"text": "这是谁的衬衫？", "value": "wrong2"},
          {"text": "给你。谢谢。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "This is my shirt. This is my jacket.",
        "options": [
          {"text": "这是我的衬衫。这是我的夹克。", "value": "correct"},
          {"text": "这是谁的衬衫？", "value": "wrong1"},
          {"text": "给你。谢谢。", "value": "wrong2"},
          {"text": "这是你的T恤。", "value": "wrong3"}
        ],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Whose jacket is this?",
        "options": [
          {"text": "这是谁的夹克？", "value": "correct"},
          {"text": "这是我的衬衫。", "value": "wrong1"},
          {"text": "这是你的T恤。", "value": "wrong2"},
          {"text": "不，不是。", "value": "wrong3"}
        ],
        "correct": "correct"
      }
,
      {
        "type": "sentence_match",
        "sentence": "Is this your jacket?",
        "options": [{"text": "这是你的夹克吗？", "value": "correct"}, {"text": "这是谁的衬衫？", "value": "wrong1"}, {"text": "给你。", "value": "wrong2"}, {"text": "这是我的夹克。", "value": "wrong3"}],
        "correct": "correct"
      },
      {
        "type": "sentence_match",
        "sentence": "Here you are. Thank you.",
        "options": [{"text": "给你。谢谢。", "value": "correct"}, {"text": "不客气。", "value": "wrong1"}, {"text": "这是你的夹克吗？", "value": "wrong2"}, {"text": "这是我的衬衫。", "value": "wrong3"}],
        "correct": "correct"
      }
,
      {
        "type": "sentence_match",
        "sentence": "You're welcome.",
        "options": [
          {"text": "不客气。", "value": "correct"},
          {"text": "谢谢。", "value": "wrong1"},
          {"text": "给你。", "value": "wrong2"},
          {"text": "这是谁的衬衫？", "value": "wrong3"}
        ],
        "correct": "correct"
      }
    ]
  },
  "writing": {
    "pretest": [
      {
        "type": "word_spell",
        "word": "shirt",
        "chinese": "这是衬衫。",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "display": "shi_t",
        "options": [
          "r",
          "t",
          "u",
          "s"
        ],
        "correct": "r"
      },
      {
        "type": "letter_select",
        "word": "jacket",
        "chinese": "这是夹克。",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "display": "ja_ket",
        "options": [
          "c",
          "e",
          "f",
          "d"
        ],
        "correct": "c"
      },
      {
        "type": "word_spell",
        "word": "whose",
        "chinese": "这是whose。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "display": "whos_",
        "options": [
          "e",
          "g",
          "f",
          "h"
        ],
        "correct": "e"
      },
      {
        "type": "letter_select",
        "word": "clothes",
        "chinese": "这是clothes。",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "display": "clo_hes",
        "options": [
          "v",
          "t",
          "w",
          "u"
        ],
        "correct": "t"
      },
      {
        "type": "letter_select",
        "word": "shirt",
        "chinese": "这是衬衫。",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "display": "shir_",
        "options": [
          "v",
          "w",
          "t",
          "u"
        ],
        "correct": "t"
      },
      {
        "type": "letter_select",
        "word": "jacket",
        "chinese": "这是夹克。",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "display": "jac_et",
        "options": [
          "m",
          "k",
          "l",
          "n"
        ],
        "correct": "k"
      },
      {
        "type": "word_spell",
        "word": "whose",
        "chinese": "这是whose。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "display": "wh_se",
        "options": [
          "p",
          "o",
          "q",
          "r"
        ],
        "correct": "o"
      },
      {
        "type": "word_spell",
        "word": "clothes",
        "chinese": "这是clothes。",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "display": "_lothes",
        "options": [
          "d",
          "c",
          "e",
          "f"
        ],
        "correct": "c"
      },
      {
        "type": "letter_select",
        "word": "shirt",
        "chinese": "这是衬衫。",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "display": "s_irt",
        "options": [
          "h",
          "i",
          "k",
          "j"
        ],
        "correct": "h"
      },
      {
        "type": "word_spell",
        "word": "jacket",
        "chinese": "这是夹克。",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "display": "jacke_",
        "options": [
          "u",
          "v",
          "t",
          "w"
        ],
        "correct": "t"
      }
    ],
    "practice": [
      {
        "type": "duo_spell",
        "word": "shirt",
        "chinese": "这是衬衫。",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "display": "shi_t",
        "options": [
          "r",
          "t",
          "u",
          "s"
        ],
        "correct": "r",
        "difficulty": "easy",
        "parts": [
          "sh",
          "irt"
        ]
      },
      {
        "type": "letter_select",
        "word": "jacket",
        "chinese": "这是夹克。",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "display": "ja_ket",
        "options": [
          "c",
          "e",
          "f",
          "d"
        ],
        "correct": "c",
        "difficulty": "easy",
        "parts": [
          "jac",
          "ket"
        ]
      },
      {
        "type": "letter_select",
        "word": "whose",
        "chinese": "这是whose。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "display": "whos_",
        "options": [
          "e",
          "g",
          "f",
          "h"
        ],
        "correct": "e",
        "difficulty": "easy",
        "parts": [
          "wh",
          "ose"
        ]
      },
      {
        "type": "word_spell",
        "word": "clothes",
        "chinese": "这是clothes。",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "display": "clo_hes",
        "options": [
          "v",
          "t",
          "w",
          "u"
        ],
        "correct": "t",
        "difficulty": "medium",
        "parts": [
          "clo",
          "thes"
        ]
      },
      {
        "type": "word_spell",
        "word": "shirt",
        "chinese": "这是衬衫。",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "display": "shir_",
        "options": [
          "v",
          "w",
          "t",
          "u"
        ],
        "correct": "t",
        "difficulty": "easy",
        "parts": [
          "sh",
          "irt"
        ]
      },
      {
        "type": "word_spell",
        "word": "jacket",
        "chinese": "这是夹克。",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "display": "jac_et",
        "options": [
          "m",
          "k",
          "l",
          "n"
        ],
        "correct": "k",
        "difficulty": "medium",
        "parts": [
          "jac",
          "ket"
        ]
      },
      {
        "type": "letter_select",
        "word": "whose",
        "chinese": "这是whose。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "display": "wh_se",
        "options": [
          "p",
          "o",
          "q",
          "r"
        ],
        "correct": "o",
        "difficulty": "hard",
        "parts": [
          "wh",
          "ose"
        ]
      },
      {
        "type": "duo_spell",
        "word": "clothes",
        "chinese": "这是clothes。",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "display": "_lothes",
        "options": [
          "d",
          "c",
          "e",
          "f"
        ],
        "correct": "c",
        "difficulty": "easy",
        "parts": [
          "clo",
          "thes"
        ]
      },
      {
        "type": "letter_select",
        "word": "shirt",
        "chinese": "这是衬衫。",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "display": "s_irt",
        "options": [
          "h",
          "i",
          "k",
          "j"
        ],
        "correct": "h",
        "difficulty": "medium",
        "parts": [
          "sh",
          "irt"
        ]
      },
      {
        "type": "letter_select",
        "word": "jacket",
        "chinese": "这是夹克。",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "display": "jacke_",
        "options": [
          "u",
          "v",
          "t",
          "w"
        ],
        "correct": "t",
        "difficulty": "medium",
        "parts": [
          "jac",
          "ket"
        ]
      },
      {
        "type": "word_spell",
        "word": "whose",
        "chinese": "这是whose。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "display": "whos_",
        "options": [
          "f",
          "h",
          "g",
          "e"
        ],
        "correct": "e",
        "difficulty": "hard",
        "parts": [
          "wh",
          "ose"
        ]
      },
      {
        "type": "letter_select",
        "word": "clothes",
        "chinese": "这是clothes。",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "display": "cloth_s",
        "options": [
          "h",
          "g",
          "e",
          "f"
        ],
        "correct": "e",
        "difficulty": "easy",
        "parts": [
          "clo",
          "thes"
        ]
      }
,
      {
        "type": "sentence_order",
        "chinese": "这是谁的衬衫？",
        "words": ["Whose", "shirt", "is", "this"],
        "scrambled": ["is", "shirt", "this", "Whose"],
        "chineseWords": ["这", "是", "谁的", "衬衫"],
        "chineseScrambled": ["是", "这", "谁的", "衬衫"]
      },
      {
        "type": "sentence_order",
        "chinese": "这是你的夹克吗？",
        "words": ["Is", "this", "your", "jacket"],
        "scrambled": ["this", "your", "jacket", "Is"],
        "chineseWords": ["这", "是", "你的", "夹克", "吗"],
        "chineseScrambled": ["吗", "是", "夹克", "你的", "这"]
      },
      {
        "type": "sentence_order",
        "chinese": "给你。",
        "words": ["Here", "you", "are"],
        "scrambled": ["are", "Here", "you"],
        "chineseWords": ["给", "你"],
        "chineseScrambled": ["你", "给"]
      },
      {
        "type": "sentence_order",
        "chinese": "谢谢。",
        "words": ["Thank", "you"],
        "scrambled": ["you", "Thank"],
        "chineseWords": ["谢谢"],
        "chineseScrambled": ["谢谢"]
      },
      {
        "type": "sentence_order",
        "chinese": "不客气。",
        "words": ["You're", "welcome"],
        "scrambled": ["welcome", "You're"],
        "chineseWords": ["不", "客气"],
        "chineseScrambled": ["客气", "不"]
      },
      {
        "type": "sentence_order",
        "chinese": "这是我的夹克。",
        "words": ["This", "is", "my", "jacket"],
        "scrambled": ["This", "is", "jacket", "my"],
        "chineseWords": ["这", "是", "我的", "夹克"],
        "chineseScrambled": ["我的", "是", "夹克", "这"]
      },
      {
        "type": "sentence_order",
        "chinese": "这是我的衬衫。",
        "words": ["This", "is", "my", "shirt"],
        "scrambled": ["my", "shirt", "is", "This"],
        "chineseWords": ["这", "是", "我的", "衬衫"],
        "chineseScrambled": ["这", "是", "衬衫", "我的"]
      }
,
      {
        "type": "sentence_order",
        "chinese": "这是谁的衬衫？",
        "words": ["Whose", "shirt", "is", "this"],
        "scrambled": ["shirt", "is", "this", "Whose"],
        "chineseWords": ["这", "是", "谁的", "衬衫"],
        "chineseScrambled": ["衬衫", "谁的", "是", "这"]
      },
      {
        "type": "sentence_order",
        "chinese": "这是你的夹克吗？",
        "words": ["Is", "this", "your", "jacket"],
        "scrambled": ["this", "your", "jacket", "Is"],
        "chineseWords": ["这", "是", "你的", "夹克吗"],
        "chineseScrambled": ["你的", "是", "这", "夹克吗"]
      },
      {
        "type": "sentence_order",
        "chinese": "给你。",
        "words": ["Here", "you", "are"],
        "scrambled": ["are", "you", "Here"],
        "chineseWords": ["给", "你"],
        "chineseScrambled": ["你", "给"]
      },
      {
        "type": "sentence_order",
        "chinese": "谢谢。",
        "words": ["Thank", "you"],
        "scrambled": ["you", "Thank"],
        "chineseWords": ["谢谢"],
        "chineseScrambled": ["谢谢"]
      },
      {
        "type": "sentence_order",
        "chinese": "不客气。",
        "words": ["You're", "welcome"],
        "scrambled": ["welcome", "You're"],
        "chineseWords": ["不", "客气"],
        "chineseScrambled": ["客气", "不"]
      }
,
      {
        "type": "sentence_order",
        "chinese": "这是谁的夹克？",
        "words": ["Whose", "jacket", "is", "this"],
        "scrambled": ["jacket", "is", "this", "Whose"],
        "chineseWords": ["这", "是", "谁的", "夹克"],
        "chineseScrambled": ["夹克", "这", "是", "谁的"]
      }
    ]
  },
  "speaking": {
    "pretest": [
      {
        "type": "read_word",
        "word": "shirt",
        "chinese": "这是衬衫。",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "sentence": "Whose shirt is this?"
      },
      {
        "type": "read_word",
        "word": "jacket",
        "chinese": "我喜欢夹克。",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "sentence": "I like jacket."
      },
      {
        "type": "read_word",
        "word": "whose",
        "chinese": "这是谁的。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "sentence": "Whose shirt is this?"
      },
      {
        "type": "read_word",
        "word": "clothes",
        "chinese": "这是衣服。",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "sentence": "Whose shirt is this?"
      },
      {
        "type": "read_word",
        "word": "shirt",
        "chinese": "我喜欢衬衫。",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "sentence": "I like shirt."
      },
      {
        "type": "read_word",
        "word": "jacket",
        "chinese": "这是夹克。",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "sentence": "Whose shirt is this?"
      },
      {
        "type": "shadowing",
        "word": "whose",
        "chinese": "我喜欢whose。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "sentence": "I like whose."
      },
      {
        "type": "shadowing",
        "word": "clothes",
        "chinese": "我喜欢clothes。",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "sentence": "I like clothes."
      },
      {
        "type": "shadowing",
        "word": "shirt",
        "chinese": "我喜欢衬衫。",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "sentence": "I like shirt."
      },
      {
        "type": "read_word",
        "word": "jacket",
        "chinese": "这是夹克。",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "sentence": "Whose shirt is this?"
      }
    ],
    "practice": [
      {
        "type": "shadowing",
        "word": "shirt",
        "chinese": "这是杨明的衬衫。",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "sentence": "It's Yang Ming's shirt.",
        "difficulty": "easy"
      },
      {
        "type": "roleplay",
        "word": "jacket",
        "chinese": "这是一只夹克。",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "sentence": "This is a jacket.",
        "difficulty": "easy"
      },
      {
        "type": "read_word",
        "word": "whose",
        "chinese": "这是杨明的衬衫。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "sentence": "It's Yang Ming's shirt.",
        "difficulty": "easy"
      },
      {
        "type": "shadowing",
        "word": "clothes",
        "chinese": "这是一只clothes。",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "sentence": "This is a clothes.",
        "difficulty": "medium"
      },
      {
        "type": "shadowing",
        "word": "shirt",
        "chinese": "这是一只衬衫。",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "sentence": "This is a shirt.",
        "difficulty": "easy"
      },
      {
        "type": "roleplay",
        "word": "jacket",
        "chinese": "这是杨明的衬衫。",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "sentence": "It's Yang Ming's shirt.",
        "difficulty": "medium"
      },
      {
        "type": "debate",
        "word": "whose",
        "chinese": "这是杨明的衬衫。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "sentence": "It's Yang Ming's shirt.",
        "difficulty": "easy"
      },
      {
        "type": "shadowing",
        "word": "clothes",
        "chinese": "这是杨明的衬衫。",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "sentence": "It's Yang Ming's shirt.",
        "difficulty": "medium"
      },
      {
        "type": "debate",
        "word": "shirt",
        "chinese": "这是一只衬衫。",
        "image": "<img src=\"assets/images/shirt.png\" width=\"80\">",
        "sentence": "This is a shirt.",
        "difficulty": "hard"
      },
      {
        "type": "read_word",
        "word": "jacket",
        "chinese": "这是一只夹克。",
        "image": "<img src=\"assets/images/jacket.png\" width=\"80\">",
        "sentence": "This is a jacket.",
        "difficulty": "hard"
      },
      {
        "type": "read_word",
        "word": "whose",
        "chinese": "这是杨明的衬衫。",
        "image": "<img src=\"assets/images/schoolbag.png\" width=\"80\">",
        "sentence": "It's Yang Ming's shirt.",
        "difficulty": "hard"
      },
      {
        "type": "read_word",
        "word": "clothes",
        "chinese": "这是一只clothes。",
        "image": "<img src=\"assets/images/T-shirt.png\" width=\"80\">",
        "sentence": "This is a clothes.",
        "difficulty": "hard"
      }
,
      {
        "type": "repeat_sentence",
        "word": "Is this your jacket? No, it isn't.",
        "chinese": "这是你的夹克吗？不，不是。",
        "expected": "Is this your jacket? No, it isn't."
      },
      {
        "type": "repeat_sentence",
        "word": "Here you are. Thank you.",
        "chinese": "给你。谢谢。",
        "expected": "Here you are. Thank you."
      },
      {
        "type": "repeat_sentence",
        "word": "You're welcome.",
        "chinese": "不客气。",
        "expected": "You're welcome."
      },
      {
        "type": "repeat_sentence",
        "word": "This is my jacket.",
        "chinese": "这是我的夹克。",
        "expected": "This is my jacket."
      },
      {
        "type": "repeat_sentence",
        "word": "This is my shirt.",
        "chinese": "这是我的衬衫。",
        "expected": "This is my shirt."
      },
      {
        "type": "repeat_sentence",
        "word": "Whose jacket is this?",
        "chinese": "这是谁的夹克？",
        "expected": "Whose jacket is this?"
      }
    ]
  }
};
