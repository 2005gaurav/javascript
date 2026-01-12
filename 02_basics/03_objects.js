
// objects are used to store key-values pairs.They represent real-world entites and are one of the most important datatypes in js

// An object is a collection of properties and methods
let person = {
    name:"Gaurav",
    age:21,
    isStudent:true,
    email:"gaurav@gmail.com",
    location:"Jaipur",
    lastLoginDays:["Monday","Saturday"]
};
// name,age,isStudent --> properties
// values can be any data types(string,number,boolean,array,function etc)

// Dot notation to Acess key values
// console.log(person.email)


// update property
person.age = 23; // change the value of age 
// Object.freeze(person)
// object.freeze lock the person update it doesnot allow to make change after we declare these method
person.age=24; //now person age cannot be updated
// console.log(person)

// using Bracket notation
// Bracket notation only work in
//  object properties using strings,or varaibles insise square bracket
// It is used to  support dynamic keys

// Dynamic keys are object property names that are accessed or created using variables

// Example of Dynamic key Acess
// let student  = {
//     name:"Ashish",
//     age:22
// };
// let keys = "name"
// console.log(student.keys); //undefined
// console.log(student[keys]) // Ashish
// keys bolrha ha js ko use the variable as the key name

// Dynamic key creation
let prop = "marks";

let student = {
    name:"Rahul",
    [prop]:85 // The square brackets tell js use the value inside the variable prop as the property name
};
// console.log(student.marks); // output --> 85

person.greeting = function(){
    console.log("Hello js user")
}
console.log(person.greeting()) // output -->Hello js user  undefined issliya aya kyuki hmlog na argument or parameter ma kohi value pass nhi kiya ha

person.greetingTwo = function(){
    console.log(`Hello Js user ,${this.name}`); //Hello Js user ,Gaurav undefined
    // Gaurav ko access kiya ha this operator use krka
}
console.log(person.greetingTwo())
