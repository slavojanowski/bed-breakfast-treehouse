// import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
// import roomsData from "../pages/rooms/RoomsData";
import "./css/booking-room-form.css";
import supabase from "../../config/supabaseClient";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const allRoomsData = roomsData;

  // ----- Konstruktor new Set tworzy nowy zbiór, który automatycznie usuwa duplikaty wartości danego klucza obiektów
  // const uniqueRoomTypes = [
  //   ...new Set(allRoomsData.map((room) => room.room_type)),
  // ].sort();

  // const uniqueBedsSizes = [
  //   ...new Set(allRoomsData.map((room) => room.beds_size)),
  // ].sort();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("bookings")
      .update({
        first_name: firstName,
        last_name: lastName,
        email_address: emailAddress,
        phone_number: phoneNumber,
        street_address: streetAddress,
        address_extra_line: addressExtraLine,
        city_name: cityName,
        zip_code: zipCode,

        checkin_date: checkinDate,
        checkout_date: checkoutDate,
        adults_number: adultsNumber,
        kids_number: kidsNumber,
        // room_type_supa: allRoomsData.room_type,
        // bed_size_config: allRoomsData.beds_size,
        book_message: bookMessage,
      })
      .eq("id", id)
      .select();

    if (
      error ||
      !checkinDate ||
      !checkoutDate ||
      // roomType === "choose" ||
      // selectedBedConfig === "choose" ||
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
      setFormError("Wypełnij wszystkie pola");
      return;
    }

    if (data) {
      // console.log(data);
      setFormError(null);
      navigate("/konto-uzytkownika");
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
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmailAddress(data.email_address);
        setPhoneNumber(data.phone_number);
        setStreetAddress(data.street_address);
        setAddressExtraLine(data.address_extra_line);
        setCityName(data.city_name);
        setZipCode(data.zip_code);
        setCheckinDate(data.checkin_date);
        setCheckoutDate(data.checkout_date);
        setAdultsNumber(data.adults_number);
        setKidsNumber(data.kids_number);
        setRoomType(data.room_type_supa);
        setSelectedBedConfig(data.bed_size_config);
        setBookMessage(data.book_message);
      }
    };
    fetchBooking();
  }, [id, navigate]);

  return (
    <div className="page update-booking-page">
      <form className="sr-form" onSubmit={handleSubmit}>
        <div className="sr-form-head">
          <h4>Zaktualizuj swoją rezerwację</h4>
        </div>

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

              <div className="sr-extra address-rows">
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

                <div className="sr-form-group sr-extra">
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
                    disabled
                    // onChange={(e) => setRoomType(e.target.value)}
                  >
                    <option value="choose">{roomType}</option>
                    {/* {uniqueRoomTypes.map((uniqueType, index) => (
                        <option key={index} value={uniqueType}>
                          {uniqueType}
                        </option>
                      ))} */}
                  </select>
                  {/* <FaAngleDown className="sr-select-icon" /> */}
                </div>
              </div>

              <div className="sr-form-group">
                <label htmlFor="bed_size_config">Konfiguracja łóżek</label>
                <div className="sr-select-container">
                  <select
                    className="form-control"
                    id="bed_size_config"
                    value={selectedBedConfig}
                    disabled
                    // onChange={(e) => setSelectedBedConfig(e.target.value)}
                  >
                    <option value="choose">{selectedBedConfig}</option>
                    {/* {uniqueBedsSizes.map((uniqueSize, index) => (
                        <option key={index} value={uniqueSize}>
                          {uniqueSize}
                        </option>
                      ))} */}
                  </select>
                  {/* <FaAngleDown className="sr-select-icon" /> */}
                </div>
              </div>

              <div className="sr-form-group sr-extra">
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
          <button className="sr-book-button">ZAPISZ ZMIANY</button>
          {formError && <p className="error">{formError}</p>}
        </div>
      </form>
    </div>
  );
};

export default Update;
