let d = new Date();
console.log(d);
// current date and time
d = new Date("2023 8 17");
console.log(d);
// Tue Aug 15 2023 00:00:00 GMT+0530
d = new Date("Aug  16 2023 12:30:5");
console.log(d);
console.log("--------------------------------------------------------------------");
// Wed Aug 16 2023 12:30:05 GMT+0530 (India Standard Time)
d = new Date(2023,9,13);
console.log(d);
// Fri Oct 13 2023 00:00:00 GMT+0530 (India Standard Time)
d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d);
// Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)
// if year value more than 11 then value get a next year
d = new Date(2018, 15, 24, 10, 33, 30, 0);
console.log(d);
// Wed Apr 24 2019 10:33:30 GMT+0530 (India Standard Time)
// if year value more than 30 and 31  then value get a next month
d = new Date(2018, 10, 33, 10, 33, 30, 0);
console.log(d);
// Mon Dec 03 2018 10:33:30 GMT+0530 (India Standard Time)

d = new Date(2023,8);
console.log(d);
// Fri Sep 01 2023 00:00:00 GMT+0530 (India Standard Time)
d = new Date('',8);
console.log(d);
// Sat Sep 01 1900 00:00:00 GMT+0521 (India Standard Time)
console.log("--------------------------------------------------------------------");
/*  JavaScript Stores Dates as Milliseconds    
            */
// 01 January 1970 plus 100 000 000 000 milliseconds is:           
d = new Date(100000000000);
console.log(d);
// Sat Mar 03 1973 15:16:40 GMT+0530 (India Standard Time)
d = new Date(24 * 60 * 60 * 1000);
console.log(d);
// Fri Jan 02 1970 05:30:00 GMT+0530 (India Standard Time)
d = new Date(0);
console.log(d);
// Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

// january 01 1970 minus 100 000 000 000 milliseconds is:
d = new Date(-100000000000);
console.log(d);
// Mon Oct 31 1966 19:43:20 GMT+0530 (India Standard Time)

console.log("--------------------------------------------------------------------");
console.log("Displaying Dates");
d = new Date();
console.log(d);
// Tue Aug 08 2023 13:14:11 GMT+0530 (India Standard Time)
console.log(typeof d); // object
const dte = d.toString();
console.log(dte);
// Tue Aug 08 2023 13:14:11 GMT+0530 (India Standard Time)
console.log(typeof dte);  // string
console.log(d.toDateString());  // Tue Aug 08 2023
console.log(d.toLocaleDateString());  // 8/8/2023
console.log(d.toISOString());  // 2023-08-08T07:47:03.411Z
console.log("--------------------------------------------------------------------");
console.log("Date Get Method");
// get year,month,date, time etc
d = new Date(2023, 10, 24, 10, 33, 30, 0);
console.log(d);
// Fri Nov 24 2023 10:33:30 GMT+0530 (India Standard Time)
console.log(d.getDate());  // 24
console.log(d.getMonth());  // 10
console.log(d.getFullYear()); // 2023
console.log(d.getHours());  //  10
console.log(d.getMinutes());  // 33
console.log(d.getSeconds());  // 30
console.log(d.getMilliseconds());  // 0
console.log(d.getTime());   // 1700802210000
console.log(d.getUTCHours());   // 5

console.log("--------------------------------------------------------------------");
console.log("Date Set Method");
// set a date
d = new Date();
d.setFullYear(2024);
d.setMonth(2);
d.setDate(19);
d.setHours(12);
d.setMinutes(23);
d.setSeconds(50);
console.log(d);
// Tue Mar 19 2024 12:23:50 GMT+0530 (India Standard Time)

