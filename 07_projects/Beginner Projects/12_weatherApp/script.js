async function getWeather() {
    const apiKey = "1679d3baedaf6633c73e1b809de0f5a2";
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        

        if (data.cod === "404") {
            alert("City not found. Please enter a valid city name.");
            return;
        }

        document.getElementById("location").innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById("condition").innerText = `Condition: ${data.weather[0].description}`;

        document.getElementById("weather-info").style.display = "block";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Could not retrieve weather data. Please try again.");
    }
}
