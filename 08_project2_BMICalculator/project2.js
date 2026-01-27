// It is a method of the event object (e) that stops the browser’s default behavior for that event.
// e.preventDefault() stops the browser’s automatic action so you can control the event using JavaScript.

// ***************************e.preventDefault()*******************************
// Because in modern websites:
// We don’t want page reloads
// We want custom validation
// We want full control using JavaScript

// **************************EXAMPLE*******************************************
// myForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("Form handled using JS");
// });

// *****************************************************************************
// Without preventDefault()
// Page reloads
// JS code stops

// *******************************************************************************
// With preventDefault()
// No reload
// JS controls the logic

form.addEventListener('submit',function(e){
    e.preventDefault();

   const height= parseInt(document.querySelector('#height').value);
//    .value is used to access user enter value
// parseInt is used to take integer value
   const weight= parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results')

if(height === ''||height < 0||isNaN(height)){
    results.innerHTML=`please give a valid height ${height}`;
}else if(weight === ''||weight<0||isNaN(weight)){
    results.innerHTML=`please give a valid weight ${weight}`;
}else{
    const bmi =(weight /((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>${bmi}</span>`
}
})

