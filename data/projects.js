const projectsData = [
    {
        "id": "proj_01",
        "type": "project_card",
        "title": "Make Your ID Card",
        "chinese": "制作你的名片",
        "steps": [
            { "label": "Choose avatar", "options": ["🧒", "👧", "🐱", "🐶"] },
            { "label": "Your name", "input": "text", "placeholder": "My name is..." },
            { "label": "Your age", "options": ["7", "8", "9", "10"] },
            { "label": "I like", "options": ["dogs", "cats", "music", "sports"] }
        ],
        "template": "Hi! I'm {name}. I'm {age} years old. I like {like}."
    },
    {
        "id": "proj_02",
        "type": "project_zoo",
        "title": "Design Your Zoo",
        "chinese": "设计你的动物园",
        "budget": 10,
        "animals": [
            { "name": "lion", "price": 3, "image": "lion.png" },
            { "name": "tiger", "price": 3, "image": "tiger.png" },
            { "name": "monkey", "price": 2, "image": "monkey.png" },
            { "name": "bird", "price": 1, "image": "bird.png" },
            { "name": "duck", "price": 1, "image": "duck.png" }
        ]
    },
    {
        "id": "proj_03",
        "type": "project_menu",
        "title": "Create a Restaurant Menu",
        "chinese": "创建一张餐厅菜单",
        "budget": 20,
        "food": [
            { "name": "apple", "price": 2, "image": "red_apple.png" },
            { "name": "orange", "price": 3, "image": "orange_orange.png" },
            { "name": "fish", "price": 5, "image": "fish.png" },
            { "name": "cake", "price": 4, "image": "pink_flower.png" } // Using placeholder image available
        ],
        "template": "Welcome! Today's special is {food} for ${price}."
    }
];

// export module if using modules, or keeping globally available like the other data files
window.projectsData = projectsData;
