// script.js

document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculate-btn");
    const resultContainer = document.getElementById("result");

    calculateBtn.addEventListener("click", function() {
        const vehicleType = document.getElementById("vehicle").value;
        const distance = parseFloat(document.getElementById("distance").value);
        const fuelEfficiency = parseFloat(document.getElementById("fuel").value);

        // Validate input
        if (isNaN(distance) || isNaN(fuelEfficiency) || distance <= 0 || fuelEfficiency <= 0) {
            resultContainer.innerHTML = "<p>Please enter valid numbers for distance and fuel efficiency.</p>";
            return;
        }

        let emissions;
        switch (vehicleType) {
            case "car":
                emissions = (distance / fuelEfficiency) * 2.3; // Average CO2 emissions per liter of gasoline
                break;
            case "motorcycle":
                emissions = (distance / fuelEfficiency) * 1.5; // Average CO2 emissions per liter of gasoline
                break;
            case "bicycle":
                emissions = 0; // Bicycles have zero emissions
                break;
            default:
                resultContainer.innerHTML = "<p>Invalid vehicle type.</p>";
                return;
        }

        resultContainer.innerHTML = `<p>Carbon footprint for traveling ${distance} km by ${vehicleType}: ${emissions.toFixed(2)} kg CO<sub>2</sub>.</p>`;
    });
});
