import WeatherForecast from "../../../weather-forecast/WeatherForecast";
import "../../../bookings/css/booked-room-details-tile.css";
import "../css/user-account-page.css";

const WeatherTab = () => {
  return (
    <>
      <div className="section weather-section">
        <WeatherForecast />
      </div>
    </>
  );
};

export default WeatherTab;
