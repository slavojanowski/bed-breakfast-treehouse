import PropTypes from "prop-types";
import { useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";

const YourSinglePlan = ({
  planName,
  deletePlanHandler,
  editPlanHandler,
  saveEditedPlan,
  isEditing,
}) => {
  const [editedText, setEditedText] = useState(planName);

  const handleEditChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <>
      <div>
        <div className="single-plan">
          {isEditing ? (
            <>
              <input
                type="text"
                className="form-control add-new-plan-input"
                value={editedText}
                onChange={handleEditChange}
              />
              <button
                className="single-plan-btn single-plan-btn-editing"
                type="button"
                onClick={() => saveEditedPlan(planName, editedText)}
              >
                Zapisz zmiany
              </button>
            </>
          ) : (
            <>
              <div className="single-plan-body">
                <h5>
                  <FaAnglesRight /> <span>{planName}</span>
                </h5>
              </div>
              <div className="single-plan-footer">
                <button
                  className="single-plan-btn"
                  type="button"
                  onClick={() => {
                    editPlanHandler(planName);
                    setEditedText(planName);
                  }}
                >
                  Edytuj plan
                </button>
                <button
                  className="single-plan-btn"
                  type="button"
                  onClick={() => deletePlanHandler(planName)}
                >
                  Usuń plan
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

YourSinglePlan.propTypes = {
  planName: PropTypes.string.isRequired,
  deletePlanHandler: PropTypes.func.isRequired,
  editPlanHandler: PropTypes.func.isRequired,
  saveEditedPlan: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default YourSinglePlan;
