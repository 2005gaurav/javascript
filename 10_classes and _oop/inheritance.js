
//**************************************inheritance***************************************/
// inheritance :means accessing another class features (mtlb parent class ka feature liya child na)
// We use inheritance to:
// Code reuse (same code baar baar nahi likhna)
// Clean structure
//  Easy maintenance
// ****************************************************************************************

class User{
    constructor(email,password){
        this.email=email; //Yahin pe email store hota hai.
        this.password=password;
    }
    logMe(){ //jab v kavi logMe() function ko call krenga to ya
        console.log(`Email:${this.email}`)
    }
}
    class Teacher extends User{ //extends is used to access User properties and method
        // mtlb user ki properties ko inherit krha ha
        constructor(email,password,username){
            super(email) //super is used to call the parent constructor
            // ya email parent constructor ka ha
            // Yahan email store nahi ho raha ❌
           // Yahan email sirf parameter hai
        // *********************************************************************************
        //  We write email in Teacher constructor so that it can receive the value and pass it to the parent constructor using super(), because the parent constructor is not called automatically.
        // *********************************************************************************
        this.username=username;
        this.password=password
    }
}

const chai = new User("gaurav@gmail.com","456")
console.log(chai)
chai.logMe() //issliya kiya ha chai.logme() kyuki logme method ha 
// jo function object ka andar declare hota ha woo method hota ha 

// method ko bina object ka access nhi krskta ha
console.log(chai instanceof User); // 
