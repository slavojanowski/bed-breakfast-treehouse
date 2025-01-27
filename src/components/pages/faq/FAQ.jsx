import FrequentlyAskedQuestions from "../../FAQ/FrequentlyAskedQuestions";
import "./css/faq-page.css";
import FaqPageCover from "/various-images/las.jpg";
import ButtonLarge from "../../global/ButtonLarge";
import PageBanner from "../../global/PageCover/PageBanner";
import PageCover from "../../global/PageCover/PageCover";
import EmailAddress from "../../global/EmailAddress";
import HotelAddress from "../../global/HotelAddress";
import PhoneNumber from "../../global/PhoneNumber";
import { FaEnvelope, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import GoogleMap from "../../global/GoogleMap";

const FAQ = () => {
  return (
    <>
      <PageCover
        coverStyle={{
          backgroundImage: `url(${FaqPageCover})`,
        }}
        coverClass={"our-rooms-page-cover"}
      >
        <PageBanner
          title="Najczęściej zadawane pytania"
          subtitle="Masz pytanie? My mamy odpowiedź!"
        >
          <ButtonLarge buttonText="Sprawdź nasze pokoje" buttonLink="/pokoje" />
        </PageBanner>
      </PageCover>
      <div className="page faq-page">
        <FrequentlyAskedQuestions />
      </div>
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
      <div className="faq-page-google-map">
        <GoogleMap />
      </div>
    </>
  );
};

export default FAQ;
