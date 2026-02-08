
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

