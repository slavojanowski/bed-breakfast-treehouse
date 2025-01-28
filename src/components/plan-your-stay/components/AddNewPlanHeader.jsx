import PropTypes from "prop-types";
import YourPlanButton from "./YourPlanButton";
import YourPlanName from "./YourPlanName";

const AddNewPlanHeader = ({
  addNewPlanButtonHandler,
  planName,
  nameInputHandler,
  addNewPlanOnEnterHandler,
}) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="plans-form">
        <YourPlanName
          planName={planName}
          nameInputHandler={nameInputHandler}
          addNewPlanOnEnterHandler={addNewPlanOnEnterHandler}
        />
        <YourPlanButton addNewPlanButtonHandler={addNewPlanButtonHandler} />
      </form>
    </>
  );
};

AddNewPlanHeader.propTypes = {
  addNewPlanButtonHandler: PropTypes.func.isRequired,
  planName: PropTypes.string.isRequired,
  nameInputHandler: PropTypes.func.isRequired,
  addNewPlanOnEnterHandler: PropTypes.func.isRequired,
};

export default AddNewPlanHeader;
