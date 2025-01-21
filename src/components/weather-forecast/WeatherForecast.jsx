import axios from "axios";
import { useEffect, useState } from "react";
import "./css/weather-forecast.css";
import searchIcon from "/weather-images/search.png";
import clearIcon from "/weather-images/clear.png";
import cloudIcon from "/weather-images/cloud.png";
import drizzleIcon from "/weather-images/drizzle.png";
import humidityIcon from "/weather-images/humidity.png";
import rainIcon from "/weather-images/rain.png";
import snowIcon from "/weather-images/snow.png";
import windIcon from "/weather-images/wind.png";

const WeatherForecast = () => {
  const [city, setCity] = useState("Ełk");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "add2852ec067e64922026db2f029112f";

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      // console.log(response);

      const allIcons = {
        "01d": clearIcon,
        "01n": clearIcon,
        "02d": cloudIcon,
        "02n": cloudIcon,
        "03d": cloudIcon,
        "03n": cloudIcon,
        "04d": drizzleIcon,
        "04n": drizzleIcon,
        "09d": rainIcon,
        "09n": rainIcon,
        "10d": rainIcon,
        "10n": rainIcon,
        "13d": snowIcon,
        "13n": snowIcon,
      };

      const icon = allIcons[response.data.weather[0].icon] || clearIcon;

      setWeatherData({ ...response.data, icon });
      setError("");
    } catch (error) {
      console.log("Nie można pobrać informacji", error);

      setError("Nie znaleziono takiego miasta");
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const handleSearch = (event) => {
    event.preventDefault();
    const cityInput = event.target.elements.city.value.trim();
    if (cityInput) {
      fetchWeatherData(cityInput);
    }
    event.target.elements.city.value = "";
  };

  return (
    <>
      <div className="weather-parent-grid">
        <div className="weather">
          <div className="search-bar">
            <form onSubmit={handleSearch}>
              <input
                name="city"
                type="text"
                placeholder="Wpisz nazwę miasta"
                className="form-control"
              />
              <button type="submit">
                <img src={searchIcon} alt="search icon" />
              </button>
            </form>
          </div>

          {error && <p className="weather-error">{error}</p>}

          {weatherData && weatherData.main ? (
            <>
              <img
                src={weatherData.icon}
                alt="weather icon"
                className="weather-icon"
              />
              <p className="temperature">{weatherData.main.temp.toFixed()}℃</p>
              <p className="location">
                {weatherData.name}, {weatherData.sys.country}
              </p>
              <div className="weather-data">
                <div className="col">
                  <img src={humidityIcon} alt="humidity icon" />
                  <div>
                    <p>{weatherData.main.humidity}%</p>
                    <span>Humidity</span>
                  </div>
                </div>

                <div className="col">
                  <img src={windIcon} alt="wind icon" />
                  <div>
                    <p>{weatherData.wind.speed} Km/h</p>
                    <span>Wind</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default WeatherForecast;
