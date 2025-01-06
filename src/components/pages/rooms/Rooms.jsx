import { useState, useEffect } from "react";
import RoomTile from "./RoomTile";
import roomsData from "./RoomsData";
import "./css/room-tile.css";
import PageCover from "../../global/PageCover/PageCover";
import PageBanner from "../../global/PageCover/PageBanner";
import SinglePageCover from "/public/single-page-cover-bg-cover.jpg";
import RoomsFilter from "../../room-filter/RoomsFilter";

const Rooms = () => {
  const [filteredRooms, setFilteredRooms] = useState(roomsData);

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
      <PageCover
        coverStyle={{
          backgroundImage: `url(${SinglePageCover})`,
        }}
        coverClass={"our-rooms-page-cover"}
      >
        <PageBanner
          title="Zarezerwuj swój pobyt w naszym hotelu"
          subtitle="Doświadcz czegoś wyjątkowego"
        ></PageBanner>
      </PageCover>

      <div className="page home">
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
      </div>
    </>
  );
};

export default Rooms;
