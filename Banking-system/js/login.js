// ========== > login form <==========
const emailField = document.getElementById("email_field");
const passwordField = document.getElementById("password_field");



document.getElementById('login_form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailField.value == "mdhamimulhaque@gmail.com" && passwordField.value == '12345') {
        window.location.href = "bank.html";
    } else {
        alert(`sorry!!! your email or password was incorrect.

        For testing purpose use this - 
        email : mdhamimulhaque@gmail.com
        pass  : 12345
        ` )
    }
});