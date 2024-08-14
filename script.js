let form = document.querySelector('.form');
let input = document.querySelector('.input');
let answer = document.querySelector('.calculator');
let finalAnswer;
let selectedValue1 = '';
let selectedValue2 = '';

const selectElement1 = document.getElementById("currency1");

selectElement1.addEventListener("change", function() {
    selectedValue1 = selectElement1.value;
    console.log(selectedValue1);
});

const selectElement2 = document.getElementById("currency2");

selectElement2.addEventListener("change", function() {
    selectedValue2 = selectElement2.value;
    console.log(selectedValue2);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting and refreshing the page
    
    // Perform the currency conversion based on the selected values
    if (selectedValue1 === 'AZN' && selectedValue2 === 'USD') {
        finalAnswer = (input.value / 1.7).toFixed(2);
    } else if (selectedValue1 === 'USD' && selectedValue2 === 'AZN') {
        finalAnswer = (input.value * 1.7).toFixed(2);
    } else if (selectedValue1 === 'AZN' && selectedValue2 === 'EUR') {
        finalAnswer = (input.value / 1.85).toFixed(2); // Example conversion rate for AZN to EUR
    } else if (selectedValue1 === 'EUR' && selectedValue2 === 'AZN') {
        finalAnswer = (input.value * 1.85).toFixed(2); // Example conversion rate for EUR to AZN
    } else if (selectedValue1 === 'USD' && selectedValue2 === 'EUR') {
        finalAnswer = (input.value * 0.88).toFixed(2); // Example conversion rate for USD to EUR
    } else if (selectedValue1 === 'EUR' && selectedValue2 === 'USD') {
        finalAnswer = (input.value / 0.88).toFixed(2); // Example conversion rate for EUR to USD
    } else {
        finalAnswer = "Conversion not available";
    }
    
    // Display the result
    answer.innerText = `${input.value} ${selectedValue1} = ${finalAnswer} ${selectedValue2}`;
});






















