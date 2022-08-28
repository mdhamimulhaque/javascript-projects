const foodBoxWrapper = document.querySelector('.food_box_wrapper');
foodBoxWrapper.innerHTML = '';

const dataLoad = async (searchValue) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    const data = await res.json()
        .then(data => showData(data.meals))
}

const showData = (data) => {


    data.forEach(item => {
        // console.log(item)
        // console.log(item.strArea)
        // console.log(item.strCategory)
        // console.log(item.strTags)
        const foodItemBox = document.createElement('div');
        foodItemBox.classList.add('food_item_box', 'drop-shadow-xl', 'p-5', 'bg-orange-400');
        foodItemBox.innerHTML = `
        <div class="img_area">
            <img src="${item.strMealThumb}" alt="img">
        </div>
            <div class="food_info_area">
            <h2 class="text-2xl font-medium my-2">${item.strMeal}</h2>
            <p>${item.strInstructions.slice(0, 200)}...</p>
    <button
        class="mt-4 bg-orange-300 px-10 py-3 font-medium tracking-wide transition duration-300 text-white hover:bg-orange-200 hover:text-orange-500">
        Read Details
    </button>
        </div >
    `;

        foodBoxWrapper.appendChild(foodItemBox)

    })

}

const searchItem = () => {
    const searchFieldValue = document.getElementById('search_field').value;
    console.log(searchFieldValue)
    dataLoad(searchFieldValue)
}
