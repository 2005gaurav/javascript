
// this._email isliye banate hain kyuki:

// this.email use karenge toh setter dobara call ho jaayega --> infinite loop banjayega



// using _email new varaible in getter and setter to avoid :
// infinite recursion(infinite loop)
// To store actual value 
// Truly private 
//Bahar se #email access hi nhi kar skte

class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){ //getter is used to get a value  *value lena ha to return krna prega
    return this._email.toUpperCase()
        
    }

    set email(value){  // email ma setter lgdiya ha apna function jab v email ko lenga to ya setter function hoga
        this._email=value;
        // this._email nya variable bnyha ha value store krna ka liya 
    }
}

const no = new User("gaurav@gmail.com","456")
console.log(no.email);
