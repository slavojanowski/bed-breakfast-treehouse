import supabase from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import roomsData from "../pages/rooms/RoomsData";
import "./css/booking-room-form.css";
import { FaAngleDown, FaCircleArrowDown } from "react-icons/fa6";
import PropTypes from "prop-types";

const BookingRoomForm = ({ roomData }) => {
  const navigate = useNavigate();
  const allRoomsData = roomsData;

  const uniqueRoomTypes = [
    ...new Set(allRoomsData.map((room) => room.room_type)),
  ].sort();

  const uniqueBedsSizes = [
    ...new Set(allRoomsData.map((room) => room.beds_size)),
  ].sort();

  const [formDisplay, setFormDisplay] = useState(false);

  // ----- column left
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [addressExtraLine, setAddressExtraLine] = useState("");
  const [cityName, setCityName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [bookMessage, setBookMessage] = useState("");

  //----- column right
  const [adultsNumber, setAdultsNumber] = useState("");
  const [kidsNumber, setKidsNumber] = useState("");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [roomType, setRoomType] = useState("");
  const [selectedBedConfig, setSelectedBedConfig] = useState("");
  const [formError, setFormError] = useState(null);

  // Fetching room types when component mounts
  useEffect(() => {
    const fetchDropdownData = async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select("room_type_supa, bed_size_config, adults_number, kids_number");

      if (error) {
        console.log(error);
        setFormError("Wystąpił błąd podczas pobierania danych o typach pokoi");
        return;
      }

      setRoomType(data);
      setSelectedBedConfig(data);
      setAdultsNumber(data);
      setKidsNumber(data);
    };

    fetchDropdownData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          booked_room_name: roomData.title,
          checkin_date: checkinDate,
          checkout_date: checkoutDate,
          adults_number: adultsNumber,
          kids_number: kidsNumber,
          room_type_supa: roomType,
          bed_size_config: selectedBedConfig,
          book_message: bookMessage,

          first_name: firstName,
          last_name: lastName,
          email_address: emailAddress,
          phone_number: phoneNumber,
          street_address: streetAddress,
          address_extra_line: addressExtraLine,
          city_name: cityName,
          zip_code: zipCode,
        },
      ])
      .select();

    if (
      error ||
      !checkinDate ||
      !checkoutDate ||
      roomType === "choose" ||
      selectedBedConfig === "choose" ||
      roomType === "choose" ||
      selectedBedConfig === "choose" ||
      !adultsNumber ||
      !kidsNumber ||
      !firstName.trim() ||
      !lastName.trim() ||
      !emailAddress ||
      !phoneNumber ||
      !streetAddress.trim() ||
      !cityName.trim() ||
      !zipCode.trim()
    ) {
      // console.log(error);
      setFormError("Wypełnij wszystkie pola");
      return;
    }

    if (data) {
      // console.log(data);
      setFormError(null);
      navigate("/konto-uzytkownika");
    }
  };

  const handleToogle = () => {
    setFormDisplay(!formDisplay);
  };

  return (
    <section className="sr-filter-container">
      <form
        className={`sr-form ${formDisplay ? "active-form" : ""}`}
        onSubmit={handleSubmit}
      >
        <div className="sr-form-head" onClick={handleToogle}>
          <h5>
            <b>Formularz rezerwacji dla:</b> {roomData.title}
          </h5>
          <h5>
            <FaCircleArrowDown />
          </h5>
        </div>

        <div className="show-hide">
          <div className="sr-all-groups-button">
            <div className="sr-form-all-groups">
              <div className="sr-column">
                <div className="sr-form-group">
                  <label htmlFor="first_name">Imię</label>
                  <input
                    className="form-control"
                    type="text"
                    id="first_name"
                    placeholder="Wpisz swoje imię"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    // required
                  />
                </div>

                <div className="sr-form-group">
                  <label htmlFor="last_name">Nazwisko</label>
                  <input
                    className="form-control"
                    type="text"
                    id="last_name"
                    placeholder="Wpisz swoje nazwisko"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="sr-form-group">
                  <label htmlFor="email_address">Adres E-mail</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email_address"
                    placeholder="Wpisz swój adres E-mail"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>

                <div className="sr-form-group">
                  <label htmlFor="phone_number">Numer telefonu</label>
                  <input
                    className="form-control"
                    type="tel"
                    id="phone_number"
                    placeholder="Wpisz swój nr telefonu"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="sr-special address-rows">
                  <div className="sr-form-group">
                    <label htmlFor="street_address">
                      Nazwa ulicy, nr budynku/lokalu
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="street_address"
                      placeholder="Wpisz swój adres"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                    />
                  </div>

                  <div className="sr-form-group sr-special">
                    <input
                      className="form-control"
                      type="text"
                      id="address_extra_line"
                      placeholder="Ciąg dalszy adresu (opcjonalnie)"
                      value={addressExtraLine}
                      onChange={(e) => setAddressExtraLine(e.target.value)}
                    />
                  </div>
                </div>

                <div className="sr-form-group">
                  <label htmlFor="city_name">Nazwa miasta</label>
                  <input
                    className="form-control"
                    type="text"
                    id="city_name"
                    placeholder="Wpisz nazwę miasta"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                  />
                </div>

                <div className="sr-form-group">
                  <label htmlFor="zip_code">Kod pocztowy</label>
                  <input
                    className="form-control"
                    type="text"
                    id="zip_code"
                    placeholder="Wpisz kod pcztowy"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>

              <div className="sr-column">
                <div className="sr-form-group">
                  <label htmlFor="checkin_date">Data zameldowania</label>
                  <input
                    className="form-control"
                    type="date"
                    id="checkin_date"
                    value={checkinDate}
                    onChange={(e) => setCheckinDate(e.target.value)}
                  />
                </div>

                <div className="sr-form-group">
                  <label htmlFor="checkout_date">Data wymeldowania</label>
                  <input
                    className="form-control"
                    type="date"
                    id="checkout_date"
                    value={checkoutDate}
                    onChange={(e) => setCheckoutDate(e.target.value)}
                  />
                </div>

                <div className="sr-form-group">
                  <label htmlFor="adults_number"> Liczba dorosłych:</label>
                  <div className="sr-select-container">
                    <select
                      className="form-control"
                      id="adults_number"
                      value={adultsNumber}
                      onChange={(e) => setAdultsNumber(e.target.value)}
                    >
                      <option value="choose">Wybierz</option>
                      <option value="1">1 osoba</option>
                      <option value="2">2 osoby</option>
                      <option value="3">3 osoby</option>
                      <option value="4">4 osoby</option>
                    </select>
                    <FaAngleDown className="sr-select-icon" />
                  </div>
                </div>

                <div className="sr-form-group">
                  <label htmlFor="kids_number"> Liczba dzieci</label>
                  <div className="sr-select-container">
                    <select
                      className="form-control"
                      id="kids_number"
                      value={kidsNumber}
                      onChange={(e) => setKidsNumber(e.target.value)}
                    >
                      <option value="choose">Wybierz</option>
                      <option value="Brak">Brak dzieci</option>
                      <option value="1">1 dziecko</option>
                      <option value="2">2 dzieci</option>
                      <option value="3">3 dzieci</option>
                    </select>
                    <FaAngleDown className="sr-select-icon" />
                  </div>
                </div>

                <div className="sr-form-group">
                  <label htmlFor="room_type_supa">Typ pokoju</label>
                  <div className="sr-select-container">
                    <select
                      className="form-control"
                      id="room_type_supa"
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                    >
                      <option value="choose">Wybierz</option>
                      {uniqueRoomTypes.map((uniqueType, index) => (
                        <option key={index} value={uniqueType}>
                          {uniqueType}
                        </option>
                      ))}
                    </select>
                    <FaAngleDown className="sr-select-icon" />
                  </div>
                </div>

                <div className="sr-form-group">
                  <label htmlFor="bed_size_config">Konfiguracja łóżek</label>
                  <div className="sr-select-container">
                    <select
                      className="form-control"
                      id="bed_size_config"
                      value={selectedBedConfig}
                      onChange={(e) => setSelectedBedConfig(e.target.value)}
                    >
                      <option value="choose">Wybierz</option>
                      {uniqueBedsSizes.map((uniqueSize, index) => (
                        <option key={index} value={uniqueSize}>
                          {uniqueSize}
                        </option>
                      ))}
                    </select>
                    <FaAngleDown className="sr-select-icon" />
                  </div>
                </div>

                <div className="sr-form-group sr-special">
                  <label htmlFor="book_message">Uwagi do rezerwacji</label>
                  <textarea
                    className="form-control"
                    name="Message"
                    id="book_message"
                    placeholder="Tutaj wpisz swoje uwagi do rezerwacji..."
                    value={bookMessage}
                    onChange={(e) => setBookMessage(e.target.value)}
                    required=""
                  ></textarea>
                </div>
              </div>
            </div>
            <button className="sr-book-button">ZAREZERWUJ POKÓJ</button>
            {formError && <p className="error">{formError}</p>}
          </div>
        </div>
      </form>
    </section>
  );
};

BookingRoomForm.propTypes = {
  roomData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookingRoomForm;
