import HeadingTitle from "../global/HeadingTitle";
import specialsData from "../specials/SpecialsData";
import "../specials/css/hotel-specials.css";

const HotelSpecials = () => {
  const allSpecialssData = specialsData;
  // console.log(allSpecialsData);

  return (
    <div>
      <section className="hotel-specials">
        <HeadingTitle
          headingTitle="Pozwól sobie na chwilę wytchnienia w otoczeniu niezwykłej przyrody"
          headingTagline="Nasz hotel to połączenie najwyższego komfortu i malowniczych krajobrazów."
        />

        <div className="specials-container">
          {allSpecialssData.map((special) => {
            return (
              <article key={special.title} className="hotel-special">
                <span>{special.icon}</span>
                <h5>{special.title}</h5>
                <h6>{special.description}</h6>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HotelSpecials;
