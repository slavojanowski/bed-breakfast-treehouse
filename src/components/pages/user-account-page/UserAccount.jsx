import supabase from "../../../config/supabaseClient";
import { useState, useEffect } from "react";
import BookingCard from "../../bookings/BookingCard";
import SinglePageCover from "/various-images/mountains.jpg";
import PageCover from "../../global/PageCover/PageCover";
import PageBanner from "../../global/PageCover/PageBanner";
import ButtonLarge from "../../global/ButtonLarge";
import "../../bookings/css/booked-room-details-tile.css";
import "./css/user-account-page.css";

const UserAccount = () => {
  const [fetchError, setFetchError] = useState(null);
  const [bookings, setBookings] = useState(null);

  const handleDelete = (id) => {
    setBookings((prevBookings) => {
      return prevBookings.filter((booking) => booking.id !== id);
    });
  };

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
    };
    fetchBookings();
  }, []);

  return (
    <>
      <PageCover
        coverStyle={{
          backgroundImage: `url(${SinglePageCover})`,
        }}
        coverClass={"our-rooms-page-cover"}
      >
        <PageBanner
          title="Panel gościa"
          subtitle="Tutaj jest Twoje centrum dowodzenia"
        >
          <ButtonLarge buttonText="Wróć do strony głównej" buttonLink="/" />
        </PageBanner>
      </PageCover>

      <div className="page user-account-page">
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

export default UserAccount;
