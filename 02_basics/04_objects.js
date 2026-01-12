
// const tinderUser = new Object()  //const tinderUser = {} both are same Both CREATE AN EMPTY OBJECT IN MEMORY
 const tinderUser = {} // create empty object 
tinderUser.id = "123abc", // ys sab ya empty object ma add hota jynga
tinderUser.name = "Sammy",
tinderUser.isLoggedIn = false
// console.log(tinderUser)
// console.log(tinderUser.name)
// console.log(tinderUser.id)

// Nested object
const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Gaurav",
            lastname:"Agrawal"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)
// updating properties value
// console.log(regularUser.fullname.userfullname.firstname="Sam")
// console.log(regularUser)

// Adding Two objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = {obj1,obj2} //ouput --> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj4 = Object.assign({},obj1,obj2,obj3) // object.assign js ka method ha jo used to copy properties from one or more source
// {} is an empty object
// This is where all properties will be copied

const obj4 = {...obj1,...obj2} // spread method ha jo used to join two variable 
console.log(obj4)

// Array of objects
const users = [
    {
        id:1,
        email:"g@gmail.com"
    },
    {
        id:2,
        email:"a@gmail.com"
    },
    {
        id:3,
        email:"m@gmail.com"
    },
]
// create an array 
// uska andar object create kiya ha
// Each Elements is an object
// {id:1,email:'g@gmail.com'}
// {id:2,email:'a@gamil.com'}
// {id:3,email:'m@gmail.com'}

// Each object has:
// id → number (unique identifier)
// name → string (user name) 

// Internal Structure (How JS Sees It)
// Index-wise:
// users[0] --> { id: 1, email: "g@gmail.com"}
// users[1] --> { id: 2, email: "a@gmail.com"}
// users[2] --> {id:3, email:"m@gmail.com"}
// Arrays are zero-indexed

// ACCESSING DATA
// console.log(users[0].email)  // output --> g@gmail.com
// console.log(users)  // ouput -->[
//   { id: 1, email: 'g@gmail.com' },
//   { id: 2, email: 'a@gmail.com' },
//   { id: 3, email: 'm@gmail.com' }
// ]


//  console.log(Object.keys(tinderUser)); //output ["id", "name", "isLoggedIn"] 
//  ***********importantline***************
// output list ma arha ha kyuki KEYS COLLECTED AS A LIST (A LIST = array in js)

// console.log(Object.values(tinderUser)); // output  ['123abc','Sammy',false]


console.log(Object.entries(tinderUser));
// ouput --> [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// Array of [key,value] pairs


// Object.keys(), Object.values(), and Object.entries() all return arrays because the result is a list of data.
// Keys → list of property names
// Values → list of property values
// Entries → list of [key, value] pairs
// JavaScript represents lists as arrays, not objects.

// why array?
// Arrays are the natural way in JavaScript to represent a list, making it easy to loop, count, or manipulate the data with built-in array methods.