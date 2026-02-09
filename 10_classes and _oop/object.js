
function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2
// function me  property add kiya ha .operator Object ma use krta hai
// js me function bhi object hota hai

console.log(multipleBy5(5)); //25
console.log(multipleBy5.power); //2
console.log(multipleBy5.prototype); //{}

// Every function have one Special Object hota hai
// jiska naam hoata hai:prototype
// jab tum likhte ho:
//                 new User()
// 1️⃣ Ek naya object banata hai
// 2️⃣ Us object ko User.prototype se connect karta hai

//***************JavaScript prototype-Based language***************************************/
// function work has function or function can work with Object
// javaScript  har cheez Object sa connect hota ha

// JavaScript = Prototype-Based Language
// Objects → objects se inherit karte hain
// Prototype ke through.
// ALmost Everthing - Object
// jS me sabse upar hota hai:
// 👉 Object.prototype
// Har cheez akhir me yahin connect hoti hai.
// Example --
// let arr = [];
// Behind the scenes:
// arr → Array.prototype → Object.prototype → null

// protoype har cheez upar tak khoj ta ha
// Agar array ka prototype ma nhi mila to Object ma jyga end ma kux nhi mila to chain whi khatam hojyga


// ********************************What is prototype****************************************
// Prototype = ek object hota hai jisme common methods & properties hoti hain.
// Jab bhi JS koi naya object banata hai,wo usko prototype se connect kar deta hai.
// 🔹 Prototype:
// ✅ Ek object hota hai
// ✅ Jahan common methods hote hain
// ✅ Objects yahin se inherit karte hain
// ✅ Memory bachata hai


// ****************creating own prototype method to save memory*****************************

function createUser (username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
    console.log(`The price of chai is increase ${this.score}`)
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
//    Sirf 1 function memory me bana
//  Sab objects usko share kar rahe hain
// Matlab:
// 1000 users = 1 function only
}
// yha hmlog prototype me  method add kiya ha 
// printMe method ha 
// jab v printMe object method ko call krenga to price of score print hoga

// Sab object ek hi function share karte hain
// so Memory save hoti hai

const chai = new createUser("chai",25)
// chai ek object hai jo createUser constructor se bana hai.
// inside chai:
// {
//   username: "chai",
//   score: 25
// }
// Aur iska hidden connection:
// chai → createUser.prototype



// emtpy object banga -->{}
// this = {}
// new ka direct link with prototype
// constructor run hota hai
// object return krega

// so chai ban gya ha
// {
//   username: "chai",
//   score: 25
// }

// Aur iska hidden link:
// chai → createUser.prototype → Object.prototype → null
// Isliye chai ko printMe() mil jata hai 
chai.printMe()
// Step 1: Chai ke andar search
// chai.printMe ❓

// Kya chai ke andar direct printMe hai?
// ❌ Nahi hai.

// Step 2: Prototype me search
// createUser.prototype.printMe ✅
// Yahan mil jata hai.
// Is process ko bolte hain:
// 👉 Prototype Lookup

// Step 3: this Set Hota Hai
// Jab function mil jata hai, JS usko call karta hai:
// this = chai
// Matlab:
// 👉 this ab chai object ko refer karega.

// chai.printMe() ka matlab:
// "Hey JS, chai object ka score print kar do"

chai.increment()



const Tea = createUser("tea",250)
//  Yahan new use nahi hua ❌
// To:
// 👉 Normal function call ho jata hai
// 👉 Constructor nahi ban pata

// this Ab Browerser ma point krega
// this = window

// window.username = "tea"
// window.score = 250

// Global variable ban gaya!

// Aur function kuch return nahi kar raha, isliye:
// tea === undefined
