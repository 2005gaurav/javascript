// object literal
// object literal = Directly object banana{} ke andar

// mltb:Bina class,bina constructor --> seedha object bana diya

// why it is called literal?
// literal ka mtlb hota hai :Direct value

// jaise:
// 10        // number literal
// "hello"   // string literal
// {}        // object literal
// So {} se jo object banta hai → Object Literal.

// object literal in oop
// object = Data + method

// object literal me dono ek jagah hote hain
// const car = {
//   brand: "BMW",
//   speed: 200,

//   drive(){
//     console.log("Driving...");
//   }
// }

// Data --> brand,speed
// method --> drive()

// why we use oop
// write clean,organized,resuable,and scalable code

const user = {
    username:"Gaurav",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
    //    getUserDetails = object ka method (function)

        // console.log("Got user details from database")
        // console.log(`Username:${this.username}`)

        // this hamesha us object ko point karta hai jo function ko CALL karta hai.
       // this always use current context
       console.log(this)

//        { 
// accessing all user object
//   username: 'Gaurav',
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]
// }
//     }

}
}
// console.log(user.username)     Gaurav
console.log(user.getUserDetails()) 
// Isme koi return statement nahi hai ❌
// So JS automatically karta hai: undefined
// Tumhare function me return nahi hai, isliye JS default undefined return karta hai, aur console.log() usko print kar deta hai.
console.log(this)
// {}
// Ye object ke bahar likha hai.
// Yahan koi object call nahi kar raha ❌
// So: Ye global scope me hai.
// Tum ye code browser ya Node.js me chala rahe ho.
// Node.js.Me:
// this = {} (empty object)
// Browser Me:
// this = window
// (global object)
// Isliye Tumhe {} Dikh Raha Hai
// Kyuki tum Node environment me ho.
