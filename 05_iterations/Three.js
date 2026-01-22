
// for..of loop in object

// you cannot use for...of loop directly on a plain object in javaScript

// Reason:
// for..of works only on iterables
// iterables have symbol.iterable

// Iterable --> An iterable is any object that can be looped over using for..of

// symbol.iterator --> is a built-in method that returns an iterator object

// These are iterable by default
// Array,string,Map,set,Nodelist,Arguments object



// using for..in loop only for normal object 

// loops key by key
const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for(const key in myObject){
    // key --> property name
    // object --> object whose properties you want to loop over
    console.log(`${key} shortcut is for${myObject[key]}`)
}
// key is variable
// [] Bracket notation is a way to access object properties using variables
// myObject[key]  key is a varaible not,a fixed property name
// key = "js"
// myObject[key] → myObject["js"] → "javascript"


// output
// js shortcut is forjavascript
// cpp shortcut is forc++
// rb shortcut is forruby
// swift shortcut is forswift by apple

