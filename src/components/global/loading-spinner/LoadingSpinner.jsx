import "./css/loading-spinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <h4>Trwa pobieranie infromacji...</h4>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingSpinner;
