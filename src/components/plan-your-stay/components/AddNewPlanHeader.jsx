import PropTypes from "prop-types";
import YourPlanButton from "./YourPlanButton";
import YourPlanName from "./YourPlanName";

const AddNewPlanHeader = ({ plansPropHandler, planName, nameInputHandler }) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="plans-form">
        <YourPlanName planName={planName} nameInputHandler={nameInputHandler} />
        <YourPlanButton plansPropHandler={plansPropHandler} />
      </form>
    </>
  );
};

AddNewPlanHeader.propTypes = {
  plansPropHandler: PropTypes.func.isRequired,
  planName: PropTypes.string.isRequired,
  nameInputHandler: PropTypes.func.isRequired,
};

export default AddNewPlanHeader;
