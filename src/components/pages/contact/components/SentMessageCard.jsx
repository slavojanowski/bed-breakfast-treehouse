import PropTypes from "prop-types";
const SentMessageCard = ({ message, deleteMessageHandler }) => {
  const formattedDate = `${message.sentDate.currentDay}/${message.sentDate.currentMonth}/${message.sentDate.currentYear} o godzinie ${message.sentDate.getCurrentHour}:${message.sentDate.getCurrentMinute}`;

  return (
    <div className="sent-message-card">
      <div className="card-date-delete">
        <h6>Wiadomość wysłana dnia: {formattedDate}</h6>
        <h5 onClick={deleteMessageHandler}>Usuń wiadomość</h5>
      </div>
      <div className="card-head">
        <div className="card-head-column">
          <h5>Imię:</h5>
          <p>{message.name}</p>
        </div>

        <div className="card-head-column">
          <h5>Nazwisko:</h5>
          <p>{message.surname}</p>
        </div>

        <div className="card-head-column">
          <h5>Email:</h5>
          <p>{message.email}</p>
        </div>
      </div>
      <div className="card-subtitle">
        <h5>Tytuł wiadomości:</h5>
        <p>{message.subject}</p>
      </div>
      <div className="card-message-body">
        <h5>Treść wiadomości:</h5>
        <p>{message.message}</p>
      </div>
    </div>
  );
};

SentMessageCard.propTypes = {
  message: PropTypes.shape({
    sentDate: PropTypes.shape({
      currentDay: PropTypes.string.isRequired,
      currentMonth: PropTypes.string.isRequired,
      currentYear: PropTypes.string.isRequired,
      getCurrentHour: PropTypes.number.isRequired,
      getCurrentMinute: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  deleteMessageHandler: PropTypes.func.isRequired,
};

export default SentMessageCard;
