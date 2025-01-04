import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import supabase from "../../config/supabaseClient";

const BookingCard = ({ booking, onDelete }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("bookings")
      .delete()
      .eq("id", booking.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(booking.id);
    }
  };

  return (
    <div className="booking-card">
      <h4>Data złożenia rezerwacji: {booking.created_at}</h4>
      <h5>Początek pobytu: {booking.checkin_date}</h5>
      <h5>koniec pobytu {booking.checkout_date}</h5>
      <h3>{booking.title}</h3>
      <p>{booking.method}</p>
      <div className="rating">Liczba gości: {booking.rating}</div>
      <div className="buttons">
        <Link to={"/" + booking.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  );
};

BookingCard.propTypes = {
  booking: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    created_at: PropTypes.string.isRequired,
    checkin_date: PropTypes.string.isRequired,
    checkout_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookingCard;
