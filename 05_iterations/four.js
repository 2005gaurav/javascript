
// for each() is an array method that executes a callback function once for every element in an array

// what is callback function?
// The function passed inside forEach()is called function
//  (num) => {
//     console.log(num);
// }
// You don't need to call it
// forEach() calls it automatically for each element


// const coding = ["js","c","java","python","cpp"]

// coding.forEach( function (element){  //ya element coding ka sab value laliya ha
    // element=js 
    // index = 0

    // element = c  ya asha krta ha sab element leta ha
    // index = 1

    // console.log(element)
// })


let show = ["Tmkoc","baalveer","chidya ghar"]
show.forEach( (item,index,array)=> {
    console.log(item,index,array)
// Tmkoc 0 [ 'Tmkoc', 'baalveer', 'chidya ghar' ]
// baalveer 1 [ 'Tmkoc', 'baalveer', 'chidya ghar' ]
// chidya ghar 2 [ 'Tmkoc', 'baalveer', 'chidya ghar' ]
})



const myCoding = [
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]

myCoding.forEach( (item,index)=> {   //item na access krliya ha array ki sab value ko
    console.log(index,item.languageName)
// 0 javaScript   access krliya languageName ki value ko
// 1 java
// 2 python
})

// Dot operator --> Dot operator is used when u know the property fixed name

// Bracket --> Bracket notation is used whose values are resolved at runtime
