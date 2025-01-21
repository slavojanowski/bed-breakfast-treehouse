import axios from "axios";
import { useState } from "react";

const API_KEY = "add2852ec067e64922026db2f029112f";

const WeatherForecast = () => {
  const [weatherResults, setWeatherResults] = useState(null);
  const [city, setCity] = useState("Calgary");

  const fetchDataResults = async (trimmedCity) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&units=metric&appid=${API_KEY}`;
    try {
      const results = await axios.get(API_URL);
      setWeatherResults(results.data);
    } catch (error) {
      alert("Brak danych", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();
    fetchDataResults(trimmedCity);
    setCity("");
  };

  return (
    <>
      <h4>Lalala</h4>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="city"
          placeholder="wpisz miasto do wyszukania"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Wyszukaj</button>
      </form>

      {weatherResults ? (
        <>
          <h5>City: {weatherResults.name}</h5>
          <h5>Temp: {weatherResults.main.temp.toFixed()} °C</h5>
        </>
      ) : (
        "Loading data"
      )}
    </>
  );
};

export default WeatherForecast;
