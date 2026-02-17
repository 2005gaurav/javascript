
// *********************************Descriptor**********************************************
// A descriptor is an object that defines the behaviour of a property whether it is writable,enumerable,configurable

// Descriptor=Hidden settings of an object property

// Every property has a Descriptor

// const obj ={
//    name:"chai"
// }

// behind the Scence:you don't see this normally,but it exists
// we rules = Descriptor
// name: {
//   value: "chai",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// *******************************Object.getOwnPropertyDescriptor()*************************
// Object.getOwnpropertyDescriptor used to check whether an object's property can be changed,deleted or looped over

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// ya method kissi object ki ek property ke "hidden rules.settings batata hai"
// Object.getOwnPropertyDescriptor(object,propertyName)
console.log(descriptor)


// ************************* The hidden settings of Math.PI********************************

//  {
//   value: 3.141592653589793,
//   writable: false, //            * false ma means cannot change
//   enumerable: false, //          * won't show in loop
//   configurable: false //          *Cann't modify/delete
// }

// *****************************************************************************************

const chai = {
    name:"ginger chai",
    price:250,
    isAvailable:true,
    orderChai:function(){
        console.log("chai nhi bni")
    }
}
// console.log(chai)
// {   ya chai  Object ka andar ka property ha
//   name: 'ginger chai',
//   price: 250,
//   isAvailable: true,
//   orderChai: [Function: orderChai]
// }


// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
// {              ya chai ka andar name ka property ha
// har object  ka propertyName ka  property Hota ha
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

//***********************We can make our OwnpropertyDescriptor******************************

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
// {
//   value: 'ginger chai',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

//************************Using loop in Object.getPropertyDescriptor***********************/
// Loop Tavi use krskta ha jab Descriptor ma enumerable:true ho
Object.defineProperty(chai,"name",{
    // defineProperty used to set own property
    writable:true,
    enumerable:true
})

for(let[key,value]of Object.entries(chai)){
    if(typeof value !='function')
        console.log(`${key}:${value}`)
}
// **********************why we use array instead of Object********************************
// 

// Beacause Object are not iterable(by default)
// Object is made for key-values pairs
// Not for sequence(order-wise data)
// example:1:{ name: "A", age: 20 }

// This is not like:
// [ A, 20 ]
// so js doesn't treat it as iterable

// *********************Then How Do we loop on Object ?*************************************
// we convert Object --> Array first
// Object.keys(obj) -->["name", "age"]

// Object.values(obj)-->["Gaurav", 22]


// Object.entries() (Most useful)
// Object.entries(obj);
//  [
//   ["name","Gaurav"],
//   ["age",22]
// ]
// Now this is Array--->iterable


// **************************************Explanation****************************************
// for(let[key,value]of Object.entries(chai)){
//     if(typeof value !='function')
//         console.log(`${key}:${value}`)
// }
// *****************************************************************************************

// 1. Here we are doing loop in Object.getPropertyDescriptor
// 2.jiska  liya enumerable :true hona chiya propertyDesscriptor ka

// 3.convert krha ha Object ko array ma kyuki Object are not iterable
// 4.Object store krta ha key-value pairs {name:"Gaurav"} ya iterable nhi hota ha

// 5.Object.entries(chai)  ya convert krdega Object ko array ma:
//  [
//   ["name", "ginger chai"],
//   ["price", 250],
//   ["isAvailable", true],
//   ["orderChai", function(){}]
// ]

// 6. ***************************for..of loop**********************************************
// It runs loop on arrays:
// so it will give:
// ["name","ginger chai"]
// ["price",250]
// ["isAvailable",true]

// first Round of loop
// ["name", "ginger chai"]

// 7. Now array destructing happens:
// [key, value] = ["name", "ginger chai"];
// javaScript does:
// key=arr[0]
// value=arr[1]

// 0th index = key (by rule)
// 1st index = value

// so:
// key = "name"
// value = "ginger chai"

// js doesnot  guess name is key
// javaScript knows "name" is the key because Object.entries() always creates array in
// [key,values] format,where index 0 is key and index 1 is value
// so js itself make this format [key,values]

// *****************************************************************************************

// ******************Real example why we use Object.getOwnPropertyDescriptor****************
// Imagine making an Banking app
const account ={
    name:"Gaurav",
    balance:1000,
    password:"1234",
    id:"A123"
}

Object.defineProperty(account,"balance",{ 
    //JavaScript stores object keys as strings.issliya balance ko double quotes ma likha 
    // agar nhi likhenga to double quotes ma js balance ko variable samaj lega
    writable:false
    // ab kohi v apka balance change nhi krskta ha
})
Object.defineProperty(account,"password",{
    enumerable:false
    // ab kohi v apka password nhi dekh skta ha
})
Object.defineProperty(account,"id",{
    configurable:false
    // ab kohi v apka id delete nhi krskta ha
})
// *****************************************************************************************

// Object.getOwnPropertyDescriptor is used to check how a property behaves — whether it is writable, enumerable, configurable, or has getter/setter.