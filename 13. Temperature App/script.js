function updateConversionOptions() {
    const tempType = document.querySelector('input[name="tempType"]:checked').value;
    const conversionSelect = document.getElementById('conversionType');

    // Clear existing options
    conversionSelect.innerHTML = '';

    // Add options based on selected temperature type
    if (tempType !== "Celsius") {
        const celsiusOption = document.createElement('option');
        celsiusOption.value = "Celsius";
        celsiusOption.textContent = "Celsius";
        conversionSelect.appendChild(celsiusOption);
    }
    
    if (tempType !== "Fahrenheit") {
        const fahrenheitOption = document.createElement('option');
        fahrenheitOption.value = "Fahrenheit";
        fahrenheitOption.textContent = "Fahrenheit";
        conversionSelect.appendChild(fahrenheitOption);
    }
    
    if (tempType !== "Kelvin") {
        const kelvinOption = document.createElement('option');
        kelvinOption.value = "Kelvin";
        kelvinOption.textContent = "Kelvin";
        conversionSelect.appendChild(kelvinOption);
    }

    // Add an option to show all conversions
    const allOption = document.createElement('option');
    allOption.value = "all";
    allOption.textContent = "Show All Conversions";
    conversionSelect.appendChild(allOption);
}

// Update options when the radio button selection changes
document.querySelectorAll('input[name="tempType"]').forEach(radio => {
    radio.addEventListener('change', updateConversionOptions);
});

// Initial population of conversion options
updateConversionOptions();

document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureValue = parseFloat(document.getElementById('temperatureValue').value);
    const tempType = document.querySelector('input[name="tempType"]:checked').value;
    const conversionType = document.getElementById('conversionType').value;

    if (!isNaN(temperatureValue)) {
        let resultText = '';

        if (tempType === "Celsius") {
            const fahrenheit = (temperatureValue * 9/5) + 32;
            const kelvin = temperatureValue + 273.15;

            if (conversionType === "all") {
                resultText = `${temperatureValue}°C is:\n ${fahrenheit.toFixed(2)}°F\n ${kelvin.toFixed(2)} K`;
            } else if (conversionType === "Fahrenheit") {
                resultText = `${temperatureValue}°C is ${fahrenheit.toFixed(2)}°F`;
            } else if (conversionType === "Kelvin") {
                resultText = `${temperatureValue}°C is ${kelvin.toFixed(2)} K`;
            }
        } else if (tempType === "Fahrenheit") {
            const celsius = (temperatureValue - 32) * 5/9;
            const kelvin = celsius + 273.15;

            if (conversionType === "all") {
                resultText = `${temperatureValue}°F is:\n ${celsius.toFixed(2)}°C\n ${kelvin.toFixed(2)} K`;
            } else if (conversionType === "Celsius") {
                resultText = `${temperatureValue}°F is ${celsius.toFixed(2)}°C`;
            } else if (conversionType === "Kelvin") {
                resultText = `${temperatureValue}°F is ${kelvin.toFixed(2)} K`;
            }
        } else { // Kelvin
            const celsius = temperatureValue - 273.15;
            const fahrenheit = (celsius * 9/5) + 32;

            if (conversionType === "all") {
                resultText = `${temperatureValue} K is:\n ${celsius.toFixed(2)}°C\n ${fahrenheit.toFixed(2)}°F`;
            } else if (conversionType === "Celsius") {
                resultText = `${temperatureValue} K is ${celsius.toFixed(2)}°C`;
            } else if (conversionType === "Fahrenheit") {
                resultText = `${temperatureValue} K is ${fahrenheit.toFixed(2)}°F`;
            }
        }

        document.getElementById('result').innerText = resultText;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid number';
    }
});