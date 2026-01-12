
const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","Flash","batman"]

// using push method
// marvel_heros.push(dc_heros) //Array ka andar Array add krha ha

// console.log(marvel_heroes); // output --> [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'Flash', 'batman' ] ] 
// console.log(marvel_heroes[3][1])

// using concat method()
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHerors) //[ 'thor', 'Ironman', 'spiderman', 'superman', 'Flash', 'batman' ]
// ya method shi ha issna 1 hi array ma dono array ko combine krdiya ha
// return new array
 

// using spread method()
const allHerors = [...marvel_heros,...dc_heros]
console.log(allHerors) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'Flash', 'batman' ]


const another_array = [1,2,3[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Gaurav"))  // .isArray() check whether the given value is array or not output --> False aya kyuki string kohi array nhi ha
console.log(Array.from("Gaurav")) // convert an iterable or array-like object into a real array
// strings are iterable
// output --> ["G", "a", "u", "r", "a", "v"]
// iterable means  any value that can be looped over one by one
console.log(Array.from({name: "hitesh"})) 
// Tries to convert an object into an array
// output --> [] empty array aya ha
// kyuki Noraml objects are not iterable
// object doesnot have have:
// length property
// numeric indexes

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // output --> [100,200,300]
// Array.of() is a static method of Array used to create a new array from the given arguments.
// Whatever values you pass inside Array.of(), they become elements of the array.