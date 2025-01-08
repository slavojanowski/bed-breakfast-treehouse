import supabase from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import roomsData from "../pages/rooms/RoomsData";
import "./css/room-availability-form.css";
import { FaAngleDown } from "react-icons/fa6";

const RoomAvailabilityForm = () => {
  const navigate = useNavigate();
  const allRoomsData = roomsData;

  const uniqueRoomTypes = [
    ...new Set(allRoomsData.map((room) => room.room_type)),
  ];

  // const [title, setTitle] = useState("");
  // const [method, setMethod] = useState("");
  const [guests_number, setguests_number] = useState("");
  const [checkin_date, setCheckin_date] = useState("");
  const [checkout_date, setCheckout_date] = useState("");
  const [formError, setFormError] = useState(null);
  const [roomType, setRoomType] = useState("");

  // Fetch room types when component mounts
  useEffect(() => {
    const fetchRoomTypes = async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select("room_type");

      if (error) {
        console.log(error);
        setFormError("Wystąpił błąd podczas pobierania danych o typach pokoi");
        return;
      }

      setRoomType(data);
    };

    fetchRoomTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !guests_number ||
      !checkin_date ||
      !checkout_date ||
      roomType !== uniqueRoomTypes
    ) {
      setFormError("Wypełnij wszystkie pola");
      return;
    }
    // console.log(guests_number, checkin_date, checkout_date);
    const { data, error } = await supabase
      .from("bookings")
      .insert([
        { guests_number, checkin_date, checkout_date, room_type: roomType },
      ])
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
    <section className="av-filter-container">
      <form className="av-search-form" onSubmit={handleSubmit}>
        <div className="av-form-all-groups">
          <div className="av-form-group">
            <label htmlFor="checkin_date">Checkin date:</label>
            <input
              className="form-control"
              type="date"
              id="checkin_date"
              value={checkin_date}
              onChange={(e) => setCheckin_date(e.target.value)}
            />
          </div>

          <div className="av-form-group">
            <label htmlFor="checkout_date">Checkout date:</label>
            <input
              className="form-control"
              type="date"
              id="checkout_date"
              value={checkout_date}
              onChange={(e) => setCheckout_date(e.target.value)}
            />
          </div>

          <div className="av-form-group">
            <label htmlFor="guests_number"> Liczba gości:</label>
            <input
              className="form-control"
              type="number"
              id="guests_number"
              value={guests_number}
              onChange={(e) => setguests_number(e.target.value)}
            />
          </div>

          <div className="av-form-group">
            <label htmlFor="room_type">Typ pokoju:</label>
            <div className="av-select-container">
              <select
                className="form-control"
                id="room_type"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
              >
                <option value="all">Wszystkie</option>
                {uniqueRoomTypes.map((uniqueType, index) => (
                  <option key={index} value={uniqueType}>
                    {uniqueType}
                  </option>
                ))}
              </select>
              <FaAngleDown className="av-select-icon" />
            </div>
          </div>
        </div>

        <button className="av-search-button">WYSZUKAJ</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </section>
  );
};
export default RoomAvailabilityForm;
