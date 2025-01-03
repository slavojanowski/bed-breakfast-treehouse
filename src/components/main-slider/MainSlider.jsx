import { useState, useEffect } from "react";
import "../main-slider/css/main-slider.css";
import { FaCircleLeft, FaCircleRight } from "react-icons/fa6";
import slidesData from "./SlidesData";

function MainSlider() {
  const [imageIndex, setImageIndex] = useState(0);
  const allSlidesData = slidesData;

  useEffect(() => {
    const lastIndex = slidesData.length - 1;
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
    <div className="section-center">
      {allSlidesData.map((slide, i) => {
        const { id, image } = slide;
        let position = "nextSlide";
        if (i === imageIndex) {
          position = "activeSlide";
        }
        if (
          i === imageIndex - 1 ||
          (imageIndex === 0 && i === slidesData.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <div key={id} className={`single-slide ${position}`}>
            <img src={image} alt="Main slider" className="img-slider-img" />
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
