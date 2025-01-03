import supabase from "../../config/supabaseClient";
import { useState, useEffect } from "react";
import BookingCard from "../bookings/BookingCard";
import PropTypes from "prop-types";

import MainSlider from "../main-slider/MainSlider";

// SLIDER
import slideImg2 from "../main-slider/images/luksusowy-pokoj-dwuosobowy-cover.jpg";
import slideImg3 from "../main-slider/images/nowoczesny-pokoj-dwuosobowy-cover.jpg";
import slideImg5 from "../main-slider/images/sloneczny-pokoj-jednoosobowy-cover.jpg";
import slideImg6 from "../main-slider/images/stylowy-pokoj-dwuosobowy-cover.jpg";
import slideImg4 from "../main-slider/images/profesjonalny-pokoj-jednoosobowy-cover.jpg";
import slideImg1 from "../main-slider/images/klasyczny-pokoj-dwuosobowy-cover.jpg";

const sliderImages = [
  slideImg1,
  slideImg2,
  slideImg3,
  slideImg4,
  slideImg5,
  slideImg6,
];

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [bookings, setBookings] = useState(null);

  const handleDelete = (id) => {
    setBookings((prevBookings) => {
      return prevBookings.filter((sm) => sm.id !== id);
    });
  };

  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await supabase.from("bookings").select();

      if (error) {
        setFetchError("Nie można było pobrać danych");
        setBookings(null);
        console.log(error);
      }
      if (data) {
        setBookings(data);
        setFetchError(null);
      }
    };
    fetchBookings();
  }, []);

  return (
    <>
      <div className="slider-container">
        <MainSlider imageUrls={sliderImages} />
      </div>
      <div className="page home">
        {fetchError && <p>{fetchError}</p>}
        {bookings && (
          <div className="bookings">
            {/* {order by buttons} */}
            <div className="booking-grid">
              {bookings.map((booking) => (
                <BookingCard
                  key={booking.id}
                  booking={booking}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Home.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default Home;
