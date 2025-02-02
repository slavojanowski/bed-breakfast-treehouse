import PropTypes from "prop-types";
import SentMessageCard from "../../contact/components/SentMessageCard";
import { useEffect, useState } from "react";

const SentMessagesDataTab = () => {
  const [storedMessages, setStoredMessages] = useState([]);

  useEffect(() => {
    const messages = JSON.parse(localStorage.getItem("sentMessage") || "[]");
    setStoredMessages(messages.reverse());
  }, []);

  const deleteMessageHandler = (messageToDelete) => {
    const updatedMessagesList = storedMessages.filter(
      (message) => message !== messageToDelete
    );
    setStoredMessages(updatedMessagesList);
    localStorage.setItem("sentMessage", JSON.stringify(updatedMessagesList));
  };

  return (
    <div className="sent-messages-archive">
      <h3>Historia Twoich wysłanych wiadomości</h3>

      {storedMessages.length > 0 ? (
        storedMessages.map((message, index) => (
          <SentMessageCard
            key={index}
            message={message}
            deleteMessageHandler={() => deleteMessageHandler(message)}
          />
        ))
      ) : (
        <div className="empty-archive-info">
          <h5>Obecnie nie masz żadnych wysłanych wiadomości.</h5>
        </div>
      )}
    </div>
  );
};

SentMessagesDataTab.propTypes = {
  plansList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default SentMessagesDataTab;
