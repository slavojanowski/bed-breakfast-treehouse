import PageBanner from "../../global/PageCover/PageBanner";
import PageCover from "../../global/PageCover/PageCover";
import ButtonLarge from "../../global/ButtonLarge";
import roomsData from "../rooms/RoomsData";
import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";

const SingleRoom = () => {
  const { slug } = useParams();
  const allRoomsData = roomsData.filter((room) => room.slug === slug);

  // const currentRoom = roomsData.find(
  //   (room) => room.slug === "nowoczesny-pokoj-dwuosobowy"
  // );

  // const allRoomsData = roomsData;

  return (
    // <>
    //   <PageCover
    //     coverStyle={{
    //       backgroundImage: `url(${currentRoom.image})`,
    //     }}
    //     coverClass={"our-rooms-page-cover"}
    //   >
    //     <PageBanner title={currentRoom.title} subtitle={currentRoom.subtitle}>
    //       <ButtonLarge
    //         buttonText="Zobacz wszystkie pokoje "
    //         buttonLink={"/pokoje"}
    //       />
    //     </PageBanner>
    //   </PageCover>

    //   {allRoomsData.map((oneRoom) => {
    //     return (
    //       <div key={oneRoom.id} className="page our-rooms">
    //         <h1>Welcome to {oneRoom.title}</h1>
    //         <img src={oneRoom.cover_image} alt={oneRoom.subtitle} />
    //       </div>
    //     );
    //   })}

    //   <div className="page our-rooms">
    //     <h1>Welcome to {currentRoom.title}</h1>
    //   </div>
    // </>

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

// SingleRoom.propTypes = {
//   slug: PropTypes.string.isRequired,
// };

export default SingleRoom;
