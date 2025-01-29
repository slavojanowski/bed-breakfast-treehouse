import { Link } from "react-router";
import Logo from "/logo-light.png";
import "../css/footer.css";
import ButtonLarge from "../../global/ButtonLarge";

const FooterColumnFirst = () => {
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
            Naszym gościom oferujemy nie tylko nocleg, ale niezapomniane
            doświadczenia. Położenie wśród dziewiczej przyrody, komfortowe
            pokoje, pyszna kuchnia i profesjonalna obsługa sprawią, że Twój
            pobyt będzie wyjątkowy. Zapraszamy do oderwania się od codzienności
            i doświadczenia prawdziwego relaksu.
          </p>
          <ButtonLarge buttonText="Sprawdź nasze pokoje" buttonLink="/pokoje" />
        </div>
      </div>
    </>
  );
};

export default FooterColumnFirst;
