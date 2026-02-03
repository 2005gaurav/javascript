
// promise
// A promise is an object that represents:
// It will give you a result later --- either success or failure

// It has 3 states:
// 1. pending --> initial state
// 2. fulfilled --> resolve()called
// 3. Rejected --> reject()called

//Task complete hone ke baad resolve() call krta hai
// fir.then() use krka promise ko consume krta hai

// ****USING PROMISES WITHOUT CALLING RESOLVE REJECT METHOD()*****
const promise = new Promise(function(resolve,reject){
  setTimeout(function (){
    //  Timer Web APIs / Node APIs me chala jata hai
   // JS wait nahi karta
    console.log("Async task completed")
    // Ye line execute ho jaati hai
   //  Kyunki ye Promise ke state pe dependent hi nahi hai
  },1000)
})
// console.log ka Promise ke state se koi lena-dena nahi hai.
// 🔸 Promise kya karta hai?
//Sirf state manage karta hai:
// pending
// fulfilled
// rejected
// 🔸 setTimeout kya karta hai?
// Browser / Node ka async API
// Ye apna kaam karega chahe Promise ho ya na ho
// * Promise async task ko control nahi karta
// * Promise sirf batata hai: kab complete hua

// Promise kabhi complete hi nahi hoyga
// Promise hamesha pending state me rahega
// kyuki resolve nhi to reject method call kiya hi nhi ha
// ***********************************************************************************


// *******************USING PROMISES*************************************
const promiseOne = new Promise(function(resolve,reject){
    // 1. Promise create hota hai → pending
  // 2. setTimeout start hota hai
// 3. .then() function register hota hai
 // 4. 1 second baad:
//    - "Async task completed"
//    - resolve() call
// 5. Promise fulfilled
// 6. .then() callback execute
//    - "promise consumed"
    setTimeout(function(){
        console.log("Async task completed")
        resolve() //yha call kiya ha 
    },1000)
})
promiseOne.then(function(){ 
    // .then direct related to resolve method
    // .then() ek method hai jo Promise pe lagta hai.
    // yha .then ma callback krka execute kiya ha 

    // Callback ek function hota hai jo kisi aur function ko diya jata hai,taaki wo baad me call ho.
    // 
    
    // Function kyun pass karte hain .then() me?
    // Kyuki .then() ko pata hona chahiye ki Promise complete hone ke baad kya karna hai.
    console.log("promise consumed")
})
// // function(){
//     console.log("promise consumed")
// }
// Ye function:
// turant execute nahi hota
// JS memory me store ho jata hai
// Promise ke resolve() call hone ka wait karta hai

// Jaise hi Promise:
// pending → fulfilled
// Ye function execute ho jata hai

// The function passed to .then() is a callback that executes only after the Promise is resolved.

// ************************USING PROMISES WITHOUT VARAIBLE********************************

new Promise(function(resolve, reject)  {
   setTimeout(function(){
    console.log("Async task")
    resolve()
   },1000)
})
.then(function(){
    console.log("promise consumed")
})

// *******************DATA CONSUMPTION IN RESOLVE******************************************
const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task")
        resolve({username:"Gaurav",password:123})
        // resolve method ma object pass kiya ha
    },1000)
})
promiseTwo.then(function(user){
    // user ya parameter ha
    // Isme resolve ke andar diya gaya data aata hai
    console.log(user)
    // The value passed to resolve() is received as a parameter in the .then() callback
})
// *******************************REJECT method()*******************************************
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Gaurav",password:1234})
        }else{
            reject(`Error:something went wrong`)
            // reject jab v use krenga to hma error handle krna ka liya .catch() use krna prega
            // Error handle nahi hota
           // App crash ya unhandled rejection
        }
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
}).catch(function(error){
    console.log(error)
})

// *******************************Channing*********************************************
// channing mtlb .then ka baad dusara .then lgna ko channing bolta ha
// jaha pehle .then() ka output → duasra .then() ka input banta hai.

// Async code ko control karne, readable banane aur dependent tasks ko correct order me chalane ke liye use hota hai.
// js single threaded ha means 1 baar ma 1 hi cheez hojyga
// Order control karna mushkil ho jata hai issliya channing use krta ha
// ************************************************************************************

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("Async task completed")
        resolve({username:"channing",password:123})
    },1000)
})
promiseFour.then(function(channing){
    console.log(channing)
    return channing.username // ya return channing.username issliya ha kyuki channing krni ha
    //jo bhi value return karte ho wahi value dusara .then() ko milta hai
    // return channing.username kiya ha mtlb ya username  ka value ko liya ha 
    // whi username dusra .then ko value miljygi
    
}).then(function(username){
    console.log(username)
})
// *****************************Promise doing with ASYNC AND AWAIT*************************
// We use async/await even when chaining exists because it makes asynchronous code look synchronous, improves readability, simplifies error handling, and is easier to maintain in complex applications.

// async/await is just syntax sugar over Promises
// Under the hood:
// Promise hi use hota hai
// Koi naya concept nahi
// Bas likhne ka better tareeka

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"JavaScript",password:123})
        }else{
            reject("ERROR:Js went wrong")
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        // ya await krega  resolve or reject ka
        // dono ma jo hua woo pass krega
        console.log(response)
    }catch(error){
        // When a promise rejects, await throws an error
        // ya jo errror parameter ha woo reject ka value ko refernce krha ha
        console.log(error)
    }
}
consumePromiseFive()