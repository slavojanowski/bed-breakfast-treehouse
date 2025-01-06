import PageBanner from "../../global/PageCover/PageBanner";
import PageCover from "../../global/PageCover/PageCover";
import ButtonLarge from "../../global/ButtonLarge";
import "../rooms/css/single-room.css";
import roomsData from "../rooms/RoomsData";
import { useParams } from "react-router-dom";

const SingleRoom = () => {
  const { slug } = useParams();
  const allRoomsData = roomsData.filter((room) => room.slug === slug);

  return (
    <>
      {allRoomsData.map((room) => (
        <div key={room.id}>
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

          <div className="page our-rooms">
            <h1>single room</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleRoom;
