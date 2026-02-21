import React from 'react'

const Data = [
    {
        "id": 1,
        "image": "https://source.unsplash.com/600x400/?margherita-pizza",
        "foodName": "Margherita Pizza",
        "category": "Pizza",
        "description": "Classic pizza with tomato sauce, mozzarella and basil.",
        "price": 299
    },
    {
        "id": 2,
        "image": "https://source.unsplash.com/600x400/?pepperoni-pizza",
        "foodName": "Pepperoni Pizza",
        "category": "Pizza",
        "description": "Loaded with pepperoni slices and melted cheese.",
        "price": 399
    },
    {
        "id": 3,
        "image": "https://source.unsplash.com/600x400/?veg-burger",
        "foodName": "Veg Burger",
        "category": "Burger",
        "description": "Crispy vegetable patty with lettuce and mayo.",
        "price": 149
    },
    {
        "id": 4,
        "image": "https://source.unsplash.com/600x400/?chicken-burger",
        "foodName": "Chicken Burger",
        "category": "Burger",
        "description": "Juicy grilled chicken patty with fresh veggies.",
        "price": 199
    },
    {
        "id": 5,
        "image": "https://source.unsplash.com/600x400/?french-fries",
        "foodName": "French Fries",
        "category": "Snacks",
        "description": "Golden crispy potato fries with seasoning.",
        "price": 99
    },
    {
        "id": 6,
        "image": "https://source.unsplash.com/600x400/?pasta-alfredo",
        "foodName": "Alfredo Pasta",
        "category": "Pasta",
        "description": "Creamy white sauce pasta with herbs.",
        "price": 249
    },
    {
        "id": 7,
        "image": "https://source.unsplash.com/600x400/?spaghetti",
        "foodName": "Spaghetti Bolognese",
        "category": "Pasta",
        "description": "Italian pasta with rich tomato meat sauce.",
        "price": 299
    },
    {
        "id": 8,
        "image": "https://source.unsplash.com/600x400/?paneer-tikka",
        "foodName": "Paneer Tikka",
        "category": "Starter",
        "description": "Grilled paneer cubes with Indian spices.",
        "price": 269
    },
    {
        "id": 9,
        "image": "https://source.unsplash.com/600x400/?chicken-tikka",
        "foodName": "Chicken Tikka",
        "category": "Starter",
        "description": "Tender chicken grilled in tandoor spices.",
        "price": 329
    },
    {
        "id": 10,
        "image": "https://source.unsplash.com/600x400/?butter-chicken",
        "foodName": "Butter Chicken",
        "category": "Main Course",
        "description": "Creamy tomato-based chicken curry.",
        "price": 349
    },
    {
        "id": 11,
        "image": "https://source.unsplash.com/600x400/?paneer-butter-masala",
        "foodName": "Paneer Butter Masala",
        "category": "Main Course",
        "description": "Paneer cooked in rich buttery gravy.",
        "price": 299
    },
    {
        "id": 12,
        "image": "https://source.unsplash.com/600x400/?biryani",
        "foodName": "Chicken Biryani",
        "category": "Rice",
        "description": "Aromatic basmati rice with spiced chicken.",
        "price": 279
    },
    {
        "id": 13,
        "image": "https://source.unsplash.com/600x400/?veg-biryani",
        "foodName": "Veg Biryani",
        "category": "Rice",
        "description": "Flavorful vegetable dum biryani.",
        "price": 229
    },
    {
        "id": 14,
        "image": "https://source.unsplash.com/600x400/?fried-rice",
        "foodName": "Veg Fried Rice",
        "category": "Chinese",
        "description": "Stir-fried rice with vegetables and sauces.",
        "price": 199
    },
    {
        "id": 15,
        "image": "https://source.unsplash.com/600x400/?noodles",
        "foodName": "Hakka Noodles",
        "category": "Chinese",
        "description": "Indo-Chinese style stir-fried noodles.",
        "price": 189
    },
    {
        "id": 16,
        "image": "https://source.unsplash.com/600x400/?spring-rolls",
        "foodName": "Spring Rolls",
        "category": "Snacks",
        "description": "Crispy rolls stuffed with vegetables.",
        "price": 159
    },
    {
        "id": 17,
        "image": "https://source.unsplash.com/600x400/?masala-dosa",
        "foodName": "Masala Dosa",
        "category": "South Indian",
        "description": "Crispy dosa filled with potato masala.",
        "price": 129
    },
    {
        "id": 18,
        "image": "https://source.unsplash.com/600x400/?idli-sambar",
        "foodName": "Idli Sambar",
        "category": "South Indian",
        "description": "Soft steamed idlis served with sambar.",
        "price": 89
    },
    {
        "id": 19,
        "image": "https://source.unsplash.com/600x400/?vada",
        "foodName": "Medu Vada",
        "category": "South Indian",
        "description": "Crispy lentil doughnuts with chutney.",
        "price": 99
    },
    {
        "id": 20,
        "image": "https://source.unsplash.com/600x400/?sandwich",
        "foodName": "Grilled Sandwich",
        "category": "Snacks",
        "description": "Toasted sandwich with veggies and cheese.",
        "price": 139
    },

    {
        "id": 21,
        "image": "https://source.unsplash.com/600x400/?caesar-salad",
        "foodName": "Caesar Salad",
        "category": "Salad",
        "description": "Fresh lettuce with creamy dressing.",
        "price": 199
    },
    {
        "id": 22,
        "image": "https://source.unsplash.com/600x400/?greek-salad",
        "foodName": "Greek Salad",
        "category": "Salad",
        "description": "Healthy salad with olives and feta cheese.",
        "price": 219
    },
    {
        "id": 23,
        "image": "https://source.unsplash.com/600x400/?chocolate-cake",
        "foodName": "Chocolate Cake",
        "category": "Dessert",
        "description": "Rich chocolate layered cake.",
        "price": 179
    },
    {
        "id": 24,
        "image": "https://source.unsplash.com/600x400/?ice-cream",
        "foodName": "Vanilla Ice Cream",
        "category": "Dessert",
        "description": "Classic creamy vanilla scoop.",
        "price": 99
    },
    {
        "id": 25,
        "image": "https://source.unsplash.com/600x400/?brownie",
        "foodName": "Chocolate Brownie",
        "category": "Dessert",
        "description": "Warm brownie with chocolate drizzle.",
        "price": 149
    },
    {
        "id": 26,
        "image": "https://source.unsplash.com/600x400/?milkshake",
        "foodName": "Chocolate Milkshake",
        "category": "Beverage",
        "description": "Thick shake blended with chocolate.",
        "price": 149
    },
    {
        "id": 27,
        "image": "https://source.unsplash.com/600x400/?mango-juice",
        "foodName": "Mango Juice",
        "category": "Beverage",
        "description": "Fresh mango blended juice.",
        "price": 119
    },
    {
        "id": 28,
        "image": "https://source.unsplash.com/600x400/?coffee",
        "foodName": "Cappuccino",
        "category": "Beverage",
        "description": "Hot coffee topped with foam.",
        "price": 129
    },
    {
        "id": 29,
        "image": "https://source.unsplash.com/600x400/?tea",
        "foodName": "Masala Chai",
        "category": "Beverage",
        "description": "Indian spiced tea.",
        "price": 49
    },
    {
        "id": 30,
        "image": "https://source.unsplash.com/600x400/?lemonade",
        "foodName": "Fresh Lemonade",
        "category": "Beverage",
        "description": "Refreshing lemon drink.",
        "price": 79
    },

    {
        "id": 31,
        "image": "https://source.unsplash.com/600x400/?tacos",
        "foodName": "Veg Tacos",
        "category": "Mexican",
        "description": "Soft tacos filled with veggies.",
        "price": 199
    },
    {
        "id": 32,
        "image": "https://source.unsplash.com/600x400/?nachos",
        "foodName": "Loaded Nachos",
        "category": "Mexican",
        "description": "Nachos topped with cheese and salsa.",
        "price": 229
    },
    {
        "id": 33,
        "image": "https://source.unsplash.com/600x400/?shawarma",
        "foodName": "Chicken Shawarma",
        "category": "Wraps",
        "description": "Middle Eastern wrap with chicken filling.",
        "price": 179
    },
    {
        "id": 34,
        "image": "https://source.unsplash.com/600x400/?falafel-wrap",
        "foodName": "Falafel Wrap",
        "category": "Wraps",
        "description": "Crispy falafel wrapped with sauces.",
        "price": 159
    },
    {
        "id": 35,
        "image": "https://source.unsplash.com/600x400/?ramen",
        "foodName": "Veg Ramen",
        "category": "Japanese",
        "description": "Hot noodle soup with vegetables.",
        "price": 249
    },
    {
        "id": 36,
        "image": "https://source.unsplash.com/600x400/?sushi",
        "foodName": "Veg Sushi",
        "category": "Japanese",
        "description": "Rice rolls with vegetables.",
        "price": 299
    },
    {
        "id": 37,
        "image": "https://source.unsplash.com/600x400/?steak",
        "foodName": "Grilled Steak",
        "category": "Main Course",
        "description": "Juicy grilled steak with herbs.",
        "price": 499
    },
    {
        "id": 38,
        "image": "https://source.unsplash.com/600x400/?fish-and-chips",
        "foodName": "Fish and Chips",
        "category": "Main Course",
        "description": "Fried fish served with fries.",
        "price": 349
    },
    {
        "id": 39,
        "image": "https://source.unsplash.com/600x400/?omelette",
        "foodName": "Cheese Omelette",
        "category": "Breakfast",
        "description": "Fluffy omelette with cheese filling.",
        "price": 129
    },
    {
        "id": 40,
        "image": "https://source.unsplash.com/600x400/?pancakes",
        "foodName": "Pancakes",
        "category": "Breakfast",
        "description": "Soft pancakes served with syrup.",
        "price": 159
    },

    {
        "id": 41,
        "image": "https://source.unsplash.com/600x400/?waffles",
        "foodName": "Belgian Waffles",
        "category": "Breakfast",
        "description": "Crispy waffles topped with syrup.",
        "price": 179
    },
    {
        "id": 42,
        "image": "https://source.unsplash.com/600x400/?poha",
        "foodName": "Kanda Poha",
        "category": "Indian Breakfast",
        "description": "Flattened rice cooked with spices.",
        "price": 79
    },
    {
        "id": 43,
        "image": "https://source.unsplash.com/600x400/?upma",
        "foodName": "Rava Upma",
        "category": "Indian Breakfast",
        "description": "Semolina dish with vegetables.",
        "price": 89
    },
    {
        "id": 44,
        "image": "https://source.unsplash.com/600x400/?paratha",
        "foodName": "Aloo Paratha",
        "category": "Indian",
        "description": "Stuffed flatbread with potato filling.",
        "price": 119
    },
    {
        "id": 45,
        "image": "https://source.unsplash.com/600x400/?chole-bhature",
        "foodName": "Chole Bhature",
        "category": "Indian",
        "description": "Spicy chickpeas with fried bread.",
        "price": 199
    },
    {
        "id": 46,
        "image": "https://source.unsplash.com/600x400/?dal-tadka",
        "foodName": "Dal Tadka",
        "category": "Indian",
        "description": "Yellow lentils tempered with spices.",
        "price": 179
    },
    {
        "id": 47,
        "image": "https://source.unsplash.com/600x400/?naan",
        "foodName": "Butter Naan",
        "category": "Bread",
        "description": "Soft tandoori bread with butter.",
        "price": 49
    },
    {
        "id": 48,
        "image": "https://source.unsplash.com/600x400/?garlic-naan",
        "foodName": "Garlic Naan",
        "category": "Bread",
        "description": "Naan topped with garlic flavor.",
        "price": 59
    },
    {
        "id": 49,
        "image": "https://source.unsplash.com/600x400/?gulab-jamun",
        "foodName": "Gulab Jamun",
        "category": "Dessert",
        "description": "Sweet milk dumplings in syrup.",
        "price": 99
    },
    {
        "id": 50,
        "image": "https://source.unsplash.com/600x400/?rasmalai",
        "foodName": "Rasmalai",
        "category": "Dessert",
        "description": "Soft cheese patties in sweet milk.",
        "price": 129
    }
]


export default Data
