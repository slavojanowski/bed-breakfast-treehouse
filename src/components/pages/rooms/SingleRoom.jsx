import PageBanner from "../../global/PageCover/PageBanner";
import PageCover from "../../global/PageCover/PageCover";
import ButtonLarge from "../../global/ButtonLarge";
import { FaDog, FaCar } from "react-icons/fa6";
import "../rooms/css/single-room.css";
import roomsData from "../rooms/RoomsData";
import { useParams } from "react-router-dom";
import BookingRoomForm from "../../bookings/BookingRoomForm";
import { useEffect, useState } from "react";
// import LoadingSpinner from "../../global/loading-spinner/LoadingSpinner";

const SingleRoom = () => {
  const { slug } = useParams();
  // const allRoomsData = roomsData;

  const [currentRoom, setCurrentRoom] = useState(null);

  useEffect(() => {
    // Znajdź pokój o danym slugu
    const currentRoomSlug = roomsData.find(
      (currentRoom) => currentRoom.slug === slug
    );
    setCurrentRoom(currentRoomSlug);
  }, [slug]);

  if (!currentRoom) {
    return <div>Nie znaleziono takiego pokoju</div>;
  }

  return (
    <>
      <PageCover
        coverStyle={{
          backgroundImage: `url(${currentRoom.image})`,
        }}
        coverClass={"our-rooms-page-cover"}
      >
        <PageBanner title={currentRoom.title} subtitle={currentRoom.subtitle}>
          <ButtonLarge
            buttonText="Zobacz wszystkie pokoje "
            buttonLink={"/pokoje"}
          />
        </PageBanner>
      </PageCover>

      <main className="page">
        {/* <LoadingSpinner /> */}

        <section className="single-room">
          <BookingRoomForm roomData={currentRoom} />
          <div className="single-room-images">
            {currentRoom.room_gallery.map((image, index) => (
              <img key={index} src={image} alt={image.title} />
            ))}
          </div>

          <div className="single-room-info">
            <>
              <article className="desc" key={currentRoom.id}>
                <h3>Opis pokoju</h3>
                <p>{currentRoom.description}</p>
              </article>
              <article className="info">
                <h3>Informacje</h3>
                <h6>
                  <span>Cena: </span>
                  {currentRoom.price} PLN
                </h6>
                <h6>
                  <span>Typ pokoju: </span>
                  {currentRoom.room_type}
                </h6>
                <h6>
                  <span>Konfiguracja łóżek: </span>
                  {currentRoom.beds_size}
                </h6>
                <h6>
                  {" "}
                  <span>Zwierzęta domowe: </span>
                  {currentRoom.pets_allowed ? (
                    <>
                      <FaDog /> TAK
                    </>
                  ) : (
                    <>
                      <FaDog /> NIE
                    </>
                  )}
                </h6>
                <h6>
                  <span>Bezpłatny parking: </span>
                  {currentRoom.free_parking ? (
                    <>
                      <FaCar /> TAK
                    </>
                  ) : (
                    <>
                      <FaCar /> NIE
                    </>
                  )}
                </h6>
              </article>
            </>
          </div>
        </section>
      </main>
    </>
  );
};

export default SingleRoom;
