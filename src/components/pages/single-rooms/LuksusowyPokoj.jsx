import PageCover from "../../global/PageCover/PageCover";
import PageBanner from "../../global/PageCover/PageBanner";
import slidesData from "../../main-slider/SlidesData";

const LuksusowyPokoj = () => {
  const currentSlide = slidesData.find(
    (slide) => slide.slug === "luksusowy-pokoj-dwuosobowy"
  );
  console.log(currentSlide.image);

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

export default LuksusowyPokoj;
