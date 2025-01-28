import PropTypes from "prop-types";
import { FaEnvelope, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import "../pages/faq/css/faq-page.css";
import PhoneNumber from "./PhoneNumber";
import HotelAddress from "./HotelAddress";
import EmailAddress from "./EmailAddress";

const ContactBoxesInfoRow = ({ customClassName }) => {
  return (
    <div className={customClassName}>
      <div className="faq-page-container">
        <div className="faq-columns">
          <div className="contact-column">
            <span className="faq-column-icon">
              <FaPhoneVolume />
            </span>
            <span className="faq-column-title">ZADZWOŃ</span>
            <h4>
              <PhoneNumber />
            </h4>
          </div>
          <div className="contact-column">
            <span className="faq-column-icon">
              <FaLocationDot />
            </span>
            <span className="faq-column-title">TREE HOUSE HOTEL</span>
            <h4>
              <HotelAddress />
            </h4>
          </div>
          <div className="contact-column">
            <span className="faq-column-icon">
              <FaEnvelope />
            </span>
            <span className="faq-column-title">NAPISZ</span>
            <h4>
              <EmailAddress />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactBoxesInfoRow.propTypes = {
  customClassName: PropTypes.string.isRequired,
};

export default ContactBoxesInfoRow;
