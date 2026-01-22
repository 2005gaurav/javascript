
// for of loop
// for of loop  is used to iterate over iterable values

// It gives you values directly,not indexes
// Basic Syntax
// for (const value of iterable) {
//     // use value
// }

// iterable --> something you can loop over(Array,String,Map,Set etc)
// value --> each item from the iterable(one by one)


// simple example with Array

const herores =["Flash","batman","superman"];
for(const hero of herores){
    console.log(hero) // output --> Flash,batman,superman sab hero ka andar agua ha
}

//  for ..of with Strings
let name = "js";
for(let char of name){
    console.log(char); // output --> j s EACH CHARACTER IS RETURNED ONE BY ONE
}

// Map
// Map objects are collection of key-values pairs.[A key in the Map may occur once]It is unique in the Map's collection.A Map object is iterated by key-value pairs for..of loop returns a 2-member array of[key,value]for each iteration

const map = new Map()
map.set('IN',"India")
map.set('USA','United states of America')
map.set('Fr','France')
map.set('IN',"India") // key in map occur only once SO ya variable create nhi hoga
// console.log(map)
// Map(3) {           ouput
//   'IN' => 'India',
//   'USA' => 'United states of America',
//   'Fr' => 'France'
// }                   NORMAL MAP IS  USED TO STORE KEY AND VALUE LIKE THESE


// using for..of with map
// Map stores key-value pairs

// for(const key of map){
//     // console.log(key)
// }

// when you loop over a Map using for..of,javaScript returns each entry as an array
// [ 'IN', 'India' ] output
// [ 'USA', 'United states of America' ]
// [ 'Fr', 'France' ]


// so we use array destructing
// const [key, value] = ["IN", "India"];
// which becomes
// key = "IN"
// value = "India"
// This happens automatically inside the loop

// for (const [key, value] of map) uses array destructuring to directly extract key and value from each Map entry returned as an array.

for(const[key,value] of map){
    console.log(key,':-',value)
}
// IN :- India
// USA :- United states of America
// Fr :- France

// THIS WORKS ONLY BECAUSE Map  ENTRIRES ARE ITERABLE ARRAYS

// Map --> iterable
// Each item --> [key,value] array

// Plain objects do not work