import { useEffect, useState } from "react";
import AddNewPlanHeader from "./components/AddNewPlanHeader";
import YourPlansList from "./components/YourPlansList";
import "./css/plan-your-stay.css";

const PlanYourStay = () => {
  const [plans, setPlans] = useState([]);
  const [planName, setPlanName] = useState("");
  const [editingPlan, setEditingPlan] = useState(null);
  const [completedTodos, setCompletedTodos] = useState([]);

  const nameInputHandler = (e) => {
    setPlanName(e.target.value);
  };

  const addNewPlanOnEnterHandler = (e) => {
    if (e.key === "Enter" && planName.trim() !== "") {
      const updatedPlans = [...plans, planName];
      setPlans(updatedPlans);
      localStorage.setItem("plansTodo", JSON.stringify(updatedPlans));
      setPlanName("");
    }
  };

  const addNewPlanButtonHandler = () => {
    if (planName.trim() !== "") {
      const updatedPlans = [...plans, planName];
      setPlans(updatedPlans);
      localStorage.setItem("plansTodo", JSON.stringify(updatedPlans));
      setPlanName("");
    }
    // console.log("zzzzz Updated plans:", plans);
  };

  const deletePlanHandler = (planToRemove) => {
    // const updatedPlansArray = plans.filter((plan) => plan !== planToRemove);
    const updatedPlansArray = plans.splice(planToRemove);

    setPlans(updatedPlansArray);
    localStorage.setItem("plansTodo", JSON.stringify(updatedPlansArray));
  };

  const editPlanHandler = (planToEdit) => {
    setEditingPlan(planToEdit);
  };

  const saveEditedPlan = (planInEdition, editedPlan) => {
    const updatedPlans = plans.map((plan) =>
      plan === planInEdition ? editedPlan : plan
    );
    setPlans(updatedPlans);
    localStorage.setItem("plansTodo", JSON.stringify(updatedPlans));
    setEditingPlan(null);
  };

  const handleComplete = (index) => {
    const completedPlan = plans[index];
    const updatedCompletedTodos = [...completedTodos, completedPlan];
    setCompletedTodos(updatedCompletedTodos);
    const reducedPlans = plans.filter((plan) => plan !== completedPlan);
    setPlans(reducedPlans);
    localStorage.setItem("plansTodo", JSON.stringify(reducedPlans));
    localStorage.setItem(
      "completedTodos",
      JSON.stringify(updatedCompletedTodos)
    );
  };

  const deleteCompletedPlanHandler = (completedPlanToDelete) => {
    const updatedCompletedTodos = completedTodos.filter(
      (completedPlan) => completedPlan !== completedPlanToDelete
    );
    setCompletedTodos(updatedCompletedTodos);
    localStorage.setItem(
      "completedTodos",
      JSON.stringify(updatedCompletedTodos)
    );
  };

  useEffect(() => {
    const dataToComplete = JSON.parse(localStorage.getItem("plansTodo"));
    if (dataToComplete) {
      setPlans(dataToComplete);
    }
    const dataCompleted = JSON.parse(localStorage.getItem("completedTodos"));
    if (dataCompleted) {
      setCompletedTodos(dataCompleted);
    }
  }, []);

  return (
    <>
      <main className="page">
        <h3>Zaplanuj swój pobyt</h3>
        <AddNewPlanHeader
          planName={planName}
          nameInputHandler={nameInputHandler}
          addNewPlanOnEnterHandler={addNewPlanOnEnterHandler}
          addNewPlanButtonHandler={addNewPlanButtonHandler}
        />
        <YourPlansList
          plansProp={plans}
          deletePlanHandler={deletePlanHandler}
          editPlanHandler={editPlanHandler}
          saveEditedPlan={saveEditedPlan}
          editingPlan={editingPlan}
          completedTodos={completedTodos}
          handleComplete={handleComplete}
          deleteCompletedPlanHandler={deleteCompletedPlanHandler}
        />
      </main>
    </>
  );
};

export default PlanYourStay;
