const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function (button){
    // *****************************why we use loop here**********************
    // const buttons = document.querySelectorAll('.button');
    // This returns a NodeList
    // // It contains multiple elements, not just one

    // **********************Why a loop is necessary**********************
    //  JavaScript cannot directly apply operations to all elements inside a NodeList at once.
    // buttons is a collection
    // addEventListener works on one element

    // ***********************What forEach does*************************
    // Goes one by one
   // Each time, button is one individual element
  // Lets you perform actions on each element

    console.log(button)
    button.addEventListener('click',function (e){
        console.log(e);
        //  e is the entire event object
       // It contain all information about the event
        console.log(e.target)
        // Use e.target → when you need to know which element was clicked
        if(e.target.id ==='grey'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id ==='white'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
    });
});
// what is e?
//  e is the entire event object
// It contain all information about the event,such as
// Event type (click)
// Mouse position
// Key pressed
// Which element triggered it
// Timing, bubbling info, etc.
// Think of e as a full report of what happened.

// e.target
// e.target is one property inside e.
// It tells you:
// Which exact element triggered the event

// Use e.target → when you need to know which element was clicked