
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) =>{return num + 10})

const newNums = myNumbers 
                      .map((num)=>num+10) // har 1 number ma 10 add krega
                      .map((num)=>num+1) // 10 add hona ka baad +1 hoga
                      .filter((num)=>num >= 40) // phir filter true condition check krega phir return krega value newNums ka variable ma
// These is called chaning method jab tak pura method complete na ho jaya tab tak chaning hota ha 
// console.log(newNums)



// REDUCE method
// reduce() takes all array elements and combines them into one final value step by
// It is mostly used in shopping cart

const numbers = [10,20,30,40,50]

const Total = numbers.reduce((accumulator,currentValue) => {
    return accumulator + currentValue
},0); // ,0 ya intial value diya ha accumulator ko kyuki 1st value accumulator ka pass nhi ha
// 0 + currentValue 10 = 10
// 10 + currentValue 20 =30 asha hota ha rhega jab tak loop stop nhi hojya
console.log(Total) // 150


//  Real-World Example: Shopping Cart 
const cart = [
    {item:"Book",price:200},
    {item:"pen",price:50}
];
// calculate Total price of both product

const total = cart.reduce((acc,product) => {
    return acc+product.price;
},0)
console.log(total) //250

// We use reduce() when we want to combine multiple values of an array into ONE final result.
