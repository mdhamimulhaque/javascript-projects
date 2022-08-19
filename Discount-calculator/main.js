
//===========> for 30% discount <==========

const stringConverter = (totalPrice) => {
    let priceDisplay = document.getElementById(totalPrice);
    const priceValue = parseFloat(priceDisplay.innerText);

    return priceValue;
}
const discountCalculator = (discount) => {
    const priceValue = stringConverter('total_price');
    const calculateResult = ((discount * priceValue) / 100);

    return calculateResult;
}

const disable_30_Btn = document.getElementById('discount_btn')
disable_30_Btn.addEventListener('click', () => {
    const priceTotal = discountCalculator(30);
    document.getElementById('price').innerText = priceTotal;
    disable_30_Btn.setAttribute('disabled', 'true')
});


// =========== 50% discount =========

const applyDiscountBox = document.querySelector('.apply_discount_box');
const disable_50_Btn = document.getElementById('apply_discount_coupon_btn');

disable_50_Btn.addEventListener('click', (e) => {

    const inputDiv = document.createElement('div');
    inputDiv.innerHTML = `
       <input id='input_field' type="text" placeholder="Write 'coupon' code" class="border outline-0 p-2 w-1/2 mb-2" />
       <p id="notice_msg" class='text-red-600 hidden' >Sorry! You used wrong keyword<p>
       `;
    applyDiscountBox.appendChild(inputDiv);

    // -----> input field functionality <------
    const input_field = document.getElementById('input_field');
    const notice_msg = document.getElementById('notice_msg');
    input_field.addEventListener('keyup', (e) => {

        if (input_field.value == 'coupon') {
            const priceTotal = discountCalculator(50);
            document.getElementById('price').innerText = priceTotal;
            input_field.setAttribute('disabled', 'true');
            disable_50_Btn.setAttribute('disabled', 'true')
        } else if (input_field.value.length >= 6) {
            notice_msg.classList.remove('hidden');
            input_field.setAttribute('disabled', 'true');
            if (confirm("use 'coupon' keyword for discount")) {
                input_field.parentNode.parentNode.removeChild(input_field.parentNode.parentNode.lastElementChild)
            } else {
                input_field.parentNode.parentNode.removeChild(input_field.parentNode.parentNode.lastElementChild)
            }
        }
    })



});

