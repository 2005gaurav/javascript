
// this ka mtlb ha current context ka value ko reference krta ha
// scope ka andar jitna v varraible ha usko access krna ko kaam ata ha

const user = {
    username:"Gaurav",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="sam" // updated username
// user.welcomeMessage()
// console.log(this) // ouput ---> {} empty object outside scope

// WE CANNOT ACCESS THIS IN FUNCTION
// function chai(){
//     let username = "Gaurav"
//     console.log(this.username) // output --> undefined
// }
// chai()

// We CANNOT ACCESS THIS IN ARROW FUNCTION ALSO 

const chai = () => {
    let username = "hitesh"
    // console.log(this.username)  output --> undefined
    // console.log(this)  output --> empty object {}
}
chai()

// using Arrow function
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4)) // ouput 7


// implicit
// return method in arrow function
// implicit ka mtlb ha maa maan leta hu return ko
// const addTwo =(num1,num2) => num1+num2
// console.log(addTwo(3,4))

// using paranthencess() to access value
// const addTwo =(num1,num2) =>(num1+num2)
// console.log(addTwo(3,4))

// Access object value in js
const addTwo = (num1,num2) => ({username:"Gaurav"})
// without paranthencess we cannot access object value 
console.log(addTwo(3,4))



