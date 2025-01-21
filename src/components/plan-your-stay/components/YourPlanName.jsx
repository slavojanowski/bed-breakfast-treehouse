import PropTypes from "prop-types";

const YourPlanName = ({ planName, nameInputHandler }) => {
  return (
    <>
      <div className="plan-name">
        <input
          type="text"
          name="plan"
          placeholder="Nazwij swój kolejny plan"
          className="form-control add-new-plan-input"
          value={planName}
          onChange={nameInputHandler}
        />
      </div>
    </>
  );
};

YourPlanName.propTypes = {
  planName: PropTypes.string.isRequired,
  nameInputHandler: PropTypes.func.isRequired,
};

export default YourPlanName;
