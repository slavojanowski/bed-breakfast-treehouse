import { useEffect, useState } from "react";
import roomsData from "../pages/rooms/RoomsData";
import MainSlider from "../main-slider/MainSlider";
import HotelSpecials from "../specials/HotelSpecials";
import HomeRoomsFilter from "../room-filter/HomeRoomsFilter";
import "./rooms/css/homepage.css";
import FrequentlyAskedQuestions from "../FAQ/FrequentlyAskedQuestions";
import RatingsSwiper from "../rating-form/RatingsSwiper";

const Home = () => {
  const [filteredRooms, setFilteredRooms] = useState(roomsData);

  // ----- Sprawdzam, czy zestaw danych filteredRooms różni się od nowo dostarczonego zestawu filteredData
  const handleFilterChange = (filteredData) => {
    if (JSON.stringify(filteredRooms) !== JSON.stringify(filteredData)) {
      setFilteredRooms(filteredData);
    }
  };

  useEffect(() => {
    console.log("Zaktualizwany stan filtrowania:", filteredRooms);
  }, [filteredRooms]);

  return (
    <>
      <div className="slider-container">
        <MainSlider />
      </div>
      <div className="page home">
        <HomeRoomsFilter onFilterChange={handleFilterChange} />

        <HotelSpecials />
      </div>

      <div className="home-ratings">
        <div className="page">
          <RatingsSwiper />
        </div>
      </div>

      <div className="home-faq">
        <div className="page">
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </>
  );
};

export default Home;
