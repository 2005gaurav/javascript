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
    //    console.log(this)


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

// console.log(user.getUserDetails()) 
// Isme koi return statement nahi hai ❌
// So JS automatically karta hai: undefined
// Tumhare function me return nahi hai, isliye JS default undefined return karta hai, aur console.log() usko print kar deta hai.


// console.log(this)
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


// ****************************Construtor function*****************************************

// constructor function in js is a special type of function that is used to create and initialize objects

// constructor function ek factory jasa function hota hai jo ek hi design se bahut saare objects banata hai

// Ye ek constructor function hai.
// 👉 Iska kaam: User object banana.


// ******************** why Do we need constructor function?*******************************
// socho tumhe 100 users banana hai

// without constructor(repeat code)
// const user1 = { name: "Aman", age: 20 };
// const user2 = { name: "Rahul", age: 22 };

// Messy ho jaata hai

// With constructor ✅:
// function User(name,age){
//     this.name=name;
//     this.age=age;
// }

// ****************** How to use it(new keyboard)*******************************************
// const u1 = new User("Aman", 20);
// const u2 = new User("Rahul", 22);

// Now:
    //  u1 → { name: "Aman", age: 20 }
    //  u2 → { name: "Rahul", age: 22 }

//  *************************what Does new DO?(behind the scenece)**************************
// when u write:
//             new User("Aman", 20);
// JavaScript automatically does this:

// step 1:Empty Object Banata hai
// {}
// step 2: this ko Us Object Se connect karta hai
// this = {}
// step 3: Properties ko set karta hai
// this.username = "Gaurav";
// this.loginCount = 12;
// this.isLoggedIn = true;
// Ab object ho gaya:
//    {
//   username: "Gaurav",
//   loginCount: 12,
//   isLoggedIn: true
// }
// Step 4: Automatically this Return Karta Hai
// return this;
// Isliye constructor me normally return likhne ki zarurat nahi hoti.

// So you don’t write return manually 👍

function User(username,loginCount,isLoggedIn){
    this.username=username;
    // this current object/current context ko access krta hai
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    return this
}
const userOne = new User("Gaurav",12,true)
// new object banata hai
const userTwo = new User("Ashish",14,false)
console.log(userOne)
console.log(userTwo)

// If we don’t use new with a constructor, it behaves like a normal function, this becomes global/undefined, and no object is created.
// Step 1:
//       this does NOT point to new object
// Step 2:
//       this becomes:
//                  Environment this
//                   Browse window
//                   Node global / undefined
// Step 3:
// Ye line:
//         this.name = "Gaurav";
// Becomes:
// Browser:
//          window.name = "Gaurav";
// 😬 Data leak!

// Step 4:
// Function has no return
// So:
//     return undefined;
// Isliye:
//      u1 = undefined

