import RatingDescription from "./components/RatingDescription";
import RatingStars from "./components/RatingStars";
import "./css/rating-form.css";
import { useState, useEffect } from "react";
import supabase from "../../config/supabaseClient";
import SubmittedRatingForm from "../pages/user-account-page/outletSections/SubmittedRatingFormTab";

const RatingForm = () => {
  const [descriptionValue, setDescriptionValue] = useState("");
  const [selectedStars, setSelectedStars] = useState(1);
  const [formError, setFormError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);

  const handleRatingSubmit = async (event) => {
    event.preventDefault();

    if (!descriptionValue.trim() || selectedStars <= 0) {
      setFormError("Wypełnij wszystkie pola i wybierz liczbę gwiazdek");
      return;
    }

    const { data, error } = await supabase
      .from("ratings")
      .insert([
        {
          user_name: userName,
          user_email: userEmail,
          rating_stars: selectedStars,
          rating_description: descriptionValue,
          is_submitted: true,
        },
      ])
      .select();

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

  useEffect(() => {
    const checkIfSubmitted = async () => {
      if (!userEmail) return;

      const { data, error } = await supabase
        .from("ratings")
        .select("user_email")
        .eq("user_email", userEmail)
        .single();

      if (error && error.code !== "PGRST116") {
        // PGRST116 is the code for no rows found
        console.log(error);
        setFormError("Wystąpił błąd podczas sprawdzania statusu opinii");
        return;
      }

      if (data) {
        setSubmitted(true);
      }
    };

    checkIfSubmitted();
  }, [userEmail]);

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await supabase.auth.getUser();
      const displayEmail = data.user.email;
      const displayName = data.user.user_metadata.display_name;
      setUserEmail(displayEmail);
      setUserName(displayName);
    };

    getUserData();
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
            <form
              className="ratings-form initial-submit-form"
              onSubmit={handleRatingSubmit}
            >
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
