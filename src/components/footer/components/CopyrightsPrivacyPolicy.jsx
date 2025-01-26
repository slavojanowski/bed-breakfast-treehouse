import { Link } from "react-router";
import { FaLink, FaEllipsisVertical } from "react-icons/fa6";

const CopyrightsPrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <h5>TreeHouse {currentYear} © Wszelkie prawa zastrzeżone</h5>
      <span className="footer-copy-separator">
        <FaEllipsisVertical />
      </span>
      <Link to="/" onClick={handleLinkClick}>
        <FaLink className="link-icon" /> Polityka prywatności
      </Link>
    </>
  );
};

export default CopyrightsPrivacyPolicy;
