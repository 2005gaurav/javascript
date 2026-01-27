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

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop page reload

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Validation
  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please enter a valid height";
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please enter a valid weight";
    return;
  }

  // BMI calculation
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // BMI category logic
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  // Display result
  results.innerHTML = `
    <p>Your BMI is <strong>${bmi}</strong></p>
    <p>Category: <strong>${category}</strong></p>
  `;
});


