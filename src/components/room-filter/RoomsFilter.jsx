import { useEffect, useState } from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import roomsData from "../pages/rooms/RoomsData";
import "../room-filter/css/rooms-filter.css";
import PropTypes from "prop-types";

const RoomsFilter = ({ onFilterChange }) => {
  const allRoomsData = roomsData;

  const uniqueRoomTypes = [
    ...new Set(allRoomsData.map((room) => room.room_type)),
  ];
  const uniqueBedsSizes = [
    ...new Set(allRoomsData.map((room) => room.beds_size)),
  ];

  const [selectedType, setSelectedType] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState([]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setPetsAllowed(checked);
    } else {
      if (name === "type") {
        setSelectedType(value);
      } else if (name === "beds") {
        setSelectedSize(value);
      }
    }

    onFilterChange(
      allRoomsData.filter(
        (room) =>
          (name === "type"
            ? room.room_type === value
            : selectedType
            ? room.room_type === selectedType
            : true) &&
          (name === "beds"
            ? room.beds_size === value
            : selectedSize
            ? room.beds_size === selectedSize
            : true) &&
          (name === "pets" ? checked : petsAllowed ? room.pets_allowed : true)
      )
    );
  };

  useEffect(() => {
    const filtered = allRoomsData.filter(
      (room) =>
        (selectedType ? room.room_type === selectedType : true) &&
        (selectedSize ? room.beds_size === selectedSize : true) &&
        (petsAllowed ? room.pets_allowed : true)
    );
    setFilteredRooms(filtered);
    onFilterChange(filtered);
  }, [selectedType, selectedSize, petsAllowed, allRoomsData, onFilterChange]);

  return (
    <section className="filter-container">
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Typ pokoju</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={selectedType}
          >
            <option value="">Wszystkie</option>
            {uniqueRoomTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        {/* end of select type */}

        {/* size */}
        <div className="form-group">
          <label htmlFor="beds">Konfiguracja łóżek </label>
          <div className="size-inputs">
            <select
              name="beds"
              id="beds"
              onChange={handleChange}
              className="form-control"
              value={selectedSize}
            >
              <option value="">Wszystkie</option>
              {uniqueBedsSizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
          <div
            className="single-extra custom-checkbox"
            onClick={() => setPetsAllowed(!petsAllowed)}
          >
            {petsAllowed ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
            <label htmlFor="pets" className="checkmark">
              Zwierzęta domowe
            </label>
          </div>
        </div>
        {/* end of extras type */}
      </form>

      {filteredRooms.length === 0 && (
        <div className="no-results-message">
          <h4>
            Niestety, nie znaleziono pokoi odpowiadających Twojemu wyszukiwaniu.
          </h4>
        </div>
      )}
    </section>
  );
};

RoomsFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default RoomsFilter;
