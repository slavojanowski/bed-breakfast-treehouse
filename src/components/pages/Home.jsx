import { useEffect, useState } from "react";
import roomsData from "../pages/rooms/RoomsData";
import MainSlider from "../main-slider/MainSlider";
import HotelSpecials from "../specials/HotelSpecials";
import HomeRoomsFilter from "../room-filter/HomeRoomsFilter";
import "./rooms/css/homepage.css";

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
    </>
  );
};

export default Home;
