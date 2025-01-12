import { useState, useEffect } from "react";
import "../main-slider/css/main-slider.css";
import { FaCircleLeft, FaCircleRight } from "react-icons/fa6";
// import slidesData from "./SlidesData";
import ButtonLarge from "../global/ButtonLarge";
import PageBanner from "../global/PageCover/PageBanner";
import roomsData from "../../components/pages/rooms/RoomsData";

function MainSlider() {
  const [imageIndex, setImageIndex] = useState(0);
  const allSlidesData = roomsData;

  useEffect(() => {
    const lastIndex = roomsData.length - 1;
    if (imageIndex < 0) {
      setImageIndex(lastIndex);
    }
    if (imageIndex > lastIndex) {
      setImageIndex(0);
    }
  }, [imageIndex, allSlidesData]);

  // autoslide, clearInterval
  useEffect(() => {
    const mainSlider = setInterval(() => {
      setImageIndex(imageIndex + 1);
    }, 5000);
    return () => clearInterval(mainSlider);
  }, [imageIndex]);

  return (
    <div className="section-main">
      {allSlidesData.map((slide, index) => {
        const { id, slug, title, subtitle, image } = slide;
        let position = "nextSlide";
        if (index === imageIndex) {
          position = "activeSlide";
        }
        if (
          index === imageIndex - 1 ||
          (imageIndex === 0 && index === roomsData.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <div key={id} className={`single-slide ${position}`}>
            <img src={image} alt="Main slider" className="img-slider-img" />

            <PageBanner title={title} subtitle={subtitle}>
              <ButtonLarge
                buttonText="Przejdź do pokoju"
                buttonLink={`/pokoje/${slug}`}
              />
            </PageBanner>
          </div>
        );
      })}

      <FaCircleLeft
        className="prev"
        onClick={() => setImageIndex(imageIndex - 1)}
      />

      <FaCircleRight
        className="next"
        onClick={() => setImageIndex(imageIndex + 1)}
      />
    </div>
  );
}

export default MainSlider;
