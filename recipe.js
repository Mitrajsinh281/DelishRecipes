// Recipe data
const recipes = {
    CreamyAlfredoPasta: {
        title: "Creamy Alfredo Pasta",
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
        image: "cholebhat.jpg",
        ingredients: [
            "1 cup chickpeas (soaked overnight)",
            "2 onions, chopped",
            "2 tomatoes, pureed",
            "1 tsp ginger-garlic paste",
            "1 tsp garam masala",
            "2 cups flour (for bhature)",
            "1/2 cup yogurt",
            "Oil for frying",
            "Salt to taste"
        ],
        steps: [
            "Pressure cook chickpeas until soft.",
            "In a pan, sauté onions and ginger-garlic paste.",
            "Add tomato puree and spices, cook till oil separates.",
            "Add boiled chickpeas and simmer for 10 minutes.",
            "Mix flour, yogurt, salt, and water to make dough; roll and deep fry to make bhature.",
            "Serve hot with chhole and sliced onions."
        ]
    },
    MasalaDosa: {
        title: "Masala Dosa",
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
        image: "idli.jpg",
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

// Select elements
const cards = document.querySelectorAll(".recipe-card");
const modal = document.getElementById("recipeModal");
const closeBtn = document.querySelector(".close");

// Open recipe modal
cards.forEach(card => {
    card.addEventListener("click", () => {
        const recipeKey = card.dataset.recipe;
        const recipe = recipes[recipeKey];

        document.getElementById("modalTitle").textContent = recipe.title;
        document.getElementById("modalImage").src = recipe.image;

        const ingList = document.getElementById("modalIngredients");
        ingList.innerHTML = "";
        recipe.ingredients.forEach(i => {
            const li = document.createElement("li");
            li.textContent = i;
            ingList.appendChild(li);
        });

        const stepList = document.getElementById("modalSteps");
        stepList.innerHTML = "";
        recipe.steps.forEach(s => {
            const li = document.createElement("li");
            li.textContent = s;
            stepList.appendChild(li);
        });

        modal.style.display = "block";
    });
});

// Close modal
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = e => {
    if (e.target == modal) modal.style.display = "none";

};
