// Simple search function (with debounce - har keystroke pe turant filter
// nahi chalega, 250ms rukne ke baad chalega - isse search smooth lagega
// especially jab bahut saari cards ho)
const searchInput = document.getElementById("searchInput");
const recipeCards = document.querySelectorAll(".recipe-card");

function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

if (searchInput) {
    const runSearch = () => {
        const value = searchInput.value.toLowerCase();
        recipeCards.forEach(card => {
            const name = card.querySelector("h3").innerText.toLowerCase();
            card.style.display = name.includes(value) ? "block" : "none";
        });
    };

    searchInput.addEventListener("keyup", debounce(runSearch, 250));
}



// ==================== MODAL FUNCTIONALITY ====================
const cards = document.querySelectorAll(".recipe-card");
const modal = document.getElementById("recipeModal");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const recipeKey = card.dataset.recipe;
    const recipe = recipes[recipeKey];

    if (!recipe) return alert("Recipe data not found!");

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
if (closeBtn && modal) {
  closeBtn.onclick = () => (modal.style.display = "none");
  window.onclick = e => {
    if (e.target == modal) modal.style.display = "none";
  };
}