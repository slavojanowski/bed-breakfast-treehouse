import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";

// pages
import Home from "./components/pages/Home";
import BookRoom from "./components/pages/BookRoom";
import Update from "./components/pages/Update";
// import MainSlider from "./components/main-slider/MainSlider";

// // SLIDER
// import slideImg1 from "./components/main-slider/images/car-1.jpg";
// import slideImg2 from "./components/main-slider/images/car-2.jpg";
// import slideImg3 from "./components/main-slider/images/car-3.jpg";
// import slideImg4 from "./components/main-slider/images/car-4.jpg";
// import slideImg5 from "./components/main-slider/images/car-5.jpg";

// const images = [slideImg1, slideImg2, slideImg3, slideImg4, slideImg5];

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <div className="slider-container">
          <MainSlider imageUrls={images} />
        </div> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rezerwacja" element={<BookRoom />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
