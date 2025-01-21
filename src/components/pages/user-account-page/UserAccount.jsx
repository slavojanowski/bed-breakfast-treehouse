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
import WeatherForecast from "../../weather-forecast/WeatherForecast";
import PlanYourStay from "../../plan-your-stay/PlanYourStay";

const UserAccount = () => {
  const [fetchError, setFetchError] = useState(null);
  const [bookings, setBookings] = useState(null);
  const [userName, setUserName] = useState(null);
  const [activeSection, setActiveSection] = useState("todoParam");
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

  const handleColumnClick = (sectionParam) => {
    setActiveSection(sectionParam);
  };

  {
    /* --------- Wylogowywanie się ---------------- */
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
        <section className="acc-heading">
          <div
            onClick={() => handleColumnClick("bookingsParam")}
            className={`column bookings-info ${
              activeSection === "bookingsParam" ? "active-elem" : ""
            }`}
          >
            <h4>Historia Twoich rezerwacji</h4>
          </div>
          <div
            onClick={() => handleColumnClick("todoParam")}
            className={`column todo-info ${
              activeSection === "todoParam" ? "active-elem" : ""
            }`}
          >
            <h4>Zaplanuj swój pobyt</h4>
          </div>
          <div
            onClick={() => handleColumnClick("weatherParam")}
            className={`column weather-info ${
              activeSection === "weatherParam" ? "active-elem" : ""
            }`}
          >
            <h4>Sprawdź lokalną pogodę</h4>
          </div>
          <div className="column log-info">
            <h5>
              Witaj <b>{userName ? userName : "User"}</b>, jesteś zalogowany.
            </h5>
            <button onClick={signOut}>Wyloguj się</button>
          </div>
        </section>

        <div className="acc-container">
          {/* ----- bookings section ----- */}
          {activeSection === "bookingsParam" && (
            <div className="section bookings-section">
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
          )}

          {/* ----- plan your stay section ----- */}
          {activeSection === "todoParam" && (
            <div className="section todo-section">
              <PlanYourStay />
            </div>
          )}

          {/* ----- check local weather section ----- */}
          {activeSection === "weatherParam" && (
            <div className="section weather-section">
              <WeatherForecast />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserAccount;
