import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/components/bookings/css/bookings.css";
import { Navbar } from "./components/navbar/Navbar";

// --- Main pages
import Home from "./components/pages/Home";
import BookRoom from "./components/pages/BookRoom";
import Update from "./components/pages/Update";
import Error404 from "./components/pages/Error404";

// --- Single rooms
import LuksusowyPokoj from "./components/pages/single-rooms/LuksusowyPokoj";
import NowoczesnyPokoj from "./components/pages/single-rooms/NowoczesnyPokoj";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/luksusowy-pokoj-dwuosobowy"
            element={<LuksusowyPokoj />}
          />
          <Route
            path="/nowoczesny-pokoj-dwuosobowy"
            element={<NowoczesnyPokoj />}
          />
          <Route path="/rezerwacja" element={<BookRoom />}>
            ccc
          </Route>
          <Route path="/:id" element={<Update />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
