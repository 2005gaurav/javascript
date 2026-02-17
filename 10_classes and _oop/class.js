
// classes
// we use classes to organise code,reuse logic,save memory,support oop features and make applications scalable

// inheritance Easy ho jaata hai

// inheritance--> ek class dusri class ka features use kar sakti hai

// parent --> child ko power deta hai
// example:
class User{
    login(){
        console.log("User logged in")
    }
}
class Admin extends User{ //admin na User ko inheritance krliya ha mtlb uska class ko use krskta ha
    deleteUser(){
        console.log("User deleted")
    }
}
const a1=new Admin();
a1.login()
a1.deleteUser()
// User = Parent
// Admin = Child
// extends = inheritance
// Admin ko login mil gaya  *********kyuki Admin na User ko inheritance krliya ha***********


// *******************************✅ Why Use Inheritance?**********************************
//  Code repeat nahi hota
//  Reuse hota hai
//  Time bachta hai
//  Clean code

//  Without inheritance:
// Har class me login() likhna padega


// ********************************Encapsulation*******************************************
// It protect data 
// we can use keyword like getter and setter which help access data in a allowed way
// you cannot access data in a direct way
// ATM me:
// ❌ Tum machine khol ke paisa nahi le sakte
// ✅ Sirf PIN dalke milta hai
// 👉 Ye hi encapsulation ha


class Encap{
    constructor(password){
        this._password=password; //private type
        // _password is a hidden variable
    }
    get password(){
        return "***********" //hide krrha ha password ko 
        // agra password dekha ha to hma jaha password store ha usko call krna preaga
        // return this._password krna prega kyuki orginal password yha store ha

        // issliya hmlog ko output ma ******** dekha rha ha
    }
    set password(val){
        if(val.length < 4){
            console.log("week password")
        }
        else{
            this._password=val;
        }
    }
}
const u1 = new Encap("1234")
console.log(u1.password) //you cannot access direct value in getter and setter output--> *********** kyuki orginal password private variable ma store ha
u1.password="12" //week password

// Getter hide karta hai
// _password me real data hota hai
// Setter protect karta hai

