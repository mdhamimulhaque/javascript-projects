//==============> date time setup <=====================
const currentDay = document.querySelector('.current_day');
const currentDate = document.querySelector('.current_date');
const currentMonth = document.querySelector('.current_month');



//-----> current day
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayIndex = new Date().getDay();
const day = days[dayIndex];

// ------> current date
const date = new Date().getDate();


// ------> current month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthIndex = new Date().getMonth();
const month = months[monthIndex];

// =============> set value
currentDay.innerHTML = `${day},`;

if (date == '1') {
    currentDate.innerHTML = `${date}st`;
} else if (date == '2') {
    currentDate.innerHTML = `${date}nd`;
} else if (date == '3') {
    currentDate.innerHTML = `${date}rd`;
} else {
    currentDate.innerHTML = `${date}th`;
}

currentMonth.innerHTML = month;

// ===============> start todo functionality <================
const addTaskBtn = document.querySelector('.add_button');
const todoBody = document.getElementById('todo_body');
const form = document.getElementById('form');
const formSubmitBtn = document.getElementById('submit_btn');
const formCloseBtn = document.getElementById('close_btn');
const inputTitle = document.getElementById('input_title');
const inputText = document.getElementById('input_text');
const inputDate = document.getElementById('input_date');
const noticeMsg = document.getElementById('notice_msg');
const deleteIcon = document.getElementById('delete_icon');
const editIcon = document.getElementById('edit_icon');




// ======> form submit & validation <=====
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

const formValidation = () => {
    if (inputTitle.value === '') {
        noticeMsg.innerHTML = "Your Value is Empty";
    } else {
        noticeMsg.innerHTML = "";
        collectDataFun();
        formSubmitBtn.setAttribute("data-bs-dismiss", "modal");
        //----- for dabble click off
        formSubmitBtn.click();
        (() => {
            formSubmitBtn.setAttribute("data-bs-dismiss", "");
        })();
    }
}

// ======> collect data <======
let data = {};

const collectDataFun = () => {
    data['title'] = inputTitle.value;
    data['text'] = inputText.value;
    data['date'] = inputDate.value;

    createItemFun(data);
}



// ======> create function <=====
const createItemFun = (data) => {
    //------> todo-item div create
    const todoItem = document.createElement('div');
    todoItem.className = 'todo_item';
    todoBody.appendChild(todoItem);

    //------> todo-title create
    const todoTitleBox_h4 = document.createElement('h4');
    todoItem.appendChild(todoTitleBox_h4);
    //------> todo-icon create
    const todoIcon = document.createElement('i');
    todoIcon.className = 'fa-solid fa-angles-right point_icon';
    todoTitleBox_h4.appendChild(todoIcon);

    //-----> todo-title create
    const todo_title = document.createElement('span');
    todo_title.className = 'todo_title';
    todo_title.innerText = data.title;
    todoTitleBox_h4.appendChild(todo_title);

    // ------> todo-text create
    const todoText = document.createElement('p');
    todoText.innerText = data.text;
    todoText.className = 'todo_text';
    todoItem.appendChild(todoText);

    // ------> todo-task-time create
    const todoDate = document.createElement('small');
    todoDate.innerText = data.date;
    todoDate.className = 'todo_date';
    todoItem.appendChild(todoDate);

    //------> edit-delete icon
    const editUpdateBox = document.createElement('div');
    editUpdateBox.className = 'edit_update_icon_box';
    todoItem.appendChild(editUpdateBox);

    // ------> edit icon
    const editIcon = document.createElement('i');
    editIcon.className = 'fa-solid fa-pen-to-square';
    editIcon.setAttribute('data-bs-toggle', 'modal');
    editIcon.setAttribute('data-bs-target', '#form');


    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-trash-can';

    editUpdateBox.appendChild(editIcon);
    editUpdateBox.appendChild(deleteIcon);

    resetFormFun()
}


// ======> reset form value <======
const resetFormFun = () => {
    inputTitle.value = '';
    inputText.value = '';
    inputDate.value = '';
}

// ======> remove functionality <======
todoBody.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
})

// ======> edit/ update functionality <======

todoBody.addEventListener('click', (e) => {
    const parentItem = e.target.parentNode.parentNode;
    inputTitle.value = parentItem?.children[0]?.children[1].innerHTML;
    inputText.value = parentItem?.children[1].innerHTML;
    inputDate.value = parentItem?.children[2].innerHTML;
    console.log(parentItem?.children[2].innerHTML)
})





