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
const todoBody = document.querySelector('.todo_body');

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
todo_title.innerText = 'i am title';
todoTitleBox_h4.appendChild(todo_title);

// ------> todo-text create
const todoText = document.createElement('p');
todoText.innerText = 'this is text .write your task. edghfe wser waerfo ioawrf';
todoText.className = 'todo_text';
todoItem.appendChild(todoText);




