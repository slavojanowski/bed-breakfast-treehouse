import { useState } from "react";
import "./css/frequently-asked-questions.css";
import faqData from "./FrequentlyAskedQuestionsData";
import HeadingTitle from "../global/HeadingTitle";

const FrequentlyAskedQuestions = () => {
  const [faqSelected, setFaqSelected] = useState(0);

  const toggle = (i) => {
    if (faqSelected === i) {
      return setFaqSelected(null);
    }
    setFaqSelected(i);
  };

  return (
    <>
      <HeadingTitle
        headingTitle="Cieszymy się, że już niebawem będziemy mogli gościć Cię w TreeHouse Hotel"
        headingTagline="Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania. Jeśli nie znalazłeś odpowiedzi na swoje pytanie, skontaktuj się z nami."
      />
      <div className="faq-section">
        {faqData.map((faq, i) => {
          return (
            <div
              className={`faq-row ${faqSelected === i ? "active-row" : ""}`}
              key={i}
            >
              <div className="faq-row-title" onClick={() => toggle(i)}>
                <h3>{faq.faq_title}</h3>
                <span>{faqSelected === i ? "-" : "+"}</span>
              </div>

              <div className="show-hide">
                <ul>
                  {faq.rows.map((row) => {
                    return (
                      <li key={row.id}>
                        <h4>{row.question}</h4>
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
