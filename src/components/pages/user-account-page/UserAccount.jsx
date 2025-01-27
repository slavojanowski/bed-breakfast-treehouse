import supabase from "../../../config/supabaseClient";
import { useState, useEffect } from "react";
import SinglePageCover from "/various-images/jezioro.jpg";
import PageCover from "../../global/PageCover/PageCover";
import PageBanner from "../../global/PageCover/PageBanner";
import ButtonLarge from "../../global/ButtonLarge";
import "../../bookings/css/booked-room-details-tile.css";
import "./css/user-account-page.css";
import { useNavigate, NavLink, Outlet } from "react-router-dom";

const UserAccount = () => {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserName = async () => {
      const { data } = await supabase.auth.getUser();
      const displayName = data.user.user_metadata.display_name;
      setUserName(displayName);
    };

    getUserName();
  }, []);

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
          <NavLink to="historia-rezerwacji" className="column bookings-info">
            <h4>Historia Twoich rezerwacji</h4>
          </NavLink>
          <NavLink to="zaplanuj-pobyt" className="column todo-info">
            <h4>Zaplanuj swój pobyt</h4>
          </NavLink>
          <NavLink to="prognoza-pogody" className="column weather-info">
            <h4>Sprawdź lokalną pogodę</h4>
          </NavLink>
          <div className="column log-info">
            <h5>
              Witaj <b>{userName ? userName : "User"}</b>, jesteś zalogowany.
            </h5>
            <button onClick={signOut}>Wyloguj się</button>
          </div>
        </section>

        <div className="acc-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserAccount;
