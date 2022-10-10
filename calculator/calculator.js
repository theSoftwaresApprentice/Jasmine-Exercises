window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {             //what does this mean
    setupIntialValues();  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
} 


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amountInput = document.getElementById("loan-amount");
  const yearsInput = document.getElementById("loan-years");
  const rateInput = document.getElementById("loan-rate");
  amountInput.value = 300000;
  yearsInput.value = 27.5;
  rateInput.value = 7.24;
  update();
}


// Get the current values from the UI
// Update the monthly payment
function update() {
  const updatedUserValues = getCurrentUIValues(); 
  updateMonthly(calculateMonthlyPayment(updatedUserValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(valuesObject) {
  let n = Math.floor(valuesObject.years*12);
  let i = (valuesObject.rate/100)/12;
  return ((valuesObject.amount*i)/(1-Math.pow((1+i), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const paymentDisplay = document.querySelector('#monthly-payment');
  paymentDisplay.innerText = `$${monthly}`
}
