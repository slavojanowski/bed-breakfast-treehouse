import { Link } from "react-router";
import roomsData from "../../pages/rooms/RoomsData";
import { FaLink } from "react-icons/fa6";
import { LuBedDouble } from "react-icons/lu";

const FooterColumnSecond = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="footer-column footer-column-second">
        <h4 className="footer-column-title">PRZYDATNE LINKI</h4>
        <div className="footer-links">
          <p>
            <Link to="/" onClick={handleLinkClick}>
              <FaLink className="link-icon" /> HOME
            </Link>
          </p>
          <p>
            <Link to="/pokoje" onClick={handleLinkClick}>
              <FaLink className="link-icon" /> NASZE POKOJE
            </Link>
          </p>
          <div className="rooms-list-menu">
            {roomsData.map((room, index) => {
              return (
                <p key={index}>
                  <Link to={`/pokoje/${room.slug}`} onClick={handleLinkClick}>
                    <LuBedDouble className="link-icon" /> {room.title}
                  </Link>
                </p>
              );
            })}
          </div>
          <p>
            <Link to="/kontakt" onClick={handleLinkClick}>
              <FaLink className="link-icon" /> KONTAKT
            </Link>
          </p>
          <p>
            <Link to="/konto-uzytkownika" onClick={handleLinkClick}>
              <FaLink className="link-icon" /> KONTO GOŚCIA
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterColumnSecond;
