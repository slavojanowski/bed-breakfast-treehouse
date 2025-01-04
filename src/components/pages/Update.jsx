// import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [checkin_date, setCheckin_date] = useState("");
  const [checkout_date, setCheckout_date] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !method || !rating || !checkin_date || !checkout_date) {
      setFormError("Wypełnij wszystkie pola");
      return;
    }

    const { data, error } = await supabase
      .from("bookings")
      .update({ title, method, rating, checkin_date, checkout_date })
      .eq("id", id)
      .select();

    if (error) {
      console.log(error);

      setFormError("Wypełnij wszystkie pola");
    }

    if (data) {
      console.log(data);
      setFormError(null);
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchBooking = async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
        setTitle(data.title);
        setMethod(data.method);
        setRating(data.rating);
        setCheckin_date(data.checkin_date);
        setCheckout_date(data.checkout_date);
      }
    };
    fetchBooking();
  }, [id, navigate]);

  return (
    <div className="page update">
      <form className="book-room-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating"> Liczba gości:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

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

        <button>Zaktualizuj rezerwacje</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Update;
