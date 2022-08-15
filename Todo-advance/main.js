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

