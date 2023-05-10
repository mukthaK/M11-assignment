//STEP 1
// function getDays(year, month) {
//     let date = new Date(year, month, 0).getDate();
//     console.log(date);
// }
// getDays(2023,05);

//STEP 2

// function getMonth(year, month) {
//     let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     let date = new Date(year, month, 1).getMonth();
//     console.log(months[date]);
// }
// getMonth(2023, 0);

//STEP 3
// let day = new Date().getDay();
// if (day === 0 || day === 6) {
//     console.log('Weekend') ;
// } else {
//     console.log('Weekday');
// } 

//STEP 4
// let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let day = new Date();
// day.setDate(day.getDate() - 1);
// console.log(days[day.getDay()]);

//STEP 5
// let day = new Date().toDateString();
// console.log(day.charAt(0));
