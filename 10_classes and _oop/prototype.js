
// let myName = "hitesh     "
// let myChannel = "chai     "

// console.log(myName.length)//11
// console.log(myName.trueLength) //undefined
// // undefined issliya aya kyuki  JS ne aisa koi method banaya hi nahi.

// **********************creating OWN method with prototype*********************************

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        // Jab function object ke andar hota hai → usko method bolte hain.
        console.log(`spidy power is ${this.spiderman}`)
    }
}
Object.prototype.Gaurav=function(){
    console.log(`Gaurav is present in all object`)
// Object.prototype → Sab Object ka parent
// Object ke prototype me ek naya function add kar diya.
// Gaurav → Naya function
}
heroPower.Gaurav()
// heroPower → Object.prototype → Gaurav()
// heroPower ek object hai 
// Object.prototype me Gaurav hai 
// Isliye mil gaya

// Array Me Kyun Chala
myHeros.Gaurav()//Gaurav is present in all object
// JavaScript me Array bhi ek Object hota hai
// Array check krega Gaurav ma 
// phir apna prototype ma ussma v nhhi mila to ya
// object ka prototype ma check krta ha


Array.prototype.heyGaurav=function(){
    console.log(`Gaurav says Hello`)
}
myHeros.heyGaurav()//Gaurav says Hello

// heroPower.heyGaurav()   // we cannot go Object to Array
// JavaScript me inheritance upar ki taraf hota hai, niche nahi.
// Array = child 
// Object = parent



let anotherUsername = "JavaScript    "

String.prototype.trueLength=function(){
    // String ke prototype me ek custom method add kar diya.
    //  string pe trueLength() available hai
    console.log(`${this}`) //JavaScript  
    console.log(`${this.name}`) //undefined this ek String object hai, usme koi name property nahi hoti.
    console.log(`True length is:${this.trim().length}`) //True length is:10
}

anotherUsername.trueLength()
// Jab tum call karte ho:
// anotherUsername.trueLength()
// JS karta hai:
//             this = new String("JavaScript    ")

