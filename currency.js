document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    var inputElement = document.getElementById('inputNumber');
    var currency1Element = document.getElementById('currency1');
    var currency2Element = document.getElementById('currency2');
    var resultElement = document.getElementById('result');
    var convertButton = document.getElementById('convertButton');

    // Add event listener to the "Convert" button
    convertButton.addEventListener('click', function () {
        // Get input value
        var inputValue = parseFloat(inputElement.value);

        // Get selected currencies
        var currency1 = currency1Element.value;
        var currency2 = currency2Element.value;

        // Perform currency conversion
        var result;
        if (currency1 === 'USD' && currency2 === 'RM') {
            result = inputValue * 4.73; // Example conversion rate
        } else if (currency1 === 'RM' && currency2 === 'USD') {
            result = inputValue / 4.73; 
        } else if (currency1 === 'USD' && currency2 === 'SGD') {
            result = inputValue * 1.34; 
        } else if (currency1 === 'SGD' && currency2 === 'USD') {
            result = inputValue / 1.34; 
        } else if (currency1 === 'RM' && currency2 === 'SGD') {
            result = inputValue * 0.28; 
        } else if (currency1 === 'SGD' && currency2 === 'RM') {
            result = inputValue / 0.28; 
        } else {
            result = 'N/A';
        }

        // Display the result
        resultElement.value = result.toFixed(2); // Limit to 2 decimal places
    });
});
