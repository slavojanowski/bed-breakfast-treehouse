import { Link } from "react-router-dom";
import "./css/roomTile.css";
import PropTypes from "prop-types";

export default function RoomTile({ room }) {
  const { slug, title, image, price } = room;

  return (
    <div className="room">
      <div className="img-container">
        <img src={image} alt="single room" />
        <div className="price-top">
          <h5>{price}PLN</h5>
          <h6>za dobę</h6>
        </div>

        <Link to={`/pokoje/${slug}`} className="room-link">
          ZOBACZ POKÓJ
        </Link>
      </div>

      <Link to={`/pokoje/${slug}`} className="room-info">
        <h5>{title}</h5>
      </Link>
    </div>
  );
}

RoomTile.propTypes = {
  room: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
