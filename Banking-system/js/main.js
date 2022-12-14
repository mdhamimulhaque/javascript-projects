

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

    if (isNaN(depositInputValue)) {
        alert("Sorry!!! Sorry!!! Your input value is empty.")
    } else {
        //-----> set deposit value
        const newDepositTotal = depositInputValue + depositDisplayValue;
        setDisplayValue("display_deposit", newDepositTotal);

        //-----> set total value
        const displayTotal = getDisplayValue('total_value');
        const newTotalValue = displayTotal + depositInputValue;
        setDisplayValue('total_value', newTotalValue)
    }
});


// =====> withdraw functionality <=====
document.getElementById('withdraw_form').addEventListener('submit', (e) => {
    e.preventDefault();

    const withdrawInputValue = getInputValue("withdraw_input");
    const withdrawDisplayValue = getDisplayValue("display_withdraw");
    const displayTotal = getDisplayValue("total_value");

    if (isNaN(withdrawInputValue)) {
        alert("Sorry!!! Your input value is empty.")
    } else {
        if (displayTotal < withdrawInputValue) {
            alert("Sorry!! Your total balance is low. Not enough to withdraw");
        } else {
            const newWithdrawTotal = withdrawDisplayValue + withdrawInputValue;
            setDisplayValue("display_withdraw", newWithdrawTotal);


            const newTotalValue = displayTotal - withdrawInputValue;
            setDisplayValue("total_value", newTotalValue);

        }

    }

})