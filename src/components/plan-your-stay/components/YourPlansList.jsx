import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";
import YourSinglePlan from "./YourSinglePlan";
import { useState } from "react";

const YourPlansList = ({
  plansProp,
  deletePlanHandler,
  editPlanHandler,
  saveEditedPlan,
  editingPlan,
  completedTodos,
  handleComplete,
  deleteCompletedPlanHandler,
}) => {
  // console.log(plansProp);

  const [isCompleteScreen, setIsCompleteScreen] = useState(false);

  return (
    <>
      <div className="plans-list-section">
        <div className="plans-buttons-section">
          <button
            className={`plans-btn ${
              !isCompleteScreen === true ? "active" : ""
            }`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Plany do zrealizowania
          </button>
          <button
            className={`plans-btn ${
              !isCompleteScreen === false ? "active" : ""
            }`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Plany zakończone
          </button>
        </div>

        {!isCompleteScreen &&
          (plansProp.length === 0 ? (
            <h5 className="plans-list-info">
              Obecnie nie posiadasz żadnych planów do zrealizowania.
            </h5>
          ) : (
            <>
              <h5 className="plans-list-info">
                Poniżej znajduje się lista Twoich planów do zrealizowania:
              </h5>
              <div className="plans-list">
                {plansProp
                  .map((plan, index) => (
                    <YourSinglePlan
                      deletePlanHandler={deletePlanHandler}
                      editPlanHandler={editPlanHandler}
                      key={index}
                      planName={plan}
                      saveEditedPlan={saveEditedPlan}
                      isEditing={editingPlan === plan}
                      handleComplete={() => handleComplete(index)}
                    />
                  ))
                  .reverse()}
              </div>
            </>
          ))}

        {isCompleteScreen &&
          (completedTodos.length === 0 ? (
            <h5 className="plans-list-info">
              Obecnie nie posiadasz żadnych zrealizowanych planów.
            </h5>
          ) : (
            <>
              <h5 className="plans-list-info">
                Poniżej znajduje się lista Twoich zrealizowanych planów:
              </h5>
              <div className="plans-list">
                {completedTodos
                  .map((completedPlan, index) => (
                    <div key={index} className="single-plan completed-plan">
                      <h5>
                        <FaCheck /> <span>{completedPlan}</span>
                      </h5>
                      <button
                        className="single-plan-btn"
                        type="button"
                        onClick={() =>
                          deleteCompletedPlanHandler(completedPlan)
                        }
                      >
                        Usuń
                      </button>
                    </div>
                  ))
                  .reverse()}
              </div>
            </>
          ))}
      </div>
    </>
  );
};

YourPlansList.propTypes = {
  plansProp: PropTypes.arrayOf(PropTypes.string).isRequired,
  deletePlanHandler: PropTypes.func.isRequired,
  editPlanHandler: PropTypes.func.isRequired,
  saveEditedPlan: PropTypes.func.isRequired,
  editingPlan: PropTypes.func,
  completedTodos: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleComplete: PropTypes.func.isRequired,
  deleteCompletedPlanHandler: PropTypes.func.isRequired,
};

export default YourPlansList;
