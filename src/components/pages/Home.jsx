import supabase from "../../config/supabaseClient";
import { useState, useEffect } from "react";
import BookingCard from "../bookings/BookingCard";
import MainSlider from "../main-slider/MainSlider";

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
        <MainSlider />
      </div>
      <div className="page home">
        {fetchError && <p>{fetchError}</p>}
        {bookings && (
          <div className="bookings">
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

export default Home;
