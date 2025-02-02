import PropTypes from "prop-types";
import "../css/contact-page.css";
import { useState } from "react";
import getCurrentDate from "../../../global/getCurrentDate";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

const ContactForm = ({ onSubmit }) => {
  const [senderName, setSenderName] = useState("");
  const [senderSurname, setSenderSurname] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderSubject, setSenderSubject] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  // const navigate = useNavigate();
  const [result, setResult] = useState("");
  const isFormValid =
    senderName &&
    senderSurname &&
    senderEmail &&
    senderSubject &&
    senderMessage;

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const message = {
        sentDate: getCurrentDate(),
        name: senderName,
        surname: senderSurname,
        email: senderEmail,
        subject: senderSubject,
        message: senderMessage,
      };

      // Pobieram istniejące już w tablicy wiadomości z localStorage
      const existingMessagesList = JSON.parse(
        localStorage.getItem("sentMessage") || "[]"
      );
      const updatedMessagesList = [...existingMessagesList, message]; // Dodaję nową wiadomość do tablicy już istniejących wiadomości

      // Aktualizuję listę w localStorage
      localStorage.setItem("sentMessage", JSON.stringify(updatedMessagesList));

      // Tylo w taki sposób mogę przekazać onSubmit jako prop do SentMessageCard (?)
      if (onSubmit) {
        onSubmit(message);
      }

      // console.log("Navigating to sent messages page...");
      // navigate("/konto-uzytkownika/wyslane-wiadomosci");
    } catch (error) {
      console.error("Nie można wysłać wiadomości", error);
    }

    // Kod z web3forms.com - do faktycznego wysyłania wiadomosci przez formularz
    setResult("Wysyłanie wiadomości....");
    const formData = new FormData(e.target);

    formData.append("access_key", "818a9bf6-fe29-40fc-a9cc-dbc47b3d4a20");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      // setResult("Twoja wiadomość została wysłana, Dziękujemy.");
      // e.target.reset();
      Swal.fire({
        title: "Dziękujemy!",
        text: "Twoja wiadomość została wysłana",
        icon: "success",
      });
      setResult("");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    // Clear form fields
    setSenderName("");
    setSenderSurname("");
    setSenderEmail("");
    setSenderSubject("");
    setSenderMessage("");
  };

  return (
    <>
      <div className="contact-form">
        <form onSubmit={onSubmitHandler}>
          <div className="form-row row-with-columns">
            <div className="form-column">
              <label htmlFor="name" className="form-label">
                Imię*
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Twoje imię"
                required
              />
            </div>
            <div className="form-column">
              <label htmlFor="surname" className="form-label">
                Nazwisko*
              </label>
              <input
                type="text"
                name="surname"
                className="form-control"
                value={senderSurname}
                onChange={(e) => setSenderSurname(e.target.value)}
                placeholder="Twoje nazwisko"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="email" className="form-label">
              E-mail*
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="Wpisz adres E-mail"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="subject" className="form-label">
              Temat wiadomości*
            </label>
            <input
              type="text"
              name="subject"
              className="form-control"
              value={senderSubject}
              onChange={(e) => setSenderSubject(e.target.value)}
              placeholder="Wpisz tytuł wiadomości"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="message" className="form-label">
              Treść wiadomości*
            </label>
            <textarea
              name="message"
              className="form-control"
              value={senderMessage}
              onChange={(e) => setSenderMessage(e.target.value)}
              placeholder="Wpisz swoją wiadomość..."
              rows="6"
              required
            />
          </div>

          <button type="submit" disabled={!isFormValid}>
            Wyślij wiadomość
          </button>
        </form>
        <span>{result}</span>
      </div>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
