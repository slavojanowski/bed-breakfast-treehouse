import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// pages
import Home from "./components/pages/Home";
import Create from "./components/pages/Create";
import Update from "./components/pages/Update";

function App() {
  return (
    <>
      <Router>
        <nav>
          <h1>Supa Smoothies</h1>
          <Link to="/">Home</Link>
          <Link to="/create">Create New Smoothie</Link>
        </nav>
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
