import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";

// pages
import Home from "./components/pages/Home";
import BookRoom from "./components/pages/BookRoom";
import Update from "./components/pages/Update";

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
