
const score = 400;
// console.log(score) 
// console.log(typeof(score))

const balance = new Number(100);
// Number is an js built in construtor
// using new Number (100) (creates object,not an number)
// 1.console.log(balance);
// balance is an object that wraps the value of 100
// ouput -->[Number:100] kyuki balance is an object that ,not a plain number

// 2.console.log(balance.toString().length)
// number dont have length
// so convert kiya ha number ko string ma so we can count the length of number

// 3. tofixed()
//  3. console.log(balance.toFixed(2))
// toFixed number method in js
//tofixed method is used to control decimal values for Money
// console.log(typeof(balance))

// 4. toprecision()
//  const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4))
// toprecision is a number method
// It counts digits before + after the decimal.(ya digit or uska baad ka decimal ko v count krka round of krka value deta ha) used to control digit for accuracy

// precison greater than digit  
// let n = 12.3;
// console.log(n.toPrecision(5)); // "12.300"
// If precison greater than digit it will add 0 at the end

// (0.0012345).toFixed(2);     // "0.00" ❌ loses value
// (0.0012345).toPrecision(2); // "0.0012" ✅ precision not loose value


// 5.tolocaleString()
// const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));

// tolocalString formats numbers
// 'en-In'applies Indian number system
// Returns a string
// ideal for money and large number

// used in Banking app,E-commerce,financial dashboards


// country-specific formating
// 'en-IN' en means english language IN means Indian numbering system
// 'en-US' It is for Us numbering system


// **************** Maths ********************* //
console.log(Math)
// Math is a built-in js object
// It provides mathematical constants and methods
console.log(Math.abs(-4));  // Math .abs convert negative number into positive number(abs - absolute value)
console.log(Math.round(4.6));  // Math.round rounds a number to the nearest integer
// output --> 5 because Its decimal is greater than .5
// Rounding rules
// Decimal <0.5 -->rounds down
// Decimal > 0.5 -->rounds up
console.log(Math.round(4.4)) //output -->4 because Its decimal is less tha .5
console.log(Math.ceil(4.2));// ceil always round number UP to the nearest integer,no matter how small the decimal is
// Math.ceil(4.0); // 4
// Math.ceil(4.01); // 5
// Math.ceil(-4.2); // -4
console.log(Math.floor(4.9));//floor always round a number DOWN to the nearest integer,no matter how large the decimal is
// Math.floor(4.0); // 4
// Math.floor(4.99); // 4
// Math.floor(-4.2); // -5
console.log(Math.min(4,3,6,8)) // return the smallest value output-->3
console.log(Math.max(4,3,6,8)) // return the largest value output -->8


console.log(Math.random()); // js Math method used to Generate a random decimal number between 0 and 1
// changes number everytime
// Always  return floating-point(decimal) number less than 1
// 0.245673218
// 0.892345671
// 0.034567891
console.log(Math.random()*10 + 1);
// Generate random number upto 10
// +1 means number start from 1 to 10
console.log(Math.floor(Math.random()*10+1));
// Math .floor Round Numbr DOWN matter how long is integer
// we need integer in whole number not in decimal (5)while generating random number so we used Math.floor





















