// ----- Recipe Data -----
const recipes = { 
    CreamyAlfredoPasta: {
        title: "Creamy Alfredo Pasta",
        category: "Italian",
        image: "pasta.jpg",
        ingredients: [
            "200g penne pasta",
            "1 cup heavy cream",
            "2 tbsp butter",
            "1/2 cup grated parmesan cheese",
            "Salt & pepper to taste"
        ],
        steps: [
            "Boil the pasta until al dente.",
            "In a pan, melt butter and pour in the cream.",
            "Add cheese and stir until creamy.",
            "Mix in the cooked pasta and season with salt & pepper."
        ]
    },
    PizzaMargherita: {
        title: "Pizza Margherita",
        category: "Italian",
        image: "pizza.jpg",
        ingredients: [
            "Pizza dough",
            "1/2 cup tomato sauce",
            "100g mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil"
        ],
        steps: [
            "Preheat oven to 220°C (425°F).",
            "Spread tomato sauce on the dough.",
            "Add mozzarella slices and basil leaves.",
            "Bake for 10-12 minutes until crust is golden."
        ]
    },
    VegHakkaNoodles: {
        title: "Veg Hakka Noodles",
        category: "Chinese",
        image: "noodles.jpg",
        ingredients: [
            "200g Hakka noodles",
            "1 cup mixed vegetables",
            "2 tbsp soy sauce",
            "1 tbsp vinegar",
            "Salt & pepper to taste"
        ],
        steps: [
            "Boil noodles and drain.",
            "Stir-fry vegetables on high heat.",
            "Add noodles, soy sauce, and vinegar.",
            "Toss well and season."
        ]
    },
    GobiManchurian: {
        title: "Gobi Manchurian",
        category: "Chinese",
        image: "manchurian.jpg",
        ingredients: [
            "1 small cauliflower (cut into florets)",
            "1/2 cup cornflour",
            "1/4 cup all-purpose flour",
            "2 tbsp soy sauce",
            "1 tbsp chili sauce",
            "1 tbsp tomato ketchup",
            "1 onion, chopped",
            "1 capsicum, chopped",
            "Oil for frying",
            "Salt to taste"
        ],
        steps: [
            "Boil cauliflower florets in hot water for 2–3 minutes and drain.",
            "Mix flours, salt, and water into a thick batter; coat florets and deep fry until golden brown.",
            "In a pan, sauté onion and capsicum.",
            "Add sauces and mix well.",
            "Add fried florets, toss everything together, and serve hot."
        ]
    },
    GreekSalad: {
        title: "Greek Salad",
        category: "Salad",
        image: "salad.jpg",
        ingredients: [
            "1 cucumber (chopped)",
            "2 tomatoes (chopped)",
            "1/2 red onion (sliced)",
            "1/2 cup feta cheese (crumbled)",
            "1/4 cup black olives",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt & pepper to taste",
            "1 tsp dried oregano"
        ],
        steps: [
            "Combine cucumber, tomatoes, onion, feta, and olives in a bowl.",
            "In a small bowl, mix olive oil, lemon juice, salt, pepper, and oregano.",
            "Pour dressing over salad and toss gently.",
            "Serve chilled as a side or light meal."
        ]
    },
    ChholeBh: {
    title: "Chhole Bhature",
    category: "Punjabi",
    image: "cholebhat.jpg",
    ingredients: [
        "1 cup chickpeas (soaked overnight)",
        "2 onions, chopped",
        "2 tomatoes, pureed",
        "1 tsp ginger-garlic paste",
        "1 tsp garam masala",
        "1 tsp cumin seeds",
        "1 tsp red chilli powder",
        "1/2 tsp turmeric",
        "1/2 tsp amchur powder",
        "1 tsp chole masala (optional)",
        "Salt to taste",
        "Oil for cooking",
        
        "For Bhature :",
        "2 cups all-purpose flour (maida)",
        "1/2 cup yogurt",
        "1/4 tsp baking soda",
        "1/2 tsp sugar",
        "Salt to taste",
        "Water as needed",
        "Oil for deep frying"
    ],
    steps: [
        "Pressure cook soaked chickpeas until soft.",
        "Heat oil in a pan; add cumin seeds and let them splutter.",
        "Add chopped onions and sauté until golden.",
        "Add ginger-garlic paste and cook for a minute.",
        "Add tomato puree, red chilli powder, turmeric, garam masala, and chole masala; cook until oil separates.",
        "Add boiled chickpeas with some water and simmer for 10–15 minutes.",
        "Add amchur powder, mix well, and turn off heat.",
        
        "For Bhature: Mix flour, sugar, salt, baking soda, and yogurt.",
        "Knead into a soft dough using water as needed; rest for 1 hour.",
        "Roll into medium-sized circles.",
        "Deep fry in hot oil until fluffy and golden.",
        
        "Serve hot bhature with chhole, onions, and lemon."
    ]
},

    PaneerTikkaMasala: {
        title: "Paneer Tikka Masala",
        category: "Punjabi",
        image: "paneertikka.jpg",
        ingredients: [
            "250g paneer (cut into cubes)",
            "1/2 cup thick curd (for marination)",
            "1 tbsp gram flour (optional)",
            "1 tsp ginger-garlic paste",
            "1 tsp red chilli powder",
            "1/2 tsp turmeric powder",
            "1 tsp garam masala",
            "1 tsp coriander powder",
            "1/2 tsp kasuri methi",
            "1 tbsp lemon juice",
            "1 onion, chopped",
            "2 tomatoes, pureed",
            "1 tbsp ginger-garlic paste (for gravy)",
            "2 tbsp butter",
            "1 tsp cumin seeds",
            "1 bay leaf",
            "1 tbsp fresh cream",
            "1 tbsp oil",
            "Salt to taste"
        ],
        steps: [
            "Mix curd, gram flour, ginger-garlic paste, lemon juice, and spices to prepare marination.",
            "Add paneer cubes, coat well, and rest for 20–30 minutes.",
            "Roast paneer on tawa or bake in oven/air fryer until slightly charred.",
            "Heat butter and oil in a pan; add cumin seeds and bay leaf.",
            "Add onions and sauté till golden brown.",
            "Add ginger-garlic paste and cook for a minute.",
            "Add tomato puree, spices, and cook till oil separates.",
            "Add a little water and simmer to form gravy.",
            "Add roasted paneer tikka and cook for 2–3 minutes.",
            "Add cream and kasuri methi; mix gently and turn off heat.",
            "Serve hot with naan, roti, or jeera rice."
        ]
    },
    ButterNaan: {
        title: "Butter Naan",
        category: "Punjabi",
        image: "naan.jpg",
        ingredients: [
            "2 cups all-purpose flour (maida)",
            "1/4 cup yogurt",
            "1/2 cup warm milk",
            "1 tsp sugar",
            "1 tsp baking powder",
            "1/4 tsp baking soda",
            "2 tbsp butter (melted)",
            "1 tbsp oil",
            "Salt to taste",
            "Water as needed",
            "Butter for brushing"
        ],
        steps: [
            "In a bowl, mix flour, sugar, baking powder, baking soda, and salt.",
            "Add yogurt, warm milk, oil, and knead into a soft dough.",
            "Cover the dough and rest for 1–2 hours.",
            "Divide dough into small balls and roll into oval shapes.",
            "Heat a tawa on medium-high; apply water on one side of the naan.",
            "Place the wet side onto the tawa so it sticks.",
            "Cook until bubbles appear, then flip tawa upside down to cook naan directly on flame.",
            "Remove when golden spots appear.",
            "Brush hot naan with butter and serve."
        ]
    },
    MasalaDosa: {
        title: "Masala Dosa",
        category: "SouthIndian",
        image: "dosa.jpg",
        ingredients: [
            "2 cups dosa batter",
            "2 boiled potatoes",
            "1 onion, sliced",
            "1 green chili, chopped",
            "1/2 tsp mustard seeds",
            "1/4 tsp turmeric",
            "Salt to taste",
            "Oil or ghee for cooking"
        ],
        steps: [
            "Heat oil, add mustard seeds, onions, and green chili; sauté.",
            "Add mashed potatoes, turmeric, and salt; mix well (filling ready).",
            "Spread dosa batter on hot tawa, drizzle oil.",
            "Place filling in center, fold dosa, and serve with chutney & sambhar."
        ]
    },
    IdliSambhar: {
        title: "Idli Sambhar",
        category: "SouthIndian",
        image: "images/idli.jpg",
        ingredients: [
            "2 cups idli batter",
            "1 cup toor dal",
            "1 onion & 1 tomato",
            "1/2 cup tamarind water",
            "1 tsp mustard seeds",
            "1 tbsp sambhar powder",
            "Curry leaves",
            "Salt to taste"
        ],
        steps: [
            "Steam idlis for 10–12 minutes.",
            "Boil toor dal and mash it.",
            "In a pan, sauté onions, tomatoes, and spices.",
            "Add dal, tamarind water, and simmer for 10 minutes.",
            "Serve idlis hot with sambhar and coconut chutney."
        ]
    },
    ChocolateLavaCake: {
        title: "Chocolate Lava Cake",
        category: "Dessert",
        image: "dessert.jpg",
        ingredients: [
            "100g dark chocolate",
            "1/4 cup butter",
            "1/4 cup sugar",
            "2 eggs",
            "1/4 cup flour",
            "1 tsp cocoa powder"
        ],
        steps: [
            "Melt chocolate and butter together.",
            "Add sugar and whisk in eggs.",
            "Fold in flour and cocoa powder.",
            "Pour into ramekins and bake at 200°C for 8–10 minutes.",
            "Serve warm — the center should be gooey!"
        ]
    },
    GulabJamun: {
        title: "Gulab Jamun",
        category: "Dessert",
        image: "gulabjamun.jpg",
        ingredients: [
            "1 cup milk powder",
            "1/4 cup all-purpose flour",
            "1/4 tsp baking soda",
            "2 tbsp ghee",
            "Milk (as needed to make dough)",
            "1 cup sugar",
            "1 cup water",
            "A few drops rose essence",
            "Oil for frying"
        ],
        steps: [
            "Mix milk powder, flour, baking soda, and ghee. Add milk to form soft dough.",
            "Shape into small balls.",
            "Make sugar syrup with sugar, water, and rose essence.",
            "Deep fry balls on low heat until golden brown.",
            "Soak in warm sugar syrup for at least 30 minutes before serving."
        ]
    }
};


