



// -----> string converter function <-----
const stringConverter = (value) => {
    const stringToNumber = parseInt(value);
    return stringToNumber;
}



let isIncrement;
const counterFunction = (isIncrement, itemCounterId) => {
    const itemCounter = document.getElementById(itemCounterId);
    const counterFieldValue = itemCounter.value;
    let counterValue = stringConverter(counterFieldValue);



    if (isIncrement) {
        const newValue = counterValue + 1;
        itemCounter.value = newValue;
        if (itemCounterId == 'item_counter') {
            amountCounterIphone128(newValue);
        } else if (itemCounterId == 'second_item_counter') {
            amountCounterIphoneCase(newValue)
        }

    } else {
        const newValue = counterValue - 1;
        itemCounter.value = newValue;
        if (itemCounterId == 'item_counter') {
            amountCounterIphone128(newValue);
        } else if (itemCounterId == 'second_item_counter') {
            amountCounterIphoneCase(newValue)
        }
    }

}










