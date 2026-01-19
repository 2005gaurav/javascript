
// scope determines where a variable or function can be accessed in your program

// 1. Global scope
// varaible declared outside any function or block can be access from anywhere

// Example:
let a = 10;

function global(){
    // console.log(a) // ouput --> 10
}
global();

// 2. Function scope
// varaible declared inside a function are assible only within that function

function demo(){
    let x = 10;
    const b = 15;
    // console.log(x,b)
}
demo()
// console.log(x)   throw Error varaible outside scope cannot be access

// 3. Block Scope
// Variables declared with let and const are block scoped
// block scope means curly braces{} ka andar hi access hoskta ha

if(true){
    let c = 20;
    const d = 30;
    console.log(c) // output --> 20
    console.log(d) // output --> 30
}
// console.log(c)  throw error because let and const are also block scope They can only access within block scope
// console.log(d)

// 4. lexical scope
// In lexical scope inner function can access value from outer scope

function outer(){
    let msg = "hello"

function inner(){
    let ok = "Goodmorning"
    console.log(msg);
     console.log(ok);
}

    inner()
}
outer()

// ********************* interesting ************************

console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}