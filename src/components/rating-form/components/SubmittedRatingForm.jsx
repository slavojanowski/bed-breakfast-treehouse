import { useEffect, useState } from "react";
import supabase from "../../../config/supabaseClient";
import RatingStars from "./RatingStars";

const SubmittedRatingForm = () => {
  const [fetchError, setFetchError] = useState(null);
  const [descriptionValue, setDescriptionValue] = useState("");
  const [selectedStars, setSelectedStars] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);

  useEffect(() => {
    const fetchRating = async () => {
      const { data, error } = await supabase.from("ratings").select().single();

      if (error) {
        setFetchError("Nie można było pobrać danych");
        setDescriptionValue(null);
        setSelectedStars(null);
      }
      if (data) {
        setDescriptionValue(data.rating_description);
        setSelectedStars(data.rating_stars);
        setUniqueId(data.unique_id);
      }
      setIsLoading(false);
    };
    fetchRating();
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    console.log("Zapisz dane:", { descriptionValue, selectedStars });
    const { error } = await supabase
      .from("ratings")
      .update({
        rating_description: descriptionValue,
        rating_stars: selectedStars,
      })
      .match({ unique_id: uniqueId });

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
        <div className="ratings-form">
          {isEditing ? (
            <>
              <RatingStars
                selectedStars={selectedStars}
                setSelectedStars={setSelectedStars}
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
                setSelectedStars={() => {}}
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

export default SubmittedRatingForm;
