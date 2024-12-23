import PropTypes from "prop-types";

const SmoothieCard = ({ smoothie }) => {
  return (
    <div className="smoothie-card">
      <h5>Checkin date: {smoothie.checkin_date}</h5>
      <h5>Checkout date: {smoothie.checkout_date}</h5>
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">Liczba gości: {smoothie.rating}</div>
    </div>
  );
};

SmoothieCard.propTypes = {
  smoothie: PropTypes.shape({
    checkin_date: PropTypes.string.isRequired,
    checkout_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
};

export default SmoothieCard;
