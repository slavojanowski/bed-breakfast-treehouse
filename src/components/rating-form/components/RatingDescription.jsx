// import { useState } from "react";
import PropTypes from "prop-types";

const RatingDescription = ({ descriptionValue, setDescriptionValue }) => {
  return (
    <>
      <textarea
        className="form-control"
        type="text"
        id="rating_description"
        placeholder="Tutaj wpisz swoją opinię"
        value={descriptionValue}
        onChange={(e) => setDescriptionValue(e.target.value)}
        rows={6}
      />
    </>
  );
};

RatingDescription.propTypes = {
  descriptionValue: PropTypes.string.isRequired,
  setDescriptionValue: PropTypes.func.isRequired,
};

export default RatingDescription;
