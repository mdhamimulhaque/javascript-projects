
// ---> load search data
const dataLoad = async () => {

    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
        const data = await res.json()
            .then(data => showData(data.meals))
    } catch (err) {
        console.log(err)
    }
}
dataLoad()

// ---> show search data
const showData = (data) => {
    const foodBoxWrapper = document.querySelector('.food_box_wrapper');
    foodBoxWrapper.innerHTML = '';

    data.forEach(item => {
        const foodItemBox = document.createElement('div');
        foodItemBox.classList.add('food_item_box', 'drop-shadow-xl', 'p-5', 'bg-orange-400');
        foodItemBox.innerHTML = `
      <section class='cursor-pointer' onclick={recipeDetails(${item.idMeal})}>
        <div class="img_area" >
         <img src="${item.strMealThumb}" alt="img">
        </div>
       <div class="food_info_area">
        <h2 class="text-2xl font-medium my-2">${item.strMeal}</h2>
        <p>${item.strInstructions.slice(0, 200)}...</p>
       </div >
       <button
        class="mt-4 bg-orange-300 px-10 py-3 font-medium tracking-wide transition duration-300 text-white hover:bg-orange-200 hover:text-orange-500">
        Read Details
       </button>
      </section>
    `;

        foodBoxWrapper.appendChild(foodItemBox)

    })

}


// ---> search items
const searchItem = async () => {
    const searchFieldValue = document.getElementById('search_field').value;
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldValue}`)
        const data = await res.json()
            .then(data => showData(data.meals))
    } catch (err) {
        console.log(err)
    }
}

// ---> meal details
const recipeDetails = async (id) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await res.json()
        .then(data => modal(data.meals))
        .catch((err) => console.log(err))
}



// ---> modal
const modal = (cardInfo) => {
    const modalArea = document.querySelector('.modal_area');
    modalArea.classList.remove('hidden');
    const modalWrapper = document.querySelector('.modal_wrapper');
    modalWrapper.innerHTML = `
           <div class="recipe_details_box cursor-pointer overflow-x-hidden">
           <div class="img_area">
           <img src="${cardInfo[0]?.strMealThumb}" alt="img">
           </div>
           <div class="food_info_area">
             <h2 class="text-2xl font-medium my-2 font-bold text-center">${cardInfo[0]?.strMeal}</h2>
             <p>${cardInfo[0]?.strInstructions.slice(0, 200)}</p>
             <p><strong>Street Area :</strong> ${cardInfo[0]?.strArea}</p>
             <p><strong>Shop Address :</strong> <a href='${cardInfo[0]?.strSource}'>${cardInfo[0]?.strSource}</a></p>
             <p><strong>Video : </strong> <a href='${cardInfo[0]?.strYoutube}'>${cardInfo[0]?.strYoutube}</a></p>
             
           </div>
         </div>
  `

    // ---> modal hide
    modalArea.addEventListener('click', () => {
        modalArea.classList.add('hidden');
    })
}