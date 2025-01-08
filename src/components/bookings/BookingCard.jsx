import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import supabase from "../../config/supabaseClient";

const BookingCard = ({ booking, onDelete }) => {
  if (!booking) {
    return <div>Brak danych rezerwacji</div>;
  }

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
      <p>Data złożenia rezerwacji: {booking.created_at}</p>
      <h5>Początek pobytu: {booking.checkin_date}</h5>
      <h5>koniec pobytu {booking.checkout_date}</h5>
      <h4>{booking.title}</h4>
      <p>{booking.method}</p>
      <div className="guests-number">Liczba gości: {booking.guests_number}</div>
      <div className="room-type">Typ pokoju: {booking.room_type_supa}</div>
      <div className="beds-config">
        Konfiguracja łóżek: {booking.bed_size_config}
      </div>

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
    room_type_supa: PropTypes.string.isRequired,
    bed_size_config: PropTypes.string.isRequired,
    guests_number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookingCard;
