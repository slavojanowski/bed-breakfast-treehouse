import {
  FaLocationDot,
  FaPhoneVolume,
  FaEnvelope,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import "./css/contact-details.css";
const ContactDetails = () => {
  return (
    <>
      <div className="contact-details">
        <div className="contact-details-head">
          <h4 className="contact-details-title">Tree House Hotel</h4>
          <h5 className="contact-details-subtitle">More than B&B</h5>
        </div>

        <div className="contact-details-location">
          <FaLocationDot className="contact-details-icon" />
          <p>
            ul. Leśna 128/4A<br></br> 30-000 Ełk
          </p>
        </div>
        <div className="contact-details-phone">
          <FaPhoneVolume className="contact-details-icon" />
          <a href="tel:+48123456789">+48 123 456 789</a>
        </div>
        <div className="contact-details-email">
          <FaEnvelope className="contact-details-icon" />
          <a href="mailto:info@treehousehotel.com">info@treehousehotel.com</a>
        </div>
        <div className="contact-details-legal">
          <p>
            NIP: 123-45-67-891<br></br>REGON: 987654321
          </p>
        </div>
        <div className="contact-details-social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareFacebook className="contact-details-social-icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareInstagram className="contact-details-social-icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter className="contact-details-social-icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
