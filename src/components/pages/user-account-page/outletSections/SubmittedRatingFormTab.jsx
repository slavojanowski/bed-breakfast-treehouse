import { useEffect, useState } from "react";
import supabase from "../../../../config/supabaseClient";
import RatingStars from "../../../rating-form/components/RatingStars";

const SubmittedRatingFormTab = () => {
  const [fetchError, setFetchError] = useState(null);
  const [descriptionValue, setDescriptionValue] = useState("");
  const [selectedStars, setSelectedStars] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const fetchUserEmail = async () => {
      const { data } = await supabase.auth.getUser();
      const displayEmail = data.user.email;
      setUserEmail(displayEmail);
    };

    const fetchRating = async () => {
      if (!userEmail) return;

      const { data, error } = await supabase
        .from("ratings")
        .select()
        .eq("user_email", userEmail)
        .single();

      if (error) {
        setFetchError("Nie można było pobrać danych");
        setDescriptionValue(null);
        setSelectedStars(null);
      }

      if (data) {
        setDescriptionValue(data.rating_description);
        setSelectedStars(data.rating_stars);
      }
      setIsLoading(false);
    };

    fetchUserEmail().then(fetchRating);
  }, [userEmail]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    const { error } = await supabase
      .from("ratings")
      .update({
        rating_description: descriptionValue,
        rating_stars: selectedStars,
      })
      .eq("user_email", userEmail);

    if (error) {
      console.error("Błąd aktualizacji:", error);
      setFetchError("Nie można było zaktualizować danych");
    } else {
      setIsEditing(false);
    }
  };

  return (
    <>
      <h4 className="thank-you-message">Dziękujemy za przesłanie opinii!</h4>

      {isLoading ? (
        <p className="bookings-info">Ładowanie historii rezerwacji...</p>
      ) : (
        <div className="ratings-form disable-hover">
          {isEditing ? (
            <>
              <RatingStars
                selectedStars={selectedStars}
                setSelectedStars={setSelectedStars}
                isEditable={isEditing}
              />
              <textarea
                className="form-control"
                type="text"
                id="rating_description"
                placeholder="Tutaj wpisz swoją opinię"
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
                rows={5}
              />
              {fetchError && <p className="error">{fetchError}</p>}
              <button onClick={handleSave}>Zapisz zmiany</button>
            </>
          ) : (
            <>
              <RatingStars
                selectedStars={selectedStars}
                // setSelectedStars={() => null}
              />

              <p>{descriptionValue}</p>

              <button onClick={handleEdit}>Edytuj swoją opinię</button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SubmittedRatingFormTab;
