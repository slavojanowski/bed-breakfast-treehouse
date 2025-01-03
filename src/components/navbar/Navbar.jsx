import { useState } from "react";
import "../navbar/css/navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Funkcja do zamykania menu po kliknięciu w menu item
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="container">
        <div className="wrap">
          <Link to="/">
            <img src={Logo} alt="Logo" className="navbar-logo" />
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/" onClick={handleMenuClose}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/rezerwacja" onClick={handleMenuClose}>
              ZAREZERWUJ POKÓJ
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" onClick={handleMenuClose}>
              KONTAKT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
