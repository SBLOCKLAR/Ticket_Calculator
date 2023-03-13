// Input Target
const avgMonthlyInput = document.querySelector('input');

// Elements to Update
const annualEl = document.querySelector('#grossAnnual');
const visaMCEl = document.querySelector('#visaMC');
const discoverEl = document.querySelector('#discover');
const amexEl = document.querySelector('#amex');


// First pull Annual
function grossAnnual(avgMonthly) {
    let grossAnnualResult = avgMonthly * 12;
    annualEl.innerText = '$' + parseInt(grossAnnualResult);
}

// function visaMC(grossAnnual)
function visaMC(avgMonthly) {
    let visaMCResult = Math.ceil((avgMonthly * 12) * 0.70);
    visaMCEl.innerText = '$' + parseInt(visaMCResult);
}

// function Discover
function discover(avgMonthly) {
    let discoverResult = (avgMonthly * 12) * 0.05;
    discoverEl.innerText = '$' + parseInt(discoverResult);
}

// function AMEX
function amex(avgMonthly) {
    let amexResult = (avgMonthly * 12) * 0.25;
    amexEl.innerText = '$' + parseInt(amexResult);
}

//  Then insert in appropriate fields
avgMonthlyInput.addEventListener('input', function () {
    const avgMonthly = avgMonthlyInput.value;
    grossAnnual(avgMonthly);
    visaMC(avgMonthly);
    discover(avgMonthly);
    amex(avgMonthly);
});

