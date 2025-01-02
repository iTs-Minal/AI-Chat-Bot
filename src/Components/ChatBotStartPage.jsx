import "./ChatBotStartPage.css";
import PropTypes from "prop-types";

const ChatBotStartPage = ({onStartChat}) => {
  return (
    <div className="start-page">
      <button className="start-page-btn" onClick={onStartChat}>AI Chat Bot</button>
    </div>
  );
};

ChatBotStartPage.propTypes = {
  onStartChat: PropTypes.func.isRequired,
};

export default ChatBotStartPage;
