import supabase from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PageCover from "../global/PageCover/PageCover";
import PageBanner from "../global/PageCover/PageBanner";
import SinglePageCover from "/src/images/single-page-cover-bg-cover.jpg";

const BookRoom = () => {
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
    // console.log(title, method, rating, checkin_date, checkout_date);
    const { data, error } = await supabase
      .from("bookings")
      .insert([{ title, method, rating, checkin_date, checkout_date }])
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

  return (
    <>
      <PageCover
        coverStyle={{
          backgroundImage: `url(${SinglePageCover})`,
        }}
        coverClass={"our-rooms-page-cover"}
      >
        <PageBanner
          title="Zarezerwuj swój pobyt w naszym hotelu"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        ></PageBanner>
      </PageCover>

      <div className="page our-rooms">
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

          <button>Zarezerwuj</button>

          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </>
  );
};
export default BookRoom;
