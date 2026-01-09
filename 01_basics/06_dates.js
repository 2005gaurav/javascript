
// Dates

// Dates is an function without new Date()
// let myDate = Date()
// console.log(myDate)
// console.log(typeof(myDate))
//It provide string so we cannot use Date method
// we always use new Date() when we want to get a real date object to work with.
//new Date() gives you a “Date object”, which you can use to get, set, and manipulate date and time values in JavaScript.


let myDate = new Date()
// console.log(myDate)  output --> 2026-01-09T18:39:46.711Z
// 2026 is year,01 is month january,09 is month date ,T18:39 means 18 hours and 39 minutes
// console.log(myDate.toString())  output --> Fri Jan 09 2026 18:40:37 GMT+0000
// give output in string BUT ITS data type is object

console.log(myDate.toLocaleString()) //  output --> 1/9/2026, 6:43:59 PM 
// localString method gives local Date and time according to ur device
console.log(myDate.toDateString())  // output --> Fri Jan 09 2026 
// toDateString method give only Date in string


// (1) let myCreatedDate = new Date(2026,0,14) // output --> 2026-01-14T00:00:00.000Z
// 2026 is year ,0 is month mtlb january,14 means date
// console.log(myCreatedDate)
//--------------------Important line----------------//
// 0 january kasa hua ?
// kyuki In JS we follow indexing method (indexing always start from 0 )

//(2) let myCreatedDate = new Date(2026,0,4,5,3) //output --> 2026-01-04T05:03:00.000Z
//   here 5 means hour ,and 3 means minute
//  console.log(myCreatedDate) 

let myCreatedDate = new Date("01-14-2026")
console.log(myCreatedDate)
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.getTime()) //output --> 1767985514266 
// getTime() is a method of the Date object.
// It returns the timestamp of the Date object in milliseconds since January 1, 1970, 00:00:00 UTC (the Unix Epoch).
// So essentially, It converts the date into a single number that computers can easily calculate with.




// Date.now is a built-in js method
// It returns the current timestamp in milliseconds since January 1, 1970, 00:00:00 UTC (the Unix Epoch).
let myTimeStamp = Date.now() 
// console.log(myTimeStamp) //ouput --> 1767985075325 It is a number, not a Date object.
console.log((Date.now()/1000)); //ouput -->1767985767.059
// Date.now give value in milliseconds 
// /10000 convert milliseconds into seconds
// BUt seconds also give value in whole number
// we can use Math.floor which help to give nearest integer
console.log(Math.floor(Date.now()/1000)); //output --> 1767985849 

let newDate = new Date()
console.log(newDate); // output -->  2026-01-09T19:11:45.061Z
console.log(newDate.getMonth() + 1); //output --> 1
// Since getMonth() is zero-based, adding +1 converts it to a human-readable month number (1–12):
// Always add +1 when you want to display the month number to users, because JavaScript counts months from 0.
console.log(newDate.getDay());
// JavaScript stores all dates internally as milliseconds since Jan 1, 1970 UTC.
// When you call getDay(), JS calculates which day of the week this timestamp falls on.
// It returns a 0–6 number, Sunday = 0.
let date1 = new Date("2026-01-10");  // output-->6 means Saturday
// js store krliya ha milliseconds ma
// or jab hmlog getDay ko call krenga js calculate kreka bata dega 
console.log(date1.getDay());