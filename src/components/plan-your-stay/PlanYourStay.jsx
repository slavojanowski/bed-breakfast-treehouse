import { useEffect, useState } from "react";
import AddNewPlanHeader from "./components/AddNewPlanHeader";
import YourPlansList from "./components/YourPlansList";
import "./css/plan-your-stay.css";

const PlanYourStay = () => {
  const [plans, setPlans] = useState([]);
  const [planName, setPlanName] = useState("");
  const [editingPlan, setEditingPlan] = useState(null);

  const nameInputHandler = (e) => {
    setPlanName(e.target.value);
  };

  const plansPropHandler = () => {
    if (planName.trim() !== "") {
      const updatedPlans = [...plans, planName];
      setPlans(updatedPlans);
      localStorage.setItem("planName", JSON.stringify(updatedPlans));
      setPlanName("");
    }
    // console.log("zzzzz Updated plans:", plans);
  };

  const deletePlanHandler = (planToRemove) => {
    const updatedPlansArray = plans.filter((plan) => plan !== planToRemove);
    setPlans(updatedPlansArray);
    localStorage.setItem("planName", JSON.stringify(updatedPlansArray));
  };

  const editPlanHandler = (planToEdit) => {
    setEditingPlan(planToEdit);
  };

  const saveEditedPlan = (oldPlan, newPlan) => {
    const updatedPlans = plans.map((plan) =>
      plan === oldPlan ? newPlan : plan
    );
    setPlans(updatedPlans);
    localStorage.setItem("planName", JSON.stringify(updatedPlans));
    setEditingPlan(null);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("planName"));
    if (data) {
      setPlans(data);
    }
  }, []);

  return (
    <>
      <main className="page">
        <h3>Zaplanuj swój pobyt</h3>
        <AddNewPlanHeader
          planName={planName}
          nameInputHandler={nameInputHandler}
          plansPropHandler={plansPropHandler}
        />
        <YourPlansList
          plansProp={plans}
          deletePlanHandler={deletePlanHandler}
          editPlanHandler={editPlanHandler}
          saveEditedPlan={saveEditedPlan}
          editingPlan={editingPlan}
        />
      </main>
    </>
  );
};

export default PlanYourStay;
