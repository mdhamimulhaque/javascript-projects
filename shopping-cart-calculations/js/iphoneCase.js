// =========> iPhone 11 Silicone Case - Black <==========
const incrementBtnCase = document.getElementById('increment_btn_case');
const decrement_btn_case = document.getElementById('decrement_btn_case');
const itemTotalIphoneCase = document.getElementById('item_total_case');

// -----> calculate amount function <-----
const amountCounterIphoneCase = (singleItems) => {
    const itemTotalPrice = singleItems * 59;
    itemTotalIphoneCase.innerText = itemTotalPrice;
}



incrementBtnCase.addEventListener('click', () => {
    counterFunction(true, 'second_item_counter');
});

decrement_btn_case.addEventListener('click', () => {
    counterFunction(false, 'second_item_counter');
})