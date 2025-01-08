import supabase from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RoomAvailabilityForm = () => {
  const navigate = useNavigate();

  // const [title, setTitle] = useState("");
  // const [method, setMethod] = useState("");
  const [guests_number, setguests_number] = useState("");
  const [checkin_date, setCheckin_date] = useState("");
  const [checkout_date, setCheckout_date] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!guests_number || !checkin_date || !checkout_date) {
      setFormError("Wypełnij wszystkie pola");
      return;
    }
    // console.log(guests_number, checkin_date, checkout_date);
    const { data, error } = await supabase
      .from("bookings")
      .insert([{ guests_number, checkin_date, checkout_date }])
      .select();

    if (error) {
      console.log(error);
      setFormError("Wypełnij wszystkie pola");
    }

    if (data) {
      console.log(data);
      setFormError(null);
      navigate("/konto-uzytkownika");
    }
  };

  return (
    <form className="book-room-form" onSubmit={handleSubmit}>
      <label htmlFor="checkin_date">Checkin date:</label>
      <input
        type="date"
        id="checkin_date"
        value={checkin_date}
        onChange={(e) => setCheckin_date(e.target.value)}
      />

      <label htmlFor="checkout_date">Checkout date:</label>
      <input
        type="date"
        id="checkout_date"
        value={checkout_date}
        onChange={(e) => setCheckout_date(e.target.value)}
      />

      <label htmlFor="guests_number"> Liczba gości:</label>
      <input
        type="number"
        id="guests_number"
        value={guests_number}
        onChange={(e) => setguests_number(e.target.value)}
      />

      <button>WYSZUKAJ</button>

      {formError && <p className="error">{formError}</p>}
    </form>
  );
};
export default RoomAvailabilityForm;
