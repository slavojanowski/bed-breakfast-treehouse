import { useState } from "react";
import "../navbar/navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/rezerwacja">ZAREZERWUJ POKÓJ</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">KONTAKT</NavLink>
        </li>
      </ul>
    </nav>
  );
};
