import supabase from "../../../config/supabaseClient";
import { useState, useEffect } from "react";
import BookingCard from "../../bookings/BookingCard";
import SinglePageCover from "/various-images/mountains.jpg";
import PageCover from "../../global/PageCover/PageCover";
import PageBanner from "../../global/PageCover/PageBanner";
import ButtonLarge from "../../global/ButtonLarge";
import "../../bookings/css/booked-room-details-tile.css";
import "./css/user-account-page.css";
import { useNavigate } from "react-router";

const UserAccount = () => {
  const [fetchError, setFetchError] = useState(null);
  const [bookings, setBookings] = useState(null);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setBookings((prevBookings) => {
      return prevBookings.filter((booking) => booking.id !== id);
    });
  };

  useEffect(() => {
    const getUserName = async () => {
      const { data } = await supabase.auth.getUser();
      const displayName = data.user.user_metadata.display_name;
      setUserName(displayName);
    };

    getUserName();
  }, []);

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
    };
    fetchBookings();
  }, []);

  {
    /* --------- Wylogogowywanie się ---------------- */
  }
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("/logowanie");
  };

  return (
    <>
      <PageCover
        coverStyle={{
          backgroundImage: `url(${SinglePageCover})`,
        }}
        coverClass={"our-rooms-page-cover"}
      >
        <PageBanner
          title="Twój wirtualny pokój"
          subtitle="Tutaj znajdziesz ważne dla Ciebie informacje"
        >
          <ButtonLarge buttonText="Wróć do strony głównej" buttonLink="/" />
        </PageBanner>
      </PageCover>

      <div className="page user-account-page">
        <section className="heading">
          <h4>Witaj {userName ? userName : "User"}, jesteś zalogowany.</h4>
          <button onClick={signOut}>Wyloguj się</button>
        </section>

        {/* ------ właściwy kontent widoczny po zalogowaniu--------------------- */}
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
