import { useState } from "react";
import "../main-slider/css/main-slider.css";
import { FaCircleLeft, FaCircleRight } from "react-icons/fa6";
import PropTypes from "prop-types";

export default function MainSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    if (imageIndex < imageUrls.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };

  const showPrevImage = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(imageUrls.length - 1);
    }
  };

  return (
    <div className="single-slide">
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <FaCircleLeft />
      </button>
      <img
        src={imageUrls[imageIndex]}
        className="img-slider-img"
        alt="Slider slide"
      />

      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <FaCircleRight />
      </button>
    </div>
  );
}

MainSlider.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string),
};