// ----- Short helper -----
const $ = (id) => document.getElementById(id);


// ----- Create Category Dropdown -----
function createCategoryDropdown() {
    const select = $("categorySelect");

    const categories = ["All", ...new Set(
        Object.values(recipes).map(r => r.category)
    )];

    select.innerHTML = categories
        .map(cat => `<option value="${cat}">${cat}</option>`)
        .join("");

    select.onchange = () => displayRecipes(select.value);
}


// ----- Display Recipe Cards -----
function displayRecipes(category = "All") {
    const container = $("recipeContainer");

    const filtered = Object.entries(recipes).filter(([_, r]) =>
        category === "All" ? true : r.category === category
    );

    container.innerHTML = filtered.map(([key, r]) => `
        <div class="recipe-card" data-recipe="${key}">
            <img src="${r.image}" alt="${r.title}">
            <h3>${r.title}</h3>
            <p>${r.category}</p>
        </div>
    `).join("");

    attachCardClicks();
}


// ----- Card Click → Open Modal -----
function attachCardClicks() {
    document.querySelectorAll(".recipe-card").forEach(card => {
        card.onclick = () => openModal(recipes[card.dataset.recipe]);
    });
}


// ----- Open Modal -----
function openModal(recipe) {
    $("modalTitle").textContent = recipe.title;
    $("modalImage").src = recipe.image;

    $("modalIngredients").innerHTML =
        recipe.ingredients.map(i => `<li>${i}</li>`).join("");

    $("modalSteps").innerHTML =
        recipe.steps.map(s => `<li>${s}</li>`).join("");

    $("recipeModal").style.display = "block";
}


// ----- Close Modal -----
function setupModalClose() {
    const modal = $("recipeModal");

    document.querySelector(".close").onclick = () =>
        modal.style.display = "none";

    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };
}


// ----- Initialize -----
window.onload = () => {
    createCategoryDropdown();
    displayRecipes();
    setupModalClose();
};

