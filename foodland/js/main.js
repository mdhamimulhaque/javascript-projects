

const dataLoad = async (searchValue) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    const data = await res.json()
        .then(data => showData(data.meals))
}

const showData = (data) => {
    const foodBoxWrapper = document.querySelector('.food_box_wrapper');
    foodBoxWrapper.innerHTML = '';

    data.forEach(item => {
        const foodItemBox = document.createElement('div');
        foodItemBox.classList.add('food_item_box', 'drop-shadow-xl', 'p-5', 'bg-orange-400');
        foodItemBox.innerHTML = `
        <div class="img_area cursor-pointer" onclick={recipeDetails(${item.idMeal})}>
            <img src="${item.strMealThumb}" alt="img">
        </div>
            <div class="food_info_area">
            <h2 class="text-2xl font-medium my-2">${item.strMeal}</h2>
            <p>${item.strInstructions.slice(0, 200)}...</p>
        </div >
    `;

        foodBoxWrapper.appendChild(foodItemBox)

    })

}

// ---> search items
const searchItem = () => {
    const searchFieldValue = document.getElementById('search_field').value;
    // console.log(searchFieldValue)
    dataLoad(searchFieldValue)
}

// ---> meal details


const recipeDetails = async (id) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await res.json()
        .then(data => modal(data))
}



// ---> modal
const modal = (cardInfo) => {
    console.log(cardInfo)
    const modalArea = document.querySelector('.modal_area');
    modalArea.classList.remove('hidden');
    const modalWrapper = document.querySelector('.modal_wrapper');
    modalWrapper.innerHTML = `
           <div class="recipe_details_box cursor-pointer">
           <div class="img_area">
           <img src="dddd" alt="img">
           </div>
           <div class="food_info_area">
             <h2 class="text-2xl font-medium my-2">dfergf</h2>
             <p>dddd</p>
           </div>
         </div>
  `

    modalArea.addEventListener('click', () => {
        modalArea.classList.add('hidden');
    })
}