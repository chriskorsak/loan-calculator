document.getElementById('loanForm').addEventListener('submit', calculate);

function calculate(e) {
  //dom variables
  
  //input
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

  //monthly payment
  let monthly = principle * (rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);

  monthly = monthly.toFixed(2);

  monthlyPayment.value = monthly;

  //total payment
  let total = monthly * payments;
  totalPayment.value = total.toFixed(2);

  //total interest
  let totalI = totalPayment.value - principle;
  totalInterest.value = totalI.toFixed(2);

  e.preventDefault();
}