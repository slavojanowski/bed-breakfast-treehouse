import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "add2852ec067e64922026db2f029112f";

const WeatherForecast = () => {
  const [city, setCity] = useState("Paris");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await axios.get(apiURL);
      setWeatherData(response.data);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleSearch = () => {
    fetchWeatherData();
  };

  return (
    <div>
      <h3>Weather Forecast</h3>
      <div>
        <input
          type="text"
          placeholder="Enter city"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weatherData ? (
        <div>
          <h4>Weather in {city}</h4>
          <p>Temperature: {weatherData.main.temp.toFixed()} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherForecast;
