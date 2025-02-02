import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";
const RatingStars = ({ selectedStars, setSelectedStars, isEditable }) => {
  const [hoveredStars, setHoveredStars] = useState(0);

  // console.log(selectedStars);

  return (
    <>
      <div className="rating-stars-row">
        {[...Array(5)].map((_, index) => {
          const isHovered = index + 1 <= hoveredStars;
          const isSelected = index + 1 <= selectedStars;

          return (
            <FaStar
              size={40}
              key={index}
              onClick={() => setSelectedStars(index + 1)}
              onMouseEnter={() => setHoveredStars(index + 1)}
              onMouseLeave={() => setHoveredStars(0)}
              className={`${isSelected ? "selected-star" : ""} 
               ${isEditable && isHovered ? "hovered-star" : ""}`}
            />
          );
        })}
      </div>
    </>
  );
};

RatingStars.propTypes = {
  selectedStars: PropTypes.number.isRequired,
  setSelectedStars: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
};

export default RatingStars;
