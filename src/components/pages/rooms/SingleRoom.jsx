import PageBanner from "../../global/PageCover/PageBanner";
import PageCover from "../../global/PageCover/PageCover";
import ButtonLarge from "../../global/ButtonLarge";
import roomsData from "../rooms/RoomsData";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const SingleRoom = () => {
  // const { id, image, title, subtitle, slug } = room;

  const { slug } = useParams();
  const allRoomsData = roomsData.filter((room) => room.slug === slug);

  return (
    <div className="cccc">
      {allRoomsData.map(({ id, image, title, subtitle }) => (
        <div key={id}>
          <PageCover
            coverStyle={{
              backgroundImage: `url("${image}")`,
            }}
            coverClass={"our-rooms-page-cover"}
          >
            <PageBanner title={title} subtitle={subtitle}>
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
    </div>
  );
};

SingleRoom.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default SingleRoom;
