
// what are falsy values
// false,0,-0,""emptyString,undefined,null,Nan,ONBigInt,

// what are Truthy values
// "false",true,1,-1," " stringwithSpace,infinity,-100,"0",[],funtion(){}


const userEmail = []
if(userEmail){
    // console.log("Got user Email") 
    //output --> Got User Email because empty[]array is truthy value
} 
else{
    console.log("Don't have user Email")
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    // object.keys() covert object keys into an array 
    // .length check krha ha array length is zero or not
    // zero hoga kyuki kohi key nhi diya ha
    console.log("object is empty") 
    // output --> object is empty  
}

// Nullish Coalescing operator ?? in js

// The Nullish Coalescing operator ?? returns the right-hand value only when the left-hand is null or undefined


// It was introduced to fix problem with ||(or operator)

// why ?? is Needed (problem with ||)
// let score = 0;
// let result = score || 100;

// console.log(result); // 100 ❌ (wrong)
// Because 0 is falsy value,|| picks the default value

// using ??
let score = 0;
let result = score ?? 100;

console.log(result); // 0 (correct)
// check for null or undefined

// left value                     Result
// null                           right value
// undefined                      right value
// 0                              left value
// ""                             left value
// false                          left value

// val1 = null ?? 10 ?? 20
// output --> 10 The expression returns 10 because ?? evalutes left to right and return the first value that is not null or undefined

