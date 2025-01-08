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
  ].sort();

  const uniqueBedsSizes = [
    ...new Set(allRoomsData.map((room) => room.beds_size)),
  ].sort();

  // const [title, setTitle] = useState("");
  // const [method, setMethod] = useState("");
  //   const [guestsNumber, setGuestsNumber] = useState("");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [formError, setFormError] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [selectedBedConfig, setSelectedBedConfig] = useState("");

  // Fetch room types when component mounts
  useEffect(() => {
    const fetchRoomTypes = async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select("room_type_supa, bed_size_config");

      if (error) {
        console.log(error);
        setFormError("Wystąpił błąd podczas pobierania danych o typach pokoi");
        return;
      }

      setRoomType(data);
      setSelectedBedConfig(data);
    };

    fetchRoomTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (
    //   !checkinDate ||
    //   !checkoutDate ||
    //   roomType === "all" ||
    //   selectedBedConfig === "all"
    // ) {
    //   setFormError("aaaWypełnij wszystkie pola");
    //   return;
    // }
    // console.log(guests_number, checkin_date, checkout_date);
    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          //   guests_number: guestsNumber,
          checkin_date: checkinDate,
          checkout_date: checkoutDate,
          room_type_supa: roomType,
          bed_size_config: selectedBedConfig,
        },
      ])
      .select();

    if (
      error ||
      !checkinDate ||
      !checkoutDate ||
      roomType === "all" ||
      selectedBedConfig === "all"
    ) {
      console.log(error);
      setFormError("Wypełnij wszystkie pola");
      return;
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
            <label htmlFor="checkin_date">Data zameldowania</label>
            <input
              className="form-control"
              type="date"
              id="checkin_date"
              value={checkinDate}
              onChange={(e) => setCheckinDate(e.target.value)}
            />
          </div>

          <div className="av-form-group">
            <label htmlFor="checkout_date">Data wymeldowania</label>
            <input
              className="form-control"
              type="date"
              id="checkout_date"
              value={checkoutDate}
              onChange={(e) => setCheckoutDate(e.target.value)}
            />
          </div>

          {/* <div className="av-form-group">
            <label htmlFor="guests_number"> Liczba gości:</label>
            <input
              className="form-control"
              type="number"
              id="guests_number"
              value={guestsNumber}
              onChange={(e) => setGuestsNumber(e.target.value)}
            />
          </div> */}

          <div className="av-form-group">
            <label htmlFor="room_type">Typ pokoju | Liczba gości</label>
            <div className="av-select-container">
              <select
                className="form-control"
                id="room_type_supa"
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

          {/* ---------------------------------- */}

          <div className="av-form-group">
            <label htmlFor="bed_size_config">Konfiguracja łóżek</label>
            <div className="av-select-container">
              <select
                className="form-control"
                id="bed_size_config"
                value={selectedBedConfig}
                onChange={(e) => setSelectedBedConfig(e.target.value)}
              >
                <option value="all">Wszystkie</option>
                {uniqueBedsSizes.map((uniqueSize, index) => (
                  <option key={index} value={uniqueSize}>
                    {uniqueSize}
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
