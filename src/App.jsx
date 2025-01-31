import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import UpdateBooking from "./components/bookings/UpdateBooking";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// --- Rooms related components
import Rooms from "./components/pages/rooms/Rooms";
import SingleRoom from "./components/pages/rooms/SingleRoom";

// --- User Acccount/page related components
import SessionController from "./components/login-signup/SessionController";
import UserAccount from "./components/pages/user-account-page/UserAccount";
import Error404 from "./components/pages/Error404";
import LoginAfterSignup from "./components/login-signup/LoginAfterSignup";
import WeatherTab from "./components/pages/user-account-page/outletSections/WeatherTab";
import TodoTab from "./components/pages/user-account-page/outletSections/TodoTab";
import BookingsTab from "./components/pages/user-account-page/outletSections/BookingsTab";
import FAQ from "./components/pages/faq/FAQ";
import { useEffect } from "react";
import RatingForm from "./components/rating-form/RatingForm";
import LoginPage from "./components/login-signup/LoginPage";
import SignupForm from "./components/login-signup/SignupForm";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Przewiń do góry po załadowaniu komponentu / nowej podstrony
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokoje" element={<Rooms />} />
        <Route path="/pokoje/:slug" element={<SingleRoom />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/konto-uzytkownika"
          element={
            <SessionController>
              <UserAccount />
            </SessionController>
          }
        >
          <Route path="historia-rezerwacji" element={<BookingsTab />} />
          <Route path="zaplanuj-pobyt" element={<TodoTab />} />
          <Route path="prognoza-pogody" element={<WeatherTab />} />
          <Route path="napisz-opinie" element={<RatingForm />} />
        </Route>

        <Route path="/rejestracja" element={<SignupForm />} />
        <Route path="/zaloguj-sie" element={<LoginAfterSignup />} />
        <Route path="/logowanie" element={<LoginPage />} />
        <Route path="/konto-uzytkownika/:id" element={<UpdateBooking />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
