import { useState, useEffect } from "react";
import RoomTile from "../pages/rooms/RoomTile";
import roomsData from "../pages/rooms/RoomsData";
import "../pages/rooms/css/room-tile.css";
import RoomsFilter from "../room-filter/RoomsFilter";

const HomeRoomsFilter = () => {
  const [filteredRooms, setFilteredRooms] = useState(roomsData);

  // ----- Sprawdzam, czy zestaw danych filteredRooms różni się od nowo dostarczonego zestawu filteredData
  const handleFilterChange = (filteredData) => {
    if (JSON.stringify(filteredRooms) !== JSON.stringify(filteredData)) {
      setFilteredRooms(filteredData);
    }
  };

  useEffect(() => {
    console.log("Zaktualizwany stan filtrowania:", filteredRooms);
  }, [filteredRooms]);

  return (
    <>
      <RoomsFilter onFilterChange={handleFilterChange} />

      <section className="roomslist">
        <div className="roomslist-center">
          {filteredRooms.map((roomData) => {
            return (
              <RoomTile
                key={roomData.id}
                room={{
                  slug: roomData.slug,
                  title: roomData.title,
                  subtitle: roomData.subtitle,
                  price: roomData.price,
                  image: roomData.image,
                }}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HomeRoomsFilter;
