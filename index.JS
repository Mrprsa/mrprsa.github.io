const weatherData = {
    Tbilisi: { temperature: "15°C", condition: "Sunny" },
    London: { temperature: "7°C", condition: "Rainy" },
    Tokyo: { temperature: "20°C", condition: "Cloudy" }
  };
  
  function showWeather(city) {
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const condition = document.getElementById("condition");
  
    cityName.textContent = `City: ${city}`;
    temperature.textContent = `Temperature: ${weatherData[city].temperature}`;
    condition.textContent = `Condition: ${weatherData[city].condition}`;
  }
  