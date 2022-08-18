
//===========> for 30% discount <==========
let priceDisplay = document.getElementById('price');

const discountCalculator = (x) => {
    const priceValue = parseFloat(priceDisplay.innerText);
    const calculateResult = ((x * priceValue) / 100);
    priceDisplay.innerText = calculateResult;
}

document.getElementById('discount_btn').addEventListener('click', () => {
    discountCalculator(30);
});


// =========== 50% discount =========

const applyDiscountBox = document.querySelector('.apply_discount_box');

document.getElementById('apply_discount_coupon_btn').addEventListener('click', (e) => {

    const inputDiv = document.createElement('div');
    inputDiv.innerHTML = `
       <input id='input_field' type="text" placeholder="Write 'discount' keyword" class="border outline-0 p-2 w-1/2 mb-2" />
       <p id="notice_msg" class='text-red-600 hidden' >Sorry! You used wrong keyword<p>
       `;
    applyDiscountBox.appendChild(inputDiv);

    // -----> input field functionality <------
    const input_field = document.getElementById('input_field');
    const notice_msg = document.getElementById('notice_msg');
    input_field.addEventListener('keyup', () => {

        if (input_field.value == 'discount') {
            discountCalculator(50);
            input_field.setAttribute('disabled', 'true');
        } else if (input_field.value.length >= 8) {
            notice_msg.classList.remove('hidden');
            input_field.setAttribute('disabled', 'true');

        }
    })



});





// if (inputFieldValue == 'discount') {
//     discountCalculator(50);
// } else {
//     alert('Sorry! You used wrong keyword')
// }
