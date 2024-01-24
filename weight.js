document.addEventListener('DOMContentLoaded', function () {
                var inputElement = document.getElementById('inputNumber');
                var weight1Element = document.getElementById('weight1');
                var weight2Element = document.getElementById('weight2');
                var resultElement = document.getElementById('result');
                var convertButton = document.getElementById('convertButton');

                convertButton.addEventListener('click', function () {
                    var inputValue = parseFloat(inputElement.value);
                    var unit1 = weight1Element.value;
                    var unit2 = weight2Element.value;

                    var result;
                    switch (unit1) {
                        case 'miligram':
                            result = convertFromMiligram(inputValue, unit2);
                            break;
                        case 'gram':
                            result = convertFromGram(inputValue, unit2);
                            break;
                        case 'kilogram':
                            result = convertFromKilogram(inputValue, unit2);
                            break;
                        default:
                            result = 'N/A';
                    }

                    resultElement.value = result.toFixed(6);
                });

                function convertFromMiligram(value, toUnit) {
                    switch (toUnit) {
                        case 'miligram':
                            return value;
                        case 'gram':
                            return value / 1000;
                        case 'kilogram':
                            return value / 1e+6;
                        default:
                            return 'N/A';
                    }
                }

                function convertFromGram(value, toUnit) {
                    switch (toUnit) {
                        case 'miligram':
                            return value * 1000;
                        case 'gram':
                            return value;
                        case 'kilogram':
                            return value / 1000;
                        default:
                            return 'N/A';
                    }
                }

                function convertFromKilogram(value, toUnit) {
                    switch (toUnit) {
                        case 'miligram':
                            return value * 1e+6;
                        case 'gram':
                            return value * 1000;
                        case 'kilogram':
                            return value;
                        default:
                            return 'N/A';
                    }
                }
            });