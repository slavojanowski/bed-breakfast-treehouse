import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonLarge = ({ buttonText, buttonLink }) => {
  return (
    <Link to={buttonLink} className="button-large">
      {buttonText}
    </Link>
  );
};

ButtonLarge.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string,
};

export default ButtonLarge;
