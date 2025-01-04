import PageCover from "../../global/PageCover/PageCover";
import PageBanner from "../../global/PageCover/PageBanner";
import slidesData from "../../main-slider/SlidesData";

const NowoczesnyPokoj = () => {
  const currentSlide = slidesData.find(
    (slide) => slide.slug === "nowoczesny-pokoj-dwuosobowy"
  );

  return (
    <>
      <PageCover
        coverStyle={{
          backgroundImage: `url(${currentSlide.image})`,
        }}
        coverClass={"our-rooms-page-cover"}
      >
        <PageBanner
          title={currentSlide.title}
          subtitle={currentSlide.subtitle}
        />
      </PageCover>

      <div className="page our-rooms">
        <h1>Welcome to {currentSlide.title}</h1>
      </div>
    </>
  );
};

export default NowoczesnyPokoj;
