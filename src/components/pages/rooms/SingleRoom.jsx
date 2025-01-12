import PageBanner from "../../global/PageCover/PageBanner";
import PageCover from "../../global/PageCover/PageCover";
import ButtonLarge from "../../global/ButtonLarge";
import "../rooms/css/single-room.css";
import roomsData from "../rooms/RoomsData";
import { useParams } from "react-router-dom";
import BookingRoomForm from "../../bookings/BookingRoomForm";
import { useEffect, useState } from "react";

const SingleRoom = () => {
  const { slug } = useParams();
  // const allRoomsData = roomsData.filter((room) => room.slug === slug);

  const [room, setRoom] = useState(null);

  useEffect(() => {
    // Znajdź pokój o danym slug
    const currentRoomSlug = roomsData.find((room) => room.slug === slug);
    setRoom(currentRoomSlug);
  }, [slug]);

  if (!room) {
    return <div>Nie znaleziono pokoju</div>;
  }

  return (
    <>
      <PageCover
        coverStyle={{
          backgroundImage: `url(${room.image})`,
        }}
        coverClass={"our-rooms-page-cover"}
      >
        <PageBanner title={room.title} subtitle={room.subtitle}>
          <ButtonLarge
            buttonText="Zobacz wszystkie pokoje "
            buttonLink={"/pokoje"}
          />
        </PageBanner>
      </PageCover>

      <div className="page single-room">
        <BookingRoomForm roomData={room} />
      </div>
    </>
  );
};

export default SingleRoom;
