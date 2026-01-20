
//  For loop repeatedly executes a block of code as long as a specified condition is true,

// Basic Syntax
// for (initialization; condition; increment/decrement) {
//   // code to execute
// }

for(let i = 0;i<=10;i++){
    const element = i;
    if(element == 5){
        console.log("5 is the best number");
    }
    console.log(element)
}

// for loop in Array
let myArray = ["flash","batman","superman"]
for(let index = 0;index < myArray.length;index++){
    const element = myArray[index]
    // myArray[index] used to access array elements
    // works because arrays are objects with numeric keys
// myArray[0] // "flash"
// myArray[1] // "batman"
// myArray[2] // "superman"

    console.log(element);
}

// break and continue

for(let index = 1; index<=20;index++){
    if(index == 5){
        console.log("Detected 5")
    break; // code will stop after 5 is detected
}
console.log(`value of i is ${index}`)
// This line is outside the if block
// It executes every iteration BEFORE index become 5
// when index === 5,break stops the loop before this line runs
}

// for(let index = 1;index<=20;index++){
//     if(index == 5){
//         console.log(`Detected 5`)
//         continue // code will not stop after 5 will detected
//     }
//     console.log(`value of i is ${index}`)
// }

// for (let index = 1; index <= 20; index++) {
//     console.log(`value of i is ${index}`)
//     if (index == 5) {
//         console.log("Detected 5")
//         break;
//     }
// }
