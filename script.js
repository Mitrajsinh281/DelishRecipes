// Simple search function
const searchInput = document.getElementById("searchInput");
const recipeCards = document.querySelectorAll(".recipe-card");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const value = searchInput.value.toLowerCase();
        recipeCards.forEach(card => {
            const name = card.querySelector("h3").innerText.toLowerCase();
            card.style.display = name.includes(value) ? "block" : "none";
        });
    });
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
