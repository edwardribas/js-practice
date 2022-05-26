const dateContainer = document.querySelector('h1'),
      hourContainer = document.querySelector('h2'),
      greetingMessage = document.querySelector('p'),
      currentDate = new Date()
;

const fix = (num) => num < 10 ? `0${num}` : num;

let currentDay = currentDate.getDay(); // e.g. 0, 1, 2, 3, 4, 5, 6
let currentMonth = currentDate.getMonth(); // e.g. 0, 1, 2, 6, 8, 10, 11

const currentMonthDay = currentDate.getDate(); // e.g. 26, 2, 31, 15
const currentYear = currentDate.getFullYear(); // e.g. 2018, 2020, 2022, 2030

// Minutes and Hours
const hour = fix(currentDate.getHours());
const minutes = fix(currentDate.getMinutes());

// Week Day and Months
const currentWeekDay = index => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][index];
currentDay = currentWeekDay(currentDay);

const getMonthName = index => (
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][index]
);
currentMonth = getMonthName(currentMonth);

if(hour < 12 && hour >= 0){
    greetingMessage.innerText = "Good morning!";
} else if (hour >= 12 && hour < 18) {
    greetingMessage.innerText = "Good afternoon!";
} else {
    greetingMessage.innerText = "Good evening!";
}

// Show Results
dateContainer.innerText = `${currentDay}, ${currentMonthDay} ${currentMonth}, ${currentYear}.`
hourContainer.innerText = `${hour}:${minutes}`
