import ContactForm from "./components/ContactForm";
import GoogleMap from "../../global/GoogleMap";
import ContactBoxesInfoRow from "../../global/ContactBoxesInfoRow";
import PageCover from "../../global/PageCover/PageCover";
import PageBanner from "../../global/PageCover/PageBanner";
import ContactPageCover from "/various-images/krajobraz.jpg";

const ContactPage = () => {
  return (
    <>
      <PageCover
        coverStyle={{
          backgroundImage: `url(${ContactPageCover})`,
        }}
        coverClass={"our-rooms-page-cover"}
      >
        <PageBanner
          title="Potrzebujesz więcej informacji?"
          subtitle="Napisz do nas lub zadzwoń!"
        ></PageBanner>
      </PageCover>
      <div className="contact-page">
        <ContactBoxesInfoRow customClassName="contact-boxes-info-row" />

        <div className="page contact-form">
          <h4>Formularz kontaktowy</h4>
          <ContactForm />
        </div>
      </div>
      <div className="faq-page-google-map">
        <GoogleMap />
      </div>
    </>
  );
};

export default ContactPage;
