import CopyrightsPrivacyPolicy from "./components/CopyrightsPrivacyPolicy";
import FooterColumnFirst from "./components/FooterColumnFirst";
import FooterColumnSecond from "./components/FooterColumnSecond";
import FooterColumnThird from "./components/footer-column-third/FooterColumnThird";
import "./css/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <FooterColumnFirst />
          <FooterColumnSecond />
          <FooterColumnThird />
        </div>
        <div className="copyrights-privacy-policy">
          <CopyrightsPrivacyPolicy />
        </div>
      </div>
    </div>
  );
};

export default Footer;
