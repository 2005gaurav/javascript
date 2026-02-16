

//*******************************getter and setter**************************************/
// Getter is used to get a value
// Setter is used to set a value with control and Validation

// ******************************Problem in getter and setter of infinite loop*************/

class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        this.email.toUpperCase()
    }
    set email(value){
        // this create infinite loop because email already has a Setter

        // what Setter does:
        // when you write set email(value)
        // this.email=value            hota hai

        // It means:whenever you write:
        // obj.email=value
        // ***************JavaScript will not directly store "abc"**************************
        // Instead,it will:call set email("abc")

        // what happens when you Do:
        // user.email="test@gmail.com"
        // js thinks: oh"email has a setter .let me call it.
        // so it runs:
        // set email("test@gmail.com")


        // what Happens Inside Setter?
        // Inside Setter you wrote:
        // this.email=value;
        // ***************JavaScript will not directlystore"abc"***************************

        // ********************************************************************************
        // Instead,it will:call set email("abc")  kyuki JavaScript setter ko isliye call karta hai kyunki developer ne custom rules define kiye hote hain, jaise validation, security, aur formatting, isliye value directly store nahi hoti.
        // *********************************************************************************
        this.email=value
        // loop start
        // user.email="gaurav@gmail.com"
        // Js calls setter:
        // set email("gaurav@gmail.com")

        // Inside setter:
        // this.email = value;
        // Means:user.email="hello@gmail.com"

        // 
    }

}
const Gaurav = new User("gaurav@gmail.com",456)
// new apna ap Constructor ko chala deta ha
// this naya object ko point krta ha
// Empty object bnta hai {}
// Constructor run hota hai:
// this.email="gaurav@gmail.com"
// this.password="456"
console.log(Gaurav.email)