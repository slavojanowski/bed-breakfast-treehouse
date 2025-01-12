import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/navbar/Navbar";

// --- Main pages
import Home from "./components/pages/Home";
import UpdateBooking from "./components/bookings/UpdateBooking";

// --- Rooms related pages
import Rooms from "./components/pages/rooms/Rooms";
import SingleRoom from "./components/pages/rooms/SingleRoom";
import SessionController from "./components/login-signup/SessionController";
import UserAccount from "./components/pages/user-account-page/UserAccount";
import Signup from "./components/login-signup/Signup";
import Login from "./components/login-signup/Login";
import Error404 from "./components/pages/Error404";
import LoginAfterSignup from "./components/login-signup/LoginAfterSignup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokoje" element={<Rooms />} />
          <Route path="/pokoje/:slug" element={<SingleRoom />} />
          <Route
            path="/konto-uzytkownika"
            element={
              <SessionController>
                <UserAccount />
              </SessionController>
            }
          />
          <Route path="/rejestracja" element={<Signup />} />
          <Route path="/zaloguj-sie" element={<LoginAfterSignup />} />
          <Route path="/logowanie" element={<Login />} />
          <Route path="/konto-uzytkownika/:id" element={<UpdateBooking />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
