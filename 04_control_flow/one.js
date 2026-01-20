
// control flow determines the order in which statements are executed in a program based on conditions,loops,function calls,and asynchronous operations

// if
const temperature = 51
// if(temperature === 50){
//     console.log("less than 50")
// }
// else{
//     console.log("temperature is greater than 50")  //ouput--> temperature is greater than 50
// }

const score = 200
if(score>100){
    let power = "fly"
    // console.log(`User power:${power}`);
}
// console.log(`User power:${power}`);  // Throw error kyuki let is a block scope jo if {} ka block ka andar create hua ha 
// print krwana ha value ko to if statement ka anadar hi likhna prega

const balance = 1000
// if(balance > 500) console.log("test")  //  NOT A GOOD WAY TO PRINT VALUE

if(balance < 500){
    console.log("less than 500")
}
else if (balance < 750){
    console.log("less than 750")
}
else if (balance < 900){
    console.log("less than 900")
}
else{
    // console.log("less than 1200") 
}    // check every statement agar kohi sa v agar 1 statement true hojata to code udhar hi stop hojta ha 
// sab sa last ma else ata ha ha jab sab statement wrong hojata ha


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard  && 2==3){
    // Returns true if both conditions are true
    // Otherwise returns false
    console.log("Allow to buy course")
} 
if(loggedInFromEmail||loggedInFromGoogle) {
    console.log("User logged in") // ouput --> User logged in  
    // || or operator 
    // Returns true if at least one condition is true
    // Returns false only if all are false
}

// These values always evaluate to false:
//  false,-0,0,ON BigInt zero,""empty string,null,undefined,Nan

// These vlaues always  evaluate to true:
// [],Infinity,-100,function(){}," " empty string with space,"false","0",-1,1
