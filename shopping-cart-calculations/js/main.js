// -----> string converter function <-----
const stringConverter = (value) => {
    const stringToNumber = parseInt(value);
    return stringToNumber;
}


// ----->counter function <------

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


// ======> calculate total & subtotal <======

const totalCost = () => {
    // ---> iphone 128   
    const iphone128 = document.getElementById('item_total');
    const iphone128Value = stringConverter(iphone128.innerHTML);
    // ---> iphone case
    const iphoneCase = document.getElementById('item_total_case');
    const iphoneCaseValue = stringConverter(iphoneCase.innerHTML);

    // ---> sub total
    const subTotalField = document.getElementById('subtotal_field');
    const subTotal = iphone128Value + iphoneCaseValue;
    subTotalField.innerText = subTotal;
    // ---> tax
    const taxField = document.getElementById('tax_field');
    const taxValue = stringConverter(taxField.innerHTML);
    console.log(taxValue)
    //  ---> total
    const totalField = document.getElementById('total_field');
    const total = iphone128Value + iphoneCaseValue + taxValue;
    totalField.innerText = total;

}











