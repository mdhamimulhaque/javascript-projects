// =========> iPhone 11 128GB Black <==========
const incrementBtn = document.getElementById('increment_btn');
const decrementBtn = document.getElementById('decrement_btn');
const itemTotalIphone128 = document.getElementById('item_total');

// -----> calculate amount function <-----
const amountCounterIphone128 = (singleItems) => {
    const itemTotalPrice = singleItems * 1200;
    itemTotalIphone128.innerText = itemTotalPrice;
}


incrementBtn.addEventListener('click', () => {
    counterFunction(true, 'item_counter');
    totalCost()
});


decrementBtn.addEventListener('click', () => {
    counterFunction(false, 'item_counter');
    totalCost()
})

