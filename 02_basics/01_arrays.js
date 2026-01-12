
// An array is an unordered collections of elements and each elements has indexing

// let fruits = ["Apple","Mango","Banana"]
// index start from 0
// 0 --> "Apple"
// 1 --> "Mango"
// 2 --> "Banana"

// creating Array
//  1. using array literal(most common method)

// let numbers = [10,20,30,40]

//  2 . using new array()

// let colors = new Array("Red", "Green", "Blue");


// Accessing Array elements
// let fruits = ["Apple","Banana","orange"]
// console.log(fruits[1])  // output --> Banana ayga kyuki hmlog na fruits ka andar 1 index to call kiya tha
// console.log(fruits[2])  // output --> orange

// Array method

// push() used to store value at the end
let number = [10,20,30,40]
number.push(50)
console.log(number) //ouput --> [10,20,30,40,50]

// pop () used to remove value from the end
number.pop()
console.log(number) //output --> [10,20,30,40]


// unshift used to add value  at start
number.unshift(0)
console.log(number) // output --> [ 0, 10, 20, 30, 40 ]

// shift used to remove value from the start
number.shift()
console.log(number)  // output --> [ 10, 20, 30, 40 ]


// slice method -Doesnot change the original array
// syntax -->   array.slice(startIndex, endIndex)

let colors = ["red","yellow","blue","green"]
let  newColors  = colors.slice(1,3)
console.log(newColors) // output --> ["yellow","blue"]
// idhar newColors na colors ka copy value liya tha original value nhi liya tha
console.log(colors) // output --> ["red","yellow","blue","green"] colors remain unchanged
// slice doesnot change the original value


// splice --> change the orginal value
// splice() modifies the original array and returns the deleted elements.
// sytax -- > array.splice(startIndex, deleteCount, item1, item2, ...)

let fruits = ["Apple","orange","Mango","litchi"]
let removed = fruits.splice(1,2)
// startIndex = 1 → start from "orange"
// deleteCount = 2 → remove 2 elements
// Elements removed:
// "Orange" (index 1)
// "Mango" (index 2)
console.log(removed) // output --> ["orange","Mango"]
console.log(fruits)  // fruits --> ["Apple","litchi"]

