import RatingDescription from "./components/RatingDescription";
import RatingStars from "./components/RatingStars";
import "./css/rating-form.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import supabase from "../../config/supabaseClient";
import SubmittedRatingForm from "./components/SubmittedRatingForm";

const RatingForm = () => {
  const [descriptionValue, setDescriptionValue] = useState("");
  const [selectedStars, setSelectedStars] = useState(1);
  const [formError, setFormError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingSubmit = async (event) => {
    event.preventDefault();
    const newUniqueId = uuidv4();

    if (!descriptionValue.trim() || selectedStars <= 0) {
      setFormError("Wypełnij wszystkie pola i wybierz liczbę gwiazdek");
      return;
    }

    const { data, error } = await supabase
      .from("ratings")
      .insert([
        {
          unique_id: newUniqueId,
          rating_stars: selectedStars,
          rating_description: descriptionValue,
          is_submitted: true,
        },
      ])
      .select(); // select() misi buć wywoływane

    if (error) {
      console.log(error);
      setFormError("Wystąpił błąd podczas zapisywania opinii");
      return;
    }

    if (data) {
      console.log(data);
      setFormError(null);
      setSubmitted(true);
    }

    setDescriptionValue("");
    setSelectedStars(0);
  };

  // Sprawdzenie, czy użytkownik już przesłał opinię
  useEffect(() => {
    const checkIfSubmitted = async () => {
      const { data, error } = await supabase
        .from("ratings")
        .select("is_submitted")
        .eq("is_submitted", true)
        .single();

      if (data.is_submitted === null) {
        console.log(error);
        setFormError("");
        return;
      }

      if (error) {
        console.log(error);
        setFormError("Wystąpił błąd podczas sprawdzania statusu opinii");
        return;
      }

      if (data) {
        setSubmitted(data.is_submitted);
      }
    };

    checkIfSubmitted();
  }, []);

  return (
    <>
      <div className="ratings-page">
        <div className="rating-head">
          <h3>
            Podziel się z innymi swoimi doświadczeniami z pobytu w naszym hotelu
          </h3>
        </div>

        <div className="ratings-container">
          {submitted ? (
            <SubmittedRatingForm />
          ) : (
            <form className="ratings-form" onSubmit={handleRatingSubmit}>
              <RatingStars
                selectedStars={selectedStars}
                setSelectedStars={setSelectedStars}
              />
              <RatingDescription
                descriptionValue={descriptionValue}
                setDescriptionValue={setDescriptionValue}
              />
              {formError && <p className="error">{formError}</p>}

              <button className="ratings-button">Prześlij opinię</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default RatingForm;
