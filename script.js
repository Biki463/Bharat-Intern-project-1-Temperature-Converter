function convertTemperature() {
    // Get the input value (temperature in Celsius)
    const celsiusInput = parseFloat(document.getElementById('celsius').value);

    // Check if the input is a valid number
    if (isNaN(celsiusInput)) {
        alert('Please enter a valid number for Celsius temperature.');
        return;
    }

    // Convert Celsius to Fahrenheit
    const fahrenheit = (celsiusInput * 9/5) + 32;

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `${celsiusInput}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}
