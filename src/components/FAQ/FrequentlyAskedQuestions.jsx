import { useState } from "react";
import "./css/frequently-asked-questions.css";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";
import faqData from "./FrequentlyAskedQuestionsData";
import HeadingTitle from "../global/HeadingTitle";

const FrequentlyAskedQuestions = () => {
  const [faqSelected, setFaqSelected] = useState(0);

  const handleToggle = (faqToBeSelected) => {
    setFaqSelected(faqToBeSelected === faqSelected ? null : faqToBeSelected);
  };

  // const handleToggle = (faqToBeSelected) => {
  //   if (faqToBeSelected === faqSelected) {
  //     setFaqSelected(null);
  //   }
  //   setFaqSelected(faqToBeSelected);
  // };

  return (
    <>
      <HeadingTitle
        headingTitle="Cieszymy się, że już niebawem będziemy mogli gościć Cię w Tree House Hotel"
        headingTagline="Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania. Jeśli nie znalazłeś odpowiedzi na swoje pytanie, skontaktuj się z nami."
      />
      <div className="faq-section">
        {faqData.map((faq, index) => {
          return (
            <div
              className={`faq-row ${faqSelected === index ? "active-row" : ""}`}
              key={index}
            >
              <div
                className="faq-row-title"
                onClick={() => handleToggle(index)}
              >
                <h3>{faq.faq_title}</h3>
                <span>
                  {faqSelected === index ? <FaCircleMinus /> : <FaCirclePlus />}
                </span>
              </div>

              <div className="show-hide">
                <ul>
                  {faq.rows.map((row) => {
                    return (
                      <li key={row.id}>
                        <div className="question">
                          <span>
                            <FaCircleQuestion />
                          </span>
                          <h4>{row.question}</h4>
                        </div>
                        <p>{row.answer}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
