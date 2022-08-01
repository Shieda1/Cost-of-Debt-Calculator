// https://calculator.swiftutors.com/cost-of-debt-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const costofDebtRadio = document.getElementById('costofDebtRadio');
const debtInterestRateRadio = document.getElementById('debtInterestRateRadio');
const totalTaxRateRadio = document.getElementById('totalTaxRateRadio');

let costofDebt;
let debtInterestRate = v1;
let totalTaxRate = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

costofDebtRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt Interest Rate (Rd)';
  variable2.textContent = 'Total Tax Rate (tc)';
  debtInterestRate = v1;
  totalTaxRate = v2;
  result.textContent = '';
});

debtInterestRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Debt';
  variable2.textContent = 'Total Tax Rate (tc)';
  costofDebt = v1;
  totalTaxRate = v2;
  result.textContent = '';
});

totalTaxRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Debt';
  variable2.textContent = 'Debt Interest Rate (Rd)';
  costofDebt = v1;
  debtInterestRate = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(costofDebtRadio.checked)
    result.textContent = `Cost of Debt = ${computeCostofDebt().toFixed(2)} %`;

  else if(debtInterestRateRadio.checked)
    result.textContent = `Debt Interest Rate = ${computeDebtInterestRate().toFixed(2)} %`;

  else if(totalTaxRateRadio.checked)
    result.textContent = `Total Tax Rate = ${computeTotalTaxRate().toFixed(2)} %`;
})

// calculation

function computeCostofDebt() {
  return (Number(debtInterestRate.value) / 100) * (1 - Number(totalTaxRate.value));
}

function computeDebtInterestRate() {
  return ((Number(costofDebt.value) / 100) / (1 - (Number(totalTaxRate.value) / 100))) * 100;
}

function computeTotalTaxRate() {
  return (((Number(debtInterestRate.value) / 100) - (Number(costofDebt.value)) / 100) / (Number(debtInterestRate.value) / 100)) * 100;
}