import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

const SmoothieCard = ({ smoothie, onDelete }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("smoothies")
      .delete()
      .eq("id", smoothie.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(smoothie.id);
    }
  };

  return (
    <div className="smoothie-card">
      <h5>Checkin date: {smoothie.checkin_date}</h5>
      <h5>Checkout date: {smoothie.checkout_date}</h5>
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">Liczba gości: {smoothie.rating}</div>
      <div className="buttons">
        <Link to={"/" + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  );
};

SmoothieCard.propTypes = {
  smoothie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    checkin_date: PropTypes.string.isRequired,
    checkout_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default SmoothieCard;
