import { useState } from "react";
import "../navbar/css/navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from "/logo.png";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Funkcja do zamykania mbile menu po kliknięciu w menu list item
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav>
      <div className="container">
        <div className="wrap">
          <Link to="/">
            <img src={Logo} alt="Logo" className="navbar-logo" />
          </Link>
          <div
            className="menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={mobileMenuOpen ? "open" : ""}>
          <li>
            <NavLink to="/" onClick={handleMobileMenuClose}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/pokoje" onClick={handleMobileMenuClose}>
              NASZE POKOJE
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" onClick={handleMobileMenuClose}>
              KONTAKT
            </NavLink>
          </li>
          <li className="menu-user-icon">
            <NavLink to="/konto-uzytkownika" onClick={handleMobileMenuClose}>
              <FaRegCircleUser />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
