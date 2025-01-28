import PropTypes from "prop-types";

const YourPlanButton = ({ addNewPlanButtonHandler }) => {
  return (
    <button
      className="add-new-plan-btn"
      type="button"
      onClick={addNewPlanButtonHandler}
    >
      Dodaj nowy plan
    </button>
  );
};

YourPlanButton.propTypes = {
  addNewPlanButtonHandler: PropTypes.func.isRequired,
};

export default YourPlanButton;
