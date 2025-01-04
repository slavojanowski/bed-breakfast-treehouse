import RoomTile from "./RoomTile";
import roomsData from "./RoomsData";
import "./css/roomTile.css";
import PageCover from "../../global/PageCover/PageCover";
import PageBanner from "../../global/PageCover/PageBanner";
import SinglePageCover from "../../global/PageCover/images/single-page-cover-bg-cover.jpg";

const Rooms = () => {
  const allRoomsData = roomsData;

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
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        ></PageBanner>
      </PageCover>

      <div className="page home">
        <section className="roomslist">
          <div className="roomslist-center">
            {allRoomsData.map((roomData) => {
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
