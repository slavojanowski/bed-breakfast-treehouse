import { Link } from "react-router";
import Logo from "/logo-light.png";
import "../css/footer.css";
import ButtonLarge from "../../global/ButtonLarge";

const FooterColumnFirst = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="footer-column footer-column-first">
        <h4 className="footer-column-title">
          TWOJA PRZYGODA ZACZYNA SIĘ U NAS
        </h4>
        <div className="footer-about-head">
          <Link to="/">
            <img src={Logo} alt="Logo" className="navbar-logo" />
          </Link>
          <h4>
            Spędź swój wypoczynek w malowniczej scenerii. Odkryj piękno naszych
            lasów i jezior.
          </h4>
        </div>
        <div className="about-us">
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <ButtonLarge
            buttonText="Sprawdź nasze pokoje"
            buttonLink="/pokoje"
            onClick={handleLinkClick}
          />
        </div>
      </div>
    </>
  );
};

export default FooterColumnFirst;
