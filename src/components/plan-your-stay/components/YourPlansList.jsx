import PropTypes from "prop-types";
import YourSinglePlan from "./YourSinglePlan";

const YourPlansList = ({
  plansProp,
  deletePlanHandler,
  editPlanHandler,
  saveEditedPlan,
  editingPlan,
}) => {
  // console.log(plansProp);

  return (
    <div>
      <h4>Poniżej znajduje się lista Twoich planów do zrealizowania:</h4>
      <div className="plans-list">
        {plansProp.map((plan, index) => {
          return (
            <YourSinglePlan
              deletePlanHandler={deletePlanHandler}
              editPlanHandler={editPlanHandler}
              key={index}
              planName={plan}
              saveEditedPlan={saveEditedPlan}
              isEditing={editingPlan === plan}
            />
          );
        })}
      </div>
    </div>
  );
};

YourPlansList.propTypes = {
  plansProp: PropTypes.arrayOf(PropTypes.string).isRequired,
  deletePlanHandler: PropTypes.func.isRequired,
  editPlanHandler: PropTypes.func.isRequired,
  saveEditedPlan: PropTypes.func.isRequired,
  editingPlan: PropTypes.func,
};

export default YourPlansList;
