
// class is used to organise the code ,resue code and save memory and support oop features

// ******************************what happen without class********************************

// without class,javaScript works using prototypes,but code becomes messy,hard to manage ,and risky in big projects

// JavaScript by default prototype-based hai
// Har object ke peeche ek hidden chain hoti hai --> prototype chain

// behind the scence yhi hota ha (class bas 1 syntaxic sugar ha jo cheezo ko samaj na ma easy krta ha)
// Example (without class)
function User(name,pass){ // normal function nhi ha ya constructor function ha jiska link new sa ha 
    this.name=name;
    this.pass=pass;
}
User.prototype.login=function(){
    console.log(this.name+"login in")
    // sirf 1 function memory me 
    // Sab share karte hai
}
const u1 = new User("Rahul","1234");
u1.login()

// js karta hai
// User.prototype.login.call(u1);

// so:
// this=u1

// u1.login() method ko call kiya ha
//this.name ="Rahul" ayga output

// kyuki login method ma this.name hi ha


// *******************************************with class***********************************

class Gaurav {
    constructor(username,email,password)
    // jab v new User () banega to ya automatically run hoga
    {
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        // ya 1 function method bnyha ha
        return `${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}
const chai = new Gaurav("chai","chai@gmail.com",123)
console.log(chai) //Gaurav { username: 'chai', email: 'chai@gmail.com', password: 123 }
console.log(chai.encryptPassword()) //123abc
// encryptPassword method hai
// Method(Object ka andar hota hai)
// issliye chai.encryptPassword kiya hai

// jab hum likhte ha:
// chai.encryptPassword()
// js samajhta hai:
// this = chai

// so:
// this.password =  chai.password
// hogya issliya output dadiya 

// Agar encryptPassword() bas likhenga to
// this = window/undefined
// so:
// undefined --> Error

// **************************************behind the scence kya hot ha **********************
function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptPassword=function(){
    // Put encryptPassword inside User's prototype
    // so every User object can use it
    return `${this.password}abc`
}
User.prototype.changeUsername=function(){
    return`${this.username.toUpperCase()}`
}
const tea = new User("tea","tea@gmail.com","123")
console.log(tea.encryptPassword())

// tea.encryptPassword() issliya kiya ha
// kyuki encryptpassword () method ha 
// or method ko object ka andar hi access krskta ha 
// kyuki Method (Object) ka andar hota hai



// step:1 check in tea
// Does tea have encryptPassword?

// Nhi ha tea ka pass encryptpassword

// step:2
// go to prototype
// check krega user.prototype ma
// user.prototype ka andar ha encrpyt password ha Yes --> found


// step 3:Call it with this = tea

// js internally does:
// User.prototype.encrpytpassword.call(tea)


// That's why:
// this.password
// works → because this = tea
