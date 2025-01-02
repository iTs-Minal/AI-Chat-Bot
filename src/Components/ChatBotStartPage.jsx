import "./ChatBotStartPage.css";

const ChatBotStartPage = ({onStartChat}) => {
  return (
    <div className="start-page">
      <button className="start-page-btn" onClick={onStartChat}>AI Chat Bot</button>
    </div>
  );
};

export default ChatBotStartPage;
