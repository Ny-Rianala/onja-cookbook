// Grab element
const submitBtn = document.querySelector('button.submit-button');
const recipeForm = document.querySelector("form");
const orderedRecipe = document.querySelector(".recipe-list");
const ingredient = document.querySelector(".ingredient");


//function that handle submit

const handleSubmit = event => {
    event.preventDefault();
    if (event.target.matches("form")) {
        const form = event.target;
        const {recipe, name, level, time} = form;
        const myHTML = `
            <div class="recipe-order" data-recipe="${recipe.value}" data-name="${name.value}" data-level="${level.value} data-time="${time.value}">
            <button class="submit-button">Submit</button>
        </div>
        `;
        orderedRecipe.innerHTML += myHTML;
        form.reset();
    }
};

const newIngredients = event => {
    //grab the lists
    const listOfFood = event.target.closest('.ingredient');
    const title = listOfFood.querySelector('h1').textContent;
    const ingredients = event.target;
	const { one, two, three } = ingredients.dataset;
	// put it on the modal
    const myRecipes = `
        <div>
            <h2>${title}</h2>
            <ul>Ingredients : 
                <li>${one}</li>
                <li>${two}</li>
                <li>${three}</li>
            <h2>${title}</h2>
            <ul>Steps : 
                <li>${step1}</li>
                <li>${step2}</li>
                <li>${step3}</li>
            </ul>
        </div>
            <button class="submit-button">Submit</button>
    `;
	submitBtn.innerHTML = myRecipes;
};


//Listeners
submitBtn.addEventListener("submit", handleSubmit);
