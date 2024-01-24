document.addEventListener('DOMContentLoaded', function () {
                var inputElement = document.getElementById('inputNumber');
                var length1Element = document.getElementById('length1');
                var length2Element = document.getElementById('length2');
                var resultElement = document.getElementById('result');
                var convertButton = document.getElementById('convertButton');

                convertButton.addEventListener('click', function () {
                    var inputValue = parseFloat(inputElement.value);
                    var unit1 = length1Element.value;
                    var unit2 = length2Element.value;

                    var result;
                    switch (unit1) {
                        case 'milimeters':
                            result = convertFromMilimeters(inputValue, unit2);
                            break;
                        case 'centimeters':
                            result = convertFromCentimeters(inputValue, unit2);
                            break;
                        case 'meters':
                            result = convertFromMeters(inputValue, unit2);
                            break;
                        case 'kilometers':
                            result = convertFromKilometers(inputValue, unit2);
                            break;
                        default:
                            result = 'N/A';
                    }

                    resultElement.value = result.toFixed(6);
                });

                function convertFromMilimeters(value, toUnit) {
                    switch (toUnit) {
                        case 'milimeters':
                            return value;
                        case 'centimeters':
                            return value / 10;
                        case 'meters':
                            return value / 1000;
                        case 'kilometers':
                            return value / 1e+6;
                        default:
                            return 'N/A';
                    }
                }

                function convertFromCentimeters(value, toUnit) {
                    switch (toUnit) {
                        case 'milimeters':
                            return value * 10;
                        case 'centimeters':
                            return value;
                        case 'meters':
                            return value / 100;
                        case 'kilometers':
                            return value / 1e+5;
                        default:
                            return 'N/A';
                    }
                }

                function convertFromMeters(value, toUnit) {
                    switch (toUnit) {
                        case 'milimeters':
                            return value * 1000;
                        case 'centimeters':
                            return value * 100;
                        case 'meters':
                            return value;
                        case 'kilometers':
                            return value / 1000;
                        default:
                            return 'N/A';
                    }
                }

                function convertFromKilometers(value, toUnit) {
                    switch (toUnit) {
                        case 'milimeters':
                            return value * 1e+6;
                        case 'centimeters':
                            return value * 1e+5;
                        case 'meters':
                            return value * 1000;
                        case 'kilometers':
                            return value;
                        default:
                            return 'N/A';
                    }
                }
            });