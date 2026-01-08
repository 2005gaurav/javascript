

// coversion krha ha 

// number
// let score = 45;
// console.log(score)
// console.log(typeof(score))  output --> 45,type-->number ha


//  1.CONVERTING INTO NUMBER DATATYPES 
// let score = undefined;
// let convertNumber = Number(score)
// console.log(typeof(convertNumber));
// console.log(convertNumber); 

/*
CONVERTING INTO NUMBER DATATYPES 
 1."33" --> ya string number ma convert hojta ha [output --> 33]
 2."33abc" -->ya number ma convert nhi hota [output --> NaN ata ha means ya number nhi ha]
 3. true --> boolean true [output 1 dega] false -- boolean false[output 0 dega]
 4. null --> [ouput 0 dega ]
 5. undefined -->[output Nan dega]
 */


//  2.CONVERTING INTO STRING DATATYPES
let number = true;
let convertString = String(number);
// console.log(convertString);
// console.log(typeof(convertString));

/*
1.30 --> ya  number string ma convert hogya ha[output 30]
*/

// 3. CONVERTING INTO BOOLEAN DATATYPES
let isLoggedIn = "";
let convertBoolean = Boolean(isLoggedIn);
// console.log(convertBoolean);
// console.log(typeof(convertBoolean))

/*
1. "gaurav" --> string ko boolean ma convert krdiya ha[output true aya ha] or iska type v[boolean aya ha]
2. "" -->empty string ma boolean ma convert kiya ha[output false aya ha] iska type [boolean hi aya ha]
*/

// **************operations*************
// console.log(1+2);
// console.log(1*2);
// console.log(1/2);
// console.log(1%2);


console.log("1"+2+3);
// output --> 123 ayga kyuki phela string aya ha issliya
// js sabko string hi larhi ha
console.log(1+2+"3");
// output -->33 1 or 2 ko add krdiya ha kyuki woo number tha uska baad string ha issliya 
// usko string hi rkha ha


// post-increament operator(x++)
// return the current value first,then increases it by 1
let x = 3;
let y = x++;
// y = x ha 
// y to 3 hogya post increament phela value ko return krta ha

// ab x ka value 3 tha ++ krka x ka value 4 hogya ha
// console.log(x)
// console.log(y)

// pre-increament operator(++x)
// It increase the value first then use it
let A = 4;
let B = ++A;
// ++4 phela A ka value increase hoga A ka  value 4 sa 5 hogya ha
// B ka value v 5 hoga kyuki B == ++A ha issliya 

console.log(A);
console.log(B);




