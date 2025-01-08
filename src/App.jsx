// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "../src/components/bookings/css/bookings.css";
import { Navbar } from "./components/navbar/Navbar";

// --- Main pages
import Home from "./components/pages/Home";
import Update from "./components/pages/Update";
import Error404 from "./components/pages/Error404";

// --- Rooms related pages
import Rooms from "./components/pages/rooms/Rooms";
import SingleRoom from "./components/pages/rooms/SingleRoom";
import UserAccount from "./components/pages/UserAccount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokoje" element={<Rooms />} />
          <Route path="/pokoje/:slug" element={<SingleRoom />} />
          <Route path="/konto-uzytkownika" element={<UserAccount />} />
          <Route path="/:id" element={<Update />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
