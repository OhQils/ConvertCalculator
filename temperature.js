 document.addEventListener('DOMContentLoaded', function () {
                var inputElement = document.getElementById('inputNumber');
                var temperature1Element = document.getElementById('temperature1');
                var temperature2Element = document.getElementById('temperature2');
                var resultElement = document.getElementById('result');
                var convertButton = document.getElementById('convertButton');

                convertButton.addEventListener('click', function () {
                    var inputValue = parseFloat(inputElement.value);
                    var unit1 = temperature1Element.value;
                    var unit2 = temperature2Element.value;

                    var result;
                    switch (unit1) {
                        case 'celcius':
                            result = convertFromCelcius(inputValue, unit2);
                            break;
                        case 'kelvin':
                            result = convertFromKelvin(inputValue, unit2);
                            break;
                        case 'farenheit':
                            result = convertFromFarenheit(inputValue, unit2);
                            break;
                        default:
                            result = 'N/A';
                    }

                    resultElement.value = result.toFixed(2);
                });

                function convertFromCelcius(value, toUnit) {
                    switch (toUnit) {
                        case 'celcius':
                            return value;
                        case 'kelvin':
                            return value + 273.15;
                        case 'farenheit':
                            return (value * 9/5) + 32;
                        default:
                            return 'N/A';
                    }
                }

                function convertFromKelvin(value, toUnit) {
                    switch (toUnit) {
                        case 'celcius':
                            return value - 273.15;
                        case 'kelvin':
                            return value;
                        case 'farenheit':
                            return (value - 273.15) * 9/5 + 32;
                        default:
                            return 'N/A';
                    }
                }

                function convertFromFarenheit(value, toUnit) {
                    switch (toUnit) {
                        case 'celcius':
                            return (value - 32) * 5/9;
                        case 'kelvin':
                            return (value - 32) * 5/9 + 273.15;
                        case 'farenheit':
                            return value;
                        default:
                            return 'N/A';
                    }
                }
            });