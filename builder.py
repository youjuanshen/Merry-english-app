import json
import random
import re
import os

lessons_config = [
    {
        "id": "U2L1",
        "title": "Unit 2 Lesson 1: What size do you wear?",
        "moduleObjectives": {
            "listening": ["能听懂衣服尺码及评价大小的表达", "根据录音选择对应的衣服图片"],
            "reading": ["能认读 T-shirt, size, big, small 等词句", "能将短语句子与服饰及动物特征图匹配"],
            "writing": ["能拼写常用衣物和形容词词汇", "补全What size... 句式"],
            "speaking": ["能朗读并对话询问衣服尺码", "能口头表达 It's too big/small"]
        },
        "vocab": [
            {"word": "T-shirt", "cn": "T恤", "img": "T-shirt"},
            {"word": "size", "cn": "尺码", "img": "shirt"},
            {"word": "do", "cn": "做/助动词", "img": "skirt"},
            {"word": "wear", "cn": "穿戴", "img": "jacket"}
        ],
        "sentences": [
            {"en": "What size do you wear?", "cn": "你穿多大码？"},
            {"en": "It's too big.", "cn": "它太大了。"}
        ]
    },
    {
        "id": "U2L2",
        "title": "Unit 2 Lesson 2: Whose shirt is this?",
        "moduleObjectives": {
            "listening": ["能听懂询问物品归属的表达", "能根据录音选择对应的衣物"],
            "reading": ["能认读 shirt, jacket 等词", "理解 Whose...is this? 含义"],
            "writing": ["能拼写 shirt, jacket 等单词", "会写物品归属短语"],
            "speaking": ["能用口语询问物品主人", "能礼貌表达感谢"]
        },
        "vocab": [
            {"word": "shirt", "cn": "衬衫", "img": "shirt"},
            {"word": "jacket", "cn": "夹克", "img": "jacket"},
            {"word": "whose", "cn": "谁的", "img": "schoolbag"},
            {"word": "clothes", "cn": "衣服", "img": "T-shirt"}
        ],
        "sentences": [
            {"en": "Whose shirt is this?", "cn": "这是谁的衬衫？"},
            {"en": "It's Yang Ming's shirt.", "cn": "它是杨明的衬衫。"}
        ]
    },
    {
        "id": "U2L3",
        "title": "Unit 2 Lesson 3: Where is my sweater?",
        "moduleObjectives": {
            "listening": ["能听懂表示位置的介词短语", "根据录音匹配房间陈设"],
            "reading": ["能认读 sweater, bed, chair, schoolbag等词", "能理解表示方位的句子"],
            "writing": ["能拼写房间家具及方位词", "能书写方位问答句子"],
            "speaking": ["能口头询问物品位置", "能用在/下/里描述位置"]
        },
        "vocab": [
            {"word": "sweater", "cn": "毛衣", "img": "sweater"},
            {"word": "bed", "cn": "床", "img": "bed"},
            {"word": "chair", "cn": "椅子", "img": "chair"},
            {"word": "schoolbag", "cn": "书包", "img": "schoolbag"}
        ],
        "sentences": [
            {"en": "Where is my sweater?", "cn": "我的毛衣在哪里？"},
            {"en": "Look! Your sweater is in your schoolbag!", "cn": "看！你的毛衣在书包里！"}
        ]
    },
    {
        "id": "U2L4",
        "title": "Unit 2 Lesson 4: Put on your sports shoes.",
        "moduleObjectives": {
            "listening": ["能听懂下达穿戴衣物的指令", "能听懂衣物搭配表达"],
            "reading": ["能认读 sports shoes, shorts, skirt等", "理解 Put on... 祈使句"],
            "writing": ["能拼写常见下装及鞋类单词", "能拼写简单的衣物名称"],
            "speaking": ["能发出穿衣服的指令", "能描述自己想要穿什么"]
        },
        "vocab": [
            {"word": "sports shoes", "cn": "运动鞋", "img": "sports_shoes"},
            {"word": "shorts", "cn": "短裤", "img": "shorts"},
            {"word": "skirt", "cn": "裙子", "img": "skirt"},
            {"word": "shoe", "cn": "鞋子", "img": "sports_shoes"}
        ],
        "sentences": [
            {"en": "Put on your sports shoes.", "cn": "穿上你的运动鞋。"},
            {"en": "I want my sports shoes, too.", "cn": "我也想要我的运动鞋。"}
        ]
    },
    {
        "id": "U3L1",
        "title": "Unit 3 Lesson 1: It's eleven o'clock in Beijing.",
        "moduleObjectives": {
            "listening": ["能听懂整点时间的英文表达", "能根据录音选择正确的时钟"],
            "reading": ["能认读 clock及数字11、12等", "能理解时区及时间差异"],
            "writing": ["能拼写 time, clock等基础时间词汇", "能根据钟面写出时间"],
            "speaking": ["能口头提问并回答时间", "能报出整点时间"]
        },
        "vocab": [
            {"word": "clock", "cn": "时钟", "img": "clock"},
            {"word": "eleven", "cn": "十一", "img": "clock_11"},
            {"word": "twelve", "cn": "十二", "img": "clock_12"},
            {"word": "o'clock", "cn": "点钟", "img": "clock"}
        ],
        "sentences": [
            {"en": "What's the time, Mom?", "cn": "几点了，妈妈？"},
            {"en": "It's eleven o'clock.", "cn": "十一点钟了。"}
        ]
    },
    {
        "id": "U3L2",
        "title": "Unit 3 Lesson 2: What's the time in New York?",
        "moduleObjectives": {
            "listening": ["能听懂带有地名的时间提问", "听懂现在进行时动作"],
            "reading": ["能认读 read, watch TV等动作词组", "能理解正在发生的行为讲述"],
            "writing": ["能拼写动作相关动词", "能写出现进行时的句子"],
            "speaking": ["能进行跨时区对话角色扮演", "能说出自己正在做的事"]
        },
        "vocab": [
            {"word": "read", "cn": "阅读", "img": "reading"},
            {"word": "watch TV", "cn": "看电视", "img": "watching_tv"},
            {"word": "kid", "cn": "小孩", "img": "baby"},
            {"word": "three", "cn": "三", "img": "clock_3"}
        ],
        "sentences": [
            {"en": "What's the time in New York?", "cn": "纽约现在几点？"},
            {"en": "I'm reading.", "cn": "我正在读书。"}
        ]
    },
    {
        "id": "U3L3",
        "title": "Unit 3 Lesson 3: It's five twenty.",
        "moduleObjectives": {
            "listening": ["能听懂非整点时间", "能听懂做饭、吃饭等日常动词"],
            "reading": ["认读 cook, dinner及十三到二十等数字", "区分各种正在进行的动作"],
            "writing": ["能拼写常用数字", "能用现在进行时造短句"],
            "speaking": ["能流利报出具体时分", "能回答 What are you doing?"]
        },
        "vocab": [
            {"word": "cook", "cn": "做饭", "img": "cooking"},
            {"word": "dinner", "cn": "晚餐", "img": "cooking"},
            {"word": "draw", "cn": "画画", "img": "drawing"},
            {"word": "twenty", "cn": "二十", "img": "clock"}
        ],
        "sentences": [
            {"en": "What are you doing?", "cn": "你在做什么？"},
            {"en": "I'm cooking.", "cn": "我在做饭。"}
        ]
    },
    {
        "id": "U3L4",
        "title": "Unit 3 Lesson 4: It's time to do my homework.",
        "moduleObjectives": {
            "listening": ["能听懂该做什么事的句型表达", "听懂如睡觉、做作业的指令"],
            "reading": ["能认读 homework, play等", "能理解 It's time to... 句型"],
            "writing": ["能拼写 homework 等词汇", "能根据时间表写动作安排"],
            "speaking": ["能用 It's time to... 提示他人", "能描述自己的作息"]
        },
        "vocab": [
            {"word": "homework", "cn": "作业", "img": "homework"},
            {"word": "sleep", "cn": "睡觉", "img": "sleeping"},
            {"word": "picture", "cn": "图片", "img": "drawing"},
            {"word": "play", "cn": "玩耍", "img": "dog"}
        ],
        "sentences": [
            {"en": "It's time to do my homework.", "cn": "该做作业了。"},
            {"en": "It's time to go to bed.", "cn": "该上床睡觉了。"}
        ]
    },
    {
        "id": "U4L1",
        "title": "Unit 4 Lesson 1: What do you like for breakfast?",
        "moduleObjectives": {
            "listening": ["能听懂早餐食物词汇", "听懂有关饥饿及喜好的询问"],
            "reading": ["能认读 milk, bread, egg, noodle等", "能理解对于喜好的问答语"],
            "writing": ["能拼写四种以上基础食物", "能补全早餐喜好句型"],
            "speaking": ["能口头说出自己喜欢的早餐", "能表达我饿了"]
        },
        "vocab": [
            {"word": "breakfast", "cn": "早餐", "img": "bread"},
            {"word": "hungry", "cn": "饥饿的", "img": "hamburger"},
            {"word": "milk", "cn": "牛奶", "img": "milk"},
            {"word": "about", "cn": "关于", "img": "egg"}
        ],
        "sentences": [
            {"en": "I'm hungry.", "cn": "我饿了。"},
            {"en": "What do you like for breakfast?", "cn": "你早饭喜欢吃什么？"}
        ]
    },
    {
        "id": "U4L2",
        "title": "Unit 4 Lesson 2: Do you want some apple juice?",
        "moduleObjectives": {
            "listening": ["能听懂饮料种类和午餐食物词汇", "能听懂别人对于点单的确认语"],
            "reading": ["能认读 hamburger, salad, juice等词", "能分辨需要什么和吃什么的表达差异"],
            "writing": ["能拼写果汁及西式快餐单词", "能书写点单需求句子"],
            "speaking": ["能用口语点单食物和饮料", "能得体应答他人的询问"]
        },
        "vocab": [
            {"word": "hamburger", "cn": "汉堡", "img": "hamburger"},
            {"word": "salad", "cn": "沙拉", "img": "salad"},
            {"word": "apple juice", "cn": "苹果汁", "img": "apple_juice"},
            {"word": "lunch", "cn": "午餐", "img": "hamburger"}
        ],
        "sentences": [
            {"en": "What do you want to eat?", "cn": "你想吃什么？"},
            {"en": "Do you want some apple juice?", "cn": "你想要些苹果汁吗？"}
        ]
    },
    {
        "id": "U4L3",
        "title": "Unit 4 Lesson 3: What's your favorite drink?",
        "moduleObjectives": {
            "listening": ["能听懂最喜爱事物的句点询问", "听懂水果词汇"],
            "reading": ["能认读 favorite, fruit, orange, banana", "能理解喜好强度的描述"],
            "writing": ["能拼写水果名词及 sweet 等形容词", "能用 favorite 造句"],
            "speaking": ["能口语交流最喜欢的食物", "能赞美食物味道"]
        },
        "vocab": [
            {"word": "orange juice", "cn": "橙汁", "img": "orange_juice"},
            {"word": "banana", "cn": "香蕉", "img": "banana"},
            {"word": "water", "cn": "水", "img": "water"},
            {"word": "fruit", "cn": "水果", "img": "apple_juice"}
        ],
        "sentences": [
            {"en": "What's your favorite drink?", "cn": "你最喜欢的饮料是什么？"},
            {"en": "I like bananas.", "cn": "我喜欢香蕉。"}
        ]
    },
    {
        "id": "U4L4",
        "title": "Unit 4 Lesson 4: What's for dinner?",
        "moduleObjectives": {
            "listening": ["能听懂中餐及晚餐特色食物", "能听懂征求意见的句式"],
            "reading": ["能认读 rice, soup, chicken, vegetable", "能读懂晚餐有关的小短文"],
            "writing": ["能熟练拼写多类肉类及蔬菜单词", "能罗列出丰盛的晚餐清单"],
            "speaking": ["能用口语报出中餐菜名", "能询问今晚吃什么"]
        },
        "vocab": [
            {"word": "rice", "cn": "米饭", "img": "rice"},
            {"word": "soup", "cn": "汤", "img": "soup"},
            {"word": "chicken", "cn": "鸡肉", "img": "chicken"},
            {"word": "vegetable", "cn": "蔬菜", "img": "vegetable"}
        ],
        "sentences": [
            {"en": "What's for dinner today?", "cn": "今天晚饭吃什么？"},
            {"en": "How about some Chinese food?", "cn": "来点中餐怎么样？"}
        ]
    }
]

