// function declaration
function SayMyName(){
    console.log("Gaurav")
}
// SayMyName()  // isko call kiya ha jo executes the code of the function

//  ****************** without return *************************
// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2)
// }
// addTwoNumbers(1,2)
// console.log(addTwoNumbers) // output --> [function: addTwoNumbers]
// we cannot get value back without return
// It only print the value but It cannot give value to use it later

// ******************* with return**************************
// Use console.log() to see the value
// Use return to use the value
function addTwoNumbers(number1,number2){
    return number1 + number2 // return sends the result back to the caller
}
 let result = addTwoNumbers(2,2)
//  console.log(result)


// Default values
function loginUserMessage(username = "sam"){
    if(!username){ //This check if username is falsy.(falsy value in js:emptystring,null,0,nan)
        console.log("please enter a username");
        return //Here return stop the function when if condition is true
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()) // sam ayga output kyuki default value parameter ma sam darakha ha
console.log(loginUserMessage("")) // output -- please enter a username kyuki if conditon is false
console.log(loginUserMessage("Gaurav")) // ouput --> Gaurav just logged in


function calculateCartPrice(val1,val2,...num1){
    return num1 // num1 ma store value return(print)honga
}
console.log(calculateCartPrice(100,200,300,500)) // output --> [ 300, 500 ]
// output array ma issliya aya ha kyuki ...is a REST operator jo store krta ha value in array
// 100 --> store in val1
// 200 --> store in val2
// 300 and 500 remaning store in num1

// USING OBJECT IN FUNCTION
const user = {
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)//The user object is passed to the function
// anyobject now references the same object as user
// so inside the function
// anyobject = user  //output -->Username is hitesh and price is 199

const user1 = {
    username:"Gaurav",
    price:122
}
function okObject(handleObject){
    console.log(`Username is ${handleObject.username} and price is ${handleObject.price}`)
}
// another method we can make function name object also to get a value
okObject({
    username:"Ashish",
    price:14
})

// using array in function
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1] //  getArray is a parameter that will receive an array
}
console.log(returnSecondValue(myNewArray))

// myNewArray is passed to the function 
// Inside the function:
// getArray = [200, 400, 100, 600]
// getArray[1] → 400
// return 400
// console.log(400) prints the value

