import { useEffect, useState } from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import roomsData from "../pages/rooms/RoomsData";
import "../room-filter/css/rooms-filter.css";
import PropTypes from "prop-types";
import { FaAngleDown } from "react-icons/fa6";

const RoomsFilter = ({ onFilterChange }) => {
  const allRoomsData = roomsData;

  // --- ten zapis ponizej eliminuje powtarzanie w elemencie html select tych samych wartości danego klucza obiektu
  const uniqueRoomTypes = [
    ...new Set(allRoomsData.map((room) => room.room_type)),
  ];
  const uniqueBedsSizes = [
    ...new Set(allRoomsData.map((room) => room.beds_size)),
  ];

  // --- Obliczanie minimalnej i maksymalnej ceny pokoju według wartości klucza: price
  const minPrice = Math.min(...allRoomsData.map((room) => room.price));
  const maxPrice = Math.max(...allRoomsData.map((room) => room.price));

  const [roomPrice, setRoomPrice] = useState(maxPrice);
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [selectedBedConfig, setSelectedBedConfig] = useState("");
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [freeParking, setFreeParking] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "room-type") {
      setSelectedRoomType(value);
    } else if (name === "beds-config") {
      setSelectedBedConfig(value);
    } else if (name === "room-price") {
      setRoomPrice(value);
    }

    onFilterChange(
      allRoomsData.filter(
        (room) =>
          (name === "room-type"
            ? room.room_type === value
            : selectedRoomType
            ? room.room_type === selectedRoomType
            : true) &&
          (name === "beds-config"
            ? room.beds_size === value
            : selectedBedConfig
            ? room.beds_size === selectedBedConfig
            : true) &&
          (roomPrice ? room.price <= roomPrice : true)
      )
    );
  };

  useEffect(() => {
    const filtered = allRoomsData.filter(
      (room) =>
        (selectedRoomType ? room.room_type === selectedRoomType : true) &&
        (selectedBedConfig ? room.beds_size === selectedBedConfig : true) &&
        (petsAllowed ? room.pets_allowed : true) &&
        (freeParking ? room.free_parking : true) &&
        room.price <= roomPrice
    );
    setFilteredRooms(filtered);
    onFilterChange(filtered);
  }, [
    selectedRoomType,
    selectedBedConfig,
    petsAllowed,
    freeParking,
    roomPrice,
    allRoomsData,
    onFilterChange,
  ]);

  const resetFilters = () => {
    setSelectedRoomType("");
    setSelectedBedConfig("");
    setPetsAllowed(false);
    setFreeParking(false);
    setRoomPrice(maxPrice);
    // onFilterChange(allRoomsData); // Resetuje również filtrowane pokoje
  };

  return (
    <section className="filter-container">
      <form className="filter-form">
        {/* --- Typ pokoju --- */}
        <div className="form-group">
          <label htmlFor="type">Typ pokoju</label>
          <div className="select-container">
            <select
              name="room-type"
              onChange={handleChange}
              className="form-control"
              value={selectedRoomType}
            >
              <option value="">Wszystkie</option>
              {uniqueRoomTypes.map((uniqueType, index) => (
                <option key={index} value={uniqueType}>
                  {uniqueType}
                </option>
              ))}
            </select>
            <FaAngleDown className="select-icon" />
          </div>
        </div>

        {/* --- Konfiguracja łóżek --- */}
        <div className="form-group">
          <label htmlFor="beds">Konfiguracja łóżek </label>
          <div className="select-container">
            <select
              name="beds-config"
              onChange={handleChange}
              className="form-control"
              value={selectedBedConfig}
            >
              <option value="">Wszystkie</option>
              {uniqueBedsSizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <FaAngleDown className="select-icon" />
          </div>
        </div>

        {/* --- Suwak cen pokoju --- */}
        <div className="form-group">
          <label htmlFor="room-price">
            Cena pokoju: <b>{roomPrice}</b> PLN
          </label>
          <input
            type="range"
            name="room-price"
            min={minPrice}
            max={maxPrice}
            // id="price"
            value={roomPrice}
            onChange={handleChange}
            className="form-control room-price-range"
          />
        </div>

        <div className="form-checkboxes-group">
          {/* --- Zwierzęta domowe - typ boolean - Tak/Nie --- */}
          <div className="form-group">
            <div
              className="single-extra custom-checkbox"
              onClick={() => setPetsAllowed(!petsAllowed)}
            >
              {petsAllowed ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
              <label htmlFor="pets">Zwierzęta domowe</label>
            </div>
          </div>
          {/* --- Bezpłatny parking - typ boolean - Tak/Nie --- */}
          <div className="form-group">
            <div
              className="single-extra custom-checkbox"
              onClick={() => setFreeParking(!freeParking)}
            >
              {freeParking ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
              <label htmlFor="parking">Bezpłatny parking</label>
            </div>
          </div>
        </div>

        {/* --- Przycisk do resetowania filtrów --- */}
        <button type="button" onClick={resetFilters} className="reset-button">
          Wyczyść filtry
        </button>
      </form>

      {filteredRooms.length === 0 && (
        <div className="no-results-message">
          <h4>
            Niestety, nie znaleziono pokoi odpowiadających Twojemu wyszukiwaniu.
          </h4>
          <h5>Spróbuj wybrać inne opcje wyszukiwania i znajdź swój pokój.</h5>
        </div>
      )}
    </section>
  );
};

RoomsFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default RoomsFilter;
