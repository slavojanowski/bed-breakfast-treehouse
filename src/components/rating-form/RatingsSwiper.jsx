import supabase from "../../config/supabaseClient";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import RatingStars from "./components/RatingStars";
import HeadingTitle from "../global/HeadingTitle";

const RatingsSwiper = () => {
  const [ratings, setRatings] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRatings = async () => {
      const { data, error } = await supabase
        .from("ratings")
        .select("rating_stars, rating_description, user_name")
        .order("created_at", { ascending: false });

      if (error) {
        setFetchError("Nie można było pobrać danych");
        setRatings(null);
        // console.log(error);
      }
      if (data) {
        setRatings(data);
        setFetchError(null);
      }
      setIsLoading(false);
    };
    fetchRatings();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 2,
    slideToScroll: 3,
  };

  return (
    <>
      <HeadingTitle headingTitle="Zobacz, co myślą o nas goście, którzy już skorzystali z pobytu w naszym hotelu" />

      {fetchError && <p>{fetchError}</p>}
      {isLoading ? (
        <p className="ratings-info">Ładowanie opinii...</p>
      ) : ratings.length === 0 ? (
        <div className="ratings-info">Brak opinii</div>
      ) : (
        <Slider {...settings}>
          {ratings.map((item) => (
            <div className="rating-card" key={item.id}>
              <RatingStars selectedStars={item.rating_stars} />
              <p>{item.rating_description}</p>
              <div className="rating-user-name">{item.user_name}</div>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default RatingsSwiper;
