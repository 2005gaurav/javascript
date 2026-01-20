
// IIFE (Immediately Invoked Function Expression) in JS

// An IIFE is a function that runs immediately after it is defined

// You define the function and execute it at the same time


// Basic syntax of IIFE

(function (){
    console.log("IIFE executed")
})();  

// semicolon ; lgna ka mtlb ha function stop krdiya ha
// Agar semicolon nhi lgyenga to 1 sath do IIFE function use nhi krpyenga

// Arrow function IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Gaurav')


// Why do we need IIFE?
// To Avoid Global Scope POllution

// what is Global Scope POllution
// Global Scope Pollution happens when too many variables or functions are declared in the global scope,making them accessible everywhere in the program


// Example of Global Scope pollution

var count = 0;

function increment() {
    count++;
}

function reset() {
    count = 0;
}
// problems
// Any file can change count
// High Chance of accidental overwrite
// Hard to debug in large projects

// IIFE function that runs immediately after it is defined
