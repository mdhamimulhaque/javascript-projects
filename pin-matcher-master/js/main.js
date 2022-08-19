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
})
