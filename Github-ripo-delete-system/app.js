const input_field = document.getElementById('input_field');
const delete_btn = document.getElementById('delete_btn');
const text = document.getElementById('text');


input_field.addEventListener('keyup', function (e) {
    const input_text = e.target.value;
    if (input_text === 'delete') {
        delete_btn.removeAttribute('disabled');
        delete_btn.className = 'delete_btn_active';
        // submit work
        delete_btn.addEventListener('click', function () {
            text.style.display = 'none';
            input_field.value = '';
            // btn disable after submit
            delete_btn.setAttribute('disabled', 'true');
            delete_btn.classList.remove('delete_btn_active');
        })
    } else {
        delete_btn.setAttribute('disabled', 'true');
        delete_btn.classList.remove('delete_btn_active');
    }
})