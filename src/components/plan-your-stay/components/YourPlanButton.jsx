import PropTypes from "prop-types";

const YourPlanButton = ({ plansPropHandler }) => {
  return (
    <button
      className="add-new-plan-btn"
      type="button"
      onClick={plansPropHandler}
    >
      Dodaj nowy plan
    </button>
  );
};

YourPlanButton.propTypes = {
  plansPropHandler: PropTypes.func.isRequired,
};

export default YourPlanButton;
