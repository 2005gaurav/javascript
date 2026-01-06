
const accountId = 14453;
// const value ko reassign nhi krta ha
let accountEmail = "gaurav@gmail.com";
// let variable can reassign value
var accountPassword = "12345"



accountCity="jaipur"
// in js we can assign value without declaring variable

let accountState;
// ya undefined hoga kyuki issma kohi value nhi diya ha

/*
prefer not to use var

because of issue in block scope and function scope
*/


// changing value 
accountEmail = "no@gmail.com";
accountPassword="45678";
accountCity="Bengaluru"



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// ya console.table multiple varaible ko 1 sath print krna ko use hota ha


