document.getElementById('loanForm').addEventListener('submit', function(e) {
  //make sure results is hidden
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculate, 2000);
  e.preventDefault();
});

function calculate() {
  //dom variables  
  const loanAmount = document.getElementById('loanAmount');
  const interestRate = document.getElementById('interest');
  const yearsToRepay = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthlyPayment');
  const totalPayment = document.getElementById('totalPayment');
  const totalInterest = document.getElementById('totalInterest');

  //calculation variables
  const principle = parseFloat(loanAmount.value);
  const rate = parseFloat(interestRate.value) / 100 / 12; //rate per period
  const payments = parseFloat(yearsToRepay.value) * 12;

  //calculate monthly payment
  let monthly = principle * (rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);

  //output results if monthly is a finite number
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * payments).toFixed(2);
    totalInterest.value = ((monthly * payments) - principle).toFixed(2);

    //show results div
    document.getElementById('results').style.display = 'block';
    //hide loading div
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
    //hide loading div
    document.getElementById('loading').style.display = 'none';
  }
}

function showError(message) {
  //create div error message
  const errorDiv = document.createElement('div');
  //add bootstrap classes
  errorDiv.className = 'alert alert-danger';
  //add text to div
  errorDiv.appendChild(document.createTextNode(message));
  //insert error div at top of card body
  document.querySelector('.card-body').prepend(errorDiv);
  //set a timeout for error message
  setTimeout(function() {
    errorDiv.remove();
  }, 4000)
}