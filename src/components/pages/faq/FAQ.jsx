import FrequentlyAskedQuestions from "../../FAQ/FrequentlyAskedQuestions";
import "./css/faq-page.css";
import FaqPageCover from "/various-images/las.jpg";
import ButtonLarge from "../../global/ButtonLarge";
import PageBanner from "../../global/PageCover/PageBanner";
import PageCover from "../../global/PageCover/PageCover";
import GoogleMap from "../../global/GoogleMap";
import ContactBoxesInfoRow from "../../global/ContactBoxesInfoRow";

const FAQ = () => {
  return (
    <>
      <PageCover
        coverStyle={{
          backgroundImage: `url(${FaqPageCover})`,
        }}
        coverClass={"our-rooms-page-cover"}
      >
        <PageBanner
          title="Najczęściej zadawane pytania"
          subtitle="Masz pytanie? My mamy odpowiedź!"
        >
          <ButtonLarge buttonText="Sprawdź nasze pokoje" buttonLink="/pokoje" />
        </PageBanner>
      </PageCover>
      <div className="page faq-page">
        <FrequentlyAskedQuestions />
      </div>
      <ContactBoxesInfoRow />
      <div className="faq-page-google-map">
        <GoogleMap />
      </div>
    </>
  );
};

export default FAQ;