def generate_question_pool(v1, v2, v3, v4, cn1, cn2, cn3, cn4, i1, i2, i3, i4, s1_en, s1_cn, s2_en, s2_cn, unit):
    # 辅助工具：提取 img url
    def iu(name):
        return f'<img src="assets/images/{name}.png" width="80">'
    
    opts = [iu(i1), iu(i2), iu(i3), iu(i4)]
    opts_words = [
        {"text": iu(i1), "value": v1},
        {"text": iu(i2), "value": v2},
        {"text": iu(i3), "value": v3},
        {"text": iu(i4), "value": v4}
    ]
    
    # 构建所有类型的变种
    listening_pretest = []
    listening_practice = []
    reading_pretest = []
    reading_practice = []
    writing_pretest = []
    writing_practice = []
    speaking_pretest = []
    speaking_practice = []
    
    for i in range(12):
        target_idx = i % 4
        word = [v1, v2, v3, v4][target_idx]
        cn = [cn1, cn2, cn3, cn4][target_idx]
        image_name = [i1, i2, i3, i4][target_idx]
        
        # 混淆选项
        shuffled = list(opts)
        random.shuffle(shuffled)
        correct_idx = shuffled.index(iu(image_name))
        
        shuffled_words = list(opts_words)
        random.shuffle(shuffled_words)
        
        # Listening
        is_select = random.random() > 0.5
        listen_pre_node = {
            "type": "listen_select" if is_select else "listen_tf",
            "audio": word,
            "chinese": cn
        }
        if is_select:
            listen_pre_node["options"] = shuffled
            listen_pre_node["correct"] = correct_idx
        else:
            is_true = random.random() > 0.5
            listen_pre_node["image"] = iu(image_name) if is_true else iu([i1, i2, i3, i4][(target_idx+1)%4])
            listen_pre_node["correct"] = is_true
            
        listening_pretest.append(listen_pre_node)
        
        prac_type = random.choice(["listen_select", "duo_listen_select", "balloon_pop", "scenario"])
        prac_node = {
            "type": prac_type,
            "audio": word,
            "chinese": cn,
            "difficulty": random.choice(["easy", "medium", "hard"])
        }
        if prac_type in ["listen_select", "duo_listen_select"]:
            prac_node["options"] = shuffled
            prac_node["correct"] = correct_idx
        elif prac_type == "balloon_pop":
            prac_node["options"] = shuffled
            prac_node["correct"] = correct_idx
            prac_node["text"] = f"Find the word"
        elif prac_type == "scenario":
            prac_node["options"] = shuffled[:3]
            if iu(image_name) not in prac_node["options"]:
                prac_node["options"][0] = iu(image_name)
            random.shuffle(prac_node["options"])
            prac_node["correct"] = prac_node["options"].index(iu(image_name))
            prac_node["scenario"] = s1_en if random.random() > 0.5 else s2_en
            prac_node["question"] = "What should we pick?"
            prac_node["feedback"] = "Great choice!"
        
        listening_practice.append(prac_node)
        
        # Reading sentence generation based on unit
        if unit == "1":
            sent_str = f"This is a {word}." if word[0] not in 'aeiou' else f"This is an {word}."
        elif unit == "2":
            if word in ["shorts", "sports shoes", "clothes"]: sent_str = f"I wear {word}."
            elif word in ["size", "do", "whose"]: sent_str = s1_en
            else: sent_str = f"I wear a {word}." if word[0] not in 'aeiou' else f"I wear an {word}."
        elif unit == "3":
            if word in ["clock", "time"]: sent_str = f"What's the {word}?"
            else: sent_str = f"It's {word} o'clock."
        elif unit == "4":
            if word in ["egg", "apple", "orange", "banana", "hamburger"]: sent_str = f"I like {word}s."
            elif word in ["about", "hungry", "breakfast", "lunch", "dinner"]: sent_str = s1_en
            else: sent_str = f"I like {word}."
        else:
            sent_str = f"Look at the {word}."

        reading_pretest.append({
            "type": random.choice(["word_match", "sentence_match"]),
            "chinese": cn,
            "word": word,
            "sentence": sent_str,
            "options": random.sample(shuffled_words, 2) if random.random() > 0.5 else shuffled_words,
            "correct": word
        })
        
        reading_practice.append({
            "type": random.choice(["word_match", "sentence_match", "duo_race"]),
            "chinese": cn,
            "word": word,
            "sentence": sent_str,
            "options": shuffled_words if random.random() > 0.5 else shuffled,
            "correct": word if random.random() > 0.5 else correct_idx,
            "difficulty": random.choice(["easy", "medium", "hard"])
        })
        
        # Writing - Letter selection preparation
        missing_index = random.randint(0, len(word) - 1)
        hidden_word = word[:missing_index] + "_" + word[missing_index + 1:]
        correct_letter = word[missing_index]
        fake_letters = [chr((ord(correct_letter) - ord('a') + i) % 26 + ord('a')) for i in range(1, 4)]
        letter_opts = [correct_letter] + fake_letters
        random.shuffle(letter_opts)
        
        writing_pretest.append({
            "type": random.choice(["word_spell", "letter_select"]),
            "word": word,
            "chinese": cn,
            "image": iu(image_name),
            "display": hidden_word,
            "options": letter_opts,
            "correct": correct_letter
        })
        
        writing_practice.append({
            "type": random.choice(["word_spell", "letter_select", "duo_spell"]),
            "word": word,
            "chinese": cn,
            "image": iu(image_name),
            "display": hidden_word,
            "options": letter_opts,
            "correct": correct_letter,
            "difficulty": random.choice(["easy", "medium", "hard"]),
            "parts": [word[:len(word)//2], word[len(word)//2:]]
        })
        
        # Speaking
        speaking_pretest.append({
            "type": random.choice(["read_word", "shadowing"]),
            "word": word,
            "chinese": cn,
            "image": iu(image_name),
            "sentence": s1_en if random.random() > 0.5 else f"I like {word}."
        })
        
        speaking_practice.append({
            "type": random.choice(["read_word", "shadowing", "roleplay", "debate"]),
            "word": word,
            "chinese": cn,
            "image": iu(image_name),
            "sentence": s2_en if random.random() > 0.5 else f"This is a {word}.",
            "difficulty": random.choice(["easy", "medium", "hard"])
        })

    # Return structured dict
    return {
        "listening": {"pretest": listening_pretest[:10], "practice": listening_practice[:30]},
        "reading": {"pretest": reading_pretest[:10], "practice": reading_practice[:30]},
        "writing": {"pretest": writing_pretest[:10], "practice": writing_practice[:30]},
        "speaking": {"pretest": speaking_pretest[:10], "practice": speaking_practice[:30]}
    }


def main():
    # 1. Update teacher/data.js
    teacher_data_path = "teacher/data.js"
    with open(teacher_data_path, "r", encoding="utf-8") as f:
        teacher_content = f.read()
    
    for l in lessons_config:
        lid = l["id"]
        # build replacement block
        vocab_str = ",\n      ".join([f"{{ word: '{v['word']}', chinese: '{v['cn']}' }}" for v in l['vocab']])
        sentences_str = ",\n      ".join([f"{{ en: \"{v['en']}\", cn: '{v['cn']}' }}" for v in l['sentences']])
        obj_str = ",\n        ".join([f"\"{k}\": {json.dumps(v, ensure_ascii=False)}" for k, v in l['moduleObjectives'].items()])
        
        lesson_block = f"""
    title: "{l['title']}",
    vocabulary: [
      {vocab_str}
    ],
    sentences: [
      {sentences_str}
    ],
    objectives: [
      "能听懂并认读4个单词",
      "能用常用句型交流",
      "掌握相关模块应用"
    ],
    moduleObjectives: {{
        {obj_str}
    }}"""
        
        # Regex replacement in data.js
        pattern = re.compile(rf"'{lid}':\s*{{[^}}]*moduleObjectives\s*:\s*{{[^}}]*}}\s*}}", re.DOTALL)
        # However, looking at data.js, the dictionary values end with `}`. A simpler string split might be safer if regex is trickier.
        # Let's use a simpler regex
        pattern = re.compile(rf"('{lid}':\s*{{).*?(moduleObjectives\s*:\s*{{[^}}]+}}\s*}})", re.DOTALL)
        teacher_content = pattern.sub(rf"\g<1>\n{lesson_block}\n  }}", teacher_content)
        
    with open(teacher_data_path, "w", encoding="utf-8") as f:
        f.write(teacher_content)
    print("Updated teacher/data.js successfully.")

    # 2. Generate data/unitX_lessonY.js
    os.makedirs("data", exist_ok=True)
    
    for l in lessons_config:
        lid = l["id"] # U2L1
        unit = lid[1:2]
        lesson = lid[3:4]
        
        filename = f"data/unit{unit}_lesson{lesson}.js"
        varname = f"unit{unit}_lesson{lesson}"
        
        v1, v2, v3, v4 = [v['word'] for v in l['vocab'][:4]]
        cn1, cn2, cn3, cn4 = [v['cn'] for v in l['vocab'][:4]]
        i1, i2, i3, i4 = [v['img'] for v in l['vocab'][:4]]
        s1_en, s1_cn = l['sentences'][0]['en'], l['sentences'][0]['cn']
        s2_en, s2_cn = l['sentences'][1]['en'], l['sentences'][1]['cn']
        
        pools = generate_question_pool(v1,v2,v3,v4, cn1,cn2,cn3,cn4, i1,i2,i3,i4, s1_en,s1_cn,s2_en,s2_cn, unit)
        
        js_obj = {
            "id": lid,
            "title": l["title"],
            **pools
        }
        
        js_str = f"var {varname} = " + json.dumps(js_obj, indent=2, ensure_ascii=False) + ";"
        
        # If writing over an existing file or creating a new one
        with open(filename, "w", encoding="utf-8") as f:
            f.write(js_str)
        
        print(f"Generated {filename}")

if __name__ == "__main__":
    main()
