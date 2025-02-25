import PropTypes from "prop-types";

const YourPlanName = ({
  planName,
  nameInputHandler,
  addNewPlanOnEnterHandler,
}) => {
  return (
    <>
      <div className="plan-name">
        <input
          type="text"
          name="plan"
          placeholder="Wpisz nowy plan do zrealizowania"
          className="form-control add-new-plan-input"
          value={planName}
          onChange={nameInputHandler}
          onKeyDown={addNewPlanOnEnterHandler}
        />
      </div>
    </>
  );
};

YourPlanName.propTypes = {
  planName: PropTypes.string.isRequired,
  nameInputHandler: PropTypes.func.isRequired,
  addNewPlanOnEnterHandler: PropTypes.func.isRequired,
};

export default YourPlanName;
