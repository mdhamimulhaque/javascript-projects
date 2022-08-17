// ========== > login form <==========
const emailField = document.getElementById("email_field");
const passwordField = document.getElementById("password_field");
const logInForm = document.getElementById('login_form');


// logInForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (emailField.value == "mdhamimulhaque@gmail.com" && passwordField.value == '12345') {
//         window.location.href = "bank.html";
//     } else {
//         alert(`sorry!!! your email or password was incorrect.

//         For testing purpose use this - 
//         email : mdhamimulhaque@gmail.com
//         pass  : 12345
//         ` )
//     }
// });

// ===========> Banking system start <==========
// -----> get input value <-----
const getInputValue = (idName) => {
    const InputId = document.getElementById(idName);
    const inputValueReceived = parseFloat(InputId.value);
    InputId.value = '';
    return inputValueReceived;
}

// -----> get display value <-----
const getDisplayValue = (idName) => {
    const displayValue = document.getElementById(idName);
    const displayValueReceived = parseFloat(displayValue.innerText);
    return displayValueReceived;
}

// -----> set update value for deposit & withdraw <-----
const setDisplayValue = (idName, newValue) => {
    const displayTotalValue = document.getElementById(idName);
    displayTotalValue.innerHTML = newValue;
}



// =====> deposit functionality <=====
document.getElementById('deposit_form').addEventListener('submit', (e) => {
    e.preventDefault();

    const depositInputValue = getInputValue("deposit_input");
    const depositDisplayValue = getDisplayValue("display_deposit");

    //-----> set deposit value
    const newDepositTotal = depositInputValue + depositDisplayValue;
    setDisplayValue("display_deposit", newDepositTotal);

    //-----> set total value
    const displayTotal = getDisplayValue('total_value');
    const newTotalValue = displayTotal + depositInputValue;
    setDisplayValue('total_value', newTotalValue)
});


// =====> withdraw functionality <=====
document.getElementById('withdraw_form').addEventListener('submit', (e) => {
    e.preventDefault();

    const withdrawInputValue = getInputValue("withdraw_input");
    const withdrawDisplayValue = getDisplayValue("display_withdraw");

    const newWithdrawTotal = withdrawDisplayValue + withdrawInputValue;
    setDisplayValue("display_withdraw", newWithdrawTotal);

    const displayTotal = getDisplayValue("total_value");
    const newTotalValue = displayTotal - withdrawInputValue;
    setDisplayValue("total_value", newTotalValue);

})