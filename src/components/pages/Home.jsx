import MainSlider from "../main-slider/MainSlider";
import RoomAvailabilityForm from "../room-availability-form/RoomAvailabilityForm";
import HotelSpecials from "../specials/HotelSpecials";

const Home = () => {
  return (
    <>
      <div className="slider-container">
        <MainSlider />
      </div>
      <div className="page home">
        <RoomAvailabilityForm />

        <HotelSpecials />
      </div>
    </>
  );
};

export default Home;
