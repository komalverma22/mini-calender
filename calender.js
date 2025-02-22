const monthName = document.getElementById("calender-month");
const day = document.getElementById("calender-day");
const datee = document.getElementById("calender-date");
const year = document.getElementById("calender-year");


// DATE
const date = new Date();
// console.log(date);
const dateee = date.getDate();
console.log(dateee) //print the today's date
datee.innerHTML = dateee;

//YEAR
const yearr = date.getFullYear();
console.log(yearr);
year.textContent = yearr;

// MONTH
const monthh = date.getMonth();
console.log(monthh)

// const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// OR

// const monthss= months[monthh];
// month.innerHTML=monthss;
monthName.innerHTML = date.toLocaleString("en", {
    month: "long"
})



// DAY
const dayy = date.getDay();
console.log(dayy);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayss = days[dayy]
console.log(dayss);

day.innerHTML = dayss;