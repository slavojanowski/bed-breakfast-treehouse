import supabase from "../../../../config/supabaseClient";
import { useState, useEffect } from "react";
import BookingCard from "../../../bookings/BookingCard";
import ButtonLarge from "../../../global/ButtonLarge";
import "../../../bookings/css/booked-room-details-tile.css";
import "../css/user-account-page.css";

const BookingsTab = () => {
  const [fetchError, setFetchError] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = (id) => {
    setBookings((prevBookings) => {
      return prevBookings.filter((booking) => booking.id !== id);
    });
  };

  // Pobieranie dokonanych rezerwacji
  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select()
        .order("created_at", { ascending: false });

      if (error) {
        setFetchError("Nie można było pobrać danych");
        setBookings(null);
        // console.log(error);
      }
      if (data) {
        setBookings(data);
        setFetchError(null);
      }
      setIsLoading(false);
    };
    fetchBookings();
  }, []);

  return (
    <>
      {/* ----- bookings section ----- */}
      <div className="section bookings-section">
        {fetchError && <p>{fetchError}</p>}

        {isLoading ? (
          <p className="bookings-info">Ładowanie historii rezerwacji...</p>
        ) : bookings.length === 0 ? (
          <div className="bookings-info">
            <h4>Obecnie nie posiadasz żadnej historii rezerwacji.</h4>
            <h5>Sprawdź dostępne pokoje i zarezerwuj swój pobyt.</h5>
            <ButtonLarge
              buttonText={"Zobacz wszystkie pokoje"}
              buttonLink="/pokoje"
            />
          </div>
        ) : (
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

export default BookingsTab;
