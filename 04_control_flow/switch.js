
// The switch statement is a control-flow statement used to execute different blocks of code based on the value of an expression

// Basic syntax
 // switch (expression) {
//   case value1:
//     // code
//     break;

//   case value2:
//     // code
//     break;

//   default:
//     // code
// }

// swich case using integer
// let day = 3;
// switch(day){
//     case 1:
//     console.log("Monday");
//     break;
//     case 2:
//     console.log("Tuesday");
//     case 3:
//     console.log("wednesday");
//     break; // break is used to stop the code if value matched without break after that value all will print
//     case 4:
//     console.log("Thrusday");
//     break;
//     default: // if nothing run default will run
//     console.log("Invalid day")
// }

// switch case using String

const months = "march";
switch (months) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("february");
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("April")
        break;
    default:
        console.log("Invalid months")
        break;
}

// continue is used to skip current iteration and move to next iteration