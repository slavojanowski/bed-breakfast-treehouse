import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// pages
import Home from "./components/pages/Home";
import Create from "./components/pages/Create";
import Update from "./components/pages/Update";
import MainSlider from "./components/main-slider/MainSlider";

// SLIDER
import slideImg1 from "./components/main-slider/images/car-1.jpg";
import slideImg2 from "./components/main-slider/images/car-2.jpg";
import slideImg3 from "./components/main-slider/images/car-3.jpg";
import slideImg4 from "./components/main-slider/images/car-4.jpg";
import slideImg5 from "./components/main-slider/images/car-5.jpg";

const IMAGES = [slideImg1, slideImg2, slideImg3, slideImg4, slideImg5];

function App() {
  return (
    <>
      <Router>
        <nav>
          <h1>Supa Bookings</h1>
          <Link to="/">Home</Link>
          <Link to="/create">Book your room</Link>
        </nav>
        <div className="slider-container">
          <MainSlider imageUrls={IMAGES} />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
