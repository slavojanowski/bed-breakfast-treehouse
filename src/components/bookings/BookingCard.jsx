import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";

const BookingCard = ({ booking, onDelete }) => {
  const [stayDuration, setStayDuration] = useState(0);

  // Wyliczanie liczby dób hotelowych w oparciu o datę zameldowania i wymeldowania
  const calculateStayDuration = (checkin, checkout) => {
    try {
      const checkinDate = new Date(checkin);
      const checkoutDate = new Date(checkout);

      if (isNaN(checkinDate.getTime()) || isNaN(checkoutDate.getTime())) {
        console.error("Nieprawidłowy format daty");
        return 0;
      }

      const differenceInTime = checkoutDate.getTime() - checkinDate.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      return Math.max(0, differenceInDays);
    } catch (error) {
      console.error("Błąd podczas obliczania długości pobytu:", error);
      return 0;
    }
  };

  const bookedRoomPrice = booking.booked_room_price; // Wyliczanie ceny pokoju

  const totalBookedPrice = bookedRoomPrice * stayDuration; // Wyliczanie całkowitej ceny rezerwacji

  useEffect(() => {
    if (booking?.checkin_date && booking?.checkout_date) {
      const duration = calculateStayDuration(
        booking.checkin_date,
        booking.checkout_date
      );
      setStayDuration(duration);
    }
  }, [booking?.checkin_date, booking?.checkout_date]);

  // komunikat kiedy nie ma w panelu żadnych
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
    <div className="booked-room-details">
      <section className="sr-filter-container">
        <div className="sr-form">
          <div className="sr-form-head">
            <h5>
              <strong>Data dokonania rezerwacji:</strong> {booking.created_at}
            </h5>
            <h5>
              <strong>Numer rezerwacji:</strong> #{booking.id}
            </h5>
            <h5>
              <strong>Zarezerwowany pokój:</strong> {booking.booked_room_name}
            </h5>
          </div>
          <div className="sr-all-groups-button">
            <div className="sr-form-all-groups">
              <div className="sr-column">
                <div className="sr-form-group">
                  <h6>
                    <span>Imię:</span>
                    <br /> {booking.first_name}
                  </h6>
                </div>

                <div className="sr-form-group">
                  <h6>
                    <span>Nazwisko:</span>
                    <br /> {booking.last_name}
                  </h6>
                </div>

                <div className="sr-form-group">
                  <h6>
                    <span>Adres e-mail:</span>
                    <br /> {booking.email_address}
                  </h6>
                </div>

                <div className="sr-form-group">
                  <h6>
                    <span>Numer telefonu:</span>
                    <br /> {booking.phone_number}
                  </h6>
                </div>

                <div className="sr-form-group">
                  <h6>
                    <span>Adres pierwszy wiersz:</span>
                    <br /> {booking.street_address}
                  </h6>
                </div>

                <div className="sr-form-group">
                  <h6>
                    <span>Adress drugi wiersz:</span>
                    <br /> {booking.address_extra_line}
                  </h6>
                </div>

                <div className="sr-form-group">
                  <h6>
                    <span>Nazwa miasta:</span>
                    <br /> {booking.city_name}
                  </h6>
                </div>

                <div className="sr-form-group">
                  <h6>
                    <span>Kod pocztowy:</span>
                    <br /> {booking.zip_code}
                  </h6>
                </div>
              </div>

              <div className="sr-column">
                <div className="sr-form-group">
                  <h6>
                    <span>Data zameldowania:</span>
                    <br /> {booking.checkin_date}
                  </h6>
                </div>

                <div className="sr-form-group">
                  <h6>
                    <span>Data wymeldowania:</span>
                    <br /> {booking.checkout_date}
                  </h6>
                </div>

                <div className="sr-form-group">
                  <h6>
                    <span>Liczba dorosłych:</span>
                    <br /> {booking.adults_number}
                  </h6>
                </div>

                <div className="sr-form-group">
                  <h6>
                    <span>Liczba dzieci:</span>
                    <br /> {booking.kids_number}
                  </h6>
                </div>

                <div className="sr-form-group">
                  <h6>
                    <span>Typ pokoju:</span>
                    <br /> {booking.room_type_supa}
                  </h6>
                </div>

                <div className="sr-form-group">
                  <h6>
                    <span>Konfiguracja łóżek:</span>
                    <br /> {booking.bed_size_config}
                  </h6>
                </div>

                <div className="sr-form-group sr-extra">
                  <h6>
                    <span>Uwagi do rezerwacji:</span>
                    <br /> {booking.book_message}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="booking-details-buttons">
            <div className="sr-booking-total-price">
              <h4>Liczba dób hotelowych: {stayDuration}</h4>
              <h4>
                Cena pokoju za dobę: {booking.booked_room_price} {"PLN"}
              </h4>
              <h4>
                Łączna cena: {stayDuration} * {bookedRoomPrice} PLN ={" "}
                {totalBookedPrice} PLN
              </h4>
            </div>
            <div className="sr-form-buttons">
              <Link to={"/konto-uzytkownika/" + booking.id}>
                <i className="material-icons edit-booking">edit</i>
              </Link>
              <i
                className="material-icons delete-booking"
                onClick={handleDelete}
              >
                delete
              </i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

BookingCard.propTypes = {
  booking: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    created_at: PropTypes.string.isRequired,
    checkin_date: PropTypes.string.isRequired,
    checkout_date: PropTypes.string.isRequired,
    booked_room_name: PropTypes.node.isRequired,
    booked_room_price: PropTypes.number,
    adults_number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    kids_number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    room_type_supa: PropTypes.string.isRequired,
    bed_size_config: PropTypes.string.isRequired,
    book_message: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email_address: PropTypes.string.isRequired,
    phone_number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    street_address: PropTypes.string.isRequired,
    address_extra_line: PropTypes.string.isRequired,
    city_name: PropTypes.string.isRequired,
    zip_code: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookingCard;
