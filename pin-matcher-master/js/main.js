// -----> avoid below 4 dist <-----
const pinCodeFunction = () => {
    const randomPin = randomPinGenerator();
    // --->convert number to string
    const finalPin = randomPin + '';

    if (finalPin.length < 4) {
        return pinCodeFunction()
    } else {
        return finalPin;
    }
}
// -----> random pin generator <-----
const randomPinGenerator = () => {
    const number = Math.floor((Math.random() * 10000));
    return number;
}

const pinShowDisplay = document.getElementById('pin_show_display');

document.getElementById('pin_generator_btn').addEventListener('click', () => {
    const pinCode = pinCodeFunction();
    pinShowDisplay.value = pinCode;
});


// ==========> check Box work <=========
const pinMatchDisplay = document.getElementById('pin_match_display');
document.getElementById('all_btns').addEventListener('click', (e) => {
    const clickedBtnValue = e.target.innerText;
    if (!isNaN(clickedBtnValue)) {
        const pinMatchDisplay_value = pinMatchDisplay.value;
        const multipleClickedBtn = pinMatchDisplay_value + clickedBtnValue;
        pinMatchDisplay.value = multipleClickedBtn;
    } else {
        if (clickedBtnValue === 'C') {
            pinMatchDisplay.value = '';
        } else if (clickedBtnValue === "<") {
            const pinMatchDisplay_value = pinMatchDisplay.value;
            const valueSplit = pinMatchDisplay_value.split('');
            valueSplit.pop()
            const finalValue = valueSplit.join('')
            pinMatchDisplay.value = finalValue;
        }
    }
});


// =========> match the pin code <==========
const wrongPinMsg = document.getElementById('wrong_pin');
const rightPinMsg = document.getElementById('right_pin');
const chanceId = document.getElementById('chance');
document.getElementById('submit_pin_btn').addEventListener('click', (e) => {

    if (pinShowDisplay.value == pinMatchDisplay.value) {
        rightPinMsg.style.display = 'block';
        wrongPinMsg.style.display = 'none';
    } else {
        wrongPinMsg.style.display = 'block';
        rightPinMsg.style.display = 'none';

        let chanceValue = chanceId.innerText;
        if (chanceValue > 0) {
            let newValue = chanceValue - 1;
            chanceValue = newValue;
            chanceId.innerText = newValue;
        } else {
            alert(`
            Your try limit is over.
            Reload the page and try again
            `);
            wrongPinMsg.style.display = 'none';
        }
    }

})
