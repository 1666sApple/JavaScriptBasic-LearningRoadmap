document.getElementById('convertBtn').addEventListener('click', function(){
    const temperatureValue = parseFloat(document.getElementById('temperatureValue').value);
    const tempType = document.querySelector('input[name="tempType"]:checked').value;

    if (!isNaN(temperatureValue)) {
        let resultText;

        if (tempType == "Celsius") {
            const fahrenheit = (temperatureValue*9/5) + 32;
            const kelvin = temperatureValue+273.15;
            resultText = `${temperatureValue} °C is ${fahrenheit.toFixed(2)} °F \
            and ${temperatureValue} °C is ${kelvin.toFixed(2)}K`;
        } else if (tempType == "Fahrenheit") {
            const celsius = (temperatureValue-32)*5/9;
            const kelvin = celsius + 273.15;
            resultText = `${temperatureValue} °F is ${celsius.toFixed(2)} °C \
            and ${temperatureValue} °F is ${kelvin.toFixed(2)}K`
        } else {
            const celsius = temperatureValue - 273.15;
            const fahrenheit = (celsius * 9/5) + 32;
            resultText = `${temperatureValue} K is ${celsius.toFixed(2)}°C \
            and ${temperatureValue} K is ${fahrenheit.toFixed(2)}°C`     
        }

        document.getElementById('result').innerText = resultText;
    } else {
        document.getElementById('result').innerText = `Please, enter a valid number`
    }
});
